//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseMsgCreateClass() {
    return {
        admin: "",
        issuers: [],
        metadata: new Uint8Array(),
        creditTypeName: ""
    };
}
export const MsgCreateClass = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateClass",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            message.metadata = bytesFromBase64(object.metadata);
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
        obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
        obj.credit_type_name = message.creditTypeName === "" ? undefined : message.creditTypeName;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateClass.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateClass.decode(message.value);
    },
    toProto(message) {
        return MsgCreateClass.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateClass",
            value: MsgCreateClass.encode(message).finish()
        };
    }
};
function createBaseMsgCreateClassResponse() {
    return {
        classId: ""
    };
}
export const MsgCreateClassResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateClassResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgCreateClassResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateClassResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateClassResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateClassResponse",
            value: MsgCreateClassResponse.encode(message).finish()
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
export const MsgCreateBatch = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        for (const v of message.issuance) {
            MsgCreateBatch_BatchIssuance.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.metadata.length !== 0) {
            writer.uint32(34).bytes(message.metadata);
        }
        if (message.startDate !== undefined) {
            Timestamp.encode(toTimestamp(message.startDate), writer.uint32(42).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            Timestamp.encode(toTimestamp(message.endDate), writer.uint32(50).fork()).ldelim();
        }
        if (message.projectLocation !== "") {
            writer.uint32(58).string(message.projectLocation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.issuance.push(MsgCreateBatch_BatchIssuance.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.metadata = reader.bytes();
                    break;
                case 5:
                    message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
        message.issuance = object.issuance?.map(e => MsgCreateBatch_BatchIssuance.fromPartial(e)) || [];
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
        message.issuance = object.issuance?.map(e => MsgCreateBatch_BatchIssuance.fromAmino(e)) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = bytesFromBase64(object.metadata);
        }
        if (object.start_date !== undefined && object.start_date !== null) {
            message.startDate = fromTimestamp(Timestamp.fromAmino(object.start_date));
        }
        if (object.end_date !== undefined && object.end_date !== null) {
            message.endDate = fromTimestamp(Timestamp.fromAmino(object.end_date));
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
            obj.issuance = message.issuance.map(e => e ? MsgCreateBatch_BatchIssuance.toAmino(e) : undefined);
        }
        else {
            obj.issuance = message.issuance;
        }
        obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
        obj.start_date = message.startDate ? Timestamp.toAmino(toTimestamp(message.startDate)) : undefined;
        obj.end_date = message.endDate ? Timestamp.toAmino(toTimestamp(message.endDate)) : undefined;
        obj.project_location = message.projectLocation === "" ? undefined : message.projectLocation;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateBatch.decode(message.value);
    },
    toProto(message) {
        return MsgCreateBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatch",
            value: MsgCreateBatch.encode(message).finish()
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
export const MsgCreateBatch_BatchIssuance = {
    typeUrl: "/regen.ecocredit.v1alpha1.BatchIssuance",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgCreateBatch_BatchIssuance.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateBatch_BatchIssuance.decode(message.value);
    },
    toProto(message) {
        return MsgCreateBatch_BatchIssuance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.BatchIssuance",
            value: MsgCreateBatch_BatchIssuance.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBatchResponse() {
    return {
        batchDenom: ""
    };
}
export const MsgCreateBatchResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatchResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgCreateBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateBatchResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatchResponse",
            value: MsgCreateBatchResponse.encode(message).finish()
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
export const MsgSend = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgSend",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(18).string(message.recipient);
        }
        for (const v of message.credits) {
            MsgSend_SendCredits.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.credits.push(MsgSend_SendCredits.decode(reader, reader.uint32()));
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
        message.credits = object.credits?.map(e => MsgSend_SendCredits.fromPartial(e)) || [];
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
        message.credits = object.credits?.map(e => MsgSend_SendCredits.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? MsgSend_SendCredits.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSend.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSend.decode(message.value);
    },
    toProto(message) {
        return MsgSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgSend",
            value: MsgSend.encode(message).finish()
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
export const MsgSend_SendCredits = {
    typeUrl: "/regen.ecocredit.v1alpha1.SendCredits",
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
        if (message.retirementLocation !== "") {
            writer.uint32(34).string(message.retirementLocation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSend_SendCredits.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSend_SendCredits.decode(message.value);
    },
    toProto(message) {
        return MsgSend_SendCredits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.SendCredits",
            value: MsgSend_SendCredits.encode(message).finish()
        };
    }
};
function createBaseMsgSendResponse() {
    return {};
}
export const MsgSendResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgSendResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSendResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSendResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgSendResponse",
            value: MsgSendResponse.encode(message).finish()
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
export const MsgRetire = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgRetire",
    encode(message, writer = BinaryWriter.create()) {
        if (message.holder !== "") {
            writer.uint32(10).string(message.holder);
        }
        for (const v of message.credits) {
            MsgRetire_RetireCredits.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.location !== "") {
            writer.uint32(26).string(message.location);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRetire();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.holder = reader.string();
                    break;
                case 2:
                    message.credits.push(MsgRetire_RetireCredits.decode(reader, reader.uint32()));
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
        message.credits = object.credits?.map(e => MsgRetire_RetireCredits.fromPartial(e)) || [];
        message.location = object.location ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRetire();
        if (object.holder !== undefined && object.holder !== null) {
            message.holder = object.holder;
        }
        message.credits = object.credits?.map(e => MsgRetire_RetireCredits.fromAmino(e)) || [];
        if (object.location !== undefined && object.location !== null) {
            message.location = object.location;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.holder = message.holder === "" ? undefined : message.holder;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? MsgRetire_RetireCredits.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        obj.location = message.location === "" ? undefined : message.location;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRetire.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRetire.decode(message.value);
    },
    toProto(message) {
        return MsgRetire.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgRetire",
            value: MsgRetire.encode(message).finish()
        };
    }
};
function createBaseMsgRetire_RetireCredits() {
    return {
        batchDenom: "",
        amount: ""
    };
}
export const MsgRetire_RetireCredits = {
    typeUrl: "/regen.ecocredit.v1alpha1.RetireCredits",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgRetire_RetireCredits.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRetire_RetireCredits.decode(message.value);
    },
    toProto(message) {
        return MsgRetire_RetireCredits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.RetireCredits",
            value: MsgRetire_RetireCredits.encode(message).finish()
        };
    }
};
function createBaseMsgRetireResponse() {
    return {};
}
export const MsgRetireResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgRetireResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgRetireResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRetireResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRetireResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgRetireResponse",
            value: MsgRetireResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCancel() {
    return {
        holder: "",
        credits: []
    };
}
export const MsgCancel = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgCancel",
    encode(message, writer = BinaryWriter.create()) {
        if (message.holder !== "") {
            writer.uint32(10).string(message.holder);
        }
        for (const v of message.credits) {
            MsgCancel_CancelCredits.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.holder = reader.string();
                    break;
                case 2:
                    message.credits.push(MsgCancel_CancelCredits.decode(reader, reader.uint32()));
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
        message.credits = object.credits?.map(e => MsgCancel_CancelCredits.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancel();
        if (object.holder !== undefined && object.holder !== null) {
            message.holder = object.holder;
        }
        message.credits = object.credits?.map(e => MsgCancel_CancelCredits.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.holder = message.holder === "" ? undefined : message.holder;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? MsgCancel_CancelCredits.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancel.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCancel.decode(message.value);
    },
    toProto(message) {
        return MsgCancel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgCancel",
            value: MsgCancel.encode(message).finish()
        };
    }
};
function createBaseMsgCancel_CancelCredits() {
    return {
        batchDenom: "",
        amount: ""
    };
}
export const MsgCancel_CancelCredits = {
    typeUrl: "/regen.ecocredit.v1alpha1.CancelCredits",
    encode(message, writer = BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgCancel_CancelCredits.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCancel_CancelCredits.decode(message.value);
    },
    toProto(message) {
        return MsgCancel_CancelCredits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.CancelCredits",
            value: MsgCancel_CancelCredits.encode(message).finish()
        };
    }
};
function createBaseMsgCancelResponse() {
    return {};
}
export const MsgCancelResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgCancelResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgCancelResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCancelResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCancelResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgCancelResponse",
            value: MsgCancelResponse.encode(message).finish()
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
export const MsgUpdateClassAdmin = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgUpdateClassAdmin.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateClassAdmin.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateClassAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin",
            value: MsgUpdateClassAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassAdminResponse() {
    return {};
}
export const MsgUpdateClassAdminResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdminResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgUpdateClassAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateClassAdminResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateClassAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdminResponse",
            value: MsgUpdateClassAdminResponse.encode(message).finish()
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
export const MsgUpdateClassIssuers = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgUpdateClassIssuers.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateClassIssuers.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateClassIssuers.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers",
            value: MsgUpdateClassIssuers.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassIssuersResponse() {
    return {};
}
export const MsgUpdateClassIssuersResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuersResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgUpdateClassIssuersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateClassIssuersResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateClassIssuersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuersResponse",
            value: MsgUpdateClassIssuersResponse.encode(message).finish()
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
export const MsgUpdateClassMetadata = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            message.metadata = bytesFromBase64(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.class_id = message.classId === "" ? undefined : message.classId;
        obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateClassMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateClassMetadata.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateClassMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata",
            value: MsgUpdateClassMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassMetadataResponse() {
    return {};
}
export const MsgUpdateClassMetadataResponse = {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadataResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgUpdateClassMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateClassMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateClassMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadataResponse",
            value: MsgUpdateClassMetadataResponse.encode(message).finish()
        };
    }
};
