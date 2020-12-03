#!/usr/bin/env bash

set -eo pipefail

TS_PROTO_BIN=./node_modules/.bin/protoc-gen-ts_proto
PROTO_DIRS=$(find ./proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
GENERATED_DIR=./src

rm -rf $GENERATED_DIR
mkdir $GENERATED_DIR

# Generate TS files with ts-proto
for dir in $PROTO_DIRS; do
  protoc \
    -I "proto" \
    --plugin=${TS_PROTO_BIN} \
    --ts_proto_opt=useOptionals=true \
    --ts_proto_opt=forceLong=long \
    --ts_proto_out=$GENERATED_DIR \
    $(find "${dir}" -maxdepth 1 -name '*.proto')
done
