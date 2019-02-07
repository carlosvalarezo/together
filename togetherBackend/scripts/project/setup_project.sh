#!/bin/sh

npm install
# ./node_modules/.bin/eslint --config /code/.eslintrc
./node_modules/mocha/bin/mocha /code/test/**