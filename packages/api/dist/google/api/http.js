"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHttpPattern = exports.HttpRule = exports.Http = void 0;
//@ts-nocheck
const binary_1 = require("../../binary");
function createBaseHttp() {
    return {
        rules: [],
        fullyDecodeReservedExpansion: false
    };
}
exports.Http = {
    typeUrl: "/google.api.Http",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.rules) {
            exports.HttpRule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fullyDecodeReservedExpansion === true) {
            writer.uint32(16).bool(message.fullyDecodeReservedExpansion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHttp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rules.push(exports.HttpRule.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fullyDecodeReservedExpansion = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseHttp();
        message.rules = object.rules?.map(e => exports.HttpRule.fromPartial(e)) || [];
        message.fullyDecodeReservedExpansion = object.fullyDecodeReservedExpansion ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseHttp();
        message.rules = object.rules?.map(e => exports.HttpRule.fromAmino(e)) || [];
        if (object.fully_decode_reserved_expansion !== undefined && object.fully_decode_reserved_expansion !== null) {
            message.fullyDecodeReservedExpansion = object.fully_decode_reserved_expansion;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.rules) {
            obj.rules = message.rules.map(e => e ? exports.HttpRule.toAmino(e) : undefined);
        }
        else {
            obj.rules = message.rules;
        }
        obj.fully_decode_reserved_expansion = message.fullyDecodeReservedExpansion === false ? undefined : message.fullyDecodeReservedExpansion;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Http.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Http.decode(message.value);
    },
    toProto(message) {
        return exports.Http.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.api.Http",
            value: exports.Http.encode(message).finish()
        };
    }
};
function createBaseHttpRule() {
    return {
        selector: "",
        get: undefined,
        put: undefined,
        post: undefined,
        delete: undefined,
        patch: undefined,
        custom: undefined,
        body: "",
        responseBody: "",
        additionalBindings: []
    };
}
exports.HttpRule = {
    typeUrl: "/google.api.HttpRule",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        if (message.get !== undefined) {
            writer.uint32(18).string(message.get);
        }
        if (message.put !== undefined) {
            writer.uint32(26).string(message.put);
        }
        if (message.post !== undefined) {
            writer.uint32(34).string(message.post);
        }
        if (message.delete !== undefined) {
            writer.uint32(42).string(message.delete);
        }
        if (message.patch !== undefined) {
            writer.uint32(50).string(message.patch);
        }
        if (message.custom !== undefined) {
            exports.CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
        }
        if (message.body !== "") {
            writer.uint32(58).string(message.body);
        }
        if (message.responseBody !== "") {
            writer.uint32(98).string(message.responseBody);
        }
        for (const v of message.additionalBindings) {
            exports.HttpRule.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHttpRule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.selector = reader.string();
                    break;
                case 2:
                    message.get = reader.string();
                    break;
                case 3:
                    message.put = reader.string();
                    break;
                case 4:
                    message.post = reader.string();
                    break;
                case 5:
                    message.delete = reader.string();
                    break;
                case 6:
                    message.patch = reader.string();
                    break;
                case 8:
                    message.custom = exports.CustomHttpPattern.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.body = reader.string();
                    break;
                case 12:
                    message.responseBody = reader.string();
                    break;
                case 11:
                    message.additionalBindings.push(exports.HttpRule.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseHttpRule();
        message.selector = object.selector ?? "";
        message.get = object.get ?? undefined;
        message.put = object.put ?? undefined;
        message.post = object.post ?? undefined;
        message.delete = object.delete ?? undefined;
        message.patch = object.patch ?? undefined;
        message.custom = object.custom !== undefined && object.custom !== null ? exports.CustomHttpPattern.fromPartial(object.custom) : undefined;
        message.body = object.body ?? "";
        message.responseBody = object.responseBody ?? "";
        message.additionalBindings = object.additionalBindings?.map(e => exports.HttpRule.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseHttpRule();
        if (object.selector !== undefined && object.selector !== null) {
            message.selector = object.selector;
        }
        if (object.get !== undefined && object.get !== null) {
            message.get = object.get;
        }
        if (object.put !== undefined && object.put !== null) {
            message.put = object.put;
        }
        if (object.post !== undefined && object.post !== null) {
            message.post = object.post;
        }
        if (object.delete !== undefined && object.delete !== null) {
            message.delete = object.delete;
        }
        if (object.patch !== undefined && object.patch !== null) {
            message.patch = object.patch;
        }
        if (object.custom !== undefined && object.custom !== null) {
            message.custom = exports.CustomHttpPattern.fromAmino(object.custom);
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = object.body;
        }
        if (object.response_body !== undefined && object.response_body !== null) {
            message.responseBody = object.response_body;
        }
        message.additionalBindings = object.additional_bindings?.map(e => exports.HttpRule.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.selector = message.selector === "" ? undefined : message.selector;
        obj.get = message.get === null ? undefined : message.get;
        obj.put = message.put === null ? undefined : message.put;
        obj.post = message.post === null ? undefined : message.post;
        obj.delete = message.delete === null ? undefined : message.delete;
        obj.patch = message.patch === null ? undefined : message.patch;
        obj.custom = message.custom ? exports.CustomHttpPattern.toAmino(message.custom) : undefined;
        obj.body = message.body === "" ? undefined : message.body;
        obj.response_body = message.responseBody === "" ? undefined : message.responseBody;
        if (message.additionalBindings) {
            obj.additional_bindings = message.additionalBindings.map(e => e ? exports.HttpRule.toAmino(e) : undefined);
        }
        else {
            obj.additional_bindings = message.additionalBindings;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.HttpRule.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.HttpRule.decode(message.value);
    },
    toProto(message) {
        return exports.HttpRule.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.api.HttpRule",
            value: exports.HttpRule.encode(message).finish()
        };
    }
};
function createBaseCustomHttpPattern() {
    return {
        kind: "",
        path: ""
    };
}
exports.CustomHttpPattern = {
    typeUrl: "/google.api.CustomHttpPattern",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.kind !== "") {
            writer.uint32(10).string(message.kind);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCustomHttpPattern();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.kind = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCustomHttpPattern();
        message.kind = object.kind ?? "";
        message.path = object.path ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCustomHttpPattern();
        if (object.kind !== undefined && object.kind !== null) {
            message.kind = object.kind;
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.kind = message.kind === "" ? undefined : message.kind;
        obj.path = message.path === "" ? undefined : message.path;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CustomHttpPattern.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CustomHttpPattern.decode(message.value);
    },
    toProto(message) {
        return exports.CustomHttpPattern.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.api.CustomHttpPattern",
            value: exports.CustomHttpPattern.encode(message).finish()
        };
    }
};
