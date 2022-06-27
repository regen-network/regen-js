/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'regen.data.v1';

/** DataID stores a compact data ID and its full IRI. */
export interface DataID {
  $type: 'regen.data.v1.DataID';
  /** id is the compact automatically-generated data ID. */
  id: Uint8Array;
  /** iri is the IRI of the data which contains its full ContentHash. */
  iri: string;
}

/** DataAnchor stores the anchor timestamp for a data object. */
export interface DataAnchor {
  $type: 'regen.data.v1.DataAnchor';
  /** id is the compact data ID. */
  id: Uint8Array;
  /**
   * timestamp is the anchor timestamp for this object - the time at which
   * it was first known to the blockchain.
   */
  timestamp?: Date;
}

/** DataAttestor is a join table for associating data IDs and attestors. */
export interface DataAttestor {
  $type: 'regen.data.v1.DataAttestor';
  /** id is the compact data ID. */
  id: Uint8Array;
  /** attestor is the account address of the attestor. */
  attestor: Uint8Array;
  /** timestamp is the time at which the attestor signed this data object. */
  timestamp?: Date;
}

/** Resolver describes a data resolver. */
export interface Resolver {
  $type: 'regen.data.v1.Resolver';
  /** id is the ID of the resolver. */
  id: Long;
  /** url is the URL of the resolver. */
  url: string;
  /**
   * manager is the bytes address of the resolver manager who is allowed
   * to make calls to Msg/RegisterResolver for this resolver.
   */
  manager: Uint8Array;
}

/**
 * DataResolver is a join table between data objects and resolvers and indicates
 * that a resolver claims to be able to resolve this data object.
 */
export interface DataResolver {
  $type: 'regen.data.v1.DataResolver';
  /** id is the compact data ID. */
  id: Uint8Array;
  /** resolver_id is the ID of the resolver. */
  resolverId: Long;
}

function createBaseDataID(): DataID {
  return { $type: 'regen.data.v1.DataID', id: new Uint8Array(), iri: '' };
}

export const DataID = {
  $type: 'regen.data.v1.DataID' as const,

  encode(
    message: DataID,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.iri !== '') {
      writer.uint32(18).string(message.iri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
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

  fromJSON(object: any): DataID {
    return {
      $type: DataID.$type,
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      iri: isSet(object.iri) ? String(object.iri) : '',
    };
  },

  toJSON(message: DataID): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = base64FromBytes(
        message.id !== undefined ? message.id : new Uint8Array(),
      ));
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DataID>, I>>(object: I): DataID {
    const message = createBaseDataID();
    message.id = object.id ?? new Uint8Array();
    message.iri = object.iri ?? '';
    return message;
  },
};

messageTypeRegistry.set(DataID.$type, DataID);

function createBaseDataAnchor(): DataAnchor {
  return {
    $type: 'regen.data.v1.DataAnchor',
    id: new Uint8Array(),
    timestamp: undefined,
  };
}

export const DataAnchor = {
  $type: 'regen.data.v1.DataAnchor' as const,

  encode(
    message: DataAnchor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataAnchor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataAnchor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        case 2:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataAnchor {
    return {
      $type: DataAnchor.$type,
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
    };
  },

  toJSON(message: DataAnchor): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = base64FromBytes(
        message.id !== undefined ? message.id : new Uint8Array(),
      ));
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DataAnchor>, I>>(
    object: I,
  ): DataAnchor {
    const message = createBaseDataAnchor();
    message.id = object.id ?? new Uint8Array();
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(DataAnchor.$type, DataAnchor);

function createBaseDataAttestor(): DataAttestor {
  return {
    $type: 'regen.data.v1.DataAttestor',
    id: new Uint8Array(),
    attestor: new Uint8Array(),
    timestamp: undefined,
  };
}

export const DataAttestor = {
  $type: 'regen.data.v1.DataAttestor' as const,

  encode(
    message: DataAttestor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.attestor.length !== 0) {
      writer.uint32(18).bytes(message.attestor);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataAttestor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataAttestor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        case 2:
          message.attestor = reader.bytes();
          break;
        case 3:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataAttestor {
    return {
      $type: DataAttestor.$type,
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      attestor: isSet(object.attestor)
        ? bytesFromBase64(object.attestor)
        : new Uint8Array(),
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
    };
  },

  toJSON(message: DataAttestor): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = base64FromBytes(
        message.id !== undefined ? message.id : new Uint8Array(),
      ));
    message.attestor !== undefined &&
      (obj.attestor = base64FromBytes(
        message.attestor !== undefined ? message.attestor : new Uint8Array(),
      ));
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DataAttestor>, I>>(
    object: I,
  ): DataAttestor {
    const message = createBaseDataAttestor();
    message.id = object.id ?? new Uint8Array();
    message.attestor = object.attestor ?? new Uint8Array();
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(DataAttestor.$type, DataAttestor);

function createBaseResolver(): Resolver {
  return {
    $type: 'regen.data.v1.Resolver',
    id: Long.UZERO,
    url: '',
    manager: new Uint8Array(),
  };
}

export const Resolver = {
  $type: 'regen.data.v1.Resolver' as const,

  encode(
    message: Resolver,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.url !== '') {
      writer.uint32(18).string(message.url);
    }
    if (message.manager.length !== 0) {
      writer.uint32(26).bytes(message.manager);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resolver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.manager = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resolver {
    return {
      $type: Resolver.$type,
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      url: isSet(object.url) ? String(object.url) : '',
      manager: isSet(object.manager)
        ? bytesFromBase64(object.manager)
        : new Uint8Array(),
    };
  },

  toJSON(message: Resolver): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.url !== undefined && (obj.url = message.url);
    message.manager !== undefined &&
      (obj.manager = base64FromBytes(
        message.manager !== undefined ? message.manager : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Resolver>, I>>(object: I): Resolver {
    const message = createBaseResolver();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.url = object.url ?? '';
    message.manager = object.manager ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(Resolver.$type, Resolver);

function createBaseDataResolver(): DataResolver {
  return {
    $type: 'regen.data.v1.DataResolver',
    id: new Uint8Array(),
    resolverId: Long.UZERO,
  };
}

export const DataResolver = {
  $type: 'regen.data.v1.DataResolver' as const,

  encode(
    message: DataResolver,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (!message.resolverId.isZero()) {
      writer.uint32(16).uint64(message.resolverId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataResolver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataResolver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        case 2:
          message.resolverId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataResolver {
    return {
      $type: DataResolver.$type,
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      resolverId: isSet(object.resolverId)
        ? Long.fromString(object.resolverId)
        : Long.UZERO,
    };
  },

  toJSON(message: DataResolver): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = base64FromBytes(
        message.id !== undefined ? message.id : new Uint8Array(),
      ));
    message.resolverId !== undefined &&
      (obj.resolverId = (message.resolverId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DataResolver>, I>>(
    object: I,
  ): DataResolver {
    const message = createBaseDataResolver();
    message.id = object.id ?? new Uint8Array();
    message.resolverId =
      object.resolverId !== undefined && object.resolverId !== null
        ? Long.fromValue(object.resolverId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(DataResolver.$type, DataResolver);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  (b64 => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  (bin => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(''));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | '$type'>,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === 'string') {
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
