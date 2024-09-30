import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
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
export interface CreditTypeProtoMsg {
    typeUrl: "/regen.ecocredit.v1.CreditType";
    value: Uint8Array;
}
/**
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */
export interface CreditTypeAmino {
    /**
     * abbreviation is a 1-3 character uppercase abbreviation of the CreditType
     * name, used in batch denominations within the CreditType. It must be unique.
     */
    abbreviation?: string;
    /** name is the name of the credit type (e.g. carbon, biodiversity). */
    name?: string;
    /** unit is the measurement unit of the credit type (e.g. kg, ton). */
    unit?: string;
    /** precision is the decimal precision of the credit type. */
    precision?: number;
}
export interface CreditTypeAminoMsg {
    type: "/regen.ecocredit.v1.CreditType";
    value: CreditTypeAmino;
}
/**
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */
export interface CreditTypeSDKType {
    abbreviation: string;
    name: string;
    unit: string;
    precision: number;
}
/** Class represents the high-level on-chain information for a credit class. */
export interface Class {
    /**
     * key is the table row identifier of the credit class used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key: bigint;
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
export interface ClassProtoMsg {
    typeUrl: "/regen.ecocredit.v1.Class";
    value: Uint8Array;
}
/** Class represents the high-level on-chain information for a credit class. */
export interface ClassAmino {
    /**
     * key is the table row identifier of the credit class used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key?: string;
    /**
     * id is the unique identifier of the credit class auto-generated from the
     * credit type abbreviation and the credit class sequence number.
     */
    id?: string;
    /** admin is the admin of the credit class. */
    admin?: string;
    /** metadata is any arbitrary metadata to attached to the credit class. */
    metadata?: string;
    /** credit_type_abbrev is the abbreviation of the credit type. */
    credit_type_abbrev?: string;
}
export interface ClassAminoMsg {
    type: "/regen.ecocredit.v1.Class";
    value: ClassAmino;
}
/** Class represents the high-level on-chain information for a credit class. */
export interface ClassSDKType {
    key: bigint;
    id: string;
    admin: Uint8Array;
    metadata: string;
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
    classKey: bigint;
    /** issuer is the approved issuer of the credit class. */
    issuer: Uint8Array;
}
export interface ClassIssuerProtoMsg {
    typeUrl: "/regen.ecocredit.v1.ClassIssuer";
    value: Uint8Array;
}
/**
 * ClassIssuers is a JOIN table for Class Info that stores the credit class
 * issuers
 */
export interface ClassIssuerAmino {
    /**
     * class_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a class issuer to a credit class.
     */
    class_key?: string;
    /** issuer is the approved issuer of the credit class. */
    issuer?: string;
}
export interface ClassIssuerAminoMsg {
    type: "/regen.ecocredit.v1.ClassIssuer";
    value: ClassIssuerAmino;
}
/**
 * ClassIssuers is a JOIN table for Class Info that stores the credit class
 * issuers
 */
export interface ClassIssuerSDKType {
    class_key: bigint;
    issuer: Uint8Array;
}
/** Project represents the high-level on-chain information for a project. */
export interface Project {
    /**
     * key is the table row identifier of the project used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key: bigint;
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
    classKey: bigint;
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
export interface ProjectProtoMsg {
    typeUrl: "/regen.ecocredit.v1.Project";
    value: Uint8Array;
}
/** Project represents the high-level on-chain information for a project. */
export interface ProjectAmino {
    /**
     * key is the table row identifier of the project used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key?: string;
    /**
     * id is the unique identifier of the project either auto-generated from the
     * credit class id and project sequence number or provided upon creation.
     */
    id?: string;
    /** admin is the admin of the project. */
    admin?: string;
    /**
     * class_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a project to a credit class.
     */
    class_key?: string;
    /**
     * jurisdiction is the jurisdiction of the project.
     * Full documentation can be found in MsgCreateProject.jurisdiction.
     */
    jurisdiction?: string;
    /** metadata is any arbitrary metadata attached to the project. */
    metadata?: string;
    /** reference_id is any arbitrary string used to reference the project. */
    reference_id?: string;
}
export interface ProjectAminoMsg {
    type: "/regen.ecocredit.v1.Project";
    value: ProjectAmino;
}
/** Project represents the high-level on-chain information for a project. */
export interface ProjectSDKType {
    key: bigint;
    id: string;
    admin: Uint8Array;
    class_key: bigint;
    jurisdiction: string;
    metadata: string;
    reference_id: string;
}
/** Batch represents the high-level on-chain information for a credit batch. */
export interface Batch {
    /**
     * key is the table row identifier of the credit batch used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key: bigint;
    /**
     * issuer is the address that created the batch and which is
     * authorized to mint more credits if open=true.
     */
    issuer: Uint8Array;
    /**
     * project_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a credit batch to a project.
     */
    projectKey: bigint;
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
    startDate?: Date;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    endDate?: Date;
    /** issuance_date is the timestamp when the credit batch was issued. */
    issuanceDate?: Date;
    /**
     * open tells if it's possible to mint new credits in the future.
     * Once `open` is set to false, it can't be toggled any more.
     */
    open: boolean;
}
export interface BatchProtoMsg {
    typeUrl: "/regen.ecocredit.v1.Batch";
    value: Uint8Array;
}
/** Batch represents the high-level on-chain information for a credit batch. */
export interface BatchAmino {
    /**
     * key is the table row identifier of the credit batch used internally for
     * efficient lookups. This identifier is auto-incrementing.
     */
    key?: string;
    /**
     * issuer is the address that created the batch and which is
     * authorized to mint more credits if open=true.
     */
    issuer?: string;
    /**
     * project_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a credit batch to a project.
     */
    project_key?: string;
    /**
     * denom is the unique identifier of the credit batch formed from the
     * project id, the batch sequence number, and the start and end date of the
     * credit batch.
     */
    denom?: string;
    /** metadata is any arbitrary metadata attached to the credit batch. */
    metadata?: string;
    /**
     * start_date is the beginning of the period during which this credit batch
     * was quantified and verified.
     */
    start_date?: string;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    end_date?: string;
    /** issuance_date is the timestamp when the credit batch was issued. */
    issuance_date?: string;
    /**
     * open tells if it's possible to mint new credits in the future.
     * Once `open` is set to false, it can't be toggled any more.
     */
    open?: boolean;
}
export interface BatchAminoMsg {
    type: "/regen.ecocredit.v1.Batch";
    value: BatchAmino;
}
/** Batch represents the high-level on-chain information for a credit batch. */
export interface BatchSDKType {
    key: bigint;
    issuer: Uint8Array;
    project_key: bigint;
    denom: string;
    metadata: string;
    start_date?: Date;
    end_date?: Date;
    issuance_date?: Date;
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
    nextSequence: bigint;
}
export interface ClassSequenceProtoMsg {
    typeUrl: "/regen.ecocredit.v1.ClassSequence";
    value: Uint8Array;
}
/**
 * ClassSequence stores and increments the sequence number for credit classes
 * within a credit type.
 */
export interface ClassSequenceAmino {
    /**
     * credit_type_abbrev is the credit type abbreviation. This links a class
     * sequence to a credit type.
     */
    credit_type_abbrev?: string;
    /**
     * next_sequence is the next sequence number for a credit class within the
     * credit type. The sequence number is used to generate a class id.
     */
    next_sequence?: string;
}
export interface ClassSequenceAminoMsg {
    type: "/regen.ecocredit.v1.ClassSequence";
    value: ClassSequenceAmino;
}
/**
 * ClassSequence stores and increments the sequence number for credit classes
 * within a credit type.
 */
export interface ClassSequenceSDKType {
    credit_type_abbrev: string;
    next_sequence: bigint;
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
    classKey: bigint;
    /**
     * next_sequence is the next sequence number for a project within the credit
     * class. The sequence number is used to generate a project id.
     */
    nextSequence: bigint;
}
export interface ProjectSequenceProtoMsg {
    typeUrl: "/regen.ecocredit.v1.ProjectSequence";
    value: Uint8Array;
}
/**
 * ProjectSequence stores and increments the sequence number for projects within
 * a credit class.
 */
export interface ProjectSequenceAmino {
    /**
     * class_key is the table row identifier of the credit class used internally
     * for efficient lookups. This links a project sequence to a credit class.
     */
    class_key?: string;
    /**
     * next_sequence is the next sequence number for a project within the credit
     * class. The sequence number is used to generate a project id.
     */
    next_sequence?: string;
}
export interface ProjectSequenceAminoMsg {
    type: "/regen.ecocredit.v1.ProjectSequence";
    value: ProjectSequenceAmino;
}
/**
 * ProjectSequence stores and increments the sequence number for projects within
 * a credit class.
 */
export interface ProjectSequenceSDKType {
    class_key: bigint;
    next_sequence: bigint;
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
    projectKey: bigint;
    /**
     * next_sequence is the next sequence number for a credit batch within the
     * project. The sequence number is used to generate a batch denom.
     */
    nextSequence: bigint;
}
export interface BatchSequenceProtoMsg {
    typeUrl: "/regen.ecocredit.v1.BatchSequence";
    value: Uint8Array;
}
/**
 * BatchSequence stores and increments the sequence number for credit batches
 * within a project.
 */
export interface BatchSequenceAmino {
    /**
     * project_key is the table row identifier of the project used internally for
     * efficient lookups. This links a batch sequence to a project.
     */
    project_key?: string;
    /**
     * next_sequence is the next sequence number for a credit batch within the
     * project. The sequence number is used to generate a batch denom.
     */
    next_sequence?: string;
}
export interface BatchSequenceAminoMsg {
    type: "/regen.ecocredit.v1.BatchSequence";
    value: BatchSequenceAmino;
}
/**
 * BatchSequence stores and increments the sequence number for credit batches
 * within a project.
 */
export interface BatchSequenceSDKType {
    project_key: bigint;
    next_sequence: bigint;
}
/** BatchBalance stores each accounts credit balance. */
export interface BatchBalance {
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links a batch balance to a credit batch.
     */
    batchKey: bigint;
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
export interface BatchBalanceProtoMsg {
    typeUrl: "/regen.ecocredit.v1.BatchBalance";
    value: Uint8Array;
}
/** BatchBalance stores each accounts credit balance. */
export interface BatchBalanceAmino {
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links a batch balance to a credit batch.
     */
    batch_key?: string;
    /** address is the address of the account that owns the credits. */
    address?: string;
    /** tradable_amount is the total number of tradable credits owned by address. */
    tradable_amount?: string;
    /** retired_amount is the total number of retired credits owned by address. */
    retired_amount?: string;
    /**
     * escrowed_amount is the total number of escrowed credits owned by address
     * and held in escrow by the marketplace. Credits are held in escrow when a
     * sell order is created and taken out of escrow when the sell order is either
     * cancelled, updated with a reduced quantity, or processed.
     */
    escrowed_amount?: string;
}
export interface BatchBalanceAminoMsg {
    type: "/regen.ecocredit.v1.BatchBalance";
    value: BatchBalanceAmino;
}
/** BatchBalance stores each accounts credit balance. */
export interface BatchBalanceSDKType {
    batch_key: bigint;
    address: Uint8Array;
    tradable_amount: string;
    retired_amount: string;
    escrowed_amount: string;
}
/** BatchSupply stores the supply of credits for a credit batch. */
export interface BatchSupply {
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links a batch supply to a credit batch.
     */
    batchKey: bigint;
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
export interface BatchSupplyProtoMsg {
    typeUrl: "/regen.ecocredit.v1.BatchSupply";
    value: Uint8Array;
}
/** BatchSupply stores the supply of credits for a credit batch. */
export interface BatchSupplyAmino {
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links a batch supply to a credit batch.
     */
    batch_key?: string;
    /**
     * tradable_amount is the total number of tradable credits in the credit
     * batch. Tradable credits may be retired in which case they will be removed
     * from tradable_amount and tracked in retired_amount. Tradable credits may
     * also be cancelled in which case they will be removed from tradable_amount
     * and tracked in cancelled_amount. The sum of the tradable, retired, and
     * cancelled amounts will always equal the original credit issuance amount.
     */
    tradable_amount?: string;
    /**
     * retired_amount is the total amount of credits that have been retired in the
     * credit batch. The sum of the tradable, retired, and cancelled amounts will
     * always equal the original credit issuance amount.
     */
    retired_amount?: string;
    /**
     * cancelled_amount is the number of credits in the batch that have been
     * cancelled, effectively undoing the issuance. The sum of the tradable,
     * retired, and cancelled amounts will always equal the original credit
     * issuance amount.
     */
    cancelled_amount?: string;
}
export interface BatchSupplyAminoMsg {
    type: "/regen.ecocredit.v1.BatchSupply";
    value: BatchSupplyAmino;
}
/** BatchSupply stores the supply of credits for a credit batch. */
export interface BatchSupplySDKType {
    batch_key: bigint;
    tradable_amount: string;
    retired_amount: string;
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
    classKey: bigint;
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
export interface OriginTxIndexProtoMsg {
    typeUrl: "/regen.ecocredit.v1.OriginTxIndex";
    value: Uint8Array;
}
/**
 * OriginTxIndex indexes the transaction ID and source from the OriginTx
 * included in Msg/CreateBatch and Msg/MintBatchCredits to prevent double
 * minting errors. The index is scoped to a credit class (it includes the
 * class_key) to prevent malicious credit class issuers from blocking any
 * bridge operations taking place within another credit class.
 */
export interface OriginTxIndexAmino {
    /**
     * class_key is the table row identifier of the credit class within which the
     * credits were issued or minted. The class_key is included within the index
     * to prevent malicious credit class issuers from blocking bridge operations
     * taking place within another credit class.
     */
    class_key?: string;
    /**
     * id is the transaction ID of an originating transaction or operation
     * based on a type (i.e. transaction ID, serial number).
     */
    id?: string;
    /**
     * source is the source chain or registry of the transaction originating
     * the mint process (e.g. polygon, ethereum, verra).
     */
    source?: string;
}
export interface OriginTxIndexAminoMsg {
    type: "/regen.ecocredit.v1.OriginTxIndex";
    value: OriginTxIndexAmino;
}
/**
 * OriginTxIndex indexes the transaction ID and source from the OriginTx
 * included in Msg/CreateBatch and Msg/MintBatchCredits to prevent double
 * minting errors. The index is scoped to a credit class (it includes the
 * class_key) to prevent malicious credit class issuers from blocking any
 * bridge operations taking place within another credit class.
 */
export interface OriginTxIndexSDKType {
    class_key: bigint;
    id: string;
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
    batchKey: bigint;
    /**
     * class_key is the table row identifier of the credit class within which the
     * credit batch exists. A contract is unique within the scope of a credit
     * class to prevent malicious credit class issuers from blocking bridge
     * operations taking place within another credit class.
     */
    classKey: bigint;
    /**
     * contract is the address of the contract on the source chain that was
     * executed when creating the transaction. This address will be used when
     * sending credits back to the source chain.
     */
    contract: string;
}
export interface BatchContractProtoMsg {
    typeUrl: "/regen.ecocredit.v1.BatchContract";
    value: Uint8Array;
}
/**
 * BatchContract stores the contract address from which credits were bridged
 * when credits are bridged from a contract-based chain, therefore ensuring
 * that each credit batch corresponds to a single contract and credits that
 * have been bridged will always be bridged back to the original contract.
 */
export interface BatchContractAmino {
    /**
     * batch_key is the table row identifier of the credit batch used internally
     * for efficient lookups. This links an external contract to a credit batch.
     */
    batch_key?: string;
    /**
     * class_key is the table row identifier of the credit class within which the
     * credit batch exists. A contract is unique within the scope of a credit
     * class to prevent malicious credit class issuers from blocking bridge
     * operations taking place within another credit class.
     */
    class_key?: string;
    /**
     * contract is the address of the contract on the source chain that was
     * executed when creating the transaction. This address will be used when
     * sending credits back to the source chain.
     */
    contract?: string;
}
export interface BatchContractAminoMsg {
    type: "/regen.ecocredit.v1.BatchContract";
    value: BatchContractAmino;
}
/**
 * BatchContract stores the contract address from which credits were bridged
 * when credits are bridged from a contract-based chain, therefore ensuring
 * that each credit batch corresponds to a single contract and credits that
 * have been bridged will always be bridged back to the original contract.
 */
export interface BatchContractSDKType {
    batch_key: bigint;
    class_key: bigint;
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
export interface ClassCreatorAllowlistProtoMsg {
    typeUrl: "/regen.ecocredit.v1.ClassCreatorAllowlist";
    value: Uint8Array;
}
/**
 * ClassCreatorAllowlist determines if the credit class creator allowlist is
 * enabled. When set to true, only the addresses in the AllowedClassCreator
 * table may create credit classes. When set to false, any address may create
 * credit classes. This table is controlled via governance.
 *
 * Since Revision 2
 */
export interface ClassCreatorAllowlistAmino {
    /** enabled is whether or not the allow list is enabled. */
    enabled?: boolean;
}
export interface ClassCreatorAllowlistAminoMsg {
    type: "/regen.ecocredit.v1.ClassCreatorAllowlist";
    value: ClassCreatorAllowlistAmino;
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
export interface AllowedClassCreatorProtoMsg {
    typeUrl: "/regen.ecocredit.v1.AllowedClassCreator";
    value: Uint8Array;
}
/**
 * AllowedClassCreator is an allowed credit class creator. This table is
 * controlled via governance.
 *
 * Since Revision 2
 */
export interface AllowedClassCreatorAmino {
    /** address is the address that is allowed to create credit classes */
    address?: string;
}
export interface AllowedClassCreatorAminoMsg {
    type: "/regen.ecocredit.v1.AllowedClassCreator";
    value: AllowedClassCreatorAmino;
}
/**
 * AllowedClassCreator is an allowed credit class creator. This table is
 * controlled via governance.
 *
 * Since Revision 2
 */
export interface AllowedClassCreatorSDKType {
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
export interface ClassFeeProtoMsg {
    typeUrl: "/regen.ecocredit.v1.ClassFee";
    value: Uint8Array;
}
/**
 * ClassFee is the credit class creation fee. If not set, a credit class
 * creation fee is not required. This table is controlled via governance.
 *
 * Since Revision 2
 */
export interface ClassFeeAmino {
    /**
     * fee is the credit class creation fee. If not set, a credit class creation
     * fee is not required.
     */
    fee?: CoinAmino;
}
export interface ClassFeeAminoMsg {
    type: "/regen.ecocredit.v1.ClassFee";
    value: ClassFeeAmino;
}
/**
 * ClassFee is the credit class creation fee. If not set, a credit class
 * creation fee is not required. This table is controlled via governance.
 *
 * Since Revision 2
 */
export interface ClassFeeSDKType {
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
export interface AllowedBridgeChainProtoMsg {
    typeUrl: "/regen.ecocredit.v1.AllowedBridgeChain";
    value: Uint8Array;
}
/**
 * AllowedBridgeChain is a list of chains that are allowed to be used in
 * bridging operations. NOTE: chain_names MUST be converted to lowercase before
 * writing to and reading from this table in order to keep entries consistent.
 * This table is controlled via governance.
 *
 * Since Revision 2
 */
export interface AllowedBridgeChainAmino {
    /** chain_name is the name of the chain allowed to bridge ecocredits to. */
    chain_name?: string;
}
export interface AllowedBridgeChainAminoMsg {
    type: "/regen.ecocredit.v1.AllowedBridgeChain";
    value: AllowedBridgeChainAmino;
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
    chain_name: string;
}
export declare const CreditType: {
    typeUrl: string;
    encode(message: CreditType, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CreditType;
    fromPartial(object: Partial<CreditType>): CreditType;
    fromAmino(object: CreditTypeAmino): CreditType;
    toAmino(message: CreditType): CreditTypeAmino;
    fromAminoMsg(object: CreditTypeAminoMsg): CreditType;
    fromProtoMsg(message: CreditTypeProtoMsg): CreditType;
    toProto(message: CreditType): Uint8Array;
    toProtoMsg(message: CreditType): CreditTypeProtoMsg;
};
export declare const Class: {
    typeUrl: string;
    encode(message: Class, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Class;
    fromPartial(object: Partial<Class>): Class;
    fromAmino(object: ClassAmino): Class;
    toAmino(message: Class): ClassAmino;
    fromAminoMsg(object: ClassAminoMsg): Class;
    fromProtoMsg(message: ClassProtoMsg): Class;
    toProto(message: Class): Uint8Array;
    toProtoMsg(message: Class): ClassProtoMsg;
};
export declare const ClassIssuer: {
    typeUrl: string;
    encode(message: ClassIssuer, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClassIssuer;
    fromPartial(object: Partial<ClassIssuer>): ClassIssuer;
    fromAmino(object: ClassIssuerAmino): ClassIssuer;
    toAmino(message: ClassIssuer): ClassIssuerAmino;
    fromAminoMsg(object: ClassIssuerAminoMsg): ClassIssuer;
    fromProtoMsg(message: ClassIssuerProtoMsg): ClassIssuer;
    toProto(message: ClassIssuer): Uint8Array;
    toProtoMsg(message: ClassIssuer): ClassIssuerProtoMsg;
};
export declare const Project: {
    typeUrl: string;
    encode(message: Project, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Project;
    fromPartial(object: Partial<Project>): Project;
    fromAmino(object: ProjectAmino): Project;
    toAmino(message: Project): ProjectAmino;
    fromAminoMsg(object: ProjectAminoMsg): Project;
    fromProtoMsg(message: ProjectProtoMsg): Project;
    toProto(message: Project): Uint8Array;
    toProtoMsg(message: Project): ProjectProtoMsg;
};
export declare const Batch: {
    typeUrl: string;
    encode(message: Batch, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Batch;
    fromPartial(object: Partial<Batch>): Batch;
    fromAmino(object: BatchAmino): Batch;
    toAmino(message: Batch): BatchAmino;
    fromAminoMsg(object: BatchAminoMsg): Batch;
    fromProtoMsg(message: BatchProtoMsg): Batch;
    toProto(message: Batch): Uint8Array;
    toProtoMsg(message: Batch): BatchProtoMsg;
};
export declare const ClassSequence: {
    typeUrl: string;
    encode(message: ClassSequence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClassSequence;
    fromPartial(object: Partial<ClassSequence>): ClassSequence;
    fromAmino(object: ClassSequenceAmino): ClassSequence;
    toAmino(message: ClassSequence): ClassSequenceAmino;
    fromAminoMsg(object: ClassSequenceAminoMsg): ClassSequence;
    fromProtoMsg(message: ClassSequenceProtoMsg): ClassSequence;
    toProto(message: ClassSequence): Uint8Array;
    toProtoMsg(message: ClassSequence): ClassSequenceProtoMsg;
};
export declare const ProjectSequence: {
    typeUrl: string;
    encode(message: ProjectSequence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProjectSequence;
    fromPartial(object: Partial<ProjectSequence>): ProjectSequence;
    fromAmino(object: ProjectSequenceAmino): ProjectSequence;
    toAmino(message: ProjectSequence): ProjectSequenceAmino;
    fromAminoMsg(object: ProjectSequenceAminoMsg): ProjectSequence;
    fromProtoMsg(message: ProjectSequenceProtoMsg): ProjectSequence;
    toProto(message: ProjectSequence): Uint8Array;
    toProtoMsg(message: ProjectSequence): ProjectSequenceProtoMsg;
};
export declare const BatchSequence: {
    typeUrl: string;
    encode(message: BatchSequence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BatchSequence;
    fromPartial(object: Partial<BatchSequence>): BatchSequence;
    fromAmino(object: BatchSequenceAmino): BatchSequence;
    toAmino(message: BatchSequence): BatchSequenceAmino;
    fromAminoMsg(object: BatchSequenceAminoMsg): BatchSequence;
    fromProtoMsg(message: BatchSequenceProtoMsg): BatchSequence;
    toProto(message: BatchSequence): Uint8Array;
    toProtoMsg(message: BatchSequence): BatchSequenceProtoMsg;
};
export declare const BatchBalance: {
    typeUrl: string;
    encode(message: BatchBalance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BatchBalance;
    fromPartial(object: Partial<BatchBalance>): BatchBalance;
    fromAmino(object: BatchBalanceAmino): BatchBalance;
    toAmino(message: BatchBalance): BatchBalanceAmino;
    fromAminoMsg(object: BatchBalanceAminoMsg): BatchBalance;
    fromProtoMsg(message: BatchBalanceProtoMsg): BatchBalance;
    toProto(message: BatchBalance): Uint8Array;
    toProtoMsg(message: BatchBalance): BatchBalanceProtoMsg;
};
export declare const BatchSupply: {
    typeUrl: string;
    encode(message: BatchSupply, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BatchSupply;
    fromPartial(object: Partial<BatchSupply>): BatchSupply;
    fromAmino(object: BatchSupplyAmino): BatchSupply;
    toAmino(message: BatchSupply): BatchSupplyAmino;
    fromAminoMsg(object: BatchSupplyAminoMsg): BatchSupply;
    fromProtoMsg(message: BatchSupplyProtoMsg): BatchSupply;
    toProto(message: BatchSupply): Uint8Array;
    toProtoMsg(message: BatchSupply): BatchSupplyProtoMsg;
};
export declare const OriginTxIndex: {
    typeUrl: string;
    encode(message: OriginTxIndex, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): OriginTxIndex;
    fromPartial(object: Partial<OriginTxIndex>): OriginTxIndex;
    fromAmino(object: OriginTxIndexAmino): OriginTxIndex;
    toAmino(message: OriginTxIndex): OriginTxIndexAmino;
    fromAminoMsg(object: OriginTxIndexAminoMsg): OriginTxIndex;
    fromProtoMsg(message: OriginTxIndexProtoMsg): OriginTxIndex;
    toProto(message: OriginTxIndex): Uint8Array;
    toProtoMsg(message: OriginTxIndex): OriginTxIndexProtoMsg;
};
export declare const BatchContract: {
    typeUrl: string;
    encode(message: BatchContract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BatchContract;
    fromPartial(object: Partial<BatchContract>): BatchContract;
    fromAmino(object: BatchContractAmino): BatchContract;
    toAmino(message: BatchContract): BatchContractAmino;
    fromAminoMsg(object: BatchContractAminoMsg): BatchContract;
    fromProtoMsg(message: BatchContractProtoMsg): BatchContract;
    toProto(message: BatchContract): Uint8Array;
    toProtoMsg(message: BatchContract): BatchContractProtoMsg;
};
export declare const ClassCreatorAllowlist: {
    typeUrl: string;
    encode(message: ClassCreatorAllowlist, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClassCreatorAllowlist;
    fromPartial(object: Partial<ClassCreatorAllowlist>): ClassCreatorAllowlist;
    fromAmino(object: ClassCreatorAllowlistAmino): ClassCreatorAllowlist;
    toAmino(message: ClassCreatorAllowlist): ClassCreatorAllowlistAmino;
    fromAminoMsg(object: ClassCreatorAllowlistAminoMsg): ClassCreatorAllowlist;
    fromProtoMsg(message: ClassCreatorAllowlistProtoMsg): ClassCreatorAllowlist;
    toProto(message: ClassCreatorAllowlist): Uint8Array;
    toProtoMsg(message: ClassCreatorAllowlist): ClassCreatorAllowlistProtoMsg;
};
export declare const AllowedClassCreator: {
    typeUrl: string;
    encode(message: AllowedClassCreator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllowedClassCreator;
    fromPartial(object: Partial<AllowedClassCreator>): AllowedClassCreator;
    fromAmino(object: AllowedClassCreatorAmino): AllowedClassCreator;
    toAmino(message: AllowedClassCreator): AllowedClassCreatorAmino;
    fromAminoMsg(object: AllowedClassCreatorAminoMsg): AllowedClassCreator;
    fromProtoMsg(message: AllowedClassCreatorProtoMsg): AllowedClassCreator;
    toProto(message: AllowedClassCreator): Uint8Array;
    toProtoMsg(message: AllowedClassCreator): AllowedClassCreatorProtoMsg;
};
export declare const ClassFee: {
    typeUrl: string;
    encode(message: ClassFee, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClassFee;
    fromPartial(object: Partial<ClassFee>): ClassFee;
    fromAmino(object: ClassFeeAmino): ClassFee;
    toAmino(message: ClassFee): ClassFeeAmino;
    fromAminoMsg(object: ClassFeeAminoMsg): ClassFee;
    fromProtoMsg(message: ClassFeeProtoMsg): ClassFee;
    toProto(message: ClassFee): Uint8Array;
    toProtoMsg(message: ClassFee): ClassFeeProtoMsg;
};
export declare const AllowedBridgeChain: {
    typeUrl: string;
    encode(message: AllowedBridgeChain, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllowedBridgeChain;
    fromPartial(object: Partial<AllowedBridgeChain>): AllowedBridgeChain;
    fromAmino(object: AllowedBridgeChainAmino): AllowedBridgeChain;
    toAmino(message: AllowedBridgeChain): AllowedBridgeChainAmino;
    fromAminoMsg(object: AllowedBridgeChainAminoMsg): AllowedBridgeChain;
    fromProtoMsg(message: AllowedBridgeChainProtoMsg): AllowedBridgeChain;
    toProto(message: AllowedBridgeChain): Uint8Array;
    toProtoMsg(message: AllowedBridgeChain): AllowedBridgeChainProtoMsg;
};
