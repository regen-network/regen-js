import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseEventCreateGroup() {
    return {
        groupId: BigInt(0)
    };
}
export const EventCreateGroup = {
    typeUrl: "/cosmos.group.v1.EventCreateGroup",
    encode(message, writer = BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventCreateGroup();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCreateGroup();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCreateGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventCreateGroup",
            value: EventCreateGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventCreateGroup.decode(message.value);
    },
    toProto(message) {
        return EventCreateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventCreateGroup",
            value: EventCreateGroup.encode(message).finish()
        };
    }
};
function createBaseEventUpdateGroup() {
    return {
        groupId: BigInt(0)
    };
}
export const EventUpdateGroup = {
    typeUrl: "/cosmos.group.v1.EventUpdateGroup",
    encode(message, writer = BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateGroup();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateGroup();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventUpdateGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventUpdateGroup",
            value: EventUpdateGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventUpdateGroup.decode(message.value);
    },
    toProto(message) {
        return EventUpdateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventUpdateGroup",
            value: EventUpdateGroup.encode(message).finish()
        };
    }
};
function createBaseEventCreateGroupPolicy() {
    return {
        address: ""
    };
}
export const EventCreateGroupPolicy = {
    typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateGroupPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventCreateGroupPolicy();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCreateGroupPolicy();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCreateGroupPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventCreateGroupPolicy",
            value: EventCreateGroupPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventCreateGroupPolicy.decode(message.value);
    },
    toProto(message) {
        return EventCreateGroupPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
            value: EventCreateGroupPolicy.encode(message).finish()
        };
    }
};
function createBaseEventUpdateGroupPolicy() {
    return {
        address: ""
    };
}
export const EventUpdateGroupPolicy = {
    typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateGroupPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateGroupPolicy();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateGroupPolicy();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return EventUpdateGroupPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventUpdateGroupPolicy",
            value: EventUpdateGroupPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventUpdateGroupPolicy.decode(message.value);
    },
    toProto(message) {
        return EventUpdateGroupPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
            value: EventUpdateGroupPolicy.encode(message).finish()
        };
    }
};
function createBaseEventSubmitProposal() {
    return {
        proposalId: BigInt(0)
    };
}
export const EventSubmitProposal = {
    typeUrl: "/cosmos.group.v1.EventSubmitProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventSubmitProposal();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventSubmitProposal();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventSubmitProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventSubmitProposal",
            value: EventSubmitProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventSubmitProposal.decode(message.value);
    },
    toProto(message) {
        return EventSubmitProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventSubmitProposal",
            value: EventSubmitProposal.encode(message).finish()
        };
    }
};
function createBaseEventWithdrawProposal() {
    return {
        proposalId: BigInt(0)
    };
}
export const EventWithdrawProposal = {
    typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventWithdrawProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventWithdrawProposal();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventWithdrawProposal();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventWithdrawProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventWithdrawProposal",
            value: EventWithdrawProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventWithdrawProposal.decode(message.value);
    },
    toProto(message) {
        return EventWithdrawProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
            value: EventWithdrawProposal.encode(message).finish()
        };
    }
};
function createBaseEventVote() {
    return {
        proposalId: BigInt(0)
    };
}
export const EventVote = {
    typeUrl: "/cosmos.group.v1.EventVote",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventVote();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventVote();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventVote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventVote",
            value: EventVote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventVote.decode(message.value);
    },
    toProto(message) {
        return EventVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventVote",
            value: EventVote.encode(message).finish()
        };
    }
};
function createBaseEventExec() {
    return {
        proposalId: BigInt(0),
        result: 0,
        logs: ""
    };
}
export const EventExec = {
    typeUrl: "/cosmos.group.v1.EventExec",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.result !== 0) {
            writer.uint32(16).int32(message.result);
        }
        if (message.logs !== "") {
            writer.uint32(26).string(message.logs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    message.logs = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventExec();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.result = object.result ?? 0;
        message.logs = object.logs ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventExec();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        if (object.logs !== undefined && object.logs !== null) {
            message.logs = object.logs;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
        obj.result = message.result === 0 ? undefined : message.result;
        obj.logs = message.logs === "" ? undefined : message.logs;
        return obj;
    },
    fromAminoMsg(object) {
        return EventExec.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventExec",
            value: EventExec.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventExec.decode(message.value);
    },
    toProto(message) {
        return EventExec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventExec",
            value: EventExec.encode(message).finish()
        };
    }
};
function createBaseEventLeaveGroup() {
    return {
        groupId: BigInt(0),
        address: ""
    };
}
export const EventLeaveGroup = {
    typeUrl: "/cosmos.group.v1.EventLeaveGroup",
    encode(message, writer = BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventLeaveGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventLeaveGroup();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventLeaveGroup();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return EventLeaveGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventLeaveGroup",
            value: EventLeaveGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventLeaveGroup.decode(message.value);
    },
    toProto(message) {
        return EventLeaveGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.EventLeaveGroup",
            value: EventLeaveGroup.encode(message).finish()
        };
    }
};
