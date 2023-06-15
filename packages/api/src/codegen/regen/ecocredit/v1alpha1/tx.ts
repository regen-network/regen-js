import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
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
export interface MsgCreateClassProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateClass";
  value: Uint8Array;
}
/** MsgCreateClass is the Msg/CreateClass request type. */

export interface MsgCreateClassAmino {
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
export interface MsgCreateClassAminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgCreateClass";
  value: MsgCreateClassAmino;
}
/** MsgCreateClass is the Msg/CreateClass request type. */

export interface MsgCreateClassSDKType {
  admin: string;
  issuers: string[];
  metadata: Uint8Array;
  credit_type_name: string;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */

export interface MsgCreateClassResponse {
  /** class_id is the unique ID of the newly created credit class. */
  classId: string;
}
export interface MsgCreateClassResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateClassResponse";
  value: Uint8Array;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */

export interface MsgCreateClassResponseAmino {
  /** class_id is the unique ID of the newly created credit class. */
  class_id: string;
}
export interface MsgCreateClassResponseAminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgCreateClassResponse";
  value: MsgCreateClassResponseAmino;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */

export interface MsgCreateClassResponseSDKType {
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
export interface MsgCreateBatchProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatch";
  value: Uint8Array;
}
/** MsgCreateBatch is the Msg/CreateBatch request type. */

export interface MsgCreateBatchAmino {
  /** issuer is the address of the batch issuer. */
  issuer: string;
  /** class_id is the unique ID of the class. */

  class_id: string;
  /** issuance are the credits issued in the batch. */

  issuance: MsgCreateBatch_BatchIssuanceAmino[];
  /** metadata is any arbitrary metadata attached to the credit batch. */

  metadata: Uint8Array;
  /**
   * start_date is the beginning of the period during which this credit batch
   * was quantified and verified.
   */

  start_date?: TimestampAmino;
  /**
   * end_date is the end of the period during which this credit batch was
   * quantified and verified.
   */

  end_date?: TimestampAmino;
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
export interface MsgCreateBatchAminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgCreateBatch";
  value: MsgCreateBatchAmino;
}
/** MsgCreateBatch is the Msg/CreateBatch request type. */

export interface MsgCreateBatchSDKType {
  issuer: string;
  class_id: string;
  issuance: MsgCreateBatch_BatchIssuanceSDKType[];
  metadata: Uint8Array;
  start_date?: TimestampSDKType;
  end_date?: TimestampSDKType;
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
export interface MsgCreateBatch_BatchIssuanceProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.BatchIssuance";
  value: Uint8Array;
}
/**
 * BatchIssuance represents the issuance of some credits in a batch to a
 * single recipient.
 */

export interface MsgCreateBatch_BatchIssuanceAmino {
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
export interface MsgCreateBatch_BatchIssuanceAminoMsg {
  type: "/regen.ecocredit.v1alpha1.BatchIssuance";
  value: MsgCreateBatch_BatchIssuanceAmino;
}
/**
 * BatchIssuance represents the issuance of some credits in a batch to a
 * single recipient.
 */

export interface MsgCreateBatch_BatchIssuanceSDKType {
  recipient: string;
  tradable_amount: string;
  retired_amount: string;
  retirement_location: string;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */

export interface MsgCreateBatchResponse {
  /** batch_denom is the unique denomination ID of the newly created batch. */
  batchDenom: string;
}
export interface MsgCreateBatchResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatchResponse";
  value: Uint8Array;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */

export interface MsgCreateBatchResponseAmino {
  /** batch_denom is the unique denomination ID of the newly created batch. */
  batch_denom: string;
}
export interface MsgCreateBatchResponseAminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgCreateBatchResponse";
  value: MsgCreateBatchResponseAmino;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */

export interface MsgCreateBatchResponseSDKType {
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
export interface MsgSendProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.MsgSend";
  value: Uint8Array;
}
/** MsgSend is the Msg/Send request type. */

export interface MsgSendAmino {
  /** sender is the address of the account sending credits. */
  sender: string;
  /** sender is the address of the account receiving credits. */

  recipient: string;
  /** credits are the credits being sent. */

  credits: MsgSend_SendCreditsAmino[];
}
export interface MsgSendAminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgSend";
  value: MsgSendAmino;
}
/** MsgSend is the Msg/Send request type. */

export interface MsgSendSDKType {
  sender: string;
  recipient: string;
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
export interface MsgSend_SendCreditsProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.SendCredits";
  value: Uint8Array;
}
/**
 * SendCredits specifies a batch and the number of credits being transferred.
 * This is split into tradable credits, which will remain tradable on receipt,
 * and retired credits, which will be retired on receipt.
 */

export interface MsgSend_SendCreditsAmino {
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
export interface MsgSend_SendCreditsAminoMsg {
  type: "/regen.ecocredit.v1alpha1.SendCredits";
  value: MsgSend_SendCreditsAmino;
}
/**
 * SendCredits specifies a batch and the number of credits being transferred.
 * This is split into tradable credits, which will remain tradable on receipt,
 * and retired credits, which will be retired on receipt.
 */

export interface MsgSend_SendCreditsSDKType {
  batch_denom: string;
  tradable_amount: string;
  retired_amount: string;
  retirement_location: string;
}
/** MsgSendResponse is the Msg/Send response type. */

export interface MsgSendResponse {}
export interface MsgSendResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.MsgSendResponse";
  value: Uint8Array;
}
/** MsgSendResponse is the Msg/Send response type. */

export interface MsgSendResponseAmino {}
export interface MsgSendResponseAminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgSendResponse";
  value: MsgSendResponseAmino;
}
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
export interface MsgRetireProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.MsgRetire";
  value: Uint8Array;
}
/** MsgRetire is the Msg/Retire request type. */

export interface MsgRetireAmino {
  /** holder is the credit holder address. */
  holder: string;
  /** credits are the credits being retired. */

  credits: MsgRetire_RetireCreditsAmino[];
  /**
   * location is the location of the beneficiary or buyer of the retired
   * credits. It is a string of the form
   * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
   * fields conforming to ISO 3166-2, and postal-code being up to 64
   * alphanumeric characters.
   */

  location: string;
}
export interface MsgRetireAminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgRetire";
  value: MsgRetireAmino;
}
/** MsgRetire is the Msg/Retire request type. */

export interface MsgRetireSDKType {
  holder: string;
  credits: MsgRetire_RetireCreditsSDKType[];
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
export interface MsgRetire_RetireCreditsProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.RetireCredits";
  value: Uint8Array;
}
/** RetireCredits specifies a batch and the number of credits being retired. */

export interface MsgRetire_RetireCreditsAmino {
  /** batch_denom is the unique ID of the credit batch. */
  batch_denom: string;
  /**
   * amount is the number of credits being retired.
   * Decimal values are acceptable within the precision returned by
   * Query/Precision.
   */

  amount: string;
}
export interface MsgRetire_RetireCreditsAminoMsg {
  type: "/regen.ecocredit.v1alpha1.RetireCredits";
  value: MsgRetire_RetireCreditsAmino;
}
/** RetireCredits specifies a batch and the number of credits being retired. */

export interface MsgRetire_RetireCreditsSDKType {
  batch_denom: string;
  amount: string;
}
/** MsgRetire is the Msg/Retire response type. */

export interface MsgRetireResponse {}
export interface MsgRetireResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.MsgRetireResponse";
  value: Uint8Array;
}
/** MsgRetire is the Msg/Retire response type. */

export interface MsgRetireResponseAmino {}
export interface MsgRetireResponseAminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgRetireResponse";
  value: MsgRetireResponseAmino;
}
/** MsgRetire is the Msg/Retire response type. */

export interface MsgRetireResponseSDKType {}
/** MsgCancel is the Msg/Cancel request type. */

export interface MsgCancel {
  /** holder is the credit holder address. */
  holder: string;
  /** credits are the credits being cancelled. */

  credits: MsgCancel_CancelCredits[];
}
export interface MsgCancelProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.MsgCancel";
  value: Uint8Array;
}
/** MsgCancel is the Msg/Cancel request type. */

export interface MsgCancelAmino {
  /** holder is the credit holder address. */
  holder: string;
  /** credits are the credits being cancelled. */

  credits: MsgCancel_CancelCreditsAmino[];
}
export interface MsgCancelAminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgCancel";
  value: MsgCancelAmino;
}
/** MsgCancel is the Msg/Cancel request type. */

export interface MsgCancelSDKType {
  holder: string;
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
export interface MsgCancel_CancelCreditsProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.CancelCredits";
  value: Uint8Array;
}
/** CancelCredits specifies a batch and the number of credits being cancelled. */

export interface MsgCancel_CancelCreditsAmino {
  /** batch_denom is the unique ID of the credit batch. */
  batch_denom: string;
  /**
   * amount is the number of credits being cancelled.
   * Decimal values are acceptable within the precision returned by
   * Query/Precision.
   */

  amount: string;
}
export interface MsgCancel_CancelCreditsAminoMsg {
  type: "/regen.ecocredit.v1alpha1.CancelCredits";
  value: MsgCancel_CancelCreditsAmino;
}
/** CancelCredits specifies a batch and the number of credits being cancelled. */

export interface MsgCancel_CancelCreditsSDKType {
  batch_denom: string;
  amount: string;
}
/** MsgCancelResponse is the Msg/Cancel response type. */

export interface MsgCancelResponse {}
export interface MsgCancelResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.MsgCancelResponse";
  value: Uint8Array;
}
/** MsgCancelResponse is the Msg/Cancel response type. */

export interface MsgCancelResponseAmino {}
export interface MsgCancelResponseAminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgCancelResponse";
  value: MsgCancelResponseAmino;
}
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
export interface MsgUpdateClassAdminProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin";
  value: Uint8Array;
}
/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */

export interface MsgUpdateClassAdminAmino {
  /** admin is the address of the account that is the admin of the credit class. */
  admin: string;
  /** class_id is the unique ID of the credit class. */

  class_id: string;
  /** new_admin is the address of the new admin of the credit class. */

  new_admin: string;
}
export interface MsgUpdateClassAdminAminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin";
  value: MsgUpdateClassAdminAmino;
}
/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */

export interface MsgUpdateClassAdminSDKType {
  admin: string;
  class_id: string;
  new_admin: string;
}
/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */

export interface MsgUpdateClassAdminResponse {}
export interface MsgUpdateClassAdminResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdminResponse";
  value: Uint8Array;
}
/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */

export interface MsgUpdateClassAdminResponseAmino {}
export interface MsgUpdateClassAdminResponseAminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdminResponse";
  value: MsgUpdateClassAdminResponseAmino;
}
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
export interface MsgUpdateClassIssuersProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers";
  value: Uint8Array;
}
/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */

export interface MsgUpdateClassIssuersAmino {
  /** admin is the address of the account that is the admin of the credit class. */
  admin: string;
  /** class_id is the unique ID of the credit class. */

  class_id: string;
  /** issuers are the updated account addresses of the approved issuers. */

  issuers: string[];
}
export interface MsgUpdateClassIssuersAminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers";
  value: MsgUpdateClassIssuersAmino;
}
/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */

export interface MsgUpdateClassIssuersSDKType {
  admin: string;
  class_id: string;
  issuers: string[];
}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */

export interface MsgUpdateClassIssuersResponse {}
export interface MsgUpdateClassIssuersResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuersResponse";
  value: Uint8Array;
}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */

export interface MsgUpdateClassIssuersResponseAmino {}
export interface MsgUpdateClassIssuersResponseAminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuersResponse";
  value: MsgUpdateClassIssuersResponseAmino;
}
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
export interface MsgUpdateClassMetadataProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata";
  value: Uint8Array;
}
/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */

export interface MsgUpdateClassMetadataAmino {
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
export interface MsgUpdateClassMetadataAminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata";
  value: MsgUpdateClassMetadataAmino;
}
/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */

export interface MsgUpdateClassMetadataSDKType {
  admin: string;
  class_id: string;
  metadata: Uint8Array;
}
/** MsgUpdateClassMetadataResponse is the MsgUpdateClassMetadata response type. */

export interface MsgUpdateClassMetadataResponse {}
export interface MsgUpdateClassMetadataResponseProtoMsg {
  typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadataResponse";
  value: Uint8Array;
}
/** MsgUpdateClassMetadataResponse is the MsgUpdateClassMetadata response type. */

export interface MsgUpdateClassMetadataResponseAmino {}
export interface MsgUpdateClassMetadataResponseAminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadataResponse";
  value: MsgUpdateClassMetadataResponseAmino;
}
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
  },

  fromAmino(object: MsgCreateClassAmino): MsgCreateClass {
    return {
      admin: object.admin,
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => e) : [],
      metadata: object.metadata,
      creditTypeName: object.credit_type_name
    };
  },

  toAmino(message: MsgCreateClass): MsgCreateClassAmino {
    const obj: any = {};
    obj.admin = message.admin;

    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e);
    } else {
      obj.issuers = [];
    }

    obj.metadata = message.metadata;
    obj.credit_type_name = message.creditTypeName;
    return obj;
  },

  fromAminoMsg(object: MsgCreateClassAminoMsg): MsgCreateClass {
    return MsgCreateClass.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgCreateClassProtoMsg): MsgCreateClass {
    return MsgCreateClass.decode(message.value);
  },

  toProto(message: MsgCreateClass): Uint8Array {
    return MsgCreateClass.encode(message).finish();
  },

  toProtoMsg(message: MsgCreateClass): MsgCreateClassProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateClass",
      value: MsgCreateClass.encode(message).finish()
    };
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
  },

  fromAmino(object: MsgCreateClassResponseAmino): MsgCreateClassResponse {
    return {
      classId: object.class_id
    };
  },

  toAmino(message: MsgCreateClassResponse): MsgCreateClassResponseAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },

  fromAminoMsg(object: MsgCreateClassResponseAminoMsg): MsgCreateClassResponse {
    return MsgCreateClassResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgCreateClassResponseProtoMsg): MsgCreateClassResponse {
    return MsgCreateClassResponse.decode(message.value);
  },

  toProto(message: MsgCreateClassResponse): Uint8Array {
    return MsgCreateClassResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgCreateClassResponse): MsgCreateClassResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateClassResponse",
      value: MsgCreateClassResponse.encode(message).finish()
    };
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
  },

  fromAmino(object: MsgCreateBatchAmino): MsgCreateBatch {
    return {
      issuer: object.issuer,
      classId: object.class_id,
      issuance: Array.isArray(object?.issuance) ? object.issuance.map((e: any) => MsgCreateBatch_BatchIssuance.fromAmino(e)) : [],
      metadata: object.metadata,
      startDate: object?.start_date ? Timestamp.fromAmino(object.start_date) : undefined,
      endDate: object?.end_date ? Timestamp.fromAmino(object.end_date) : undefined,
      projectLocation: object.project_location
    };
  },

  toAmino(message: MsgCreateBatch): MsgCreateBatchAmino {
    const obj: any = {};
    obj.issuer = message.issuer;
    obj.class_id = message.classId;

    if (message.issuance) {
      obj.issuance = message.issuance.map(e => e ? MsgCreateBatch_BatchIssuance.toAmino(e) : undefined);
    } else {
      obj.issuance = [];
    }

    obj.metadata = message.metadata;
    obj.start_date = message.startDate ? Timestamp.toAmino(message.startDate) : undefined;
    obj.end_date = message.endDate ? Timestamp.toAmino(message.endDate) : undefined;
    obj.project_location = message.projectLocation;
    return obj;
  },

  fromAminoMsg(object: MsgCreateBatchAminoMsg): MsgCreateBatch {
    return MsgCreateBatch.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgCreateBatchProtoMsg): MsgCreateBatch {
    return MsgCreateBatch.decode(message.value);
  },

  toProto(message: MsgCreateBatch): Uint8Array {
    return MsgCreateBatch.encode(message).finish();
  },

  toProtoMsg(message: MsgCreateBatch): MsgCreateBatchProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatch",
      value: MsgCreateBatch.encode(message).finish()
    };
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
  },

  fromAmino(object: MsgCreateBatch_BatchIssuanceAmino): MsgCreateBatch_BatchIssuance {
    return {
      recipient: object.recipient,
      tradableAmount: object.tradable_amount,
      retiredAmount: object.retired_amount,
      retirementLocation: object.retirement_location
    };
  },

  toAmino(message: MsgCreateBatch_BatchIssuance): MsgCreateBatch_BatchIssuanceAmino {
    const obj: any = {};
    obj.recipient = message.recipient;
    obj.tradable_amount = message.tradableAmount;
    obj.retired_amount = message.retiredAmount;
    obj.retirement_location = message.retirementLocation;
    return obj;
  },

  fromAminoMsg(object: MsgCreateBatch_BatchIssuanceAminoMsg): MsgCreateBatch_BatchIssuance {
    return MsgCreateBatch_BatchIssuance.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgCreateBatch_BatchIssuanceProtoMsg): MsgCreateBatch_BatchIssuance {
    return MsgCreateBatch_BatchIssuance.decode(message.value);
  },

  toProto(message: MsgCreateBatch_BatchIssuance): Uint8Array {
    return MsgCreateBatch_BatchIssuance.encode(message).finish();
  },

  toProtoMsg(message: MsgCreateBatch_BatchIssuance): MsgCreateBatch_BatchIssuanceProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.BatchIssuance",
      value: MsgCreateBatch_BatchIssuance.encode(message).finish()
    };
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
  },

  fromAmino(object: MsgCreateBatchResponseAmino): MsgCreateBatchResponse {
    return {
      batchDenom: object.batch_denom
    };
  },

  toAmino(message: MsgCreateBatchResponse): MsgCreateBatchResponseAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom;
    return obj;
  },

  fromAminoMsg(object: MsgCreateBatchResponseAminoMsg): MsgCreateBatchResponse {
    return MsgCreateBatchResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgCreateBatchResponseProtoMsg): MsgCreateBatchResponse {
    return MsgCreateBatchResponse.decode(message.value);
  },

  toProto(message: MsgCreateBatchResponse): Uint8Array {
    return MsgCreateBatchResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgCreateBatchResponse): MsgCreateBatchResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatchResponse",
      value: MsgCreateBatchResponse.encode(message).finish()
    };
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
  },

  fromAmino(object: MsgSendAmino): MsgSend {
    return {
      sender: object.sender,
      recipient: object.recipient,
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => MsgSend_SendCredits.fromAmino(e)) : []
    };
  },

  toAmino(message: MsgSend): MsgSendAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.recipient = message.recipient;

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? MsgSend_SendCredits.toAmino(e) : undefined);
    } else {
      obj.credits = [];
    }

    return obj;
  },

  fromAminoMsg(object: MsgSendAminoMsg): MsgSend {
    return MsgSend.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgSendProtoMsg): MsgSend {
    return MsgSend.decode(message.value);
  },

  toProto(message: MsgSend): Uint8Array {
    return MsgSend.encode(message).finish();
  },

  toProtoMsg(message: MsgSend): MsgSendProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.MsgSend",
      value: MsgSend.encode(message).finish()
    };
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
  },

  fromAmino(object: MsgSend_SendCreditsAmino): MsgSend_SendCredits {
    return {
      batchDenom: object.batch_denom,
      tradableAmount: object.tradable_amount,
      retiredAmount: object.retired_amount,
      retirementLocation: object.retirement_location
    };
  },

  toAmino(message: MsgSend_SendCredits): MsgSend_SendCreditsAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom;
    obj.tradable_amount = message.tradableAmount;
    obj.retired_amount = message.retiredAmount;
    obj.retirement_location = message.retirementLocation;
    return obj;
  },

  fromAminoMsg(object: MsgSend_SendCreditsAminoMsg): MsgSend_SendCredits {
    return MsgSend_SendCredits.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgSend_SendCreditsProtoMsg): MsgSend_SendCredits {
    return MsgSend_SendCredits.decode(message.value);
  },

  toProto(message: MsgSend_SendCredits): Uint8Array {
    return MsgSend_SendCredits.encode(message).finish();
  },

  toProtoMsg(message: MsgSend_SendCredits): MsgSend_SendCreditsProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.SendCredits",
      value: MsgSend_SendCredits.encode(message).finish()
    };
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
  },

  fromAmino(_: MsgSendResponseAmino): MsgSendResponse {
    return {};
  },

  toAmino(_: MsgSendResponse): MsgSendResponseAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: MsgSendResponseAminoMsg): MsgSendResponse {
    return MsgSendResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgSendResponseProtoMsg): MsgSendResponse {
    return MsgSendResponse.decode(message.value);
  },

  toProto(message: MsgSendResponse): Uint8Array {
    return MsgSendResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgSendResponse): MsgSendResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.MsgSendResponse",
      value: MsgSendResponse.encode(message).finish()
    };
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
  },

  fromAmino(object: MsgRetireAmino): MsgRetire {
    return {
      holder: object.holder,
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => MsgRetire_RetireCredits.fromAmino(e)) : [],
      location: object.location
    };
  },

  toAmino(message: MsgRetire): MsgRetireAmino {
    const obj: any = {};
    obj.holder = message.holder;

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? MsgRetire_RetireCredits.toAmino(e) : undefined);
    } else {
      obj.credits = [];
    }

    obj.location = message.location;
    return obj;
  },

  fromAminoMsg(object: MsgRetireAminoMsg): MsgRetire {
    return MsgRetire.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgRetireProtoMsg): MsgRetire {
    return MsgRetire.decode(message.value);
  },

  toProto(message: MsgRetire): Uint8Array {
    return MsgRetire.encode(message).finish();
  },

  toProtoMsg(message: MsgRetire): MsgRetireProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.MsgRetire",
      value: MsgRetire.encode(message).finish()
    };
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
  },

  fromAmino(object: MsgRetire_RetireCreditsAmino): MsgRetire_RetireCredits {
    return {
      batchDenom: object.batch_denom,
      amount: object.amount
    };
  },

  toAmino(message: MsgRetire_RetireCredits): MsgRetire_RetireCreditsAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom;
    obj.amount = message.amount;
    return obj;
  },

  fromAminoMsg(object: MsgRetire_RetireCreditsAminoMsg): MsgRetire_RetireCredits {
    return MsgRetire_RetireCredits.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgRetire_RetireCreditsProtoMsg): MsgRetire_RetireCredits {
    return MsgRetire_RetireCredits.decode(message.value);
  },

  toProto(message: MsgRetire_RetireCredits): Uint8Array {
    return MsgRetire_RetireCredits.encode(message).finish();
  },

  toProtoMsg(message: MsgRetire_RetireCredits): MsgRetire_RetireCreditsProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.RetireCredits",
      value: MsgRetire_RetireCredits.encode(message).finish()
    };
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
  },

  fromAmino(_: MsgRetireResponseAmino): MsgRetireResponse {
    return {};
  },

  toAmino(_: MsgRetireResponse): MsgRetireResponseAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: MsgRetireResponseAminoMsg): MsgRetireResponse {
    return MsgRetireResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgRetireResponseProtoMsg): MsgRetireResponse {
    return MsgRetireResponse.decode(message.value);
  },

  toProto(message: MsgRetireResponse): Uint8Array {
    return MsgRetireResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgRetireResponse): MsgRetireResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.MsgRetireResponse",
      value: MsgRetireResponse.encode(message).finish()
    };
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
  },

  fromAmino(object: MsgCancelAmino): MsgCancel {
    return {
      holder: object.holder,
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => MsgCancel_CancelCredits.fromAmino(e)) : []
    };
  },

  toAmino(message: MsgCancel): MsgCancelAmino {
    const obj: any = {};
    obj.holder = message.holder;

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? MsgCancel_CancelCredits.toAmino(e) : undefined);
    } else {
      obj.credits = [];
    }

    return obj;
  },

  fromAminoMsg(object: MsgCancelAminoMsg): MsgCancel {
    return MsgCancel.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgCancelProtoMsg): MsgCancel {
    return MsgCancel.decode(message.value);
  },

  toProto(message: MsgCancel): Uint8Array {
    return MsgCancel.encode(message).finish();
  },

  toProtoMsg(message: MsgCancel): MsgCancelProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.MsgCancel",
      value: MsgCancel.encode(message).finish()
    };
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
  },

  fromAmino(object: MsgCancel_CancelCreditsAmino): MsgCancel_CancelCredits {
    return {
      batchDenom: object.batch_denom,
      amount: object.amount
    };
  },

  toAmino(message: MsgCancel_CancelCredits): MsgCancel_CancelCreditsAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom;
    obj.amount = message.amount;
    return obj;
  },

  fromAminoMsg(object: MsgCancel_CancelCreditsAminoMsg): MsgCancel_CancelCredits {
    return MsgCancel_CancelCredits.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgCancel_CancelCreditsProtoMsg): MsgCancel_CancelCredits {
    return MsgCancel_CancelCredits.decode(message.value);
  },

  toProto(message: MsgCancel_CancelCredits): Uint8Array {
    return MsgCancel_CancelCredits.encode(message).finish();
  },

  toProtoMsg(message: MsgCancel_CancelCredits): MsgCancel_CancelCreditsProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.CancelCredits",
      value: MsgCancel_CancelCredits.encode(message).finish()
    };
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
  },

  fromAmino(_: MsgCancelResponseAmino): MsgCancelResponse {
    return {};
  },

  toAmino(_: MsgCancelResponse): MsgCancelResponseAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: MsgCancelResponseAminoMsg): MsgCancelResponse {
    return MsgCancelResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgCancelResponseProtoMsg): MsgCancelResponse {
    return MsgCancelResponse.decode(message.value);
  },

  toProto(message: MsgCancelResponse): Uint8Array {
    return MsgCancelResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgCancelResponse): MsgCancelResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.MsgCancelResponse",
      value: MsgCancelResponse.encode(message).finish()
    };
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
  },

  fromAmino(object: MsgUpdateClassAdminAmino): MsgUpdateClassAdmin {
    return {
      admin: object.admin,
      classId: object.class_id,
      newAdmin: object.new_admin
    };
  },

  toAmino(message: MsgUpdateClassAdmin): MsgUpdateClassAdminAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.class_id = message.classId;
    obj.new_admin = message.newAdmin;
    return obj;
  },

  fromAminoMsg(object: MsgUpdateClassAdminAminoMsg): MsgUpdateClassAdmin {
    return MsgUpdateClassAdmin.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgUpdateClassAdminProtoMsg): MsgUpdateClassAdmin {
    return MsgUpdateClassAdmin.decode(message.value);
  },

  toProto(message: MsgUpdateClassAdmin): Uint8Array {
    return MsgUpdateClassAdmin.encode(message).finish();
  },

  toProtoMsg(message: MsgUpdateClassAdmin): MsgUpdateClassAdminProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin",
      value: MsgUpdateClassAdmin.encode(message).finish()
    };
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
  },

  fromAmino(_: MsgUpdateClassAdminResponseAmino): MsgUpdateClassAdminResponse {
    return {};
  },

  toAmino(_: MsgUpdateClassAdminResponse): MsgUpdateClassAdminResponseAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: MsgUpdateClassAdminResponseAminoMsg): MsgUpdateClassAdminResponse {
    return MsgUpdateClassAdminResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgUpdateClassAdminResponseProtoMsg): MsgUpdateClassAdminResponse {
    return MsgUpdateClassAdminResponse.decode(message.value);
  },

  toProto(message: MsgUpdateClassAdminResponse): Uint8Array {
    return MsgUpdateClassAdminResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgUpdateClassAdminResponse): MsgUpdateClassAdminResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdminResponse",
      value: MsgUpdateClassAdminResponse.encode(message).finish()
    };
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
  },

  fromAmino(object: MsgUpdateClassIssuersAmino): MsgUpdateClassIssuers {
    return {
      admin: object.admin,
      classId: object.class_id,
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => e) : []
    };
  },

  toAmino(message: MsgUpdateClassIssuers): MsgUpdateClassIssuersAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.class_id = message.classId;

    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e);
    } else {
      obj.issuers = [];
    }

    return obj;
  },

  fromAminoMsg(object: MsgUpdateClassIssuersAminoMsg): MsgUpdateClassIssuers {
    return MsgUpdateClassIssuers.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgUpdateClassIssuersProtoMsg): MsgUpdateClassIssuers {
    return MsgUpdateClassIssuers.decode(message.value);
  },

  toProto(message: MsgUpdateClassIssuers): Uint8Array {
    return MsgUpdateClassIssuers.encode(message).finish();
  },

  toProtoMsg(message: MsgUpdateClassIssuers): MsgUpdateClassIssuersProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers",
      value: MsgUpdateClassIssuers.encode(message).finish()
    };
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
  },

  fromAmino(_: MsgUpdateClassIssuersResponseAmino): MsgUpdateClassIssuersResponse {
    return {};
  },

  toAmino(_: MsgUpdateClassIssuersResponse): MsgUpdateClassIssuersResponseAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: MsgUpdateClassIssuersResponseAminoMsg): MsgUpdateClassIssuersResponse {
    return MsgUpdateClassIssuersResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgUpdateClassIssuersResponseProtoMsg): MsgUpdateClassIssuersResponse {
    return MsgUpdateClassIssuersResponse.decode(message.value);
  },

  toProto(message: MsgUpdateClassIssuersResponse): Uint8Array {
    return MsgUpdateClassIssuersResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgUpdateClassIssuersResponse): MsgUpdateClassIssuersResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuersResponse",
      value: MsgUpdateClassIssuersResponse.encode(message).finish()
    };
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
  },

  fromAmino(object: MsgUpdateClassMetadataAmino): MsgUpdateClassMetadata {
    return {
      admin: object.admin,
      classId: object.class_id,
      metadata: object.metadata
    };
  },

  toAmino(message: MsgUpdateClassMetadata): MsgUpdateClassMetadataAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.class_id = message.classId;
    obj.metadata = message.metadata;
    return obj;
  },

  fromAminoMsg(object: MsgUpdateClassMetadataAminoMsg): MsgUpdateClassMetadata {
    return MsgUpdateClassMetadata.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgUpdateClassMetadataProtoMsg): MsgUpdateClassMetadata {
    return MsgUpdateClassMetadata.decode(message.value);
  },

  toProto(message: MsgUpdateClassMetadata): Uint8Array {
    return MsgUpdateClassMetadata.encode(message).finish();
  },

  toProtoMsg(message: MsgUpdateClassMetadata): MsgUpdateClassMetadataProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata",
      value: MsgUpdateClassMetadata.encode(message).finish()
    };
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
  },

  fromAmino(_: MsgUpdateClassMetadataResponseAmino): MsgUpdateClassMetadataResponse {
    return {};
  },

  toAmino(_: MsgUpdateClassMetadataResponse): MsgUpdateClassMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: MsgUpdateClassMetadataResponseAminoMsg): MsgUpdateClassMetadataResponse {
    return MsgUpdateClassMetadataResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgUpdateClassMetadataResponseProtoMsg): MsgUpdateClassMetadataResponse {
    return MsgUpdateClassMetadataResponse.decode(message.value);
  },

  toProto(message: MsgUpdateClassMetadataResponse): Uint8Array {
    return MsgUpdateClassMetadataResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgUpdateClassMetadataResponse): MsgUpdateClassMetadataResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadataResponse",
      value: MsgUpdateClassMetadataResponse.encode(message).finish()
    };
  }

};