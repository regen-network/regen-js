import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
  abbreviation: string;
  /** name is the name of the credit type (e.g. carbon, biodiversity). */
  name: string;
  /** unit is the measurement unit of the credit type (e.g. kg, ton). */
  unit: string;
  /** precision is the decimal precision of the credit type. */
  precision: number;
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
  key: string;
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
export interface ClassAminoMsg {
  type: "/regen.ecocredit.v1.Class";
  value: ClassAmino;
}
/** Class represents the high-level on-chain information for a credit class. */
export interface ClassSDKType {
  key: Long;
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
  classKey: Long;
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
  class_key: string;
  /** issuer is the approved issuer of the credit class. */
  issuer: Uint8Array;
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
  class_key: Long;
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
  key: string;
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
  class_key: string;
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
export interface ProjectAminoMsg {
  type: "/regen.ecocredit.v1.Project";
  value: ProjectAmino;
}
/** Project represents the high-level on-chain information for a project. */
export interface ProjectSDKType {
  key: Long;
  id: string;
  admin: Uint8Array;
  class_key: Long;
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
  startDate: Timestamp;
  /**
   * end_date is the end of the period during which this credit batch was
   * quantified and verified.
   */
  endDate: Timestamp;
  /** issuance_date is the timestamp when the credit batch was issued. */
  issuanceDate: Timestamp;
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
  key: string;
  /**
   * issuer is the address that created the batch and which is
   * authorized to mint more credits if open=true.
   */
  issuer: Uint8Array;
  /**
   * project_key is the table row identifier of the credit class used internally
   * for efficient lookups. This links a credit batch to a project.
   */
  project_key: string;
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
  start_date?: TimestampAmino;
  /**
   * end_date is the end of the period during which this credit batch was
   * quantified and verified.
   */
  end_date?: TimestampAmino;
  /** issuance_date is the timestamp when the credit batch was issued. */
  issuance_date?: TimestampAmino;
  /**
   * open tells if it's possible to mint new credits in the future.
   * Once `open` is set to false, it can't be toggled any more.
   */
  open: boolean;
}
export interface BatchAminoMsg {
  type: "/regen.ecocredit.v1.Batch";
  value: BatchAmino;
}
/** Batch represents the high-level on-chain information for a credit batch. */
export interface BatchSDKType {
  key: Long;
  issuer: Uint8Array;
  project_key: Long;
  denom: string;
  metadata: string;
  start_date: TimestampSDKType;
  end_date: TimestampSDKType;
  issuance_date: TimestampSDKType;
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
  credit_type_abbrev: string;
  /**
   * next_sequence is the next sequence number for a credit class within the
   * credit type. The sequence number is used to generate a class id.
   */
  next_sequence: string;
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
  class_key: string;
  /**
   * next_sequence is the next sequence number for a project within the credit
   * class. The sequence number is used to generate a project id.
   */
  next_sequence: string;
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
  class_key: Long;
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
  project_key: string;
  /**
   * next_sequence is the next sequence number for a credit batch within the
   * project. The sequence number is used to generate a batch denom.
   */
  next_sequence: string;
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
  project_key: Long;
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
  batch_key: string;
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
export interface BatchBalanceAminoMsg {
  type: "/regen.ecocredit.v1.BatchBalance";
  value: BatchBalanceAmino;
}
/** BatchBalance stores each accounts credit balance. */
export interface BatchBalanceSDKType {
  batch_key: Long;
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
  batch_key: string;
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
export interface BatchSupplyAminoMsg {
  type: "/regen.ecocredit.v1.BatchSupply";
  value: BatchSupplyAmino;
}
/** BatchSupply stores the supply of credits for a credit batch. */
export interface BatchSupplySDKType {
  batch_key: Long;
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
  class_key: string;
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
  class_key: Long;
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
  batch_key: string;
  /**
   * class_key is the table row identifier of the credit class within which the
   * credit batch exists. A contract is unique within the scope of a credit
   * class to prevent malicious credit class issuers from blocking bridge
   * operations taking place within another credit class.
   */
  class_key: string;
  /**
   * contract is the address of the contract on the source chain that was
   * executed when creating the transaction. This address will be used when
   * sending credits back to the source chain.
   */
  contract: string;
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
  batch_key: Long;
  class_key: Long;
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
  enabled: boolean;
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
  address: Uint8Array;
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
  fee: Coin;
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
  fee: CoinSDKType;
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
  chain_name: string;
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
function createBaseCreditType(): CreditType {
  return {
    abbreviation: "",
    name: "",
    unit: "",
    precision: 0
  };
}
export const CreditType = {
  encode(message: CreditType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.abbreviation !== "") {
      writer.uint32(10).string(message.abbreviation);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.unit !== "") {
      writer.uint32(26).string(message.unit);
    }
    if (message.precision !== 0) {
      writer.uint32(32).uint32(message.precision);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CreditType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreditType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abbreviation = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.unit = reader.string();
          break;
        case 4:
          message.precision = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreditType {
    return {
      abbreviation: isSet(object.abbreviation) ? String(object.abbreviation) : "",
      name: isSet(object.name) ? String(object.name) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
      precision: isSet(object.precision) ? Number(object.precision) : 0
    };
  },
  toJSON(message: CreditType): unknown {
    const obj: any = {};
    message.abbreviation !== undefined && (obj.abbreviation = message.abbreviation);
    message.name !== undefined && (obj.name = message.name);
    message.unit !== undefined && (obj.unit = message.unit);
    message.precision !== undefined && (obj.precision = Math.round(message.precision));
    return obj;
  },
  fromPartial(object: Partial<CreditType>): CreditType {
    const message = createBaseCreditType();
    message.abbreviation = object.abbreviation ?? "";
    message.name = object.name ?? "";
    message.unit = object.unit ?? "";
    message.precision = object.precision ?? 0;
    return message;
  },
  fromAmino(object: CreditTypeAmino): CreditType {
    return {
      abbreviation: object.abbreviation,
      name: object.name,
      unit: object.unit,
      precision: object.precision
    };
  },
  toAmino(message: CreditType): CreditTypeAmino {
    const obj: any = {};
    obj.abbreviation = message.abbreviation;
    obj.name = message.name;
    obj.unit = message.unit;
    obj.precision = message.precision;
    return obj;
  },
  fromAminoMsg(object: CreditTypeAminoMsg): CreditType {
    return CreditType.fromAmino(object.value);
  },
  fromProtoMsg(message: CreditTypeProtoMsg): CreditType {
    return CreditType.decode(message.value);
  },
  toProto(message: CreditType): Uint8Array {
    return CreditType.encode(message).finish();
  },
  toProtoMsg(message: CreditType): CreditTypeProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.CreditType",
      value: CreditType.encode(message).finish()
    };
  }
};
function createBaseClass(): Class {
  return {
    key: Long.UZERO,
    id: "",
    admin: new Uint8Array(),
    metadata: "",
    creditTypeAbbrev: ""
  };
}
export const Class = {
  encode(message: Class, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.key.isZero()) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.admin.length !== 0) {
      writer.uint32(26).bytes(message.admin);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.creditTypeAbbrev !== "") {
      writer.uint32(42).string(message.creditTypeAbbrev);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Class {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = (reader.uint64() as Long);
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.admin = reader.bytes();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.creditTypeAbbrev = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Class {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.UZERO,
      id: isSet(object.id) ? String(object.id) : "",
      admin: isSet(object.admin) ? bytesFromBase64(object.admin) : new Uint8Array(),
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      creditTypeAbbrev: isSet(object.creditTypeAbbrev) ? String(object.creditTypeAbbrev) : ""
    };
  },
  toJSON(message: Class): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || Long.UZERO).toString());
    message.id !== undefined && (obj.id = message.id);
    message.admin !== undefined && (obj.admin = base64FromBytes(message.admin !== undefined ? message.admin : new Uint8Array()));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.creditTypeAbbrev !== undefined && (obj.creditTypeAbbrev = message.creditTypeAbbrev);
    return obj;
  },
  fromPartial(object: Partial<Class>): Class {
    const message = createBaseClass();
    message.key = object.key !== undefined && object.key !== null ? Long.fromValue(object.key) : Long.UZERO;
    message.id = object.id ?? "";
    message.admin = object.admin ?? new Uint8Array();
    message.metadata = object.metadata ?? "";
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
    return message;
  },
  fromAmino(object: ClassAmino): Class {
    return {
      key: Long.fromString(object.key),
      id: object.id,
      admin: object.admin,
      metadata: object.metadata,
      creditTypeAbbrev: object.credit_type_abbrev
    };
  },
  toAmino(message: Class): ClassAmino {
    const obj: any = {};
    obj.key = message.key ? message.key.toString() : undefined;
    obj.id = message.id;
    obj.admin = message.admin;
    obj.metadata = message.metadata;
    obj.credit_type_abbrev = message.creditTypeAbbrev;
    return obj;
  },
  fromAminoMsg(object: ClassAminoMsg): Class {
    return Class.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassProtoMsg): Class {
    return Class.decode(message.value);
  },
  toProto(message: Class): Uint8Array {
    return Class.encode(message).finish();
  },
  toProtoMsg(message: Class): ClassProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.Class",
      value: Class.encode(message).finish()
    };
  }
};
function createBaseClassIssuer(): ClassIssuer {
  return {
    classKey: Long.UZERO,
    issuer: new Uint8Array()
  };
}
export const ClassIssuer = {
  encode(message: ClassIssuer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.classKey.isZero()) {
      writer.uint32(8).uint64(message.classKey);
    }
    if (message.issuer.length !== 0) {
      writer.uint32(18).bytes(message.issuer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ClassIssuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassIssuer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classKey = (reader.uint64() as Long);
          break;
        case 2:
          message.issuer = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClassIssuer {
    return {
      classKey: isSet(object.classKey) ? Long.fromValue(object.classKey) : Long.UZERO,
      issuer: isSet(object.issuer) ? bytesFromBase64(object.issuer) : new Uint8Array()
    };
  },
  toJSON(message: ClassIssuer): unknown {
    const obj: any = {};
    message.classKey !== undefined && (obj.classKey = (message.classKey || Long.UZERO).toString());
    message.issuer !== undefined && (obj.issuer = base64FromBytes(message.issuer !== undefined ? message.issuer : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<ClassIssuer>): ClassIssuer {
    const message = createBaseClassIssuer();
    message.classKey = object.classKey !== undefined && object.classKey !== null ? Long.fromValue(object.classKey) : Long.UZERO;
    message.issuer = object.issuer ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ClassIssuerAmino): ClassIssuer {
    return {
      classKey: Long.fromString(object.class_key),
      issuer: object.issuer
    };
  },
  toAmino(message: ClassIssuer): ClassIssuerAmino {
    const obj: any = {};
    obj.class_key = message.classKey ? message.classKey.toString() : undefined;
    obj.issuer = message.issuer;
    return obj;
  },
  fromAminoMsg(object: ClassIssuerAminoMsg): ClassIssuer {
    return ClassIssuer.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassIssuerProtoMsg): ClassIssuer {
    return ClassIssuer.decode(message.value);
  },
  toProto(message: ClassIssuer): Uint8Array {
    return ClassIssuer.encode(message).finish();
  },
  toProtoMsg(message: ClassIssuer): ClassIssuerProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.ClassIssuer",
      value: ClassIssuer.encode(message).finish()
    };
  }
};
function createBaseProject(): Project {
  return {
    key: Long.UZERO,
    id: "",
    admin: new Uint8Array(),
    classKey: Long.UZERO,
    jurisdiction: "",
    metadata: "",
    referenceId: ""
  };
}
export const Project = {
  encode(message: Project, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.key.isZero()) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.admin.length !== 0) {
      writer.uint32(26).bytes(message.admin);
    }
    if (!message.classKey.isZero()) {
      writer.uint32(32).uint64(message.classKey);
    }
    if (message.jurisdiction !== "") {
      writer.uint32(42).string(message.jurisdiction);
    }
    if (message.metadata !== "") {
      writer.uint32(50).string(message.metadata);
    }
    if (message.referenceId !== "") {
      writer.uint32(58).string(message.referenceId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Project {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = (reader.uint64() as Long);
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.admin = reader.bytes();
          break;
        case 4:
          message.classKey = (reader.uint64() as Long);
          break;
        case 5:
          message.jurisdiction = reader.string();
          break;
        case 6:
          message.metadata = reader.string();
          break;
        case 7:
          message.referenceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Project {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.UZERO,
      id: isSet(object.id) ? String(object.id) : "",
      admin: isSet(object.admin) ? bytesFromBase64(object.admin) : new Uint8Array(),
      classKey: isSet(object.classKey) ? Long.fromValue(object.classKey) : Long.UZERO,
      jurisdiction: isSet(object.jurisdiction) ? String(object.jurisdiction) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      referenceId: isSet(object.referenceId) ? String(object.referenceId) : ""
    };
  },
  toJSON(message: Project): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || Long.UZERO).toString());
    message.id !== undefined && (obj.id = message.id);
    message.admin !== undefined && (obj.admin = base64FromBytes(message.admin !== undefined ? message.admin : new Uint8Array()));
    message.classKey !== undefined && (obj.classKey = (message.classKey || Long.UZERO).toString());
    message.jurisdiction !== undefined && (obj.jurisdiction = message.jurisdiction);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.referenceId !== undefined && (obj.referenceId = message.referenceId);
    return obj;
  },
  fromPartial(object: Partial<Project>): Project {
    const message = createBaseProject();
    message.key = object.key !== undefined && object.key !== null ? Long.fromValue(object.key) : Long.UZERO;
    message.id = object.id ?? "";
    message.admin = object.admin ?? new Uint8Array();
    message.classKey = object.classKey !== undefined && object.classKey !== null ? Long.fromValue(object.classKey) : Long.UZERO;
    message.jurisdiction = object.jurisdiction ?? "";
    message.metadata = object.metadata ?? "";
    message.referenceId = object.referenceId ?? "";
    return message;
  },
  fromAmino(object: ProjectAmino): Project {
    return {
      key: Long.fromString(object.key),
      id: object.id,
      admin: object.admin,
      classKey: Long.fromString(object.class_key),
      jurisdiction: object.jurisdiction,
      metadata: object.metadata,
      referenceId: object.reference_id
    };
  },
  toAmino(message: Project): ProjectAmino {
    const obj: any = {};
    obj.key = message.key ? message.key.toString() : undefined;
    obj.id = message.id;
    obj.admin = message.admin;
    obj.class_key = message.classKey ? message.classKey.toString() : undefined;
    obj.jurisdiction = message.jurisdiction;
    obj.metadata = message.metadata;
    obj.reference_id = message.referenceId;
    return obj;
  },
  fromAminoMsg(object: ProjectAminoMsg): Project {
    return Project.fromAmino(object.value);
  },
  fromProtoMsg(message: ProjectProtoMsg): Project {
    return Project.decode(message.value);
  },
  toProto(message: Project): Uint8Array {
    return Project.encode(message).finish();
  },
  toProtoMsg(message: Project): ProjectProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.Project",
      value: Project.encode(message).finish()
    };
  }
};
function createBaseBatch(): Batch {
  return {
    key: Long.UZERO,
    issuer: new Uint8Array(),
    projectKey: Long.UZERO,
    denom: "",
    metadata: "",
    startDate: undefined,
    endDate: undefined,
    issuanceDate: undefined,
    open: false
  };
}
export const Batch = {
  encode(message: Batch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.key.isZero()) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.issuer.length !== 0) {
      writer.uint32(18).bytes(message.issuer);
    }
    if (!message.projectKey.isZero()) {
      writer.uint32(24).uint64(message.projectKey);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    if (message.startDate !== undefined) {
      Timestamp.encode(message.startDate, writer.uint32(50).fork()).ldelim();
    }
    if (message.endDate !== undefined) {
      Timestamp.encode(message.endDate, writer.uint32(58).fork()).ldelim();
    }
    if (message.issuanceDate !== undefined) {
      Timestamp.encode(message.issuanceDate, writer.uint32(66).fork()).ldelim();
    }
    if (message.open === true) {
      writer.uint32(72).bool(message.open);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Batch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = (reader.uint64() as Long);
          break;
        case 2:
          message.issuer = reader.bytes();
          break;
        case 3:
          message.projectKey = (reader.uint64() as Long);
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.metadata = reader.string();
          break;
        case 6:
          message.startDate = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.endDate = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.issuanceDate = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.open = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Batch {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.UZERO,
      issuer: isSet(object.issuer) ? bytesFromBase64(object.issuer) : new Uint8Array(),
      projectKey: isSet(object.projectKey) ? Long.fromValue(object.projectKey) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      startDate: isSet(object.startDate) ? fromJsonTimestamp(object.startDate) : undefined,
      endDate: isSet(object.endDate) ? fromJsonTimestamp(object.endDate) : undefined,
      issuanceDate: isSet(object.issuanceDate) ? fromJsonTimestamp(object.issuanceDate) : undefined,
      open: isSet(object.open) ? Boolean(object.open) : false
    };
  },
  toJSON(message: Batch): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || Long.UZERO).toString());
    message.issuer !== undefined && (obj.issuer = base64FromBytes(message.issuer !== undefined ? message.issuer : new Uint8Array()));
    message.projectKey !== undefined && (obj.projectKey = (message.projectKey || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.startDate !== undefined && (obj.startDate = fromTimestamp(message.startDate).toISOString());
    message.endDate !== undefined && (obj.endDate = fromTimestamp(message.endDate).toISOString());
    message.issuanceDate !== undefined && (obj.issuanceDate = fromTimestamp(message.issuanceDate).toISOString());
    message.open !== undefined && (obj.open = message.open);
    return obj;
  },
  fromPartial(object: Partial<Batch>): Batch {
    const message = createBaseBatch();
    message.key = object.key !== undefined && object.key !== null ? Long.fromValue(object.key) : Long.UZERO;
    message.issuer = object.issuer ?? new Uint8Array();
    message.projectKey = object.projectKey !== undefined && object.projectKey !== null ? Long.fromValue(object.projectKey) : Long.UZERO;
    message.denom = object.denom ?? "";
    message.metadata = object.metadata ?? "";
    message.startDate = object.startDate !== undefined && object.startDate !== null ? Timestamp.fromPartial(object.startDate) : undefined;
    message.endDate = object.endDate !== undefined && object.endDate !== null ? Timestamp.fromPartial(object.endDate) : undefined;
    message.issuanceDate = object.issuanceDate !== undefined && object.issuanceDate !== null ? Timestamp.fromPartial(object.issuanceDate) : undefined;
    message.open = object.open ?? false;
    return message;
  },
  fromAmino(object: BatchAmino): Batch {
    return {
      key: Long.fromString(object.key),
      issuer: object.issuer,
      projectKey: Long.fromString(object.project_key),
      denom: object.denom,
      metadata: object.metadata,
      startDate: object?.start_date ? Timestamp.fromAmino(object.start_date) : undefined,
      endDate: object?.end_date ? Timestamp.fromAmino(object.end_date) : undefined,
      issuanceDate: object?.issuance_date ? Timestamp.fromAmino(object.issuance_date) : undefined,
      open: object.open
    };
  },
  toAmino(message: Batch): BatchAmino {
    const obj: any = {};
    obj.key = message.key ? message.key.toString() : undefined;
    obj.issuer = message.issuer;
    obj.project_key = message.projectKey ? message.projectKey.toString() : undefined;
    obj.denom = message.denom;
    obj.metadata = message.metadata;
    obj.start_date = message.startDate ? Timestamp.toAmino(message.startDate) : undefined;
    obj.end_date = message.endDate ? Timestamp.toAmino(message.endDate) : undefined;
    obj.issuance_date = message.issuanceDate ? Timestamp.toAmino(message.issuanceDate) : undefined;
    obj.open = message.open;
    return obj;
  },
  fromAminoMsg(object: BatchAminoMsg): Batch {
    return Batch.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchProtoMsg): Batch {
    return Batch.decode(message.value);
  },
  toProto(message: Batch): Uint8Array {
    return Batch.encode(message).finish();
  },
  toProtoMsg(message: Batch): BatchProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.Batch",
      value: Batch.encode(message).finish()
    };
  }
};
function createBaseClassSequence(): ClassSequence {
  return {
    creditTypeAbbrev: "",
    nextSequence: Long.UZERO
  };
}
export const ClassSequence = {
  encode(message: ClassSequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creditTypeAbbrev !== "") {
      writer.uint32(10).string(message.creditTypeAbbrev);
    }
    if (!message.nextSequence.isZero()) {
      writer.uint32(16).uint64(message.nextSequence);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ClassSequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creditTypeAbbrev = reader.string();
          break;
        case 2:
          message.nextSequence = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClassSequence {
    return {
      creditTypeAbbrev: isSet(object.creditTypeAbbrev) ? String(object.creditTypeAbbrev) : "",
      nextSequence: isSet(object.nextSequence) ? Long.fromValue(object.nextSequence) : Long.UZERO
    };
  },
  toJSON(message: ClassSequence): unknown {
    const obj: any = {};
    message.creditTypeAbbrev !== undefined && (obj.creditTypeAbbrev = message.creditTypeAbbrev);
    message.nextSequence !== undefined && (obj.nextSequence = (message.nextSequence || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<ClassSequence>): ClassSequence {
    const message = createBaseClassSequence();
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
    message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? Long.fromValue(object.nextSequence) : Long.UZERO;
    return message;
  },
  fromAmino(object: ClassSequenceAmino): ClassSequence {
    return {
      creditTypeAbbrev: object.credit_type_abbrev,
      nextSequence: Long.fromString(object.next_sequence)
    };
  },
  toAmino(message: ClassSequence): ClassSequenceAmino {
    const obj: any = {};
    obj.credit_type_abbrev = message.creditTypeAbbrev;
    obj.next_sequence = message.nextSequence ? message.nextSequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ClassSequenceAminoMsg): ClassSequence {
    return ClassSequence.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassSequenceProtoMsg): ClassSequence {
    return ClassSequence.decode(message.value);
  },
  toProto(message: ClassSequence): Uint8Array {
    return ClassSequence.encode(message).finish();
  },
  toProtoMsg(message: ClassSequence): ClassSequenceProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.ClassSequence",
      value: ClassSequence.encode(message).finish()
    };
  }
};
function createBaseProjectSequence(): ProjectSequence {
  return {
    classKey: Long.UZERO,
    nextSequence: Long.UZERO
  };
}
export const ProjectSequence = {
  encode(message: ProjectSequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.classKey.isZero()) {
      writer.uint32(8).uint64(message.classKey);
    }
    if (!message.nextSequence.isZero()) {
      writer.uint32(16).uint64(message.nextSequence);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectSequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classKey = (reader.uint64() as Long);
          break;
        case 2:
          message.nextSequence = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProjectSequence {
    return {
      classKey: isSet(object.classKey) ? Long.fromValue(object.classKey) : Long.UZERO,
      nextSequence: isSet(object.nextSequence) ? Long.fromValue(object.nextSequence) : Long.UZERO
    };
  },
  toJSON(message: ProjectSequence): unknown {
    const obj: any = {};
    message.classKey !== undefined && (obj.classKey = (message.classKey || Long.UZERO).toString());
    message.nextSequence !== undefined && (obj.nextSequence = (message.nextSequence || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<ProjectSequence>): ProjectSequence {
    const message = createBaseProjectSequence();
    message.classKey = object.classKey !== undefined && object.classKey !== null ? Long.fromValue(object.classKey) : Long.UZERO;
    message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? Long.fromValue(object.nextSequence) : Long.UZERO;
    return message;
  },
  fromAmino(object: ProjectSequenceAmino): ProjectSequence {
    return {
      classKey: Long.fromString(object.class_key),
      nextSequence: Long.fromString(object.next_sequence)
    };
  },
  toAmino(message: ProjectSequence): ProjectSequenceAmino {
    const obj: any = {};
    obj.class_key = message.classKey ? message.classKey.toString() : undefined;
    obj.next_sequence = message.nextSequence ? message.nextSequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ProjectSequenceAminoMsg): ProjectSequence {
    return ProjectSequence.fromAmino(object.value);
  },
  fromProtoMsg(message: ProjectSequenceProtoMsg): ProjectSequence {
    return ProjectSequence.decode(message.value);
  },
  toProto(message: ProjectSequence): Uint8Array {
    return ProjectSequence.encode(message).finish();
  },
  toProtoMsg(message: ProjectSequence): ProjectSequenceProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.ProjectSequence",
      value: ProjectSequence.encode(message).finish()
    };
  }
};
function createBaseBatchSequence(): BatchSequence {
  return {
    projectKey: Long.UZERO,
    nextSequence: Long.UZERO
  };
}
export const BatchSequence = {
  encode(message: BatchSequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.projectKey.isZero()) {
      writer.uint32(8).uint64(message.projectKey);
    }
    if (!message.nextSequence.isZero()) {
      writer.uint32(16).uint64(message.nextSequence);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BatchSequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectKey = (reader.uint64() as Long);
          break;
        case 2:
          message.nextSequence = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchSequence {
    return {
      projectKey: isSet(object.projectKey) ? Long.fromValue(object.projectKey) : Long.UZERO,
      nextSequence: isSet(object.nextSequence) ? Long.fromValue(object.nextSequence) : Long.UZERO
    };
  },
  toJSON(message: BatchSequence): unknown {
    const obj: any = {};
    message.projectKey !== undefined && (obj.projectKey = (message.projectKey || Long.UZERO).toString());
    message.nextSequence !== undefined && (obj.nextSequence = (message.nextSequence || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<BatchSequence>): BatchSequence {
    const message = createBaseBatchSequence();
    message.projectKey = object.projectKey !== undefined && object.projectKey !== null ? Long.fromValue(object.projectKey) : Long.UZERO;
    message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? Long.fromValue(object.nextSequence) : Long.UZERO;
    return message;
  },
  fromAmino(object: BatchSequenceAmino): BatchSequence {
    return {
      projectKey: Long.fromString(object.project_key),
      nextSequence: Long.fromString(object.next_sequence)
    };
  },
  toAmino(message: BatchSequence): BatchSequenceAmino {
    const obj: any = {};
    obj.project_key = message.projectKey ? message.projectKey.toString() : undefined;
    obj.next_sequence = message.nextSequence ? message.nextSequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BatchSequenceAminoMsg): BatchSequence {
    return BatchSequence.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchSequenceProtoMsg): BatchSequence {
    return BatchSequence.decode(message.value);
  },
  toProto(message: BatchSequence): Uint8Array {
    return BatchSequence.encode(message).finish();
  },
  toProtoMsg(message: BatchSequence): BatchSequenceProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.BatchSequence",
      value: BatchSequence.encode(message).finish()
    };
  }
};
function createBaseBatchBalance(): BatchBalance {
  return {
    batchKey: Long.UZERO,
    address: new Uint8Array(),
    tradableAmount: "",
    retiredAmount: "",
    escrowedAmount: ""
  };
}
export const BatchBalance = {
  encode(message: BatchBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.batchKey.isZero()) {
      writer.uint32(8).uint64(message.batchKey);
    }
    if (message.address.length !== 0) {
      writer.uint32(18).bytes(message.address);
    }
    if (message.tradableAmount !== "") {
      writer.uint32(26).string(message.tradableAmount);
    }
    if (message.retiredAmount !== "") {
      writer.uint32(34).string(message.retiredAmount);
    }
    if (message.escrowedAmount !== "") {
      writer.uint32(42).string(message.escrowedAmount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BatchBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchKey = (reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.bytes();
          break;
        case 3:
          message.tradableAmount = reader.string();
          break;
        case 4:
          message.retiredAmount = reader.string();
          break;
        case 5:
          message.escrowedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchBalance {
    return {
      batchKey: isSet(object.batchKey) ? Long.fromValue(object.batchKey) : Long.UZERO,
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      tradableAmount: isSet(object.tradableAmount) ? String(object.tradableAmount) : "",
      retiredAmount: isSet(object.retiredAmount) ? String(object.retiredAmount) : "",
      escrowedAmount: isSet(object.escrowedAmount) ? String(object.escrowedAmount) : ""
    };
  },
  toJSON(message: BatchBalance): unknown {
    const obj: any = {};
    message.batchKey !== undefined && (obj.batchKey = (message.batchKey || Long.UZERO).toString());
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.tradableAmount !== undefined && (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined && (obj.retiredAmount = message.retiredAmount);
    message.escrowedAmount !== undefined && (obj.escrowedAmount = message.escrowedAmount);
    return obj;
  },
  fromPartial(object: Partial<BatchBalance>): BatchBalance {
    const message = createBaseBatchBalance();
    message.batchKey = object.batchKey !== undefined && object.batchKey !== null ? Long.fromValue(object.batchKey) : Long.UZERO;
    message.address = object.address ?? new Uint8Array();
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    message.escrowedAmount = object.escrowedAmount ?? "";
    return message;
  },
  fromAmino(object: BatchBalanceAmino): BatchBalance {
    return {
      batchKey: Long.fromString(object.batch_key),
      address: object.address,
      tradableAmount: object.tradable_amount,
      retiredAmount: object.retired_amount,
      escrowedAmount: object.escrowed_amount
    };
  },
  toAmino(message: BatchBalance): BatchBalanceAmino {
    const obj: any = {};
    obj.batch_key = message.batchKey ? message.batchKey.toString() : undefined;
    obj.address = message.address;
    obj.tradable_amount = message.tradableAmount;
    obj.retired_amount = message.retiredAmount;
    obj.escrowed_amount = message.escrowedAmount;
    return obj;
  },
  fromAminoMsg(object: BatchBalanceAminoMsg): BatchBalance {
    return BatchBalance.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchBalanceProtoMsg): BatchBalance {
    return BatchBalance.decode(message.value);
  },
  toProto(message: BatchBalance): Uint8Array {
    return BatchBalance.encode(message).finish();
  },
  toProtoMsg(message: BatchBalance): BatchBalanceProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.BatchBalance",
      value: BatchBalance.encode(message).finish()
    };
  }
};
function createBaseBatchSupply(): BatchSupply {
  return {
    batchKey: Long.UZERO,
    tradableAmount: "",
    retiredAmount: "",
    cancelledAmount: ""
  };
}
export const BatchSupply = {
  encode(message: BatchSupply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.batchKey.isZero()) {
      writer.uint32(8).uint64(message.batchKey);
    }
    if (message.tradableAmount !== "") {
      writer.uint32(18).string(message.tradableAmount);
    }
    if (message.retiredAmount !== "") {
      writer.uint32(26).string(message.retiredAmount);
    }
    if (message.cancelledAmount !== "") {
      writer.uint32(34).string(message.cancelledAmount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BatchSupply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchSupply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchKey = (reader.uint64() as Long);
          break;
        case 2:
          message.tradableAmount = reader.string();
          break;
        case 3:
          message.retiredAmount = reader.string();
          break;
        case 4:
          message.cancelledAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchSupply {
    return {
      batchKey: isSet(object.batchKey) ? Long.fromValue(object.batchKey) : Long.UZERO,
      tradableAmount: isSet(object.tradableAmount) ? String(object.tradableAmount) : "",
      retiredAmount: isSet(object.retiredAmount) ? String(object.retiredAmount) : "",
      cancelledAmount: isSet(object.cancelledAmount) ? String(object.cancelledAmount) : ""
    };
  },
  toJSON(message: BatchSupply): unknown {
    const obj: any = {};
    message.batchKey !== undefined && (obj.batchKey = (message.batchKey || Long.UZERO).toString());
    message.tradableAmount !== undefined && (obj.tradableAmount = message.tradableAmount);
    message.retiredAmount !== undefined && (obj.retiredAmount = message.retiredAmount);
    message.cancelledAmount !== undefined && (obj.cancelledAmount = message.cancelledAmount);
    return obj;
  },
  fromPartial(object: Partial<BatchSupply>): BatchSupply {
    const message = createBaseBatchSupply();
    message.batchKey = object.batchKey !== undefined && object.batchKey !== null ? Long.fromValue(object.batchKey) : Long.UZERO;
    message.tradableAmount = object.tradableAmount ?? "";
    message.retiredAmount = object.retiredAmount ?? "";
    message.cancelledAmount = object.cancelledAmount ?? "";
    return message;
  },
  fromAmino(object: BatchSupplyAmino): BatchSupply {
    return {
      batchKey: Long.fromString(object.batch_key),
      tradableAmount: object.tradable_amount,
      retiredAmount: object.retired_amount,
      cancelledAmount: object.cancelled_amount
    };
  },
  toAmino(message: BatchSupply): BatchSupplyAmino {
    const obj: any = {};
    obj.batch_key = message.batchKey ? message.batchKey.toString() : undefined;
    obj.tradable_amount = message.tradableAmount;
    obj.retired_amount = message.retiredAmount;
    obj.cancelled_amount = message.cancelledAmount;
    return obj;
  },
  fromAminoMsg(object: BatchSupplyAminoMsg): BatchSupply {
    return BatchSupply.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchSupplyProtoMsg): BatchSupply {
    return BatchSupply.decode(message.value);
  },
  toProto(message: BatchSupply): Uint8Array {
    return BatchSupply.encode(message).finish();
  },
  toProtoMsg(message: BatchSupply): BatchSupplyProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.BatchSupply",
      value: BatchSupply.encode(message).finish()
    };
  }
};
function createBaseOriginTxIndex(): OriginTxIndex {
  return {
    classKey: Long.UZERO,
    id: "",
    source: ""
  };
}
export const OriginTxIndex = {
  encode(message: OriginTxIndex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.classKey.isZero()) {
      writer.uint32(8).uint64(message.classKey);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OriginTxIndex {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOriginTxIndex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classKey = (reader.uint64() as Long);
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.source = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OriginTxIndex {
    return {
      classKey: isSet(object.classKey) ? Long.fromValue(object.classKey) : Long.UZERO,
      id: isSet(object.id) ? String(object.id) : "",
      source: isSet(object.source) ? String(object.source) : ""
    };
  },
  toJSON(message: OriginTxIndex): unknown {
    const obj: any = {};
    message.classKey !== undefined && (obj.classKey = (message.classKey || Long.UZERO).toString());
    message.id !== undefined && (obj.id = message.id);
    message.source !== undefined && (obj.source = message.source);
    return obj;
  },
  fromPartial(object: Partial<OriginTxIndex>): OriginTxIndex {
    const message = createBaseOriginTxIndex();
    message.classKey = object.classKey !== undefined && object.classKey !== null ? Long.fromValue(object.classKey) : Long.UZERO;
    message.id = object.id ?? "";
    message.source = object.source ?? "";
    return message;
  },
  fromAmino(object: OriginTxIndexAmino): OriginTxIndex {
    return {
      classKey: Long.fromString(object.class_key),
      id: object.id,
      source: object.source
    };
  },
  toAmino(message: OriginTxIndex): OriginTxIndexAmino {
    const obj: any = {};
    obj.class_key = message.classKey ? message.classKey.toString() : undefined;
    obj.id = message.id;
    obj.source = message.source;
    return obj;
  },
  fromAminoMsg(object: OriginTxIndexAminoMsg): OriginTxIndex {
    return OriginTxIndex.fromAmino(object.value);
  },
  fromProtoMsg(message: OriginTxIndexProtoMsg): OriginTxIndex {
    return OriginTxIndex.decode(message.value);
  },
  toProto(message: OriginTxIndex): Uint8Array {
    return OriginTxIndex.encode(message).finish();
  },
  toProtoMsg(message: OriginTxIndex): OriginTxIndexProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.OriginTxIndex",
      value: OriginTxIndex.encode(message).finish()
    };
  }
};
function createBaseBatchContract(): BatchContract {
  return {
    batchKey: Long.UZERO,
    classKey: Long.UZERO,
    contract: ""
  };
}
export const BatchContract = {
  encode(message: BatchContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.batchKey.isZero()) {
      writer.uint32(8).uint64(message.batchKey);
    }
    if (!message.classKey.isZero()) {
      writer.uint32(16).uint64(message.classKey);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BatchContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchKey = (reader.uint64() as Long);
          break;
        case 2:
          message.classKey = (reader.uint64() as Long);
          break;
        case 3:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchContract {
    return {
      batchKey: isSet(object.batchKey) ? Long.fromValue(object.batchKey) : Long.UZERO,
      classKey: isSet(object.classKey) ? Long.fromValue(object.classKey) : Long.UZERO,
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  toJSON(message: BatchContract): unknown {
    const obj: any = {};
    message.batchKey !== undefined && (obj.batchKey = (message.batchKey || Long.UZERO).toString());
    message.classKey !== undefined && (obj.classKey = (message.classKey || Long.UZERO).toString());
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },
  fromPartial(object: Partial<BatchContract>): BatchContract {
    const message = createBaseBatchContract();
    message.batchKey = object.batchKey !== undefined && object.batchKey !== null ? Long.fromValue(object.batchKey) : Long.UZERO;
    message.classKey = object.classKey !== undefined && object.classKey !== null ? Long.fromValue(object.classKey) : Long.UZERO;
    message.contract = object.contract ?? "";
    return message;
  },
  fromAmino(object: BatchContractAmino): BatchContract {
    return {
      batchKey: Long.fromString(object.batch_key),
      classKey: Long.fromString(object.class_key),
      contract: object.contract
    };
  },
  toAmino(message: BatchContract): BatchContractAmino {
    const obj: any = {};
    obj.batch_key = message.batchKey ? message.batchKey.toString() : undefined;
    obj.class_key = message.classKey ? message.classKey.toString() : undefined;
    obj.contract = message.contract;
    return obj;
  },
  fromAminoMsg(object: BatchContractAminoMsg): BatchContract {
    return BatchContract.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchContractProtoMsg): BatchContract {
    return BatchContract.decode(message.value);
  },
  toProto(message: BatchContract): Uint8Array {
    return BatchContract.encode(message).finish();
  },
  toProtoMsg(message: BatchContract): BatchContractProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.BatchContract",
      value: BatchContract.encode(message).finish()
    };
  }
};
function createBaseClassCreatorAllowlist(): ClassCreatorAllowlist {
  return {
    enabled: false
  };
}
export const ClassCreatorAllowlist = {
  encode(message: ClassCreatorAllowlist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ClassCreatorAllowlist {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassCreatorAllowlist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClassCreatorAllowlist {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },
  toJSON(message: ClassCreatorAllowlist): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },
  fromPartial(object: Partial<ClassCreatorAllowlist>): ClassCreatorAllowlist {
    const message = createBaseClassCreatorAllowlist();
    message.enabled = object.enabled ?? false;
    return message;
  },
  fromAmino(object: ClassCreatorAllowlistAmino): ClassCreatorAllowlist {
    return {
      enabled: object.enabled
    };
  },
  toAmino(message: ClassCreatorAllowlist): ClassCreatorAllowlistAmino {
    const obj: any = {};
    obj.enabled = message.enabled;
    return obj;
  },
  fromAminoMsg(object: ClassCreatorAllowlistAminoMsg): ClassCreatorAllowlist {
    return ClassCreatorAllowlist.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassCreatorAllowlistProtoMsg): ClassCreatorAllowlist {
    return ClassCreatorAllowlist.decode(message.value);
  },
  toProto(message: ClassCreatorAllowlist): Uint8Array {
    return ClassCreatorAllowlist.encode(message).finish();
  },
  toProtoMsg(message: ClassCreatorAllowlist): ClassCreatorAllowlistProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.ClassCreatorAllowlist",
      value: ClassCreatorAllowlist.encode(message).finish()
    };
  }
};
function createBaseAllowedClassCreator(): AllowedClassCreator {
  return {
    address: new Uint8Array()
  };
}
export const AllowedClassCreator = {
  encode(message: AllowedClassCreator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AllowedClassCreator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedClassCreator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllowedClassCreator {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array()
    };
  },
  toJSON(message: AllowedClassCreator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<AllowedClassCreator>): AllowedClassCreator {
    const message = createBaseAllowedClassCreator();
    message.address = object.address ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AllowedClassCreatorAmino): AllowedClassCreator {
    return {
      address: object.address
    };
  },
  toAmino(message: AllowedClassCreator): AllowedClassCreatorAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: AllowedClassCreatorAminoMsg): AllowedClassCreator {
    return AllowedClassCreator.fromAmino(object.value);
  },
  fromProtoMsg(message: AllowedClassCreatorProtoMsg): AllowedClassCreator {
    return AllowedClassCreator.decode(message.value);
  },
  toProto(message: AllowedClassCreator): Uint8Array {
    return AllowedClassCreator.encode(message).finish();
  },
  toProtoMsg(message: AllowedClassCreator): AllowedClassCreatorProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.AllowedClassCreator",
      value: AllowedClassCreator.encode(message).finish()
    };
  }
};
function createBaseClassFee(): ClassFee {
  return {
    fee: undefined
  };
}
export const ClassFee = {
  encode(message: ClassFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ClassFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClassFee {
    return {
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: ClassFee): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ClassFee>): ClassFee {
    const message = createBaseClassFee();
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: ClassFeeAmino): ClassFee {
    return {
      fee: object?.fee ? Coin.fromAmino(object.fee) : undefined
    };
  },
  toAmino(message: ClassFee): ClassFeeAmino {
    const obj: any = {};
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: ClassFeeAminoMsg): ClassFee {
    return ClassFee.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassFeeProtoMsg): ClassFee {
    return ClassFee.decode(message.value);
  },
  toProto(message: ClassFee): Uint8Array {
    return ClassFee.encode(message).finish();
  },
  toProtoMsg(message: ClassFee): ClassFeeProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.ClassFee",
      value: ClassFee.encode(message).finish()
    };
  }
};
function createBaseAllowedBridgeChain(): AllowedBridgeChain {
  return {
    chainName: ""
  };
}
export const AllowedBridgeChain = {
  encode(message: AllowedBridgeChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AllowedBridgeChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedBridgeChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AllowedBridgeChain {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : ""
    };
  },
  toJSON(message: AllowedBridgeChain): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },
  fromPartial(object: Partial<AllowedBridgeChain>): AllowedBridgeChain {
    const message = createBaseAllowedBridgeChain();
    message.chainName = object.chainName ?? "";
    return message;
  },
  fromAmino(object: AllowedBridgeChainAmino): AllowedBridgeChain {
    return {
      chainName: object.chain_name
    };
  },
  toAmino(message: AllowedBridgeChain): AllowedBridgeChainAmino {
    const obj: any = {};
    obj.chain_name = message.chainName;
    return obj;
  },
  fromAminoMsg(object: AllowedBridgeChainAminoMsg): AllowedBridgeChain {
    return AllowedBridgeChain.fromAmino(object.value);
  },
  fromProtoMsg(message: AllowedBridgeChainProtoMsg): AllowedBridgeChain {
    return AllowedBridgeChain.decode(message.value);
  },
  toProto(message: AllowedBridgeChain): Uint8Array {
    return AllowedBridgeChain.encode(message).finish();
  },
  toProtoMsg(message: AllowedBridgeChain): AllowedBridgeChainProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.v1.AllowedBridgeChain",
      value: AllowedBridgeChain.encode(message).finish()
    };
  }
};