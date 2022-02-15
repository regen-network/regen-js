/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'regen.data.v1alpha2';

/** EventAnchorData is an event emitted when data is anchored on-chain. */
export interface EventAnchorData {
  $type: 'regen.data.v1alpha2.EventAnchorData';
  /** iri is the data IRI */
  iri: string;
}

/** EventSignData is an event emitted when data is signed on-chain. */
export interface EventSignData {
  $type: 'regen.data.v1alpha2.EventSignData';
  /** iri is the data IRI */
  iri: string;
  /** signers are the addresses of the accounts which have signed the data. */
  signers: string[];
}

/** EventStoreRawData is an event emitted when data is stored on-chain. */
export interface EventStoreRawData {
  $type: 'regen.data.v1alpha2.EventStoreRawData';
  /** iri is the data IRI */
  iri: string;
}

function createBaseEventAnchorData(): EventAnchorData {
  return { $type: 'regen.data.v1alpha2.EventAnchorData', iri: '' };
}

export const EventAnchorData = {
  $type: 'regen.data.v1alpha2.EventAnchorData' as const,

  encode(
    message: EventAnchorData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.iri !== '') {
      writer.uint32(10).string(message.iri);
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
          message.iri = reader.string();
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
      iri: isSet(object.iri) ? String(object.iri) : '',
    };
  },

  toJSON(message: EventAnchorData): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventAnchorData>, I>>(
    object: I,
  ): EventAnchorData {
    const message = createBaseEventAnchorData();
    message.iri = object.iri ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventAnchorData.$type, EventAnchorData);

function createBaseEventSignData(): EventSignData {
  return { $type: 'regen.data.v1alpha2.EventSignData', iri: '', signers: [] };
}

export const EventSignData = {
  $type: 'regen.data.v1alpha2.EventSignData' as const,

  encode(
    message: EventSignData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.iri !== '') {
      writer.uint32(10).string(message.iri);
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
          message.iri = reader.string();
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
      iri: isSet(object.iri) ? String(object.iri) : '',
      signers: Array.isArray(object?.signers)
        ? object.signers.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: EventSignData): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
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
    message.iri = object.iri ?? '';
    message.signers = object.signers?.map(e => e) || [];
    return message;
  },
};

messageTypeRegistry.set(EventSignData.$type, EventSignData);

function createBaseEventStoreRawData(): EventStoreRawData {
  return { $type: 'regen.data.v1alpha2.EventStoreRawData', iri: '' };
}

export const EventStoreRawData = {
  $type: 'regen.data.v1alpha2.EventStoreRawData' as const,

  encode(
    message: EventStoreRawData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.iri !== '') {
      writer.uint32(10).string(message.iri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventStoreRawData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventStoreRawData();
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

  fromJSON(object: any): EventStoreRawData {
    return {
      $type: EventStoreRawData.$type,
      iri: isSet(object.iri) ? String(object.iri) : '',
    };
  },

  toJSON(message: EventStoreRawData): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventStoreRawData>, I>>(
    object: I,
  ): EventStoreRawData {
    const message = createBaseEventStoreRawData();
    message.iri = object.iri ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventStoreRawData.$type, EventStoreRawData);

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
  : P &
      { [K in keyof P]: Exact<P[K], I[K]> } &
      Record<Exclude<keyof I, KeysOfUnion<P> | '$type'>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
