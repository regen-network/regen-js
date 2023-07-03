import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** EventAnchor is an event emitted when data is anchored on chain. */
export interface EventAnchor {
  /** iri is the IRI of the data anchored on chain. */
  iri: string;
}
export interface EventAnchorProtoMsg {
  typeUrl: "/regen.data.v1.EventAnchor";
  value: Uint8Array;
}
/** EventAnchor is an event emitted when data is anchored on chain. */
export interface EventAnchorAmino {
  /** iri is the IRI of the data anchored on chain. */
  iri: string;
}
export interface EventAnchorAminoMsg {
  type: "/regen.data.v1.EventAnchor";
  value: EventAnchorAmino;
}
/** EventAnchor is an event emitted when data is anchored on chain. */
export interface EventAnchorSDKType {
  iri: string;
}
/** EventAttest is an event emitted when data is attested to on chain. */
export interface EventAttest {
  /** iri is the IRI of the data attested to. */
  iri: string;
  /**
   * attestor is the address of the account that has attested to the veracity of
   * the data.
   */
  attestor: string;
}
export interface EventAttestProtoMsg {
  typeUrl: "/regen.data.v1.EventAttest";
  value: Uint8Array;
}
/** EventAttest is an event emitted when data is attested to on chain. */
export interface EventAttestAmino {
  /** iri is the IRI of the data attested to. */
  iri: string;
  /**
   * attestor is the address of the account that has attested to the veracity of
   * the data.
   */
  attestor: string;
}
export interface EventAttestAminoMsg {
  type: "/regen.data.v1.EventAttest";
  value: EventAttestAmino;
}
/** EventAttest is an event emitted when data is attested to on chain. */
export interface EventAttestSDKType {
  iri: string;
  attestor: string;
}
/** EventDefineResolver is an event emitted when a resolved is defined on chain. */
export interface EventDefineResolver {
  /** id is the ID of the defined resolver. */
  id: Long;
}
export interface EventDefineResolverProtoMsg {
  typeUrl: "/regen.data.v1.EventDefineResolver";
  value: Uint8Array;
}
/** EventDefineResolver is an event emitted when a resolved is defined on chain. */
export interface EventDefineResolverAmino {
  /** id is the ID of the defined resolver. */
  id: string;
}
export interface EventDefineResolverAminoMsg {
  type: "/regen.data.v1.EventDefineResolver";
  value: EventDefineResolverAmino;
}
/** EventDefineResolver is an event emitted when a resolved is defined on chain. */
export interface EventDefineResolverSDKType {
  id: Long;
}
/**
 * EventRegisterResolver is an event emitted when data is registered to a
 * resolver on chain.
 */
export interface EventRegisterResolver {
  /** id is the ID of the resolver that the data was registered to. */
  id: Long;
  /** iri is the IRI of the data that was registered. */
  iri: string;
}
export interface EventRegisterResolverProtoMsg {
  typeUrl: "/regen.data.v1.EventRegisterResolver";
  value: Uint8Array;
}
/**
 * EventRegisterResolver is an event emitted when data is registered to a
 * resolver on chain.
 */
export interface EventRegisterResolverAmino {
  /** id is the ID of the resolver that the data was registered to. */
  id: string;
  /** iri is the IRI of the data that was registered. */
  iri: string;
}
export interface EventRegisterResolverAminoMsg {
  type: "/regen.data.v1.EventRegisterResolver";
  value: EventRegisterResolverAmino;
}
/**
 * EventRegisterResolver is an event emitted when data is registered to a
 * resolver on chain.
 */
export interface EventRegisterResolverSDKType {
  id: Long;
  iri: string;
}
function createBaseEventAnchor(): EventAnchor {
  return {
    iri: ""
  };
}
export const EventAnchor = {
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
    return {
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },
  toJSON(message: EventAnchor): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },
  fromPartial(object: Partial<EventAnchor>): EventAnchor {
    const message = createBaseEventAnchor();
    message.iri = object.iri ?? "";
    return message;
  },
  fromAmino(object: EventAnchorAmino): EventAnchor {
    return {
      iri: object.iri
    };
  },
  toAmino(message: EventAnchor): EventAnchorAmino {
    const obj: any = {};
    obj.iri = message.iri;
    return obj;
  },
  fromAminoMsg(object: EventAnchorAminoMsg): EventAnchor {
    return EventAnchor.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAnchorProtoMsg): EventAnchor {
    return EventAnchor.decode(message.value);
  },
  toProto(message: EventAnchor): Uint8Array {
    return EventAnchor.encode(message).finish();
  },
  toProtoMsg(message: EventAnchor): EventAnchorProtoMsg {
    return {
      typeUrl: "/regen.data.v1.EventAnchor",
      value: EventAnchor.encode(message).finish()
    };
  }
};
function createBaseEventAttest(): EventAttest {
  return {
    iri: "",
    attestor: ""
  };
}
export const EventAttest = {
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
      iri: isSet(object.iri) ? String(object.iri) : "",
      attestor: isSet(object.attestor) ? String(object.attestor) : ""
    };
  },
  toJSON(message: EventAttest): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.attestor !== undefined && (obj.attestor = message.attestor);
    return obj;
  },
  fromPartial(object: Partial<EventAttest>): EventAttest {
    const message = createBaseEventAttest();
    message.iri = object.iri ?? "";
    message.attestor = object.attestor ?? "";
    return message;
  },
  fromAmino(object: EventAttestAmino): EventAttest {
    return {
      iri: object.iri,
      attestor: object.attestor
    };
  },
  toAmino(message: EventAttest): EventAttestAmino {
    const obj: any = {};
    obj.iri = message.iri;
    obj.attestor = message.attestor;
    return obj;
  },
  fromAminoMsg(object: EventAttestAminoMsg): EventAttest {
    return EventAttest.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAttestProtoMsg): EventAttest {
    return EventAttest.decode(message.value);
  },
  toProto(message: EventAttest): Uint8Array {
    return EventAttest.encode(message).finish();
  },
  toProtoMsg(message: EventAttest): EventAttestProtoMsg {
    return {
      typeUrl: "/regen.data.v1.EventAttest",
      value: EventAttest.encode(message).finish()
    };
  }
};
function createBaseEventDefineResolver(): EventDefineResolver {
  return {
    id: Long.UZERO
  };
}
export const EventDefineResolver = {
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
          message.id = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventDefineResolver {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  toJSON(message: EventDefineResolver): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<EventDefineResolver>): EventDefineResolver {
    const message = createBaseEventDefineResolver();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
  fromAmino(object: EventDefineResolverAmino): EventDefineResolver {
    return {
      id: Long.fromString(object.id)
    };
  },
  toAmino(message: EventDefineResolver): EventDefineResolverAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventDefineResolverAminoMsg): EventDefineResolver {
    return EventDefineResolver.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDefineResolverProtoMsg): EventDefineResolver {
    return EventDefineResolver.decode(message.value);
  },
  toProto(message: EventDefineResolver): Uint8Array {
    return EventDefineResolver.encode(message).finish();
  },
  toProtoMsg(message: EventDefineResolver): EventDefineResolverProtoMsg {
    return {
      typeUrl: "/regen.data.v1.EventDefineResolver",
      value: EventDefineResolver.encode(message).finish()
    };
  }
};
function createBaseEventRegisterResolver(): EventRegisterResolver {
  return {
    id: Long.UZERO,
    iri: ""
  };
}
export const EventRegisterResolver = {
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
          message.id = (reader.uint64() as Long);
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      iri: isSet(object.iri) ? String(object.iri) : ""
    };
  },
  toJSON(message: EventRegisterResolver): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },
  fromPartial(object: Partial<EventRegisterResolver>): EventRegisterResolver {
    const message = createBaseEventRegisterResolver();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.iri = object.iri ?? "";
    return message;
  },
  fromAmino(object: EventRegisterResolverAmino): EventRegisterResolver {
    return {
      id: Long.fromString(object.id),
      iri: object.iri
    };
  },
  toAmino(message: EventRegisterResolver): EventRegisterResolverAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.iri = message.iri;
    return obj;
  },
  fromAminoMsg(object: EventRegisterResolverAminoMsg): EventRegisterResolver {
    return EventRegisterResolver.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRegisterResolverProtoMsg): EventRegisterResolver {
    return EventRegisterResolver.decode(message.value);
  },
  toProto(message: EventRegisterResolver): Uint8Array {
    return EventRegisterResolver.encode(message).finish();
  },
  toProtoMsg(message: EventRegisterResolver): EventRegisterResolverProtoMsg {
    return {
      typeUrl: "/regen.data.v1.EventRegisterResolver",
      value: EventRegisterResolver.encode(message).finish()
    };
  }
};