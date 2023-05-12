import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp, Long } from "../../../../helpers";
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

export interface MsgUpdateSellOrdersResponse {}
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

export interface MsgCancelSellOrderResponse {}
/** MsgCancelSellOrder is the Msg/CancelSellOrder response type. */

export interface MsgCancelSellOrderResponseSDKType {}
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

export interface MsgBuyDirectResponse {}
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

export interface MsgAddAllowedDenomResponse {}
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

export interface MsgRemoveAllowedDenomResponse {}
/**
 * MsgRemoveAllowedDenomResponse is the Msg/RemoveAllowedDenom response type.
 * 
 * Since Revision 1
 */

export interface MsgRemoveAllowedDenomResponseSDKType {}

function createBaseMsgSell(): MsgSell {
  return {
    seller: "",
    orders: []
  };
}

export const MsgSell = {
  encode(message: MsgSell, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }

    for (const v of message.orders) {
      MsgSell_Order.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSell {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): MsgSell {
    return {
      seller: isSet(object.seller) ? String(object.seller) : "",
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => MsgSell_Order.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgSell): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);

    if (message.orders) {
      obj.orders = message.orders.map(e => e ? MsgSell_Order.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgSell>): MsgSell {
    const message = createBaseMsgSell();
    message.seller = object.seller ?? "";
    message.orders = object.orders?.map(e => MsgSell_Order.fromPartial(e)) || [];
    return message;
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
  encode(message: MsgSell_Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Timestamp.encode(message.expiration, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSell_Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.expiration = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSell_Order {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      askPrice: isSet(object.askPrice) ? Coin.fromJSON(object.askPrice) : undefined,
      disableAutoRetire: isSet(object.disableAutoRetire) ? Boolean(object.disableAutoRetire) : false,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },

  toJSON(message: MsgSell_Order): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.askPrice !== undefined && (obj.askPrice = message.askPrice ? Coin.toJSON(message.askPrice) : undefined);
    message.disableAutoRetire !== undefined && (obj.disableAutoRetire = message.disableAutoRetire);
    message.expiration !== undefined && (obj.expiration = fromTimestamp(message.expiration).toISOString());
    return obj;
  },

  fromPartial(object: Partial<MsgSell_Order>): MsgSell_Order {
    const message = createBaseMsgSell_Order();
    message.batchDenom = object.batchDenom ?? "";
    message.quantity = object.quantity ?? "";
    message.askPrice = object.askPrice !== undefined && object.askPrice !== null ? Coin.fromPartial(object.askPrice) : undefined;
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  }

};

function createBaseMsgSellResponse(): MsgSellResponse {
  return {
    sellOrderIds: []
  };
}

export const MsgSellResponse = {
  encode(message: MsgSellResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.sellOrderIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.sellOrderIds.push((reader.uint64() as Long));
            }
          } else {
            message.sellOrderIds.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSellResponse {
    return {
      sellOrderIds: Array.isArray(object?.sellOrderIds) ? object.sellOrderIds.map((e: any) => Long.fromValue(e)) : []
    };
  },

  toJSON(message: MsgSellResponse): unknown {
    const obj: any = {};

    if (message.sellOrderIds) {
      obj.sellOrderIds = message.sellOrderIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.sellOrderIds = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgSellResponse>): MsgSellResponse {
    const message = createBaseMsgSellResponse();
    message.sellOrderIds = object.sellOrderIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBaseMsgUpdateSellOrders(): MsgUpdateSellOrders {
  return {
    seller: "",
    updates: []
  };
}

export const MsgUpdateSellOrders = {
  encode(message: MsgUpdateSellOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }

    for (const v of message.updates) {
      MsgUpdateSellOrders_Update.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSellOrders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): MsgUpdateSellOrders {
    return {
      seller: isSet(object.seller) ? String(object.seller) : "",
      updates: Array.isArray(object?.updates) ? object.updates.map((e: any) => MsgUpdateSellOrders_Update.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgUpdateSellOrders): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);

    if (message.updates) {
      obj.updates = message.updates.map(e => e ? MsgUpdateSellOrders_Update.toJSON(e) : undefined);
    } else {
      obj.updates = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgUpdateSellOrders>): MsgUpdateSellOrders {
    const message = createBaseMsgUpdateSellOrders();
    message.seller = object.seller ?? "";
    message.updates = object.updates?.map(e => MsgUpdateSellOrders_Update.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgUpdateSellOrders_Update(): MsgUpdateSellOrders_Update {
  return {
    sellOrderId: Long.UZERO,
    newQuantity: "",
    newAskPrice: undefined,
    disableAutoRetire: false,
    newExpiration: undefined
  };
}

export const MsgUpdateSellOrders_Update = {
  encode(message: MsgUpdateSellOrders_Update, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sellOrderId.isZero()) {
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
      Timestamp.encode(message.newExpiration, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSellOrders_Update {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSellOrders_Update();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sellOrderId = (reader.uint64() as Long);
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
          message.newExpiration = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateSellOrders_Update {
    return {
      sellOrderId: isSet(object.sellOrderId) ? Long.fromValue(object.sellOrderId) : Long.UZERO,
      newQuantity: isSet(object.newQuantity) ? String(object.newQuantity) : "",
      newAskPrice: isSet(object.newAskPrice) ? Coin.fromJSON(object.newAskPrice) : undefined,
      disableAutoRetire: isSet(object.disableAutoRetire) ? Boolean(object.disableAutoRetire) : false,
      newExpiration: isSet(object.newExpiration) ? fromJsonTimestamp(object.newExpiration) : undefined
    };
  },

  toJSON(message: MsgUpdateSellOrders_Update): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined && (obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
    message.newQuantity !== undefined && (obj.newQuantity = message.newQuantity);
    message.newAskPrice !== undefined && (obj.newAskPrice = message.newAskPrice ? Coin.toJSON(message.newAskPrice) : undefined);
    message.disableAutoRetire !== undefined && (obj.disableAutoRetire = message.disableAutoRetire);
    message.newExpiration !== undefined && (obj.newExpiration = fromTimestamp(message.newExpiration).toISOString());
    return obj;
  },

  fromPartial(object: Partial<MsgUpdateSellOrders_Update>): MsgUpdateSellOrders_Update {
    const message = createBaseMsgUpdateSellOrders_Update();
    message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? Long.fromValue(object.sellOrderId) : Long.UZERO;
    message.newQuantity = object.newQuantity ?? "";
    message.newAskPrice = object.newAskPrice !== undefined && object.newAskPrice !== null ? Coin.fromPartial(object.newAskPrice) : undefined;
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.newExpiration = object.newExpiration !== undefined && object.newExpiration !== null ? Timestamp.fromPartial(object.newExpiration) : undefined;
    return message;
  }

};

function createBaseMsgUpdateSellOrdersResponse(): MsgUpdateSellOrdersResponse {
  return {};
}

export const MsgUpdateSellOrdersResponse = {
  encode(_: MsgUpdateSellOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSellOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(_: any): MsgUpdateSellOrdersResponse {
    return {};
  },

  toJSON(_: MsgUpdateSellOrdersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgUpdateSellOrdersResponse>): MsgUpdateSellOrdersResponse {
    const message = createBaseMsgUpdateSellOrdersResponse();
    return message;
  }

};

function createBaseMsgCancelSellOrder(): MsgCancelSellOrder {
  return {
    seller: "",
    sellOrderId: Long.UZERO
  };
}

export const MsgCancelSellOrder = {
  encode(message: MsgCancelSellOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }

    if (!message.sellOrderId.isZero()) {
      writer.uint32(16).uint64(message.sellOrderId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSellOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSellOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;

        case 2:
          message.sellOrderId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCancelSellOrder {
    return {
      seller: isSet(object.seller) ? String(object.seller) : "",
      sellOrderId: isSet(object.sellOrderId) ? Long.fromValue(object.sellOrderId) : Long.UZERO
    };
  },

  toJSON(message: MsgCancelSellOrder): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
    message.sellOrderId !== undefined && (obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<MsgCancelSellOrder>): MsgCancelSellOrder {
    const message = createBaseMsgCancelSellOrder();
    message.seller = object.seller ?? "";
    message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? Long.fromValue(object.sellOrderId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCancelSellOrderResponse(): MsgCancelSellOrderResponse {
  return {};
}

export const MsgCancelSellOrderResponse = {
  encode(_: MsgCancelSellOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSellOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(_: any): MsgCancelSellOrderResponse {
    return {};
  },

  toJSON(_: MsgCancelSellOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgCancelSellOrderResponse>): MsgCancelSellOrderResponse {
    const message = createBaseMsgCancelSellOrderResponse();
    return message;
  }

};

function createBaseMsgBuyDirect(): MsgBuyDirect {
  return {
    buyer: "",
    orders: []
  };
}

export const MsgBuyDirect = {
  encode(message: MsgBuyDirect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }

    for (const v of message.orders) {
      MsgBuyDirect_Order.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyDirect {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): MsgBuyDirect {
    return {
      buyer: isSet(object.buyer) ? String(object.buyer) : "",
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => MsgBuyDirect_Order.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgBuyDirect): unknown {
    const obj: any = {};
    message.buyer !== undefined && (obj.buyer = message.buyer);

    if (message.orders) {
      obj.orders = message.orders.map(e => e ? MsgBuyDirect_Order.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgBuyDirect>): MsgBuyDirect {
    const message = createBaseMsgBuyDirect();
    message.buyer = object.buyer ?? "";
    message.orders = object.orders?.map(e => MsgBuyDirect_Order.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgBuyDirect_Order(): MsgBuyDirect_Order {
  return {
    sellOrderId: Long.UZERO,
    quantity: "",
    bidPrice: undefined,
    disableAutoRetire: false,
    retirementJurisdiction: "",
    retirementReason: ""
  };
}

export const MsgBuyDirect_Order = {
  encode(message: MsgBuyDirect_Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sellOrderId.isZero()) {
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

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyDirect_Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyDirect_Order();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.sellOrderId = (reader.uint64() as Long);
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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgBuyDirect_Order {
    return {
      sellOrderId: isSet(object.sellOrderId) ? Long.fromValue(object.sellOrderId) : Long.UZERO,
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      bidPrice: isSet(object.bidPrice) ? Coin.fromJSON(object.bidPrice) : undefined,
      disableAutoRetire: isSet(object.disableAutoRetire) ? Boolean(object.disableAutoRetire) : false,
      retirementJurisdiction: isSet(object.retirementJurisdiction) ? String(object.retirementJurisdiction) : "",
      retirementReason: isSet(object.retirementReason) ? String(object.retirementReason) : ""
    };
  },

  toJSON(message: MsgBuyDirect_Order): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined && (obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.bidPrice !== undefined && (obj.bidPrice = message.bidPrice ? Coin.toJSON(message.bidPrice) : undefined);
    message.disableAutoRetire !== undefined && (obj.disableAutoRetire = message.disableAutoRetire);
    message.retirementJurisdiction !== undefined && (obj.retirementJurisdiction = message.retirementJurisdiction);
    message.retirementReason !== undefined && (obj.retirementReason = message.retirementReason);
    return obj;
  },

  fromPartial(object: Partial<MsgBuyDirect_Order>): MsgBuyDirect_Order {
    const message = createBaseMsgBuyDirect_Order();
    message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? Long.fromValue(object.sellOrderId) : Long.UZERO;
    message.quantity = object.quantity ?? "";
    message.bidPrice = object.bidPrice !== undefined && object.bidPrice !== null ? Coin.fromPartial(object.bidPrice) : undefined;
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.retirementJurisdiction = object.retirementJurisdiction ?? "";
    message.retirementReason = object.retirementReason ?? "";
    return message;
  }

};

function createBaseMsgBuyDirectResponse(): MsgBuyDirectResponse {
  return {};
}

export const MsgBuyDirectResponse = {
  encode(_: MsgBuyDirectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyDirectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(_: any): MsgBuyDirectResponse {
    return {};
  },

  toJSON(_: MsgBuyDirectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgBuyDirectResponse>): MsgBuyDirectResponse {
    const message = createBaseMsgBuyDirectResponse();
    return message;
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
  encode(message: MsgAddAllowedDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAllowedDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): MsgAddAllowedDenom {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      bankDenom: isSet(object.bankDenom) ? String(object.bankDenom) : "",
      displayDenom: isSet(object.displayDenom) ? String(object.displayDenom) : "",
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0
    };
  },

  toJSON(message: MsgAddAllowedDenom): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.bankDenom !== undefined && (obj.bankDenom = message.bankDenom);
    message.displayDenom !== undefined && (obj.displayDenom = message.displayDenom);
    message.exponent !== undefined && (obj.exponent = Math.round(message.exponent));
    return obj;
  },

  fromPartial(object: Partial<MsgAddAllowedDenom>): MsgAddAllowedDenom {
    const message = createBaseMsgAddAllowedDenom();
    message.authority = object.authority ?? "";
    message.bankDenom = object.bankDenom ?? "";
    message.displayDenom = object.displayDenom ?? "";
    message.exponent = object.exponent ?? 0;
    return message;
  }

};

function createBaseMsgAddAllowedDenomResponse(): MsgAddAllowedDenomResponse {
  return {};
}

export const MsgAddAllowedDenomResponse = {
  encode(_: MsgAddAllowedDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAllowedDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(_: any): MsgAddAllowedDenomResponse {
    return {};
  },

  toJSON(_: MsgAddAllowedDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgAddAllowedDenomResponse>): MsgAddAllowedDenomResponse {
    const message = createBaseMsgAddAllowedDenomResponse();
    return message;
  }

};

function createBaseMsgRemoveAllowedDenom(): MsgRemoveAllowedDenom {
  return {
    authority: "",
    denom: ""
  };
}

export const MsgRemoveAllowedDenom = {
  encode(message: MsgRemoveAllowedDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAllowedDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): MsgRemoveAllowedDenom {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: MsgRemoveAllowedDenom): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: Partial<MsgRemoveAllowedDenom>): MsgRemoveAllowedDenom {
    const message = createBaseMsgRemoveAllowedDenom();
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseMsgRemoveAllowedDenomResponse(): MsgRemoveAllowedDenomResponse {
  return {};
}

export const MsgRemoveAllowedDenomResponse = {
  encode(_: MsgRemoveAllowedDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAllowedDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(_: any): MsgRemoveAllowedDenomResponse {
    return {};
  },

  toJSON(_: MsgRemoveAllowedDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgRemoveAllowedDenomResponse>): MsgRemoveAllowedDenomResponse {
    const message = createBaseMsgRemoveAllowedDenomResponse();
    return message;
  }

};