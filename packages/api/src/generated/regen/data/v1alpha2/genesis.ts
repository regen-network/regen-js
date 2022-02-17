/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { ContentHash, SignerEntry } from '../../../regen/data/v1alpha2/types';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'regen.data.v1alpha2';

/** GenesisState is the genesis state */
export interface GenesisState {
  $type: 'regen.data.v1alpha2.GenesisState';
  /** entries are the content entries */
  entries: GenesisContentEntry[];
}

/** GenesisContentEntry is a genesis content entry */
export interface GenesisContentEntry {
  $type: 'regen.data.v1alpha2.GenesisContentEntry';
  /** hash is the ContentHash */
  hash?: ContentHash;
  /** timestamp is the anchor Timestamp */
  timestamp?: Date;
  /** signers are the signers, if any */
  signers: SignerEntry[];
}

function createBaseGenesisState(): GenesisState {
  return { $type: 'regen.data.v1alpha2.GenesisState', entries: [] };
}

export const GenesisState = {
  $type: 'regen.data.v1alpha2.GenesisState' as const,

  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.entries) {
      GenesisContentEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(
            GenesisContentEntry.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      $type: GenesisState.$type,
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => GenesisContentEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e =>
        e ? GenesisContentEntry.toJSON(e) : undefined,
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I,
  ): GenesisState {
    const message = createBaseGenesisState();
    message.entries =
      object.entries?.map(e => GenesisContentEntry.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GenesisState.$type, GenesisState);

function createBaseGenesisContentEntry(): GenesisContentEntry {
  return {
    $type: 'regen.data.v1alpha2.GenesisContentEntry',
    hash: undefined,
    timestamp: undefined,
    signers: [],
  };
}

export const GenesisContentEntry = {
  $type: 'regen.data.v1alpha2.GenesisContentEntry' as const,

  encode(
    message: GenesisContentEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.hash !== undefined) {
      ContentHash.encode(message.hash, writer.uint32(10).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    for (const v of message.signers) {
      SignerEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisContentEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisContentEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = ContentHash.decode(reader, reader.uint32());
          break;
        case 2:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.signers.push(SignerEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisContentEntry {
    return {
      $type: GenesisContentEntry.$type,
      hash: isSet(object.hash) ? ContentHash.fromJSON(object.hash) : undefined,
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
      signers: Array.isArray(object?.signers)
        ? object.signers.map((e: any) => SignerEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisContentEntry): unknown {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = message.hash ? ContentHash.toJSON(message.hash) : undefined);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    if (message.signers) {
      obj.signers = message.signers.map(e =>
        e ? SignerEntry.toJSON(e) : undefined,
      );
    } else {
      obj.signers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisContentEntry>, I>>(
    object: I,
  ): GenesisContentEntry {
    const message = createBaseGenesisContentEntry();
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? ContentHash.fromPartial(object.hash)
        : undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.signers =
      object.signers?.map(e => SignerEntry.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GenesisContentEntry.$type, GenesisContentEntry);

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
