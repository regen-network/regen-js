/* eslint-disable */
import { PageRequest, PageResponse } from '../../../cosmos/base/query/v1beta1/pagination';
import { Tx } from '../../../cosmos/tx/v1beta1/tx';
import { TxResponse, GasInfo, Result } from '../../../cosmos/base/abci/v1beta1/abci';
import { Reader, Writer } from 'protobufjs/minimal';


/**
 *  GetTxsEventRequest is the request type for the Service.TxsByEvents
 *  RPC method.
 */
export interface GetTxsEventRequest {
  /**
   *  event is the transaction event type.
   */
  event: string;
  /**
   *  pagination defines an pagination for the request.
   */
  pagination?: PageRequest;
}

/**
 *  GetTxsEventResponse is the response type for the Service.TxsByEvents
 *  RPC method.
 */
export interface GetTxsEventResponse {
  /**
   *  txs is the list of queried transactions.
   */
  txs: Tx[];
  /**
   *  tx_responses is the list of queried TxResponses.
   */
  txResponses: TxResponse[];
  /**
   *  pagination defines an pagination for the response.
   */
  pagination?: PageResponse;
}

/**
 *  SimulateRequest is the request type for the Service.Simulate
 *  RPC method.
 */
export interface SimulateRequest {
  /**
   *  tx is the transaction to simulate.
   */
  tx?: Tx;
}

/**
 *  SimulateResponse is the response type for the
 *  Service.SimulateRPC method.
 */
export interface SimulateResponse {
  /**
   *  gas_info is the information about gas used in the simulation.
   */
  gasInfo?: GasInfo;
  /**
   *  result is the result of the simulation.
   */
  result?: Result;
}

/**
 *  GetTxRequest is the request type for the Service.GetTx
 *  RPC method.
 */
export interface GetTxRequest {
  /**
   *  hash is the tx hash to query, encoded as a hex string.
   */
  hash: string;
}

/**
 *  GetTxResponse is the response type for the Service.GetTx method.
 */
export interface GetTxResponse {
  /**
   *  tx is the queried transaction.
   */
  tx?: Tx;
  /**
   *  tx_response is the queried TxResponses.
   */
  txResponse?: TxResponse;
}

const baseGetTxsEventRequest: object = {
  event: "",
};

const baseGetTxsEventResponse: object = {
};

const baseSimulateRequest: object = {
};

const baseSimulateResponse: object = {
};

const baseGetTxRequest: object = {
  hash: "",
};

const baseGetTxResponse: object = {
};

/**
 *  Service defines a gRPC service for interacting with transactions.
 */
export interface Service {

  /**
   *  Simulate simulates executing a transaction for estimating gas usage.
   */
  Simulate(request: SimulateRequest): Promise<SimulateResponse>;

  /**
   *  GetTx fetches a tx by hash.
   */
  GetTx(request: GetTxRequest): Promise<GetTxResponse>;

  /**
   *  GetTxsEvent fetches txs by event.
   */
  GetTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;

}

export class ServiceClientImpl implements Service {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  Simulate(request: SimulateRequest): Promise<SimulateResponse> {
    const data = SimulateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
    return promise.then(data => SimulateResponse.decode(new Reader(data)));
  }

  GetTx(request: GetTxRequest): Promise<GetTxResponse> {
    const data = GetTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
    return promise.then(data => GetTxResponse.decode(new Reader(data)));
  }

  GetTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse> {
    const data = GetTxsEventRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
    return promise.then(data => GetTxsEventResponse.decode(new Reader(data)));
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

export const protobufPackage = 'cosmos.tx.v1beta1'

export const GetTxsEventRequest = {
  encode(message: GetTxsEventRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.event);
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GetTxsEventRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetTxsEventRequest } as GetTxsEventRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event = reader.string();
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
  fromJSON(object: any): GetTxsEventRequest {
    const message = { ...baseGetTxsEventRequest } as GetTxsEventRequest;
    if (object.event !== undefined && object.event !== null) {
      message.event = String(object.event);
    } else {
      message.event = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetTxsEventRequest>): GetTxsEventRequest {
    const message = { ...baseGetTxsEventRequest } as GetTxsEventRequest;
    if (object.event !== undefined && object.event !== null) {
      message.event = object.event;
    } else {
      message.event = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: GetTxsEventRequest): unknown {
    const obj: any = {};
    message.event !== undefined && (obj.event = message.event);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const GetTxsEventResponse = {
  encode(message: GetTxsEventResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.txs) {
      Tx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.txResponses) {
      TxResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GetTxsEventResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetTxsEventResponse } as GetTxsEventResponse;
    message.txs = [];
    message.txResponses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.txResponses.push(TxResponse.decode(reader, reader.uint32()));
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
  fromJSON(object: any): GetTxsEventResponse {
    const message = { ...baseGetTxsEventResponse } as GetTxsEventResponse;
    message.txs = [];
    message.txResponses = [];
    if (object.txs !== undefined && object.txs !== null) {
      for (const e of object.txs) {
        message.txs.push(Tx.fromJSON(e));
      }
    }
    if (object.txResponses !== undefined && object.txResponses !== null) {
      for (const e of object.txResponses) {
        message.txResponses.push(TxResponse.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetTxsEventResponse>): GetTxsEventResponse {
    const message = { ...baseGetTxsEventResponse } as GetTxsEventResponse;
    message.txs = [];
    message.txResponses = [];
    if (object.txs !== undefined && object.txs !== null) {
      for (const e of object.txs) {
        message.txs.push(Tx.fromPartial(e));
      }
    }
    if (object.txResponses !== undefined && object.txResponses !== null) {
      for (const e of object.txResponses) {
        message.txResponses.push(TxResponse.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: GetTxsEventResponse): unknown {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? Tx.toJSON(e) : undefined);
    } else {
      obj.txs = [];
    }
    if (message.txResponses) {
      obj.txResponses = message.txResponses.map(e => e ? TxResponse.toJSON(e) : undefined);
    } else {
      obj.txResponses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const SimulateRequest = {
  encode(message: SimulateRequest, writer: Writer = Writer.create()): Writer {
    if (message.tx !== undefined && message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): SimulateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSimulateRequest } as SimulateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SimulateRequest {
    const message = { ...baseSimulateRequest } as SimulateRequest;
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromJSON(object.tx);
    } else {
      message.tx = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<SimulateRequest>): SimulateRequest {
    const message = { ...baseSimulateRequest } as SimulateRequest;
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromPartial(object.tx);
    } else {
      message.tx = undefined;
    }
    return message;
  },
  toJSON(message: SimulateRequest): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    return obj;
  },
};

export const SimulateResponse = {
  encode(message: SimulateResponse, writer: Writer = Writer.create()): Writer {
    if (message.gasInfo !== undefined && message.gasInfo !== undefined) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined && message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): SimulateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSimulateResponse } as SimulateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasInfo = GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = Result.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SimulateResponse {
    const message = { ...baseSimulateResponse } as SimulateResponse;
    if (object.gasInfo !== undefined && object.gasInfo !== null) {
      message.gasInfo = GasInfo.fromJSON(object.gasInfo);
    } else {
      message.gasInfo = undefined;
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Result.fromJSON(object.result);
    } else {
      message.result = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<SimulateResponse>): SimulateResponse {
    const message = { ...baseSimulateResponse } as SimulateResponse;
    if (object.gasInfo !== undefined && object.gasInfo !== null) {
      message.gasInfo = GasInfo.fromPartial(object.gasInfo);
    } else {
      message.gasInfo = undefined;
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Result.fromPartial(object.result);
    } else {
      message.result = undefined;
    }
    return message;
  },
  toJSON(message: SimulateResponse): unknown {
    const obj: any = {};
    message.gasInfo !== undefined && (obj.gasInfo = message.gasInfo ? GasInfo.toJSON(message.gasInfo) : undefined);
    message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    return obj;
  },
};

export const GetTxRequest = {
  encode(message: GetTxRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.hash);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GetTxRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetTxRequest } as GetTxRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetTxRequest {
    const message = { ...baseGetTxRequest } as GetTxRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetTxRequest>): GetTxRequest {
    const message = { ...baseGetTxRequest } as GetTxRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    return message;
  },
  toJSON(message: GetTxRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },
};

export const GetTxResponse = {
  encode(message: GetTxResponse, writer: Writer = Writer.create()): Writer {
    if (message.tx !== undefined && message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txResponse !== undefined && message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GetTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetTxResponse } as GetTxResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetTxResponse {
    const message = { ...baseGetTxResponse } as GetTxResponse;
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromJSON(object.tx);
    } else {
      message.tx = undefined;
    }
    if (object.txResponse !== undefined && object.txResponse !== null) {
      message.txResponse = TxResponse.fromJSON(object.txResponse);
    } else {
      message.txResponse = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetTxResponse>): GetTxResponse {
    const message = { ...baseGetTxResponse } as GetTxResponse;
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromPartial(object.tx);
    } else {
      message.tx = undefined;
    }
    if (object.txResponse !== undefined && object.txResponse !== null) {
      message.txResponse = TxResponse.fromPartial(object.txResponse);
    } else {
      message.txResponse = undefined;
    }
    return message;
  },
  toJSON(message: GetTxResponse): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    message.txResponse !== undefined && (obj.txResponse = message.txResponse ? TxResponse.toJSON(message.txResponse) : undefined);
    return obj;
  },
};

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