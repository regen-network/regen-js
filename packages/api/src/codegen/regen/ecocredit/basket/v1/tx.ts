import { DateCriteria, DateCriteriaAmino, DateCriteriaSDKType, BasketCredit, BasketCreditAmino, BasketCreditSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** MsgCreateBasket is the Msg/CreateBasket request type. */

export interface MsgCreate {
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
   */

  /** @deprecated */

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
   * At most, only one of the date criteria fields can be set.
   */

  dateCriteria?: DateCriteria;
  /**
   * fee is the basket creation fee. A fee is not required if no fee exists
   * in the basket fee parameter. The fee must be greater than or equal to the
   * fee param. The curator will be charged the amount specified in the fee
   * parameter, even if a greater amount is provided.
   * 
   * Note (Since Revision 1): Although this field supports a list of fees, the
   * basket creator must provide no more than one fee (i.e. one Coin in a list
   * of Coins). Providing more than one fee will fail basic message validation.
   * This field will be updated to a single fee rather than a list of fees in
   * the next version to reflect these requirements.
   */

  fee: Coin[];
}
export interface MsgCreateProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.MsgCreate";
  value: Uint8Array;
}
/** MsgCreateBasket is the Msg/CreateBasket request type. */

export interface MsgCreateAmino {
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
   */

  /** @deprecated */

  exponent: number;
  /**
   * disable_auto_retire allows auto-retirement to be disabled.
   * The credits will be auto-retired if disable_auto_retire is
   * false unless the credits were previously put into the basket by the
   * address picking them from the basket, in which case they will remain
   * tradable.
   */

  disable_auto_retire: boolean;
  /**
   * credit_type_abbrev is the abbreviation of the credit type this basket is
   * able to hold.
   */

  credit_type_abbrev: string;
  /** allowed_classes are the credit classes allowed to be put in the basket */

  allowed_classes: string[];
  /**
   * date_criteria is the date criteria for batches admitted to the basket.
   * At most, only one of the date criteria fields can be set.
   */

  date_criteria?: DateCriteriaAmino;
  /**
   * fee is the basket creation fee. A fee is not required if no fee exists
   * in the basket fee parameter. The fee must be greater than or equal to the
   * fee param. The curator will be charged the amount specified in the fee
   * parameter, even if a greater amount is provided.
   * 
   * Note (Since Revision 1): Although this field supports a list of fees, the
   * basket creator must provide no more than one fee (i.e. one Coin in a list
   * of Coins). Providing more than one fee will fail basic message validation.
   * This field will be updated to a single fee rather than a list of fees in
   * the next version to reflect these requirements.
   */

  fee: CoinAmino[];
}
export interface MsgCreateAminoMsg {
  type: "regen.basket/MsgCreate";
  value: MsgCreateAmino;
}
/** MsgCreateBasket is the Msg/CreateBasket request type. */

export interface MsgCreateSDKType {
  curator: string;
  name: string;
  description: string;
  /** @deprecated */

  exponent: number;
  disable_auto_retire: boolean;
  credit_type_abbrev: string;
  allowed_classes: string[];
  date_criteria?: DateCriteriaSDKType;
  fee: CoinSDKType[];
}
/** MsgCreateBasketResponse is the Msg/CreateBasket response type. */

export interface MsgCreateResponse {
  /** basket_denom is the unique denomination ID of the newly created basket. */
  basketDenom: string;
}
export interface MsgCreateResponseProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.MsgCreateResponse";
  value: Uint8Array;
}
/** MsgCreateBasketResponse is the Msg/CreateBasket response type. */

export interface MsgCreateResponseAmino {
  /** basket_denom is the unique denomination ID of the newly created basket. */
  basket_denom: string;
}
export interface MsgCreateResponseAminoMsg {
  type: "/regen.ecocredit.basket.v1.MsgCreateResponse";
  value: MsgCreateResponseAmino;
}
/** MsgCreateBasketResponse is the Msg/CreateBasket response type. */

export interface MsgCreateResponseSDKType {
  basket_denom: string;
}
/** MsgAddToBasket is the Msg/AddToBasket request type. */

export interface MsgPut {
  /** owner is the owner of credits being put into the basket. */
  owner: string;
  /** basket_denom is the basket denom to add credits to. */

  basketDenom: string;
  /**
   * credits are credits to add to the basket. If they do not match the basket's
   * admission criteria, the operation will fail.
   */

  credits: BasketCredit[];
}
export interface MsgPutProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.MsgPut";
  value: Uint8Array;
}
/** MsgAddToBasket is the Msg/AddToBasket request type. */

export interface MsgPutAmino {
  /** owner is the owner of credits being put into the basket. */
  owner: string;
  /** basket_denom is the basket denom to add credits to. */

  basket_denom: string;
  /**
   * credits are credits to add to the basket. If they do not match the basket's
   * admission criteria, the operation will fail.
   */

  credits: BasketCreditAmino[];
}
export interface MsgPutAminoMsg {
  type: "regen.basket/MsgPut";
  value: MsgPutAmino;
}
/** MsgAddToBasket is the Msg/AddToBasket request type. */

export interface MsgPutSDKType {
  owner: string;
  basket_denom: string;
  credits: BasketCreditSDKType[];
}
/** MsgAddToBasketResponse is the Msg/AddToBasket response type. */

export interface MsgPutResponse {
  /** amount_received is the integer amount of basket tokens received. */
  amountReceived: string;
}
export interface MsgPutResponseProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.MsgPutResponse";
  value: Uint8Array;
}
/** MsgAddToBasketResponse is the Msg/AddToBasket response type. */

export interface MsgPutResponseAmino {
  /** amount_received is the integer amount of basket tokens received. */
  amount_received: string;
}
export interface MsgPutResponseAminoMsg {
  type: "/regen.ecocredit.basket.v1.MsgPutResponse";
  value: MsgPutResponseAmino;
}
/** MsgAddToBasketResponse is the Msg/AddToBasket response type. */

export interface MsgPutResponseSDKType {
  amount_received: string;
}
/** MsgTakeFromBasket is the Msg/TakeFromBasket request type. */

export interface MsgTake {
  /** owner is the owner of the basket tokens. */
  owner: string;
  /** basket_denom is the basket bank denom to take credits from. */

  basketDenom: string;
  /** amount is the integer number of basket tokens to convert into credits. */

  amount: string;
  /**
   * retirement_location is the optional retirement jurisdiction for the
   * credits which will be used only if retire_on_take is true.
   * 
   * Deprecated (Since Revision 1): This field will be removed in the next
   * version in favor of retirement_jurisdiction. Only one of these need to be
   * set and retirement_jurisdiction will be used if both are set.
   */

  /** @deprecated */

  retirementLocation: string;
  /**
   * retire_on_take is a boolean that dictates whether the ecocredits
   * received in exchange for the basket tokens will be received as
   * retired or tradable credits. If the basket has disable_auto_retire set to
   * false, retire_on_take MUST be set to true, and a retirement jurisdiction
   * must be provided.
   */

  retireOnTake: boolean;
  /**
   * retirement_jurisdiction is the optional retirement jurisdiction for the
   * credits which will be used only if retire_on_take is true.
   * 
   * Since Revision 1
   */

  retirementJurisdiction: string;
  /**
   * retirement_reason is any arbitrary string that specifies the reason for
   * retiring credits. The reason will be included in EventRetire and is not
   * stored in state.
   * 
   * Since Revision 2
   */

  retirementReason: string;
}
export interface MsgTakeProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.MsgTake";
  value: Uint8Array;
}
/** MsgTakeFromBasket is the Msg/TakeFromBasket request type. */

export interface MsgTakeAmino {
  /** owner is the owner of the basket tokens. */
  owner: string;
  /** basket_denom is the basket bank denom to take credits from. */

  basket_denom: string;
  /** amount is the integer number of basket tokens to convert into credits. */

  amount: string;
  /**
   * retirement_location is the optional retirement jurisdiction for the
   * credits which will be used only if retire_on_take is true.
   * 
   * Deprecated (Since Revision 1): This field will be removed in the next
   * version in favor of retirement_jurisdiction. Only one of these need to be
   * set and retirement_jurisdiction will be used if both are set.
   */

  /** @deprecated */

  retirement_location: string;
  /**
   * retire_on_take is a boolean that dictates whether the ecocredits
   * received in exchange for the basket tokens will be received as
   * retired or tradable credits. If the basket has disable_auto_retire set to
   * false, retire_on_take MUST be set to true, and a retirement jurisdiction
   * must be provided.
   */

  retire_on_take: boolean;
  /**
   * retirement_jurisdiction is the optional retirement jurisdiction for the
   * credits which will be used only if retire_on_take is true.
   * 
   * Since Revision 1
   */

  retirement_jurisdiction: string;
  /**
   * retirement_reason is any arbitrary string that specifies the reason for
   * retiring credits. The reason will be included in EventRetire and is not
   * stored in state.
   * 
   * Since Revision 2
   */

  retirement_reason: string;
}
export interface MsgTakeAminoMsg {
  type: "regen.basket/MsgTake";
  value: MsgTakeAmino;
}
/** MsgTakeFromBasket is the Msg/TakeFromBasket request type. */

export interface MsgTakeSDKType {
  owner: string;
  basket_denom: string;
  amount: string;
  /** @deprecated */

  retirement_location: string;
  retire_on_take: boolean;
  retirement_jurisdiction: string;
  retirement_reason: string;
}
/** MsgTakeFromBasketResponse is the Msg/TakeFromBasket response type. */

export interface MsgTakeResponse {
  /** credits are the credits taken out of the basket. */
  credits: BasketCredit[];
}
export interface MsgTakeResponseProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.MsgTakeResponse";
  value: Uint8Array;
}
/** MsgTakeFromBasketResponse is the Msg/TakeFromBasket response type. */

export interface MsgTakeResponseAmino {
  /** credits are the credits taken out of the basket. */
  credits: BasketCreditAmino[];
}
export interface MsgTakeResponseAminoMsg {
  type: "/regen.ecocredit.basket.v1.MsgTakeResponse";
  value: MsgTakeResponseAmino;
}
/** MsgTakeFromBasketResponse is the Msg/TakeFromBasket response type. */

export interface MsgTakeResponseSDKType {
  credits: BasketCreditSDKType[];
}
/**
 * MsgUpdateBasketFee is the Msg/UpdateBasketFee request type.
 * 
 * Since Revision 2
 */

export interface MsgUpdateBasketFee {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * fee is the basket creation fee. If not set, the basket creation fee will be
   * removed and no fee will be required to create a basket.
   */

  fee?: Coin;
}
export interface MsgUpdateBasketFeeProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateBasketFee";
  value: Uint8Array;
}
/**
 * MsgUpdateBasketFee is the Msg/UpdateBasketFee request type.
 * 
 * Since Revision 2
 */

export interface MsgUpdateBasketFeeAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * fee is the basket creation fee. If not set, the basket creation fee will be
   * removed and no fee will be required to create a basket.
   */

  fee?: CoinAmino;
}
export interface MsgUpdateBasketFeeAminoMsg {
  type: "regen.basket/MsgUpdateBasketFee";
  value: MsgUpdateBasketFeeAmino;
}
/**
 * MsgUpdateBasketFee is the Msg/UpdateBasketFee request type.
 * 
 * Since Revision 2
 */

export interface MsgUpdateBasketFeeSDKType {
  authority: string;
  fee?: CoinSDKType;
}
/**
 * MsgUpdateBasketFeeResponse is the Msg/UpdateBasketFee response type.
 * 
 * Since Revision 2
 */

export interface MsgUpdateBasketFeeResponse {}
export interface MsgUpdateBasketFeeResponseProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateBasketFeeResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateBasketFeeResponse is the Msg/UpdateBasketFee response type.
 * 
 * Since Revision 2
 */

export interface MsgUpdateBasketFeeResponseAmino {}
export interface MsgUpdateBasketFeeResponseAminoMsg {
  type: "/regen.ecocredit.basket.v1.MsgUpdateBasketFeeResponse";
  value: MsgUpdateBasketFeeResponseAmino;
}
/**
 * MsgUpdateBasketFeeResponse is the Msg/UpdateBasketFee response type.
 * 
 * Since Revision 2
 */

export interface MsgUpdateBasketFeeResponseSDKType {}
/**
 * MsgUpdateCurator is the Msg/UpdateCurator request type.
 * 
 * Since Revision 2
 */

export interface MsgUpdateCurator {
  /** curator is the address of the basket curator. */
  curator: string;
  /** denom is the unique identifier of the basket. */

  denom: string;
  /**
   * new_curator is the address of the account that will become the
   * new curator of the basket.
   */

  newCurator: string;
}
export interface MsgUpdateCuratorProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateCurator";
  value: Uint8Array;
}
/**
 * MsgUpdateCurator is the Msg/UpdateCurator request type.
 * 
 * Since Revision 2
 */

export interface MsgUpdateCuratorAmino {
  /** curator is the address of the basket curator. */
  curator: string;
  /** denom is the unique identifier of the basket. */

  denom: string;
  /**
   * new_curator is the address of the account that will become the
   * new curator of the basket.
   */

  new_curator: string;
}
export interface MsgUpdateCuratorAminoMsg {
  type: "regen.basket/MsgUpdateCurator";
  value: MsgUpdateCuratorAmino;
}
/**
 * MsgUpdateCurator is the Msg/UpdateCurator request type.
 * 
 * Since Revision 2
 */

export interface MsgUpdateCuratorSDKType {
  curator: string;
  denom: string;
  new_curator: string;
}
/**
 * MsgUpdateCuratorResponse is the Msg/UpdateCurator response type.
 * 
 * Since Revision 2
 */

export interface MsgUpdateCuratorResponse {}
export interface MsgUpdateCuratorResponseProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateCuratorResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateCuratorResponse is the Msg/UpdateCurator response type.
 * 
 * Since Revision 2
 */

export interface MsgUpdateCuratorResponseAmino {}
export interface MsgUpdateCuratorResponseAminoMsg {
  type: "/regen.ecocredit.basket.v1.MsgUpdateCuratorResponse";
  value: MsgUpdateCuratorResponseAmino;
}
/**
 * MsgUpdateCuratorResponse is the Msg/UpdateCurator response type.
 * 
 * Since Revision 2
 */

export interface MsgUpdateCuratorResponseSDKType {}
/**
 * MsgUpdateDateCriteria is the Msg/UpdateDateCriteria request type.
 * 
 * Since Revision 3
 */

export interface MsgUpdateDateCriteria {
  /** authority is the address of the governance account. */
  authority: string;
  /** denom is the unique identifier of the basket. */

  denom: string;
  /**
   * new_date_criteria is the new date criteria for batches admitted to the
   * basket. At most, only one of the date criteria fields can be set.
   */

  newDateCriteria?: DateCriteria;
}
export interface MsgUpdateDateCriteriaProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria";
  value: Uint8Array;
}
/**
 * MsgUpdateDateCriteria is the Msg/UpdateDateCriteria request type.
 * 
 * Since Revision 3
 */

export interface MsgUpdateDateCriteriaAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /** denom is the unique identifier of the basket. */

  denom: string;
  /**
   * new_date_criteria is the new date criteria for batches admitted to the
   * basket. At most, only one of the date criteria fields can be set.
   */

  new_date_criteria?: DateCriteriaAmino;
}
export interface MsgUpdateDateCriteriaAminoMsg {
  type: "regen.basket/MsgUpdateDateCriteria";
  value: MsgUpdateDateCriteriaAmino;
}
/**
 * MsgUpdateDateCriteria is the Msg/UpdateDateCriteria request type.
 * 
 * Since Revision 3
 */

export interface MsgUpdateDateCriteriaSDKType {
  authority: string;
  denom: string;
  new_date_criteria?: DateCriteriaSDKType;
}
/**
 * MsgUpdateDateCriteriaResponse is the Msg/UpdateDateCriteria response type.
 * 
 * Since Revision 3
 */

export interface MsgUpdateDateCriteriaResponse {}
export interface MsgUpdateDateCriteriaResponseProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateDateCriteriaResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateDateCriteriaResponse is the Msg/UpdateDateCriteria response type.
 * 
 * Since Revision 3
 */

export interface MsgUpdateDateCriteriaResponseAmino {}
export interface MsgUpdateDateCriteriaResponseAminoMsg {
  type: "/regen.ecocredit.basket.v1.MsgUpdateDateCriteriaResponse";
  value: MsgUpdateDateCriteriaResponseAmino;
}
/**
 * MsgUpdateDateCriteriaResponse is the Msg/UpdateDateCriteria response type.
 * 
 * Since Revision 3
 */

export interface MsgUpdateDateCriteriaResponseSDKType {}

function createBaseMsgCreate(): MsgCreate {
  return {
    curator: "",
    name: "",
    description: "",
    exponent: 0,
    disableAutoRetire: false,
    creditTypeAbbrev: "",
    allowedClasses: [],
    dateCriteria: undefined,
    fee: []
  };
}

export const MsgCreate = {
  encode(message: MsgCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.curator !== "") {
      writer.uint32(10).string(message.curator);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    if (message.exponent !== 0) {
      writer.uint32(32).uint32(message.exponent);
    }

    if (message.disableAutoRetire === true) {
      writer.uint32(40).bool(message.disableAutoRetire);
    }

    if (message.creditTypeAbbrev !== "") {
      writer.uint32(50).string(message.creditTypeAbbrev);
    }

    for (const v of message.allowedClasses) {
      writer.uint32(58).string(v!);
    }

    if (message.dateCriteria !== undefined) {
      DateCriteria.encode(message.dateCriteria, writer.uint32(66).fork()).ldelim();
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
      curator: isSet(object.curator) ? String(object.curator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      disableAutoRetire: isSet(object.disableAutoRetire) ? Boolean(object.disableAutoRetire) : false,
      creditTypeAbbrev: isSet(object.creditTypeAbbrev) ? String(object.creditTypeAbbrev) : "",
      allowedClasses: Array.isArray(object?.allowedClasses) ? object.allowedClasses.map((e: any) => String(e)) : [],
      dateCriteria: isSet(object.dateCriteria) ? DateCriteria.fromJSON(object.dateCriteria) : undefined,
      fee: Array.isArray(object?.fee) ? object.fee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgCreate): unknown {
    const obj: any = {};
    message.curator !== undefined && (obj.curator = message.curator);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.exponent !== undefined && (obj.exponent = Math.round(message.exponent));
    message.disableAutoRetire !== undefined && (obj.disableAutoRetire = message.disableAutoRetire);
    message.creditTypeAbbrev !== undefined && (obj.creditTypeAbbrev = message.creditTypeAbbrev);

    if (message.allowedClasses) {
      obj.allowedClasses = message.allowedClasses.map(e => e);
    } else {
      obj.allowedClasses = [];
    }

    message.dateCriteria !== undefined && (obj.dateCriteria = message.dateCriteria ? DateCriteria.toJSON(message.dateCriteria) : undefined);

    if (message.fee) {
      obj.fee = message.fee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.fee = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgCreate>): MsgCreate {
    const message = createBaseMsgCreate();
    message.curator = object.curator ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.exponent = object.exponent ?? 0;
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
    message.allowedClasses = object.allowedClasses?.map(e => e) || [];
    message.dateCriteria = object.dateCriteria !== undefined && object.dateCriteria !== null ? DateCriteria.fromPartial(object.dateCriteria) : undefined;
    message.fee = object.fee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: MsgCreateAmino): MsgCreate {
    return {
      curator: object.curator,
      name: object.name,
      description: object.description,
      exponent: object.exponent,
      disableAutoRetire: object.disable_auto_retire,
      creditTypeAbbrev: object.credit_type_abbrev,
      allowedClasses: Array.isArray(object?.allowed_classes) ? object.allowed_classes.map((e: any) => e) : [],
      dateCriteria: object?.date_criteria ? DateCriteria.fromAmino(object.date_criteria) : undefined,
      fee: Array.isArray(object?.fee) ? object.fee.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: MsgCreate): MsgCreateAmino {
    const obj: any = {};
    obj.curator = message.curator;
    obj.name = message.name;
    obj.description = message.description;
    obj.exponent = message.exponent;
    obj.disable_auto_retire = message.disableAutoRetire;
    obj.credit_type_abbrev = message.creditTypeAbbrev;

    if (message.allowedClasses) {
      obj.allowed_classes = message.allowedClasses.map(e => e);
    } else {
      obj.allowed_classes = [];
    }

    obj.date_criteria = message.dateCriteria ? DateCriteria.toAmino(message.dateCriteria) : undefined;

    if (message.fee) {
      obj.fee = message.fee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee = [];
    }

    return obj;
  },

  fromAminoMsg(object: MsgCreateAminoMsg): MsgCreate {
    return MsgCreate.fromAmino(object.value);
  },

  toAminoMsg(message: MsgCreate): MsgCreateAminoMsg {
    return {
      type: "regen.basket/MsgCreate",
      value: MsgCreate.toAmino(message)
    };
  },

  fromProtoMsg(message: MsgCreateProtoMsg): MsgCreate {
    return MsgCreate.decode(message.value);
  },

  toProto(message: MsgCreate): Uint8Array {
    return MsgCreate.encode(message).finish();
  },

  toProtoMsg(message: MsgCreate): MsgCreateProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
      value: MsgCreate.encode(message).finish()
    };
  }

};

function createBaseMsgCreateResponse(): MsgCreateResponse {
  return {
    basketDenom: ""
  };
}

export const MsgCreateResponse = {
  encode(message: MsgCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.basketDenom !== "") {
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
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : ""
    };
  },

  toJSON(message: MsgCreateResponse): unknown {
    const obj: any = {};
    message.basketDenom !== undefined && (obj.basketDenom = message.basketDenom);
    return obj;
  },

  fromPartial(object: Partial<MsgCreateResponse>): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    message.basketDenom = object.basketDenom ?? "";
    return message;
  },

  fromAmino(object: MsgCreateResponseAmino): MsgCreateResponse {
    return {
      basketDenom: object.basket_denom
    };
  },

  toAmino(message: MsgCreateResponse): MsgCreateResponseAmino {
    const obj: any = {};
    obj.basket_denom = message.basketDenom;
    return obj;
  },

  fromAminoMsg(object: MsgCreateResponseAminoMsg): MsgCreateResponse {
    return MsgCreateResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgCreateResponseProtoMsg): MsgCreateResponse {
    return MsgCreateResponse.decode(message.value);
  },

  toProto(message: MsgCreateResponse): Uint8Array {
    return MsgCreateResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgCreateResponse): MsgCreateResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.MsgCreateResponse",
      value: MsgCreateResponse.encode(message).finish()
    };
  }

};

function createBaseMsgPut(): MsgPut {
  return {
    owner: "",
    basketDenom: "",
    credits: []
  };
}

export const MsgPut = {
  encode(message: MsgPut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.basketDenom !== "") {
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
      owner: isSet(object.owner) ? String(object.owner) : "",
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : "",
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => BasketCredit.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgPut): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.basketDenom !== undefined && (obj.basketDenom = message.basketDenom);

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? BasketCredit.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgPut>): MsgPut {
    const message = createBaseMsgPut();
    message.owner = object.owner ?? "";
    message.basketDenom = object.basketDenom ?? "";
    message.credits = object.credits?.map(e => BasketCredit.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: MsgPutAmino): MsgPut {
    return {
      owner: object.owner,
      basketDenom: object.basket_denom,
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => BasketCredit.fromAmino(e)) : []
    };
  },

  toAmino(message: MsgPut): MsgPutAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.basket_denom = message.basketDenom;

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? BasketCredit.toAmino(e) : undefined);
    } else {
      obj.credits = [];
    }

    return obj;
  },

  fromAminoMsg(object: MsgPutAminoMsg): MsgPut {
    return MsgPut.fromAmino(object.value);
  },

  toAminoMsg(message: MsgPut): MsgPutAminoMsg {
    return {
      type: "regen.basket/MsgPut",
      value: MsgPut.toAmino(message)
    };
  },

  fromProtoMsg(message: MsgPutProtoMsg): MsgPut {
    return MsgPut.decode(message.value);
  },

  toProto(message: MsgPut): Uint8Array {
    return MsgPut.encode(message).finish();
  },

  toProtoMsg(message: MsgPut): MsgPutProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
      value: MsgPut.encode(message).finish()
    };
  }

};

function createBaseMsgPutResponse(): MsgPutResponse {
  return {
    amountReceived: ""
  };
}

export const MsgPutResponse = {
  encode(message: MsgPutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amountReceived !== "") {
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
      amountReceived: isSet(object.amountReceived) ? String(object.amountReceived) : ""
    };
  },

  toJSON(message: MsgPutResponse): unknown {
    const obj: any = {};
    message.amountReceived !== undefined && (obj.amountReceived = message.amountReceived);
    return obj;
  },

  fromPartial(object: Partial<MsgPutResponse>): MsgPutResponse {
    const message = createBaseMsgPutResponse();
    message.amountReceived = object.amountReceived ?? "";
    return message;
  },

  fromAmino(object: MsgPutResponseAmino): MsgPutResponse {
    return {
      amountReceived: object.amount_received
    };
  },

  toAmino(message: MsgPutResponse): MsgPutResponseAmino {
    const obj: any = {};
    obj.amount_received = message.amountReceived;
    return obj;
  },

  fromAminoMsg(object: MsgPutResponseAminoMsg): MsgPutResponse {
    return MsgPutResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgPutResponseProtoMsg): MsgPutResponse {
    return MsgPutResponse.decode(message.value);
  },

  toProto(message: MsgPutResponse): Uint8Array {
    return MsgPutResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgPutResponse): MsgPutResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.MsgPutResponse",
      value: MsgPutResponse.encode(message).finish()
    };
  }

};

function createBaseMsgTake(): MsgTake {
  return {
    owner: "",
    basketDenom: "",
    amount: "",
    retirementLocation: "",
    retireOnTake: false,
    retirementJurisdiction: "",
    retirementReason: ""
  };
}

export const MsgTake = {
  encode(message: MsgTake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.basketDenom !== "") {
      writer.uint32(18).string(message.basketDenom);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    if (message.retirementLocation !== "") {
      writer.uint32(34).string(message.retirementLocation);
    }

    if (message.retireOnTake === true) {
      writer.uint32(40).bool(message.retireOnTake);
    }

    if (message.retirementJurisdiction !== "") {
      writer.uint32(50).string(message.retirementJurisdiction);
    }

    if (message.retirementReason !== "") {
      writer.uint32(58).string(message.retirementReason);
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
          message.retirementLocation = reader.string();
          break;

        case 5:
          message.retireOnTake = reader.bool();
          break;

        case 6:
          message.retirementJurisdiction = reader.string();
          break;

        case 7:
          message.retirementReason = reader.string();
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
      owner: isSet(object.owner) ? String(object.owner) : "",
      basketDenom: isSet(object.basketDenom) ? String(object.basketDenom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      retirementLocation: isSet(object.retirementLocation) ? String(object.retirementLocation) : "",
      retireOnTake: isSet(object.retireOnTake) ? Boolean(object.retireOnTake) : false,
      retirementJurisdiction: isSet(object.retirementJurisdiction) ? String(object.retirementJurisdiction) : "",
      retirementReason: isSet(object.retirementReason) ? String(object.retirementReason) : ""
    };
  },

  toJSON(message: MsgTake): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.basketDenom !== undefined && (obj.basketDenom = message.basketDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.retirementLocation !== undefined && (obj.retirementLocation = message.retirementLocation);
    message.retireOnTake !== undefined && (obj.retireOnTake = message.retireOnTake);
    message.retirementJurisdiction !== undefined && (obj.retirementJurisdiction = message.retirementJurisdiction);
    message.retirementReason !== undefined && (obj.retirementReason = message.retirementReason);
    return obj;
  },

  fromPartial(object: Partial<MsgTake>): MsgTake {
    const message = createBaseMsgTake();
    message.owner = object.owner ?? "";
    message.basketDenom = object.basketDenom ?? "";
    message.amount = object.amount ?? "";
    message.retirementLocation = object.retirementLocation ?? "";
    message.retireOnTake = object.retireOnTake ?? false;
    message.retirementJurisdiction = object.retirementJurisdiction ?? "";
    message.retirementReason = object.retirementReason ?? "";
    return message;
  },

  fromAmino(object: MsgTakeAmino): MsgTake {
    return {
      owner: object.owner,
      basketDenom: object.basket_denom,
      amount: object.amount,
      retirementLocation: object.retirement_location,
      retireOnTake: object.retire_on_take,
      retirementJurisdiction: object.retirement_jurisdiction,
      retirementReason: object.retirement_reason
    };
  },

  toAmino(message: MsgTake): MsgTakeAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.basket_denom = message.basketDenom;
    obj.amount = message.amount;
    obj.retirement_location = message.retirementLocation;
    obj.retire_on_take = message.retireOnTake;
    obj.retirement_jurisdiction = message.retirementJurisdiction;
    obj.retirement_reason = message.retirementReason;
    return obj;
  },

  fromAminoMsg(object: MsgTakeAminoMsg): MsgTake {
    return MsgTake.fromAmino(object.value);
  },

  toAminoMsg(message: MsgTake): MsgTakeAminoMsg {
    return {
      type: "regen.basket/MsgTake",
      value: MsgTake.toAmino(message)
    };
  },

  fromProtoMsg(message: MsgTakeProtoMsg): MsgTake {
    return MsgTake.decode(message.value);
  },

  toProto(message: MsgTake): Uint8Array {
    return MsgTake.encode(message).finish();
  },

  toProtoMsg(message: MsgTake): MsgTakeProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
      value: MsgTake.encode(message).finish()
    };
  }

};

function createBaseMsgTakeResponse(): MsgTakeResponse {
  return {
    credits: []
  };
}

export const MsgTakeResponse = {
  encode(message: MsgTakeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => BasketCredit.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgTakeResponse): unknown {
    const obj: any = {};

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? BasketCredit.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgTakeResponse>): MsgTakeResponse {
    const message = createBaseMsgTakeResponse();
    message.credits = object.credits?.map(e => BasketCredit.fromPartial(e)) || [];
    return message;
  },

  fromAmino(object: MsgTakeResponseAmino): MsgTakeResponse {
    return {
      credits: Array.isArray(object?.credits) ? object.credits.map((e: any) => BasketCredit.fromAmino(e)) : []
    };
  },

  toAmino(message: MsgTakeResponse): MsgTakeResponseAmino {
    const obj: any = {};

    if (message.credits) {
      obj.credits = message.credits.map(e => e ? BasketCredit.toAmino(e) : undefined);
    } else {
      obj.credits = [];
    }

    return obj;
  },

  fromAminoMsg(object: MsgTakeResponseAminoMsg): MsgTakeResponse {
    return MsgTakeResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgTakeResponseProtoMsg): MsgTakeResponse {
    return MsgTakeResponse.decode(message.value);
  },

  toProto(message: MsgTakeResponse): Uint8Array {
    return MsgTakeResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgTakeResponse): MsgTakeResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.MsgTakeResponse",
      value: MsgTakeResponse.encode(message).finish()
    };
  }

};

function createBaseMsgUpdateBasketFee(): MsgUpdateBasketFee {
  return {
    authority: "",
    fee: undefined
  };
}

export const MsgUpdateBasketFee = {
  encode(message: MsgUpdateBasketFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBasketFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBasketFee();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.fee = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateBasketFee {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },

  toJSON(message: MsgUpdateBasketFee): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgUpdateBasketFee>): MsgUpdateBasketFee {
    const message = createBaseMsgUpdateBasketFee();
    message.authority = object.authority ?? "";
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },

  fromAmino(object: MsgUpdateBasketFeeAmino): MsgUpdateBasketFee {
    return {
      authority: object.authority,
      fee: object?.fee ? Coin.fromAmino(object.fee) : undefined
    };
  },

  toAmino(message: MsgUpdateBasketFee): MsgUpdateBasketFeeAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },

  fromAminoMsg(object: MsgUpdateBasketFeeAminoMsg): MsgUpdateBasketFee {
    return MsgUpdateBasketFee.fromAmino(object.value);
  },

  toAminoMsg(message: MsgUpdateBasketFee): MsgUpdateBasketFeeAminoMsg {
    return {
      type: "regen.basket/MsgUpdateBasketFee",
      value: MsgUpdateBasketFee.toAmino(message)
    };
  },

  fromProtoMsg(message: MsgUpdateBasketFeeProtoMsg): MsgUpdateBasketFee {
    return MsgUpdateBasketFee.decode(message.value);
  },

  toProto(message: MsgUpdateBasketFee): Uint8Array {
    return MsgUpdateBasketFee.encode(message).finish();
  },

  toProtoMsg(message: MsgUpdateBasketFee): MsgUpdateBasketFeeProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateBasketFee",
      value: MsgUpdateBasketFee.encode(message).finish()
    };
  }

};

function createBaseMsgUpdateBasketFeeResponse(): MsgUpdateBasketFeeResponse {
  return {};
}

export const MsgUpdateBasketFeeResponse = {
  encode(_: MsgUpdateBasketFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBasketFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBasketFeeResponse();

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

  fromJSON(_: any): MsgUpdateBasketFeeResponse {
    return {};
  },

  toJSON(_: MsgUpdateBasketFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgUpdateBasketFeeResponse>): MsgUpdateBasketFeeResponse {
    const message = createBaseMsgUpdateBasketFeeResponse();
    return message;
  },

  fromAmino(_: MsgUpdateBasketFeeResponseAmino): MsgUpdateBasketFeeResponse {
    return {};
  },

  toAmino(_: MsgUpdateBasketFeeResponse): MsgUpdateBasketFeeResponseAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: MsgUpdateBasketFeeResponseAminoMsg): MsgUpdateBasketFeeResponse {
    return MsgUpdateBasketFeeResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgUpdateBasketFeeResponseProtoMsg): MsgUpdateBasketFeeResponse {
    return MsgUpdateBasketFeeResponse.decode(message.value);
  },

  toProto(message: MsgUpdateBasketFeeResponse): Uint8Array {
    return MsgUpdateBasketFeeResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgUpdateBasketFeeResponse): MsgUpdateBasketFeeResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateBasketFeeResponse",
      value: MsgUpdateBasketFeeResponse.encode(message).finish()
    };
  }

};

function createBaseMsgUpdateCurator(): MsgUpdateCurator {
  return {
    curator: "",
    denom: "",
    newCurator: ""
  };
}

export const MsgUpdateCurator = {
  encode(message: MsgUpdateCurator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.curator !== "") {
      writer.uint32(10).string(message.curator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.newCurator !== "") {
      writer.uint32(26).string(message.newCurator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCurator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCurator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.curator = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.newCurator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateCurator {
    return {
      curator: isSet(object.curator) ? String(object.curator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      newCurator: isSet(object.newCurator) ? String(object.newCurator) : ""
    };
  },

  toJSON(message: MsgUpdateCurator): unknown {
    const obj: any = {};
    message.curator !== undefined && (obj.curator = message.curator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.newCurator !== undefined && (obj.newCurator = message.newCurator);
    return obj;
  },

  fromPartial(object: Partial<MsgUpdateCurator>): MsgUpdateCurator {
    const message = createBaseMsgUpdateCurator();
    message.curator = object.curator ?? "";
    message.denom = object.denom ?? "";
    message.newCurator = object.newCurator ?? "";
    return message;
  },

  fromAmino(object: MsgUpdateCuratorAmino): MsgUpdateCurator {
    return {
      curator: object.curator,
      denom: object.denom,
      newCurator: object.new_curator
    };
  },

  toAmino(message: MsgUpdateCurator): MsgUpdateCuratorAmino {
    const obj: any = {};
    obj.curator = message.curator;
    obj.denom = message.denom;
    obj.new_curator = message.newCurator;
    return obj;
  },

  fromAminoMsg(object: MsgUpdateCuratorAminoMsg): MsgUpdateCurator {
    return MsgUpdateCurator.fromAmino(object.value);
  },

  toAminoMsg(message: MsgUpdateCurator): MsgUpdateCuratorAminoMsg {
    return {
      type: "regen.basket/MsgUpdateCurator",
      value: MsgUpdateCurator.toAmino(message)
    };
  },

  fromProtoMsg(message: MsgUpdateCuratorProtoMsg): MsgUpdateCurator {
    return MsgUpdateCurator.decode(message.value);
  },

  toProto(message: MsgUpdateCurator): Uint8Array {
    return MsgUpdateCurator.encode(message).finish();
  },

  toProtoMsg(message: MsgUpdateCurator): MsgUpdateCuratorProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateCurator",
      value: MsgUpdateCurator.encode(message).finish()
    };
  }

};

function createBaseMsgUpdateCuratorResponse(): MsgUpdateCuratorResponse {
  return {};
}

export const MsgUpdateCuratorResponse = {
  encode(_: MsgUpdateCuratorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCuratorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCuratorResponse();

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

  fromJSON(_: any): MsgUpdateCuratorResponse {
    return {};
  },

  toJSON(_: MsgUpdateCuratorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgUpdateCuratorResponse>): MsgUpdateCuratorResponse {
    const message = createBaseMsgUpdateCuratorResponse();
    return message;
  },

  fromAmino(_: MsgUpdateCuratorResponseAmino): MsgUpdateCuratorResponse {
    return {};
  },

  toAmino(_: MsgUpdateCuratorResponse): MsgUpdateCuratorResponseAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: MsgUpdateCuratorResponseAminoMsg): MsgUpdateCuratorResponse {
    return MsgUpdateCuratorResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgUpdateCuratorResponseProtoMsg): MsgUpdateCuratorResponse {
    return MsgUpdateCuratorResponse.decode(message.value);
  },

  toProto(message: MsgUpdateCuratorResponse): Uint8Array {
    return MsgUpdateCuratorResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgUpdateCuratorResponse): MsgUpdateCuratorResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateCuratorResponse",
      value: MsgUpdateCuratorResponse.encode(message).finish()
    };
  }

};

function createBaseMsgUpdateDateCriteria(): MsgUpdateDateCriteria {
  return {
    authority: "",
    denom: "",
    newDateCriteria: undefined
  };
}

export const MsgUpdateDateCriteria = {
  encode(message: MsgUpdateDateCriteria, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.newDateCriteria !== undefined) {
      DateCriteria.encode(message.newDateCriteria, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDateCriteria {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDateCriteria();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 8:
          message.newDateCriteria = DateCriteria.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateDateCriteria {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      newDateCriteria: isSet(object.newDateCriteria) ? DateCriteria.fromJSON(object.newDateCriteria) : undefined
    };
  },

  toJSON(message: MsgUpdateDateCriteria): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    message.newDateCriteria !== undefined && (obj.newDateCriteria = message.newDateCriteria ? DateCriteria.toJSON(message.newDateCriteria) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgUpdateDateCriteria>): MsgUpdateDateCriteria {
    const message = createBaseMsgUpdateDateCriteria();
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    message.newDateCriteria = object.newDateCriteria !== undefined && object.newDateCriteria !== null ? DateCriteria.fromPartial(object.newDateCriteria) : undefined;
    return message;
  },

  fromAmino(object: MsgUpdateDateCriteriaAmino): MsgUpdateDateCriteria {
    return {
      authority: object.authority,
      denom: object.denom,
      newDateCriteria: object?.new_date_criteria ? DateCriteria.fromAmino(object.new_date_criteria) : undefined
    };
  },

  toAmino(message: MsgUpdateDateCriteria): MsgUpdateDateCriteriaAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.denom = message.denom;
    obj.new_date_criteria = message.newDateCriteria ? DateCriteria.toAmino(message.newDateCriteria) : undefined;
    return obj;
  },

  fromAminoMsg(object: MsgUpdateDateCriteriaAminoMsg): MsgUpdateDateCriteria {
    return MsgUpdateDateCriteria.fromAmino(object.value);
  },

  toAminoMsg(message: MsgUpdateDateCriteria): MsgUpdateDateCriteriaAminoMsg {
    return {
      type: "regen.basket/MsgUpdateDateCriteria",
      value: MsgUpdateDateCriteria.toAmino(message)
    };
  },

  fromProtoMsg(message: MsgUpdateDateCriteriaProtoMsg): MsgUpdateDateCriteria {
    return MsgUpdateDateCriteria.decode(message.value);
  },

  toProto(message: MsgUpdateDateCriteria): Uint8Array {
    return MsgUpdateDateCriteria.encode(message).finish();
  },

  toProtoMsg(message: MsgUpdateDateCriteria): MsgUpdateDateCriteriaProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria",
      value: MsgUpdateDateCriteria.encode(message).finish()
    };
  }

};

function createBaseMsgUpdateDateCriteriaResponse(): MsgUpdateDateCriteriaResponse {
  return {};
}

export const MsgUpdateDateCriteriaResponse = {
  encode(_: MsgUpdateDateCriteriaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDateCriteriaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDateCriteriaResponse();

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

  fromJSON(_: any): MsgUpdateDateCriteriaResponse {
    return {};
  },

  toJSON(_: MsgUpdateDateCriteriaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgUpdateDateCriteriaResponse>): MsgUpdateDateCriteriaResponse {
    const message = createBaseMsgUpdateDateCriteriaResponse();
    return message;
  },

  fromAmino(_: MsgUpdateDateCriteriaResponseAmino): MsgUpdateDateCriteriaResponse {
    return {};
  },

  toAmino(_: MsgUpdateDateCriteriaResponse): MsgUpdateDateCriteriaResponseAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: MsgUpdateDateCriteriaResponseAminoMsg): MsgUpdateDateCriteriaResponse {
    return MsgUpdateDateCriteriaResponse.fromAmino(object.value);
  },

  fromProtoMsg(message: MsgUpdateDateCriteriaResponseProtoMsg): MsgUpdateDateCriteriaResponse {
    return MsgUpdateDateCriteriaResponse.decode(message.value);
  },

  toProto(message: MsgUpdateDateCriteriaResponse): Uint8Array {
    return MsgUpdateDateCriteriaResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgUpdateDateCriteriaResponse): MsgUpdateDateCriteriaResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateDateCriteriaResponse",
      value: MsgUpdateDateCriteriaResponse.encode(message).finish()
    };
  }

};