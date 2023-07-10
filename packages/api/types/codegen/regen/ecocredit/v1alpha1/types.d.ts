import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** ClassInfo represents the high-level on-chain information for a credit class. */
export interface ClassInfo {
    /** class_id is the unique ID of credit class. */
    classId: string;
    /** admin is the admin of the credit class. */
    admin: string;
    /** issuers are the approved issuers of the credit class. */
    issuers: string[];
    /** metadata is any arbitrary metadata to attached to the credit class. */
    metadata: Uint8Array;
    /**
     * credit_type describes the type of credit (e.g. carbon, biodiversity), as
     * well as unit and precision.
     */
    creditType: CreditType;
    /** The number of batches issued in this credit class. */
    numBatches: Long;
}
export interface ClassInfoProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.ClassInfo";
    value: Uint8Array;
}
/** ClassInfo represents the high-level on-chain information for a credit class. */
export interface ClassInfoAmino {
    /** class_id is the unique ID of credit class. */
    class_id: string;
    /** admin is the admin of the credit class. */
    admin: string;
    /** issuers are the approved issuers of the credit class. */
    issuers: string[];
    /** metadata is any arbitrary metadata to attached to the credit class. */
    metadata: Uint8Array;
    /**
     * credit_type describes the type of credit (e.g. carbon, biodiversity), as
     * well as unit and precision.
     */
    credit_type?: CreditTypeAmino;
    /** The number of batches issued in this credit class. */
    num_batches: string;
}
export interface ClassInfoAminoMsg {
    type: "/regen.ecocredit.v1alpha1.ClassInfo";
    value: ClassInfoAmino;
}
/** ClassInfo represents the high-level on-chain information for a credit class. */
export interface ClassInfoSDKType {
    class_id: string;
    admin: string;
    issuers: string[];
    metadata: Uint8Array;
    credit_type: CreditTypeSDKType;
    num_batches: Long;
}
/** BatchInfo represents the high-level on-chain information for a credit batch. */
export interface BatchInfo {
    /** class_id is the unique ID of credit class. */
    classId: string;
    /** batch_denom is the unique ID of credit batch. */
    batchDenom: string;
    /** issuer is the issuer of the credit batch. */
    issuer: string;
    /**
     * total_amount is the total number of active credits in the credit batch.
     * Some of the issued credits may be cancelled and will be removed from
     * total_amount and tracked in amount_cancelled. total_amount and
     * amount_cancelled will always sum to the original amount of credits that
     * were issued.
     */
    totalAmount: string;
    /** metadata is any arbitrary metadata attached to the credit batch. */
    metadata: Uint8Array;
    /**
     * amount_cancelled is the number of credits in the batch that have been
     * cancelled, effectively undoing there issuance. The sum of total_amount and
     * amount_cancelled will always sum to the original amount of credits that
     * were issued.
     */
    amountCancelled: string;
    /**
     * start_date is the beginning of the period during which this credit batch
     * was quantified and verified.
     */
    startDate: Timestamp;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    endDate: Timestamp;
    /**
     * project_location is the location of the project backing the credits in this
     * batch. Full documentation can be found in MsgCreateBatch.project_location.
     */
    projectLocation: string;
}
export interface BatchInfoProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.BatchInfo";
    value: Uint8Array;
}
/** BatchInfo represents the high-level on-chain information for a credit batch. */
export interface BatchInfoAmino {
    /** class_id is the unique ID of credit class. */
    class_id: string;
    /** batch_denom is the unique ID of credit batch. */
    batch_denom: string;
    /** issuer is the issuer of the credit batch. */
    issuer: string;
    /**
     * total_amount is the total number of active credits in the credit batch.
     * Some of the issued credits may be cancelled and will be removed from
     * total_amount and tracked in amount_cancelled. total_amount and
     * amount_cancelled will always sum to the original amount of credits that
     * were issued.
     */
    total_amount: string;
    /** metadata is any arbitrary metadata attached to the credit batch. */
    metadata: Uint8Array;
    /**
     * amount_cancelled is the number of credits in the batch that have been
     * cancelled, effectively undoing there issuance. The sum of total_amount and
     * amount_cancelled will always sum to the original amount of credits that
     * were issued.
     */
    amount_cancelled: string;
    /**
     * start_date is the beginning of the period during which this credit batch
     * was quantified and verified.
     */
    start_date?: TimestampAmino;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    end_date?: TimestampAmino;
    /**
     * project_location is the location of the project backing the credits in this
     * batch. Full documentation can be found in MsgCreateBatch.project_location.
     */
    project_location: string;
}
export interface BatchInfoAminoMsg {
    type: "/regen.ecocredit.v1alpha1.BatchInfo";
    value: BatchInfoAmino;
}
/** BatchInfo represents the high-level on-chain information for a credit batch. */
export interface BatchInfoSDKType {
    class_id: string;
    batch_denom: string;
    issuer: string;
    total_amount: string;
    metadata: Uint8Array;
    amount_cancelled: string;
    start_date: TimestampSDKType;
    end_date: TimestampSDKType;
    project_location: string;
}
/**
 * Params defines the updatable global parameters of the ecocredit module for
 * use with the x/params module.
 */
export interface Params {
    /** credit_class_fee is the fixed fee charged on creation of a new credit class */
    creditClassFee: Coin[];
    /**
     * allowed_class_creators is an allowlist defining the addresses with
     * the required permissions to create credit classes
     */
    allowedClassCreators: string[];
    /**
     * allowlist_enabled is a param that enables/disables the allowlist for credit
     * creation
     */
    allowlistEnabled: boolean;
    /** credit_types is a list of definitions for credit types */
    creditTypes: CreditType[];
    /** basket_creation_fee is the fee to create a new basket denom. */
    basketCreationFee: Coin[];
}
export interface ParamsProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.Params";
    value: Uint8Array;
}
/**
 * Params defines the updatable global parameters of the ecocredit module for
 * use with the x/params module.
 */
export interface ParamsAmino {
    /** credit_class_fee is the fixed fee charged on creation of a new credit class */
    credit_class_fee: CoinAmino[];
    /**
     * allowed_class_creators is an allowlist defining the addresses with
     * the required permissions to create credit classes
     */
    allowed_class_creators: string[];
    /**
     * allowlist_enabled is a param that enables/disables the allowlist for credit
     * creation
     */
    allowlist_enabled: boolean;
    /** credit_types is a list of definitions for credit types */
    credit_types: CreditTypeAmino[];
    /** basket_creation_fee is the fee to create a new basket denom. */
    basket_creation_fee: CoinAmino[];
}
export interface ParamsAminoMsg {
    type: "/regen.ecocredit.v1alpha1.Params";
    value: ParamsAmino;
}
/**
 * Params defines the updatable global parameters of the ecocredit module for
 * use with the x/params module.
 */
export interface ParamsSDKType {
    credit_class_fee: CoinSDKType[];
    allowed_class_creators: string[];
    allowlist_enabled: boolean;
    credit_types: CreditTypeSDKType[];
    basket_creation_fee: CoinSDKType[];
}
/**
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */
export interface CreditType {
    /** the type of credit (e.g. carbon, biodiversity, etc) */
    name: string;
    /**
     * abbreviation is a 1-3 character uppercase abbreviation of the CreditType
     * name, used in batch denominations within the CreditType. It must be unique.
     */
    abbreviation: string;
    /** the measurement unit (e.g. kg, ton, etc) */
    unit: string;
    /** the decimal precision */
    precision: number;
}
export interface CreditTypeProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.CreditType";
    value: Uint8Array;
}
/**
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */
export interface CreditTypeAmino {
    /** the type of credit (e.g. carbon, biodiversity, etc) */
    name: string;
    /**
     * abbreviation is a 1-3 character uppercase abbreviation of the CreditType
     * name, used in batch denominations within the CreditType. It must be unique.
     */
    abbreviation: string;
    /** the measurement unit (e.g. kg, ton, etc) */
    unit: string;
    /** the decimal precision */
    precision: number;
}
export interface CreditTypeAminoMsg {
    type: "/regen.ecocredit.v1alpha1.CreditType";
    value: CreditTypeAmino;
}
/**
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */
export interface CreditTypeSDKType {
    name: string;
    abbreviation: string;
    unit: string;
    precision: number;
}
/**
 * CreditTypeSeq associates a sequence number with a credit type abbreviation.
 * This represents the number of credit classes created with that credit type.
 */
export interface CreditTypeSeq {
    /** The credit type abbreviation */
    abbreviation: string;
    /** The sequence number of classes of the credit type */
    seqNumber: Long;
}
export interface CreditTypeSeqProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.CreditTypeSeq";
    value: Uint8Array;
}
/**
 * CreditTypeSeq associates a sequence number with a credit type abbreviation.
 * This represents the number of credit classes created with that credit type.
 */
export interface CreditTypeSeqAmino {
    /** The credit type abbreviation */
    abbreviation: string;
    /** The sequence number of classes of the credit type */
    seq_number: string;
}
export interface CreditTypeSeqAminoMsg {
    type: "/regen.ecocredit.v1alpha1.CreditTypeSeq";
    value: CreditTypeSeqAmino;
}
/**
 * CreditTypeSeq associates a sequence number with a credit type abbreviation.
 * This represents the number of credit classes created with that credit type.
 */
export interface CreditTypeSeqSDKType {
    abbreviation: string;
    seq_number: Long;
}
export declare const ClassInfo: {
    encode(message: ClassInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassInfo;
    fromJSON(object: any): ClassInfo;
    toJSON(message: ClassInfo): unknown;
    fromPartial(object: Partial<ClassInfo>): ClassInfo;
    fromAmino(object: ClassInfoAmino): ClassInfo;
    toAmino(message: ClassInfo): ClassInfoAmino;
    fromAminoMsg(object: ClassInfoAminoMsg): ClassInfo;
    fromProtoMsg(message: ClassInfoProtoMsg): ClassInfo;
    toProto(message: ClassInfo): Uint8Array;
    toProtoMsg(message: ClassInfo): ClassInfoProtoMsg;
};
export declare const BatchInfo: {
    encode(message: BatchInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchInfo;
    fromJSON(object: any): BatchInfo;
    toJSON(message: BatchInfo): unknown;
    fromPartial(object: Partial<BatchInfo>): BatchInfo;
    fromAmino(object: BatchInfoAmino): BatchInfo;
    toAmino(message: BatchInfo): BatchInfoAmino;
    fromAminoMsg(object: BatchInfoAminoMsg): BatchInfo;
    fromProtoMsg(message: BatchInfoProtoMsg): BatchInfo;
    toProto(message: BatchInfo): Uint8Array;
    toProtoMsg(message: BatchInfo): BatchInfoProtoMsg;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const CreditType: {
    encode(message: CreditType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreditType;
    fromJSON(object: any): CreditType;
    toJSON(message: CreditType): unknown;
    fromPartial(object: Partial<CreditType>): CreditType;
    fromAmino(object: CreditTypeAmino): CreditType;
    toAmino(message: CreditType): CreditTypeAmino;
    fromAminoMsg(object: CreditTypeAminoMsg): CreditType;
    fromProtoMsg(message: CreditTypeProtoMsg): CreditType;
    toProto(message: CreditType): Uint8Array;
    toProtoMsg(message: CreditType): CreditTypeProtoMsg;
};
export declare const CreditTypeSeq: {
    encode(message: CreditTypeSeq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreditTypeSeq;
    fromJSON(object: any): CreditTypeSeq;
    toJSON(message: CreditTypeSeq): unknown;
    fromPartial(object: Partial<CreditTypeSeq>): CreditTypeSeq;
    fromAmino(object: CreditTypeSeqAmino): CreditTypeSeq;
    toAmino(message: CreditTypeSeq): CreditTypeSeqAmino;
    fromAminoMsg(object: CreditTypeSeqAminoMsg): CreditTypeSeq;
    fromProtoMsg(message: CreditTypeSeqProtoMsg): CreditTypeSeq;
    toProto(message: CreditTypeSeq): Uint8Array;
    toProtoMsg(message: CreditTypeSeq): CreditTypeSeqProtoMsg;
};
