/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  PageRequest,
  PageResponse,
} from '../../../cosmos/base/query/v1beta1/pagination';
import { ContentHash } from '../../../regen/data/v1alpha2/types';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'regen.data.v1alpha2';

/** QueryByContentHashRequest is the Query/ByContentHash request type. */
export interface QueryByIRIRequest {
  $type: 'regen.data.v1alpha2.QueryByIRIRequest';
  /** hash is the hash-based identifier for the anchored content. */
  iri: string;
}

/** QueryByContentHashResponse is the Query/ByContentHash response type. */
export interface QueryByIRIResponse {
  $type: 'regen.data.v1alpha2.QueryByIRIResponse';
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
}

/** QuerySignersRequest is the Query/Signers request type. */
export interface QuerySignersRequest {
  $type: 'regen.data.v1alpha2.QuerySignersRequest';
  /** iri is the content IRI */
  iri: string;
  /** pagination is the PageRequest to use for pagination. */
  pagination?: PageRequest;
}

/** QuerySignersResponse is the Query/QuerySigners response type. */
export interface QuerySignersResponse {
  $type: 'regen.data.v1alpha2.QuerySignersResponse';
  /** signers are the addresses of the signers. */
  signers: string[];
  /** pagination is the pagination PageResponse. */
  pagination?: PageResponse;
}

function createBaseQueryByIRIRequest(): QueryByIRIRequest {
  return { $type: 'regen.data.v1alpha2.QueryByIRIRequest', iri: '' };
}

export const QueryByIRIRequest = {
  $type: 'regen.data.v1alpha2.QueryByIRIRequest' as const,

  encode(
    message: QueryByIRIRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.iri !== '') {
      writer.uint32(10).string(message.iri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByIRIRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByIRIRequest();
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

  fromJSON(object: any): QueryByIRIRequest {
    return {
      $type: QueryByIRIRequest.$type,
      iri: isSet(object.iri) ? String(object.iri) : '',
    };
  },

  toJSON(message: QueryByIRIRequest): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryByIRIRequest>, I>>(
    object: I,
  ): QueryByIRIRequest {
    const message = createBaseQueryByIRIRequest();
    message.iri = object.iri ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryByIRIRequest.$type, QueryByIRIRequest);

function createBaseQueryByIRIResponse(): QueryByIRIResponse {
  return { $type: 'regen.data.v1alpha2.QueryByIRIResponse', entry: undefined };
}

export const QueryByIRIResponse = {
  $type: 'regen.data.v1alpha2.QueryByIRIResponse' as const,

  encode(
    message: QueryByIRIResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.entry !== undefined) {
      ContentEntry.encode(message.entry, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByIRIResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByIRIResponse();
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

  fromJSON(object: any): QueryByIRIResponse {
    return {
      $type: QueryByIRIResponse.$type,
      entry: isSet(object.entry)
        ? ContentEntry.fromJSON(object.entry)
        : undefined,
    };
  },

  toJSON(message: QueryByIRIResponse): unknown {
    const obj: any = {};
    message.entry !== undefined &&
      (obj.entry = message.entry
        ? ContentEntry.toJSON(message.entry)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryByIRIResponse>, I>>(
    object: I,
  ): QueryByIRIResponse {
    const message = createBaseQueryByIRIResponse();
    message.entry =
      object.entry !== undefined && object.entry !== null
        ? ContentEntry.fromPartial(object.entry)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryByIRIResponse.$type, QueryByIRIResponse);

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
    };
  },

  toJSON(message: ContentEntry): unknown {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = message.hash ? ContentHash.toJSON(message.hash) : undefined);
    message.iri !== undefined && (obj.iri = message.iri);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
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
    return message;
  },
};

messageTypeRegistry.set(ContentEntry.$type, ContentEntry);

function createBaseQuerySignersRequest(): QuerySignersRequest {
  return {
    $type: 'regen.data.v1alpha2.QuerySignersRequest',
    iri: '',
    pagination: undefined,
  };
}

export const QuerySignersRequest = {
  $type: 'regen.data.v1alpha2.QuerySignersRequest' as const,

  encode(
    message: QuerySignersRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.iri !== '') {
      writer.uint32(10).string(message.iri);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySignersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySignersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iri = reader.string();
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

  fromJSON(object: any): QuerySignersRequest {
    return {
      $type: QuerySignersRequest.$type,
      iri: isSet(object.iri) ? String(object.iri) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySignersRequest): unknown {
    const obj: any = {};
    message.iri !== undefined && (obj.iri = message.iri);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySignersRequest>, I>>(
    object: I,
  ): QuerySignersRequest {
    const message = createBaseQuerySignersRequest();
    message.iri = object.iri ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QuerySignersRequest.$type, QuerySignersRequest);

function createBaseQuerySignersResponse(): QuerySignersResponse {
  return {
    $type: 'regen.data.v1alpha2.QuerySignersResponse',
    signers: [],
    pagination: undefined,
  };
}

export const QuerySignersResponse = {
  $type: 'regen.data.v1alpha2.QuerySignersResponse' as const,

  encode(
    message: QuerySignersResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.signers) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySignersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySignersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signers.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySignersResponse {
    return {
      $type: QuerySignersResponse.$type,
      signers: Array.isArray(object?.signers)
        ? object.signers.map((e: any) => String(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySignersResponse): unknown {
    const obj: any = {};
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySignersResponse>, I>>(
    object: I,
  ): QuerySignersResponse {
    const message = createBaseQuerySignersResponse();
    message.signers = object.signers?.map(e => e) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QuerySignersResponse.$type, QuerySignersResponse);

/** Query is the regen.data.v1alpha2 Query service */
export interface Query {
  /** ByHash queries data based on its ContentHash. */
  ByIRI(request: DeepPartial<QueryByIRIRequest>): Promise<QueryByIRIResponse>;
  /** BySigner queries data based on signers. */
  BySigner(
    request: DeepPartial<QueryBySignerRequest>,
  ): Promise<QueryBySignerResponse>;
  /** Signers queries signers based on IRI. */
  Signers(
    request: DeepPartial<QuerySignersRequest>,
  ): Promise<QuerySignersResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ByIRI = this.ByIRI.bind(this);
    this.BySigner = this.BySigner.bind(this);
    this.Signers = this.Signers.bind(this);
  }
  ByIRI(request: QueryByIRIRequest): Promise<QueryByIRIResponse> {
    const data = QueryByIRIRequest.encode(request).finish();
    const promise = this.rpc.request(
      'regen.data.v1alpha2.Query',
      'ByIRI',
      data,
    );
    return promise.then(data =>
      QueryByIRIResponse.decode(new _m0.Reader(data)),
    );
  }

  BySigner(request: QueryBySignerRequest): Promise<QueryBySignerResponse> {
    const data = QueryBySignerRequest.encode(request).finish();
    const promise = this.rpc.request(
      'regen.data.v1alpha2.Query',
      'BySigner',
      data,
    );
    return promise.then(data =>
      QueryBySignerResponse.decode(new _m0.Reader(data)),
    );
  }

  Signers(request: QuerySignersRequest): Promise<QuerySignersResponse> {
    const data = QuerySignersRequest.encode(request).finish();
    const promise = this.rpc.request(
      'regen.data.v1alpha2.Query',
      'Signers',
      data,
    );
    return promise.then(data =>
      QuerySignersResponse.decode(new _m0.Reader(data)),
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
  : P &
      { [K in keyof P]: Exact<P[K], I[K]> } &
      Record<Exclude<keyof I, KeysOfUnion<P> | '$type'>, never>;

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
