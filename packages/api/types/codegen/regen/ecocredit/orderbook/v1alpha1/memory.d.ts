import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { Long } from "../../../../helpers";
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
    minStartDate: Timestamp;
    /** max_end_date is the maximum end date in the selector's criteria. */
    maxEndDate: Timestamp;
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
    min_start_date: TimestampSDKType;
    max_end_date: TimestampSDKType;
}
/** BuyOrderProjectSelector indexes a buy order with project selector. */
export interface BuyOrderProjectSelector {
    /** buy_order_id is the buy order ID. */
    buyOrderId: Long;
    /** project_id is the project ID. */
    projectId: Long;
    /** min_start_date is the minimum start date in the selector's criteria. */
    minStartDate: Timestamp;
    /** max_end_date is the maximum end date in the selector's criteria. */
    maxEndDate: Timestamp;
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
    min_start_date: TimestampSDKType;
    max_end_date: TimestampSDKType;
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
export declare const BuyOrderSellOrderMatch: {
    encode(message: BuyOrderSellOrderMatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderSellOrderMatch;
    fromJSON(object: any): BuyOrderSellOrderMatch;
    toJSON(message: BuyOrderSellOrderMatch): unknown;
    fromPartial(object: Partial<BuyOrderSellOrderMatch>): BuyOrderSellOrderMatch;
    fromAmino(object: BuyOrderSellOrderMatchAmino): BuyOrderSellOrderMatch;
    toAmino(message: BuyOrderSellOrderMatch): BuyOrderSellOrderMatchAmino;
    fromAminoMsg(object: BuyOrderSellOrderMatchAminoMsg): BuyOrderSellOrderMatch;
    fromProtoMsg(message: BuyOrderSellOrderMatchProtoMsg): BuyOrderSellOrderMatch;
    toProto(message: BuyOrderSellOrderMatch): Uint8Array;
    toProtoMsg(message: BuyOrderSellOrderMatch): BuyOrderSellOrderMatchProtoMsg;
};
export declare const BuyOrderClassSelector: {
    encode(message: BuyOrderClassSelector, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderClassSelector;
    fromJSON(object: any): BuyOrderClassSelector;
    toJSON(message: BuyOrderClassSelector): unknown;
    fromPartial(object: Partial<BuyOrderClassSelector>): BuyOrderClassSelector;
    fromAmino(object: BuyOrderClassSelectorAmino): BuyOrderClassSelector;
    toAmino(message: BuyOrderClassSelector): BuyOrderClassSelectorAmino;
    fromAminoMsg(object: BuyOrderClassSelectorAminoMsg): BuyOrderClassSelector;
    fromProtoMsg(message: BuyOrderClassSelectorProtoMsg): BuyOrderClassSelector;
    toProto(message: BuyOrderClassSelector): Uint8Array;
    toProtoMsg(message: BuyOrderClassSelector): BuyOrderClassSelectorProtoMsg;
};
export declare const BuyOrderProjectSelector: {
    encode(message: BuyOrderProjectSelector, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderProjectSelector;
    fromJSON(object: any): BuyOrderProjectSelector;
    toJSON(message: BuyOrderProjectSelector): unknown;
    fromPartial(object: Partial<BuyOrderProjectSelector>): BuyOrderProjectSelector;
    fromAmino(object: BuyOrderProjectSelectorAmino): BuyOrderProjectSelector;
    toAmino(message: BuyOrderProjectSelector): BuyOrderProjectSelectorAmino;
    fromAminoMsg(object: BuyOrderProjectSelectorAminoMsg): BuyOrderProjectSelector;
    fromProtoMsg(message: BuyOrderProjectSelectorProtoMsg): BuyOrderProjectSelector;
    toProto(message: BuyOrderProjectSelector): Uint8Array;
    toProtoMsg(message: BuyOrderProjectSelector): BuyOrderProjectSelectorProtoMsg;
};
export declare const BuyOrderBatchSelector: {
    encode(message: BuyOrderBatchSelector, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BuyOrderBatchSelector;
    fromJSON(object: any): BuyOrderBatchSelector;
    toJSON(message: BuyOrderBatchSelector): unknown;
    fromPartial(object: Partial<BuyOrderBatchSelector>): BuyOrderBatchSelector;
    fromAmino(object: BuyOrderBatchSelectorAmino): BuyOrderBatchSelector;
    toAmino(message: BuyOrderBatchSelector): BuyOrderBatchSelectorAmino;
    fromAminoMsg(object: BuyOrderBatchSelectorAminoMsg): BuyOrderBatchSelector;
    fromProtoMsg(message: BuyOrderBatchSelectorProtoMsg): BuyOrderBatchSelector;
    toProto(message: BuyOrderBatchSelector): Uint8Array;
    toProtoMsg(message: BuyOrderBatchSelector): BuyOrderBatchSelectorProtoMsg;
};
