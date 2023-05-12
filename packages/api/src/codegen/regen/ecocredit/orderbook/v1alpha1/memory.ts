import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../../../../helpers";
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
/**
 * BuyOrderSellOrderMatch defines the data the FIFO/price-time-priority matching
 * algorithm used to actually match buy and sell orders.
 */

export interface BuyOrderSellOrderMatchSDKType {
  /** market_id defines the market within which this match exists. */
  market_id: Long;
  /** buy_order_id is the buy order ID. */

  buy_order_id: Long;
  /** sell_order_id is the sell order ID. */

  sell_order_id: Long;
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
/** BuyOrderClassSelector indexes a buy order with class selector. */

export interface BuyOrderClassSelectorSDKType {
  /** buy_order_id is the buy order ID. */
  buy_order_id: Long;
  /** class_id is the class ID. */

  class_id: Long;
  /** project_location is the project location in the selector's criteria. */

  project_location: string;
  /** min_start_date is the minimum start date in the selector's criteria. */

  min_start_date?: TimestampSDKType;
  /** max_end_date is the maximum end date in the selector's criteria. */

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
/** BuyOrderProjectSelector indexes a buy order with project selector. */

export interface BuyOrderProjectSelectorSDKType {
  /** buy_order_id is the buy order ID. */
  buy_order_id: Long;
  /** project_id is the project ID. */

  project_id: Long;
  /** min_start_date is the minimum start date in the selector's criteria. */

  min_start_date?: TimestampSDKType;
  /** max_end_date is the maximum end date in the selector's criteria. */

  max_end_date?: TimestampSDKType;
}
/** BuyOrderBatchSelector indexes a buy order with batch selector. */

export interface BuyOrderBatchSelector {
  /** buy_order_id is the buy order ID. */
  buyOrderId: Long;
  /** batch_id is the batch ID. */

  batchId: Long;
}
/** BuyOrderBatchSelector indexes a buy order with batch selector. */

export interface BuyOrderBatchSelectorSDKType {
  /** buy_order_id is the buy order ID. */
  buy_order_id: Long;
  /** batch_id is the batch ID. */

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
  }

};