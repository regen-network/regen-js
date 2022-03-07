/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  ContentHash,
  Content,
  SignerEntry,
} from '../../../regen/data/v1alpha2/types';
import {
  PageRequest,
  PageResponse,
} from '../../../cosmos/base/query/v1beta1/pagination';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'regen.data.v1alpha2';

/** QueryByContentHashRequest is the Query/ByContentHash request type. */
export interface QueryByHashRequest {
  $type: 'regen.data.v1alpha2.QueryByHashRequest';
  /** hash is the hash-based identifier for the anchored content. */
  hash?: ContentHash;
}

/** QueryByContentHashResponse is the Query/ByContentHash response type. */
export interface QueryByHashResponse {
  $type: 'regen.data.v1alpha2.QueryByHashResponse';
  /** entry is the ContentEntry */
  entry?: ContentEntry;
}

/** QueryBySignerRequest is the Query/BySigner request type. */
export interface QueryBySignerRequest {
  $type: 'regen.data.v1alpha2.QueryBySignerRequest';
  /** signer is the address of the signer to query by. */
  signer: string;
  /** pagination is the PageRequest to use for pagination. */
  pagination?: PageRequest;
}

/** QueryBySignerResponse is the Query/BySigner response type. */
export interface QueryBySignerResponse {
  $type: 'regen.data.v1alpha2.QueryBySignerResponse';
  /** entries is the ContentEntry's signed by the queried signer */
  entries: ContentEntry[];
  /** pagination is the pagination PageResponse. */
  pagination?: PageResponse;
}

/** ContentEntry describes data referenced and possibly stored on chain */
export interface ContentEntry {
  $type: 'regen.data.v1alpha2.ContentEntry';
  /** hash is the content hash */
  hash?: ContentHash;
  /** iri is the content IRI */
  iri: string;
  /** timestamp is the anchor Timestamp */
  timestamp?: Date;
  /** signers are the signers, if any */
  signers: SignerEntry[];
  /** content is the actual content if stored on-chain */
  content?: Content;
}

function createBaseQueryByHashRequest(): QueryByHashRequest {
  return { $type: 'regen.data.v1alpha2.QueryByHashRequest', hash: undefined };
}

export const QueryByHashRequest = {
  $type: 'regen.data.v1alpha2.QueryByHashRequest' as const,

  encode(
    message: QueryByHashRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.hash !== undefined) {
      ContentHash.encode(message.hash, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = ContentHash.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryByHashRequest {
    return {
      $type: QueryByHashRequest.$type,
      hash: isSet(object.hash) ? ContentHash.fromJSON(object.hash) : undefined,
    };
  },

  toJSON(message: QueryByHashRequest): unknown {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = message.hash ? ContentHash.toJSON(message.hash) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryByHashRequest>, I>>(
    object: I,
  ): QueryByHashRequest {
    const message = createBaseQueryByHashRequest();
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? ContentHash.fromPartial(object.hash)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryByHashRequest.$type, QueryByHashRequest);

function createBaseQueryByHashResponse(): QueryByHashResponse {
  return { $type: 'regen.data.v1alpha2.QueryByHashResponse', entry: undefined };
}

export const QueryByHashResponse = {
  $type: 'regen.data.v1alpha2.QueryByHashResponse' as const,

  encode(
    message: QueryByHashResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.entry !== undefined) {
      ContentEntry.encode(message.entry, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entry = ContentEntry.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryByHashResponse {
    return {
      $type: QueryByHashResponse.$type,
      entry: isSet(object.entry)
        ? ContentEntry.fromJSON(object.entry)
        : undefined,
    };
  },

  toJSON(message: QueryByHashResponse): unknown {
    const obj: any = {};
    message.entry !== undefined &&
      (obj.entry = message.entry
        ? ContentEntry.toJSON(message.entry)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryByHashResponse>, I>>(
    object: I,
  ): QueryByHashResponse {
    const message = createBaseQueryByHashResponse();
    message.entry =
      object.entry !== undefined && object.entry !== null
        ? ContentEntry.fromPartial(object.entry)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryByHashResponse.$type, QueryByHashResponse);

function createBaseQueryBySignerRequest(): QueryBySignerRequest {
  return {
    $type: 'regen.data.v1alpha2.QueryBySignerRequest',
    signer: '',
    pagination: undefined,
  };
}

export const QueryBySignerRequest = {
  $type: 'regen.data.v1alpha2.QueryBySignerRequest' as const,

  encode(
    message: QueryBySignerRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.signer !== '') {
      writer.uint32(10).string(message.signer);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBySignerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBySignerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBySignerRequest {
    return {
      $type: QueryBySignerRequest.$type,
      signer: isSet(object.signer) ? String(object.signer) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBySignerRequest): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBySignerRequest>, I>>(
    object: I,
  ): QueryBySignerRequest {
    const message = createBaseQueryBySignerRequest();
    message.signer = object.signer ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBySignerRequest.$type, QueryBySignerRequest);

function createBaseQueryBySignerResponse(): QueryBySignerResponse {
  return {
    $type: 'regen.data.v1alpha2.QueryBySignerResponse',
    entries: [],
    pagination: undefined,
  };
}

export const QueryBySignerResponse = {
  $type: 'regen.data.v1alpha2.QueryBySignerResponse' as const,

  encode(
    message: QueryBySignerResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.entries) {
      ContentEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBySignerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBySignerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(ContentEntry.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBySignerResponse {
    return {
      $type: QueryBySignerResponse.$type,
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => ContentEntry.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBySignerResponse): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e =>
        e ? ContentEntry.toJSON(e) : undefined,
      );
    } else {
      obj.entries = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBySignerResponse>, I>>(
    object: I,
  ): QueryBySignerResponse {
    const message = createBaseQueryBySignerResponse();
    message.entries =
      object.entries?.map(e => ContentEntry.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryBySignerResponse.$type, QueryBySignerResponse);

function createBaseContentEntry(): ContentEntry {
  return {
    $type: 'regen.data.v1alpha2.ContentEntry',
    hash: undefined,
    iri: '',
    timestamp: undefined,
    signers: [],
    content: undefined,
  };
}

export const ContentEntry = {
  $type: 'regen.data.v1alpha2.ContentEntry' as const,

  encode(
    message: ContentEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.hash !== undefined) {
      ContentHash.encode(message.hash, writer.uint32(10).fork()).ldelim();
    }
    if (message.iri !== '') {
      writer.uint32(18).string(message.iri);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(26).fork(),
      ).ldelim();
    }
    for (const v of message.signers) {
      SignerEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.content !== undefined) {
      Content.encode(message.content, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = ContentHash.decode(reader, reader.uint32());
          break;
        case 2:
          message.iri = reader.string();
          break;
        case 3:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        case 4:
          message.signers.push(SignerEntry.decode(reader, reader.uint32()));
          break;
        case 5:
          message.content = Content.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContentEntry {
    return {
      $type: ContentEntry.$type,
      hash: isSet(object.hash) ? ContentHash.fromJSON(object.hash) : undefined,
      iri: isSet(object.iri) ? String(object.iri) : '',
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
      signers: Array.isArray(object?.signers)
        ? object.signers.map((e: any) => SignerEntry.fromJSON(e))
        : [],
      content: isSet(object.content)
        ? Content.fromJSON(object.content)
        : undefined,
    };
  },

  toJSON(message: ContentEntry): unknown {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = message.hash ? ContentHash.toJSON(message.hash) : undefined);
    message.iri !== undefined && (obj.iri = message.iri);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    if (message.signers) {
      obj.signers = message.signers.map(e =>
        e ? SignerEntry.toJSON(e) : undefined,
      );
    } else {
      obj.signers = [];
    }
    message.content !== undefined &&
      (obj.content = message.content
        ? Content.toJSON(message.content)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContentEntry>, I>>(
    object: I,
  ): ContentEntry {
    const message = createBaseContentEntry();
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? ContentHash.fromPartial(object.hash)
        : undefined;
    message.iri = object.iri ?? '';
    message.timestamp = object.timestamp ?? undefined;
    message.signers =
      object.signers?.map(e => SignerEntry.fromPartial(e)) || [];
    message.content =
      object.content !== undefined && object.content !== null
        ? Content.fromPartial(object.content)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ContentEntry.$type, ContentEntry);

/** Query is the regen.data.v1alpha2 Query service */
export interface Query {
  /** ByHash queries data based on its ContentHash. */
  ByHash(
    request: DeepPartial<QueryByHashRequest>,
  ): Promise<QueryByHashResponse>;
  /** BySigner queries data based on signers. */
  BySigner(
    request: DeepPartial<QueryBySignerRequest>,
  ): Promise<QueryBySignerResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ByHash = this.ByHash.bind(this);
    this.BySigner = this.BySigner.bind(this);
  }
  ByHash(
    request: DeepPartial<QueryByHashRequest>,
  ): Promise<QueryByHashResponse> {
    const fromPartial = QueryByHashRequest.fromPartial(request);
    const data = QueryByHashRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.data.v1alpha2.Query',
      'ByHash',
      data,
    );
    return promise.then(data =>
      QueryByHashResponse.decode(new _m0.Reader(data)),
    );
  }

  BySigner(
    request: DeepPartial<QueryBySignerRequest>,
  ): Promise<QueryBySignerResponse> {
    const fromPartial = QueryBySignerRequest.fromPartial(request);
    const data = QueryBySignerRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.data.v1alpha2.Query',
      'BySigner',
      data,
    );
    return promise.then(data =>
      QueryBySignerResponse.decode(new _m0.Reader(data)),
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
