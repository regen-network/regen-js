import { Params, ParamsAmino, ParamsSDKType, ClassInfo, ClassInfoAmino, ClassInfoSDKType, BatchInfo, BatchInfoAmino, BatchInfoSDKType, CreditTypeSeq, CreditTypeSeqAmino, CreditTypeSeqSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines ecocredit module's genesis state. */
export interface GenesisState {
    /**
     * Params contains the updateable global parameters for use with the x/params
     * module
     */
    params: Params;
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
export interface GenesisStateProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines ecocredit module's genesis state. */
export interface GenesisStateAmino {
    /**
     * Params contains the updateable global parameters for use with the x/params
     * module
     */
    params?: ParamsAmino;
    /** class_info is the list of credit class info. */
    class_info?: ClassInfoAmino[];
    /** batch_info is the list of credit batch info. */
    batch_info?: BatchInfoAmino[];
    /** sequences is the list of credit type sequence. */
    sequences?: CreditTypeSeqAmino[];
    /** balances is the list of credit batch tradable/retired units. */
    balances?: BalanceAmino[];
    /** supplies is the list of credit batch tradable/retired supply. */
    supplies?: SupplyAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/regen.ecocredit.v1alpha1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines ecocredit module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    class_info: ClassInfoSDKType[];
    batch_info: BatchInfoSDKType[];
    sequences: CreditTypeSeqSDKType[];
    balances: BalanceSDKType[];
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
export interface BalanceProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.Balance";
    value: Uint8Array;
}
/**
 * Balance represents tradable or retired units of a credit batch with an
 * account address, batch_denom, and balance.
 */
export interface BalanceAmino {
    /** address is the account address of the account holding credits. */
    address?: string;
    /** batch_denom is the unique ID of the credit batch. */
    batch_denom?: string;
    /** tradable_balance is the tradable balance of the credit batch. */
    tradable_balance?: string;
    /** retired_balance is the retired balance of the credit batch. */
    retired_balance?: string;
}
export interface BalanceAminoMsg {
    type: "/regen.ecocredit.v1alpha1.Balance";
    value: BalanceAmino;
}
/**
 * Balance represents tradable or retired units of a credit batch with an
 * account address, batch_denom, and balance.
 */
export interface BalanceSDKType {
    address: string;
    batch_denom: string;
    tradable_balance: string;
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
export interface SupplyProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.Supply";
    value: Uint8Array;
}
/** Supply represents a tradable or retired supply of a credit batch. */
export interface SupplyAmino {
    /** batch_denom is the unique ID of the credit batch. */
    batch_denom?: string;
    /** tradable_supply is the tradable supply of the credit batch. */
    tradable_supply?: string;
    /** retired_supply is the retired supply of the credit batch. */
    retired_supply?: string;
}
export interface SupplyAminoMsg {
    type: "/regen.ecocredit.v1alpha1.Supply";
    value: SupplyAmino;
}
/** Supply represents a tradable or retired supply of a credit batch. */
export interface SupplySDKType {
    batch_denom: string;
    tradable_supply: string;
    retired_supply: string;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const Balance: {
    typeUrl: string;
    encode(message: Balance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Balance;
    fromPartial(object: Partial<Balance>): Balance;
    fromAmino(object: BalanceAmino): Balance;
    toAmino(message: Balance): BalanceAmino;
    fromAminoMsg(object: BalanceAminoMsg): Balance;
    fromProtoMsg(message: BalanceProtoMsg): Balance;
    toProto(message: Balance): Uint8Array;
    toProtoMsg(message: Balance): BalanceProtoMsg;
};
export declare const Supply: {
    typeUrl: string;
    encode(message: Supply, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Supply;
    fromPartial(object: Partial<Supply>): Supply;
    fromAmino(object: SupplyAmino): Supply;
    toAmino(message: Supply): SupplyAmino;
    fromAminoMsg(object: SupplyAminoMsg): Supply;
    fromProtoMsg(message: SupplyProtoMsg): Supply;
    toProto(message: Supply): Uint8Array;
    toProtoMsg(message: Supply): SupplyProtoMsg;
};
