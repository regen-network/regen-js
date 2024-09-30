//@ts-nocheck
import { OriginTx } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseEventCreateClass() {
    return {
        classId: ""
    };
}
export const EventCreateClass = {
    typeUrl: "/regen.ecocredit.v1.EventCreateClass",
    encode(message, writer = BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateClass();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventCreateClass();
        message.classId = object.classId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCreateClass();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId === "" ? undefined : message.classId;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCreateClass.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventCreateClass.decode(message.value);
    },
    toProto(message) {
        return EventCreateClass.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventCreateClass",
            value: EventCreateClass.encode(message).finish()
        };
    }
};
function createBaseEventCreateProject() {
    return {
        projectId: ""
    };
}
export const EventCreateProject = {
    typeUrl: "/regen.ecocredit.v1.EventCreateProject",
    encode(message, writer = BinaryWriter.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateProject();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventCreateProject();
        message.projectId = object.projectId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCreateProject();
        if (object.project_id !== undefined && object.project_id !== null) {
            message.projectId = object.project_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCreateProject.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventCreateProject.decode(message.value);
    },
    toProto(message) {
        return EventCreateProject.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventCreateProject",
            value: EventCreateProject.encode(message).finish()
        };
    }
};
function createBaseEventCreateBatch() {
    return {
        batchDenom: "",
        originTx: undefined
    };
}
export const EventCreateBatch = {
    typeUrl: "/regen.ecocredit.v1.EventCreateBatch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.originTx !== undefined) {
            OriginTx.encode(message.originTx, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
                    break;
                case 2:
                    message.originTx = OriginTx.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventCreateBatch();
        message.batchDenom = object.batchDenom ?? "";
        message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCreateBatch();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.origin_tx !== undefined && object.origin_tx !== null) {
            message.originTx = OriginTx.fromAmino(object.origin_tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.origin_tx = message.originTx ? OriginTx.toAmino(message.originTx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCreateBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventCreateBatch.decode(message.value);
    },
    toProto(message) {
        return EventCreateBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventCreateBatch",
            value: EventCreateBatch.encode(message).finish()
        };
    }
};
function createBaseEventMint() {
    return {
        batchDenom: "",
        tradableAmount: "",
        retiredAmount: ""
    };
}
export const EventMint = {
    typeUrl: "/regen.ecocredit.v1.EventMint",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.tradableAmount !== "") {
            writer.uint32(18).string(message.tradableAmount);
        }
        if (message.retiredAmount !== "") {
            writer.uint32(26).string(message.retiredAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
                    break;
                case 2:
                    message.tradableAmount = reader.string();
                    break;
                case 3:
                    message.retiredAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventMint();
        message.batchDenom = object.batchDenom ?? "";
        message.tradableAmount = object.tradableAmount ?? "";
        message.retiredAmount = object.retiredAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventMint();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
            message.tradableAmount = object.tradable_amount;
        }
        if (object.retired_amount !== undefined && object.retired_amount !== null) {
            message.retiredAmount = object.retired_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
        obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return EventMint.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventMint.decode(message.value);
    },
    toProto(message) {
        return EventMint.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventMint",
            value: EventMint.encode(message).finish()
        };
    }
};
function createBaseEventMintBatchCredits() {
    return {
        batchDenom: "",
        originTx: undefined
    };
}
export const EventMintBatchCredits = {
    typeUrl: "/regen.ecocredit.v1.EventMintBatchCredits",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.originTx !== undefined) {
            OriginTx.encode(message.originTx, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventMintBatchCredits();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
                    break;
                case 2:
                    message.originTx = OriginTx.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventMintBatchCredits();
        message.batchDenom = object.batchDenom ?? "";
        message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventMintBatchCredits();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.origin_tx !== undefined && object.origin_tx !== null) {
            message.originTx = OriginTx.fromAmino(object.origin_tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.origin_tx = message.originTx ? OriginTx.toAmino(message.originTx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventMintBatchCredits.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventMintBatchCredits.decode(message.value);
    },
    toProto(message) {
        return EventMintBatchCredits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventMintBatchCredits",
            value: EventMintBatchCredits.encode(message).finish()
        };
    }
};
function createBaseEventTransfer() {
    return {
        sender: "",
        recipient: "",
        batchDenom: "",
        tradableAmount: "",
        retiredAmount: ""
    };
}
export const EventTransfer = {
    typeUrl: "/regen.ecocredit.v1.EventTransfer",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(18).string(message.recipient);
        }
        if (message.batchDenom !== "") {
            writer.uint32(26).string(message.batchDenom);
        }
        if (message.tradableAmount !== "") {
            writer.uint32(34).string(message.tradableAmount);
        }
        if (message.retiredAmount !== "") {
            writer.uint32(42).string(message.retiredAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.recipient = reader.string();
                    break;
                case 3:
                    message.batchDenom = reader.string();
                    break;
                case 4:
                    message.tradableAmount = reader.string();
                    break;
                case 5:
                    message.retiredAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventTransfer();
        message.sender = object.sender ?? "";
        message.recipient = object.recipient ?? "";
        message.batchDenom = object.batchDenom ?? "";
        message.tradableAmount = object.tradableAmount ?? "";
        message.retiredAmount = object.retiredAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventTransfer();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
            message.tradableAmount = object.tradable_amount;
        }
        if (object.retired_amount !== undefined && object.retired_amount !== null) {
            message.retiredAmount = object.retired_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
        obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return EventTransfer.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventTransfer.decode(message.value);
    },
    toProto(message) {
        return EventTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventTransfer",
            value: EventTransfer.encode(message).finish()
        };
    }
};
function createBaseEventRetire() {
    return {
        owner: "",
        batchDenom: "",
        amount: "",
        jurisdiction: "",
        reason: ""
    };
}
export const EventRetire = {
    typeUrl: "/regen.ecocredit.v1.EventRetire",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.jurisdiction !== "") {
            writer.uint32(34).string(message.jurisdiction);
        }
        if (message.reason !== "") {
            writer.uint32(42).string(message.reason);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventRetire();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.batchDenom = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.jurisdiction = reader.string();
                    break;
                case 5:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventRetire();
        message.owner = object.owner ?? "";
        message.batchDenom = object.batchDenom ?? "";
        message.amount = object.amount ?? "";
        message.jurisdiction = object.jurisdiction ?? "";
        message.reason = object.reason ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventRetire();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.jurisdiction !== undefined && object.jurisdiction !== null) {
            message.jurisdiction = object.jurisdiction;
        }
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = object.reason;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.amount = message.amount === "" ? undefined : message.amount;
        obj.jurisdiction = message.jurisdiction === "" ? undefined : message.jurisdiction;
        obj.reason = message.reason === "" ? undefined : message.reason;
        return obj;
    },
    fromAminoMsg(object) {
        return EventRetire.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventRetire.decode(message.value);
    },
    toProto(message) {
        return EventRetire.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventRetire",
            value: EventRetire.encode(message).finish()
        };
    }
};
function createBaseEventCancel() {
    return {
        owner: "",
        batchDenom: "",
        amount: "",
        reason: ""
    };
}
export const EventCancel = {
    typeUrl: "/regen.ecocredit.v1.EventCancel",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.reason !== "") {
            writer.uint32(34).string(message.reason);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCancel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.batchDenom = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventCancel();
        message.owner = object.owner ?? "";
        message.batchDenom = object.batchDenom ?? "";
        message.amount = object.amount ?? "";
        message.reason = object.reason ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCancel();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = object.reason;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.amount = message.amount === "" ? undefined : message.amount;
        obj.reason = message.reason === "" ? undefined : message.reason;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCancel.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventCancel.decode(message.value);
    },
    toProto(message) {
        return EventCancel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventCancel",
            value: EventCancel.encode(message).finish()
        };
    }
};
function createBaseEventUpdateClassAdmin() {
    return {
        classId: ""
    };
}
export const EventUpdateClassAdmin = {
    typeUrl: "/regen.ecocredit.v1.EventUpdateClassAdmin",
    encode(message, writer = BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateClassAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateClassAdmin();
        message.classId = object.classId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateClassAdmin();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId === "" ? undefined : message.classId;
        return obj;
    },
    fromAminoMsg(object) {
        return EventUpdateClassAdmin.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventUpdateClassAdmin.decode(message.value);
    },
    toProto(message) {
        return EventUpdateClassAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventUpdateClassAdmin",
            value: EventUpdateClassAdmin.encode(message).finish()
        };
    }
};
function createBaseEventUpdateClassIssuers() {
    return {
        classId: ""
    };
}
export const EventUpdateClassIssuers = {
    typeUrl: "/regen.ecocredit.v1.EventUpdateClassIssuers",
    encode(message, writer = BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateClassIssuers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateClassIssuers();
        message.classId = object.classId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateClassIssuers();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId === "" ? undefined : message.classId;
        return obj;
    },
    fromAminoMsg(object) {
        return EventUpdateClassIssuers.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventUpdateClassIssuers.decode(message.value);
    },
    toProto(message) {
        return EventUpdateClassIssuers.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventUpdateClassIssuers",
            value: EventUpdateClassIssuers.encode(message).finish()
        };
    }
};
function createBaseEventUpdateClassMetadata() {
    return {
        classId: ""
    };
}
export const EventUpdateClassMetadata = {
    typeUrl: "/regen.ecocredit.v1.EventUpdateClassMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateClassMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateClassMetadata();
        message.classId = object.classId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateClassMetadata();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId === "" ? undefined : message.classId;
        return obj;
    },
    fromAminoMsg(object) {
        return EventUpdateClassMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventUpdateClassMetadata.decode(message.value);
    },
    toProto(message) {
        return EventUpdateClassMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventUpdateClassMetadata",
            value: EventUpdateClassMetadata.encode(message).finish()
        };
    }
};
function createBaseEventUpdateProjectAdmin() {
    return {
        projectId: ""
    };
}
export const EventUpdateProjectAdmin = {
    typeUrl: "/regen.ecocredit.v1.EventUpdateProjectAdmin",
    encode(message, writer = BinaryWriter.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateProjectAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateProjectAdmin();
        message.projectId = object.projectId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateProjectAdmin();
        if (object.project_id !== undefined && object.project_id !== null) {
            message.projectId = object.project_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        return obj;
    },
    fromAminoMsg(object) {
        return EventUpdateProjectAdmin.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventUpdateProjectAdmin.decode(message.value);
    },
    toProto(message) {
        return EventUpdateProjectAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventUpdateProjectAdmin",
            value: EventUpdateProjectAdmin.encode(message).finish()
        };
    }
};
function createBaseEventUpdateProjectMetadata() {
    return {
        projectId: ""
    };
}
export const EventUpdateProjectMetadata = {
    typeUrl: "/regen.ecocredit.v1.EventUpdateProjectMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateProjectMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateProjectMetadata();
        message.projectId = object.projectId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateProjectMetadata();
        if (object.project_id !== undefined && object.project_id !== null) {
            message.projectId = object.project_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        return obj;
    },
    fromAminoMsg(object) {
        return EventUpdateProjectMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventUpdateProjectMetadata.decode(message.value);
    },
    toProto(message) {
        return EventUpdateProjectMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventUpdateProjectMetadata",
            value: EventUpdateProjectMetadata.encode(message).finish()
        };
    }
};
function createBaseEventUpdateBatchMetadata() {
    return {
        batchDenom: ""
    };
}
export const EventUpdateBatchMetadata = {
    typeUrl: "/regen.ecocredit.v1.EventUpdateBatchMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateBatchMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateBatchMetadata();
        message.batchDenom = object.batchDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateBatchMetadata();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return EventUpdateBatchMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventUpdateBatchMetadata.decode(message.value);
    },
    toProto(message) {
        return EventUpdateBatchMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventUpdateBatchMetadata",
            value: EventUpdateBatchMetadata.encode(message).finish()
        };
    }
};
function createBaseEventSealBatch() {
    return {
        batchDenom: ""
    };
}
export const EventSealBatch = {
    typeUrl: "/regen.ecocredit.v1.EventSealBatch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSealBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventSealBatch();
        message.batchDenom = object.batchDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventSealBatch();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return EventSealBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventSealBatch.decode(message.value);
    },
    toProto(message) {
        return EventSealBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventSealBatch",
            value: EventSealBatch.encode(message).finish()
        };
    }
};
function createBaseEventAddCreditType() {
    return {
        abbreviation: ""
    };
}
export const EventAddCreditType = {
    typeUrl: "/regen.ecocredit.v1.EventAddCreditType",
    encode(message, writer = BinaryWriter.create()) {
        if (message.abbreviation !== "") {
            writer.uint32(10).string(message.abbreviation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAddCreditType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.abbreviation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventAddCreditType();
        message.abbreviation = object.abbreviation ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventAddCreditType();
        if (object.abbreviation !== undefined && object.abbreviation !== null) {
            message.abbreviation = object.abbreviation;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.abbreviation = message.abbreviation === "" ? undefined : message.abbreviation;
        return obj;
    },
    fromAminoMsg(object) {
        return EventAddCreditType.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventAddCreditType.decode(message.value);
    },
    toProto(message) {
        return EventAddCreditType.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventAddCreditType",
            value: EventAddCreditType.encode(message).finish()
        };
    }
};
function createBaseEventBridge() {
    return {
        target: "",
        recipient: "",
        contract: "",
        amount: "",
        owner: "",
        batchDenom: ""
    };
}
export const EventBridge = {
    typeUrl: "/regen.ecocredit.v1.EventBridge",
    encode(message, writer = BinaryWriter.create()) {
        if (message.target !== "") {
            writer.uint32(10).string(message.target);
        }
        if (message.recipient !== "") {
            writer.uint32(18).string(message.recipient);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.owner !== "") {
            writer.uint32(42).string(message.owner);
        }
        if (message.batchDenom !== "") {
            writer.uint32(50).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBridge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.target = reader.string();
                    break;
                case 2:
                    message.recipient = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.owner = reader.string();
                    break;
                case 6:
                    message.batchDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventBridge();
        message.target = object.target ?? "";
        message.recipient = object.recipient ?? "";
        message.contract = object.contract ?? "";
        message.amount = object.amount ?? "";
        message.owner = object.owner ?? "";
        message.batchDenom = object.batchDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBridge();
        if (object.target !== undefined && object.target !== null) {
            message.target = object.target;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.target = message.target === "" ? undefined : message.target;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        obj.contract = message.contract === "" ? undefined : message.contract;
        obj.amount = message.amount === "" ? undefined : message.amount;
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return EventBridge.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventBridge.decode(message.value);
    },
    toProto(message) {
        return EventBridge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventBridge",
            value: EventBridge.encode(message).finish()
        };
    }
};
function createBaseEventBridgeReceive() {
    return {
        projectId: "",
        batchDenom: "",
        amount: "",
        originTx: undefined
    };
}
export const EventBridgeReceive = {
    typeUrl: "/regen.ecocredit.v1.EventBridgeReceive",
    encode(message, writer = BinaryWriter.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.originTx !== undefined) {
            OriginTx.encode(message.originTx, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBridgeReceive();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                case 2:
                    message.batchDenom = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.originTx = OriginTx.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventBridgeReceive();
        message.projectId = object.projectId ?? "";
        message.batchDenom = object.batchDenom ?? "";
        message.amount = object.amount ?? "";
        message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBridgeReceive();
        if (object.project_id !== undefined && object.project_id !== null) {
            message.projectId = object.project_id;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.origin_tx !== undefined && object.origin_tx !== null) {
            message.originTx = OriginTx.fromAmino(object.origin_tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.amount = message.amount === "" ? undefined : message.amount;
        obj.origin_tx = message.originTx ? OriginTx.toAmino(message.originTx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventBridgeReceive.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventBridgeReceive.decode(message.value);
    },
    toProto(message) {
        return EventBridgeReceive.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventBridgeReceive",
            value: EventBridgeReceive.encode(message).finish()
        };
    }
};
