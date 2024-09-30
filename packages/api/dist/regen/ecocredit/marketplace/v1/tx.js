"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgRemoveAllowedDenomResponse = exports.MsgRemoveAllowedDenom = exports.MsgAddAllowedDenomResponse = exports.MsgAddAllowedDenom = exports.MsgBuyDirectResponse = exports.MsgBuyDirect_Order = exports.MsgBuyDirect = exports.MsgCancelSellOrderResponse = exports.MsgCancelSellOrder = exports.MsgUpdateSellOrdersResponse = exports.MsgUpdateSellOrders_Update = exports.MsgUpdateSellOrders = exports.MsgSellResponse = exports.MsgSell_Order = exports.MsgSell = void 0;
//@ts-nocheck
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
function createBaseMsgSell() {
    return {
        seller: "",
        orders: []
    };
}
exports.MsgSell = {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.seller !== "") {
            writer.uint32(10).string(message.seller);
        }
        for (const v of message.orders) {
            exports.MsgSell_Order.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSell();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seller = reader.string();
                    break;
                case 2:
                    message.orders.push(exports.MsgSell_Order.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSell();
        message.seller = object.seller ?? "";
        message.orders = object.orders?.map(e => exports.MsgSell_Order.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSell();
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = object.seller;
        }
        message.orders = object.orders?.map(e => exports.MsgSell_Order.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.seller = message.seller === "" ? undefined : message.seller;
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? exports.MsgSell_Order.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSell.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen.marketplace/MsgSell",
            value: exports.MsgSell.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSell.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSell.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
            value: exports.MsgSell.encode(message).finish()
        };
    }
};
function createBaseMsgSell_Order() {
    return {
        batchDenom: "",
        quantity: "",
        askPrice: undefined,
        disableAutoRetire: false,
        expiration: undefined
    };
}
exports.MsgSell_Order = {
    typeUrl: "/regen.ecocredit.marketplace.v1.Order",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.quantity !== "") {
            writer.uint32(18).string(message.quantity);
        }
        if (message.askPrice !== undefined) {
            coin_1.Coin.encode(message.askPrice, writer.uint32(26).fork()).ldelim();
        }
        if (message.disableAutoRetire === true) {
            writer.uint32(32).bool(message.disableAutoRetire);
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.expiration), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSell_Order();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
                    break;
                case 2:
                    message.quantity = reader.string();
                    break;
                case 3:
                    message.askPrice = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.disableAutoRetire = reader.bool();
                    break;
                case 5:
                    message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSell_Order();
        message.batchDenom = object.batchDenom ?? "";
        message.quantity = object.quantity ?? "";
        message.askPrice = object.askPrice !== undefined && object.askPrice !== null ? coin_1.Coin.fromPartial(object.askPrice) : undefined;
        message.disableAutoRetire = object.disableAutoRetire ?? false;
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSell_Order();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        if (object.ask_price !== undefined && object.ask_price !== null) {
            message.askPrice = coin_1.Coin.fromAmino(object.ask_price);
        }
        if (object.disable_auto_retire !== undefined && object.disable_auto_retire !== null) {
            message.disableAutoRetire = object.disable_auto_retire;
        }
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.expiration));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.quantity = message.quantity === "" ? undefined : message.quantity;
        obj.ask_price = message.askPrice ? coin_1.Coin.toAmino(message.askPrice) : undefined;
        obj.disable_auto_retire = message.disableAutoRetire === false ? undefined : message.disableAutoRetire;
        obj.expiration = message.expiration ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.expiration)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSell_Order.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSell_Order.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSell_Order.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.Order",
            value: exports.MsgSell_Order.encode(message).finish()
        };
    }
};
function createBaseMsgSellResponse() {
    return {
        sellOrderIds: []
    };
}
exports.MsgSellResponse = {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgSellResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.sellOrderIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSellResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sellOrderIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.sellOrderIds.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSellResponse();
        message.sellOrderIds = object.sellOrderIds?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSellResponse();
        message.sellOrderIds = object.sell_order_ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.sellOrderIds) {
            obj.sell_order_ids = message.sellOrderIds.map(e => e.toString());
        }
        else {
            obj.sell_order_ids = message.sellOrderIds;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSellResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSellResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSellResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.MsgSellResponse",
            value: exports.MsgSellResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateSellOrders() {
    return {
        seller: "",
        updates: []
    };
}
exports.MsgUpdateSellOrders = {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.seller !== "") {
            writer.uint32(10).string(message.seller);
        }
        for (const v of message.updates) {
            exports.MsgUpdateSellOrders_Update.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateSellOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seller = reader.string();
                    break;
                case 2:
                    message.updates.push(exports.MsgUpdateSellOrders_Update.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateSellOrders();
        message.seller = object.seller ?? "";
        message.updates = object.updates?.map(e => exports.MsgUpdateSellOrders_Update.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateSellOrders();
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = object.seller;
        }
        message.updates = object.updates?.map(e => exports.MsgUpdateSellOrders_Update.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.seller = message.seller === "" ? undefined : message.seller;
        if (message.updates) {
            obj.updates = message.updates.map(e => e ? exports.MsgUpdateSellOrders_Update.toAmino(e) : undefined);
        }
        else {
            obj.updates = message.updates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateSellOrders.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen.marketplace/MsgUpdateSellOrders",
            value: exports.MsgUpdateSellOrders.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateSellOrders.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateSellOrders.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
            value: exports.MsgUpdateSellOrders.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateSellOrders_Update() {
    return {
        sellOrderId: BigInt(0),
        newQuantity: "",
        newAskPrice: undefined,
        disableAutoRetire: false,
        newExpiration: undefined
    };
}
exports.MsgUpdateSellOrders_Update = {
    typeUrl: "/regen.ecocredit.marketplace.v1.Update",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sellOrderId !== BigInt(0)) {
            writer.uint32(8).uint64(message.sellOrderId);
        }
        if (message.newQuantity !== "") {
            writer.uint32(18).string(message.newQuantity);
        }
        if (message.newAskPrice !== undefined) {
            coin_1.Coin.encode(message.newAskPrice, writer.uint32(26).fork()).ldelim();
        }
        if (message.disableAutoRetire === true) {
            writer.uint32(32).bool(message.disableAutoRetire);
        }
        if (message.newExpiration !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.newExpiration), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateSellOrders_Update();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sellOrderId = reader.uint64();
                    break;
                case 2:
                    message.newQuantity = reader.string();
                    break;
                case 3:
                    message.newAskPrice = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.disableAutoRetire = reader.bool();
                    break;
                case 5:
                    message.newExpiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateSellOrders_Update();
        message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? BigInt(object.sellOrderId.toString()) : BigInt(0);
        message.newQuantity = object.newQuantity ?? "";
        message.newAskPrice = object.newAskPrice !== undefined && object.newAskPrice !== null ? coin_1.Coin.fromPartial(object.newAskPrice) : undefined;
        message.disableAutoRetire = object.disableAutoRetire ?? false;
        message.newExpiration = object.newExpiration ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateSellOrders_Update();
        if (object.sell_order_id !== undefined && object.sell_order_id !== null) {
            message.sellOrderId = BigInt(object.sell_order_id);
        }
        if (object.new_quantity !== undefined && object.new_quantity !== null) {
            message.newQuantity = object.new_quantity;
        }
        if (object.new_ask_price !== undefined && object.new_ask_price !== null) {
            message.newAskPrice = coin_1.Coin.fromAmino(object.new_ask_price);
        }
        if (object.disable_auto_retire !== undefined && object.disable_auto_retire !== null) {
            message.disableAutoRetire = object.disable_auto_retire;
        }
        if (object.new_expiration !== undefined && object.new_expiration !== null) {
            message.newExpiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.new_expiration));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sell_order_id = message.sellOrderId !== BigInt(0) ? message.sellOrderId.toString() : undefined;
        obj.new_quantity = message.newQuantity === "" ? undefined : message.newQuantity;
        obj.new_ask_price = message.newAskPrice ? coin_1.Coin.toAmino(message.newAskPrice) : undefined;
        obj.disable_auto_retire = message.disableAutoRetire === false ? undefined : message.disableAutoRetire;
        obj.new_expiration = message.newExpiration ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.newExpiration)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateSellOrders_Update.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateSellOrders_Update.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateSellOrders_Update.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.Update",
            value: exports.MsgUpdateSellOrders_Update.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateSellOrdersResponse() {
    return {};
}
exports.MsgUpdateSellOrdersResponse = {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrdersResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateSellOrdersResponse();
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
        const message = createBaseMsgUpdateSellOrdersResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateSellOrdersResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateSellOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateSellOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateSellOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrdersResponse",
            value: exports.MsgUpdateSellOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCancelSellOrder() {
    return {
        seller: "",
        sellOrderId: BigInt(0)
    };
}
exports.MsgCancelSellOrder = {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.seller !== "") {
            writer.uint32(10).string(message.seller);
        }
        if (message.sellOrderId !== BigInt(0)) {
            writer.uint32(16).uint64(message.sellOrderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelSellOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seller = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgCancelSellOrder();
        message.seller = object.seller ?? "";
        message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? BigInt(object.sellOrderId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancelSellOrder();
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = object.seller;
        }
        if (object.sell_order_id !== undefined && object.sell_order_id !== null) {
            message.sellOrderId = BigInt(object.sell_order_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.seller = message.seller === "" ? undefined : message.seller;
        obj.sell_order_id = message.sellOrderId !== BigInt(0) ? message.sellOrderId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancelSellOrder.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen.marketplace/MsgCancelSellOrder",
            value: exports.MsgCancelSellOrder.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCancelSellOrder.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelSellOrder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
            value: exports.MsgCancelSellOrder.encode(message).finish()
        };
    }
};
function createBaseMsgCancelSellOrderResponse() {
    return {};
}
exports.MsgCancelSellOrderResponse = {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrderResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelSellOrderResponse();
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
        const message = createBaseMsgCancelSellOrderResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCancelSellOrderResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancelSellOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancelSellOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelSellOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrderResponse",
            value: exports.MsgCancelSellOrderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBuyDirect() {
    return {
        buyer: "",
        orders: []
    };
}
exports.MsgBuyDirect = {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.buyer !== "") {
            writer.uint32(10).string(message.buyer);
        }
        for (const v of message.orders) {
            exports.MsgBuyDirect_Order.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBuyDirect();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buyer = reader.string();
                    break;
                case 2:
                    message.orders.push(exports.MsgBuyDirect_Order.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBuyDirect();
        message.buyer = object.buyer ?? "";
        message.orders = object.orders?.map(e => exports.MsgBuyDirect_Order.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBuyDirect();
        if (object.buyer !== undefined && object.buyer !== null) {
            message.buyer = object.buyer;
        }
        message.orders = object.orders?.map(e => exports.MsgBuyDirect_Order.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.buyer = message.buyer === "" ? undefined : message.buyer;
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? exports.MsgBuyDirect_Order.toAmino(e) : undefined);
        }
        else {
            obj.orders = message.orders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBuyDirect.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen.marketplace/MsgBuyDirect",
            value: exports.MsgBuyDirect.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBuyDirect.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBuyDirect.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
            value: exports.MsgBuyDirect.encode(message).finish()
        };
    }
};
function createBaseMsgBuyDirect_Order() {
    return {
        sellOrderId: BigInt(0),
        quantity: "",
        bidPrice: undefined,
        disableAutoRetire: false,
        retirementJurisdiction: "",
        retirementReason: ""
    };
}
exports.MsgBuyDirect_Order = {
    typeUrl: "/regen.ecocredit.marketplace.v1.Order",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sellOrderId !== BigInt(0)) {
            writer.uint32(16).uint64(message.sellOrderId);
        }
        if (message.quantity !== "") {
            writer.uint32(26).string(message.quantity);
        }
        if (message.bidPrice !== undefined) {
            coin_1.Coin.encode(message.bidPrice, writer.uint32(34).fork()).ldelim();
        }
        if (message.disableAutoRetire === true) {
            writer.uint32(40).bool(message.disableAutoRetire);
        }
        if (message.retirementJurisdiction !== "") {
            writer.uint32(50).string(message.retirementJurisdiction);
        }
        if (message.retirementReason !== "") {
            writer.uint32(58).string(message.retirementReason);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBuyDirect_Order();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.sellOrderId = reader.uint64();
                    break;
                case 3:
                    message.quantity = reader.string();
                    break;
                case 4:
                    message.bidPrice = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.disableAutoRetire = reader.bool();
                    break;
                case 6:
                    message.retirementJurisdiction = reader.string();
                    break;
                case 7:
                    message.retirementReason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBuyDirect_Order();
        message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? BigInt(object.sellOrderId.toString()) : BigInt(0);
        message.quantity = object.quantity ?? "";
        message.bidPrice = object.bidPrice !== undefined && object.bidPrice !== null ? coin_1.Coin.fromPartial(object.bidPrice) : undefined;
        message.disableAutoRetire = object.disableAutoRetire ?? false;
        message.retirementJurisdiction = object.retirementJurisdiction ?? "";
        message.retirementReason = object.retirementReason ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBuyDirect_Order();
        if (object.sell_order_id !== undefined && object.sell_order_id !== null) {
            message.sellOrderId = BigInt(object.sell_order_id);
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        if (object.bid_price !== undefined && object.bid_price !== null) {
            message.bidPrice = coin_1.Coin.fromAmino(object.bid_price);
        }
        if (object.disable_auto_retire !== undefined && object.disable_auto_retire !== null) {
            message.disableAutoRetire = object.disable_auto_retire;
        }
        if (object.retirement_jurisdiction !== undefined && object.retirement_jurisdiction !== null) {
            message.retirementJurisdiction = object.retirement_jurisdiction;
        }
        if (object.retirement_reason !== undefined && object.retirement_reason !== null) {
            message.retirementReason = object.retirement_reason;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sell_order_id = message.sellOrderId !== BigInt(0) ? message.sellOrderId.toString() : undefined;
        obj.quantity = message.quantity === "" ? undefined : message.quantity;
        obj.bid_price = message.bidPrice ? coin_1.Coin.toAmino(message.bidPrice) : undefined;
        obj.disable_auto_retire = message.disableAutoRetire === false ? undefined : message.disableAutoRetire;
        obj.retirement_jurisdiction = message.retirementJurisdiction === "" ? undefined : message.retirementJurisdiction;
        obj.retirement_reason = message.retirementReason === "" ? undefined : message.retirementReason;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBuyDirect_Order.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBuyDirect_Order.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBuyDirect_Order.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.Order",
            value: exports.MsgBuyDirect_Order.encode(message).finish()
        };
    }
};
function createBaseMsgBuyDirectResponse() {
    return {};
}
exports.MsgBuyDirectResponse = {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirectResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBuyDirectResponse();
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
        const message = createBaseMsgBuyDirectResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgBuyDirectResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBuyDirectResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBuyDirectResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBuyDirectResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirectResponse",
            value: exports.MsgBuyDirectResponse.encode(message).finish()
        };
    }
};
function createBaseMsgAddAllowedDenom() {
    return {
        authority: "",
        bankDenom: "",
        displayDenom: "",
        exponent: 0
    };
}
exports.MsgAddAllowedDenom = {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.bankDenom !== "") {
            writer.uint32(18).string(message.bankDenom);
        }
        if (message.displayDenom !== "") {
            writer.uint32(26).string(message.displayDenom);
        }
        if (message.exponent !== 0) {
            writer.uint32(32).uint32(message.exponent);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddAllowedDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.bankDenom = reader.string();
                    break;
                case 3:
                    message.displayDenom = reader.string();
                    break;
                case 4:
                    message.exponent = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAddAllowedDenom();
        message.authority = object.authority ?? "";
        message.bankDenom = object.bankDenom ?? "";
        message.displayDenom = object.displayDenom ?? "";
        message.exponent = object.exponent ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAddAllowedDenom();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.bank_denom !== undefined && object.bank_denom !== null) {
            message.bankDenom = object.bank_denom;
        }
        if (object.display_denom !== undefined && object.display_denom !== null) {
            message.displayDenom = object.display_denom;
        }
        if (object.exponent !== undefined && object.exponent !== null) {
            message.exponent = object.exponent;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.bank_denom = message.bankDenom === "" ? undefined : message.bankDenom;
        obj.display_denom = message.displayDenom === "" ? undefined : message.displayDenom;
        obj.exponent = message.exponent === 0 ? undefined : message.exponent;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAddAllowedDenom.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen.marketplace/MsgAddAllowedDenom",
            value: exports.MsgAddAllowedDenom.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAddAllowedDenom.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAddAllowedDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom",
            value: exports.MsgAddAllowedDenom.encode(message).finish()
        };
    }
};
function createBaseMsgAddAllowedDenomResponse() {
    return {};
}
exports.MsgAddAllowedDenomResponse = {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenomResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddAllowedDenomResponse();
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
        const message = createBaseMsgAddAllowedDenomResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgAddAllowedDenomResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAddAllowedDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgAddAllowedDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAddAllowedDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenomResponse",
            value: exports.MsgAddAllowedDenomResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRemoveAllowedDenom() {
    return {
        authority: "",
        denom: ""
    };
}
exports.MsgRemoveAllowedDenom = {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveAllowedDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgRemoveAllowedDenom();
        message.authority = object.authority ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRemoveAllowedDenom();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.denom = message.denom === "" ? undefined : message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRemoveAllowedDenom.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "regen.marketplace/MsgRemoveAllowedDenom",
            value: exports.MsgRemoveAllowedDenom.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRemoveAllowedDenom.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRemoveAllowedDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom",
            value: exports.MsgRemoveAllowedDenom.encode(message).finish()
        };
    }
};
function createBaseMsgRemoveAllowedDenomResponse() {
    return {};
}
exports.MsgRemoveAllowedDenomResponse = {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenomResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveAllowedDenomResponse();
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
        const message = createBaseMsgRemoveAllowedDenomResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRemoveAllowedDenomResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRemoveAllowedDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRemoveAllowedDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRemoveAllowedDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenomResponse",
            value: exports.MsgRemoveAllowedDenomResponse.encode(message).finish()
        };
    }
};
