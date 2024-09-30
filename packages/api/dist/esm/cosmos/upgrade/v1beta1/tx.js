//@ts-nocheck
import { Plan } from "./upgrade";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgSoftwareUpgrade() {
    return {
        authority: "",
        plan: Plan.fromPartial({})
    };
}
export const MsgSoftwareUpgrade = {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.plan !== undefined) {
            Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSoftwareUpgrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.plan = Plan.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSoftwareUpgrade();
        message.authority = object.authority ?? "";
        message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSoftwareUpgrade();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.plan !== undefined && object.plan !== null) {
            message.plan = Plan.fromAmino(object.plan);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSoftwareUpgrade.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSoftwareUpgrade",
            value: MsgSoftwareUpgrade.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSoftwareUpgrade.decode(message.value);
    },
    toProto(message) {
        return MsgSoftwareUpgrade.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
            value: MsgSoftwareUpgrade.encode(message).finish()
        };
    }
};
function createBaseMsgSoftwareUpgradeResponse() {
    return {};
}
export const MsgSoftwareUpgradeResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSoftwareUpgradeResponse();
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
        const message = createBaseMsgSoftwareUpgradeResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSoftwareUpgradeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSoftwareUpgradeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSoftwareUpgradeResponse",
            value: MsgSoftwareUpgradeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSoftwareUpgradeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSoftwareUpgradeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse",
            value: MsgSoftwareUpgradeResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCancelUpgrade() {
    return {
        authority: ""
    };
}
export const MsgCancelUpgrade = {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelUpgrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCancelUpgrade();
        message.authority = object.authority ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancelUpgrade();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancelUpgrade.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCancelUpgrade",
            value: MsgCancelUpgrade.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCancelUpgrade.decode(message.value);
    },
    toProto(message) {
        return MsgCancelUpgrade.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
            value: MsgCancelUpgrade.encode(message).finish()
        };
    }
};
function createBaseMsgCancelUpgradeResponse() {
    return {};
}
export const MsgCancelUpgradeResponse = {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelUpgradeResponse();
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
        const message = createBaseMsgCancelUpgradeResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCancelUpgradeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancelUpgradeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCancelUpgradeResponse",
            value: MsgCancelUpgradeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCancelUpgradeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCancelUpgradeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse",
            value: MsgCancelUpgradeResponse.encode(message).finish()
        };
    }
};
