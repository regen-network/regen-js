#!/bin/bash
set -e

GENERATED_DIR="./src/generated"
PROTO_FILE=$(find ./proto -path -prune -o -name '*.proto')

rm -rf $GENERATED_DIR
mkdir $GENERATED_DIR

# Can't use --sparse for some reason. Seems related to https://github.com/protobufjs/protobuf.js/issues/1165
yarn pbjs \
  -t static-module \
  -w es6 \
  -o "$GENERATED_DIR/protoImpl.js" \
  $PROTO_FILE

yarn pbts -o "$GENERATED_DIR/protoImpl.d.ts" -n protoImpl "$GENERATED_DIR/protoImpl.js"
