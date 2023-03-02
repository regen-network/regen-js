/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'regen.intertx.v1';

/**
 * QueryInterchainAccountRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountRequest {
  $type: 'regen.intertx.v1.QueryInterchainAccountRequest';
  /** owner is the address of the account that owns the ICA. */
  owner: string;
  /** connection_id is the connection the ICA claimed. */
  connectionId: string;
}

/**
 * QueryInterchainAccountResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountResponse {
  $type: 'regen.intertx.v1.QueryInterchainAccountResponse';
  /** interchain_account_address is the address of the ICA. */
  interchainAccountAddress: string;
}

function createBaseQueryInterchainAccountRequest(): QueryInterchainAccountRequest {
  return {
    $type: 'regen.intertx.v1.QueryInterchainAccountRequest',
    owner: '',
    connectionId: '',
  };
}

export const QueryInterchainAccountRequest = {
  $type: 'regen.intertx.v1.QueryInterchainAccountRequest' as const,

  encode(
    message: QueryInterchainAccountRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== '') {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryInterchainAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryInterchainAccountRequest {
    return {
      $type: QueryInterchainAccountRequest.$type,
      owner: isSet(object.owner) ? String(object.owner) : '',
      connectionId: isSet(object.connectionId)
        ? String(object.connectionId)
        : '',
    };
  },

  toJSON(message: QueryInterchainAccountRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryInterchainAccountRequest>, I>>(
    object: I,
  ): QueryInterchainAccountRequest {
    const message = createBaseQueryInterchainAccountRequest();
    message.owner = object.owner ?? '';
    message.connectionId = object.connectionId ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryInterchainAccountRequest.$type,
  QueryInterchainAccountRequest,
);

function createBaseQueryInterchainAccountResponse(): QueryInterchainAccountResponse {
  return {
    $type: 'regen.intertx.v1.QueryInterchainAccountResponse',
    interchainAccountAddress: '',
  };
}

export const QueryInterchainAccountResponse = {
  $type: 'regen.intertx.v1.QueryInterchainAccountResponse' as const,

  encode(
    message: QueryInterchainAccountResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.interchainAccountAddress !== '') {
      writer.uint32(10).string(message.interchainAccountAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryInterchainAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interchainAccountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryInterchainAccountResponse {
    return {
      $type: QueryInterchainAccountResponse.$type,
      interchainAccountAddress: isSet(object.interchainAccountAddress)
        ? String(object.interchainAccountAddress)
        : '',
    };
  },

  toJSON(message: QueryInterchainAccountResponse): unknown {
    const obj: any = {};
    message.interchainAccountAddress !== undefined &&
      (obj.interchainAccountAddress = message.interchainAccountAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryInterchainAccountResponse>, I>>(
    object: I,
  ): QueryInterchainAccountResponse {
    const message = createBaseQueryInterchainAccountResponse();
    message.interchainAccountAddress = object.interchainAccountAddress ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryInterchainAccountResponse.$type,
  QueryInterchainAccountResponse,
);

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * QueryInterchainAccount returns the interchain account for given owner
   * address on a given connection pair
   */
  InterchainAccount(
    request: DeepPartial<QueryInterchainAccountRequest>,
  ): Promise<QueryInterchainAccountResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.InterchainAccount = this.InterchainAccount.bind(this);
  }
  InterchainAccount(
    request: DeepPartial<QueryInterchainAccountRequest>,
  ): Promise<QueryInterchainAccountResponse> {
    const fromPartial = QueryInterchainAccountRequest.fromPartial(request);
    const data = QueryInterchainAccountRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.intertx.v1.Query',
      'InterchainAccount',
      data,
    );
    return promise.then(data =>
      QueryInterchainAccountResponse.decode(new _m0.Reader(data)),
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
