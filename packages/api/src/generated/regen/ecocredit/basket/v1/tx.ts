/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  DateCriteria,
  BasketCredit,
} from '../../../../regen/ecocredit/basket/v1/types';
import { Coin } from '../../../../cosmos/base/v1beta1/coin';

export const protobufPackage = 'regen.ecocredit.basket.v1';

/** MsgCreateBasket is the Msg/CreateBasket request type. */
export interface MsgCreate {
  $type: 'regen.ecocredit.basket.v1.MsgCreate';
  /**
   * curator is the address of the basket curator who is able to change certain
   * basket settings.
   */
  curator: string;
  /**
   * name will be used to together with prefix to create a bank denom for this
   * basket token. It can be between 3-8 alphanumeric characters, with the
   * first character being alphabetic.
   *
   * The bank denom will be formed from name and credit type with the format
   * `eco.<prefix><credit_type_abbrev>.<name>` where prefix is the prefix of
   * a standard SI unit derived from credit type precision.
   */
  name: string;
  /**
   * description is a human-readable description of the basket denom that should
   * be at most 256 characters.
   */
  description: string;
  /**
   * Deprecated (Since Revision 1): This field is no longer used and will be
   * removed in the next version. The value of credit type precision is always
   * used as the exponent when determining the prefix for basket denom, defining
   * bank denom metadata, and converting credits to/from basket tokens.
   *
   * @deprecated
   */
  exponent: number;
  /**
   * disable_auto_retire allows auto-retirement to be disabled.
   * The credits will be auto-retired if disable_auto_retire is
   * false unless the credits were previously put into the basket by the
   * address picking them from the basket, in which case they will remain
   * tradable.
   */
  disableAutoRetire: boolean;
  /**
   * credit_type_abbrev is the abbreviation of the credit type this basket is
   * able to hold.
   */
  creditTypeAbbrev: string;
  /** allowed_classes are the credit classes allowed to be put in the basket */
  allowedClasses: string[];
  /**
   * date_criteria is the date criteria for batches admitted to the basket.
   * At most, only one of the fields in the date_criteria should be set.
   */
  dateCriteria?: DateCriteria;
  /**
   * fee is the basket creation fee. A fee is not required if the list of fees
   * in Params.basket_fee is empty. The provided fee must be one of the fees
   * listed in Params.basket_fee. The provided amount can be greater than
   * or equal to the listed amount but the basket creator will only be charged
   * the listed amount (i.e. the minimum amount).
   *
   * Note (Since Revision 1): Although this field supports a list of fees, the
   * basket creator must provide no more than one fee (i.e. one Coin in a list
   * of Coins). Providing more than one fee will fail basic message validation.
   * This field will be updated to a single fee rather than a list of fees in
   * the next version to reflect these requirements.
   */
  fee: Coin[];
}

/** MsgCreateBasketResponse is the Msg/CreateBasket response type. */
export interface MsgCreateResponse {
  $type: 'regen.ecocredit.basket.v1.MsgCreateResponse';
  /** basket_denom is the unique denomination ID of the newly created basket. */
  basketDenom: string;
}

/** MsgAddToBasket is the Msg/AddToBasket request type. */
export interface MsgPut {
  $type: 'regen.ecocredit.basket.v1.MsgPut';
  /** owner is the owner of credits being put into the basket. */
  owner: string;
  /** basket_denom is the basket denom to add credits to. */
  basketDenom: string;
  /**
   * credits are credits to add to the basket. If they do not match the basket's
   * admission criteria the operation will fail. If there are any "dust" credits
   * left over when converting credits to basket tokens, these credits will
   * not be converted to basket tokens and instead remain with the owner.
   */
  credits: BasketCredit[];
}

/** MsgAddToBasketResponse is the Msg/AddToBasket response type. */
export interface MsgPutResponse {
  $type: 'regen.ecocredit.basket.v1.MsgPutResponse';
  /** amount_received is the integer amount of basket tokens received. */
  amountReceived: string;
}

/** MsgTakeFromBasket is the Msg/TakeFromBasket request type. */
export interface MsgTake {
  $type: 'regen.ecocredit.basket.v1.MsgTake';
  /** owner is the owner of the basket tokens. */
  owner: string;
  /** basket_denom is the basket bank denom to take credits from. */
  basketDenom: string;
  /** amount is the integer number of basket tokens to convert into credits. */
  amount: string;
  /**
   * retirement_jurisdiction is the optional retirement jurisdiction for the
   * credits which will be used only if retire_on_take is true for this basket.
   */
  retirementJurisdiction: string;
  /**
   * retire_on_take is a boolean that dictates whether the ecocredits
   * received in exchange for the basket tokens will be received as
   * retired or tradable credits.
   */
  retireOnTake: boolean;
}

/** MsgTakeFromBasketResponse is the Msg/TakeFromBasket response type. */
export interface MsgTakeResponse {
  $type: 'regen.ecocredit.basket.v1.MsgTakeResponse';
  /** credits are the credits taken out of the basket. */
  credits: BasketCredit[];
}

function createBaseMsgCreate(): MsgCreate {
  return {
    $type: 'regen.ecocredit.basket.v1.MsgCreate',
    curator: '',
    name: '',
    description: '',
    exponent: 0,
    disableAutoRetire: false,
    creditTypeAbbrev: '',
    allowedClasses: [],
    dateCriteria: undefined,
    fee: [],
  };
}

export const MsgCreate = {
  $type: 'regen.ecocredit.basket.v1.MsgCreate' as const,

  encode(
    message: MsgCreate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.curator !== '') {
      writer.uint32(10).string(message.curator);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== '') {
      writer.uint32(26).string(message.description);
    }
    if (message.exponent !== 0) {
      writer.uint32(32).uint32(message.exponent);
    }
    if (message.disableAutoRetire === true) {
      writer.uint32(40).bool(message.disableAutoRetire);
    }
    if (message.creditTypeAbbrev !== '') {
      writer.uint32(50).string(message.creditTypeAbbrev);
    }
    for (const v of message.allowedClasses) {
      writer.uint32(58).string(v!);
    }
    if (message.dateCriteria !== undefined) {
      DateCriteria.encode(
        message.dateCriteria,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    for (const v of message.fee) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.curator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.exponent = reader.uint32();
          break;
        case 5:
          message.disableAutoRetire = reader.bool();
          break;
        case 6:
          message.creditTypeAbbrev = reader.string();
          break;
        case 7:
          message.allowedClasses.push(reader.string());
          break;
        case 8:
          message.dateCriteria = DateCriteria.decode(reader, reader.uint32());
          break;
        case 9:
          message.fee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreate {
    return {
      $type: MsgCreate.$type,
      curator: isSet(object.curator) ? String(object.curator) : '',
      name: isSet(object.name) ? String(object.name) : '',
      description: isSet(object.description) ? String(object.description) : '',
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      disableAutoRetire: isSet(object.disableAutoRetire)
        ? Boolean(object.disableAutoRetire)
        : false,
      creditTypeAbbrev: isSet(object.creditTypeAbbrev)
        ? String(object.creditTypeAbbrev)
        : '',
      allowedClasses: Array.isArray(object?.allowedClasses)
        ? object.allowedClasses.map((e: any) => String(e))
        : [],
      dateCriteria: isSet(object.dateCriteria)
        ? DateCriteria.fromJSON(object.dateCriteria)
        : undefined,
      fee: Array.isArray(object?.fee)
        ? object.fee.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgCreate): unknown {
    const obj: any = {};
    message.curator !== undefined && (obj.curator = message.curator);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.exponent !== undefined &&
      (obj.exponent = Math.round(message.exponent));
    message.disableAutoRetire !== undefined &&
      (obj.disableAutoRetire = message.disableAutoRetire);
    message.creditTypeAbbrev !== undefined &&
      (obj.creditTypeAbbrev = message.creditTypeAbbrev);
    if (message.allowedClasses) {
      obj.allowedClasses = message.allowedClasses.map(e => e);
    } else {
      obj.allowedClasses = [];
    }
    message.dateCriteria !== undefined &&
      (obj.dateCriteria = message.dateCriteria
        ? DateCriteria.toJSON(message.dateCriteria)
        : undefined);
    if (message.fee) {
      obj.fee = message.fee.map(e => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.fee = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreate>, I>>(
    object: I,
  ): MsgCreate {
    const message = createBaseMsgCreate();
    message.curator = object.curator ?? '';
    message.name = object.name ?? '';
    message.description = object.description ?? '';
    message.exponent = object.exponent ?? 0;
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? '';
    message.allowedClasses = object.allowedClasses?.map(e => e) || [];
    message.dateCriteria =
      object.dateCriteria !== undefined && object.dateCriteria !== null
        ? DateCriteria.fromPartial(object.dateCriteria)
        : undefined;
    message.fee = object.fee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgCreate.$type, MsgCreate);

function createBaseMsgCreateResponse(): MsgCreateResponse {
  return {
    $type: 'regen.ecocredit.basket.v1.MsgCreateResponse',
    basketDenom: '',
  };
}

export const MsgCreateResponse = {
  $type: 'regen.ecocredit.basket.v1.MsgCreateResponse' as const,

  encode(
    message: MsgCreateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.basketDenom !== '') {
      writer.uint32(10).string(message.basketDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basketDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateResponse {
    return {
      $type: MsgCreateResponse.$type,
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : '',
    };
  },

  toJSON(message: MsgCreateResponse): unknown {
    const obj: any = {};
    message.basketDenom !== undefined &&
      (obj.basketDenom = message.basketDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateResponse>, I>>(
    object: I,
  ): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    message.basketDenom = object.basketDenom ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgCreateResponse.$type, MsgCreateResponse);

function createBaseMsgPut(): MsgPut {
  return {
    $type: 'regen.ecocredit.basket.v1.MsgPut',
    owner: '',
    basketDenom: '',
    credits: [],
  };
}

export const MsgPut = {
  $type: 'regen.ecocredit.basket.v1.MsgPut' as const,

  encode(
    message: MsgPut,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner);
    }
    if (message.basketDenom !== '') {
      writer.uint32(18).string(message.basketDenom);
    }
    for (const v of message.credits) {
      BasketCredit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.basketDenom = reader.string();
          break;
        case 3:
          message.credits.push(BasketCredit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPut {
    return {
      $type: MsgPut.$type,
      owner: isSet(object.owner) ? String(object.owner) : '',
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : '',
      credits: Array.isArray(object?.credits)
        ? object.credits.map((e: any) => BasketCredit.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgPut): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.basketDenom !== undefined &&
      (obj.basketDenom = message.basketDenom);
    if (message.credits) {
      obj.credits = message.credits.map(e =>
        e ? BasketCredit.toJSON(e) : undefined,
      );
    } else {
      obj.credits = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPut>, I>>(object: I): MsgPut {
    const message = createBaseMsgPut();
    message.owner = object.owner ?? '';
    message.basketDenom = object.basketDenom ?? '';
    message.credits =
      object.credits?.map(e => BasketCredit.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgPut.$type, MsgPut);

function createBaseMsgPutResponse(): MsgPutResponse {
  return {
    $type: 'regen.ecocredit.basket.v1.MsgPutResponse',
    amountReceived: '',
  };
}

export const MsgPutResponse = {
  $type: 'regen.ecocredit.basket.v1.MsgPutResponse' as const,

  encode(
    message: MsgPutResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.amountReceived !== '') {
      writer.uint32(10).string(message.amountReceived);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountReceived = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPutResponse {
    return {
      $type: MsgPutResponse.$type,
      amountReceived: isSet(object.amountReceived)
        ? String(object.amountReceived)
        : '',
    };
  },

  toJSON(message: MsgPutResponse): unknown {
    const obj: any = {};
    message.amountReceived !== undefined &&
      (obj.amountReceived = message.amountReceived);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPutResponse>, I>>(
    object: I,
  ): MsgPutResponse {
    const message = createBaseMsgPutResponse();
    message.amountReceived = object.amountReceived ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgPutResponse.$type, MsgPutResponse);

function createBaseMsgTake(): MsgTake {
  return {
    $type: 'regen.ecocredit.basket.v1.MsgTake',
    owner: '',
    basketDenom: '',
    amount: '',
    retirementJurisdiction: '',
    retireOnTake: false,
  };
}

export const MsgTake = {
  $type: 'regen.ecocredit.basket.v1.MsgTake' as const,

  encode(
    message: MsgTake,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner);
    }
    if (message.basketDenom !== '') {
      writer.uint32(18).string(message.basketDenom);
    }
    if (message.amount !== '') {
      writer.uint32(26).string(message.amount);
    }
    if (message.retirementJurisdiction !== '') {
      writer.uint32(34).string(message.retirementJurisdiction);
    }
    if (message.retireOnTake === true) {
      writer.uint32(40).bool(message.retireOnTake);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.basketDenom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.retirementJurisdiction = reader.string();
          break;
        case 5:
          message.retireOnTake = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTake {
    return {
      $type: MsgTake.$type,
      owner: isSet(object.owner) ? String(object.owner) : '',
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : '',
      amount: isSet(object.amount) ? String(object.amount) : '',
      retirementJurisdiction: isSet(object.retirementJurisdiction)
        ? String(object.retirementJurisdiction)
        : '',
      retireOnTake: isSet(object.retireOnTake)
        ? Boolean(object.retireOnTake)
        : false,
    };
  },

  toJSON(message: MsgTake): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.basketDenom !== undefined &&
      (obj.basketDenom = message.basketDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.retirementJurisdiction !== undefined &&
      (obj.retirementJurisdiction = message.retirementJurisdiction);
    message.retireOnTake !== undefined &&
      (obj.retireOnTake = message.retireOnTake);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTake>, I>>(object: I): MsgTake {
    const message = createBaseMsgTake();
    message.owner = object.owner ?? '';
    message.basketDenom = object.basketDenom ?? '';
    message.amount = object.amount ?? '';
    message.retirementJurisdiction = object.retirementJurisdiction ?? '';
    message.retireOnTake = object.retireOnTake ?? false;
    return message;
  },
};

messageTypeRegistry.set(MsgTake.$type, MsgTake);

function createBaseMsgTakeResponse(): MsgTakeResponse {
  return { $type: 'regen.ecocredit.basket.v1.MsgTakeResponse', credits: [] };
}

export const MsgTakeResponse = {
  $type: 'regen.ecocredit.basket.v1.MsgTakeResponse' as const,

  encode(
    message: MsgTakeResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.credits) {
      BasketCredit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credits.push(BasketCredit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTakeResponse {
    return {
      $type: MsgTakeResponse.$type,
      credits: Array.isArray(object?.credits)
        ? object.credits.map((e: any) => BasketCredit.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgTakeResponse): unknown {
    const obj: any = {};
    if (message.credits) {
      obj.credits = message.credits.map(e =>
        e ? BasketCredit.toJSON(e) : undefined,
      );
    } else {
      obj.credits = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTakeResponse>, I>>(
    object: I,
  ): MsgTakeResponse {
    const message = createBaseMsgTakeResponse();
    message.credits =
      object.credits?.map(e => BasketCredit.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgTakeResponse.$type, MsgTakeResponse);

/** Msg is the regen.ecocredit.basket.v1 Msg service. */
export interface Msg {
  /** Create creates a bank denom which wraps credits. */
  Create(request: DeepPartial<MsgCreate>): Promise<MsgCreateResponse>;
  /** Put puts credits into a basket in return for basket tokens. */
  Put(request: DeepPartial<MsgPut>): Promise<MsgPutResponse>;
  /**
   * Take takes credits from a basket starting from the oldest
   * credits first.
   */
  Take(request: DeepPartial<MsgTake>): Promise<MsgTakeResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Put = this.Put.bind(this);
    this.Take = this.Take.bind(this);
  }
  Create(request: DeepPartial<MsgCreate>): Promise<MsgCreateResponse> {
    const fromPartial = MsgCreate.fromPartial(request);
    const data = MsgCreate.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.basket.v1.Msg',
      'Create',
      data,
    );
    return promise.then(data => MsgCreateResponse.decode(new _m0.Reader(data)));
  }

  Put(request: DeepPartial<MsgPut>): Promise<MsgPutResponse> {
    const fromPartial = MsgPut.fromPartial(request);
    const data = MsgPut.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.basket.v1.Msg',
      'Put',
      data,
    );
    return promise.then(data => MsgPutResponse.decode(new _m0.Reader(data)));
  }

  Take(request: DeepPartial<MsgTake>): Promise<MsgTakeResponse> {
    const fromPartial = MsgTake.fromPartial(request);
    const data = MsgTake.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.ecocredit.basket.v1.Msg',
      'Take',
      data,
    );
    return promise.then(data => MsgTakeResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
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
