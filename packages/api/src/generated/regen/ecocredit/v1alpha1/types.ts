/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  ClassInfo represents the high-level on-chain information for a credit class.
 */
export interface ClassInfo {
  /**
   *  class_id is the unique ID of credit class.
   */
  classId: string;
  /**
   *  designer is the designer of the credit class.
   */
  designer: string;
  /**
   *  issuers are the approved issuers of the credit class.
   */
  issuers: string[];
  /**
   *  metadata is any arbitrary metadata to attached to the credit class.
   */
  metadata: Uint8Array;
}

/**
 *  BatchInfo represents the high-level on-chain information for a credit batch.
 */
export interface BatchInfo {
  /**
   *  class_id is the unique ID of credit class.
   */
  classId: string;
  /**
   *  batch_denom is the unique ID of credit batch.
   */
  batchDenom: string;
  /**
   *  issuer is the issuer of the credit batch.
   */
  issuer: string;
  /**
   *  total_units is the total number of units in the credit batch and is immutable.
   */
  totalUnits: string;
  /**
   *  metadata is any arbitrary metadata to attached to the credit batch.
   */
  metadata: Uint8Array;
}

const baseClassInfo: object = {
  classId: "",
  designer: "",
  issuers: "",
};

const baseBatchInfo: object = {
  classId: "",
  batchDenom: "",
  issuer: "",
  totalUnits: "",
};

export const protobufPackage = 'regen.ecocredit.v1alpha1'

export const ClassInfo = {
  encode(message: ClassInfo, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.classId);
    writer.uint32(18).string(message.designer);
    for (const v of message.issuers) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(34).bytes(message.metadata);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ClassInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClassInfo } as ClassInfo;
    message.issuers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.designer = reader.string();
          break;
        case 3:
          message.issuers.push(reader.string());
          break;
        case 4:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClassInfo {
    const message = { ...baseClassInfo } as ClassInfo;
    message.issuers = [];
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.designer !== undefined && object.designer !== null) {
      message.designer = String(object.designer);
    } else {
      message.designer = "";
    }
    if (object.issuers !== undefined && object.issuers !== null) {
      for (const e of object.issuers) {
        message.issuers.push(String(e));
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClassInfo>): ClassInfo {
    const message = { ...baseClassInfo } as ClassInfo;
    message.issuers = [];
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.designer !== undefined && object.designer !== null) {
      message.designer = object.designer;
    } else {
      message.designer = "";
    }
    if (object.issuers !== undefined && object.issuers !== null) {
      for (const e of object.issuers) {
        message.issuers.push(e);
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = new Uint8Array();
    }
    return message;
  },
  toJSON(message: ClassInfo): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.designer !== undefined && (obj.designer = message.designer);
    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e);
    } else {
      obj.issuers = [];
    }
    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    return obj;
  },
};

export const BatchInfo = {
  encode(message: BatchInfo, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.classId);
    writer.uint32(18).string(message.batchDenom);
    writer.uint32(26).string(message.issuer);
    writer.uint32(34).string(message.totalUnits);
    writer.uint32(42).bytes(message.metadata);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): BatchInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBatchInfo } as BatchInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.batchDenom = reader.string();
          break;
        case 3:
          message.issuer = reader.string();
          break;
        case 4:
          message.totalUnits = reader.string();
          break;
        case 5:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchInfo {
    const message = { ...baseBatchInfo } as BatchInfo;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = String(object.batchDenom);
    } else {
      message.batchDenom = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.totalUnits !== undefined && object.totalUnits !== null) {
      message.totalUnits = String(object.totalUnits);
    } else {
      message.totalUnits = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },
  fromPartial(object: DeepPartial<BatchInfo>): BatchInfo {
    const message = { ...baseBatchInfo } as BatchInfo;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = object.batchDenom;
    } else {
      message.batchDenom = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.totalUnits !== undefined && object.totalUnits !== null) {
      message.totalUnits = object.totalUnits;
    } else {
      message.totalUnits = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = new Uint8Array();
    }
    return message;
  },
  toJSON(message: BatchInfo): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.totalUnits !== undefined && (obj.totalUnits = message.totalUnits);
    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
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