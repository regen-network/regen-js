#!/bin/bash
set -e

GENERATED_DIR="./src/generated"

proto_files=$(find ./proto -path -prune -o -name '*.proto')

rm -rf $GENERATED_DIR
mkdir $GENERATED_DIR

# Can't use --sparse for some reason. Seems related to https://github.com/protobufjs/protobuf.js/issues/1165
yarn pbjs \
  -t static-module \
  -w es6 \
  -o "$GENERATED_DIR/protoImpl.js" \
  $proto_files

yarn pbts -o "$GENERATED_DIR/protoImpl.ts" "$GENERATED_DIR/protoImpl.js"
