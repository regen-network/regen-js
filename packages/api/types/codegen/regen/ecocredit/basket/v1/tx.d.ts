import { DateCriteria, DateCriteriaAmino, DateCriteriaSDKType, BasketCredit, BasketCreditAmino, BasketCreditSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
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
    dateCriteria: DateCriteria;
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
    date_criteria: DateCriteriaSDKType;
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
    fee: Coin;
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
    fee: CoinSDKType;
}
/**
 * MsgUpdateBasketFeeResponse is the Msg/UpdateBasketFee response type.
 *
 * Since Revision 2
 */
export interface MsgUpdateBasketFeeResponse {
}
export interface MsgUpdateBasketFeeResponseProtoMsg {
    typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateBasketFeeResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateBasketFeeResponse is the Msg/UpdateBasketFee response type.
 *
 * Since Revision 2
 */
export interface MsgUpdateBasketFeeResponseAmino {
}
export interface MsgUpdateBasketFeeResponseAminoMsg {
    type: "/regen.ecocredit.basket.v1.MsgUpdateBasketFeeResponse";
    value: MsgUpdateBasketFeeResponseAmino;
}
/**
 * MsgUpdateBasketFeeResponse is the Msg/UpdateBasketFee response type.
 *
 * Since Revision 2
 */
export interface MsgUpdateBasketFeeResponseSDKType {
}
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
export interface MsgUpdateCuratorResponse {
}
export interface MsgUpdateCuratorResponseProtoMsg {
    typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateCuratorResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateCuratorResponse is the Msg/UpdateCurator response type.
 *
 * Since Revision 2
 */
export interface MsgUpdateCuratorResponseAmino {
}
export interface MsgUpdateCuratorResponseAminoMsg {
    type: "/regen.ecocredit.basket.v1.MsgUpdateCuratorResponse";
    value: MsgUpdateCuratorResponseAmino;
}
/**
 * MsgUpdateCuratorResponse is the Msg/UpdateCurator response type.
 *
 * Since Revision 2
 */
export interface MsgUpdateCuratorResponseSDKType {
}
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
    newDateCriteria: DateCriteria;
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
    new_date_criteria: DateCriteriaSDKType;
}
/**
 * MsgUpdateDateCriteriaResponse is the Msg/UpdateDateCriteria response type.
 *
 * Since Revision 3
 */
export interface MsgUpdateDateCriteriaResponse {
}
export interface MsgUpdateDateCriteriaResponseProtoMsg {
    typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateDateCriteriaResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateDateCriteriaResponse is the Msg/UpdateDateCriteria response type.
 *
 * Since Revision 3
 */
export interface MsgUpdateDateCriteriaResponseAmino {
}
export interface MsgUpdateDateCriteriaResponseAminoMsg {
    type: "/regen.ecocredit.basket.v1.MsgUpdateDateCriteriaResponse";
    value: MsgUpdateDateCriteriaResponseAmino;
}
/**
 * MsgUpdateDateCriteriaResponse is the Msg/UpdateDateCriteria response type.
 *
 * Since Revision 3
 */
export interface MsgUpdateDateCriteriaResponseSDKType {
}
export declare const MsgCreate: {
    encode(message: MsgCreate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreate;
    fromJSON(object: any): MsgCreate;
    toJSON(message: MsgCreate): unknown;
    fromPartial(object: Partial<MsgCreate>): MsgCreate;
    fromAmino(object: MsgCreateAmino): MsgCreate;
    toAmino(message: MsgCreate): MsgCreateAmino;
    fromAminoMsg(object: MsgCreateAminoMsg): MsgCreate;
    toAminoMsg(message: MsgCreate): MsgCreateAminoMsg;
    fromProtoMsg(message: MsgCreateProtoMsg): MsgCreate;
    toProto(message: MsgCreate): Uint8Array;
    toProtoMsg(message: MsgCreate): MsgCreateProtoMsg;
};
export declare const MsgCreateResponse: {
    encode(message: MsgCreateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse;
    fromJSON(object: any): MsgCreateResponse;
    toJSON(message: MsgCreateResponse): unknown;
    fromPartial(object: Partial<MsgCreateResponse>): MsgCreateResponse;
    fromAmino(object: MsgCreateResponseAmino): MsgCreateResponse;
    toAmino(message: MsgCreateResponse): MsgCreateResponseAmino;
    fromAminoMsg(object: MsgCreateResponseAminoMsg): MsgCreateResponse;
    fromProtoMsg(message: MsgCreateResponseProtoMsg): MsgCreateResponse;
    toProto(message: MsgCreateResponse): Uint8Array;
    toProtoMsg(message: MsgCreateResponse): MsgCreateResponseProtoMsg;
};
export declare const MsgPut: {
    encode(message: MsgPut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPut;
    fromJSON(object: any): MsgPut;
    toJSON(message: MsgPut): unknown;
    fromPartial(object: Partial<MsgPut>): MsgPut;
    fromAmino(object: MsgPutAmino): MsgPut;
    toAmino(message: MsgPut): MsgPutAmino;
    fromAminoMsg(object: MsgPutAminoMsg): MsgPut;
    toAminoMsg(message: MsgPut): MsgPutAminoMsg;
    fromProtoMsg(message: MsgPutProtoMsg): MsgPut;
    toProto(message: MsgPut): Uint8Array;
    toProtoMsg(message: MsgPut): MsgPutProtoMsg;
};
export declare const MsgPutResponse: {
    encode(message: MsgPutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPutResponse;
    fromJSON(object: any): MsgPutResponse;
    toJSON(message: MsgPutResponse): unknown;
    fromPartial(object: Partial<MsgPutResponse>): MsgPutResponse;
    fromAmino(object: MsgPutResponseAmino): MsgPutResponse;
    toAmino(message: MsgPutResponse): MsgPutResponseAmino;
    fromAminoMsg(object: MsgPutResponseAminoMsg): MsgPutResponse;
    fromProtoMsg(message: MsgPutResponseProtoMsg): MsgPutResponse;
    toProto(message: MsgPutResponse): Uint8Array;
    toProtoMsg(message: MsgPutResponse): MsgPutResponseProtoMsg;
};
export declare const MsgTake: {
    encode(message: MsgTake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTake;
    fromJSON(object: any): MsgTake;
    toJSON(message: MsgTake): unknown;
    fromPartial(object: Partial<MsgTake>): MsgTake;
    fromAmino(object: MsgTakeAmino): MsgTake;
    toAmino(message: MsgTake): MsgTakeAmino;
    fromAminoMsg(object: MsgTakeAminoMsg): MsgTake;
    toAminoMsg(message: MsgTake): MsgTakeAminoMsg;
    fromProtoMsg(message: MsgTakeProtoMsg): MsgTake;
    toProto(message: MsgTake): Uint8Array;
    toProtoMsg(message: MsgTake): MsgTakeProtoMsg;
};
export declare const MsgTakeResponse: {
    encode(message: MsgTakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTakeResponse;
    fromJSON(object: any): MsgTakeResponse;
    toJSON(message: MsgTakeResponse): unknown;
    fromPartial(object: Partial<MsgTakeResponse>): MsgTakeResponse;
    fromAmino(object: MsgTakeResponseAmino): MsgTakeResponse;
    toAmino(message: MsgTakeResponse): MsgTakeResponseAmino;
    fromAminoMsg(object: MsgTakeResponseAminoMsg): MsgTakeResponse;
    fromProtoMsg(message: MsgTakeResponseProtoMsg): MsgTakeResponse;
    toProto(message: MsgTakeResponse): Uint8Array;
    toProtoMsg(message: MsgTakeResponse): MsgTakeResponseProtoMsg;
};
export declare const MsgUpdateBasketFee: {
    encode(message: MsgUpdateBasketFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBasketFee;
    fromJSON(object: any): MsgUpdateBasketFee;
    toJSON(message: MsgUpdateBasketFee): unknown;
    fromPartial(object: Partial<MsgUpdateBasketFee>): MsgUpdateBasketFee;
    fromAmino(object: MsgUpdateBasketFeeAmino): MsgUpdateBasketFee;
    toAmino(message: MsgUpdateBasketFee): MsgUpdateBasketFeeAmino;
    fromAminoMsg(object: MsgUpdateBasketFeeAminoMsg): MsgUpdateBasketFee;
    toAminoMsg(message: MsgUpdateBasketFee): MsgUpdateBasketFeeAminoMsg;
    fromProtoMsg(message: MsgUpdateBasketFeeProtoMsg): MsgUpdateBasketFee;
    toProto(message: MsgUpdateBasketFee): Uint8Array;
    toProtoMsg(message: MsgUpdateBasketFee): MsgUpdateBasketFeeProtoMsg;
};
export declare const MsgUpdateBasketFeeResponse: {
    encode(_: MsgUpdateBasketFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBasketFeeResponse;
    fromJSON(_: any): MsgUpdateBasketFeeResponse;
    toJSON(_: MsgUpdateBasketFeeResponse): unknown;
    fromPartial(_: Partial<MsgUpdateBasketFeeResponse>): MsgUpdateBasketFeeResponse;
    fromAmino(_: MsgUpdateBasketFeeResponseAmino): MsgUpdateBasketFeeResponse;
    toAmino(_: MsgUpdateBasketFeeResponse): MsgUpdateBasketFeeResponseAmino;
    fromAminoMsg(object: MsgUpdateBasketFeeResponseAminoMsg): MsgUpdateBasketFeeResponse;
    fromProtoMsg(message: MsgUpdateBasketFeeResponseProtoMsg): MsgUpdateBasketFeeResponse;
    toProto(message: MsgUpdateBasketFeeResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateBasketFeeResponse): MsgUpdateBasketFeeResponseProtoMsg;
};
export declare const MsgUpdateCurator: {
    encode(message: MsgUpdateCurator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCurator;
    fromJSON(object: any): MsgUpdateCurator;
    toJSON(message: MsgUpdateCurator): unknown;
    fromPartial(object: Partial<MsgUpdateCurator>): MsgUpdateCurator;
    fromAmino(object: MsgUpdateCuratorAmino): MsgUpdateCurator;
    toAmino(message: MsgUpdateCurator): MsgUpdateCuratorAmino;
    fromAminoMsg(object: MsgUpdateCuratorAminoMsg): MsgUpdateCurator;
    toAminoMsg(message: MsgUpdateCurator): MsgUpdateCuratorAminoMsg;
    fromProtoMsg(message: MsgUpdateCuratorProtoMsg): MsgUpdateCurator;
    toProto(message: MsgUpdateCurator): Uint8Array;
    toProtoMsg(message: MsgUpdateCurator): MsgUpdateCuratorProtoMsg;
};
export declare const MsgUpdateCuratorResponse: {
    encode(_: MsgUpdateCuratorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCuratorResponse;
    fromJSON(_: any): MsgUpdateCuratorResponse;
    toJSON(_: MsgUpdateCuratorResponse): unknown;
    fromPartial(_: Partial<MsgUpdateCuratorResponse>): MsgUpdateCuratorResponse;
    fromAmino(_: MsgUpdateCuratorResponseAmino): MsgUpdateCuratorResponse;
    toAmino(_: MsgUpdateCuratorResponse): MsgUpdateCuratorResponseAmino;
    fromAminoMsg(object: MsgUpdateCuratorResponseAminoMsg): MsgUpdateCuratorResponse;
    fromProtoMsg(message: MsgUpdateCuratorResponseProtoMsg): MsgUpdateCuratorResponse;
    toProto(message: MsgUpdateCuratorResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateCuratorResponse): MsgUpdateCuratorResponseProtoMsg;
};
export declare const MsgUpdateDateCriteria: {
    encode(message: MsgUpdateDateCriteria, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDateCriteria;
    fromJSON(object: any): MsgUpdateDateCriteria;
    toJSON(message: MsgUpdateDateCriteria): unknown;
    fromPartial(object: Partial<MsgUpdateDateCriteria>): MsgUpdateDateCriteria;
    fromAmino(object: MsgUpdateDateCriteriaAmino): MsgUpdateDateCriteria;
    toAmino(message: MsgUpdateDateCriteria): MsgUpdateDateCriteriaAmino;
    fromAminoMsg(object: MsgUpdateDateCriteriaAminoMsg): MsgUpdateDateCriteria;
    toAminoMsg(message: MsgUpdateDateCriteria): MsgUpdateDateCriteriaAminoMsg;
    fromProtoMsg(message: MsgUpdateDateCriteriaProtoMsg): MsgUpdateDateCriteria;
    toProto(message: MsgUpdateDateCriteria): Uint8Array;
    toProtoMsg(message: MsgUpdateDateCriteria): MsgUpdateDateCriteriaProtoMsg;
};
export declare const MsgUpdateDateCriteriaResponse: {
    encode(_: MsgUpdateDateCriteriaResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDateCriteriaResponse;
    fromJSON(_: any): MsgUpdateDateCriteriaResponse;
    toJSON(_: MsgUpdateDateCriteriaResponse): unknown;
    fromPartial(_: Partial<MsgUpdateDateCriteriaResponse>): MsgUpdateDateCriteriaResponse;
    fromAmino(_: MsgUpdateDateCriteriaResponseAmino): MsgUpdateDateCriteriaResponse;
    toAmino(_: MsgUpdateDateCriteriaResponse): MsgUpdateDateCriteriaResponseAmino;
    fromAminoMsg(object: MsgUpdateDateCriteriaResponseAminoMsg): MsgUpdateDateCriteriaResponse;
    fromProtoMsg(message: MsgUpdateDateCriteriaResponseProtoMsg): MsgUpdateDateCriteriaResponse;
    toProto(message: MsgUpdateDateCriteriaResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateDateCriteriaResponse): MsgUpdateDateCriteriaResponseProtoMsg;
};
