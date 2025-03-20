//@ts-nocheck
import { FeeParams, FeeParamsAmino, FeeParamsSDKType } from "./state";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { toTimestamp, fromTimestamp } from "../../../../helpers";
/** MsgSell is the Msg/Sell request type. */
export interface MsgSell {
  /** seller is the address of the account that is selling credits. */
  seller: string;
  /** orders are the sell orders being created. */
  orders: MsgSell_Order[];
}
export interface MsgSellProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell";
  value: Uint8Array;
}
/** MsgSell is the Msg/Sell request type. */
export interface MsgSellAmino {
  /** seller is the address of the account that is selling credits. */
  seller?: string;
  /** orders are the sell orders being created. */
  orders?: MsgSell_OrderAmino[];
}
export interface MsgSellAminoMsg {
  type: "regen.marketplace/MsgSell";
  value: MsgSellAmino;
}
/** MsgSell is the Msg/Sell request type. */
export interface MsgSellSDKType {
  seller: string;
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
  expiration?: Date;
}
export interface MsgSell_OrderProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.Order";
  value: Uint8Array;
}
/** Order is the content of a new sell order. */
export interface MsgSell_OrderAmino {
  /** batch_denom is the credit batch being sold. */
  batch_denom?: string;
  /**
   * quantity is the quantity of credits being sold from this batch. If it is
   * less then the balance of credits the owner has available at the time this
   * sell order is matched, the quantity will be adjusted downwards to the
   * owner's balance. However, if the balance of credits is less than this
   * quantity at the time the sell order is created, the operation will fail.
   */
  quantity?: string;
  /**
   * ask_price is the price the seller is asking for each unit of the
   * batch_denom. Each credit unit of the batch will be sold for at least the
   * ask_price or more.
   */
  ask_price?: CoinAmino;
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
}
export interface MsgSell_OrderAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.Order";
  value: MsgSell_OrderAmino;
}
/** Order is the content of a new sell order. */
export interface MsgSell_OrderSDKType {
  batch_denom: string;
  quantity: string;
  ask_price?: CoinSDKType;
  disable_auto_retire: boolean;
  expiration?: Date;
}
/** MsgSellResponse is the Msg/Sell response type. */
export interface MsgSellResponse {
  /** sell_order_ids are the sell order IDs of the newly created sell orders. */
  sellOrderIds: bigint[];
}
export interface MsgSellResponseProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgSellResponse";
  value: Uint8Array;
}
/** MsgSellResponse is the Msg/Sell response type. */
export interface MsgSellResponseAmino {
  /** sell_order_ids are the sell order IDs of the newly created sell orders. */
  sell_order_ids?: string[];
}
export interface MsgSellResponseAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.MsgSellResponse";
  value: MsgSellResponseAmino;
}
/** MsgSellResponse is the Msg/Sell response type. */
export interface MsgSellResponseSDKType {
  sell_order_ids: bigint[];
}
/** MsgUpdateSellOrders is the Msg/UpdateSellOrders request type. */
export interface MsgUpdateSellOrders {
  /** seller is the address of the account that is selling credits. */
  seller: string;
  /** updates are updates to existing sell orders. */
  updates: MsgUpdateSellOrders_Update[];
}
export interface MsgUpdateSellOrdersProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders";
  value: Uint8Array;
}
/** MsgUpdateSellOrders is the Msg/UpdateSellOrders request type. */
export interface MsgUpdateSellOrdersAmino {
  /** seller is the address of the account that is selling credits. */
  seller?: string;
  /** updates are updates to existing sell orders. */
  updates?: MsgUpdateSellOrders_UpdateAmino[];
}
export interface MsgUpdateSellOrdersAminoMsg {
  type: "regen.marketplace/MsgUpdateSellOrders";
  value: MsgUpdateSellOrdersAmino;
}
/** MsgUpdateSellOrders is the Msg/UpdateSellOrders request type. */
export interface MsgUpdateSellOrdersSDKType {
  seller: string;
  updates: MsgUpdateSellOrders_UpdateSDKType[];
}
/** Update is an update to an existing sell order. */
export interface MsgUpdateSellOrders_Update {
  /** sell_order_id is the ID of an existing sell order. */
  sellOrderId: bigint;
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
  newExpiration?: Date;
}
export interface MsgUpdateSellOrders_UpdateProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.Update";
  value: Uint8Array;
}
/** Update is an update to an existing sell order. */
export interface MsgUpdateSellOrders_UpdateAmino {
  /** sell_order_id is the ID of an existing sell order. */
  sell_order_id?: string;
  /** new_quantity is the updated quantity of credits available to sell. */
  new_quantity?: string;
  /** new_ask_price is the new ask price for this sell order */
  new_ask_price?: CoinAmino;
  /**
   * disable_auto_retire updates the disable_auto_retire field in the sell
   * order.
   */
  disable_auto_retire?: boolean;
  /**
   * new_expiration is an optional timestamp when the sell order expires. When
   * the expiration time is reached, the sell order is removed from state.
   */
  new_expiration?: string;
}
export interface MsgUpdateSellOrders_UpdateAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.Update";
  value: MsgUpdateSellOrders_UpdateAmino;
}
/** Update is an update to an existing sell order. */
export interface MsgUpdateSellOrders_UpdateSDKType {
  sell_order_id: bigint;
  new_quantity: string;
  new_ask_price?: CoinSDKType;
  disable_auto_retire: boolean;
  new_expiration?: Date;
}
/** MsgUpdateSellOrdersResponse is the Msg/UpdateSellOrders response type. */
export interface MsgUpdateSellOrdersResponse {}
export interface MsgUpdateSellOrdersResponseProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrdersResponse";
  value: Uint8Array;
}
/** MsgUpdateSellOrdersResponse is the Msg/UpdateSellOrders response type. */
export interface MsgUpdateSellOrdersResponseAmino {}
export interface MsgUpdateSellOrdersResponseAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrdersResponse";
  value: MsgUpdateSellOrdersResponseAmino;
}
/** MsgUpdateSellOrdersResponse is the Msg/UpdateSellOrders response type. */
export interface MsgUpdateSellOrdersResponseSDKType {}
/** MsgCancelSellOrder is the Msg/CancelSellOrder request type. */
export interface MsgCancelSellOrder {
  /**
   * seller is the address of the account that created the sell order and is
   * therefore authorized to cancel the sell order.
   */
  seller: string;
  /** sell_order_id is the id of the seller order to cancel. */
  sellOrderId: bigint;
}
export interface MsgCancelSellOrderProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder";
  value: Uint8Array;
}
/** MsgCancelSellOrder is the Msg/CancelSellOrder request type. */
export interface MsgCancelSellOrderAmino {
  /**
   * seller is the address of the account that created the sell order and is
   * therefore authorized to cancel the sell order.
   */
  seller?: string;
  /** sell_order_id is the id of the seller order to cancel. */
  sell_order_id?: string;
}
export interface MsgCancelSellOrderAminoMsg {
  type: "regen.marketplace/MsgCancelSellOrder";
  value: MsgCancelSellOrderAmino;
}
/** MsgCancelSellOrder is the Msg/CancelSellOrder request type. */
export interface MsgCancelSellOrderSDKType {
  seller: string;
  sell_order_id: bigint;
}
/** MsgCancelSellOrder is the Msg/CancelSellOrder response type. */
export interface MsgCancelSellOrderResponse {}
export interface MsgCancelSellOrderResponseProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrderResponse";
  value: Uint8Array;
}
/** MsgCancelSellOrder is the Msg/CancelSellOrder response type. */
export interface MsgCancelSellOrderResponseAmino {}
export interface MsgCancelSellOrderResponseAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrderResponse";
  value: MsgCancelSellOrderResponseAmino;
}
/** MsgCancelSellOrder is the Msg/CancelSellOrder response type. */
export interface MsgCancelSellOrderResponseSDKType {}
/** MsgBuyDirect is the Msg/BuyDirect request type. */
export interface MsgBuyDirect {
  /** buyer is the address of the account that is buying credits. */
  buyer: string;
  /** orders is a list of orders for ecocredits. */
  orders: MsgBuyDirect_Order[];
}
export interface MsgBuyDirectProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect";
  value: Uint8Array;
}
/** MsgBuyDirect is the Msg/BuyDirect request type. */
export interface MsgBuyDirectAmino {
  /** buyer is the address of the account that is buying credits. */
  buyer?: string;
  /** orders is a list of orders for ecocredits. */
  orders?: MsgBuyDirect_OrderAmino[];
}
export interface MsgBuyDirectAminoMsg {
  type: "regen.marketplace/MsgBuyDirect";
  value: MsgBuyDirectAmino;
}
/** MsgBuyDirect is the Msg/BuyDirect request type. */
export interface MsgBuyDirectSDKType {
  buyer: string;
  orders: MsgBuyDirect_OrderSDKType[];
}
/** Order contains the information needed to purchase an ecocredit. */
export interface MsgBuyDirect_Order {
  /**
   * sell_order_id is the sell order ID against which the buyer is trying
   * to buy.
   */
  sellOrderId: bigint;
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
  /**
   * max_fee_amount is the maximum amount of buyer side fees being paid to the marketplace.
   * If the marketplace fees end up being greater than this amount, the transaction will fail.
   * Fees are always paid in the same denomination as the bid price.
   * 
   * Since Revision 3
   */
  maxFeeAmount?: Coin;
}
export interface MsgBuyDirect_OrderProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.Order";
  value: Uint8Array;
}
/** Order contains the information needed to purchase an ecocredit. */
export interface MsgBuyDirect_OrderAmino {
  /**
   * sell_order_id is the sell order ID against which the buyer is trying
   * to buy.
   */
  sell_order_id?: string;
  /** quantity is the quantity of credits to buy. */
  quantity?: string;
  /** bid_price is the price the buyer is willing to pay per credit. */
  bid_price?: CoinAmino;
  /**
   * disable_auto_retire allows auto-retirement to be disabled. If it is set
   * to true the credits will not auto-retire and can be resold assuming that
   * the corresponding sell order has auto-retirement disabled. If the sell
   * order hasn't disabled auto-retirement and the buy order tries to disable
   * it, that buy order will fail.
   */
  disable_auto_retire?: boolean;
  /**
   * retirement_jurisdiction is the optional retirement jurisdiction for the
   * credits which will be used only if disable_auto_retire is false.
   */
  retirement_jurisdiction?: string;
  /**
   * retirement_reason is any arbitrary string that specifies the reason for
   * retiring credits. The reason will be included in EventRetire and is not
   * stored in state.
   * 
   * Since Revision 1
   */
  retirement_reason?: string;
  /**
   * max_fee_amount is the maximum amount of buyer side fees being paid to the marketplace.
   * If the marketplace fees end up being greater than this amount, the transaction will fail.
   * Fees are always paid in the same denomination as the bid price.
   * 
   * Since Revision 3
   */
  max_fee_amount?: CoinAmino;
}
export interface MsgBuyDirect_OrderAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.Order";
  value: MsgBuyDirect_OrderAmino;
}
/** Order contains the information needed to purchase an ecocredit. */
export interface MsgBuyDirect_OrderSDKType {
  sell_order_id: bigint;
  quantity: string;
  bid_price?: CoinSDKType;
  disable_auto_retire: boolean;
  retirement_jurisdiction: string;
  retirement_reason: string;
  max_fee_amount?: CoinSDKType;
}
/** MsgBuyDirectResponse is the Msg/BuyDirect response type. */
export interface MsgBuyDirectResponse {}
export interface MsgBuyDirectResponseProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirectResponse";
  value: Uint8Array;
}
/** MsgBuyDirectResponse is the Msg/BuyDirect response type. */
export interface MsgBuyDirectResponseAmino {}
export interface MsgBuyDirectResponseAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.MsgBuyDirectResponse";
  value: MsgBuyDirectResponseAmino;
}
/** MsgBuyDirectResponse is the Msg/BuyDirect response type. */
export interface MsgBuyDirectResponseSDKType {}
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
export interface MsgAddAllowedDenomProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom";
  value: Uint8Array;
}
/**
 * MsgAddAllowedDenom is the Msg/AddAllowedDenom request type.
 * 
 * Since Revision 1
 */
export interface MsgAddAllowedDenomAmino {
  /** authority is the address of the governance account. */
  authority?: string;
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
export interface MsgAddAllowedDenomAminoMsg {
  type: "regen.marketplace/MsgAddAllowedDenom";
  value: MsgAddAllowedDenomAmino;
}
/**
 * MsgAddAllowedDenom is the Msg/AddAllowedDenom request type.
 * 
 * Since Revision 1
 */
export interface MsgAddAllowedDenomSDKType {
  authority: string;
  bank_denom: string;
  display_denom: string;
  exponent: number;
}
/**
 * MsgAddAllowedDenomResponse is the Msg/AddAllowedDenom response type.
 * 
 * Since Revision 1
 */
export interface MsgAddAllowedDenomResponse {}
export interface MsgAddAllowedDenomResponseProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenomResponse";
  value: Uint8Array;
}
/**
 * MsgAddAllowedDenomResponse is the Msg/AddAllowedDenom response type.
 * 
 * Since Revision 1
 */
export interface MsgAddAllowedDenomResponseAmino {}
export interface MsgAddAllowedDenomResponseAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenomResponse";
  value: MsgAddAllowedDenomResponseAmino;
}
/**
 * MsgAddAllowedDenomResponse is the Msg/AddAllowedDenom response type.
 * 
 * Since Revision 1
 */
export interface MsgAddAllowedDenomResponseSDKType {}
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
export interface MsgRemoveAllowedDenomProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom";
  value: Uint8Array;
}
/**
 * MsgRemoveAllowedDenom is the Msg/RemoveAllowedDenom request type.
 * 
 * Since Revision 1
 */
export interface MsgRemoveAllowedDenomAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /** denom is the denom to remove (ex. ibc/GLKHDSG423SGS) */
  denom?: string;
}
export interface MsgRemoveAllowedDenomAminoMsg {
  type: "regen.marketplace/MsgRemoveAllowedDenom";
  value: MsgRemoveAllowedDenomAmino;
}
/**
 * MsgRemoveAllowedDenom is the Msg/RemoveAllowedDenom request type.
 * 
 * Since Revision 1
 */
export interface MsgRemoveAllowedDenomSDKType {
  authority: string;
  denom: string;
}
/**
 * MsgRemoveAllowedDenomResponse is the Msg/RemoveAllowedDenom response type.
 * 
 * Since Revision 1
 */
export interface MsgRemoveAllowedDenomResponse {}
export interface MsgRemoveAllowedDenomResponseProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenomResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveAllowedDenomResponse is the Msg/RemoveAllowedDenom response type.
 * 
 * Since Revision 1
 */
export interface MsgRemoveAllowedDenomResponseAmino {}
export interface MsgRemoveAllowedDenomResponseAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenomResponse";
  value: MsgRemoveAllowedDenomResponseAmino;
}
/**
 * MsgRemoveAllowedDenomResponse is the Msg/RemoveAllowedDenom response type.
 * 
 * Since Revision 1
 */
export interface MsgRemoveAllowedDenomResponseSDKType {}
/** MsgSetFeeParams is the Msg/SetFeeParams request type. */
export interface MsgGovSetFeeParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** fees are the marketplace fees being set. */
  fees?: FeeParams;
}
export interface MsgGovSetFeeParamsProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgGovSetFeeParams";
  value: Uint8Array;
}
/** MsgSetFeeParams is the Msg/SetFeeParams request type. */
export interface MsgGovSetFeeParamsAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /** fees are the marketplace fees being set. */
  fees?: FeeParamsAmino;
}
export interface MsgGovSetFeeParamsAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.MsgGovSetFeeParams";
  value: MsgGovSetFeeParamsAmino;
}
/** MsgSetFeeParams is the Msg/SetFeeParams request type. */
export interface MsgGovSetFeeParamsSDKType {
  authority: string;
  fees?: FeeParamsSDKType;
}
/** MsgSetFeeParamsResponse is the Msg/SetFeeParams response type. */
export interface MsgGovSetFeeParamsResponse {}
export interface MsgGovSetFeeParamsResponseProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgGovSetFeeParamsResponse";
  value: Uint8Array;
}
/** MsgSetFeeParamsResponse is the Msg/SetFeeParams response type. */
export interface MsgGovSetFeeParamsResponseAmino {}
export interface MsgGovSetFeeParamsResponseAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.MsgGovSetFeeParamsResponse";
  value: MsgGovSetFeeParamsResponseAmino;
}
/** MsgSetFeeParamsResponse is the Msg/SetFeeParams response type. */
export interface MsgGovSetFeeParamsResponseSDKType {}
/** MsgSendFromFeePool is the Msg/SendFromFeePool request type. */
export interface MsgGovSendFromFeePool {
  /** authority is the address of the governance account. */
  authority: string;
  /** recipient is the address of the account that will receive the funds. */
  recipient: string;
  /** coins is the amount of coins to send from the fee pool. */
  coins: Coin[];
}
export interface MsgGovSendFromFeePoolProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgGovSendFromFeePool";
  value: Uint8Array;
}
/** MsgSendFromFeePool is the Msg/SendFromFeePool request type. */
export interface MsgGovSendFromFeePoolAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /** recipient is the address of the account that will receive the funds. */
  recipient?: string;
  /** coins is the amount of coins to send from the fee pool. */
  coins?: CoinAmino[];
}
export interface MsgGovSendFromFeePoolAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.MsgGovSendFromFeePool";
  value: MsgGovSendFromFeePoolAmino;
}
/** MsgSendFromFeePool is the Msg/SendFromFeePool request type. */
export interface MsgGovSendFromFeePoolSDKType {
  authority: string;
  recipient: string;
  coins: CoinSDKType[];
}
/** MsgSendFromFeePoolResponse is the Msg/SendFromFeePool response type. */
export interface MsgGovSendFromFeePoolResponse {}
export interface MsgGovSendFromFeePoolResponseProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgGovSendFromFeePoolResponse";
  value: Uint8Array;
}
/** MsgSendFromFeePoolResponse is the Msg/SendFromFeePool response type. */
export interface MsgGovSendFromFeePoolResponseAmino {}
export interface MsgGovSendFromFeePoolResponseAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.MsgGovSendFromFeePoolResponse";
  value: MsgGovSendFromFeePoolResponseAmino;
}
/** MsgSendFromFeePoolResponse is the Msg/SendFromFeePool response type. */
export interface MsgGovSendFromFeePoolResponseSDKType {}
function createBaseMsgSell(): MsgSell {
  return {
    seller: "",
    orders: []
  };
}
export const MsgSell = {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
  encode(message: MsgSell, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    for (const v of message.orders) {
      MsgSell_Order.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSell {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSell();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.orders.push(MsgSell_Order.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSell>): MsgSell {
    const message = createBaseMsgSell();
    message.seller = object.seller ?? "";
    message.orders = object.orders?.map(e => MsgSell_Order.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSellAmino): MsgSell {
    const message = createBaseMsgSell();
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    message.orders = object.orders?.map(e => MsgSell_Order.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSell): MsgSellAmino {
    const obj: any = {};
    obj.seller = message.seller === "" ? undefined : message.seller;
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? MsgSell_Order.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSellAminoMsg): MsgSell {
    return MsgSell.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSell): MsgSellAminoMsg {
    return {
      type: "regen.marketplace/MsgSell",
      value: MsgSell.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSellProtoMsg): MsgSell {
    return MsgSell.decode(message.value);
  },
  toProto(message: MsgSell): Uint8Array {
    return MsgSell.encode(message).finish();
  },
  toProtoMsg(message: MsgSell): MsgSellProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
      value: MsgSell.encode(message).finish()
    };
  }
};
function createBaseMsgSell_Order(): MsgSell_Order {
  return {
    batchDenom: "",
    quantity: "",
    askPrice: undefined,
    disableAutoRetire: false,
    expiration: undefined
  };
}
export const MsgSell_Order = {
  typeUrl: "/regen.ecocredit.marketplace.v1.Order",
  encode(message: MsgSell_Order, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.quantity !== "") {
      writer.uint32(18).string(message.quantity);
    }
    if (message.askPrice !== undefined) {
      Coin.encode(message.askPrice, writer.uint32(26).fork()).ldelim();
    }
    if (message.disableAutoRetire === true) {
      writer.uint32(32).bool(message.disableAutoRetire);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSell_Order {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSell_Order();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        case 2:
          message.quantity = reader.string();
          break;
        case 3:
          message.askPrice = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.disableAutoRetire = reader.bool();
          break;
        case 5:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSell_Order>): MsgSell_Order {
    const message = createBaseMsgSell_Order();
    message.batchDenom = object.batchDenom ?? "";
    message.quantity = object.quantity ?? "";
    message.askPrice = object.askPrice !== undefined && object.askPrice !== null ? Coin.fromPartial(object.askPrice) : undefined;
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.expiration = object.expiration ?? undefined;
    return message;
  },
  fromAmino(object: MsgSell_OrderAmino): MsgSell_Order {
    const message = createBaseMsgSell_Order();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.ask_price !== undefined && object.ask_price !== null) {
      message.askPrice = Coin.fromAmino(object.ask_price);
    }
    if (object.disable_auto_retire !== undefined && object.disable_auto_retire !== null) {
      message.disableAutoRetire = object.disable_auto_retire;
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
    }
    return message;
  },
  toAmino(message: MsgSell_Order): MsgSell_OrderAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    obj.quantity = message.quantity === "" ? undefined : message.quantity;
    obj.ask_price = message.askPrice ? Coin.toAmino(message.askPrice) : undefined;
    obj.disable_auto_retire = message.disableAutoRetire === false ? undefined : message.disableAutoRetire;
    obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSell_OrderAminoMsg): MsgSell_Order {
    return MsgSell_Order.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSell_OrderProtoMsg): MsgSell_Order {
    return MsgSell_Order.decode(message.value);
  },
  toProto(message: MsgSell_Order): Uint8Array {
    return MsgSell_Order.encode(message).finish();
  },
  toProtoMsg(message: MsgSell_Order): MsgSell_OrderProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.Order",
      value: MsgSell_Order.encode(message).finish()
    };
  }
};
function createBaseMsgSellResponse(): MsgSellResponse {
  return {
    sellOrderIds: []
  };
}
export const MsgSellResponse = {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgSellResponse",
  encode(message: MsgSellResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.sellOrderIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSellResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sellOrderIds.push(reader.uint64());
            }
          } else {
            message.sellOrderIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSellResponse>): MsgSellResponse {
    const message = createBaseMsgSellResponse();
    message.sellOrderIds = object.sellOrderIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgSellResponseAmino): MsgSellResponse {
    const message = createBaseMsgSellResponse();
    message.sellOrderIds = object.sell_order_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgSellResponse): MsgSellResponseAmino {
    const obj: any = {};
    if (message.sellOrderIds) {
      obj.sell_order_ids = message.sellOrderIds.map(e => e.toString());
    } else {
      obj.sell_order_ids = message.sellOrderIds;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSellResponseAminoMsg): MsgSellResponse {
    return MsgSellResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSellResponseProtoMsg): MsgSellResponse {
    return MsgSellResponse.decode(message.value);
  },
  toProto(message: MsgSellResponse): Uint8Array {
    return MsgSellResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSellResponse): MsgSellResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.MsgSellResponse",
      value: MsgSellResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSellOrders(): MsgUpdateSellOrders {
  return {
    seller: "",
    updates: []
  };
}
export const MsgUpdateSellOrders = {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
  encode(message: MsgUpdateSellOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    for (const v of message.updates) {
      MsgUpdateSellOrders_Update.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSellOrders {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSellOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.updates.push(MsgUpdateSellOrders_Update.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateSellOrders>): MsgUpdateSellOrders {
    const message = createBaseMsgUpdateSellOrders();
    message.seller = object.seller ?? "";
    message.updates = object.updates?.map(e => MsgUpdateSellOrders_Update.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUpdateSellOrdersAmino): MsgUpdateSellOrders {
    const message = createBaseMsgUpdateSellOrders();
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    message.updates = object.updates?.map(e => MsgUpdateSellOrders_Update.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUpdateSellOrders): MsgUpdateSellOrdersAmino {
    const obj: any = {};
    obj.seller = message.seller === "" ? undefined : message.seller;
    if (message.updates) {
      obj.updates = message.updates.map(e => e ? MsgUpdateSellOrders_Update.toAmino(e) : undefined);
    } else {
      obj.updates = message.updates;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSellOrdersAminoMsg): MsgUpdateSellOrders {
    return MsgUpdateSellOrders.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateSellOrders): MsgUpdateSellOrdersAminoMsg {
    return {
      type: "regen.marketplace/MsgUpdateSellOrders",
      value: MsgUpdateSellOrders.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateSellOrdersProtoMsg): MsgUpdateSellOrders {
    return MsgUpdateSellOrders.decode(message.value);
  },
  toProto(message: MsgUpdateSellOrders): Uint8Array {
    return MsgUpdateSellOrders.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSellOrders): MsgUpdateSellOrdersProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
      value: MsgUpdateSellOrders.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSellOrders_Update(): MsgUpdateSellOrders_Update {
  return {
    sellOrderId: BigInt(0),
    newQuantity: "",
    newAskPrice: undefined,
    disableAutoRetire: false,
    newExpiration: undefined
  };
}
export const MsgUpdateSellOrders_Update = {
  typeUrl: "/regen.ecocredit.marketplace.v1.Update",
  encode(message: MsgUpdateSellOrders_Update, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sellOrderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    if (message.newQuantity !== "") {
      writer.uint32(18).string(message.newQuantity);
    }
    if (message.newAskPrice !== undefined) {
      Coin.encode(message.newAskPrice, writer.uint32(26).fork()).ldelim();
    }
    if (message.disableAutoRetire === true) {
      writer.uint32(32).bool(message.disableAutoRetire);
    }
    if (message.newExpiration !== undefined) {
      Timestamp.encode(toTimestamp(message.newExpiration), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSellOrders_Update {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSellOrders_Update();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrderId = reader.uint64();
          break;
        case 2:
          message.newQuantity = reader.string();
          break;
        case 3:
          message.newAskPrice = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.disableAutoRetire = reader.bool();
          break;
        case 5:
          message.newExpiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateSellOrders_Update>): MsgUpdateSellOrders_Update {
    const message = createBaseMsgUpdateSellOrders_Update();
    message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? BigInt(object.sellOrderId.toString()) : BigInt(0);
    message.newQuantity = object.newQuantity ?? "";
    message.newAskPrice = object.newAskPrice !== undefined && object.newAskPrice !== null ? Coin.fromPartial(object.newAskPrice) : undefined;
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.newExpiration = object.newExpiration ?? undefined;
    return message;
  },
  fromAmino(object: MsgUpdateSellOrders_UpdateAmino): MsgUpdateSellOrders_Update {
    const message = createBaseMsgUpdateSellOrders_Update();
    if (object.sell_order_id !== undefined && object.sell_order_id !== null) {
      message.sellOrderId = BigInt(object.sell_order_id);
    }
    if (object.new_quantity !== undefined && object.new_quantity !== null) {
      message.newQuantity = object.new_quantity;
    }
    if (object.new_ask_price !== undefined && object.new_ask_price !== null) {
      message.newAskPrice = Coin.fromAmino(object.new_ask_price);
    }
    if (object.disable_auto_retire !== undefined && object.disable_auto_retire !== null) {
      message.disableAutoRetire = object.disable_auto_retire;
    }
    if (object.new_expiration !== undefined && object.new_expiration !== null) {
      message.newExpiration = fromTimestamp(Timestamp.fromAmino(object.new_expiration));
    }
    return message;
  },
  toAmino(message: MsgUpdateSellOrders_Update): MsgUpdateSellOrders_UpdateAmino {
    const obj: any = {};
    obj.sell_order_id = message.sellOrderId !== BigInt(0) ? message.sellOrderId?.toString() : undefined;
    obj.new_quantity = message.newQuantity === "" ? undefined : message.newQuantity;
    obj.new_ask_price = message.newAskPrice ? Coin.toAmino(message.newAskPrice) : undefined;
    obj.disable_auto_retire = message.disableAutoRetire === false ? undefined : message.disableAutoRetire;
    obj.new_expiration = message.newExpiration ? Timestamp.toAmino(toTimestamp(message.newExpiration)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSellOrders_UpdateAminoMsg): MsgUpdateSellOrders_Update {
    return MsgUpdateSellOrders_Update.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSellOrders_UpdateProtoMsg): MsgUpdateSellOrders_Update {
    return MsgUpdateSellOrders_Update.decode(message.value);
  },
  toProto(message: MsgUpdateSellOrders_Update): Uint8Array {
    return MsgUpdateSellOrders_Update.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSellOrders_Update): MsgUpdateSellOrders_UpdateProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.Update",
      value: MsgUpdateSellOrders_Update.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateSellOrdersResponse(): MsgUpdateSellOrdersResponse {
  return {};
}
export const MsgUpdateSellOrdersResponse = {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrdersResponse",
  encode(_: MsgUpdateSellOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSellOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSellOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateSellOrdersResponse>): MsgUpdateSellOrdersResponse {
    const message = createBaseMsgUpdateSellOrdersResponse();
    return message;
  },
  fromAmino(_: MsgUpdateSellOrdersResponseAmino): MsgUpdateSellOrdersResponse {
    const message = createBaseMsgUpdateSellOrdersResponse();
    return message;
  },
  toAmino(_: MsgUpdateSellOrdersResponse): MsgUpdateSellOrdersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSellOrdersResponseAminoMsg): MsgUpdateSellOrdersResponse {
    return MsgUpdateSellOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSellOrdersResponseProtoMsg): MsgUpdateSellOrdersResponse {
    return MsgUpdateSellOrdersResponse.decode(message.value);
  },
  toProto(message: MsgUpdateSellOrdersResponse): Uint8Array {
    return MsgUpdateSellOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSellOrdersResponse): MsgUpdateSellOrdersResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrdersResponse",
      value: MsgUpdateSellOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelSellOrder(): MsgCancelSellOrder {
  return {
    seller: "",
    sellOrderId: BigInt(0)
  };
}
export const MsgCancelSellOrder = {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
  encode(message: MsgCancelSellOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.sellOrderId !== BigInt(0)) {
      writer.uint32(16).uint64(message.sellOrderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelSellOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSellOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.sellOrderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCancelSellOrder>): MsgCancelSellOrder {
    const message = createBaseMsgCancelSellOrder();
    message.seller = object.seller ?? "";
    message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? BigInt(object.sellOrderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelSellOrderAmino): MsgCancelSellOrder {
    const message = createBaseMsgCancelSellOrder();
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    if (object.sell_order_id !== undefined && object.sell_order_id !== null) {
      message.sellOrderId = BigInt(object.sell_order_id);
    }
    return message;
  },
  toAmino(message: MsgCancelSellOrder): MsgCancelSellOrderAmino {
    const obj: any = {};
    obj.seller = message.seller === "" ? undefined : message.seller;
    obj.sell_order_id = message.sellOrderId !== BigInt(0) ? message.sellOrderId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelSellOrderAminoMsg): MsgCancelSellOrder {
    return MsgCancelSellOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelSellOrder): MsgCancelSellOrderAminoMsg {
    return {
      type: "regen.marketplace/MsgCancelSellOrder",
      value: MsgCancelSellOrder.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelSellOrderProtoMsg): MsgCancelSellOrder {
    return MsgCancelSellOrder.decode(message.value);
  },
  toProto(message: MsgCancelSellOrder): Uint8Array {
    return MsgCancelSellOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSellOrder): MsgCancelSellOrderProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
      value: MsgCancelSellOrder.encode(message).finish()
    };
  }
};
function createBaseMsgCancelSellOrderResponse(): MsgCancelSellOrderResponse {
  return {};
}
export const MsgCancelSellOrderResponse = {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrderResponse",
  encode(_: MsgCancelSellOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelSellOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSellOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgCancelSellOrderResponse>): MsgCancelSellOrderResponse {
    const message = createBaseMsgCancelSellOrderResponse();
    return message;
  },
  fromAmino(_: MsgCancelSellOrderResponseAmino): MsgCancelSellOrderResponse {
    const message = createBaseMsgCancelSellOrderResponse();
    return message;
  },
  toAmino(_: MsgCancelSellOrderResponse): MsgCancelSellOrderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelSellOrderResponseAminoMsg): MsgCancelSellOrderResponse {
    return MsgCancelSellOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelSellOrderResponseProtoMsg): MsgCancelSellOrderResponse {
    return MsgCancelSellOrderResponse.decode(message.value);
  },
  toProto(message: MsgCancelSellOrderResponse): Uint8Array {
    return MsgCancelSellOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSellOrderResponse): MsgCancelSellOrderResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrderResponse",
      value: MsgCancelSellOrderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBuyDirect(): MsgBuyDirect {
  return {
    buyer: "",
    orders: []
  };
}
export const MsgBuyDirect = {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
  encode(message: MsgBuyDirect, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }
    for (const v of message.orders) {
      MsgBuyDirect_Order.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBuyDirect {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyDirect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string();
          break;
        case 2:
          message.orders.push(MsgBuyDirect_Order.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBuyDirect>): MsgBuyDirect {
    const message = createBaseMsgBuyDirect();
    message.buyer = object.buyer ?? "";
    message.orders = object.orders?.map(e => MsgBuyDirect_Order.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgBuyDirectAmino): MsgBuyDirect {
    const message = createBaseMsgBuyDirect();
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    }
    message.orders = object.orders?.map(e => MsgBuyDirect_Order.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgBuyDirect): MsgBuyDirectAmino {
    const obj: any = {};
    obj.buyer = message.buyer === "" ? undefined : message.buyer;
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? MsgBuyDirect_Order.toAmino(e) : undefined);
    } else {
      obj.orders = message.orders;
    }
    return obj;
  },
  fromAminoMsg(object: MsgBuyDirectAminoMsg): MsgBuyDirect {
    return MsgBuyDirect.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBuyDirect): MsgBuyDirectAminoMsg {
    return {
      type: "regen.marketplace/MsgBuyDirect",
      value: MsgBuyDirect.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBuyDirectProtoMsg): MsgBuyDirect {
    return MsgBuyDirect.decode(message.value);
  },
  toProto(message: MsgBuyDirect): Uint8Array {
    return MsgBuyDirect.encode(message).finish();
  },
  toProtoMsg(message: MsgBuyDirect): MsgBuyDirectProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
      value: MsgBuyDirect.encode(message).finish()
    };
  }
};
function createBaseMsgBuyDirect_Order(): MsgBuyDirect_Order {
  return {
    sellOrderId: BigInt(0),
    quantity: "",
    bidPrice: undefined,
    disableAutoRetire: false,
    retirementJurisdiction: "",
    retirementReason: "",
    maxFeeAmount: undefined
  };
}
export const MsgBuyDirect_Order = {
  typeUrl: "/regen.ecocredit.marketplace.v1.Order",
  encode(message: MsgBuyDirect_Order, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sellOrderId !== BigInt(0)) {
      writer.uint32(16).uint64(message.sellOrderId);
    }
    if (message.quantity !== "") {
      writer.uint32(26).string(message.quantity);
    }
    if (message.bidPrice !== undefined) {
      Coin.encode(message.bidPrice, writer.uint32(34).fork()).ldelim();
    }
    if (message.disableAutoRetire === true) {
      writer.uint32(40).bool(message.disableAutoRetire);
    }
    if (message.retirementJurisdiction !== "") {
      writer.uint32(50).string(message.retirementJurisdiction);
    }
    if (message.retirementReason !== "") {
      writer.uint32(58).string(message.retirementReason);
    }
    if (message.maxFeeAmount !== undefined) {
      Coin.encode(message.maxFeeAmount, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBuyDirect_Order {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyDirect_Order();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.sellOrderId = reader.uint64();
          break;
        case 3:
          message.quantity = reader.string();
          break;
        case 4:
          message.bidPrice = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.disableAutoRetire = reader.bool();
          break;
        case 6:
          message.retirementJurisdiction = reader.string();
          break;
        case 7:
          message.retirementReason = reader.string();
          break;
        case 8:
          message.maxFeeAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBuyDirect_Order>): MsgBuyDirect_Order {
    const message = createBaseMsgBuyDirect_Order();
    message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? BigInt(object.sellOrderId.toString()) : BigInt(0);
    message.quantity = object.quantity ?? "";
    message.bidPrice = object.bidPrice !== undefined && object.bidPrice !== null ? Coin.fromPartial(object.bidPrice) : undefined;
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.retirementJurisdiction = object.retirementJurisdiction ?? "";
    message.retirementReason = object.retirementReason ?? "";
    message.maxFeeAmount = object.maxFeeAmount !== undefined && object.maxFeeAmount !== null ? Coin.fromPartial(object.maxFeeAmount) : undefined;
    return message;
  },
  fromAmino(object: MsgBuyDirect_OrderAmino): MsgBuyDirect_Order {
    const message = createBaseMsgBuyDirect_Order();
    if (object.sell_order_id !== undefined && object.sell_order_id !== null) {
      message.sellOrderId = BigInt(object.sell_order_id);
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity;
    }
    if (object.bid_price !== undefined && object.bid_price !== null) {
      message.bidPrice = Coin.fromAmino(object.bid_price);
    }
    if (object.disable_auto_retire !== undefined && object.disable_auto_retire !== null) {
      message.disableAutoRetire = object.disable_auto_retire;
    }
    if (object.retirement_jurisdiction !== undefined && object.retirement_jurisdiction !== null) {
      message.retirementJurisdiction = object.retirement_jurisdiction;
    }
    if (object.retirement_reason !== undefined && object.retirement_reason !== null) {
      message.retirementReason = object.retirement_reason;
    }
    if (object.max_fee_amount !== undefined && object.max_fee_amount !== null) {
      message.maxFeeAmount = Coin.fromAmino(object.max_fee_amount);
    }
    return message;
  },
  toAmino(message: MsgBuyDirect_Order): MsgBuyDirect_OrderAmino {
    const obj: any = {};
    obj.sell_order_id = message.sellOrderId !== BigInt(0) ? message.sellOrderId?.toString() : undefined;
    obj.quantity = message.quantity === "" ? undefined : message.quantity;
    obj.bid_price = message.bidPrice ? Coin.toAmino(message.bidPrice) : undefined;
    obj.disable_auto_retire = message.disableAutoRetire === false ? undefined : message.disableAutoRetire;
    obj.retirement_jurisdiction = message.retirementJurisdiction === "" ? undefined : message.retirementJurisdiction;
    obj.retirement_reason = message.retirementReason === "" ? undefined : message.retirementReason;
    obj.max_fee_amount = message.maxFeeAmount ? Coin.toAmino(message.maxFeeAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBuyDirect_OrderAminoMsg): MsgBuyDirect_Order {
    return MsgBuyDirect_Order.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBuyDirect_OrderProtoMsg): MsgBuyDirect_Order {
    return MsgBuyDirect_Order.decode(message.value);
  },
  toProto(message: MsgBuyDirect_Order): Uint8Array {
    return MsgBuyDirect_Order.encode(message).finish();
  },
  toProtoMsg(message: MsgBuyDirect_Order): MsgBuyDirect_OrderProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.Order",
      value: MsgBuyDirect_Order.encode(message).finish()
    };
  }
};
function createBaseMsgBuyDirectResponse(): MsgBuyDirectResponse {
  return {};
}
export const MsgBuyDirectResponse = {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirectResponse",
  encode(_: MsgBuyDirectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBuyDirectResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyDirectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgBuyDirectResponse>): MsgBuyDirectResponse {
    const message = createBaseMsgBuyDirectResponse();
    return message;
  },
  fromAmino(_: MsgBuyDirectResponseAmino): MsgBuyDirectResponse {
    const message = createBaseMsgBuyDirectResponse();
    return message;
  },
  toAmino(_: MsgBuyDirectResponse): MsgBuyDirectResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBuyDirectResponseAminoMsg): MsgBuyDirectResponse {
    return MsgBuyDirectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBuyDirectResponseProtoMsg): MsgBuyDirectResponse {
    return MsgBuyDirectResponse.decode(message.value);
  },
  toProto(message: MsgBuyDirectResponse): Uint8Array {
    return MsgBuyDirectResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBuyDirectResponse): MsgBuyDirectResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirectResponse",
      value: MsgBuyDirectResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddAllowedDenom(): MsgAddAllowedDenom {
  return {
    authority: "",
    bankDenom: "",
    displayDenom: "",
    exponent: 0
  };
}
export const MsgAddAllowedDenom = {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom",
  encode(message: MsgAddAllowedDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.bankDenom !== "") {
      writer.uint32(18).string(message.bankDenom);
    }
    if (message.displayDenom !== "") {
      writer.uint32(26).string(message.displayDenom);
    }
    if (message.exponent !== 0) {
      writer.uint32(32).uint32(message.exponent);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAllowedDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAllowedDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.bankDenom = reader.string();
          break;
        case 3:
          message.displayDenom = reader.string();
          break;
        case 4:
          message.exponent = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddAllowedDenom>): MsgAddAllowedDenom {
    const message = createBaseMsgAddAllowedDenom();
    message.authority = object.authority ?? "";
    message.bankDenom = object.bankDenom ?? "";
    message.displayDenom = object.displayDenom ?? "";
    message.exponent = object.exponent ?? 0;
    return message;
  },
  fromAmino(object: MsgAddAllowedDenomAmino): MsgAddAllowedDenom {
    const message = createBaseMsgAddAllowedDenom();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.bank_denom !== undefined && object.bank_denom !== null) {
      message.bankDenom = object.bank_denom;
    }
    if (object.display_denom !== undefined && object.display_denom !== null) {
      message.displayDenom = object.display_denom;
    }
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = object.exponent;
    }
    return message;
  },
  toAmino(message: MsgAddAllowedDenom): MsgAddAllowedDenomAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.bank_denom = message.bankDenom === "" ? undefined : message.bankDenom;
    obj.display_denom = message.displayDenom === "" ? undefined : message.displayDenom;
    obj.exponent = message.exponent === 0 ? undefined : message.exponent;
    return obj;
  },
  fromAminoMsg(object: MsgAddAllowedDenomAminoMsg): MsgAddAllowedDenom {
    return MsgAddAllowedDenom.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddAllowedDenom): MsgAddAllowedDenomAminoMsg {
    return {
      type: "regen.marketplace/MsgAddAllowedDenom",
      value: MsgAddAllowedDenom.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddAllowedDenomProtoMsg): MsgAddAllowedDenom {
    return MsgAddAllowedDenom.decode(message.value);
  },
  toProto(message: MsgAddAllowedDenom): Uint8Array {
    return MsgAddAllowedDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAllowedDenom): MsgAddAllowedDenomProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom",
      value: MsgAddAllowedDenom.encode(message).finish()
    };
  }
};
function createBaseMsgAddAllowedDenomResponse(): MsgAddAllowedDenomResponse {
  return {};
}
export const MsgAddAllowedDenomResponse = {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenomResponse",
  encode(_: MsgAddAllowedDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAllowedDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAllowedDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgAddAllowedDenomResponse>): MsgAddAllowedDenomResponse {
    const message = createBaseMsgAddAllowedDenomResponse();
    return message;
  },
  fromAmino(_: MsgAddAllowedDenomResponseAmino): MsgAddAllowedDenomResponse {
    const message = createBaseMsgAddAllowedDenomResponse();
    return message;
  },
  toAmino(_: MsgAddAllowedDenomResponse): MsgAddAllowedDenomResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddAllowedDenomResponseAminoMsg): MsgAddAllowedDenomResponse {
    return MsgAddAllowedDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddAllowedDenomResponseProtoMsg): MsgAddAllowedDenomResponse {
    return MsgAddAllowedDenomResponse.decode(message.value);
  },
  toProto(message: MsgAddAllowedDenomResponse): Uint8Array {
    return MsgAddAllowedDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAllowedDenomResponse): MsgAddAllowedDenomResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenomResponse",
      value: MsgAddAllowedDenomResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveAllowedDenom(): MsgRemoveAllowedDenom {
  return {
    authority: "",
    denom: ""
  };
}
export const MsgRemoveAllowedDenom = {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom",
  encode(message: MsgRemoveAllowedDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveAllowedDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAllowedDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveAllowedDenom>): MsgRemoveAllowedDenom {
    const message = createBaseMsgRemoveAllowedDenom();
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveAllowedDenomAmino): MsgRemoveAllowedDenom {
    const message = createBaseMsgRemoveAllowedDenom();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgRemoveAllowedDenom): MsgRemoveAllowedDenomAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveAllowedDenomAminoMsg): MsgRemoveAllowedDenom {
    return MsgRemoveAllowedDenom.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveAllowedDenom): MsgRemoveAllowedDenomAminoMsg {
    return {
      type: "regen.marketplace/MsgRemoveAllowedDenom",
      value: MsgRemoveAllowedDenom.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveAllowedDenomProtoMsg): MsgRemoveAllowedDenom {
    return MsgRemoveAllowedDenom.decode(message.value);
  },
  toProto(message: MsgRemoveAllowedDenom): Uint8Array {
    return MsgRemoveAllowedDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveAllowedDenom): MsgRemoveAllowedDenomProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom",
      value: MsgRemoveAllowedDenom.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveAllowedDenomResponse(): MsgRemoveAllowedDenomResponse {
  return {};
}
export const MsgRemoveAllowedDenomResponse = {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenomResponse",
  encode(_: MsgRemoveAllowedDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveAllowedDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAllowedDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgRemoveAllowedDenomResponse>): MsgRemoveAllowedDenomResponse {
    const message = createBaseMsgRemoveAllowedDenomResponse();
    return message;
  },
  fromAmino(_: MsgRemoveAllowedDenomResponseAmino): MsgRemoveAllowedDenomResponse {
    const message = createBaseMsgRemoveAllowedDenomResponse();
    return message;
  },
  toAmino(_: MsgRemoveAllowedDenomResponse): MsgRemoveAllowedDenomResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveAllowedDenomResponseAminoMsg): MsgRemoveAllowedDenomResponse {
    return MsgRemoveAllowedDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveAllowedDenomResponseProtoMsg): MsgRemoveAllowedDenomResponse {
    return MsgRemoveAllowedDenomResponse.decode(message.value);
  },
  toProto(message: MsgRemoveAllowedDenomResponse): Uint8Array {
    return MsgRemoveAllowedDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveAllowedDenomResponse): MsgRemoveAllowedDenomResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenomResponse",
      value: MsgRemoveAllowedDenomResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGovSetFeeParams(): MsgGovSetFeeParams {
  return {
    authority: "",
    fees: undefined
  };
}
export const MsgGovSetFeeParams = {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgGovSetFeeParams",
  encode(message: MsgGovSetFeeParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.fees !== undefined) {
      FeeParams.encode(message.fees, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGovSetFeeParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovSetFeeParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.fees = FeeParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgGovSetFeeParams>): MsgGovSetFeeParams {
    const message = createBaseMsgGovSetFeeParams();
    message.authority = object.authority ?? "";
    message.fees = object.fees !== undefined && object.fees !== null ? FeeParams.fromPartial(object.fees) : undefined;
    return message;
  },
  fromAmino(object: MsgGovSetFeeParamsAmino): MsgGovSetFeeParams {
    const message = createBaseMsgGovSetFeeParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.fees !== undefined && object.fees !== null) {
      message.fees = FeeParams.fromAmino(object.fees);
    }
    return message;
  },
  toAmino(message: MsgGovSetFeeParams): MsgGovSetFeeParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.fees = message.fees ? FeeParams.toAmino(message.fees) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGovSetFeeParamsAminoMsg): MsgGovSetFeeParams {
    return MsgGovSetFeeParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSetFeeParamsProtoMsg): MsgGovSetFeeParams {
    return MsgGovSetFeeParams.decode(message.value);
  },
  toProto(message: MsgGovSetFeeParams): Uint8Array {
    return MsgGovSetFeeParams.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSetFeeParams): MsgGovSetFeeParamsProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.MsgGovSetFeeParams",
      value: MsgGovSetFeeParams.encode(message).finish()
    };
  }
};
function createBaseMsgGovSetFeeParamsResponse(): MsgGovSetFeeParamsResponse {
  return {};
}
export const MsgGovSetFeeParamsResponse = {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgGovSetFeeParamsResponse",
  encode(_: MsgGovSetFeeParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGovSetFeeParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovSetFeeParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgGovSetFeeParamsResponse>): MsgGovSetFeeParamsResponse {
    const message = createBaseMsgGovSetFeeParamsResponse();
    return message;
  },
  fromAmino(_: MsgGovSetFeeParamsResponseAmino): MsgGovSetFeeParamsResponse {
    const message = createBaseMsgGovSetFeeParamsResponse();
    return message;
  },
  toAmino(_: MsgGovSetFeeParamsResponse): MsgGovSetFeeParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovSetFeeParamsResponseAminoMsg): MsgGovSetFeeParamsResponse {
    return MsgGovSetFeeParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSetFeeParamsResponseProtoMsg): MsgGovSetFeeParamsResponse {
    return MsgGovSetFeeParamsResponse.decode(message.value);
  },
  toProto(message: MsgGovSetFeeParamsResponse): Uint8Array {
    return MsgGovSetFeeParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSetFeeParamsResponse): MsgGovSetFeeParamsResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.MsgGovSetFeeParamsResponse",
      value: MsgGovSetFeeParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGovSendFromFeePool(): MsgGovSendFromFeePool {
  return {
    authority: "",
    recipient: "",
    coins: []
  };
}
export const MsgGovSendFromFeePool = {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgGovSendFromFeePool",
  encode(message: MsgGovSendFromFeePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGovSendFromFeePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovSendFromFeePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgGovSendFromFeePool>): MsgGovSendFromFeePool {
    const message = createBaseMsgGovSendFromFeePool();
    message.authority = object.authority ?? "";
    message.recipient = object.recipient ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgGovSendFromFeePoolAmino): MsgGovSendFromFeePool {
    const message = createBaseMsgGovSendFromFeePool();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgGovSendFromFeePool): MsgGovSendFromFeePoolAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: MsgGovSendFromFeePoolAminoMsg): MsgGovSendFromFeePool {
    return MsgGovSendFromFeePool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSendFromFeePoolProtoMsg): MsgGovSendFromFeePool {
    return MsgGovSendFromFeePool.decode(message.value);
  },
  toProto(message: MsgGovSendFromFeePool): Uint8Array {
    return MsgGovSendFromFeePool.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSendFromFeePool): MsgGovSendFromFeePoolProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.MsgGovSendFromFeePool",
      value: MsgGovSendFromFeePool.encode(message).finish()
    };
  }
};
function createBaseMsgGovSendFromFeePoolResponse(): MsgGovSendFromFeePoolResponse {
  return {};
}
export const MsgGovSendFromFeePoolResponse = {
  typeUrl: "/regen.ecocredit.marketplace.v1.MsgGovSendFromFeePoolResponse",
  encode(_: MsgGovSendFromFeePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGovSendFromFeePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovSendFromFeePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgGovSendFromFeePoolResponse>): MsgGovSendFromFeePoolResponse {
    const message = createBaseMsgGovSendFromFeePoolResponse();
    return message;
  },
  fromAmino(_: MsgGovSendFromFeePoolResponseAmino): MsgGovSendFromFeePoolResponse {
    const message = createBaseMsgGovSendFromFeePoolResponse();
    return message;
  },
  toAmino(_: MsgGovSendFromFeePoolResponse): MsgGovSendFromFeePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovSendFromFeePoolResponseAminoMsg): MsgGovSendFromFeePoolResponse {
    return MsgGovSendFromFeePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSendFromFeePoolResponseProtoMsg): MsgGovSendFromFeePoolResponse {
    return MsgGovSendFromFeePoolResponse.decode(message.value);
  },
  toProto(message: MsgGovSendFromFeePoolResponse): Uint8Array {
    return MsgGovSendFromFeePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSendFromFeePoolResponse): MsgGovSendFromFeePoolResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.MsgGovSendFromFeePoolResponse",
      value: MsgGovSendFromFeePoolResponse.encode(message).finish()
    };
  }
};