//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseEventCreateClass() {
    return {
        classId: "",
        admin: ""
    };
}
export const EventCreateClass = {
    typeUrl: "/regen.ecocredit.v1alpha1.EventCreateClass",
    encode(message, writer = BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
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
                case 2:
                    message.admin = reader.string();
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
        message.admin = object.admin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCreateClass();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId === "" ? undefined : message.classId;
        obj.admin = message.admin === "" ? undefined : message.admin;
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
            typeUrl: "/regen.ecocredit.v1alpha1.EventCreateClass",
            value: EventCreateClass.encode(message).finish()
        };
    }
};
function createBaseEventCreateBatch() {
    return {
        classId: "",
        batchDenom: "",
        issuer: "",
        totalAmount: "",
        startDate: "",
        endDate: "",
        projectLocation: ""
    };
}
export const EventCreateBatch = {
    typeUrl: "/regen.ecocredit.v1alpha1.EventCreateBatch",
    encode(message, writer = BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        if (message.issuer !== "") {
            writer.uint32(26).string(message.issuer);
        }
        if (message.totalAmount !== "") {
            writer.uint32(34).string(message.totalAmount);
        }
        if (message.startDate !== "") {
            writer.uint32(42).string(message.startDate);
        }
        if (message.endDate !== "") {
            writer.uint32(50).string(message.endDate);
        }
        if (message.projectLocation !== "") {
            writer.uint32(58).string(message.projectLocation);
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
                    message.classId = reader.string();
                    break;
                case 2:
                    message.batchDenom = reader.string();
                    break;
                case 3:
                    message.issuer = reader.string();
                    break;
                case 4:
                    message.totalAmount = reader.string();
                    break;
                case 5:
                    message.startDate = reader.string();
                    break;
                case 6:
                    message.endDate = reader.string();
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
        const message = createBaseEventCreateBatch();
        message.classId = object.classId ?? "";
        message.batchDenom = object.batchDenom ?? "";
        message.issuer = object.issuer ?? "";
        message.totalAmount = object.totalAmount ?? "";
        message.startDate = object.startDate ?? "";
        message.endDate = object.endDate ?? "";
        message.projectLocation = object.projectLocation ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCreateBatch();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        if (object.total_amount !== undefined && object.total_amount !== null) {
            message.totalAmount = object.total_amount;
        }
        if (object.start_date !== undefined && object.start_date !== null) {
            message.startDate = object.start_date;
        }
        if (object.end_date !== undefined && object.end_date !== null) {
            message.endDate = object.end_date;
        }
        if (object.project_location !== undefined && object.project_location !== null) {
            message.projectLocation = object.project_location;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId === "" ? undefined : message.classId;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.issuer = message.issuer === "" ? undefined : message.issuer;
        obj.total_amount = message.totalAmount === "" ? undefined : message.totalAmount;
        obj.start_date = message.startDate === "" ? undefined : message.startDate;
        obj.end_date = message.endDate === "" ? undefined : message.endDate;
        obj.project_location = message.projectLocation === "" ? undefined : message.projectLocation;
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
            typeUrl: "/regen.ecocredit.v1alpha1.EventCreateBatch",
            value: EventCreateBatch.encode(message).finish()
        };
    }
};
function createBaseEventReceive() {
    return {
        sender: "",
        recipient: "",
        batchDenom: "",
        tradableAmount: "",
        retiredAmount: "",
        basketDenom: ""
    };
}
export const EventReceive = {
    typeUrl: "/regen.ecocredit.v1alpha1.EventReceive",
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
        if (message.basketDenom !== "") {
            writer.uint32(50).string(message.basketDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventReceive();
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
                case 6:
                    message.basketDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventReceive();
        message.sender = object.sender ?? "";
        message.recipient = object.recipient ?? "";
        message.batchDenom = object.batchDenom ?? "";
        message.tradableAmount = object.tradableAmount ?? "";
        message.retiredAmount = object.retiredAmount ?? "";
        message.basketDenom = object.basketDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventReceive();
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
        if (object.basket_denom !== undefined && object.basket_denom !== null) {
            message.basketDenom = object.basket_denom;
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
        obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return EventReceive.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventReceive.decode(message.value);
    },
    toProto(message) {
        return EventReceive.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1alpha1.EventReceive",
            value: EventReceive.encode(message).finish()
        };
    }
};
function createBaseEventRetire() {
    return {
        retirer: "",
        batchDenom: "",
        amount: "",
        location: ""
    };
}
export const EventRetire = {
    typeUrl: "/regen.ecocredit.v1alpha1.EventRetire",
    encode(message, writer = BinaryWriter.create()) {
        if (message.retirer !== "") {
            writer.uint32(10).string(message.retirer);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.location !== "") {
            writer.uint32(34).string(message.location);
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
                    message.retirer = reader.string();
                    break;
                case 2:
                    message.batchDenom = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
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
        const message = createBaseEventRetire();
        message.retirer = object.retirer ?? "";
        message.batchDenom = object.batchDenom ?? "";
        message.amount = object.amount ?? "";
        message.location = object.location ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventRetire();
        if (object.retirer !== undefined && object.retirer !== null) {
            message.retirer = object.retirer;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.location !== undefined && object.location !== null) {
            message.location = object.location;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.retirer = message.retirer === "" ? undefined : message.retirer;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.amount = message.amount === "" ? undefined : message.amount;
        obj.location = message.location === "" ? undefined : message.location;
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
            typeUrl: "/regen.ecocredit.v1alpha1.EventRetire",
            value: EventRetire.encode(message).finish()
        };
    }
};
function createBaseEventCancel() {
    return {
        canceller: "",
        batchDenom: "",
        amount: ""
    };
}
export const EventCancel = {
    typeUrl: "/regen.ecocredit.v1alpha1.EventCancel",
    encode(message, writer = BinaryWriter.create()) {
        if (message.canceller !== "") {
            writer.uint32(10).string(message.canceller);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
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
                    message.canceller = reader.string();
                    break;
                case 2:
                    message.batchDenom = reader.string();
                    break;
                case 3:
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
        const message = createBaseEventCancel();
        message.canceller = object.canceller ?? "";
        message.batchDenom = object.batchDenom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCancel();
        if (object.canceller !== undefined && object.canceller !== null) {
            message.canceller = object.canceller;
        }
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
        obj.canceller = message.canceller === "" ? undefined : message.canceller;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.amount = message.amount === "" ? undefined : message.amount;
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
            typeUrl: "/regen.ecocredit.v1alpha1.EventCancel",
            value: EventCancel.encode(message).finish()
        };
    }
};
