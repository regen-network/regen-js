/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'regen.ecocredit.v1alpha1';

/** ClassInfo represents the high-level on-chain information for a credit class. */
export interface ClassInfo {
  $type: 'regen.ecocredit.v1alpha1.ClassInfo';
  /** class_id is the unique ID of credit class. */
  classId: string;
  /** designer is the designer of the credit class. */
  designer: string;
  /** issuers are the approved issuers of the credit class. */
  issuers: string[];
  /** metadata is any arbitrary metadata to attached to the credit class. */
  metadata: Uint8Array;
}

/** BatchInfo represents the high-level on-chain information for a credit batch. */
export interface BatchInfo {
  $type: 'regen.ecocredit.v1alpha1.BatchInfo';
  /** class_id is the unique ID of credit class. */
  classId: string;
  /** batch_denom is the unique ID of credit batch. */
  batchDenom: string;
  /** issuer is the issuer of the credit batch. */
  issuer: string;
  /** total_units is the total number of units in the credit batch and is immutable. */
  totalUnits: string;
  /** metadata is any arbitrary metadata to attached to the credit batch. */
  metadata: Uint8Array;
}

function createBaseClassInfo(): ClassInfo {
  return {
    $type: 'regen.ecocredit.v1alpha1.ClassInfo',
    classId: '',
    designer: '',
    issuers: [],
    metadata: new Uint8Array(),
  };
}

export const ClassInfo = {
  $type: 'regen.ecocredit.v1alpha1.ClassInfo' as const,

  encode(
    message: ClassInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.classId !== '') {
      writer.uint32(10).string(message.classId);
    }
    if (message.designer !== '') {
      writer.uint32(18).string(message.designer);
    }
    for (const v of message.issuers) {
      writer.uint32(26).string(v!);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(34).bytes(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassInfo();
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
    return {
      $type: ClassInfo.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
      designer: isSet(object.designer) ? String(object.designer) : '',
      issuers: Array.isArray(object?.issuers)
        ? object.issuers.map((e: any) => String(e))
        : [],
      metadata: isSet(object.metadata)
        ? bytesFromBase64(object.metadata)
        : new Uint8Array(),
    };
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
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClassInfo>, I>>(
    object: I,
  ): ClassInfo {
    const message = createBaseClassInfo();
    message.classId = object.classId ?? '';
    message.designer = object.designer ?? '';
    message.issuers = object.issuers?.map(e => e) || [];
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(ClassInfo.$type, ClassInfo);

function createBaseBatchInfo(): BatchInfo {
  return {
    $type: 'regen.ecocredit.v1alpha1.BatchInfo',
    classId: '',
    batchDenom: '',
    issuer: '',
    totalUnits: '',
    metadata: new Uint8Array(),
  };
}

export const BatchInfo = {
  $type: 'regen.ecocredit.v1alpha1.BatchInfo' as const,

  encode(
    message: BatchInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.classId !== '') {
      writer.uint32(10).string(message.classId);
    }
    if (message.batchDenom !== '') {
      writer.uint32(18).string(message.batchDenom);
    }
    if (message.issuer !== '') {
      writer.uint32(26).string(message.issuer);
    }
    if (message.totalUnits !== '') {
      writer.uint32(34).string(message.totalUnits);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchInfo();
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
    return {
      $type: BatchInfo.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      issuer: isSet(object.issuer) ? String(object.issuer) : '',
      totalUnits: isSet(object.totalUnits) ? String(object.totalUnits) : '',
      metadata: isSet(object.metadata)
        ? bytesFromBase64(object.metadata)
        : new Uint8Array(),
    };
  },

  toJSON(message: BatchInfo): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.totalUnits !== undefined && (obj.totalUnits = message.totalUnits);
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchInfo>, I>>(
    object: I,
  ): BatchInfo {
    const message = createBaseBatchInfo();
    message.classId = object.classId ?? '';
    message.batchDenom = object.batchDenom ?? '';
    message.issuer = object.issuer ?? '';
    message.totalUnits = object.totalUnits ?? '';
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(BatchInfo.$type, BatchInfo);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  (b64 => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  (bin => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(''));
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
