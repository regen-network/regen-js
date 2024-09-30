//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseEventSell() {
    return {
        sellOrderId: BigInt(0)
    };
}
export const EventSell = {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventSell",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sellOrderId !== BigInt(0)) {
            writer.uint32(8).uint64(message.sellOrderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSell();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sellOrderId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventSell();
        message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? BigInt(object.sellOrderId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventSell();
        if (object.sell_order_id !== undefined && object.sell_order_id !== null) {
            message.sellOrderId = BigInt(object.sell_order_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sell_order_id = message.sellOrderId !== BigInt(0) ? message.sellOrderId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventSell.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventSell.decode(message.value);
    },
    toProto(message) {
        return EventSell.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.EventSell",
            value: EventSell.encode(message).finish()
        };
    }
};
function createBaseEventBuyDirect() {
    return {
        sellOrderId: BigInt(0)
    };
}
export const EventBuyDirect = {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventBuyDirect",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sellOrderId !== BigInt(0)) {
            writer.uint32(8).uint64(message.sellOrderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBuyDirect();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sellOrderId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventBuyDirect();
        message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? BigInt(object.sellOrderId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBuyDirect();
        if (object.sell_order_id !== undefined && object.sell_order_id !== null) {
            message.sellOrderId = BigInt(object.sell_order_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sell_order_id = message.sellOrderId !== BigInt(0) ? message.sellOrderId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventBuyDirect.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventBuyDirect.decode(message.value);
    },
    toProto(message) {
        return EventBuyDirect.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.EventBuyDirect",
            value: EventBuyDirect.encode(message).finish()
        };
    }
};
function createBaseEventUpdateSellOrder() {
    return {
        sellOrderId: BigInt(0)
    };
}
export const EventUpdateSellOrder = {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventUpdateSellOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sellOrderId !== BigInt(0)) {
            writer.uint32(8).uint64(message.sellOrderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateSellOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sellOrderId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateSellOrder();
        message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? BigInt(object.sellOrderId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateSellOrder();
        if (object.sell_order_id !== undefined && object.sell_order_id !== null) {
            message.sellOrderId = BigInt(object.sell_order_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sell_order_id = message.sellOrderId !== BigInt(0) ? message.sellOrderId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventUpdateSellOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventUpdateSellOrder.decode(message.value);
    },
    toProto(message) {
        return EventUpdateSellOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.EventUpdateSellOrder",
            value: EventUpdateSellOrder.encode(message).finish()
        };
    }
};
function createBaseEventCancelSellOrder() {
    return {
        sellOrderId: BigInt(0)
    };
}
export const EventCancelSellOrder = {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventCancelSellOrder",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sellOrderId !== BigInt(0)) {
            writer.uint32(8).uint64(message.sellOrderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCancelSellOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sellOrderId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventCancelSellOrder();
        message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? BigInt(object.sellOrderId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCancelSellOrder();
        if (object.sell_order_id !== undefined && object.sell_order_id !== null) {
            message.sellOrderId = BigInt(object.sell_order_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sell_order_id = message.sellOrderId !== BigInt(0) ? message.sellOrderId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCancelSellOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventCancelSellOrder.decode(message.value);
    },
    toProto(message) {
        return EventCancelSellOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.EventCancelSellOrder",
            value: EventCancelSellOrder.encode(message).finish()
        };
    }
};
function createBaseEventAllowDenom() {
    return {
        denom: ""
    };
}
export const EventAllowDenom = {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventAllowDenom",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAllowDenom();
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
        const message = createBaseEventAllowDenom();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventAllowDenom();
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
        return EventAllowDenom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventAllowDenom.decode(message.value);
    },
    toProto(message) {
        return EventAllowDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.EventAllowDenom",
            value: EventAllowDenom.encode(message).finish()
        };
    }
};
function createBaseEventRemoveAllowedDenom() {
    return {
        denom: ""
    };
}
export const EventRemoveAllowedDenom = {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventRemoveAllowedDenom",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventRemoveAllowedDenom();
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
        const message = createBaseEventRemoveAllowedDenom();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventRemoveAllowedDenom();
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
        return EventRemoveAllowedDenom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventRemoveAllowedDenom.decode(message.value);
    },
    toProto(message) {
        return EventRemoveAllowedDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.EventRemoveAllowedDenom",
            value: EventRemoveAllowedDenom.encode(message).finish()
        };
    }
};
