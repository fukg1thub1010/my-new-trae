# Add a target that builds and installs a POD file as a man page

set(POD_BUILD "${CMAKE_SOURCE_DIR}/share/doc/build_pod.cmake")
set(POD_DEPENDS
  "${CMAKE_SOURCE_DIR}/share/doc/pharos_env.pod"
  "${CMAKE_SOURCE_DIR}/share/doc/pharos_files.pod"
  "${CMAKE_SOURCE_DIR}/share/doc/pharos_opts.pod"
  "${CMAKE_SOURCE_DIR}/share/doc/pharos_options.pod")

function(build_pharos_pod target podfile section)
  get_filename_component(PODFILE "${podfile}" NAME)
  string(REGEX REPLACE "\\.pod$" "" BASENAME "${PODFILE}")
  if(PODFILE STREQUAL podfile)
    set(podfile "${CMAKE_CURRENT_SOURCE_DIR}/${PODFILE}")
  endif()
  set(BUILT_POD "${CMAKE_CURRENT_BINARY_DIR}/${PODFILE}")
  set(POD_MAN "${CMAKE_CURRENT_BINARY_DIR}/${BASENAME}.${section}")
  add_custom_command(
    OUTPUT "${BUILT_POD}"
    COMMAND ${CMAKE_COMMAND} "-DPOD_DIR=${CMAKE_SOURCE_DIR}/share/doc"
    "-DPOD_SOURCE=${podfile}"
    "-DPOD_DEST=${BUILT_POD}" -P "${POD_BUILD}"
    MAIN_DEPENDENCY "${podfile}"
    DEPENDS "${POD_BUILD}" ${POD_DEPENDS})
  add_custom_command(
    OUTPUT "${POD_MAN}"
    COMMAND pod2man --section=${section} --release=Pharos --center="Pharos Documentation" "${BUILT_POD}" "${POD_MAN}"
    MAIN_DEPENDENCY "${BUILT_POD}")
  add_custom_target(${target} ALL DEPENDS "${POD_MAN}")
  install(
    FILES "${POD_MAN}"
    DESTINATION share/man/man${section})
endFunction()
