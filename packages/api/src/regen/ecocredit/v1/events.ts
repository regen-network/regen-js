//@ts-nocheck
import { OriginTx, OriginTxAmino, OriginTxSDKType } from "./types";
import { ProjectEnrollmentStatus } from "./state";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Action describes an action taken on an application. */
export enum EventUpdateApplication_Action {
  /** ACTION_UNSPECIFIED - ACTION_UNSPECIFIED is the default value for the action and is invalid. */
  ACTION_UNSPECIFIED = 0,
  /**
   * ACTION_CREATE - ACTION_CREATE is the action taken when a project admin creates an
   * application to a credit class.
   */
  ACTION_CREATE = 1,
  /**
   * ACTION_UPDATE - ACTION_UPDATE is the action taken when a project admin updates an
   * application to a credit class.
   */
  ACTION_UPDATE = 2,
  /**
   * ACTION_WITHDRAW - ACTION_WITHDRAW is the action taken when a project admin withdraws an
   * application to a credit class.
   */
  ACTION_WITHDRAW = 3,
  UNRECOGNIZED = -1,
}
export const EventUpdateApplication_ActionSDKType = EventUpdateApplication_Action;
export const EventUpdateApplication_ActionAmino = EventUpdateApplication_Action;
export function eventUpdateApplication_ActionFromJSON(object: any): EventUpdateApplication_Action {
  switch (object) {
    case 0:
    case "ACTION_UNSPECIFIED":
      return EventUpdateApplication_Action.ACTION_UNSPECIFIED;
    case 1:
    case "ACTION_CREATE":
      return EventUpdateApplication_Action.ACTION_CREATE;
    case 2:
    case "ACTION_UPDATE":
      return EventUpdateApplication_Action.ACTION_UPDATE;
    case 3:
    case "ACTION_WITHDRAW":
      return EventUpdateApplication_Action.ACTION_WITHDRAW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EventUpdateApplication_Action.UNRECOGNIZED;
  }
}
export function eventUpdateApplication_ActionToJSON(object: EventUpdateApplication_Action): string {
  switch (object) {
    case EventUpdateApplication_Action.ACTION_UNSPECIFIED:
      return "ACTION_UNSPECIFIED";
    case EventUpdateApplication_Action.ACTION_CREATE:
      return "ACTION_CREATE";
    case EventUpdateApplication_Action.ACTION_UPDATE:
      return "ACTION_UPDATE";
    case EventUpdateApplication_Action.ACTION_WITHDRAW:
      return "ACTION_WITHDRAW";
    case EventUpdateApplication_Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** EventCreateClass is an event emitted when a credit class is created. */
export interface EventCreateClass {
  /** class_id is the unique identifier of the credit class. */
  classId: string;
}
export interface EventCreateClassProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventCreateClass";
  value: Uint8Array;
}
/** EventCreateClass is an event emitted when a credit class is created. */
export interface EventCreateClassAmino {
  /** class_id is the unique identifier of the credit class. */
  class_id?: string;
}
export interface EventCreateClassAminoMsg {
  type: "/regen.ecocredit.v1.EventCreateClass";
  value: EventCreateClassAmino;
}
/** EventCreateClass is an event emitted when a credit class is created. */
export interface EventCreateClassSDKType {
  class_id: string;
}
/** EventCreateProject is an event emitted when a project is created. */
export interface EventCreateProject {
  /** project_id is the unique identifier of the project. */
  projectId: string;
}
export interface EventCreateProjectProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventCreateProject";
  value: Uint8Array;
}
/** EventCreateProject is an event emitted when a project is created. */
export interface EventCreateProjectAmino {
  /** project_id is the unique identifier of the project. */
  project_id?: string;
}
export interface EventCreateProjectAminoMsg {
  type: "/regen.ecocredit.v1.EventCreateProject";
  value: EventCreateProjectAmino;
}
/** EventCreateProject is an event emitted when a project is created. */
export interface EventCreateProjectSDKType {
  project_id: string;
}
/** EventCreateBatch is an event emitted when a credit batch is created. */
export interface EventCreateBatch {
  /** batch_denom is the unique identifier of the credit batch. */
  batchDenom: string;
  /**
   * origin_tx is the transaction from another chain or registry that triggered
   * the creation of the credit batch.
   */
  originTx?: OriginTx;
}
export interface EventCreateBatchProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventCreateBatch";
  value: Uint8Array;
}
/** EventCreateBatch is an event emitted when a credit batch is created. */
export interface EventCreateBatchAmino {
  /** batch_denom is the unique identifier of the credit batch. */
  batch_denom?: string;
  /**
   * origin_tx is the transaction from another chain or registry that triggered
   * the creation of the credit batch.
   */
  origin_tx?: OriginTxAmino;
}
export interface EventCreateBatchAminoMsg {
  type: "/regen.ecocredit.v1.EventCreateBatch";
  value: EventCreateBatchAmino;
}
/** EventCreateBatch is an event emitted when a credit batch is created. */
export interface EventCreateBatchSDKType {
  batch_denom: string;
  origin_tx?: OriginTxSDKType;
}
/**
 * EventMint is an event emitted when credits are minted either when creating a
 * credit batch or when bridging assets from another chain or registry.
 */
export interface EventMint {
  /**
   * batch_denom is the unique identifier of the credit batch within which the
   * credits were minted.
   */
  batchDenom: string;
  /** tradable_amount is the amount of tradable credits minted. */
  tradableAmount: string;
  /** retired_amount is the amount of retired credits minted. */
  retiredAmount: string;
}
export interface EventMintProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventMint";
  value: Uint8Array;
}
/**
 * EventMint is an event emitted when credits are minted either when creating a
 * credit batch or when bridging assets from another chain or registry.
 */
export interface EventMintAmino {
  /**
   * batch_denom is the unique identifier of the credit batch within which the
   * credits were minted.
   */
  batch_denom?: string;
  /** tradable_amount is the amount of tradable credits minted. */
  tradable_amount?: string;
  /** retired_amount is the amount of retired credits minted. */
  retired_amount?: string;
}
export interface EventMintAminoMsg {
  type: "/regen.ecocredit.v1.EventMint";
  value: EventMintAmino;
}
/**
 * EventMint is an event emitted when credits are minted either when creating a
 * credit batch or when bridging assets from another chain or registry.
 */
export interface EventMintSDKType {
  batch_denom: string;
  tradable_amount: string;
  retired_amount: string;
}
/**
 * EventMintBatchCredits is an event emitted when credits are minted to an
 * existing open credit batch.
 */
export interface EventMintBatchCredits {
  /**
   * batch_denom is the unique identifier of the credit batch within which the
   * credits were minted.
   */
  batchDenom: string;
  /**
   * origin_tx is the transaction from another chain or registry that triggered
   * the minting of credits within the credit batch.
   */
  originTx?: OriginTx;
}
export interface EventMintBatchCreditsProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventMintBatchCredits";
  value: Uint8Array;
}
/**
 * EventMintBatchCredits is an event emitted when credits are minted to an
 * existing open credit batch.
 */
export interface EventMintBatchCreditsAmino {
  /**
   * batch_denom is the unique identifier of the credit batch within which the
   * credits were minted.
   */
  batch_denom?: string;
  /**
   * origin_tx is the transaction from another chain or registry that triggered
   * the minting of credits within the credit batch.
   */
  origin_tx?: OriginTxAmino;
}
export interface EventMintBatchCreditsAminoMsg {
  type: "/regen.ecocredit.v1.EventMintBatchCredits";
  value: EventMintBatchCreditsAmino;
}
/**
 * EventMintBatchCredits is an event emitted when credits are minted to an
 * existing open credit batch.
 */
export interface EventMintBatchCreditsSDKType {
  batch_denom: string;
  origin_tx?: OriginTxSDKType;
}
/**
 * EventTransfer is an event emitted when credits are transferred from one
 * account to another including transfers to or from a module account.
 */
export interface EventTransfer {
  /**
   * sender is the sender of the credits. In the case that the credits were
   * transferred from a base account, this will be the account address. In the
   * case that the credits were transferred from a module, this will be the
   * module address (i.e. either the ecocredit module or basket submodule).
   */
  sender: string;
  /**
   * recipient is the recipient of the credits. In the case that the credits
   * were transferred to a base account, this will be the account address. In
   * the case that the credits were transferred to a module, this will be the
   * module address (i.e. either the ecocredit module or basket submodule).
   */
  recipient: string;
  /** batch_denom is the unique identifier of the credit batch. */
  batchDenom: string;
  /** tradable_amount is the decimal number of tradable credits received. */
  tradableAmount: string;
  /** retired_amount is the decimal number of retired credits received. */
  retiredAmount: string;
}
export interface EventTransferProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventTransfer";
  value: Uint8Array;
}
/**
 * EventTransfer is an event emitted when credits are transferred from one
 * account to another including transfers to or from a module account.
 */
export interface EventTransferAmino {
  /**
   * sender is the sender of the credits. In the case that the credits were
   * transferred from a base account, this will be the account address. In the
   * case that the credits were transferred from a module, this will be the
   * module address (i.e. either the ecocredit module or basket submodule).
   */
  sender?: string;
  /**
   * recipient is the recipient of the credits. In the case that the credits
   * were transferred to a base account, this will be the account address. In
   * the case that the credits were transferred to a module, this will be the
   * module address (i.e. either the ecocredit module or basket submodule).
   */
  recipient?: string;
  /** batch_denom is the unique identifier of the credit batch. */
  batch_denom?: string;
  /** tradable_amount is the decimal number of tradable credits received. */
  tradable_amount?: string;
  /** retired_amount is the decimal number of retired credits received. */
  retired_amount?: string;
}
export interface EventTransferAminoMsg {
  type: "/regen.ecocredit.v1.EventTransfer";
  value: EventTransferAmino;
}
/**
 * EventTransfer is an event emitted when credits are transferred from one
 * account to another including transfers to or from a module account.
 */
export interface EventTransferSDKType {
  sender: string;
  recipient: string;
  batch_denom: string;
  tradable_amount: string;
  retired_amount: string;
}
/**
 * EventRetire is an event emitted when credits are retired. When credits are
 * retired from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventRetire {
  /**
   * owner is the address of the account that owns the retired credits. This
   * will be the account receiving credits in the case that credits were retired
   * upon issuance using Msg/CreateBatch, retired upon transfer using Msg/Send,
   * retired upon taking from a basket using basket.Msg/Take, or retired upon
   * purchase using marketplace.Msg/BuyDirect.
   */
  owner: string;
  /**
   * batch_denom is the unique identifier of the credit batch within which the
   * credits were retired.
   */
  batchDenom: string;
  /** amount is the decimal number of credits that have been retired. */
  amount: string;
  /**
   * jurisdiction is the jurisdiction of the beneficiary or buyer of the retired
   * credits. It is a string of the form
   * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
   * fields conforming to ISO 3166-2, and postal-code being up to 64
   * alphanumeric characters.
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
export interface EventRetireProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventRetire";
  value: Uint8Array;
}
/**
 * EventRetire is an event emitted when credits are retired. When credits are
 * retired from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventRetireAmino {
  /**
   * owner is the address of the account that owns the retired credits. This
   * will be the account receiving credits in the case that credits were retired
   * upon issuance using Msg/CreateBatch, retired upon transfer using Msg/Send,
   * retired upon taking from a basket using basket.Msg/Take, or retired upon
   * purchase using marketplace.Msg/BuyDirect.
   */
  owner?: string;
  /**
   * batch_denom is the unique identifier of the credit batch within which the
   * credits were retired.
   */
  batch_denom?: string;
  /** amount is the decimal number of credits that have been retired. */
  amount?: string;
  /**
   * jurisdiction is the jurisdiction of the beneficiary or buyer of the retired
   * credits. It is a string of the form
   * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
   * fields conforming to ISO 3166-2, and postal-code being up to 64
   * alphanumeric characters.
   */
  jurisdiction?: string;
  /**
   * reason is any arbitrary string that specifies the reason for retiring
   * credits.
   * 
   * Since Revision 2
   */
  reason?: string;
}
export interface EventRetireAminoMsg {
  type: "/regen.ecocredit.v1.EventRetire";
  value: EventRetireAmino;
}
/**
 * EventRetire is an event emitted when credits are retired. When credits are
 * retired from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventRetireSDKType {
  owner: string;
  batch_denom: string;
  amount: string;
  jurisdiction: string;
  reason: string;
}
/**
 * EventCancel is an event emitted when credits are cancelled. When credits are
 * cancelled from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventCancel {
  /** owner is the address of the account that cancelled the credits. */
  owner: string;
  /**
   * batch_denom is the unique identifier of the credit batch within which the
   * credits were cancelled.
   */
  batchDenom: string;
  /** amount is the decimal number of credits that have been cancelled. */
  amount: string;
  /** reason is the reason the credits were cancelled. */
  reason: string;
}
export interface EventCancelProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventCancel";
  value: Uint8Array;
}
/**
 * EventCancel is an event emitted when credits are cancelled. When credits are
 * cancelled from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventCancelAmino {
  /** owner is the address of the account that cancelled the credits. */
  owner?: string;
  /**
   * batch_denom is the unique identifier of the credit batch within which the
   * credits were cancelled.
   */
  batch_denom?: string;
  /** amount is the decimal number of credits that have been cancelled. */
  amount?: string;
  /** reason is the reason the credits were cancelled. */
  reason?: string;
}
export interface EventCancelAminoMsg {
  type: "/regen.ecocredit.v1.EventCancel";
  value: EventCancelAmino;
}
/**
 * EventCancel is an event emitted when credits are cancelled. When credits are
 * cancelled from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventCancelSDKType {
  owner: string;
  batch_denom: string;
  amount: string;
  reason: string;
}
/**
 * EventUpdateClassAdmin is emitted when the admin address of a credit class is
 * changed.
 */
export interface EventUpdateClassAdmin {
  /** class_id is the unique identifier of the class that was updated. */
  classId: string;
}
export interface EventUpdateClassAdminProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventUpdateClassAdmin";
  value: Uint8Array;
}
/**
 * EventUpdateClassAdmin is emitted when the admin address of a credit class is
 * changed.
 */
export interface EventUpdateClassAdminAmino {
  /** class_id is the unique identifier of the class that was updated. */
  class_id?: string;
}
export interface EventUpdateClassAdminAminoMsg {
  type: "/regen.ecocredit.v1.EventUpdateClassAdmin";
  value: EventUpdateClassAdminAmino;
}
/**
 * EventUpdateClassAdmin is emitted when the admin address of a credit class is
 * changed.
 */
export interface EventUpdateClassAdminSDKType {
  class_id: string;
}
/**
 * EventUpdateClassIssuers is emitted when the issuer list for a credit class
 * is updated.
 */
export interface EventUpdateClassIssuers {
  /** class_id is the unique identifier of the class that was updated. */
  classId: string;
}
export interface EventUpdateClassIssuersProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventUpdateClassIssuers";
  value: Uint8Array;
}
/**
 * EventUpdateClassIssuers is emitted when the issuer list for a credit class
 * is updated.
 */
export interface EventUpdateClassIssuersAmino {
  /** class_id is the unique identifier of the class that was updated. */
  class_id?: string;
}
export interface EventUpdateClassIssuersAminoMsg {
  type: "/regen.ecocredit.v1.EventUpdateClassIssuers";
  value: EventUpdateClassIssuersAmino;
}
/**
 * EventUpdateClassIssuers is emitted when the issuer list for a credit class
 * is updated.
 */
export interface EventUpdateClassIssuersSDKType {
  class_id: string;
}
/**
 * EventUpdateClassMetadata is emitted when the credit class metadata is
 * changed.
 */
export interface EventUpdateClassMetadata {
  /** class_id is the unique identifier of the class that was updated. */
  classId: string;
}
export interface EventUpdateClassMetadataProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventUpdateClassMetadata";
  value: Uint8Array;
}
/**
 * EventUpdateClassMetadata is emitted when the credit class metadata is
 * changed.
 */
export interface EventUpdateClassMetadataAmino {
  /** class_id is the unique identifier of the class that was updated. */
  class_id?: string;
}
export interface EventUpdateClassMetadataAminoMsg {
  type: "/regen.ecocredit.v1.EventUpdateClassMetadata";
  value: EventUpdateClassMetadataAmino;
}
/**
 * EventUpdateClassMetadata is emitted when the credit class metadata is
 * changed.
 */
export interface EventUpdateClassMetadataSDKType {
  class_id: string;
}
/** EventUpdateProjectAdmin is emitted when the project admin is changed. */
export interface EventUpdateProjectAdmin {
  /** project_id is the unique identifier of the project that was updated. */
  projectId: string;
}
export interface EventUpdateProjectAdminProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventUpdateProjectAdmin";
  value: Uint8Array;
}
/** EventUpdateProjectAdmin is emitted when the project admin is changed. */
export interface EventUpdateProjectAdminAmino {
  /** project_id is the unique identifier of the project that was updated. */
  project_id?: string;
}
export interface EventUpdateProjectAdminAminoMsg {
  type: "/regen.ecocredit.v1.EventUpdateProjectAdmin";
  value: EventUpdateProjectAdminAmino;
}
/** EventUpdateProjectAdmin is emitted when the project admin is changed. */
export interface EventUpdateProjectAdminSDKType {
  project_id: string;
}
/** EventUpdateProjectMetadata is emitted when the project metadata is changed. */
export interface EventUpdateProjectMetadata {
  /** project_id is the unique identifier of the project that was updated. */
  projectId: string;
}
export interface EventUpdateProjectMetadataProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventUpdateProjectMetadata";
  value: Uint8Array;
}
/** EventUpdateProjectMetadata is emitted when the project metadata is changed. */
export interface EventUpdateProjectMetadataAmino {
  /** project_id is the unique identifier of the project that was updated. */
  project_id?: string;
}
export interface EventUpdateProjectMetadataAminoMsg {
  type: "/regen.ecocredit.v1.EventUpdateProjectMetadata";
  value: EventUpdateProjectMetadataAmino;
}
/** EventUpdateProjectMetadata is emitted when the project metadata is changed. */
export interface EventUpdateProjectMetadataSDKType {
  project_id: string;
}
/**
 * EventUpdateBatchMetadata is emitted when the credit batch metadata is
 * changed.
 * 
 * Since Revision 2
 */
export interface EventUpdateBatchMetadata {
  /** batch_denom is the unique identifier of the batch that was updated. */
  batchDenom: string;
}
export interface EventUpdateBatchMetadataProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventUpdateBatchMetadata";
  value: Uint8Array;
}
/**
 * EventUpdateBatchMetadata is emitted when the credit batch metadata is
 * changed.
 * 
 * Since Revision 2
 */
export interface EventUpdateBatchMetadataAmino {
  /** batch_denom is the unique identifier of the batch that was updated. */
  batch_denom?: string;
}
export interface EventUpdateBatchMetadataAminoMsg {
  type: "/regen.ecocredit.v1.EventUpdateBatchMetadata";
  value: EventUpdateBatchMetadataAmino;
}
/**
 * EventUpdateBatchMetadata is emitted when the credit batch metadata is
 * changed.
 * 
 * Since Revision 2
 */
export interface EventUpdateBatchMetadataSDKType {
  batch_denom: string;
}
/** EventSealBatch is emitted when a batch is sealed. */
export interface EventSealBatch {
  /** batch_denom is the denom of the batch that was sealed. */
  batchDenom: string;
}
export interface EventSealBatchProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventSealBatch";
  value: Uint8Array;
}
/** EventSealBatch is emitted when a batch is sealed. */
export interface EventSealBatchAmino {
  /** batch_denom is the denom of the batch that was sealed. */
  batch_denom?: string;
}
export interface EventSealBatchAminoMsg {
  type: "/regen.ecocredit.v1.EventSealBatch";
  value: EventSealBatchAmino;
}
/** EventSealBatch is emitted when a batch is sealed. */
export interface EventSealBatchSDKType {
  batch_denom: string;
}
/** EventAddCreditType is emitted when governance approves a new credit type. */
export interface EventAddCreditType {
  /** abbreviation is the abbreviation of the credit type. */
  abbreviation: string;
}
export interface EventAddCreditTypeProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventAddCreditType";
  value: Uint8Array;
}
/** EventAddCreditType is emitted when governance approves a new credit type. */
export interface EventAddCreditTypeAmino {
  /** abbreviation is the abbreviation of the credit type. */
  abbreviation?: string;
}
export interface EventAddCreditTypeAminoMsg {
  type: "/regen.ecocredit.v1.EventAddCreditType";
  value: EventAddCreditTypeAmino;
}
/** EventAddCreditType is emitted when governance approves a new credit type. */
export interface EventAddCreditTypeSDKType {
  abbreviation: string;
}
/** EventBridge is emitted when credits are bridged to another chain. */
export interface EventBridge {
  /** target is the target chain. */
  target: string;
  /** recipient is the recipient address. */
  recipient: string;
  /** contract is the contract address. */
  contract: string;
  /** amount is the amount of credits. */
  amount: string;
  /**
   * owner is the owner address.
   * 
   * Since Revision 1
   */
  owner: string;
  /**
   * batch_denom is the credit batch denom.
   * 
   * Since Revision 3
   */
  batchDenom: string;
}
export interface EventBridgeProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventBridge";
  value: Uint8Array;
}
/** EventBridge is emitted when credits are bridged to another chain. */
export interface EventBridgeAmino {
  /** target is the target chain. */
  target?: string;
  /** recipient is the recipient address. */
  recipient?: string;
  /** contract is the contract address. */
  contract?: string;
  /** amount is the amount of credits. */
  amount?: string;
  /**
   * owner is the owner address.
   * 
   * Since Revision 1
   */
  owner?: string;
  /**
   * batch_denom is the credit batch denom.
   * 
   * Since Revision 3
   */
  batch_denom?: string;
}
export interface EventBridgeAminoMsg {
  type: "/regen.ecocredit.v1.EventBridge";
  value: EventBridgeAmino;
}
/** EventBridge is emitted when credits are bridged to another chain. */
export interface EventBridgeSDKType {
  target: string;
  recipient: string;
  contract: string;
  amount: string;
  owner: string;
  batch_denom: string;
}
/** EventBridgeReceive is emitted when credits are bridged from another chain. */
export interface EventBridgeReceive {
  /**
   * project_id is the unique identifier of the project that was either created
   * or the existing project within which the credit batch exists.
   */
  projectId: string;
  /**
   * batch_denom is the unique identifier of the credit batch either created
   * or within which the credits were dynamically minted.
   */
  batchDenom: string;
  /**
   * amount is the amount of credits.
   * 
   * Since Revision 3
   */
  amount: string;
  /**
   * origin_tx is the transaction from another chain or registry that triggered
   * the minting of credits within the credit batch.
   * 
   * Since Revision 3
   */
  originTx?: OriginTx;
}
export interface EventBridgeReceiveProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventBridgeReceive";
  value: Uint8Array;
}
/** EventBridgeReceive is emitted when credits are bridged from another chain. */
export interface EventBridgeReceiveAmino {
  /**
   * project_id is the unique identifier of the project that was either created
   * or the existing project within which the credit batch exists.
   */
  project_id?: string;
  /**
   * batch_denom is the unique identifier of the credit batch either created
   * or within which the credits were dynamically minted.
   */
  batch_denom?: string;
  /**
   * amount is the amount of credits.
   * 
   * Since Revision 3
   */
  amount?: string;
  /**
   * origin_tx is the transaction from another chain or registry that triggered
   * the minting of credits within the credit batch.
   * 
   * Since Revision 3
   */
  origin_tx?: OriginTxAmino;
}
export interface EventBridgeReceiveAminoMsg {
  type: "/regen.ecocredit.v1.EventBridgeReceive";
  value: EventBridgeReceiveAmino;
}
/** EventBridgeReceive is emitted when credits are bridged from another chain. */
export interface EventBridgeReceiveSDKType {
  project_id: string;
  batch_denom: string;
  amount: string;
  origin_tx?: OriginTxSDKType;
}
/** EventBurnRegen is an event emitted when REGEN is burned to account for credit origination, transfer, etc. */
export interface EventBurnRegen {
  /** burner is the address that burned REGEN. */
  burner: string;
  /** amount is the integer amount of uregen burned. */
  amount: string;
  /** reason is the reason for the burn. */
  reason: string;
}
export interface EventBurnRegenProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventBurnRegen";
  value: Uint8Array;
}
/** EventBurnRegen is an event emitted when REGEN is burned to account for credit origination, transfer, etc. */
export interface EventBurnRegenAmino {
  /** burner is the address that burned REGEN. */
  burner?: string;
  /** amount is the integer amount of uregen burned. */
  amount?: string;
  /** reason is the reason for the burn. */
  reason?: string;
}
export interface EventBurnRegenAminoMsg {
  type: "/regen.ecocredit.v1.EventBurnRegen";
  value: EventBurnRegenAmino;
}
/** EventBurnRegen is an event emitted when REGEN is burned to account for credit origination, transfer, etc. */
export interface EventBurnRegenSDKType {
  burner: string;
  amount: string;
  reason: string;
}
/**
 * EventUpdateApplication is emitted when a project admin creates, updates
 * or withdraws a project's application to a credit class.
 */
export interface EventUpdateApplication {
  /** project_id is the unique identifier of the project that was updated. */
  projectId: string;
  /** class_id is the unique identifier of the class that was updated. */
  classId: string;
  /** action is the action that was taken on the application. */
  action: EventUpdateApplication_Action;
  /** new_application_metadata is any new application metadata. */
  newApplicationMetadata: string;
}
export interface EventUpdateApplicationProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventUpdateApplication";
  value: Uint8Array;
}
/**
 * EventUpdateApplication is emitted when a project admin creates, updates
 * or withdraws a project's application to a credit class.
 */
export interface EventUpdateApplicationAmino {
  /** project_id is the unique identifier of the project that was updated. */
  project_id?: string;
  /** class_id is the unique identifier of the class that was updated. */
  class_id?: string;
  /** action is the action that was taken on the application. */
  action?: EventUpdateApplication_Action;
  /** new_application_metadata is any new application metadata. */
  new_application_metadata?: string;
}
export interface EventUpdateApplicationAminoMsg {
  type: "/regen.ecocredit.v1.EventUpdateApplication";
  value: EventUpdateApplicationAmino;
}
/**
 * EventUpdateApplication is emitted when a project admin creates, updates
 * or withdraws a project's application to a credit class.
 */
export interface EventUpdateApplicationSDKType {
  project_id: string;
  class_id: string;
  action: EventUpdateApplication_Action;
  new_application_metadata: string;
}
/**
 * EventUpdateProjectEnrollment is emitted when a credit class issuer updates
 * the enrollment status of a project.
 */
export interface EventUpdateProjectEnrollment {
  /**
   * issuer is the address of the credit class issuer which evaluated the
   * project.
   */
  issuer: string;
  /** project_id is the unique identifier of the project that was evaluated. */
  projectId: string;
  /**
   * class_id is the unique identifier of the class in which the project was
   * evaluated.
   */
  classId: string;
  /** old_status is the old status of the project class relationship. */
  oldStatus: ProjectEnrollmentStatus;
  /** new_status is the new status of the project class relationship. */
  newStatus: ProjectEnrollmentStatus;
  /** new_enrollment_metadata is any new enrollment metadata. */
  newEnrollmentMetadata: string;
}
export interface EventUpdateProjectEnrollmentProtoMsg {
  typeUrl: "/regen.ecocredit.v1.EventUpdateProjectEnrollment";
  value: Uint8Array;
}
/**
 * EventUpdateProjectEnrollment is emitted when a credit class issuer updates
 * the enrollment status of a project.
 */
export interface EventUpdateProjectEnrollmentAmino {
  /**
   * issuer is the address of the credit class issuer which evaluated the
   * project.
   */
  issuer?: string;
  /** project_id is the unique identifier of the project that was evaluated. */
  project_id?: string;
  /**
   * class_id is the unique identifier of the class in which the project was
   * evaluated.
   */
  class_id?: string;
  /** old_status is the old status of the project class relationship. */
  old_status?: ProjectEnrollmentStatus;
  /** new_status is the new status of the project class relationship. */
  new_status?: ProjectEnrollmentStatus;
  /** new_enrollment_metadata is any new enrollment metadata. */
  new_enrollment_metadata?: string;
}
export interface EventUpdateProjectEnrollmentAminoMsg {
  type: "/regen.ecocredit.v1.EventUpdateProjectEnrollment";
  value: EventUpdateProjectEnrollmentAmino;
}
/**
 * EventUpdateProjectEnrollment is emitted when a credit class issuer updates
 * the enrollment status of a project.
 */
export interface EventUpdateProjectEnrollmentSDKType {
  issuer: string;
  project_id: string;
  class_id: string;
  old_status: ProjectEnrollmentStatus;
  new_status: ProjectEnrollmentStatus;
  new_enrollment_metadata: string;
}
function createBaseEventCreateClass(): EventCreateClass {
  return {
    classId: ""
  };
}
export const EventCreateClass = {
  typeUrl: "/regen.ecocredit.v1.EventCreateClass",
  encode(message: EventCreateClass, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateClass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateClass();
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
  fromPartial(object: Partial<EventCreateClass>): EventCreateClass {
    const message = createBaseEventCreateClass();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: EventCreateClassAmino): EventCreateClass {
    const message = createBaseEventCreateClass();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: EventCreateClass): EventCreateClassAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    return obj;
  },
  fromAminoMsg(object: EventCreateClassAminoMsg): EventCreateClass {
    return EventCreateClass.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateClassProtoMsg): EventCreateClass {
    return EventCreateClass.decode(message.value);
  },
  toProto(message: EventCreateClass): Uint8Array {
    return EventCreateClass.encode(message).finish();
  },
  toProtoMsg(message: EventCreateClass): EventCreateClassProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventCreateClass",
      value: EventCreateClass.encode(message).finish()
    };
  }
};
function createBaseEventCreateProject(): EventCreateProject {
  return {
    projectId: ""
  };
}
export const EventCreateProject = {
  typeUrl: "/regen.ecocredit.v1.EventCreateProject",
  encode(message: EventCreateProject, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateProject {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateProject();
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
  fromPartial(object: Partial<EventCreateProject>): EventCreateProject {
    const message = createBaseEventCreateProject();
    message.projectId = object.projectId ?? "";
    return message;
  },
  fromAmino(object: EventCreateProjectAmino): EventCreateProject {
    const message = createBaseEventCreateProject();
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    return message;
  },
  toAmino(message: EventCreateProject): EventCreateProjectAmino {
    const obj: any = {};
    obj.project_id = message.projectId === "" ? undefined : message.projectId;
    return obj;
  },
  fromAminoMsg(object: EventCreateProjectAminoMsg): EventCreateProject {
    return EventCreateProject.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateProjectProtoMsg): EventCreateProject {
    return EventCreateProject.decode(message.value);
  },
  toProto(message: EventCreateProject): Uint8Array {
    return EventCreateProject.encode(message).finish();
  },
  toProtoMsg(message: EventCreateProject): EventCreateProjectProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventCreateProject",
      value: EventCreateProject.encode(message).finish()
    };
  }
};
function createBaseEventCreateBatch(): EventCreateBatch {
  return {
    batchDenom: "",
    originTx: undefined
  };
}
export const EventCreateBatch = {
  typeUrl: "/regen.ecocredit.v1.EventCreateBatch",
  encode(message: EventCreateBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.originTx !== undefined) {
      OriginTx.encode(message.originTx, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        case 2:
          message.originTx = OriginTx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventCreateBatch>): EventCreateBatch {
    const message = createBaseEventCreateBatch();
    message.batchDenom = object.batchDenom ?? "";
    message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
    return message;
  },
  fromAmino(object: EventCreateBatchAmino): EventCreateBatch {
    const message = createBaseEventCreateBatch();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.origin_tx !== undefined && object.origin_tx !== null) {
      message.originTx = OriginTx.fromAmino(object.origin_tx);
    }
    return message;
  },
  toAmino(message: EventCreateBatch): EventCreateBatchAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    obj.origin_tx = message.originTx ? OriginTx.toAmino(message.originTx) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCreateBatchAminoMsg): EventCreateBatch {
    return EventCreateBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateBatchProtoMsg): EventCreateBatch {
    return EventCreateBatch.decode(message.value);
  },
  toProto(message: EventCreateBatch): Uint8Array {
    return EventCreateBatch.encode(message).finish();
  },
  toProtoMsg(message: EventCreateBatch): EventCreateBatchProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventCreateBatch",
      value: EventCreateBatch.encode(message).finish()
    };
  }
};
function createBaseEventMint(): EventMint {
  return {
    batchDenom: "",
    tradableAmount: "",
    retiredAmount: ""
  };
}
export const EventMint = {
  typeUrl: "/regen.ecocredit.v1.EventMint",
  encode(message: EventMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.tradableAmount !== "") {
      writer.uint32(18).string(message.tradableAmount);
    }
    if (message.retiredAmount !== "") {
      writer.uint32(26).string(message.retiredAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMint();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventMint>): EventMint {
    const message = createBaseEventMint();
    message.batchDenom = object.batchDenom ?? "";
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    return message;
  },
  fromAmino(object: EventMintAmino): EventMint {
    const message = createBaseEventMint();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
      message.tradableAmount = object.tradable_amount;
    }
    if (object.retired_amount !== undefined && object.retired_amount !== null) {
      message.retiredAmount = object.retired_amount;
    }
    return message;
  },
  toAmino(message: EventMint): EventMintAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
    obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
    return obj;
  },
  fromAminoMsg(object: EventMintAminoMsg): EventMint {
    return EventMint.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMintProtoMsg): EventMint {
    return EventMint.decode(message.value);
  },
  toProto(message: EventMint): Uint8Array {
    return EventMint.encode(message).finish();
  },
  toProtoMsg(message: EventMint): EventMintProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventMint",
      value: EventMint.encode(message).finish()
    };
  }
};
function createBaseEventMintBatchCredits(): EventMintBatchCredits {
  return {
    batchDenom: "",
    originTx: undefined
  };
}
export const EventMintBatchCredits = {
  typeUrl: "/regen.ecocredit.v1.EventMintBatchCredits",
  encode(message: EventMintBatchCredits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.originTx !== undefined) {
      OriginTx.encode(message.originTx, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventMintBatchCredits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMintBatchCredits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        case 2:
          message.originTx = OriginTx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventMintBatchCredits>): EventMintBatchCredits {
    const message = createBaseEventMintBatchCredits();
    message.batchDenom = object.batchDenom ?? "";
    message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
    return message;
  },
  fromAmino(object: EventMintBatchCreditsAmino): EventMintBatchCredits {
    const message = createBaseEventMintBatchCredits();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.origin_tx !== undefined && object.origin_tx !== null) {
      message.originTx = OriginTx.fromAmino(object.origin_tx);
    }
    return message;
  },
  toAmino(message: EventMintBatchCredits): EventMintBatchCreditsAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    obj.origin_tx = message.originTx ? OriginTx.toAmino(message.originTx) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventMintBatchCreditsAminoMsg): EventMintBatchCredits {
    return EventMintBatchCredits.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMintBatchCreditsProtoMsg): EventMintBatchCredits {
    return EventMintBatchCredits.decode(message.value);
  },
  toProto(message: EventMintBatchCredits): Uint8Array {
    return EventMintBatchCredits.encode(message).finish();
  },
  toProtoMsg(message: EventMintBatchCredits): EventMintBatchCreditsProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventMintBatchCredits",
      value: EventMintBatchCredits.encode(message).finish()
    };
  }
};
function createBaseEventTransfer(): EventTransfer {
  return {
    sender: "",
    recipient: "",
    batchDenom: "",
    tradableAmount: "",
    retiredAmount: ""
  };
}
export const EventTransfer = {
  typeUrl: "/regen.ecocredit.v1.EventTransfer",
  encode(message: EventTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.batchDenom !== "") {
      writer.uint32(26).string(message.batchDenom);
    }
    if (message.tradableAmount !== "") {
      writer.uint32(34).string(message.tradableAmount);
    }
    if (message.retiredAmount !== "") {
      writer.uint32(42).string(message.retiredAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTransfer();
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
          message.batchDenom = reader.string();
          break;
        case 4:
          message.tradableAmount = reader.string();
          break;
        case 5:
          message.retiredAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventTransfer>): EventTransfer {
    const message = createBaseEventTransfer();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    return message;
  },
  fromAmino(object: EventTransferAmino): EventTransfer {
    const message = createBaseEventTransfer();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
      message.tradableAmount = object.tradable_amount;
    }
    if (object.retired_amount !== undefined && object.retired_amount !== null) {
      message.retiredAmount = object.retired_amount;
    }
    return message;
  },
  toAmino(message: EventTransfer): EventTransferAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
    obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
    return obj;
  },
  fromAminoMsg(object: EventTransferAminoMsg): EventTransfer {
    return EventTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTransferProtoMsg): EventTransfer {
    return EventTransfer.decode(message.value);
  },
  toProto(message: EventTransfer): Uint8Array {
    return EventTransfer.encode(message).finish();
  },
  toProtoMsg(message: EventTransfer): EventTransferProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventTransfer",
      value: EventTransfer.encode(message).finish()
    };
  }
};
function createBaseEventRetire(): EventRetire {
  return {
    owner: "",
    batchDenom: "",
    amount: "",
    jurisdiction: "",
    reason: ""
  };
}
export const EventRetire = {
  typeUrl: "/regen.ecocredit.v1.EventRetire",
  encode(message: EventRetire, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.jurisdiction !== "") {
      writer.uint32(34).string(message.jurisdiction);
    }
    if (message.reason !== "") {
      writer.uint32(42).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRetire {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRetire();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.batchDenom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.jurisdiction = reader.string();
          break;
        case 5:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventRetire>): EventRetire {
    const message = createBaseEventRetire();
    message.owner = object.owner ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.amount = object.amount ?? "";
    message.jurisdiction = object.jurisdiction ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: EventRetireAmino): EventRetire {
    const message = createBaseEventRetire();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.jurisdiction !== undefined && object.jurisdiction !== null) {
      message.jurisdiction = object.jurisdiction;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: EventRetire): EventRetireAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.jurisdiction = message.jurisdiction === "" ? undefined : message.jurisdiction;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: EventRetireAminoMsg): EventRetire {
    return EventRetire.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRetireProtoMsg): EventRetire {
    return EventRetire.decode(message.value);
  },
  toProto(message: EventRetire): Uint8Array {
    return EventRetire.encode(message).finish();
  },
  toProtoMsg(message: EventRetire): EventRetireProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventRetire",
      value: EventRetire.encode(message).finish()
    };
  }
};
function createBaseEventCancel(): EventCancel {
  return {
    owner: "",
    batchDenom: "",
    amount: "",
    reason: ""
  };
}
export const EventCancel = {
  typeUrl: "/regen.ecocredit.v1.EventCancel",
  encode(message: EventCancel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCancel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.batchDenom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
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
  fromPartial(object: Partial<EventCancel>): EventCancel {
    const message = createBaseEventCancel();
    message.owner = object.owner ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.amount = object.amount ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: EventCancelAmino): EventCancel {
    const message = createBaseEventCancel();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: EventCancel): EventCancelAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: EventCancelAminoMsg): EventCancel {
    return EventCancel.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelProtoMsg): EventCancel {
    return EventCancel.decode(message.value);
  },
  toProto(message: EventCancel): Uint8Array {
    return EventCancel.encode(message).finish();
  },
  toProtoMsg(message: EventCancel): EventCancelProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventCancel",
      value: EventCancel.encode(message).finish()
    };
  }
};
function createBaseEventUpdateClassAdmin(): EventUpdateClassAdmin {
  return {
    classId: ""
  };
}
export const EventUpdateClassAdmin = {
  typeUrl: "/regen.ecocredit.v1.EventUpdateClassAdmin",
  encode(message: EventUpdateClassAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateClassAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateClassAdmin();
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
  fromPartial(object: Partial<EventUpdateClassAdmin>): EventUpdateClassAdmin {
    const message = createBaseEventUpdateClassAdmin();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: EventUpdateClassAdminAmino): EventUpdateClassAdmin {
    const message = createBaseEventUpdateClassAdmin();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: EventUpdateClassAdmin): EventUpdateClassAdminAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    return obj;
  },
  fromAminoMsg(object: EventUpdateClassAdminAminoMsg): EventUpdateClassAdmin {
    return EventUpdateClassAdmin.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateClassAdminProtoMsg): EventUpdateClassAdmin {
    return EventUpdateClassAdmin.decode(message.value);
  },
  toProto(message: EventUpdateClassAdmin): Uint8Array {
    return EventUpdateClassAdmin.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateClassAdmin): EventUpdateClassAdminProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventUpdateClassAdmin",
      value: EventUpdateClassAdmin.encode(message).finish()
    };
  }
};
function createBaseEventUpdateClassIssuers(): EventUpdateClassIssuers {
  return {
    classId: ""
  };
}
export const EventUpdateClassIssuers = {
  typeUrl: "/regen.ecocredit.v1.EventUpdateClassIssuers",
  encode(message: EventUpdateClassIssuers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateClassIssuers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateClassIssuers();
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
  fromPartial(object: Partial<EventUpdateClassIssuers>): EventUpdateClassIssuers {
    const message = createBaseEventUpdateClassIssuers();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: EventUpdateClassIssuersAmino): EventUpdateClassIssuers {
    const message = createBaseEventUpdateClassIssuers();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: EventUpdateClassIssuers): EventUpdateClassIssuersAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    return obj;
  },
  fromAminoMsg(object: EventUpdateClassIssuersAminoMsg): EventUpdateClassIssuers {
    return EventUpdateClassIssuers.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateClassIssuersProtoMsg): EventUpdateClassIssuers {
    return EventUpdateClassIssuers.decode(message.value);
  },
  toProto(message: EventUpdateClassIssuers): Uint8Array {
    return EventUpdateClassIssuers.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateClassIssuers): EventUpdateClassIssuersProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventUpdateClassIssuers",
      value: EventUpdateClassIssuers.encode(message).finish()
    };
  }
};
function createBaseEventUpdateClassMetadata(): EventUpdateClassMetadata {
  return {
    classId: ""
  };
}
export const EventUpdateClassMetadata = {
  typeUrl: "/regen.ecocredit.v1.EventUpdateClassMetadata",
  encode(message: EventUpdateClassMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateClassMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateClassMetadata();
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
  fromPartial(object: Partial<EventUpdateClassMetadata>): EventUpdateClassMetadata {
    const message = createBaseEventUpdateClassMetadata();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: EventUpdateClassMetadataAmino): EventUpdateClassMetadata {
    const message = createBaseEventUpdateClassMetadata();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: EventUpdateClassMetadata): EventUpdateClassMetadataAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    return obj;
  },
  fromAminoMsg(object: EventUpdateClassMetadataAminoMsg): EventUpdateClassMetadata {
    return EventUpdateClassMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateClassMetadataProtoMsg): EventUpdateClassMetadata {
    return EventUpdateClassMetadata.decode(message.value);
  },
  toProto(message: EventUpdateClassMetadata): Uint8Array {
    return EventUpdateClassMetadata.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateClassMetadata): EventUpdateClassMetadataProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventUpdateClassMetadata",
      value: EventUpdateClassMetadata.encode(message).finish()
    };
  }
};
function createBaseEventUpdateProjectAdmin(): EventUpdateProjectAdmin {
  return {
    projectId: ""
  };
}
export const EventUpdateProjectAdmin = {
  typeUrl: "/regen.ecocredit.v1.EventUpdateProjectAdmin",
  encode(message: EventUpdateProjectAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateProjectAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateProjectAdmin();
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
  fromPartial(object: Partial<EventUpdateProjectAdmin>): EventUpdateProjectAdmin {
    const message = createBaseEventUpdateProjectAdmin();
    message.projectId = object.projectId ?? "";
    return message;
  },
  fromAmino(object: EventUpdateProjectAdminAmino): EventUpdateProjectAdmin {
    const message = createBaseEventUpdateProjectAdmin();
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    return message;
  },
  toAmino(message: EventUpdateProjectAdmin): EventUpdateProjectAdminAmino {
    const obj: any = {};
    obj.project_id = message.projectId === "" ? undefined : message.projectId;
    return obj;
  },
  fromAminoMsg(object: EventUpdateProjectAdminAminoMsg): EventUpdateProjectAdmin {
    return EventUpdateProjectAdmin.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateProjectAdminProtoMsg): EventUpdateProjectAdmin {
    return EventUpdateProjectAdmin.decode(message.value);
  },
  toProto(message: EventUpdateProjectAdmin): Uint8Array {
    return EventUpdateProjectAdmin.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateProjectAdmin): EventUpdateProjectAdminProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventUpdateProjectAdmin",
      value: EventUpdateProjectAdmin.encode(message).finish()
    };
  }
};
function createBaseEventUpdateProjectMetadata(): EventUpdateProjectMetadata {
  return {
    projectId: ""
  };
}
export const EventUpdateProjectMetadata = {
  typeUrl: "/regen.ecocredit.v1.EventUpdateProjectMetadata",
  encode(message: EventUpdateProjectMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateProjectMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateProjectMetadata();
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
  fromPartial(object: Partial<EventUpdateProjectMetadata>): EventUpdateProjectMetadata {
    const message = createBaseEventUpdateProjectMetadata();
    message.projectId = object.projectId ?? "";
    return message;
  },
  fromAmino(object: EventUpdateProjectMetadataAmino): EventUpdateProjectMetadata {
    const message = createBaseEventUpdateProjectMetadata();
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    return message;
  },
  toAmino(message: EventUpdateProjectMetadata): EventUpdateProjectMetadataAmino {
    const obj: any = {};
    obj.project_id = message.projectId === "" ? undefined : message.projectId;
    return obj;
  },
  fromAminoMsg(object: EventUpdateProjectMetadataAminoMsg): EventUpdateProjectMetadata {
    return EventUpdateProjectMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateProjectMetadataProtoMsg): EventUpdateProjectMetadata {
    return EventUpdateProjectMetadata.decode(message.value);
  },
  toProto(message: EventUpdateProjectMetadata): Uint8Array {
    return EventUpdateProjectMetadata.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateProjectMetadata): EventUpdateProjectMetadataProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventUpdateProjectMetadata",
      value: EventUpdateProjectMetadata.encode(message).finish()
    };
  }
};
function createBaseEventUpdateBatchMetadata(): EventUpdateBatchMetadata {
  return {
    batchDenom: ""
  };
}
export const EventUpdateBatchMetadata = {
  typeUrl: "/regen.ecocredit.v1.EventUpdateBatchMetadata",
  encode(message: EventUpdateBatchMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateBatchMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateBatchMetadata();
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
  fromPartial(object: Partial<EventUpdateBatchMetadata>): EventUpdateBatchMetadata {
    const message = createBaseEventUpdateBatchMetadata();
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },
  fromAmino(object: EventUpdateBatchMetadataAmino): EventUpdateBatchMetadata {
    const message = createBaseEventUpdateBatchMetadata();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    return message;
  },
  toAmino(message: EventUpdateBatchMetadata): EventUpdateBatchMetadataAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    return obj;
  },
  fromAminoMsg(object: EventUpdateBatchMetadataAminoMsg): EventUpdateBatchMetadata {
    return EventUpdateBatchMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateBatchMetadataProtoMsg): EventUpdateBatchMetadata {
    return EventUpdateBatchMetadata.decode(message.value);
  },
  toProto(message: EventUpdateBatchMetadata): Uint8Array {
    return EventUpdateBatchMetadata.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateBatchMetadata): EventUpdateBatchMetadataProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventUpdateBatchMetadata",
      value: EventUpdateBatchMetadata.encode(message).finish()
    };
  }
};
function createBaseEventSealBatch(): EventSealBatch {
  return {
    batchDenom: ""
  };
}
export const EventSealBatch = {
  typeUrl: "/regen.ecocredit.v1.EventSealBatch",
  encode(message: EventSealBatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSealBatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSealBatch();
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
  fromPartial(object: Partial<EventSealBatch>): EventSealBatch {
    const message = createBaseEventSealBatch();
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },
  fromAmino(object: EventSealBatchAmino): EventSealBatch {
    const message = createBaseEventSealBatch();
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    return message;
  },
  toAmino(message: EventSealBatch): EventSealBatchAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    return obj;
  },
  fromAminoMsg(object: EventSealBatchAminoMsg): EventSealBatch {
    return EventSealBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSealBatchProtoMsg): EventSealBatch {
    return EventSealBatch.decode(message.value);
  },
  toProto(message: EventSealBatch): Uint8Array {
    return EventSealBatch.encode(message).finish();
  },
  toProtoMsg(message: EventSealBatch): EventSealBatchProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventSealBatch",
      value: EventSealBatch.encode(message).finish()
    };
  }
};
function createBaseEventAddCreditType(): EventAddCreditType {
  return {
    abbreviation: ""
  };
}
export const EventAddCreditType = {
  typeUrl: "/regen.ecocredit.v1.EventAddCreditType",
  encode(message: EventAddCreditType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.abbreviation !== "") {
      writer.uint32(10).string(message.abbreviation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAddCreditType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAddCreditType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abbreviation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventAddCreditType>): EventAddCreditType {
    const message = createBaseEventAddCreditType();
    message.abbreviation = object.abbreviation ?? "";
    return message;
  },
  fromAmino(object: EventAddCreditTypeAmino): EventAddCreditType {
    const message = createBaseEventAddCreditType();
    if (object.abbreviation !== undefined && object.abbreviation !== null) {
      message.abbreviation = object.abbreviation;
    }
    return message;
  },
  toAmino(message: EventAddCreditType): EventAddCreditTypeAmino {
    const obj: any = {};
    obj.abbreviation = message.abbreviation === "" ? undefined : message.abbreviation;
    return obj;
  },
  fromAminoMsg(object: EventAddCreditTypeAminoMsg): EventAddCreditType {
    return EventAddCreditType.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAddCreditTypeProtoMsg): EventAddCreditType {
    return EventAddCreditType.decode(message.value);
  },
  toProto(message: EventAddCreditType): Uint8Array {
    return EventAddCreditType.encode(message).finish();
  },
  toProtoMsg(message: EventAddCreditType): EventAddCreditTypeProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventAddCreditType",
      value: EventAddCreditType.encode(message).finish()
    };
  }
};
function createBaseEventBridge(): EventBridge {
  return {
    target: "",
    recipient: "",
    contract: "",
    amount: "",
    owner: "",
    batchDenom: ""
  };
}
export const EventBridge = {
  typeUrl: "/regen.ecocredit.v1.EventBridge",
  encode(message: EventBridge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.target !== "") {
      writer.uint32(10).string(message.target);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    if (message.batchDenom !== "") {
      writer.uint32(50).string(message.batchDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBridge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBridge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.owner = reader.string();
          break;
        case 6:
          message.batchDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventBridge>): EventBridge {
    const message = createBaseEventBridge();
    message.target = object.target ?? "";
    message.recipient = object.recipient ?? "";
    message.contract = object.contract ?? "";
    message.amount = object.amount ?? "";
    message.owner = object.owner ?? "";
    message.batchDenom = object.batchDenom ?? "";
    return message;
  },
  fromAmino(object: EventBridgeAmino): EventBridge {
    const message = createBaseEventBridge();
    if (object.target !== undefined && object.target !== null) {
      message.target = object.target;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    return message;
  },
  toAmino(message: EventBridge): EventBridgeAmino {
    const obj: any = {};
    obj.target = message.target === "" ? undefined : message.target;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    return obj;
  },
  fromAminoMsg(object: EventBridgeAminoMsg): EventBridge {
    return EventBridge.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBridgeProtoMsg): EventBridge {
    return EventBridge.decode(message.value);
  },
  toProto(message: EventBridge): Uint8Array {
    return EventBridge.encode(message).finish();
  },
  toProtoMsg(message: EventBridge): EventBridgeProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventBridge",
      value: EventBridge.encode(message).finish()
    };
  }
};
function createBaseEventBridgeReceive(): EventBridgeReceive {
  return {
    projectId: "",
    batchDenom: "",
    amount: "",
    originTx: undefined
  };
}
export const EventBridgeReceive = {
  typeUrl: "/regen.ecocredit.v1.EventBridgeReceive",
  encode(message: EventBridgeReceive, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.originTx !== undefined) {
      OriginTx.encode(message.originTx, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBridgeReceive {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBridgeReceive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.string();
          break;
        case 2:
          message.batchDenom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
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
  fromPartial(object: Partial<EventBridgeReceive>): EventBridgeReceive {
    const message = createBaseEventBridgeReceive();
    message.projectId = object.projectId ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.amount = object.amount ?? "";
    message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
    return message;
  },
  fromAmino(object: EventBridgeReceiveAmino): EventBridgeReceive {
    const message = createBaseEventBridgeReceive();
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    if (object.batch_denom !== undefined && object.batch_denom !== null) {
      message.batchDenom = object.batch_denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.origin_tx !== undefined && object.origin_tx !== null) {
      message.originTx = OriginTx.fromAmino(object.origin_tx);
    }
    return message;
  },
  toAmino(message: EventBridgeReceive): EventBridgeReceiveAmino {
    const obj: any = {};
    obj.project_id = message.projectId === "" ? undefined : message.projectId;
    obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.origin_tx = message.originTx ? OriginTx.toAmino(message.originTx) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBridgeReceiveAminoMsg): EventBridgeReceive {
    return EventBridgeReceive.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBridgeReceiveProtoMsg): EventBridgeReceive {
    return EventBridgeReceive.decode(message.value);
  },
  toProto(message: EventBridgeReceive): Uint8Array {
    return EventBridgeReceive.encode(message).finish();
  },
  toProtoMsg(message: EventBridgeReceive): EventBridgeReceiveProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventBridgeReceive",
      value: EventBridgeReceive.encode(message).finish()
    };
  }
};
function createBaseEventBurnRegen(): EventBurnRegen {
  return {
    burner: "",
    amount: "",
    reason: ""
  };
}
export const EventBurnRegen = {
  typeUrl: "/regen.ecocredit.v1.EventBurnRegen",
  encode(message: EventBurnRegen, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.burner !== "") {
      writer.uint32(10).string(message.burner);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBurnRegen {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurnRegen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burner = reader.string();
          break;
        case 2:
          message.amount = reader.string();
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
  fromPartial(object: Partial<EventBurnRegen>): EventBurnRegen {
    const message = createBaseEventBurnRegen();
    message.burner = object.burner ?? "";
    message.amount = object.amount ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: EventBurnRegenAmino): EventBurnRegen {
    const message = createBaseEventBurnRegen();
    if (object.burner !== undefined && object.burner !== null) {
      message.burner = object.burner;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: EventBurnRegen): EventBurnRegenAmino {
    const obj: any = {};
    obj.burner = message.burner === "" ? undefined : message.burner;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: EventBurnRegenAminoMsg): EventBurnRegen {
    return EventBurnRegen.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBurnRegenProtoMsg): EventBurnRegen {
    return EventBurnRegen.decode(message.value);
  },
  toProto(message: EventBurnRegen): Uint8Array {
    return EventBurnRegen.encode(message).finish();
  },
  toProtoMsg(message: EventBurnRegen): EventBurnRegenProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventBurnRegen",
      value: EventBurnRegen.encode(message).finish()
    };
  }
};
function createBaseEventUpdateApplication(): EventUpdateApplication {
  return {
    projectId: "",
    classId: "",
    action: 0,
    newApplicationMetadata: ""
  };
}
export const EventUpdateApplication = {
  typeUrl: "/regen.ecocredit.v1.EventUpdateApplication",
  encode(message: EventUpdateApplication, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }
    if (message.action !== 0) {
      writer.uint32(24).int32(message.action);
    }
    if (message.newApplicationMetadata !== "") {
      writer.uint32(34).string(message.newApplicationMetadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateApplication {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateApplication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.action = (reader.int32() as any);
          break;
        case 4:
          message.newApplicationMetadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventUpdateApplication>): EventUpdateApplication {
    const message = createBaseEventUpdateApplication();
    message.projectId = object.projectId ?? "";
    message.classId = object.classId ?? "";
    message.action = object.action ?? 0;
    message.newApplicationMetadata = object.newApplicationMetadata ?? "";
    return message;
  },
  fromAmino(object: EventUpdateApplicationAmino): EventUpdateApplication {
    const message = createBaseEventUpdateApplication();
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    if (object.new_application_metadata !== undefined && object.new_application_metadata !== null) {
      message.newApplicationMetadata = object.new_application_metadata;
    }
    return message;
  },
  toAmino(message: EventUpdateApplication): EventUpdateApplicationAmino {
    const obj: any = {};
    obj.project_id = message.projectId === "" ? undefined : message.projectId;
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.action = message.action === 0 ? undefined : message.action;
    obj.new_application_metadata = message.newApplicationMetadata === "" ? undefined : message.newApplicationMetadata;
    return obj;
  },
  fromAminoMsg(object: EventUpdateApplicationAminoMsg): EventUpdateApplication {
    return EventUpdateApplication.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateApplicationProtoMsg): EventUpdateApplication {
    return EventUpdateApplication.decode(message.value);
  },
  toProto(message: EventUpdateApplication): Uint8Array {
    return EventUpdateApplication.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateApplication): EventUpdateApplicationProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventUpdateApplication",
      value: EventUpdateApplication.encode(message).finish()
    };
  }
};
function createBaseEventUpdateProjectEnrollment(): EventUpdateProjectEnrollment {
  return {
    issuer: "",
    projectId: "",
    classId: "",
    oldStatus: 0,
    newStatus: 0,
    newEnrollmentMetadata: ""
  };
}
export const EventUpdateProjectEnrollment = {
  typeUrl: "/regen.ecocredit.v1.EventUpdateProjectEnrollment",
  encode(message: EventUpdateProjectEnrollment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.projectId !== "") {
      writer.uint32(18).string(message.projectId);
    }
    if (message.classId !== "") {
      writer.uint32(26).string(message.classId);
    }
    if (message.oldStatus !== 0) {
      writer.uint32(32).int32(message.oldStatus);
    }
    if (message.newStatus !== 0) {
      writer.uint32(40).int32(message.newStatus);
    }
    if (message.newEnrollmentMetadata !== "") {
      writer.uint32(50).string(message.newEnrollmentMetadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateProjectEnrollment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateProjectEnrollment();
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
          message.classId = reader.string();
          break;
        case 4:
          message.oldStatus = (reader.int32() as any);
          break;
        case 5:
          message.newStatus = (reader.int32() as any);
          break;
        case 6:
          message.newEnrollmentMetadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventUpdateProjectEnrollment>): EventUpdateProjectEnrollment {
    const message = createBaseEventUpdateProjectEnrollment();
    message.issuer = object.issuer ?? "";
    message.projectId = object.projectId ?? "";
    message.classId = object.classId ?? "";
    message.oldStatus = object.oldStatus ?? 0;
    message.newStatus = object.newStatus ?? 0;
    message.newEnrollmentMetadata = object.newEnrollmentMetadata ?? "";
    return message;
  },
  fromAmino(object: EventUpdateProjectEnrollmentAmino): EventUpdateProjectEnrollment {
    const message = createBaseEventUpdateProjectEnrollment();
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    }
    if (object.project_id !== undefined && object.project_id !== null) {
      message.projectId = object.project_id;
    }
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.old_status !== undefined && object.old_status !== null) {
      message.oldStatus = object.old_status;
    }
    if (object.new_status !== undefined && object.new_status !== null) {
      message.newStatus = object.new_status;
    }
    if (object.new_enrollment_metadata !== undefined && object.new_enrollment_metadata !== null) {
      message.newEnrollmentMetadata = object.new_enrollment_metadata;
    }
    return message;
  },
  toAmino(message: EventUpdateProjectEnrollment): EventUpdateProjectEnrollmentAmino {
    const obj: any = {};
    obj.issuer = message.issuer === "" ? undefined : message.issuer;
    obj.project_id = message.projectId === "" ? undefined : message.projectId;
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.old_status = message.oldStatus === 0 ? undefined : message.oldStatus;
    obj.new_status = message.newStatus === 0 ? undefined : message.newStatus;
    obj.new_enrollment_metadata = message.newEnrollmentMetadata === "" ? undefined : message.newEnrollmentMetadata;
    return obj;
  },
  fromAminoMsg(object: EventUpdateProjectEnrollmentAminoMsg): EventUpdateProjectEnrollment {
    return EventUpdateProjectEnrollment.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateProjectEnrollmentProtoMsg): EventUpdateProjectEnrollment {
    return EventUpdateProjectEnrollment.decode(message.value);
  },
  toProto(message: EventUpdateProjectEnrollment): Uint8Array {
    return EventUpdateProjectEnrollment.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateProjectEnrollment): EventUpdateProjectEnrollmentProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.EventUpdateProjectEnrollment",
      value: EventUpdateProjectEnrollment.encode(message).finish()
    };
  }
};