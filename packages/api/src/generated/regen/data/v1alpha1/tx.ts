/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'regen.data.v1alpha1';

/** MsgAnchorDataRequest is the Msg/AnchorData request type. */
export interface MsgAnchorDataRequest {
  $type: 'regen.data.v1alpha1.MsgAnchorDataRequest';
  /**
   * sender is the address of the sender of the transaction.
   * The sender in StoreData is not attesting to the veracity of the underlying data.
   * They can simply be a intermediary providing services.
   */
  sender: string;
  /**
   * cid is a Content Identifier for the data corresponding to the IPFS CID
   * specification: https://github.com/multiformats/cid.
   */
  cid: Uint8Array;
}

/** MsgAnchorDataRequest is the Msg/AnchorData response type. */
export interface MsgAnchorDataResponse {
  $type: 'regen.data.v1alpha1.MsgAnchorDataResponse';
  /** timestamp is the timestamp of the block at which the data was anchored. */
  timestamp?: Date;
}

/** MsgSignDataRequest is the Msg/SignData request type. */
export interface MsgSignDataRequest {
  $type: 'regen.data.v1alpha1.MsgSignDataRequest';
  /**
   * signers are the addresses of the accounts signing the data.
   * By making a SignData request, the signers are attesting to the veracity
   * of the data referenced by the cid. The precise meaning of this may vary
   * depending on the underlying data.
   */
  signers: string[];
  /**
   * cid is a Content Identifier for the data corresponding to the IPFS CID
   * specification: https://github.com/multiformats/cid.
   */
  cid: Uint8Array;
}

/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgSignDataResponse {
  $type: 'regen.data.v1alpha1.MsgSignDataResponse';
}

/** MsgStoreDataRequest is the Msg/StoreData request type. */
export interface MsgStoreDataRequest {
  $type: 'regen.data.v1alpha1.MsgStoreDataRequest';
  /**
   * sender is the address of the sender of the transaction.
   * The sender in StoreData is not attesting to the veracity of the underlying data.
   * They can simply be a intermediary providing services.
   */
  sender: string;
  /**
   * cid is a Content Identifier for the data corresponding to the IPFS CID
   * specification: https://github.com/multiformats/cid.
   */
  cid: Uint8Array;
  /**
   * content is the content of the data corresponding to the provided CID.
   *
   * Currently only data for CID's using sha2-256 and blake2b-256 hash algorithms
   * can be stored on-chain.
   */
  content: Uint8Array;
}

/** MsgStoreDataRequest is the Msg/StoreData response type. */
export interface MsgStoreDataResponse {
  $type: 'regen.data.v1alpha1.MsgStoreDataResponse';
}

function createBaseMsgAnchorDataRequest(): MsgAnchorDataRequest {
  return {
    $type: 'regen.data.v1alpha1.MsgAnchorDataRequest',
    sender: '',
    cid: new Uint8Array(),
  };
}

export const MsgAnchorDataRequest = {
  $type: 'regen.data.v1alpha1.MsgAnchorDataRequest' as const,

  encode(
    message: MsgAnchorDataRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (message.cid.length !== 0) {
      writer.uint32(18).bytes(message.cid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgAnchorDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnchorDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.cid = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAnchorDataRequest {
    return {
      $type: MsgAnchorDataRequest.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      cid: isSet(object.cid) ? bytesFromBase64(object.cid) : new Uint8Array(),
    };
  },

  toJSON(message: MsgAnchorDataRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.cid !== undefined &&
      (obj.cid = base64FromBytes(
        message.cid !== undefined ? message.cid : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAnchorDataRequest>, I>>(
    object: I,
  ): MsgAnchorDataRequest {
    const message = createBaseMsgAnchorDataRequest();
    message.sender = object.sender ?? '';
    message.cid = object.cid ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(MsgAnchorDataRequest.$type, MsgAnchorDataRequest);

function createBaseMsgAnchorDataResponse(): MsgAnchorDataResponse {
  return {
    $type: 'regen.data.v1alpha1.MsgAnchorDataResponse',
    timestamp: undefined,
  };
}

export const MsgAnchorDataResponse = {
  $type: 'regen.data.v1alpha1.MsgAnchorDataResponse' as const,

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
    };
  },

  toJSON(message: MsgAnchorDataResponse): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAnchorDataResponse>, I>>(
    object: I,
  ): MsgAnchorDataResponse {
    const message = createBaseMsgAnchorDataResponse();
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgAnchorDataResponse.$type, MsgAnchorDataResponse);

function createBaseMsgSignDataRequest(): MsgSignDataRequest {
  return {
    $type: 'regen.data.v1alpha1.MsgSignDataRequest',
    signers: [],
    cid: new Uint8Array(),
  };
}

export const MsgSignDataRequest = {
  $type: 'regen.data.v1alpha1.MsgSignDataRequest' as const,

  encode(
    message: MsgSignDataRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.signers) {
      writer.uint32(10).string(v!);
    }
    if (message.cid.length !== 0) {
      writer.uint32(18).bytes(message.cid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signers.push(reader.string());
          break;
        case 2:
          message.cid = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSignDataRequest {
    return {
      $type: MsgSignDataRequest.$type,
      signers: Array.isArray(object?.signers)
        ? object.signers.map((e: any) => String(e))
        : [],
      cid: isSet(object.cid) ? bytesFromBase64(object.cid) : new Uint8Array(),
    };
  },

  toJSON(message: MsgSignDataRequest): unknown {
    const obj: any = {};
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }
    message.cid !== undefined &&
      (obj.cid = base64FromBytes(
        message.cid !== undefined ? message.cid : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignDataRequest>, I>>(
    object: I,
  ): MsgSignDataRequest {
    const message = createBaseMsgSignDataRequest();
    message.signers = object.signers?.map(e => e) || [];
    message.cid = object.cid ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(MsgSignDataRequest.$type, MsgSignDataRequest);

function createBaseMsgSignDataResponse(): MsgSignDataResponse {
  return { $type: 'regen.data.v1alpha1.MsgSignDataResponse' };
}

export const MsgSignDataResponse = {
  $type: 'regen.data.v1alpha1.MsgSignDataResponse' as const,

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

function createBaseMsgStoreDataRequest(): MsgStoreDataRequest {
  return {
    $type: 'regen.data.v1alpha1.MsgStoreDataRequest',
    sender: '',
    cid: new Uint8Array(),
    content: new Uint8Array(),
  };
}

export const MsgStoreDataRequest = {
  $type: 'regen.data.v1alpha1.MsgStoreDataRequest' as const,

  encode(
    message: MsgStoreDataRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (message.cid.length !== 0) {
      writer.uint32(18).bytes(message.cid);
    }
    if (message.content.length !== 0) {
      writer.uint32(26).bytes(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.cid = reader.bytes();
          break;
        case 3:
          message.content = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStoreDataRequest {
    return {
      $type: MsgStoreDataRequest.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      cid: isSet(object.cid) ? bytesFromBase64(object.cid) : new Uint8Array(),
      content: isSet(object.content)
        ? bytesFromBase64(object.content)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgStoreDataRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.cid !== undefined &&
      (obj.cid = base64FromBytes(
        message.cid !== undefined ? message.cid : new Uint8Array(),
      ));
    message.content !== undefined &&
      (obj.content = base64FromBytes(
        message.content !== undefined ? message.content : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStoreDataRequest>, I>>(
    object: I,
  ): MsgStoreDataRequest {
    const message = createBaseMsgStoreDataRequest();
    message.sender = object.sender ?? '';
    message.cid = object.cid ?? new Uint8Array();
    message.content = object.content ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(MsgStoreDataRequest.$type, MsgStoreDataRequest);

function createBaseMsgStoreDataResponse(): MsgStoreDataResponse {
  return { $type: 'regen.data.v1alpha1.MsgStoreDataResponse' };
}

export const MsgStoreDataResponse = {
  $type: 'regen.data.v1alpha1.MsgStoreDataResponse' as const,

  encode(
    _: MsgStoreDataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgStoreDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreDataResponse();
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

  fromJSON(_: any): MsgStoreDataResponse {
    return {
      $type: MsgStoreDataResponse.$type,
    };
  },

  toJSON(_: MsgStoreDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStoreDataResponse>, I>>(
    _: I,
  ): MsgStoreDataResponse {
    const message = createBaseMsgStoreDataResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgStoreDataResponse.$type, MsgStoreDataResponse);

/** Msg is the regen.data.v1alpha1 Msg service */
export interface Msg {
  /**
   * AnchorData "anchors" a piece of data to the blockchain based on its secure hash,
   * effectively providing a tamper resistant timestamp.
   *
   * The sender in AnchorData is not attesting to the veracity of the underlying data.
   * They can simply be a intermediary providing timestamp services.
   * SignData should be used to create a digital signature attesting to the veracity of some piece of data.
   */
  AnchorData(request: MsgAnchorDataRequest): Promise<MsgAnchorDataResponse>;
  /**
   * SignData allows for signing of an arbitrary piece of data on the blockchain.
   * By "signing" data the signers are making a statement about the veracity of the
   * data itself. It is like signing a legal document, meaning that I agree to all
   * conditions and to the best of my knowledge everything is true. When anchoring
   * data, the sender is not attesting to the veracity of the data, they are simply
   * communicating that it exists.
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
   * SignData can be called multiple times for the same CID with different signers
   * and those signers will be appended to the list of signers.
   */
  SignData(request: MsgSignDataRequest): Promise<MsgSignDataResponse>;
  /**
   * StoreData stores a piece of data corresponding to a CID on the blockchain.
   *
   * Currently only data for CID's using sha2-256 and blake2b-256 hash algorithms
   * can be stored on-chain.
   *
   * StoreData implicitly calls AnchorData if the data was not already anchored.
   *
   * The sender in StoreData is not attesting to the veracity of the underlying data.
   * They can simply be a intermediary providing storage services.
   * SignData should be used to create a digital signature attesting to the veracity of some piece of data.
   */
  StoreData(request: MsgStoreDataRequest): Promise<MsgStoreDataResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AnchorData = this.AnchorData.bind(this);
    this.SignData = this.SignData.bind(this);
    this.StoreData = this.StoreData.bind(this);
  }
  AnchorData(request: MsgAnchorDataRequest): Promise<MsgAnchorDataResponse> {
    const data = MsgAnchorDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      'regen.data.v1alpha1.Msg',
      'AnchorData',
      data,
    );
    return promise.then(data =>
      MsgAnchorDataResponse.decode(new _m0.Reader(data)),
    );
  }

  SignData(request: MsgSignDataRequest): Promise<MsgSignDataResponse> {
    const data = MsgSignDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      'regen.data.v1alpha1.Msg',
      'SignData',
      data,
    );
    return promise.then(data =>
      MsgSignDataResponse.decode(new _m0.Reader(data)),
    );
  }

  StoreData(request: MsgStoreDataRequest): Promise<MsgStoreDataResponse> {
    const data = MsgStoreDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      'regen.data.v1alpha1.Msg',
      'StoreData',
      data,
    );
    return promise.then(data =>
      MsgStoreDataResponse.decode(new _m0.Reader(data)),
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
