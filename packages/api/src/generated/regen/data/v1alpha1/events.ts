/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  EventAnchorData is an event emitted when data is anchored on-chain.
 */
export interface EventAnchorData {
  /**
   *  cid is a Content Identifier for the data corresponding to the IPFS CID
   *  specification: https://github.com/multiformats/cid.
   */
  cid: Uint8Array;
}

/**
 *  EventAnchorData is an event emitted when data is signed on-chain.
 */
export interface EventSignData {
  /**
   *  cid is a Content Identifier for the data corresponding to the IPFS CID
   *  specification: https://github.com/multiformats/cid.
   */
  cid: Uint8Array;
  /**
   *  signers are the addresses of the accounts which have signed the data.
   */
  signers: string[];
}

/**
 *  EventAnchorData is an event emitted when data is stored on-chain.
 */
export interface EventStoreData {
  /**
   *  cid is a Content Identifier for the data corresponding to the IPFS CID
   *  specification: https://github.com/multiformats/cid.
   */
  cid: Uint8Array;
}

const baseEventAnchorData: object = {
};

const baseEventSignData: object = {
  signers: "",
};

const baseEventStoreData: object = {
};

export const protobufPackage = 'regen.data.v1alpha1'

export const EventAnchorData = {
  encode(message: EventAnchorData, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).bytes(message.cid);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): EventAnchorData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventAnchorData } as EventAnchorData;
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
  fromJSON(object: any): EventAnchorData {
    const message = { ...baseEventAnchorData } as EventAnchorData;
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = bytesFromBase64(object.cid);
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventAnchorData>): EventAnchorData {
    const message = { ...baseEventAnchorData } as EventAnchorData;
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = new Uint8Array();
    }
    return message;
  },
  toJSON(message: EventAnchorData): unknown {
    const obj: any = {};
    message.cid !== undefined && (obj.cid = base64FromBytes(message.cid !== undefined ? message.cid : new Uint8Array()));
    return obj;
  },
};

export const EventSignData = {
  encode(message: EventSignData, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).bytes(message.cid);
    for (const v of message.signers) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): EventSignData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventSignData } as EventSignData;
    message.signers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cid = reader.bytes();
          break;
        case 2:
          message.signers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSignData {
    const message = { ...baseEventSignData } as EventSignData;
    message.signers = [];
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = bytesFromBase64(object.cid);
    }
    if (object.signers !== undefined && object.signers !== null) {
      for (const e of object.signers) {
        message.signers.push(String(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSignData>): EventSignData {
    const message = { ...baseEventSignData } as EventSignData;
    message.signers = [];
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = new Uint8Array();
    }
    if (object.signers !== undefined && object.signers !== null) {
      for (const e of object.signers) {
        message.signers.push(e);
      }
    }
    return message;
  },
  toJSON(message: EventSignData): unknown {
    const obj: any = {};
    message.cid !== undefined && (obj.cid = base64FromBytes(message.cid !== undefined ? message.cid : new Uint8Array()));
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }
    return obj;
  },
};

export const EventStoreData = {
  encode(message: EventStoreData, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).bytes(message.cid);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): EventStoreData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventStoreData } as EventStoreData;
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
  fromJSON(object: any): EventStoreData {
    const message = { ...baseEventStoreData } as EventStoreData;
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = bytesFromBase64(object.cid);
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventStoreData>): EventStoreData {
    const message = { ...baseEventStoreData } as EventStoreData;
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = new Uint8Array();
    }
    return message;
  },
  toJSON(message: EventStoreData): unknown {
    const obj: any = {};
    message.cid !== undefined && (obj.cid = base64FromBytes(message.cid !== undefined ? message.cid : new Uint8Array()));
    return obj;
  },
};

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