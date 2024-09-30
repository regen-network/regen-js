"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyAminoPubKey = void 0;
//@ts-nocheck
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
function createBaseLegacyAminoPubKey() {
    return {
        threshold: 0,
        publicKeys: []
    };
}
exports.LegacyAminoPubKey = {
    typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.threshold !== 0) {
            writer.uint32(8).uint32(message.threshold);
        }
        for (const v of message.publicKeys) {
            any_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLegacyAminoPubKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threshold = reader.uint32();
                    break;
                case 2:
                    message.publicKeys.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLegacyAminoPubKey();
        message.threshold = object.threshold ?? 0;
        message.publicKeys = object.publicKeys?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseLegacyAminoPubKey();
        if (object.threshold !== undefined && object.threshold !== null) {
            message.threshold = object.threshold;
        }
        message.publicKeys = object.public_keys?.map(e => any_1.Any.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.threshold = message.threshold === 0 ? undefined : message.threshold;
        if (message.publicKeys) {
            obj.public_keys = message.publicKeys.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.public_keys = message.publicKeys;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LegacyAminoPubKey.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/LegacyAminoPubKey",
            value: exports.LegacyAminoPubKey.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.LegacyAminoPubKey.decode(message.value);
    },
    toProto(message) {
        return exports.LegacyAminoPubKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
            value: exports.LegacyAminoPubKey.encode(message).finish()
        };
    }
};
