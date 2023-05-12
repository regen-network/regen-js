import { OriginTx, OriginTxSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** EventCreateClass is an event emitted when a credit class is created. */

export interface EventCreateClass {
  /** class_id is the unique identifier of the credit class. */
  classId: string;
}
/** EventCreateClass is an event emitted when a credit class is created. */

export interface EventCreateClassSDKType {
  /** class_id is the unique identifier of the credit class. */
  class_id: string;
}
/** EventCreateProject is an event emitted when a project is created. */

export interface EventCreateProject {
  /** project_id is the unique identifier of the project. */
  projectId: string;
}
/** EventCreateProject is an event emitted when a project is created. */

export interface EventCreateProjectSDKType {
  /** project_id is the unique identifier of the project. */
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
/** EventCreateBatch is an event emitted when a credit batch is created. */

export interface EventCreateBatchSDKType {
  /** batch_denom is the unique identifier of the credit batch. */
  batch_denom: string;
  /**
   * origin_tx is the transaction from another chain or registry that triggered
   * the creation of the credit batch.
   */

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
/**
 * EventMint is an event emitted when credits are minted either when creating a
 * credit batch or when bridging assets from another chain or registry.
 */

export interface EventMintSDKType {
  /**
   * batch_denom is the unique identifier of the credit batch within which the
   * credits were minted.
   */
  batch_denom: string;
  /** tradable_amount is the amount of tradable credits minted. */

  tradable_amount: string;
  /** retired_amount is the amount of retired credits minted. */

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
/**
 * EventMintBatchCredits is an event emitted when credits are minted to an
 * existing open credit batch.
 */

export interface EventMintBatchCreditsSDKType {
  /**
   * batch_denom is the unique identifier of the credit batch within which the
   * credits were minted.
   */
  batch_denom: string;
  /**
   * origin_tx is the transaction from another chain or registry that triggered
   * the minting of credits within the credit batch.
   */

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
/**
 * EventTransfer is an event emitted when credits are transferred from one
 * account to another including transfers to or from a module account.
 */

export interface EventTransferSDKType {
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

  batch_denom: string;
  /** tradable_amount is the decimal number of tradable credits received. */

  tradable_amount: string;
  /** retired_amount is the decimal number of retired credits received. */

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
/**
 * EventRetire is an event emitted when credits are retired. When credits are
 * retired from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */

export interface EventRetireSDKType {
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

  batch_denom: string;
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
/**
 * EventCancel is an event emitted when credits are cancelled. When credits are
 * cancelled from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */

export interface EventCancelSDKType {
  /** owner is the address of the account that cancelled the credits. */
  owner: string;
  /**
   * batch_denom is the unique identifier of the credit batch within which the
   * credits were cancelled.
   */

  batch_denom: string;
  /** amount is the decimal number of credits that have been cancelled. */

  amount: string;
  /** reason is the reason the credits were cancelled. */

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
/**
 * EventUpdateClassAdmin is emitted when the admin address of a credit class is
 * changed.
 */

export interface EventUpdateClassAdminSDKType {
  /** class_id is the unique identifier of the class that was updated. */
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
/**
 * EventUpdateClassIssuers is emitted when the issuer list for a credit class
 * is updated.
 */

export interface EventUpdateClassIssuersSDKType {
  /** class_id is the unique identifier of the class that was updated. */
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
/**
 * EventUpdateClassMetadata is emitted when the credit class metadata is
 * changed.
 */

export interface EventUpdateClassMetadataSDKType {
  /** class_id is the unique identifier of the class that was updated. */
  class_id: string;
}
/** EventUpdateProjectAdmin is emitted when the project admin is changed. */

export interface EventUpdateProjectAdmin {
  /** project_id is the unique identifier of the project that was updated. */
  projectId: string;
}
/** EventUpdateProjectAdmin is emitted when the project admin is changed. */

export interface EventUpdateProjectAdminSDKType {
  /** project_id is the unique identifier of the project that was updated. */
  project_id: string;
}
/** EventUpdateProjectMetadata is emitted when the project metadata is changed. */

export interface EventUpdateProjectMetadata {
  /** project_id is the unique identifier of the project that was updated. */
  projectId: string;
}
/** EventUpdateProjectMetadata is emitted when the project metadata is changed. */

export interface EventUpdateProjectMetadataSDKType {
  /** project_id is the unique identifier of the project that was updated. */
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
/**
 * EventUpdateBatchMetadata is emitted when the credit batch metadata is
 * changed.
 * 
 * Since Revision 2
 */

export interface EventUpdateBatchMetadataSDKType {
  /** batch_denom is the unique identifier of the batch that was updated. */
  batch_denom: string;
}
/** EventSealBatch is emitted when a batch is sealed. */

export interface EventSealBatch {
  /** batch_denom is the denom of the batch that was sealed. */
  batchDenom: string;
}
/** EventSealBatch is emitted when a batch is sealed. */

export interface EventSealBatchSDKType {
  /** batch_denom is the denom of the batch that was sealed. */
  batch_denom: string;
}
/** EventAddCreditType is emitted when governance approves a new credit type. */

export interface EventAddCreditType {
  /** abbreviation is the abbreviation of the credit type. */
  abbreviation: string;
}
/** EventAddCreditType is emitted when governance approves a new credit type. */

export interface EventAddCreditTypeSDKType {
  /** abbreviation is the abbreviation of the credit type. */
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
/** EventBridge is emitted when credits are bridged to another chain. */

export interface EventBridgeSDKType {
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
/** EventBridgeReceive is emitted when credits are bridged from another chain. */

export interface EventBridgeReceiveSDKType {
  /**
   * project_id is the unique identifier of the project that was either created
   * or the existing project within which the credit batch exists.
   */
  project_id: string;
  /**
   * batch_denom is the unique identifier of the credit batch either created
   * or within which the credits were dynamically minted.
   */

  batch_denom: string;
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

  origin_tx?: OriginTxSDKType;
}

function createBaseEventCreateClass(): EventCreateClass {
  return {
    classId: ""
  };
}

export const EventCreateClass = {
  encode(message: EventCreateClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): EventCreateClass {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: EventCreateClass): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: Partial<EventCreateClass>): EventCreateClass {
    const message = createBaseEventCreateClass();
    message.classId = object.classId ?? "";
    return message;
  }

};

function createBaseEventCreateProject(): EventCreateProject {
  return {
    projectId: ""
  };
}

export const EventCreateProject = {
  encode(message: EventCreateProject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateProject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): EventCreateProject {
    return {
      projectId: isSet(object.projectId) ? String(object.projectId) : ""
    };
  },

  toJSON(message: EventCreateProject): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial(object: Partial<EventCreateProject>): EventCreateProject {
    const message = createBaseEventCreateProject();
    message.projectId = object.projectId ?? "";
    return message;
  }

};

function createBaseEventCreateBatch(): EventCreateBatch {
  return {
    batchDenom: "",
    originTx: undefined
  };
}

export const EventCreateBatch = {
  encode(message: EventCreateBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }

    if (message.originTx !== undefined) {
      OriginTx.encode(message.originTx, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): EventCreateBatch {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      originTx: isSet(object.originTx) ? OriginTx.fromJSON(object.originTx) : undefined
    };
  },

  toJSON(message: EventCreateBatch): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.originTx !== undefined && (obj.originTx = message.originTx ? OriginTx.toJSON(message.originTx) : undefined);
    return obj;
  },

  fromPartial(object: Partial<EventCreateBatch>): EventCreateBatch {
    const message = createBaseEventCreateBatch();
    message.batchDenom = object.batchDenom ?? "";
    message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
    return message;
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
  encode(message: EventMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): EventMint {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      tradableAmount: isSet(object.tradableAmount) ? String(object.tradableAmount) : "",
      retiredAmount: isSet(object.retiredAmount) ? String(object.retiredAmount) : ""
    };
  },

  toJSON(message: EventMint): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.tradableAmount !== undefined && (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined && (obj.retiredAmount = message.retiredAmount);
    return obj;
  },

  fromPartial(object: Partial<EventMint>): EventMint {
    const message = createBaseEventMint();
    message.batchDenom = object.batchDenom ?? "";
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    return message;
  }

};

function createBaseEventMintBatchCredits(): EventMintBatchCredits {
  return {
    batchDenom: "",
    originTx: undefined
  };
}

export const EventMintBatchCredits = {
  encode(message: EventMintBatchCredits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }

    if (message.originTx !== undefined) {
      OriginTx.encode(message.originTx, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMintBatchCredits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): EventMintBatchCredits {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      originTx: isSet(object.originTx) ? OriginTx.fromJSON(object.originTx) : undefined
    };
  },

  toJSON(message: EventMintBatchCredits): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.originTx !== undefined && (obj.originTx = message.originTx ? OriginTx.toJSON(message.originTx) : undefined);
    return obj;
  },

  fromPartial(object: Partial<EventMintBatchCredits>): EventMintBatchCredits {
    const message = createBaseEventMintBatchCredits();
    message.batchDenom = object.batchDenom ?? "";
    message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
    return message;
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
  encode(message: EventTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): EventTransfer {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      tradableAmount: isSet(object.tradableAmount) ? String(object.tradableAmount) : "",
      retiredAmount: isSet(object.retiredAmount) ? String(object.retiredAmount) : ""
    };
  },

  toJSON(message: EventTransfer): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.tradableAmount !== undefined && (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined && (obj.retiredAmount = message.retiredAmount);
    return obj;
  },

  fromPartial(object: Partial<EventTransfer>): EventTransfer {
    const message = createBaseEventTransfer();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    return message;
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
  encode(message: EventRetire, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRetire {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): EventRetire {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      jurisdiction: isSet(object.jurisdiction) ? String(object.jurisdiction) : "",
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },

  toJSON(message: EventRetire): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.jurisdiction !== undefined && (obj.jurisdiction = message.jurisdiction);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial(object: Partial<EventRetire>): EventRetire {
    const message = createBaseEventRetire();
    message.owner = object.owner ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.amount = object.amount ?? "";
    message.jurisdiction = object.jurisdiction ?? "";
    message.reason = object.reason ?? "";
    return message;
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
  encode(message: EventCancel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCancel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): EventCancel {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },

  toJSON(message: EventCancel): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial(object: Partial<EventCancel>): EventCancel {
    const message = createBaseEventCancel();
    message.owner = object.owner ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.amount = object.amount ?? "";
    message.reason = object.reason ?? "";
    return message;
  }

};

function createBaseEventUpdateClassAdmin(): EventUpdateClassAdmin {
  return {
    classId: ""
  };
}

export const EventUpdateClassAdmin = {
  encode(message: EventUpdateClassAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateClassAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): EventUpdateClassAdmin {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: EventUpdateClassAdmin): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: Partial<EventUpdateClassAdmin>): EventUpdateClassAdmin {
    const message = createBaseEventUpdateClassAdmin();
    message.classId = object.classId ?? "";
    return message;
  }

};

function createBaseEventUpdateClassIssuers(): EventUpdateClassIssuers {
  return {
    classId: ""
  };
}

export const EventUpdateClassIssuers = {
  encode(message: EventUpdateClassIssuers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateClassIssuers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): EventUpdateClassIssuers {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: EventUpdateClassIssuers): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: Partial<EventUpdateClassIssuers>): EventUpdateClassIssuers {
    const message = createBaseEventUpdateClassIssuers();
    message.classId = object.classId ?? "";
    return message;
  }

};

function createBaseEventUpdateClassMetadata(): EventUpdateClassMetadata {
  return {
    classId: ""
  };
}

export const EventUpdateClassMetadata = {
  encode(message: EventUpdateClassMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateClassMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): EventUpdateClassMetadata {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: EventUpdateClassMetadata): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: Partial<EventUpdateClassMetadata>): EventUpdateClassMetadata {
    const message = createBaseEventUpdateClassMetadata();
    message.classId = object.classId ?? "";
    return message;
  }

};

function createBaseEventUpdateProjectAdmin(): EventUpdateProjectAdmin {
  return {
    projectId: ""
  };
}

export const EventUpdateProjectAdmin = {
  encode(message: EventUpdateProjectAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateProjectAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): EventUpdateProjectAdmin {
    return {
      projectId: isSet(object.projectId) ? String(object.projectId) : ""
    };
  },

  toJSON(message: EventUpdateProjectAdmin): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial(object: Partial<EventUpdateProjectAdmin>): EventUpdateProjectAdmin {
    const message = createBaseEventUpdateProjectAdmin();
    message.projectId = object.projectId ?? "";
    return message;
  }

};

function createBaseEventUpdateProjectMetadata(): EventUpdateProjectMetadata {
  return {
    projectId: ""
  };
}

export const EventUpdateProjectMetadata = {
  encode(message: EventUpdateProjectMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateProjectMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): EventUpdateProjectMetadata {
    return {
      projectId: isSet(object.projectId) ? String(object.projectId) : ""
    };
  },

  toJSON(message: EventUpdateProjectMetadata): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial(object: Partial<EventUpdateProjectMetadata>): EventUpdateProjectMetadata {
    const message = createBaseEventUpdateProjectMetadata();
    message.projectId = object.projectId ?? "";
    return message;
  }

};

function createBaseEventUpdateBatchMetadata(): EventUpdateBatchMetadata {
  return {
    batchDenom: ""
  };
}

export const EventUpdateBatchMetadata = {
  encode(message: EventUpdateBatchMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateBatchMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): EventUpdateBatchMetadata {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },

  toJSON(message: EventUpdateBatchMetadata): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial(object: Partial<EventUpdateBatchMetadata>): EventUpdateBatchMetadata {
    const message = createBaseEventUpdateBatchMetadata();
    message.batchDenom = object.batchDenom ?? "";
    return message;
  }

};

function createBaseEventSealBatch(): EventSealBatch {
  return {
    batchDenom: ""
  };
}

export const EventSealBatch = {
  encode(message: EventSealBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSealBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): EventSealBatch {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },

  toJSON(message: EventSealBatch): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial(object: Partial<EventSealBatch>): EventSealBatch {
    const message = createBaseEventSealBatch();
    message.batchDenom = object.batchDenom ?? "";
    return message;
  }

};

function createBaseEventAddCreditType(): EventAddCreditType {
  return {
    abbreviation: ""
  };
}

export const EventAddCreditType = {
  encode(message: EventAddCreditType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.abbreviation !== "") {
      writer.uint32(10).string(message.abbreviation);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAddCreditType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): EventAddCreditType {
    return {
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : ""
    };
  },

  toJSON(message: EventAddCreditType): unknown {
    const obj: any = {};
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    return obj;
  },

  fromPartial(object: Partial<EventAddCreditType>): EventAddCreditType {
    const message = createBaseEventAddCreditType();
    message.abbreviation = object.abbreviation ?? "";
    return message;
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
  encode(message: EventBridge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBridge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): EventBridge {
    return {
      target: isSet(object.target) ? String(object.target) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : ""
    };
  },

  toJSON(message: EventBridge): unknown {
    const obj: any = {};
    message.target !== undefined && (obj.target = message.target);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.contract !== undefined && (obj.contract = message.contract);
    message.amount !== undefined && (obj.amount = message.amount);
    message.owner !== undefined && (obj.owner = message.owner);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
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
  encode(message: EventBridgeReceive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBridgeReceive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): EventBridgeReceive {
    return {
      projectId: isSet(object.projectId) ? String(object.projectId) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      originTx: isSet(object.originTx) ? OriginTx.fromJSON(object.originTx) : undefined
    };
  },

  toJSON(message: EventBridgeReceive): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.originTx !== undefined && (obj.originTx = message.originTx ? OriginTx.toJSON(message.originTx) : undefined);
    return obj;
  },

  fromPartial(object: Partial<EventBridgeReceive>): EventBridgeReceive {
    const message = createBaseEventBridgeReceive();
    message.projectId = object.projectId ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.amount = object.amount ?? "";
    message.originTx = object.originTx !== undefined && object.originTx !== null ? OriginTx.fromPartial(object.originTx) : undefined;
    return message;
  }

};