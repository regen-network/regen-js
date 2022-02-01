/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  ContentHash,
  ContentHash_Graph,
} from '../../../regen/data/v1alpha2/types';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'regen.data.v1alpha2';

/** MsgAnchorData is the Msg/AnchorData request type. */
export interface MsgAnchorData {
  $type: 'regen.data.v1alpha2.MsgAnchorData';
  /**
   * sender is the address of the sender of the transaction.
   * The sender in StoreData is not attesting to the veracity of the underlying
   * data. They can simply be a intermediary providing services.
   */
  sender: string;
  /** hash is the hash-based identifier for the anchored content. */
  hash?: ContentHash;
}

/** MsgAnchorData is the Msg/AnchorData response type. */
export interface MsgAnchorDataResponse {
  $type: 'regen.data.v1alpha2.MsgAnchorDataResponse';
  /** timestamp is the timestamp of the block at which the data was anchored. */
  timestamp?: Date;
  /** iri is the IRI of the data that was anchored. */
  iri: string;
}

/** MsgSignData is the Msg/SignData request type. */
export interface MsgSignData {
  $type: 'regen.data.v1alpha2.MsgSignData';
  /**
   * signers are the addresses of the accounts signing the data.
   * By making a SignData request, the signers are attesting to the veracity
   * of the data referenced by the cid. The precise meaning of this may vary
   * depending on the underlying data.
   */
  signers: string[];
  /**
   * hash is the hash-based identifier for the anchored content. Only RDF graph
   * data can be signed as its data model is intended to specifically convey semantic meaning.
   */
  hash?: ContentHash_Graph;
}

/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgSignDataResponse {
  $type: 'regen.data.v1alpha2.MsgSignDataResponse';
}

function createBaseMsgAnchorData(): MsgAnchorData {
  return {
    $type: 'regen.data.v1alpha2.MsgAnchorData',
    sender: '',
    hash: undefined,
  };
}

export const MsgAnchorData = {
  $type: 'regen.data.v1alpha2.MsgAnchorData' as const,

  encode(
    message: MsgAnchorData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (message.hash !== undefined) {
      ContentHash.encode(message.hash, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAnchorData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnchorData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.hash = ContentHash.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAnchorData {
    return {
      $type: MsgAnchorData.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      hash: isSet(object.hash) ? ContentHash.fromJSON(object.hash) : undefined,
    };
  },

  toJSON(message: MsgAnchorData): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.hash !== undefined &&
      (obj.hash = message.hash ? ContentHash.toJSON(message.hash) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAnchorData>, I>>(
    object: I,
  ): MsgAnchorData {
    const message = createBaseMsgAnchorData();
    message.sender = object.sender ?? '';
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? ContentHash.fromPartial(object.hash)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgAnchorData.$type, MsgAnchorData);

function createBaseMsgAnchorDataResponse(): MsgAnchorDataResponse {
  return {
    $type: 'regen.data.v1alpha2.MsgAnchorDataResponse',
    timestamp: undefined,
    iri: '',
  };
}

export const MsgAnchorDataResponse = {
  $type: 'regen.data.v1alpha2.MsgAnchorDataResponse' as const,

  encode(
    message: MsgAnchorDataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.iri !== '') {
      writer.uint32(18).string(message.iri);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgAnchorDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnchorDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
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

  fromJSON(object: any): MsgAnchorDataResponse {
    return {
      $type: MsgAnchorDataResponse.$type,
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
      iri: isSet(object.iri) ? String(object.iri) : '',
    };
  },

  toJSON(message: MsgAnchorDataResponse): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAnchorDataResponse>, I>>(
    object: I,
  ): MsgAnchorDataResponse {
    const message = createBaseMsgAnchorDataResponse();
    message.timestamp = object.timestamp ?? undefined;
    message.iri = object.iri ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgAnchorDataResponse.$type, MsgAnchorDataResponse);

function createBaseMsgSignData(): MsgSignData {
  return {
    $type: 'regen.data.v1alpha2.MsgSignData',
    signers: [],
    hash: undefined,
  };
}

export const MsgSignData = {
  $type: 'regen.data.v1alpha2.MsgSignData' as const,

  encode(
    message: MsgSignData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.signers) {
      writer.uint32(10).string(v!);
    }
    if (message.hash !== undefined) {
      ContentHash_Graph.encode(message.hash, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signers.push(reader.string());
          break;
        case 2:
          message.hash = ContentHash_Graph.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSignData {
    return {
      $type: MsgSignData.$type,
      signers: Array.isArray(object?.signers)
        ? object.signers.map((e: any) => String(e))
        : [],
      hash: isSet(object.hash)
        ? ContentHash_Graph.fromJSON(object.hash)
        : undefined,
    };
  },

  toJSON(message: MsgSignData): unknown {
    const obj: any = {};
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }
    message.hash !== undefined &&
      (obj.hash = message.hash
        ? ContentHash_Graph.toJSON(message.hash)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignData>, I>>(
    object: I,
  ): MsgSignData {
    const message = createBaseMsgSignData();
    message.signers = object.signers?.map(e => e) || [];
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? ContentHash_Graph.fromPartial(object.hash)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgSignData.$type, MsgSignData);

function createBaseMsgSignDataResponse(): MsgSignDataResponse {
  return { $type: 'regen.data.v1alpha2.MsgSignDataResponse' };
}

export const MsgSignDataResponse = {
  $type: 'regen.data.v1alpha2.MsgSignDataResponse' as const,

  encode(
    _: MsgSignDataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignDataResponse();
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

  fromJSON(_: any): MsgSignDataResponse {
    return {
      $type: MsgSignDataResponse.$type,
    };
  },

  toJSON(_: MsgSignDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignDataResponse>, I>>(
    _: I,
  ): MsgSignDataResponse {
    const message = createBaseMsgSignDataResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgSignDataResponse.$type, MsgSignDataResponse);

/** Msg is the regen.data.v1alpha1 Msg service */
export interface Msg {
  /**
   * AnchorData "anchors" a piece of data to the blockchain based on its secure
   * hash, effectively providing a tamper resistant timestamp.
   *
   * The sender in AnchorData is not attesting to the veracity of the underlying
   * data. They can simply be a intermediary providing timestamp services.
   * SignData should be used to create a digital signature attesting to the
   * veracity of some piece of data.
   */
  AnchorData(request: MsgAnchorData): Promise<MsgAnchorDataResponse>;
  /**
   * SignData allows for signing of an arbitrary piece of data on the
   * blockchain. By "signing" data the signers are making a statement about the
   * veracity of the data itself. It is like signing a legal document, meaning
   * that I agree to all conditions and to the best of my knowledge everything
   * is true. When anchoring data, the sender is not attesting to the veracity
   * of the data, they are simply communicating that it exists.
   *
   * On-chain signatures have the following benefits:
   * - on-chain identities can be managed using different cryptographic keys
   *   that change over time through key rotation practices
   * - an on-chain identity may represent an organization and through delegation
   *   individual members may sign on behalf of the group
   * - the blockchain transaction envelope provides built-in replay protection
   *   and timestamping
   *
   * SignData implicitly calls AnchorData if the data was not already anchored.
   *
   * SignData can be called multiple times for the same content hash with different
   * signers and those signers will be appended to the list of signers.
   */
  SignData(request: MsgSignData): Promise<MsgSignDataResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AnchorData = this.AnchorData.bind(this);
    this.SignData = this.SignData.bind(this);
  }
  AnchorData(request: MsgAnchorData): Promise<MsgAnchorDataResponse> {
    const data = MsgAnchorData.encode(request).finish();
    const promise = this.rpc.request(
      'regen.data.v1alpha2.Msg',
      'AnchorData',
      data,
    );
    return promise.then(data =>
      MsgAnchorDataResponse.decode(new _m0.Reader(data)),
    );
  }

  SignData(request: MsgSignData): Promise<MsgSignDataResponse> {
    const data = MsgSignData.encode(request).finish();
    const promise = this.rpc.request(
      'regen.data.v1alpha2.Msg',
      'SignData',
      data,
    );
    return promise.then(data =>
      MsgSignDataResponse.decode(new _m0.Reader(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
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
