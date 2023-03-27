/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "cosmos.base.node.v1beta1";

/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequest {
  $type: "cosmos.base.node.v1beta1.ConfigRequest";
}

/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponse {
  $type: "cosmos.base.node.v1beta1.ConfigResponse";
  minimumGasPrice: string;
}

function createBaseConfigRequest(): ConfigRequest {
  return { $type: "cosmos.base.node.v1beta1.ConfigRequest" };
}

export const ConfigRequest = {
  $type: "cosmos.base.node.v1beta1.ConfigRequest" as const,

  encode(_: ConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest();
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

  fromJSON(_: any): ConfigRequest {
    return { $type: ConfigRequest.$type };
  },

  toJSON(_: ConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ConfigRequest>): ConfigRequest {
    return ConfigRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<ConfigRequest>): ConfigRequest {
    const message = createBaseConfigRequest();
    return message;
  },
};

messageTypeRegistry.set(ConfigRequest.$type, ConfigRequest);

function createBaseConfigResponse(): ConfigResponse {
  return { $type: "cosmos.base.node.v1beta1.ConfigResponse", minimumGasPrice: "" };
}

export const ConfigResponse = {
  $type: "cosmos.base.node.v1beta1.ConfigResponse" as const,

  encode(message: ConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minimumGasPrice !== "") {
      writer.uint32(10).string(message.minimumGasPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimumGasPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigResponse {
    return {
      $type: ConfigResponse.$type,
      minimumGasPrice: isSet(object.minimumGasPrice) ? String(object.minimumGasPrice) : "",
    };
  },

  toJSON(message: ConfigResponse): unknown {
    const obj: any = {};
    message.minimumGasPrice !== undefined && (obj.minimumGasPrice = message.minimumGasPrice);
    return obj;
  },

  create(base?: DeepPartial<ConfigResponse>): ConfigResponse {
    return ConfigResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ConfigResponse>): ConfigResponse {
    const message = createBaseConfigResponse();
    message.minimumGasPrice = object.minimumGasPrice ?? "";
    return message;
  },
};

messageTypeRegistry.set(ConfigResponse.$type, ConfigResponse);

/** Service defines the gRPC querier service for node related queries. */
export interface Service {
  /** Config queries for the operator configuration. */
  Config(request: DeepPartial<ConfigRequest>): Promise<ConfigResponse>;
}

export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cosmos.base.node.v1beta1.Service";
    this.rpc = rpc;
    this.Config = this.Config.bind(this);
  }
  Config(request: DeepPartial<ConfigRequest>): Promise<ConfigResponse> {
    const fromPartial = ConfigRequest.fromPartial(request);
    const data = ConfigRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "Config", data);
    return promise.then((data) => ConfigResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
