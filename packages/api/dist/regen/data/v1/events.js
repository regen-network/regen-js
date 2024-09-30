"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRegisterResolver = exports.EventDefineResolver = exports.EventAttest = exports.EventAnchor = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
function createBaseEventAnchor() {
    return {
        iri: ""
    };
}
exports.EventAnchor = {
    typeUrl: "/regen.data.v1.EventAnchor",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAnchor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventAnchor();
        message.iri = object.iri ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventAnchor();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventAnchor.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventAnchor.decode(message.value);
    },
    toProto(message) {
        return exports.EventAnchor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.EventAnchor",
            value: exports.EventAnchor.encode(message).finish()
        };
    }
};
function createBaseEventAttest() {
    return {
        iri: "",
        attestor: ""
    };
}
exports.EventAttest = {
    typeUrl: "/regen.data.v1.EventAttest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.iri !== "") {
            writer.uint32(10).string(message.iri);
        }
        if (message.attestor !== "") {
            writer.uint32(18).string(message.attestor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAttest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.iri = reader.string();
                    break;
                case 2:
                    message.attestor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventAttest();
        message.iri = object.iri ?? "";
        message.attestor = object.attestor ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventAttest();
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        if (object.attestor !== undefined && object.attestor !== null) {
            message.attestor = object.attestor;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.iri = message.iri === "" ? undefined : message.iri;
        obj.attestor = message.attestor === "" ? undefined : message.attestor;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventAttest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventAttest.decode(message.value);
    },
    toProto(message) {
        return exports.EventAttest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.EventAttest",
            value: exports.EventAttest.encode(message).finish()
        };
    }
};
function createBaseEventDefineResolver() {
    return {
        id: BigInt(0)
    };
}
exports.EventDefineResolver = {
    typeUrl: "/regen.data.v1.EventDefineResolver",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventDefineResolver();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventDefineResolver();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventDefineResolver();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventDefineResolver.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventDefineResolver.decode(message.value);
    },
    toProto(message) {
        return exports.EventDefineResolver.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.EventDefineResolver",
            value: exports.EventDefineResolver.encode(message).finish()
        };
    }
};
function createBaseEventRegisterResolver() {
    return {
        id: BigInt(0),
        iri: ""
    };
}
exports.EventRegisterResolver = {
    typeUrl: "/regen.data.v1.EventRegisterResolver",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.iri !== "") {
            writer.uint32(18).string(message.iri);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventRegisterResolver();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.iri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventRegisterResolver();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.iri = object.iri ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventRegisterResolver();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.iri !== undefined && object.iri !== null) {
            message.iri = object.iri;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
        obj.iri = message.iri === "" ? undefined : message.iri;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventRegisterResolver.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventRegisterResolver.decode(message.value);
    },
    toProto(message) {
        return exports.EventRegisterResolver.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.data.v1.EventRegisterResolver",
            value: exports.EventRegisterResolver.encode(message).finish()
        };
    }
};
