import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** EventSell is an event emitted when a sell order is created. */
export interface EventSell {
    /** sell_order_id is the unique identifier of the sell order that was created. */
    sellOrderId: Long;
}
export interface EventSellProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventSell";
    value: Uint8Array;
}
/** EventSell is an event emitted when a sell order is created. */
export interface EventSellAmino {
    /** sell_order_id is the unique identifier of the sell order that was created. */
    sell_order_id: string;
}
export interface EventSellAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.EventSell";
    value: EventSellAmino;
}
/** EventSell is an event emitted when a sell order is created. */
export interface EventSellSDKType {
    sell_order_id: Long;
}
/** EventBuyDirect is an event emitted when a direct buy order is processed. */
export interface EventBuyDirect {
    /**
     * sell_order_id is the unique identifier of the sell order that credits were
     * purchased from.
     */
    sellOrderId: Long;
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
    sell_order_id: string;
}
export interface EventBuyDirectAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.EventBuyDirect";
    value: EventBuyDirectAmino;
}
/** EventBuyDirect is an event emitted when a direct buy order is processed. */
export interface EventBuyDirectSDKType {
    sell_order_id: Long;
}
/** EventUpdateSellOrder is an event emitted when a sell order is updated. */
export interface EventUpdateSellOrder {
    /** sell_order_id is the unique identifier of the sell order that was updated. */
    sellOrderId: Long;
}
export interface EventUpdateSellOrderProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventUpdateSellOrder";
    value: Uint8Array;
}
/** EventUpdateSellOrder is an event emitted when a sell order is updated. */
export interface EventUpdateSellOrderAmino {
    /** sell_order_id is the unique identifier of the sell order that was updated. */
    sell_order_id: string;
}
export interface EventUpdateSellOrderAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.EventUpdateSellOrder";
    value: EventUpdateSellOrderAmino;
}
/** EventUpdateSellOrder is an event emitted when a sell order is updated. */
export interface EventUpdateSellOrderSDKType {
    sell_order_id: Long;
}
/** EventCancelSellOrder is an event emitted when a sell order is cancelled. */
export interface EventCancelSellOrder {
    /**
     * sell_order_id is the unique identifier of the sell order that was
     * cancelled.
     */
    sellOrderId: Long;
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
    sell_order_id: string;
}
export interface EventCancelSellOrderAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.EventCancelSellOrder";
    value: EventCancelSellOrderAmino;
}
/** EventCancelSellOrder is an event emitted when a sell order is cancelled. */
export interface EventCancelSellOrderSDKType {
    sell_order_id: Long;
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
    denom: string;
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
    denom: string;
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
    encode(message: EventSell, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSell;
    fromJSON(object: any): EventSell;
    toJSON(message: EventSell): unknown;
    fromPartial(object: Partial<EventSell>): EventSell;
    fromAmino(object: EventSellAmino): EventSell;
    toAmino(message: EventSell): EventSellAmino;
    fromAminoMsg(object: EventSellAminoMsg): EventSell;
    fromProtoMsg(message: EventSellProtoMsg): EventSell;
    toProto(message: EventSell): Uint8Array;
    toProtoMsg(message: EventSell): EventSellProtoMsg;
};
export declare const EventBuyDirect: {
    encode(message: EventBuyDirect, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBuyDirect;
    fromJSON(object: any): EventBuyDirect;
    toJSON(message: EventBuyDirect): unknown;
    fromPartial(object: Partial<EventBuyDirect>): EventBuyDirect;
    fromAmino(object: EventBuyDirectAmino): EventBuyDirect;
    toAmino(message: EventBuyDirect): EventBuyDirectAmino;
    fromAminoMsg(object: EventBuyDirectAminoMsg): EventBuyDirect;
    fromProtoMsg(message: EventBuyDirectProtoMsg): EventBuyDirect;
    toProto(message: EventBuyDirect): Uint8Array;
    toProtoMsg(message: EventBuyDirect): EventBuyDirectProtoMsg;
};
export declare const EventUpdateSellOrder: {
    encode(message: EventUpdateSellOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateSellOrder;
    fromJSON(object: any): EventUpdateSellOrder;
    toJSON(message: EventUpdateSellOrder): unknown;
    fromPartial(object: Partial<EventUpdateSellOrder>): EventUpdateSellOrder;
    fromAmino(object: EventUpdateSellOrderAmino): EventUpdateSellOrder;
    toAmino(message: EventUpdateSellOrder): EventUpdateSellOrderAmino;
    fromAminoMsg(object: EventUpdateSellOrderAminoMsg): EventUpdateSellOrder;
    fromProtoMsg(message: EventUpdateSellOrderProtoMsg): EventUpdateSellOrder;
    toProto(message: EventUpdateSellOrder): Uint8Array;
    toProtoMsg(message: EventUpdateSellOrder): EventUpdateSellOrderProtoMsg;
};
export declare const EventCancelSellOrder: {
    encode(message: EventCancelSellOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelSellOrder;
    fromJSON(object: any): EventCancelSellOrder;
    toJSON(message: EventCancelSellOrder): unknown;
    fromPartial(object: Partial<EventCancelSellOrder>): EventCancelSellOrder;
    fromAmino(object: EventCancelSellOrderAmino): EventCancelSellOrder;
    toAmino(message: EventCancelSellOrder): EventCancelSellOrderAmino;
    fromAminoMsg(object: EventCancelSellOrderAminoMsg): EventCancelSellOrder;
    fromProtoMsg(message: EventCancelSellOrderProtoMsg): EventCancelSellOrder;
    toProto(message: EventCancelSellOrder): Uint8Array;
    toProtoMsg(message: EventCancelSellOrder): EventCancelSellOrderProtoMsg;
};
export declare const EventAllowDenom: {
    encode(message: EventAllowDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAllowDenom;
    fromJSON(object: any): EventAllowDenom;
    toJSON(message: EventAllowDenom): unknown;
    fromPartial(object: Partial<EventAllowDenom>): EventAllowDenom;
    fromAmino(object: EventAllowDenomAmino): EventAllowDenom;
    toAmino(message: EventAllowDenom): EventAllowDenomAmino;
    fromAminoMsg(object: EventAllowDenomAminoMsg): EventAllowDenom;
    fromProtoMsg(message: EventAllowDenomProtoMsg): EventAllowDenom;
    toProto(message: EventAllowDenom): Uint8Array;
    toProtoMsg(message: EventAllowDenom): EventAllowDenomProtoMsg;
};
export declare const EventRemoveAllowedDenom: {
    encode(message: EventRemoveAllowedDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRemoveAllowedDenom;
    fromJSON(object: any): EventRemoveAllowedDenom;
    toJSON(message: EventRemoveAllowedDenom): unknown;
    fromPartial(object: Partial<EventRemoveAllowedDenom>): EventRemoveAllowedDenom;
    fromAmino(object: EventRemoveAllowedDenomAmino): EventRemoveAllowedDenom;
    toAmino(message: EventRemoveAllowedDenom): EventRemoveAllowedDenomAmino;
    fromAminoMsg(object: EventRemoveAllowedDenomAminoMsg): EventRemoveAllowedDenom;
    fromProtoMsg(message: EventRemoveAllowedDenomProtoMsg): EventRemoveAllowedDenom;
    toProto(message: EventRemoveAllowedDenom): Uint8Array;
    toProtoMsg(message: EventRemoveAllowedDenom): EventRemoveAllowedDenomProtoMsg;
};
