// Copyright 2015-2025 Carnegie Mellon University.  See LICENSE file for terms.

#include <libpharos/descriptors.hpp>
#include <libpharos/misc.hpp>
#include <libpharos/util.hpp>
#include <libpharos/riscops.hpp>
#include <libpharos/options.hpp>
#include <libpharos/pdg.hpp>
#include <libpharos/masm.hpp>
#include <libpharos/bua.hpp>

#include <Rose/BinaryAnalysis/Architecture/X86.h>

#include <boost/algorithm/string.hpp>
#include <boost/filesystem.hpp>

#define DEFAULT_MIN_INSTRUCTIONS 5
#define DEFAULT_MAX_BYTES 10000

using namespace pharos;

namespace {

namespace bf = boost::filesystem;

typedef std::vector<std::string> strvec_t;

ProgOptDesc fn2yara_options() {
  namespace po = boost::program_options;

  ProgOptDesc fn2yaraopt("fn2yara 0.06 Options");
  fn2yaraopt.add_options()
    ("output-filename,o", po::value<bf::path>(),
     "output filename (defaults to the filename suffixed by .yara")
    ("min-instructions,m",
     po::value<size_t>()->default_value(DEFAULT_MIN_INSTRUCTIONS),
     ("Minimum number of instructions needed for an instruction block "
      "to be output for a function"))
    ("max-string-bytes,M",
     po::value<size_t>()->default_value(DEFAULT_MAX_BYTES),
     ("Maximum size allowed for a yara string (in bytes) "
      "to be output for a function (no rule generated if any string exceeds this)"))
    ("basic-blocks,B", po::bool_switch(),
     "Split rules strictly by basic blocks")
    ("comparison,c", po::bool_switch(),
     "Output a yara single rule that matches all instruction blocks found in the program")
    ("threshold,T", po::value<double>()->default_value(100.0),
     "A percentage threshold for the number of strings that need to match in any given rule")
    ("prefix,p", po::value<std::string>(),
     "Prefix for rule names")
    ("address-only,a", po::bool_switch(),
     ("Only output addresses of candidate functions, rather than rules.  "
      "Not in YARA format."))
    ("include-thunks", po::bool_switch(), "include thunks in output")
    ;
  return fn2yaraopt;
}

class FnToYaraAnalyzer : public BottomUpAnalyzer {
 private:
  typedef SgUnsignedCharList::const_iterator iter_t;

  // The program being analyzed
  const DescriptorSet& program;

  // Name of file being analyzed
  std::string basename;

  // Prefix of file names
  std::string prefix;

  // Whether to include thunks
  bool include_thunks;

  // Location of file being analyzed
  std::string outname;

  // Output stream
  std::ostream *out;

  // Output file
  std::ofstream *outfile = nullptr;

  // Function count;
  size_t func_count = 0;

  // Rule count;
  size_t rule_count = 0;

  // Minimum number of instructions in a function before we consider emitting a rule
  size_t minimum_instr;

  // Maximum number of bytes in a string for a "legal" rule
  size_t maximum_str_bytes;

  // Whether to operate in comparison mode
  bool compare_mode = false;

  // Whether to coalesce contiguous basic blocks
  bool coalesce_blocks = true;

  // Whether to only output addresses
  bool address_only = false;

  // Percentage that have to match in a rule
  double match_threshold;

  // to prevent dupe funcs from being processed (partitioner2 bug?)
  std::set<rose_addr_t> addrs_processed;

  unsigned int dupe_count;

  // Count of function strings
  int string_count = 0;

  struct RuleString {
    std::string addr;
    std::string match;
    size_t count; // instructions
    size_t byte_count; // bytes

    RuleString(rose_addr_t addr_, const std::string & match_, size_t count_, size_t byte_count_)
      : match(match_), count(count_), byte_count(byte_count_)
    {
      std::ostringstream str;
      str << std::setw(8) << std::setfill('0') << std::hex << addr_;
      addr = str.str();
    }
  };

  // Represents a block of contiguous instructions (note that the contiguousness really isn't
  // guaranteed, as it all depends on the order we're given them, probably better to use
  // something like the Sawyer AddressInterval and AddressIntervalSet to try and do this).  And
  // in fact using FunctionDescriptor::get_insns_addr_order() gave back the "wrong" answers
  // frequently until recently...
  class Block {
   private:
    typedef std::vector<rose_addr_t> vec_t;
    typedef vec_t::const_iterator    it_t;

    rose_addr_t addr = 0;
    size_t size = 0;
    vec_t addresses;
    bool end_block = false;
    const bool bblock_split;

   public:
    Block(bool _bblock_split = false) : bblock_split(_bblock_split) {}

    bool add(const SgAsmInstruction *insn) {
      rose_addr_t a = insn->get_address();
      size_t      s = insn->get_size();
      if (addresses.empty()) {
        addr = a;
      } else if (end_block || addr + size != a) {
        return false;
      }
      if (bblock_split && insn_is_control_flow(insn)) {
        end_block = true;
      }
      addresses.push_back(a);
      size += s;
      return true;
    }

    bool empty() const {
      return addresses.empty();
    }

    bool contains(rose_addr_t a) const {
      // Optimization for incremental containment
      if (a < addr || ((int64_t)a - (int64_t)addr) >= (ssize_t)size) {
        return false;
      }
      return std::binary_search(addresses.begin(), addresses.end(), a);
    }

    rose_addr_t get_addr() const {
      return addr;
    }
  };

  // Visitor that keeps track of potential address candidates
  struct IntegerSearcher : public AstSimpleProcessing {
    std::vector<uint32_t> candidates;
    const DescriptorSet& program;

    IntegerSearcher(const DescriptorSet& _program) : program(_program) { }

    void visit(SgNode *node) override {
      const SgAsmIntegerValueExpression *intexp =
        isSgAsmIntegerValueExpression(node);
      if (intexp) {
        uint64_t val = intexp->get_value();
        if (program.memory.is_mapped(rose_addr_t(val))) {
          // TODO: Make the following assert a warning
          assert((val >> 32) == 0); // 32-bit address
          candidates.push_back(val);
        }
      }
    }
  };

  int output_strings(const std::vector<RuleString> &matches,
                     const std::string & prefix_str)
  {
    int count = 0;
    for (const RuleString &match : matches) {
      if (match.count >= minimum_instr || match.byte_count > maximum_str_bytes) {
        *out << "    // string $" << prefix_str << "_" << match.addr << " contains "
             << match.byte_count << " bytes and " << match.count << " instructions\n";
        *out << "    $" << prefix_str << "_" << match.addr << " = " << match.match << '\n';
        ++string_count;
        ++count;
      } else {
        if (match.count >= minimum_instr) {
          // GINFO requires --verbose>=2, these are actually very weak warnings?
          GINFO << "rule for addr " << match.addr << " min instr not met (" << match.count
                << "), skipping rule string generation\n";
          *out << "    // $" << prefix_str << "_" << match.addr
               << " elided due to too few instructions (" << match.count << ")\n";
        }
        else {
          // GINFO requires --verbose>=2, these are actually very weak warnings?
          GINFO << "rule for addr " << match.addr << " string too big ("
                << match.byte_count << "), skipping rule string generation\n";
          *out << "    // $" << prefix_str << "_" << match.addr
               << " elided due to too many bytes (" << match.byte_count << ")\n";
        }
      }
    }
    return count;
  }

  // Output the matches as a Yara rule
  bool output_rule(const FunctionDescriptor *fd,
                   const std::vector<RuleString> &matches)
  {
    bool output = false;
    for (const RuleString &match : matches) {
      if (match.count >= minimum_instr) {
        output = true;
        break;
      }
    }
    for (const RuleString &match : matches) {
      if (match.byte_count > maximum_str_bytes) {
        // GINFO requires --verbose>=2, these are actually very weak warnings?
        GINFO << "rule for func " << fd->address_string() << " addr " << match.addr
              << " string too big (" << match.byte_count << "), skipping rule generation"
              << LEND;
        output = false;
        break;
      }
    }
    if (!output) {
      return false;
    }

    if (address_only) {
      *out << boost::str(boost::format("0x%08X") % fd->get_address())
           << LEND;
      return true;
    }

    std::string name = boost::str(boost::format("Func_%s_%08X") % prefix
                                  % fd->get_address());
    // header
    *out << "rule " << name << "\n"
         << "{\n"
         << "  strings:\n";

    // origin information
    boost::gregorian::date d(boost::gregorian::day_clock::local_day());
    *out << "    // File " << basename << " @ " << fd->address_string()
         << boost::str(boost::format(" (%d-%02d-%02d)\n") % d.year() % d.month() % d.day());

    // strings
    int count = output_strings(matches, prefix);

    // condition
    *out << "  condition:\n"
         << "    ";
    if (match_threshold < 100.0) {
      auto number = int(count * match_threshold / 100.0);
      if (number < 1) {
        number = 1;
      }
      *out << number;
    } else {
      *out << "all";
    }
    *out << " of them\n";

    // footer
    *out << '}' << std::endl;

    return true;
  }

 public:
  FnToYaraAnalyzer(DescriptorSet& ds_, ProgOptVarMap& vm_)
    : BottomUpAnalyzer(ds_, vm_), program(ds_), dupe_count(0)
  {
    include_thunks = vm_["include-thunks"].as<bool>();
    address_only = vm_["address-only"].as<bool>();
    std::string filename = vm_["file"].as<Specimens>().name();
    size_t slash = filename.find_last_of('/');
    if (slash == std::string::npos) {
      slash = 0;
    } else {
      ++slash;
    }
    basename = filename.substr(slash);
    if (vm_.count("output-filename")) {
      outname = vm_["output-filename"].as<bf::path>().native();
    } else {
      outname = basename + ".yara";
    }
    minimum_instr = vm_["min-instructions"].as<size_t>();
    maximum_str_bytes = vm_["max-string-bytes"].as<size_t>();
    match_threshold = vm_["threshold"].as<double>();
    if (match_threshold <= 0.0 || match_threshold > 100.0) {
      throw std::runtime_error("threshold option must be between 0 and 100");
    }
    compare_mode = vm_["comparison"].as<bool>();
    coalesce_blocks = !vm_["basic-blocks"].as<bool>();
    if (vm_.count("prefix")) {
      prefix = vm_["prefix"].as<std::string>();
      boost::algorithm::trim(prefix);
      if (prefix.empty()) {
        throw std::runtime_error("prefix must be non-empty");
      }
      auto bad = std::find_if_not(
        prefix.begin(), prefix.end(),
        [](char c){ return c == '_' || std::isalnum(c);});
      if (bad != prefix.end()) {
        throw std::runtime_error(
          boost::str(boost::format("illegal character '%c' in prefix") % *bad));
      }
      if (isdigit(prefix[0])) {
        throw std::runtime_error("first character of prefix may not be numeric");
      }
    } else {
      prefix = "md5_" + get_file_md5(filename.c_str()).str();
    }
  }

  ~FnToYaraAnalyzer() {
    delete outfile;
  }

  void start() override {
    if (address_only) {
      out = &std::cout;
    } else {
      outfile = new std::ofstream(outname);
      out = outfile;
    }
    if (compare_mode && !address_only) {
      std::string name(basename);
      std::transform(name.begin(), name.end(), name.begin(),
                     [](char c) { return std::isalnum(c) ? c : '_'; });
      if (std::isdigit(name[0])) {
        name = "FILE_" + name;
      }
      *out << "rule " << prefix << '_' << (int)match_threshold
           << "_percent\n{\n  strings:" << std::endl;
    }
  }

  void finish() override {
    if (address_only) {
      //*out << "Considered " << rule_count << " functions" << LEND;
      *out << "Considered " << func_count << " functions" << LEND;
    } else if (compare_mode) {
      *out << "\n  condition:\n    ";
      if (match_threshold < 100.0) {
        auto number = int(string_count * match_threshold / 100.0);
        if (number < 1) {
          number = 1;
        }
        *out << number;
      } else {
        *out << "all";
      }

      *out << " of them\n}" << std::endl;
      GINFO << "Examined " << func_count << " functions" << LEND;
      GINFO << "Wrote " << string_count << " strings to " << outname << LEND;
    } else {
      GINFO << "Examined " << func_count << " functions" << LEND;
      GINFO << "Wrote " << rule_count << " rules to " << outname << LEND;
    }
    if (dupe_count)
    {
      GERROR << "Note, " << dupe_count << " duplicate addr funcs were detected "
             << "and handled, this should never happen" << LEND;
    }
    if (outfile) {
      outfile->close();
    }
  }

  // Function visitor (called once per function)
  void visit(FunctionDescriptor *fd) override
  {
    // Ignore thunks
    if (!include_thunks && fd->is_thunk()) {
      return;
    }

    if (addrs_processed.count(fd->get_address()))
    {
      GERROR << "duplicate function same address (" << fd->address_string()
             << ") detected, should never happen, skipping" << LEND;
      ++dupe_count;
      return;
    }
    addrs_processed.insert(fd->get_address());

    InsnVector insns = fd->get_insns_addr_order();
    GDEBUG << "(Function " << fd->address_string() << ")" << LEND;
    ++func_count;

    // Make a list of contiguous instruction blocks in the function (relies on instructions in
    // address order to work correctly)
    std::vector<Block> blocks;
    assert(!insns.empty());
    blocks.push_back(Block(!coalesce_blocks));
    Block *b = &blocks.back();
    for (const SgAsmInstruction *insn : insns) {
      if (!b->add(insn)) {
        blocks.push_back(Block(!coalesce_blocks));
        b = &blocks.back();
        b->add(insn);
      }
    }

    // Initialize the match string
    std::stringstream match;
    std::vector<RuleString> matches;
    match << "{ ";

    // Loop over instructions
    size_t instr_count = 0;
    size_t byte_count = 0;
    std::vector<Block>::const_iterator cblock = blocks.begin();
    for (SgAsmInstruction *insn : insns) {
      rose_addr_t addr = insn->get_address();

      // Iterate to next block, if necessary
      if (!cblock->contains(addr)) {
        // Close the current match string, and start a new one
        match << '}';
        matches.push_back(RuleString(cblock->get_addr(), match.str(),
                                     instr_count, byte_count));
        instr_count = 0;
        byte_count = 0;
        match.clear();
        match.str("");
        match << "{ ";

        // Next block
        ++cblock;
        assert(cblock->contains(addr));
      }
      ++instr_count;

      // Get the raw bytes, and a vector of bool as to which bytes to wildcard away
      const SgUnsignedCharList &bytes = insn->get_rawBytes();
      byte_count += bytes.size();

      //GDEBUG << "  Instr: " << insn->get_mnemonic() << LEND;
      GDEBUG << "  Instr: " << debug_instruction(insn) << LEND;
      //GDEBUG << "  addr: " << insn->get_address() << LEND;
      GDEBUG << "  bytes (" << bytes.size() << ", tot " << byte_count << "):";
      for (unsigned char uc: bytes)
      {
        GDEBUG << " " << std::hex << std::setw(2) << std::setfill('0') << (unsigned int)uc << std::dec;
      }
      GDEBUG << LEND;

      AddressIntervalSet chunks = fd->get_address_intervals();
      std::vector<uint8_t> wildcard = pic_insn(program, chunks, insn, 4096);

      // Write out match data for instruction
      for (size_t i = 0; i < bytes.size(); ++i) {
        if (wildcard[i] == 0xff) {
          match << std::setfill('0') << std::hex << std::setw(2) << int(bytes[i]) << ' ';
        } else {
          match << "?? ";
        }
      }
    }

    match << '}';
    matches.push_back(RuleString(cblock->get_addr(), match.str(), instr_count, byte_count));

    if (compare_mode) {
      output_strings(matches, "Match");
    } else {
      // Output the rule
      if (output_rule(fd, matches)) {
        ++rule_count;
      }
    }
  }
};

#if 0
// useful for debugging
void myterminate() {
  std::cerr << "myterminate called" << LEND;
  std::abort();
}

// useful for debugging
void myunexpected() {
  std::cerr << "unexpected exception encountered" << LEND;
  std::abort();
}

void terminate_no_abort() {
  std::cerr << "terminate called, likely unhandled exception at cleanup, ignoring for now, bug will be fixed eventually" << LEND;
  _exit(99);
}
#endif

int fn2yara_main(int argc, char **argv) {
  //std::set_terminate(myterminate);
  //std::set_unexpected(myunexpected);
  // Handle options
  ProgOptDesc f2yod = fn2yara_options();
  f2yod.add(cert_standard_options());
  ProgOptVarMap vm = parse_cert_options(argc, argv, f2yod);

  // Find calls, functions, and imports.
  DescriptorSet ds(vm);
  // Resolve imports, load API data, etc.
  // ds.resolve_imports();

  auto *arch = &*ds.get_architecture();
  if (!dynamic_cast<Rose::BinaryAnalysis::Architecture::X86 const *>(arch)) {
    GWARN << "Position independent code (PIC) hasing is not supported for the "
          << "'" << ds.get_arch_name() << "' architecture." << LEND;
    GWARN << "As a consequence, generated signatures will not have wildcards "
          << "reducing the effectiveness of this tool." << LEND;
  }

  FnToYaraAnalyzer analyzer(ds, vm);
  analyzer.analyze();

  OINFO << "Complete." << LEND;
  return EXIT_SUCCESS;
}
} // anonymous namespace

int main(int argc, char **argv)
{
  return pharos_main("FN2Y", fn2yara_main, argc, argv);
}

/* Local Variables:   */
/* mode: c++          */
/* fill-column:    95 */
/* comment-column: 0  */
/* End:               */
