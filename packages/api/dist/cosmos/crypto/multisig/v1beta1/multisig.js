"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompactBitArray = exports.MultiSignature = void 0;
//@ts-nocheck
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
function createBaseMultiSignature() {
    return {
        signatures: []
    };
}
exports.MultiSignature = {
    typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.signatures) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMultiSignature();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatures.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMultiSignature();
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMultiSignature();
        message.signatures = object.signatures?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.signatures = message.signatures;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MultiSignature.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MultiSignature",
            value: exports.MultiSignature.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MultiSignature.decode(message.value);
    },
    toProto(message) {
        return exports.MultiSignature.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
            value: exports.MultiSignature.encode(message).finish()
        };
    }
};
function createBaseCompactBitArray() {
    return {
        extraBitsStored: 0,
        elems: new Uint8Array()
    };
}
exports.CompactBitArray = {
    typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.extraBitsStored !== 0) {
            writer.uint32(8).uint32(message.extraBitsStored);
        }
        if (message.elems.length !== 0) {
            writer.uint32(18).bytes(message.elems);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompactBitArray();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extraBitsStored = reader.uint32();
                    break;
                case 2:
                    message.elems = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCompactBitArray();
        message.extraBitsStored = object.extraBitsStored ?? 0;
        message.elems = object.elems ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseCompactBitArray();
        if (object.extra_bits_stored !== undefined && object.extra_bits_stored !== null) {
            message.extraBitsStored = object.extra_bits_stored;
        }
        if (object.elems !== undefined && object.elems !== null) {
            message.elems = (0, helpers_1.bytesFromBase64)(object.elems);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.extra_bits_stored = message.extraBitsStored === 0 ? undefined : message.extraBitsStored;
        obj.elems = message.elems ? (0, helpers_1.base64FromBytes)(message.elems) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CompactBitArray.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CompactBitArray",
            value: exports.CompactBitArray.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CompactBitArray.decode(message.value);
    },
    toProto(message) {
        return exports.CompactBitArray.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
            value: exports.CompactBitArray.encode(message).finish()
        };
    }
};
