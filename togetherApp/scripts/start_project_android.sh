#!/bin/bash

npm install
brew install watchman
npm install -g react-native-cli
cd ..
react-native link
react-native run-android
