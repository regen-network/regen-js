/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'regen.ecocredit.v1alpha1';

/** MsgCreateClassRequest is the Msg/CreateClass request type. */
export interface MsgCreateClassRequest {
  $type: 'regen.ecocredit.v1alpha1.MsgCreateClassRequest';
  /**
   * designer is the address of the account which designed the credit class. The designer has special permissions
   * to change the list of issuers and perform other administrative operations.
   */
  designer: string;
  /** issuers are the account addresses of the approved issuers. */
  issuers: string[];
  /** metadata is any arbitrary metadata to attached to the credit class. */
  metadata: Uint8Array;
}

/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponse {
  $type: 'regen.ecocredit.v1alpha1.MsgCreateClassResponse';
  /** class_id is the unique ID of the newly created credit class. */
  classId: string;
}

/** MsgCreateBatchRequest is the Msg/CreateBatch request type. */
export interface MsgCreateBatchRequest {
  $type: 'regen.ecocredit.v1alpha1.MsgCreateBatchRequest';
  /** issuer is the address of the batch issuer. */
  issuer: string;
  /** class_id is the unique ID of the class. */
  classId: string;
  /** issuance are the credits issued in the batch. */
  issuance: MsgCreateBatchRequest_BatchIssuance[];
  /** metadata is any arbitrary metadata to attached to the credit batch. */
  metadata: Uint8Array;
}

/** BatchIssuance represents the issuance of some credits in a batch to a single recipient. */
export interface MsgCreateBatchRequest_BatchIssuance {
  $type: 'regen.ecocredit.v1alpha1.MsgCreateBatchRequest.BatchIssuance';
  /** recipient is the account of the recipient. */
  recipient: string;
  /**
   * tradable_units are the units of credits in this issuance that can be traded by this recipient.
   * Decimal values are acceptable.
   */
  tradableUnits: string;
  /**
   * retired_units are the units of credits in this issuance that are effectively retired by the issuer on receipt.
   * Decimal values are acceptable.
   */
  retiredUnits: string;
}

/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponse {
  $type: 'regen.ecocredit.v1alpha1.MsgCreateBatchResponse';
  /** batch_denom is the unique denomination ID of the newly created batch. */
  batchDenom: string;
}

/** MsgSendRequest is the Msg/Send request type. */
export interface MsgSendRequest {
  $type: 'regen.ecocredit.v1alpha1.MsgSendRequest';
  /** sender is the address of the account sending credits. */
  sender: string;
  /** sender is the address of the account receiving credits. */
  recipient: string;
  /** credits are the credits being sent. */
  credits: MsgSendRequest_SendUnits[];
}

/** SendUnits are the tradable and retired units of a credit batch to send. */
export interface MsgSendRequest_SendUnits {
  $type: 'regen.ecocredit.v1alpha1.MsgSendRequest.SendUnits';
  /** batch_denom is the unique ID of the credit batch. */
  batchDenom: string;
  /**
   * tradable_units are the units of credits in this issuance that can be traded by this recipient.
   * Decimal values are acceptable within the precision returned by Query/Precision.
   */
  tradableUnits: string;
  /**
   * retired_units are the units of credits in this issuance that are effectively retired by the issuer on receipt.
   * Decimal values are acceptable within the precision returned by Query/Precision.
   */
  retiredUnits: string;
}

/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponse {
  $type: 'regen.ecocredit.v1alpha1.MsgSendResponse';
}

/** MsgRetireRequest is the Msg/Retire request type. */
export interface MsgRetireRequest {
  $type: 'regen.ecocredit.v1alpha1.MsgRetireRequest';
  /** holder is the credit holder address. */
  holder: string;
  /** credits are the credits being retired. */
  credits: MsgRetireRequest_RetireUnits[];
}

/** RetireUnits are the units of the batch being retired. */
export interface MsgRetireRequest_RetireUnits {
  $type: 'regen.ecocredit.v1alpha1.MsgRetireRequest.RetireUnits';
  /** batch_denom is the unique ID of the credit batch. */
  batchDenom: string;
  /**
   * retired_units are the units of credits being retired.
   * Decimal values are acceptable within the precision returned by Query/Precision.
   */
  units: string;
}

/** MsgRetireRequest is the Msg/Retire response type. */
export interface MsgRetireResponse {
  $type: 'regen.ecocredit.v1alpha1.MsgRetireResponse';
}

/** MsgRetireRequest is the Msg/SetPrecision request type. */
export interface MsgSetPrecisionRequest {
  $type: 'regen.ecocredit.v1alpha1.MsgSetPrecisionRequest';
  /** issuer is the address of the batch issuer. */
  issuer: string;
  /** batch_denom is the unique ID of the credit batch. */
  batchDenom: string;
  /**
   * max_decimal_places is the new maximum number of decimal places that can be used to represent some quantity of
   * credit units. It is an experimental feature to concretely explore an idea proposed in https://github.com/cosmos/cosmos-sdk/issues/7113.
   */
  maxDecimalPlaces: number;
}

/** MsgRetireRequest is the Msg/SetPrecision response type. */
export interface MsgSetPrecisionResponse {
  $type: 'regen.ecocredit.v1alpha1.MsgSetPrecisionResponse';
}

function createBaseMsgCreateClassRequest(): MsgCreateClassRequest {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgCreateClassRequest',
    designer: '',
    issuers: [],
    metadata: new Uint8Array(),
  };
}

export const MsgCreateClassRequest = {
  $type: 'regen.ecocredit.v1alpha1.MsgCreateClassRequest' as const,

  encode(
    message: MsgCreateClassRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.designer !== '') {
      writer.uint32(10).string(message.designer);
    }
    for (const v of message.issuers) {
      writer.uint32(18).string(v!);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateClassRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClassRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.designer = reader.string();
          break;
        case 2:
          message.issuers.push(reader.string());
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

  fromJSON(object: any): MsgCreateClassRequest {
    return {
      $type: MsgCreateClassRequest.$type,
      designer: isSet(object.designer) ? String(object.designer) : '',
      issuers: Array.isArray(object?.issuers)
        ? object.issuers.map((e: any) => String(e))
        : [],
      metadata: isSet(object.metadata)
        ? bytesFromBase64(object.metadata)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgCreateClassRequest): unknown {
    const obj: any = {};
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

  fromPartial<I extends Exact<DeepPartial<MsgCreateClassRequest>, I>>(
    object: I,
  ): MsgCreateClassRequest {
    const message = createBaseMsgCreateClassRequest();
    message.designer = object.designer ?? '';
    message.issuers = object.issuers?.map(e => e) || [];
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(MsgCreateClassRequest.$type, MsgCreateClassRequest);

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

function createBaseMsgCreateBatchRequest(): MsgCreateBatchRequest {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgCreateBatchRequest',
    issuer: '',
    classId: '',
    issuance: [],
    metadata: new Uint8Array(),
  };
}

export const MsgCreateBatchRequest = {
  $type: 'regen.ecocredit.v1alpha1.MsgCreateBatchRequest' as const,

  encode(
    message: MsgCreateBatchRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.issuer !== '') {
      writer.uint32(10).string(message.issuer);
    }
    if (message.classId !== '') {
      writer.uint32(18).string(message.classId);
    }
    for (const v of message.issuance) {
      MsgCreateBatchRequest_BatchIssuance.encode(
        v!,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.metadata.length !== 0) {
      writer.uint32(34).bytes(message.metadata);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateBatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBatchRequest();
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
            MsgCreateBatchRequest_BatchIssuance.decode(reader, reader.uint32()),
          );
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

  fromJSON(object: any): MsgCreateBatchRequest {
    return {
      $type: MsgCreateBatchRequest.$type,
      issuer: isSet(object.issuer) ? String(object.issuer) : '',
      classId: isSet(object.classId) ? String(object.classId) : '',
      issuance: Array.isArray(object?.issuance)
        ? object.issuance.map((e: any) =>
            MsgCreateBatchRequest_BatchIssuance.fromJSON(e),
          )
        : [],
      metadata: isSet(object.metadata)
        ? bytesFromBase64(object.metadata)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgCreateBatchRequest): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.classId !== undefined && (obj.classId = message.classId);
    if (message.issuance) {
      obj.issuance = message.issuance.map(e =>
        e ? MsgCreateBatchRequest_BatchIssuance.toJSON(e) : undefined,
      );
    } else {
      obj.issuance = [];
    }
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBatchRequest>, I>>(
    object: I,
  ): MsgCreateBatchRequest {
    const message = createBaseMsgCreateBatchRequest();
    message.issuer = object.issuer ?? '';
    message.classId = object.classId ?? '';
    message.issuance =
      object.issuance?.map(e =>
        MsgCreateBatchRequest_BatchIssuance.fromPartial(e),
      ) || [];
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(MsgCreateBatchRequest.$type, MsgCreateBatchRequest);

function createBaseMsgCreateBatchRequest_BatchIssuance(): MsgCreateBatchRequest_BatchIssuance {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgCreateBatchRequest.BatchIssuance',
    recipient: '',
    tradableUnits: '',
    retiredUnits: '',
  };
}

export const MsgCreateBatchRequest_BatchIssuance = {
  $type:
    'regen.ecocredit.v1alpha1.MsgCreateBatchRequest.BatchIssuance' as const,

  encode(
    message: MsgCreateBatchRequest_BatchIssuance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.recipient !== '') {
      writer.uint32(10).string(message.recipient);
    }
    if (message.tradableUnits !== '') {
      writer.uint32(18).string(message.tradableUnits);
    }
    if (message.retiredUnits !== '') {
      writer.uint32(26).string(message.retiredUnits);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateBatchRequest_BatchIssuance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBatchRequest_BatchIssuance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.tradableUnits = reader.string();
          break;
        case 3:
          message.retiredUnits = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBatchRequest_BatchIssuance {
    return {
      $type: MsgCreateBatchRequest_BatchIssuance.$type,
      recipient: isSet(object.recipient) ? String(object.recipient) : '',
      tradableUnits: isSet(object.tradableUnits)
        ? String(object.tradableUnits)
        : '',
      retiredUnits: isSet(object.retiredUnits)
        ? String(object.retiredUnits)
        : '',
    };
  },

  toJSON(message: MsgCreateBatchRequest_BatchIssuance): unknown {
    const obj: any = {};
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.tradableUnits !== undefined &&
      (obj.tradableUnits = message.tradableUnits);
    message.retiredUnits !== undefined &&
      (obj.retiredUnits = message.retiredUnits);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgCreateBatchRequest_BatchIssuance>, I>,
  >(object: I): MsgCreateBatchRequest_BatchIssuance {
    const message = createBaseMsgCreateBatchRequest_BatchIssuance();
    message.recipient = object.recipient ?? '';
    message.tradableUnits = object.tradableUnits ?? '';
    message.retiredUnits = object.retiredUnits ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  MsgCreateBatchRequest_BatchIssuance.$type,
  MsgCreateBatchRequest_BatchIssuance,
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

function createBaseMsgSendRequest(): MsgSendRequest {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgSendRequest',
    sender: '',
    recipient: '',
    credits: [],
  };
}

export const MsgSendRequest = {
  $type: 'regen.ecocredit.v1alpha1.MsgSendRequest' as const,

  encode(
    message: MsgSendRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== '') {
      writer.uint32(18).string(message.recipient);
    }
    for (const v of message.credits) {
      MsgSendRequest_SendUnits.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendRequest();
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
            MsgSendRequest_SendUnits.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendRequest {
    return {
      $type: MsgSendRequest.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      recipient: isSet(object.recipient) ? String(object.recipient) : '',
      credits: Array.isArray(object?.credits)
        ? object.credits.map((e: any) => MsgSendRequest_SendUnits.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgSendRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.credits) {
      obj.credits = message.credits.map(e =>
        e ? MsgSendRequest_SendUnits.toJSON(e) : undefined,
      );
    } else {
      obj.credits = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendRequest>, I>>(
    object: I,
  ): MsgSendRequest {
    const message = createBaseMsgSendRequest();
    message.sender = object.sender ?? '';
    message.recipient = object.recipient ?? '';
    message.credits =
      object.credits?.map(e => MsgSendRequest_SendUnits.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgSendRequest.$type, MsgSendRequest);

function createBaseMsgSendRequest_SendUnits(): MsgSendRequest_SendUnits {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgSendRequest.SendUnits',
    batchDenom: '',
    tradableUnits: '',
    retiredUnits: '',
  };
}

export const MsgSendRequest_SendUnits = {
  $type: 'regen.ecocredit.v1alpha1.MsgSendRequest.SendUnits' as const,

  encode(
    message: MsgSendRequest_SendUnits,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.batchDenom !== '') {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.tradableUnits !== '') {
      writer.uint32(18).string(message.tradableUnits);
    }
    if (message.retiredUnits !== '') {
      writer.uint32(26).string(message.retiredUnits);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSendRequest_SendUnits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendRequest_SendUnits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        case 2:
          message.tradableUnits = reader.string();
          break;
        case 3:
          message.retiredUnits = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendRequest_SendUnits {
    return {
      $type: MsgSendRequest_SendUnits.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      tradableUnits: isSet(object.tradableUnits)
        ? String(object.tradableUnits)
        : '',
      retiredUnits: isSet(object.retiredUnits)
        ? String(object.retiredUnits)
        : '',
    };
  },

  toJSON(message: MsgSendRequest_SendUnits): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.tradableUnits !== undefined &&
      (obj.tradableUnits = message.tradableUnits);
    message.retiredUnits !== undefined &&
      (obj.retiredUnits = message.retiredUnits);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendRequest_SendUnits>, I>>(
    object: I,
  ): MsgSendRequest_SendUnits {
    const message = createBaseMsgSendRequest_SendUnits();
    message.batchDenom = object.batchDenom ?? '';
    message.tradableUnits = object.tradableUnits ?? '';
    message.retiredUnits = object.retiredUnits ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  MsgSendRequest_SendUnits.$type,
  MsgSendRequest_SendUnits,
);

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

function createBaseMsgRetireRequest(): MsgRetireRequest {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgRetireRequest',
    holder: '',
    credits: [],
  };
}

export const MsgRetireRequest = {
  $type: 'regen.ecocredit.v1alpha1.MsgRetireRequest' as const,

  encode(
    message: MsgRetireRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.holder !== '') {
      writer.uint32(10).string(message.holder);
    }
    for (const v of message.credits) {
      MsgRetireRequest_RetireUnits.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetireRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetireRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.holder = reader.string();
          break;
        case 2:
          message.credits.push(
            MsgRetireRequest_RetireUnits.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRetireRequest {
    return {
      $type: MsgRetireRequest.$type,
      holder: isSet(object.holder) ? String(object.holder) : '',
      credits: Array.isArray(object?.credits)
        ? object.credits.map((e: any) =>
            MsgRetireRequest_RetireUnits.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: MsgRetireRequest): unknown {
    const obj: any = {};
    message.holder !== undefined && (obj.holder = message.holder);
    if (message.credits) {
      obj.credits = message.credits.map(e =>
        e ? MsgRetireRequest_RetireUnits.toJSON(e) : undefined,
      );
    } else {
      obj.credits = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRetireRequest>, I>>(
    object: I,
  ): MsgRetireRequest {
    const message = createBaseMsgRetireRequest();
    message.holder = object.holder ?? '';
    message.credits =
      object.credits?.map(e => MsgRetireRequest_RetireUnits.fromPartial(e)) ||
      [];
    return message;
  },
};

messageTypeRegistry.set(MsgRetireRequest.$type, MsgRetireRequest);

function createBaseMsgRetireRequest_RetireUnits(): MsgRetireRequest_RetireUnits {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgRetireRequest.RetireUnits',
    batchDenom: '',
    units: '',
  };
}

export const MsgRetireRequest_RetireUnits = {
  $type: 'regen.ecocredit.v1alpha1.MsgRetireRequest.RetireUnits' as const,

  encode(
    message: MsgRetireRequest_RetireUnits,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.batchDenom !== '') {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.units !== '') {
      writer.uint32(18).string(message.units);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRetireRequest_RetireUnits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRetireRequest_RetireUnits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        case 2:
          message.units = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRetireRequest_RetireUnits {
    return {
      $type: MsgRetireRequest_RetireUnits.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      units: isSet(object.units) ? String(object.units) : '',
    };
  },

  toJSON(message: MsgRetireRequest_RetireUnits): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.units !== undefined && (obj.units = message.units);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRetireRequest_RetireUnits>, I>>(
    object: I,
  ): MsgRetireRequest_RetireUnits {
    const message = createBaseMsgRetireRequest_RetireUnits();
    message.batchDenom = object.batchDenom ?? '';
    message.units = object.units ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  MsgRetireRequest_RetireUnits.$type,
  MsgRetireRequest_RetireUnits,
);

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

function createBaseMsgSetPrecisionRequest(): MsgSetPrecisionRequest {
  return {
    $type: 'regen.ecocredit.v1alpha1.MsgSetPrecisionRequest',
    issuer: '',
    batchDenom: '',
    maxDecimalPlaces: 0,
  };
}

export const MsgSetPrecisionRequest = {
  $type: 'regen.ecocredit.v1alpha1.MsgSetPrecisionRequest' as const,

  encode(
    message: MsgSetPrecisionRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.issuer !== '') {
      writer.uint32(10).string(message.issuer);
    }
    if (message.batchDenom !== '') {
      writer.uint32(18).string(message.batchDenom);
    }
    if (message.maxDecimalPlaces !== 0) {
      writer.uint32(24).uint32(message.maxDecimalPlaces);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSetPrecisionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPrecisionRequest();
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
          message.maxDecimalPlaces = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetPrecisionRequest {
    return {
      $type: MsgSetPrecisionRequest.$type,
      issuer: isSet(object.issuer) ? String(object.issuer) : '',
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      maxDecimalPlaces: isSet(object.maxDecimalPlaces)
        ? Number(object.maxDecimalPlaces)
        : 0,
    };
  },

  toJSON(message: MsgSetPrecisionRequest): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.maxDecimalPlaces !== undefined &&
      (obj.maxDecimalPlaces = Math.round(message.maxDecimalPlaces));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetPrecisionRequest>, I>>(
    object: I,
  ): MsgSetPrecisionRequest {
    const message = createBaseMsgSetPrecisionRequest();
    message.issuer = object.issuer ?? '';
    message.batchDenom = object.batchDenom ?? '';
    message.maxDecimalPlaces = object.maxDecimalPlaces ?? 0;
    return message;
  },
};

messageTypeRegistry.set(MsgSetPrecisionRequest.$type, MsgSetPrecisionRequest);

function createBaseMsgSetPrecisionResponse(): MsgSetPrecisionResponse {
  return { $type: 'regen.ecocredit.v1alpha1.MsgSetPrecisionResponse' };
}

export const MsgSetPrecisionResponse = {
  $type: 'regen.ecocredit.v1alpha1.MsgSetPrecisionResponse' as const,

  encode(
    _: MsgSetPrecisionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSetPrecisionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPrecisionResponse();
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

  fromJSON(_: any): MsgSetPrecisionResponse {
    return {
      $type: MsgSetPrecisionResponse.$type,
    };
  },

  toJSON(_: MsgSetPrecisionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetPrecisionResponse>, I>>(
    _: I,
  ): MsgSetPrecisionResponse {
    const message = createBaseMsgSetPrecisionResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgSetPrecisionResponse.$type, MsgSetPrecisionResponse);

/** Msg is the regen.ecocredit.v1alpha1 Msg service. */
export interface Msg {
  /** CreateClass creates a new credit class with an approved list of issuers and optional metadata. */
  CreateClass(request: MsgCreateClassRequest): Promise<MsgCreateClassResponse>;
  /**
   * CreateBatch creates a new batch of credits for an existing credit class. This will create a new batch denom
   * with a fixed supply. Issued credits can be distributed to recipients in either tradable or retired form.
   */
  CreateBatch(request: MsgCreateBatchRequest): Promise<MsgCreateBatchResponse>;
  /** Send sends tradeable credits from one account to another account. Sent credits can either be tradable or retired on receipt. */
  Send(request: MsgSendRequest): Promise<MsgSendResponse>;
  /** Retire retires a specified number of credits in the holder's account. */
  Retire(request: MsgRetireRequest): Promise<MsgRetireResponse>;
  /**
   * SetPrecision allows an issuer to increase the decimal precision of a credit batch. It is an experimental feature
   * to concretely explore an idea proposed in https://github.com/cosmos/cosmos-sdk/issues/7113. The number of decimal
   * places allowed for a credit batch is determined by the original number of decimal places used with calling CreatBatch.
   * SetPrecision allows the number of allowed decimal places to be increased, effectively making the supply more
   * granular without actually changing any balances. It allows asset issuers to be able to issue an asset without needing
   * to think about how many subdivisions are needed upfront. While it may not be relevant for credits which likely have
   * a fairly stable market value, I wanted to experiment a bit and this serves as a proof of concept for a broader
   * bank redesign where say for instance a coin like the ATOM or XRN could be issued in its own units rather than
   * micro or nano-units. Instead an operation like SetPrecision would allow trading in micro, nano or pico in the future
   * based on market demand. Arbitrary, unbounded precision is not desirable because this can lead to spam attacks (like
   * sending 0.000000000000000000000000000001 coins). This is effectively fixed precision so under the hood it is still
   * basically an integer, but the fixed precision can be increased so its more adaptable long term than just an integer.
   */
  SetPrecision(
    request: MsgSetPrecisionRequest,
  ): Promise<MsgSetPrecisionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateClass = this.CreateClass.bind(this);
    this.CreateBatch = this.CreateBatch.bind(this);
    this.Send = this.Send.bind(this);
    this.Retire = this.Retire.bind(this);
    this.SetPrecision = this.SetPrecision.bind(this);
  }
  CreateClass(request: MsgCreateClassRequest): Promise<MsgCreateClassResponse> {
    const data = MsgCreateClassRequest.encode(request).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Msg',
      'CreateClass',
      data,
    );
    return promise.then(data =>
      MsgCreateClassResponse.decode(new _m0.Reader(data)),
    );
  }

  CreateBatch(request: MsgCreateBatchRequest): Promise<MsgCreateBatchResponse> {
    const data = MsgCreateBatchRequest.encode(request).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Msg',
      'CreateBatch',
      data,
    );
    return promise.then(data =>
      MsgCreateBatchResponse.decode(new _m0.Reader(data)),
    );
  }

  Send(request: MsgSendRequest): Promise<MsgSendResponse> {
    const data = MsgSendRequest.encode(request).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Msg',
      'Send',
      data,
    );
    return promise.then(data => MsgSendResponse.decode(new _m0.Reader(data)));
  }

  Retire(request: MsgRetireRequest): Promise<MsgRetireResponse> {
    const data = MsgRetireRequest.encode(request).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Msg',
      'Retire',
      data,
    );
    return promise.then(data => MsgRetireResponse.decode(new _m0.Reader(data)));
  }

  SetPrecision(
    request: MsgSetPrecisionRequest,
  ): Promise<MsgSetPrecisionResponse> {
    const data = MsgSetPrecisionRequest.encode(request).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.v1alpha1.Msg',
      'SetPrecision',
      data,
    );
    return promise.then(data =>
      MsgSetPrecisionResponse.decode(new _m0.Reader(data)),
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
