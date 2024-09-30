//@ts-nocheck
import { Any } from "../../../google/protobuf/any";
import { BasicAllowance, PeriodicAllowance, AllowedMsgAllowance } from "./feegrant";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgGrantAllowance() {
    return {
        granter: "",
        grantee: "",
        allowance: undefined
    };
}
export const MsgGrantAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
    encode(message, writer = BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.allowance !== undefined) {
            Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.allowance = FeeAllowanceI_InterfaceDecoder(reader);
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
        message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
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
            message.allowance = FeeAllowanceI_FromAmino(object.allowance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter === "" ? undefined : message.granter;
        obj.grantee = message.grantee === "" ? undefined : message.grantee;
        obj.allowance = message.allowance ? FeeAllowanceI_ToAmino(message.allowance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgGrantAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgGrantAllowance",
            value: MsgGrantAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgGrantAllowance.decode(message.value);
    },
    toProto(message) {
        return MsgGrantAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
            value: MsgGrantAllowance.encode(message).finish()
        };
    }
};
function createBaseMsgGrantAllowanceResponse() {
    return {};
}
export const MsgGrantAllowanceResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgGrantAllowanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgGrantAllowanceResponse",
            value: MsgGrantAllowanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgGrantAllowanceResponse.decode(message.value);
    },
    toProto(message) {
        return MsgGrantAllowanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
            value: MsgGrantAllowanceResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRevokeAllowance() {
    return {
        granter: "",
        grantee: ""
    };
}
export const MsgRevokeAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
    encode(message, writer = BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgRevokeAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRevokeAllowance",
            value: MsgRevokeAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRevokeAllowance.decode(message.value);
    },
    toProto(message) {
        return MsgRevokeAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
            value: MsgRevokeAllowance.encode(message).finish()
        };
    }
};
function createBaseMsgRevokeAllowanceResponse() {
    return {};
}
export const MsgRevokeAllowanceResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgRevokeAllowanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRevokeAllowanceResponse",
            value: MsgRevokeAllowanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRevokeAllowanceResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRevokeAllowanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
            value: MsgRevokeAllowanceResponse.encode(message).finish()
        };
    }
};
export const FeeAllowanceI_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.feegrant.v1beta1.BasicAllowance":
            return BasicAllowance.decode(data.value);
        case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
            return PeriodicAllowance.decode(data.value);
        case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
            return AllowedMsgAllowance.decode(data.value);
        default:
            return data;
    }
};
export const FeeAllowanceI_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/BasicAllowance":
            return Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
                value: BasicAllowance.encode(BasicAllowance.fromPartial(BasicAllowance.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/PeriodicAllowance":
            return Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
                value: PeriodicAllowance.encode(PeriodicAllowance.fromPartial(PeriodicAllowance.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/AllowedMsgAllowance":
            return Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
                value: AllowedMsgAllowance.encode(AllowedMsgAllowance.fromPartial(AllowedMsgAllowance.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const FeeAllowanceI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.feegrant.v1beta1.BasicAllowance":
            return {
                type: "cosmos-sdk/BasicAllowance",
                value: BasicAllowance.toAmino(BasicAllowance.decode(content.value, undefined))
            };
        case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
            return {
                type: "cosmos-sdk/PeriodicAllowance",
                value: PeriodicAllowance.toAmino(PeriodicAllowance.decode(content.value, undefined))
            };
        case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
            return {
                type: "cosmos-sdk/AllowedMsgAllowance",
                value: AllowedMsgAllowance.toAmino(AllowedMsgAllowance.decode(content.value, undefined))
            };
        default:
            return Any.toAmino(content);
    }
};
