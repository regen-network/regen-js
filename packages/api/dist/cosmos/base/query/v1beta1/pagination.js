"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageResponse = exports.PageRequest = void 0;
//@ts-nocheck
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
function createBasePageRequest() {
    return {
        key: new Uint8Array(),
        offset: BigInt(0),
        limit: BigInt(0),
        countTotal: false,
        reverse: false
    };
}
exports.PageRequest = {
    typeUrl: "/cosmos.base.query.v1beta1.PageRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.offset !== BigInt(0)) {
            writer.uint32(16).uint64(message.offset);
        }
        if (message.limit !== BigInt(0)) {
            writer.uint32(24).uint64(message.limit);
        }
        if (message.countTotal === true) {
            writer.uint32(32).bool(message.countTotal);
        }
        if (message.reverse === true) {
            writer.uint32(40).bool(message.reverse);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.offset = reader.uint64();
                    break;
                case 3:
                    message.limit = reader.uint64();
                    break;
                case 4:
                    message.countTotal = reader.bool();
                    break;
                case 5:
                    message.reverse = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePageRequest();
        message.key = object.key ?? new Uint8Array();
        message.offset = object.offset !== undefined && object.offset !== null ? BigInt(object.offset.toString()) : BigInt(0);
        message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
        message.countTotal = object.countTotal ?? false;
        message.reverse = object.reverse ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBasePageRequest();
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        if (object.offset !== undefined && object.offset !== null) {
            message.offset = BigInt(object.offset);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = BigInt(object.limit);
        }
        if (object.count_total !== undefined && object.count_total !== null) {
            message.countTotal = object.count_total;
        }
        if (object.reverse !== undefined && object.reverse !== null) {
            message.reverse = object.reverse;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.offset = message.offset !== BigInt(0) ? message.offset.toString() : undefined;
        obj.limit = message.limit !== BigInt(0) ? message.limit.toString() : undefined;
        obj.count_total = message.countTotal === false ? undefined : message.countTotal;
        obj.reverse = message.reverse === false ? undefined : message.reverse;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PageRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PageRequest",
            value: exports.PageRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PageRequest.decode(message.value);
    },
    toProto(message) {
        return exports.PageRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.query.v1beta1.PageRequest",
            value: exports.PageRequest.encode(message).finish()
        };
    }
};
function createBasePageResponse() {
    return {
        nextKey: new Uint8Array(),
        total: BigInt(0)
    };
}
exports.PageResponse = {
    typeUrl: "/cosmos.base.query.v1beta1.PageResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nextKey.length !== 0) {
            writer.uint32(10).bytes(message.nextKey);
        }
        if (message.total !== BigInt(0)) {
            writer.uint32(16).uint64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextKey = reader.bytes();
                    break;
                case 2:
                    message.total = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePageResponse();
        message.nextKey = object.nextKey ?? new Uint8Array();
        message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePageResponse();
        if (object.next_key !== undefined && object.next_key !== null) {
            message.nextKey = (0, helpers_1.bytesFromBase64)(object.next_key);
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = BigInt(object.total);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.next_key = message.nextKey ? (0, helpers_1.base64FromBytes)(message.nextKey) : undefined;
        obj.total = message.total !== BigInt(0) ? message.total.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PageResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PageResponse",
            value: exports.PageResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PageResponse.decode(message.value);
    },
    toProto(message) {
        return exports.PageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.query.v1beta1.PageResponse",
            value: exports.PageResponse.encode(message).finish()
        };
    }
};
