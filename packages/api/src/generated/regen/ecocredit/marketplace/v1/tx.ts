/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "regen.ecocredit.marketplace.v1";

/** MsgSell is the Msg/Sell request type. */
export interface MsgSell {
  $type: "regen.ecocredit.marketplace.v1.MsgSell";
  /** seller is the address of the account that is selling credits. */
  seller: string;
  /** orders are the sell orders being created. */
  orders: MsgSell_Order[];
}

/** Order is the content of a new sell order. */
export interface MsgSell_Order {
  $type: "regen.ecocredit.marketplace.v1.MsgSell.Order";
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

/** MsgSellResponse is the Msg/Sell response type. */
export interface MsgSellResponse {
  $type: "regen.ecocredit.marketplace.v1.MsgSellResponse";
  /** sell_order_ids are the sell order IDs of the newly created sell orders. */
  sellOrderIds: Long[];
}

/** MsgUpdateSellOrders is the Msg/UpdateSellOrders request type. */
export interface MsgUpdateSellOrders {
  $type: "regen.ecocredit.marketplace.v1.MsgUpdateSellOrders";
  /** seller is the address of the account that is selling credits. */
  seller: string;
  /** updates are updates to existing sell orders. */
  updates: MsgUpdateSellOrders_Update[];
}

/** Update is an update to an existing sell order. */
export interface MsgUpdateSellOrders_Update {
  $type: "regen.ecocredit.marketplace.v1.MsgUpdateSellOrders.Update";
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
  newExpiration?: Date;
}

/** MsgUpdateSellOrdersResponse is the Msg/UpdateSellOrders response type. */
export interface MsgUpdateSellOrdersResponse {
  $type: "regen.ecocredit.marketplace.v1.MsgUpdateSellOrdersResponse";
}

/** MsgCancelSellOrder is the Msg/CancelSellOrder request type. */
export interface MsgCancelSellOrder {
  $type: "regen.ecocredit.marketplace.v1.MsgCancelSellOrder";
  /**
   * seller is the address of the account that created the sell order and is
   * therefore authorized to cancel the sell order.
   */
  seller: string;
  /** sell_order_id is the id of the seller order to cancel. */
  sellOrderId: Long;
}

/** MsgCancelSellOrder is the Msg/CancelSellOrder response type. */
export interface MsgCancelSellOrderResponse {
  $type: "regen.ecocredit.marketplace.v1.MsgCancelSellOrderResponse";
}

/** MsgBuyDirect is the Msg/BuyDirect request type. */
export interface MsgBuyDirect {
  $type: "regen.ecocredit.marketplace.v1.MsgBuyDirect";
  /** buyer is the address of the account that is buying credits. */
  buyer: string;
  /** orders is a list of orders for ecocredits. */
  orders: MsgBuyDirect_Order[];
}

/** Order contains the information needed to purchase an ecocredit. */
export interface MsgBuyDirect_Order {
  $type: "regen.ecocredit.marketplace.v1.MsgBuyDirect.Order";
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

/** MsgBuyDirectResponse is the Msg/BuyDirect response type. */
export interface MsgBuyDirectResponse {
  $type: "regen.ecocredit.marketplace.v1.MsgBuyDirectResponse";
}

/**
 * MsgAddAllowedDenom is the Msg/AddAllowedDenom request type.
 *
 * Since Revision 1
 */
export interface MsgAddAllowedDenom {
  $type: "regen.ecocredit.marketplace.v1.MsgAddAllowedDenom";
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
 * MsgAddAllowedDenomResponse is the Msg/AddAllowedDenom response type.
 *
 * Since Revision 1
 */
export interface MsgAddAllowedDenomResponse {
  $type: "regen.ecocredit.marketplace.v1.MsgAddAllowedDenomResponse";
}

/**
 * MsgRemoveAllowedDenom is the Msg/RemoveAllowedDenom request type.
 *
 * Since Revision 1
 */
export interface MsgRemoveAllowedDenom {
  $type: "regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom";
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
  $type: "regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenomResponse";
}

function createBaseMsgSell(): MsgSell {
  return { $type: "regen.ecocredit.marketplace.v1.MsgSell", seller: "", orders: [] };
}

export const MsgSell = {
  $type: "regen.ecocredit.marketplace.v1.MsgSell" as const,

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
      $type: MsgSell.$type,
      seller: isSet(object.seller) ? String(object.seller) : "",
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => MsgSell_Order.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgSell): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
    if (message.orders) {
      obj.orders = message.orders.map((e) => e ? MsgSell_Order.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MsgSell>): MsgSell {
    return MsgSell.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSell>): MsgSell {
    const message = createBaseMsgSell();
    message.seller = object.seller ?? "";
    message.orders = object.orders?.map((e) => MsgSell_Order.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgSell.$type, MsgSell);

function createBaseMsgSell_Order(): MsgSell_Order {
  return {
    $type: "regen.ecocredit.marketplace.v1.MsgSell.Order",
    batchDenom: "",
    quantity: "",
    askPrice: undefined,
    disableAutoRetire: false,
    expiration: undefined,
  };
}

export const MsgSell_Order = {
  $type: "regen.ecocredit.marketplace.v1.MsgSell.Order" as const,

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
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(42).fork()).ldelim();
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
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      $type: MsgSell_Order.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      askPrice: isSet(object.askPrice) ? Coin.fromJSON(object.askPrice) : undefined,
      disableAutoRetire: isSet(object.disableAutoRetire) ? Boolean(object.disableAutoRetire) : false,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
    };
  },

  toJSON(message: MsgSell_Order): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.askPrice !== undefined && (obj.askPrice = message.askPrice ? Coin.toJSON(message.askPrice) : undefined);
    message.disableAutoRetire !== undefined && (obj.disableAutoRetire = message.disableAutoRetire);
    message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
    return obj;
  },

  create(base?: DeepPartial<MsgSell_Order>): MsgSell_Order {
    return MsgSell_Order.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSell_Order>): MsgSell_Order {
    const message = createBaseMsgSell_Order();
    message.batchDenom = object.batchDenom ?? "";
    message.quantity = object.quantity ?? "";
    message.askPrice = (object.askPrice !== undefined && object.askPrice !== null)
      ? Coin.fromPartial(object.askPrice)
      : undefined;
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.expiration = object.expiration ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgSell_Order.$type, MsgSell_Order);

function createBaseMsgSellResponse(): MsgSellResponse {
  return { $type: "regen.ecocredit.marketplace.v1.MsgSellResponse", sellOrderIds: [] };
}

export const MsgSellResponse = {
  $type: "regen.ecocredit.marketplace.v1.MsgSellResponse" as const,

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
              message.sellOrderIds.push(reader.uint64() as Long);
            }
          } else {
            message.sellOrderIds.push(reader.uint64() as Long);
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
      $type: MsgSellResponse.$type,
      sellOrderIds: Array.isArray(object?.sellOrderIds) ? object.sellOrderIds.map((e: any) => Long.fromValue(e)) : [],
    };
  },

  toJSON(message: MsgSellResponse): unknown {
    const obj: any = {};
    if (message.sellOrderIds) {
      obj.sellOrderIds = message.sellOrderIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.sellOrderIds = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MsgSellResponse>): MsgSellResponse {
    return MsgSellResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSellResponse>): MsgSellResponse {
    const message = createBaseMsgSellResponse();
    message.sellOrderIds = object.sellOrderIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgSellResponse.$type, MsgSellResponse);

function createBaseMsgUpdateSellOrders(): MsgUpdateSellOrders {
  return { $type: "regen.ecocredit.marketplace.v1.MsgUpdateSellOrders", seller: "", updates: [] };
}

export const MsgUpdateSellOrders = {
  $type: "regen.ecocredit.marketplace.v1.MsgUpdateSellOrders" as const,

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
      $type: MsgUpdateSellOrders.$type,
      seller: isSet(object.seller) ? String(object.seller) : "",
      updates: Array.isArray(object?.updates)
        ? object.updates.map((e: any) => MsgUpdateSellOrders_Update.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgUpdateSellOrders): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
    if (message.updates) {
      obj.updates = message.updates.map((e) => e ? MsgUpdateSellOrders_Update.toJSON(e) : undefined);
    } else {
      obj.updates = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateSellOrders>): MsgUpdateSellOrders {
    return MsgUpdateSellOrders.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateSellOrders>): MsgUpdateSellOrders {
    const message = createBaseMsgUpdateSellOrders();
    message.seller = object.seller ?? "";
    message.updates = object.updates?.map((e) => MsgUpdateSellOrders_Update.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateSellOrders.$type, MsgUpdateSellOrders);

function createBaseMsgUpdateSellOrders_Update(): MsgUpdateSellOrders_Update {
  return {
    $type: "regen.ecocredit.marketplace.v1.MsgUpdateSellOrders.Update",
    sellOrderId: Long.UZERO,
    newQuantity: "",
    newAskPrice: undefined,
    disableAutoRetire: false,
    newExpiration: undefined,
  };
}

export const MsgUpdateSellOrders_Update = {
  $type: "regen.ecocredit.marketplace.v1.MsgUpdateSellOrders.Update" as const,

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
      Timestamp.encode(toTimestamp(message.newExpiration), writer.uint32(42).fork()).ldelim();
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
          message.sellOrderId = reader.uint64() as Long;
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

  fromJSON(object: any): MsgUpdateSellOrders_Update {
    return {
      $type: MsgUpdateSellOrders_Update.$type,
      sellOrderId: isSet(object.sellOrderId) ? Long.fromValue(object.sellOrderId) : Long.UZERO,
      newQuantity: isSet(object.newQuantity) ? String(object.newQuantity) : "",
      newAskPrice: isSet(object.newAskPrice) ? Coin.fromJSON(object.newAskPrice) : undefined,
      disableAutoRetire: isSet(object.disableAutoRetire) ? Boolean(object.disableAutoRetire) : false,
      newExpiration: isSet(object.newExpiration) ? fromJsonTimestamp(object.newExpiration) : undefined,
    };
  },

  toJSON(message: MsgUpdateSellOrders_Update): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined && (obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
    message.newQuantity !== undefined && (obj.newQuantity = message.newQuantity);
    message.newAskPrice !== undefined &&
      (obj.newAskPrice = message.newAskPrice ? Coin.toJSON(message.newAskPrice) : undefined);
    message.disableAutoRetire !== undefined && (obj.disableAutoRetire = message.disableAutoRetire);
    message.newExpiration !== undefined && (obj.newExpiration = message.newExpiration.toISOString());
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateSellOrders_Update>): MsgUpdateSellOrders_Update {
    return MsgUpdateSellOrders_Update.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateSellOrders_Update>): MsgUpdateSellOrders_Update {
    const message = createBaseMsgUpdateSellOrders_Update();
    message.sellOrderId = (object.sellOrderId !== undefined && object.sellOrderId !== null)
      ? Long.fromValue(object.sellOrderId)
      : Long.UZERO;
    message.newQuantity = object.newQuantity ?? "";
    message.newAskPrice = (object.newAskPrice !== undefined && object.newAskPrice !== null)
      ? Coin.fromPartial(object.newAskPrice)
      : undefined;
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.newExpiration = object.newExpiration ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateSellOrders_Update.$type, MsgUpdateSellOrders_Update);

function createBaseMsgUpdateSellOrdersResponse(): MsgUpdateSellOrdersResponse {
  return { $type: "regen.ecocredit.marketplace.v1.MsgUpdateSellOrdersResponse" };
}

export const MsgUpdateSellOrdersResponse = {
  $type: "regen.ecocredit.marketplace.v1.MsgUpdateSellOrdersResponse" as const,

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
    return { $type: MsgUpdateSellOrdersResponse.$type };
  },

  toJSON(_: MsgUpdateSellOrdersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateSellOrdersResponse>): MsgUpdateSellOrdersResponse {
    return MsgUpdateSellOrdersResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateSellOrdersResponse>): MsgUpdateSellOrdersResponse {
    const message = createBaseMsgUpdateSellOrdersResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateSellOrdersResponse.$type, MsgUpdateSellOrdersResponse);

function createBaseMsgCancelSellOrder(): MsgCancelSellOrder {
  return { $type: "regen.ecocredit.marketplace.v1.MsgCancelSellOrder", seller: "", sellOrderId: Long.UZERO };
}

export const MsgCancelSellOrder = {
  $type: "regen.ecocredit.marketplace.v1.MsgCancelSellOrder" as const,

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
          message.sellOrderId = reader.uint64() as Long;
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
      $type: MsgCancelSellOrder.$type,
      seller: isSet(object.seller) ? String(object.seller) : "",
      sellOrderId: isSet(object.sellOrderId) ? Long.fromValue(object.sellOrderId) : Long.UZERO,
    };
  },

  toJSON(message: MsgCancelSellOrder): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
    message.sellOrderId !== undefined && (obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<MsgCancelSellOrder>): MsgCancelSellOrder {
    return MsgCancelSellOrder.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCancelSellOrder>): MsgCancelSellOrder {
    const message = createBaseMsgCancelSellOrder();
    message.seller = object.seller ?? "";
    message.sellOrderId = (object.sellOrderId !== undefined && object.sellOrderId !== null)
      ? Long.fromValue(object.sellOrderId)
      : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(MsgCancelSellOrder.$type, MsgCancelSellOrder);

function createBaseMsgCancelSellOrderResponse(): MsgCancelSellOrderResponse {
  return { $type: "regen.ecocredit.marketplace.v1.MsgCancelSellOrderResponse" };
}

export const MsgCancelSellOrderResponse = {
  $type: "regen.ecocredit.marketplace.v1.MsgCancelSellOrderResponse" as const,

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
    return { $type: MsgCancelSellOrderResponse.$type };
  },

  toJSON(_: MsgCancelSellOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCancelSellOrderResponse>): MsgCancelSellOrderResponse {
    return MsgCancelSellOrderResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCancelSellOrderResponse>): MsgCancelSellOrderResponse {
    const message = createBaseMsgCancelSellOrderResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgCancelSellOrderResponse.$type, MsgCancelSellOrderResponse);

function createBaseMsgBuyDirect(): MsgBuyDirect {
  return { $type: "regen.ecocredit.marketplace.v1.MsgBuyDirect", buyer: "", orders: [] };
}

export const MsgBuyDirect = {
  $type: "regen.ecocredit.marketplace.v1.MsgBuyDirect" as const,

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
      $type: MsgBuyDirect.$type,
      buyer: isSet(object.buyer) ? String(object.buyer) : "",
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => MsgBuyDirect_Order.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgBuyDirect): unknown {
    const obj: any = {};
    message.buyer !== undefined && (obj.buyer = message.buyer);
    if (message.orders) {
      obj.orders = message.orders.map((e) => e ? MsgBuyDirect_Order.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MsgBuyDirect>): MsgBuyDirect {
    return MsgBuyDirect.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgBuyDirect>): MsgBuyDirect {
    const message = createBaseMsgBuyDirect();
    message.buyer = object.buyer ?? "";
    message.orders = object.orders?.map((e) => MsgBuyDirect_Order.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgBuyDirect.$type, MsgBuyDirect);

function createBaseMsgBuyDirect_Order(): MsgBuyDirect_Order {
  return {
    $type: "regen.ecocredit.marketplace.v1.MsgBuyDirect.Order",
    sellOrderId: Long.UZERO,
    quantity: "",
    bidPrice: undefined,
    disableAutoRetire: false,
    retirementJurisdiction: "",
    retirementReason: "",
  };
}

export const MsgBuyDirect_Order = {
  $type: "regen.ecocredit.marketplace.v1.MsgBuyDirect.Order" as const,

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
          message.sellOrderId = reader.uint64() as Long;
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
      $type: MsgBuyDirect_Order.$type,
      sellOrderId: isSet(object.sellOrderId) ? Long.fromValue(object.sellOrderId) : Long.UZERO,
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      bidPrice: isSet(object.bidPrice) ? Coin.fromJSON(object.bidPrice) : undefined,
      disableAutoRetire: isSet(object.disableAutoRetire) ? Boolean(object.disableAutoRetire) : false,
      retirementJurisdiction: isSet(object.retirementJurisdiction) ? String(object.retirementJurisdiction) : "",
      retirementReason: isSet(object.retirementReason) ? String(object.retirementReason) : "",
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

  create(base?: DeepPartial<MsgBuyDirect_Order>): MsgBuyDirect_Order {
    return MsgBuyDirect_Order.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgBuyDirect_Order>): MsgBuyDirect_Order {
    const message = createBaseMsgBuyDirect_Order();
    message.sellOrderId = (object.sellOrderId !== undefined && object.sellOrderId !== null)
      ? Long.fromValue(object.sellOrderId)
      : Long.UZERO;
    message.quantity = object.quantity ?? "";
    message.bidPrice = (object.bidPrice !== undefined && object.bidPrice !== null)
      ? Coin.fromPartial(object.bidPrice)
      : undefined;
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.retirementJurisdiction = object.retirementJurisdiction ?? "";
    message.retirementReason = object.retirementReason ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgBuyDirect_Order.$type, MsgBuyDirect_Order);

function createBaseMsgBuyDirectResponse(): MsgBuyDirectResponse {
  return { $type: "regen.ecocredit.marketplace.v1.MsgBuyDirectResponse" };
}

export const MsgBuyDirectResponse = {
  $type: "regen.ecocredit.marketplace.v1.MsgBuyDirectResponse" as const,

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
    return { $type: MsgBuyDirectResponse.$type };
  },

  toJSON(_: MsgBuyDirectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgBuyDirectResponse>): MsgBuyDirectResponse {
    return MsgBuyDirectResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgBuyDirectResponse>): MsgBuyDirectResponse {
    const message = createBaseMsgBuyDirectResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgBuyDirectResponse.$type, MsgBuyDirectResponse);

function createBaseMsgAddAllowedDenom(): MsgAddAllowedDenom {
  return {
    $type: "regen.ecocredit.marketplace.v1.MsgAddAllowedDenom",
    authority: "",
    bankDenom: "",
    displayDenom: "",
    exponent: 0,
  };
}

export const MsgAddAllowedDenom = {
  $type: "regen.ecocredit.marketplace.v1.MsgAddAllowedDenom" as const,

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
      $type: MsgAddAllowedDenom.$type,
      authority: isSet(object.authority) ? String(object.authority) : "",
      bankDenom: isSet(object.bankDenom) ? String(object.bankDenom) : "",
      displayDenom: isSet(object.displayDenom) ? String(object.displayDenom) : "",
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
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

  create(base?: DeepPartial<MsgAddAllowedDenom>): MsgAddAllowedDenom {
    return MsgAddAllowedDenom.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAddAllowedDenom>): MsgAddAllowedDenom {
    const message = createBaseMsgAddAllowedDenom();
    message.authority = object.authority ?? "";
    message.bankDenom = object.bankDenom ?? "";
    message.displayDenom = object.displayDenom ?? "";
    message.exponent = object.exponent ?? 0;
    return message;
  },
};

messageTypeRegistry.set(MsgAddAllowedDenom.$type, MsgAddAllowedDenom);

function createBaseMsgAddAllowedDenomResponse(): MsgAddAllowedDenomResponse {
  return { $type: "regen.ecocredit.marketplace.v1.MsgAddAllowedDenomResponse" };
}

export const MsgAddAllowedDenomResponse = {
  $type: "regen.ecocredit.marketplace.v1.MsgAddAllowedDenomResponse" as const,

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
    return { $type: MsgAddAllowedDenomResponse.$type };
  },

  toJSON(_: MsgAddAllowedDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgAddAllowedDenomResponse>): MsgAddAllowedDenomResponse {
    return MsgAddAllowedDenomResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgAddAllowedDenomResponse>): MsgAddAllowedDenomResponse {
    const message = createBaseMsgAddAllowedDenomResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgAddAllowedDenomResponse.$type, MsgAddAllowedDenomResponse);

function createBaseMsgRemoveAllowedDenom(): MsgRemoveAllowedDenom {
  return { $type: "regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom", authority: "", denom: "" };
}

export const MsgRemoveAllowedDenom = {
  $type: "regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom" as const,

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
      $type: MsgRemoveAllowedDenom.$type,
      authority: isSet(object.authority) ? String(object.authority) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: MsgRemoveAllowedDenom): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveAllowedDenom>): MsgRemoveAllowedDenom {
    return MsgRemoveAllowedDenom.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveAllowedDenom>): MsgRemoveAllowedDenom {
    const message = createBaseMsgRemoveAllowedDenom();
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgRemoveAllowedDenom.$type, MsgRemoveAllowedDenom);

function createBaseMsgRemoveAllowedDenomResponse(): MsgRemoveAllowedDenomResponse {
  return { $type: "regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenomResponse" };
}

export const MsgRemoveAllowedDenomResponse = {
  $type: "regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenomResponse" as const,

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
    return { $type: MsgRemoveAllowedDenomResponse.$type };
  },

  toJSON(_: MsgRemoveAllowedDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveAllowedDenomResponse>): MsgRemoveAllowedDenomResponse {
    return MsgRemoveAllowedDenomResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRemoveAllowedDenomResponse>): MsgRemoveAllowedDenomResponse {
    const message = createBaseMsgRemoveAllowedDenomResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgRemoveAllowedDenomResponse.$type, MsgRemoveAllowedDenomResponse);

/** Msg is the regen.ecocredit.marketplace.v1 Msg service. */
export interface Msg {
  /** Sell creates new sell orders. */
  Sell(request: DeepPartial<MsgSell>): Promise<MsgSellResponse>;
  /** UpdateSellOrders updates existing sell orders. */
  UpdateSellOrders(request: DeepPartial<MsgUpdateSellOrders>): Promise<MsgUpdateSellOrdersResponse>;
  /** CancelSellOrder cancels a sell order and returns the credits from escrow. */
  CancelSellOrder(request: DeepPartial<MsgCancelSellOrder>): Promise<MsgCancelSellOrderResponse>;
  /** BuyDirect purchases credits directly from the specified sell order. */
  BuyDirect(request: DeepPartial<MsgBuyDirect>): Promise<MsgBuyDirectResponse>;
  /**
   * AddAllowedDenom is a governance method that allows the addition of
   * new allowed denom.
   *
   * Since Revision 1
   */
  AddAllowedDenom(request: DeepPartial<MsgAddAllowedDenom>): Promise<MsgAddAllowedDenomResponse>;
  /**
   * RemoveAllowedDenom is a governance method that removes allowed denom.
   *
   * Since Revision 1
   */
  RemoveAllowedDenom(request: DeepPartial<MsgRemoveAllowedDenom>): Promise<MsgRemoveAllowedDenomResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "regen.ecocredit.marketplace.v1.Msg";
    this.rpc = rpc;
    this.Sell = this.Sell.bind(this);
    this.UpdateSellOrders = this.UpdateSellOrders.bind(this);
    this.CancelSellOrder = this.CancelSellOrder.bind(this);
    this.BuyDirect = this.BuyDirect.bind(this);
    this.AddAllowedDenom = this.AddAllowedDenom.bind(this);
    this.RemoveAllowedDenom = this.RemoveAllowedDenom.bind(this);
  }
  Sell(request: DeepPartial<MsgSell>): Promise<MsgSellResponse> {
    const fromPartial = MsgSell.fromPartial(request);
    const data = MsgSell.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "Sell", data);
    return promise.then((data) => MsgSellResponse.decode(new _m0.Reader(data)));
  }

  UpdateSellOrders(request: DeepPartial<MsgUpdateSellOrders>): Promise<MsgUpdateSellOrdersResponse> {
    const fromPartial = MsgUpdateSellOrders.fromPartial(request);
    const data = MsgUpdateSellOrders.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "UpdateSellOrders", data);
    return promise.then((data) => MsgUpdateSellOrdersResponse.decode(new _m0.Reader(data)));
  }

  CancelSellOrder(request: DeepPartial<MsgCancelSellOrder>): Promise<MsgCancelSellOrderResponse> {
    const fromPartial = MsgCancelSellOrder.fromPartial(request);
    const data = MsgCancelSellOrder.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "CancelSellOrder", data);
    return promise.then((data) => MsgCancelSellOrderResponse.decode(new _m0.Reader(data)));
  }

  BuyDirect(request: DeepPartial<MsgBuyDirect>): Promise<MsgBuyDirectResponse> {
    const fromPartial = MsgBuyDirect.fromPartial(request);
    const data = MsgBuyDirect.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "BuyDirect", data);
    return promise.then((data) => MsgBuyDirectResponse.decode(new _m0.Reader(data)));
  }

  AddAllowedDenom(request: DeepPartial<MsgAddAllowedDenom>): Promise<MsgAddAllowedDenomResponse> {
    const fromPartial = MsgAddAllowedDenom.fromPartial(request);
    const data = MsgAddAllowedDenom.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "AddAllowedDenom", data);
    return promise.then((data) => MsgAddAllowedDenomResponse.decode(new _m0.Reader(data)));
  }

  RemoveAllowedDenom(request: DeepPartial<MsgRemoveAllowedDenom>): Promise<MsgRemoveAllowedDenomResponse> {
    const fromPartial = MsgRemoveAllowedDenom.fromPartial(request);
    const data = MsgRemoveAllowedDenom.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "RemoveAllowedDenom", data);
    return promise.then((data) => MsgRemoveAllowedDenomResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
