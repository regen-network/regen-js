/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'regen.data.v1alpha1';

/** QueryByCidRequest is the Query/ByCid request type. */
export interface QueryByCidRequest {
  $type: 'regen.data.v1alpha1.QueryByCidRequest';
  /**
   * cid is a Content Identifier for the data corresponding to the IPFS CID
   * specification: https://github.com/multiformats/cid.
   */
  cid: Uint8Array;
}

/** QueryByCidRequest is the Query/ByCid response type. */
export interface QueryByCidResponse {
  $type: 'regen.data.v1alpha1.QueryByCidResponse';
  /** timestamp is the timestamp of the block at which the data was anchored. */
  timestamp?: Date;
  /** signers are the addresses of the accounts which have signed the data. */
  signers: string[];
  /** content is the content of the data, if it was stored on-chain. */
  content: Uint8Array;
}

function createBaseQueryByCidRequest(): QueryByCidRequest {
  return {
    $type: 'regen.data.v1alpha1.QueryByCidRequest',
    cid: new Uint8Array(),
  };
}

export const QueryByCidRequest = {
  $type: 'regen.data.v1alpha1.QueryByCidRequest' as const,

  encode(
    message: QueryByCidRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cid.length !== 0) {
      writer.uint32(10).bytes(message.cid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByCidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByCidRequest();
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

  fromJSON(object: any): QueryByCidRequest {
    return {
      $type: QueryByCidRequest.$type,
      cid: isSet(object.cid) ? bytesFromBase64(object.cid) : new Uint8Array(),
    };
  },

  toJSON(message: QueryByCidRequest): unknown {
    const obj: any = {};
    message.cid !== undefined &&
      (obj.cid = base64FromBytes(
        message.cid !== undefined ? message.cid : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryByCidRequest>, I>>(
    object: I,
  ): QueryByCidRequest {
    const message = createBaseQueryByCidRequest();
    message.cid = object.cid ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(QueryByCidRequest.$type, QueryByCidRequest);

function createBaseQueryByCidResponse(): QueryByCidResponse {
  return {
    $type: 'regen.data.v1alpha1.QueryByCidResponse',
    timestamp: undefined,
    signers: [],
    content: new Uint8Array(),
  };
}

export const QueryByCidResponse = {
  $type: 'regen.data.v1alpha1.QueryByCidResponse' as const,

  encode(
    message: QueryByCidResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(10).fork(),
      ).ldelim();
    }
    for (const v of message.signers) {
      writer.uint32(18).string(v!);
    }
    if (message.content.length !== 0) {
      writer.uint32(26).bytes(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByCidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByCidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.signers.push(reader.string());
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

  fromJSON(object: any): QueryByCidResponse {
    return {
      $type: QueryByCidResponse.$type,
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
      signers: Array.isArray(object?.signers)
        ? object.signers.map((e: any) => String(e))
        : [],
      content: isSet(object.content)
        ? bytesFromBase64(object.content)
        : new Uint8Array(),
    };
  },

  toJSON(message: QueryByCidResponse): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }
    message.content !== undefined &&
      (obj.content = base64FromBytes(
        message.content !== undefined ? message.content : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryByCidResponse>, I>>(
    object: I,
  ): QueryByCidResponse {
    const message = createBaseQueryByCidResponse();
    message.timestamp = object.timestamp ?? undefined;
    message.signers = object.signers?.map(e => e) || [];
    message.content = object.content ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(QueryByCidResponse.$type, QueryByCidResponse);

/** Query is the regen.data.v1alpha1 Query service */
export interface Query {
  /** ByCid queries data based on its CID. */
  ByCid(request: QueryByCidRequest): Promise<QueryByCidResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ByCid = this.ByCid.bind(this);
  }
  ByCid(request: QueryByCidRequest): Promise<QueryByCidResponse> {
    const data = QueryByCidRequest.encode(request).finish();
    const promise = this.rpc.request(
      'regen.data.v1alpha1.Query',
      'ByCid',
      data,
    );
    return promise.then(data =>
      QueryByCidResponse.decode(new _m0.Reader(data)),
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
