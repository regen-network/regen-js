"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
//@ts-nocheck
const binary_1 = require("../../../../binary");
function createBaseModule() {
    return {};
}
exports.Module = {
    typeUrl: "/cosmos.app.module.v1alpha1.Module",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseModule();
        return message;
    },
    fromAmino(_) {
        const message = createBaseModule();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Module.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Module",
            value: exports.Module.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Module.decode(message.value);
    },
    toProto(message) {
        return exports.Module.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.module.v1alpha1.Module",
            value: exports.Module.encode(message).finish()
        };
    }
};
