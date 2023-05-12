import { DateCriteria, DateCriteriaSDKType } from "./types";
import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp, fromTimestamp } from "../../../../helpers";
/** Basket represents a basket in state. */

export interface Basket {
  /**
   * id is the uint64 ID of the basket. It is used internally for reducing
   * storage space.
   */
  id: Long;
  /**
   * basket_denom is the basket bank denom formed from name and credit type with
   * the format `eco.<prefix><credit_type_abbrev>.<name>` where prefix is the
   * prefix of the bank denom exponent, a standard SI unit derived from credit
   * type precision, and mapped as follows:
   *   0 - no prefix
   *   1 - d (deci)
   *   2 - c (centi)
   *   3 - m (milli)
   *   6 - u (micro)
   *   9 - n (nano)
   *   12 - p (pico)
   *   15 - f (femto)
   *   18 - a (atto)
   *   21 - z (zepto)
   *   24 - y (yocto)
   */

  basketDenom: string;
  /**
   * name is the unique name of the basket specified in MsgCreate. Basket
   * names must be unique across all credit types and choices of exponent
   * above and beyond the uniqueness constraint on basket_denom.
   */

  name: string;
  /**
   * disable_auto_retire indicates whether or not the credits will be retired
   * upon withdraw from the basket.
   */

  disableAutoRetire: boolean;
  /**
   * credit_type_abbrev is the abbreviation of the credit type this basket is
   * able to hold.
   */

  creditTypeAbbrev: string;
  /** date_criteria is the date criteria for batches admitted to the basket. */

  dateCriteria?: DateCriteria;
  /**
   * Deprecated (Since Revision 1): This field is no longer used and will be
   * removed in the next version. The value of credit type precision is always
   * used as the exponent when converting credits to/from basket tokens. This
   * field will be set to the value of credit type precision until removed.
   */

  /** @deprecated */

  exponent: number;
  /**
   * curator is the address of the basket curator who is able to change certain
   * basket settings.
   * 
   * Since Revision 1
   */

  curator: Uint8Array;
}
/** Basket represents a basket in state. */

export interface BasketSDKType {
  /**
   * id is the uint64 ID of the basket. It is used internally for reducing
   * storage space.
   */
  id: Long;
  /**
   * basket_denom is the basket bank denom formed from name and credit type with
   * the format `eco.<prefix><credit_type_abbrev>.<name>` where prefix is the
   * prefix of the bank denom exponent, a standard SI unit derived from credit
   * type precision, and mapped as follows:
   *   0 - no prefix
   *   1 - d (deci)
   *   2 - c (centi)
   *   3 - m (milli)
   *   6 - u (micro)
   *   9 - n (nano)
   *   12 - p (pico)
   *   15 - f (femto)
   *   18 - a (atto)
   *   21 - z (zepto)
   *   24 - y (yocto)
   */

  basket_denom: string;
  /**
   * name is the unique name of the basket specified in MsgCreate. Basket
   * names must be unique across all credit types and choices of exponent
   * above and beyond the uniqueness constraint on basket_denom.
   */

  name: string;
  /**
   * disable_auto_retire indicates whether or not the credits will be retired
   * upon withdraw from the basket.
   */

  disable_auto_retire: boolean;
  /**
   * credit_type_abbrev is the abbreviation of the credit type this basket is
   * able to hold.
   */

  credit_type_abbrev: string;
  /** date_criteria is the date criteria for batches admitted to the basket. */

  date_criteria?: DateCriteriaSDKType;
  /**
   * Deprecated (Since Revision 1): This field is no longer used and will be
   * removed in the next version. The value of credit type precision is always
   * used as the exponent when converting credits to/from basket tokens. This
   * field will be set to the value of credit type precision until removed.
   */

  /** @deprecated */

  exponent: number;
  /**
   * curator is the address of the basket curator who is able to change certain
   * basket settings.
   * 
   * Since Revision 1
   */

  curator: Uint8Array;
}
/** BasketClass describes a credit class that can be deposited in a basket. */

export interface BasketClass {
  /** basket_id is the ID of the basket */
  basketId: Long;
  /**
   * class_id is the id of the credit class that is allowed to be deposited in
   * the basket
   */

  classId: string;
}
/** BasketClass describes a credit class that can be deposited in a basket. */

export interface BasketClassSDKType {
  /** basket_id is the ID of the basket */
  basket_id: Long;
  /**
   * class_id is the id of the credit class that is allowed to be deposited in
   * the basket
   */

  class_id: string;
}
/** BasketBalance stores the amount of credits from a batch in a basket */

export interface BasketBalance {
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

  batchStartDate?: Timestamp;
}
/** BasketBalance stores the amount of credits from a batch in a basket */

export interface BasketBalanceSDKType {
  /** basket_id is the ID of the basket */
  basket_id: Long;
  /** batch_denom is the denom of the credit batch */

  batch_denom: string;
  /** balance is the amount of ecocredits held in the basket */

  balance: string;
  /**
   * batch_start_date is the start date of the batch. This field is used
   * to create an index which is used to remove the oldest credits first.
   */

  batch_start_date?: TimestampSDKType;
}
/**
 * BasketFee is the basket creation fee. If not set, a basket creation fee is
 * not required. This table is controlled via governance.
 * 
 * Since Revision 2
 */

export interface BasketFee {
  /**
   * fee is the basket creation fee. If not set, a basket creation fee is not
   * required.
   */
  fee?: Coin;
}
/**
 * BasketFee is the basket creation fee. If not set, a basket creation fee is
 * not required. This table is controlled via governance.
 * 
 * Since Revision 2
 */

export interface BasketFeeSDKType {
  /**
   * fee is the basket creation fee. If not set, a basket creation fee is not
   * required.
   */
  fee?: CoinSDKType;
}

function createBaseBasket(): Basket {
  return {
    id: Long.UZERO,
    basketDenom: "",
    name: "",
    disableAutoRetire: false,
    creditTypeAbbrev: "",
    dateCriteria: undefined,
    exponent: 0,
    curator: new Uint8Array()
  };
}

export const Basket = {
  encode(message: Basket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.basketDenom !== "") {
      writer.uint32(18).string(message.basketDenom);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.disableAutoRetire === true) {
      writer.uint32(32).bool(message.disableAutoRetire);
    }

    if (message.creditTypeAbbrev !== "") {
      writer.uint32(42).string(message.creditTypeAbbrev);
    }

    if (message.dateCriteria !== undefined) {
      DateCriteria.encode(message.dateCriteria, writer.uint32(50).fork()).ldelim();
    }

    if (message.exponent !== 0) {
      writer.uint32(56).uint32(message.exponent);
    }

    if (message.curator.length !== 0) {
      writer.uint32(66).bytes(message.curator);
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
          message.id = (reader.uint64() as Long);
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

        case 8:
          message.curator = reader.bytes();
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : "",
      name: isSet(object.name) ? String(object.name) : "",
      disableAutoRetire: isSet(object.disableAutoRetire) ? Boolean(object.disableAutoRetire) : false,
      creditTypeAbbrev: isSet(object.creditTypeAbbrev) ? String(object.creditTypeAbbrev) : "",
      dateCriteria: isSet(object.dateCriteria) ? DateCriteria.fromJSON(object.dateCriteria) : undefined,
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      curator: isSet(object.curator) ? bytesFromBase64(object.curator) : new Uint8Array()
    };
  },

  toJSON(message: Basket): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.basketDenom !== undefined && (obj.basketDenom = message.basketDenom);
    message.name !== undefined && (obj.name = message.name);
    message.disableAutoRetire !== undefined && (obj.disableAutoRetire = message.disableAutoRetire);
    message.creditTypeAbbrev !== undefined && (obj.creditTypeAbbrev = message.creditTypeAbbrev);
    message.dateCriteria !== undefined && (obj.dateCriteria = message.dateCriteria ? DateCriteria.toJSON(message.dateCriteria) : undefined);
    message.exponent !== undefined && (obj.exponent = Math.round(message.exponent));
    message.curator !== undefined && (obj.curator = base64FromBytes(message.curator !== undefined ? message.curator : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<Basket>): Basket {
    const message = createBaseBasket();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.basketDenom = object.basketDenom ?? "";
    message.name = object.name ?? "";
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
    message.dateCriteria = object.dateCriteria !== undefined && object.dateCriteria !== null ? DateCriteria.fromPartial(object.dateCriteria) : undefined;
    message.exponent = object.exponent ?? 0;
    message.curator = object.curator ?? new Uint8Array();
    return message;
  }

};

function createBaseBasketClass(): BasketClass {
  return {
    basketId: Long.UZERO,
    classId: ""
  };
}

export const BasketClass = {
  encode(message: BasketClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.basketId.isZero()) {
      writer.uint32(8).uint64(message.basketId);
    }

    if (message.classId !== "") {
      writer.uint32(18).string(message.classId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasketClass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasketClass();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.basketId = (reader.uint64() as Long);
          break;

        case 2:
          message.classId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BasketClass {
    return {
      basketId: isSet(object.basketId) ? Long.fromValue(object.basketId) : Long.UZERO,
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },

  toJSON(message: BasketClass): unknown {
    const obj: any = {};
    message.basketId !== undefined && (obj.basketId = (message.basketId || Long.UZERO).toString());
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },

  fromPartial(object: Partial<BasketClass>): BasketClass {
    const message = createBaseBasketClass();
    message.basketId = object.basketId !== undefined && object.basketId !== null ? Long.fromValue(object.basketId) : Long.UZERO;
    message.classId = object.classId ?? "";
    return message;
  }

};

function createBaseBasketBalance(): BasketBalance {
  return {
    basketId: Long.UZERO,
    batchDenom: "",
    balance: "",
    batchStartDate: undefined
  };
}

export const BasketBalance = {
  encode(message: BasketBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.basketId.isZero()) {
      writer.uint32(8).uint64(message.basketId);
    }

    if (message.batchDenom !== "") {
      writer.uint32(18).string(message.batchDenom);
    }

    if (message.balance !== "") {
      writer.uint32(26).string(message.balance);
    }

    if (message.batchStartDate !== undefined) {
      Timestamp.encode(message.batchStartDate, writer.uint32(34).fork()).ldelim();
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
          message.basketId = (reader.uint64() as Long);
          break;

        case 2:
          message.batchDenom = reader.string();
          break;

        case 3:
          message.balance = reader.string();
          break;

        case 4:
          message.batchStartDate = Timestamp.decode(reader, reader.uint32());
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
      basketId: isSet(object.basketId) ? Long.fromValue(object.basketId) : Long.UZERO,
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      batchStartDate: isSet(object.batchStartDate) ? fromJsonTimestamp(object.batchStartDate) : undefined
    };
  },

  toJSON(message: BasketBalance): unknown {
    const obj: any = {};
    message.basketId !== undefined && (obj.basketId = (message.basketId || Long.UZERO).toString());
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.balance !== undefined && (obj.balance = message.balance);
    message.batchStartDate !== undefined && (obj.batchStartDate = fromTimestamp(message.batchStartDate).toISOString());
    return obj;
  },

  fromPartial(object: Partial<BasketBalance>): BasketBalance {
    const message = createBaseBasketBalance();
    message.basketId = object.basketId !== undefined && object.basketId !== null ? Long.fromValue(object.basketId) : Long.UZERO;
    message.batchDenom = object.batchDenom ?? "";
    message.balance = object.balance ?? "";
    message.batchStartDate = object.batchStartDate !== undefined && object.batchStartDate !== null ? Timestamp.fromPartial(object.batchStartDate) : undefined;
    return message;
  }

};

function createBaseBasketFee(): BasketFee {
  return {
    fee: undefined
  };
}

export const BasketFee = {
  encode(message: BasketFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasketFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasketFee();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fee = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BasketFee {
    return {
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },

  toJSON(message: BasketFee): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial(object: Partial<BasketFee>): BasketFee {
    const message = createBaseBasketFee();
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }

};