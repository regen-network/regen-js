"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivKey = exports.PubKey = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBasePubKey() {
    return {
        key: new Uint8Array()
    };
}
exports.PubKey = {
    typeUrl: "/cosmos.crypto.secp256k1.PubKey",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePubKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePubKey();
        message.key = object.key ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePubKey();
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PubKey.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PubKey",
            value: exports.PubKey.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PubKey.decode(message.value);
    },
    toProto(message) {
        return exports.PubKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.secp256k1.PubKey",
            value: exports.PubKey.encode(message).finish()
        };
    }
};
function createBasePrivKey() {
    return {
        key: new Uint8Array()
    };
}
exports.PrivKey = {
    typeUrl: "/cosmos.crypto.secp256k1.PrivKey",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrivKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePrivKey();
        message.key = object.key ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePrivKey();
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PrivKey.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PrivKey",
            value: exports.PrivKey.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PrivKey.decode(message.value);
    },
    toProto(message) {
        return exports.PrivKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.secp256k1.PrivKey",
            value: exports.PrivKey.encode(message).finish()
        };
    }
};
