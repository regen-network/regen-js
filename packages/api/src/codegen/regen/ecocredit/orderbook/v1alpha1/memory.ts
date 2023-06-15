import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * BuyOrderSellOrderMatch defines the data the FIFO/price-time-priority matching
 * algorithm used to actually match buy and sell orders.
 */

export interface BuyOrderSellOrderMatch {
  /** market_id defines the market within which this match exists. */
  marketId: Long;
  /** buy_order_id is the buy order ID. */

  buyOrderId: Long;
  /** sell_order_id is the sell order ID. */

  sellOrderId: Long;
  /**
   * bid_price_complement is the the complement (^ operator) of the bid price
   * encoded as a uint32 (which should have sufficient precision) - effectively
   * ~price * 10^exponent (usually 10^6). The complement is used so that bids
   * can be sorted high to low.
   */

  bidPriceComplement: number;
  /**
   * ask_price is the ask price encoded to a uint32. Ask prices are sorted low
   * to high.
   */

  askPrice: number;
}
export interface BuyOrderSellOrderMatchProtoMsg {
  typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderSellOrderMatch";
  value: Uint8Array;
}
/**
 * BuyOrderSellOrderMatch defines the data the FIFO/price-time-priority matching
 * algorithm used to actually match buy and sell orders.
 */

export interface BuyOrderSellOrderMatchAmino {
  /** market_id defines the market within which this match exists. */
  market_id: string;
  /** buy_order_id is the buy order ID. */

  buy_order_id: string;
  /** sell_order_id is the sell order ID. */

  sell_order_id: string;
  /**
   * bid_price_complement is the the complement (^ operator) of the bid price
   * encoded as a uint32 (which should have sufficient precision) - effectively
   * ~price * 10^exponent (usually 10^6). The complement is used so that bids
   * can be sorted high to low.
   */

  bid_price_complement: number;
  /**
   * ask_price is the ask price encoded to a uint32. Ask prices are sorted low
   * to high.
   */

  ask_price: number;
}
export interface BuyOrderSellOrderMatchAminoMsg {
  type: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderSellOrderMatch";
  value: BuyOrderSellOrderMatchAmino;
}
/**
 * BuyOrderSellOrderMatch defines the data the FIFO/price-time-priority matching
 * algorithm used to actually match buy and sell orders.
 */

export interface BuyOrderSellOrderMatchSDKType {
  market_id: Long;
  buy_order_id: Long;
  sell_order_id: Long;
  bid_price_complement: number;
  ask_price: number;
}
/** BuyOrderClassSelector indexes a buy order with class selector. */

export interface BuyOrderClassSelector {
  /** buy_order_id is the buy order ID. */
  buyOrderId: Long;
  /** class_id is the class ID. */

  classId: Long;
  /** project_location is the project location in the selector's criteria. */

  projectLocation: string;
  /** min_start_date is the minimum start date in the selector's criteria. */

  minStartDate?: Timestamp;
  /** max_end_date is the maximum end date in the selector's criteria. */

  maxEndDate?: Timestamp;
}
export interface BuyOrderClassSelectorProtoMsg {
  typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderClassSelector";
  value: Uint8Array;
}
/** BuyOrderClassSelector indexes a buy order with class selector. */

export interface BuyOrderClassSelectorAmino {
  /** buy_order_id is the buy order ID. */
  buy_order_id: string;
  /** class_id is the class ID. */

  class_id: string;
  /** project_location is the project location in the selector's criteria. */

  project_location: string;
  /** min_start_date is the minimum start date in the selector's criteria. */

  min_start_date?: TimestampAmino;
  /** max_end_date is the maximum end date in the selector's criteria. */

  max_end_date?: TimestampAmino;
}
export interface BuyOrderClassSelectorAminoMsg {
  type: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderClassSelector";
  value: BuyOrderClassSelectorAmino;
}
/** BuyOrderClassSelector indexes a buy order with class selector. */

export interface BuyOrderClassSelectorSDKType {
  buy_order_id: Long;
  class_id: Long;
  project_location: string;
  min_start_date?: TimestampSDKType;
  max_end_date?: TimestampSDKType;
}
/** BuyOrderProjectSelector indexes a buy order with project selector. */

export interface BuyOrderProjectSelector {
  /** buy_order_id is the buy order ID. */
  buyOrderId: Long;
  /** project_id is the project ID. */

  projectId: Long;
  /** min_start_date is the minimum start date in the selector's criteria. */

  minStartDate?: Timestamp;
  /** max_end_date is the maximum end date in the selector's criteria. */

  maxEndDate?: Timestamp;
}
export interface BuyOrderProjectSelectorProtoMsg {
  typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderProjectSelector";
  value: Uint8Array;
}
/** BuyOrderProjectSelector indexes a buy order with project selector. */

export interface BuyOrderProjectSelectorAmino {
  /** buy_order_id is the buy order ID. */
  buy_order_id: string;
  /** project_id is the project ID. */

  project_id: string;
  /** min_start_date is the minimum start date in the selector's criteria. */

  min_start_date?: TimestampAmino;
  /** max_end_date is the maximum end date in the selector's criteria. */

  max_end_date?: TimestampAmino;
}
export interface BuyOrderProjectSelectorAminoMsg {
  type: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderProjectSelector";
  value: BuyOrderProjectSelectorAmino;
}
/** BuyOrderProjectSelector indexes a buy order with project selector. */

export interface BuyOrderProjectSelectorSDKType {
  buy_order_id: Long;
  project_id: Long;
  min_start_date?: TimestampSDKType;
  max_end_date?: TimestampSDKType;
}
/** BuyOrderBatchSelector indexes a buy order with batch selector. */

export interface BuyOrderBatchSelector {
  /** buy_order_id is the buy order ID. */
  buyOrderId: Long;
  /** batch_id is the batch ID. */

  batchId: Long;
}
export interface BuyOrderBatchSelectorProtoMsg {
  typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderBatchSelector";
  value: Uint8Array;
}
/** BuyOrderBatchSelector indexes a buy order with batch selector. */

export interface BuyOrderBatchSelectorAmino {
  /** buy_order_id is the buy order ID. */
  buy_order_id: string;
  /** batch_id is the batch ID. */

  batch_id: string;
}
export interface BuyOrderBatchSelectorAminoMsg {
  type: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderBatchSelector";
  value: BuyOrderBatchSelectorAmino;
}
/** BuyOrderBatchSelector indexes a buy order with batch selector. */

export interface BuyOrderBatchSelectorSDKType {
  buy_order_id: Long;
  batch_id: Long;
}

function createBaseBuyOrderSellOrderMatch(): BuyOrderSellOrderMatch {
  return {
    marketId: Long.UZERO,
    buyOrderId: Long.UZERO,
    sellOrderId: Long.UZERO,
    bidPriceComplement: 0,
    askPrice: 0
  };
}

export const BuyOrderSellOrderMatch = {
  encode(message: BuyOrderSellOrderMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.marketId.isZero()) {
      writer.uint32(8).uint64(message.marketId);
    }

    if (!message.buyOrderId.isZero()) {
      writer.uint32(16).uint64(message.buyOrderId);
    }

    if (!message.sellOrderId.isZero()) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderSellOrderMatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuyOrderSellOrderMatch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = (reader.uint64() as Long);
          break;

        case 2:
          message.buyOrderId = (reader.uint64() as Long);
          break;

        case 3:
          message.sellOrderId = (reader.uint64() as Long);
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

  fromJSON(object: any): BuyOrderSellOrderMatch {
    return {
      marketId: isSet(object.marketId) ? Long.fromValue(object.marketId) : Long.UZERO,
      buyOrderId: isSet(object.buyOrderId) ? Long.fromValue(object.buyOrderId) : Long.UZERO,
      sellOrderId: isSet(object.sellOrderId) ? Long.fromValue(object.sellOrderId) : Long.UZERO,
      bidPriceComplement: isSet(object.bidPriceComplement) ? Number(object.bidPriceComplement) : 0,
      askPrice: isSet(object.askPrice) ? Number(object.askPrice) : 0
    };
  },

  toJSON(message: BuyOrderSellOrderMatch): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = (message.marketId || Long.UZERO).toString());
    message.buyOrderId !== undefined && (obj.buyOrderId = (message.buyOrderId || Long.UZERO).toString());
    message.sellOrderId !== undefined && (obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
    message.bidPriceComplement !== undefined && (obj.bidPriceComplement = Math.round(message.bidPriceComplement));
    message.askPrice !== undefined && (obj.askPrice = Math.round(message.askPrice));
    return obj;
  },

  fromPartial(object: Partial<BuyOrderSellOrderMatch>): BuyOrderSellOrderMatch {
    const message = createBaseBuyOrderSellOrderMatch();
    message.marketId = object.marketId !== undefined && object.marketId !== null ? Long.fromValue(object.marketId) : Long.UZERO;
    message.buyOrderId = object.buyOrderId !== undefined && object.buyOrderId !== null ? Long.fromValue(object.buyOrderId) : Long.UZERO;
    message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? Long.fromValue(object.sellOrderId) : Long.UZERO;
    message.bidPriceComplement = object.bidPriceComplement ?? 0;
    message.askPrice = object.askPrice ?? 0;
    return message;
  },

  fromAmino(object: BuyOrderSellOrderMatchAmino): BuyOrderSellOrderMatch {
    return {
      marketId: Long.fromString(object.market_id),
      buyOrderId: Long.fromString(object.buy_order_id),
      sellOrderId: Long.fromString(object.sell_order_id),
      bidPriceComplement: object.bid_price_complement,
      askPrice: object.ask_price
    };
  },

  toAmino(message: BuyOrderSellOrderMatch): BuyOrderSellOrderMatchAmino {
    const obj: any = {};
    obj.market_id = message.marketId ? message.marketId.toString() : undefined;
    obj.buy_order_id = message.buyOrderId ? message.buyOrderId.toString() : undefined;
    obj.sell_order_id = message.sellOrderId ? message.sellOrderId.toString() : undefined;
    obj.bid_price_complement = message.bidPriceComplement;
    obj.ask_price = message.askPrice;
    return obj;
  },

  fromAminoMsg(object: BuyOrderSellOrderMatchAminoMsg): BuyOrderSellOrderMatch {
    return BuyOrderSellOrderMatch.fromAmino(object.value);
  },

  fromProtoMsg(message: BuyOrderSellOrderMatchProtoMsg): BuyOrderSellOrderMatch {
    return BuyOrderSellOrderMatch.decode(message.value);
  },

  toProto(message: BuyOrderSellOrderMatch): Uint8Array {
    return BuyOrderSellOrderMatch.encode(message).finish();
  },

  toProtoMsg(message: BuyOrderSellOrderMatch): BuyOrderSellOrderMatchProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderSellOrderMatch",
      value: BuyOrderSellOrderMatch.encode(message).finish()
    };
  }

};

function createBaseBuyOrderClassSelector(): BuyOrderClassSelector {
  return {
    buyOrderId: Long.UZERO,
    classId: Long.UZERO,
    projectLocation: "",
    minStartDate: undefined,
    maxEndDate: undefined
  };
}

export const BuyOrderClassSelector = {
  encode(message: BuyOrderClassSelector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.buyOrderId.isZero()) {
      writer.uint32(8).uint64(message.buyOrderId);
    }

    if (!message.classId.isZero()) {
      writer.uint32(16).uint64(message.classId);
    }

    if (message.projectLocation !== "") {
      writer.uint32(26).string(message.projectLocation);
    }

    if (message.minStartDate !== undefined) {
      Timestamp.encode(message.minStartDate, writer.uint32(34).fork()).ldelim();
    }

    if (message.maxEndDate !== undefined) {
      Timestamp.encode(message.maxEndDate, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderClassSelector {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuyOrderClassSelector();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.buyOrderId = (reader.uint64() as Long);
          break;

        case 2:
          message.classId = (reader.uint64() as Long);
          break;

        case 3:
          message.projectLocation = reader.string();
          break;

        case 4:
          message.minStartDate = Timestamp.decode(reader, reader.uint32());
          break;

        case 5:
          message.maxEndDate = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BuyOrderClassSelector {
    return {
      buyOrderId: isSet(object.buyOrderId) ? Long.fromValue(object.buyOrderId) : Long.UZERO,
      classId: isSet(object.classId) ? Long.fromValue(object.classId) : Long.UZERO,
      projectLocation: isSet(object.projectLocation) ? String(object.projectLocation) : "",
      minStartDate: isSet(object.minStartDate) ? fromJsonTimestamp(object.minStartDate) : undefined,
      maxEndDate: isSet(object.maxEndDate) ? fromJsonTimestamp(object.maxEndDate) : undefined
    };
  },

  toJSON(message: BuyOrderClassSelector): unknown {
    const obj: any = {};
    message.buyOrderId !== undefined && (obj.buyOrderId = (message.buyOrderId || Long.UZERO).toString());
    message.classId !== undefined && (obj.classId = (message.classId || Long.UZERO).toString());
    message.projectLocation !== undefined && (obj.projectLocation = message.projectLocation);
    message.minStartDate !== undefined && (obj.minStartDate = fromTimestamp(message.minStartDate).toISOString());
    message.maxEndDate !== undefined && (obj.maxEndDate = fromTimestamp(message.maxEndDate).toISOString());
    return obj;
  },

  fromPartial(object: Partial<BuyOrderClassSelector>): BuyOrderClassSelector {
    const message = createBaseBuyOrderClassSelector();
    message.buyOrderId = object.buyOrderId !== undefined && object.buyOrderId !== null ? Long.fromValue(object.buyOrderId) : Long.UZERO;
    message.classId = object.classId !== undefined && object.classId !== null ? Long.fromValue(object.classId) : Long.UZERO;
    message.projectLocation = object.projectLocation ?? "";
    message.minStartDate = object.minStartDate !== undefined && object.minStartDate !== null ? Timestamp.fromPartial(object.minStartDate) : undefined;
    message.maxEndDate = object.maxEndDate !== undefined && object.maxEndDate !== null ? Timestamp.fromPartial(object.maxEndDate) : undefined;
    return message;
  },

  fromAmino(object: BuyOrderClassSelectorAmino): BuyOrderClassSelector {
    return {
      buyOrderId: Long.fromString(object.buy_order_id),
      classId: Long.fromString(object.class_id),
      projectLocation: object.project_location,
      minStartDate: object?.min_start_date ? Timestamp.fromAmino(object.min_start_date) : undefined,
      maxEndDate: object?.max_end_date ? Timestamp.fromAmino(object.max_end_date) : undefined
    };
  },

  toAmino(message: BuyOrderClassSelector): BuyOrderClassSelectorAmino {
    const obj: any = {};
    obj.buy_order_id = message.buyOrderId ? message.buyOrderId.toString() : undefined;
    obj.class_id = message.classId ? message.classId.toString() : undefined;
    obj.project_location = message.projectLocation;
    obj.min_start_date = message.minStartDate ? Timestamp.toAmino(message.minStartDate) : undefined;
    obj.max_end_date = message.maxEndDate ? Timestamp.toAmino(message.maxEndDate) : undefined;
    return obj;
  },

  fromAminoMsg(object: BuyOrderClassSelectorAminoMsg): BuyOrderClassSelector {
    return BuyOrderClassSelector.fromAmino(object.value);
  },

  fromProtoMsg(message: BuyOrderClassSelectorProtoMsg): BuyOrderClassSelector {
    return BuyOrderClassSelector.decode(message.value);
  },

  toProto(message: BuyOrderClassSelector): Uint8Array {
    return BuyOrderClassSelector.encode(message).finish();
  },

  toProtoMsg(message: BuyOrderClassSelector): BuyOrderClassSelectorProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderClassSelector",
      value: BuyOrderClassSelector.encode(message).finish()
    };
  }

};

function createBaseBuyOrderProjectSelector(): BuyOrderProjectSelector {
  return {
    buyOrderId: Long.UZERO,
    projectId: Long.UZERO,
    minStartDate: undefined,
    maxEndDate: undefined
  };
}

export const BuyOrderProjectSelector = {
  encode(message: BuyOrderProjectSelector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.buyOrderId.isZero()) {
      writer.uint32(8).uint64(message.buyOrderId);
    }

    if (!message.projectId.isZero()) {
      writer.uint32(16).uint64(message.projectId);
    }

    if (message.minStartDate !== undefined) {
      Timestamp.encode(message.minStartDate, writer.uint32(26).fork()).ldelim();
    }

    if (message.maxEndDate !== undefined) {
      Timestamp.encode(message.maxEndDate, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderProjectSelector {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuyOrderProjectSelector();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.buyOrderId = (reader.uint64() as Long);
          break;

        case 2:
          message.projectId = (reader.uint64() as Long);
          break;

        case 3:
          message.minStartDate = Timestamp.decode(reader, reader.uint32());
          break;

        case 4:
          message.maxEndDate = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BuyOrderProjectSelector {
    return {
      buyOrderId: isSet(object.buyOrderId) ? Long.fromValue(object.buyOrderId) : Long.UZERO,
      projectId: isSet(object.projectId) ? Long.fromValue(object.projectId) : Long.UZERO,
      minStartDate: isSet(object.minStartDate) ? fromJsonTimestamp(object.minStartDate) : undefined,
      maxEndDate: isSet(object.maxEndDate) ? fromJsonTimestamp(object.maxEndDate) : undefined
    };
  },

  toJSON(message: BuyOrderProjectSelector): unknown {
    const obj: any = {};
    message.buyOrderId !== undefined && (obj.buyOrderId = (message.buyOrderId || Long.UZERO).toString());
    message.projectId !== undefined && (obj.projectId = (message.projectId || Long.UZERO).toString());
    message.minStartDate !== undefined && (obj.minStartDate = fromTimestamp(message.minStartDate).toISOString());
    message.maxEndDate !== undefined && (obj.maxEndDate = fromTimestamp(message.maxEndDate).toISOString());
    return obj;
  },

  fromPartial(object: Partial<BuyOrderProjectSelector>): BuyOrderProjectSelector {
    const message = createBaseBuyOrderProjectSelector();
    message.buyOrderId = object.buyOrderId !== undefined && object.buyOrderId !== null ? Long.fromValue(object.buyOrderId) : Long.UZERO;
    message.projectId = object.projectId !== undefined && object.projectId !== null ? Long.fromValue(object.projectId) : Long.UZERO;
    message.minStartDate = object.minStartDate !== undefined && object.minStartDate !== null ? Timestamp.fromPartial(object.minStartDate) : undefined;
    message.maxEndDate = object.maxEndDate !== undefined && object.maxEndDate !== null ? Timestamp.fromPartial(object.maxEndDate) : undefined;
    return message;
  },

  fromAmino(object: BuyOrderProjectSelectorAmino): BuyOrderProjectSelector {
    return {
      buyOrderId: Long.fromString(object.buy_order_id),
      projectId: Long.fromString(object.project_id),
      minStartDate: object?.min_start_date ? Timestamp.fromAmino(object.min_start_date) : undefined,
      maxEndDate: object?.max_end_date ? Timestamp.fromAmino(object.max_end_date) : undefined
    };
  },

  toAmino(message: BuyOrderProjectSelector): BuyOrderProjectSelectorAmino {
    const obj: any = {};
    obj.buy_order_id = message.buyOrderId ? message.buyOrderId.toString() : undefined;
    obj.project_id = message.projectId ? message.projectId.toString() : undefined;
    obj.min_start_date = message.minStartDate ? Timestamp.toAmino(message.minStartDate) : undefined;
    obj.max_end_date = message.maxEndDate ? Timestamp.toAmino(message.maxEndDate) : undefined;
    return obj;
  },

  fromAminoMsg(object: BuyOrderProjectSelectorAminoMsg): BuyOrderProjectSelector {
    return BuyOrderProjectSelector.fromAmino(object.value);
  },

  fromProtoMsg(message: BuyOrderProjectSelectorProtoMsg): BuyOrderProjectSelector {
    return BuyOrderProjectSelector.decode(message.value);
  },

  toProto(message: BuyOrderProjectSelector): Uint8Array {
    return BuyOrderProjectSelector.encode(message).finish();
  },

  toProtoMsg(message: BuyOrderProjectSelector): BuyOrderProjectSelectorProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderProjectSelector",
      value: BuyOrderProjectSelector.encode(message).finish()
    };
  }

};

function createBaseBuyOrderBatchSelector(): BuyOrderBatchSelector {
  return {
    buyOrderId: Long.UZERO,
    batchId: Long.UZERO
  };
}

export const BuyOrderBatchSelector = {
  encode(message: BuyOrderBatchSelector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.buyOrderId.isZero()) {
      writer.uint32(8).uint64(message.buyOrderId);
    }

    if (!message.batchId.isZero()) {
      writer.uint32(16).uint64(message.batchId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderBatchSelector {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuyOrderBatchSelector();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.buyOrderId = (reader.uint64() as Long);
          break;

        case 2:
          message.batchId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BuyOrderBatchSelector {
    return {
      buyOrderId: isSet(object.buyOrderId) ? Long.fromValue(object.buyOrderId) : Long.UZERO,
      batchId: isSet(object.batchId) ? Long.fromValue(object.batchId) : Long.UZERO
    };
  },

  toJSON(message: BuyOrderBatchSelector): unknown {
    const obj: any = {};
    message.buyOrderId !== undefined && (obj.buyOrderId = (message.buyOrderId || Long.UZERO).toString());
    message.batchId !== undefined && (obj.batchId = (message.batchId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<BuyOrderBatchSelector>): BuyOrderBatchSelector {
    const message = createBaseBuyOrderBatchSelector();
    message.buyOrderId = object.buyOrderId !== undefined && object.buyOrderId !== null ? Long.fromValue(object.buyOrderId) : Long.UZERO;
    message.batchId = object.batchId !== undefined && object.batchId !== null ? Long.fromValue(object.batchId) : Long.UZERO;
    return message;
  },

  fromAmino(object: BuyOrderBatchSelectorAmino): BuyOrderBatchSelector {
    return {
      buyOrderId: Long.fromString(object.buy_order_id),
      batchId: Long.fromString(object.batch_id)
    };
  },

  toAmino(message: BuyOrderBatchSelector): BuyOrderBatchSelectorAmino {
    const obj: any = {};
    obj.buy_order_id = message.buyOrderId ? message.buyOrderId.toString() : undefined;
    obj.batch_id = message.batchId ? message.batchId.toString() : undefined;
    return obj;
  },

  fromAminoMsg(object: BuyOrderBatchSelectorAminoMsg): BuyOrderBatchSelector {
    return BuyOrderBatchSelector.fromAmino(object.value);
  },

  fromProtoMsg(message: BuyOrderBatchSelectorProtoMsg): BuyOrderBatchSelector {
    return BuyOrderBatchSelector.decode(message.value);
  },

  toProto(message: BuyOrderBatchSelector): Uint8Array {
    return BuyOrderBatchSelector.encode(message).finish();
  },

  toProtoMsg(message: BuyOrderBatchSelector): BuyOrderBatchSelectorProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderBatchSelector",
      value: BuyOrderBatchSelector.encode(message).finish()
    };
  }

};