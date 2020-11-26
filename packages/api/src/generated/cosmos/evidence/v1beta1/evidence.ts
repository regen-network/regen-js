/* eslint-disable */
import { Timestamp } from '../../../google/protobuf/timestamp';
import * as Long from 'long';
import { Writer, Reader, util, configure } from 'protobufjs/minimal';


/**
 *  Equivocation implements the Evidence interface and defines evidence of double
 *  signing misbehavior.
 */
export interface Equivocation {
  height: number;
  time?: Date;
  power: number;
  consensusAddress: string;
}

const baseEquivocation: object = {
  height: 0,
  power: 0,
  consensusAddress: "",
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

export const protobufPackage = 'cosmos.evidence.v1beta1'

export const Equivocation = {
  encode(message: Equivocation, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int64(message.height);
    if (message.time !== undefined && message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(24).int64(message.power);
    writer.uint32(34).string(message.consensusAddress);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Equivocation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEquivocation } as Equivocation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.power = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.consensusAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Equivocation {
    const message = { ...baseEquivocation } as Equivocation;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromJsonTimestamp(object.time);
    } else {
      message.time = undefined;
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = Number(object.power);
    } else {
      message.power = 0;
    }
    if (object.consensusAddress !== undefined && object.consensusAddress !== null) {
      message.consensusAddress = String(object.consensusAddress);
    } else {
      message.consensusAddress = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Equivocation>): Equivocation {
    const message = { ...baseEquivocation } as Equivocation;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = undefined;
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = object.power;
    } else {
      message.power = 0;
    }
    if (object.consensusAddress !== undefined && object.consensusAddress !== null) {
      message.consensusAddress = object.consensusAddress;
    } else {
      message.consensusAddress = "";
    }
    return message;
  },
  toJSON(message: Equivocation): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.time !== undefined && (obj.time = message.time !== undefined ? message.time.toISOString() : null);
    message.power !== undefined && (obj.power = message.power);
    message.consensusAddress !== undefined && (obj.consensusAddress = message.consensusAddress);
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