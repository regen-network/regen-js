/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../google/protobuf/duration";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "regen.ecocredit.basket.v1";

/** BasketCredit represents the information for a credit batch inside a basket. */
export interface BasketCredit {
  $type: "regen.ecocredit.basket.v1.BasketCredit";
  /** batch_denom is the unique ID of the credit batch. */
  batchDenom: string;
  /**
   * amount is the number of credits being put into or taken out of the basket.
   * Decimal values are acceptable within the precision of the corresponding
   *  credit type for this batch.
   */
  amount: string;
}

/**
 * DateCriteria represents the information for credit acceptance in a basket.
 * At most, only one of the values should be set.
 */
export interface DateCriteria {
  $type: "regen.ecocredit.basket.v1.DateCriteria";
  /**
   * min_start_date (optional) is the earliest start date for batches of credits
   * allowed into the basket. At most only one of `start_date_window`,
   * `min_start_date`, and `years_in_the_past` can be set for a basket.
   */
  minStartDate?: Date;
  /**
   * start_date_window (optional) is a duration of time measured into the past
   * which sets a cutoff for batch start dates when adding new credits to the
   * basket. Based on the current block timestamp, credits whose start date is
   * before `block_timestamp - start_date_window` will not be allowed into the
   * basket. At most only one of `start_date_window`, `min_start_date`, and
   * `years_in_the_past` can be set for a basket.
   */
  startDateWindow?: Duration;
  /**
   * years_in_the_past (optional) is the number of years into the past which
   * sets a cutoff for the batch start dates when adding new credits to the
   * basket. Based on the current block timestamp, credits whose start date year
   * is less than `block_timestamp_year - years_in_the_past` will not be allowed
   * into the basket. At most only one of `start_date_window`, `min_start_date`,
   * and `years_in_the_past` can be set for a basket.
   *
   * Since Revision 1
   */
  yearsInThePast: number;
}

function createBaseBasketCredit(): BasketCredit {
  return { $type: "regen.ecocredit.basket.v1.BasketCredit", batchDenom: "", amount: "" };
}

export const BasketCredit = {
  $type: "regen.ecocredit.basket.v1.BasketCredit" as const,

  encode(message: BasketCredit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasketCredit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasketCredit();
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

  fromJSON(object: any): BasketCredit {
    return {
      $type: BasketCredit.$type,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: BasketCredit): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  create(base?: DeepPartial<BasketCredit>): BasketCredit {
    return BasketCredit.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BasketCredit>): BasketCredit {
    const message = createBaseBasketCredit();
    message.batchDenom = object.batchDenom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

messageTypeRegistry.set(BasketCredit.$type, BasketCredit);

function createBaseDateCriteria(): DateCriteria {
  return {
    $type: "regen.ecocredit.basket.v1.DateCriteria",
    minStartDate: undefined,
    startDateWindow: undefined,
    yearsInThePast: 0,
  };
}

export const DateCriteria = {
  $type: "regen.ecocredit.basket.v1.DateCriteria" as const,

  encode(message: DateCriteria, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minStartDate !== undefined) {
      Timestamp.encode(toTimestamp(message.minStartDate), writer.uint32(10).fork()).ldelim();
    }
    if (message.startDateWindow !== undefined) {
      Duration.encode(message.startDateWindow, writer.uint32(18).fork()).ldelim();
    }
    if (message.yearsInThePast !== 0) {
      writer.uint32(24).uint32(message.yearsInThePast);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DateCriteria {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDateCriteria();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.startDateWindow = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.yearsInThePast = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DateCriteria {
    return {
      $type: DateCriteria.$type,
      minStartDate: isSet(object.minStartDate) ? fromJsonTimestamp(object.minStartDate) : undefined,
      startDateWindow: isSet(object.startDateWindow) ? Duration.fromJSON(object.startDateWindow) : undefined,
      yearsInThePast: isSet(object.yearsInThePast) ? Number(object.yearsInThePast) : 0,
    };
  },

  toJSON(message: DateCriteria): unknown {
    const obj: any = {};
    message.minStartDate !== undefined && (obj.minStartDate = message.minStartDate.toISOString());
    message.startDateWindow !== undefined &&
      (obj.startDateWindow = message.startDateWindow ? Duration.toJSON(message.startDateWindow) : undefined);
    message.yearsInThePast !== undefined && (obj.yearsInThePast = Math.round(message.yearsInThePast));
    return obj;
  },

  create(base?: DeepPartial<DateCriteria>): DateCriteria {
    return DateCriteria.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DateCriteria>): DateCriteria {
    const message = createBaseDateCriteria();
    message.minStartDate = object.minStartDate ?? undefined;
    message.startDateWindow = (object.startDateWindow !== undefined && object.startDateWindow !== null)
      ? Duration.fromPartial(object.startDateWindow)
      : undefined;
    message.yearsInThePast = object.yearsInThePast ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DateCriteria.$type, DateCriteria);

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
