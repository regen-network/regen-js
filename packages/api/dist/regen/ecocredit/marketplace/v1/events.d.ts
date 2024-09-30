import { BinaryReader, BinaryWriter } from "../../../../binary";
/** EventSell is an event emitted when a sell order is created. */
export interface EventSell {
    /** sell_order_id is the unique identifier of the sell order that was created. */
    sellOrderId: bigint;
}
export interface EventSellProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventSell";
    value: Uint8Array;
}
/** EventSell is an event emitted when a sell order is created. */
export interface EventSellAmino {
    /** sell_order_id is the unique identifier of the sell order that was created. */
    sell_order_id?: string;
}
export interface EventSellAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.EventSell";
    value: EventSellAmino;
}
/** EventSell is an event emitted when a sell order is created. */
export interface EventSellSDKType {
    sell_order_id: bigint;
}
/** EventBuyDirect is an event emitted when a direct buy order is processed. */
export interface EventBuyDirect {
    /**
     * sell_order_id is the unique identifier of the sell order that credits were
     * purchased from.
     */
    sellOrderId: bigint;
}
export interface EventBuyDirectProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventBuyDirect";
    value: Uint8Array;
}
/** EventBuyDirect is an event emitted when a direct buy order is processed. */
export interface EventBuyDirectAmino {
    /**
     * sell_order_id is the unique identifier of the sell order that credits were
     * purchased from.
     */
    sell_order_id?: string;
}
export interface EventBuyDirectAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.EventBuyDirect";
    value: EventBuyDirectAmino;
}
/** EventBuyDirect is an event emitted when a direct buy order is processed. */
export interface EventBuyDirectSDKType {
    sell_order_id: bigint;
}
/** EventUpdateSellOrder is an event emitted when a sell order is updated. */
export interface EventUpdateSellOrder {
    /** sell_order_id is the unique identifier of the sell order that was updated. */
    sellOrderId: bigint;
}
export interface EventUpdateSellOrderProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventUpdateSellOrder";
    value: Uint8Array;
}
/** EventUpdateSellOrder is an event emitted when a sell order is updated. */
export interface EventUpdateSellOrderAmino {
    /** sell_order_id is the unique identifier of the sell order that was updated. */
    sell_order_id?: string;
}
export interface EventUpdateSellOrderAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.EventUpdateSellOrder";
    value: EventUpdateSellOrderAmino;
}
/** EventUpdateSellOrder is an event emitted when a sell order is updated. */
export interface EventUpdateSellOrderSDKType {
    sell_order_id: bigint;
}
/** EventCancelSellOrder is an event emitted when a sell order is cancelled. */
export interface EventCancelSellOrder {
    /**
     * sell_order_id is the unique identifier of the sell order that was
     * cancelled.
     */
    sellOrderId: bigint;
}
export interface EventCancelSellOrderProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventCancelSellOrder";
    value: Uint8Array;
}
/** EventCancelSellOrder is an event emitted when a sell order is cancelled. */
export interface EventCancelSellOrderAmino {
    /**
     * sell_order_id is the unique identifier of the sell order that was
     * cancelled.
     */
    sell_order_id?: string;
}
export interface EventCancelSellOrderAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.EventCancelSellOrder";
    value: EventCancelSellOrderAmino;
}
/** EventCancelSellOrder is an event emitted when a sell order is cancelled. */
export interface EventCancelSellOrderSDKType {
    sell_order_id: bigint;
}
/**
 * EventAllowDenom is an event emitted when a new denom is added for use in the
 * marketplace.
 */
export interface EventAllowDenom {
    /**
     * denom is the bank denom (e.g. ibc/GLKHDSG423SGS) added to the list of
     * allowed denoms for use in the marketplace.
     */
    denom: string;
}
export interface EventAllowDenomProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventAllowDenom";
    value: Uint8Array;
}
/**
 * EventAllowDenom is an event emitted when a new denom is added for use in the
 * marketplace.
 */
export interface EventAllowDenomAmino {
    /**
     * denom is the bank denom (e.g. ibc/GLKHDSG423SGS) added to the list of
     * allowed denoms for use in the marketplace.
     */
    denom?: string;
}
export interface EventAllowDenomAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.EventAllowDenom";
    value: EventAllowDenomAmino;
}
/**
 * EventAllowDenom is an event emitted when a new denom is added for use in the
 * marketplace.
 */
export interface EventAllowDenomSDKType {
    denom: string;
}
/**
 * EventRemoveAllowedDenom is an event emitted when a denom is removed from use
 * in the marketplace.
 *
 * Since Revision 1
 */
export interface EventRemoveAllowedDenom {
    /**
     * denom is the bank denom (e.g. ibc/GLKHDSG423SGS) removed from the list of
     * allowed denoms for use in the marketplace.
     */
    denom: string;
}
export interface EventRemoveAllowedDenomProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventRemoveAllowedDenom";
    value: Uint8Array;
}
/**
 * EventRemoveAllowedDenom is an event emitted when a denom is removed from use
 * in the marketplace.
 *
 * Since Revision 1
 */
export interface EventRemoveAllowedDenomAmino {
    /**
     * denom is the bank denom (e.g. ibc/GLKHDSG423SGS) removed from the list of
     * allowed denoms for use in the marketplace.
     */
    denom?: string;
}
export interface EventRemoveAllowedDenomAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.EventRemoveAllowedDenom";
    value: EventRemoveAllowedDenomAmino;
}
/**
 * EventRemoveAllowedDenom is an event emitted when a denom is removed from use
 * in the marketplace.
 *
 * Since Revision 1
 */
export interface EventRemoveAllowedDenomSDKType {
    denom: string;
}
export declare const EventSell: {
    typeUrl: string;
    encode(message: EventSell, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventSell;
    fromPartial(object: Partial<EventSell>): EventSell;
    fromAmino(object: EventSellAmino): EventSell;
    toAmino(message: EventSell): EventSellAmino;
    fromAminoMsg(object: EventSellAminoMsg): EventSell;
    fromProtoMsg(message: EventSellProtoMsg): EventSell;
    toProto(message: EventSell): Uint8Array;
    toProtoMsg(message: EventSell): EventSellProtoMsg;
};
export declare const EventBuyDirect: {
    typeUrl: string;
    encode(message: EventBuyDirect, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventBuyDirect;
    fromPartial(object: Partial<EventBuyDirect>): EventBuyDirect;
    fromAmino(object: EventBuyDirectAmino): EventBuyDirect;
    toAmino(message: EventBuyDirect): EventBuyDirectAmino;
    fromAminoMsg(object: EventBuyDirectAminoMsg): EventBuyDirect;
    fromProtoMsg(message: EventBuyDirectProtoMsg): EventBuyDirect;
    toProto(message: EventBuyDirect): Uint8Array;
    toProtoMsg(message: EventBuyDirect): EventBuyDirectProtoMsg;
};
export declare const EventUpdateSellOrder: {
    typeUrl: string;
    encode(message: EventUpdateSellOrder, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateSellOrder;
    fromPartial(object: Partial<EventUpdateSellOrder>): EventUpdateSellOrder;
    fromAmino(object: EventUpdateSellOrderAmino): EventUpdateSellOrder;
    toAmino(message: EventUpdateSellOrder): EventUpdateSellOrderAmino;
    fromAminoMsg(object: EventUpdateSellOrderAminoMsg): EventUpdateSellOrder;
    fromProtoMsg(message: EventUpdateSellOrderProtoMsg): EventUpdateSellOrder;
    toProto(message: EventUpdateSellOrder): Uint8Array;
    toProtoMsg(message: EventUpdateSellOrder): EventUpdateSellOrderProtoMsg;
};
export declare const EventCancelSellOrder: {
    typeUrl: string;
    encode(message: EventCancelSellOrder, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventCancelSellOrder;
    fromPartial(object: Partial<EventCancelSellOrder>): EventCancelSellOrder;
    fromAmino(object: EventCancelSellOrderAmino): EventCancelSellOrder;
    toAmino(message: EventCancelSellOrder): EventCancelSellOrderAmino;
    fromAminoMsg(object: EventCancelSellOrderAminoMsg): EventCancelSellOrder;
    fromProtoMsg(message: EventCancelSellOrderProtoMsg): EventCancelSellOrder;
    toProto(message: EventCancelSellOrder): Uint8Array;
    toProtoMsg(message: EventCancelSellOrder): EventCancelSellOrderProtoMsg;
};
export declare const EventAllowDenom: {
    typeUrl: string;
    encode(message: EventAllowDenom, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventAllowDenom;
    fromPartial(object: Partial<EventAllowDenom>): EventAllowDenom;
    fromAmino(object: EventAllowDenomAmino): EventAllowDenom;
    toAmino(message: EventAllowDenom): EventAllowDenomAmino;
    fromAminoMsg(object: EventAllowDenomAminoMsg): EventAllowDenom;
    fromProtoMsg(message: EventAllowDenomProtoMsg): EventAllowDenom;
    toProto(message: EventAllowDenom): Uint8Array;
    toProtoMsg(message: EventAllowDenom): EventAllowDenomProtoMsg;
};
export declare const EventRemoveAllowedDenom: {
    typeUrl: string;
    encode(message: EventRemoveAllowedDenom, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventRemoveAllowedDenom;
    fromPartial(object: Partial<EventRemoveAllowedDenom>): EventRemoveAllowedDenom;
    fromAmino(object: EventRemoveAllowedDenomAmino): EventRemoveAllowedDenom;
    toAmino(message: EventRemoveAllowedDenom): EventRemoveAllowedDenomAmino;
    fromAminoMsg(object: EventRemoveAllowedDenomAminoMsg): EventRemoveAllowedDenom;
    fromProtoMsg(message: EventRemoveAllowedDenomProtoMsg): EventRemoveAllowedDenom;
    toProto(message: EventRemoveAllowedDenom): Uint8Array;
    toProtoMsg(message: EventRemoveAllowedDenom): EventRemoveAllowedDenomProtoMsg;
};
