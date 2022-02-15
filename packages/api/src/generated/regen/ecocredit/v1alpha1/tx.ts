/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'regen.ecocredit.v1alpha1';

/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateClass {
  $type: 'regen.ecocredit.v1alpha1.MsgCreateClass';
  /** admin is the address of the account that created the credit class. */
  admin: string;
  /** issuers are the account addresses of the approved issuers. */
  issuers: string[];
  /** metadata is any arbitrary metadata to attached to the credit class. */
  metadata: Uint8Array;
  /** credit_type_name describes the type of credit (e.g. "carbon", "biodiversity"). */
  creditTypeName: string;
}

/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponse {
  $type: 'regen.ecocredit.v1alpha1.MsgCreateClassResponse';
  /** class_id is the unique ID of the newly created credit class. */
  classId: string;
}

/** MsgCreateBatch is the Msg/CreateBatch request type. */
export interface MsgCreateBatch {
  $type: 'regen.ecocredit.v1alpha1.MsgCreateBatch';
  /** issuer is the address of the batch issuer. */
  issuer: string;
  /** class_id is the unique ID of the class. */
  classId: string;
  /** issuance are the credits issued in the batch. */
  issuance: MsgCreateBatch_BatchIssuance[];
  /** metadata is any arbitrary metadata attached to the credit batch. */
  metadata: Uint8Array;
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
   * batch. It is a string of the form
   * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
   * fields conforming to ISO 3166-2, and postal-code being up to 64
   * alphanumeric characters. country-code is required, while sub-national-code
   * and postal-code can be added for increasing precision.
   */
  projectLocation: string;
}

/**
 * BatchIssuance represents the issuance of some credits in a batch to a
 * single recipient.
 */
export interface MsgCreateBatch_BatchIssuance {
  $type: 'regen.ecocredit.v1alpha1.MsgCreateBatch.BatchIssuance';
  /** recipient is the account of the recipient. */
  recipient: string;
  /**
   * tradable_amount is the number of credits in this issuance that can be
   * traded by this recipient. Decimal values are acceptable.
   */
  tradableAmount: string;
  /**
   * retired_amount is the number of credits in this issuance that are
   * effectively retired by the issuer on receipt. Decimal values are
   * acceptable.
   */
  retiredAmount: string;
  /**
   * retirement_location is the location of the beneficiary or buyer of the
   * retired credits. This must be provided if retired_amount is positive. It
   * is a string of the form
   * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
   * fields conforming to ISO 3166-2, and postal-code being up to 64
   * alphanumeric characters.
   */
  retirementLocation: string;
}

/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponse {
  $type: 'regen.ecocredit.v1alpha1.MsgCreateBatchResponse';
  /** batch_denom is the unique denomination ID of the newly created batch. */
  batchDenom: string;
}

/** MsgSend is the Msg/Send request type. */
export interface MsgSend {
  $type: 'regen.ecocredit.v1alpha1.MsgSend';
  /** sender is the address of the account sending credits. */
  sender: string;
  /** sender is the address of the account receiving credits. */
  recipient: string;
  /** credits are the credits being sent. */
  credits: MsgSend_SendCredits[];
}

/**
 * SendCredits specifies a batch and the number of credits being transferred.
 * This is split into tradable credits, which will remain tradable on receipt,
 * and retired credits, which will be retired on receipt.
 */
export interface MsgSend_SendCredits {
  $type: 'regen.ecocredit.v1alpha1.MsgSend.SendCredits';
  /** batch_denom is the unique ID of the credit batch. */
  batchDenom: string;
  /**
   * tradable_amount is the number of credits in this transfer that can be
   * traded by the recipient. Decimal values are acceptable within the
   * precision returned by Query/Precision.
   */
  tradableAmount: string;
  /**
   * retired_amount is the number of credits in this transfer that are
   * effectively retired by the issuer on receipt. Decimal values are
   * acceptable within the precision returned by Query/Precision.
   */
  retiredAmount: string;
  /**
   * retirement_location is the location of the beneficiary or buyer of the
   * retired credits. This must be provided if retired_amount is positive. It
   * is a string of the form
   * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
   * fields conforming to ISO 3166-2, and postal-code being up to 64
   * alphanumeric characters.
   */
  retirementLocation: string;
}

/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponse {
  $type: 'regen.ecocredit.v1alpha1.MsgSendResponse';
}

/** MsgRetire is the Msg/Retire request type. */
export interface MsgRetire {
  $type: 'regen.ecocredit.v1alpha1.MsgRetire';
  /** holder is the credit holder address. */
  holder: string;
  /** credits are the credits being retired. */
  credits: MsgRetire_RetireCredits[];
  /**
   * location is the location of the beneficiary or buyer of the retired
   * credits. It is a string of the form
   * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
   * fields conforming to ISO 3166-2, and postal-code being up to 64
   * alphanumeric characters.
   */
  location: string;
}

/** RetireCredits specifies a batch and the number of credits being retired. */
export interface MsgRetire_RetireCredits {
  $type: 'regen.ecocredit.v1alpha1.MsgRetire.RetireCredits';
  /** batch_denom is the unique ID of the credit batch. */
  batchDenom: string;
  /**
   * amount is the number of credits being retired.
   * Decimal values are acceptable within the precision returned by
   * Query/Precision.
   */
  amount: string;
}

/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponse {
  $type: 'regen.ecocredit.v1alpha1.MsgRetireResponse';
}

/** MsgCancel is the Msg/Cancel request type. */
export interface MsgCancel {
  $type: 'regen.ecocredit.v1alpha1.MsgCancel';
  /** holder is the credit holder address. */
  holder: string;
  /** credits are the credits being cancelled. */
  credits: MsgCancel_CancelCredits[];
}

/** CancelCredits specifies a batch and the number of credits being cancelled. */
export interface MsgCancel_CancelCredits {
  $type: 'regen.ecocredit.v1alpha1.MsgCancel.CancelCredits';
  /** batch_denom is the unique ID of the credit batch. */
  batchDenom: string;
  /**
   * amount is the number of credits being cancelled.
   * Decimal values are acceptable within the precision returned by
   * Query/Precision.
   */
  amount: string;
}

/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponse {
  $type: 'regen.ecocredit.v1alpha1.MsgCancelResponse';
}

/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */
export interface MsgUpdateClassAdmin {
  $type: 'regen.ecocredit.v1alpha1.MsgUpdateClassAdmin';
  /** admin is the address of the account that is the admin of the credit class. */
  admin: string;
  /** class_id is the unique ID of the credit class. */
  classId: string;
  /** new_admin is the address of the new admin of the credit class. */
  newAdmin: string;
}

/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */
export interface MsgUpdateClassAdminResponse {
  $type: 'regen.ecocredit.v1alpha1.MsgUpdateClassAdminResponse';
}

/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */
export interface MsgUpdateClassIssuers {
  $type: 'regen.ecocredit.v1alpha1.MsgUpdateClassIssuers';
  /** admin is the address of the account that is the admin of the credit class. */
  admin: string;
  /** class_id is the unique ID of the credit class. */
  classId: string;
  /** issuers are the updated account addresses of the approved issuers. */
  issuers: string[];
}

/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */
export interface MsgUpdateClassIssuersResponse {
  $type: 'regen.ecocredit.v1alpha1.MsgUpdateClassIssuersResponse';
}

/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */
export interface MsgUpdateClassMetadata {
  $type: 'regen.ecocredit.v1alpha1.MsgUpdateClassMetadata';
  /** admin is the address of the account that is the admin of the credit class. */
  admin: string;
  /** class_id is the unique ID of the credit class. */
  classId: string;
  /** metadata is the updated arbitrary metadata to be attached to the credit class. */
  metadata: Uint8Array;
}

/** MsgUpdateClassMetadataResponse is the MsgUpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponse {
  $type: 'regen.ecocredit.v1alpha1.MsgUpdateClassMetadataResponse';
}

function createBaseMsgCreateClass(): MsgCreateClass {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgCreateClass',
    admin: '',
    issuers: [],
    metadata: new Uint8Array(),
    creditTypeName: '',
  };
}

export const MsgCreateClass = {
  $type: 'regen.ecocredit.v1alpha1.MsgCreateClass' as const,

  encode(
    message: MsgCreateClass,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.issuers) {
      writer.uint32(18).string(v!);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    if (message.creditTypeName !== '') {
      writer.uint32(34).string(message.creditTypeName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.issuers.push(reader.string());
          break;
        case 3:
          message.metadata = reader.bytes();
          break;
        case 4:
          message.creditTypeName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateClass {
    return {
      $type: MsgCreateClass.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      issuers: Array.isArray(object?.issuers)
        ? object.issuers.map((e: any) => String(e))
        : [],
      metadata: isSet(object.metadata)
        ? bytesFromBase64(object.metadata)
        : new Uint8Array(),
      creditTypeName: isSet(object.creditTypeName)
        ? String(object.creditTypeName)
        : '',
    };
  },

  toJSON(message: MsgCreateClass): unknown {
    const obj: any = {};
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
    message.creditTypeName !== undefined &&
      (obj.creditTypeName = message.creditTypeName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateClass>, I>>(
    object: I,
  ): MsgCreateClass {
    const message = createBaseMsgCreateClass();
    message.admin = object.admin ?? '';
    message.issuers = object.issuers?.map(e => e) || [];
    message.metadata = object.metadata ?? new Uint8Array();
    message.creditTypeName = object.creditTypeName ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgCreateClass.$type, MsgCreateClass);

function createBaseMsgCreateClassResponse(): MsgCreateClassResponse {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgCreateClassResponse',
    classId: '',
  };
}

export const MsgCreateClassResponse = {
  $type: 'regen.ecocredit.v1alpha1.MsgCreateClassResponse' as const,

  encode(
    message: MsgCreateClassResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.classId !== '') {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateClassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateClassResponse {
    return {
      $type: MsgCreateClassResponse.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
    };
  },

  toJSON(message: MsgCreateClassResponse): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateClassResponse>, I>>(
    object: I,
  ): MsgCreateClassResponse {
    const message = createBaseMsgCreateClassResponse();
    message.classId = object.classId ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgCreateClassResponse.$type, MsgCreateClassResponse);

function createBaseMsgCreateBatch(): MsgCreateBatch {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgCreateBatch',
    issuer: '',
    classId: '',
    issuance: [],
    metadata: new Uint8Array(),
    startDate: undefined,
    endDate: undefined,
    projectLocation: '',
  };
}

export const MsgCreateBatch = {
  $type: 'regen.ecocredit.v1alpha1.MsgCreateBatch' as const,

  encode(
    message: MsgCreateBatch,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.issuer !== '') {
      writer.uint32(10).string(message.issuer);
    }
    if (message.classId !== '') {
      writer.uint32(18).string(message.classId);
    }
    for (const v of message.issuance) {
      MsgCreateBatch_BatchIssuance.encode(
        v!,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.metadata.length !== 0) {
      writer.uint32(34).bytes(message.metadata);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startDate),
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endDate),
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.projectLocation !== '') {
      writer.uint32(58).string(message.projectLocation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.issuance.push(
            MsgCreateBatch_BatchIssuance.decode(reader, reader.uint32()),
          );
          break;
        case 4:
          message.metadata = reader.bytes();
          break;
        case 5:
          message.startDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        case 6:
          message.endDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        case 7:
          message.projectLocation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBatch {
    return {
      $type: MsgCreateBatch.$type,
      issuer: isSet(object.issuer) ? String(object.issuer) : '',
      classId: isSet(object.classId) ? String(object.classId) : '',
      issuance: Array.isArray(object?.issuance)
        ? object.issuance.map((e: any) =>
            MsgCreateBatch_BatchIssuance.fromJSON(e),
          )
        : [],
      metadata: isSet(object.metadata)
        ? bytesFromBase64(object.metadata)
        : new Uint8Array(),
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

  toJSON(message: MsgCreateBatch): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.classId !== undefined && (obj.classId = message.classId);
    if (message.issuance) {
      obj.issuance = message.issuance.map(e =>
        e ? MsgCreateBatch_BatchIssuance.toJSON(e) : undefined,
      );
    } else {
      obj.issuance = [];
    }
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array(),
      ));
    message.startDate !== undefined &&
      (obj.startDate = message.startDate.toISOString());
    message.endDate !== undefined &&
      (obj.endDate = message.endDate.toISOString());
    message.projectLocation !== undefined &&
      (obj.projectLocation = message.projectLocation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBatch>, I>>(
    object: I,
  ): MsgCreateBatch {
    const message = createBaseMsgCreateBatch();
    message.issuer = object.issuer ?? '';
    message.classId = object.classId ?? '';
    message.issuance =
      object.issuance?.map(e => MsgCreateBatch_BatchIssuance.fromPartial(e)) ||
      [];
    message.metadata = object.metadata ?? new Uint8Array();
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.projectLocation = object.projectLocation ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgCreateBatch.$type, MsgCreateBatch);

function createBaseMsgCreateBatch_BatchIssuance(): MsgCreateBatch_BatchIssuance {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgCreateBatch.BatchIssuance',
    recipient: '',
    tradableAmount: '',
    retiredAmount: '',
    retirementLocation: '',
  };
}

export const MsgCreateBatch_BatchIssuance = {
  $type: 'regen.ecocredit.v1alpha1.MsgCreateBatch.BatchIssuance' as const,

  encode(
    message: MsgCreateBatch_BatchIssuance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.recipient !== '') {
      writer.uint32(10).string(message.recipient);
    }
    if (message.tradableAmount !== '') {
      writer.uint32(18).string(message.tradableAmount);
    }
    if (message.retiredAmount !== '') {
      writer.uint32(26).string(message.retiredAmount);
    }
    if (message.retirementLocation !== '') {
      writer.uint32(34).string(message.retirementLocation);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateBatch_BatchIssuance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBatch_BatchIssuance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.tradableAmount = reader.string();
          break;
        case 3:
          message.retiredAmount = reader.string();
          break;
        case 4:
          message.retirementLocation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBatch_BatchIssuance {
    return {
      $type: MsgCreateBatch_BatchIssuance.$type,
      recipient: isSet(object.recipient) ? String(object.recipient) : '',
      tradableAmount: isSet(object.tradableAmount)
        ? String(object.tradableAmount)
        : '',
      retiredAmount: isSet(object.retiredAmount)
        ? String(object.retiredAmount)
        : '',
      retirementLocation: isSet(object.retirementLocation)
        ? String(object.retirementLocation)
        : '',
    };
  },

  toJSON(message: MsgCreateBatch_BatchIssuance): unknown {
    const obj: any = {};
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.tradableAmount !== undefined &&
      (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined &&
      (obj.retiredAmount = message.retiredAmount);
    message.retirementLocation !== undefined &&
      (obj.retirementLocation = message.retirementLocation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBatch_BatchIssuance>, I>>(
    object: I,
  ): MsgCreateBatch_BatchIssuance {
    const message = createBaseMsgCreateBatch_BatchIssuance();
    message.recipient = object.recipient ?? '';
    message.tradableAmount = object.tradableAmount ?? '';
    message.retiredAmount = object.retiredAmount ?? '';
    message.retirementLocation = object.retirementLocation ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  MsgCreateBatch_BatchIssuance.$type,
  MsgCreateBatch_BatchIssuance,
);

function createBaseMsgCreateBatchResponse(): MsgCreateBatchResponse {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgCreateBatchResponse',
    batchDenom: '',
  };
}

export const MsgCreateBatchResponse = {
  $type: 'regen.ecocredit.v1alpha1.MsgCreateBatchResponse' as const,

  encode(
    message: MsgCreateBatchResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.batchDenom !== '') {
      writer.uint32(10).string(message.batchDenom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBatchResponse {
    return {
      $type: MsgCreateBatchResponse.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
    };
  },

  toJSON(message: MsgCreateBatchResponse): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBatchResponse>, I>>(
    object: I,
  ): MsgCreateBatchResponse {
    const message = createBaseMsgCreateBatchResponse();
    message.batchDenom = object.batchDenom ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgCreateBatchResponse.$type, MsgCreateBatchResponse);

function createBaseMsgSend(): MsgSend {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgSend',
    sender: '',
    recipient: '',
    credits: [],
  };
}

export const MsgSend = {
  $type: 'regen.ecocredit.v1alpha1.MsgSend' as const,

  encode(
    message: MsgSend,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== '') {
      writer.uint32(18).string(message.recipient);
    }
    for (const v of message.credits) {
      MsgSend_SendCredits.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.credits.push(
            MsgSend_SendCredits.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSend {
    return {
      $type: MsgSend.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      recipient: isSet(object.recipient) ? String(object.recipient) : '',
      credits: Array.isArray(object?.credits)
        ? object.credits.map((e: any) => MsgSend_SendCredits.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgSend): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.credits) {
      obj.credits = message.credits.map(e =>
        e ? MsgSend_SendCredits.toJSON(e) : undefined,
      );
    } else {
      obj.credits = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSend>, I>>(object: I): MsgSend {
    const message = createBaseMsgSend();
    message.sender = object.sender ?? '';
    message.recipient = object.recipient ?? '';
    message.credits =
      object.credits?.map(e => MsgSend_SendCredits.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgSend.$type, MsgSend);

function createBaseMsgSend_SendCredits(): MsgSend_SendCredits {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgSend.SendCredits',
    batchDenom: '',
    tradableAmount: '',
    retiredAmount: '',
    retirementLocation: '',
  };
}

export const MsgSend_SendCredits = {
  $type: 'regen.ecocredit.v1alpha1.MsgSend.SendCredits' as const,

  encode(
    message: MsgSend_SendCredits,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.batchDenom !== '') {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.tradableAmount !== '') {
      writer.uint32(18).string(message.tradableAmount);
    }
    if (message.retiredAmount !== '') {
      writer.uint32(26).string(message.retiredAmount);
    }
    if (message.retirementLocation !== '') {
      writer.uint32(34).string(message.retirementLocation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend_SendCredits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend_SendCredits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        case 2:
          message.tradableAmount = reader.string();
          break;
        case 3:
          message.retiredAmount = reader.string();
          break;
        case 4:
          message.retirementLocation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSend_SendCredits {
    return {
      $type: MsgSend_SendCredits.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      tradableAmount: isSet(object.tradableAmount)
        ? String(object.tradableAmount)
        : '',
      retiredAmount: isSet(object.retiredAmount)
        ? String(object.retiredAmount)
        : '',
      retirementLocation: isSet(object.retirementLocation)
        ? String(object.retirementLocation)
        : '',
    };
  },

  toJSON(message: MsgSend_SendCredits): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.tradableAmount !== undefined &&
      (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined &&
      (obj.retiredAmount = message.retiredAmount);
    message.retirementLocation !== undefined &&
      (obj.retirementLocation = message.retirementLocation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSend_SendCredits>, I>>(
    object: I,
  ): MsgSend_SendCredits {
    const message = createBaseMsgSend_SendCredits();
    message.batchDenom = object.batchDenom ?? '';
    message.tradableAmount = object.tradableAmount ?? '';
    message.retiredAmount = object.retiredAmount ?? '';
    message.retirementLocation = object.retirementLocation ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgSend_SendCredits.$type, MsgSend_SendCredits);

function createBaseMsgSendResponse(): MsgSendResponse {
  return { $type: 'regen.ecocredit.v1alpha1.MsgSendResponse' };
}

export const MsgSendResponse = {
  $type: 'regen.ecocredit.v1alpha1.MsgSendResponse' as const,

  encode(
    _: MsgSendResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();
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

  fromJSON(_: any): MsgSendResponse {
    return {
      $type: MsgSendResponse.$type,
    };
  },

  toJSON(_: MsgSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendResponse>, I>>(
    _: I,
  ): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgSendResponse.$type, MsgSendResponse);

function createBaseMsgRetire(): MsgRetire {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgRetire',
    holder: '',
    credits: [],
    location: '',
  };
}

export const MsgRetire = {
  $type: 'regen.ecocredit.v1alpha1.MsgRetire' as const,

  encode(
    message: MsgRetire,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.holder !== '') {
      writer.uint32(10).string(message.holder);
    }
    for (const v of message.credits) {
      MsgRetire_RetireCredits.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.location !== '') {
      writer.uint32(26).string(message.location);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetire {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetire();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.holder = reader.string();
          break;
        case 2:
          message.credits.push(
            MsgRetire_RetireCredits.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.location = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRetire {
    return {
      $type: MsgRetire.$type,
      holder: isSet(object.holder) ? String(object.holder) : '',
      credits: Array.isArray(object?.credits)
        ? object.credits.map((e: any) => MsgRetire_RetireCredits.fromJSON(e))
        : [],
      location: isSet(object.location) ? String(object.location) : '',
    };
  },

  toJSON(message: MsgRetire): unknown {
    const obj: any = {};
    message.holder !== undefined && (obj.holder = message.holder);
    if (message.credits) {
      obj.credits = message.credits.map(e =>
        e ? MsgRetire_RetireCredits.toJSON(e) : undefined,
      );
    } else {
      obj.credits = [];
    }
    message.location !== undefined && (obj.location = message.location);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRetire>, I>>(
    object: I,
  ): MsgRetire {
    const message = createBaseMsgRetire();
    message.holder = object.holder ?? '';
    message.credits =
      object.credits?.map(e => MsgRetire_RetireCredits.fromPartial(e)) || [];
    message.location = object.location ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgRetire.$type, MsgRetire);

function createBaseMsgRetire_RetireCredits(): MsgRetire_RetireCredits {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgRetire.RetireCredits',
    batchDenom: '',
    amount: '',
  };
}

export const MsgRetire_RetireCredits = {
  $type: 'regen.ecocredit.v1alpha1.MsgRetire.RetireCredits' as const,

  encode(
    message: MsgRetire_RetireCredits,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.batchDenom !== '') {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.amount !== '') {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRetire_RetireCredits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetire_RetireCredits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRetire_RetireCredits {
    return {
      $type: MsgRetire_RetireCredits.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      amount: isSet(object.amount) ? String(object.amount) : '',
    };
  },

  toJSON(message: MsgRetire_RetireCredits): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRetire_RetireCredits>, I>>(
    object: I,
  ): MsgRetire_RetireCredits {
    const message = createBaseMsgRetire_RetireCredits();
    message.batchDenom = object.batchDenom ?? '';
    message.amount = object.amount ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgRetire_RetireCredits.$type, MsgRetire_RetireCredits);

function createBaseMsgRetireResponse(): MsgRetireResponse {
  return { $type: 'regen.ecocredit.v1alpha1.MsgRetireResponse' };
}

export const MsgRetireResponse = {
  $type: 'regen.ecocredit.v1alpha1.MsgRetireResponse' as const,

  encode(
    _: MsgRetireResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetireResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetireResponse();
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

  fromJSON(_: any): MsgRetireResponse {
    return {
      $type: MsgRetireResponse.$type,
    };
  },

  toJSON(_: MsgRetireResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRetireResponse>, I>>(
    _: I,
  ): MsgRetireResponse {
    const message = createBaseMsgRetireResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgRetireResponse.$type, MsgRetireResponse);

function createBaseMsgCancel(): MsgCancel {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgCancel',
    holder: '',
    credits: [],
  };
}

export const MsgCancel = {
  $type: 'regen.ecocredit.v1alpha1.MsgCancel' as const,

  encode(
    message: MsgCancel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.holder !== '') {
      writer.uint32(10).string(message.holder);
    }
    for (const v of message.credits) {
      MsgCancel_CancelCredits.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.holder = reader.string();
          break;
        case 2:
          message.credits.push(
            MsgCancel_CancelCredits.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancel {
    return {
      $type: MsgCancel.$type,
      holder: isSet(object.holder) ? String(object.holder) : '',
      credits: Array.isArray(object?.credits)
        ? object.credits.map((e: any) => MsgCancel_CancelCredits.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgCancel): unknown {
    const obj: any = {};
    message.holder !== undefined && (obj.holder = message.holder);
    if (message.credits) {
      obj.credits = message.credits.map(e =>
        e ? MsgCancel_CancelCredits.toJSON(e) : undefined,
      );
    } else {
      obj.credits = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancel>, I>>(
    object: I,
  ): MsgCancel {
    const message = createBaseMsgCancel();
    message.holder = object.holder ?? '';
    message.credits =
      object.credits?.map(e => MsgCancel_CancelCredits.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgCancel.$type, MsgCancel);

function createBaseMsgCancel_CancelCredits(): MsgCancel_CancelCredits {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgCancel.CancelCredits',
    batchDenom: '',
    amount: '',
  };
}

export const MsgCancel_CancelCredits = {
  $type: 'regen.ecocredit.v1alpha1.MsgCancel.CancelCredits' as const,

  encode(
    message: MsgCancel_CancelCredits,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.batchDenom !== '') {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.amount !== '') {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCancel_CancelCredits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancel_CancelCredits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancel_CancelCredits {
    return {
      $type: MsgCancel_CancelCredits.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      amount: isSet(object.amount) ? String(object.amount) : '',
    };
  },

  toJSON(message: MsgCancel_CancelCredits): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancel_CancelCredits>, I>>(
    object: I,
  ): MsgCancel_CancelCredits {
    const message = createBaseMsgCancel_CancelCredits();
    message.batchDenom = object.batchDenom ?? '';
    message.amount = object.amount ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgCancel_CancelCredits.$type, MsgCancel_CancelCredits);

function createBaseMsgCancelResponse(): MsgCancelResponse {
  return { $type: 'regen.ecocredit.v1alpha1.MsgCancelResponse' };
}

export const MsgCancelResponse = {
  $type: 'regen.ecocredit.v1alpha1.MsgCancelResponse' as const,

  encode(
    _: MsgCancelResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelResponse();
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

  fromJSON(_: any): MsgCancelResponse {
    return {
      $type: MsgCancelResponse.$type,
    };
  },

  toJSON(_: MsgCancelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelResponse>, I>>(
    _: I,
  ): MsgCancelResponse {
    const message = createBaseMsgCancelResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgCancelResponse.$type, MsgCancelResponse);

function createBaseMsgUpdateClassAdmin(): MsgUpdateClassAdmin {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgUpdateClassAdmin',
    admin: '',
    classId: '',
    newAdmin: '',
  };
}

export const MsgUpdateClassAdmin = {
  $type: 'regen.ecocredit.v1alpha1.MsgUpdateClassAdmin' as const,

  encode(
    message: MsgUpdateClassAdmin,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    if (message.classId !== '') {
      writer.uint32(18).string(message.classId);
    }
    if (message.newAdmin !== '') {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateClassAdmin {
    return {
      $type: MsgUpdateClassAdmin.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      classId: isSet(object.classId) ? String(object.classId) : '',
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : '',
    };
  },

  toJSON(message: MsgUpdateClassAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.classId !== undefined && (obj.classId = message.classId);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateClassAdmin>, I>>(
    object: I,
  ): MsgUpdateClassAdmin {
    const message = createBaseMsgUpdateClassAdmin();
    message.admin = object.admin ?? '';
    message.classId = object.classId ?? '';
    message.newAdmin = object.newAdmin ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateClassAdmin.$type, MsgUpdateClassAdmin);

function createBaseMsgUpdateClassAdminResponse(): MsgUpdateClassAdminResponse {
  return { $type: 'regen.ecocredit.v1alpha1.MsgUpdateClassAdminResponse' };
}

export const MsgUpdateClassAdminResponse = {
  $type: 'regen.ecocredit.v1alpha1.MsgUpdateClassAdminResponse' as const,

  encode(
    _: MsgUpdateClassAdminResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateClassAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassAdminResponse();
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

  fromJSON(_: any): MsgUpdateClassAdminResponse {
    return {
      $type: MsgUpdateClassAdminResponse.$type,
    };
  },

  toJSON(_: MsgUpdateClassAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateClassAdminResponse>, I>>(
    _: I,
  ): MsgUpdateClassAdminResponse {
    const message = createBaseMsgUpdateClassAdminResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateClassAdminResponse.$type,
  MsgUpdateClassAdminResponse,
);

function createBaseMsgUpdateClassIssuers(): MsgUpdateClassIssuers {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgUpdateClassIssuers',
    admin: '',
    classId: '',
    issuers: [],
  };
}

export const MsgUpdateClassIssuers = {
  $type: 'regen.ecocredit.v1alpha1.MsgUpdateClassIssuers' as const,

  encode(
    message: MsgUpdateClassIssuers,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    if (message.classId !== '') {
      writer.uint32(18).string(message.classId);
    }
    for (const v of message.issuers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateClassIssuers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassIssuers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.issuers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateClassIssuers {
    return {
      $type: MsgUpdateClassIssuers.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      classId: isSet(object.classId) ? String(object.classId) : '',
      issuers: Array.isArray(object?.issuers)
        ? object.issuers.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgUpdateClassIssuers): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.classId !== undefined && (obj.classId = message.classId);
    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e);
    } else {
      obj.issuers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateClassIssuers>, I>>(
    object: I,
  ): MsgUpdateClassIssuers {
    const message = createBaseMsgUpdateClassIssuers();
    message.admin = object.admin ?? '';
    message.classId = object.classId ?? '';
    message.issuers = object.issuers?.map(e => e) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateClassIssuers.$type, MsgUpdateClassIssuers);

function createBaseMsgUpdateClassIssuersResponse(): MsgUpdateClassIssuersResponse {
  return { $type: 'regen.ecocredit.v1alpha1.MsgUpdateClassIssuersResponse' };
}

export const MsgUpdateClassIssuersResponse = {
  $type: 'regen.ecocredit.v1alpha1.MsgUpdateClassIssuersResponse' as const,

  encode(
    _: MsgUpdateClassIssuersResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateClassIssuersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassIssuersResponse();
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

  fromJSON(_: any): MsgUpdateClassIssuersResponse {
    return {
      $type: MsgUpdateClassIssuersResponse.$type,
    };
  },

  toJSON(_: MsgUpdateClassIssuersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateClassIssuersResponse>, I>>(
    _: I,
  ): MsgUpdateClassIssuersResponse {
    const message = createBaseMsgUpdateClassIssuersResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateClassIssuersResponse.$type,
  MsgUpdateClassIssuersResponse,
);

function createBaseMsgUpdateClassMetadata(): MsgUpdateClassMetadata {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgUpdateClassMetadata',
    admin: '',
    classId: '',
    metadata: new Uint8Array(),
  };
}

export const MsgUpdateClassMetadata = {
  $type: 'regen.ecocredit.v1alpha1.MsgUpdateClassMetadata' as const,

  encode(
    message: MsgUpdateClassMetadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.admin !== '') {
      writer.uint32(10).string(message.admin);
    }
    if (message.classId !== '') {
      writer.uint32(18).string(message.classId);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateClassMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateClassMetadata {
    return {
      $type: MsgUpdateClassMetadata.$type,
      admin: isSet(object.admin) ? String(object.admin) : '',
      classId: isSet(object.classId) ? String(object.classId) : '',
      metadata: isSet(object.metadata)
        ? bytesFromBase64(object.metadata)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgUpdateClassMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.classId !== undefined && (obj.classId = message.classId);
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateClassMetadata>, I>>(
    object: I,
  ): MsgUpdateClassMetadata {
    const message = createBaseMsgUpdateClassMetadata();
    message.admin = object.admin ?? '';
    message.classId = object.classId ?? '';
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateClassMetadata.$type, MsgUpdateClassMetadata);

function createBaseMsgUpdateClassMetadataResponse(): MsgUpdateClassMetadataResponse {
  return { $type: 'regen.ecocredit.v1alpha1.MsgUpdateClassMetadataResponse' };
}

export const MsgUpdateClassMetadataResponse = {
  $type: 'regen.ecocredit.v1alpha1.MsgUpdateClassMetadataResponse' as const,

  encode(
    _: MsgUpdateClassMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateClassMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassMetadataResponse();
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

  fromJSON(_: any): MsgUpdateClassMetadataResponse {
    return {
      $type: MsgUpdateClassMetadataResponse.$type,
    };
  },

  toJSON(_: MsgUpdateClassMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateClassMetadataResponse>, I>>(
    _: I,
  ): MsgUpdateClassMetadataResponse {
    const message = createBaseMsgUpdateClassMetadataResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateClassMetadataResponse.$type,
  MsgUpdateClassMetadataResponse,
);

/** Msg is the regen.ecocredit.v1alpha1 Msg service. */
export interface Msg {
  /**
   * CreateClass creates a new credit class with an approved list of issuers and
   * optional metadata.
   */
  CreateClass(
    request: DeepPartial<MsgCreateClass>,
  ): Promise<MsgCreateClassResponse>;
  /**
   * CreateBatch creates a new batch of credits for an existing credit class.
   * This will create a new batch denom with a fixed supply. Issued credits can
   * be distributed to recipients in either tradable or retired form.
   */
  CreateBatch(
    request: DeepPartial<MsgCreateBatch>,
  ): Promise<MsgCreateBatchResponse>;
  /**
   * Send sends tradable credits from one account to another account. Sent
   * credits can either be tradable or retired on receipt.
   */
  Send(request: DeepPartial<MsgSend>): Promise<MsgSendResponse>;
  /** Retire retires a specified number of credits in the holder's account. */
  Retire(request: DeepPartial<MsgRetire>): Promise<MsgRetireResponse>;
  /**
   * Cancel removes a number of credits from the holder's account and also
   * deducts them from the tradable supply, effectively cancelling their
   * issuance on Regen Ledger
   */
  Cancel(request: DeepPartial<MsgCancel>): Promise<MsgCancelResponse>;
  /** UpdateClassAdmin updates the credit class admin */
  UpdateClassAdmin(
    request: DeepPartial<MsgUpdateClassAdmin>,
  ): Promise<MsgUpdateClassAdminResponse>;
  /** UpdateClassIssuers updates the credit class issuer list */
  UpdateClassIssuers(
    request: DeepPartial<MsgUpdateClassIssuers>,
  ): Promise<MsgUpdateClassIssuersResponse>;
  /** UpdateClassMetadata updates the credit class metadata */
  UpdateClassMetadata(
    request: DeepPartial<MsgUpdateClassMetadata>,
  ): Promise<MsgUpdateClassMetadataResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateClass = this.CreateClass.bind(this);
    this.CreateBatch = this.CreateBatch.bind(this);
    this.Send = this.Send.bind(this);
    this.Retire = this.Retire.bind(this);
    this.Cancel = this.Cancel.bind(this);
    this.UpdateClassAdmin = this.UpdateClassAdmin.bind(this);
    this.UpdateClassIssuers = this.UpdateClassIssuers.bind(this);
    this.UpdateClassMetadata = this.UpdateClassMetadata.bind(this);
  }
  CreateClass(request: MsgCreateClass): Promise<MsgCreateClassResponse> {
    const data = MsgCreateClass.encode(request).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Msg',
      'CreateClass',
      data,
    );
    return promise.then(data =>
      MsgCreateClassResponse.decode(new _m0.Reader(data)),
    );
  }

  CreateBatch(request: MsgCreateBatch): Promise<MsgCreateBatchResponse> {
    const data = MsgCreateBatch.encode(request).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Msg',
      'CreateBatch',
      data,
    );
    return promise.then(data =>
      MsgCreateBatchResponse.decode(new _m0.Reader(data)),
    );
  }

  Send(request: MsgSend): Promise<MsgSendResponse> {
    const data = MsgSend.encode(request).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Msg',
      'Send',
      data,
    );
    return promise.then(data => MsgSendResponse.decode(new _m0.Reader(data)));
  }

  Retire(request: MsgRetire): Promise<MsgRetireResponse> {
    const data = MsgRetire.encode(request).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Msg',
      'Retire',
      data,
    );
    return promise.then(data => MsgRetireResponse.decode(new _m0.Reader(data)));
  }

  Cancel(request: MsgCancel): Promise<MsgCancelResponse> {
    const data = MsgCancel.encode(request).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Msg',
      'Cancel',
      data,
    );
    return promise.then(data => MsgCancelResponse.decode(new _m0.Reader(data)));
  }

  UpdateClassAdmin(
    request: MsgUpdateClassAdmin,
  ): Promise<MsgUpdateClassAdminResponse> {
    const data = MsgUpdateClassAdmin.encode(request).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Msg',
      'UpdateClassAdmin',
      data,
    );
    return promise.then(data =>
      MsgUpdateClassAdminResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateClassIssuers(
    request: MsgUpdateClassIssuers,
  ): Promise<MsgUpdateClassIssuersResponse> {
    const data = MsgUpdateClassIssuers.encode(request).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Msg',
      'UpdateClassIssuers',
      data,
    );
    return promise.then(data =>
      MsgUpdateClassIssuersResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateClassMetadata(
    request: MsgUpdateClassMetadata,
  ): Promise<MsgUpdateClassMetadataResponse> {
    const data = MsgUpdateClassMetadata.encode(request).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Msg',
      'UpdateClassMetadata',
      data,
    );
    return promise.then(data =>
      MsgUpdateClassMetadataResponse.decode(new _m0.Reader(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

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
  : P &
      { [K in keyof P]: Exact<P[K], I[K]> } &
      Record<Exclude<keyof I, KeysOfUnion<P> | '$type'>, never>;

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
