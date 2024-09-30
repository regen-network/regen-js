//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
function createBasePlan() {
    return {
        name: "",
        time: new Date(),
        height: BigInt(0),
        info: "",
        upgradedClientState: undefined
    };
}
export const Plan = {
    typeUrl: "/cosmos.upgrade.v1beta1.Plan",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.upgradedClientState !== undefined) {
            Any.encode(message.upgradedClientState, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlan();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.upgradedClientState = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePlan();
        message.name = object.name ?? "";
        message.time = object.time ?? undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.info = object.info ?? "";
        message.upgradedClientState = object.upgradedClientState !== undefined && object.upgradedClientState !== null ? Any.fromPartial(object.upgradedClientState) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePlan();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = fromTimestamp(Timestamp.fromAmino(object.time));
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.upgraded_client_state !== undefined && object.upgraded_client_state !== null) {
            message.upgradedClientState = Any.fromAmino(object.upgraded_client_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        obj.info = message.info === "" ? undefined : message.info;
        obj.upgraded_client_state = message.upgradedClientState ? Any.toAmino(message.upgradedClientState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Plan.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Plan",
            value: Plan.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Plan.decode(message.value);
    },
    toProto(message) {
        return Plan.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.Plan",
            value: Plan.encode(message).finish()
        };
    }
};
function createBaseSoftwareUpgradeProposal() {
    return {
        $typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
        title: "",
        description: "",
        plan: Plan.fromPartial({})
    };
}
export const SoftwareUpgradeProposal = {
    typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.plan !== undefined) {
            Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSoftwareUpgradeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
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
        const message = createBaseSoftwareUpgradeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSoftwareUpgradeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.plan !== undefined && object.plan !== null) {
            message.plan = Plan.fromAmino(object.plan);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SoftwareUpgradeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SoftwareUpgradeProposal",
            value: SoftwareUpgradeProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SoftwareUpgradeProposal.decode(message.value);
    },
    toProto(message) {
        return SoftwareUpgradeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
            value: SoftwareUpgradeProposal.encode(message).finish()
        };
    }
};
function createBaseCancelSoftwareUpgradeProposal() {
    return {
        $typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
        title: "",
        description: ""
    };
}
export const CancelSoftwareUpgradeProposal = {
    typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCancelSoftwareUpgradeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCancelSoftwareUpgradeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCancelSoftwareUpgradeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        return obj;
    },
    fromAminoMsg(object) {
        return CancelSoftwareUpgradeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CancelSoftwareUpgradeProposal",
            value: CancelSoftwareUpgradeProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CancelSoftwareUpgradeProposal.decode(message.value);
    },
    toProto(message) {
        return CancelSoftwareUpgradeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
            value: CancelSoftwareUpgradeProposal.encode(message).finish()
        };
    }
};
function createBaseModuleVersion() {
    return {
        name: "",
        version: BigInt(0)
    };
}
export const ModuleVersion = {
    typeUrl: "/cosmos.upgrade.v1beta1.ModuleVersion",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.version !== BigInt(0)) {
            writer.uint32(16).uint64(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.version = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModuleVersion();
        message.name = object.name ?? "";
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleVersion();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = BigInt(object.version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.version = message.version !== BigInt(0) ? message.version.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleVersion.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleVersion",
            value: ModuleVersion.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModuleVersion.decode(message.value);
    },
    toProto(message) {
        return ModuleVersion.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.ModuleVersion",
            value: ModuleVersion.encode(message).finish()
        };
    }
};
