/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { messageTypeRegistry } from "../../../typeRegistry";
import { CreditType } from "./state";
import { BatchIssuance, Credits, OriginTx } from "./types";

export const protobufPackage = "regen.ecocredit.v1";

/**
 * MsgAddCreditType is the Msg/AddCreditType request type.
 *
 * Since Revision 2
 */
export interface MsgAddCreditType {
  $type: "regen.ecocredit.v1.MsgAddCreditType";
  /** authority is the address of the governance account. */
  authority: string;
  /** credit_type defines a credit type to add to the credit types parameter. */
  creditType?: CreditType;
}

/**
 * MsgAddCreditTypeResponse is the Msg/AddCreditType response type.
 *
 * Since Revision 2
 */
export interface MsgAddCreditTypeResponse {
  $type: "regen.ecocredit.v1.MsgAddCreditTypeResponse";
}

/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateClass {
  $type: "regen.ecocredit.v1.MsgCreateClass";
  /**
   * admin is the address of the account creating the credit class that will
   * become the admin of the credit class upon creation. The admin will have
   * permissions within the credit class to update the credit class including
   * the list of approved issuers. If Params.allowlist_enabled is set to true,
   * this address must be included in Params.allowed_class_creators.
   */
  admin: string;
  /**
   * issuers are the addresses of the accounts that will have permissions within
   * the credit class to create projects and issue credits.
   */
  issuers: string[];
  /**
   * metadata is any arbitrary string with a maximum length of 256 characters
   * that includes or references metadata to attach to the credit class.
   */
  metadata: string;
  /**
   * credit_type_abbrev is the abbreviation of the credit type under which the
   * credit class will be created (e.g. "C", "BIO").
   */
  creditTypeAbbrev: string;
  /**
   * fee is the credit class creation fee. An equal fee is required if the class
   * creation fee parameter is set. The provided fee can be greater than the
   * parameter, but only the amount in the parameter will be charged.
   */
  fee?: Coin;
}

/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponse {
  $type: "regen.ecocredit.v1.MsgCreateClassResponse";
  /** class_id is the unique identifier of the credit class. */
  classId: string;
}

/** MsgCreateProjectResponse is the Msg/CreateProject request type. */
export interface MsgCreateProject {
  $type: "regen.ecocredit.v1.MsgCreateProject";
  /**
   * admin is the address of the account creating the project that will become
   * the admin of the project upon creation. The creator of the project must be
   * an approved issuer within the credit class under which the project is being
   * created. The admin will have permissions to update the project including
   * the ability to reassign the admin role to another account.
   */
  admin: string;
  /**
   * class_id is the unique identifier of the credit class under which the
   * project will be created.
   */
  classId: string;
  /**
   * metadata is any arbitrary string with a maximum length of 256 characters
   * that includes or references metadata to attach to the project.
   */
  metadata: string;
  /**
   * jurisdiction is the jurisdiction of the project. A jurisdiction has with
   * the format: <country-code>[-<sub-national-code>[ <postal-code>]]
   * The country-code must be 2 alphabetic characters, the sub-national-code
   * can be 1-3 alphanumeric characters, and the postal-code can be up to 64
   * alphanumeric characters. Only the country-code is required, while the
   * sub-national-code and postal-code are optional and can be added for
   * increased precision.
   */
  jurisdiction: string;
  /**
   * reference_id is any arbitrary string used to reference the project with a
   * maximum length of 32 characters.
   */
  referenceId: string;
}

/** MsgCreateProjectResponse is the Msg/CreateProject response type. */
export interface MsgCreateProjectResponse {
  $type: "regen.ecocredit.v1.MsgCreateProjectResponse";
  /** project_id is the unique identifier of the project. */
  projectId: string;
}

/** MsgCreateBatch is the Msg/CreateBatch request type. */
export interface MsgCreateBatch {
  $type: "regen.ecocredit.v1.MsgCreateBatch";
  /**
   * issuer is the address of the account issuing the credits and must be an
   * approved issuer within the credit class of the project.
   */
  issuer: string;
  /**
   * project_id is the unique identifier of the project under which the credit
   * batch will be created.
   */
  projectId: string;
  /**
   * issuance specifies the amount of tradable and retired credits that will be
   * issued to each recipient and the jurisdiction in which the credits will be
   * retired if credits are to be retired upon receipt.
   */
  issuance: BatchIssuance[];
  /**
   * metadata is any arbitrary string with a maximum length of 256 characters
   * that includes or references metadata to attach to the credit batch.
   */
  metadata: string;
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
   * open determines whether or not the credits can be dynamically minted to the
   * credit batch following the creation of the credit batch. This field should
   * only be set to true when bridging credits from another chain or registry as
   * a result of a bridge operation and is not intended for native issuance.
   */
  open: boolean;
  /**
   * origin_tx is the transaction from another chain or registry that triggered
   * the creation of the credit batch. This field can be ignored when natively
   * issuing credits and should only be set when bridging assets from another
   * chain or registry as a result of a bridge operation.
   */
  originTx?: OriginTx;
}

/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponse {
  $type: "regen.ecocredit.v1.MsgCreateBatchResponse";
  /** batch_denom is the unique identifier of the credit batch. */
  batchDenom: string;
}

/** MsgMintBatchCredits is the Msg/MintBatchCredits request type. */
export interface MsgMintBatchCredits {
  $type: "regen.ecocredit.v1.MsgMintBatchCredits";
  /**
   * issuer is the address of the account minting the credits and must be the
   * same issuer who created the credit batch.
   */
  issuer: string;
  /** batch_denom is the unique identifier of the credit batch. */
  batchDenom: string;
  /**
   * issuance specifies the amount of tradable and retired credits that will be
   * issued to each recipient and the jurisdiction in which the credits will be
   * retired if credits are to be retired upon receipt.
   */
  issuance: BatchIssuance[];
  /**
   * origin_tx is the transaction from another chain or registry that triggered
   * the minting of credits.
   */
  originTx?: OriginTx;
}

/** MsgMintBatchCreditsResponse is the Msg/MintBatchCredits response type. */
export interface MsgMintBatchCreditsResponse {
  $type: "regen.ecocredit.v1.MsgMintBatchCreditsResponse";
}

/** MsgSealBatch is the Msg/MintBatchCredits request type. */
export interface MsgSealBatch {
  $type: "regen.ecocredit.v1.MsgSealBatch";
  /**
   * issuer is the address of the account that created the credit batch and the
   * only account with permissions to seal the credit batch.
   */
  issuer: string;
  /** batch_denom is the unique identifier of the credit batch. */
  batchDenom: string;
}

/** MsgSealBatchResponse is the Msg/SealBatch response type. */
export interface MsgSealBatchResponse {
  $type: "regen.ecocredit.v1.MsgSealBatchResponse";
}

/** MsgSend is the Msg/Send request type. */
export interface MsgSend {
  $type: "regen.ecocredit.v1.MsgSend";
  /** sender is the address of the account sending credits. */
  sender: string;
  /** recipient is the address of the account receiving credits. */
  recipient: string;
  /** credits are the credits being sent to the recipient. */
  credits: MsgSend_SendCredits[];
}

/**
 * SendCredits specifies the amount of tradable and retired credits of a
 * credit batch that will be sent to the recipient and the jurisdiction in
 * which the credits will be retired upon receipt.
 */
export interface MsgSend_SendCredits {
  $type: "regen.ecocredit.v1.MsgSend.SendCredits";
  /** batch_denom is the unique identifier of the credit batch. */
  batchDenom: string;
  /**
   * tradable_amount is the amount of credits in this transfer that can be
   * traded by the recipient. The number of decimal places must be less than
   * or equal to the credit type precision.
   */
  tradableAmount: string;
  /**
   * retired_amount is the amount of credits in this transfer that are retired
   * upon receipt. The number of decimal places must be less than or equal to
   * the credit type precision.
   */
  retiredAmount: string;
  /**
   * retirement_jurisdiction is the jurisdiction of the recipient and is only
   * required if retired_amount is positive. A jurisdiction has the format:
   * <country-code>[-<sub-national-code>[ <postal-code>]]
   * The country-code and sub-national-code must conform to ISO 3166-2 and the
   * postal-code can be up to 64 alphanumeric characters. Only the
   * country-code is required, while the sub-national-code and postal-code are
   * optional and can be added for increased precision.
   */
  retirementJurisdiction: string;
  /**
   * retirement_reason is any arbitrary string that specifies the reason for
   * retiring credits. This field is only required if retired_amount is
   * positive.
   *
   * Since Revision 2
   */
  retirementReason: string;
}

/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponse {
  $type: "regen.ecocredit.v1.MsgSendResponse";
}

/** MsgRetire is the Msg/Retire request type. */
export interface MsgRetire {
  $type: "regen.ecocredit.v1.MsgRetire";
  /** owner is the address of the account that owns the credits being retired. */
  owner: string;
  /** credits specifies a credit batch and the number of credits being retired. */
  credits: Credits[];
  /**
   * jurisdiction is the jurisdiction of the credit owner. A jurisdiction has
   * the format: <country-code>[-<sub-national-code>[ <postal-code>]]
   * The country-code must be 2 alphabetic characters, the sub-national-code
   * can be 1-3 alphanumeric characters, and the postal-code can be up to 64
   * alphanumeric characters. Only the country-code is required, while the
   * sub-national-code and postal-code are optional and can be added for
   * increased precision.
   */
  jurisdiction: string;
  /**
   * reason is any arbitrary string that specifies the reason for retiring
   * credits.
   *
   * Since Revision 2
   */
  reason: string;
}

/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponse {
  $type: "regen.ecocredit.v1.MsgRetireResponse";
}

/** MsgCancel is the Msg/Cancel request type. */
export interface MsgCancel {
  $type: "regen.ecocredit.v1.MsgCancel";
  /** owner is the address of the account that owns the credits being cancelled. */
  owner: string;
  /** credits specifies a credit batch and the number of credits being cancelled. */
  credits: Credits[];
  /**
   * reason is any arbitrary string that specifies the reason for cancelling
   * credits.
   */
  reason: string;
}

/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponse {
  $type: "regen.ecocredit.v1.MsgCancelResponse";
}

/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */
export interface MsgUpdateClassAdmin {
  $type: "regen.ecocredit.v1.MsgUpdateClassAdmin";
  /**
   * admin is the address of the account that is currently the admin of the
   * credit class.
   */
  admin: string;
  /** class_id is the unique identifier of the credit class. */
  classId: string;
  /**
   * new_admin is the address of the account that will become the new admin of
   * the credit class.
   */
  newAdmin: string;
}

/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */
export interface MsgUpdateClassAdminResponse {
  $type: "regen.ecocredit.v1.MsgUpdateClassAdminResponse";
}

/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */
export interface MsgUpdateClassIssuers {
  $type: "regen.ecocredit.v1.MsgUpdateClassIssuers";
  /** admin is the address of the account that is the admin of the credit class. */
  admin: string;
  /** class_id is the unique identifier of the credit class. */
  classId: string;
  /**
   * add_issuers are the addresses of the accounts that will be added to the
   * list of approved credit class issuers.
   */
  addIssuers: string[];
  /**
   * remove_issuers are the addresses of the accounts that will be removed from
   * the list of approved credit class issuers.
   */
  removeIssuers: string[];
}

/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */
export interface MsgUpdateClassIssuersResponse {
  $type: "regen.ecocredit.v1.MsgUpdateClassIssuersResponse";
}

/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */
export interface MsgUpdateClassMetadata {
  $type: "regen.ecocredit.v1.MsgUpdateClassMetadata";
  /** admin is the address of the account that is the admin of the credit class. */
  admin: string;
  /** class_id is the unique identifier of the credit class. */
  classId: string;
  /**
   * new_metadata is new metadata that will replace the existing metadata. It
   * can be any arbitrary string with a maximum length of 256 characters that
   * includes or references the metadata to attach to the credit class.
   */
  newMetadata: string;
}

/** MsgUpdateClassMetadataResponse is the Msg/UpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponse {
  $type: "regen.ecocredit.v1.MsgUpdateClassMetadataResponse";
}

/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin request type. */
export interface MsgUpdateProjectAdmin {
  $type: "regen.ecocredit.v1.MsgUpdateProjectAdmin";
  /**
   * admin is the address of the account that is the currently the admin of the
   * project.
   */
  admin: string;
  /** project_id is the unique identifier of the project. */
  projectId: string;
  /**
   * new_admin is the address of the account that will become the new admin of
   * the project.
   */
  newAdmin: string;
}

/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin response type. */
export interface MsgUpdateProjectAdminResponse {
  $type: "regen.ecocredit.v1.MsgUpdateProjectAdminResponse";
}

/** MsgUpdateProjectMetadata is the Msg/UpdateProjectMetadata request type. */
export interface MsgUpdateProjectMetadata {
  $type: "regen.ecocredit.v1.MsgUpdateProjectMetadata";
  /** admin is the address of the account that is the admin of the project. */
  admin: string;
  /** project_id is the unique identifier of the project. */
  projectId: string;
  /**
   * new_metadata is new metadata that will replace the existing metadata. It
   * can be any arbitrary string with a maximum length of 256 characters that
   * includes or references the metadata to attach to the project.
   */
  newMetadata: string;
}

/**
 * MsgUpdateProjectMetadataResponse is the Msg/UpdateProjectMetadataResponse
 * response type.
 */
export interface MsgUpdateProjectMetadataResponse {
  $type: "regen.ecocredit.v1.MsgUpdateProjectMetadataResponse";
}

/** MsgBridge is the Msg/Bridge request type. */
export interface MsgBridge {
  $type: "regen.ecocredit.v1.MsgBridge";
  /** owner is the address of the account that owns the credits being bridged. */
  owner: string;
  /** target is the name of the target chain or registry. */
  target: string;
  /** recipient is the address of the account receiving the bridged credits. */
  recipient: string;
  /** credits specifies a credit batch and the number of credits being bridged. */
  credits: Credits[];
}

/**
 * MsgUpdateBatchMetadata is the Msg/UpdateBatchMetadata request type.
 *
 * Since Revision 2
 */
export interface MsgUpdateBatchMetadata {
  $type: "regen.ecocredit.v1.MsgUpdateBatchMetadata";
  /** issuer is the address of the account that is the issuer of the batch. */
  issuer: string;
  /** batch_denom is the unique identifier of the batch. */
  batchDenom: string;
  /**
   * new_metadata is new metadata that will replace the existing metadata. It
   * can be any arbitrary string with a maximum length of 256 characters that
   * includes or references the metadata to attach to the batch.
   */
  newMetadata: string;
}

/**
 * MsgUpdateBatchMetadataResponse is the Msg/UpdateBatchMetadataResponse
 * response type.
 *
 * Since Revision 2
 */
export interface MsgUpdateBatchMetadataResponse {
  $type: "regen.ecocredit.v1.MsgUpdateBatchMetadataResponse";
}

/** MsgBridgeResponse is the Msg/Bridge response type. */
export interface MsgBridgeResponse {
  $type: "regen.ecocredit.v1.MsgBridgeResponse";
}

/** MsgBridgeReceive is the Msg/BridgeReceive request type. */
export interface MsgBridgeReceive {
  $type: "regen.ecocredit.v1.MsgBridgeReceive";
  /** issuer is the account address of the service bridging the credits. */
  issuer: string;
  /**
   * class_id is the unique identifier of the credit class within which the
   * project and credit batch already exist or will be created.
   */
  classId: string;
  /** project defines the project information for the bridged credits. */
  project?: MsgBridgeReceive_Project;
  /** batch defines the credit batch information for the bridged credits. */
  batch?: MsgBridgeReceive_Batch;
  /**
   * origin_tx is a reference to a transaction which caused the transfer from
   * another chain or registry.
   */
  originTx?: OriginTx;
}

/**
 * Batch defines the credit batch information for the bridged credits. This
 * information will be used to create a credit batch or to dynamically mint
 * credits to an existing credit batch.
 */
export interface MsgBridgeReceive_Batch {
  $type: "regen.ecocredit.v1.MsgBridgeReceive.Batch";
  /** recipient is the recipient of the bridged credits. */
  recipient: string;
  /** amount is the amount of credits being bridged. */
  amount: string;
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
  /** metadata is the metadata for the credit batch. */
  metadata: string;
}

/**
 * Project defines the project information for the bridged credits. This
 * information will be used to find an existing project or to create a new
 * project if a project with the same reference id does not already exist.
 */
export interface MsgBridgeReceive_Project {
  $type: "regen.ecocredit.v1.MsgBridgeReceive.Project";
  /** reference_id is the reference id of the project. */
  referenceId: string;
  /** jurisdiction is the project jurisdiction. */
  jurisdiction: string;
  /** metadata is the metadata for the project. */
  metadata: string;
}

/** MsgBridgeReceiveResponse is the Msg/BridgeReceive response type. */
export interface MsgBridgeReceiveResponse {
  $type: "regen.ecocredit.v1.MsgBridgeReceiveResponse";
  /**
   * batch_denom is the unique identifier of the credit batch either created
   * or within which the credits were dynamically minted.
   */
  batchDenom: string;
  /**
   * project_id is the unique identifier of the project that was either created
   * or the existing project within which the credit batch exists.
   */
  projectId: string;
}

/**
 * MsgAddClassCreator is the Msg/AddClassCreator request type.
 *
 * Since Revision 2
 */
export interface MsgAddClassCreator {
  $type: "regen.ecocredit.v1.MsgAddClassCreator";
  /** authority is the address of the governance account. */
  authority: string;
  /** creator is the address to add to the class creator list. */
  creator: string;
}

/**
 * MsgAddClassCreatorResponse is the Msg/AddClassCreator response type.
 *
 * Since Revision 2
 */
export interface MsgAddClassCreatorResponse {
  $type: "regen.ecocredit.v1.MsgAddClassCreatorResponse";
}

/**
 * MsgSetClassCreatorAllowlist is the Msg/SetClassCreatorAllowlist request
 * type.
 *
 * Since Revision 2
 */
export interface MsgSetClassCreatorAllowlist {
  $type: "regen.ecocredit.v1.MsgSetClassCreatorAllowlist";
  /** authority is the address of the governance account. */
  authority: string;
  /** enabled defines the boolean value to set the allowlist on or off. */
  enabled: boolean;
}

/**
 * MsgSetClassCreatorAllowlistResponse is the Msg/SetClassCreatorAllowlist
 * response type.
 *
 * Since Revision 2
 */
export interface MsgSetClassCreatorAllowlistResponse {
  $type: "regen.ecocredit.v1.MsgSetClassCreatorAllowlistResponse";
}

/**
 * MsgRemoveClassCreator is the Msg/RemoveClassCreator request type.
 *
 * Since Revision 2
 */
export interface MsgRemoveClassCreator {
  $type: "regen.ecocredit.v1.MsgRemoveClassCreator";
  /** authority is the address of the governance account. */
  authority: string;
  /** creator is the address to remove from the class creator list. */
  creator: string;
}

/**
 * MsgRemoveClassCreatorResponse is the Msg/RemoveClasssCreator response type.
 *
 * Since Revision 2
 */
export interface MsgRemoveClassCreatorResponse {
  $type: "regen.ecocredit.v1.MsgRemoveClassCreatorResponse";
}

/**
 * MsgUpdateClassFee is the Msg/UpdateClassFee request type.
 *
 * Since Revision 2
 */
export interface MsgUpdateClassFee {
  $type: "regen.ecocredit.v1.MsgUpdateClassFee";
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * fee is the credit class creation fee. If not set, the credit class creation
   * fee will be removed and no fee will be required to create a credit class.
   */
  fee?: Coin;
}

/**
 * MsgUpdateClassFeeResponse is the Msg/UpdateClassFee response type.
 *
 * Since Revision 2
 */
export interface MsgUpdateClassFeeResponse {
  $type: "regen.ecocredit.v1.MsgUpdateClassFeeResponse";
}

/**
 * MsgAddAllowedBridgeChain is the Msg/AddAllowedBridgeChain request type.
 *
 * Since Revision 2
 */
export interface MsgAddAllowedBridgeChain {
  $type: "regen.ecocredit.v1.MsgAddAllowedBridgeChain";
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * chain_name is the name of the chain to allow bridging of ecocredits to
   * (i.e. polygon, ethereum, celo).
   */
  chainName: string;
}

/**
 * MsgAddAllowedBridgeChainResponse is the Msg/AddAllowedBridgeChain response
 * type.
 *
 * Since Revision 2
 */
export interface MsgAddAllowedBridgeChainResponse {
  $type: "regen.ecocredit.v1.MsgAddAllowedBridgeChainResponse";
}

/**
 * MsgRemoveAllowedBridgeChain is the Msg/RemoveAllowedBridgeChain request type.
 *
 * Since Revision 2
 */
export interface MsgRemoveAllowedBridgeChain {
  $type: "regen.ecocredit.v1.MsgRemoveAllowedBridgeChain";
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * chain_name is the name of the chain to remove from the list of allowed
   * chains to bridge ecocredits to (i.e. polygon, ethereum, celo).
   */
  chainName: string;
}

/**
 * MsgRemoveAllowedBridgeChainResponse is the Msg/RemoveAllowedBridgeChain
 * response type.
 *
 * Since Revision 2
 */
export interface MsgRemoveAllowedBridgeChainResponse {
  $type: "regen.ecocredit.v1.MsgRemoveAllowedBridgeChainResponse";
}

function createBaseMsgAddCreditType(): MsgAddCreditType {
  return { $type: "regen.ecocredit.v1.MsgAddCreditType", authority: "", creditType: undefined };
}

export const MsgAddCreditType = {
  $type: "regen.ecocredit.v1.MsgAddCreditType" as const,

  encode(message: MsgAddCreditType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.creditType !== undefined) {
      CreditType.encode(message.creditType, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddCreditType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddCreditType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.creditType = CreditType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddCreditType {
    return {
      $type: MsgAddCreditType.$type,
      authority: isSet(object.authority) ? String(object.authority) : "",
      creditType: isSet(object.creditType) ? CreditType.fromJSON(object.creditType) : undefined,
    };
  },

  toJSON(message: MsgAddCreditType): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.creditType !== undefined &&
      (obj.creditType = message.creditType ? CreditType.toJSON(message.creditType) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgAddCreditType>): MsgAddCreditType {
    return MsgAddCreditType.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAddCreditType>): MsgAddCreditType {
    const message = createBaseMsgAddCreditType();
    message.authority = object.authority ?? "";
    message.creditType = (object.creditType !== undefined && object.creditType !== null)
      ? CreditType.fromPartial(object.creditType)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgAddCreditType.$type, MsgAddCreditType);

function createBaseMsgAddCreditTypeResponse(): MsgAddCreditTypeResponse {
  return { $type: "regen.ecocredit.v1.MsgAddCreditTypeResponse" };
}

export const MsgAddCreditTypeResponse = {
  $type: "regen.ecocredit.v1.MsgAddCreditTypeResponse" as const,

  encode(_: MsgAddCreditTypeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddCreditTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddCreditTypeResponse();
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

  fromJSON(_: any): MsgAddCreditTypeResponse {
    return { $type: MsgAddCreditTypeResponse.$type };
  },

  toJSON(_: MsgAddCreditTypeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgAddCreditTypeResponse>): MsgAddCreditTypeResponse {
    return MsgAddCreditTypeResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgAddCreditTypeResponse>): MsgAddCreditTypeResponse {
    const message = createBaseMsgAddCreditTypeResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgAddCreditTypeResponse.$type, MsgAddCreditTypeResponse);

function createBaseMsgCreateClass(): MsgCreateClass {
  return {
    $type: "regen.ecocredit.v1.MsgCreateClass",
    admin: "",
    issuers: [],
    metadata: "",
    creditTypeAbbrev: "",
    fee: undefined,
  };
}

export const MsgCreateClass = {
  $type: "regen.ecocredit.v1.MsgCreateClass" as const,

  encode(message: MsgCreateClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.issuers) {
      writer.uint32(18).string(v!);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.creditTypeAbbrev !== "") {
      writer.uint32(34).string(message.creditTypeAbbrev);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(42).fork()).ldelim();
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
          message.metadata = reader.string();
          break;
        case 4:
          message.creditTypeAbbrev = reader.string();
          break;
        case 5:
          message.fee = Coin.decode(reader, reader.uint32());
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
      admin: isSet(object.admin) ? String(object.admin) : "",
      issuers: Array.isArray(object?.issuers) ? object.issuers.map((e: any) => String(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      creditTypeAbbrev: isSet(object.creditTypeAbbrev) ? String(object.creditTypeAbbrev) : "",
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
    };
  },

  toJSON(message: MsgCreateClass): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.issuers) {
      obj.issuers = message.issuers.map((e) => e);
    } else {
      obj.issuers = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.creditTypeAbbrev !== undefined && (obj.creditTypeAbbrev = message.creditTypeAbbrev);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateClass>): MsgCreateClass {
    return MsgCreateClass.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateClass>): MsgCreateClass {
    const message = createBaseMsgCreateClass();
    message.admin = object.admin ?? "";
    message.issuers = object.issuers?.map((e) => e) || [];
    message.metadata = object.metadata ?? "";
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
    message.fee = (object.fee !== undefined && object.fee !== null) ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgCreateClass.$type, MsgCreateClass);

function createBaseMsgCreateClassResponse(): MsgCreateClassResponse {
  return { $type: "regen.ecocredit.v1.MsgCreateClassResponse", classId: "" };
}

export const MsgCreateClassResponse = {
  $type: "regen.ecocredit.v1.MsgCreateClassResponse" as const,

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
    return { $type: MsgCreateClassResponse.$type, classId: isSet(object.classId) ? String(object.classId) : "" };
  },

  toJSON(message: MsgCreateClassResponse): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateClassResponse>): MsgCreateClassResponse {
    return MsgCreateClassResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateClassResponse>): MsgCreateClassResponse {
    const message = createBaseMsgCreateClassResponse();
    message.classId = object.classId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgCreateClassResponse.$type, MsgCreateClassResponse);

function createBaseMsgCreateProject(): MsgCreateProject {
  return {
    $type: "regen.ecocredit.v1.MsgCreateProject",
    admin: "",
    classId: "",
    metadata: "",
    jurisdiction: "",
    referenceId: "",
  };
}

export const MsgCreateProject = {
  $type: "regen.ecocredit.v1.MsgCreateProject" as const,

  encode(message: MsgCreateProject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.jurisdiction !== "") {
      writer.uint32(34).string(message.jurisdiction);
    }
    if (message.referenceId !== "") {
      writer.uint32(42).string(message.referenceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProject();
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
          message.metadata = reader.string();
          break;
        case 4:
          message.jurisdiction = reader.string();
          break;
        case 5:
          message.referenceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateProject {
    return {
      $type: MsgCreateProject.$type,
      admin: isSet(object.admin) ? String(object.admin) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      jurisdiction: isSet(object.jurisdiction) ? String(object.jurisdiction) : "",
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : "",
    };
  },

  toJSON(message: MsgCreateProject): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.classId !== undefined && (obj.classId = message.classId);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.jurisdiction !== undefined && (obj.jurisdiction = message.jurisdiction);
    message.referenceId !== undefined && (obj.referenceId = message.referenceId);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateProject>): MsgCreateProject {
    return MsgCreateProject.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateProject>): MsgCreateProject {
    const message = createBaseMsgCreateProject();
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.metadata = object.metadata ?? "";
    message.jurisdiction = object.jurisdiction ?? "";
    message.referenceId = object.referenceId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgCreateProject.$type, MsgCreateProject);

function createBaseMsgCreateProjectResponse(): MsgCreateProjectResponse {
  return { $type: "regen.ecocredit.v1.MsgCreateProjectResponse", projectId: "" };
}

export const MsgCreateProjectResponse = {
  $type: "regen.ecocredit.v1.MsgCreateProjectResponse" as const,

  encode(message: MsgCreateProjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateProjectResponse {
    return {
      $type: MsgCreateProjectResponse.$type,
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
    };
  },

  toJSON(message: MsgCreateProjectResponse): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateProjectResponse>): MsgCreateProjectResponse {
    return MsgCreateProjectResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateProjectResponse>): MsgCreateProjectResponse {
    const message = createBaseMsgCreateProjectResponse();
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgCreateProjectResponse.$type, MsgCreateProjectResponse);

function createBaseMsgCreateBatch(): MsgCreateBatch {
  return {
    $type: "regen.ecocredit.v1.MsgCreateBatch",
    issuer: "",
    projectId: "",
    issuance: [],
    metadata: "",
    startDate: undefined,
    endDate: undefined,
    open: false,
    originTx: undefined,
  };
}

export const MsgCreateBatch = {
  $type: "regen.ecocredit.v1.MsgCreateBatch" as const,

  encode(message: MsgCreateBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    for (const v of message.issuance) {
      BatchIssuance.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(42).fork()).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(50).fork()).ldelim();
    }
    if (message.open === true) {
      writer.uint32(56).bool(message.open);
    }
    if (message.originTx !== undefined) {
      OriginTx.encode(message.originTx, writer.uint32(66).fork()).ldelim();
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
          message.projectId = reader.string();
          break;
        case 3:
          message.issuance.push(BatchIssuance.decode(reader, reader.uint32()));
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.open = reader.bool();
          break;
        case 8:
          message.originTx = OriginTx.decode(reader, reader.uint32());
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
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      issuance: Array.isArray(object?.issuance) ? object.issuance.map((e: any) => BatchIssuance.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      open: isSet(object.open) ? Boolean(object.open) : false,
      originTx: isSet(object.originTx) ? OriginTx.fromJSON(object.originTx) : undefined,
    };
  },

  toJSON(message: MsgCreateBatch): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    if (message.issuance) {
      obj.issuance = message.issuance.map((e) => e ? BatchIssuance.toJSON(e) : undefined);
    } else {
      obj.issuance = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
    message.endDate !== undefined && (obj.endDate = message.endDate.toISOString());
    message.open !== undefined && (obj.open = message.open);
    message.originTx !== undefined && (obj.originTx = message.originTx ? OriginTx.toJSON(message.originTx) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateBatch>): MsgCreateBatch {
    return MsgCreateBatch.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateBatch>): MsgCreateBatch {
    const message = createBaseMsgCreateBatch();
    message.issuer = object.issuer ?? "";
    message.projectId = object.projectId ?? "";
    message.issuance = object.issuance?.map((e) => BatchIssuance.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.open = object.open ?? false;
    message.originTx = (object.originTx !== undefined && object.originTx !== null)
      ? OriginTx.fromPartial(object.originTx)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgCreateBatch.$type, MsgCreateBatch);

function createBaseMsgCreateBatchResponse(): MsgCreateBatchResponse {
  return { $type: "regen.ecocredit.v1.MsgCreateBatchResponse", batchDenom: "" };
}

export const MsgCreateBatchResponse = {
  $type: "regen.ecocredit.v1.MsgCreateBatchResponse" as const,

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
      $type: MsgCreateBatchResponse.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
    };
  },

  toJSON(message: MsgCreateBatchResponse): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  create(base?: DeepPartial<MsgCreateBatchResponse>): MsgCreateBatchResponse {
    return MsgCreateBatchResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCreateBatchResponse>): MsgCreateBatchResponse {
    const message = createBaseMsgCreateBatchResponse();
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgCreateBatchResponse.$type, MsgCreateBatchResponse);

function createBaseMsgMintBatchCredits(): MsgMintBatchCredits {
  return {
    $type: "regen.ecocredit.v1.MsgMintBatchCredits",
    issuer: "",
    batchDenom: "",
    issuance: [],
    originTx: undefined,
  };
}

export const MsgMintBatchCredits = {
  $type: "regen.ecocredit.v1.MsgMintBatchCredits" as const,

  encode(message: MsgMintBatchCredits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }
    for (const v of message.issuance) {
      BatchIssuance.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.originTx !== undefined) {
      OriginTx.encode(message.originTx, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintBatchCredits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintBatchCredits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.batchDenom = reader.string();
          break;
        case 3:
          message.issuance.push(BatchIssuance.decode(reader, reader.uint32()));
          break;
        case 4:
          message.originTx = OriginTx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintBatchCredits {
    return {
      $type: MsgMintBatchCredits.$type,
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      issuance: Array.isArray(object?.issuance) ? object.issuance.map((e: any) => BatchIssuance.fromJSON(e)) : [],
      originTx: isSet(object.originTx) ? OriginTx.fromJSON(object.originTx) : undefined,
    };
  },

  toJSON(message: MsgMintBatchCredits): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    if (message.issuance) {
      obj.issuance = message.issuance.map((e) => e ? BatchIssuance.toJSON(e) : undefined);
    } else {
      obj.issuance = [];
    }
    message.originTx !== undefined && (obj.originTx = message.originTx ? OriginTx.toJSON(message.originTx) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgMintBatchCredits>): MsgMintBatchCredits {
    return MsgMintBatchCredits.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgMintBatchCredits>): MsgMintBatchCredits {
    const message = createBaseMsgMintBatchCredits();
    message.issuer = object.issuer ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.issuance = object.issuance?.map((e) => BatchIssuance.fromPartial(e)) || [];
    message.originTx = (object.originTx !== undefined && object.originTx !== null)
      ? OriginTx.fromPartial(object.originTx)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgMintBatchCredits.$type, MsgMintBatchCredits);

function createBaseMsgMintBatchCreditsResponse(): MsgMintBatchCreditsResponse {
  return { $type: "regen.ecocredit.v1.MsgMintBatchCreditsResponse" };
}

export const MsgMintBatchCreditsResponse = {
  $type: "regen.ecocredit.v1.MsgMintBatchCreditsResponse" as const,

  encode(_: MsgMintBatchCreditsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintBatchCreditsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintBatchCreditsResponse();
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

  fromJSON(_: any): MsgMintBatchCreditsResponse {
    return { $type: MsgMintBatchCreditsResponse.$type };
  },

  toJSON(_: MsgMintBatchCreditsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgMintBatchCreditsResponse>): MsgMintBatchCreditsResponse {
    return MsgMintBatchCreditsResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgMintBatchCreditsResponse>): MsgMintBatchCreditsResponse {
    const message = createBaseMsgMintBatchCreditsResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgMintBatchCreditsResponse.$type, MsgMintBatchCreditsResponse);

function createBaseMsgSealBatch(): MsgSealBatch {
  return { $type: "regen.ecocredit.v1.MsgSealBatch", issuer: "", batchDenom: "" };
}

export const MsgSealBatch = {
  $type: "regen.ecocredit.v1.MsgSealBatch" as const,

  encode(message: MsgSealBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSealBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSealBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.batchDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSealBatch {
    return {
      $type: MsgSealBatch.$type,
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
    };
  },

  toJSON(message: MsgSealBatch): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  create(base?: DeepPartial<MsgSealBatch>): MsgSealBatch {
    return MsgSealBatch.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSealBatch>): MsgSealBatch {
    const message = createBaseMsgSealBatch();
    message.issuer = object.issuer ?? "";
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgSealBatch.$type, MsgSealBatch);

function createBaseMsgSealBatchResponse(): MsgSealBatchResponse {
  return { $type: "regen.ecocredit.v1.MsgSealBatchResponse" };
}

export const MsgSealBatchResponse = {
  $type: "regen.ecocredit.v1.MsgSealBatchResponse" as const,

  encode(_: MsgSealBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSealBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSealBatchResponse();
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

  fromJSON(_: any): MsgSealBatchResponse {
    return { $type: MsgSealBatchResponse.$type };
  },

  toJSON(_: MsgSealBatchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSealBatchResponse>): MsgSealBatchResponse {
    return MsgSealBatchResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSealBatchResponse>): MsgSealBatchResponse {
    const message = createBaseMsgSealBatchResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgSealBatchResponse.$type, MsgSealBatchResponse);

function createBaseMsgSend(): MsgSend {
  return { $type: "regen.ecocredit.v1.MsgSend", sender: "", recipient: "", credits: [] };
}

export const MsgSend = {
  $type: "regen.ecocredit.v1.MsgSend" as const,

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
      $type: MsgSend.$type,
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => MsgSend_SendCredits.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgSend): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.credits) {
      obj.credits = message.credits.map((e) => e ? MsgSend_SendCredits.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MsgSend>): MsgSend {
    return MsgSend.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSend>): MsgSend {
    const message = createBaseMsgSend();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.credits = object.credits?.map((e) => MsgSend_SendCredits.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgSend.$type, MsgSend);

function createBaseMsgSend_SendCredits(): MsgSend_SendCredits {
  return {
    $type: "regen.ecocredit.v1.MsgSend.SendCredits",
    batchDenom: "",
    tradableAmount: "",
    retiredAmount: "",
    retirementJurisdiction: "",
    retirementReason: "",
  };
}

export const MsgSend_SendCredits = {
  $type: "regen.ecocredit.v1.MsgSend.SendCredits" as const,

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
    if (message.retirementJurisdiction !== "") {
      writer.uint32(34).string(message.retirementJurisdiction);
    }
    if (message.retirementReason !== "") {
      writer.uint32(42).string(message.retirementReason);
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
          message.retirementJurisdiction = reader.string();
          break;
        case 5:
          message.retirementReason = reader.string();
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
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      tradableAmount: isSet(object.tradableAmount) ? String(object.tradableAmount) : "",
      retiredAmount: isSet(object.retiredAmount) ? String(object.retiredAmount) : "",
      retirementJurisdiction: isSet(object.retirementJurisdiction) ? String(object.retirementJurisdiction) : "",
      retirementReason: isSet(object.retirementReason) ? String(object.retirementReason) : "",
    };
  },

  toJSON(message: MsgSend_SendCredits): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.tradableAmount !== undefined && (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined && (obj.retiredAmount = message.retiredAmount);
    message.retirementJurisdiction !== undefined && (obj.retirementJurisdiction = message.retirementJurisdiction);
    message.retirementReason !== undefined && (obj.retirementReason = message.retirementReason);
    return obj;
  },

  create(base?: DeepPartial<MsgSend_SendCredits>): MsgSend_SendCredits {
    return MsgSend_SendCredits.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSend_SendCredits>): MsgSend_SendCredits {
    const message = createBaseMsgSend_SendCredits();
    message.batchDenom = object.batchDenom ?? "";
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    message.retirementJurisdiction = object.retirementJurisdiction ?? "";
    message.retirementReason = object.retirementReason ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgSend_SendCredits.$type, MsgSend_SendCredits);

function createBaseMsgSendResponse(): MsgSendResponse {
  return { $type: "regen.ecocredit.v1.MsgSendResponse" };
}

export const MsgSendResponse = {
  $type: "regen.ecocredit.v1.MsgSendResponse" as const,

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
    return { $type: MsgSendResponse.$type };
  },

  toJSON(_: MsgSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSendResponse>): MsgSendResponse {
    return MsgSendResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSendResponse>): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgSendResponse.$type, MsgSendResponse);

function createBaseMsgRetire(): MsgRetire {
  return { $type: "regen.ecocredit.v1.MsgRetire", owner: "", credits: [], jurisdiction: "", reason: "" };
}

export const MsgRetire = {
  $type: "regen.ecocredit.v1.MsgRetire" as const,

  encode(message: MsgRetire, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.credits) {
      Credits.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.jurisdiction !== "") {
      writer.uint32(26).string(message.jurisdiction);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
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
          message.owner = reader.string();
          break;
        case 2:
          message.credits.push(Credits.decode(reader, reader.uint32()));
          break;
        case 3:
          message.jurisdiction = reader.string();
          break;
        case 4:
          message.reason = reader.string();
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
      owner: isSet(object.owner) ? String(object.owner) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => Credits.fromJSON(e)) : [],
      jurisdiction: isSet(object.jurisdiction) ? String(object.jurisdiction) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: MsgRetire): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.credits) {
      obj.credits = message.credits.map((e) => e ? Credits.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }
    message.jurisdiction !== undefined && (obj.jurisdiction = message.jurisdiction);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  create(base?: DeepPartial<MsgRetire>): MsgRetire {
    return MsgRetire.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRetire>): MsgRetire {
    const message = createBaseMsgRetire();
    message.owner = object.owner ?? "";
    message.credits = object.credits?.map((e) => Credits.fromPartial(e)) || [];
    message.jurisdiction = object.jurisdiction ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgRetire.$type, MsgRetire);

function createBaseMsgRetireResponse(): MsgRetireResponse {
  return { $type: "regen.ecocredit.v1.MsgRetireResponse" };
}

export const MsgRetireResponse = {
  $type: "regen.ecocredit.v1.MsgRetireResponse" as const,

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
    return { $type: MsgRetireResponse.$type };
  },

  toJSON(_: MsgRetireResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRetireResponse>): MsgRetireResponse {
    return MsgRetireResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRetireResponse>): MsgRetireResponse {
    const message = createBaseMsgRetireResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgRetireResponse.$type, MsgRetireResponse);

function createBaseMsgCancel(): MsgCancel {
  return { $type: "regen.ecocredit.v1.MsgCancel", owner: "", credits: [], reason: "" };
}

export const MsgCancel = {
  $type: "regen.ecocredit.v1.MsgCancel" as const,

  encode(message: MsgCancel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.credits) {
      Credits.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
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
          message.owner = reader.string();
          break;
        case 2:
          message.credits.push(Credits.decode(reader, reader.uint32()));
          break;
        case 3:
          message.reason = reader.string();
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
      owner: isSet(object.owner) ? String(object.owner) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => Credits.fromJSON(e)) : [],
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: MsgCancel): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.credits) {
      obj.credits = message.credits.map((e) => e ? Credits.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  create(base?: DeepPartial<MsgCancel>): MsgCancel {
    return MsgCancel.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgCancel>): MsgCancel {
    const message = createBaseMsgCancel();
    message.owner = object.owner ?? "";
    message.credits = object.credits?.map((e) => Credits.fromPartial(e)) || [];
    message.reason = object.reason ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgCancel.$type, MsgCancel);

function createBaseMsgCancelResponse(): MsgCancelResponse {
  return { $type: "regen.ecocredit.v1.MsgCancelResponse" };
}

export const MsgCancelResponse = {
  $type: "regen.ecocredit.v1.MsgCancelResponse" as const,

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
    return { $type: MsgCancelResponse.$type };
  },

  toJSON(_: MsgCancelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgCancelResponse>): MsgCancelResponse {
    return MsgCancelResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgCancelResponse>): MsgCancelResponse {
    const message = createBaseMsgCancelResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgCancelResponse.$type, MsgCancelResponse);

function createBaseMsgUpdateClassAdmin(): MsgUpdateClassAdmin {
  return { $type: "regen.ecocredit.v1.MsgUpdateClassAdmin", admin: "", classId: "", newAdmin: "" };
}

export const MsgUpdateClassAdmin = {
  $type: "regen.ecocredit.v1.MsgUpdateClassAdmin" as const,

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
      $type: MsgUpdateClassAdmin.$type,
      admin: isSet(object.admin) ? String(object.admin) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
    };
  },

  toJSON(message: MsgUpdateClassAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.classId !== undefined && (obj.classId = message.classId);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateClassAdmin>): MsgUpdateClassAdmin {
    return MsgUpdateClassAdmin.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateClassAdmin>): MsgUpdateClassAdmin {
    const message = createBaseMsgUpdateClassAdmin();
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateClassAdmin.$type, MsgUpdateClassAdmin);

function createBaseMsgUpdateClassAdminResponse(): MsgUpdateClassAdminResponse {
  return { $type: "regen.ecocredit.v1.MsgUpdateClassAdminResponse" };
}

export const MsgUpdateClassAdminResponse = {
  $type: "regen.ecocredit.v1.MsgUpdateClassAdminResponse" as const,

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
    return { $type: MsgUpdateClassAdminResponse.$type };
  },

  toJSON(_: MsgUpdateClassAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateClassAdminResponse>): MsgUpdateClassAdminResponse {
    return MsgUpdateClassAdminResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateClassAdminResponse>): MsgUpdateClassAdminResponse {
    const message = createBaseMsgUpdateClassAdminResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateClassAdminResponse.$type, MsgUpdateClassAdminResponse);

function createBaseMsgUpdateClassIssuers(): MsgUpdateClassIssuers {
  return {
    $type: "regen.ecocredit.v1.MsgUpdateClassIssuers",
    admin: "",
    classId: "",
    addIssuers: [],
    removeIssuers: [],
  };
}

export const MsgUpdateClassIssuers = {
  $type: "regen.ecocredit.v1.MsgUpdateClassIssuers" as const,

  encode(message: MsgUpdateClassIssuers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    for (const v of message.addIssuers) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.removeIssuers) {
      writer.uint32(34).string(v!);
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
          message.addIssuers.push(reader.string());
          break;
        case 4:
          message.removeIssuers.push(reader.string());
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
      admin: isSet(object.admin) ? String(object.admin) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      addIssuers: Array.isArray(object?.addIssuers) ? object.addIssuers.map((e: any) => String(e)) : [],
      removeIssuers: Array.isArray(object?.removeIssuers) ? object.removeIssuers.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: MsgUpdateClassIssuers): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.classId !== undefined && (obj.classId = message.classId);
    if (message.addIssuers) {
      obj.addIssuers = message.addIssuers.map((e) => e);
    } else {
      obj.addIssuers = [];
    }
    if (message.removeIssuers) {
      obj.removeIssuers = message.removeIssuers.map((e) => e);
    } else {
      obj.removeIssuers = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateClassIssuers>): MsgUpdateClassIssuers {
    return MsgUpdateClassIssuers.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateClassIssuers>): MsgUpdateClassIssuers {
    const message = createBaseMsgUpdateClassIssuers();
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.addIssuers = object.addIssuers?.map((e) => e) || [];
    message.removeIssuers = object.removeIssuers?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateClassIssuers.$type, MsgUpdateClassIssuers);

function createBaseMsgUpdateClassIssuersResponse(): MsgUpdateClassIssuersResponse {
  return { $type: "regen.ecocredit.v1.MsgUpdateClassIssuersResponse" };
}

export const MsgUpdateClassIssuersResponse = {
  $type: "regen.ecocredit.v1.MsgUpdateClassIssuersResponse" as const,

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
    return { $type: MsgUpdateClassIssuersResponse.$type };
  },

  toJSON(_: MsgUpdateClassIssuersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateClassIssuersResponse>): MsgUpdateClassIssuersResponse {
    return MsgUpdateClassIssuersResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateClassIssuersResponse>): MsgUpdateClassIssuersResponse {
    const message = createBaseMsgUpdateClassIssuersResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateClassIssuersResponse.$type, MsgUpdateClassIssuersResponse);

function createBaseMsgUpdateClassMetadata(): MsgUpdateClassMetadata {
  return { $type: "regen.ecocredit.v1.MsgUpdateClassMetadata", admin: "", classId: "", newMetadata: "" };
}

export const MsgUpdateClassMetadata = {
  $type: "regen.ecocredit.v1.MsgUpdateClassMetadata" as const,

  encode(message: MsgUpdateClassMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.newMetadata !== "") {
      writer.uint32(26).string(message.newMetadata);
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
          message.newMetadata = reader.string();
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
      admin: isSet(object.admin) ? String(object.admin) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      newMetadata: isSet(object.newMetadata) ? String(object.newMetadata) : "",
    };
  },

  toJSON(message: MsgUpdateClassMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.classId !== undefined && (obj.classId = message.classId);
    message.newMetadata !== undefined && (obj.newMetadata = message.newMetadata);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateClassMetadata>): MsgUpdateClassMetadata {
    return MsgUpdateClassMetadata.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateClassMetadata>): MsgUpdateClassMetadata {
    const message = createBaseMsgUpdateClassMetadata();
    message.admin = object.admin ?? "";
    message.classId = object.classId ?? "";
    message.newMetadata = object.newMetadata ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateClassMetadata.$type, MsgUpdateClassMetadata);

function createBaseMsgUpdateClassMetadataResponse(): MsgUpdateClassMetadataResponse {
  return { $type: "regen.ecocredit.v1.MsgUpdateClassMetadataResponse" };
}

export const MsgUpdateClassMetadataResponse = {
  $type: "regen.ecocredit.v1.MsgUpdateClassMetadataResponse" as const,

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
    return { $type: MsgUpdateClassMetadataResponse.$type };
  },

  toJSON(_: MsgUpdateClassMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateClassMetadataResponse>): MsgUpdateClassMetadataResponse {
    return MsgUpdateClassMetadataResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateClassMetadataResponse>): MsgUpdateClassMetadataResponse {
    const message = createBaseMsgUpdateClassMetadataResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateClassMetadataResponse.$type, MsgUpdateClassMetadataResponse);

function createBaseMsgUpdateProjectAdmin(): MsgUpdateProjectAdmin {
  return { $type: "regen.ecocredit.v1.MsgUpdateProjectAdmin", admin: "", projectId: "", newAdmin: "" };
}

export const MsgUpdateProjectAdmin = {
  $type: "regen.ecocredit.v1.MsgUpdateProjectAdmin" as const,

  encode(message: MsgUpdateProjectAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProjectAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
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

  fromJSON(object: any): MsgUpdateProjectAdmin {
    return {
      $type: MsgUpdateProjectAdmin.$type,
      admin: isSet(object.admin) ? String(object.admin) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
    };
  },

  toJSON(message: MsgUpdateProjectAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateProjectAdmin>): MsgUpdateProjectAdmin {
    return MsgUpdateProjectAdmin.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateProjectAdmin>): MsgUpdateProjectAdmin {
    const message = createBaseMsgUpdateProjectAdmin();
    message.admin = object.admin ?? "";
    message.projectId = object.projectId ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateProjectAdmin.$type, MsgUpdateProjectAdmin);

function createBaseMsgUpdateProjectAdminResponse(): MsgUpdateProjectAdminResponse {
  return { $type: "regen.ecocredit.v1.MsgUpdateProjectAdminResponse" };
}

export const MsgUpdateProjectAdminResponse = {
  $type: "regen.ecocredit.v1.MsgUpdateProjectAdminResponse" as const,

  encode(_: MsgUpdateProjectAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProjectAdminResponse();
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

  fromJSON(_: any): MsgUpdateProjectAdminResponse {
    return { $type: MsgUpdateProjectAdminResponse.$type };
  },

  toJSON(_: MsgUpdateProjectAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateProjectAdminResponse>): MsgUpdateProjectAdminResponse {
    return MsgUpdateProjectAdminResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateProjectAdminResponse>): MsgUpdateProjectAdminResponse {
    const message = createBaseMsgUpdateProjectAdminResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateProjectAdminResponse.$type, MsgUpdateProjectAdminResponse);

function createBaseMsgUpdateProjectMetadata(): MsgUpdateProjectMetadata {
  return { $type: "regen.ecocredit.v1.MsgUpdateProjectMetadata", admin: "", projectId: "", newMetadata: "" };
}

export const MsgUpdateProjectMetadata = {
  $type: "regen.ecocredit.v1.MsgUpdateProjectMetadata" as const,

  encode(message: MsgUpdateProjectMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.newMetadata !== "") {
      writer.uint32(26).string(message.newMetadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProjectMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        case 3:
          message.newMetadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateProjectMetadata {
    return {
      $type: MsgUpdateProjectMetadata.$type,
      admin: isSet(object.admin) ? String(object.admin) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      newMetadata: isSet(object.newMetadata) ? String(object.newMetadata) : "",
    };
  },

  toJSON(message: MsgUpdateProjectMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.newMetadata !== undefined && (obj.newMetadata = message.newMetadata);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateProjectMetadata>): MsgUpdateProjectMetadata {
    return MsgUpdateProjectMetadata.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateProjectMetadata>): MsgUpdateProjectMetadata {
    const message = createBaseMsgUpdateProjectMetadata();
    message.admin = object.admin ?? "";
    message.projectId = object.projectId ?? "";
    message.newMetadata = object.newMetadata ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateProjectMetadata.$type, MsgUpdateProjectMetadata);

function createBaseMsgUpdateProjectMetadataResponse(): MsgUpdateProjectMetadataResponse {
  return { $type: "regen.ecocredit.v1.MsgUpdateProjectMetadataResponse" };
}

export const MsgUpdateProjectMetadataResponse = {
  $type: "regen.ecocredit.v1.MsgUpdateProjectMetadataResponse" as const,

  encode(_: MsgUpdateProjectMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProjectMetadataResponse();
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

  fromJSON(_: any): MsgUpdateProjectMetadataResponse {
    return { $type: MsgUpdateProjectMetadataResponse.$type };
  },

  toJSON(_: MsgUpdateProjectMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateProjectMetadataResponse>): MsgUpdateProjectMetadataResponse {
    return MsgUpdateProjectMetadataResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateProjectMetadataResponse>): MsgUpdateProjectMetadataResponse {
    const message = createBaseMsgUpdateProjectMetadataResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateProjectMetadataResponse.$type, MsgUpdateProjectMetadataResponse);

function createBaseMsgBridge(): MsgBridge {
  return { $type: "regen.ecocredit.v1.MsgBridge", owner: "", target: "", recipient: "", credits: [] };
}

export const MsgBridge = {
  $type: "regen.ecocredit.v1.MsgBridge" as const,

  encode(message: MsgBridge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.target !== "") {
      writer.uint32(18).string(message.target);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    for (const v of message.credits) {
      Credits.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBridge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBridge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.target = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.credits.push(Credits.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBridge {
    return {
      $type: MsgBridge.$type,
      owner: isSet(object.owner) ? String(object.owner) : "",
      target: isSet(object.target) ? String(object.target) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => Credits.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgBridge): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.target !== undefined && (obj.target = message.target);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.credits) {
      obj.credits = message.credits.map((e) => e ? Credits.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }
    return obj;
  },

  create(base?: DeepPartial<MsgBridge>): MsgBridge {
    return MsgBridge.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgBridge>): MsgBridge {
    const message = createBaseMsgBridge();
    message.owner = object.owner ?? "";
    message.target = object.target ?? "";
    message.recipient = object.recipient ?? "";
    message.credits = object.credits?.map((e) => Credits.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgBridge.$type, MsgBridge);

function createBaseMsgUpdateBatchMetadata(): MsgUpdateBatchMetadata {
  return { $type: "regen.ecocredit.v1.MsgUpdateBatchMetadata", issuer: "", batchDenom: "", newMetadata: "" };
}

export const MsgUpdateBatchMetadata = {
  $type: "regen.ecocredit.v1.MsgUpdateBatchMetadata" as const,

  encode(message: MsgUpdateBatchMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }
    if (message.newMetadata !== "") {
      writer.uint32(26).string(message.newMetadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBatchMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBatchMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.batchDenom = reader.string();
          break;
        case 3:
          message.newMetadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBatchMetadata {
    return {
      $type: MsgUpdateBatchMetadata.$type,
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      newMetadata: isSet(object.newMetadata) ? String(object.newMetadata) : "",
    };
  },

  toJSON(message: MsgUpdateBatchMetadata): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.newMetadata !== undefined && (obj.newMetadata = message.newMetadata);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateBatchMetadata>): MsgUpdateBatchMetadata {
    return MsgUpdateBatchMetadata.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateBatchMetadata>): MsgUpdateBatchMetadata {
    const message = createBaseMsgUpdateBatchMetadata();
    message.issuer = object.issuer ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.newMetadata = object.newMetadata ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateBatchMetadata.$type, MsgUpdateBatchMetadata);

function createBaseMsgUpdateBatchMetadataResponse(): MsgUpdateBatchMetadataResponse {
  return { $type: "regen.ecocredit.v1.MsgUpdateBatchMetadataResponse" };
}

export const MsgUpdateBatchMetadataResponse = {
  $type: "regen.ecocredit.v1.MsgUpdateBatchMetadataResponse" as const,

  encode(_: MsgUpdateBatchMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBatchMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBatchMetadataResponse();
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

  fromJSON(_: any): MsgUpdateBatchMetadataResponse {
    return { $type: MsgUpdateBatchMetadataResponse.$type };
  },

  toJSON(_: MsgUpdateBatchMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateBatchMetadataResponse>): MsgUpdateBatchMetadataResponse {
    return MsgUpdateBatchMetadataResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateBatchMetadataResponse>): MsgUpdateBatchMetadataResponse {
    const message = createBaseMsgUpdateBatchMetadataResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateBatchMetadataResponse.$type, MsgUpdateBatchMetadataResponse);

function createBaseMsgBridgeResponse(): MsgBridgeResponse {
  return { $type: "regen.ecocredit.v1.MsgBridgeResponse" };
}

export const MsgBridgeResponse = {
  $type: "regen.ecocredit.v1.MsgBridgeResponse" as const,

  encode(_: MsgBridgeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBridgeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBridgeResponse();
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

  fromJSON(_: any): MsgBridgeResponse {
    return { $type: MsgBridgeResponse.$type };
  },

  toJSON(_: MsgBridgeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgBridgeResponse>): MsgBridgeResponse {
    return MsgBridgeResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgBridgeResponse>): MsgBridgeResponse {
    const message = createBaseMsgBridgeResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgBridgeResponse.$type, MsgBridgeResponse);

function createBaseMsgBridgeReceive(): MsgBridgeReceive {
  return {
    $type: "regen.ecocredit.v1.MsgBridgeReceive",
    issuer: "",
    classId: "",
    project: undefined,
    batch: undefined,
    originTx: undefined,
  };
}

export const MsgBridgeReceive = {
  $type: "regen.ecocredit.v1.MsgBridgeReceive" as const,

  encode(message: MsgBridgeReceive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.project !== undefined) {
      MsgBridgeReceive_Project.encode(message.project, writer.uint32(26).fork()).ldelim();
    }
    if (message.batch !== undefined) {
      MsgBridgeReceive_Batch.encode(message.batch, writer.uint32(34).fork()).ldelim();
    }
    if (message.originTx !== undefined) {
      OriginTx.encode(message.originTx, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBridgeReceive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBridgeReceive();
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
          message.project = MsgBridgeReceive_Project.decode(reader, reader.uint32());
          break;
        case 4:
          message.batch = MsgBridgeReceive_Batch.decode(reader, reader.uint32());
          break;
        case 5:
          message.originTx = OriginTx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBridgeReceive {
    return {
      $type: MsgBridgeReceive.$type,
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      project: isSet(object.project) ? MsgBridgeReceive_Project.fromJSON(object.project) : undefined,
      batch: isSet(object.batch) ? MsgBridgeReceive_Batch.fromJSON(object.batch) : undefined,
      originTx: isSet(object.originTx) ? OriginTx.fromJSON(object.originTx) : undefined,
    };
  },

  toJSON(message: MsgBridgeReceive): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.classId !== undefined && (obj.classId = message.classId);
    message.project !== undefined &&
      (obj.project = message.project ? MsgBridgeReceive_Project.toJSON(message.project) : undefined);
    message.batch !== undefined &&
      (obj.batch = message.batch ? MsgBridgeReceive_Batch.toJSON(message.batch) : undefined);
    message.originTx !== undefined && (obj.originTx = message.originTx ? OriginTx.toJSON(message.originTx) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgBridgeReceive>): MsgBridgeReceive {
    return MsgBridgeReceive.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgBridgeReceive>): MsgBridgeReceive {
    const message = createBaseMsgBridgeReceive();
    message.issuer = object.issuer ?? "";
    message.classId = object.classId ?? "";
    message.project = (object.project !== undefined && object.project !== null)
      ? MsgBridgeReceive_Project.fromPartial(object.project)
      : undefined;
    message.batch = (object.batch !== undefined && object.batch !== null)
      ? MsgBridgeReceive_Batch.fromPartial(object.batch)
      : undefined;
    message.originTx = (object.originTx !== undefined && object.originTx !== null)
      ? OriginTx.fromPartial(object.originTx)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgBridgeReceive.$type, MsgBridgeReceive);

function createBaseMsgBridgeReceive_Batch(): MsgBridgeReceive_Batch {
  return {
    $type: "regen.ecocredit.v1.MsgBridgeReceive.Batch",
    recipient: "",
    amount: "",
    startDate: undefined,
    endDate: undefined,
    metadata: "",
  };
}

export const MsgBridgeReceive_Batch = {
  $type: "regen.ecocredit.v1.MsgBridgeReceive.Batch" as const,

  encode(message: MsgBridgeReceive_Batch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(toTimestamp(message.startDate), writer.uint32(26).fork()).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(toTimestamp(message.endDate), writer.uint32(34).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBridgeReceive_Batch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBridgeReceive_Batch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.startDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.endDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBridgeReceive_Batch {
    return {
      $type: MsgBridgeReceive_Batch.$type,
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
    };
  },

  toJSON(message: MsgBridgeReceive_Batch): unknown {
    const obj: any = {};
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    message.startDate !== undefined && (obj.startDate = message.startDate.toISOString());
    message.endDate !== undefined && (obj.endDate = message.endDate.toISOString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  create(base?: DeepPartial<MsgBridgeReceive_Batch>): MsgBridgeReceive_Batch {
    return MsgBridgeReceive_Batch.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgBridgeReceive_Batch>): MsgBridgeReceive_Batch {
    const message = createBaseMsgBridgeReceive_Batch();
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.startDate = object.startDate ?? undefined;
    message.endDate = object.endDate ?? undefined;
    message.metadata = object.metadata ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgBridgeReceive_Batch.$type, MsgBridgeReceive_Batch);

function createBaseMsgBridgeReceive_Project(): MsgBridgeReceive_Project {
  return { $type: "regen.ecocredit.v1.MsgBridgeReceive.Project", referenceId: "", jurisdiction: "", metadata: "" };
}

export const MsgBridgeReceive_Project = {
  $type: "regen.ecocredit.v1.MsgBridgeReceive.Project" as const,

  encode(message: MsgBridgeReceive_Project, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.referenceId !== "") {
      writer.uint32(10).string(message.referenceId);
    }
    if (message.jurisdiction !== "") {
      writer.uint32(18).string(message.jurisdiction);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBridgeReceive_Project {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBridgeReceive_Project();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.referenceId = reader.string();
          break;
        case 2:
          message.jurisdiction = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBridgeReceive_Project {
    return {
      $type: MsgBridgeReceive_Project.$type,
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : "",
      jurisdiction: isSet(object.jurisdiction) ? String(object.jurisdiction) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
    };
  },

  toJSON(message: MsgBridgeReceive_Project): unknown {
    const obj: any = {};
    message.referenceId !== undefined && (obj.referenceId = message.referenceId);
    message.jurisdiction !== undefined && (obj.jurisdiction = message.jurisdiction);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  create(base?: DeepPartial<MsgBridgeReceive_Project>): MsgBridgeReceive_Project {
    return MsgBridgeReceive_Project.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgBridgeReceive_Project>): MsgBridgeReceive_Project {
    const message = createBaseMsgBridgeReceive_Project();
    message.referenceId = object.referenceId ?? "";
    message.jurisdiction = object.jurisdiction ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgBridgeReceive_Project.$type, MsgBridgeReceive_Project);

function createBaseMsgBridgeReceiveResponse(): MsgBridgeReceiveResponse {
  return { $type: "regen.ecocredit.v1.MsgBridgeReceiveResponse", batchDenom: "", projectId: "" };
}

export const MsgBridgeReceiveResponse = {
  $type: "regen.ecocredit.v1.MsgBridgeReceiveResponse" as const,

  encode(message: MsgBridgeReceiveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBridgeReceiveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBridgeReceiveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        case 2:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBridgeReceiveResponse {
    return {
      $type: MsgBridgeReceiveResponse.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
    };
  },

  toJSON(message: MsgBridgeReceiveResponse): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  create(base?: DeepPartial<MsgBridgeReceiveResponse>): MsgBridgeReceiveResponse {
    return MsgBridgeReceiveResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgBridgeReceiveResponse>): MsgBridgeReceiveResponse {
    const message = createBaseMsgBridgeReceiveResponse();
    message.batchDenom = object.batchDenom ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgBridgeReceiveResponse.$type, MsgBridgeReceiveResponse);

function createBaseMsgAddClassCreator(): MsgAddClassCreator {
  return { $type: "regen.ecocredit.v1.MsgAddClassCreator", authority: "", creator: "" };
}

export const MsgAddClassCreator = {
  $type: "regen.ecocredit.v1.MsgAddClassCreator" as const,

  encode(message: MsgAddClassCreator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddClassCreator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddClassCreator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddClassCreator {
    return {
      $type: MsgAddClassCreator.$type,
      authority: isSet(object.authority) ? String(object.authority) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgAddClassCreator): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  create(base?: DeepPartial<MsgAddClassCreator>): MsgAddClassCreator {
    return MsgAddClassCreator.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAddClassCreator>): MsgAddClassCreator {
    const message = createBaseMsgAddClassCreator();
    message.authority = object.authority ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgAddClassCreator.$type, MsgAddClassCreator);

function createBaseMsgAddClassCreatorResponse(): MsgAddClassCreatorResponse {
  return { $type: "regen.ecocredit.v1.MsgAddClassCreatorResponse" };
}

export const MsgAddClassCreatorResponse = {
  $type: "regen.ecocredit.v1.MsgAddClassCreatorResponse" as const,

  encode(_: MsgAddClassCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddClassCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddClassCreatorResponse();
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

  fromJSON(_: any): MsgAddClassCreatorResponse {
    return { $type: MsgAddClassCreatorResponse.$type };
  },

  toJSON(_: MsgAddClassCreatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgAddClassCreatorResponse>): MsgAddClassCreatorResponse {
    return MsgAddClassCreatorResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgAddClassCreatorResponse>): MsgAddClassCreatorResponse {
    const message = createBaseMsgAddClassCreatorResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgAddClassCreatorResponse.$type, MsgAddClassCreatorResponse);

function createBaseMsgSetClassCreatorAllowlist(): MsgSetClassCreatorAllowlist {
  return { $type: "regen.ecocredit.v1.MsgSetClassCreatorAllowlist", authority: "", enabled: false };
}

export const MsgSetClassCreatorAllowlist = {
  $type: "regen.ecocredit.v1.MsgSetClassCreatorAllowlist" as const,

  encode(message: MsgSetClassCreatorAllowlist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetClassCreatorAllowlist {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetClassCreatorAllowlist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetClassCreatorAllowlist {
    return {
      $type: MsgSetClassCreatorAllowlist.$type,
      authority: isSet(object.authority) ? String(object.authority) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
    };
  },

  toJSON(message: MsgSetClassCreatorAllowlist): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  create(base?: DeepPartial<MsgSetClassCreatorAllowlist>): MsgSetClassCreatorAllowlist {
    return MsgSetClassCreatorAllowlist.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgSetClassCreatorAllowlist>): MsgSetClassCreatorAllowlist {
    const message = createBaseMsgSetClassCreatorAllowlist();
    message.authority = object.authority ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(MsgSetClassCreatorAllowlist.$type, MsgSetClassCreatorAllowlist);

function createBaseMsgSetClassCreatorAllowlistResponse(): MsgSetClassCreatorAllowlistResponse {
  return { $type: "regen.ecocredit.v1.MsgSetClassCreatorAllowlistResponse" };
}

export const MsgSetClassCreatorAllowlistResponse = {
  $type: "regen.ecocredit.v1.MsgSetClassCreatorAllowlistResponse" as const,

  encode(_: MsgSetClassCreatorAllowlistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetClassCreatorAllowlistResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetClassCreatorAllowlistResponse();
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

  fromJSON(_: any): MsgSetClassCreatorAllowlistResponse {
    return { $type: MsgSetClassCreatorAllowlistResponse.$type };
  },

  toJSON(_: MsgSetClassCreatorAllowlistResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgSetClassCreatorAllowlistResponse>): MsgSetClassCreatorAllowlistResponse {
    return MsgSetClassCreatorAllowlistResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgSetClassCreatorAllowlistResponse>): MsgSetClassCreatorAllowlistResponse {
    const message = createBaseMsgSetClassCreatorAllowlistResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgSetClassCreatorAllowlistResponse.$type, MsgSetClassCreatorAllowlistResponse);

function createBaseMsgRemoveClassCreator(): MsgRemoveClassCreator {
  return { $type: "regen.ecocredit.v1.MsgRemoveClassCreator", authority: "", creator: "" };
}

export const MsgRemoveClassCreator = {
  $type: "regen.ecocredit.v1.MsgRemoveClassCreator" as const,

  encode(message: MsgRemoveClassCreator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveClassCreator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveClassCreator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveClassCreator {
    return {
      $type: MsgRemoveClassCreator.$type,
      authority: isSet(object.authority) ? String(object.authority) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: MsgRemoveClassCreator): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveClassCreator>): MsgRemoveClassCreator {
    return MsgRemoveClassCreator.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveClassCreator>): MsgRemoveClassCreator {
    const message = createBaseMsgRemoveClassCreator();
    message.authority = object.authority ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgRemoveClassCreator.$type, MsgRemoveClassCreator);

function createBaseMsgRemoveClassCreatorResponse(): MsgRemoveClassCreatorResponse {
  return { $type: "regen.ecocredit.v1.MsgRemoveClassCreatorResponse" };
}

export const MsgRemoveClassCreatorResponse = {
  $type: "regen.ecocredit.v1.MsgRemoveClassCreatorResponse" as const,

  encode(_: MsgRemoveClassCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveClassCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveClassCreatorResponse();
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

  fromJSON(_: any): MsgRemoveClassCreatorResponse {
    return { $type: MsgRemoveClassCreatorResponse.$type };
  },

  toJSON(_: MsgRemoveClassCreatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveClassCreatorResponse>): MsgRemoveClassCreatorResponse {
    return MsgRemoveClassCreatorResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRemoveClassCreatorResponse>): MsgRemoveClassCreatorResponse {
    const message = createBaseMsgRemoveClassCreatorResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgRemoveClassCreatorResponse.$type, MsgRemoveClassCreatorResponse);

function createBaseMsgUpdateClassFee(): MsgUpdateClassFee {
  return { $type: "regen.ecocredit.v1.MsgUpdateClassFee", authority: "", fee: undefined };
}

export const MsgUpdateClassFee = {
  $type: "regen.ecocredit.v1.MsgUpdateClassFee" as const,

  encode(message: MsgUpdateClassFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateClassFee {
    return {
      $type: MsgUpdateClassFee.$type,
      authority: isSet(object.authority) ? String(object.authority) : "",
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
    };
  },

  toJSON(message: MsgUpdateClassFee): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateClassFee>): MsgUpdateClassFee {
    return MsgUpdateClassFee.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgUpdateClassFee>): MsgUpdateClassFee {
    const message = createBaseMsgUpdateClassFee();
    message.authority = object.authority ?? "";
    message.fee = (object.fee !== undefined && object.fee !== null) ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateClassFee.$type, MsgUpdateClassFee);

function createBaseMsgUpdateClassFeeResponse(): MsgUpdateClassFeeResponse {
  return { $type: "regen.ecocredit.v1.MsgUpdateClassFeeResponse" };
}

export const MsgUpdateClassFeeResponse = {
  $type: "regen.ecocredit.v1.MsgUpdateClassFeeResponse" as const,

  encode(_: MsgUpdateClassFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClassFeeResponse();
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

  fromJSON(_: any): MsgUpdateClassFeeResponse {
    return { $type: MsgUpdateClassFeeResponse.$type };
  },

  toJSON(_: MsgUpdateClassFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgUpdateClassFeeResponse>): MsgUpdateClassFeeResponse {
    return MsgUpdateClassFeeResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgUpdateClassFeeResponse>): MsgUpdateClassFeeResponse {
    const message = createBaseMsgUpdateClassFeeResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateClassFeeResponse.$type, MsgUpdateClassFeeResponse);

function createBaseMsgAddAllowedBridgeChain(): MsgAddAllowedBridgeChain {
  return { $type: "regen.ecocredit.v1.MsgAddAllowedBridgeChain", authority: "", chainName: "" };
}

export const MsgAddAllowedBridgeChain = {
  $type: "regen.ecocredit.v1.MsgAddAllowedBridgeChain" as const,

  encode(message: MsgAddAllowedBridgeChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.chainName !== "") {
      writer.uint32(18).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAllowedBridgeChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAllowedBridgeChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.chainName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddAllowedBridgeChain {
    return {
      $type: MsgAddAllowedBridgeChain.$type,
      authority: isSet(object.authority) ? String(object.authority) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
    };
  },

  toJSON(message: MsgAddAllowedBridgeChain): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  create(base?: DeepPartial<MsgAddAllowedBridgeChain>): MsgAddAllowedBridgeChain {
    return MsgAddAllowedBridgeChain.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgAddAllowedBridgeChain>): MsgAddAllowedBridgeChain {
    const message = createBaseMsgAddAllowedBridgeChain();
    message.authority = object.authority ?? "";
    message.chainName = object.chainName ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgAddAllowedBridgeChain.$type, MsgAddAllowedBridgeChain);

function createBaseMsgAddAllowedBridgeChainResponse(): MsgAddAllowedBridgeChainResponse {
  return { $type: "regen.ecocredit.v1.MsgAddAllowedBridgeChainResponse" };
}

export const MsgAddAllowedBridgeChainResponse = {
  $type: "regen.ecocredit.v1.MsgAddAllowedBridgeChainResponse" as const,

  encode(_: MsgAddAllowedBridgeChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAllowedBridgeChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAllowedBridgeChainResponse();
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

  fromJSON(_: any): MsgAddAllowedBridgeChainResponse {
    return { $type: MsgAddAllowedBridgeChainResponse.$type };
  },

  toJSON(_: MsgAddAllowedBridgeChainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgAddAllowedBridgeChainResponse>): MsgAddAllowedBridgeChainResponse {
    return MsgAddAllowedBridgeChainResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgAddAllowedBridgeChainResponse>): MsgAddAllowedBridgeChainResponse {
    const message = createBaseMsgAddAllowedBridgeChainResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgAddAllowedBridgeChainResponse.$type, MsgAddAllowedBridgeChainResponse);

function createBaseMsgRemoveAllowedBridgeChain(): MsgRemoveAllowedBridgeChain {
  return { $type: "regen.ecocredit.v1.MsgRemoveAllowedBridgeChain", authority: "", chainName: "" };
}

export const MsgRemoveAllowedBridgeChain = {
  $type: "regen.ecocredit.v1.MsgRemoveAllowedBridgeChain" as const,

  encode(message: MsgRemoveAllowedBridgeChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.chainName !== "") {
      writer.uint32(18).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAllowedBridgeChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAllowedBridgeChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.chainName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveAllowedBridgeChain {
    return {
      $type: MsgRemoveAllowedBridgeChain.$type,
      authority: isSet(object.authority) ? String(object.authority) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
    };
  },

  toJSON(message: MsgRemoveAllowedBridgeChain): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveAllowedBridgeChain>): MsgRemoveAllowedBridgeChain {
    return MsgRemoveAllowedBridgeChain.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MsgRemoveAllowedBridgeChain>): MsgRemoveAllowedBridgeChain {
    const message = createBaseMsgRemoveAllowedBridgeChain();
    message.authority = object.authority ?? "";
    message.chainName = object.chainName ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgRemoveAllowedBridgeChain.$type, MsgRemoveAllowedBridgeChain);

function createBaseMsgRemoveAllowedBridgeChainResponse(): MsgRemoveAllowedBridgeChainResponse {
  return { $type: "regen.ecocredit.v1.MsgRemoveAllowedBridgeChainResponse" };
}

export const MsgRemoveAllowedBridgeChainResponse = {
  $type: "regen.ecocredit.v1.MsgRemoveAllowedBridgeChainResponse" as const,

  encode(_: MsgRemoveAllowedBridgeChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAllowedBridgeChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAllowedBridgeChainResponse();
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

  fromJSON(_: any): MsgRemoveAllowedBridgeChainResponse {
    return { $type: MsgRemoveAllowedBridgeChainResponse.$type };
  },

  toJSON(_: MsgRemoveAllowedBridgeChainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MsgRemoveAllowedBridgeChainResponse>): MsgRemoveAllowedBridgeChainResponse {
    return MsgRemoveAllowedBridgeChainResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MsgRemoveAllowedBridgeChainResponse>): MsgRemoveAllowedBridgeChainResponse {
    const message = createBaseMsgRemoveAllowedBridgeChainResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgRemoveAllowedBridgeChainResponse.$type, MsgRemoveAllowedBridgeChainResponse);

/** Msg is the regen.ecocredit.v1 Msg service. */
export interface Msg {
  /**
   * CreateClass creates a new credit class under the given credit type with an
   * approved list of issuers and optional metadata. If the class fee parameter
   * is set, the fee field must be populated with equal value. A greater fee can
   * be provided, however, the creator will only be charged the amount specified
   * in the fee parameter. The creator of the credit class becomes the admin of
   * the credit class upon creation.
   */
  CreateClass(request: DeepPartial<MsgCreateClass>): Promise<MsgCreateClassResponse>;
  /**
   * CreateProject creates a new project under the given credit class with a
   * jurisdiction, optional metadata, and an optional reference ID. The creator
   * of the project must be an approved credit class issuer for the given credit
   * class. The creator becomes the admin of the project upon creation.
   */
  CreateProject(request: DeepPartial<MsgCreateProject>): Promise<MsgCreateProjectResponse>;
  /**
   * CreateBatch creates a new batch of credits under the given project with a
   * start and end date representing the monitoring period, a list of credits to
   * be issued with each issuance specifying a recipient, the amount of tradable
   * and retired credits, and the retirement jurisdiction (if credits are to be
   * retired upon receipt), and optional metadata. The credit batch creator must
   * be listed as an approved issuer within the credit class of the project that
   * the credits are being issued under.
   *
   * The default behavior is for a new credit batch to be "sealed" as opposed to
   * being "open". When a credit batch is "open", new credits can be dynamically
   * minted to the credit batch following the creation of the credit batch. This
   * "open" option should only be set to true when bridging credits from another
   * chain or registry as a result of a bridge operation and is not intended for
   * native credit issuance.
   */
  CreateBatch(request: DeepPartial<MsgCreateBatch>): Promise<MsgCreateBatchResponse>;
  /**
   * MintBatchCredits dynamically mints credits to an "open" credit batch. This
   * feature is only meant to be used when bridging credits from another chain
   * or registry and is not intended for native credit issuance. When bridging
   * credits from the same vintage (or monitoring period) as an existing credit
   * batch, the credits can be dynamically minted to the existing credit batch
   * if the credit batch is "open".
   */
  MintBatchCredits(request: DeepPartial<MsgMintBatchCredits>): Promise<MsgMintBatchCreditsResponse>;
  /**
   * MsgSealBatch seals an "open" credit batch. Once a credit batch is sealed
   * (i.e. once "open" is set to false), credits can no longer be dynamically
   * minted to the credit batch. A sealed credit batch cannot be unsealed and
   * only the credit batch issuer can seal a credit batch.
   */
  SealBatch(request: DeepPartial<MsgSealBatch>): Promise<MsgSealBatchResponse>;
  /**
   * Send sends a specified amount of tradable credits from the credit owner's
   * account to another account. Sent credits can either remain tradable or be
   * retired upon receipt.
   */
  Send(request: DeepPartial<MsgSend>): Promise<MsgSendResponse>;
  /**
   * Retire retires a specified amount of tradable credits, removing the amount
   * from the credit owner's tradable balance and adding it to their retired
   * balance. Retiring credits is permanent and implies the credits are being
   * consumed as a offset.
   */
  Retire(request: DeepPartial<MsgRetire>): Promise<MsgRetireResponse>;
  /**
   * Cancel cancels a specified amount of tradable credits, removing the amount
   * from the credit owner's tradable balance and removing the amount from the
   * credit batch's tradable supply. Cancelling credits is permanent and implies
   * the credits have been moved to another chain or registry.
   */
  Cancel(request: DeepPartial<MsgCancel>): Promise<MsgCancelResponse>;
  /**
   * UpdateClassAdmin updates the credit class admin. Only the admin of the
   * credit class can update the credit class.
   */
  UpdateClassAdmin(request: DeepPartial<MsgUpdateClassAdmin>): Promise<MsgUpdateClassAdminResponse>;
  /**
   * UpdateClassIssuers updates the credit class issuer list. Only the admin of
   * the credit class can update the credit class.
   */
  UpdateClassIssuers(request: DeepPartial<MsgUpdateClassIssuers>): Promise<MsgUpdateClassIssuersResponse>;
  /**
   * UpdateClassMetadata updates the credit class metadata. Only the admin of
   * the credit class can update the credit class.
   */
  UpdateClassMetadata(request: DeepPartial<MsgUpdateClassMetadata>): Promise<MsgUpdateClassMetadataResponse>;
  /**
   * UpdateProjectAdmin updates the project admin address. Only the admin of the
   * project can update the project.
   */
  UpdateProjectAdmin(request: DeepPartial<MsgUpdateProjectAdmin>): Promise<MsgUpdateProjectAdminResponse>;
  /**
   * UpdateProjectMetadata updates the project metadata. Only the admin of the
   * project can update the project.
   */
  UpdateProjectMetadata(request: DeepPartial<MsgUpdateProjectMetadata>): Promise<MsgUpdateProjectMetadataResponse>;
  /**
   * UpdateBatchMetadata updates the batch metadata. Only an "open" batch can be
   * updated and only the issuer of the batch can update the batch.
   *
   * Since Revision 2
   */
  UpdateBatchMetadata(request: DeepPartial<MsgUpdateBatchMetadata>): Promise<MsgUpdateBatchMetadataResponse>;
  /**
   * Bridge processes credits being sent back to the source chain. When credits
   * are sent back to the source chain, the credits are cancelled and an event
   * is emitted to be handled by an external bridge service.
   */
  Bridge(request: DeepPartial<MsgBridge>): Promise<MsgBridgeResponse>;
  /**
   * BridgeReceive processes credits being sent from another chain. When the
   * credits are sent from the same vintage as an existing credit batch within
   * the scope of the provided credit class, the credits will be minted to the
   * existing credit batch, otherwise the credits will be issued in a new credit
   * batch. The new credit batch will be created under an existing project if a
   * project with a matching reference id already exists within the scope of the
   * credit class, otherwise a new project will be created.
   */
  BridgeReceive(request: DeepPartial<MsgBridgeReceive>): Promise<MsgBridgeReceiveResponse>;
  /**
   * AddCreditType is a governance method that allows the addition of new
   * credit types to the network.
   *
   * Since Revision 2
   */
  AddCreditType(request: DeepPartial<MsgAddCreditType>): Promise<MsgAddCreditTypeResponse>;
  /**
   * SetClassCreatorAllowlist is a governance method that updates the class
   * creator allowlist enabled setting. When enabled, only addresses listed in
   * the allowlist can create credit classes. When disabled, any address can
   * create credit classes.
   *
   * Since Revision 2
   */
  SetClassCreatorAllowlist(
    request: DeepPartial<MsgSetClassCreatorAllowlist>,
  ): Promise<MsgSetClassCreatorAllowlistResponse>;
  /**
   * AddClassCreator is a governance method that allows the addition of a new
   * address to the class creation allowlist.
   *
   * Since Revision 2
   */
  AddClassCreator(request: DeepPartial<MsgAddClassCreator>): Promise<MsgAddClassCreatorResponse>;
  /**
   * RemoveClassCreator is a governance method that removes an
   * address from the class creation allowlist.
   *
   * Since Revision 2
   */
  RemoveClassCreator(request: DeepPartial<MsgRemoveClassCreator>): Promise<MsgRemoveClassCreatorResponse>;
  /**
   * UpdateClassFee is a governance method that allows for updating the credit
   * class creation fee. If no fee is specified in the request, the credit
   * class creation fee will be removed and no fee will be required to create
   * a credit class.
   *
   * Since Revision 2
   */
  UpdateClassFee(request: DeepPartial<MsgUpdateClassFee>): Promise<MsgUpdateClassFeeResponse>;
  /**
   * AddAllowedBridgeChain is a governance method that allows for the
   * addition of a chain to bridge ecocredits to.
   *
   * Since Revision 2
   */
  AddAllowedBridgeChain(request: DeepPartial<MsgAddAllowedBridgeChain>): Promise<MsgAddAllowedBridgeChainResponse>;
  /**
   * RemoveAllowedBridgeChain is a governance method that allows for the
   * removal of a chain to bridge ecocredits to.
   *
   * Since Revision 2
   */
  RemoveAllowedBridgeChain(
    request: DeepPartial<MsgRemoveAllowedBridgeChain>,
  ): Promise<MsgRemoveAllowedBridgeChainResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "regen.ecocredit.v1.Msg";
    this.rpc = rpc;
    this.CreateClass = this.CreateClass.bind(this);
    this.CreateProject = this.CreateProject.bind(this);
    this.CreateBatch = this.CreateBatch.bind(this);
    this.MintBatchCredits = this.MintBatchCredits.bind(this);
    this.SealBatch = this.SealBatch.bind(this);
    this.Send = this.Send.bind(this);
    this.Retire = this.Retire.bind(this);
    this.Cancel = this.Cancel.bind(this);
    this.UpdateClassAdmin = this.UpdateClassAdmin.bind(this);
    this.UpdateClassIssuers = this.UpdateClassIssuers.bind(this);
    this.UpdateClassMetadata = this.UpdateClassMetadata.bind(this);
    this.UpdateProjectAdmin = this.UpdateProjectAdmin.bind(this);
    this.UpdateProjectMetadata = this.UpdateProjectMetadata.bind(this);
    this.UpdateBatchMetadata = this.UpdateBatchMetadata.bind(this);
    this.Bridge = this.Bridge.bind(this);
    this.BridgeReceive = this.BridgeReceive.bind(this);
    this.AddCreditType = this.AddCreditType.bind(this);
    this.SetClassCreatorAllowlist = this.SetClassCreatorAllowlist.bind(this);
    this.AddClassCreator = this.AddClassCreator.bind(this);
    this.RemoveClassCreator = this.RemoveClassCreator.bind(this);
    this.UpdateClassFee = this.UpdateClassFee.bind(this);
    this.AddAllowedBridgeChain = this.AddAllowedBridgeChain.bind(this);
    this.RemoveAllowedBridgeChain = this.RemoveAllowedBridgeChain.bind(this);
  }
  CreateClass(request: DeepPartial<MsgCreateClass>): Promise<MsgCreateClassResponse> {
    const fromPartial = MsgCreateClass.fromPartial(request);
    const data = MsgCreateClass.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "CreateClass", data);
    return promise.then((data) => MsgCreateClassResponse.decode(new _m0.Reader(data)));
  }

  CreateProject(request: DeepPartial<MsgCreateProject>): Promise<MsgCreateProjectResponse> {
    const fromPartial = MsgCreateProject.fromPartial(request);
    const data = MsgCreateProject.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "CreateProject", data);
    return promise.then((data) => MsgCreateProjectResponse.decode(new _m0.Reader(data)));
  }

  CreateBatch(request: DeepPartial<MsgCreateBatch>): Promise<MsgCreateBatchResponse> {
    const fromPartial = MsgCreateBatch.fromPartial(request);
    const data = MsgCreateBatch.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "CreateBatch", data);
    return promise.then((data) => MsgCreateBatchResponse.decode(new _m0.Reader(data)));
  }

  MintBatchCredits(request: DeepPartial<MsgMintBatchCredits>): Promise<MsgMintBatchCreditsResponse> {
    const fromPartial = MsgMintBatchCredits.fromPartial(request);
    const data = MsgMintBatchCredits.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "MintBatchCredits", data);
    return promise.then((data) => MsgMintBatchCreditsResponse.decode(new _m0.Reader(data)));
  }

  SealBatch(request: DeepPartial<MsgSealBatch>): Promise<MsgSealBatchResponse> {
    const fromPartial = MsgSealBatch.fromPartial(request);
    const data = MsgSealBatch.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "SealBatch", data);
    return promise.then((data) => MsgSealBatchResponse.decode(new _m0.Reader(data)));
  }

  Send(request: DeepPartial<MsgSend>): Promise<MsgSendResponse> {
    const fromPartial = MsgSend.fromPartial(request);
    const data = MsgSend.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "Send", data);
    return promise.then((data) => MsgSendResponse.decode(new _m0.Reader(data)));
  }

  Retire(request: DeepPartial<MsgRetire>): Promise<MsgRetireResponse> {
    const fromPartial = MsgRetire.fromPartial(request);
    const data = MsgRetire.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "Retire", data);
    return promise.then((data) => MsgRetireResponse.decode(new _m0.Reader(data)));
  }

  Cancel(request: DeepPartial<MsgCancel>): Promise<MsgCancelResponse> {
    const fromPartial = MsgCancel.fromPartial(request);
    const data = MsgCancel.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "Cancel", data);
    return promise.then((data) => MsgCancelResponse.decode(new _m0.Reader(data)));
  }

  UpdateClassAdmin(request: DeepPartial<MsgUpdateClassAdmin>): Promise<MsgUpdateClassAdminResponse> {
    const fromPartial = MsgUpdateClassAdmin.fromPartial(request);
    const data = MsgUpdateClassAdmin.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "UpdateClassAdmin", data);
    return promise.then((data) => MsgUpdateClassAdminResponse.decode(new _m0.Reader(data)));
  }

  UpdateClassIssuers(request: DeepPartial<MsgUpdateClassIssuers>): Promise<MsgUpdateClassIssuersResponse> {
    const fromPartial = MsgUpdateClassIssuers.fromPartial(request);
    const data = MsgUpdateClassIssuers.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "UpdateClassIssuers", data);
    return promise.then((data) => MsgUpdateClassIssuersResponse.decode(new _m0.Reader(data)));
  }

  UpdateClassMetadata(request: DeepPartial<MsgUpdateClassMetadata>): Promise<MsgUpdateClassMetadataResponse> {
    const fromPartial = MsgUpdateClassMetadata.fromPartial(request);
    const data = MsgUpdateClassMetadata.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "UpdateClassMetadata", data);
    return promise.then((data) => MsgUpdateClassMetadataResponse.decode(new _m0.Reader(data)));
  }

  UpdateProjectAdmin(request: DeepPartial<MsgUpdateProjectAdmin>): Promise<MsgUpdateProjectAdminResponse> {
    const fromPartial = MsgUpdateProjectAdmin.fromPartial(request);
    const data = MsgUpdateProjectAdmin.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "UpdateProjectAdmin", data);
    return promise.then((data) => MsgUpdateProjectAdminResponse.decode(new _m0.Reader(data)));
  }

  UpdateProjectMetadata(request: DeepPartial<MsgUpdateProjectMetadata>): Promise<MsgUpdateProjectMetadataResponse> {
    const fromPartial = MsgUpdateProjectMetadata.fromPartial(request);
    const data = MsgUpdateProjectMetadata.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "UpdateProjectMetadata", data);
    return promise.then((data) => MsgUpdateProjectMetadataResponse.decode(new _m0.Reader(data)));
  }

  UpdateBatchMetadata(request: DeepPartial<MsgUpdateBatchMetadata>): Promise<MsgUpdateBatchMetadataResponse> {
    const fromPartial = MsgUpdateBatchMetadata.fromPartial(request);
    const data = MsgUpdateBatchMetadata.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "UpdateBatchMetadata", data);
    return promise.then((data) => MsgUpdateBatchMetadataResponse.decode(new _m0.Reader(data)));
  }

  Bridge(request: DeepPartial<MsgBridge>): Promise<MsgBridgeResponse> {
    const fromPartial = MsgBridge.fromPartial(request);
    const data = MsgBridge.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "Bridge", data);
    return promise.then((data) => MsgBridgeResponse.decode(new _m0.Reader(data)));
  }

  BridgeReceive(request: DeepPartial<MsgBridgeReceive>): Promise<MsgBridgeReceiveResponse> {
    const fromPartial = MsgBridgeReceive.fromPartial(request);
    const data = MsgBridgeReceive.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "BridgeReceive", data);
    return promise.then((data) => MsgBridgeReceiveResponse.decode(new _m0.Reader(data)));
  }

  AddCreditType(request: DeepPartial<MsgAddCreditType>): Promise<MsgAddCreditTypeResponse> {
    const fromPartial = MsgAddCreditType.fromPartial(request);
    const data = MsgAddCreditType.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "AddCreditType", data);
    return promise.then((data) => MsgAddCreditTypeResponse.decode(new _m0.Reader(data)));
  }

  SetClassCreatorAllowlist(
    request: DeepPartial<MsgSetClassCreatorAllowlist>,
  ): Promise<MsgSetClassCreatorAllowlistResponse> {
    const fromPartial = MsgSetClassCreatorAllowlist.fromPartial(request);
    const data = MsgSetClassCreatorAllowlist.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "SetClassCreatorAllowlist", data);
    return promise.then((data) => MsgSetClassCreatorAllowlistResponse.decode(new _m0.Reader(data)));
  }

  AddClassCreator(request: DeepPartial<MsgAddClassCreator>): Promise<MsgAddClassCreatorResponse> {
    const fromPartial = MsgAddClassCreator.fromPartial(request);
    const data = MsgAddClassCreator.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "AddClassCreator", data);
    return promise.then((data) => MsgAddClassCreatorResponse.decode(new _m0.Reader(data)));
  }

  RemoveClassCreator(request: DeepPartial<MsgRemoveClassCreator>): Promise<MsgRemoveClassCreatorResponse> {
    const fromPartial = MsgRemoveClassCreator.fromPartial(request);
    const data = MsgRemoveClassCreator.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "RemoveClassCreator", data);
    return promise.then((data) => MsgRemoveClassCreatorResponse.decode(new _m0.Reader(data)));
  }

  UpdateClassFee(request: DeepPartial<MsgUpdateClassFee>): Promise<MsgUpdateClassFeeResponse> {
    const fromPartial = MsgUpdateClassFee.fromPartial(request);
    const data = MsgUpdateClassFee.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "UpdateClassFee", data);
    return promise.then((data) => MsgUpdateClassFeeResponse.decode(new _m0.Reader(data)));
  }

  AddAllowedBridgeChain(request: DeepPartial<MsgAddAllowedBridgeChain>): Promise<MsgAddAllowedBridgeChainResponse> {
    const fromPartial = MsgAddAllowedBridgeChain.fromPartial(request);
    const data = MsgAddAllowedBridgeChain.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "AddAllowedBridgeChain", data);
    return promise.then((data) => MsgAddAllowedBridgeChainResponse.decode(new _m0.Reader(data)));
  }

  RemoveAllowedBridgeChain(
    request: DeepPartial<MsgRemoveAllowedBridgeChain>,
  ): Promise<MsgRemoveAllowedBridgeChainResponse> {
    const fromPartial = MsgRemoveAllowedBridgeChain.fromPartial(request);
    const data = MsgRemoveAllowedBridgeChain.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "RemoveAllowedBridgeChain", data);
    return promise.then((data) => MsgRemoveAllowedBridgeChainResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: "google.protobuf.Timestamp", seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
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
