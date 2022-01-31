/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'regen.data.v1alpha1';

/** EventAnchorData is an event emitted when data is anchored on-chain. */
export interface EventAnchorData {
  $type: 'regen.data.v1alpha1.EventAnchorData';
  /**
   * cid is a Content Identifier for the data corresponding to the IPFS CID
   * specification: https://github.com/multiformats/cid.
   */
  cid: Uint8Array;
}

/** EventAnchorData is an event emitted when data is signed on-chain. */
export interface EventSignData {
  $type: 'regen.data.v1alpha1.EventSignData';
  /**
   * cid is a Content Identifier for the data corresponding to the IPFS CID
   * specification: https://github.com/multiformats/cid.
   */
  cid: Uint8Array;
  /** signers are the addresses of the accounts which have signed the data. */
  signers: string[];
}

/** EventAnchorData is an event emitted when data is stored on-chain. */
export interface EventStoreData {
  $type: 'regen.data.v1alpha1.EventStoreData';
  /**
   * cid is a Content Identifier for the data corresponding to the IPFS CID
   * specification: https://github.com/multiformats/cid.
   */
  cid: Uint8Array;
}

function createBaseEventAnchorData(): EventAnchorData {
  return {
    $type: 'regen.data.v1alpha1.EventAnchorData',
    cid: new Uint8Array(),
  };
}

export const EventAnchorData = {
  $type: 'regen.data.v1alpha1.EventAnchorData' as const,

  encode(
    message: EventAnchorData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cid.length !== 0) {
      writer.uint32(10).bytes(message.cid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAnchorData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAnchorData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cid = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventAnchorData {
    return {
      $type: EventAnchorData.$type,
      cid: isSet(object.cid) ? bytesFromBase64(object.cid) : new Uint8Array(),
    };
  },

  toJSON(message: EventAnchorData): unknown {
    const obj: any = {};
    message.cid !== undefined &&
      (obj.cid = base64FromBytes(
        message.cid !== undefined ? message.cid : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventAnchorData>, I>>(
    object: I,
  ): EventAnchorData {
    const message = createBaseEventAnchorData();
    message.cid = object.cid ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(EventAnchorData.$type, EventAnchorData);

function createBaseEventSignData(): EventSignData {
  return {
    $type: 'regen.data.v1alpha1.EventSignData',
    cid: new Uint8Array(),
    signers: [],
  };
}

export const EventSignData = {
  $type: 'regen.data.v1alpha1.EventSignData' as const,

  encode(
    message: EventSignData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cid.length !== 0) {
      writer.uint32(10).bytes(message.cid);
    }
    for (const v of message.signers) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSignData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSignData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cid = reader.bytes();
          break;
        case 2:
          message.signers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSignData {
    return {
      $type: EventSignData.$type,
      cid: isSet(object.cid) ? bytesFromBase64(object.cid) : new Uint8Array(),
      signers: Array.isArray(object?.signers)
        ? object.signers.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: EventSignData): unknown {
    const obj: any = {};
    message.cid !== undefined &&
      (obj.cid = base64FromBytes(
        message.cid !== undefined ? message.cid : new Uint8Array(),
      ));
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSignData>, I>>(
    object: I,
  ): EventSignData {
    const message = createBaseEventSignData();
    message.cid = object.cid ?? new Uint8Array();
    message.signers = object.signers?.map(e => e) || [];
    return message;
  },
};

messageTypeRegistry.set(EventSignData.$type, EventSignData);

function createBaseEventStoreData(): EventStoreData {
  return { $type: 'regen.data.v1alpha1.EventStoreData', cid: new Uint8Array() };
}

export const EventStoreData = {
  $type: 'regen.data.v1alpha1.EventStoreData' as const,

  encode(
    message: EventStoreData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cid.length !== 0) {
      writer.uint32(10).bytes(message.cid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventStoreData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventStoreData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cid = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventStoreData {
    return {
      $type: EventStoreData.$type,
      cid: isSet(object.cid) ? bytesFromBase64(object.cid) : new Uint8Array(),
    };
  },

  toJSON(message: EventStoreData): unknown {
    const obj: any = {};
    message.cid !== undefined &&
      (obj.cid = base64FromBytes(
        message.cid !== undefined ? message.cid : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventStoreData>, I>>(
    object: I,
  ): EventStoreData {
    const message = createBaseEventStoreData();
    message.cid = object.cid ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(EventStoreData.$type, EventStoreData);

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
