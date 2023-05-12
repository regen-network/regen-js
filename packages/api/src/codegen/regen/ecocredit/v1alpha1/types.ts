import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
/** ClassInfo represents the high-level on-chain information for a credit class. */

export interface ClassInfo {
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
/** ClassInfo represents the high-level on-chain information for a credit class. */

export interface ClassInfoSDKType {
  /** class_id is the unique ID of credit class. */
  class_id: string;
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

  credit_type?: CreditTypeSDKType;
  /** The number of batches issued in this credit class. */

  num_batches: Long;
}
/** BatchInfo represents the high-level on-chain information for a credit batch. */

export interface BatchInfo {
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

  startDate?: Timestamp;
  /**
   * end_date is the end of the period during which this credit batch was
   * quantified and verified.
   */

  endDate?: Timestamp;
  /**
   * project_location is the location of the project backing the credits in this
   * batch. Full documentation can be found in MsgCreateBatch.project_location.
   */

  projectLocation: string;
}
/** BatchInfo represents the high-level on-chain information for a credit batch. */

export interface BatchInfoSDKType {
  /** class_id is the unique ID of credit class. */
  class_id: string;
  /** batch_denom is the unique ID of credit batch. */

  batch_denom: string;
  /** issuer is the issuer of the credit batch. */

  issuer: string;
  /**
   * total_amount is the total number of active credits in the credit batch.
   * Some of the issued credits may be cancelled and will be removed from
   * total_amount and tracked in amount_cancelled. total_amount and
   * amount_cancelled will always sum to the original amount of credits that
   * were issued.
   */

  total_amount: string;
  /** metadata is any arbitrary metadata attached to the credit batch. */

  metadata: Uint8Array;
  /**
   * amount_cancelled is the number of credits in the batch that have been
   * cancelled, effectively undoing there issuance. The sum of total_amount and
   * amount_cancelled will always sum to the original amount of credits that
   * were issued.
   */

  amount_cancelled: string;
  /**
   * start_date is the beginning of the period during which this credit batch
   * was quantified and verified.
   */

  start_date?: TimestampSDKType;
  /**
   * end_date is the end of the period during which this credit batch was
   * quantified and verified.
   */

  end_date?: TimestampSDKType;
  /**
   * project_location is the location of the project backing the credits in this
   * batch. Full documentation can be found in MsgCreateBatch.project_location.
   */

  project_location: string;
}
/**
 * Params defines the updatable global parameters of the ecocredit module for
 * use with the x/params module.
 */

export interface Params {
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
 * Params defines the updatable global parameters of the ecocredit module for
 * use with the x/params module.
 */

export interface ParamsSDKType {
  /** credit_class_fee is the fixed fee charged on creation of a new credit class */
  credit_class_fee: CoinSDKType[];
  /**
   * allowed_class_creators is an allowlist defining the addresses with
   * the required permissions to create credit classes
   */

  allowed_class_creators: string[];
  /**
   * allowlist_enabled is a param that enables/disables the allowlist for credit
   * creation
   */

  allowlist_enabled: boolean;
  /** credit_types is a list of definitions for credit types */

  credit_types: CreditTypeSDKType[];
  /** basket_creation_fee is the fee to create a new basket denom. */

  basket_creation_fee: CoinSDKType[];
}
/**
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */

export interface CreditType {
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
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */

export interface CreditTypeSDKType {
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
  /** The credit type abbreviation */
  abbreviation: string;
  /** The sequence number of classes of the credit type */

  seqNumber: Long;
}
/**
 * CreditTypeSeq associates a sequence number with a credit type abbreviation.
 * This represents the number of credit classes created with that credit type.
 */

export interface CreditTypeSeqSDKType {
  /** The credit type abbreviation */
  abbreviation: string;
  /** The sequence number of classes of the credit type */

  seq_number: Long;
}

function createBaseClassInfo(): ClassInfo {
  return {
    classId: "",
    admin: "",
    issuers: [],
    metadata: new Uint8Array(),
    creditType: undefined,
    numBatches: Long.UZERO
  };
}

export const ClassInfo = {
  encode(message: ClassInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.admin !== "") {
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
          message.numBatches = (reader.uint64() as Long);
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
      classId: isSet(object.classId) ? String(object.classId) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => String(e)) : [],
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      creditType: isSet(object.creditType) ? CreditType.fromJSON(object.creditType) : undefined,
      numBatches: isSet(object.numBatches) ? Long.fromValue(object.numBatches) : Long.UZERO
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

    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    message.creditType !== undefined && (obj.creditType = message.creditType ? CreditType.toJSON(message.creditType) : undefined);
    message.numBatches !== undefined && (obj.numBatches = (message.numBatches || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<ClassInfo>): ClassInfo {
    const message = createBaseClassInfo();
    message.classId = object.classId ?? "";
    message.admin = object.admin ?? "";
    message.issuers = object.issuers?.map(e => e) || [];
    message.metadata = object.metadata ?? new Uint8Array();
    message.creditType = object.creditType !== undefined && object.creditType !== null ? CreditType.fromPartial(object.creditType) : undefined;
    message.numBatches = object.numBatches !== undefined && object.numBatches !== null ? Long.fromValue(object.numBatches) : Long.UZERO;
    return message;
  }

};

function createBaseBatchInfo(): BatchInfo {
  return {
    classId: "",
    batchDenom: "",
    issuer: "",
    totalAmount: "",
    metadata: new Uint8Array(),
    amountCancelled: "",
    startDate: undefined,
    endDate: undefined,
    projectLocation: ""
  };
}

export const BatchInfo = {
  encode(message: BatchInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }

    if (message.issuer !== "") {
      writer.uint32(26).string(message.issuer);
    }

    if (message.totalAmount !== "") {
      writer.uint32(34).string(message.totalAmount);
    }

    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }

    if (message.amountCancelled !== "") {
      writer.uint32(50).string(message.amountCancelled);
    }

    if (message.startDate !== undefined) {
      Timestamp.encode(message.startDate, writer.uint32(58).fork()).ldelim();
    }

    if (message.endDate !== undefined) {
      Timestamp.encode(message.endDate, writer.uint32(66).fork()).ldelim();
    }

    if (message.projectLocation !== "") {
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
          message.startDate = Timestamp.decode(reader, reader.uint32());
          break;

        case 8:
          message.endDate = Timestamp.decode(reader, reader.uint32());
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
      classId: isSet(object.classId) ? String(object.classId) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      amountCancelled: isSet(object.amountCancelled) ? String(object.amountCancelled) : "",
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      projectLocation: isSet(object.projectLocation) ? String(object.projectLocation) : ""
    };
  },

  toJSON(message: BatchInfo): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    message.amountCancelled !== undefined && (obj.amountCancelled = message.amountCancelled);
    message.startDate !== undefined && (obj.startDate = fromTimestamp(message.startDate).toISOString());
    message.endDate !== undefined && (obj.endDate = fromTimestamp(message.endDate).toISOString());
    message.projectLocation !== undefined && (obj.projectLocation = message.projectLocation);
    return obj;
  },

  fromPartial(object: Partial<BatchInfo>): BatchInfo {
    const message = createBaseBatchInfo();
    message.classId = object.classId ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.issuer = object.issuer ?? "";
    message.totalAmount = object.totalAmount ?? "";
    message.metadata = object.metadata ?? new Uint8Array();
    message.amountCancelled = object.amountCancelled ?? "";
    message.startDate = object.startDate !== undefined && object.startDate !== null ? Timestamp.fromPartial(object.startDate) : undefined;
    message.endDate = object.endDate !== undefined && object.endDate !== null ? Timestamp.fromPartial(object.endDate) : undefined;
    message.projectLocation = object.projectLocation ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    creditClassFee: [],
    allowedClassCreators: [],
    allowlistEnabled: false,
    creditTypes: [],
    basketCreationFee: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      creditClassFee: Array.isArray(object?.creditClassFee) ? object.creditClassFee.map((e: any) => Coin.fromJSON(e)) : [],
      allowedClassCreators: Array.isArray(object?.allowedClassCreators) ? object.allowedClassCreators.map((e: any) => String(e)) : [],
      allowlistEnabled: isSet(object.allowlistEnabled) ? Boolean(object.allowlistEnabled) : false,
      creditTypes: Array.isArray(object?.creditTypes) ? object.creditTypes.map((e: any) => CreditType.fromJSON(e)) : [],
      basketCreationFee: Array.isArray(object?.basketCreationFee) ? object.basketCreationFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};

    if (message.creditClassFee) {
      obj.creditClassFee = message.creditClassFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.creditClassFee = [];
    }

    if (message.allowedClassCreators) {
      obj.allowedClassCreators = message.allowedClassCreators.map(e => e);
    } else {
      obj.allowedClassCreators = [];
    }

    message.allowlistEnabled !== undefined && (obj.allowlistEnabled = message.allowlistEnabled);

    if (message.creditTypes) {
      obj.creditTypes = message.creditTypes.map(e => e ? CreditType.toJSON(e) : undefined);
    } else {
      obj.creditTypes = [];
    }

    if (message.basketCreationFee) {
      obj.basketCreationFee = message.basketCreationFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.basketCreationFee = [];
    }

    return obj;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.creditClassFee = object.creditClassFee?.map(e => Coin.fromPartial(e)) || [];
    message.allowedClassCreators = object.allowedClassCreators?.map(e => e) || [];
    message.allowlistEnabled = object.allowlistEnabled ?? false;
    message.creditTypes = object.creditTypes?.map(e => CreditType.fromPartial(e)) || [];
    message.basketCreationFee = object.basketCreationFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseCreditType(): CreditType {
  return {
    name: "",
    abbreviation: "",
    unit: "",
    precision: 0
  };
}

export const CreditType = {
  encode(message: CreditType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.abbreviation !== "") {
      writer.uint32(18).string(message.abbreviation);
    }

    if (message.unit !== "") {
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
      name: isSet(object.name) ? String(object.name) : "",
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
      precision: isSet(object.precision) ? Number(object.precision) : 0
    };
  },

  toJSON(message: CreditType): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    message.unit !== undefined && (obj.unit = message.unit);
    message.precision !== undefined && (obj.precision = Math.round(message.precision));
    return obj;
  },

  fromPartial(object: Partial<CreditType>): CreditType {
    const message = createBaseCreditType();
    message.name = object.name ?? "";
    message.abbreviation = object.abbreviation ?? "";
    message.unit = object.unit ?? "";
    message.precision = object.precision ?? 0;
    return message;
  }

};

function createBaseCreditTypeSeq(): CreditTypeSeq {
  return {
    abbreviation: "",
    seqNumber: Long.UZERO
  };
}

export const CreditTypeSeq = {
  encode(message: CreditTypeSeq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.abbreviation !== "") {
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
          message.seqNumber = (reader.uint64() as Long);
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
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
      seqNumber: isSet(object.seqNumber) ? Long.fromValue(object.seqNumber) : Long.UZERO
    };
  },

  toJSON(message: CreditTypeSeq): unknown {
    const obj: any = {};
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    message.seqNumber !== undefined && (obj.seqNumber = (message.seqNumber || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<CreditTypeSeq>): CreditTypeSeq {
    const message = createBaseCreditTypeSeq();
    message.abbreviation = object.abbreviation ?? "";
    message.seqNumber = object.seqNumber !== undefined && object.seqNumber !== null ? Long.fromValue(object.seqNumber) : Long.UZERO;
    return message;
  }

};