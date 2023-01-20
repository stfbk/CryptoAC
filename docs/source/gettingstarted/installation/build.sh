#!/bin/bash

echo "built_all_start_of_script"

for d in */ ; do
  if [ -z "$1" ] || [[ "$1" == *"$d"* ]]; then
    echo "Building $d"
    cd $d
    chmod +x "./build.sh" 
    "./build.sh"
    cd ..
  fi
done

echo "built_all_end_of_script"
