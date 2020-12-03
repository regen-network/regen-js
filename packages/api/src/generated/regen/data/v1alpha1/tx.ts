/* eslint-disable */
import { Reader, Writer, util, configure } from 'protobufjs/minimal';
import { Timestamp } from '../../../google/protobuf/timestamp';
import * as Long from 'long';


/**
 *  MsgAnchorDataRequest is the Msg/AnchorData request type.
 */
export interface MsgAnchorDataRequest {
  /**
   *  sender is the address of the sender of the transaction.
   *  The sender in StoreData is not attesting to the veracity of the underlying data.
   *  They can simply be a intermediary providing services.
   */
  sender: string;
  /**
   *  cid is a Content Identifier for the data corresponding to the IPFS CID
   *  specification: https://github.com/multiformats/cid.
   */
  cid: Uint8Array;
}

/**
 *  MsgAnchorDataRequest is the Msg/AnchorData response type.
 */
export interface MsgAnchorDataResponse {
  /**
   *  timestamp is the timestamp of the block at which the data was anchored.
   */
  timestamp?: Date;
}

/**
 *  MsgSignDataRequest is the Msg/SignData request type.
 */
export interface MsgSignDataRequest {
  /**
   *  signers are the addresses of the accounts signing the data.
   *  By making a SignData request, the signers are attesting to the veracity
   *  of the data referenced by the cid. The precise meaning of this may vary
   *  depending on the underlying data.
   */
  signers: string[];
  /**
   *  cid is a Content Identifier for the data corresponding to the IPFS CID
   *  specification: https://github.com/multiformats/cid.
   */
  cid: Uint8Array;
}

/**
 *  MsgSignDataResponse is the Msg/SignData response type.
 */
export interface MsgSignDataResponse {
}

/**
 *  MsgStoreDataRequest is the Msg/StoreData request type.
 */
export interface MsgStoreDataRequest {
  /**
   *  sender is the address of the sender of the transaction.
   *  The sender in StoreData is not attesting to the veracity of the underlying data.
   *  They can simply be a intermediary providing services.
   */
  sender: string;
  /**
   *  cid is a Content Identifier for the data corresponding to the IPFS CID
   *  specification: https://github.com/multiformats/cid.
   */
  cid: Uint8Array;
  /**
   *  content is the content of the data corresponding to the provided CID.
   *
   *  Currently only data for CID's using sha2-256 and blake2b-256 hash algorithms
   *  can be stored on-chain.
   */
  content: Uint8Array;
}

/**
 *  MsgStoreDataRequest is the Msg/StoreData response type.
 */
export interface MsgStoreDataResponse {
}

const baseMsgAnchorDataRequest: object = {
  sender: "",
};

const baseMsgAnchorDataResponse: object = {
};

const baseMsgSignDataRequest: object = {
  signers: "",
};

const baseMsgSignDataResponse: object = {
};

const baseMsgStoreDataRequest: object = {
  sender: "",
};

const baseMsgStoreDataResponse: object = {
};

/**
 *  Msg is the regen.data.v1alpha1 Msg service
 */
export interface Msg {

  /**
   *  AnchorData "anchors" a piece of data to the blockchain based on its secure hash,
   *  effectively providing a tamper resistant timestamp.
   *
   *  The sender in AnchorData is not attesting to the veracity of the underlying data.
   *  They can simply be a intermediary providing timestamp services.
   *  SignData should be used to create a digital signature attesting to the veracity of some piece of data.
   */
  AnchorData(request: MsgAnchorDataRequest): Promise<MsgAnchorDataResponse>;

  /**
   *  SignData allows for signing of an arbitrary piece of data on the blockchain.
   *  By "signing" data the signers are making a statement about the veracity of the
   *  data itself. It is like signing a legal document, meaning that I agree to all
   *  conditions and to the best of my knowledge everything is true. When anchoring
   *  data, the sender is not attesting to the veracity of the data, they are simply
   *  communicating that it exists.
   *
   *  On-chain signatures have the following benefits:
   *  - on-chain identities can be managed using different cryptographic keys
   *    that change over time through key rotation practices
   *  - an on-chain identity may represent an organization and through delegation
   *    individual members may sign on behalf of the group
   *  - the blockchain transaction envelope provides built-in replay protection
   *    and timestamping
   *
   *  SignData implicitly calls AnchorData if the data was not already anchored.
   *
   *  SignData can be called multiple times for the same CID with different signers
   *  and those signers will be appended to the list of signers.
   */
  SignData(request: MsgSignDataRequest): Promise<MsgSignDataResponse>;

  /**
   *  StoreData stores a piece of data corresponding to a CID on the blockchain.
   *
   *  Currently only data for CID's using sha2-256 and blake2b-256 hash algorithms
   *  can be stored on-chain.
   *
   *  StoreData implicitly calls AnchorData if the data was not already anchored.
   *
   *  The sender in StoreData is not attesting to the veracity of the underlying data.
   *  They can simply be a intermediary providing storage services.
   *  SignData should be used to create a digital signature attesting to the veracity of some piece of data.
   */
  StoreData(request: MsgStoreDataRequest): Promise<MsgStoreDataResponse>;

}

export class MsgClientImpl implements Msg {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  AnchorData(request: MsgAnchorDataRequest): Promise<MsgAnchorDataResponse> {
    const data = MsgAnchorDataRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1alpha1.Msg", "AnchorData", data);
    return promise.then(data => MsgAnchorDataResponse.decode(new Reader(data)));
  }

  SignData(request: MsgSignDataRequest): Promise<MsgSignDataResponse> {
    const data = MsgSignDataRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1alpha1.Msg", "SignData", data);
    return promise.then(data => MsgSignDataResponse.decode(new Reader(data)));
  }

  StoreData(request: MsgStoreDataRequest): Promise<MsgStoreDataResponse> {
    const data = MsgStoreDataRequest.encode(request).finish();
    const promise = this.rpc.request("regen.data.v1alpha1.Msg", "StoreData", data);
    return promise.then(data => MsgStoreDataResponse.decode(new Reader(data)));
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

export const MsgAnchorDataRequest = {
  encode(message: MsgAnchorDataRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.sender);
    writer.uint32(18).bytes(message.cid);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgAnchorDataRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAnchorDataRequest } as MsgAnchorDataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.cid = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAnchorDataRequest {
    const message = { ...baseMsgAnchorDataRequest } as MsgAnchorDataRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = bytesFromBase64(object.cid);
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAnchorDataRequest>): MsgAnchorDataRequest {
    const message = { ...baseMsgAnchorDataRequest } as MsgAnchorDataRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = new Uint8Array();
    }
    return message;
  },
  toJSON(message: MsgAnchorDataRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.cid !== undefined && (obj.cid = base64FromBytes(message.cid !== undefined ? message.cid : new Uint8Array()));
    return obj;
  },
};

export const MsgAnchorDataResponse = {
  encode(message: MsgAnchorDataResponse, writer: Writer = Writer.create()): Writer {
    if (message.timestamp !== undefined && message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgAnchorDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAnchorDataResponse } as MsgAnchorDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAnchorDataResponse {
    const message = { ...baseMsgAnchorDataResponse } as MsgAnchorDataResponse;
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAnchorDataResponse>): MsgAnchorDataResponse {
    const message = { ...baseMsgAnchorDataResponse } as MsgAnchorDataResponse;
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = undefined;
    }
    return message;
  },
  toJSON(message: MsgAnchorDataResponse): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp !== undefined ? message.timestamp.toISOString() : null);
    return obj;
  },
};

export const MsgSignDataRequest = {
  encode(message: MsgSignDataRequest, writer: Writer = Writer.create()): Writer {
    for (const v of message.signers) {
      writer.uint32(10).string(v!);
    }
    writer.uint32(18).bytes(message.cid);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgSignDataRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSignDataRequest } as MsgSignDataRequest;
    message.signers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signers.push(reader.string());
          break;
        case 2:
          message.cid = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSignDataRequest {
    const message = { ...baseMsgSignDataRequest } as MsgSignDataRequest;
    message.signers = [];
    if (object.signers !== undefined && object.signers !== null) {
      for (const e of object.signers) {
        message.signers.push(String(e));
      }
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = bytesFromBase64(object.cid);
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSignDataRequest>): MsgSignDataRequest {
    const message = { ...baseMsgSignDataRequest } as MsgSignDataRequest;
    message.signers = [];
    if (object.signers !== undefined && object.signers !== null) {
      for (const e of object.signers) {
        message.signers.push(e);
      }
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = new Uint8Array();
    }
    return message;
  },
  toJSON(message: MsgSignDataRequest): unknown {
    const obj: any = {};
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }
    message.cid !== undefined && (obj.cid = base64FromBytes(message.cid !== undefined ? message.cid : new Uint8Array()));
    return obj;
  },
};

export const MsgSignDataResponse = {
  encode(_: MsgSignDataResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgSignDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSignDataResponse } as MsgSignDataResponse;
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
  fromJSON(_: any): MsgSignDataResponse {
    const message = { ...baseMsgSignDataResponse } as MsgSignDataResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgSignDataResponse>): MsgSignDataResponse {
    const message = { ...baseMsgSignDataResponse } as MsgSignDataResponse;
    return message;
  },
  toJSON(_: MsgSignDataResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export const MsgStoreDataRequest = {
  encode(message: MsgStoreDataRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.sender);
    writer.uint32(18).bytes(message.cid);
    writer.uint32(26).bytes(message.content);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgStoreDataRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgStoreDataRequest } as MsgStoreDataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.cid = reader.bytes();
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
  fromJSON(object: any): MsgStoreDataRequest {
    const message = { ...baseMsgStoreDataRequest } as MsgStoreDataRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = bytesFromBase64(object.cid);
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = bytesFromBase64(object.content);
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgStoreDataRequest>): MsgStoreDataRequest {
    const message = { ...baseMsgStoreDataRequest } as MsgStoreDataRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = new Uint8Array();
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    } else {
      message.content = new Uint8Array();
    }
    return message;
  },
  toJSON(message: MsgStoreDataRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.cid !== undefined && (obj.cid = base64FromBytes(message.cid !== undefined ? message.cid : new Uint8Array()));
    message.content !== undefined && (obj.content = base64FromBytes(message.content !== undefined ? message.content : new Uint8Array()));
    return obj;
  },
};

export const MsgStoreDataResponse = {
  encode(_: MsgStoreDataResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgStoreDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgStoreDataResponse } as MsgStoreDataResponse;
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
  fromJSON(_: any): MsgStoreDataResponse {
    const message = { ...baseMsgStoreDataResponse } as MsgStoreDataResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgStoreDataResponse>): MsgStoreDataResponse {
    const message = { ...baseMsgStoreDataResponse } as MsgStoreDataResponse;
    return message;
  },
  toJSON(_: MsgStoreDataResponse): unknown {
    const obj: any = {};
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