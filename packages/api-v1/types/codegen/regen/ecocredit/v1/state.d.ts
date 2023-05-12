import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/**
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */
export interface CreditType {
    /**
     * abbreviation is a 1-3 character uppercase abbreviation of the CreditType
     * name, used in batch denominations within the CreditType. It must be unique.
     */
    abbreviation: string;
    /** name is the name of the credit type (e.g. carbon, biodiversity). */
    name: string;
    /** unit is the measurement unit of the credit type (e.g. kg, ton). */
    unit: string;
    /** precision is the decimal precision of the credit type. */
    precision: number;
}
/**
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */
export interface CreditTypeSDKType {
    /**
     * abbreviation is a 1-3 character uppercase abbreviation of the CreditType
     * name, used in batch denominations within the CreditType. It must be unique.
     */
    abbreviation: string;
    /** name is the name of the credit type (e.g. carbon, biodiversity). */
    name: string;
    /** unit is the measurement unit of the credit type (e.g. kg, ton). */
    unit: string;
    /** precision is the decimal precision of the credit type. */
    precision: number;
}
/** Class represents the high-level on-chain information for a credit class. */
export interface Class {
    /**
     * key is the table row identifier of the credit class used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key: Long;
    /**
     * id is the unique identifier of the credit class auto-generated from the
     * credit type abbreviation and the credit class sequence number.
     */
    id: string;
    /** admin is the admin of the credit class. */
    admin: Uint8Array;
    /** metadata is any arbitrary metadata to attached to the credit class. */
    metadata: string;
    /** credit_type_abbrev is the abbreviation of the credit type. */
    creditTypeAbbrev: string;
}
/** Class represents the high-level on-chain information for a credit class. */
export interface ClassSDKType {
    /**
     * key is the table row identifier of the credit class used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key: Long;
    /**
     * id is the unique identifier of the credit class auto-generated from the
     * credit type abbreviation and the credit class sequence number.
     */
    id: string;
    /** admin is the admin of the credit class. */
    admin: Uint8Array;
    /** metadata is any arbitrary metadata to attached to the credit class. */
    metadata: string;
    /** credit_type_abbrev is the abbreviation of the credit type. */
    credit_type_abbrev: string;
}
/**
 * ClassIssuers is a JOIN table for Class Info that stores the credit class
 * issuers
 */
export interface ClassIssuer {
    /**
     * class_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a class issuer to a credit class.
     */
    classKey: Long;
    /** issuer is the approved issuer of the credit class. */
    issuer: Uint8Array;
}
/**
 * ClassIssuers is a JOIN table for Class Info that stores the credit class
 * issuers
 */
export interface ClassIssuerSDKType {
    /**
     * class_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a class issuer to a credit class.
     */
    class_key: Long;
    /** issuer is the approved issuer of the credit class. */
    issuer: Uint8Array;
}
/** Project represents the high-level on-chain information for a project. */
export interface Project {
    /**
     * key is the table row identifier of the project used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key: Long;
    /**
     * id is the unique identifier of the project either auto-generated from the
     * credit class id and project sequence number or provided upon creation.
     */
    id: string;
    /** admin is the admin of the project. */
    admin: Uint8Array;
    /**
     * class_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a project to a credit class.
     */
    classKey: Long;
    /**
     * jurisdiction is the jurisdiction of the project.
     * Full documentation can be found in MsgCreateProject.jurisdiction.
     */
    jurisdiction: string;
    /** metadata is any arbitrary metadata attached to the project. */
    metadata: string;
    /** reference_id is any arbitrary string used to reference the project. */
    referenceId: string;
}
/** Project represents the high-level on-chain information for a project. */
export interface ProjectSDKType {
    /**
     * key is the table row identifier of the project used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key: Long;
    /**
     * id is the unique identifier of the project either auto-generated from the
     * credit class id and project sequence number or provided upon creation.
     */
    id: string;
    /** admin is the admin of the project. */
    admin: Uint8Array;
    /**
     * class_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a project to a credit class.
     */
    class_key: Long;
    /**
     * jurisdiction is the jurisdiction of the project.
     * Full documentation can be found in MsgCreateProject.jurisdiction.
     */
    jurisdiction: string;
    /** metadata is any arbitrary metadata attached to the project. */
    metadata: string;
    /** reference_id is any arbitrary string used to reference the project. */
    reference_id: string;
}
/** Batch represents the high-level on-chain information for a credit batch. */
export interface Batch {
    /**
     * key is the table row identifier of the credit batch used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key: Long;
    /**
     * issuer is the address that created the batch and which is
     * authorized to mint more credits if open=true.
     */
    issuer: Uint8Array;
    /**
     * project_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a credit batch to a project.
     */
    projectKey: Long;
    /**
     * denom is the unique identifier of the credit batch formed from the
     * project id, the batch sequence number, and the start and end date of the
     * credit batch.
     */
    denom: string;
    /** metadata is any arbitrary metadata attached to the credit batch. */
    metadata: string;
    /**
     * start_date is the beginning of the period during which this credit batch
     * was quantified and verified.
     */
    startDate?: Timestamp;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    endDate?: Timestamp;
    /** issuance_date is the timestamp when the credit batch was issued. */
    issuanceDate?: Timestamp;
    /**
     * open tells if it's possible to mint new credits in the future.
     * Once `open` is set to false, it can't be toggled any more.
     */
    open: boolean;
}
/** Batch represents the high-level on-chain information for a credit batch. */
export interface BatchSDKType {
    /**
     * key is the table row identifier of the credit batch used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key: Long;
    /**
     * issuer is the address that created the batch and which is
     * authorized to mint more credits if open=true.
     */
    issuer: Uint8Array;
    /**
     * project_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a credit batch to a project.
     */
    project_key: Long;
    /**
     * denom is the unique identifier of the credit batch formed from the
     * project id, the batch sequence number, and the start and end date of the
     * credit batch.
     */
    denom: string;
    /** metadata is any arbitrary metadata attached to the credit batch. */
    metadata: string;
    /**
     * start_date is the beginning of the period during which this credit batch
     * was quantified and verified.
     */
    start_date?: TimestampSDKType;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    end_date?: TimestampSDKType;
    /** issuance_date is the timestamp when the credit batch was issued. */
    issuance_date?: TimestampSDKType;
    /**
     * open tells if it's possible to mint new credits in the future.
     * Once `open` is set to false, it can't be toggled any more.
     */
    open: boolean;
}
/**
 * ClassSequence stores and increments the sequence number for credit classes
 * within a credit type.
 */
export interface ClassSequence {
    /**
     * credit_type_abbrev is the credit type abbreviation. This links a class
     * sequence to a credit type.
     */
    creditTypeAbbrev: string;
    /**
     * next_sequence is the next sequence number for a credit class within the
     * credit type. The sequence number is used to generate a class id.
     */
    nextSequence: Long;
}
/**
 * ClassSequence stores and increments the sequence number for credit classes
 * within a credit type.
 */
export interface ClassSequenceSDKType {
    /**
     * credit_type_abbrev is the credit type abbreviation. This links a class
     * sequence to a credit type.
     */
    credit_type_abbrev: string;
    /**
     * next_sequence is the next sequence number for a credit class within the
     * credit type. The sequence number is used to generate a class id.
     */
    next_sequence: Long;
}
/**
 * ProjectSequence stores and increments the sequence number for projects within
 * a credit class.
 */
export interface ProjectSequence {
    /**
     * class_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a project sequence to a credit class.
     */
    classKey: Long;
    /**
     * next_sequence is the next sequence number for a project within the credit
     * class. The sequence number is used to generate a project id.
     */
    nextSequence: Long;
}
/**
 * ProjectSequence stores and increments the sequence number for projects within
 * a credit class.
 */
export interface ProjectSequenceSDKType {
    /**
     * class_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a project sequence to a credit class.
     */
    class_key: Long;
    /**
     * next_sequence is the next sequence number for a project within the credit
     * class. The sequence number is used to generate a project id.
     */
    next_sequence: Long;
}
/**
 * BatchSequence stores and increments the sequence number for credit batches
 * within a project.
 */
export interface BatchSequence {
    /**
     * project_key is the table row identifier of the project used internally for
     * efficient lookups. This links a batch sequence to a project.
     */
    projectKey: Long;
    /**
     * next_sequence is the next sequence number for a credit batch within the
     * project. The sequence number is used to generate a batch denom.
     */
    nextSequence: Long;
}
/**
 * BatchSequence stores and increments the sequence number for credit batches
 * within a project.
 */
export interface BatchSequenceSDKType {
    /**
     * project_key is the table row identifier of the project used internally for
     * efficient lookups. This links a batch sequence to a project.
     */
    project_key: Long;
    /**
     * next_sequence is the next sequence number for a credit batch within the
     * project. The sequence number is used to generate a batch denom.
     */
    next_sequence: Long;
}
/** BatchBalance stores each accounts credit balance. */
export interface BatchBalance {
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links a batch balance to a credit batch.
     */
    batchKey: Long;
    /** address is the address of the account that owns the credits. */
    address: Uint8Array;
    /** tradable_amount is the total number of tradable credits owned by address. */
    tradableAmount: string;
    /** retired_amount is the total number of retired credits owned by address. */
    retiredAmount: string;
    /**
     * escrowed_amount is the total number of escrowed credits owned by address
     * and held in escrow by the marketplace. Credits are held in escrow when a
     * sell order is created and taken out of escrow when the sell order is either
     * cancelled, updated with a reduced quantity, or processed.
     */
    escrowedAmount: string;
}
/** BatchBalance stores each accounts credit balance. */
export interface BatchBalanceSDKType {
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links a batch balance to a credit batch.
     */
    batch_key: Long;
    /** address is the address of the account that owns the credits. */
    address: Uint8Array;
    /** tradable_amount is the total number of tradable credits owned by address. */
    tradable_amount: string;
    /** retired_amount is the total number of retired credits owned by address. */
    retired_amount: string;
    /**
     * escrowed_amount is the total number of escrowed credits owned by address
     * and held in escrow by the marketplace. Credits are held in escrow when a
     * sell order is created and taken out of escrow when the sell order is either
     * cancelled, updated with a reduced quantity, or processed.
     */
    escrowed_amount: string;
}
/** BatchSupply stores the supply of credits for a credit batch. */
export interface BatchSupply {
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links a batch supply to a credit batch.
     */
    batchKey: Long;
    /**
     * tradable_amount is the total number of tradable credits in the credit
     * batch. Tradable credits may be retired in which case they will be removed
     * from tradable_amount and tracked in retired_amount. Tradable credits may
     * also be cancelled in which case they will be removed from tradable_amount
     * and tracked in cancelled_amount. The sum of the tradable, retired, and
     * cancelled amounts will always equal the original credit issuance amount.
     */
    tradableAmount: string;
    /**
     * retired_amount is the total amount of credits that have been retired in the
     * credit batch. The sum of the tradable, retired, and cancelled amounts will
     * always equal the original credit issuance amount.
     */
    retiredAmount: string;
    /**
     * cancelled_amount is the number of credits in the batch that have been
     * cancelled, effectively undoing the issuance. The sum of the tradable,
     * retired, and cancelled amounts will always equal the original credit
     * issuance amount.
     */
    cancelledAmount: string;
}
/** BatchSupply stores the supply of credits for a credit batch. */
export interface BatchSupplySDKType {
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links a batch supply to a credit batch.
     */
    batch_key: Long;
    /**
     * tradable_amount is the total number of tradable credits in the credit
     * batch. Tradable credits may be retired in which case they will be removed
     * from tradable_amount and tracked in retired_amount. Tradable credits may
     * also be cancelled in which case they will be removed from tradable_amount
     * and tracked in cancelled_amount. The sum of the tradable, retired, and
     * cancelled amounts will always equal the original credit issuance amount.
     */
    tradable_amount: string;
    /**
     * retired_amount is the total amount of credits that have been retired in the
     * credit batch. The sum of the tradable, retired, and cancelled amounts will
     * always equal the original credit issuance amount.
     */
    retired_amount: string;
    /**
     * cancelled_amount is the number of credits in the batch that have been
     * cancelled, effectively undoing the issuance. The sum of the tradable,
     * retired, and cancelled amounts will always equal the original credit
     * issuance amount.
     */
    cancelled_amount: string;
}
/**
 * OriginTxIndex indexes the transaction ID and source from the OriginTx
 * included in Msg/CreateBatch and Msg/MintBatchCredits to prevent double
 * minting errors. The index is scoped to a credit class (it includes the
 * class_key) to prevent malicious credit class issuers from blocking any
 * bridge operations taking place within another credit class.
 */
export interface OriginTxIndex {
    /**
     * class_key is the table row identifier of the credit class within which the
     * credits were issued or minted. The class_key is included within the index
     * to prevent malicious credit class issuers from blocking bridge operations
     * taking place within another credit class.
     */
    classKey: Long;
    /**
     * id is the transaction ID of an originating transaction or operation
     * based on a type (i.e. transaction ID, serial number).
     */
    id: string;
    /**
     * source is the source chain or registry of the transaction originating
     * the mint process (e.g. polygon, ethereum, verra).
     */
    source: string;
}
/**
 * OriginTxIndex indexes the transaction ID and source from the OriginTx
 * included in Msg/CreateBatch and Msg/MintBatchCredits to prevent double
 * minting errors. The index is scoped to a credit class (it includes the
 * class_key) to prevent malicious credit class issuers from blocking any
 * bridge operations taking place within another credit class.
 */
export interface OriginTxIndexSDKType {
    /**
     * class_key is the table row identifier of the credit class within which the
     * credits were issued or minted. The class_key is included within the index
     * to prevent malicious credit class issuers from blocking bridge operations
     * taking place within another credit class.
     */
    class_key: Long;
    /**
     * id is the transaction ID of an originating transaction or operation
     * based on a type (i.e. transaction ID, serial number).
     */
    id: string;
    /**
     * source is the source chain or registry of the transaction originating
     * the mint process (e.g. polygon, ethereum, verra).
     */
    source: string;
}
/**
 * BatchContract stores the contract address from which credits were bridged
 * when credits are bridged from a contract-based chain, therefore ensuring
 * that each credit batch corresponds to a single contract and credits that
 * have been bridged will always be bridged back to the original contract.
 */
export interface BatchContract {
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links an external contract to a credit batch.
     */
    batchKey: Long;
    /**
     * class_key is the table row identifier of the credit class within which the
     * credit batch exists. A contract is unique within the scope of a credit
     * class to prevent malicious credit class issuers from blocking bridge
     * operations taking place within another credit class.
     */
    classKey: Long;
    /**
     * contract is the address of the contract on the source chain that was
     * executed when creating the transaction. This address will be used when
     * sending credits back to the source chain.
     */
    contract: string;
}
/**
 * BatchContract stores the contract address from which credits were bridged
 * when credits are bridged from a contract-based chain, therefore ensuring
 * that each credit batch corresponds to a single contract and credits that
 * have been bridged will always be bridged back to the original contract.
 */
export interface BatchContractSDKType {
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links an external contract to a credit batch.
     */
    batch_key: Long;
    /**
     * class_key is the table row identifier of the credit class within which the
     * credit batch exists. A contract is unique within the scope of a credit
     * class to prevent malicious credit class issuers from blocking bridge
     * operations taking place within another credit class.
     */
    class_key: Long;
    /**
     * contract is the address of the contract on the source chain that was
     * executed when creating the transaction. This address will be used when
     * sending credits back to the source chain.
     */
    contract: string;
}
/**
 * ClassCreatorAllowlist determines if the credit class creator allowlist is
 * enabled. When set to true, only the addresses in the AllowedClassCreator
 * table may create credit classes. When set to false, any address may create
 * credit classes. This table is controlled via governance.
 *
 * Since Revision 2
 */
export interface ClassCreatorAllowlist {
    /** enabled is whether or not the allow list is enabled. */
    enabled: boolean;
}
/**
 * ClassCreatorAllowlist determines if the credit class creator allowlist is
 * enabled. When set to true, only the addresses in the AllowedClassCreator
 * table may create credit classes. When set to false, any address may create
 * credit classes. This table is controlled via governance.
 *
 * Since Revision 2
 */
export interface ClassCreatorAllowlistSDKType {
    /** enabled is whether or not the allow list is enabled. */
    enabled: boolean;
}
/**
 * AllowedClassCreator is an allowed credit class creator. This table is
 * controlled via governance.
 *
 * Since Revision 2
 */
export interface AllowedClassCreator {
    /** address is the address that is allowed to create credit classes */
    address: Uint8Array;
}
/**
 * AllowedClassCreator is an allowed credit class creator. This table is
 * controlled via governance.
 *
 * Since Revision 2
 */
export interface AllowedClassCreatorSDKType {
    /** address is the address that is allowed to create credit classes */
    address: Uint8Array;
}
/**
 * ClassFee is the credit class creation fee. If not set, a credit class
 * creation fee is not required. This table is controlled via governance.
 *
 * Since Revision 2
 */
export interface ClassFee {
    /**
     * fee is the credit class creation fee. If not set, a credit class creation
     * fee is not required.
     */
    fee?: Coin;
}
/**
 * ClassFee is the credit class creation fee. If not set, a credit class
 * creation fee is not required. This table is controlled via governance.
 *
 * Since Revision 2
 */
export interface ClassFeeSDKType {
    /**
     * fee is the credit class creation fee. If not set, a credit class creation
     * fee is not required.
     */
    fee?: CoinSDKType;
}
/**
 * AllowedBridgeChain is a list of chains that are allowed to be used in
 * bridging operations. NOTE: chain_names MUST be converted to lowercase before
 * writing to and reading from this table in order to keep entries consistent.
 * This table is controlled via governance.
 *
 * Since Revision 2
 */
export interface AllowedBridgeChain {
    /** chain_name is the name of the chain allowed to bridge ecocredits to. */
    chainName: string;
}
/**
 * AllowedBridgeChain is a list of chains that are allowed to be used in
 * bridging operations. NOTE: chain_names MUST be converted to lowercase before
 * writing to and reading from this table in order to keep entries consistent.
 * This table is controlled via governance.
 *
 * Since Revision 2
 */
export interface AllowedBridgeChainSDKType {
    /** chain_name is the name of the chain allowed to bridge ecocredits to. */
    chain_name: string;
}
export declare const CreditType: {
    encode(message: CreditType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreditType;
    fromJSON(object: any): CreditType;
    toJSON(message: CreditType): unknown;
    fromPartial(object: Partial<CreditType>): CreditType;
};
export declare const Class: {
    encode(message: Class, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Class;
    fromJSON(object: any): Class;
    toJSON(message: Class): unknown;
    fromPartial(object: Partial<Class>): Class;
};
export declare const ClassIssuer: {
    encode(message: ClassIssuer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassIssuer;
    fromJSON(object: any): ClassIssuer;
    toJSON(message: ClassIssuer): unknown;
    fromPartial(object: Partial<ClassIssuer>): ClassIssuer;
};
export declare const Project: {
    encode(message: Project, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Project;
    fromJSON(object: any): Project;
    toJSON(message: Project): unknown;
    fromPartial(object: Partial<Project>): Project;
};
export declare const Batch: {
    encode(message: Batch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Batch;
    fromJSON(object: any): Batch;
    toJSON(message: Batch): unknown;
    fromPartial(object: Partial<Batch>): Batch;
};
export declare const ClassSequence: {
    encode(message: ClassSequence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassSequence;
    fromJSON(object: any): ClassSequence;
    toJSON(message: ClassSequence): unknown;
    fromPartial(object: Partial<ClassSequence>): ClassSequence;
};
export declare const ProjectSequence: {
    encode(message: ProjectSequence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSequence;
    fromJSON(object: any): ProjectSequence;
    toJSON(message: ProjectSequence): unknown;
    fromPartial(object: Partial<ProjectSequence>): ProjectSequence;
};
export declare const BatchSequence: {
    encode(message: BatchSequence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchSequence;
    fromJSON(object: any): BatchSequence;
    toJSON(message: BatchSequence): unknown;
    fromPartial(object: Partial<BatchSequence>): BatchSequence;
};
export declare const BatchBalance: {
    encode(message: BatchBalance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchBalance;
    fromJSON(object: any): BatchBalance;
    toJSON(message: BatchBalance): unknown;
    fromPartial(object: Partial<BatchBalance>): BatchBalance;
};
export declare const BatchSupply: {
    encode(message: BatchSupply, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchSupply;
    fromJSON(object: any): BatchSupply;
    toJSON(message: BatchSupply): unknown;
    fromPartial(object: Partial<BatchSupply>): BatchSupply;
};
export declare const OriginTxIndex: {
    encode(message: OriginTxIndex, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OriginTxIndex;
    fromJSON(object: any): OriginTxIndex;
    toJSON(message: OriginTxIndex): unknown;
    fromPartial(object: Partial<OriginTxIndex>): OriginTxIndex;
};
export declare const BatchContract: {
    encode(message: BatchContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchContract;
    fromJSON(object: any): BatchContract;
    toJSON(message: BatchContract): unknown;
    fromPartial(object: Partial<BatchContract>): BatchContract;
};
export declare const ClassCreatorAllowlist: {
    encode(message: ClassCreatorAllowlist, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassCreatorAllowlist;
    fromJSON(object: any): ClassCreatorAllowlist;
    toJSON(message: ClassCreatorAllowlist): unknown;
    fromPartial(object: Partial<ClassCreatorAllowlist>): ClassCreatorAllowlist;
};
export declare const AllowedClassCreator: {
    encode(message: AllowedClassCreator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowedClassCreator;
    fromJSON(object: any): AllowedClassCreator;
    toJSON(message: AllowedClassCreator): unknown;
    fromPartial(object: Partial<AllowedClassCreator>): AllowedClassCreator;
};
export declare const ClassFee: {
    encode(message: ClassFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassFee;
    fromJSON(object: any): ClassFee;
    toJSON(message: ClassFee): unknown;
    fromPartial(object: Partial<ClassFee>): ClassFee;
};
export declare const AllowedBridgeChain: {
    encode(message: AllowedBridgeChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowedBridgeChain;
    fromJSON(object: any): AllowedBridgeChain;
    toJSON(message: AllowedBridgeChain): unknown;
    fromPartial(object: Partial<AllowedBridgeChain>): AllowedBridgeChain;
};
