/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'regen.ecocredit.v1alpha1';

/** EventCreateClass is an event emitted when a credit class is created. */
export interface EventCreateClass {
  $type: 'regen.ecocredit.v1alpha1.EventCreateClass';
  /** class_id is the unique ID of credit class. */
  classId: string;
  /** designer is the designer of the credit class. */
  designer: string;
}

/** EventCreateBatch is an event emitted when a credit batch is created. */
export interface EventCreateBatch {
  $type: 'regen.ecocredit.v1alpha1.EventCreateBatch';
  /** class_id is the unique ID of credit class. */
  classId: string;
  /** batch_denom is the unique ID of credit batch. */
  batchDenom: string;
  /** issuer is the account address of the issuer of the credit batch. */
  issuer: string;
  /** total_units is the total number of units in the credit batch. */
  totalUnits: string;
}

/**
 * EventReceive is an event emitted when credits are received either upon
 * creation of a new batch or upon transfer. Each batch_denom created or
 * transferred will result in a separate EventReceive for easy indexing.
 */
export interface EventReceive {
  $type: 'regen.ecocredit.v1alpha1.EventReceive';
  /**
   * sender is the sender of the credits in the case that this event is the result of a transfer.
   * It will not be set when credits are received at initial issuance.
   */
  sender: string;
  /** recipient is the recipient of the credits */
  recipient: string;
  /** batch_denom is the unique ID of credit batch. */
  batchDenom: string;
  /** units is the decimal number of both tradable and retired credits received. */
  units: string;
}

/**
 * EventRetire is an event emitted when credits are retired. An separate event is emitted
 * for each batch_denom in the case where credits from multiple batches have been retired at once
 * for easy indexing.
 */
export interface EventRetire {
  $type: 'regen.ecocredit.v1alpha1.EventRetire';
  /**
   * retirer is the account which has done the "retiring". This will be the account receiving credits in
   * the case that credits were retired upon issuance using Msg/CreateBatch or retired upon transfer
   * using Msg/Send.
   */
  retirer: string;
  /** batch_denom is the unique ID of credit batch. */
  batchDenom: string;
  /** units is the decimal number of credits that have been retired. */
  units: string;
}

function createBaseEventCreateClass(): EventCreateClass {
  return {
    $type: 'regen.ecocredit.v1alpha1.EventCreateClass',
    classId: '',
    designer: '',
  };
}

export const EventCreateClass = {
  $type: 'regen.ecocredit.v1alpha1.EventCreateClass' as const,

  encode(
    message: EventCreateClass,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.classId !== '') {
      writer.uint32(10).string(message.classId);
    }
    if (message.designer !== '') {
      writer.uint32(18).string(message.designer);
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
        case 2:
          message.designer = reader.string();
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
      designer: isSet(object.designer) ? String(object.designer) : '',
    };
  },

  toJSON(message: EventCreateClass): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.designer !== undefined && (obj.designer = message.designer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateClass>, I>>(
    object: I,
  ): EventCreateClass {
    const message = createBaseEventCreateClass();
    message.classId = object.classId ?? '';
    message.designer = object.designer ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventCreateClass.$type, EventCreateClass);

function createBaseEventCreateBatch(): EventCreateBatch {
  return {
    $type: 'regen.ecocredit.v1alpha1.EventCreateBatch',
    classId: '',
    batchDenom: '',
    issuer: '',
    totalUnits: '',
  };
}

export const EventCreateBatch = {
  $type: 'regen.ecocredit.v1alpha1.EventCreateBatch' as const,

  encode(
    message: EventCreateBatch,
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
    if (message.totalUnits !== '') {
      writer.uint32(34).string(message.totalUnits);
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
          message.classId = reader.string();
          break;
        case 2:
          message.batchDenom = reader.string();
          break;
        case 3:
          message.issuer = reader.string();
          break;
        case 4:
          message.totalUnits = reader.string();
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
      classId: isSet(object.classId) ? String(object.classId) : '',
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      issuer: isSet(object.issuer) ? String(object.issuer) : '',
      totalUnits: isSet(object.totalUnits) ? String(object.totalUnits) : '',
    };
  },

  toJSON(message: EventCreateBatch): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.totalUnits !== undefined && (obj.totalUnits = message.totalUnits);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateBatch>, I>>(
    object: I,
  ): EventCreateBatch {
    const message = createBaseEventCreateBatch();
    message.classId = object.classId ?? '';
    message.batchDenom = object.batchDenom ?? '';
    message.issuer = object.issuer ?? '';
    message.totalUnits = object.totalUnits ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventCreateBatch.$type, EventCreateBatch);

function createBaseEventReceive(): EventReceive {
  return {
    $type: 'regen.ecocredit.v1alpha1.EventReceive',
    sender: '',
    recipient: '',
    batchDenom: '',
    units: '',
  };
}

export const EventReceive = {
  $type: 'regen.ecocredit.v1alpha1.EventReceive' as const,

  encode(
    message: EventReceive,
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
    if (message.units !== '') {
      writer.uint32(34).string(message.units);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventReceive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventReceive();
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
          message.units = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventReceive {
    return {
      $type: EventReceive.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      recipient: isSet(object.recipient) ? String(object.recipient) : '',
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      units: isSet(object.units) ? String(object.units) : '',
    };
  },

  toJSON(message: EventReceive): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.units !== undefined && (obj.units = message.units);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventReceive>, I>>(
    object: I,
  ): EventReceive {
    const message = createBaseEventReceive();
    message.sender = object.sender ?? '';
    message.recipient = object.recipient ?? '';
    message.batchDenom = object.batchDenom ?? '';
    message.units = object.units ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventReceive.$type, EventReceive);

function createBaseEventRetire(): EventRetire {
  return {
    $type: 'regen.ecocredit.v1alpha1.EventRetire',
    retirer: '',
    batchDenom: '',
    units: '',
  };
}

export const EventRetire = {
  $type: 'regen.ecocredit.v1alpha1.EventRetire' as const,

  encode(
    message: EventRetire,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.retirer !== '') {
      writer.uint32(10).string(message.retirer);
    }
    if (message.batchDenom !== '') {
      writer.uint32(18).string(message.batchDenom);
    }
    if (message.units !== '') {
      writer.uint32(26).string(message.units);
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
          message.retirer = reader.string();
          break;
        case 2:
          message.batchDenom = reader.string();
          break;
        case 3:
          message.units = reader.string();
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
      retirer: isSet(object.retirer) ? String(object.retirer) : '',
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      units: isSet(object.units) ? String(object.units) : '',
    };
  },

  toJSON(message: EventRetire): unknown {
    const obj: any = {};
    message.retirer !== undefined && (obj.retirer = message.retirer);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.units !== undefined && (obj.units = message.units);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRetire>, I>>(
    object: I,
  ): EventRetire {
    const message = createBaseEventRetire();
    message.retirer = object.retirer ?? '';
    message.batchDenom = object.batchDenom ?? '';
    message.units = object.units ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventRetire.$type, EventRetire);

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
