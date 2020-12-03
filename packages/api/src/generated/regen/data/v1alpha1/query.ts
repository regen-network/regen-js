/* eslint-disable */
import { Reader, Writer, util, configure } from 'protobufjs/minimal';
import { Timestamp } from '../../../google/protobuf/timestamp';
import * as Long from 'long';


/**
 *  QueryByCidRequest is the Query/ByCid request type.
 */
export interface QueryByCidRequest {
  /**
   *  cid is a Content Identifier for the data corresponding to the IPFS CID
   *  specification: https://github.com/multiformats/cid.
   */
  cid: Uint8Array;
}

/**
 *  QueryByCidRequest is the Query/ByCid response type.
 */
export interface QueryByCidResponse {
  /**
   *  timestamp is the timestamp of the block at which the data was anchored.
   */
  timestamp?: Date;
  /**
   *  signers are the addresses of the accounts which have signed the data.
   */
  signers: string[];
  /**
   *  content is the content of the data, if it was stored on-chain.
   */
  content: Uint8Array;
}

const baseQueryByCidRequest: object = {
};

const baseQueryByCidResponse: object = {
  signers: "",
};

/**
 *  Query is the regen.data.v1alpha1 Query service
 */
export interface Query {

  /**
   *  ByCid queries data based on its CID.
   */
  ByCid(request: QueryByCidRequest): Promise<QueryByCidResponse>;

}

export class QueryClientImpl implements Query {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  ByCid(request: QueryByCidRequest): Promise<QueryByCidResponse> {
    const data = QueryByCidRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1alpha1.Query", "ByCid", data);
    return promise.then(data => QueryByCidResponse.decode(new Reader(data)));
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

export const protobufPackage = 'regen.data.v1alpha1'

export const QueryByCidRequest = {
  encode(message: QueryByCidRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).bytes(message.cid);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryByCidRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryByCidRequest } as QueryByCidRequest;
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
    const message = { ...baseQueryByCidRequest } as QueryByCidRequest;
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = bytesFromBase64(object.cid);
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryByCidRequest>): QueryByCidRequest {
    const message = { ...baseQueryByCidRequest } as QueryByCidRequest;
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = new Uint8Array();
    }
    return message;
  },
  toJSON(message: QueryByCidRequest): unknown {
    const obj: any = {};
    message.cid !== undefined && (obj.cid = base64FromBytes(message.cid !== undefined ? message.cid : new Uint8Array()));
    return obj;
  },
};

export const QueryByCidResponse = {
  encode(message: QueryByCidResponse, writer: Writer = Writer.create()): Writer {
    if (message.timestamp !== undefined && message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signers) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(26).bytes(message.content);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryByCidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryByCidResponse } as QueryByCidResponse;
    message.signers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
    const message = { ...baseQueryByCidResponse } as QueryByCidResponse;
    message.signers = [];
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }
    if (object.signers !== undefined && object.signers !== null) {
      for (const e of object.signers) {
        message.signers.push(String(e));
      }
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = bytesFromBase64(object.content);
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryByCidResponse>): QueryByCidResponse {
    const message = { ...baseQueryByCidResponse } as QueryByCidResponse;
    message.signers = [];
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = undefined;
    }
    if (object.signers !== undefined && object.signers !== null) {
      for (const e of object.signers) {
        message.signers.push(e);
      }
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    } else {
      message.content = new Uint8Array();
    }
    return message;
  },
  toJSON(message: QueryByCidResponse): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp !== undefined ? message.timestamp.toISOString() : null);
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }
    message.content !== undefined && (obj.content = base64FromBytes(message.content !== undefined ? message.content : new Uint8Array()));
    return obj;
  },
};

if (util.Long !== Long as any) {
  util.Long = Long as any;
  configure();
}

interface WindowBase64 {
  atob(b64: string): string;
  btoa(bin: string): string;
}

const windowBase64 = (globalThis as unknown as WindowBase64);
const atob = windowBase64.atob || ((b64: string) => Buffer.from(b64, 'base64').toString('binary'));
const btoa = windowBase64.btoa || ((bin: string) => Buffer.from(bin, 'binary').toString('base64'));

function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(''));
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