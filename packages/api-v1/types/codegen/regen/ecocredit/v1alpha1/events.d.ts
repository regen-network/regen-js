import * as _m0 from "protobufjs/minimal";
/** EventCreateClass is an event emitted when a credit class is created. */
export interface EventCreateClass {
    /** class_id is the unique ID of credit class. */
    classId: string;
    /** admin is the admin of the credit class. */
    admin: string;
}
/** EventCreateClass is an event emitted when a credit class is created. */
export interface EventCreateClassSDKType {
    /** class_id is the unique ID of credit class. */
    class_id: string;
    /** admin is the admin of the credit class. */
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
/** EventCreateBatch is an event emitted when a credit batch is created. */
export interface EventCreateBatchSDKType {
    /** class_id is the unique ID of credit class. */
    class_id: string;
    /** batch_denom is the unique ID of credit batch. */
    batch_denom: string;
    /** issuer is the account address of the issuer of the credit batch. */
    issuer: string;
    /** total_amount is the total number of credits in the credit batch. */
    total_amount: string;
    /**
     * start_date is the beginning of the period during which this credit batch
     * was quantified and verified.
     */
    start_date: string;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    end_date: string;
    /**
     * project_location is the location of the project backing the credits in this
     * batch. Full documentation can be found in MsgCreateBatch.project_location.
     */
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
/**
 * EventReceive is an event emitted when credits are received either via
 * creation of a new batch, transfer of credits, or taking credits from a
 * basket. Each batch_denom created, transferred or taken from a baset will
 * result in a separate EventReceive for easy indexing.
 */
export interface EventReceiveSDKType {
    /**
     * sender is the sender of the credits in the case that this event is the
     * result of a transfer. It will not be set when credits are received at
     * initial issuance or taken from a basket.
     */
    sender: string;
    /** recipient is the recipient of the credits. */
    recipient: string;
    /** batch_denom is the unique ID of credit batch. */
    batch_denom: string;
    /** tradable_amount is the decimal number of tradable credits received. */
    tradable_amount: string;
    /** retired_amount is the decimal number of retired credits received. */
    retired_amount: string;
    /**
     * basket_denom is the denom of the basket. when the basket_denom field is
     * set, it indicates that this event was triggered by the transfer of credits
     * from a basket. It will not be set if the credits were sent by a user, or by
     * initial issuance.
     */
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
/**
 * EventRetire is an event emitted when credits are retired. When credits are
 * retired from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventRetireSDKType {
    /**
     * retirer is the account which has done the "retiring". This will be the
     * account receiving credits in the case that credits were retired upon
     * issuance using Msg/CreateBatch or retired upon transfer using Msg/Send.
     */
    retirer: string;
    /** batch_denom is the unique ID of credit batch. */
    batch_denom: string;
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
/**
 * EventCancel is an event emitted when credits are cancelled. When credits are
 * cancelled from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventCancelSDKType {
    /**
     * canceller is the account which has cancelled the credits, which should be
     * the holder of the credits.
     */
    canceller: string;
    /** batch_denom is the unique ID of credit batch. */
    batch_denom: string;
    /** amount is the decimal number of credits that have been cancelled. */
    amount: string;
}
export declare const EventCreateClass: {
    encode(message: EventCreateClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateClass;
    fromJSON(object: any): EventCreateClass;
    toJSON(message: EventCreateClass): unknown;
    fromPartial(object: Partial<EventCreateClass>): EventCreateClass;
};
export declare const EventCreateBatch: {
    encode(message: EventCreateBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateBatch;
    fromJSON(object: any): EventCreateBatch;
    toJSON(message: EventCreateBatch): unknown;
    fromPartial(object: Partial<EventCreateBatch>): EventCreateBatch;
};
export declare const EventReceive: {
    encode(message: EventReceive, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventReceive;
    fromJSON(object: any): EventReceive;
    toJSON(message: EventReceive): unknown;
    fromPartial(object: Partial<EventReceive>): EventReceive;
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
