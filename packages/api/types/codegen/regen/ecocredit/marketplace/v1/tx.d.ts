import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/** MsgSell is the Msg/Sell request type. */
export interface MsgSell {
    /** seller is the address of the account that is selling credits. */
    seller: string;
    /** orders are the sell orders being created. */
    orders: MsgSell_Order[];
}
/** MsgSell is the Msg/Sell request type. */
export interface MsgSellSDKType {
    /** seller is the address of the account that is selling credits. */
    seller: string;
    /** orders are the sell orders being created. */
    orders: MsgSell_OrderSDKType[];
}
/** Order is the content of a new sell order. */
export interface MsgSell_Order {
    /** batch_denom is the credit batch being sold. */
    batchDenom: string;
    /**
     * quantity is the quantity of credits being sold from this batch. If it is
     * less then the balance of credits the owner has available at the time this
     * sell order is matched, the quantity will be adjusted downwards to the
     * owner's balance. However, if the balance of credits is less than this
     * quantity at the time the sell order is created, the operation will fail.
     */
    quantity: string;
    /**
     * ask_price is the price the seller is asking for each unit of the
     * batch_denom. Each credit unit of the batch will be sold for at least the
     * ask_price or more.
     */
    askPrice?: Coin;
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
}
/** Order is the content of a new sell order. */
export interface MsgSell_OrderSDKType {
    /** batch_denom is the credit batch being sold. */
    batch_denom: string;
    /**
     * quantity is the quantity of credits being sold from this batch. If it is
     * less then the balance of credits the owner has available at the time this
     * sell order is matched, the quantity will be adjusted downwards to the
     * owner's balance. However, if the balance of credits is less than this
     * quantity at the time the sell order is created, the operation will fail.
     */
    quantity: string;
    /**
     * ask_price is the price the seller is asking for each unit of the
     * batch_denom. Each credit unit of the batch will be sold for at least the
     * ask_price or more.
     */
    ask_price?: CoinSDKType;
    /**
     * disable_auto_retire disables auto-retirement of credits which allows a
     * buyer to disable auto-retirement in their buy order enabling them to
     * resell the credits to another buyer.
     */
    disable_auto_retire: boolean;
    /**
     * expiration is an optional timestamp when the sell order expires. When the
     * expiration time is reached, the sell order is removed from state.
     */
    expiration?: TimestampSDKType;
}
/** MsgSellResponse is the Msg/Sell response type. */
export interface MsgSellResponse {
    /** sell_order_ids are the sell order IDs of the newly created sell orders. */
    sellOrderIds: Long[];
}
/** MsgSellResponse is the Msg/Sell response type. */
export interface MsgSellResponseSDKType {
    /** sell_order_ids are the sell order IDs of the newly created sell orders. */
    sell_order_ids: Long[];
}
/** MsgUpdateSellOrders is the Msg/UpdateSellOrders request type. */
export interface MsgUpdateSellOrders {
    /** seller is the address of the account that is selling credits. */
    seller: string;
    /** updates are updates to existing sell orders. */
    updates: MsgUpdateSellOrders_Update[];
}
/** MsgUpdateSellOrders is the Msg/UpdateSellOrders request type. */
export interface MsgUpdateSellOrdersSDKType {
    /** seller is the address of the account that is selling credits. */
    seller: string;
    /** updates are updates to existing sell orders. */
    updates: MsgUpdateSellOrders_UpdateSDKType[];
}
/** Update is an update to an existing sell order. */
export interface MsgUpdateSellOrders_Update {
    /** sell_order_id is the ID of an existing sell order. */
    sellOrderId: Long;
    /** new_quantity is the updated quantity of credits available to sell. */
    newQuantity: string;
    /** new_ask_price is the new ask price for this sell order */
    newAskPrice?: Coin;
    /**
     * disable_auto_retire updates the disable_auto_retire field in the sell
     * order.
     */
    disableAutoRetire: boolean;
    /**
     * new_expiration is an optional timestamp when the sell order expires. When
     * the expiration time is reached, the sell order is removed from state.
     */
    newExpiration?: Timestamp;
}
/** Update is an update to an existing sell order. */
export interface MsgUpdateSellOrders_UpdateSDKType {
    /** sell_order_id is the ID of an existing sell order. */
    sell_order_id: Long;
    /** new_quantity is the updated quantity of credits available to sell. */
    new_quantity: string;
    /** new_ask_price is the new ask price for this sell order */
    new_ask_price?: CoinSDKType;
    /**
     * disable_auto_retire updates the disable_auto_retire field in the sell
     * order.
     */
    disable_auto_retire: boolean;
    /**
     * new_expiration is an optional timestamp when the sell order expires. When
     * the expiration time is reached, the sell order is removed from state.
     */
    new_expiration?: TimestampSDKType;
}
/** MsgUpdateSellOrdersResponse is the Msg/UpdateSellOrders response type. */
export interface MsgUpdateSellOrdersResponse {
}
/** MsgUpdateSellOrdersResponse is the Msg/UpdateSellOrders response type. */
export interface MsgUpdateSellOrdersResponseSDKType {
}
/** MsgCancelSellOrder is the Msg/CancelSellOrder request type. */
export interface MsgCancelSellOrder {
    /**
     * seller is the address of the account that created the sell order and is
     * therefore authorized to cancel the sell order.
     */
    seller: string;
    /** sell_order_id is the id of the seller order to cancel. */
    sellOrderId: Long;
}
/** MsgCancelSellOrder is the Msg/CancelSellOrder request type. */
export interface MsgCancelSellOrderSDKType {
    /**
     * seller is the address of the account that created the sell order and is
     * therefore authorized to cancel the sell order.
     */
    seller: string;
    /** sell_order_id is the id of the seller order to cancel. */
    sell_order_id: Long;
}
/** MsgCancelSellOrder is the Msg/CancelSellOrder response type. */
export interface MsgCancelSellOrderResponse {
}
/** MsgCancelSellOrder is the Msg/CancelSellOrder response type. */
export interface MsgCancelSellOrderResponseSDKType {
}
/** MsgBuyDirect is the Msg/BuyDirect request type. */
export interface MsgBuyDirect {
    /** buyer is the address of the account that is buying credits. */
    buyer: string;
    /** orders is a list of orders for ecocredits. */
    orders: MsgBuyDirect_Order[];
}
/** MsgBuyDirect is the Msg/BuyDirect request type. */
export interface MsgBuyDirectSDKType {
    /** buyer is the address of the account that is buying credits. */
    buyer: string;
    /** orders is a list of orders for ecocredits. */
    orders: MsgBuyDirect_OrderSDKType[];
}
/** Order contains the information needed to purchase an ecocredit. */
export interface MsgBuyDirect_Order {
    /**
     * sell_order_id is the sell order ID against which the buyer is trying
     * to buy.
     */
    sellOrderId: Long;
    /** quantity is the quantity of credits to buy. */
    quantity: string;
    /** bid_price is the price the buyer is willing to pay per credit. */
    bidPrice?: Coin;
    /**
     * disable_auto_retire allows auto-retirement to be disabled. If it is set
     * to true the credits will not auto-retire and can be resold assuming that
     * the corresponding sell order has auto-retirement disabled. If the sell
     * order hasn't disabled auto-retirement and the buy order tries to disable
     * it, that buy order will fail.
     */
    disableAutoRetire: boolean;
    /**
     * retirement_jurisdiction is the optional retirement jurisdiction for the
     * credits which will be used only if disable_auto_retire is false.
     */
    retirementJurisdiction: string;
    /**
     * retirement_reason is any arbitrary string that specifies the reason for
     * retiring credits. The reason will be included in EventRetire and is not
     * stored in state.
     *
     * Since Revision 1
     */
    retirementReason: string;
}
/** Order contains the information needed to purchase an ecocredit. */
export interface MsgBuyDirect_OrderSDKType {
    /**
     * sell_order_id is the sell order ID against which the buyer is trying
     * to buy.
     */
    sell_order_id: Long;
    /** quantity is the quantity of credits to buy. */
    quantity: string;
    /** bid_price is the price the buyer is willing to pay per credit. */
    bid_price?: CoinSDKType;
    /**
     * disable_auto_retire allows auto-retirement to be disabled. If it is set
     * to true the credits will not auto-retire and can be resold assuming that
     * the corresponding sell order has auto-retirement disabled. If the sell
     * order hasn't disabled auto-retirement and the buy order tries to disable
     * it, that buy order will fail.
     */
    disable_auto_retire: boolean;
    /**
     * retirement_jurisdiction is the optional retirement jurisdiction for the
     * credits which will be used only if disable_auto_retire is false.
     */
    retirement_jurisdiction: string;
    /**
     * retirement_reason is any arbitrary string that specifies the reason for
     * retiring credits. The reason will be included in EventRetire and is not
     * stored in state.
     *
     * Since Revision 1
     */
    retirement_reason: string;
}
/** MsgBuyDirectResponse is the Msg/BuyDirect response type. */
export interface MsgBuyDirectResponse {
}
/** MsgBuyDirectResponse is the Msg/BuyDirect response type. */
export interface MsgBuyDirectResponseSDKType {
}
/**
 * MsgAddAllowedDenom is the Msg/AddAllowedDenom request type.
 *
 * Since Revision 1
 */
export interface MsgAddAllowedDenom {
    /** authority is the address of the governance account. */
    authority: string;
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
/**
 * MsgAddAllowedDenom is the Msg/AddAllowedDenom request type.
 *
 * Since Revision 1
 */
export interface MsgAddAllowedDenomSDKType {
    /** authority is the address of the governance account. */
    authority: string;
    /** denom is the bank denom to allow (ex. ibc/GLKHDSG423SGS) */
    bank_denom: string;
    /**
     * display_denom is the denom to display to the user and is informational.
     * Because the denom is likely an IBC denom, this should be chosen by
     * governance to represent the consensus trusted name of the denom.
     */
    display_denom: string;
    /**
     * exponent is the exponent that relates the denom to the display_denom and is
     * informational
     */
    exponent: number;
}
/**
 * MsgAddAllowedDenomResponse is the Msg/AddAllowedDenom response type.
 *
 * Since Revision 1
 */
export interface MsgAddAllowedDenomResponse {
}
/**
 * MsgAddAllowedDenomResponse is the Msg/AddAllowedDenom response type.
 *
 * Since Revision 1
 */
export interface MsgAddAllowedDenomResponseSDKType {
}
/**
 * MsgRemoveAllowedDenom is the Msg/RemoveAllowedDenom request type.
 *
 * Since Revision 1
 */
export interface MsgRemoveAllowedDenom {
    /** authority is the address of the governance account. */
    authority: string;
    /** denom is the denom to remove (ex. ibc/GLKHDSG423SGS) */
    denom: string;
}
/**
 * MsgRemoveAllowedDenom is the Msg/RemoveAllowedDenom request type.
 *
 * Since Revision 1
 */
export interface MsgRemoveAllowedDenomSDKType {
    /** authority is the address of the governance account. */
    authority: string;
    /** denom is the denom to remove (ex. ibc/GLKHDSG423SGS) */
    denom: string;
}
/**
 * MsgRemoveAllowedDenomResponse is the Msg/RemoveAllowedDenom response type.
 *
 * Since Revision 1
 */
export interface MsgRemoveAllowedDenomResponse {
}
/**
 * MsgRemoveAllowedDenomResponse is the Msg/RemoveAllowedDenom response type.
 *
 * Since Revision 1
 */
export interface MsgRemoveAllowedDenomResponseSDKType {
}
export declare const MsgSell: {
    encode(message: MsgSell, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSell;
    fromJSON(object: any): MsgSell;
    toJSON(message: MsgSell): unknown;
    fromPartial(object: Partial<MsgSell>): MsgSell;
};
export declare const MsgSell_Order: {
    encode(message: MsgSell_Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSell_Order;
    fromJSON(object: any): MsgSell_Order;
    toJSON(message: MsgSell_Order): unknown;
    fromPartial(object: Partial<MsgSell_Order>): MsgSell_Order;
};
export declare const MsgSellResponse: {
    encode(message: MsgSellResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellResponse;
    fromJSON(object: any): MsgSellResponse;
    toJSON(message: MsgSellResponse): unknown;
    fromPartial(object: Partial<MsgSellResponse>): MsgSellResponse;
};
export declare const MsgUpdateSellOrders: {
    encode(message: MsgUpdateSellOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSellOrders;
    fromJSON(object: any): MsgUpdateSellOrders;
    toJSON(message: MsgUpdateSellOrders): unknown;
    fromPartial(object: Partial<MsgUpdateSellOrders>): MsgUpdateSellOrders;
};
export declare const MsgUpdateSellOrders_Update: {
    encode(message: MsgUpdateSellOrders_Update, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSellOrders_Update;
    fromJSON(object: any): MsgUpdateSellOrders_Update;
    toJSON(message: MsgUpdateSellOrders_Update): unknown;
    fromPartial(object: Partial<MsgUpdateSellOrders_Update>): MsgUpdateSellOrders_Update;
};
export declare const MsgUpdateSellOrdersResponse: {
    encode(_: MsgUpdateSellOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSellOrdersResponse;
    fromJSON(_: any): MsgUpdateSellOrdersResponse;
    toJSON(_: MsgUpdateSellOrdersResponse): unknown;
    fromPartial(_: Partial<MsgUpdateSellOrdersResponse>): MsgUpdateSellOrdersResponse;
};
export declare const MsgCancelSellOrder: {
    encode(message: MsgCancelSellOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSellOrder;
    fromJSON(object: any): MsgCancelSellOrder;
    toJSON(message: MsgCancelSellOrder): unknown;
    fromPartial(object: Partial<MsgCancelSellOrder>): MsgCancelSellOrder;
};
export declare const MsgCancelSellOrderResponse: {
    encode(_: MsgCancelSellOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSellOrderResponse;
    fromJSON(_: any): MsgCancelSellOrderResponse;
    toJSON(_: MsgCancelSellOrderResponse): unknown;
    fromPartial(_: Partial<MsgCancelSellOrderResponse>): MsgCancelSellOrderResponse;
};
export declare const MsgBuyDirect: {
    encode(message: MsgBuyDirect, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyDirect;
    fromJSON(object: any): MsgBuyDirect;
    toJSON(message: MsgBuyDirect): unknown;
    fromPartial(object: Partial<MsgBuyDirect>): MsgBuyDirect;
};
export declare const MsgBuyDirect_Order: {
    encode(message: MsgBuyDirect_Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyDirect_Order;
    fromJSON(object: any): MsgBuyDirect_Order;
    toJSON(message: MsgBuyDirect_Order): unknown;
    fromPartial(object: Partial<MsgBuyDirect_Order>): MsgBuyDirect_Order;
};
export declare const MsgBuyDirectResponse: {
    encode(_: MsgBuyDirectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyDirectResponse;
    fromJSON(_: any): MsgBuyDirectResponse;
    toJSON(_: MsgBuyDirectResponse): unknown;
    fromPartial(_: Partial<MsgBuyDirectResponse>): MsgBuyDirectResponse;
};
export declare const MsgAddAllowedDenom: {
    encode(message: MsgAddAllowedDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAllowedDenom;
    fromJSON(object: any): MsgAddAllowedDenom;
    toJSON(message: MsgAddAllowedDenom): unknown;
    fromPartial(object: Partial<MsgAddAllowedDenom>): MsgAddAllowedDenom;
};
export declare const MsgAddAllowedDenomResponse: {
    encode(_: MsgAddAllowedDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAllowedDenomResponse;
    fromJSON(_: any): MsgAddAllowedDenomResponse;
    toJSON(_: MsgAddAllowedDenomResponse): unknown;
    fromPartial(_: Partial<MsgAddAllowedDenomResponse>): MsgAddAllowedDenomResponse;
};
export declare const MsgRemoveAllowedDenom: {
    encode(message: MsgRemoveAllowedDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAllowedDenom;
    fromJSON(object: any): MsgRemoveAllowedDenom;
    toJSON(message: MsgRemoveAllowedDenom): unknown;
    fromPartial(object: Partial<MsgRemoveAllowedDenom>): MsgRemoveAllowedDenom;
};
export declare const MsgRemoveAllowedDenomResponse: {
    encode(_: MsgRemoveAllowedDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAllowedDenomResponse;
    fromJSON(_: any): MsgRemoveAllowedDenomResponse;
    toJSON(_: MsgRemoveAllowedDenomResponse): unknown;
    fromPartial(_: Partial<MsgRemoveAllowedDenomResponse>): MsgRemoveAllowedDenomResponse;
};
