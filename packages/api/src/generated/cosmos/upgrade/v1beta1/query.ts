/* eslint-disable */
import { Plan } from '../../../cosmos/upgrade/v1beta1/upgrade';
import { Reader, Writer, util, configure } from 'protobufjs/minimal';
import * as Long from 'long';


/**
 *  QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 *  method.
 */
export interface QueryCurrentPlanRequest {
}

/**
 *  QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 *  method.
 */
export interface QueryCurrentPlanResponse {
  /**
   *  plan is the current upgrade plan.
   */
  plan?: Plan;
}

/**
 *  QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 *  method.
 */
export interface QueryAppliedPlanRequest {
  /**
   *  name is the name of the applied plan to query for.
   */
  name: string;
}

/**
 *  QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 *  method.
 */
export interface QueryAppliedPlanResponse {
  /**
   *  height is the block height at which the plan was applied.
   */
  height: number;
}

const baseQueryCurrentPlanRequest: object = {
};

const baseQueryCurrentPlanResponse: object = {
};

const baseQueryAppliedPlanRequest: object = {
  name: "",
};

const baseQueryAppliedPlanResponse: object = {
  height: 0,
};

/**
 *  Query defines the gRPC upgrade querier service.
 */
export interface Query {

  /**
   *  CurrentPlan queries the current upgrade plan.
   */
  CurrentPlan(request: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse>;

  /**
   *  AppliedPlan queries a previously applied upgrade plan by its name.
   */
  AppliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse>;

}

export class QueryClientImpl implements Query {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  CurrentPlan(request: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse> {
    const data = QueryCurrentPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
    return promise.then(data => QueryCurrentPlanResponse.decode(new Reader(data)));
  }

  AppliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse> {
    const data = QueryAppliedPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
    return promise.then(data => QueryAppliedPlanResponse.decode(new Reader(data)));
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

function longToNumber(long: Long) {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

export const protobufPackage = 'cosmos.upgrade.v1beta1'

export const QueryCurrentPlanRequest = {
  encode(_: QueryCurrentPlanRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryCurrentPlanRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCurrentPlanRequest } as QueryCurrentPlanRequest;
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
  fromJSON(_: any): QueryCurrentPlanRequest {
    const message = { ...baseQueryCurrentPlanRequest } as QueryCurrentPlanRequest;
    return message;
  },
  fromPartial(_: DeepPartial<QueryCurrentPlanRequest>): QueryCurrentPlanRequest {
    const message = { ...baseQueryCurrentPlanRequest } as QueryCurrentPlanRequest;
    return message;
  },
  toJSON(_: QueryCurrentPlanRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

export const QueryCurrentPlanResponse = {
  encode(message: QueryCurrentPlanResponse, writer: Writer = Writer.create()): Writer {
    if (message.plan !== undefined && message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryCurrentPlanResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCurrentPlanResponse } as QueryCurrentPlanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCurrentPlanResponse {
    const message = { ...baseQueryCurrentPlanResponse } as QueryCurrentPlanResponse;
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromJSON(object.plan);
    } else {
      message.plan = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCurrentPlanResponse>): QueryCurrentPlanResponse {
    const message = { ...baseQueryCurrentPlanResponse } as QueryCurrentPlanResponse;
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromPartial(object.plan);
    } else {
      message.plan = undefined;
    }
    return message;
  },
  toJSON(message: QueryCurrentPlanResponse): unknown {
    const obj: any = {};
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    return obj;
  },
};

export const QueryAppliedPlanRequest = {
  encode(message: QueryAppliedPlanRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryAppliedPlanRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAppliedPlanRequest } as QueryAppliedPlanRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAppliedPlanRequest {
    const message = { ...baseQueryAppliedPlanRequest } as QueryAppliedPlanRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAppliedPlanRequest>): QueryAppliedPlanRequest {
    const message = { ...baseQueryAppliedPlanRequest } as QueryAppliedPlanRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
  toJSON(message: QueryAppliedPlanRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
};

export const QueryAppliedPlanResponse = {
  encode(message: QueryAppliedPlanResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int64(message.height);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryAppliedPlanResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAppliedPlanResponse } as QueryAppliedPlanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAppliedPlanResponse {
    const message = { ...baseQueryAppliedPlanResponse } as QueryAppliedPlanResponse;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAppliedPlanResponse>): QueryAppliedPlanResponse {
    const message = { ...baseQueryAppliedPlanResponse } as QueryAppliedPlanResponse;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    return message;
  },
  toJSON(message: QueryAppliedPlanResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },
};

if (util.Long !== Long as any) {
  util.Long = Long as any;
  configure();
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;