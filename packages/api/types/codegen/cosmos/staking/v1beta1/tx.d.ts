import { Description, DescriptionAmino, DescriptionSDKType, CommissionRates, CommissionRatesAmino, CommissionRatesSDKType } from "./staking";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidator {
    description?: Description;
    commission?: CommissionRates;
    minSelfDelegation: string;
    delegatorAddress: string;
    validatorAddress: string;
    pubkey?: (Any) | undefined;
    value?: Coin;
}
export interface MsgCreateValidatorProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator";
    value: Uint8Array;
}
export type MsgCreateValidatorEncoded = Omit<MsgCreateValidator, "pubkey"> & {
    pubkey?: AnyProtoMsg | undefined;
};
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidatorAmino {
    description?: DescriptionAmino;
    commission?: CommissionRatesAmino;
    min_self_delegation: string;
    delegator_address: string;
    validator_address: string;
    pubkey?: AnyAmino;
    value?: CoinAmino;
}
export interface MsgCreateValidatorAminoMsg {
    type: "cosmos-sdk/MsgCreateValidator";
    value: MsgCreateValidatorAmino;
}
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidatorSDKType {
    description?: DescriptionSDKType;
    commission?: CommissionRatesSDKType;
    min_self_delegation: string;
    delegator_address: string;
    validator_address: string;
    pubkey?: AnySDKType | undefined;
    value?: CoinSDKType;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponse {
}
export interface MsgCreateValidatorResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse";
    value: Uint8Array;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponseAmino {
}
export interface MsgCreateValidatorResponseAminoMsg {
    type: "cosmos-sdk/MsgCreateValidatorResponse";
    value: MsgCreateValidatorResponseAmino;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponseSDKType {
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidator {
    description?: Description;
    validatorAddress: string;
    /**
     * We pass a reference to the new commission rate and min self delegation as
     * it's not mandatory to update. If not updated, the deserialized rate will be
     * zero with no way to distinguish if an update was intended.
     * REF: #2373
     */
    commissionRate: string;
    minSelfDelegation: string;
}
export interface MsgEditValidatorProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator";
    value: Uint8Array;
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidatorAmino {
    description?: DescriptionAmino;
    validator_address: string;
    /**
     * We pass a reference to the new commission rate and min self delegation as
     * it's not mandatory to update. If not updated, the deserialized rate will be
     * zero with no way to distinguish if an update was intended.
     * REF: #2373
     */
    commission_rate: string;
    min_self_delegation: string;
}
export interface MsgEditValidatorAminoMsg {
    type: "cosmos-sdk/MsgEditValidator";
    value: MsgEditValidatorAmino;
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidatorSDKType {
    description?: DescriptionSDKType;
    validator_address: string;
    commission_rate: string;
    min_self_delegation: string;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponse {
}
export interface MsgEditValidatorResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse";
    value: Uint8Array;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponseAmino {
}
export interface MsgEditValidatorResponseAminoMsg {
    type: "cosmos-sdk/MsgEditValidatorResponse";
    value: MsgEditValidatorResponseAmino;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponseSDKType {
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount?: Coin;
}
export interface MsgDelegateProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegate";
    value: Uint8Array;
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegateAmino {
    delegator_address: string;
    validator_address: string;
    amount?: CoinAmino;
}
export interface MsgDelegateAminoMsg {
    type: "cosmos-sdk/MsgDelegate";
    value: MsgDelegateAmino;
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegateSDKType {
    delegator_address: string;
    validator_address: string;
    amount?: CoinSDKType;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponse {
}
export interface MsgDelegateResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse";
    value: Uint8Array;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponseAmino {
}
export interface MsgDelegateResponseAminoMsg {
    type: "cosmos-sdk/MsgDelegateResponse";
    value: MsgDelegateResponseAmino;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponseSDKType {
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegate {
    delegatorAddress: string;
    validatorSrcAddress: string;
    validatorDstAddress: string;
    amount?: Coin;
}
export interface MsgBeginRedelegateProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate";
    value: Uint8Array;
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegateAmino {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
    amount?: CoinAmino;
}
export interface MsgBeginRedelegateAminoMsg {
    type: "cosmos-sdk/MsgBeginRedelegate";
    value: MsgBeginRedelegateAmino;
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegateSDKType {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
    amount?: CoinSDKType;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponse {
    completionTime?: Timestamp;
}
export interface MsgBeginRedelegateResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse";
    value: Uint8Array;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponseAmino {
    completion_time?: TimestampAmino;
}
export interface MsgBeginRedelegateResponseAminoMsg {
    type: "cosmos-sdk/MsgBeginRedelegateResponse";
    value: MsgBeginRedelegateResponseAmino;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponseSDKType {
    completion_time?: TimestampSDKType;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount?: Coin;
}
export interface MsgUndelegateProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate";
    value: Uint8Array;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegateAmino {
    delegator_address: string;
    validator_address: string;
    amount?: CoinAmino;
}
export interface MsgUndelegateAminoMsg {
    type: "cosmos-sdk/MsgUndelegate";
    value: MsgUndelegateAmino;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegateSDKType {
    delegator_address: string;
    validator_address: string;
    amount?: CoinSDKType;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponse {
    completionTime?: Timestamp;
}
export interface MsgUndelegateResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse";
    value: Uint8Array;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponseAmino {
    completion_time?: TimestampAmino;
}
export interface MsgUndelegateResponseAminoMsg {
    type: "cosmos-sdk/MsgUndelegateResponse";
    value: MsgUndelegateResponseAmino;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponseSDKType {
    completion_time?: TimestampSDKType;
}
/**
 * MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegation {
    delegatorAddress: string;
    validatorAddress: string;
    /** amount is always less than or equal to unbonding delegation entry balance */
    amount?: Coin;
    /** creation_height is the height which the unbonding took place. */
    creationHeight: Long;
}
export interface MsgCancelUnbondingDelegationProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation";
    value: Uint8Array;
}
/**
 * MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegationAmino {
    delegator_address: string;
    validator_address: string;
    /** amount is always less than or equal to unbonding delegation entry balance */
    amount?: CoinAmino;
    /** creation_height is the height which the unbonding took place. */
    creation_height: string;
}
export interface MsgCancelUnbondingDelegationAminoMsg {
    type: "cosmos-sdk/MsgCancelUnbondingDelegation";
    value: MsgCancelUnbondingDelegationAmino;
}
/**
 * MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegationSDKType {
    delegator_address: string;
    validator_address: string;
    amount?: CoinSDKType;
    creation_height: Long;
}
/**
 * MsgCancelUnbondingDelegationResponse
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegationResponse {
}
export interface MsgCancelUnbondingDelegationResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse";
    value: Uint8Array;
}
/**
 * MsgCancelUnbondingDelegationResponse
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegationResponseAmino {
}
export interface MsgCancelUnbondingDelegationResponseAminoMsg {
    type: "cosmos-sdk/MsgCancelUnbondingDelegationResponse";
    value: MsgCancelUnbondingDelegationResponseAmino;
}
/**
 * MsgCancelUnbondingDelegationResponse
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUnbondingDelegationResponseSDKType {
}
export declare const MsgCreateValidator: {
    encode(message: MsgCreateValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidator;
    fromJSON(object: any): MsgCreateValidator;
    toJSON(message: MsgCreateValidator): unknown;
    fromPartial(object: Partial<MsgCreateValidator>): MsgCreateValidator;
    fromAmino(object: MsgCreateValidatorAmino): MsgCreateValidator;
    toAmino(message: MsgCreateValidator): MsgCreateValidatorAmino;
    fromAminoMsg(object: MsgCreateValidatorAminoMsg): MsgCreateValidator;
    toAminoMsg(message: MsgCreateValidator): MsgCreateValidatorAminoMsg;
    fromProtoMsg(message: MsgCreateValidatorProtoMsg): MsgCreateValidator;
    toProto(message: MsgCreateValidator): Uint8Array;
    toProtoMsg(message: MsgCreateValidator): MsgCreateValidatorProtoMsg;
};
export declare const MsgCreateValidatorResponse: {
    encode(_: MsgCreateValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidatorResponse;
    fromJSON(_: any): MsgCreateValidatorResponse;
    toJSON(_: MsgCreateValidatorResponse): unknown;
    fromPartial(_: Partial<MsgCreateValidatorResponse>): MsgCreateValidatorResponse;
    fromAmino(_: MsgCreateValidatorResponseAmino): MsgCreateValidatorResponse;
    toAmino(_: MsgCreateValidatorResponse): MsgCreateValidatorResponseAmino;
    fromAminoMsg(object: MsgCreateValidatorResponseAminoMsg): MsgCreateValidatorResponse;
    toAminoMsg(message: MsgCreateValidatorResponse): MsgCreateValidatorResponseAminoMsg;
    fromProtoMsg(message: MsgCreateValidatorResponseProtoMsg): MsgCreateValidatorResponse;
    toProto(message: MsgCreateValidatorResponse): Uint8Array;
    toProtoMsg(message: MsgCreateValidatorResponse): MsgCreateValidatorResponseProtoMsg;
};
export declare const MsgEditValidator: {
    encode(message: MsgEditValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidator;
    fromJSON(object: any): MsgEditValidator;
    toJSON(message: MsgEditValidator): unknown;
    fromPartial(object: Partial<MsgEditValidator>): MsgEditValidator;
    fromAmino(object: MsgEditValidatorAmino): MsgEditValidator;
    toAmino(message: MsgEditValidator): MsgEditValidatorAmino;
    fromAminoMsg(object: MsgEditValidatorAminoMsg): MsgEditValidator;
    toAminoMsg(message: MsgEditValidator): MsgEditValidatorAminoMsg;
    fromProtoMsg(message: MsgEditValidatorProtoMsg): MsgEditValidator;
    toProto(message: MsgEditValidator): Uint8Array;
    toProtoMsg(message: MsgEditValidator): MsgEditValidatorProtoMsg;
};
export declare const MsgEditValidatorResponse: {
    encode(_: MsgEditValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidatorResponse;
    fromJSON(_: any): MsgEditValidatorResponse;
    toJSON(_: MsgEditValidatorResponse): unknown;
    fromPartial(_: Partial<MsgEditValidatorResponse>): MsgEditValidatorResponse;
    fromAmino(_: MsgEditValidatorResponseAmino): MsgEditValidatorResponse;
    toAmino(_: MsgEditValidatorResponse): MsgEditValidatorResponseAmino;
    fromAminoMsg(object: MsgEditValidatorResponseAminoMsg): MsgEditValidatorResponse;
    toAminoMsg(message: MsgEditValidatorResponse): MsgEditValidatorResponseAminoMsg;
    fromProtoMsg(message: MsgEditValidatorResponseProtoMsg): MsgEditValidatorResponse;
    toProto(message: MsgEditValidatorResponse): Uint8Array;
    toProtoMsg(message: MsgEditValidatorResponse): MsgEditValidatorResponseProtoMsg;
};
export declare const MsgDelegate: {
    encode(message: MsgDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate;
    fromJSON(object: any): MsgDelegate;
    toJSON(message: MsgDelegate): unknown;
    fromPartial(object: Partial<MsgDelegate>): MsgDelegate;
    fromAmino(object: MsgDelegateAmino): MsgDelegate;
    toAmino(message: MsgDelegate): MsgDelegateAmino;
    fromAminoMsg(object: MsgDelegateAminoMsg): MsgDelegate;
    toAminoMsg(message: MsgDelegate): MsgDelegateAminoMsg;
    fromProtoMsg(message: MsgDelegateProtoMsg): MsgDelegate;
    toProto(message: MsgDelegate): Uint8Array;
    toProtoMsg(message: MsgDelegate): MsgDelegateProtoMsg;
};
export declare const MsgDelegateResponse: {
    encode(_: MsgDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse;
    fromJSON(_: any): MsgDelegateResponse;
    toJSON(_: MsgDelegateResponse): unknown;
    fromPartial(_: Partial<MsgDelegateResponse>): MsgDelegateResponse;
    fromAmino(_: MsgDelegateResponseAmino): MsgDelegateResponse;
    toAmino(_: MsgDelegateResponse): MsgDelegateResponseAmino;
    fromAminoMsg(object: MsgDelegateResponseAminoMsg): MsgDelegateResponse;
    toAminoMsg(message: MsgDelegateResponse): MsgDelegateResponseAminoMsg;
    fromProtoMsg(message: MsgDelegateResponseProtoMsg): MsgDelegateResponse;
    toProto(message: MsgDelegateResponse): Uint8Array;
    toProtoMsg(message: MsgDelegateResponse): MsgDelegateResponseProtoMsg;
};
export declare const MsgBeginRedelegate: {
    encode(message: MsgBeginRedelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginRedelegate;
    fromJSON(object: any): MsgBeginRedelegate;
    toJSON(message: MsgBeginRedelegate): unknown;
    fromPartial(object: Partial<MsgBeginRedelegate>): MsgBeginRedelegate;
    fromAmino(object: MsgBeginRedelegateAmino): MsgBeginRedelegate;
    toAmino(message: MsgBeginRedelegate): MsgBeginRedelegateAmino;
    fromAminoMsg(object: MsgBeginRedelegateAminoMsg): MsgBeginRedelegate;
    toAminoMsg(message: MsgBeginRedelegate): MsgBeginRedelegateAminoMsg;
    fromProtoMsg(message: MsgBeginRedelegateProtoMsg): MsgBeginRedelegate;
    toProto(message: MsgBeginRedelegate): Uint8Array;
    toProtoMsg(message: MsgBeginRedelegate): MsgBeginRedelegateProtoMsg;
};
export declare const MsgBeginRedelegateResponse: {
    encode(message: MsgBeginRedelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginRedelegateResponse;
    fromJSON(object: any): MsgBeginRedelegateResponse;
    toJSON(message: MsgBeginRedelegateResponse): unknown;
    fromPartial(object: Partial<MsgBeginRedelegateResponse>): MsgBeginRedelegateResponse;
    fromAmino(object: MsgBeginRedelegateResponseAmino): MsgBeginRedelegateResponse;
    toAmino(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseAmino;
    fromAminoMsg(object: MsgBeginRedelegateResponseAminoMsg): MsgBeginRedelegateResponse;
    toAminoMsg(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseAminoMsg;
    fromProtoMsg(message: MsgBeginRedelegateResponseProtoMsg): MsgBeginRedelegateResponse;
    toProto(message: MsgBeginRedelegateResponse): Uint8Array;
    toProtoMsg(message: MsgBeginRedelegateResponse): MsgBeginRedelegateResponseProtoMsg;
};
export declare const MsgUndelegate: {
    encode(message: MsgUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate;
    fromJSON(object: any): MsgUndelegate;
    toJSON(message: MsgUndelegate): unknown;
    fromPartial(object: Partial<MsgUndelegate>): MsgUndelegate;
    fromAmino(object: MsgUndelegateAmino): MsgUndelegate;
    toAmino(message: MsgUndelegate): MsgUndelegateAmino;
    fromAminoMsg(object: MsgUndelegateAminoMsg): MsgUndelegate;
    toAminoMsg(message: MsgUndelegate): MsgUndelegateAminoMsg;
    fromProtoMsg(message: MsgUndelegateProtoMsg): MsgUndelegate;
    toProto(message: MsgUndelegate): Uint8Array;
    toProtoMsg(message: MsgUndelegate): MsgUndelegateProtoMsg;
};
export declare const MsgUndelegateResponse: {
    encode(message: MsgUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateResponse;
    fromJSON(object: any): MsgUndelegateResponse;
    toJSON(message: MsgUndelegateResponse): unknown;
    fromPartial(object: Partial<MsgUndelegateResponse>): MsgUndelegateResponse;
    fromAmino(object: MsgUndelegateResponseAmino): MsgUndelegateResponse;
    toAmino(message: MsgUndelegateResponse): MsgUndelegateResponseAmino;
    fromAminoMsg(object: MsgUndelegateResponseAminoMsg): MsgUndelegateResponse;
    toAminoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseAminoMsg;
    fromProtoMsg(message: MsgUndelegateResponseProtoMsg): MsgUndelegateResponse;
    toProto(message: MsgUndelegateResponse): Uint8Array;
    toProtoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseProtoMsg;
};
export declare const MsgCancelUnbondingDelegation: {
    encode(message: MsgCancelUnbondingDelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUnbondingDelegation;
    fromJSON(object: any): MsgCancelUnbondingDelegation;
    toJSON(message: MsgCancelUnbondingDelegation): unknown;
    fromPartial(object: Partial<MsgCancelUnbondingDelegation>): MsgCancelUnbondingDelegation;
    fromAmino(object: MsgCancelUnbondingDelegationAmino): MsgCancelUnbondingDelegation;
    toAmino(message: MsgCancelUnbondingDelegation): MsgCancelUnbondingDelegationAmino;
    fromAminoMsg(object: MsgCancelUnbondingDelegationAminoMsg): MsgCancelUnbondingDelegation;
    toAminoMsg(message: MsgCancelUnbondingDelegation): MsgCancelUnbondingDelegationAminoMsg;
    fromProtoMsg(message: MsgCancelUnbondingDelegationProtoMsg): MsgCancelUnbondingDelegation;
    toProto(message: MsgCancelUnbondingDelegation): Uint8Array;
    toProtoMsg(message: MsgCancelUnbondingDelegation): MsgCancelUnbondingDelegationProtoMsg;
};
export declare const MsgCancelUnbondingDelegationResponse: {
    encode(_: MsgCancelUnbondingDelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUnbondingDelegationResponse;
    fromJSON(_: any): MsgCancelUnbondingDelegationResponse;
    toJSON(_: MsgCancelUnbondingDelegationResponse): unknown;
    fromPartial(_: Partial<MsgCancelUnbondingDelegationResponse>): MsgCancelUnbondingDelegationResponse;
    fromAmino(_: MsgCancelUnbondingDelegationResponseAmino): MsgCancelUnbondingDelegationResponse;
    toAmino(_: MsgCancelUnbondingDelegationResponse): MsgCancelUnbondingDelegationResponseAmino;
    fromAminoMsg(object: MsgCancelUnbondingDelegationResponseAminoMsg): MsgCancelUnbondingDelegationResponse;
    toAminoMsg(message: MsgCancelUnbondingDelegationResponse): MsgCancelUnbondingDelegationResponseAminoMsg;
    fromProtoMsg(message: MsgCancelUnbondingDelegationResponseProtoMsg): MsgCancelUnbondingDelegationResponse;
    toProto(message: MsgCancelUnbondingDelegationResponse): Uint8Array;
    toProtoMsg(message: MsgCancelUnbondingDelegationResponse): MsgCancelUnbondingDelegationResponseProtoMsg;
};
export declare const Cosmos_cryptoPubKey_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => Any;
export declare const Cosmos_cryptoPubKey_FromAmino: (content: AnyAmino) => string;
export declare const Cosmos_cryptoPubKey_ToAmino: (content: Any) => {
    typeUrl: string;
    value: Uint8Array;
};
