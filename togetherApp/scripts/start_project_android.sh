#!/bin/bash

npm install
brew install watchman
npm install -g react-native-cli
react-native link
react-native run-android
