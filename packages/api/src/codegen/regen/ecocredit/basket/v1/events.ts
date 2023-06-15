import { BasketCredit, BasketCreditAmino, BasketCreditSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** EventCreate is an event emitted when a basket is created. */

export interface EventCreate {
  /** basket_denom is the basket bank denom. */
  basketDenom: string;
  /**
   * curator is the address of the basket curator who is able to change certain
   * basket settings.
   * 
   * Deprecated (Since Revision 1): This field is still populated and will be
   * removed in the next version.
   */

  /** @deprecated */

  curator: string;
}
export interface EventCreateProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.EventCreate";
  value: Uint8Array;
}
/** EventCreate is an event emitted when a basket is created. */

export interface EventCreateAmino {
  /** basket_denom is the basket bank denom. */
  basket_denom: string;
  /**
   * curator is the address of the basket curator who is able to change certain
   * basket settings.
   * 
   * Deprecated (Since Revision 1): This field is still populated and will be
   * removed in the next version.
   */

  /** @deprecated */

  curator: string;
}
export interface EventCreateAminoMsg {
  type: "/regen.ecocredit.basket.v1.EventCreate";
  value: EventCreateAmino;
}
/** EventCreate is an event emitted when a basket is created. */

export interface EventCreateSDKType {
  basket_denom: string;
  /** @deprecated */

  curator: string;
}
/**
 * EventPut is an event emitted when credits are put into a basket in return for
 * basket tokens.
 */

export interface EventPut {
  /** owner is the owner of the credits put into the basket. */
  owner: string;
  /** basket_denom is the basket bank denom that the credits were added to. */

  basketDenom: string;
  /**
   * credits are the credits that were added to the basket.
   * 
   * Deprecated (Since Revision 1): This field is still populated and will be
   * removed in the next version.
   */

  /** @deprecated */

  credits: BasketCredit[];
  /**
   * amount is the integer number of basket tokens converted from credits.
   * 
   * Deprecated (Since Revision 1): This field is still populated and will be
   * removed in the next version.
   */

  /** @deprecated */

  amount: string;
}
export interface EventPutProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.EventPut";
  value: Uint8Array;
}
/**
 * EventPut is an event emitted when credits are put into a basket in return for
 * basket tokens.
 */

export interface EventPutAmino {
  /** owner is the owner of the credits put into the basket. */
  owner: string;
  /** basket_denom is the basket bank denom that the credits were added to. */

  basket_denom: string;
  /**
   * credits are the credits that were added to the basket.
   * 
   * Deprecated (Since Revision 1): This field is still populated and will be
   * removed in the next version.
   */

  /** @deprecated */

  credits: BasketCreditAmino[];
  /**
   * amount is the integer number of basket tokens converted from credits.
   * 
   * Deprecated (Since Revision 1): This field is still populated and will be
   * removed in the next version.
   */

  /** @deprecated */

  amount: string;
}
export interface EventPutAminoMsg {
  type: "/regen.ecocredit.basket.v1.EventPut";
  value: EventPutAmino;
}
/**
 * EventPut is an event emitted when credits are put into a basket in return for
 * basket tokens.
 */

export interface EventPutSDKType {
  owner: string;
  basket_denom: string;
  /** @deprecated */

  credits: BasketCreditSDKType[];
  /** @deprecated */

  amount: string;
}
/**
 * EventTake is an event emitted when credits are taken from a basket starting
 * from the oldest credits first.
 */

export interface EventTake {
  /** owner is the owner of the credits taken from the basket. */
  owner: string;
  /** basket_denom is the basket bank denom that credits were taken from. */

  basketDenom: string;
  /**
   * credits are the credits that were taken from the basket.
   * 
   * Deprecated (Since Revision 1): This field is still populated and will be
   * removed in the next version.
   */

  /** @deprecated */

  credits: BasketCredit[];
  /**
   * amount is the integer number of basket tokens converted to credits.
   * 
   * Deprecated (Since Revision 1): This field is still populated and will be
   * removed in the next version.
   */

  /** @deprecated */

  amount: string;
}
export interface EventTakeProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.EventTake";
  value: Uint8Array;
}
/**
 * EventTake is an event emitted when credits are taken from a basket starting
 * from the oldest credits first.
 */

export interface EventTakeAmino {
  /** owner is the owner of the credits taken from the basket. */
  owner: string;
  /** basket_denom is the basket bank denom that credits were taken from. */

  basket_denom: string;
  /**
   * credits are the credits that were taken from the basket.
   * 
   * Deprecated (Since Revision 1): This field is still populated and will be
   * removed in the next version.
   */

  /** @deprecated */

  credits: BasketCreditAmino[];
  /**
   * amount is the integer number of basket tokens converted to credits.
   * 
   * Deprecated (Since Revision 1): This field is still populated and will be
   * removed in the next version.
   */

  /** @deprecated */

  amount: string;
}
export interface EventTakeAminoMsg {
  type: "/regen.ecocredit.basket.v1.EventTake";
  value: EventTakeAmino;
}
/**
 * EventTake is an event emitted when credits are taken from a basket starting
 * from the oldest credits first.
 */

export interface EventTakeSDKType {
  owner: string;
  basket_denom: string;
  /** @deprecated */

  credits: BasketCreditSDKType[];
  /** @deprecated */

  amount: string;
}
/**
 * EventUpdateCurator is an event emitted when the basket curator is updated.
 * 
 * Since Revision 2
 */

export interface EventUpdateCurator {
  /** denom is the basket denom. */
  denom: string;
}
export interface EventUpdateCuratorProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.EventUpdateCurator";
  value: Uint8Array;
}
/**
 * EventUpdateCurator is an event emitted when the basket curator is updated.
 * 
 * Since Revision 2
 */

export interface EventUpdateCuratorAmino {
  /** denom is the basket denom. */
  denom: string;
}
export interface EventUpdateCuratorAminoMsg {
  type: "/regen.ecocredit.basket.v1.EventUpdateCurator";
  value: EventUpdateCuratorAmino;
}
/**
 * EventUpdateCurator is an event emitted when the basket curator is updated.
 * 
 * Since Revision 2
 */

export interface EventUpdateCuratorSDKType {
  denom: string;
}
/**
 * EventUpdateDateCriteria is an event emitted when the basket date criteria is
 * updated.
 * 
 * Since Revision 3
 */

export interface EventUpdateDateCriteria {
  /** denom is the basket denom. */
  denom: string;
}
export interface EventUpdateDateCriteriaProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.EventUpdateDateCriteria";
  value: Uint8Array;
}
/**
 * EventUpdateDateCriteria is an event emitted when the basket date criteria is
 * updated.
 * 
 * Since Revision 3
 */

export interface EventUpdateDateCriteriaAmino {
  /** denom is the basket denom. */
  denom: string;
}
export interface EventUpdateDateCriteriaAminoMsg {
  type: "/regen.ecocredit.basket.v1.EventUpdateDateCriteria";
  value: EventUpdateDateCriteriaAmino;
}
/**
 * EventUpdateDateCriteria is an event emitted when the basket date criteria is
 * updated.
 * 
 * Since Revision 3
 */

export interface EventUpdateDateCriteriaSDKType {
  denom: string;
}

function createBaseEventCreate(): EventCreate {
  return {
    basketDenom: "",
    curator: ""
  };
}

export const EventCreate = {
  encode(message: EventCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.basketDenom !== "") {
      writer.uint32(10).string(message.basketDenom);
    }

    if (message.curator !== "") {
      writer.uint32(18).string(message.curator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.basketDenom = reader.string();
          break;

        case 2:
          message.curator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCreate {
    return {
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : "",
      curator: isSet(object.curator) ? String(object.curator) : ""
    };
  },

  toJSON(message: EventCreate): unknown {
    const obj: any = {};
    message.basketDenom !== undefined && (obj.basketDenom = message.basketDenom);
    message.curator !== undefined && (obj.curator = message.curator);
    return obj;
  },

  fromPartial(object: Partial<EventCreate>): EventCreate {
    const message = createBaseEventCreate();
    message.basketDenom = object.basketDenom ?? "";
    message.curator = object.curator ?? "";
    return message;
  },

  fromAmino(object: EventCreateAmino): EventCreate {
    return {
      basketDenom: object.basket_denom,
      curator: object.curator
    };
  },

  toAmino(message: EventCreate): EventCreateAmino {
    const obj: any = {};
    obj.basket_denom = message.basketDenom;
    obj.curator = message.curator;
    return obj;
  },

  fromAminoMsg(object: EventCreateAminoMsg): EventCreate {
    return EventCreate.fromAmino(object.value);
  },

  fromProtoMsg(message: EventCreateProtoMsg): EventCreate {
    return EventCreate.decode(message.value);
  },

  toProto(message: EventCreate): Uint8Array {
    return EventCreate.encode(message).finish();
  },

  toProtoMsg(message: EventCreate): EventCreateProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.EventCreate",
      value: EventCreate.encode(message).finish()
    };
  }

};

function createBaseEventPut(): EventPut {
  return {
    owner: "",
    basketDenom: "",
    credits: [],
    amount: ""
  };
}

export const EventPut = {
  encode(message: EventPut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.basketDenom !== "") {
      writer.uint32(18).string(message.basketDenom);
    }

    for (const v of message.credits) {
      BasketCredit.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPut();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.basketDenom = reader.string();
          break;

        case 3:
          message.credits.push(BasketCredit.decode(reader, reader.uint32()));
          break;

        case 4:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventPut {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => BasketCredit.fromJSON(e)) : [],
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: EventPut): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.basketDenom !== undefined && (obj.basketDenom = message.basketDenom);

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? BasketCredit.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }

    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: Partial<EventPut>): EventPut {
    const message = createBaseEventPut();
    message.owner = object.owner ?? "";
    message.basketDenom = object.basketDenom ?? "";
    message.credits = object.credits?.map(e => BasketCredit.fromPartial(e)) || [];
    message.amount = object.amount ?? "";
    return message;
  },

  fromAmino(object: EventPutAmino): EventPut {
    return {
      owner: object.owner,
      basketDenom: object.basket_denom,
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => BasketCredit.fromAmino(e)) : [],
      amount: object.amount
    };
  },

  toAmino(message: EventPut): EventPutAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.basket_denom = message.basketDenom;

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? BasketCredit.toAmino(e) : undefined);
    } else {
      obj.credits = [];
    }

    obj.amount = message.amount;
    return obj;
  },

  fromAminoMsg(object: EventPutAminoMsg): EventPut {
    return EventPut.fromAmino(object.value);
  },

  fromProtoMsg(message: EventPutProtoMsg): EventPut {
    return EventPut.decode(message.value);
  },

  toProto(message: EventPut): Uint8Array {
    return EventPut.encode(message).finish();
  },

  toProtoMsg(message: EventPut): EventPutProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.EventPut",
      value: EventPut.encode(message).finish()
    };
  }

};

function createBaseEventTake(): EventTake {
  return {
    owner: "",
    basketDenom: "",
    credits: [],
    amount: ""
  };
}

export const EventTake = {
  encode(message: EventTake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.basketDenom !== "") {
      writer.uint32(18).string(message.basketDenom);
    }

    for (const v of message.credits) {
      BasketCredit.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTake();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.basketDenom = reader.string();
          break;

        case 3:
          message.credits.push(BasketCredit.decode(reader, reader.uint32()));
          break;

        case 4:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventTake {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => BasketCredit.fromJSON(e)) : [],
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: EventTake): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.basketDenom !== undefined && (obj.basketDenom = message.basketDenom);

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? BasketCredit.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }

    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: Partial<EventTake>): EventTake {
    const message = createBaseEventTake();
    message.owner = object.owner ?? "";
    message.basketDenom = object.basketDenom ?? "";
    message.credits = object.credits?.map(e => BasketCredit.fromPartial(e)) || [];
    message.amount = object.amount ?? "";
    return message;
  },

  fromAmino(object: EventTakeAmino): EventTake {
    return {
      owner: object.owner,
      basketDenom: object.basket_denom,
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => BasketCredit.fromAmino(e)) : [],
      amount: object.amount
    };
  },

  toAmino(message: EventTake): EventTakeAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.basket_denom = message.basketDenom;

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? BasketCredit.toAmino(e) : undefined);
    } else {
      obj.credits = [];
    }

    obj.amount = message.amount;
    return obj;
  },

  fromAminoMsg(object: EventTakeAminoMsg): EventTake {
    return EventTake.fromAmino(object.value);
  },

  fromProtoMsg(message: EventTakeProtoMsg): EventTake {
    return EventTake.decode(message.value);
  },

  toProto(message: EventTake): Uint8Array {
    return EventTake.encode(message).finish();
  },

  toProtoMsg(message: EventTake): EventTakeProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.EventTake",
      value: EventTake.encode(message).finish()
    };
  }

};

function createBaseEventUpdateCurator(): EventUpdateCurator {
  return {
    denom: ""
  };
}

export const EventUpdateCurator = {
  encode(message: EventUpdateCurator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCurator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateCurator();

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

  fromJSON(object: any): EventUpdateCurator {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: EventUpdateCurator): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: Partial<EventUpdateCurator>): EventUpdateCurator {
    const message = createBaseEventUpdateCurator();
    message.denom = object.denom ?? "";
    return message;
  },

  fromAmino(object: EventUpdateCuratorAmino): EventUpdateCurator {
    return {
      denom: object.denom
    };
  },

  toAmino(message: EventUpdateCurator): EventUpdateCuratorAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },

  fromAminoMsg(object: EventUpdateCuratorAminoMsg): EventUpdateCurator {
    return EventUpdateCurator.fromAmino(object.value);
  },

  fromProtoMsg(message: EventUpdateCuratorProtoMsg): EventUpdateCurator {
    return EventUpdateCurator.decode(message.value);
  },

  toProto(message: EventUpdateCurator): Uint8Array {
    return EventUpdateCurator.encode(message).finish();
  },

  toProtoMsg(message: EventUpdateCurator): EventUpdateCuratorProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.EventUpdateCurator",
      value: EventUpdateCurator.encode(message).finish()
    };
  }

};

function createBaseEventUpdateDateCriteria(): EventUpdateDateCriteria {
  return {
    denom: ""
  };
}

export const EventUpdateDateCriteria = {
  encode(message: EventUpdateDateCriteria, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateDateCriteria {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateDateCriteria();

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

  fromJSON(object: any): EventUpdateDateCriteria {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: EventUpdateDateCriteria): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: Partial<EventUpdateDateCriteria>): EventUpdateDateCriteria {
    const message = createBaseEventUpdateDateCriteria();
    message.denom = object.denom ?? "";
    return message;
  },

  fromAmino(object: EventUpdateDateCriteriaAmino): EventUpdateDateCriteria {
    return {
      denom: object.denom
    };
  },

  toAmino(message: EventUpdateDateCriteria): EventUpdateDateCriteriaAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },

  fromAminoMsg(object: EventUpdateDateCriteriaAminoMsg): EventUpdateDateCriteria {
    return EventUpdateDateCriteria.fromAmino(object.value);
  },

  fromProtoMsg(message: EventUpdateDateCriteriaProtoMsg): EventUpdateDateCriteria {
    return EventUpdateDateCriteria.decode(message.value);
  },

  toProto(message: EventUpdateDateCriteria): Uint8Array {
    return EventUpdateDateCriteria.encode(message).finish();
  },

  toProtoMsg(message: EventUpdateDateCriteria): EventUpdateDateCriteriaProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.EventUpdateDateCriteria",
      value: EventUpdateDateCriteria.encode(message).finish()
    };
  }

};