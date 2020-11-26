/* eslint-disable */
import { Any } from '../../../google/protobuf/any';
import { Timestamp } from '../../../google/protobuf/timestamp';
import * as Long from 'long';
import { Writer, Reader, util, configure } from 'protobufjs/minimal';


/**
 *  Plan specifies information about a planned upgrade and when it should occur.
 */
export interface Plan {
  /**
   *  Sets the name for the upgrade. This name will be used by the upgraded
   *  version of the software to apply any special "on-upgrade" commands during
   *  the first BeginBlock method after the upgrade is applied. It is also used
   *  to detect whether a software version can handle a given upgrade. If no
   *  upgrade handler with this name has been set in the software, it will be
   *  assumed that the software is out-of-date when the upgrade Time or Height is
   *  reached and the software will exit.
   */
  name: string;
  /**
   *  The time after which the upgrade must be performed.
   *  Leave set to its zero value to use a pre-defined Height instead.
   */
  time?: Date;
  /**
   *  The height at which the upgrade must be performed.
   *  Only used if Time is not set.
   */
  height: number;
  /**
   *  Any application specific upgrade info to be included on-chain
   *  such as a git commit that validators could automatically upgrade to
   */
  info: string;
  /**
   *  IBC-enabled chains can opt-in to including the upgraded client state in its upgrade plan
   *  This will make the chain commit to the correct upgraded (self) client state before the upgrade occurs,
   *  so that connecting chains can verify that the new upgraded client is valid by verifying a proof on the
   *  previous version of the chain.
   *  This will allow IBC connections to persist smoothly across planned chain upgrades
   */
  upgradedClientState?: Any;
}

/**
 *  SoftwareUpgradeProposal is a gov Content type for initiating a software
 *  upgrade.
 */
export interface SoftwareUpgradeProposal {
  title: string;
  description: string;
  plan?: Plan;
}

/**
 *  CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 *  upgrade.
 */
export interface CancelSoftwareUpgradeProposal {
  title: string;
  description: string;
}

const basePlan: object = {
  name: "",
  height: 0,
  info: "",
};

const baseSoftwareUpgradeProposal: object = {
  title: "",
  description: "",
};

const baseCancelSoftwareUpgradeProposal: object = {
  title: "",
  description: "",
};

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function longToNumber(long: Long) {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

export const protobufPackage = 'cosmos.upgrade.v1beta1'

export const Plan = {
  encode(message: Plan, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    if (message.time !== undefined && message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(24).int64(message.height);
    writer.uint32(34).string(message.info);
    if (message.upgradedClientState !== undefined && message.upgradedClientState !== undefined) {
      Any.encode(message.upgradedClientState, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Plan {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlan } as Plan;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.upgradedClientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Plan {
    const message = { ...basePlan } as Plan;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromJsonTimestamp(object.time);
    } else {
      message.time = undefined;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = String(object.info);
    } else {
      message.info = "";
    }
    if (object.upgradedClientState !== undefined && object.upgradedClientState !== null) {
      message.upgradedClientState = Any.fromJSON(object.upgradedClientState);
    } else {
      message.upgradedClientState = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Plan>): Plan {
    const message = { ...basePlan } as Plan;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = undefined;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    } else {
      message.info = "";
    }
    if (object.upgradedClientState !== undefined && object.upgradedClientState !== null) {
      message.upgradedClientState = Any.fromPartial(object.upgradedClientState);
    } else {
      message.upgradedClientState = undefined;
    }
    return message;
  },
  toJSON(message: Plan): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.time !== undefined && (obj.time = message.time !== undefined ? message.time.toISOString() : null);
    message.height !== undefined && (obj.height = message.height);
    message.info !== undefined && (obj.info = message.info);
    message.upgradedClientState !== undefined && (obj.upgradedClientState = message.upgradedClientState ? Any.toJSON(message.upgradedClientState) : undefined);
    return obj;
  },
};

export const SoftwareUpgradeProposal = {
  encode(message: SoftwareUpgradeProposal, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.title);
    writer.uint32(18).string(message.description);
    if (message.plan !== undefined && message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): SoftwareUpgradeProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSoftwareUpgradeProposal } as SoftwareUpgradeProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SoftwareUpgradeProposal {
    const message = { ...baseSoftwareUpgradeProposal } as SoftwareUpgradeProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromJSON(object.plan);
    } else {
      message.plan = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<SoftwareUpgradeProposal>): SoftwareUpgradeProposal {
    const message = { ...baseSoftwareUpgradeProposal } as SoftwareUpgradeProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromPartial(object.plan);
    } else {
      message.plan = undefined;
    }
    return message;
  },
  toJSON(message: SoftwareUpgradeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    return obj;
  },
};

export const CancelSoftwareUpgradeProposal = {
  encode(message: CancelSoftwareUpgradeProposal, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.title);
    writer.uint32(18).string(message.description);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CancelSoftwareUpgradeProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCancelSoftwareUpgradeProposal } as CancelSoftwareUpgradeProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CancelSoftwareUpgradeProposal {
    const message = { ...baseCancelSoftwareUpgradeProposal } as CancelSoftwareUpgradeProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<CancelSoftwareUpgradeProposal>): CancelSoftwareUpgradeProposal {
    const message = { ...baseCancelSoftwareUpgradeProposal } as CancelSoftwareUpgradeProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
  toJSON(message: CancelSoftwareUpgradeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
};

if (util.Long !== Long as any) {
  util.Long = Long as any;
  configure();
}

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