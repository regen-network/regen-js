import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BatchIssuance, BatchIssuanceSDKType, OriginTx, OriginTxSDKType, Credits, CreditsSDKType } from "./types";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { CreditType, CreditTypeSDKType } from "./state";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgAddCreditType is the Msg/AddCreditType request type.
 *
 * Since Revision 2
 */
export interface MsgAddCreditType {
    /** authority is the address of the governance account. */
    authority: string;
    /** credit_type defines a credit type to add to the credit types parameter. */
    creditType?: CreditType;
}
/**
 * MsgAddCreditType is the Msg/AddCreditType request type.
 *
 * Since Revision 2
 */
export interface MsgAddCreditTypeSDKType {
    /** authority is the address of the governance account. */
    authority: string;
    /** credit_type defines a credit type to add to the credit types parameter. */
    credit_type?: CreditTypeSDKType;
}
/**
 * MsgAddCreditTypeResponse is the Msg/AddCreditType response type.
 *
 * Since Revision 2
 */
export interface MsgAddCreditTypeResponse {
}
/**
 * MsgAddCreditTypeResponse is the Msg/AddCreditType response type.
 *
 * Since Revision 2
 */
export interface MsgAddCreditTypeResponseSDKType {
}
/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateClass {
    /**
     * admin is the address of the account creating the credit class that will
     * become the admin of the credit class upon creation. The admin will have
     * permissions within the credit class to update the credit class including
     * the list of approved issuers. If Params.allowlist_enabled is set to true,
     * this address must be included in Params.allowed_class_creators.
     */
    admin: string;
    /**
     * issuers are the addresses of the accounts that will have permissions within
     * the credit class to create projects and issue credits.
     */
    issuers: string[];
    /**
     * metadata is any arbitrary string with a maximum length of 256 characters
     * that includes or references metadata to attach to the credit class.
     */
    metadata: string;
    /**
     * credit_type_abbrev is the abbreviation of the credit type under which the
     * credit class will be created (e.g. "C", "BIO").
     */
    creditTypeAbbrev: string;
    /**
     * fee is the credit class creation fee. An equal fee is required if the class
     * creation fee parameter is set. The provided fee can be greater than the
     * parameter, but only the amount in the parameter will be charged.
     */
    fee?: Coin;
}
/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateClassSDKType {
    /**
     * admin is the address of the account creating the credit class that will
     * become the admin of the credit class upon creation. The admin will have
     * permissions within the credit class to update the credit class including
     * the list of approved issuers. If Params.allowlist_enabled is set to true,
     * this address must be included in Params.allowed_class_creators.
     */
    admin: string;
    /**
     * issuers are the addresses of the accounts that will have permissions within
     * the credit class to create projects and issue credits.
     */
    issuers: string[];
    /**
     * metadata is any arbitrary string with a maximum length of 256 characters
     * that includes or references metadata to attach to the credit class.
     */
    metadata: string;
    /**
     * credit_type_abbrev is the abbreviation of the credit type under which the
     * credit class will be created (e.g. "C", "BIO").
     */
    credit_type_abbrev: string;
    /**
     * fee is the credit class creation fee. An equal fee is required if the class
     * creation fee parameter is set. The provided fee can be greater than the
     * parameter, but only the amount in the parameter will be charged.
     */
    fee?: CoinSDKType;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponse {
    /** class_id is the unique identifier of the credit class. */
    classId: string;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponseSDKType {
    /** class_id is the unique identifier of the credit class. */
    class_id: string;
}
/** MsgCreateProjectResponse is the Msg/CreateProject request type. */
export interface MsgCreateProject {
    /**
     * admin is the address of the account creating the project that will become
     * the admin of the project upon creation. The creator of the project must be
     * an approved issuer within the credit class under which the project is being
     * created. The admin will have permissions to update the project including
     * the ability to reassign the admin role to another account.
     */
    admin: string;
    /**
     * class_id is the unique identifier of the credit class under which the
     * project will be created.
     */
    classId: string;
    /**
     * metadata is any arbitrary string with a maximum length of 256 characters
     * that includes or references metadata to attach to the project.
     */
    metadata: string;
    /**
     * jurisdiction is the jurisdiction of the project. A jurisdiction has with
     * the format: <country-code>[-<sub-national-code>[ <postal-code>]]
     * The country-code must be 2 alphabetic characters, the sub-national-code
     * can be 1-3 alphanumeric characters, and the postal-code can be up to 64
     * alphanumeric characters. Only the country-code is required, while the
     * sub-national-code and postal-code are optional and can be added for
     * increased precision.
     */
    jurisdiction: string;
    /**
     * reference_id is any arbitrary string used to reference the project with a
     * maximum length of 32 characters.
     */
    referenceId: string;
}
/** MsgCreateProjectResponse is the Msg/CreateProject request type. */
export interface MsgCreateProjectSDKType {
    /**
     * admin is the address of the account creating the project that will become
     * the admin of the project upon creation. The creator of the project must be
     * an approved issuer within the credit class under which the project is being
     * created. The admin will have permissions to update the project including
     * the ability to reassign the admin role to another account.
     */
    admin: string;
    /**
     * class_id is the unique identifier of the credit class under which the
     * project will be created.
     */
    class_id: string;
    /**
     * metadata is any arbitrary string with a maximum length of 256 characters
     * that includes or references metadata to attach to the project.
     */
    metadata: string;
    /**
     * jurisdiction is the jurisdiction of the project. A jurisdiction has with
     * the format: <country-code>[-<sub-national-code>[ <postal-code>]]
     * The country-code must be 2 alphabetic characters, the sub-national-code
     * can be 1-3 alphanumeric characters, and the postal-code can be up to 64
     * alphanumeric characters. Only the country-code is required, while the
     * sub-national-code and postal-code are optional and can be added for
     * increased precision.
     */
    jurisdiction: string;
    /**
     * reference_id is any arbitrary string used to reference the project with a
     * maximum length of 32 characters.
     */
    reference_id: string;
}
/** MsgCreateProjectResponse is the Msg/CreateProject response type. */
export interface MsgCreateProjectResponse {
    /** project_id is the unique identifier of the project. */
    projectId: string;
}
/** MsgCreateProjectResponse is the Msg/CreateProject response type. */
export interface MsgCreateProjectResponseSDKType {
    /** project_id is the unique identifier of the project. */
    project_id: string;
}
/** MsgCreateBatch is the Msg/CreateBatch request type. */
export interface MsgCreateBatch {
    /**
     * issuer is the address of the account issuing the credits and must be an
     * approved issuer within the credit class of the project.
     */
    issuer: string;
    /**
     * project_id is the unique identifier of the project under which the credit
     * batch will be created.
     */
    projectId: string;
    /**
     * issuance specifies the amount of tradable and retired credits that will be
     * issued to each recipient and the jurisdiction in which the credits will be
     * retired if credits are to be retired upon receipt.
     */
    issuance: BatchIssuance[];
    /**
     * metadata is any arbitrary string with a maximum length of 256 characters
     * that includes or references metadata to attach to the credit batch.
     */
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
    /**
     * open determines whether or not the credits can be dynamically minted to the
     * credit batch following the creation of the credit batch. This field should
     * only be set to true when bridging credits from another chain or registry as
     * a result of a bridge operation and is not intended for native issuance.
     */
    open: boolean;
    /**
     * origin_tx is the transaction from another chain or registry that triggered
     * the creation of the credit batch. This field can be ignored when natively
     * issuing credits and should only be set when bridging assets from another
     * chain or registry as a result of a bridge operation.
     */
    originTx?: OriginTx;
}
/** MsgCreateBatch is the Msg/CreateBatch request type. */
export interface MsgCreateBatchSDKType {
    /**
     * issuer is the address of the account issuing the credits and must be an
     * approved issuer within the credit class of the project.
     */
    issuer: string;
    /**
     * project_id is the unique identifier of the project under which the credit
     * batch will be created.
     */
    project_id: string;
    /**
     * issuance specifies the amount of tradable and retired credits that will be
     * issued to each recipient and the jurisdiction in which the credits will be
     * retired if credits are to be retired upon receipt.
     */
    issuance: BatchIssuanceSDKType[];
    /**
     * metadata is any arbitrary string with a maximum length of 256 characters
     * that includes or references metadata to attach to the credit batch.
     */
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
    /**
     * open determines whether or not the credits can be dynamically minted to the
     * credit batch following the creation of the credit batch. This field should
     * only be set to true when bridging credits from another chain or registry as
     * a result of a bridge operation and is not intended for native issuance.
     */
    open: boolean;
    /**
     * origin_tx is the transaction from another chain or registry that triggered
     * the creation of the credit batch. This field can be ignored when natively
     * issuing credits and should only be set when bridging assets from another
     * chain or registry as a result of a bridge operation.
     */
    origin_tx?: OriginTxSDKType;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponse {
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponseSDKType {
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom: string;
}
/** MsgMintBatchCredits is the Msg/MintBatchCredits request type. */
export interface MsgMintBatchCredits {
    /**
     * issuer is the address of the account minting the credits and must be the
     * same issuer who created the credit batch.
     */
    issuer: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
    /**
     * issuance specifies the amount of tradable and retired credits that will be
     * issued to each recipient and the jurisdiction in which the credits will be
     * retired if credits are to be retired upon receipt.
     */
    issuance: BatchIssuance[];
    /**
     * origin_tx is the transaction from another chain or registry that triggered
     * the minting of credits.
     */
    originTx?: OriginTx;
}
/** MsgMintBatchCredits is the Msg/MintBatchCredits request type. */
export interface MsgMintBatchCreditsSDKType {
    /**
     * issuer is the address of the account minting the credits and must be the
     * same issuer who created the credit batch.
     */
    issuer: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom: string;
    /**
     * issuance specifies the amount of tradable and retired credits that will be
     * issued to each recipient and the jurisdiction in which the credits will be
     * retired if credits are to be retired upon receipt.
     */
    issuance: BatchIssuanceSDKType[];
    /**
     * origin_tx is the transaction from another chain or registry that triggered
     * the minting of credits.
     */
    origin_tx?: OriginTxSDKType;
}
/** MsgMintBatchCreditsResponse is the Msg/MintBatchCredits response type. */
export interface MsgMintBatchCreditsResponse {
}
/** MsgMintBatchCreditsResponse is the Msg/MintBatchCredits response type. */
export interface MsgMintBatchCreditsResponseSDKType {
}
/** MsgSealBatch is the Msg/MintBatchCredits request type. */
export interface MsgSealBatch {
    /**
     * issuer is the address of the account that created the credit batch and the
     * only account with permissions to seal the credit batch.
     */
    issuer: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
}
/** MsgSealBatch is the Msg/MintBatchCredits request type. */
export interface MsgSealBatchSDKType {
    /**
     * issuer is the address of the account that created the credit batch and the
     * only account with permissions to seal the credit batch.
     */
    issuer: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom: string;
}
/** MsgSealBatchResponse is the Msg/SealBatch response type. */
export interface MsgSealBatchResponse {
}
/** MsgSealBatchResponse is the Msg/SealBatch response type. */
export interface MsgSealBatchResponseSDKType {
}
/** MsgSend is the Msg/Send request type. */
export interface MsgSend {
    /** sender is the address of the account sending credits. */
    sender: string;
    /** recipient is the address of the account receiving credits. */
    recipient: string;
    /** credits are the credits being sent to the recipient. */
    credits: MsgSend_SendCredits[];
}
/** MsgSend is the Msg/Send request type. */
export interface MsgSendSDKType {
    /** sender is the address of the account sending credits. */
    sender: string;
    /** recipient is the address of the account receiving credits. */
    recipient: string;
    /** credits are the credits being sent to the recipient. */
    credits: MsgSend_SendCreditsSDKType[];
}
/**
 * SendCredits specifies the amount of tradable and retired credits of a
 * credit batch that will be sent to the recipient and the jurisdiction in
 * which the credits will be retired upon receipt.
 */
export interface MsgSend_SendCredits {
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
    /**
     * tradable_amount is the amount of credits in this transfer that can be
     * traded by the recipient. The number of decimal places must be less than
     * or equal to the credit type precision.
     */
    tradableAmount: string;
    /**
     * retired_amount is the amount of credits in this transfer that are retired
     * upon receipt. The number of decimal places must be less than or equal to
     * the credit type precision.
     */
    retiredAmount: string;
    /**
     * retirement_jurisdiction is the jurisdiction of the recipient and is only
     * required if retired_amount is positive. A jurisdiction has the format:
     * <country-code>[-<sub-national-code>[ <postal-code>]]
     * The country-code and sub-national-code must conform to ISO 3166-2 and the
     * postal-code can be up to 64 alphanumeric characters. Only the
     * country-code is required, while the sub-national-code and postal-code are
     * optional and can be added for increased precision.
     */
    retirementJurisdiction: string;
    /**
     * retirement_reason is any arbitrary string that specifies the reason for
     * retiring credits. This field is only required if retired_amount is
     * positive.
     *
     * Since Revision 2
     */
    retirementReason: string;
}
/**
 * SendCredits specifies the amount of tradable and retired credits of a
 * credit batch that will be sent to the recipient and the jurisdiction in
 * which the credits will be retired upon receipt.
 */
export interface MsgSend_SendCreditsSDKType {
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom: string;
    /**
     * tradable_amount is the amount of credits in this transfer that can be
     * traded by the recipient. The number of decimal places must be less than
     * or equal to the credit type precision.
     */
    tradable_amount: string;
    /**
     * retired_amount is the amount of credits in this transfer that are retired
     * upon receipt. The number of decimal places must be less than or equal to
     * the credit type precision.
     */
    retired_amount: string;
    /**
     * retirement_jurisdiction is the jurisdiction of the recipient and is only
     * required if retired_amount is positive. A jurisdiction has the format:
     * <country-code>[-<sub-national-code>[ <postal-code>]]
     * The country-code and sub-national-code must conform to ISO 3166-2 and the
     * postal-code can be up to 64 alphanumeric characters. Only the
     * country-code is required, while the sub-national-code and postal-code are
     * optional and can be added for increased precision.
     */
    retirement_jurisdiction: string;
    /**
     * retirement_reason is any arbitrary string that specifies the reason for
     * retiring credits. This field is only required if retired_amount is
     * positive.
     *
     * Since Revision 2
     */
    retirement_reason: string;
}
/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponse {
}
/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponseSDKType {
}
/** MsgRetire is the Msg/Retire request type. */
export interface MsgRetire {
    /** owner is the address of the account that owns the credits being retired. */
    owner: string;
    /** credits specifies a credit batch and the number of credits being retired. */
    credits: Credits[];
    /**
     * jurisdiction is the jurisdiction of the credit owner. A jurisdiction has
     * the format: <country-code>[-<sub-national-code>[ <postal-code>]]
     * The country-code must be 2 alphabetic characters, the sub-national-code
     * can be 1-3 alphanumeric characters, and the postal-code can be up to 64
     * alphanumeric characters. Only the country-code is required, while the
     * sub-national-code and postal-code are optional and can be added for
     * increased precision.
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
/** MsgRetire is the Msg/Retire request type. */
export interface MsgRetireSDKType {
    /** owner is the address of the account that owns the credits being retired. */
    owner: string;
    /** credits specifies a credit batch and the number of credits being retired. */
    credits: CreditsSDKType[];
    /**
     * jurisdiction is the jurisdiction of the credit owner. A jurisdiction has
     * the format: <country-code>[-<sub-national-code>[ <postal-code>]]
     * The country-code must be 2 alphabetic characters, the sub-national-code
     * can be 1-3 alphanumeric characters, and the postal-code can be up to 64
     * alphanumeric characters. Only the country-code is required, while the
     * sub-national-code and postal-code are optional and can be added for
     * increased precision.
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
/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponse {
}
/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponseSDKType {
}
/** MsgCancel is the Msg/Cancel request type. */
export interface MsgCancel {
    /** owner is the address of the account that owns the credits being cancelled. */
    owner: string;
    /** credits specifies a credit batch and the number of credits being cancelled. */
    credits: Credits[];
    /**
     * reason is any arbitrary string that specifies the reason for cancelling
     * credits.
     */
    reason: string;
}
/** MsgCancel is the Msg/Cancel request type. */
export interface MsgCancelSDKType {
    /** owner is the address of the account that owns the credits being cancelled. */
    owner: string;
    /** credits specifies a credit batch and the number of credits being cancelled. */
    credits: CreditsSDKType[];
    /**
     * reason is any arbitrary string that specifies the reason for cancelling
     * credits.
     */
    reason: string;
}
/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponse {
}
/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponseSDKType {
}
/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */
export interface MsgUpdateClassAdmin {
    /**
     * admin is the address of the account that is currently the admin of the
     * credit class.
     */
    admin: string;
    /** class_id is the unique identifier of the credit class. */
    classId: string;
    /**
     * new_admin is the address of the account that will become the new admin of
     * the credit class.
     */
    newAdmin: string;
}
/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */
export interface MsgUpdateClassAdminSDKType {
    /**
     * admin is the address of the account that is currently the admin of the
     * credit class.
     */
    admin: string;
    /** class_id is the unique identifier of the credit class. */
    class_id: string;
    /**
     * new_admin is the address of the account that will become the new admin of
     * the credit class.
     */
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
    /** class_id is the unique identifier of the credit class. */
    classId: string;
    /**
     * add_issuers are the addresses of the accounts that will be added to the
     * list of approved credit class issuers.
     */
    addIssuers: string[];
    /**
     * remove_issuers are the addresses of the accounts that will be removed from
     * the list of approved credit class issuers.
     */
    removeIssuers: string[];
}
/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */
export interface MsgUpdateClassIssuersSDKType {
    /** admin is the address of the account that is the admin of the credit class. */
    admin: string;
    /** class_id is the unique identifier of the credit class. */
    class_id: string;
    /**
     * add_issuers are the addresses of the accounts that will be added to the
     * list of approved credit class issuers.
     */
    add_issuers: string[];
    /**
     * remove_issuers are the addresses of the accounts that will be removed from
     * the list of approved credit class issuers.
     */
    remove_issuers: string[];
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
    /** class_id is the unique identifier of the credit class. */
    classId: string;
    /**
     * new_metadata is new metadata that will replace the existing metadata. It
     * can be any arbitrary string with a maximum length of 256 characters that
     * includes or references the metadata to attach to the credit class.
     */
    newMetadata: string;
}
/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */
export interface MsgUpdateClassMetadataSDKType {
    /** admin is the address of the account that is the admin of the credit class. */
    admin: string;
    /** class_id is the unique identifier of the credit class. */
    class_id: string;
    /**
     * new_metadata is new metadata that will replace the existing metadata. It
     * can be any arbitrary string with a maximum length of 256 characters that
     * includes or references the metadata to attach to the credit class.
     */
    new_metadata: string;
}
/** MsgUpdateClassMetadataResponse is the Msg/UpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponse {
}
/** MsgUpdateClassMetadataResponse is the Msg/UpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponseSDKType {
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin request type. */
export interface MsgUpdateProjectAdmin {
    /**
     * admin is the address of the account that is the currently the admin of the
     * project.
     */
    admin: string;
    /** project_id is the unique identifier of the project. */
    projectId: string;
    /**
     * new_admin is the address of the account that will become the new admin of
     * the project.
     */
    newAdmin: string;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin request type. */
export interface MsgUpdateProjectAdminSDKType {
    /**
     * admin is the address of the account that is the currently the admin of the
     * project.
     */
    admin: string;
    /** project_id is the unique identifier of the project. */
    project_id: string;
    /**
     * new_admin is the address of the account that will become the new admin of
     * the project.
     */
    new_admin: string;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin response type. */
export interface MsgUpdateProjectAdminResponse {
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin response type. */
export interface MsgUpdateProjectAdminResponseSDKType {
}
/** MsgUpdateProjectMetadata is the Msg/UpdateProjectMetadata request type. */
export interface MsgUpdateProjectMetadata {
    /** admin is the address of the account that is the admin of the project. */
    admin: string;
    /** project_id is the unique identifier of the project. */
    projectId: string;
    /**
     * new_metadata is new metadata that will replace the existing metadata. It
     * can be any arbitrary string with a maximum length of 256 characters that
     * includes or references the metadata to attach to the project.
     */
    newMetadata: string;
}
/** MsgUpdateProjectMetadata is the Msg/UpdateProjectMetadata request type. */
export interface MsgUpdateProjectMetadataSDKType {
    /** admin is the address of the account that is the admin of the project. */
    admin: string;
    /** project_id is the unique identifier of the project. */
    project_id: string;
    /**
     * new_metadata is new metadata that will replace the existing metadata. It
     * can be any arbitrary string with a maximum length of 256 characters that
     * includes or references the metadata to attach to the project.
     */
    new_metadata: string;
}
/**
 * MsgUpdateProjectMetadataResponse is the Msg/UpdateProjectMetadataResponse
 * response type.
 */
export interface MsgUpdateProjectMetadataResponse {
}
/**
 * MsgUpdateProjectMetadataResponse is the Msg/UpdateProjectMetadataResponse
 * response type.
 */
export interface MsgUpdateProjectMetadataResponseSDKType {
}
/** MsgBridge is the Msg/Bridge request type. */
export interface MsgBridge {
    /** owner is the address of the account that owns the credits being bridged. */
    owner: string;
    /** target is the name of the target chain or registry. */
    target: string;
    /** recipient is the address of the account receiving the bridged credits. */
    recipient: string;
    /** credits specifies a credit batch and the number of credits being bridged. */
    credits: Credits[];
}
/** MsgBridge is the Msg/Bridge request type. */
export interface MsgBridgeSDKType {
    /** owner is the address of the account that owns the credits being bridged. */
    owner: string;
    /** target is the name of the target chain or registry. */
    target: string;
    /** recipient is the address of the account receiving the bridged credits. */
    recipient: string;
    /** credits specifies a credit batch and the number of credits being bridged. */
    credits: CreditsSDKType[];
}
/**
 * MsgUpdateBatchMetadata is the Msg/UpdateBatchMetadata request type.
 *
 * Since Revision 2
 */
export interface MsgUpdateBatchMetadata {
    /** issuer is the address of the account that is the issuer of the batch. */
    issuer: string;
    /** batch_denom is the unique identifier of the batch. */
    batchDenom: string;
    /**
     * new_metadata is new metadata that will replace the existing metadata. It
     * can be any arbitrary string with a maximum length of 256 characters that
     * includes or references the metadata to attach to the batch.
     */
    newMetadata: string;
}
/**
 * MsgUpdateBatchMetadata is the Msg/UpdateBatchMetadata request type.
 *
 * Since Revision 2
 */
export interface MsgUpdateBatchMetadataSDKType {
    /** issuer is the address of the account that is the issuer of the batch. */
    issuer: string;
    /** batch_denom is the unique identifier of the batch. */
    batch_denom: string;
    /**
     * new_metadata is new metadata that will replace the existing metadata. It
     * can be any arbitrary string with a maximum length of 256 characters that
     * includes or references the metadata to attach to the batch.
     */
    new_metadata: string;
}
/**
 * MsgUpdateBatchMetadataResponse is the Msg/UpdateBatchMetadataResponse
 * response type.
 *
 * Since Revision 2
 */
export interface MsgUpdateBatchMetadataResponse {
}
/**
 * MsgUpdateBatchMetadataResponse is the Msg/UpdateBatchMetadataResponse
 * response type.
 *
 * Since Revision 2
 */
export interface MsgUpdateBatchMetadataResponseSDKType {
}
/** MsgBridgeResponse is the Msg/Bridge response type. */
export interface MsgBridgeResponse {
}
/** MsgBridgeResponse is the Msg/Bridge response type. */
export interface MsgBridgeResponseSDKType {
}
/** MsgBridgeReceive is the Msg/BridgeReceive request type. */
export interface MsgBridgeReceive {
    /** issuer is the account address of the service bridging the credits. */
    issuer: string;
    /**
     * class_id is the unique identifier of the credit class within which the
     * project and credit batch already exist or will be created.
     */
    classId: string;
    /** project defines the project information for the bridged credits. */
    project?: MsgBridgeReceive_Project;
    /** batch defines the credit batch information for the bridged credits. */
    batch?: MsgBridgeReceive_Batch;
    /**
     * origin_tx is a reference to a transaction which caused the transfer from
     * another chain or registry.
     */
    originTx?: OriginTx;
}
/** MsgBridgeReceive is the Msg/BridgeReceive request type. */
export interface MsgBridgeReceiveSDKType {
    /** issuer is the account address of the service bridging the credits. */
    issuer: string;
    /**
     * class_id is the unique identifier of the credit class within which the
     * project and credit batch already exist or will be created.
     */
    class_id: string;
    /** project defines the project information for the bridged credits. */
    project?: MsgBridgeReceive_ProjectSDKType;
    /** batch defines the credit batch information for the bridged credits. */
    batch?: MsgBridgeReceive_BatchSDKType;
    /**
     * origin_tx is a reference to a transaction which caused the transfer from
     * another chain or registry.
     */
    origin_tx?: OriginTxSDKType;
}
/**
 * Batch defines the credit batch information for the bridged credits. This
 * information will be used to create a credit batch or to dynamically mint
 * credits to an existing credit batch.
 */
export interface MsgBridgeReceive_Batch {
    /** recipient is the recipient of the bridged credits. */
    recipient: string;
    /** amount is the amount of credits being bridged. */
    amount: string;
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
    /** metadata is the metadata for the credit batch. */
    metadata: string;
}
/**
 * Batch defines the credit batch information for the bridged credits. This
 * information will be used to create a credit batch or to dynamically mint
 * credits to an existing credit batch.
 */
export interface MsgBridgeReceive_BatchSDKType {
    /** recipient is the recipient of the bridged credits. */
    recipient: string;
    /** amount is the amount of credits being bridged. */
    amount: string;
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
    /** metadata is the metadata for the credit batch. */
    metadata: string;
}
/**
 * Project defines the project information for the bridged credits. This
 * information will be used to find an existing project or to create a new
 * project if a project with the same reference id does not already exist.
 */
export interface MsgBridgeReceive_Project {
    /** reference_id is the reference id of the project. */
    referenceId: string;
    /** jurisdiction is the project jurisdiction. */
    jurisdiction: string;
    /** metadata is the metadata for the project. */
    metadata: string;
}
/**
 * Project defines the project information for the bridged credits. This
 * information will be used to find an existing project or to create a new
 * project if a project with the same reference id does not already exist.
 */
export interface MsgBridgeReceive_ProjectSDKType {
    /** reference_id is the reference id of the project. */
    reference_id: string;
    /** jurisdiction is the project jurisdiction. */
    jurisdiction: string;
    /** metadata is the metadata for the project. */
    metadata: string;
}
/** MsgBridgeReceiveResponse is the Msg/BridgeReceive response type. */
export interface MsgBridgeReceiveResponse {
    /**
     * batch_denom is the unique identifier of the credit batch either created
     * or within which the credits were dynamically minted.
     */
    batchDenom: string;
    /**
     * project_id is the unique identifier of the project that was either created
     * or the existing project within which the credit batch exists.
     */
    projectId: string;
}
/** MsgBridgeReceiveResponse is the Msg/BridgeReceive response type. */
export interface MsgBridgeReceiveResponseSDKType {
    /**
     * batch_denom is the unique identifier of the credit batch either created
     * or within which the credits were dynamically minted.
     */
    batch_denom: string;
    /**
     * project_id is the unique identifier of the project that was either created
     * or the existing project within which the credit batch exists.
     */
    project_id: string;
}
/**
 * MsgAddClassCreator is the Msg/AddClassCreator request type.
 *
 * Since Revision 2
 */
export interface MsgAddClassCreator {
    /** authority is the address of the governance account. */
    authority: string;
    /** creator is the address to add to the class creator list. */
    creator: string;
}
/**
 * MsgAddClassCreator is the Msg/AddClassCreator request type.
 *
 * Since Revision 2
 */
export interface MsgAddClassCreatorSDKType {
    /** authority is the address of the governance account. */
    authority: string;
    /** creator is the address to add to the class creator list. */
    creator: string;
}
/**
 * MsgAddClassCreatorResponse is the Msg/AddClassCreator response type.
 *
 * Since Revision 2
 */
export interface MsgAddClassCreatorResponse {
}
/**
 * MsgAddClassCreatorResponse is the Msg/AddClassCreator response type.
 *
 * Since Revision 2
 */
export interface MsgAddClassCreatorResponseSDKType {
}
/**
 * MsgSetClassCreatorAllowlist is the Msg/SetClassCreatorAllowlist request
 * type.
 *
 * Since Revision 2
 */
export interface MsgSetClassCreatorAllowlist {
    /** authority is the address of the governance account. */
    authority: string;
    /** enabled defines the boolean value to set the allowlist on or off. */
    enabled: boolean;
}
/**
 * MsgSetClassCreatorAllowlist is the Msg/SetClassCreatorAllowlist request
 * type.
 *
 * Since Revision 2
 */
export interface MsgSetClassCreatorAllowlistSDKType {
    /** authority is the address of the governance account. */
    authority: string;
    /** enabled defines the boolean value to set the allowlist on or off. */
    enabled: boolean;
}
/**
 * MsgSetClassCreatorAllowlistResponse is the Msg/SetClassCreatorAllowlist
 * response type.
 *
 * Since Revision 2
 */
export interface MsgSetClassCreatorAllowlistResponse {
}
/**
 * MsgSetClassCreatorAllowlistResponse is the Msg/SetClassCreatorAllowlist
 * response type.
 *
 * Since Revision 2
 */
export interface MsgSetClassCreatorAllowlistResponseSDKType {
}
/**
 * MsgRemoveClassCreator is the Msg/RemoveClassCreator request type.
 *
 * Since Revision 2
 */
export interface MsgRemoveClassCreator {
    /** authority is the address of the governance account. */
    authority: string;
    /** creator is the address to remove from the class creator list. */
    creator: string;
}
/**
 * MsgRemoveClassCreator is the Msg/RemoveClassCreator request type.
 *
 * Since Revision 2
 */
export interface MsgRemoveClassCreatorSDKType {
    /** authority is the address of the governance account. */
    authority: string;
    /** creator is the address to remove from the class creator list. */
    creator: string;
}
/**
 * MsgRemoveClassCreatorResponse is the Msg/RemoveClasssCreator response type.
 *
 * Since Revision 2
 */
export interface MsgRemoveClassCreatorResponse {
}
/**
 * MsgRemoveClassCreatorResponse is the Msg/RemoveClasssCreator response type.
 *
 * Since Revision 2
 */
export interface MsgRemoveClassCreatorResponseSDKType {
}
/**
 * MsgUpdateClassFee is the Msg/UpdateClassFee request type.
 *
 * Since Revision 2
 */
export interface MsgUpdateClassFee {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * fee is the credit class creation fee. If not set, the credit class creation
     * fee will be removed and no fee will be required to create a credit class.
     */
    fee?: Coin;
}
/**
 * MsgUpdateClassFee is the Msg/UpdateClassFee request type.
 *
 * Since Revision 2
 */
export interface MsgUpdateClassFeeSDKType {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * fee is the credit class creation fee. If not set, the credit class creation
     * fee will be removed and no fee will be required to create a credit class.
     */
    fee?: CoinSDKType;
}
/**
 * MsgUpdateClassFeeResponse is the Msg/UpdateClassFee response type.
 *
 * Since Revision 2
 */
export interface MsgUpdateClassFeeResponse {
}
/**
 * MsgUpdateClassFeeResponse is the Msg/UpdateClassFee response type.
 *
 * Since Revision 2
 */
export interface MsgUpdateClassFeeResponseSDKType {
}
/**
 * MsgAddAllowedBridgeChain is the Msg/AddAllowedBridgeChain request type.
 *
 * Since Revision 2
 */
export interface MsgAddAllowedBridgeChain {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * chain_name is the name of the chain to allow bridging of ecocredits to
     * (i.e. polygon, ethereum, celo).
     */
    chainName: string;
}
/**
 * MsgAddAllowedBridgeChain is the Msg/AddAllowedBridgeChain request type.
 *
 * Since Revision 2
 */
export interface MsgAddAllowedBridgeChainSDKType {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * chain_name is the name of the chain to allow bridging of ecocredits to
     * (i.e. polygon, ethereum, celo).
     */
    chain_name: string;
}
/**
 * MsgAddAllowedBridgeChainResponse is the Msg/AddAllowedBridgeChain response
 * type.
 *
 * Since Revision 2
 */
export interface MsgAddAllowedBridgeChainResponse {
}
/**
 * MsgAddAllowedBridgeChainResponse is the Msg/AddAllowedBridgeChain response
 * type.
 *
 * Since Revision 2
 */
export interface MsgAddAllowedBridgeChainResponseSDKType {
}
/**
 * MsgRemoveAllowedBridgeChain is the Msg/RemoveAllowedBridgeChain request type.
 *
 * Since Revision 2
 */
export interface MsgRemoveAllowedBridgeChain {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * chain_name is the name of the chain to remove from the list of allowed
     * chains to bridge ecocredits to (i.e. polygon, ethereum, celo).
     */
    chainName: string;
}
/**
 * MsgRemoveAllowedBridgeChain is the Msg/RemoveAllowedBridgeChain request type.
 *
 * Since Revision 2
 */
export interface MsgRemoveAllowedBridgeChainSDKType {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * chain_name is the name of the chain to remove from the list of allowed
     * chains to bridge ecocredits to (i.e. polygon, ethereum, celo).
     */
    chain_name: string;
}
/**
 * MsgRemoveAllowedBridgeChainResponse is the Msg/RemoveAllowedBridgeChain
 * response type.
 *
 * Since Revision 2
 */
export interface MsgRemoveAllowedBridgeChainResponse {
}
/**
 * MsgRemoveAllowedBridgeChainResponse is the Msg/RemoveAllowedBridgeChain
 * response type.
 *
 * Since Revision 2
 */
export interface MsgRemoveAllowedBridgeChainResponseSDKType {
}
export declare const MsgAddCreditType: {
    encode(message: MsgAddCreditType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddCreditType;
    fromJSON(object: any): MsgAddCreditType;
    toJSON(message: MsgAddCreditType): unknown;
    fromPartial(object: Partial<MsgAddCreditType>): MsgAddCreditType;
};
export declare const MsgAddCreditTypeResponse: {
    encode(_: MsgAddCreditTypeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddCreditTypeResponse;
    fromJSON(_: any): MsgAddCreditTypeResponse;
    toJSON(_: MsgAddCreditTypeResponse): unknown;
    fromPartial(_: Partial<MsgAddCreditTypeResponse>): MsgAddCreditTypeResponse;
};
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
export declare const MsgCreateProject: {
    encode(message: MsgCreateProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProject;
    fromJSON(object: any): MsgCreateProject;
    toJSON(message: MsgCreateProject): unknown;
    fromPartial(object: Partial<MsgCreateProject>): MsgCreateProject;
};
export declare const MsgCreateProjectResponse: {
    encode(message: MsgCreateProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProjectResponse;
    fromJSON(object: any): MsgCreateProjectResponse;
    toJSON(message: MsgCreateProjectResponse): unknown;
    fromPartial(object: Partial<MsgCreateProjectResponse>): MsgCreateProjectResponse;
};
export declare const MsgCreateBatch: {
    encode(message: MsgCreateBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatch;
    fromJSON(object: any): MsgCreateBatch;
    toJSON(message: MsgCreateBatch): unknown;
    fromPartial(object: Partial<MsgCreateBatch>): MsgCreateBatch;
};
export declare const MsgCreateBatchResponse: {
    encode(message: MsgCreateBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatchResponse;
    fromJSON(object: any): MsgCreateBatchResponse;
    toJSON(message: MsgCreateBatchResponse): unknown;
    fromPartial(object: Partial<MsgCreateBatchResponse>): MsgCreateBatchResponse;
};
export declare const MsgMintBatchCredits: {
    encode(message: MsgMintBatchCredits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintBatchCredits;
    fromJSON(object: any): MsgMintBatchCredits;
    toJSON(message: MsgMintBatchCredits): unknown;
    fromPartial(object: Partial<MsgMintBatchCredits>): MsgMintBatchCredits;
};
export declare const MsgMintBatchCreditsResponse: {
    encode(_: MsgMintBatchCreditsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintBatchCreditsResponse;
    fromJSON(_: any): MsgMintBatchCreditsResponse;
    toJSON(_: MsgMintBatchCreditsResponse): unknown;
    fromPartial(_: Partial<MsgMintBatchCreditsResponse>): MsgMintBatchCreditsResponse;
};
export declare const MsgSealBatch: {
    encode(message: MsgSealBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSealBatch;
    fromJSON(object: any): MsgSealBatch;
    toJSON(message: MsgSealBatch): unknown;
    fromPartial(object: Partial<MsgSealBatch>): MsgSealBatch;
};
export declare const MsgSealBatchResponse: {
    encode(_: MsgSealBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSealBatchResponse;
    fromJSON(_: any): MsgSealBatchResponse;
    toJSON(_: MsgSealBatchResponse): unknown;
    fromPartial(_: Partial<MsgSealBatchResponse>): MsgSealBatchResponse;
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
export declare const MsgUpdateProjectAdmin: {
    encode(message: MsgUpdateProjectAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectAdmin;
    fromJSON(object: any): MsgUpdateProjectAdmin;
    toJSON(message: MsgUpdateProjectAdmin): unknown;
    fromPartial(object: Partial<MsgUpdateProjectAdmin>): MsgUpdateProjectAdmin;
};
export declare const MsgUpdateProjectAdminResponse: {
    encode(_: MsgUpdateProjectAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectAdminResponse;
    fromJSON(_: any): MsgUpdateProjectAdminResponse;
    toJSON(_: MsgUpdateProjectAdminResponse): unknown;
    fromPartial(_: Partial<MsgUpdateProjectAdminResponse>): MsgUpdateProjectAdminResponse;
};
export declare const MsgUpdateProjectMetadata: {
    encode(message: MsgUpdateProjectMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectMetadata;
    fromJSON(object: any): MsgUpdateProjectMetadata;
    toJSON(message: MsgUpdateProjectMetadata): unknown;
    fromPartial(object: Partial<MsgUpdateProjectMetadata>): MsgUpdateProjectMetadata;
};
export declare const MsgUpdateProjectMetadataResponse: {
    encode(_: MsgUpdateProjectMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProjectMetadataResponse;
    fromJSON(_: any): MsgUpdateProjectMetadataResponse;
    toJSON(_: MsgUpdateProjectMetadataResponse): unknown;
    fromPartial(_: Partial<MsgUpdateProjectMetadataResponse>): MsgUpdateProjectMetadataResponse;
};
export declare const MsgBridge: {
    encode(message: MsgBridge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBridge;
    fromJSON(object: any): MsgBridge;
    toJSON(message: MsgBridge): unknown;
    fromPartial(object: Partial<MsgBridge>): MsgBridge;
};
export declare const MsgUpdateBatchMetadata: {
    encode(message: MsgUpdateBatchMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBatchMetadata;
    fromJSON(object: any): MsgUpdateBatchMetadata;
    toJSON(message: MsgUpdateBatchMetadata): unknown;
    fromPartial(object: Partial<MsgUpdateBatchMetadata>): MsgUpdateBatchMetadata;
};
export declare const MsgUpdateBatchMetadataResponse: {
    encode(_: MsgUpdateBatchMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBatchMetadataResponse;
    fromJSON(_: any): MsgUpdateBatchMetadataResponse;
    toJSON(_: MsgUpdateBatchMetadataResponse): unknown;
    fromPartial(_: Partial<MsgUpdateBatchMetadataResponse>): MsgUpdateBatchMetadataResponse;
};
export declare const MsgBridgeResponse: {
    encode(_: MsgBridgeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBridgeResponse;
    fromJSON(_: any): MsgBridgeResponse;
    toJSON(_: MsgBridgeResponse): unknown;
    fromPartial(_: Partial<MsgBridgeResponse>): MsgBridgeResponse;
};
export declare const MsgBridgeReceive: {
    encode(message: MsgBridgeReceive, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBridgeReceive;
    fromJSON(object: any): MsgBridgeReceive;
    toJSON(message: MsgBridgeReceive): unknown;
    fromPartial(object: Partial<MsgBridgeReceive>): MsgBridgeReceive;
};
export declare const MsgBridgeReceive_Batch: {
    encode(message: MsgBridgeReceive_Batch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBridgeReceive_Batch;
    fromJSON(object: any): MsgBridgeReceive_Batch;
    toJSON(message: MsgBridgeReceive_Batch): unknown;
    fromPartial(object: Partial<MsgBridgeReceive_Batch>): MsgBridgeReceive_Batch;
};
export declare const MsgBridgeReceive_Project: {
    encode(message: MsgBridgeReceive_Project, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBridgeReceive_Project;
    fromJSON(object: any): MsgBridgeReceive_Project;
    toJSON(message: MsgBridgeReceive_Project): unknown;
    fromPartial(object: Partial<MsgBridgeReceive_Project>): MsgBridgeReceive_Project;
};
export declare const MsgBridgeReceiveResponse: {
    encode(message: MsgBridgeReceiveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBridgeReceiveResponse;
    fromJSON(object: any): MsgBridgeReceiveResponse;
    toJSON(message: MsgBridgeReceiveResponse): unknown;
    fromPartial(object: Partial<MsgBridgeReceiveResponse>): MsgBridgeReceiveResponse;
};
export declare const MsgAddClassCreator: {
    encode(message: MsgAddClassCreator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddClassCreator;
    fromJSON(object: any): MsgAddClassCreator;
    toJSON(message: MsgAddClassCreator): unknown;
    fromPartial(object: Partial<MsgAddClassCreator>): MsgAddClassCreator;
};
export declare const MsgAddClassCreatorResponse: {
    encode(_: MsgAddClassCreatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddClassCreatorResponse;
    fromJSON(_: any): MsgAddClassCreatorResponse;
    toJSON(_: MsgAddClassCreatorResponse): unknown;
    fromPartial(_: Partial<MsgAddClassCreatorResponse>): MsgAddClassCreatorResponse;
};
export declare const MsgSetClassCreatorAllowlist: {
    encode(message: MsgSetClassCreatorAllowlist, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetClassCreatorAllowlist;
    fromJSON(object: any): MsgSetClassCreatorAllowlist;
    toJSON(message: MsgSetClassCreatorAllowlist): unknown;
    fromPartial(object: Partial<MsgSetClassCreatorAllowlist>): MsgSetClassCreatorAllowlist;
};
export declare const MsgSetClassCreatorAllowlistResponse: {
    encode(_: MsgSetClassCreatorAllowlistResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetClassCreatorAllowlistResponse;
    fromJSON(_: any): MsgSetClassCreatorAllowlistResponse;
    toJSON(_: MsgSetClassCreatorAllowlistResponse): unknown;
    fromPartial(_: Partial<MsgSetClassCreatorAllowlistResponse>): MsgSetClassCreatorAllowlistResponse;
};
export declare const MsgRemoveClassCreator: {
    encode(message: MsgRemoveClassCreator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveClassCreator;
    fromJSON(object: any): MsgRemoveClassCreator;
    toJSON(message: MsgRemoveClassCreator): unknown;
    fromPartial(object: Partial<MsgRemoveClassCreator>): MsgRemoveClassCreator;
};
export declare const MsgRemoveClassCreatorResponse: {
    encode(_: MsgRemoveClassCreatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveClassCreatorResponse;
    fromJSON(_: any): MsgRemoveClassCreatorResponse;
    toJSON(_: MsgRemoveClassCreatorResponse): unknown;
    fromPartial(_: Partial<MsgRemoveClassCreatorResponse>): MsgRemoveClassCreatorResponse;
};
export declare const MsgUpdateClassFee: {
    encode(message: MsgUpdateClassFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassFee;
    fromJSON(object: any): MsgUpdateClassFee;
    toJSON(message: MsgUpdateClassFee): unknown;
    fromPartial(object: Partial<MsgUpdateClassFee>): MsgUpdateClassFee;
};
export declare const MsgUpdateClassFeeResponse: {
    encode(_: MsgUpdateClassFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClassFeeResponse;
    fromJSON(_: any): MsgUpdateClassFeeResponse;
    toJSON(_: MsgUpdateClassFeeResponse): unknown;
    fromPartial(_: Partial<MsgUpdateClassFeeResponse>): MsgUpdateClassFeeResponse;
};
export declare const MsgAddAllowedBridgeChain: {
    encode(message: MsgAddAllowedBridgeChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAllowedBridgeChain;
    fromJSON(object: any): MsgAddAllowedBridgeChain;
    toJSON(message: MsgAddAllowedBridgeChain): unknown;
    fromPartial(object: Partial<MsgAddAllowedBridgeChain>): MsgAddAllowedBridgeChain;
};
export declare const MsgAddAllowedBridgeChainResponse: {
    encode(_: MsgAddAllowedBridgeChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAllowedBridgeChainResponse;
    fromJSON(_: any): MsgAddAllowedBridgeChainResponse;
    toJSON(_: MsgAddAllowedBridgeChainResponse): unknown;
    fromPartial(_: Partial<MsgAddAllowedBridgeChainResponse>): MsgAddAllowedBridgeChainResponse;
};
export declare const MsgRemoveAllowedBridgeChain: {
    encode(message: MsgRemoveAllowedBridgeChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAllowedBridgeChain;
    fromJSON(object: any): MsgRemoveAllowedBridgeChain;
    toJSON(message: MsgRemoveAllowedBridgeChain): unknown;
    fromPartial(object: Partial<MsgRemoveAllowedBridgeChain>): MsgRemoveAllowedBridgeChain;
};
export declare const MsgRemoveAllowedBridgeChainResponse: {
    encode(_: MsgRemoveAllowedBridgeChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveAllowedBridgeChainResponse;
    fromJSON(_: any): MsgRemoveAllowedBridgeChainResponse;
    toJSON(_: MsgRemoveAllowedBridgeChainResponse): unknown;
    fromPartial(_: Partial<MsgRemoveAllowedBridgeChainResponse>): MsgRemoveAllowedBridgeChainResponse;
};
