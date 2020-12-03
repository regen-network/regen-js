/* eslint-disable */
import * as Long from 'long';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  CommitInfo defines commit information used by the multi-store when committing
 *  a version/height.
 */
export interface CommitInfo {
  version: Long;
  storeInfos: StoreInfo[];
}

/**
 *  StoreInfo defines store-specific commit information. It contains a reference
 *  between a store name and the commit ID.
 */
export interface StoreInfo {
  name: string;
  commitId?: CommitID;
}

/**
 *  CommitID defines the committment information when a specific store is
 *  committed.
 */
export interface CommitID {
  version: Long;
  hash: Uint8Array;
}

const baseCommitInfo: object = {
  version: Long.ZERO,
};

const baseStoreInfo: object = {
  name: "",
};

const baseCommitID: object = {
  version: Long.ZERO,
};

export const protobufPackage = 'cosmos.base.store.v1beta1'

export const CommitInfo = {
  encode(message: CommitInfo, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int64(message.version);
    for (const v of message.storeInfos) {
      StoreInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CommitInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitInfo } as CommitInfo;
    message.storeInfos = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64() as Long;
          break;
        case 2:
          message.storeInfos.push(StoreInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommitInfo {
    const message = { ...baseCommitInfo } as CommitInfo;
    message.storeInfos = [];
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromString(object.version);
    } else {
      message.version = Long.ZERO;
    }
    if (object.storeInfos !== undefined && object.storeInfos !== null) {
      for (const e of object.storeInfos) {
        message.storeInfos.push(StoreInfo.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CommitInfo>): CommitInfo {
    const message = { ...baseCommitInfo } as CommitInfo;
    message.storeInfos = [];
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version as Long;
    } else {
      message.version = Long.ZERO;
    }
    if (object.storeInfos !== undefined && object.storeInfos !== null) {
      for (const e of object.storeInfos) {
        message.storeInfos.push(StoreInfo.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: CommitInfo): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = (message.version || Long.ZERO).toString());
    if (message.storeInfos) {
      obj.storeInfos = message.storeInfos.map(e => e ? StoreInfo.toJSON(e) : undefined);
    } else {
      obj.storeInfos = [];
    }
    return obj;
  },
};

export const StoreInfo = {
  encode(message: StoreInfo, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    if (message.commitId !== undefined && message.commitId !== undefined) {
      CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): StoreInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStoreInfo } as StoreInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.commitId = CommitID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StoreInfo {
    const message = { ...baseStoreInfo } as StoreInfo;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.commitId !== undefined && object.commitId !== null) {
      message.commitId = CommitID.fromJSON(object.commitId);
    } else {
      message.commitId = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<StoreInfo>): StoreInfo {
    const message = { ...baseStoreInfo } as StoreInfo;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.commitId !== undefined && object.commitId !== null) {
      message.commitId = CommitID.fromPartial(object.commitId);
    } else {
      message.commitId = undefined;
    }
    return message;
  },
  toJSON(message: StoreInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.commitId !== undefined && (obj.commitId = message.commitId ? CommitID.toJSON(message.commitId) : undefined);
    return obj;
  },
};

export const CommitID = {
  encode(message: CommitID, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int64(message.version);
    writer.uint32(18).bytes(message.hash);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CommitID {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitID } as CommitID;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64() as Long;
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommitID {
    const message = { ...baseCommitID } as CommitID;
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromString(object.version);
    } else {
      message.version = Long.ZERO;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  fromPartial(object: DeepPartial<CommitID>): CommitID {
    const message = { ...baseCommitID } as CommitID;
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version as Long;
    } else {
      message.version = Long.ZERO;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = new Uint8Array();
    }
    return message;
  },
  toJSON(message: CommitID): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = (message.version || Long.ZERO).toString());
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
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