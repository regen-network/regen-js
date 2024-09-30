"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeAllowanceI_ToAmino = exports.FeeAllowanceI_FromAmino = exports.FeeAllowanceI_InterfaceDecoder = exports.MsgRevokeAllowanceResponse = exports.MsgRevokeAllowance = exports.MsgGrantAllowanceResponse = exports.MsgGrantAllowance = void 0;
//@ts-nocheck
const any_1 = require("../../../google/protobuf/any");
const feegrant_1 = require("./feegrant");
const binary_1 = require("../../../binary");
function createBaseMsgGrantAllowance() {
    return {
        granter: "",
        grantee: "",
        allowance: undefined
    };
}
exports.MsgGrantAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.allowance !== undefined) {
            any_1.Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGrantAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.allowance = (0, exports.FeeAllowanceI_InterfaceDecoder)(reader);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgGrantAllowance();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.allowance = object.allowance !== undefined && object.allowance !== null ? any_1.Any.fromPartial(object.allowance) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgGrantAllowance();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = (0, exports.FeeAllowanceI_FromAmino)(object.allowance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter === "" ? undefined : message.granter;
        obj.grantee = message.grantee === "" ? undefined : message.grantee;
        obj.allowance = message.allowance ? (0, exports.FeeAllowanceI_ToAmino)(message.allowance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgGrantAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgGrantAllowance",
            value: exports.MsgGrantAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgGrantAllowance.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGrantAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
            value: exports.MsgGrantAllowance.encode(message).finish()
        };
    }
};
function createBaseMsgGrantAllowanceResponse() {
    return {};
}
exports.MsgGrantAllowanceResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGrantAllowanceResponse();
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
        const message = createBaseMsgGrantAllowanceResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgGrantAllowanceResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgGrantAllowanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgGrantAllowanceResponse",
            value: exports.MsgGrantAllowanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgGrantAllowanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGrantAllowanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
            value: exports.MsgGrantAllowanceResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRevokeAllowance() {
    return {
        granter: "",
        grantee: ""
    };
}
exports.MsgRevokeAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRevokeAllowance();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRevokeAllowance();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter === "" ? undefined : message.granter;
        obj.grantee = message.grantee === "" ? undefined : message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRevokeAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRevokeAllowance",
            value: exports.MsgRevokeAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRevokeAllowance.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRevokeAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
            value: exports.MsgRevokeAllowance.encode(message).finish()
        };
    }
};
function createBaseMsgRevokeAllowanceResponse() {
    return {};
}
exports.MsgRevokeAllowanceResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeAllowanceResponse();
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
        const message = createBaseMsgRevokeAllowanceResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRevokeAllowanceResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRevokeAllowanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRevokeAllowanceResponse",
            value: exports.MsgRevokeAllowanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRevokeAllowanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRevokeAllowanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
            value: exports.MsgRevokeAllowanceResponse.encode(message).finish()
        };
    }
};
const FeeAllowanceI_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.feegrant.v1beta1.BasicAllowance":
            return feegrant_1.BasicAllowance.decode(data.value);
        case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
            return feegrant_1.PeriodicAllowance.decode(data.value);
        case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
            return feegrant_1.AllowedMsgAllowance.decode(data.value);
        default:
            return data;
    }
};
exports.FeeAllowanceI_InterfaceDecoder = FeeAllowanceI_InterfaceDecoder;
const FeeAllowanceI_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/BasicAllowance":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
                value: feegrant_1.BasicAllowance.encode(feegrant_1.BasicAllowance.fromPartial(feegrant_1.BasicAllowance.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/PeriodicAllowance":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
                value: feegrant_1.PeriodicAllowance.encode(feegrant_1.PeriodicAllowance.fromPartial(feegrant_1.PeriodicAllowance.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/AllowedMsgAllowance":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
                value: feegrant_1.AllowedMsgAllowance.encode(feegrant_1.AllowedMsgAllowance.fromPartial(feegrant_1.AllowedMsgAllowance.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.FeeAllowanceI_FromAmino = FeeAllowanceI_FromAmino;
const FeeAllowanceI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.feegrant.v1beta1.BasicAllowance":
            return {
                type: "cosmos-sdk/BasicAllowance",
                value: feegrant_1.BasicAllowance.toAmino(feegrant_1.BasicAllowance.decode(content.value, undefined))
            };
        case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
            return {
                type: "cosmos-sdk/PeriodicAllowance",
                value: feegrant_1.PeriodicAllowance.toAmino(feegrant_1.PeriodicAllowance.decode(content.value, undefined))
            };
        case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
            return {
                type: "cosmos-sdk/AllowedMsgAllowance",
                value: feegrant_1.AllowedMsgAllowance.toAmino(feegrant_1.AllowedMsgAllowance.decode(content.value, undefined))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.FeeAllowanceI_ToAmino = FeeAllowanceI_ToAmino;
