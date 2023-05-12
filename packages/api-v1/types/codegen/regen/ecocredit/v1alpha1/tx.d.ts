import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateClass {
    /** admin is the address of the account that created the credit class. */
    admin: string;
    /** issuers are the account addresses of the approved issuers. */
    issuers: string[];
    /** metadata is any arbitrary metadata to attached to the credit class. */
    metadata: Uint8Array;
    /**
     * credit_type_name describes the type of credit (e.g. "carbon",
     * "biodiversity").
     */
    creditTypeName: string;
}
/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateClassSDKType {
    /** admin is the address of the account that created the credit class. */
    admin: string;
    /** issuers are the account addresses of the approved issuers. */
    issuers: string[];
    /** metadata is any arbitrary metadata to attached to the credit class. */
    metadata: Uint8Array;
    /**
     * credit_type_name describes the type of credit (e.g. "carbon",
     * "biodiversity").
     */
    credit_type_name: string;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponse {
    /** class_id is the unique ID of the newly created credit class. */
    classId: string;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponseSDKType {
    /** class_id is the unique ID of the newly created credit class. */
    class_id: string;
}
/** MsgCreateBatch is the Msg/CreateBatch request type. */
export interface MsgCreateBatch {
    /** issuer is the address of the batch issuer. */
    issuer: string;
    /** class_id is the unique ID of the class. */
    classId: string;
    /** issuance are the credits issued in the batch. */
    issuance: MsgCreateBatch_BatchIssuance[];
    /** metadata is any arbitrary metadata attached to the credit batch. */
    metadata: Uint8Array;
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
    /**
     * project_location is the location of the project backing the credits in this
     * batch. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters. country-code is required, while sub-national-code
     * and postal-code can be added for increasing precision.
     */
    projectLocation: string;
}
/** MsgCreateBatch is the Msg/CreateBatch request type. */
export interface MsgCreateBatchSDKType {
    /** issuer is the address of the batch issuer. */
    issuer: string;
    /** class_id is the unique ID of the class. */
    class_id: string;
    /** issuance are the credits issued in the batch. */
    issuance: MsgCreateBatch_BatchIssuanceSDKType[];
    /** metadata is any arbitrary metadata attached to the credit batch. */
    metadata: Uint8Array;
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
    /**
     * project_location is the location of the project backing the credits in this
     * batch. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters. country-code is required, while sub-national-code
     * and postal-code can be added for increasing precision.
     */
    project_location: string;
}
/**
 * BatchIssuance represents the issuance of some credits in a batch to a
 * single recipient.
 */
export interface MsgCreateBatch_BatchIssuance {
    /** recipient is the account of the recipient. */
    recipient: string;
    /**
     * tradable_amount is the number of credits in this issuance that can be
     * traded by this recipient. Decimal values are acceptable.
     */
    tradableAmount: string;
    /**
     * retired_amount is the number of credits in this issuance that are
     * effectively retired by the issuer on receipt. Decimal values are
     * acceptable.
     */
    retiredAmount: string;
    /**
     * retirement_location is the location of the beneficiary or buyer of the
     * retired credits. This must be provided if retired_amount is positive. It
     * is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters.
     */
    retirementLocation: string;
}
/**
 * BatchIssuance represents the issuance of some credits in a batch to a
 * single recipient.
 */
export interface MsgCreateBatch_BatchIssuanceSDKType {
    /** recipient is the account of the recipient. */
    recipient: string;
    /**
     * tradable_amount is the number of credits in this issuance that can be
     * traded by this recipient. Decimal values are acceptable.
     */
    tradable_amount: string;
    /**
     * retired_amount is the number of credits in this issuance that are
     * effectively retired by the issuer on receipt. Decimal values are
     * acceptable.
     */
    retired_amount: string;
    /**
     * retirement_location is the location of the beneficiary or buyer of the
     * retired credits. This must be provided if retired_amount is positive. It
     * is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters.
     */
    retirement_location: string;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponse {
    /** batch_denom is the unique denomination ID of the newly created batch. */
    batchDenom: string;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponseSDKType {
    /** batch_denom is the unique denomination ID of the newly created batch. */
    batch_denom: string;
}
/** MsgSend is the Msg/Send request type. */
export interface MsgSend {
    /** sender is the address of the account sending credits. */
    sender: string;
    /** sender is the address of the account receiving credits. */
    recipient: string;
    /** credits are the credits being sent. */
    credits: MsgSend_SendCredits[];
}
/** MsgSend is the Msg/Send request type. */
export interface MsgSendSDKType {
    /** sender is the address of the account sending credits. */
    sender: string;
    /** sender is the address of the account receiving credits. */
    recipient: string;
    /** credits are the credits being sent. */
    credits: MsgSend_SendCreditsSDKType[];
}
/**
 * SendCredits specifies a batch and the number of credits being transferred.
 * This is split into tradable credits, which will remain tradable on receipt,
 * and retired credits, which will be retired on receipt.
 */
export interface MsgSend_SendCredits {
    /** batch_denom is the unique ID of the credit batch. */
    batchDenom: string;
    /**
     * tradable_amount is the number of credits in this transfer that can be
     * traded by the recipient. Decimal values are acceptable within the
     * precision returned by Query/Precision.
     */
    tradableAmount: string;
    /**
     * retired_amount is the number of credits in this transfer that are
     * effectively retired by the issuer on receipt. Decimal values are
     * acceptable within the precision returned by Query/Precision.
     */
    retiredAmount: string;
    /**
     * retirement_location is the location of the beneficiary or buyer of the
     * retired credits. This must be provided if retired_amount is positive. It
     * is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters.
     */
    retirementLocation: string;
}
/**
 * SendCredits specifies a batch and the number of credits being transferred.
 * This is split into tradable credits, which will remain tradable on receipt,
 * and retired credits, which will be retired on receipt.
 */
export interface MsgSend_SendCreditsSDKType {
    /** batch_denom is the unique ID of the credit batch. */
    batch_denom: string;
    /**
     * tradable_amount is the number of credits in this transfer that can be
     * traded by the recipient. Decimal values are acceptable within the
     * precision returned by Query/Precision.
     */
    tradable_amount: string;
    /**
     * retired_amount is the number of credits in this transfer that are
     * effectively retired by the issuer on receipt. Decimal values are
     * acceptable within the precision returned by Query/Precision.
     */
    retired_amount: string;
    /**
     * retirement_location is the location of the beneficiary or buyer of the
     * retired credits. This must be provided if retired_amount is positive. It
     * is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters.
     */
    retirement_location: string;
}
/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponse {
}
/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponseSDKType {
}
/** MsgRetire is the Msg/Retire request type. */
export interface MsgRetire {
    /** holder is the credit holder address. */
    holder: string;
    /** credits are the credits being retired. */
    credits: MsgRetire_RetireCredits[];
    /**
     * location is the location of the beneficiary or buyer of the retired
     * credits. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters.
     */
    location: string;
}
/** MsgRetire is the Msg/Retire request type. */
export interface MsgRetireSDKType {
    /** holder is the credit holder address. */
    holder: string;
    /** credits are the credits being retired. */
    credits: MsgRetire_RetireCreditsSDKType[];
    /**
     * location is the location of the beneficiary or buyer of the retired
     * credits. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters.
     */
    location: string;
}
/** RetireCredits specifies a batch and the number of credits being retired. */
export interface MsgRetire_RetireCredits {
    /** batch_denom is the unique ID of the credit batch. */
    batchDenom: string;
    /**
     * amount is the number of credits being retired.
     * Decimal values are acceptable within the precision returned by
     * Query/Precision.
     */
    amount: string;
}
/** RetireCredits specifies a batch and the number of credits being retired. */
export interface MsgRetire_RetireCreditsSDKType {
    /** batch_denom is the unique ID of the credit batch. */
    batch_denom: string;
    /**
     * amount is the number of credits being retired.
     * Decimal values are acceptable within the precision returned by
     * Query/Precision.
     */
    amount: string;
}
/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponse {
}
/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponseSDKType {
}
/** MsgCancel is the Msg/Cancel request type. */
export interface MsgCancel {
    /** holder is the credit holder address. */
    holder: string;
    /** credits are the credits being cancelled. */
    credits: MsgCancel_CancelCredits[];
}
/** MsgCancel is the Msg/Cancel request type. */
export interface MsgCancelSDKType {
    /** holder is the credit holder address. */
    holder: string;
    /** credits are the credits being cancelled. */
    credits: MsgCancel_CancelCreditsSDKType[];
}
/** CancelCredits specifies a batch and the number of credits being cancelled. */
export interface MsgCancel_CancelCredits {
    /** batch_denom is the unique ID of the credit batch. */
    batchDenom: string;
    /**
     * amount is the number of credits being cancelled.
     * Decimal values are acceptable within the precision returned by
     * Query/Precision.
     */
    amount: string;
}
/** CancelCredits specifies a batch and the number of credits being cancelled. */
export interface MsgCancel_CancelCreditsSDKType {
    /** batch_denom is the unique ID of the credit batch. */
    batch_denom: string;
    /**
     * amount is the number of credits being cancelled.
     * Decimal values are acceptable within the precision returned by
     * Query/Precision.
     */
    amount: string;
}
/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponse {
}
/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponseSDKType {
}
/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */
export interface MsgUpdateClassAdmin {
    /** admin is the address of the account that is the admin of the credit class. */
    admin: string;
    /** class_id is the unique ID of the credit class. */
    classId: string;
    /** new_admin is the address of the new admin of the credit class. */
    newAdmin: string;
}
/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */
export interface MsgUpdateClassAdminSDKType {
    /** admin is the address of the account that is the admin of the credit class. */
    admin: string;
    /** class_id is the unique ID of the credit class. */
    class_id: string;
    /** new_admin is the address of the new admin of the credit class. */
    new_admin: string;
}
/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */
export interface MsgUpdateClassAdminResponse {
}
/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */
export interface MsgUpdateClassAdminResponseSDKType {
}
/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */
export interface MsgUpdateClassIssuers {
    /** admin is the address of the account that is the admin of the credit class. */
    admin: string;
    /** class_id is the unique ID of the credit class. */
    classId: string;
    /** issuers are the updated account addresses of the approved issuers. */
    issuers: string[];
}
/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */
export interface MsgUpdateClassIssuersSDKType {
    /** admin is the address of the account that is the admin of the credit class. */
    admin: string;
    /** class_id is the unique ID of the credit class. */
    class_id: string;
    /** issuers are the updated account addresses of the approved issuers. */
    issuers: string[];
}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */
export interface MsgUpdateClassIssuersResponse {
}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */
export interface MsgUpdateClassIssuersResponseSDKType {
}
/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */
export interface MsgUpdateClassMetadata {
    /** admin is the address of the account that is the admin of the credit class. */
    admin: string;
    /** class_id is the unique ID of the credit class. */
    classId: string;
    /**
     * metadata is the updated arbitrary metadata to be attached to the credit
     * class.
     */
    metadata: Uint8Array;
}
/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */
export interface MsgUpdateClassMetadataSDKType {
    /** admin is the address of the account that is the admin of the credit class. */
    admin: string;
    /** class_id is the unique ID of the credit class. */
    class_id: string;
    /**
     * metadata is the updated arbitrary metadata to be attached to the credit
     * class.
     */
    metadata: Uint8Array;
}
/** MsgUpdateClassMetadataResponse is the MsgUpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponse {
}
/** MsgUpdateClassMetadataResponse is the MsgUpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponseSDKType {
}
export declare const MsgCreateClass: {
    encode(message: MsgCreateClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClass;
    fromJSON(object: any): MsgCreateClass;
    toJSON(message: MsgCreateClass): unknown;
    fromPartial(object: Partial<MsgCreateClass>): MsgCreateClass;
};
export declare const MsgCreateClassResponse: {
    encode(message: MsgCreateClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClassResponse;
    fromJSON(object: any): MsgCreateClassResponse;
    toJSON(message: MsgCreateClassResponse): unknown;
    fromPartial(object: Partial<MsgCreateClassResponse>): MsgCreateClassResponse;
};
export declare const MsgCreateBatch: {
    encode(message: MsgCreateBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatch;
    fromJSON(object: any): MsgCreateBatch;
    toJSON(message: MsgCreateBatch): unknown;
    fromPartial(object: Partial<MsgCreateBatch>): MsgCreateBatch;
};
export declare const MsgCreateBatch_BatchIssuance: {
    encode(message: MsgCreateBatch_BatchIssuance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatch_BatchIssuance;
    fromJSON(object: any): MsgCreateBatch_BatchIssuance;
    toJSON(message: MsgCreateBatch_BatchIssuance): unknown;
    fromPartial(object: Partial<MsgCreateBatch_BatchIssuance>): MsgCreateBatch_BatchIssuance;
};
export declare const MsgCreateBatchResponse: {
    encode(message: MsgCreateBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatchResponse;
    fromJSON(object: any): MsgCreateBatchResponse;
    toJSON(message: MsgCreateBatchResponse): unknown;
    fromPartial(object: Partial<MsgCreateBatchResponse>): MsgCreateBatchResponse;
};
export declare const MsgSend: {
    encode(message: MsgSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend;
    fromJSON(object: any): MsgSend;
    toJSON(message: MsgSend): unknown;
    fromPartial(object: Partial<MsgSend>): MsgSend;
};
export declare const MsgSend_SendCredits: {
    encode(message: MsgSend_SendCredits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend_SendCredits;
    fromJSON(object: any): MsgSend_SendCredits;
    toJSON(message: MsgSend_SendCredits): unknown;
    fromPartial(object: Partial<MsgSend_SendCredits>): MsgSend_SendCredits;
};
export declare const MsgSendResponse: {
    encode(_: MsgSendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse;
    fromJSON(_: any): MsgSendResponse;
    toJSON(_: MsgSendResponse): unknown;
    fromPartial(_: Partial<MsgSendResponse>): MsgSendResponse;
};
export declare const MsgRetire: {
    encode(message: MsgRetire, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetire;
    fromJSON(object: any): MsgRetire;
    toJSON(message: MsgRetire): unknown;
    fromPartial(object: Partial<MsgRetire>): MsgRetire;
};
export declare const MsgRetire_RetireCredits: {
    encode(message: MsgRetire_RetireCredits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetire_RetireCredits;
    fromJSON(object: any): MsgRetire_RetireCredits;
    toJSON(message: MsgRetire_RetireCredits): unknown;
    fromPartial(object: Partial<MsgRetire_RetireCredits>): MsgRetire_RetireCredits;
};
export declare const MsgRetireResponse: {
    encode(_: MsgRetireResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetireResponse;
    fromJSON(_: any): MsgRetireResponse;
    toJSON(_: MsgRetireResponse): unknown;
    fromPartial(_: Partial<MsgRetireResponse>): MsgRetireResponse;
};
export declare const MsgCancel: {
    encode(message: MsgCancel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancel;
    fromJSON(object: any): MsgCancel;
    toJSON(message: MsgCancel): unknown;
    fromPartial(object: Partial<MsgCancel>): MsgCancel;
};
export declare const MsgCancel_CancelCredits: {
    encode(message: MsgCancel_CancelCredits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancel_CancelCredits;
    fromJSON(object: any): MsgCancel_CancelCredits;
    toJSON(message: MsgCancel_CancelCredits): unknown;
    fromPartial(object: Partial<MsgCancel_CancelCredits>): MsgCancel_CancelCredits;
};
export declare const MsgCancelResponse: {
    encode(_: MsgCancelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelResponse;
    fromJSON(_: any): MsgCancelResponse;
    toJSON(_: MsgCancelResponse): unknown;
    fromPartial(_: Partial<MsgCancelResponse>): MsgCancelResponse;
};
export declare const MsgUpdateClassAdmin: {
    encode(message: MsgUpdateClassAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassAdmin;
    fromJSON(object: any): MsgUpdateClassAdmin;
    toJSON(message: MsgUpdateClassAdmin): unknown;
    fromPartial(object: Partial<MsgUpdateClassAdmin>): MsgUpdateClassAdmin;
};
export declare const MsgUpdateClassAdminResponse: {
    encode(_: MsgUpdateClassAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassAdminResponse;
    fromJSON(_: any): MsgUpdateClassAdminResponse;
    toJSON(_: MsgUpdateClassAdminResponse): unknown;
    fromPartial(_: Partial<MsgUpdateClassAdminResponse>): MsgUpdateClassAdminResponse;
};
export declare const MsgUpdateClassIssuers: {
    encode(message: MsgUpdateClassIssuers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassIssuers;
    fromJSON(object: any): MsgUpdateClassIssuers;
    toJSON(message: MsgUpdateClassIssuers): unknown;
    fromPartial(object: Partial<MsgUpdateClassIssuers>): MsgUpdateClassIssuers;
};
export declare const MsgUpdateClassIssuersResponse: {
    encode(_: MsgUpdateClassIssuersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassIssuersResponse;
    fromJSON(_: any): MsgUpdateClassIssuersResponse;
    toJSON(_: MsgUpdateClassIssuersResponse): unknown;
    fromPartial(_: Partial<MsgUpdateClassIssuersResponse>): MsgUpdateClassIssuersResponse;
};
export declare const MsgUpdateClassMetadata: {
    encode(message: MsgUpdateClassMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassMetadata;
    fromJSON(object: any): MsgUpdateClassMetadata;
    toJSON(message: MsgUpdateClassMetadata): unknown;
    fromPartial(object: Partial<MsgUpdateClassMetadata>): MsgUpdateClassMetadata;
};
export declare const MsgUpdateClassMetadataResponse: {
    encode(_: MsgUpdateClassMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassMetadataResponse;
    fromJSON(_: any): MsgUpdateClassMetadataResponse;
    toJSON(_: MsgUpdateClassMetadataResponse): unknown;
    fromPartial(_: Partial<MsgUpdateClassMetadataResponse>): MsgUpdateClassMetadataResponse;
};
