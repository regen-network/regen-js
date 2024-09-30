"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateClassMetadataResponse = exports.MsgUpdateClassMetadata = exports.MsgUpdateClassIssuersResponse = exports.MsgUpdateClassIssuers = exports.MsgUpdateClassAdminResponse = exports.MsgUpdateClassAdmin = exports.MsgCancelResponse = exports.MsgCancel_CancelCredits = exports.MsgCancel = exports.MsgRetireResponse = exports.MsgRetire_RetireCredits = exports.MsgRetire = exports.MsgSendResponse = exports.MsgSend_SendCredits = exports.MsgSend = exports.MsgCreateBatchResponse = exports.MsgCreateBatch_BatchIssuance = exports.MsgCreateBatch = exports.MsgCreateClassResponse = exports.MsgCreateClass = void 0;
//@ts-nocheck
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseMsgCreateClass() {
    return {
        admin: "",
        issuers: [],
        metadata: new Uint8Array(),
        creditTypeName: ""
    };
}
exports.MsgCreateClass = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateClass",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.issuers) {
            writer.uint32(18).string(v);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(26).bytes(message.metadata);
        }
        if (message.creditTypeName !== "") {
            writer.uint32(34).string(message.creditTypeName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClass();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.issuers.push(reader.string());
                    break;
                case 3:
                    message.metadata = reader.bytes();
                    break;
                case 4:
                    message.creditTypeName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateClass();
        message.admin = object.admin ?? "";
        message.issuers = object.issuers?.map(e => e) || [];
        message.metadata = object.metadata ?? new Uint8Array();
        message.creditTypeName = object.creditTypeName ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateClass();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        message.issuers = object.issuers?.map(e => e) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = (0, helpers_1.bytesFromBase64)(object.metadata);
        }
        if (object.credit_type_name !== undefined && object.credit_type_name !== null) {
            message.creditTypeName = object.credit_type_name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        if (message.issuers) {
            obj.issuers = message.issuers.map(e => e);
        }
        else {
            obj.issuers = message.issuers;
        }
        obj.metadata = message.metadata ? (0, helpers_1.base64FromBytes)(message.metadata) : undefined;
        obj.credit_type_name = message.creditTypeName === "" ? undefined : message.creditTypeName;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateClass.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateClass.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateClass.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateClass",
            value: exports.MsgCreateClass.encode(message).finish()
        };
    }
};
function createBaseMsgCreateClassResponse() {
    return {
        classId: ""
    };
}
exports.MsgCreateClassResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateClassResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClassResponse();
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
        const message = createBaseMsgCreateClassResponse();
        message.classId = object.classId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateClassResponse();
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
        return exports.MsgCreateClassResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateClassResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateClassResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateClassResponse",
            value: exports.MsgCreateClassResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBatch() {
    return {
        issuer: "",
        classId: "",
        issuance: [],
        metadata: new Uint8Array(),
        startDate: undefined,
        endDate: undefined,
        projectLocation: ""
    };
}
exports.MsgCreateBatch = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        for (const v of message.issuance) {
            exports.MsgCreateBatch_BatchIssuance.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.metadata.length !== 0) {
            writer.uint32(34).bytes(message.metadata);
        }
        if (message.startDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startDate), writer.uint32(42).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.endDate), writer.uint32(50).fork()).ldelim();
        }
        if (message.projectLocation !== "") {
            writer.uint32(58).string(message.projectLocation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.issuer = reader.string();
                    break;
                case 2:
                    message.classId = reader.string();
                    break;
                case 3:
                    message.issuance.push(exports.MsgCreateBatch_BatchIssuance.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.metadata = reader.bytes();
                    break;
                case 5:
                    message.startDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.endDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.projectLocation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateBatch();
        message.issuer = object.issuer ?? "";
        message.classId = object.classId ?? "";
        message.issuance = object.issuance?.map(e => exports.MsgCreateBatch_BatchIssuance.fromPartial(e)) || [];
        message.metadata = object.metadata ?? new Uint8Array();
        message.startDate = object.startDate ?? undefined;
        message.endDate = object.endDate ?? undefined;
        message.projectLocation = object.projectLocation ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateBatch();
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        message.issuance = object.issuance?.map(e => exports.MsgCreateBatch_BatchIssuance.fromAmino(e)) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = (0, helpers_1.bytesFromBase64)(object.metadata);
        }
        if (object.start_date !== undefined && object.start_date !== null) {
            message.startDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_date));
        }
        if (object.end_date !== undefined && object.end_date !== null) {
            message.endDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.end_date));
        }
        if (object.project_location !== undefined && object.project_location !== null) {
            message.projectLocation = object.project_location;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.issuer = message.issuer === "" ? undefined : message.issuer;
        obj.class_id = message.classId === "" ? undefined : message.classId;
        if (message.issuance) {
            obj.issuance = message.issuance.map(e => e ? exports.MsgCreateBatch_BatchIssuance.toAmino(e) : undefined);
        }
        else {
            obj.issuance = message.issuance;
        }
        obj.metadata = message.metadata ? (0, helpers_1.base64FromBytes)(message.metadata) : undefined;
        obj.start_date = message.startDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startDate)) : undefined;
        obj.end_date = message.endDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.endDate)) : undefined;
        obj.project_location = message.projectLocation === "" ? undefined : message.projectLocation;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateBatch.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatch",
            value: exports.MsgCreateBatch.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBatch_BatchIssuance() {
    return {
        recipient: "",
        tradableAmount: "",
        retiredAmount: "",
        retirementLocation: ""
    };
}
exports.MsgCreateBatch_BatchIssuance = {
    typeUrl: "/regen.ecocredit.v1alpha1.BatchIssuance",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.recipient !== "") {
            writer.uint32(10).string(message.recipient);
        }
        if (message.tradableAmount !== "") {
            writer.uint32(18).string(message.tradableAmount);
        }
        if (message.retiredAmount !== "") {
            writer.uint32(26).string(message.retiredAmount);
        }
        if (message.retirementLocation !== "") {
            writer.uint32(34).string(message.retirementLocation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBatch_BatchIssuance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recipient = reader.string();
                    break;
                case 2:
                    message.tradableAmount = reader.string();
                    break;
                case 3:
                    message.retiredAmount = reader.string();
                    break;
                case 4:
                    message.retirementLocation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateBatch_BatchIssuance();
        message.recipient = object.recipient ?? "";
        message.tradableAmount = object.tradableAmount ?? "";
        message.retiredAmount = object.retiredAmount ?? "";
        message.retirementLocation = object.retirementLocation ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateBatch_BatchIssuance();
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
            message.tradableAmount = object.tradable_amount;
        }
        if (object.retired_amount !== undefined && object.retired_amount !== null) {
            message.retiredAmount = object.retired_amount;
        }
        if (object.retirement_location !== undefined && object.retirement_location !== null) {
            message.retirementLocation = object.retirement_location;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
        obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
        obj.retirement_location = message.retirementLocation === "" ? undefined : message.retirementLocation;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateBatch_BatchIssuance.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateBatch_BatchIssuance.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateBatch_BatchIssuance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.BatchIssuance",
            value: exports.MsgCreateBatch_BatchIssuance.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBatchResponse() {
    return {
        batchDenom: ""
    };
}
exports.MsgCreateBatchResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatchResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBatchResponse();
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
        const message = createBaseMsgCreateBatchResponse();
        message.batchDenom = object.batchDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateBatchResponse();
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
        return exports.MsgCreateBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateBatchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatchResponse",
            value: exports.MsgCreateBatchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSend() {
    return {
        sender: "",
        recipient: "",
        credits: []
    };
}
exports.MsgSend = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgSend",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(18).string(message.recipient);
        }
        for (const v of message.credits) {
            exports.MsgSend_SendCredits.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSend();
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
                    message.credits.push(exports.MsgSend_SendCredits.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSend();
        message.sender = object.sender ?? "";
        message.recipient = object.recipient ?? "";
        message.credits = object.credits?.map(e => exports.MsgSend_SendCredits.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSend();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        message.credits = object.credits?.map(e => exports.MsgSend_SendCredits.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? exports.MsgSend_SendCredits.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSend.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSend.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgSend",
            value: exports.MsgSend.encode(message).finish()
        };
    }
};
function createBaseMsgSend_SendCredits() {
    return {
        batchDenom: "",
        tradableAmount: "",
        retiredAmount: "",
        retirementLocation: ""
    };
}
exports.MsgSend_SendCredits = {
    typeUrl: "/regen.ecocredit.v1alpha1.SendCredits",
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
        if (message.retirementLocation !== "") {
            writer.uint32(34).string(message.retirementLocation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSend_SendCredits();
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
                case 4:
                    message.retirementLocation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSend_SendCredits();
        message.batchDenom = object.batchDenom ?? "";
        message.tradableAmount = object.tradableAmount ?? "";
        message.retiredAmount = object.retiredAmount ?? "";
        message.retirementLocation = object.retirementLocation ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSend_SendCredits();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
            message.tradableAmount = object.tradable_amount;
        }
        if (object.retired_amount !== undefined && object.retired_amount !== null) {
            message.retiredAmount = object.retired_amount;
        }
        if (object.retirement_location !== undefined && object.retirement_location !== null) {
            message.retirementLocation = object.retirement_location;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
        obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
        obj.retirement_location = message.retirementLocation === "" ? undefined : message.retirementLocation;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSend_SendCredits.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSend_SendCredits.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSend_SendCredits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.SendCredits",
            value: exports.MsgSend_SendCredits.encode(message).finish()
        };
    }
};
function createBaseMsgSendResponse() {
    return {};
}
exports.MsgSendResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgSendResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendResponse();
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
        const message = createBaseMsgSendResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSendResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSendResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSendResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgSendResponse",
            value: exports.MsgSendResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRetire() {
    return {
        holder: "",
        credits: [],
        location: ""
    };
}
exports.MsgRetire = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgRetire",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.holder !== "") {
            writer.uint32(10).string(message.holder);
        }
        for (const v of message.credits) {
            exports.MsgRetire_RetireCredits.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.location !== "") {
            writer.uint32(26).string(message.location);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRetire();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.holder = reader.string();
                    break;
                case 2:
                    message.credits.push(exports.MsgRetire_RetireCredits.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.location = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRetire();
        message.holder = object.holder ?? "";
        message.credits = object.credits?.map(e => exports.MsgRetire_RetireCredits.fromPartial(e)) || [];
        message.location = object.location ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRetire();
        if (object.holder !== undefined && object.holder !== null) {
            message.holder = object.holder;
        }
        message.credits = object.credits?.map(e => exports.MsgRetire_RetireCredits.fromAmino(e)) || [];
        if (object.location !== undefined && object.location !== null) {
            message.location = object.location;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.holder = message.holder === "" ? undefined : message.holder;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? exports.MsgRetire_RetireCredits.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        obj.location = message.location === "" ? undefined : message.location;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRetire.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRetire.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRetire.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgRetire",
            value: exports.MsgRetire.encode(message).finish()
        };
    }
};
function createBaseMsgRetire_RetireCredits() {
    return {
        batchDenom: "",
        amount: ""
    };
}
exports.MsgRetire_RetireCredits = {
    typeUrl: "/regen.ecocredit.v1alpha1.RetireCredits",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRetire_RetireCredits();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRetire_RetireCredits();
        message.batchDenom = object.batchDenom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRetire_RetireCredits();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRetire_RetireCredits.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRetire_RetireCredits.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRetire_RetireCredits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.RetireCredits",
            value: exports.MsgRetire_RetireCredits.encode(message).finish()
        };
    }
};
function createBaseMsgRetireResponse() {
    return {};
}
exports.MsgRetireResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgRetireResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRetireResponse();
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
        const message = createBaseMsgRetireResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRetireResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRetireResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRetireResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRetireResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgRetireResponse",
            value: exports.MsgRetireResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCancel() {
    return {
        holder: "",
        credits: []
    };
}
exports.MsgCancel = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgCancel",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.holder !== "") {
            writer.uint32(10).string(message.holder);
        }
        for (const v of message.credits) {
            exports.MsgCancel_CancelCredits.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.holder = reader.string();
                    break;
                case 2:
                    message.credits.push(exports.MsgCancel_CancelCredits.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCancel();
        message.holder = object.holder ?? "";
        message.credits = object.credits?.map(e => exports.MsgCancel_CancelCredits.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancel();
        if (object.holder !== undefined && object.holder !== null) {
            message.holder = object.holder;
        }
        message.credits = object.credits?.map(e => exports.MsgCancel_CancelCredits.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.holder = message.holder === "" ? undefined : message.holder;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? exports.MsgCancel_CancelCredits.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancel.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancel.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgCancel",
            value: exports.MsgCancel.encode(message).finish()
        };
    }
};
function createBaseMsgCancel_CancelCredits() {
    return {
        batchDenom: "",
        amount: ""
    };
}
exports.MsgCancel_CancelCredits = {
    typeUrl: "/regen.ecocredit.v1alpha1.CancelCredits",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancel_CancelCredits();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCancel_CancelCredits();
        message.batchDenom = object.batchDenom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancel_CancelCredits();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancel_CancelCredits.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancel_CancelCredits.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancel_CancelCredits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.CancelCredits",
            value: exports.MsgCancel_CancelCredits.encode(message).finish()
        };
    }
};
function createBaseMsgCancelResponse() {
    return {};
}
exports.MsgCancelResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgCancelResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelResponse();
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
        const message = createBaseMsgCancelResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCancelResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancelResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancelResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgCancelResponse",
            value: exports.MsgCancelResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassAdmin() {
    return {
        admin: "",
        classId: "",
        newAdmin: ""
    };
}
exports.MsgUpdateClassAdmin = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.classId = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateClassAdmin();
        message.admin = object.admin ?? "";
        message.classId = object.classId ?? "";
        message.newAdmin = object.newAdmin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateClassAdmin();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.new_admin !== undefined && object.new_admin !== null) {
            message.newAdmin = object.new_admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.class_id = message.classId === "" ? undefined : message.classId;
        obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateClassAdmin.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassAdmin.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin",
            value: exports.MsgUpdateClassAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassAdminResponse() {
    return {};
}
exports.MsgUpdateClassAdminResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdminResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassAdminResponse();
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
        const message = createBaseMsgUpdateClassAdminResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateClassAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateClassAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdminResponse",
            value: exports.MsgUpdateClassAdminResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassIssuers() {
    return {
        admin: "",
        classId: "",
        issuers: []
    };
}
exports.MsgUpdateClassIssuers = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        for (const v of message.issuers) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassIssuers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.classId = reader.string();
                    break;
                case 3:
                    message.issuers.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateClassIssuers();
        message.admin = object.admin ?? "";
        message.classId = object.classId ?? "";
        message.issuers = object.issuers?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateClassIssuers();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        message.issuers = object.issuers?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.class_id = message.classId === "" ? undefined : message.classId;
        if (message.issuers) {
            obj.issuers = message.issuers.map(e => e);
        }
        else {
            obj.issuers = message.issuers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateClassIssuers.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassIssuers.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassIssuers.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers",
            value: exports.MsgUpdateClassIssuers.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassIssuersResponse() {
    return {};
}
exports.MsgUpdateClassIssuersResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuersResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassIssuersResponse();
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
        const message = createBaseMsgUpdateClassIssuersResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateClassIssuersResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateClassIssuersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassIssuersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassIssuersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuersResponse",
            value: exports.MsgUpdateClassIssuersResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassMetadata() {
    return {
        admin: "",
        classId: "",
        metadata: new Uint8Array()
    };
}
exports.MsgUpdateClassMetadata = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(26).bytes(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.classId = reader.string();
                    break;
                case 3:
                    message.metadata = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateClassMetadata();
        message.admin = object.admin ?? "";
        message.classId = object.classId ?? "";
        message.metadata = object.metadata ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateClassMetadata();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = (0, helpers_1.bytesFromBase64)(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.class_id = message.classId === "" ? undefined : message.classId;
        obj.metadata = message.metadata ? (0, helpers_1.base64FromBytes)(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateClassMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata",
            value: exports.MsgUpdateClassMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassMetadataResponse() {
    return {};
}
exports.MsgUpdateClassMetadataResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadataResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassMetadataResponse();
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
        const message = createBaseMsgUpdateClassMetadataResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateClassMetadataResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateClassMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadataResponse",
            value: exports.MsgUpdateClassMetadataResponse.encode(message).finish()
        };
    }
};
