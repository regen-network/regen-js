import { BinaryReader, BinaryWriter } from "../../../../binary";
/**
 * BuyOrderSellOrderMatch defines the data the FIFO/price-time-priority matching
 * algorithm used to actually match buy and sell orders.
 */
export interface BuyOrderSellOrderMatch {
    /** market_id defines the market within which this match exists. */
    marketId: bigint;
    /** buy_order_id is the buy order ID. */
    buyOrderId: bigint;
    /** sell_order_id is the sell order ID. */
    sellOrderId: bigint;
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
    market_id?: string;
    /** buy_order_id is the buy order ID. */
    buy_order_id?: string;
    /** sell_order_id is the sell order ID. */
    sell_order_id?: string;
    /**
     * bid_price_complement is the the complement (^ operator) of the bid price
     * encoded as a uint32 (which should have sufficient precision) - effectively
     * ~price * 10^exponent (usually 10^6). The complement is used so that bids
     * can be sorted high to low.
     */
    bid_price_complement?: number;
    /**
     * ask_price is the ask price encoded to a uint32. Ask prices are sorted low
     * to high.
     */
    ask_price?: number;
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
    market_id: bigint;
    buy_order_id: bigint;
    sell_order_id: bigint;
    bid_price_complement: number;
    ask_price: number;
}
/** BuyOrderClassSelector indexes a buy order with class selector. */
export interface BuyOrderClassSelector {
    /** buy_order_id is the buy order ID. */
    buyOrderId: bigint;
    /** class_id is the class ID. */
    classId: bigint;
    /** project_location is the project location in the selector's criteria. */
    projectLocation: string;
    /** min_start_date is the minimum start date in the selector's criteria. */
    minStartDate?: Date;
    /** max_end_date is the maximum end date in the selector's criteria. */
    maxEndDate?: Date;
}
export interface BuyOrderClassSelectorProtoMsg {
    typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderClassSelector";
    value: Uint8Array;
}
/** BuyOrderClassSelector indexes a buy order with class selector. */
export interface BuyOrderClassSelectorAmino {
    /** buy_order_id is the buy order ID. */
    buy_order_id?: string;
    /** class_id is the class ID. */
    class_id?: string;
    /** project_location is the project location in the selector's criteria. */
    project_location?: string;
    /** min_start_date is the minimum start date in the selector's criteria. */
    min_start_date?: string;
    /** max_end_date is the maximum end date in the selector's criteria. */
    max_end_date?: string;
}
export interface BuyOrderClassSelectorAminoMsg {
    type: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderClassSelector";
    value: BuyOrderClassSelectorAmino;
}
/** BuyOrderClassSelector indexes a buy order with class selector. */
export interface BuyOrderClassSelectorSDKType {
    buy_order_id: bigint;
    class_id: bigint;
    project_location: string;
    min_start_date?: Date;
    max_end_date?: Date;
}
/** BuyOrderProjectSelector indexes a buy order with project selector. */
export interface BuyOrderProjectSelector {
    /** buy_order_id is the buy order ID. */
    buyOrderId: bigint;
    /** project_id is the project ID. */
    projectId: bigint;
    /** min_start_date is the minimum start date in the selector's criteria. */
    minStartDate?: Date;
    /** max_end_date is the maximum end date in the selector's criteria. */
    maxEndDate?: Date;
}
export interface BuyOrderProjectSelectorProtoMsg {
    typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderProjectSelector";
    value: Uint8Array;
}
/** BuyOrderProjectSelector indexes a buy order with project selector. */
export interface BuyOrderProjectSelectorAmino {
    /** buy_order_id is the buy order ID. */
    buy_order_id?: string;
    /** project_id is the project ID. */
    project_id?: string;
    /** min_start_date is the minimum start date in the selector's criteria. */
    min_start_date?: string;
    /** max_end_date is the maximum end date in the selector's criteria. */
    max_end_date?: string;
}
export interface BuyOrderProjectSelectorAminoMsg {
    type: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderProjectSelector";
    value: BuyOrderProjectSelectorAmino;
}
/** BuyOrderProjectSelector indexes a buy order with project selector. */
export interface BuyOrderProjectSelectorSDKType {
    buy_order_id: bigint;
    project_id: bigint;
    min_start_date?: Date;
    max_end_date?: Date;
}
/** BuyOrderBatchSelector indexes a buy order with batch selector. */
export interface BuyOrderBatchSelector {
    /** buy_order_id is the buy order ID. */
    buyOrderId: bigint;
    /** batch_id is the batch ID. */
    batchId: bigint;
}
export interface BuyOrderBatchSelectorProtoMsg {
    typeUrl: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderBatchSelector";
    value: Uint8Array;
}
/** BuyOrderBatchSelector indexes a buy order with batch selector. */
export interface BuyOrderBatchSelectorAmino {
    /** buy_order_id is the buy order ID. */
    buy_order_id?: string;
    /** batch_id is the batch ID. */
    batch_id?: string;
}
export interface BuyOrderBatchSelectorAminoMsg {
    type: "/regen.ecocredit.orderbook.v1alpha1.BuyOrderBatchSelector";
    value: BuyOrderBatchSelectorAmino;
}
/** BuyOrderBatchSelector indexes a buy order with batch selector. */
export interface BuyOrderBatchSelectorSDKType {
    buy_order_id: bigint;
    batch_id: bigint;
}
export declare const BuyOrderSellOrderMatch: {
    typeUrl: string;
    encode(message: BuyOrderSellOrderMatch, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BuyOrderSellOrderMatch;
    fromPartial(object: Partial<BuyOrderSellOrderMatch>): BuyOrderSellOrderMatch;
    fromAmino(object: BuyOrderSellOrderMatchAmino): BuyOrderSellOrderMatch;
    toAmino(message: BuyOrderSellOrderMatch): BuyOrderSellOrderMatchAmino;
    fromAminoMsg(object: BuyOrderSellOrderMatchAminoMsg): BuyOrderSellOrderMatch;
    fromProtoMsg(message: BuyOrderSellOrderMatchProtoMsg): BuyOrderSellOrderMatch;
    toProto(message: BuyOrderSellOrderMatch): Uint8Array;
    toProtoMsg(message: BuyOrderSellOrderMatch): BuyOrderSellOrderMatchProtoMsg;
};
export declare const BuyOrderClassSelector: {
    typeUrl: string;
    encode(message: BuyOrderClassSelector, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BuyOrderClassSelector;
    fromPartial(object: Partial<BuyOrderClassSelector>): BuyOrderClassSelector;
    fromAmino(object: BuyOrderClassSelectorAmino): BuyOrderClassSelector;
    toAmino(message: BuyOrderClassSelector): BuyOrderClassSelectorAmino;
    fromAminoMsg(object: BuyOrderClassSelectorAminoMsg): BuyOrderClassSelector;
    fromProtoMsg(message: BuyOrderClassSelectorProtoMsg): BuyOrderClassSelector;
    toProto(message: BuyOrderClassSelector): Uint8Array;
    toProtoMsg(message: BuyOrderClassSelector): BuyOrderClassSelectorProtoMsg;
};
export declare const BuyOrderProjectSelector: {
    typeUrl: string;
    encode(message: BuyOrderProjectSelector, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BuyOrderProjectSelector;
    fromPartial(object: Partial<BuyOrderProjectSelector>): BuyOrderProjectSelector;
    fromAmino(object: BuyOrderProjectSelectorAmino): BuyOrderProjectSelector;
    toAmino(message: BuyOrderProjectSelector): BuyOrderProjectSelectorAmino;
    fromAminoMsg(object: BuyOrderProjectSelectorAminoMsg): BuyOrderProjectSelector;
    fromProtoMsg(message: BuyOrderProjectSelectorProtoMsg): BuyOrderProjectSelector;
    toProto(message: BuyOrderProjectSelector): Uint8Array;
    toProtoMsg(message: BuyOrderProjectSelector): BuyOrderProjectSelectorProtoMsg;
};
export declare const BuyOrderBatchSelector: {
    typeUrl: string;
    encode(message: BuyOrderBatchSelector, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BuyOrderBatchSelector;
    fromPartial(object: Partial<BuyOrderBatchSelector>): BuyOrderBatchSelector;
    fromAmino(object: BuyOrderBatchSelectorAmino): BuyOrderBatchSelector;
    toAmino(message: BuyOrderBatchSelector): BuyOrderBatchSelectorAmino;
    fromAminoMsg(object: BuyOrderBatchSelectorAminoMsg): BuyOrderBatchSelector;
    fromProtoMsg(message: BuyOrderBatchSelectorProtoMsg): BuyOrderBatchSelector;
    toProto(message: BuyOrderBatchSelector): Uint8Array;
    toProtoMsg(message: BuyOrderBatchSelector): BuyOrderBatchSelectorProtoMsg;
};
