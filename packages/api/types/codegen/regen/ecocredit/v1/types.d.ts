import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { CreditType, CreditTypeSDKType } from "./state";
import * as _m0 from "protobufjs/minimal";
/**
 * Params defines the updatable global parameters of the ecocredit module for
 * use with the x/params module.
 */
export interface Params {
    /**
     * credit_class_fee is a list of credit class creation fees accepted when
     * creating a credit class. Any fee listed is accepted and charged to the
     * credit class creator when creating a credit class.
     */
    creditClassFee: Coin[];
    /**
     * basket_fee is a list of basket creation fees accepted when creating a
     * basket. Any fee listed is accepted and charged to the basket creator when
     * creating a basket.
     */
    basketFee: Coin[];
    /**
     * allowed_class_creators is an allowlist defining the addresses with the
     * required permissions to create credit classes when allowlist_enabled is set
     * to true. If allowlist_enabled is set to false, this list has no effect.
     */
    allowedClassCreators: string[];
    /**
     * allowlist_enabled determines whether or not the allowlist for creating
     * credit classes is enabled. When set to true, only the addresses listed in
     * allowed_class_creators can create credit classes. When set to false, any
     * address can create credit classes.
     */
    allowlistEnabled: boolean;
    /**
     * allowed_denoms is a list of bank denoms allowed to be used in the ask price
     * of sell orders.
     *
     * Since Revision 2
     */
    allowedDenoms: AllowedDenom[];
    /**
     * AllowedBridgeChains is a list of chain names that are allowed to be used in
     * bridge operations.
     *
     * Since Revision 2
     */
    allowedBridgeChains: string[];
}
/**
 * Params defines the updatable global parameters of the ecocredit module for
 * use with the x/params module.
 */
export interface ParamsSDKType {
    /**
     * credit_class_fee is a list of credit class creation fees accepted when
     * creating a credit class. Any fee listed is accepted and charged to the
     * credit class creator when creating a credit class.
     */
    credit_class_fee: CoinSDKType[];
    /**
     * basket_fee is a list of basket creation fees accepted when creating a
     * basket. Any fee listed is accepted and charged to the basket creator when
     * creating a basket.
     */
    basket_fee: CoinSDKType[];
    /**
     * allowed_class_creators is an allowlist defining the addresses with the
     * required permissions to create credit classes when allowlist_enabled is set
     * to true. If allowlist_enabled is set to false, this list has no effect.
     */
    allowed_class_creators: string[];
    /**
     * allowlist_enabled determines whether or not the allowlist for creating
     * credit classes is enabled. When set to true, only the addresses listed in
     * allowed_class_creators can create credit classes. When set to false, any
     * address can create credit classes.
     */
    allowlist_enabled: boolean;
    /**
     * allowed_denoms is a list of bank denoms allowed to be used in the ask price
     * of sell orders.
     *
     * Since Revision 2
     */
    allowed_denoms: AllowedDenomSDKType[];
    /**
     * AllowedBridgeChains is a list of chain names that are allowed to be used in
     * bridge operations.
     *
     * Since Revision 2
     */
    allowed_bridge_chains: string[];
}
/** Credits represents a simple structure for credits. */
export interface Credits {
    /** batch_denom is the denom of the credit batch. */
    batchDenom: string;
    /** amount is the amount of credits. */
    amount: string;
}
/** Credits represents a simple structure for credits. */
export interface CreditsSDKType {
    /** batch_denom is the denom of the credit batch. */
    batch_denom: string;
    /** amount is the amount of credits. */
    amount: string;
}
/** BatchIssuance represents a simple structure for a credit batch issuance. */
export interface BatchIssuance {
    /** recipient is the address of the account receiving the issued credits. */
    recipient: string;
    /**
     * tradable_amount is the amount of credits that the recipient will receive in
     * a tradable state. The number of decimal places must be less than or equal
     * to the credit type precision.
     */
    tradableAmount: string;
    /**
     * retired_amount is the amount of credits that the recipient will receive in
     * a retired state. The number of decimal places must be less than or equal to
     * the credit type precision.
     */
    retiredAmount: string;
    /**
     * retirement_jurisdiction is the jurisdiction of the recipient and is only
     * required if retired_amount is positive. A jurisdiction has the following
     * format: <country-code>[-<sub-national-code>[ <postal-code>]]
     * The country-code must be 2 alphabetic characters, the sub-national-code
     * can be 1-3 alphanumeric characters, and the postal-code can be up to 64
     * alphanumeric characters. Only the country-code is required, while the
     * sub-national-code and postal-code are optional and can be added for
     * increased precision.
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
/** BatchIssuance represents a simple structure for a credit batch issuance. */
export interface BatchIssuanceSDKType {
    /** recipient is the address of the account receiving the issued credits. */
    recipient: string;
    /**
     * tradable_amount is the amount of credits that the recipient will receive in
     * a tradable state. The number of decimal places must be less than or equal
     * to the credit type precision.
     */
    tradable_amount: string;
    /**
     * retired_amount is the amount of credits that the recipient will receive in
     * a retired state. The number of decimal places must be less than or equal to
     * the credit type precision.
     */
    retired_amount: string;
    /**
     * retirement_jurisdiction is the jurisdiction of the recipient and is only
     * required if retired_amount is positive. A jurisdiction has the following
     * format: <country-code>[-<sub-national-code>[ <postal-code>]]
     * The country-code must be 2 alphabetic characters, the sub-national-code
     * can be 1-3 alphanumeric characters, and the postal-code can be up to 64
     * alphanumeric characters. Only the country-code is required, while the
     * sub-national-code and postal-code are optional and can be added for
     * increased precision.
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
/**
 * OriginTx is the transaction from another chain or registry that triggered
 * the minting of credits.
 */
export interface OriginTx {
    /**
     * id is the transaction ID of an originating transaction or operation based
     * on a type (i.e. transaction ID, serial number).
     */
    id: string;
    /**
     * source is the source chain or registry of the transaction originating the
     * mint process (e.g. polygon, ethereum, verra).
     */
    source: string;
    /**
     * contract is the address of the contract on the source chain that was
     * executed when creating the transaction. This address will be stored in
     * state separately from the origin tx and on a per credit batch basis to be
     * used when sending credits back to the source chain. This field can be left
     * blank if credits are bridged from a non-contract-based source.
     */
    contract: string;
    /**
     * note is a reference note for accounting that will be included in an event
     * emitted from either Msg/CreateBatch or Msg/MintBatchCredits.
     */
    note: string;
}
/**
 * OriginTx is the transaction from another chain or registry that triggered
 * the minting of credits.
 */
export interface OriginTxSDKType {
    /**
     * id is the transaction ID of an originating transaction or operation based
     * on a type (i.e. transaction ID, serial number).
     */
    id: string;
    /**
     * source is the source chain or registry of the transaction originating the
     * mint process (e.g. polygon, ethereum, verra).
     */
    source: string;
    /**
     * contract is the address of the contract on the source chain that was
     * executed when creating the transaction. This address will be stored in
     * state separately from the origin tx and on a per credit batch basis to be
     * used when sending credits back to the source chain. This field can be left
     * blank if credits are bridged from a non-contract-based source.
     */
    contract: string;
    /**
     * note is a reference note for accounting that will be included in an event
     * emitted from either Msg/CreateBatch or Msg/MintBatchCredits.
     */
    note: string;
}
/**
 * CreditTypeProposal is a gov Content type for adding a credit type.
 * Deprecated (Since Revision 2): This message is no longer used and will be
 * removed in the next version. See MsgAddCreditType.
 */
export interface CreditTypeProposal {
    /** title is the title of the proposal. */
    title: string;
    /** description is the description of the proposal. */
    description: string;
    /**
     * credit_type is the credit type to be added to the network if the proposal
     * passes.
     */
    creditType?: CreditType;
}
/**
 * CreditTypeProposal is a gov Content type for adding a credit type.
 * Deprecated (Since Revision 2): This message is no longer used and will be
 * removed in the next version. See MsgAddCreditType.
 */
export interface CreditTypeProposalSDKType {
    /** title is the title of the proposal. */
    title: string;
    /** description is the description of the proposal. */
    description: string;
    /**
     * credit_type is the credit type to be added to the network if the proposal
     * passes.
     */
    credit_type?: CreditTypeSDKType;
}
/**
 * AllowedDenom represents the information for an allowed ask denom.
 *
 * Since Revision 2
 *
 * Deprecated(Since Revision 2): This type was added to support historical
 * queries for params but will also be removed in the next version.
 */
export interface AllowedDenom {
    /** denom is the bank denom to allow (ex. ibc/GLKHDSG423SGS) */
    bankDenom: string;
    /**
     * display_denom is the denom to display to the user and is informational.
     * Because the denom is likely an IBC denom, this should be chosen by
     * governance to represent the consensus trusted name of the denom.
     */
    displayDenom: string;
    /**
     * exponent is the exponent that relates the denom to the display_denom and is
     * informational
     */
    exponent: number;
}
/**
 * AllowedDenom represents the information for an allowed ask denom.
 *
 * Since Revision 2
 *
 * Deprecated(Since Revision 2): This type was added to support historical
 * queries for params but will also be removed in the next version.
 */
export interface AllowedDenomSDKType {
    /** denom is the bank denom to allow (ex. ibc/GLKHDSG423SGS) */
    bank_denom: string;
    /**
     * display_denom is the denom to display to the user and is informational.
     * Because the denom is likely an IBC denom, this should be chosen by
     * governance to represent the consensus trusted name of the denom.
     */
    display_denom: string;
    /**
     * exponent is the exponent that relates the denom to the display_denom and is
     * informational
     */
    exponent: number;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
export declare const Credits: {
    encode(message: Credits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Credits;
    fromJSON(object: any): Credits;
    toJSON(message: Credits): unknown;
    fromPartial(object: Partial<Credits>): Credits;
};
export declare const BatchIssuance: {
    encode(message: BatchIssuance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchIssuance;
    fromJSON(object: any): BatchIssuance;
    toJSON(message: BatchIssuance): unknown;
    fromPartial(object: Partial<BatchIssuance>): BatchIssuance;
};
export declare const OriginTx: {
    encode(message: OriginTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OriginTx;
    fromJSON(object: any): OriginTx;
    toJSON(message: OriginTx): unknown;
    fromPartial(object: Partial<OriginTx>): OriginTx;
};
export declare const CreditTypeProposal: {
    encode(message: CreditTypeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreditTypeProposal;
    fromJSON(object: any): CreditTypeProposal;
    toJSON(message: CreditTypeProposal): unknown;
    fromPartial(object: Partial<CreditTypeProposal>): CreditTypeProposal;
};
export declare const AllowedDenom: {
    encode(message: AllowedDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowedDenom;
    fromJSON(object: any): AllowedDenom;
    toJSON(message: AllowedDenom): unknown;
    fromPartial(object: Partial<AllowedDenom>): AllowedDenom;
};
