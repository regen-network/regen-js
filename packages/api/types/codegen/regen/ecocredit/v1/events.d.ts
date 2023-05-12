import { OriginTx, OriginTxSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
/** EventCreateClass is an event emitted when a credit class is created. */
export interface EventCreateClass {
    /** class_id is the unique identifier of the credit class. */
    classId: string;
}
/** EventCreateClass is an event emitted when a credit class is created. */
export interface EventCreateClassSDKType {
    /** class_id is the unique identifier of the credit class. */
    class_id: string;
}
/** EventCreateProject is an event emitted when a project is created. */
export interface EventCreateProject {
    /** project_id is the unique identifier of the project. */
    projectId: string;
}
/** EventCreateProject is an event emitted when a project is created. */
export interface EventCreateProjectSDKType {
    /** project_id is the unique identifier of the project. */
    project_id: string;
}
/** EventCreateBatch is an event emitted when a credit batch is created. */
export interface EventCreateBatch {
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
    /**
     * origin_tx is the transaction from another chain or registry that triggered
     * the creation of the credit batch.
     */
    originTx?: OriginTx;
}
/** EventCreateBatch is an event emitted when a credit batch is created. */
export interface EventCreateBatchSDKType {
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom: string;
    /**
     * origin_tx is the transaction from another chain or registry that triggered
     * the creation of the credit batch.
     */
    origin_tx?: OriginTxSDKType;
}
/**
 * EventMint is an event emitted when credits are minted either when creating a
 * credit batch or when bridging assets from another chain or registry.
 */
export interface EventMint {
    /**
     * batch_denom is the unique identifier of the credit batch within which the
     * credits were minted.
     */
    batchDenom: string;
    /** tradable_amount is the amount of tradable credits minted. */
    tradableAmount: string;
    /** retired_amount is the amount of retired credits minted. */
    retiredAmount: string;
}
/**
 * EventMint is an event emitted when credits are minted either when creating a
 * credit batch or when bridging assets from another chain or registry.
 */
export interface EventMintSDKType {
    /**
     * batch_denom is the unique identifier of the credit batch within which the
     * credits were minted.
     */
    batch_denom: string;
    /** tradable_amount is the amount of tradable credits minted. */
    tradable_amount: string;
    /** retired_amount is the amount of retired credits minted. */
    retired_amount: string;
}
/**
 * EventMintBatchCredits is an event emitted when credits are minted to an
 * existing open credit batch.
 */
export interface EventMintBatchCredits {
    /**
     * batch_denom is the unique identifier of the credit batch within which the
     * credits were minted.
     */
    batchDenom: string;
    /**
     * origin_tx is the transaction from another chain or registry that triggered
     * the minting of credits within the credit batch.
     */
    originTx?: OriginTx;
}
/**
 * EventMintBatchCredits is an event emitted when credits are minted to an
 * existing open credit batch.
 */
export interface EventMintBatchCreditsSDKType {
    /**
     * batch_denom is the unique identifier of the credit batch within which the
     * credits were minted.
     */
    batch_denom: string;
    /**
     * origin_tx is the transaction from another chain or registry that triggered
     * the minting of credits within the credit batch.
     */
    origin_tx?: OriginTxSDKType;
}
/**
 * EventTransfer is an event emitted when credits are transferred from one
 * account to another including transfers to or from a module account.
 */
export interface EventTransfer {
    /**
     * sender is the sender of the credits. In the case that the credits were
     * transferred from a base account, this will be the account address. In the
     * case that the credits were transferred from a module, this will be the
     * module address (i.e. either the ecocredit module or basket submodule).
     */
    sender: string;
    /**
     * recipient is the recipient of the credits. In the case that the credits
     * were transferred to a base account, this will be the account address. In
     * the case that the credits were transferred to a module, this will be the
     * module address (i.e. either the ecocredit module or basket submodule).
     */
    recipient: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
    /** tradable_amount is the decimal number of tradable credits received. */
    tradableAmount: string;
    /** retired_amount is the decimal number of retired credits received. */
    retiredAmount: string;
}
/**
 * EventTransfer is an event emitted when credits are transferred from one
 * account to another including transfers to or from a module account.
 */
export interface EventTransferSDKType {
    /**
     * sender is the sender of the credits. In the case that the credits were
     * transferred from a base account, this will be the account address. In the
     * case that the credits were transferred from a module, this will be the
     * module address (i.e. either the ecocredit module or basket submodule).
     */
    sender: string;
    /**
     * recipient is the recipient of the credits. In the case that the credits
     * were transferred to a base account, this will be the account address. In
     * the case that the credits were transferred to a module, this will be the
     * module address (i.e. either the ecocredit module or basket submodule).
     */
    recipient: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom: string;
    /** tradable_amount is the decimal number of tradable credits received. */
    tradable_amount: string;
    /** retired_amount is the decimal number of retired credits received. */
    retired_amount: string;
}
/**
 * EventRetire is an event emitted when credits are retired. When credits are
 * retired from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventRetire {
    /**
     * owner is the address of the account that owns the retired credits. This
     * will be the account receiving credits in the case that credits were retired
     * upon issuance using Msg/CreateBatch, retired upon transfer using Msg/Send,
     * retired upon taking from a basket using basket.Msg/Take, or retired upon
     * purchase using marketplace.Msg/BuyDirect.
     */
    owner: string;
    /**
     * batch_denom is the unique identifier of the credit batch within which the
     * credits were retired.
     */
    batchDenom: string;
    /** amount is the decimal number of credits that have been retired. */
    amount: string;
    /**
     * jurisdiction is the jurisdiction of the beneficiary or buyer of the retired
     * credits. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters.
     */
    jurisdiction: string;
    /**
     * reason is any arbitrary string that specifies the reason for retiring
     * credits.
     *
     * Since Revision 2
     */
    reason: string;
}
/**
 * EventRetire is an event emitted when credits are retired. When credits are
 * retired from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventRetireSDKType {
    /**
     * owner is the address of the account that owns the retired credits. This
     * will be the account receiving credits in the case that credits were retired
     * upon issuance using Msg/CreateBatch, retired upon transfer using Msg/Send,
     * retired upon taking from a basket using basket.Msg/Take, or retired upon
     * purchase using marketplace.Msg/BuyDirect.
     */
    owner: string;
    /**
     * batch_denom is the unique identifier of the credit batch within which the
     * credits were retired.
     */
    batch_denom: string;
    /** amount is the decimal number of credits that have been retired. */
    amount: string;
    /**
     * jurisdiction is the jurisdiction of the beneficiary or buyer of the retired
     * credits. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters.
     */
    jurisdiction: string;
    /**
     * reason is any arbitrary string that specifies the reason for retiring
     * credits.
     *
     * Since Revision 2
     */
    reason: string;
}
/**
 * EventCancel is an event emitted when credits are cancelled. When credits are
 * cancelled from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventCancel {
    /** owner is the address of the account that cancelled the credits. */
    owner: string;
    /**
     * batch_denom is the unique identifier of the credit batch within which the
     * credits were cancelled.
     */
    batchDenom: string;
    /** amount is the decimal number of credits that have been cancelled. */
    amount: string;
    /** reason is the reason the credits were cancelled. */
    reason: string;
}
/**
 * EventCancel is an event emitted when credits are cancelled. When credits are
 * cancelled from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventCancelSDKType {
    /** owner is the address of the account that cancelled the credits. */
    owner: string;
    /**
     * batch_denom is the unique identifier of the credit batch within which the
     * credits were cancelled.
     */
    batch_denom: string;
    /** amount is the decimal number of credits that have been cancelled. */
    amount: string;
    /** reason is the reason the credits were cancelled. */
    reason: string;
}
/**
 * EventUpdateClassAdmin is emitted when the admin address of a credit class is
 * changed.
 */
export interface EventUpdateClassAdmin {
    /** class_id is the unique identifier of the class that was updated. */
    classId: string;
}
/**
 * EventUpdateClassAdmin is emitted when the admin address of a credit class is
 * changed.
 */
export interface EventUpdateClassAdminSDKType {
    /** class_id is the unique identifier of the class that was updated. */
    class_id: string;
}
/**
 * EventUpdateClassIssuers is emitted when the issuer list for a credit class
 * is updated.
 */
export interface EventUpdateClassIssuers {
    /** class_id is the unique identifier of the class that was updated. */
    classId: string;
}
/**
 * EventUpdateClassIssuers is emitted when the issuer list for a credit class
 * is updated.
 */
export interface EventUpdateClassIssuersSDKType {
    /** class_id is the unique identifier of the class that was updated. */
    class_id: string;
}
/**
 * EventUpdateClassMetadata is emitted when the credit class metadata is
 * changed.
 */
export interface EventUpdateClassMetadata {
    /** class_id is the unique identifier of the class that was updated. */
    classId: string;
}
/**
 * EventUpdateClassMetadata is emitted when the credit class metadata is
 * changed.
 */
export interface EventUpdateClassMetadataSDKType {
    /** class_id is the unique identifier of the class that was updated. */
    class_id: string;
}
/** EventUpdateProjectAdmin is emitted when the project admin is changed. */
export interface EventUpdateProjectAdmin {
    /** project_id is the unique identifier of the project that was updated. */
    projectId: string;
}
/** EventUpdateProjectAdmin is emitted when the project admin is changed. */
export interface EventUpdateProjectAdminSDKType {
    /** project_id is the unique identifier of the project that was updated. */
    project_id: string;
}
/** EventUpdateProjectMetadata is emitted when the project metadata is changed. */
export interface EventUpdateProjectMetadata {
    /** project_id is the unique identifier of the project that was updated. */
    projectId: string;
}
/** EventUpdateProjectMetadata is emitted when the project metadata is changed. */
export interface EventUpdateProjectMetadataSDKType {
    /** project_id is the unique identifier of the project that was updated. */
    project_id: string;
}
/**
 * EventUpdateBatchMetadata is emitted when the credit batch metadata is
 * changed.
 *
 * Since Revision 2
 */
export interface EventUpdateBatchMetadata {
    /** batch_denom is the unique identifier of the batch that was updated. */
    batchDenom: string;
}
/**
 * EventUpdateBatchMetadata is emitted when the credit batch metadata is
 * changed.
 *
 * Since Revision 2
 */
export interface EventUpdateBatchMetadataSDKType {
    /** batch_denom is the unique identifier of the batch that was updated. */
    batch_denom: string;
}
/** EventSealBatch is emitted when a batch is sealed. */
export interface EventSealBatch {
    /** batch_denom is the denom of the batch that was sealed. */
    batchDenom: string;
}
/** EventSealBatch is emitted when a batch is sealed. */
export interface EventSealBatchSDKType {
    /** batch_denom is the denom of the batch that was sealed. */
    batch_denom: string;
}
/** EventAddCreditType is emitted when governance approves a new credit type. */
export interface EventAddCreditType {
    /** abbreviation is the abbreviation of the credit type. */
    abbreviation: string;
}
/** EventAddCreditType is emitted when governance approves a new credit type. */
export interface EventAddCreditTypeSDKType {
    /** abbreviation is the abbreviation of the credit type. */
    abbreviation: string;
}
/** EventBridge is emitted when credits are bridged to another chain. */
export interface EventBridge {
    /** target is the target chain. */
    target: string;
    /** recipient is the recipient address. */
    recipient: string;
    /** contract is the contract address. */
    contract: string;
    /** amount is the amount of credits. */
    amount: string;
    /**
     * owner is the owner address.
     *
     * Since Revision 1
     */
    owner: string;
    /**
     * batch_denom is the credit batch denom.
     *
     * Since Revision 3
     */
    batchDenom: string;
}
/** EventBridge is emitted when credits are bridged to another chain. */
export interface EventBridgeSDKType {
    /** target is the target chain. */
    target: string;
    /** recipient is the recipient address. */
    recipient: string;
    /** contract is the contract address. */
    contract: string;
    /** amount is the amount of credits. */
    amount: string;
    /**
     * owner is the owner address.
     *
     * Since Revision 1
     */
    owner: string;
    /**
     * batch_denom is the credit batch denom.
     *
     * Since Revision 3
     */
    batch_denom: string;
}
/** EventBridgeReceive is emitted when credits are bridged from another chain. */
export interface EventBridgeReceive {
    /**
     * project_id is the unique identifier of the project that was either created
     * or the existing project within which the credit batch exists.
     */
    projectId: string;
    /**
     * batch_denom is the unique identifier of the credit batch either created
     * or within which the credits were dynamically minted.
     */
    batchDenom: string;
    /**
     * amount is the amount of credits.
     *
     * Since Revision 3
     */
    amount: string;
    /**
     * origin_tx is the transaction from another chain or registry that triggered
     * the minting of credits within the credit batch.
     *
     * Since Revision 3
     */
    originTx?: OriginTx;
}
/** EventBridgeReceive is emitted when credits are bridged from another chain. */
export interface EventBridgeReceiveSDKType {
    /**
     * project_id is the unique identifier of the project that was either created
     * or the existing project within which the credit batch exists.
     */
    project_id: string;
    /**
     * batch_denom is the unique identifier of the credit batch either created
     * or within which the credits were dynamically minted.
     */
    batch_denom: string;
    /**
     * amount is the amount of credits.
     *
     * Since Revision 3
     */
    amount: string;
    /**
     * origin_tx is the transaction from another chain or registry that triggered
     * the minting of credits within the credit batch.
     *
     * Since Revision 3
     */
    origin_tx?: OriginTxSDKType;
}
export declare const EventCreateClass: {
    encode(message: EventCreateClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateClass;
    fromJSON(object: any): EventCreateClass;
    toJSON(message: EventCreateClass): unknown;
    fromPartial(object: Partial<EventCreateClass>): EventCreateClass;
};
export declare const EventCreateProject: {
    encode(message: EventCreateProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateProject;
    fromJSON(object: any): EventCreateProject;
    toJSON(message: EventCreateProject): unknown;
    fromPartial(object: Partial<EventCreateProject>): EventCreateProject;
};
export declare const EventCreateBatch: {
    encode(message: EventCreateBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateBatch;
    fromJSON(object: any): EventCreateBatch;
    toJSON(message: EventCreateBatch): unknown;
    fromPartial(object: Partial<EventCreateBatch>): EventCreateBatch;
};
export declare const EventMint: {
    encode(message: EventMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMint;
    fromJSON(object: any): EventMint;
    toJSON(message: EventMint): unknown;
    fromPartial(object: Partial<EventMint>): EventMint;
};
export declare const EventMintBatchCredits: {
    encode(message: EventMintBatchCredits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMintBatchCredits;
    fromJSON(object: any): EventMintBatchCredits;
    toJSON(message: EventMintBatchCredits): unknown;
    fromPartial(object: Partial<EventMintBatchCredits>): EventMintBatchCredits;
};
export declare const EventTransfer: {
    encode(message: EventTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTransfer;
    fromJSON(object: any): EventTransfer;
    toJSON(message: EventTransfer): unknown;
    fromPartial(object: Partial<EventTransfer>): EventTransfer;
};
export declare const EventRetire: {
    encode(message: EventRetire, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRetire;
    fromJSON(object: any): EventRetire;
    toJSON(message: EventRetire): unknown;
    fromPartial(object: Partial<EventRetire>): EventRetire;
};
export declare const EventCancel: {
    encode(message: EventCancel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCancel;
    fromJSON(object: any): EventCancel;
    toJSON(message: EventCancel): unknown;
    fromPartial(object: Partial<EventCancel>): EventCancel;
};
export declare const EventUpdateClassAdmin: {
    encode(message: EventUpdateClassAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateClassAdmin;
    fromJSON(object: any): EventUpdateClassAdmin;
    toJSON(message: EventUpdateClassAdmin): unknown;
    fromPartial(object: Partial<EventUpdateClassAdmin>): EventUpdateClassAdmin;
};
export declare const EventUpdateClassIssuers: {
    encode(message: EventUpdateClassIssuers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateClassIssuers;
    fromJSON(object: any): EventUpdateClassIssuers;
    toJSON(message: EventUpdateClassIssuers): unknown;
    fromPartial(object: Partial<EventUpdateClassIssuers>): EventUpdateClassIssuers;
};
export declare const EventUpdateClassMetadata: {
    encode(message: EventUpdateClassMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateClassMetadata;
    fromJSON(object: any): EventUpdateClassMetadata;
    toJSON(message: EventUpdateClassMetadata): unknown;
    fromPartial(object: Partial<EventUpdateClassMetadata>): EventUpdateClassMetadata;
};
export declare const EventUpdateProjectAdmin: {
    encode(message: EventUpdateProjectAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateProjectAdmin;
    fromJSON(object: any): EventUpdateProjectAdmin;
    toJSON(message: EventUpdateProjectAdmin): unknown;
    fromPartial(object: Partial<EventUpdateProjectAdmin>): EventUpdateProjectAdmin;
};
export declare const EventUpdateProjectMetadata: {
    encode(message: EventUpdateProjectMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateProjectMetadata;
    fromJSON(object: any): EventUpdateProjectMetadata;
    toJSON(message: EventUpdateProjectMetadata): unknown;
    fromPartial(object: Partial<EventUpdateProjectMetadata>): EventUpdateProjectMetadata;
};
export declare const EventUpdateBatchMetadata: {
    encode(message: EventUpdateBatchMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateBatchMetadata;
    fromJSON(object: any): EventUpdateBatchMetadata;
    toJSON(message: EventUpdateBatchMetadata): unknown;
    fromPartial(object: Partial<EventUpdateBatchMetadata>): EventUpdateBatchMetadata;
};
export declare const EventSealBatch: {
    encode(message: EventSealBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSealBatch;
    fromJSON(object: any): EventSealBatch;
    toJSON(message: EventSealBatch): unknown;
    fromPartial(object: Partial<EventSealBatch>): EventSealBatch;
};
export declare const EventAddCreditType: {
    encode(message: EventAddCreditType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAddCreditType;
    fromJSON(object: any): EventAddCreditType;
    toJSON(message: EventAddCreditType): unknown;
    fromPartial(object: Partial<EventAddCreditType>): EventAddCreditType;
};
export declare const EventBridge: {
    encode(message: EventBridge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBridge;
    fromJSON(object: any): EventBridge;
    toJSON(message: EventBridge): unknown;
    fromPartial(object: Partial<EventBridge>): EventBridge;
};
export declare const EventBridgeReceive: {
    encode(message: EventBridgeReceive, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBridgeReceive;
    fromJSON(object: any): EventBridgeReceive;
    toJSON(message: EventBridgeReceive): unknown;
    fromPartial(object: Partial<EventBridgeReceive>): EventBridgeReceive;
};
