//@ts-nocheck
import { BasketCredit } from "./types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseEventCreate() {
    return {
        basketDenom: "",
        curator: ""
    };
}
export const EventCreate = {
    typeUrl: "/regen.ecocredit.basket.v1.EventCreate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.basketDenom !== "") {
            writer.uint32(10).string(message.basketDenom);
        }
        if (message.curator !== "") {
            writer.uint32(18).string(message.curator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basketDenom = reader.string();
                    break;
                case 2:
                    message.curator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventCreate();
        message.basketDenom = object.basketDenom ?? "";
        message.curator = object.curator ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCreate();
        if (object.basket_denom !== undefined && object.basket_denom !== null) {
            message.basketDenom = object.basket_denom;
        }
        if (object.curator !== undefined && object.curator !== null) {
            message.curator = object.curator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
        obj.curator = message.curator === "" ? undefined : message.curator;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCreate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventCreate.decode(message.value);
    },
    toProto(message) {
        return EventCreate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.EventCreate",
            value: EventCreate.encode(message).finish()
        };
    }
};
function createBaseEventPut() {
    return {
        owner: "",
        basketDenom: "",
        credits: [],
        amount: ""
    };
}
export const EventPut = {
    typeUrl: "/regen.ecocredit.basket.v1.EventPut",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.basketDenom !== "") {
            writer.uint32(18).string(message.basketDenom);
        }
        for (const v of message.credits) {
            BasketCredit.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventPut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.basketDenom = reader.string();
                    break;
                case 3:
                    message.credits.push(BasketCredit.decode(reader, reader.uint32()));
                    break;
                case 4:
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
        const message = createBaseEventPut();
        message.owner = object.owner ?? "";
        message.basketDenom = object.basketDenom ?? "";
        message.credits = object.credits?.map(e => BasketCredit.fromPartial(e)) || [];
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventPut();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.basket_denom !== undefined && object.basket_denom !== null) {
            message.basketDenom = object.basket_denom;
        }
        message.credits = object.credits?.map(e => BasketCredit.fromAmino(e)) || [];
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? BasketCredit.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return EventPut.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventPut.decode(message.value);
    },
    toProto(message) {
        return EventPut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.EventPut",
            value: EventPut.encode(message).finish()
        };
    }
};
function createBaseEventTake() {
    return {
        owner: "",
        basketDenom: "",
        credits: [],
        amount: ""
    };
}
export const EventTake = {
    typeUrl: "/regen.ecocredit.basket.v1.EventTake",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.basketDenom !== "") {
            writer.uint32(18).string(message.basketDenom);
        }
        for (const v of message.credits) {
            BasketCredit.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTake();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.basketDenom = reader.string();
                    break;
                case 3:
                    message.credits.push(BasketCredit.decode(reader, reader.uint32()));
                    break;
                case 4:
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
        const message = createBaseEventTake();
        message.owner = object.owner ?? "";
        message.basketDenom = object.basketDenom ?? "";
        message.credits = object.credits?.map(e => BasketCredit.fromPartial(e)) || [];
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventTake();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.basket_denom !== undefined && object.basket_denom !== null) {
            message.basketDenom = object.basket_denom;
        }
        message.credits = object.credits?.map(e => BasketCredit.fromAmino(e)) || [];
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? BasketCredit.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return EventTake.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventTake.decode(message.value);
    },
    toProto(message) {
        return EventTake.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.EventTake",
            value: EventTake.encode(message).finish()
        };
    }
};
function createBaseEventUpdateCurator() {
    return {
        denom: ""
    };
}
export const EventUpdateCurator = {
    typeUrl: "/regen.ecocredit.basket.v1.EventUpdateCurator",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateCurator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateCurator();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateCurator();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return EventUpdateCurator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventUpdateCurator.decode(message.value);
    },
    toProto(message) {
        return EventUpdateCurator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.EventUpdateCurator",
            value: EventUpdateCurator.encode(message).finish()
        };
    }
};
function createBaseEventUpdateDateCriteria() {
    return {
        denom: ""
    };
}
export const EventUpdateDateCriteria = {
    typeUrl: "/regen.ecocredit.basket.v1.EventUpdateDateCriteria",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateDateCriteria();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateDateCriteria();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateDateCriteria();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom === "" ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return EventUpdateDateCriteria.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventUpdateDateCriteria.decode(message.value);
    },
    toProto(message) {
        return EventUpdateDateCriteria.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.basket.v1.EventUpdateDateCriteria",
            value: EventUpdateDateCriteria.encode(message).finish()
        };
    }
};
