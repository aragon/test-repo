#!/bin/sh
mkdir -p dist
cp index.html dist/index.html
sed -i "s|__BUILD_VAR__|${BUILD_VAR:-not set}|g" dist/index.html
cp -r functions dist/functions
