import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/** EventSell is an event emitted when a sell order is created. */
export interface EventSell {
    /** sell_order_id is the unique identifier of the sell order that was created. */
    sellOrderId: Long;
}
/** EventSell is an event emitted when a sell order is created. */
export interface EventSellSDKType {
    /** sell_order_id is the unique identifier of the sell order that was created. */
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
/** EventBuyDirect is an event emitted when a direct buy order is processed. */
export interface EventBuyDirectSDKType {
    /**
     * sell_order_id is the unique identifier of the sell order that credits were
     * purchased from.
     */
    sell_order_id: Long;
}
/** EventUpdateSellOrder is an event emitted when a sell order is updated. */
export interface EventUpdateSellOrder {
    /** sell_order_id is the unique identifier of the sell order that was updated. */
    sellOrderId: Long;
}
/** EventUpdateSellOrder is an event emitted when a sell order is updated. */
export interface EventUpdateSellOrderSDKType {
    /** sell_order_id is the unique identifier of the sell order that was updated. */
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
/** EventCancelSellOrder is an event emitted when a sell order is cancelled. */
export interface EventCancelSellOrderSDKType {
    /**
     * sell_order_id is the unique identifier of the sell order that was
     * cancelled.
     */
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
/**
 * EventAllowDenom is an event emitted when a new denom is added for use in the
 * marketplace.
 */
export interface EventAllowDenomSDKType {
    /**
     * denom is the bank denom (e.g. ibc/GLKHDSG423SGS) added to the list of
     * allowed denoms for use in the marketplace.
     */
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
/**
 * EventRemoveAllowedDenom is an event emitted when a denom is removed from use
 * in the marketplace.
 *
 * Since Revision 1
 */
export interface EventRemoveAllowedDenomSDKType {
    /**
     * denom is the bank denom (e.g. ibc/GLKHDSG423SGS) removed from the list of
     * allowed denoms for use in the marketplace.
     */
    denom: string;
}
export declare const EventSell: {
    encode(message: EventSell, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSell;
    fromJSON(object: any): EventSell;
    toJSON(message: EventSell): unknown;
    fromPartial(object: Partial<EventSell>): EventSell;
};
export declare const EventBuyDirect: {
    encode(message: EventBuyDirect, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBuyDirect;
    fromJSON(object: any): EventBuyDirect;
    toJSON(message: EventBuyDirect): unknown;
    fromPartial(object: Partial<EventBuyDirect>): EventBuyDirect;
};
export declare const EventUpdateSellOrder: {
    encode(message: EventUpdateSellOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateSellOrder;
    fromJSON(object: any): EventUpdateSellOrder;
    toJSON(message: EventUpdateSellOrder): unknown;
    fromPartial(object: Partial<EventUpdateSellOrder>): EventUpdateSellOrder;
};
export declare const EventCancelSellOrder: {
    encode(message: EventCancelSellOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelSellOrder;
    fromJSON(object: any): EventCancelSellOrder;
    toJSON(message: EventCancelSellOrder): unknown;
    fromPartial(object: Partial<EventCancelSellOrder>): EventCancelSellOrder;
};
export declare const EventAllowDenom: {
    encode(message: EventAllowDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAllowDenom;
    fromJSON(object: any): EventAllowDenom;
    toJSON(message: EventAllowDenom): unknown;
    fromPartial(object: Partial<EventAllowDenom>): EventAllowDenom;
};
export declare const EventRemoveAllowedDenom: {
    encode(message: EventRemoveAllowedDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRemoveAllowedDenom;
    fromJSON(object: any): EventRemoveAllowedDenom;
    toJSON(message: EventRemoveAllowedDenom): unknown;
    fromPartial(object: Partial<EventRemoveAllowedDenom>): EventRemoveAllowedDenom;
};
