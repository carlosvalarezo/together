#!/bin/bash

commands=("$@")

for arg in "${commands[@]}"; do
   if [ "$arg" = "run_ios" ]; then
      react-native run-ios
   else
      echo "command not found"
   fi
done
