"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRemoveAllowedDenom = exports.EventAllowDenom = exports.EventCancelSellOrder = exports.EventUpdateSellOrder = exports.EventBuyDirect = exports.EventSell = void 0;
//@ts-nocheck
const binary_1 = require("../../../../binary");
function createBaseEventSell() {
    return {
        sellOrderId: BigInt(0)
    };
}
exports.EventSell = {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventSell",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sellOrderId !== BigInt(0)) {
            writer.uint32(8).uint64(message.sellOrderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventSell.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventSell.decode(message.value);
    },
    toProto(message) {
        return exports.EventSell.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.EventSell",
            value: exports.EventSell.encode(message).finish()
        };
    }
};
function createBaseEventBuyDirect() {
    return {
        sellOrderId: BigInt(0)
    };
}
exports.EventBuyDirect = {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventBuyDirect",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sellOrderId !== BigInt(0)) {
            writer.uint32(8).uint64(message.sellOrderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventBuyDirect.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventBuyDirect.decode(message.value);
    },
    toProto(message) {
        return exports.EventBuyDirect.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.EventBuyDirect",
            value: exports.EventBuyDirect.encode(message).finish()
        };
    }
};
function createBaseEventUpdateSellOrder() {
    return {
        sellOrderId: BigInt(0)
    };
}
exports.EventUpdateSellOrder = {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventUpdateSellOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sellOrderId !== BigInt(0)) {
            writer.uint32(8).uint64(message.sellOrderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventUpdateSellOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventUpdateSellOrder.decode(message.value);
    },
    toProto(message) {
        return exports.EventUpdateSellOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.EventUpdateSellOrder",
            value: exports.EventUpdateSellOrder.encode(message).finish()
        };
    }
};
function createBaseEventCancelSellOrder() {
    return {
        sellOrderId: BigInt(0)
    };
}
exports.EventCancelSellOrder = {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventCancelSellOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sellOrderId !== BigInt(0)) {
            writer.uint32(8).uint64(message.sellOrderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventCancelSellOrder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventCancelSellOrder.decode(message.value);
    },
    toProto(message) {
        return exports.EventCancelSellOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.EventCancelSellOrder",
            value: exports.EventCancelSellOrder.encode(message).finish()
        };
    }
};
function createBaseEventAllowDenom() {
    return {
        denom: ""
    };
}
exports.EventAllowDenom = {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventAllowDenom",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventAllowDenom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventAllowDenom.decode(message.value);
    },
    toProto(message) {
        return exports.EventAllowDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.EventAllowDenom",
            value: exports.EventAllowDenom.encode(message).finish()
        };
    }
};
function createBaseEventRemoveAllowedDenom() {
    return {
        denom: ""
    };
}
exports.EventRemoveAllowedDenom = {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventRemoveAllowedDenom",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.EventRemoveAllowedDenom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventRemoveAllowedDenom.decode(message.value);
    },
    toProto(message) {
        return exports.EventRemoveAllowedDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.EventRemoveAllowedDenom",
            value: exports.EventRemoveAllowedDenom.encode(message).finish()
        };
    }
};
