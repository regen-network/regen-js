import { Params, ParamsSDKType, ClassInfo, ClassInfoSDKType, BatchInfo, BatchInfoSDKType, CreditTypeSeq, CreditTypeSeqSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines ecocredit module's genesis state. */
export interface GenesisState {
    /**
     * Params contains the updateable global parameters for use with the x/params
     * module
     */
    params?: Params;
    /** class_info is the list of credit class info. */
    classInfo: ClassInfo[];
    /** batch_info is the list of credit batch info. */
    batchInfo: BatchInfo[];
    /** sequences is the list of credit type sequence. */
    sequences: CreditTypeSeq[];
    /** balances is the list of credit batch tradable/retired units. */
    balances: Balance[];
    /** supplies is the list of credit batch tradable/retired supply. */
    supplies: Supply[];
}
/** GenesisState defines ecocredit module's genesis state. */
export interface GenesisStateSDKType {
    /**
     * Params contains the updateable global parameters for use with the x/params
     * module
     */
    params?: ParamsSDKType;
    /** class_info is the list of credit class info. */
    class_info: ClassInfoSDKType[];
    /** batch_info is the list of credit batch info. */
    batch_info: BatchInfoSDKType[];
    /** sequences is the list of credit type sequence. */
    sequences: CreditTypeSeqSDKType[];
    /** balances is the list of credit batch tradable/retired units. */
    balances: BalanceSDKType[];
    /** supplies is the list of credit batch tradable/retired supply. */
    supplies: SupplySDKType[];
}
/**
 * Balance represents tradable or retired units of a credit batch with an
 * account address, batch_denom, and balance.
 */
export interface Balance {
    /** address is the account address of the account holding credits. */
    address: string;
    /** batch_denom is the unique ID of the credit batch. */
    batchDenom: string;
    /** tradable_balance is the tradable balance of the credit batch. */
    tradableBalance: string;
    /** retired_balance is the retired balance of the credit batch. */
    retiredBalance: string;
}
/**
 * Balance represents tradable or retired units of a credit batch with an
 * account address, batch_denom, and balance.
 */
export interface BalanceSDKType {
    /** address is the account address of the account holding credits. */
    address: string;
    /** batch_denom is the unique ID of the credit batch. */
    batch_denom: string;
    /** tradable_balance is the tradable balance of the credit batch. */
    tradable_balance: string;
    /** retired_balance is the retired balance of the credit batch. */
    retired_balance: string;
}
/** Supply represents a tradable or retired supply of a credit batch. */
export interface Supply {
    /** batch_denom is the unique ID of the credit batch. */
    batchDenom: string;
    /** tradable_supply is the tradable supply of the credit batch. */
    tradableSupply: string;
    /** retired_supply is the retired supply of the credit batch. */
    retiredSupply: string;
}
/** Supply represents a tradable or retired supply of a credit batch. */
export interface SupplySDKType {
    /** batch_denom is the unique ID of the credit batch. */
    batch_denom: string;
    /** tradable_supply is the tradable supply of the credit batch. */
    tradable_supply: string;
    /** retired_supply is the retired supply of the credit batch. */
    retired_supply: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Balance: {
    encode(message: Balance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Balance;
    fromJSON(object: any): Balance;
    toJSON(message: Balance): unknown;
    fromPartial(object: Partial<Balance>): Balance;
};
export declare const Supply: {
    encode(message: Supply, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Supply;
    fromJSON(object: any): Supply;
    toJSON(message: Supply): unknown;
    fromPartial(object: Partial<Supply>): Supply;
};
