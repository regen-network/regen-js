/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  EventCreateClass is an event emitted when a credit class is created.
 */
export interface EventCreateClass {
  /**
   *  class_id is the unique ID of credit class.
   */
  classId: string;
  /**
   *  designer is the designer of the credit class.
   */
  designer: string;
}

/**
 *  EventCreateBatch is an event emitted when a credit batch is created.
 */
export interface EventCreateBatch {
  /**
   *  class_id is the unique ID of credit class.
   */
  classId: string;
  /**
   *  batch_denom is the unique ID of credit batch.
   */
  batchDenom: string;
  /**
   *  issuer is the account address of the issuer of the credit batch.
   */
  issuer: string;
  /**
   *  total_units is the total number of units in the credit batch.
   */
  totalUnits: string;
}

/**
 *  EventReceive is an event emitted when credits are received either upon
 *  creation of a new batch or upon transfer. Each batch_denom created or
 *  transferred will result in a separate EventReceive for easy indexing.
 */
export interface EventReceive {
  /**
   *  sender is the sender of the credits in the case that this event is the result of a transfer.
   *  It will not be set when credits are received at initial issuance.
   */
  sender: string;
  /**
   *  recipient is the recipient of the credits
   */
  recipient: string;
  /**
   *  batch_denom is the unique ID of credit batch.
   */
  batchDenom: string;
  /**
   *  units is the decimal number of both tradable and retired credits received.
   */
  units: string;
}

/**
 *  EventRetire is an event emitted when credits are retired. An separate event is emitted
 *  for each batch_denom in the case where credits from multiple batches have been retired at once
 *  for easy indexing.
 */
export interface EventRetire {
  /**
   *  retirer is the account which has done the "retiring". This will be the account receiving credits in
   *  the case that credits were retired upon issuance using Msg/CreateBatch or retired upon transfer
   *  using Msg/Send.
   */
  retirer: string;
  /**
   *  batch_denom is the unique ID of credit batch.
   */
  batchDenom: string;
  /**
   *  units is the decimal number of credits that have been retired.
   */
  units: string;
}

const baseEventCreateClass: object = {
  classId: "",
  designer: "",
};

const baseEventCreateBatch: object = {
  classId: "",
  batchDenom: "",
  issuer: "",
  totalUnits: "",
};

const baseEventReceive: object = {
  sender: "",
  recipient: "",
  batchDenom: "",
  units: "",
};

const baseEventRetire: object = {
  retirer: "",
  batchDenom: "",
  units: "",
};

export const protobufPackage = 'regen.ecocredit.v1alpha1'

export const EventCreateClass = {
  encode(message: EventCreateClass, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.classId);
    writer.uint32(18).string(message.designer);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): EventCreateClass {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventCreateClass } as EventCreateClass;
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
    const message = { ...baseEventCreateClass } as EventCreateClass;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.designer !== undefined && object.designer !== null) {
      message.designer = String(object.designer);
    } else {
      message.designer = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCreateClass>): EventCreateClass {
    const message = { ...baseEventCreateClass } as EventCreateClass;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.designer !== undefined && object.designer !== null) {
      message.designer = object.designer;
    } else {
      message.designer = "";
    }
    return message;
  },
  toJSON(message: EventCreateClass): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.designer !== undefined && (obj.designer = message.designer);
    return obj;
  },
};

export const EventCreateBatch = {
  encode(message: EventCreateBatch, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.classId);
    writer.uint32(18).string(message.batchDenom);
    writer.uint32(26).string(message.issuer);
    writer.uint32(34).string(message.totalUnits);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): EventCreateBatch {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventCreateBatch } as EventCreateBatch;
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
    const message = { ...baseEventCreateBatch } as EventCreateBatch;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = String(object.batchDenom);
    } else {
      message.batchDenom = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.totalUnits !== undefined && object.totalUnits !== null) {
      message.totalUnits = String(object.totalUnits);
    } else {
      message.totalUnits = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCreateBatch>): EventCreateBatch {
    const message = { ...baseEventCreateBatch } as EventCreateBatch;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = object.batchDenom;
    } else {
      message.batchDenom = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.totalUnits !== undefined && object.totalUnits !== null) {
      message.totalUnits = object.totalUnits;
    } else {
      message.totalUnits = "";
    }
    return message;
  },
  toJSON(message: EventCreateBatch): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.totalUnits !== undefined && (obj.totalUnits = message.totalUnits);
    return obj;
  },
};

export const EventReceive = {
  encode(message: EventReceive, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.sender);
    writer.uint32(18).string(message.recipient);
    writer.uint32(26).string(message.batchDenom);
    writer.uint32(34).string(message.units);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): EventReceive {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventReceive } as EventReceive;
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
    const message = { ...baseEventReceive } as EventReceive;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient);
    } else {
      message.recipient = "";
    }
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = String(object.batchDenom);
    } else {
      message.batchDenom = "";
    }
    if (object.units !== undefined && object.units !== null) {
      message.units = String(object.units);
    } else {
      message.units = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventReceive>): EventReceive {
    const message = { ...baseEventReceive } as EventReceive;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    } else {
      message.recipient = "";
    }
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = object.batchDenom;
    } else {
      message.batchDenom = "";
    }
    if (object.units !== undefined && object.units !== null) {
      message.units = object.units;
    } else {
      message.units = "";
    }
    return message;
  },
  toJSON(message: EventReceive): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.units !== undefined && (obj.units = message.units);
    return obj;
  },
};

export const EventRetire = {
  encode(message: EventRetire, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.retirer);
    writer.uint32(18).string(message.batchDenom);
    writer.uint32(26).string(message.units);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): EventRetire {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventRetire } as EventRetire;
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
    const message = { ...baseEventRetire } as EventRetire;
    if (object.retirer !== undefined && object.retirer !== null) {
      message.retirer = String(object.retirer);
    } else {
      message.retirer = "";
    }
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = String(object.batchDenom);
    } else {
      message.batchDenom = "";
    }
    if (object.units !== undefined && object.units !== null) {
      message.units = String(object.units);
    } else {
      message.units = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventRetire>): EventRetire {
    const message = { ...baseEventRetire } as EventRetire;
    if (object.retirer !== undefined && object.retirer !== null) {
      message.retirer = object.retirer;
    } else {
      message.retirer = "";
    }
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = object.batchDenom;
    } else {
      message.batchDenom = "";
    }
    if (object.units !== undefined && object.units !== null) {
      message.units = object.units;
    } else {
      message.units = "";
    }
    return message;
  },
  toJSON(message: EventRetire): unknown {
    const obj: any = {};
    message.retirer !== undefined && (obj.retirer = message.retirer);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.units !== undefined && (obj.units = message.units);
    return obj;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;