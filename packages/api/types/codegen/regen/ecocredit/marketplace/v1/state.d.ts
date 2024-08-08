import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** SellOrder represents the information for a sell order. */
export interface SellOrder {
    /** id is the unique ID of sell order. */
    id: bigint;
    /** seller is the address of the account that is selling credits. */
    seller: Uint8Array;
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links a sell order to a credit batch.
     */
    batchKey: bigint;
    /** quantity is the decimal quantity of credits being sold. */
    quantity: string;
    /**
     * market_id is the market in which this sell order exists and specifies
     * the bank_denom that ask_amount corresponds to forming the ask_price.
     */
    marketId: bigint;
    /**
     * ask_amount is the integer amount (encoded as a string) that the seller is
     * asking for each credit unit of the batch. Each credit unit of the batch
     * will be sold for at least the ask_amount. The ask_amount corresponds to the
     * Market.denom to form the ask price.
     */
    askAmount: string;
    /**
     * disable_auto_retire disables auto-retirement of credits which allows a
     * buyer to disable auto-retirement in their buy order enabling them to
     * resell the credits to another buyer.
     */
    disableAutoRetire: boolean;
    /**
     * expiration is an optional timestamp when the sell order expires. When the
     * expiration time is reached, the sell order is removed from state.
     */
    expiration?: Timestamp;
    /**
     * maker indicates that this is a maker order, meaning that when it hit
     * the order book, there were no matching buy orders.
     */
    maker: boolean;
}
export interface SellOrderProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.SellOrder";
    value: Uint8Array;
}
/** SellOrder represents the information for a sell order. */
export interface SellOrderAmino {
    /** id is the unique ID of sell order. */
    id?: string;
    /** seller is the address of the account that is selling credits. */
    seller?: string;
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links a sell order to a credit batch.
     */
    batch_key?: string;
    /** quantity is the decimal quantity of credits being sold. */
    quantity?: string;
    /**
     * market_id is the market in which this sell order exists and specifies
     * the bank_denom that ask_amount corresponds to forming the ask_price.
     */
    market_id?: string;
    /**
     * ask_amount is the integer amount (encoded as a string) that the seller is
     * asking for each credit unit of the batch. Each credit unit of the batch
     * will be sold for at least the ask_amount. The ask_amount corresponds to the
     * Market.denom to form the ask price.
     */
    ask_amount?: string;
    /**
     * disable_auto_retire disables auto-retirement of credits which allows a
     * buyer to disable auto-retirement in their buy order enabling them to
     * resell the credits to another buyer.
     */
    disable_auto_retire?: boolean;
    /**
     * expiration is an optional timestamp when the sell order expires. When the
     * expiration time is reached, the sell order is removed from state.
     */
    expiration?: string;
    /**
     * maker indicates that this is a maker order, meaning that when it hit
     * the order book, there were no matching buy orders.
     */
    maker?: boolean;
}
export interface SellOrderAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.SellOrder";
    value: SellOrderAmino;
}
/** SellOrder represents the information for a sell order. */
export interface SellOrderSDKType {
    id: bigint;
    seller: Uint8Array;
    batch_key: bigint;
    quantity: string;
    market_id: bigint;
    ask_amount: string;
    disable_auto_retire: boolean;
    expiration?: TimestampSDKType;
    maker: boolean;
}
/** AllowedDenom represents the information for an allowed ask/bid denom. */
export interface AllowedDenom {
    /** denom is the bank denom to allow (ex. ibc/GLKHDSG423SGS) */
    bankDenom: string;
    /**
     * display_denom is the denom to display to the user and is informational.
     * Because the denom is likely an IBC denom, this should be chosen by
     * governance to represent the consensus trusted name of the denom.
     */
    displayDenom: string;
    /**
     * exponent is the exponent that relates the denom to the display_denom and is
     * informational
     */
    exponent: number;
}
export interface AllowedDenomProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.AllowedDenom";
    value: Uint8Array;
}
/** AllowedDenom represents the information for an allowed ask/bid denom. */
export interface AllowedDenomAmino {
    /** denom is the bank denom to allow (ex. ibc/GLKHDSG423SGS) */
    bank_denom?: string;
    /**
     * display_denom is the denom to display to the user and is informational.
     * Because the denom is likely an IBC denom, this should be chosen by
     * governance to represent the consensus trusted name of the denom.
     */
    display_denom?: string;
    /**
     * exponent is the exponent that relates the denom to the display_denom and is
     * informational
     */
    exponent?: number;
}
export interface AllowedDenomAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.AllowedDenom";
    value: AllowedDenomAmino;
}
/** AllowedDenom represents the information for an allowed ask/bid denom. */
export interface AllowedDenomSDKType {
    bank_denom: string;
    display_denom: string;
    exponent: number;
}
/**
 * Market describes a distinctly processed market between a credit type and
 * allowed bank denom. Each market has its own precision in the order book
 * and is processed independently of other markets. Governance must enable
 * markets one by one. Every additional enabled market potentially adds more
 * processing overhead to the blockchain and potentially weakens liquidity in
 * competing markets. For instance, enabling side by side USD/Carbon and
 * EUR/Carbon markets may have the end result that each market individually has
 * less liquidity and longer settlement times. Such decisions should be taken
 * with care.
 */
export interface Market {
    /** id is the unique ID of the market. */
    id: bigint;
    /** credit_type_abbrev is the abbreviation of the credit type. */
    creditTypeAbbrev: string;
    /** bank_denom is an allowed bank denom. */
    bankDenom: string;
    /**
     * precision_modifier is an optional modifier used to convert arbitrary
     * precision integer bank amounts to uint32 values used for sorting in the
     * order book. Given an arbitrary precision integer x, its uint32 conversion
     * will be x / 10^precision_modifier using round half away from zero
     * rounding.
     *
     * uint32 values range from 0 to 4,294,967,295.
     * This allows for a full 9 digits of precision. In most real world markets
     * this amount of precision is sufficient and most common downside -
     * that some orders with very miniscule price differences may be ordered
     * equivalently (because of rounding) - is acceptable.
     * Note that this rounding will not affect settlement price which will
     * always be done exactly.
     *
     * Given a USD stable coin with 6 decimal digits, a precision_modifier
     * of 0 is probably acceptable as long as credits are always less than
     * $4,294/unit. With precision down to $0.001 (a precision_modifier of 3
     * in this case), prices can rise up to $4,294,000/unit. Either scenario
     * is probably quite acceptable given that carbon prices are unlikely to
     * rise above $1000/ton any time in the near future.
     *
     * If credit prices, exceed the maximum range of uint32 with this
     * precision_modifier, orders with high prices will fail and governance
     * will need to adjust precision_modifier to allow for higher prices in
     * exchange for less precision at the lower end.
     */
    precisionModifier: number;
}
export interface MarketProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.Market";
    value: Uint8Array;
}
/**
 * Market describes a distinctly processed market between a credit type and
 * allowed bank denom. Each market has its own precision in the order book
 * and is processed independently of other markets. Governance must enable
 * markets one by one. Every additional enabled market potentially adds more
 * processing overhead to the blockchain and potentially weakens liquidity in
 * competing markets. For instance, enabling side by side USD/Carbon and
 * EUR/Carbon markets may have the end result that each market individually has
 * less liquidity and longer settlement times. Such decisions should be taken
 * with care.
 */
export interface MarketAmino {
    /** id is the unique ID of the market. */
    id?: string;
    /** credit_type_abbrev is the abbreviation of the credit type. */
    credit_type_abbrev?: string;
    /** bank_denom is an allowed bank denom. */
    bank_denom?: string;
    /**
     * precision_modifier is an optional modifier used to convert arbitrary
     * precision integer bank amounts to uint32 values used for sorting in the
     * order book. Given an arbitrary precision integer x, its uint32 conversion
     * will be x / 10^precision_modifier using round half away from zero
     * rounding.
     *
     * uint32 values range from 0 to 4,294,967,295.
     * This allows for a full 9 digits of precision. In most real world markets
     * this amount of precision is sufficient and most common downside -
     * that some orders with very miniscule price differences may be ordered
     * equivalently (because of rounding) - is acceptable.
     * Note that this rounding will not affect settlement price which will
     * always be done exactly.
     *
     * Given a USD stable coin with 6 decimal digits, a precision_modifier
     * of 0 is probably acceptable as long as credits are always less than
     * $4,294/unit. With precision down to $0.001 (a precision_modifier of 3
     * in this case), prices can rise up to $4,294,000/unit. Either scenario
     * is probably quite acceptable given that carbon prices are unlikely to
     * rise above $1000/ton any time in the near future.
     *
     * If credit prices, exceed the maximum range of uint32 with this
     * precision_modifier, orders with high prices will fail and governance
     * will need to adjust precision_modifier to allow for higher prices in
     * exchange for less precision at the lower end.
     */
    precision_modifier?: number;
}
export interface MarketAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.Market";
    value: MarketAmino;
}
/**
 * Market describes a distinctly processed market between a credit type and
 * allowed bank denom. Each market has its own precision in the order book
 * and is processed independently of other markets. Governance must enable
 * markets one by one. Every additional enabled market potentially adds more
 * processing overhead to the blockchain and potentially weakens liquidity in
 * competing markets. For instance, enabling side by side USD/Carbon and
 * EUR/Carbon markets may have the end result that each market individually has
 * less liquidity and longer settlement times. Such decisions should be taken
 * with care.
 */
export interface MarketSDKType {
    id: bigint;
    credit_type_abbrev: string;
    bank_denom: string;
    precision_modifier: number;
}
export declare const SellOrder: {
    typeUrl: string;
    encode(message: SellOrder, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SellOrder;
    fromJSON(object: any): SellOrder;
    toJSON(message: SellOrder): unknown;
    fromPartial(object: Partial<SellOrder>): SellOrder;
    fromAmino(object: SellOrderAmino): SellOrder;
    toAmino(message: SellOrder): SellOrderAmino;
    fromAminoMsg(object: SellOrderAminoMsg): SellOrder;
    fromProtoMsg(message: SellOrderProtoMsg): SellOrder;
    toProto(message: SellOrder): Uint8Array;
    toProtoMsg(message: SellOrder): SellOrderProtoMsg;
};
export declare const AllowedDenom: {
    typeUrl: string;
    encode(message: AllowedDenom, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllowedDenom;
    fromJSON(object: any): AllowedDenom;
    toJSON(message: AllowedDenom): unknown;
    fromPartial(object: Partial<AllowedDenom>): AllowedDenom;
    fromAmino(object: AllowedDenomAmino): AllowedDenom;
    toAmino(message: AllowedDenom): AllowedDenomAmino;
    fromAminoMsg(object: AllowedDenomAminoMsg): AllowedDenom;
    fromProtoMsg(message: AllowedDenomProtoMsg): AllowedDenom;
    toProto(message: AllowedDenom): Uint8Array;
    toProtoMsg(message: AllowedDenom): AllowedDenomProtoMsg;
};
export declare const Market: {
    typeUrl: string;
    encode(message: Market, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Market;
    fromJSON(object: any): Market;
    toJSON(message: Market): unknown;
    fromPartial(object: Partial<Market>): Market;
    fromAmino(object: MarketAmino): Market;
    toAmino(message: Market): MarketAmino;
    fromAminoMsg(object: MarketAminoMsg): Market;
    fromProtoMsg(message: MarketProtoMsg): Market;
    toProto(message: Market): Uint8Array;
    toProtoMsg(message: Market): MarketProtoMsg;
};
