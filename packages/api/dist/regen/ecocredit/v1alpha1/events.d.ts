import { BinaryReader, BinaryWriter } from "../../../binary";
/** EventCreateClass is an event emitted when a credit class is created. */
export interface EventCreateClass {
    /** class_id is the unique ID of credit class. */
    classId: string;
    /** admin is the admin of the credit class. */
    admin: string;
}
export interface EventCreateClassProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.EventCreateClass";
    value: Uint8Array;
}
/** EventCreateClass is an event emitted when a credit class is created. */
export interface EventCreateClassAmino {
    /** class_id is the unique ID of credit class. */
    class_id?: string;
    /** admin is the admin of the credit class. */
    admin?: string;
}
export interface EventCreateClassAminoMsg {
    type: "/regen.ecocredit.v1alpha1.EventCreateClass";
    value: EventCreateClassAmino;
}
/** EventCreateClass is an event emitted when a credit class is created. */
export interface EventCreateClassSDKType {
    class_id: string;
    admin: string;
}
/** EventCreateBatch is an event emitted when a credit batch is created. */
export interface EventCreateBatch {
    /** class_id is the unique ID of credit class. */
    classId: string;
    /** batch_denom is the unique ID of credit batch. */
    batchDenom: string;
    /** issuer is the account address of the issuer of the credit batch. */
    issuer: string;
    /** total_amount is the total number of credits in the credit batch. */
    totalAmount: string;
    /**
     * start_date is the beginning of the period during which this credit batch
     * was quantified and verified.
     */
    startDate: string;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    endDate: string;
    /**
     * project_location is the location of the project backing the credits in this
     * batch. Full documentation can be found in MsgCreateBatch.project_location.
     */
    projectLocation: string;
}
export interface EventCreateBatchProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.EventCreateBatch";
    value: Uint8Array;
}
/** EventCreateBatch is an event emitted when a credit batch is created. */
export interface EventCreateBatchAmino {
    /** class_id is the unique ID of credit class. */
    class_id?: string;
    /** batch_denom is the unique ID of credit batch. */
    batch_denom?: string;
    /** issuer is the account address of the issuer of the credit batch. */
    issuer?: string;
    /** total_amount is the total number of credits in the credit batch. */
    total_amount?: string;
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
    /**
     * project_location is the location of the project backing the credits in this
     * batch. Full documentation can be found in MsgCreateBatch.project_location.
     */
    project_location?: string;
}
export interface EventCreateBatchAminoMsg {
    type: "/regen.ecocredit.v1alpha1.EventCreateBatch";
    value: EventCreateBatchAmino;
}
/** EventCreateBatch is an event emitted when a credit batch is created. */
export interface EventCreateBatchSDKType {
    class_id: string;
    batch_denom: string;
    issuer: string;
    total_amount: string;
    start_date: string;
    end_date: string;
    project_location: string;
}
/**
 * EventReceive is an event emitted when credits are received either via
 * creation of a new batch, transfer of credits, or taking credits from a
 * basket. Each batch_denom created, transferred or taken from a baset will
 * result in a separate EventReceive for easy indexing.
 */
export interface EventReceive {
    /**
     * sender is the sender of the credits in the case that this event is the
     * result of a transfer. It will not be set when credits are received at
     * initial issuance or taken from a basket.
     */
    sender: string;
    /** recipient is the recipient of the credits. */
    recipient: string;
    /** batch_denom is the unique ID of credit batch. */
    batchDenom: string;
    /** tradable_amount is the decimal number of tradable credits received. */
    tradableAmount: string;
    /** retired_amount is the decimal number of retired credits received. */
    retiredAmount: string;
    /**
     * basket_denom is the denom of the basket. when the basket_denom field is
     * set, it indicates that this event was triggered by the transfer of credits
     * from a basket. It will not be set if the credits were sent by a user, or by
     * initial issuance.
     */
    basketDenom: string;
}
export interface EventReceiveProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.EventReceive";
    value: Uint8Array;
}
/**
 * EventReceive is an event emitted when credits are received either via
 * creation of a new batch, transfer of credits, or taking credits from a
 * basket. Each batch_denom created, transferred or taken from a baset will
 * result in a separate EventReceive for easy indexing.
 */
export interface EventReceiveAmino {
    /**
     * sender is the sender of the credits in the case that this event is the
     * result of a transfer. It will not be set when credits are received at
     * initial issuance or taken from a basket.
     */
    sender?: string;
    /** recipient is the recipient of the credits. */
    recipient?: string;
    /** batch_denom is the unique ID of credit batch. */
    batch_denom?: string;
    /** tradable_amount is the decimal number of tradable credits received. */
    tradable_amount?: string;
    /** retired_amount is the decimal number of retired credits received. */
    retired_amount?: string;
    /**
     * basket_denom is the denom of the basket. when the basket_denom field is
     * set, it indicates that this event was triggered by the transfer of credits
     * from a basket. It will not be set if the credits were sent by a user, or by
     * initial issuance.
     */
    basket_denom?: string;
}
export interface EventReceiveAminoMsg {
    type: "/regen.ecocredit.v1alpha1.EventReceive";
    value: EventReceiveAmino;
}
/**
 * EventReceive is an event emitted when credits are received either via
 * creation of a new batch, transfer of credits, or taking credits from a
 * basket. Each batch_denom created, transferred or taken from a baset will
 * result in a separate EventReceive for easy indexing.
 */
export interface EventReceiveSDKType {
    sender: string;
    recipient: string;
    batch_denom: string;
    tradable_amount: string;
    retired_amount: string;
    basket_denom: string;
}
/**
 * EventRetire is an event emitted when credits are retired. When credits are
 * retired from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventRetire {
    /**
     * retirer is the account which has done the "retiring". This will be the
     * account receiving credits in the case that credits were retired upon
     * issuance using Msg/CreateBatch or retired upon transfer using Msg/Send.
     */
    retirer: string;
    /** batch_denom is the unique ID of credit batch. */
    batchDenom: string;
    /** amount is the decimal number of credits that have been retired. */
    amount: string;
    /**
     * location is the location of the beneficiary or buyer of the retired
     * credits. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters.
     */
    location: string;
}
export interface EventRetireProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.EventRetire";
    value: Uint8Array;
}
/**
 * EventRetire is an event emitted when credits are retired. When credits are
 * retired from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventRetireAmino {
    /**
     * retirer is the account which has done the "retiring". This will be the
     * account receiving credits in the case that credits were retired upon
     * issuance using Msg/CreateBatch or retired upon transfer using Msg/Send.
     */
    retirer?: string;
    /** batch_denom is the unique ID of credit batch. */
    batch_denom?: string;
    /** amount is the decimal number of credits that have been retired. */
    amount?: string;
    /**
     * location is the location of the beneficiary or buyer of the retired
     * credits. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters.
     */
    location?: string;
}
export interface EventRetireAminoMsg {
    type: "/regen.ecocredit.v1alpha1.EventRetire";
    value: EventRetireAmino;
}
/**
 * EventRetire is an event emitted when credits are retired. When credits are
 * retired from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventRetireSDKType {
    retirer: string;
    batch_denom: string;
    amount: string;
    location: string;
}
/**
 * EventCancel is an event emitted when credits are cancelled. When credits are
 * cancelled from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventCancel {
    /**
     * canceller is the account which has cancelled the credits, which should be
     * the holder of the credits.
     */
    canceller: string;
    /** batch_denom is the unique ID of credit batch. */
    batchDenom: string;
    /** amount is the decimal number of credits that have been cancelled. */
    amount: string;
}
export interface EventCancelProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.EventCancel";
    value: Uint8Array;
}
/**
 * EventCancel is an event emitted when credits are cancelled. When credits are
 * cancelled from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventCancelAmino {
    /**
     * canceller is the account which has cancelled the credits, which should be
     * the holder of the credits.
     */
    canceller?: string;
    /** batch_denom is the unique ID of credit batch. */
    batch_denom?: string;
    /** amount is the decimal number of credits that have been cancelled. */
    amount?: string;
}
export interface EventCancelAminoMsg {
    type: "/regen.ecocredit.v1alpha1.EventCancel";
    value: EventCancelAmino;
}
/**
 * EventCancel is an event emitted when credits are cancelled. When credits are
 * cancelled from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventCancelSDKType {
    canceller: string;
    batch_denom: string;
    amount: string;
}
export declare const EventCreateClass: {
    typeUrl: string;
    encode(message: EventCreateClass, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventCreateClass;
    fromPartial(object: Partial<EventCreateClass>): EventCreateClass;
    fromAmino(object: EventCreateClassAmino): EventCreateClass;
    toAmino(message: EventCreateClass): EventCreateClassAmino;
    fromAminoMsg(object: EventCreateClassAminoMsg): EventCreateClass;
    fromProtoMsg(message: EventCreateClassProtoMsg): EventCreateClass;
    toProto(message: EventCreateClass): Uint8Array;
    toProtoMsg(message: EventCreateClass): EventCreateClassProtoMsg;
};
export declare const EventCreateBatch: {
    typeUrl: string;
    encode(message: EventCreateBatch, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventCreateBatch;
    fromPartial(object: Partial<EventCreateBatch>): EventCreateBatch;
    fromAmino(object: EventCreateBatchAmino): EventCreateBatch;
    toAmino(message: EventCreateBatch): EventCreateBatchAmino;
    fromAminoMsg(object: EventCreateBatchAminoMsg): EventCreateBatch;
    fromProtoMsg(message: EventCreateBatchProtoMsg): EventCreateBatch;
    toProto(message: EventCreateBatch): Uint8Array;
    toProtoMsg(message: EventCreateBatch): EventCreateBatchProtoMsg;
};
export declare const EventReceive: {
    typeUrl: string;
    encode(message: EventReceive, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventReceive;
    fromPartial(object: Partial<EventReceive>): EventReceive;
    fromAmino(object: EventReceiveAmino): EventReceive;
    toAmino(message: EventReceive): EventReceiveAmino;
    fromAminoMsg(object: EventReceiveAminoMsg): EventReceive;
    fromProtoMsg(message: EventReceiveProtoMsg): EventReceive;
    toProto(message: EventReceive): Uint8Array;
    toProtoMsg(message: EventReceive): EventReceiveProtoMsg;
};
export declare const EventRetire: {
    typeUrl: string;
    encode(message: EventRetire, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventRetire;
    fromPartial(object: Partial<EventRetire>): EventRetire;
    fromAmino(object: EventRetireAmino): EventRetire;
    toAmino(message: EventRetire): EventRetireAmino;
    fromAminoMsg(object: EventRetireAminoMsg): EventRetire;
    fromProtoMsg(message: EventRetireProtoMsg): EventRetire;
    toProto(message: EventRetire): Uint8Array;
    toProtoMsg(message: EventRetire): EventRetireProtoMsg;
};
export declare const EventCancel: {
    typeUrl: string;
    encode(message: EventCancel, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventCancel;
    fromPartial(object: Partial<EventCancel>): EventCancel;
    fromAmino(object: EventCancelAmino): EventCancel;
    toAmino(message: EventCancel): EventCancelAmino;
    fromAminoMsg(object: EventCancelAminoMsg): EventCancel;
    fromProtoMsg(message: EventCancelProtoMsg): EventCancel;
    toProto(message: EventCancel): Uint8Array;
    toProtoMsg(message: EventCancel): EventCancelProtoMsg;
};
