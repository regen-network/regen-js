"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyOrderBatchSelector = exports.BuyOrderProjectSelector = exports.BuyOrderClassSelector = exports.BuyOrderSellOrderMatch = void 0;
//@ts-nocheck
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
function createBaseBuyOrderSellOrderMatch() {
    return {
        marketId: BigInt(0),
        buyOrderId: BigInt(0),
        sellOrderId: BigInt(0),
        bidPriceComplement: 0,
        askPrice: 0
    };
}
exports.BuyOrderSellOrderMatch = {
    typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderSellOrderMatch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.marketId !== BigInt(0)) {
            writer.uint32(8).uint64(message.marketId);
        }
        if (message.buyOrderId !== BigInt(0)) {
            writer.uint32(16).uint64(message.buyOrderId);
        }
        if (message.sellOrderId !== BigInt(0)) {
            writer.uint32(24).uint64(message.sellOrderId);
        }
        if (message.bidPriceComplement !== 0) {
            writer.uint32(37).fixed32(message.bidPriceComplement);
        }
        if (message.askPrice !== 0) {
            writer.uint32(45).fixed32(message.askPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBuyOrderSellOrderMatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.uint64();
                    break;
                case 2:
                    message.buyOrderId = reader.uint64();
                    break;
                case 3:
                    message.sellOrderId = reader.uint64();
                    break;
                case 4:
                    message.bidPriceComplement = reader.fixed32();
                    break;
                case 5:
                    message.askPrice = reader.fixed32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBuyOrderSellOrderMatch();
        message.marketId = object.marketId !== undefined && object.marketId !== null ? BigInt(object.marketId.toString()) : BigInt(0);
        message.buyOrderId = object.buyOrderId !== undefined && object.buyOrderId !== null ? BigInt(object.buyOrderId.toString()) : BigInt(0);
        message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? BigInt(object.sellOrderId.toString()) : BigInt(0);
        message.bidPriceComplement = object.bidPriceComplement ?? 0;
        message.askPrice = object.askPrice ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBuyOrderSellOrderMatch();
        if (object.market_id !== undefined && object.market_id !== null) {
            message.marketId = BigInt(object.market_id);
        }
        if (object.buy_order_id !== undefined && object.buy_order_id !== null) {
            message.buyOrderId = BigInt(object.buy_order_id);
        }
        if (object.sell_order_id !== undefined && object.sell_order_id !== null) {
            message.sellOrderId = BigInt(object.sell_order_id);
        }
        if (object.bid_price_complement !== undefined && object.bid_price_complement !== null) {
            message.bidPriceComplement = object.bid_price_complement;
        }
        if (object.ask_price !== undefined && object.ask_price !== null) {
            message.askPrice = object.ask_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.market_id = message.marketId !== BigInt(0) ? message.marketId.toString() : undefined;
        obj.buy_order_id = message.buyOrderId !== BigInt(0) ? message.buyOrderId.toString() : undefined;
        obj.sell_order_id = message.sellOrderId !== BigInt(0) ? message.sellOrderId.toString() : undefined;
        obj.bid_price_complement = message.bidPriceComplement === 0 ? undefined : message.bidPriceComplement;
        obj.ask_price = message.askPrice === 0 ? undefined : message.askPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BuyOrderSellOrderMatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BuyOrderSellOrderMatch.decode(message.value);
    },
    toProto(message) {
        return exports.BuyOrderSellOrderMatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderSellOrderMatch",
            value: exports.BuyOrderSellOrderMatch.encode(message).finish()
        };
    }
};
function createBaseBuyOrderClassSelector() {
    return {
        buyOrderId: BigInt(0),
        classId: BigInt(0),
        projectLocation: "",
        minStartDate: undefined,
        maxEndDate: undefined
    };
}
exports.BuyOrderClassSelector = {
    typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderClassSelector",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.buyOrderId !== BigInt(0)) {
            writer.uint32(8).uint64(message.buyOrderId);
        }
        if (message.classId !== BigInt(0)) {
            writer.uint32(16).uint64(message.classId);
        }
        if (message.projectLocation !== "") {
            writer.uint32(26).string(message.projectLocation);
        }
        if (message.minStartDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.minStartDate), writer.uint32(34).fork()).ldelim();
        }
        if (message.maxEndDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.maxEndDate), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBuyOrderClassSelector();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buyOrderId = reader.uint64();
                    break;
                case 2:
                    message.classId = reader.uint64();
                    break;
                case 3:
                    message.projectLocation = reader.string();
                    break;
                case 4:
                    message.minStartDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.maxEndDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBuyOrderClassSelector();
        message.buyOrderId = object.buyOrderId !== undefined && object.buyOrderId !== null ? BigInt(object.buyOrderId.toString()) : BigInt(0);
        message.classId = object.classId !== undefined && object.classId !== null ? BigInt(object.classId.toString()) : BigInt(0);
        message.projectLocation = object.projectLocation ?? "";
        message.minStartDate = object.minStartDate ?? undefined;
        message.maxEndDate = object.maxEndDate ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBuyOrderClassSelector();
        if (object.buy_order_id !== undefined && object.buy_order_id !== null) {
            message.buyOrderId = BigInt(object.buy_order_id);
        }
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = BigInt(object.class_id);
        }
        if (object.project_location !== undefined && object.project_location !== null) {
            message.projectLocation = object.project_location;
        }
        if (object.min_start_date !== undefined && object.min_start_date !== null) {
            message.minStartDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.min_start_date));
        }
        if (object.max_end_date !== undefined && object.max_end_date !== null) {
            message.maxEndDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.max_end_date));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.buy_order_id = message.buyOrderId !== BigInt(0) ? message.buyOrderId.toString() : undefined;
        obj.class_id = message.classId !== BigInt(0) ? message.classId.toString() : undefined;
        obj.project_location = message.projectLocation === "" ? undefined : message.projectLocation;
        obj.min_start_date = message.minStartDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.minStartDate)) : undefined;
        obj.max_end_date = message.maxEndDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.maxEndDate)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BuyOrderClassSelector.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BuyOrderClassSelector.decode(message.value);
    },
    toProto(message) {
        return exports.BuyOrderClassSelector.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderClassSelector",
            value: exports.BuyOrderClassSelector.encode(message).finish()
        };
    }
};
function createBaseBuyOrderProjectSelector() {
    return {
        buyOrderId: BigInt(0),
        projectId: BigInt(0),
        minStartDate: undefined,
        maxEndDate: undefined
    };
}
exports.BuyOrderProjectSelector = {
    typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderProjectSelector",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.buyOrderId !== BigInt(0)) {
            writer.uint32(8).uint64(message.buyOrderId);
        }
        if (message.projectId !== BigInt(0)) {
            writer.uint32(16).uint64(message.projectId);
        }
        if (message.minStartDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.minStartDate), writer.uint32(26).fork()).ldelim();
        }
        if (message.maxEndDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.maxEndDate), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBuyOrderProjectSelector();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buyOrderId = reader.uint64();
                    break;
                case 2:
                    message.projectId = reader.uint64();
                    break;
                case 3:
                    message.minStartDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.maxEndDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBuyOrderProjectSelector();
        message.buyOrderId = object.buyOrderId !== undefined && object.buyOrderId !== null ? BigInt(object.buyOrderId.toString()) : BigInt(0);
        message.projectId = object.projectId !== undefined && object.projectId !== null ? BigInt(object.projectId.toString()) : BigInt(0);
        message.minStartDate = object.minStartDate ?? undefined;
        message.maxEndDate = object.maxEndDate ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBuyOrderProjectSelector();
        if (object.buy_order_id !== undefined && object.buy_order_id !== null) {
            message.buyOrderId = BigInt(object.buy_order_id);
        }
        if (object.project_id !== undefined && object.project_id !== null) {
            message.projectId = BigInt(object.project_id);
        }
        if (object.min_start_date !== undefined && object.min_start_date !== null) {
            message.minStartDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.min_start_date));
        }
        if (object.max_end_date !== undefined && object.max_end_date !== null) {
            message.maxEndDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.max_end_date));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.buy_order_id = message.buyOrderId !== BigInt(0) ? message.buyOrderId.toString() : undefined;
        obj.project_id = message.projectId !== BigInt(0) ? message.projectId.toString() : undefined;
        obj.min_start_date = message.minStartDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.minStartDate)) : undefined;
        obj.max_end_date = message.maxEndDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.maxEndDate)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BuyOrderProjectSelector.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BuyOrderProjectSelector.decode(message.value);
    },
    toProto(message) {
        return exports.BuyOrderProjectSelector.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderProjectSelector",
            value: exports.BuyOrderProjectSelector.encode(message).finish()
        };
    }
};
function createBaseBuyOrderBatchSelector() {
    return {
        buyOrderId: BigInt(0),
        batchId: BigInt(0)
    };
}
exports.BuyOrderBatchSelector = {
    typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderBatchSelector",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.buyOrderId !== BigInt(0)) {
            writer.uint32(8).uint64(message.buyOrderId);
        }
        if (message.batchId !== BigInt(0)) {
            writer.uint32(16).uint64(message.batchId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBuyOrderBatchSelector();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buyOrderId = reader.uint64();
                    break;
                case 2:
                    message.batchId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBuyOrderBatchSelector();
        message.buyOrderId = object.buyOrderId !== undefined && object.buyOrderId !== null ? BigInt(object.buyOrderId.toString()) : BigInt(0);
        message.batchId = object.batchId !== undefined && object.batchId !== null ? BigInt(object.batchId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseBuyOrderBatchSelector();
        if (object.buy_order_id !== undefined && object.buy_order_id !== null) {
            message.buyOrderId = BigInt(object.buy_order_id);
        }
        if (object.batch_id !== undefined && object.batch_id !== null) {
            message.batchId = BigInt(object.batch_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.buy_order_id = message.buyOrderId !== BigInt(0) ? message.buyOrderId.toString() : undefined;
        obj.batch_id = message.batchId !== BigInt(0) ? message.batchId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BuyOrderBatchSelector.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BuyOrderBatchSelector.decode(message.value);
    },
    toProto(message) {
        return exports.BuyOrderBatchSelector.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderBatchSelector",
            value: exports.BuyOrderBatchSelector.encode(message).finish()
        };
    }
};
