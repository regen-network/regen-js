/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Grant } from '../../../cosmos/feegrant/v1beta1/feegrant';
import {
  PageRequest,
  PageResponse,
} from '../../../cosmos/base/query/v1beta1/pagination';

export const protobufPackage = 'cosmos.feegrant.v1beta1';

/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */
export interface QueryAllowanceRequest {
  $type: 'cosmos.feegrant.v1beta1.QueryAllowanceRequest';
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
}

/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */
export interface QueryAllowanceResponse {
  $type: 'cosmos.feegrant.v1beta1.QueryAllowanceResponse';
  /** allowance is a allowance granted for grantee by granter. */
  allowance?: Grant;
}

/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */
export interface QueryAllowancesRequest {
  $type: 'cosmos.feegrant.v1beta1.QueryAllowancesRequest';
  grantee: string;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}

/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */
export interface QueryAllowancesResponse {
  $type: 'cosmos.feegrant.v1beta1.QueryAllowancesResponse';
  /** allowances are allowance's granted for grantee by granter. */
  allowances: Grant[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}

function createBaseQueryAllowanceRequest(): QueryAllowanceRequest {
  return {
    $type: 'cosmos.feegrant.v1beta1.QueryAllowanceRequest',
    granter: '',
    grantee: '',
  };
}

export const QueryAllowanceRequest = {
  $type: 'cosmos.feegrant.v1beta1.QueryAllowanceRequest' as const,

  encode(
    message: QueryAllowanceRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.granter !== '') {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== '') {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAllowanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllowanceRequest {
    return {
      $type: QueryAllowanceRequest.$type,
      granter: isSet(object.granter) ? String(object.granter) : '',
      grantee: isSet(object.grantee) ? String(object.grantee) : '',
    };
  },

  toJSON(message: QueryAllowanceRequest): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllowanceRequest>, I>>(
    object: I,
  ): QueryAllowanceRequest {
    const message = createBaseQueryAllowanceRequest();
    message.granter = object.granter ?? '';
    message.grantee = object.grantee ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryAllowanceRequest.$type, QueryAllowanceRequest);

function createBaseQueryAllowanceResponse(): QueryAllowanceResponse {
  return {
    $type: 'cosmos.feegrant.v1beta1.QueryAllowanceResponse',
    allowance: undefined,
  };
}

export const QueryAllowanceResponse = {
  $type: 'cosmos.feegrant.v1beta1.QueryAllowanceResponse' as const,

  encode(
    message: QueryAllowanceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.allowance !== undefined) {
      Grant.encode(message.allowance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAllowanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowance = Grant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllowanceResponse {
    return {
      $type: QueryAllowanceResponse.$type,
      allowance: isSet(object.allowance)
        ? Grant.fromJSON(object.allowance)
        : undefined,
    };
  },

  toJSON(message: QueryAllowanceResponse): unknown {
    const obj: any = {};
    message.allowance !== undefined &&
      (obj.allowance = message.allowance
        ? Grant.toJSON(message.allowance)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllowanceResponse>, I>>(
    object: I,
  ): QueryAllowanceResponse {
    const message = createBaseQueryAllowanceResponse();
    message.allowance =
      object.allowance !== undefined && object.allowance !== null
        ? Grant.fromPartial(object.allowance)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAllowanceResponse.$type, QueryAllowanceResponse);

function createBaseQueryAllowancesRequest(): QueryAllowancesRequest {
  return {
    $type: 'cosmos.feegrant.v1beta1.QueryAllowancesRequest',
    grantee: '',
    pagination: undefined,
  };
}

export const QueryAllowancesRequest = {
  $type: 'cosmos.feegrant.v1beta1.QueryAllowancesRequest' as const,

  encode(
    message: QueryAllowancesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.grantee !== '') {
      writer.uint32(10).string(message.grantee);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAllowancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
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

  fromJSON(object: any): QueryAllowancesRequest {
    return {
      $type: QueryAllowancesRequest.$type,
      grantee: isSet(object.grantee) ? String(object.grantee) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllowancesRequest): unknown {
    const obj: any = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllowancesRequest>, I>>(
    object: I,
  ): QueryAllowancesRequest {
    const message = createBaseQueryAllowancesRequest();
    message.grantee = object.grantee ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAllowancesRequest.$type, QueryAllowancesRequest);

function createBaseQueryAllowancesResponse(): QueryAllowancesResponse {
  return {
    $type: 'cosmos.feegrant.v1beta1.QueryAllowancesResponse',
    allowances: [],
    pagination: undefined,
  };
}

export const QueryAllowancesResponse = {
  $type: 'cosmos.feegrant.v1beta1.QueryAllowancesResponse' as const,

  encode(
    message: QueryAllowancesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.allowances) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllowancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowances.push(Grant.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllowancesResponse {
    return {
      $type: QueryAllowancesResponse.$type,
      allowances: Array.isArray(object?.allowances)
        ? object.allowances.map((e: any) => Grant.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllowancesResponse): unknown {
    const obj: any = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map(e =>
        e ? Grant.toJSON(e) : undefined,
      );
    } else {
      obj.allowances = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllowancesResponse>, I>>(
    object: I,
  ): QueryAllowancesResponse {
    const message = createBaseQueryAllowancesResponse();
    message.allowances =
      object.allowances?.map(e => Grant.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAllowancesResponse.$type, QueryAllowancesResponse);

/** Query defines the gRPC querier service. */
export interface Query {
  /** Allowance returns fee granted to the grantee by the granter. */
  Allowance(
    request: DeepPartial<QueryAllowanceRequest>,
  ): Promise<QueryAllowanceResponse>;
  /** Allowances returns all the grants for address. */
  Allowances(
    request: DeepPartial<QueryAllowancesRequest>,
  ): Promise<QueryAllowancesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Allowance = this.Allowance.bind(this);
    this.Allowances = this.Allowances.bind(this);
  }
  Allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse> {
    const data = QueryAllowanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.feegrant.v1beta1.Query',
      'Allowance',
      data,
    );
    return promise.then(data =>
      QueryAllowanceResponse.decode(new _m0.Reader(data)),
    );
  }

  Allowances(
    request: QueryAllowancesRequest,
  ): Promise<QueryAllowancesResponse> {
    const data = QueryAllowancesRequest.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.feegrant.v1beta1.Query',
      'Allowances',
      data,
    );
    return promise.then(data =>
      QueryAllowancesResponse.decode(new _m0.Reader(data)),
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
