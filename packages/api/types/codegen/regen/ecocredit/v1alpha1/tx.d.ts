import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
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
export interface MsgCreateClassProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateClass";
    value: Uint8Array;
}
/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateClassAmino {
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
export interface MsgCreateClassAminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgCreateClass";
    value: MsgCreateClassAmino;
}
/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateClassSDKType {
    admin: string;
    issuers: string[];
    metadata: Uint8Array;
    credit_type_name: string;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponse {
    /** class_id is the unique ID of the newly created credit class. */
    classId: string;
}
export interface MsgCreateClassResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateClassResponse";
    value: Uint8Array;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponseAmino {
    /** class_id is the unique ID of the newly created credit class. */
    class_id: string;
}
export interface MsgCreateClassResponseAminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgCreateClassResponse";
    value: MsgCreateClassResponseAmino;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponseSDKType {
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
export interface MsgCreateBatchProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatch";
    value: Uint8Array;
}
/** MsgCreateBatch is the Msg/CreateBatch request type. */
export interface MsgCreateBatchAmino {
    /** issuer is the address of the batch issuer. */
    issuer: string;
    /** class_id is the unique ID of the class. */
    class_id: string;
    /** issuance are the credits issued in the batch. */
    issuance: MsgCreateBatch_BatchIssuanceAmino[];
    /** metadata is any arbitrary metadata attached to the credit batch. */
    metadata: Uint8Array;
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
     * batch. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters. country-code is required, while sub-national-code
     * and postal-code can be added for increasing precision.
     */
    project_location: string;
}
export interface MsgCreateBatchAminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgCreateBatch";
    value: MsgCreateBatchAmino;
}
/** MsgCreateBatch is the Msg/CreateBatch request type. */
export interface MsgCreateBatchSDKType {
    issuer: string;
    class_id: string;
    issuance: MsgCreateBatch_BatchIssuanceSDKType[];
    metadata: Uint8Array;
    start_date?: TimestampSDKType;
    end_date?: TimestampSDKType;
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
export interface MsgCreateBatch_BatchIssuanceProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.BatchIssuance";
    value: Uint8Array;
}
/**
 * BatchIssuance represents the issuance of some credits in a batch to a
 * single recipient.
 */
export interface MsgCreateBatch_BatchIssuanceAmino {
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
export interface MsgCreateBatch_BatchIssuanceAminoMsg {
    type: "/regen.ecocredit.v1alpha1.BatchIssuance";
    value: MsgCreateBatch_BatchIssuanceAmino;
}
/**
 * BatchIssuance represents the issuance of some credits in a batch to a
 * single recipient.
 */
export interface MsgCreateBatch_BatchIssuanceSDKType {
    recipient: string;
    tradable_amount: string;
    retired_amount: string;
    retirement_location: string;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponse {
    /** batch_denom is the unique denomination ID of the newly created batch. */
    batchDenom: string;
}
export interface MsgCreateBatchResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgCreateBatchResponse";
    value: Uint8Array;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponseAmino {
    /** batch_denom is the unique denomination ID of the newly created batch. */
    batch_denom: string;
}
export interface MsgCreateBatchResponseAminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgCreateBatchResponse";
    value: MsgCreateBatchResponseAmino;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponseSDKType {
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
export interface MsgSendProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgSend";
    value: Uint8Array;
}
/** MsgSend is the Msg/Send request type. */
export interface MsgSendAmino {
    /** sender is the address of the account sending credits. */
    sender: string;
    /** sender is the address of the account receiving credits. */
    recipient: string;
    /** credits are the credits being sent. */
    credits: MsgSend_SendCreditsAmino[];
}
export interface MsgSendAminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgSend";
    value: MsgSendAmino;
}
/** MsgSend is the Msg/Send request type. */
export interface MsgSendSDKType {
    sender: string;
    recipient: string;
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
export interface MsgSend_SendCreditsProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.SendCredits";
    value: Uint8Array;
}
/**
 * SendCredits specifies a batch and the number of credits being transferred.
 * This is split into tradable credits, which will remain tradable on receipt,
 * and retired credits, which will be retired on receipt.
 */
export interface MsgSend_SendCreditsAmino {
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
export interface MsgSend_SendCreditsAminoMsg {
    type: "/regen.ecocredit.v1alpha1.SendCredits";
    value: MsgSend_SendCreditsAmino;
}
/**
 * SendCredits specifies a batch and the number of credits being transferred.
 * This is split into tradable credits, which will remain tradable on receipt,
 * and retired credits, which will be retired on receipt.
 */
export interface MsgSend_SendCreditsSDKType {
    batch_denom: string;
    tradable_amount: string;
    retired_amount: string;
    retirement_location: string;
}
/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponse {
}
export interface MsgSendResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgSendResponse";
    value: Uint8Array;
}
/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponseAmino {
}
export interface MsgSendResponseAminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgSendResponse";
    value: MsgSendResponseAmino;
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
export interface MsgRetireProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgRetire";
    value: Uint8Array;
}
/** MsgRetire is the Msg/Retire request type. */
export interface MsgRetireAmino {
    /** holder is the credit holder address. */
    holder: string;
    /** credits are the credits being retired. */
    credits: MsgRetire_RetireCreditsAmino[];
    /**
     * location is the location of the beneficiary or buyer of the retired
     * credits. It is a string of the form
     * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
     * fields conforming to ISO 3166-2, and postal-code being up to 64
     * alphanumeric characters.
     */
    location: string;
}
export interface MsgRetireAminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgRetire";
    value: MsgRetireAmino;
}
/** MsgRetire is the Msg/Retire request type. */
export interface MsgRetireSDKType {
    holder: string;
    credits: MsgRetire_RetireCreditsSDKType[];
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
export interface MsgRetire_RetireCreditsProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.RetireCredits";
    value: Uint8Array;
}
/** RetireCredits specifies a batch and the number of credits being retired. */
export interface MsgRetire_RetireCreditsAmino {
    /** batch_denom is the unique ID of the credit batch. */
    batch_denom: string;
    /**
     * amount is the number of credits being retired.
     * Decimal values are acceptable within the precision returned by
     * Query/Precision.
     */
    amount: string;
}
export interface MsgRetire_RetireCreditsAminoMsg {
    type: "/regen.ecocredit.v1alpha1.RetireCredits";
    value: MsgRetire_RetireCreditsAmino;
}
/** RetireCredits specifies a batch and the number of credits being retired. */
export interface MsgRetire_RetireCreditsSDKType {
    batch_denom: string;
    amount: string;
}
/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponse {
}
export interface MsgRetireResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgRetireResponse";
    value: Uint8Array;
}
/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponseAmino {
}
export interface MsgRetireResponseAminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgRetireResponse";
    value: MsgRetireResponseAmino;
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
export interface MsgCancelProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgCancel";
    value: Uint8Array;
}
/** MsgCancel is the Msg/Cancel request type. */
export interface MsgCancelAmino {
    /** holder is the credit holder address. */
    holder: string;
    /** credits are the credits being cancelled. */
    credits: MsgCancel_CancelCreditsAmino[];
}
export interface MsgCancelAminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgCancel";
    value: MsgCancelAmino;
}
/** MsgCancel is the Msg/Cancel request type. */
export interface MsgCancelSDKType {
    holder: string;
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
export interface MsgCancel_CancelCreditsProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.CancelCredits";
    value: Uint8Array;
}
/** CancelCredits specifies a batch and the number of credits being cancelled. */
export interface MsgCancel_CancelCreditsAmino {
    /** batch_denom is the unique ID of the credit batch. */
    batch_denom: string;
    /**
     * amount is the number of credits being cancelled.
     * Decimal values are acceptable within the precision returned by
     * Query/Precision.
     */
    amount: string;
}
export interface MsgCancel_CancelCreditsAminoMsg {
    type: "/regen.ecocredit.v1alpha1.CancelCredits";
    value: MsgCancel_CancelCreditsAmino;
}
/** CancelCredits specifies a batch and the number of credits being cancelled. */
export interface MsgCancel_CancelCreditsSDKType {
    batch_denom: string;
    amount: string;
}
/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponse {
}
export interface MsgCancelResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgCancelResponse";
    value: Uint8Array;
}
/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponseAmino {
}
export interface MsgCancelResponseAminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgCancelResponse";
    value: MsgCancelResponseAmino;
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
export interface MsgUpdateClassAdminProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin";
    value: Uint8Array;
}
/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */
export interface MsgUpdateClassAdminAmino {
    /** admin is the address of the account that is the admin of the credit class. */
    admin: string;
    /** class_id is the unique ID of the credit class. */
    class_id: string;
    /** new_admin is the address of the new admin of the credit class. */
    new_admin: string;
}
export interface MsgUpdateClassAdminAminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin";
    value: MsgUpdateClassAdminAmino;
}
/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */
export interface MsgUpdateClassAdminSDKType {
    admin: string;
    class_id: string;
    new_admin: string;
}
/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */
export interface MsgUpdateClassAdminResponse {
}
export interface MsgUpdateClassAdminResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdminResponse";
    value: Uint8Array;
}
/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */
export interface MsgUpdateClassAdminResponseAmino {
}
export interface MsgUpdateClassAdminResponseAminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdminResponse";
    value: MsgUpdateClassAdminResponseAmino;
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
export interface MsgUpdateClassIssuersProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers";
    value: Uint8Array;
}
/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */
export interface MsgUpdateClassIssuersAmino {
    /** admin is the address of the account that is the admin of the credit class. */
    admin: string;
    /** class_id is the unique ID of the credit class. */
    class_id: string;
    /** issuers are the updated account addresses of the approved issuers. */
    issuers: string[];
}
export interface MsgUpdateClassIssuersAminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers";
    value: MsgUpdateClassIssuersAmino;
}
/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */
export interface MsgUpdateClassIssuersSDKType {
    admin: string;
    class_id: string;
    issuers: string[];
}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */
export interface MsgUpdateClassIssuersResponse {
}
export interface MsgUpdateClassIssuersResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuersResponse";
    value: Uint8Array;
}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */
export interface MsgUpdateClassIssuersResponseAmino {
}
export interface MsgUpdateClassIssuersResponseAminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuersResponse";
    value: MsgUpdateClassIssuersResponseAmino;
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
export interface MsgUpdateClassMetadataProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata";
    value: Uint8Array;
}
/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */
export interface MsgUpdateClassMetadataAmino {
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
export interface MsgUpdateClassMetadataAminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata";
    value: MsgUpdateClassMetadataAmino;
}
/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */
export interface MsgUpdateClassMetadataSDKType {
    admin: string;
    class_id: string;
    metadata: Uint8Array;
}
/** MsgUpdateClassMetadataResponse is the MsgUpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponse {
}
export interface MsgUpdateClassMetadataResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadataResponse";
    value: Uint8Array;
}
/** MsgUpdateClassMetadataResponse is the MsgUpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponseAmino {
}
export interface MsgUpdateClassMetadataResponseAminoMsg {
    type: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadataResponse";
    value: MsgUpdateClassMetadataResponseAmino;
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
    fromAmino(object: MsgCreateClassAmino): MsgCreateClass;
    toAmino(message: MsgCreateClass): MsgCreateClassAmino;
    fromAminoMsg(object: MsgCreateClassAminoMsg): MsgCreateClass;
    fromProtoMsg(message: MsgCreateClassProtoMsg): MsgCreateClass;
    toProto(message: MsgCreateClass): Uint8Array;
    toProtoMsg(message: MsgCreateClass): MsgCreateClassProtoMsg;
};
export declare const MsgCreateClassResponse: {
    encode(message: MsgCreateClassResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClassResponse;
    fromJSON(object: any): MsgCreateClassResponse;
    toJSON(message: MsgCreateClassResponse): unknown;
    fromPartial(object: Partial<MsgCreateClassResponse>): MsgCreateClassResponse;
    fromAmino(object: MsgCreateClassResponseAmino): MsgCreateClassResponse;
    toAmino(message: MsgCreateClassResponse): MsgCreateClassResponseAmino;
    fromAminoMsg(object: MsgCreateClassResponseAminoMsg): MsgCreateClassResponse;
    fromProtoMsg(message: MsgCreateClassResponseProtoMsg): MsgCreateClassResponse;
    toProto(message: MsgCreateClassResponse): Uint8Array;
    toProtoMsg(message: MsgCreateClassResponse): MsgCreateClassResponseProtoMsg;
};
export declare const MsgCreateBatch: {
    encode(message: MsgCreateBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatch;
    fromJSON(object: any): MsgCreateBatch;
    toJSON(message: MsgCreateBatch): unknown;
    fromPartial(object: Partial<MsgCreateBatch>): MsgCreateBatch;
    fromAmino(object: MsgCreateBatchAmino): MsgCreateBatch;
    toAmino(message: MsgCreateBatch): MsgCreateBatchAmino;
    fromAminoMsg(object: MsgCreateBatchAminoMsg): MsgCreateBatch;
    fromProtoMsg(message: MsgCreateBatchProtoMsg): MsgCreateBatch;
    toProto(message: MsgCreateBatch): Uint8Array;
    toProtoMsg(message: MsgCreateBatch): MsgCreateBatchProtoMsg;
};
export declare const MsgCreateBatch_BatchIssuance: {
    encode(message: MsgCreateBatch_BatchIssuance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatch_BatchIssuance;
    fromJSON(object: any): MsgCreateBatch_BatchIssuance;
    toJSON(message: MsgCreateBatch_BatchIssuance): unknown;
    fromPartial(object: Partial<MsgCreateBatch_BatchIssuance>): MsgCreateBatch_BatchIssuance;
    fromAmino(object: MsgCreateBatch_BatchIssuanceAmino): MsgCreateBatch_BatchIssuance;
    toAmino(message: MsgCreateBatch_BatchIssuance): MsgCreateBatch_BatchIssuanceAmino;
    fromAminoMsg(object: MsgCreateBatch_BatchIssuanceAminoMsg): MsgCreateBatch_BatchIssuance;
    fromProtoMsg(message: MsgCreateBatch_BatchIssuanceProtoMsg): MsgCreateBatch_BatchIssuance;
    toProto(message: MsgCreateBatch_BatchIssuance): Uint8Array;
    toProtoMsg(message: MsgCreateBatch_BatchIssuance): MsgCreateBatch_BatchIssuanceProtoMsg;
};
export declare const MsgCreateBatchResponse: {
    encode(message: MsgCreateBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatchResponse;
    fromJSON(object: any): MsgCreateBatchResponse;
    toJSON(message: MsgCreateBatchResponse): unknown;
    fromPartial(object: Partial<MsgCreateBatchResponse>): MsgCreateBatchResponse;
    fromAmino(object: MsgCreateBatchResponseAmino): MsgCreateBatchResponse;
    toAmino(message: MsgCreateBatchResponse): MsgCreateBatchResponseAmino;
    fromAminoMsg(object: MsgCreateBatchResponseAminoMsg): MsgCreateBatchResponse;
    fromProtoMsg(message: MsgCreateBatchResponseProtoMsg): MsgCreateBatchResponse;
    toProto(message: MsgCreateBatchResponse): Uint8Array;
    toProtoMsg(message: MsgCreateBatchResponse): MsgCreateBatchResponseProtoMsg;
};
export declare const MsgSend: {
    encode(message: MsgSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend;
    fromJSON(object: any): MsgSend;
    toJSON(message: MsgSend): unknown;
    fromPartial(object: Partial<MsgSend>): MsgSend;
    fromAmino(object: MsgSendAmino): MsgSend;
    toAmino(message: MsgSend): MsgSendAmino;
    fromAminoMsg(object: MsgSendAminoMsg): MsgSend;
    fromProtoMsg(message: MsgSendProtoMsg): MsgSend;
    toProto(message: MsgSend): Uint8Array;
    toProtoMsg(message: MsgSend): MsgSendProtoMsg;
};
export declare const MsgSend_SendCredits: {
    encode(message: MsgSend_SendCredits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend_SendCredits;
    fromJSON(object: any): MsgSend_SendCredits;
    toJSON(message: MsgSend_SendCredits): unknown;
    fromPartial(object: Partial<MsgSend_SendCredits>): MsgSend_SendCredits;
    fromAmino(object: MsgSend_SendCreditsAmino): MsgSend_SendCredits;
    toAmino(message: MsgSend_SendCredits): MsgSend_SendCreditsAmino;
    fromAminoMsg(object: MsgSend_SendCreditsAminoMsg): MsgSend_SendCredits;
    fromProtoMsg(message: MsgSend_SendCreditsProtoMsg): MsgSend_SendCredits;
    toProto(message: MsgSend_SendCredits): Uint8Array;
    toProtoMsg(message: MsgSend_SendCredits): MsgSend_SendCreditsProtoMsg;
};
export declare const MsgSendResponse: {
    encode(_: MsgSendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse;
    fromJSON(_: any): MsgSendResponse;
    toJSON(_: MsgSendResponse): unknown;
    fromPartial(_: Partial<MsgSendResponse>): MsgSendResponse;
    fromAmino(_: MsgSendResponseAmino): MsgSendResponse;
    toAmino(_: MsgSendResponse): MsgSendResponseAmino;
    fromAminoMsg(object: MsgSendResponseAminoMsg): MsgSendResponse;
    fromProtoMsg(message: MsgSendResponseProtoMsg): MsgSendResponse;
    toProto(message: MsgSendResponse): Uint8Array;
    toProtoMsg(message: MsgSendResponse): MsgSendResponseProtoMsg;
};
export declare const MsgRetire: {
    encode(message: MsgRetire, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetire;
    fromJSON(object: any): MsgRetire;
    toJSON(message: MsgRetire): unknown;
    fromPartial(object: Partial<MsgRetire>): MsgRetire;
    fromAmino(object: MsgRetireAmino): MsgRetire;
    toAmino(message: MsgRetire): MsgRetireAmino;
    fromAminoMsg(object: MsgRetireAminoMsg): MsgRetire;
    fromProtoMsg(message: MsgRetireProtoMsg): MsgRetire;
    toProto(message: MsgRetire): Uint8Array;
    toProtoMsg(message: MsgRetire): MsgRetireProtoMsg;
};
export declare const MsgRetire_RetireCredits: {
    encode(message: MsgRetire_RetireCredits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetire_RetireCredits;
    fromJSON(object: any): MsgRetire_RetireCredits;
    toJSON(message: MsgRetire_RetireCredits): unknown;
    fromPartial(object: Partial<MsgRetire_RetireCredits>): MsgRetire_RetireCredits;
    fromAmino(object: MsgRetire_RetireCreditsAmino): MsgRetire_RetireCredits;
    toAmino(message: MsgRetire_RetireCredits): MsgRetire_RetireCreditsAmino;
    fromAminoMsg(object: MsgRetire_RetireCreditsAminoMsg): MsgRetire_RetireCredits;
    fromProtoMsg(message: MsgRetire_RetireCreditsProtoMsg): MsgRetire_RetireCredits;
    toProto(message: MsgRetire_RetireCredits): Uint8Array;
    toProtoMsg(message: MsgRetire_RetireCredits): MsgRetire_RetireCreditsProtoMsg;
};
export declare const MsgRetireResponse: {
    encode(_: MsgRetireResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetireResponse;
    fromJSON(_: any): MsgRetireResponse;
    toJSON(_: MsgRetireResponse): unknown;
    fromPartial(_: Partial<MsgRetireResponse>): MsgRetireResponse;
    fromAmino(_: MsgRetireResponseAmino): MsgRetireResponse;
    toAmino(_: MsgRetireResponse): MsgRetireResponseAmino;
    fromAminoMsg(object: MsgRetireResponseAminoMsg): MsgRetireResponse;
    fromProtoMsg(message: MsgRetireResponseProtoMsg): MsgRetireResponse;
    toProto(message: MsgRetireResponse): Uint8Array;
    toProtoMsg(message: MsgRetireResponse): MsgRetireResponseProtoMsg;
};
export declare const MsgCancel: {
    encode(message: MsgCancel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancel;
    fromJSON(object: any): MsgCancel;
    toJSON(message: MsgCancel): unknown;
    fromPartial(object: Partial<MsgCancel>): MsgCancel;
    fromAmino(object: MsgCancelAmino): MsgCancel;
    toAmino(message: MsgCancel): MsgCancelAmino;
    fromAminoMsg(object: MsgCancelAminoMsg): MsgCancel;
    fromProtoMsg(message: MsgCancelProtoMsg): MsgCancel;
    toProto(message: MsgCancel): Uint8Array;
    toProtoMsg(message: MsgCancel): MsgCancelProtoMsg;
};
export declare const MsgCancel_CancelCredits: {
    encode(message: MsgCancel_CancelCredits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancel_CancelCredits;
    fromJSON(object: any): MsgCancel_CancelCredits;
    toJSON(message: MsgCancel_CancelCredits): unknown;
    fromPartial(object: Partial<MsgCancel_CancelCredits>): MsgCancel_CancelCredits;
    fromAmino(object: MsgCancel_CancelCreditsAmino): MsgCancel_CancelCredits;
    toAmino(message: MsgCancel_CancelCredits): MsgCancel_CancelCreditsAmino;
    fromAminoMsg(object: MsgCancel_CancelCreditsAminoMsg): MsgCancel_CancelCredits;
    fromProtoMsg(message: MsgCancel_CancelCreditsProtoMsg): MsgCancel_CancelCredits;
    toProto(message: MsgCancel_CancelCredits): Uint8Array;
    toProtoMsg(message: MsgCancel_CancelCredits): MsgCancel_CancelCreditsProtoMsg;
};
export declare const MsgCancelResponse: {
    encode(_: MsgCancelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelResponse;
    fromJSON(_: any): MsgCancelResponse;
    toJSON(_: MsgCancelResponse): unknown;
    fromPartial(_: Partial<MsgCancelResponse>): MsgCancelResponse;
    fromAmino(_: MsgCancelResponseAmino): MsgCancelResponse;
    toAmino(_: MsgCancelResponse): MsgCancelResponseAmino;
    fromAminoMsg(object: MsgCancelResponseAminoMsg): MsgCancelResponse;
    fromProtoMsg(message: MsgCancelResponseProtoMsg): MsgCancelResponse;
    toProto(message: MsgCancelResponse): Uint8Array;
    toProtoMsg(message: MsgCancelResponse): MsgCancelResponseProtoMsg;
};
export declare const MsgUpdateClassAdmin: {
    encode(message: MsgUpdateClassAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassAdmin;
    fromJSON(object: any): MsgUpdateClassAdmin;
    toJSON(message: MsgUpdateClassAdmin): unknown;
    fromPartial(object: Partial<MsgUpdateClassAdmin>): MsgUpdateClassAdmin;
    fromAmino(object: MsgUpdateClassAdminAmino): MsgUpdateClassAdmin;
    toAmino(message: MsgUpdateClassAdmin): MsgUpdateClassAdminAmino;
    fromAminoMsg(object: MsgUpdateClassAdminAminoMsg): MsgUpdateClassAdmin;
    fromProtoMsg(message: MsgUpdateClassAdminProtoMsg): MsgUpdateClassAdmin;
    toProto(message: MsgUpdateClassAdmin): Uint8Array;
    toProtoMsg(message: MsgUpdateClassAdmin): MsgUpdateClassAdminProtoMsg;
};
export declare const MsgUpdateClassAdminResponse: {
    encode(_: MsgUpdateClassAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassAdminResponse;
    fromJSON(_: any): MsgUpdateClassAdminResponse;
    toJSON(_: MsgUpdateClassAdminResponse): unknown;
    fromPartial(_: Partial<MsgUpdateClassAdminResponse>): MsgUpdateClassAdminResponse;
    fromAmino(_: MsgUpdateClassAdminResponseAmino): MsgUpdateClassAdminResponse;
    toAmino(_: MsgUpdateClassAdminResponse): MsgUpdateClassAdminResponseAmino;
    fromAminoMsg(object: MsgUpdateClassAdminResponseAminoMsg): MsgUpdateClassAdminResponse;
    fromProtoMsg(message: MsgUpdateClassAdminResponseProtoMsg): MsgUpdateClassAdminResponse;
    toProto(message: MsgUpdateClassAdminResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateClassAdminResponse): MsgUpdateClassAdminResponseProtoMsg;
};
export declare const MsgUpdateClassIssuers: {
    encode(message: MsgUpdateClassIssuers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassIssuers;
    fromJSON(object: any): MsgUpdateClassIssuers;
    toJSON(message: MsgUpdateClassIssuers): unknown;
    fromPartial(object: Partial<MsgUpdateClassIssuers>): MsgUpdateClassIssuers;
    fromAmino(object: MsgUpdateClassIssuersAmino): MsgUpdateClassIssuers;
    toAmino(message: MsgUpdateClassIssuers): MsgUpdateClassIssuersAmino;
    fromAminoMsg(object: MsgUpdateClassIssuersAminoMsg): MsgUpdateClassIssuers;
    fromProtoMsg(message: MsgUpdateClassIssuersProtoMsg): MsgUpdateClassIssuers;
    toProto(message: MsgUpdateClassIssuers): Uint8Array;
    toProtoMsg(message: MsgUpdateClassIssuers): MsgUpdateClassIssuersProtoMsg;
};
export declare const MsgUpdateClassIssuersResponse: {
    encode(_: MsgUpdateClassIssuersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassIssuersResponse;
    fromJSON(_: any): MsgUpdateClassIssuersResponse;
    toJSON(_: MsgUpdateClassIssuersResponse): unknown;
    fromPartial(_: Partial<MsgUpdateClassIssuersResponse>): MsgUpdateClassIssuersResponse;
    fromAmino(_: MsgUpdateClassIssuersResponseAmino): MsgUpdateClassIssuersResponse;
    toAmino(_: MsgUpdateClassIssuersResponse): MsgUpdateClassIssuersResponseAmino;
    fromAminoMsg(object: MsgUpdateClassIssuersResponseAminoMsg): MsgUpdateClassIssuersResponse;
    fromProtoMsg(message: MsgUpdateClassIssuersResponseProtoMsg): MsgUpdateClassIssuersResponse;
    toProto(message: MsgUpdateClassIssuersResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateClassIssuersResponse): MsgUpdateClassIssuersResponseProtoMsg;
};
export declare const MsgUpdateClassMetadata: {
    encode(message: MsgUpdateClassMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassMetadata;
    fromJSON(object: any): MsgUpdateClassMetadata;
    toJSON(message: MsgUpdateClassMetadata): unknown;
    fromPartial(object: Partial<MsgUpdateClassMetadata>): MsgUpdateClassMetadata;
    fromAmino(object: MsgUpdateClassMetadataAmino): MsgUpdateClassMetadata;
    toAmino(message: MsgUpdateClassMetadata): MsgUpdateClassMetadataAmino;
    fromAminoMsg(object: MsgUpdateClassMetadataAminoMsg): MsgUpdateClassMetadata;
    fromProtoMsg(message: MsgUpdateClassMetadataProtoMsg): MsgUpdateClassMetadata;
    toProto(message: MsgUpdateClassMetadata): Uint8Array;
    toProtoMsg(message: MsgUpdateClassMetadata): MsgUpdateClassMetadataProtoMsg;
};
export declare const MsgUpdateClassMetadataResponse: {
    encode(_: MsgUpdateClassMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassMetadataResponse;
    fromJSON(_: any): MsgUpdateClassMetadataResponse;
    toJSON(_: MsgUpdateClassMetadataResponse): unknown;
    fromPartial(_: Partial<MsgUpdateClassMetadataResponse>): MsgUpdateClassMetadataResponse;
    fromAmino(_: MsgUpdateClassMetadataResponseAmino): MsgUpdateClassMetadataResponse;
    toAmino(_: MsgUpdateClassMetadataResponse): MsgUpdateClassMetadataResponseAmino;
    fromAminoMsg(object: MsgUpdateClassMetadataResponseAminoMsg): MsgUpdateClassMetadataResponse;
    fromProtoMsg(message: MsgUpdateClassMetadataResponseProtoMsg): MsgUpdateClassMetadataResponse;
    toProto(message: MsgUpdateClassMetadataResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateClassMetadataResponse): MsgUpdateClassMetadataResponseProtoMsg;
};
