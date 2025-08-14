// Copyright 2015-2016 Carnegie Mellon University.  See LICENSE file for terms.

#ifndef Pharos_Enums_H
#define Pharos_Enums_H

#include <iostream>
#include <locale>
#include <sstream>
#include <boost/algorithm/string.hpp>

#include "util.hpp"

// mwd: Consider replacing this with better-enums.  http://aantron.github.io/better-enums/

namespace pharos {

// This is the mechanism that allows the labels to be associated with a specific enum through a
// template.  See enumtest.cpp for example usage.
template<typename T>
struct EnumStrings
{
  static char const* data[];
};

// This routine converts an enum into a string using the appropriate (templated) label array.
// It's about as efficient as you can get, but it requires that your enums have no assigned
// values.  This means that the enums start at value zero and increases monotonically.
template<typename T> std::string Enum2Str(T value) {
  return  EnumStrings<T>::data[static_cast< ssize_t >(value)];
}

// This routine attempts to convert a case-insensitive string into an enum value by looking it
// up in the list of labels (which are also treated case insensitively).  If the value is not
// found, the provided default value is returned.  This routine is far from optimal, and has
// performance of O(n*m), where n is number of labels and m is the average length of a label.
// A better implementation would probably be to pre-compute all of the lowercase values, and to
// build a pair maps for O(log(n)) lookup.  Our enums are small, so don't prematurely optimize.
template<typename T>
T Str2Enum(const std::string & value, T default_value) noexcept {
  // Get a pointer to our templated array of labels.
  const char** label = EnumStrings<T>::data;

  // Determine how many labels there are.
  constexpr size_t maximum = sizeof(EnumStrings<T>::data) / sizeof(char *);

  // Walk the labels, looking for the provided label.
  bool found = false;
  size_t i;
  for (i = 0; i < maximum; i++) {
    // Lowercase the label as well.
    if (boost::iequals(label[i], value)) {
      found = true;
      break;
    }
  }

  // If the value was not found in the list of labels,
  // return the default value provided by the caller
  if (!found) return default_value;

  // Otherwise return the matched value.
  return T(i);
}

// This routine attempts to convert a case-insensitive string into an enum value by looking it
// up in the list of labels (which are also treated case insensitively).  If the value is not
// found, a runtime_error is thrown.
template<typename T>
T Str2Enum(const std::string & value)
{
  // Get a pointer to our templated array of labels.
  const char** label = EnumStrings<T>::data;

  // Determine how many labels there are.
  constexpr size_t maximum = sizeof(EnumStrings<T>::data) / sizeof(char *);

  // Walk the labels, looking for the provided label.
  bool found = false;
  size_t i;
  for (i = 0; i < maximum; i++) {
    if (boost::iequals(label[i], value)) {
      found = true;
      break;
    }
  }

  // If the value was not found in the list of labels,
  // return the default value provided by the caller
  if (!found) {
    std::ostringstream os;
    os << "Invalid enum value: " << value;
    throw std::runtime_error(os.str());
  }

  // Otherwise return the matched value.
  return static_cast<T>(i);
}

} // namespace pharos

#endif
/* Local Variables:   */
/* mode: c++          */
/* fill-column:    95 */
/* comment-column: 0  */
/* End:               */
