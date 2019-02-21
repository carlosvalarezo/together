#!/bin/bash

params=("$@")

get_command_line_params () {
 for arg in "${params[@]}"; do
   if [ "$arg" = "run_ios" ]; then
      react-native run-ios
   elif [ "$arg" = "start_ios_project" ]; then
           npm install
           react-native link
           react-native run-ios
   else
      echo "command not found"
   fi
 done
}

get_command_line_params

