/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Config } from './config';

export const protobufPackage = 'cosmos.app.v1alpha1';

/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequest {
  $type: 'cosmos.app.v1alpha1.QueryConfigRequest';
}

/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponse {
  $type: 'cosmos.app.v1alpha1.QueryConfigResponse';
  /** config is the current app config. */
  config?: Config;
}

function createBaseQueryConfigRequest(): QueryConfigRequest {
  return { $type: 'cosmos.app.v1alpha1.QueryConfigRequest' };
}

export const QueryConfigRequest = {
  $type: 'cosmos.app.v1alpha1.QueryConfigRequest' as const,

  encode(
    _: QueryConfigRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigRequest();
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

  fromJSON(_: any): QueryConfigRequest {
    return {
      $type: QueryConfigRequest.$type,
    };
  },

  toJSON(_: QueryConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryConfigRequest>, I>>(
    _: I,
  ): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  },
};

messageTypeRegistry.set(QueryConfigRequest.$type, QueryConfigRequest);

function createBaseQueryConfigResponse(): QueryConfigResponse {
  return {
    $type: 'cosmos.app.v1alpha1.QueryConfigResponse',
    config: undefined,
  };
}

export const QueryConfigResponse = {
  $type: 'cosmos.app.v1alpha1.QueryConfigResponse' as const,

  encode(
    message: QueryConfigResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Config.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConfigResponse {
    return {
      $type: QueryConfigResponse.$type,
      config: isSet(object.config) ? Config.fromJSON(object.config) : undefined,
    };
  },

  toJSON(message: QueryConfigResponse): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config ? Config.toJSON(message.config) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryConfigResponse>, I>>(
    object: I,
  ): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    message.config =
      object.config !== undefined && object.config !== null
        ? Config.fromPartial(object.config)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryConfigResponse.$type, QueryConfigResponse);

/** Query is the app module query service. */
export interface Query {
  /** Config returns the current app config. */
  Config(
    request: DeepPartial<QueryConfigRequest>,
  ): Promise<QueryConfigResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Config = this.Config.bind(this);
  }
  Config(
    request: DeepPartial<QueryConfigRequest>,
  ): Promise<QueryConfigResponse> {
    const fromPartial = QueryConfigRequest.fromPartial(request);
    const data = QueryConfigRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.app.v1alpha1.Query',
      'Config',
      data,
    );
    return promise.then(data =>
      QueryConfigResponse.decode(new _m0.Reader(data)),
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
