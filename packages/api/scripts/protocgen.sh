#!/usr/bin/env bash

set -eo pipefail

TS_PROTO_BIN=./node_modules/.bin/protoc-gen-ts_proto
# TS_PROTO_BIN=../../../ts-proto/protoc-gen-ts_proto
PROTO_DIRS=$(find ./proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)

# Generate TS files with ts-proto
for dir in $PROTO_DIRS; do
  buf protoc \
    -I "proto" \
    -I "third_party/proto" \
    --plugin=${TS_PROTO_BIN} \
    --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true,outputTypeRegistry=true" \
    --ts_proto_out=src/generated \
    $(find "${dir}" -maxdepth 1 -name '*.proto')
done
