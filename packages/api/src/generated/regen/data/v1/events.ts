/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";

export const protobufPackage = "regen.data.v1";

/** EventAnchor is an event emitted when data is anchored on chain. */
export interface EventAnchor {
  $type: "regen.data.v1.EventAnchor";
  /** iri is the IRI of the data anchored on chain. */
  iri: string;
}

/** EventAttest is an event emitted when data is attested to on chain. */
export interface EventAttest {
  $type: "regen.data.v1.EventAttest";
  /** iri is the IRI of the data attested to. */
  iri: string;
  /**
   * attestor is the address of the account that has attested to the veracity of
   * the data.
   */
  attestor: string;
}

/** EventDefineResolver is an event emitted when a resolved is defined on chain. */
export interface EventDefineResolver {
  $type: "regen.data.v1.EventDefineResolver";
  /** id is the ID of the defined resolver. */
  id: Long;
}

/**
 * EventRegisterResolver is an event emitted when data is registered to a
 * resolver on chain.
 */
export interface EventRegisterResolver {
  $type: "regen.data.v1.EventRegisterResolver";
  /** id is the ID of the resolver that the data was registered to. */
  id: Long;
  /** iri is the IRI of the data that was registered. */
  iri: string;
}

function createBaseEventAnchor(): EventAnchor {
  return { $type: "regen.data.v1.EventAnchor", iri: "" };
}

export const EventAnchor = {
  $type: "regen.data.v1.EventAnchor" as const,

  encode(message: EventAnchor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAnchor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAnchor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventAnchor {
    return { $type: EventAnchor.$type, iri: isSet(object.iri) ? String(object.iri) : "" };
  },

  toJSON(message: EventAnchor): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  create(base?: DeepPartial<EventAnchor>): EventAnchor {
    return EventAnchor.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventAnchor>): EventAnchor {
    const message = createBaseEventAnchor();
    message.iri = object.iri ?? "";
    return message;
  },
};

messageTypeRegistry.set(EventAnchor.$type, EventAnchor);

function createBaseEventAttest(): EventAttest {
  return { $type: "regen.data.v1.EventAttest", iri: "", attestor: "" };
}

export const EventAttest = {
  $type: "regen.data.v1.EventAttest" as const,

  encode(message: EventAttest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iri !== "") {
      writer.uint32(10).string(message.iri);
    }
    if (message.attestor !== "") {
      writer.uint32(18).string(message.attestor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAttest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
          break;
        case 2:
          message.attestor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventAttest {
    return {
      $type: EventAttest.$type,
      iri: isSet(object.iri) ? String(object.iri) : "",
      attestor: isSet(object.attestor) ? String(object.attestor) : "",
    };
  },

  toJSON(message: EventAttest): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.attestor !== undefined && (obj.attestor = message.attestor);
    return obj;
  },

  create(base?: DeepPartial<EventAttest>): EventAttest {
    return EventAttest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventAttest>): EventAttest {
    const message = createBaseEventAttest();
    message.iri = object.iri ?? "";
    message.attestor = object.attestor ?? "";
    return message;
  },
};

messageTypeRegistry.set(EventAttest.$type, EventAttest);

function createBaseEventDefineResolver(): EventDefineResolver {
  return { $type: "regen.data.v1.EventDefineResolver", id: Long.UZERO };
}

export const EventDefineResolver = {
  $type: "regen.data.v1.EventDefineResolver" as const,

  encode(message: EventDefineResolver, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDefineResolver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDefineResolver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDefineResolver {
    return { $type: EventDefineResolver.$type, id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO };
  },

  toJSON(message: EventDefineResolver): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<EventDefineResolver>): EventDefineResolver {
    return EventDefineResolver.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventDefineResolver>): EventDefineResolver {
    const message = createBaseEventDefineResolver();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventDefineResolver.$type, EventDefineResolver);

function createBaseEventRegisterResolver(): EventRegisterResolver {
  return { $type: "regen.data.v1.EventRegisterResolver", id: Long.UZERO, iri: "" };
}

export const EventRegisterResolver = {
  $type: "regen.data.v1.EventRegisterResolver" as const,

  encode(message: EventRegisterResolver, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.iri !== "") {
      writer.uint32(18).string(message.iri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRegisterResolver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRegisterResolver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.iri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRegisterResolver {
    return {
      $type: EventRegisterResolver.$type,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      iri: isSet(object.iri) ? String(object.iri) : "",
    };
  },

  toJSON(message: EventRegisterResolver): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  create(base?: DeepPartial<EventRegisterResolver>): EventRegisterResolver {
    return EventRegisterResolver.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventRegisterResolver>): EventRegisterResolver {
    const message = createBaseEventRegisterResolver();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.iri = object.iri ?? "";
    return message;
  },
};

messageTypeRegistry.set(EventRegisterResolver.$type, EventRegisterResolver);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
