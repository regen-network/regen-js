"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBridgeReceive = exports.EventBridge = exports.EventAddCreditType = exports.EventSealBatch = exports.EventUpdateBatchMetadata = exports.EventUpdateProjectMetadata = exports.EventUpdateProjectAdmin = exports.EventUpdateClassMetadata = exports.EventUpdateClassIssuers = exports.EventUpdateClassAdmin = exports.EventCancel = exports.EventRetire = exports.EventTransfer = exports.EventMintBatchCredits = exports.EventMint = exports.EventCreateBatch = exports.EventCreateProject = exports.EventCreateClass = void 0;
//@ts-nocheck
const types_1 = require("./types");
const binary_1 = require("../../../binary");
function createBaseEventCreateClass() {
    return {
        classId: ""
    };
}
exports.EventCreateClass = {
    typeUrl: "/regen.ecocredit.v1.EventCreateClass",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventCreateClass.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventCreateClass.decode(message.value);
    },
    toProto(message) {
        return exports.EventCreateClass.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventCreateClass",
            value: exports.EventCreateClass.encode(message).finish()
        };
    }
};
function createBaseEventCreateProject() {
    return {
        projectId: ""
    };
}
exports.EventCreateProject = {
    typeUrl: "/regen.ecocredit.v1.EventCreateProject",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventCreateProject.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventCreateProject.decode(message.value);
    },
    toProto(message) {
        return exports.EventCreateProject.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventCreateProject",
            value: exports.EventCreateProject.encode(message).finish()
        };
    }
};
function createBaseEventCreateBatch() {
    return {
        batchDenom: "",
        originTx: undefined
    };
}
exports.EventCreateBatch = {
    typeUrl: "/regen.ecocredit.v1.EventCreateBatch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.originTx !== undefined) {
            types_1.OriginTx.encode(message.originTx, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
                    break;
                case 2:
                    message.originTx = types_1.OriginTx.decode(reader, reader.uint32());
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
        message.originTx = object.originTx !== undefined && object.originTx !== null ? types_1.OriginTx.fromPartial(object.originTx) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCreateBatch();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.origin_tx !== undefined && object.origin_tx !== null) {
            message.originTx = types_1.OriginTx.fromAmino(object.origin_tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.origin_tx = message.originTx ? types_1.OriginTx.toAmino(message.originTx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventCreateBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventCreateBatch.decode(message.value);
    },
    toProto(message) {
        return exports.EventCreateBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventCreateBatch",
            value: exports.EventCreateBatch.encode(message).finish()
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
exports.EventMint = {
    typeUrl: "/regen.ecocredit.v1.EventMint",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventMint.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventMint.decode(message.value);
    },
    toProto(message) {
        return exports.EventMint.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventMint",
            value: exports.EventMint.encode(message).finish()
        };
    }
};
function createBaseEventMintBatchCredits() {
    return {
        batchDenom: "",
        originTx: undefined
    };
}
exports.EventMintBatchCredits = {
    typeUrl: "/regen.ecocredit.v1.EventMintBatchCredits",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.originTx !== undefined) {
            types_1.OriginTx.encode(message.originTx, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventMintBatchCredits();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
                    break;
                case 2:
                    message.originTx = types_1.OriginTx.decode(reader, reader.uint32());
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
        message.originTx = object.originTx !== undefined && object.originTx !== null ? types_1.OriginTx.fromPartial(object.originTx) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventMintBatchCredits();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.origin_tx !== undefined && object.origin_tx !== null) {
            message.originTx = types_1.OriginTx.fromAmino(object.origin_tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.origin_tx = message.originTx ? types_1.OriginTx.toAmino(message.originTx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventMintBatchCredits.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventMintBatchCredits.decode(message.value);
    },
    toProto(message) {
        return exports.EventMintBatchCredits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventMintBatchCredits",
            value: exports.EventMintBatchCredits.encode(message).finish()
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
exports.EventTransfer = {
    typeUrl: "/regen.ecocredit.v1.EventTransfer",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventTransfer.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventTransfer.decode(message.value);
    },
    toProto(message) {
        return exports.EventTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventTransfer",
            value: exports.EventTransfer.encode(message).finish()
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
exports.EventRetire = {
    typeUrl: "/regen.ecocredit.v1.EventRetire",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventRetire.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventRetire.decode(message.value);
    },
    toProto(message) {
        return exports.EventRetire.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventRetire",
            value: exports.EventRetire.encode(message).finish()
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
exports.EventCancel = {
    typeUrl: "/regen.ecocredit.v1.EventCancel",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventCancel.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventCancel.decode(message.value);
    },
    toProto(message) {
        return exports.EventCancel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventCancel",
            value: exports.EventCancel.encode(message).finish()
        };
    }
};
function createBaseEventUpdateClassAdmin() {
    return {
        classId: ""
    };
}
exports.EventUpdateClassAdmin = {
    typeUrl: "/regen.ecocredit.v1.EventUpdateClassAdmin",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventUpdateClassAdmin.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventUpdateClassAdmin.decode(message.value);
    },
    toProto(message) {
        return exports.EventUpdateClassAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventUpdateClassAdmin",
            value: exports.EventUpdateClassAdmin.encode(message).finish()
        };
    }
};
function createBaseEventUpdateClassIssuers() {
    return {
        classId: ""
    };
}
exports.EventUpdateClassIssuers = {
    typeUrl: "/regen.ecocredit.v1.EventUpdateClassIssuers",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventUpdateClassIssuers.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventUpdateClassIssuers.decode(message.value);
    },
    toProto(message) {
        return exports.EventUpdateClassIssuers.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventUpdateClassIssuers",
            value: exports.EventUpdateClassIssuers.encode(message).finish()
        };
    }
};
function createBaseEventUpdateClassMetadata() {
    return {
        classId: ""
    };
}
exports.EventUpdateClassMetadata = {
    typeUrl: "/regen.ecocredit.v1.EventUpdateClassMetadata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventUpdateClassMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventUpdateClassMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.EventUpdateClassMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventUpdateClassMetadata",
            value: exports.EventUpdateClassMetadata.encode(message).finish()
        };
    }
};
function createBaseEventUpdateProjectAdmin() {
    return {
        projectId: ""
    };
}
exports.EventUpdateProjectAdmin = {
    typeUrl: "/regen.ecocredit.v1.EventUpdateProjectAdmin",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventUpdateProjectAdmin.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventUpdateProjectAdmin.decode(message.value);
    },
    toProto(message) {
        return exports.EventUpdateProjectAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventUpdateProjectAdmin",
            value: exports.EventUpdateProjectAdmin.encode(message).finish()
        };
    }
};
function createBaseEventUpdateProjectMetadata() {
    return {
        projectId: ""
    };
}
exports.EventUpdateProjectMetadata = {
    typeUrl: "/regen.ecocredit.v1.EventUpdateProjectMetadata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventUpdateProjectMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventUpdateProjectMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.EventUpdateProjectMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventUpdateProjectMetadata",
            value: exports.EventUpdateProjectMetadata.encode(message).finish()
        };
    }
};
function createBaseEventUpdateBatchMetadata() {
    return {
        batchDenom: ""
    };
}
exports.EventUpdateBatchMetadata = {
    typeUrl: "/regen.ecocredit.v1.EventUpdateBatchMetadata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventUpdateBatchMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventUpdateBatchMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.EventUpdateBatchMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventUpdateBatchMetadata",
            value: exports.EventUpdateBatchMetadata.encode(message).finish()
        };
    }
};
function createBaseEventSealBatch() {
    return {
        batchDenom: ""
    };
}
exports.EventSealBatch = {
    typeUrl: "/regen.ecocredit.v1.EventSealBatch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventSealBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventSealBatch.decode(message.value);
    },
    toProto(message) {
        return exports.EventSealBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventSealBatch",
            value: exports.EventSealBatch.encode(message).finish()
        };
    }
};
function createBaseEventAddCreditType() {
    return {
        abbreviation: ""
    };
}
exports.EventAddCreditType = {
    typeUrl: "/regen.ecocredit.v1.EventAddCreditType",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.abbreviation !== "") {
            writer.uint32(10).string(message.abbreviation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventAddCreditType.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventAddCreditType.decode(message.value);
    },
    toProto(message) {
        return exports.EventAddCreditType.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventAddCreditType",
            value: exports.EventAddCreditType.encode(message).finish()
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
exports.EventBridge = {
    typeUrl: "/regen.ecocredit.v1.EventBridge",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventBridge.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventBridge.decode(message.value);
    },
    toProto(message) {
        return exports.EventBridge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventBridge",
            value: exports.EventBridge.encode(message).finish()
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
exports.EventBridgeReceive = {
    typeUrl: "/regen.ecocredit.v1.EventBridgeReceive",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            types_1.OriginTx.encode(message.originTx, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.originTx = types_1.OriginTx.decode(reader, reader.uint32());
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
        message.originTx = object.originTx !== undefined && object.originTx !== null ? types_1.OriginTx.fromPartial(object.originTx) : undefined;
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
            message.originTx = types_1.OriginTx.fromAmino(object.origin_tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.amount = message.amount === "" ? undefined : message.amount;
        obj.origin_tx = message.originTx ? types_1.OriginTx.toAmino(message.originTx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventBridgeReceive.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventBridgeReceive.decode(message.value);
    },
    toProto(message) {
        return exports.EventBridgeReceive.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.EventBridgeReceive",
            value: exports.EventBridgeReceive.encode(message).finish()
        };
    }
};
