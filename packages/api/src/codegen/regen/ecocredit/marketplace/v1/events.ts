import { Long, isSet } from "../../../../helpers";
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
function createBaseEventSell(): EventSell {
  return {
    sellOrderId: Long.UZERO
  };
}
export const EventSell = {
  encode(message: EventSell, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sellOrderId.isZero()) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventSell {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSell();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrderId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSell {
    return {
      sellOrderId: isSet(object.sellOrderId) ? Long.fromValue(object.sellOrderId) : Long.UZERO
    };
  },
  toJSON(message: EventSell): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined && (obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<EventSell>): EventSell {
    const message = createBaseEventSell();
    message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? Long.fromValue(object.sellOrderId) : Long.UZERO;
    return message;
  },
  fromAmino(object: EventSellAmino): EventSell {
    return {
      sellOrderId: Long.fromString(object.sell_order_id)
    };
  },
  toAmino(message: EventSell): EventSellAmino {
    const obj: any = {};
    obj.sell_order_id = message.sellOrderId ? message.sellOrderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSellAminoMsg): EventSell {
    return EventSell.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSellProtoMsg): EventSell {
    return EventSell.decode(message.value);
  },
  toProto(message: EventSell): Uint8Array {
    return EventSell.encode(message).finish();
  },
  toProtoMsg(message: EventSell): EventSellProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.EventSell",
      value: EventSell.encode(message).finish()
    };
  }
};
function createBaseEventBuyDirect(): EventBuyDirect {
  return {
    sellOrderId: Long.UZERO
  };
}
export const EventBuyDirect = {
  encode(message: EventBuyDirect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sellOrderId.isZero()) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventBuyDirect {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBuyDirect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrderId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventBuyDirect {
    return {
      sellOrderId: isSet(object.sellOrderId) ? Long.fromValue(object.sellOrderId) : Long.UZERO
    };
  },
  toJSON(message: EventBuyDirect): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined && (obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<EventBuyDirect>): EventBuyDirect {
    const message = createBaseEventBuyDirect();
    message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? Long.fromValue(object.sellOrderId) : Long.UZERO;
    return message;
  },
  fromAmino(object: EventBuyDirectAmino): EventBuyDirect {
    return {
      sellOrderId: Long.fromString(object.sell_order_id)
    };
  },
  toAmino(message: EventBuyDirect): EventBuyDirectAmino {
    const obj: any = {};
    obj.sell_order_id = message.sellOrderId ? message.sellOrderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBuyDirectAminoMsg): EventBuyDirect {
    return EventBuyDirect.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBuyDirectProtoMsg): EventBuyDirect {
    return EventBuyDirect.decode(message.value);
  },
  toProto(message: EventBuyDirect): Uint8Array {
    return EventBuyDirect.encode(message).finish();
  },
  toProtoMsg(message: EventBuyDirect): EventBuyDirectProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.EventBuyDirect",
      value: EventBuyDirect.encode(message).finish()
    };
  }
};
function createBaseEventUpdateSellOrder(): EventUpdateSellOrder {
  return {
    sellOrderId: Long.UZERO
  };
}
export const EventUpdateSellOrder = {
  encode(message: EventUpdateSellOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sellOrderId.isZero()) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateSellOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateSellOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrderId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUpdateSellOrder {
    return {
      sellOrderId: isSet(object.sellOrderId) ? Long.fromValue(object.sellOrderId) : Long.UZERO
    };
  },
  toJSON(message: EventUpdateSellOrder): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined && (obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<EventUpdateSellOrder>): EventUpdateSellOrder {
    const message = createBaseEventUpdateSellOrder();
    message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? Long.fromValue(object.sellOrderId) : Long.UZERO;
    return message;
  },
  fromAmino(object: EventUpdateSellOrderAmino): EventUpdateSellOrder {
    return {
      sellOrderId: Long.fromString(object.sell_order_id)
    };
  },
  toAmino(message: EventUpdateSellOrder): EventUpdateSellOrderAmino {
    const obj: any = {};
    obj.sell_order_id = message.sellOrderId ? message.sellOrderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventUpdateSellOrderAminoMsg): EventUpdateSellOrder {
    return EventUpdateSellOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateSellOrderProtoMsg): EventUpdateSellOrder {
    return EventUpdateSellOrder.decode(message.value);
  },
  toProto(message: EventUpdateSellOrder): Uint8Array {
    return EventUpdateSellOrder.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateSellOrder): EventUpdateSellOrderProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.EventUpdateSellOrder",
      value: EventUpdateSellOrder.encode(message).finish()
    };
  }
};
function createBaseEventCancelSellOrder(): EventCancelSellOrder {
  return {
    sellOrderId: Long.UZERO
  };
}
export const EventCancelSellOrder = {
  encode(message: EventCancelSellOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sellOrderId.isZero()) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelSellOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelSellOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrderId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCancelSellOrder {
    return {
      sellOrderId: isSet(object.sellOrderId) ? Long.fromValue(object.sellOrderId) : Long.UZERO
    };
  },
  toJSON(message: EventCancelSellOrder): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined && (obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<EventCancelSellOrder>): EventCancelSellOrder {
    const message = createBaseEventCancelSellOrder();
    message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? Long.fromValue(object.sellOrderId) : Long.UZERO;
    return message;
  },
  fromAmino(object: EventCancelSellOrderAmino): EventCancelSellOrder {
    return {
      sellOrderId: Long.fromString(object.sell_order_id)
    };
  },
  toAmino(message: EventCancelSellOrder): EventCancelSellOrderAmino {
    const obj: any = {};
    obj.sell_order_id = message.sellOrderId ? message.sellOrderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCancelSellOrderAminoMsg): EventCancelSellOrder {
    return EventCancelSellOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelSellOrderProtoMsg): EventCancelSellOrder {
    return EventCancelSellOrder.decode(message.value);
  },
  toProto(message: EventCancelSellOrder): Uint8Array {
    return EventCancelSellOrder.encode(message).finish();
  },
  toProtoMsg(message: EventCancelSellOrder): EventCancelSellOrderProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.EventCancelSellOrder",
      value: EventCancelSellOrder.encode(message).finish()
    };
  }
};
function createBaseEventAllowDenom(): EventAllowDenom {
  return {
    denom: ""
  };
}
export const EventAllowDenom = {
  encode(message: EventAllowDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventAllowDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAllowDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventAllowDenom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: EventAllowDenom): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<EventAllowDenom>): EventAllowDenom {
    const message = createBaseEventAllowDenom();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: EventAllowDenomAmino): EventAllowDenom {
    return {
      denom: object.denom
    };
  },
  toAmino(message: EventAllowDenom): EventAllowDenomAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: EventAllowDenomAminoMsg): EventAllowDenom {
    return EventAllowDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAllowDenomProtoMsg): EventAllowDenom {
    return EventAllowDenom.decode(message.value);
  },
  toProto(message: EventAllowDenom): Uint8Array {
    return EventAllowDenom.encode(message).finish();
  },
  toProtoMsg(message: EventAllowDenom): EventAllowDenomProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.EventAllowDenom",
      value: EventAllowDenom.encode(message).finish()
    };
  }
};
function createBaseEventRemoveAllowedDenom(): EventRemoveAllowedDenom {
  return {
    denom: ""
  };
}
export const EventRemoveAllowedDenom = {
  encode(message: EventRemoveAllowedDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventRemoveAllowedDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveAllowedDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRemoveAllowedDenom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: EventRemoveAllowedDenom): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<EventRemoveAllowedDenom>): EventRemoveAllowedDenom {
    const message = createBaseEventRemoveAllowedDenom();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: EventRemoveAllowedDenomAmino): EventRemoveAllowedDenom {
    return {
      denom: object.denom
    };
  },
  toAmino(message: EventRemoveAllowedDenom): EventRemoveAllowedDenomAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: EventRemoveAllowedDenomAminoMsg): EventRemoveAllowedDenom {
    return EventRemoveAllowedDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemoveAllowedDenomProtoMsg): EventRemoveAllowedDenom {
    return EventRemoveAllowedDenom.decode(message.value);
  },
  toProto(message: EventRemoveAllowedDenom): Uint8Array {
    return EventRemoveAllowedDenom.encode(message).finish();
  },
  toProtoMsg(message: EventRemoveAllowedDenom): EventRemoveAllowedDenomProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.EventRemoveAllowedDenom",
      value: EventRemoveAllowedDenom.encode(message).finish()
    };
  }
};