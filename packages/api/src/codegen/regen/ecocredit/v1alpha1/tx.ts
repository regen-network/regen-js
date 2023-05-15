import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
/** MsgCreateClass is the Msg/CreateClass request type. */

export interface MsgCreateClass {
  /** admin is the address of the account that created the credit class. */
  admin: string;
  /** issuers are the account addresses of the approved issuers. */

  issuers: string[];
  /** metadata is any arbitrary metadata to attached to the credit class. */

  metadata: Uint8Array;
  /**
   * credit_type_name describes the type of credit (e.g. "carbon",
   * "biodiversity").
   */

  creditTypeName: string;
}
/** MsgCreateClass is the Msg/CreateClass request type. */

export interface MsgCreateClassSDKType {
  /** admin is the address of the account that created the credit class. */
  admin: string;
  /** issuers are the account addresses of the approved issuers. */

  issuers: string[];
  /** metadata is any arbitrary metadata to attached to the credit class. */

  metadata: Uint8Array;
  /**
   * credit_type_name describes the type of credit (e.g. "carbon",
   * "biodiversity").
   */

  credit_type_name: string;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */

export interface MsgCreateClassResponse {
  /** class_id is the unique ID of the newly created credit class. */
  classId: string;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */

export interface MsgCreateClassResponseSDKType {
  /** class_id is the unique ID of the newly created credit class. */
  class_id: string;
}
/** MsgCreateBatch is the Msg/CreateBatch request type. */

export interface MsgCreateBatch {
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

  startDate?: Timestamp;
  /**
   * end_date is the end of the period during which this credit batch was
   * quantified and verified.
   */

  endDate?: Timestamp;
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
/** MsgCreateBatch is the Msg/CreateBatch request type. */

export interface MsgCreateBatchSDKType {
  /** issuer is the address of the batch issuer. */
  issuer: string;
  /** class_id is the unique ID of the class. */

  class_id: string;
  /** issuance are the credits issued in the batch. */

  issuance: MsgCreateBatch_BatchIssuanceSDKType[];
  /** metadata is any arbitrary metadata attached to the credit batch. */

  metadata: Uint8Array;
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
   * batch. It is a string of the form
   * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
   * fields conforming to ISO 3166-2, and postal-code being up to 64
   * alphanumeric characters. country-code is required, while sub-national-code
   * and postal-code can be added for increasing precision.
   */

  project_location: string;
}
/**
 * BatchIssuance represents the issuance of some credits in a batch to a
 * single recipient.
 */

export interface MsgCreateBatch_BatchIssuance {
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
/**
 * BatchIssuance represents the issuance of some credits in a batch to a
 * single recipient.
 */

export interface MsgCreateBatch_BatchIssuanceSDKType {
  /** recipient is the account of the recipient. */
  recipient: string;
  /**
   * tradable_amount is the number of credits in this issuance that can be
   * traded by this recipient. Decimal values are acceptable.
   */

  tradable_amount: string;
  /**
   * retired_amount is the number of credits in this issuance that are
   * effectively retired by the issuer on receipt. Decimal values are
   * acceptable.
   */

  retired_amount: string;
  /**
   * retirement_location is the location of the beneficiary or buyer of the
   * retired credits. This must be provided if retired_amount is positive. It
   * is a string of the form
   * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
   * fields conforming to ISO 3166-2, and postal-code being up to 64
   * alphanumeric characters.
   */

  retirement_location: string;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */

export interface MsgCreateBatchResponse {
  /** batch_denom is the unique denomination ID of the newly created batch. */
  batchDenom: string;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */

export interface MsgCreateBatchResponseSDKType {
  /** batch_denom is the unique denomination ID of the newly created batch. */
  batch_denom: string;
}
/** MsgSend is the Msg/Send request type. */

export interface MsgSend {
  /** sender is the address of the account sending credits. */
  sender: string;
  /** sender is the address of the account receiving credits. */

  recipient: string;
  /** credits are the credits being sent. */

  credits: MsgSend_SendCredits[];
}
/** MsgSend is the Msg/Send request type. */

export interface MsgSendSDKType {
  /** sender is the address of the account sending credits. */
  sender: string;
  /** sender is the address of the account receiving credits. */

  recipient: string;
  /** credits are the credits being sent. */

  credits: MsgSend_SendCreditsSDKType[];
}
/**
 * SendCredits specifies a batch and the number of credits being transferred.
 * This is split into tradable credits, which will remain tradable on receipt,
 * and retired credits, which will be retired on receipt.
 */

export interface MsgSend_SendCredits {
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
/**
 * SendCredits specifies a batch and the number of credits being transferred.
 * This is split into tradable credits, which will remain tradable on receipt,
 * and retired credits, which will be retired on receipt.
 */

export interface MsgSend_SendCreditsSDKType {
  /** batch_denom is the unique ID of the credit batch. */
  batch_denom: string;
  /**
   * tradable_amount is the number of credits in this transfer that can be
   * traded by the recipient. Decimal values are acceptable within the
   * precision returned by Query/Precision.
   */

  tradable_amount: string;
  /**
   * retired_amount is the number of credits in this transfer that are
   * effectively retired by the issuer on receipt. Decimal values are
   * acceptable within the precision returned by Query/Precision.
   */

  retired_amount: string;
  /**
   * retirement_location is the location of the beneficiary or buyer of the
   * retired credits. This must be provided if retired_amount is positive. It
   * is a string of the form
   * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
   * fields conforming to ISO 3166-2, and postal-code being up to 64
   * alphanumeric characters.
   */

  retirement_location: string;
}
/** MsgSendResponse is the Msg/Send response type. */

export interface MsgSendResponse {}
/** MsgSendResponse is the Msg/Send response type. */

export interface MsgSendResponseSDKType {}
/** MsgRetire is the Msg/Retire request type. */

export interface MsgRetire {
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
/** MsgRetire is the Msg/Retire request type. */

export interface MsgRetireSDKType {
  /** holder is the credit holder address. */
  holder: string;
  /** credits are the credits being retired. */

  credits: MsgRetire_RetireCreditsSDKType[];
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
  /** batch_denom is the unique ID of the credit batch. */
  batchDenom: string;
  /**
   * amount is the number of credits being retired.
   * Decimal values are acceptable within the precision returned by
   * Query/Precision.
   */

  amount: string;
}
/** RetireCredits specifies a batch and the number of credits being retired. */

export interface MsgRetire_RetireCreditsSDKType {
  /** batch_denom is the unique ID of the credit batch. */
  batch_denom: string;
  /**
   * amount is the number of credits being retired.
   * Decimal values are acceptable within the precision returned by
   * Query/Precision.
   */

  amount: string;
}
/** MsgRetire is the Msg/Retire response type. */

export interface MsgRetireResponse {}
/** MsgRetire is the Msg/Retire response type. */

export interface MsgRetireResponseSDKType {}
/** MsgCancel is the Msg/Cancel request type. */

export interface MsgCancel {
  /** holder is the credit holder address. */
  holder: string;
  /** credits are the credits being cancelled. */

  credits: MsgCancel_CancelCredits[];
}
/** MsgCancel is the Msg/Cancel request type. */

export interface MsgCancelSDKType {
  /** holder is the credit holder address. */
  holder: string;
  /** credits are the credits being cancelled. */

  credits: MsgCancel_CancelCreditsSDKType[];
}
/** CancelCredits specifies a batch and the number of credits being cancelled. */

export interface MsgCancel_CancelCredits {
  /** batch_denom is the unique ID of the credit batch. */
  batchDenom: string;
  /**
   * amount is the number of credits being cancelled.
   * Decimal values are acceptable within the precision returned by
   * Query/Precision.
   */

  amount: string;
}
/** CancelCredits specifies a batch and the number of credits being cancelled. */

export interface MsgCancel_CancelCreditsSDKType {
  /** batch_denom is the unique ID of the credit batch. */
  batch_denom: string;
  /**
   * amount is the number of credits being cancelled.
   * Decimal values are acceptable within the precision returned by
   * Query/Precision.
   */

  amount: string;
}
/** MsgCancelResponse is the Msg/Cancel response type. */

export interface MsgCancelResponse {}
/** MsgCancelResponse is the Msg/Cancel response type. */

export interface MsgCancelResponseSDKType {}
/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */

export interface MsgUpdateClassAdmin {
  /** admin is the address of the account that is the admin of the credit class. */
  admin: string;
  /** class_id is the unique ID of the credit class. */

  classId: string;
  /** new_admin is the address of the new admin of the credit class. */

  newAdmin: string;
}
/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */

export interface MsgUpdateClassAdminSDKType {
  /** admin is the address of the account that is the admin of the credit class. */
  admin: string;
  /** class_id is the unique ID of the credit class. */

  class_id: string;
  /** new_admin is the address of the new admin of the credit class. */

  new_admin: string;
}
/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */

export interface MsgUpdateClassAdminResponse {}
/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */

export interface MsgUpdateClassAdminResponseSDKType {}
/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */

export interface MsgUpdateClassIssuers {
  /** admin is the address of the account that is the admin of the credit class. */
  admin: string;
  /** class_id is the unique ID of the credit class. */

  classId: string;
  /** issuers are the updated account addresses of the approved issuers. */

  issuers: string[];
}
/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */

export interface MsgUpdateClassIssuersSDKType {
  /** admin is the address of the account that is the admin of the credit class. */
  admin: string;
  /** class_id is the unique ID of the credit class. */

  class_id: string;
  /** issuers are the updated account addresses of the approved issuers. */

  issuers: string[];
}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */

export interface MsgUpdateClassIssuersResponse {}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */

export interface MsgUpdateClassIssuersResponseSDKType {}
/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */

export interface MsgUpdateClassMetadata {
  /** admin is the address of the account that is the admin of the credit class. */
  admin: string;
  /** class_id is the unique ID of the credit class. */

  classId: string;
  /**
   * metadata is the updated arbitrary metadata to be attached to the credit
   * class.
   */

  metadata: Uint8Array;
}
/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */

export interface MsgUpdateClassMetadataSDKType {
  /** admin is the address of the account that is the admin of the credit class. */
  admin: string;
  /** class_id is the unique ID of the credit class. */

  class_id: string;
  /**
   * metadata is the updated arbitrary metadata to be attached to the credit
   * class.
   */

  metadata: Uint8Array;
}
/** MsgUpdateClassMetadataResponse is the MsgUpdateClassMetadata response type. */

export interface MsgUpdateClassMetadataResponse {}
/** MsgUpdateClassMetadataResponse is the MsgUpdateClassMetadata response type. */

export interface MsgUpdateClassMetadataResponseSDKType {}

function createBaseMsgCreateClass(): MsgCreateClass {
  return {
    admin: "",
    issuers: [],
    metadata: new Uint8Array(),
    creditTypeName: ""
  };
}

export const MsgCreateClass = {
  encode(message: MsgCreateClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    for (const v of message.issuers) {
      writer.uint32(18).string(v!);
    }

    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }

    if (message.creditTypeName !== "") {
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
      admin: isSet(object.admin) ? String(object.admin) : "",
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => String(e)) : [],
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      creditTypeName: isSet(object.creditTypeName) ? String(object.creditTypeName) : ""
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

    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    message.creditTypeName !== undefined && (obj.creditTypeName = message.creditTypeName);
    return obj;
  },

  fromPartial(object: Partial<MsgCreateClass>): MsgCreateClass {
    const message = createBaseMsgCreateClass();
    message.admin = object.admin ?? "";
    message.issuers = object.issuers?.map(e => e) || [];
    message.metadata = object.metadata ?? new Uint8Array();
    message.creditTypeName = object.creditTypeName ?? "";
    return message;
  }

};

function createBaseMsgCreateClassResponse(): MsgCreateClassResponse {
  return {
    classId: ""
  };
}

export const MsgCreateClassResponse = {
  encode(message: MsgCreateClassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClassResponse {
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
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: MsgCreateClassResponse): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: Partial<MsgCreateClassResponse>): MsgCreateClassResponse {
    const message = createBaseMsgCreateClassResponse();
    message.classId = object.classId ?? "";
    return message;
  }

};

function createBaseMsgCreateBatch(): MsgCreateBatch {
  return {
    issuer: "",
    classId: "",
    issuance: [],
    metadata: new Uint8Array(),
    startDate: undefined,
    endDate: undefined,
    projectLocation: ""
  };
}

export const MsgCreateBatch = {
  encode(message: MsgCreateBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    for (const v of message.issuance) {
      MsgCreateBatch_BatchIssuance.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.metadata.length !== 0) {
      writer.uint32(34).bytes(message.metadata);
    }

    if (message.startDate !== undefined) {
      Timestamp.encode(message.startDate, writer.uint32(42).fork()).ldelim();
    }

    if (message.endDate !== undefined) {
      Timestamp.encode(message.endDate, writer.uint32(50).fork()).ldelim();
    }

    if (message.projectLocation !== "") {
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
          message.issuance.push(MsgCreateBatch_BatchIssuance.decode(reader, reader.uint32()));
          break;

        case 4:
          message.metadata = reader.bytes();
          break;

        case 5:
          message.startDate = Timestamp.decode(reader, reader.uint32());
          break;

        case 6:
          message.endDate = Timestamp.decode(reader, reader.uint32());
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
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      issuance: Array.isArray(object?.issuance) ? object.issuance.map((e: any) => MsgCreateBatch_BatchIssuance.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      projectLocation: isSet(object.projectLocation) ? String(object.projectLocation) : ""
    };
  },

  toJSON(message: MsgCreateBatch): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.classId !== undefined && (obj.classId = message.classId);

    if (message.issuance) {
      obj.issuance = message.issuance.map(e => e ? MsgCreateBatch_BatchIssuance.toJSON(e) : undefined);
    } else {
      obj.issuance = [];
    }

    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    message.startDate !== undefined && (obj.startDate = fromTimestamp(message.startDate).toISOString());
    message.endDate !== undefined && (obj.endDate = fromTimestamp(message.endDate).toISOString());
    message.projectLocation !== undefined && (obj.projectLocation = message.projectLocation);
    return obj;
  },

  fromPartial(object: Partial<MsgCreateBatch>): MsgCreateBatch {
    const message = createBaseMsgCreateBatch();
    message.issuer = object.issuer ?? "";
    message.classId = object.classId ?? "";
    message.issuance = object.issuance?.map(e => MsgCreateBatch_BatchIssuance.fromPartial(e)) || [];
    message.metadata = object.metadata ?? new Uint8Array();
    message.startDate = object.startDate !== undefined && object.startDate !== null ? Timestamp.fromPartial(object.startDate) : undefined;
    message.endDate = object.endDate !== undefined && object.endDate !== null ? Timestamp.fromPartial(object.endDate) : undefined;
    message.projectLocation = object.projectLocation ?? "";
    return message;
  }

};

function createBaseMsgCreateBatch_BatchIssuance(): MsgCreateBatch_BatchIssuance {
  return {
    recipient: "",
    tradableAmount: "",
    retiredAmount: "",
    retirementLocation: ""
  };
}

export const MsgCreateBatch_BatchIssuance = {
  encode(message: MsgCreateBatch_BatchIssuance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }

    if (message.tradableAmount !== "") {
      writer.uint32(18).string(message.tradableAmount);
    }

    if (message.retiredAmount !== "") {
      writer.uint32(26).string(message.retiredAmount);
    }

    if (message.retirementLocation !== "") {
      writer.uint32(34).string(message.retirementLocation);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatch_BatchIssuance {
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
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      tradableAmount: isSet(object.tradableAmount) ? String(object.tradableAmount) : "",
      retiredAmount: isSet(object.retiredAmount) ? String(object.retiredAmount) : "",
      retirementLocation: isSet(object.retirementLocation) ? String(object.retirementLocation) : ""
    };
  },

  toJSON(message: MsgCreateBatch_BatchIssuance): unknown {
    const obj: any = {};
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.tradableAmount !== undefined && (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined && (obj.retiredAmount = message.retiredAmount);
    message.retirementLocation !== undefined && (obj.retirementLocation = message.retirementLocation);
    return obj;
  },

  fromPartial(object: Partial<MsgCreateBatch_BatchIssuance>): MsgCreateBatch_BatchIssuance {
    const message = createBaseMsgCreateBatch_BatchIssuance();
    message.recipient = object.recipient ?? "";
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    message.retirementLocation = object.retirementLocation ?? "";
    return message;
  }

};

function createBaseMsgCreateBatchResponse(): MsgCreateBatchResponse {
  return {
    batchDenom: ""
  };
}

export const MsgCreateBatchResponse = {
  encode(message: MsgCreateBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatchResponse {
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
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },

  toJSON(message: MsgCreateBatchResponse): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial(object: Partial<MsgCreateBatchResponse>): MsgCreateBatchResponse {
    const message = createBaseMsgCreateBatchResponse();
    message.batchDenom = object.batchDenom ?? "";
    return message;
  }

};

function createBaseMsgSend(): MsgSend {
  return {
    sender: "",
    recipient: "",
    credits: []
  };
}

export const MsgSend = {
  encode(message: MsgSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.recipient !== "") {
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
          message.credits.push(MsgSend_SendCredits.decode(reader, reader.uint32()));
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => MsgSend_SendCredits.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgSend): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? MsgSend_SendCredits.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgSend>): MsgSend {
    const message = createBaseMsgSend();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.credits = object.credits?.map(e => MsgSend_SendCredits.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgSend_SendCredits(): MsgSend_SendCredits {
  return {
    batchDenom: "",
    tradableAmount: "",
    retiredAmount: "",
    retirementLocation: ""
  };
}

export const MsgSend_SendCredits = {
  encode(message: MsgSend_SendCredits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }

    if (message.tradableAmount !== "") {
      writer.uint32(18).string(message.tradableAmount);
    }

    if (message.retiredAmount !== "") {
      writer.uint32(26).string(message.retiredAmount);
    }

    if (message.retirementLocation !== "") {
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
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      tradableAmount: isSet(object.tradableAmount) ? String(object.tradableAmount) : "",
      retiredAmount: isSet(object.retiredAmount) ? String(object.retiredAmount) : "",
      retirementLocation: isSet(object.retirementLocation) ? String(object.retirementLocation) : ""
    };
  },

  toJSON(message: MsgSend_SendCredits): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.tradableAmount !== undefined && (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined && (obj.retiredAmount = message.retiredAmount);
    message.retirementLocation !== undefined && (obj.retirementLocation = message.retirementLocation);
    return obj;
  },

  fromPartial(object: Partial<MsgSend_SendCredits>): MsgSend_SendCredits {
    const message = createBaseMsgSend_SendCredits();
    message.batchDenom = object.batchDenom ?? "";
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    message.retirementLocation = object.retirementLocation ?? "";
    return message;
  }

};

function createBaseMsgSendResponse(): MsgSendResponse {
  return {};
}

export const MsgSendResponse = {
  encode(_: MsgSendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return {};
  },

  toJSON(_: MsgSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgSendResponse>): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  }

};

function createBaseMsgRetire(): MsgRetire {
  return {
    holder: "",
    credits: [],
    location: ""
  };
}

export const MsgRetire = {
  encode(message: MsgRetire, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.holder !== "") {
      writer.uint32(10).string(message.holder);
    }

    for (const v of message.credits) {
      MsgRetire_RetireCredits.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.location !== "") {
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
          message.credits.push(MsgRetire_RetireCredits.decode(reader, reader.uint32()));
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
      holder: isSet(object.holder) ? String(object.holder) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => MsgRetire_RetireCredits.fromJSON(e)) : [],
      location: isSet(object.location) ? String(object.location) : ""
    };
  },

  toJSON(message: MsgRetire): unknown {
    const obj: any = {};
    message.holder !== undefined && (obj.holder = message.holder);

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? MsgRetire_RetireCredits.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }

    message.location !== undefined && (obj.location = message.location);
    return obj;
  },

  fromPartial(object: Partial<MsgRetire>): MsgRetire {
    const message = createBaseMsgRetire();
    message.holder = object.holder ?? "";
    message.credits = object.credits?.map(e => MsgRetire_RetireCredits.fromPartial(e)) || [];
    message.location = object.location ?? "";
    return message;
  }

};

function createBaseMsgRetire_RetireCredits(): MsgRetire_RetireCredits {
  return {
    batchDenom: "",
    amount: ""
  };
}

export const MsgRetire_RetireCredits = {
  encode(message: MsgRetire_RetireCredits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetire_RetireCredits {
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
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: MsgRetire_RetireCredits): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: Partial<MsgRetire_RetireCredits>): MsgRetire_RetireCredits {
    const message = createBaseMsgRetire_RetireCredits();
    message.batchDenom = object.batchDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgRetireResponse(): MsgRetireResponse {
  return {};
}

export const MsgRetireResponse = {
  encode(_: MsgRetireResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return {};
  },

  toJSON(_: MsgRetireResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgRetireResponse>): MsgRetireResponse {
    const message = createBaseMsgRetireResponse();
    return message;
  }

};

function createBaseMsgCancel(): MsgCancel {
  return {
    holder: "",
    credits: []
  };
}

export const MsgCancel = {
  encode(message: MsgCancel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.holder !== "") {
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
          message.credits.push(MsgCancel_CancelCredits.decode(reader, reader.uint32()));
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
      holder: isSet(object.holder) ? String(object.holder) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => MsgCancel_CancelCredits.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgCancel): unknown {
    const obj: any = {};
    message.holder !== undefined && (obj.holder = message.holder);

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? MsgCancel_CancelCredits.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgCancel>): MsgCancel {
    const message = createBaseMsgCancel();
    message.holder = object.holder ?? "";
    message.credits = object.credits?.map(e => MsgCancel_CancelCredits.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgCancel_CancelCredits(): MsgCancel_CancelCredits {
  return {
    batchDenom: "",
    amount: ""
  };
}

export const MsgCancel_CancelCredits = {
  encode(message: MsgCancel_CancelCredits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancel_CancelCredits {
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
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: MsgCancel_CancelCredits): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: Partial<MsgCancel_CancelCredits>): MsgCancel_CancelCredits {
    const message = createBaseMsgCancel_CancelCredits();
    message.batchDenom = object.batchDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgCancelResponse(): MsgCancelResponse {
  return {};
}

export const MsgCancelResponse = {
  encode(_: MsgCancelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return {};
  },

  toJSON(_: MsgCancelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgCancelResponse>): MsgCancelResponse {
    const message = createBaseMsgCancelResponse();
    return message;
  }

};

function createBaseMsgUpdateClassAdmin(): MsgUpdateClassAdmin {
  return {
    admin: "",
    classId: "",
    newAdmin: ""
  };
}

export const MsgUpdateClassAdmin = {
  encode(message: MsgUpdateClassAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.newAdmin !== "") {
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
      admin: isSet(object.admin) ? String(object.admin) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
    };
  },

  toJSON(message: MsgUpdateClassAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.classId !== undefined && (obj.classId = message.classId);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },

  fromPartial(object: Partial<MsgUpdateClassAdmin>): MsgUpdateClassAdmin {
    const message = createBaseMsgUpdateClassAdmin();
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  }

};

function createBaseMsgUpdateClassAdminResponse(): MsgUpdateClassAdminResponse {
  return {};
}

export const MsgUpdateClassAdminResponse = {
  encode(_: MsgUpdateClassAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassAdminResponse {
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
    return {};
  },

  toJSON(_: MsgUpdateClassAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgUpdateClassAdminResponse>): MsgUpdateClassAdminResponse {
    const message = createBaseMsgUpdateClassAdminResponse();
    return message;
  }

};

function createBaseMsgUpdateClassIssuers(): MsgUpdateClassIssuers {
  return {
    admin: "",
    classId: "",
    issuers: []
  };
}

export const MsgUpdateClassIssuers = {
  encode(message: MsgUpdateClassIssuers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    for (const v of message.issuers) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassIssuers {
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
      admin: isSet(object.admin) ? String(object.admin) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => String(e)) : []
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

  fromPartial(object: Partial<MsgUpdateClassIssuers>): MsgUpdateClassIssuers {
    const message = createBaseMsgUpdateClassIssuers();
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.issuers = object.issuers?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgUpdateClassIssuersResponse(): MsgUpdateClassIssuersResponse {
  return {};
}

export const MsgUpdateClassIssuersResponse = {
  encode(_: MsgUpdateClassIssuersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassIssuersResponse {
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
    return {};
  },

  toJSON(_: MsgUpdateClassIssuersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgUpdateClassIssuersResponse>): MsgUpdateClassIssuersResponse {
    const message = createBaseMsgUpdateClassIssuersResponse();
    return message;
  }

};

function createBaseMsgUpdateClassMetadata(): MsgUpdateClassMetadata {
  return {
    admin: "",
    classId: "",
    metadata: new Uint8Array()
  };
}

export const MsgUpdateClassMetadata = {
  encode(message: MsgUpdateClassMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassMetadata {
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
      admin: isSet(object.admin) ? String(object.admin) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array()
    };
  },

  toJSON(message: MsgUpdateClassMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.classId !== undefined && (obj.classId = message.classId);
    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgUpdateClassMetadata>): MsgUpdateClassMetadata {
    const message = createBaseMsgUpdateClassMetadata();
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgUpdateClassMetadataResponse(): MsgUpdateClassMetadataResponse {
  return {};
}

export const MsgUpdateClassMetadataResponse = {
  encode(_: MsgUpdateClassMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassMetadataResponse {
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
    return {};
  },

  toJSON(_: MsgUpdateClassMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgUpdateClassMetadataResponse>): MsgUpdateClassMetadataResponse {
    const message = createBaseMsgUpdateClassMetadataResponse();
    return message;
  }

};