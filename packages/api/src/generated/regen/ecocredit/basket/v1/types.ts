/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../../../google/protobuf/duration';
import { Timestamp } from '../../../../google/protobuf/timestamp';

export const protobufPackage = 'regen.ecocredit.basket.v1';

/** BasketCredit represents the information for a credit batch inside a basket. */
export interface BasketCredit {
  $type: 'regen.ecocredit.basket.v1.BasketCredit';
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
 * NOTE: gogo proto `oneof` is not compatible with Amino signing, hence we directly define
 * both `start_date_window` and `min_start_date`. In the future, with pulsar, this should change
 * and we should use `oneof`.
 */
export interface DateCriteria {
  $type: 'regen.ecocredit.basket.v1.DateCriteria';
  /**
   * min_start_date (optional) is the earliest start date for batches of credits allowed
   * into the basket.
   * At most only one of `start_date_window` and `min_start_date` can be set.
   */
  minStartDate?: Date;
  /**
   * start_date_window (optional) is a duration of time measured into the past which sets
   * a cutoff for batch start dates when adding new credits to the basket.
   * Based on the current block timestamp, credits whose start date is before
   * `block_timestamp - batch_date_window` will not be allowed into the basket.
   * At most only one of `start_date_window` and `min_start_date` can be set.
   */
  startDateWindow?: Duration;
}

/** Basket represents a basket in state. */
export interface Basket {
  $type: 'regen.ecocredit.basket.v1.Basket';
  /**
   * id is the uint64 ID of the basket. It is used internally for reducing
   * storage space.
   */
  id: Long;
  /** basket_denom is the basket bank denom. */
  basketDenom: string;
  /**
   * name is the unique name of the basket specified in MsgCreate. Basket
   * names must be unique across all credit types and choices of exponent
   * above and beyond the uniqueness constraint on basket_denom.
   */
  name: string;
  /** disable_auto_retire indicates whether or not the credits will be retired upon withdraw from the basket. */
  disableAutoRetire: boolean;
  /** credit_type_abbrev is the abbreviation of the credit type this basket is able to hold. */
  creditTypeAbbrev: string;
  /** date_criteria is the date criteria for batches admitted to the basket. */
  dateCriteria?: DateCriteria;
  /** exponent is the exponent for converting credits to/from basket tokens. */
  exponent: number;
}

/** BasketBalance stores the amount of credits from a batch in a basket */
export interface BasketBalance {
  $type: 'regen.ecocredit.basket.v1.BasketBalance';
  /** basket_id is the ID of the basket */
  basketId: Long;
  /** batch_denom is the denom of the credit batch */
  batchDenom: string;
  /** balance is the amount of ecocredits held in the basket */
  balance: string;
  /**
   * batch_start_date is the start date of the batch. This field is used
   * to create an index which is used to remove the oldest credits first.
   */
  batchStartDate?: Date;
}

function createBaseBasketCredit(): BasketCredit {
  return {
    $type: 'regen.ecocredit.basket.v1.BasketCredit',
    batchDenom: '',
    amount: '',
  };
}

export const BasketCredit = {
  $type: 'regen.ecocredit.basket.v1.BasketCredit' as const,

  encode(
    message: BasketCredit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.batchDenom !== '') {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.amount !== '') {
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
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      amount: isSet(object.amount) ? String(object.amount) : '',
    };
  },

  toJSON(message: BasketCredit): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BasketCredit>, I>>(
    object: I,
  ): BasketCredit {
    const message = createBaseBasketCredit();
    message.batchDenom = object.batchDenom ?? '';
    message.amount = object.amount ?? '';
    return message;
  },
};

messageTypeRegistry.set(BasketCredit.$type, BasketCredit);

function createBaseDateCriteria(): DateCriteria {
  return {
    $type: 'regen.ecocredit.basket.v1.DateCriteria',
    minStartDate: undefined,
    startDateWindow: undefined,
  };
}

export const DateCriteria = {
  $type: 'regen.ecocredit.basket.v1.DateCriteria' as const,

  encode(
    message: DateCriteria,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.minStartDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.minStartDate),
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.startDateWindow !== undefined) {
      Duration.encode(
        message.startDateWindow,
        writer.uint32(18).fork(),
      ).ldelim();
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
          message.minStartDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.startDateWindow = Duration.decode(reader, reader.uint32());
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
      minStartDate: isSet(object.minStartDate)
        ? fromJsonTimestamp(object.minStartDate)
        : undefined,
      startDateWindow: isSet(object.startDateWindow)
        ? Duration.fromJSON(object.startDateWindow)
        : undefined,
    };
  },

  toJSON(message: DateCriteria): unknown {
    const obj: any = {};
    message.minStartDate !== undefined &&
      (obj.minStartDate = message.minStartDate.toISOString());
    message.startDateWindow !== undefined &&
      (obj.startDateWindow = message.startDateWindow
        ? Duration.toJSON(message.startDateWindow)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DateCriteria>, I>>(
    object: I,
  ): DateCriteria {
    const message = createBaseDateCriteria();
    message.minStartDate = object.minStartDate ?? undefined;
    message.startDateWindow =
      object.startDateWindow !== undefined && object.startDateWindow !== null
        ? Duration.fromPartial(object.startDateWindow)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(DateCriteria.$type, DateCriteria);

function createBaseBasket(): Basket {
  return {
    $type: 'regen.ecocredit.basket.v1.Basket',
    id: Long.UZERO,
    basketDenom: '',
    name: '',
    disableAutoRetire: false,
    creditTypeAbbrev: '',
    dateCriteria: undefined,
    exponent: 0,
  };
}

export const Basket = {
  $type: 'regen.ecocredit.basket.v1.Basket' as const,

  encode(
    message: Basket,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.basketDenom !== '') {
      writer.uint32(18).string(message.basketDenom);
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    if (message.disableAutoRetire === true) {
      writer.uint32(32).bool(message.disableAutoRetire);
    }
    if (message.creditTypeAbbrev !== '') {
      writer.uint32(42).string(message.creditTypeAbbrev);
    }
    if (message.dateCriteria !== undefined) {
      DateCriteria.encode(
        message.dateCriteria,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.exponent !== 0) {
      writer.uint32(56).uint32(message.exponent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Basket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.basketDenom = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.disableAutoRetire = reader.bool();
          break;
        case 5:
          message.creditTypeAbbrev = reader.string();
          break;
        case 6:
          message.dateCriteria = DateCriteria.decode(reader, reader.uint32());
          break;
        case 7:
          message.exponent = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Basket {
    return {
      $type: Basket.$type,
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : '',
      name: isSet(object.name) ? String(object.name) : '',
      disableAutoRetire: isSet(object.disableAutoRetire)
        ? Boolean(object.disableAutoRetire)
        : false,
      creditTypeAbbrev: isSet(object.creditTypeAbbrev)
        ? String(object.creditTypeAbbrev)
        : '',
      dateCriteria: isSet(object.dateCriteria)
        ? DateCriteria.fromJSON(object.dateCriteria)
        : undefined,
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
    };
  },

  toJSON(message: Basket): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.basketDenom !== undefined &&
      (obj.basketDenom = message.basketDenom);
    message.name !== undefined && (obj.name = message.name);
    message.disableAutoRetire !== undefined &&
      (obj.disableAutoRetire = message.disableAutoRetire);
    message.creditTypeAbbrev !== undefined &&
      (obj.creditTypeAbbrev = message.creditTypeAbbrev);
    message.dateCriteria !== undefined &&
      (obj.dateCriteria = message.dateCriteria
        ? DateCriteria.toJSON(message.dateCriteria)
        : undefined);
    message.exponent !== undefined &&
      (obj.exponent = Math.round(message.exponent));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Basket>, I>>(object: I): Basket {
    const message = createBaseBasket();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.basketDenom = object.basketDenom ?? '';
    message.name = object.name ?? '';
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? '';
    message.dateCriteria =
      object.dateCriteria !== undefined && object.dateCriteria !== null
        ? DateCriteria.fromPartial(object.dateCriteria)
        : undefined;
    message.exponent = object.exponent ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Basket.$type, Basket);

function createBaseBasketBalance(): BasketBalance {
  return {
    $type: 'regen.ecocredit.basket.v1.BasketBalance',
    basketId: Long.UZERO,
    batchDenom: '',
    balance: '',
    batchStartDate: undefined,
  };
}

export const BasketBalance = {
  $type: 'regen.ecocredit.basket.v1.BasketBalance' as const,

  encode(
    message: BasketBalance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.basketId.isZero()) {
      writer.uint32(8).uint64(message.basketId);
    }
    if (message.batchDenom !== '') {
      writer.uint32(18).string(message.batchDenom);
    }
    if (message.balance !== '') {
      writer.uint32(26).string(message.balance);
    }
    if (message.batchStartDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.batchStartDate),
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasketBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasketBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basketId = reader.uint64() as Long;
          break;
        case 2:
          message.batchDenom = reader.string();
          break;
        case 3:
          message.balance = reader.string();
          break;
        case 4:
          message.batchStartDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BasketBalance {
    return {
      $type: BasketBalance.$type,
      basketId: isSet(object.basketId)
        ? Long.fromString(object.basketId)
        : Long.UZERO,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : '',
      balance: isSet(object.balance) ? String(object.balance) : '',
      batchStartDate: isSet(object.batchStartDate)
        ? fromJsonTimestamp(object.batchStartDate)
        : undefined,
    };
  },

  toJSON(message: BasketBalance): unknown {
    const obj: any = {};
    message.basketId !== undefined &&
      (obj.basketId = (message.basketId || Long.UZERO).toString());
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.balance !== undefined && (obj.balance = message.balance);
    message.batchStartDate !== undefined &&
      (obj.batchStartDate = message.batchStartDate.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BasketBalance>, I>>(
    object: I,
  ): BasketBalance {
    const message = createBaseBasketBalance();
    message.basketId =
      object.basketId !== undefined && object.basketId !== null
        ? Long.fromValue(object.basketId)
        : Long.UZERO;
    message.batchDenom = object.batchDenom ?? '';
    message.balance = object.balance ?? '';
    message.batchStartDate = object.batchStartDate ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(BasketBalance.$type, BasketBalance);

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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === 'string') {
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
