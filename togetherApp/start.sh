#!/bin/bash

commands=("$@")

for arg in "${commands[@]}"; do
   if [ "$arg" = "hello_world" ]; then
      echo "hello world"
   else
      echo "no hello world"
   fi
done
