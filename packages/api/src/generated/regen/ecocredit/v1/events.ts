/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { OriginTx } from '../../../regen/ecocredit/v1/types';

export const protobufPackage = 'regen.ecocredit.v1';

/** EventCreateClass is an event emitted when a credit class is created. */
export interface EventCreateClass {
  $type: 'regen.ecocredit.v1.EventCreateClass';
  /** class_id is the unique identifier of the credit class. */
  classId: string;
}

/** EventCreateProject is an event emitted when a project is created. */
export interface EventCreateProject {
  $type: 'regen.ecocredit.v1.EventCreateProject';
  /** project_id is the unique identifier of the project. */
  projectId: string;
}

/** EventCreateBatch is an event emitted when a credit batch is created. */
export interface EventCreateBatch {
  $type: 'regen.ecocredit.v1.EventCreateBatch';
  /** batch_denom is the unique identifier of the credit batch. */
  batchDenom: string;
  /**
   * origin_tx is the transaction from another chain or registry that triggered
   * the creation of the credit batch.
   */
  originTx?: OriginTx;
}

/**
 * EventMint is an event emitted when credits are minted either when creating a
 * credit batch or when bridging assets from another chain or registry.
 */
export interface EventMint {
  $type: 'regen.ecocredit.v1.EventMint';
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
 * EventMintBatchCredits is an event emitted when credits are minted to an
 * existing open credit batch.
 */
export interface EventMintBatchCredits {
  $type: 'regen.ecocredit.v1.EventMintBatchCredits';
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
 * EventTransfer is an event emitted when credits are transferred from one
 * account to another including transfers to or from a module account.
 */
export interface EventTransfer {
  $type: 'regen.ecocredit.v1.EventTransfer';
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
 * EventRetire is an event emitted when credits are retired. When credits are
 * retired from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventRetire {
  $type: 'regen.ecocredit.v1.EventRetire';
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
}

/**
 * EventCancel is an event emitted when credits are cancelled. When credits are
 * cancelled from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventCancel {
  $type: 'regen.ecocredit.v1.EventCancel';
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
 * EventUpdateClassAdmin is emitted when the admin address of a credit class is
 * changed.
 */
export interface EventUpdateClassAdmin {
  $type: 'regen.ecocredit.v1.EventUpdateClassAdmin';
  /** class_id is the unique identifier of the class that was updated. */
  classId: string;
}

/**
 * EventUpdateClassIssuers is emitted when the issuer list for a credit class
 * is updated.
 */
export interface EventUpdateClassIssuers {
  $type: 'regen.ecocredit.v1.EventUpdateClassIssuers';
  /** class_id is the unique identifier of the class that was updated. */
  classId: string;
}

/**
 * EventUpdateClassMetadata is emitted when the credit class metadata is
 * changed.
 */
export interface EventUpdateClassMetadata {
  $type: 'regen.ecocredit.v1.EventUpdateClassMetadata';
  /** class_id is the unique identifier of the class that was updated. */
  classId: string;
}

/** EventUpdateProjectAdmin is emitted when the project admin is changed. */
export interface EventUpdateProjectAdmin {
  $type: 'regen.ecocredit.v1.EventUpdateProjectAdmin';
  /** project_id is the unique identifier of the project that was updated. */
  projectId: string;
}

/** EventUpdateProjectMetadata is emitted when the project metadata is changed. */
export interface EventUpdateProjectMetadata {
  $type: 'regen.ecocredit.v1.EventUpdateProjectMetadata';
  /** project_id is the unique identifier of the project that was updated. */
  projectId: string;
}

/** EventSealBatch is emitted when a batch is sealed. */
export interface EventSealBatch {
  $type: 'regen.ecocredit.v1.EventSealBatch';
  /** batch_denom is the denom of the batch that was sealed. */
  batchDenom: string;
}

/** EventAddCreditType is emitted when governance approves a new credit type. */
export interface EventAddCreditType {
  $type: 'regen.ecocredit.v1.EventAddCreditType';
  /** abbreviation is the abbreviation of the credit type. */
  abbreviation: string;
}

/** EventBridge is emitted when credits are bridged to another chain. */
export interface EventBridge {
  $type: 'regen.ecocredit.v1.EventBridge';
  /** target is the target chain. */
  target: string;
  /** recipient is the recipient address. */
  recipient: string;
  /** contract is the contract address. */
  contract: string;
  /** amount is the amount of credits. */
  amount: string;
}

/** EventBridgeReceive is emitted when credits are bridged from another chain. */
export interface EventBridgeReceive {
  $type: 'regen.ecocredit.v1.EventBridgeReceive';
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
}

function createBaseEventCreateClass(): EventCreateClass {
  return { $type: 'regen.ecocredit.v1.EventCreateClass', classId: '' };
}

export const EventCreateClass = {
  $type: 'regen.ecocredit.v1.EventCreateClass' as const,

  encode(
    message: EventCreateClass,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.classId !== '') {
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
      $type: EventCreateClass.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
    };
  },

  toJSON(message: EventCreateClass): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateClass>, I>>(
    object: I,
  ): EventCreateClass {
    const message = createBaseEventCreateClass();
    message.classId = object.classId ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventCreateClass.$type, EventCreateClass);

function createBaseEventCreateProject(): EventCreateProject {
  return { $type: 'regen.ecocredit.v1.EventCreateProject', projectId: '' };
}

export const EventCreateProject = {
  $type: 'regen.ecocredit.v1.EventCreateProject' as const,

  encode(
    message: EventCreateProject,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.projectId !== '') {
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
      $type: EventCreateProject.$type,
      projectId: isSet(object.projectId) ? String(object.projectId) : '',
    };
  },

  toJSON(message: EventCreateProject): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateProject>, I>>(
    object: I,
  ): EventCreateProject {
    const message = createBaseEventCreateProject();
    message.projectId = object.projectId ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventCreateProject.$type, EventCreateProject);

function createBaseEventCreateBatch(): EventCreateBatch {
  return {
    $type: 'regen.ecocredit.v1.EventCreateBatch',
    batchDenom: '',
    originTx: undefined,
  };
}

export const EventCreateBatch = {
  $type: 'regen.ecocredit.v1.EventCreateBatch' as const,

  encode(
    message: EventCreateBatch,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.batchDenom !== '') {
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
      $type: EventCreateBatch.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      originTx: isSet(object.originTx)
        ? OriginTx.fromJSON(object.originTx)
        : undefined,
    };
  },

  toJSON(message: EventCreateBatch): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.originTx !== undefined &&
      (obj.originTx = message.originTx
        ? OriginTx.toJSON(message.originTx)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateBatch>, I>>(
    object: I,
  ): EventCreateBatch {
    const message = createBaseEventCreateBatch();
    message.batchDenom = object.batchDenom ?? '';
    message.originTx =
      object.originTx !== undefined && object.originTx !== null
        ? OriginTx.fromPartial(object.originTx)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(EventCreateBatch.$type, EventCreateBatch);

function createBaseEventMint(): EventMint {
  return {
    $type: 'regen.ecocredit.v1.EventMint',
    batchDenom: '',
    tradableAmount: '',
    retiredAmount: '',
  };
}

export const EventMint = {
  $type: 'regen.ecocredit.v1.EventMint' as const,

  encode(
    message: EventMint,
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
      $type: EventMint.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      tradableAmount: isSet(object.tradableAmount)
        ? String(object.tradableAmount)
        : '',
      retiredAmount: isSet(object.retiredAmount)
        ? String(object.retiredAmount)
        : '',
    };
  },

  toJSON(message: EventMint): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.tradableAmount !== undefined &&
      (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined &&
      (obj.retiredAmount = message.retiredAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMint>, I>>(
    object: I,
  ): EventMint {
    const message = createBaseEventMint();
    message.batchDenom = object.batchDenom ?? '';
    message.tradableAmount = object.tradableAmount ?? '';
    message.retiredAmount = object.retiredAmount ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventMint.$type, EventMint);

function createBaseEventMintBatchCredits(): EventMintBatchCredits {
  return {
    $type: 'regen.ecocredit.v1.EventMintBatchCredits',
    batchDenom: '',
    originTx: undefined,
  };
}

export const EventMintBatchCredits = {
  $type: 'regen.ecocredit.v1.EventMintBatchCredits' as const,

  encode(
    message: EventMintBatchCredits,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.batchDenom !== '') {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.originTx !== undefined) {
      OriginTx.encode(message.originTx, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EventMintBatchCredits {
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
      $type: EventMintBatchCredits.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      originTx: isSet(object.originTx)
        ? OriginTx.fromJSON(object.originTx)
        : undefined,
    };
  },

  toJSON(message: EventMintBatchCredits): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.originTx !== undefined &&
      (obj.originTx = message.originTx
        ? OriginTx.toJSON(message.originTx)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMintBatchCredits>, I>>(
    object: I,
  ): EventMintBatchCredits {
    const message = createBaseEventMintBatchCredits();
    message.batchDenom = object.batchDenom ?? '';
    message.originTx =
      object.originTx !== undefined && object.originTx !== null
        ? OriginTx.fromPartial(object.originTx)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(EventMintBatchCredits.$type, EventMintBatchCredits);

function createBaseEventTransfer(): EventTransfer {
  return {
    $type: 'regen.ecocredit.v1.EventTransfer',
    sender: '',
    recipient: '',
    batchDenom: '',
    tradableAmount: '',
    retiredAmount: '',
  };
}

export const EventTransfer = {
  $type: 'regen.ecocredit.v1.EventTransfer' as const,

  encode(
    message: EventTransfer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== '') {
      writer.uint32(18).string(message.recipient);
    }
    if (message.batchDenom !== '') {
      writer.uint32(26).string(message.batchDenom);
    }
    if (message.tradableAmount !== '') {
      writer.uint32(34).string(message.tradableAmount);
    }
    if (message.retiredAmount !== '') {
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
      $type: EventTransfer.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      recipient: isSet(object.recipient) ? String(object.recipient) : '',
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      tradableAmount: isSet(object.tradableAmount)
        ? String(object.tradableAmount)
        : '',
      retiredAmount: isSet(object.retiredAmount)
        ? String(object.retiredAmount)
        : '',
    };
  },

  toJSON(message: EventTransfer): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.tradableAmount !== undefined &&
      (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined &&
      (obj.retiredAmount = message.retiredAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventTransfer>, I>>(
    object: I,
  ): EventTransfer {
    const message = createBaseEventTransfer();
    message.sender = object.sender ?? '';
    message.recipient = object.recipient ?? '';
    message.batchDenom = object.batchDenom ?? '';
    message.tradableAmount = object.tradableAmount ?? '';
    message.retiredAmount = object.retiredAmount ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventTransfer.$type, EventTransfer);

function createBaseEventRetire(): EventRetire {
  return {
    $type: 'regen.ecocredit.v1.EventRetire',
    owner: '',
    batchDenom: '',
    amount: '',
    jurisdiction: '',
  };
}

export const EventRetire = {
  $type: 'regen.ecocredit.v1.EventRetire' as const,

  encode(
    message: EventRetire,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner);
    }
    if (message.batchDenom !== '') {
      writer.uint32(18).string(message.batchDenom);
    }
    if (message.amount !== '') {
      writer.uint32(26).string(message.amount);
    }
    if (message.jurisdiction !== '') {
      writer.uint32(34).string(message.jurisdiction);
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRetire {
    return {
      $type: EventRetire.$type,
      owner: isSet(object.owner) ? String(object.owner) : '',
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      amount: isSet(object.amount) ? String(object.amount) : '',
      jurisdiction: isSet(object.jurisdiction)
        ? String(object.jurisdiction)
        : '',
    };
  },

  toJSON(message: EventRetire): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.jurisdiction !== undefined &&
      (obj.jurisdiction = message.jurisdiction);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRetire>, I>>(
    object: I,
  ): EventRetire {
    const message = createBaseEventRetire();
    message.owner = object.owner ?? '';
    message.batchDenom = object.batchDenom ?? '';
    message.amount = object.amount ?? '';
    message.jurisdiction = object.jurisdiction ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventRetire.$type, EventRetire);

function createBaseEventCancel(): EventCancel {
  return {
    $type: 'regen.ecocredit.v1.EventCancel',
    owner: '',
    batchDenom: '',
    amount: '',
    reason: '',
  };
}

export const EventCancel = {
  $type: 'regen.ecocredit.v1.EventCancel' as const,

  encode(
    message: EventCancel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner);
    }
    if (message.batchDenom !== '') {
      writer.uint32(18).string(message.batchDenom);
    }
    if (message.amount !== '') {
      writer.uint32(26).string(message.amount);
    }
    if (message.reason !== '') {
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
      $type: EventCancel.$type,
      owner: isSet(object.owner) ? String(object.owner) : '',
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      amount: isSet(object.amount) ? String(object.amount) : '',
      reason: isSet(object.reason) ? String(object.reason) : '',
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

  fromPartial<I extends Exact<DeepPartial<EventCancel>, I>>(
    object: I,
  ): EventCancel {
    const message = createBaseEventCancel();
    message.owner = object.owner ?? '';
    message.batchDenom = object.batchDenom ?? '';
    message.amount = object.amount ?? '';
    message.reason = object.reason ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventCancel.$type, EventCancel);

function createBaseEventUpdateClassAdmin(): EventUpdateClassAdmin {
  return { $type: 'regen.ecocredit.v1.EventUpdateClassAdmin', classId: '' };
}

export const EventUpdateClassAdmin = {
  $type: 'regen.ecocredit.v1.EventUpdateClassAdmin' as const,

  encode(
    message: EventUpdateClassAdmin,
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
  ): EventUpdateClassAdmin {
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
      $type: EventUpdateClassAdmin.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
    };
  },

  toJSON(message: EventUpdateClassAdmin): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateClassAdmin>, I>>(
    object: I,
  ): EventUpdateClassAdmin {
    const message = createBaseEventUpdateClassAdmin();
    message.classId = object.classId ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventUpdateClassAdmin.$type, EventUpdateClassAdmin);

function createBaseEventUpdateClassIssuers(): EventUpdateClassIssuers {
  return { $type: 'regen.ecocredit.v1.EventUpdateClassIssuers', classId: '' };
}

export const EventUpdateClassIssuers = {
  $type: 'regen.ecocredit.v1.EventUpdateClassIssuers' as const,

  encode(
    message: EventUpdateClassIssuers,
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
  ): EventUpdateClassIssuers {
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
      $type: EventUpdateClassIssuers.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
    };
  },

  toJSON(message: EventUpdateClassIssuers): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateClassIssuers>, I>>(
    object: I,
  ): EventUpdateClassIssuers {
    const message = createBaseEventUpdateClassIssuers();
    message.classId = object.classId ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventUpdateClassIssuers.$type, EventUpdateClassIssuers);

function createBaseEventUpdateClassMetadata(): EventUpdateClassMetadata {
  return { $type: 'regen.ecocredit.v1.EventUpdateClassMetadata', classId: '' };
}

export const EventUpdateClassMetadata = {
  $type: 'regen.ecocredit.v1.EventUpdateClassMetadata' as const,

  encode(
    message: EventUpdateClassMetadata,
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
  ): EventUpdateClassMetadata {
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
      $type: EventUpdateClassMetadata.$type,
      classId: isSet(object.classId) ? String(object.classId) : '',
    };
  },

  toJSON(message: EventUpdateClassMetadata): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateClassMetadata>, I>>(
    object: I,
  ): EventUpdateClassMetadata {
    const message = createBaseEventUpdateClassMetadata();
    message.classId = object.classId ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  EventUpdateClassMetadata.$type,
  EventUpdateClassMetadata,
);

function createBaseEventUpdateProjectAdmin(): EventUpdateProjectAdmin {
  return { $type: 'regen.ecocredit.v1.EventUpdateProjectAdmin', projectId: '' };
}

export const EventUpdateProjectAdmin = {
  $type: 'regen.ecocredit.v1.EventUpdateProjectAdmin' as const,

  encode(
    message: EventUpdateProjectAdmin,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.projectId !== '') {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EventUpdateProjectAdmin {
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
      $type: EventUpdateProjectAdmin.$type,
      projectId: isSet(object.projectId) ? String(object.projectId) : '',
    };
  },

  toJSON(message: EventUpdateProjectAdmin): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateProjectAdmin>, I>>(
    object: I,
  ): EventUpdateProjectAdmin {
    const message = createBaseEventUpdateProjectAdmin();
    message.projectId = object.projectId ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventUpdateProjectAdmin.$type, EventUpdateProjectAdmin);

function createBaseEventUpdateProjectMetadata(): EventUpdateProjectMetadata {
  return {
    $type: 'regen.ecocredit.v1.EventUpdateProjectMetadata',
    projectId: '',
  };
}

export const EventUpdateProjectMetadata = {
  $type: 'regen.ecocredit.v1.EventUpdateProjectMetadata' as const,

  encode(
    message: EventUpdateProjectMetadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.projectId !== '') {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EventUpdateProjectMetadata {
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
      $type: EventUpdateProjectMetadata.$type,
      projectId: isSet(object.projectId) ? String(object.projectId) : '',
    };
  },

  toJSON(message: EventUpdateProjectMetadata): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateProjectMetadata>, I>>(
    object: I,
  ): EventUpdateProjectMetadata {
    const message = createBaseEventUpdateProjectMetadata();
    message.projectId = object.projectId ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  EventUpdateProjectMetadata.$type,
  EventUpdateProjectMetadata,
);

function createBaseEventSealBatch(): EventSealBatch {
  return { $type: 'regen.ecocredit.v1.EventSealBatch', batchDenom: '' };
}

export const EventSealBatch = {
  $type: 'regen.ecocredit.v1.EventSealBatch' as const,

  encode(
    message: EventSealBatch,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.batchDenom !== '') {
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
      $type: EventSealBatch.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
    };
  },

  toJSON(message: EventSealBatch): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSealBatch>, I>>(
    object: I,
  ): EventSealBatch {
    const message = createBaseEventSealBatch();
    message.batchDenom = object.batchDenom ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventSealBatch.$type, EventSealBatch);

function createBaseEventAddCreditType(): EventAddCreditType {
  return { $type: 'regen.ecocredit.v1.EventAddCreditType', abbreviation: '' };
}

export const EventAddCreditType = {
  $type: 'regen.ecocredit.v1.EventAddCreditType' as const,

  encode(
    message: EventAddCreditType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.abbreviation !== '') {
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
      $type: EventAddCreditType.$type,
      abbreviation: isSet(object.abbreviation)
        ? String(object.abbreviation)
        : '',
    };
  },

  toJSON(message: EventAddCreditType): unknown {
    const obj: any = {};
    message.abbreviation !== undefined &&
      (obj.abbreviation = message.abbreviation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventAddCreditType>, I>>(
    object: I,
  ): EventAddCreditType {
    const message = createBaseEventAddCreditType();
    message.abbreviation = object.abbreviation ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventAddCreditType.$type, EventAddCreditType);

function createBaseEventBridge(): EventBridge {
  return {
    $type: 'regen.ecocredit.v1.EventBridge',
    target: '',
    recipient: '',
    contract: '',
    amount: '',
  };
}

export const EventBridge = {
  $type: 'regen.ecocredit.v1.EventBridge' as const,

  encode(
    message: EventBridge,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.target !== '') {
      writer.uint32(10).string(message.target);
    }
    if (message.recipient !== '') {
      writer.uint32(18).string(message.recipient);
    }
    if (message.contract !== '') {
      writer.uint32(26).string(message.contract);
    }
    if (message.amount !== '') {
      writer.uint32(34).string(message.amount);
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBridge {
    return {
      $type: EventBridge.$type,
      target: isSet(object.target) ? String(object.target) : '',
      recipient: isSet(object.recipient) ? String(object.recipient) : '',
      contract: isSet(object.contract) ? String(object.contract) : '',
      amount: isSet(object.amount) ? String(object.amount) : '',
    };
  },

  toJSON(message: EventBridge): unknown {
    const obj: any = {};
    message.target !== undefined && (obj.target = message.target);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.contract !== undefined && (obj.contract = message.contract);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBridge>, I>>(
    object: I,
  ): EventBridge {
    const message = createBaseEventBridge();
    message.target = object.target ?? '';
    message.recipient = object.recipient ?? '';
    message.contract = object.contract ?? '';
    message.amount = object.amount ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventBridge.$type, EventBridge);

function createBaseEventBridgeReceive(): EventBridgeReceive {
  return {
    $type: 'regen.ecocredit.v1.EventBridgeReceive',
    projectId: '',
    batchDenom: '',
  };
}

export const EventBridgeReceive = {
  $type: 'regen.ecocredit.v1.EventBridgeReceive' as const,

  encode(
    message: EventBridgeReceive,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.projectId !== '') {
      writer.uint32(10).string(message.projectId);
    }
    if (message.batchDenom !== '') {
      writer.uint32(18).string(message.batchDenom);
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBridgeReceive {
    return {
      $type: EventBridgeReceive.$type,
      projectId: isSet(object.projectId) ? String(object.projectId) : '',
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
    };
  },

  toJSON(message: EventBridgeReceive): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBridgeReceive>, I>>(
    object: I,
  ): EventBridgeReceive {
    const message = createBaseEventBridgeReceive();
    message.projectId = object.projectId ?? '';
    message.batchDenom = object.batchDenom ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventBridgeReceive.$type, EventBridgeReceive);

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
