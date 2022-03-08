/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../google/protobuf/timestamp';
import { Coin } from '../../../cosmos/base/v1beta1/coin';

export const protobufPackage = 'regen.ecocredit.v1alpha1';

/** ClassInfo represents the high-level on-chain information for a credit class. */
export interface ClassInfo {
  $type: 'regen.ecocredit.v1alpha1.ClassInfo';
  /** class_id is the unique ID of credit class. */
  classId: string;
  /** admin is the admin of the credit class. */
  admin: string;
  /** issuers are the approved issuers of the credit class. */
  issuers: string[];
  /** metadata is any arbitrary metadata to attached to the credit class. */
  metadata: Uint8Array;
  /**
   * credit_type describes the type of credit (e.g. carbon, biodiversity), as
   * well as unit and precision.
   */
  creditType?: CreditType;
  /** The number of batches issued in this credit class. */
  numBatches: Long;
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
  /**
   * total_amount is the total number of active credits in the credit batch.
   * Some of the issued credits may be cancelled and will be removed from
   * total_amount and tracked in amount_cancelled. total_amount and
   * amount_cancelled will always sum to the original amount of credits that
   * were issued.
   */
  totalAmount: string;
  /** metadata is any arbitrary metadata attached to the credit batch. */
  metadata: Uint8Array;
  /**
   * amount_cancelled is the number of credits in the batch that have been
   * cancelled, effectively undoing there issuance. The sum of total_amount and
   * amount_cancelled will always sum to the original amount of credits that
   * were issued.
   */
  amountCancelled: string;
  /**
   * start_date is the beginning of the period during which this credit batch
   * was quantified and verified.
   */
  startDate?: Date;
  /**
   * end_date is the end of the period during which this credit batch was
   * quantified and verified.
   */
  endDate?: Date;
  /**
   * project_location is the location of the project backing the credits in this
   * batch. Full documentation can be found in MsgCreateBatch.project_location.
   */
  projectLocation: string;
}

/**
 * Params defines the updatable global parameters of the ecocredit module for
 * use with the x/params module.
 */
export interface Params {
  $type: 'regen.ecocredit.v1alpha1.Params';
  /** credit_class_fee is the fixed fee charged on creation of a new credit class */
  creditClassFee: Coin[];
  /**
   * allowed_class_creators is an allowlist defining the addresses with
   * the required permissions to create credit classes
   */
  allowedClassCreators: string[];
  /**
   * allowlist_enabled is a param that enables/disables the allowlist for credit
   * creation
   */
  allowlistEnabled: boolean;
  /** credit_types is a list of definitions for credit types */
  creditTypes: CreditType[];
  /** basket_creation_fee is the fee to create a new basket denom. */
  basketCreationFee: Coin[];
}

/**
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */
export interface CreditType {
  $type: 'regen.ecocredit.v1alpha1.CreditType';
  /** the type of credit (e.g. carbon, biodiversity, etc) */
  name: string;
  /**
   * abbreviation is a 1-3 character uppercase abbreviation of the CreditType
   * name, used in batch denominations within the CreditType. It must be unique.
   */
  abbreviation: string;
  /** the measurement unit (e.g. kg, ton, etc) */
  unit: string;
  /** the decimal precision */
  precision: number;
}

/**
 * CreditTypeSeq associates a sequence number with a credit type abbreviation.
 * This represents the number of credit classes created with that credit type.
 */
export interface CreditTypeSeq {
  $type: 'regen.ecocredit.v1alpha1.CreditTypeSeq';
  /** The credit type abbreviation */
  abbreviation: string;
  /** The sequence number of classes of the credit type */
  seqNumber: Long;
}

function createBaseClassInfo(): ClassInfo {
  return {
    $type: 'regen.ecocredit.v1alpha1.ClassInfo',
    classId: '',
    admin: '',
    issuers: [],
    metadata: new Uint8Array(),
    creditType: undefined,
    numBatches: Long.UZERO,
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
    if (message.admin !== '') {
      writer.uint32(18).string(message.admin);
    }
    for (const v of message.issuers) {
      writer.uint32(26).string(v!);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(34).bytes(message.metadata);
    }
    if (message.creditType !== undefined) {
      CreditType.encode(message.creditType, writer.uint32(42).fork()).ldelim();
    }
    if (!message.numBatches.isZero()) {
      writer.uint32(48).uint64(message.numBatches);
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
          message.admin = reader.string();
          break;
        case 3:
          message.issuers.push(reader.string());
          break;
        case 4:
          message.metadata = reader.bytes();
          break;
        case 5:
          message.creditType = CreditType.decode(reader, reader.uint32());
          break;
        case 6:
          message.numBatches = reader.uint64() as Long;
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
      admin: isSet(object.admin) ? String(object.admin) : '',
      issuers: Array.isArray(object?.issuers)
        ? object.issuers.map((e: any) => String(e))
        : [],
      metadata: isSet(object.metadata)
        ? bytesFromBase64(object.metadata)
        : new Uint8Array(),
      creditType: isSet(object.creditType)
        ? CreditType.fromJSON(object.creditType)
        : undefined,
      numBatches: isSet(object.numBatches)
        ? Long.fromString(object.numBatches)
        : Long.UZERO,
    };
  },

  toJSON(message: ClassInfo): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e);
    } else {
      obj.issuers = [];
    }
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array(),
      ));
    message.creditType !== undefined &&
      (obj.creditType = message.creditType
        ? CreditType.toJSON(message.creditType)
        : undefined);
    message.numBatches !== undefined &&
      (obj.numBatches = (message.numBatches || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClassInfo>, I>>(
    object: I,
  ): ClassInfo {
    const message = createBaseClassInfo();
    message.classId = object.classId ?? '';
    message.admin = object.admin ?? '';
    message.issuers = object.issuers?.map(e => e) || [];
    message.metadata = object.metadata ?? new Uint8Array();
    message.creditType =
      object.creditType !== undefined && object.creditType !== null
        ? CreditType.fromPartial(object.creditType)
        : undefined;
    message.numBatches =
      object.numBatches !== undefined && object.numBatches !== null
        ? Long.fromValue(object.numBatches)
        : Long.UZERO;
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
    totalAmount: '',
    metadata: new Uint8Array(),
    amountCancelled: '',
    startDate: undefined,
    endDate: undefined,
    projectLocation: '',
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
    if (message.totalAmount !== '') {
      writer.uint32(34).string(message.totalAmount);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    if (message.amountCancelled !== '') {
      writer.uint32(50).string(message.amountCancelled);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startDate),
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endDate),
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.projectLocation !== '') {
      writer.uint32(74).string(message.projectLocation);
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
          message.totalAmount = reader.string();
          break;
        case 5:
          message.metadata = reader.bytes();
          break;
        case 6:
          message.amountCancelled = reader.string();
          break;
        case 7:
          message.startDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        case 8:
          message.endDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        case 9:
          message.projectLocation = reader.string();
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
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : '',
      metadata: isSet(object.metadata)
        ? bytesFromBase64(object.metadata)
        : new Uint8Array(),
      amountCancelled: isSet(object.amountCancelled)
        ? String(object.amountCancelled)
        : '',
      startDate: isSet(object.startDate)
        ? fromJsonTimestamp(object.startDate)
        : undefined,
      endDate: isSet(object.endDate)
        ? fromJsonTimestamp(object.endDate)
        : undefined,
      projectLocation: isSet(object.projectLocation)
        ? String(object.projectLocation)
        : '',
    };
  },

  toJSON(message: BatchInfo): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.totalAmount !== undefined &&
      (obj.totalAmount = message.totalAmount);
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array(),
      ));
    message.amountCancelled !== undefined &&
      (obj.amountCancelled = message.amountCancelled);
    message.startDate !== undefined &&
      (obj.startDate = message.startDate.toISOString());
    message.endDate !== undefined &&
      (obj.endDate = message.endDate.toISOString());
    message.projectLocation !== undefined &&
      (obj.projectLocation = message.projectLocation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchInfo>, I>>(
    object: I,
  ): BatchInfo {
    const message = createBaseBatchInfo();
    message.classId = object.classId ?? '';
    message.batchDenom = object.batchDenom ?? '';
    message.issuer = object.issuer ?? '';
    message.totalAmount = object.totalAmount ?? '';
    message.metadata = object.metadata ?? new Uint8Array();
    message.amountCancelled = object.amountCancelled ?? '';
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.projectLocation = object.projectLocation ?? '';
    return message;
  },
};

messageTypeRegistry.set(BatchInfo.$type, BatchInfo);

function createBaseParams(): Params {
  return {
    $type: 'regen.ecocredit.v1alpha1.Params',
    creditClassFee: [],
    allowedClassCreators: [],
    allowlistEnabled: false,
    creditTypes: [],
    basketCreationFee: [],
  };
}

export const Params = {
  $type: 'regen.ecocredit.v1alpha1.Params' as const,

  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.creditClassFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.allowedClassCreators) {
      writer.uint32(18).string(v!);
    }
    if (message.allowlistEnabled === true) {
      writer.uint32(24).bool(message.allowlistEnabled);
    }
    for (const v of message.creditTypes) {
      CreditType.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.basketCreationFee) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creditClassFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.allowedClassCreators.push(reader.string());
          break;
        case 3:
          message.allowlistEnabled = reader.bool();
          break;
        case 4:
          message.creditTypes.push(CreditType.decode(reader, reader.uint32()));
          break;
        case 5:
          message.basketCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      $type: Params.$type,
      creditClassFee: Array.isArray(object?.creditClassFee)
        ? object.creditClassFee.map((e: any) => Coin.fromJSON(e))
        : [],
      allowedClassCreators: Array.isArray(object?.allowedClassCreators)
        ? object.allowedClassCreators.map((e: any) => String(e))
        : [],
      allowlistEnabled: isSet(object.allowlistEnabled)
        ? Boolean(object.allowlistEnabled)
        : false,
      creditTypes: Array.isArray(object?.creditTypes)
        ? object.creditTypes.map((e: any) => CreditType.fromJSON(e))
        : [],
      basketCreationFee: Array.isArray(object?.basketCreationFee)
        ? object.basketCreationFee.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.creditClassFee) {
      obj.creditClassFee = message.creditClassFee.map(e =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.creditClassFee = [];
    }
    if (message.allowedClassCreators) {
      obj.allowedClassCreators = message.allowedClassCreators.map(e => e);
    } else {
      obj.allowedClassCreators = [];
    }
    message.allowlistEnabled !== undefined &&
      (obj.allowlistEnabled = message.allowlistEnabled);
    if (message.creditTypes) {
      obj.creditTypes = message.creditTypes.map(e =>
        e ? CreditType.toJSON(e) : undefined,
      );
    } else {
      obj.creditTypes = [];
    }
    if (message.basketCreationFee) {
      obj.basketCreationFee = message.basketCreationFee.map(e =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.basketCreationFee = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.creditClassFee =
      object.creditClassFee?.map(e => Coin.fromPartial(e)) || [];
    message.allowedClassCreators =
      object.allowedClassCreators?.map(e => e) || [];
    message.allowlistEnabled = object.allowlistEnabled ?? false;
    message.creditTypes =
      object.creditTypes?.map(e => CreditType.fromPartial(e)) || [];
    message.basketCreationFee =
      object.basketCreationFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Params.$type, Params);

function createBaseCreditType(): CreditType {
  return {
    $type: 'regen.ecocredit.v1alpha1.CreditType',
    name: '',
    abbreviation: '',
    unit: '',
    precision: 0,
  };
}

export const CreditType = {
  $type: 'regen.ecocredit.v1alpha1.CreditType' as const,

  encode(
    message: CreditType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.abbreviation !== '') {
      writer.uint32(18).string(message.abbreviation);
    }
    if (message.unit !== '') {
      writer.uint32(26).string(message.unit);
    }
    if (message.precision !== 0) {
      writer.uint32(32).uint32(message.precision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreditType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreditType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.abbreviation = reader.string();
          break;
        case 3:
          message.unit = reader.string();
          break;
        case 4:
          message.precision = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreditType {
    return {
      $type: CreditType.$type,
      name: isSet(object.name) ? String(object.name) : '',
      abbreviation: isSet(object.abbreviation)
        ? String(object.abbreviation)
        : '',
      unit: isSet(object.unit) ? String(object.unit) : '',
      precision: isSet(object.precision) ? Number(object.precision) : 0,
    };
  },

  toJSON(message: CreditType): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.abbreviation !== undefined &&
      (obj.abbreviation = message.abbreviation);
    message.unit !== undefined && (obj.unit = message.unit);
    message.precision !== undefined &&
      (obj.precision = Math.round(message.precision));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreditType>, I>>(
    object: I,
  ): CreditType {
    const message = createBaseCreditType();
    message.name = object.name ?? '';
    message.abbreviation = object.abbreviation ?? '';
    message.unit = object.unit ?? '';
    message.precision = object.precision ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CreditType.$type, CreditType);

function createBaseCreditTypeSeq(): CreditTypeSeq {
  return {
    $type: 'regen.ecocredit.v1alpha1.CreditTypeSeq',
    abbreviation: '',
    seqNumber: Long.UZERO,
  };
}

export const CreditTypeSeq = {
  $type: 'regen.ecocredit.v1alpha1.CreditTypeSeq' as const,

  encode(
    message: CreditTypeSeq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.abbreviation !== '') {
      writer.uint32(10).string(message.abbreviation);
    }
    if (!message.seqNumber.isZero()) {
      writer.uint32(16).uint64(message.seqNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreditTypeSeq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreditTypeSeq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abbreviation = reader.string();
          break;
        case 2:
          message.seqNumber = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreditTypeSeq {
    return {
      $type: CreditTypeSeq.$type,
      abbreviation: isSet(object.abbreviation)
        ? String(object.abbreviation)
        : '',
      seqNumber: isSet(object.seqNumber)
        ? Long.fromString(object.seqNumber)
        : Long.UZERO,
    };
  },

  toJSON(message: CreditTypeSeq): unknown {
    const obj: any = {};
    message.abbreviation !== undefined &&
      (obj.abbreviation = message.abbreviation);
    message.seqNumber !== undefined &&
      (obj.seqNumber = (message.seqNumber || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreditTypeSeq>, I>>(
    object: I,
  ): CreditTypeSeq {
    const message = createBaseCreditTypeSeq();
    message.abbreviation = object.abbreviation ?? '';
    message.seqNumber =
      object.seqNumber !== undefined && object.seqNumber !== null
        ? Long.fromValue(object.seqNumber)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(CreditTypeSeq.$type, CreditTypeSeq);

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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === 'string') {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
