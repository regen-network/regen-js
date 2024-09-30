import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BatchIssuance, BatchIssuanceAmino, BatchIssuanceSDKType, OriginTx, OriginTxAmino, OriginTxSDKType, Credits, CreditsAmino, CreditsSDKType } from "./types";
import { CreditType, CreditTypeAmino, CreditTypeSDKType } from "./state";
import { BinaryReader, BinaryWriter } from "../../../binary";
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
export interface MsgAddCreditTypeProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgAddCreditType";
    value: Uint8Array;
}
/**
 * MsgAddCreditType is the Msg/AddCreditType request type.
 *
 * Since Revision 2
 */
export interface MsgAddCreditTypeAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /** credit_type defines a credit type to add to the credit types parameter. */
    credit_type?: CreditTypeAmino;
}
export interface MsgAddCreditTypeAminoMsg {
    type: "regen/MsgAddCreditType";
    value: MsgAddCreditTypeAmino;
}
/**
 * MsgAddCreditType is the Msg/AddCreditType request type.
 *
 * Since Revision 2
 */
export interface MsgAddCreditTypeSDKType {
    authority: string;
    credit_type?: CreditTypeSDKType;
}
/**
 * MsgAddCreditTypeResponse is the Msg/AddCreditType response type.
 *
 * Since Revision 2
 */
export interface MsgAddCreditTypeResponse {
}
export interface MsgAddCreditTypeResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgAddCreditTypeResponse";
    value: Uint8Array;
}
/**
 * MsgAddCreditTypeResponse is the Msg/AddCreditType response type.
 *
 * Since Revision 2
 */
export interface MsgAddCreditTypeResponseAmino {
}
export interface MsgAddCreditTypeResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgAddCreditTypeResponse";
    value: MsgAddCreditTypeResponseAmino;
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
export interface MsgCreateClassProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgCreateClass";
    value: Uint8Array;
}
/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateClassAmino {
    /**
     * admin is the address of the account creating the credit class that will
     * become the admin of the credit class upon creation. The admin will have
     * permissions within the credit class to update the credit class including
     * the list of approved issuers. If Params.allowlist_enabled is set to true,
     * this address must be included in Params.allowed_class_creators.
     */
    admin?: string;
    /**
     * issuers are the addresses of the accounts that will have permissions within
     * the credit class to create projects and issue credits.
     */
    issuers?: string[];
    /**
     * metadata is any arbitrary string with a maximum length of 256 characters
     * that includes or references metadata to attach to the credit class.
     */
    metadata?: string;
    /**
     * credit_type_abbrev is the abbreviation of the credit type under which the
     * credit class will be created (e.g. "C", "BIO").
     */
    credit_type_abbrev?: string;
    /**
     * fee is the credit class creation fee. An equal fee is required if the class
     * creation fee parameter is set. The provided fee can be greater than the
     * parameter, but only the amount in the parameter will be charged.
     */
    fee?: CoinAmino;
}
export interface MsgCreateClassAminoMsg {
    type: "regen/MsgCreateClass";
    value: MsgCreateClassAmino;
}
/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateClassSDKType {
    admin: string;
    issuers: string[];
    metadata: string;
    credit_type_abbrev: string;
    fee?: CoinSDKType;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponse {
    /** class_id is the unique identifier of the credit class. */
    classId: string;
}
export interface MsgCreateClassResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgCreateClassResponse";
    value: Uint8Array;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponseAmino {
    /** class_id is the unique identifier of the credit class. */
    class_id?: string;
}
export interface MsgCreateClassResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgCreateClassResponse";
    value: MsgCreateClassResponseAmino;
}
/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponseSDKType {
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
export interface MsgCreateProjectProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgCreateProject";
    value: Uint8Array;
}
/** MsgCreateProjectResponse is the Msg/CreateProject request type. */
export interface MsgCreateProjectAmino {
    /**
     * admin is the address of the account creating the project that will become
     * the admin of the project upon creation. The creator of the project must be
     * an approved issuer within the credit class under which the project is being
     * created. The admin will have permissions to update the project including
     * the ability to reassign the admin role to another account.
     */
    admin?: string;
    /**
     * class_id is the unique identifier of the credit class under which the
     * project will be created.
     */
    class_id?: string;
    /**
     * metadata is any arbitrary string with a maximum length of 256 characters
     * that includes or references metadata to attach to the project.
     */
    metadata?: string;
    /**
     * jurisdiction is the jurisdiction of the project. A jurisdiction has with
     * the format: <country-code>[-<sub-national-code>[ <postal-code>]]
     * The country-code must be 2 alphabetic characters, the sub-national-code
     * can be 1-3 alphanumeric characters, and the postal-code can be up to 64
     * alphanumeric characters. Only the country-code is required, while the
     * sub-national-code and postal-code are optional and can be added for
     * increased precision.
     */
    jurisdiction?: string;
    /**
     * reference_id is any arbitrary string used to reference the project with a
     * maximum length of 32 characters.
     */
    reference_id?: string;
}
export interface MsgCreateProjectAminoMsg {
    type: "regen/MsgCreateProject";
    value: MsgCreateProjectAmino;
}
/** MsgCreateProjectResponse is the Msg/CreateProject request type. */
export interface MsgCreateProjectSDKType {
    admin: string;
    class_id: string;
    metadata: string;
    jurisdiction: string;
    reference_id: string;
}
/** MsgCreateProjectResponse is the Msg/CreateProject response type. */
export interface MsgCreateProjectResponse {
    /** project_id is the unique identifier of the project. */
    projectId: string;
}
export interface MsgCreateProjectResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgCreateProjectResponse";
    value: Uint8Array;
}
/** MsgCreateProjectResponse is the Msg/CreateProject response type. */
export interface MsgCreateProjectResponseAmino {
    /** project_id is the unique identifier of the project. */
    project_id?: string;
}
export interface MsgCreateProjectResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgCreateProjectResponse";
    value: MsgCreateProjectResponseAmino;
}
/** MsgCreateProjectResponse is the Msg/CreateProject response type. */
export interface MsgCreateProjectResponseSDKType {
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
    startDate?: Date;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    endDate?: Date;
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
export interface MsgCreateBatchProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgCreateBatch";
    value: Uint8Array;
}
/** MsgCreateBatch is the Msg/CreateBatch request type. */
export interface MsgCreateBatchAmino {
    /**
     * issuer is the address of the account issuing the credits and must be an
     * approved issuer within the credit class of the project.
     */
    issuer?: string;
    /**
     * project_id is the unique identifier of the project under which the credit
     * batch will be created.
     */
    project_id?: string;
    /**
     * issuance specifies the amount of tradable and retired credits that will be
     * issued to each recipient and the jurisdiction in which the credits will be
     * retired if credits are to be retired upon receipt.
     */
    issuance?: BatchIssuanceAmino[];
    /**
     * metadata is any arbitrary string with a maximum length of 256 characters
     * that includes or references metadata to attach to the credit batch.
     */
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
    /**
     * open determines whether or not the credits can be dynamically minted to the
     * credit batch following the creation of the credit batch. This field should
     * only be set to true when bridging credits from another chain or registry as
     * a result of a bridge operation and is not intended for native issuance.
     */
    open?: boolean;
    /**
     * origin_tx is the transaction from another chain or registry that triggered
     * the creation of the credit batch. This field can be ignored when natively
     * issuing credits and should only be set when bridging assets from another
     * chain or registry as a result of a bridge operation.
     */
    origin_tx?: OriginTxAmino;
}
export interface MsgCreateBatchAminoMsg {
    type: "regen/MsgCreateBatch";
    value: MsgCreateBatchAmino;
}
/** MsgCreateBatch is the Msg/CreateBatch request type. */
export interface MsgCreateBatchSDKType {
    issuer: string;
    project_id: string;
    issuance: BatchIssuanceSDKType[];
    metadata: string;
    start_date?: Date;
    end_date?: Date;
    open: boolean;
    origin_tx?: OriginTxSDKType;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponse {
    /** batch_denom is the unique identifier of the credit batch. */
    batchDenom: string;
}
export interface MsgCreateBatchResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgCreateBatchResponse";
    value: Uint8Array;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponseAmino {
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom?: string;
}
export interface MsgCreateBatchResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgCreateBatchResponse";
    value: MsgCreateBatchResponseAmino;
}
/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponseSDKType {
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
export interface MsgMintBatchCreditsProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits";
    value: Uint8Array;
}
/** MsgMintBatchCredits is the Msg/MintBatchCredits request type. */
export interface MsgMintBatchCreditsAmino {
    /**
     * issuer is the address of the account minting the credits and must be the
     * same issuer who created the credit batch.
     */
    issuer?: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom?: string;
    /**
     * issuance specifies the amount of tradable and retired credits that will be
     * issued to each recipient and the jurisdiction in which the credits will be
     * retired if credits are to be retired upon receipt.
     */
    issuance?: BatchIssuanceAmino[];
    /**
     * origin_tx is the transaction from another chain or registry that triggered
     * the minting of credits.
     */
    origin_tx?: OriginTxAmino;
}
export interface MsgMintBatchCreditsAminoMsg {
    type: "regen/MsgMintBatchCredits";
    value: MsgMintBatchCreditsAmino;
}
/** MsgMintBatchCredits is the Msg/MintBatchCredits request type. */
export interface MsgMintBatchCreditsSDKType {
    issuer: string;
    batch_denom: string;
    issuance: BatchIssuanceSDKType[];
    origin_tx?: OriginTxSDKType;
}
/** MsgMintBatchCreditsResponse is the Msg/MintBatchCredits response type. */
export interface MsgMintBatchCreditsResponse {
}
export interface MsgMintBatchCreditsResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgMintBatchCreditsResponse";
    value: Uint8Array;
}
/** MsgMintBatchCreditsResponse is the Msg/MintBatchCredits response type. */
export interface MsgMintBatchCreditsResponseAmino {
}
export interface MsgMintBatchCreditsResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgMintBatchCreditsResponse";
    value: MsgMintBatchCreditsResponseAmino;
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
export interface MsgSealBatchProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgSealBatch";
    value: Uint8Array;
}
/** MsgSealBatch is the Msg/MintBatchCredits request type. */
export interface MsgSealBatchAmino {
    /**
     * issuer is the address of the account that created the credit batch and the
     * only account with permissions to seal the credit batch.
     */
    issuer?: string;
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom?: string;
}
export interface MsgSealBatchAminoMsg {
    type: "regen/MsgSealBatch";
    value: MsgSealBatchAmino;
}
/** MsgSealBatch is the Msg/MintBatchCredits request type. */
export interface MsgSealBatchSDKType {
    issuer: string;
    batch_denom: string;
}
/** MsgSealBatchResponse is the Msg/SealBatch response type. */
export interface MsgSealBatchResponse {
}
export interface MsgSealBatchResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgSealBatchResponse";
    value: Uint8Array;
}
/** MsgSealBatchResponse is the Msg/SealBatch response type. */
export interface MsgSealBatchResponseAmino {
}
export interface MsgSealBatchResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgSealBatchResponse";
    value: MsgSealBatchResponseAmino;
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
export interface MsgSendProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgSend";
    value: Uint8Array;
}
/** MsgSend is the Msg/Send request type. */
export interface MsgSendAmino {
    /** sender is the address of the account sending credits. */
    sender?: string;
    /** recipient is the address of the account receiving credits. */
    recipient?: string;
    /** credits are the credits being sent to the recipient. */
    credits?: MsgSend_SendCreditsAmino[];
}
export interface MsgSendAminoMsg {
    type: "regen/MsgSend";
    value: MsgSendAmino;
}
/** MsgSend is the Msg/Send request type. */
export interface MsgSendSDKType {
    sender: string;
    recipient: string;
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
export interface MsgSend_SendCreditsProtoMsg {
    typeUrl: "/regen.ecocredit.v1.SendCredits";
    value: Uint8Array;
}
/**
 * SendCredits specifies the amount of tradable and retired credits of a
 * credit batch that will be sent to the recipient and the jurisdiction in
 * which the credits will be retired upon receipt.
 */
export interface MsgSend_SendCreditsAmino {
    /** batch_denom is the unique identifier of the credit batch. */
    batch_denom?: string;
    /**
     * tradable_amount is the amount of credits in this transfer that can be
     * traded by the recipient. The number of decimal places must be less than
     * or equal to the credit type precision.
     */
    tradable_amount?: string;
    /**
     * retired_amount is the amount of credits in this transfer that are retired
     * upon receipt. The number of decimal places must be less than or equal to
     * the credit type precision.
     */
    retired_amount?: string;
    /**
     * retirement_jurisdiction is the jurisdiction of the recipient and is only
     * required if retired_amount is positive. A jurisdiction has the format:
     * <country-code>[-<sub-national-code>[ <postal-code>]]
     * The country-code and sub-national-code must conform to ISO 3166-2 and the
     * postal-code can be up to 64 alphanumeric characters. Only the
     * country-code is required, while the sub-national-code and postal-code are
     * optional and can be added for increased precision.
     */
    retirement_jurisdiction?: string;
    /**
     * retirement_reason is any arbitrary string that specifies the reason for
     * retiring credits. This field is only required if retired_amount is
     * positive.
     *
     * Since Revision 2
     */
    retirement_reason?: string;
}
export interface MsgSend_SendCreditsAminoMsg {
    type: "/regen.ecocredit.v1.SendCredits";
    value: MsgSend_SendCreditsAmino;
}
/**
 * SendCredits specifies the amount of tradable and retired credits of a
 * credit batch that will be sent to the recipient and the jurisdiction in
 * which the credits will be retired upon receipt.
 */
export interface MsgSend_SendCreditsSDKType {
    batch_denom: string;
    tradable_amount: string;
    retired_amount: string;
    retirement_jurisdiction: string;
    retirement_reason: string;
}
/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponse {
}
export interface MsgSendResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgSendResponse";
    value: Uint8Array;
}
/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponseAmino {
}
export interface MsgSendResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgSendResponse";
    value: MsgSendResponseAmino;
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
export interface MsgRetireProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgRetire";
    value: Uint8Array;
}
/** MsgRetire is the Msg/Retire request type. */
export interface MsgRetireAmino {
    /** owner is the address of the account that owns the credits being retired. */
    owner?: string;
    /** credits specifies a credit batch and the number of credits being retired. */
    credits?: CreditsAmino[];
    /**
     * jurisdiction is the jurisdiction of the credit owner. A jurisdiction has
     * the format: <country-code>[-<sub-national-code>[ <postal-code>]]
     * The country-code must be 2 alphabetic characters, the sub-national-code
     * can be 1-3 alphanumeric characters, and the postal-code can be up to 64
     * alphanumeric characters. Only the country-code is required, while the
     * sub-national-code and postal-code are optional and can be added for
     * increased precision.
     */
    jurisdiction?: string;
    /**
     * reason is any arbitrary string that specifies the reason for retiring
     * credits.
     *
     * Since Revision 2
     */
    reason?: string;
}
export interface MsgRetireAminoMsg {
    type: "regen/MsgRetire";
    value: MsgRetireAmino;
}
/** MsgRetire is the Msg/Retire request type. */
export interface MsgRetireSDKType {
    owner: string;
    credits: CreditsSDKType[];
    jurisdiction: string;
    reason: string;
}
/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponse {
}
export interface MsgRetireResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgRetireResponse";
    value: Uint8Array;
}
/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponseAmino {
}
export interface MsgRetireResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgRetireResponse";
    value: MsgRetireResponseAmino;
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
export interface MsgCancelProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgCancel";
    value: Uint8Array;
}
/** MsgCancel is the Msg/Cancel request type. */
export interface MsgCancelAmino {
    /** owner is the address of the account that owns the credits being cancelled. */
    owner?: string;
    /** credits specifies a credit batch and the number of credits being cancelled. */
    credits?: CreditsAmino[];
    /**
     * reason is any arbitrary string that specifies the reason for cancelling
     * credits.
     */
    reason?: string;
}
export interface MsgCancelAminoMsg {
    type: "regen/MsgCancel";
    value: MsgCancelAmino;
}
/** MsgCancel is the Msg/Cancel request type. */
export interface MsgCancelSDKType {
    owner: string;
    credits: CreditsSDKType[];
    reason: string;
}
/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponse {
}
export interface MsgCancelResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgCancelResponse";
    value: Uint8Array;
}
/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponseAmino {
}
export interface MsgCancelResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgCancelResponse";
    value: MsgCancelResponseAmino;
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
export interface MsgUpdateClassAdminProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin";
    value: Uint8Array;
}
/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */
export interface MsgUpdateClassAdminAmino {
    /**
     * admin is the address of the account that is currently the admin of the
     * credit class.
     */
    admin?: string;
    /** class_id is the unique identifier of the credit class. */
    class_id?: string;
    /**
     * new_admin is the address of the account that will become the new admin of
     * the credit class.
     */
    new_admin?: string;
}
export interface MsgUpdateClassAdminAminoMsg {
    type: "regen/MsgUpdateClassAdmin";
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
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdminResponse";
    value: Uint8Array;
}
/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */
export interface MsgUpdateClassAdminResponseAmino {
}
export interface MsgUpdateClassAdminResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateClassAdminResponse";
    value: MsgUpdateClassAdminResponseAmino;
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
export interface MsgUpdateClassIssuersProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers";
    value: Uint8Array;
}
/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */
export interface MsgUpdateClassIssuersAmino {
    /** admin is the address of the account that is the admin of the credit class. */
    admin?: string;
    /** class_id is the unique identifier of the credit class. */
    class_id?: string;
    /**
     * add_issuers are the addresses of the accounts that will be added to the
     * list of approved credit class issuers.
     */
    add_issuers?: string[];
    /**
     * remove_issuers are the addresses of the accounts that will be removed from
     * the list of approved credit class issuers.
     */
    remove_issuers?: string[];
}
export interface MsgUpdateClassIssuersAminoMsg {
    type: "regen/MsgUpdateClassIssuers";
    value: MsgUpdateClassIssuersAmino;
}
/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */
export interface MsgUpdateClassIssuersSDKType {
    admin: string;
    class_id: string;
    add_issuers: string[];
    remove_issuers: string[];
}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */
export interface MsgUpdateClassIssuersResponse {
}
export interface MsgUpdateClassIssuersResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuersResponse";
    value: Uint8Array;
}
/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */
export interface MsgUpdateClassIssuersResponseAmino {
}
export interface MsgUpdateClassIssuersResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateClassIssuersResponse";
    value: MsgUpdateClassIssuersResponseAmino;
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
export interface MsgUpdateClassMetadataProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata";
    value: Uint8Array;
}
/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */
export interface MsgUpdateClassMetadataAmino {
    /** admin is the address of the account that is the admin of the credit class. */
    admin?: string;
    /** class_id is the unique identifier of the credit class. */
    class_id?: string;
    /**
     * new_metadata is new metadata that will replace the existing metadata. It
     * can be any arbitrary string with a maximum length of 256 characters that
     * includes or references the metadata to attach to the credit class.
     */
    new_metadata?: string;
}
export interface MsgUpdateClassMetadataAminoMsg {
    type: "regen/MsgUpdateClassMetadata";
    value: MsgUpdateClassMetadataAmino;
}
/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */
export interface MsgUpdateClassMetadataSDKType {
    admin: string;
    class_id: string;
    new_metadata: string;
}
/** MsgUpdateClassMetadataResponse is the Msg/UpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponse {
}
export interface MsgUpdateClassMetadataResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadataResponse";
    value: Uint8Array;
}
/** MsgUpdateClassMetadataResponse is the Msg/UpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponseAmino {
}
export interface MsgUpdateClassMetadataResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateClassMetadataResponse";
    value: MsgUpdateClassMetadataResponseAmino;
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
export interface MsgUpdateProjectAdminProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin";
    value: Uint8Array;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin request type. */
export interface MsgUpdateProjectAdminAmino {
    /**
     * admin is the address of the account that is the currently the admin of the
     * project.
     */
    admin?: string;
    /** project_id is the unique identifier of the project. */
    project_id?: string;
    /**
     * new_admin is the address of the account that will become the new admin of
     * the project.
     */
    new_admin?: string;
}
export interface MsgUpdateProjectAdminAminoMsg {
    type: "regen/MsgUpdateProjectAdmin";
    value: MsgUpdateProjectAdminAmino;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin request type. */
export interface MsgUpdateProjectAdminSDKType {
    admin: string;
    project_id: string;
    new_admin: string;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin response type. */
export interface MsgUpdateProjectAdminResponse {
}
export interface MsgUpdateProjectAdminResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdminResponse";
    value: Uint8Array;
}
/** MsgUpdateProjectAdmin is the Msg/UpdateProjectAdmin response type. */
export interface MsgUpdateProjectAdminResponseAmino {
}
export interface MsgUpdateProjectAdminResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateProjectAdminResponse";
    value: MsgUpdateProjectAdminResponseAmino;
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
export interface MsgUpdateProjectMetadataProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata";
    value: Uint8Array;
}
/** MsgUpdateProjectMetadata is the Msg/UpdateProjectMetadata request type. */
export interface MsgUpdateProjectMetadataAmino {
    /** admin is the address of the account that is the admin of the project. */
    admin?: string;
    /** project_id is the unique identifier of the project. */
    project_id?: string;
    /**
     * new_metadata is new metadata that will replace the existing metadata. It
     * can be any arbitrary string with a maximum length of 256 characters that
     * includes or references the metadata to attach to the project.
     */
    new_metadata?: string;
}
export interface MsgUpdateProjectMetadataAminoMsg {
    type: "regen/MsgUpdateProjectMetadata";
    value: MsgUpdateProjectMetadataAmino;
}
/** MsgUpdateProjectMetadata is the Msg/UpdateProjectMetadata request type. */
export interface MsgUpdateProjectMetadataSDKType {
    admin: string;
    project_id: string;
    new_metadata: string;
}
/**
 * MsgUpdateProjectMetadataResponse is the Msg/UpdateProjectMetadataResponse
 * response type.
 */
export interface MsgUpdateProjectMetadataResponse {
}
export interface MsgUpdateProjectMetadataResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadataResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateProjectMetadataResponse is the Msg/UpdateProjectMetadataResponse
 * response type.
 */
export interface MsgUpdateProjectMetadataResponseAmino {
}
export interface MsgUpdateProjectMetadataResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateProjectMetadataResponse";
    value: MsgUpdateProjectMetadataResponseAmino;
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
export interface MsgBridgeProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgBridge";
    value: Uint8Array;
}
/** MsgBridge is the Msg/Bridge request type. */
export interface MsgBridgeAmino {
    /** owner is the address of the account that owns the credits being bridged. */
    owner?: string;
    /** target is the name of the target chain or registry. */
    target?: string;
    /** recipient is the address of the account receiving the bridged credits. */
    recipient?: string;
    /** credits specifies a credit batch and the number of credits being bridged. */
    credits?: CreditsAmino[];
}
export interface MsgBridgeAminoMsg {
    type: "regen/MsgBridge";
    value: MsgBridgeAmino;
}
/** MsgBridge is the Msg/Bridge request type. */
export interface MsgBridgeSDKType {
    owner: string;
    target: string;
    recipient: string;
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
export interface MsgUpdateBatchMetadataProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadata";
    value: Uint8Array;
}
/**
 * MsgUpdateBatchMetadata is the Msg/UpdateBatchMetadata request type.
 *
 * Since Revision 2
 */
export interface MsgUpdateBatchMetadataAmino {
    /** issuer is the address of the account that is the issuer of the batch. */
    issuer?: string;
    /** batch_denom is the unique identifier of the batch. */
    batch_denom?: string;
    /**
     * new_metadata is new metadata that will replace the existing metadata. It
     * can be any arbitrary string with a maximum length of 256 characters that
     * includes or references the metadata to attach to the batch.
     */
    new_metadata?: string;
}
export interface MsgUpdateBatchMetadataAminoMsg {
    type: "regen/MsgUpdateBatchMetadata";
    value: MsgUpdateBatchMetadataAmino;
}
/**
 * MsgUpdateBatchMetadata is the Msg/UpdateBatchMetadata request type.
 *
 * Since Revision 2
 */
export interface MsgUpdateBatchMetadataSDKType {
    issuer: string;
    batch_denom: string;
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
export interface MsgUpdateBatchMetadataResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadataResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateBatchMetadataResponse is the Msg/UpdateBatchMetadataResponse
 * response type.
 *
 * Since Revision 2
 */
export interface MsgUpdateBatchMetadataResponseAmino {
}
export interface MsgUpdateBatchMetadataResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateBatchMetadataResponse";
    value: MsgUpdateBatchMetadataResponseAmino;
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
export interface MsgBridgeResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgBridgeResponse";
    value: Uint8Array;
}
/** MsgBridgeResponse is the Msg/Bridge response type. */
export interface MsgBridgeResponseAmino {
}
export interface MsgBridgeResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgBridgeResponse";
    value: MsgBridgeResponseAmino;
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
export interface MsgBridgeReceiveProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgBridgeReceive";
    value: Uint8Array;
}
/** MsgBridgeReceive is the Msg/BridgeReceive request type. */
export interface MsgBridgeReceiveAmino {
    /** issuer is the account address of the service bridging the credits. */
    issuer?: string;
    /**
     * class_id is the unique identifier of the credit class within which the
     * project and credit batch already exist or will be created.
     */
    class_id?: string;
    /** project defines the project information for the bridged credits. */
    project?: MsgBridgeReceive_ProjectAmino;
    /** batch defines the credit batch information for the bridged credits. */
    batch?: MsgBridgeReceive_BatchAmino;
    /**
     * origin_tx is a reference to a transaction which caused the transfer from
     * another chain or registry.
     */
    origin_tx?: OriginTxAmino;
}
export interface MsgBridgeReceiveAminoMsg {
    type: "regen/MsgBridgeReceive";
    value: MsgBridgeReceiveAmino;
}
/** MsgBridgeReceive is the Msg/BridgeReceive request type. */
export interface MsgBridgeReceiveSDKType {
    issuer: string;
    class_id: string;
    project?: MsgBridgeReceive_ProjectSDKType;
    batch?: MsgBridgeReceive_BatchSDKType;
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
    startDate?: Date;
    /**
     * end_date is the end of the period during which this credit batch was
     * quantified and verified.
     */
    endDate?: Date;
    /** metadata is the metadata for the credit batch. */
    metadata: string;
}
export interface MsgBridgeReceive_BatchProtoMsg {
    typeUrl: "/regen.ecocredit.v1.Batch";
    value: Uint8Array;
}
/**
 * Batch defines the credit batch information for the bridged credits. This
 * information will be used to create a credit batch or to dynamically mint
 * credits to an existing credit batch.
 */
export interface MsgBridgeReceive_BatchAmino {
    /** recipient is the recipient of the bridged credits. */
    recipient?: string;
    /** amount is the amount of credits being bridged. */
    amount?: string;
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
    /** metadata is the metadata for the credit batch. */
    metadata?: string;
}
export interface MsgBridgeReceive_BatchAminoMsg {
    type: "/regen.ecocredit.v1.Batch";
    value: MsgBridgeReceive_BatchAmino;
}
/**
 * Batch defines the credit batch information for the bridged credits. This
 * information will be used to create a credit batch or to dynamically mint
 * credits to an existing credit batch.
 */
export interface MsgBridgeReceive_BatchSDKType {
    recipient: string;
    amount: string;
    start_date?: Date;
    end_date?: Date;
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
export interface MsgBridgeReceive_ProjectProtoMsg {
    typeUrl: "/regen.ecocredit.v1.Project";
    value: Uint8Array;
}
/**
 * Project defines the project information for the bridged credits. This
 * information will be used to find an existing project or to create a new
 * project if a project with the same reference id does not already exist.
 */
export interface MsgBridgeReceive_ProjectAmino {
    /** reference_id is the reference id of the project. */
    reference_id?: string;
    /** jurisdiction is the project jurisdiction. */
    jurisdiction?: string;
    /** metadata is the metadata for the project. */
    metadata?: string;
}
export interface MsgBridgeReceive_ProjectAminoMsg {
    type: "/regen.ecocredit.v1.Project";
    value: MsgBridgeReceive_ProjectAmino;
}
/**
 * Project defines the project information for the bridged credits. This
 * information will be used to find an existing project or to create a new
 * project if a project with the same reference id does not already exist.
 */
export interface MsgBridgeReceive_ProjectSDKType {
    reference_id: string;
    jurisdiction: string;
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
export interface MsgBridgeReceiveResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgBridgeReceiveResponse";
    value: Uint8Array;
}
/** MsgBridgeReceiveResponse is the Msg/BridgeReceive response type. */
export interface MsgBridgeReceiveResponseAmino {
    /**
     * batch_denom is the unique identifier of the credit batch either created
     * or within which the credits were dynamically minted.
     */
    batch_denom?: string;
    /**
     * project_id is the unique identifier of the project that was either created
     * or the existing project within which the credit batch exists.
     */
    project_id?: string;
}
export interface MsgBridgeReceiveResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgBridgeReceiveResponse";
    value: MsgBridgeReceiveResponseAmino;
}
/** MsgBridgeReceiveResponse is the Msg/BridgeReceive response type. */
export interface MsgBridgeReceiveResponseSDKType {
    batch_denom: string;
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
export interface MsgAddClassCreatorProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgAddClassCreator";
    value: Uint8Array;
}
/**
 * MsgAddClassCreator is the Msg/AddClassCreator request type.
 *
 * Since Revision 2
 */
export interface MsgAddClassCreatorAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /** creator is the address to add to the class creator list. */
    creator?: string;
}
export interface MsgAddClassCreatorAminoMsg {
    type: "regen/MsgAddClassCreator";
    value: MsgAddClassCreatorAmino;
}
/**
 * MsgAddClassCreator is the Msg/AddClassCreator request type.
 *
 * Since Revision 2
 */
export interface MsgAddClassCreatorSDKType {
    authority: string;
    creator: string;
}
/**
 * MsgAddClassCreatorResponse is the Msg/AddClassCreator response type.
 *
 * Since Revision 2
 */
export interface MsgAddClassCreatorResponse {
}
export interface MsgAddClassCreatorResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgAddClassCreatorResponse";
    value: Uint8Array;
}
/**
 * MsgAddClassCreatorResponse is the Msg/AddClassCreator response type.
 *
 * Since Revision 2
 */
export interface MsgAddClassCreatorResponseAmino {
}
export interface MsgAddClassCreatorResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgAddClassCreatorResponse";
    value: MsgAddClassCreatorResponseAmino;
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
export interface MsgSetClassCreatorAllowlistProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist";
    value: Uint8Array;
}
/**
 * MsgSetClassCreatorAllowlist is the Msg/SetClassCreatorAllowlist request
 * type.
 *
 * Since Revision 2
 */
export interface MsgSetClassCreatorAllowlistAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /** enabled defines the boolean value to set the allowlist on or off. */
    enabled?: boolean;
}
export interface MsgSetClassCreatorAllowlistAminoMsg {
    type: "regen/MsgSetClassCreatorAllowlist";
    value: MsgSetClassCreatorAllowlistAmino;
}
/**
 * MsgSetClassCreatorAllowlist is the Msg/SetClassCreatorAllowlist request
 * type.
 *
 * Since Revision 2
 */
export interface MsgSetClassCreatorAllowlistSDKType {
    authority: string;
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
export interface MsgSetClassCreatorAllowlistResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlistResponse";
    value: Uint8Array;
}
/**
 * MsgSetClassCreatorAllowlistResponse is the Msg/SetClassCreatorAllowlist
 * response type.
 *
 * Since Revision 2
 */
export interface MsgSetClassCreatorAllowlistResponseAmino {
}
export interface MsgSetClassCreatorAllowlistResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlistResponse";
    value: MsgSetClassCreatorAllowlistResponseAmino;
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
export interface MsgRemoveClassCreatorProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreator";
    value: Uint8Array;
}
/**
 * MsgRemoveClassCreator is the Msg/RemoveClassCreator request type.
 *
 * Since Revision 2
 */
export interface MsgRemoveClassCreatorAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /** creator is the address to remove from the class creator list. */
    creator?: string;
}
export interface MsgRemoveClassCreatorAminoMsg {
    type: "regen/MsgRemoveClassCreator";
    value: MsgRemoveClassCreatorAmino;
}
/**
 * MsgRemoveClassCreator is the Msg/RemoveClassCreator request type.
 *
 * Since Revision 2
 */
export interface MsgRemoveClassCreatorSDKType {
    authority: string;
    creator: string;
}
/**
 * MsgRemoveClassCreatorResponse is the Msg/RemoveClasssCreator response type.
 *
 * Since Revision 2
 */
export interface MsgRemoveClassCreatorResponse {
}
export interface MsgRemoveClassCreatorResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreatorResponse";
    value: Uint8Array;
}
/**
 * MsgRemoveClassCreatorResponse is the Msg/RemoveClasssCreator response type.
 *
 * Since Revision 2
 */
export interface MsgRemoveClassCreatorResponseAmino {
}
export interface MsgRemoveClassCreatorResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgRemoveClassCreatorResponse";
    value: MsgRemoveClassCreatorResponseAmino;
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
export interface MsgUpdateClassFeeProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFee";
    value: Uint8Array;
}
/**
 * MsgUpdateClassFee is the Msg/UpdateClassFee request type.
 *
 * Since Revision 2
 */
export interface MsgUpdateClassFeeAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /**
     * fee is the credit class creation fee. If not set, the credit class creation
     * fee will be removed and no fee will be required to create a credit class.
     */
    fee?: CoinAmino;
}
export interface MsgUpdateClassFeeAminoMsg {
    type: "regen/MsgUpdateClassFee";
    value: MsgUpdateClassFeeAmino;
}
/**
 * MsgUpdateClassFee is the Msg/UpdateClassFee request type.
 *
 * Since Revision 2
 */
export interface MsgUpdateClassFeeSDKType {
    authority: string;
    fee?: CoinSDKType;
}
/**
 * MsgUpdateClassFeeResponse is the Msg/UpdateClassFee response type.
 *
 * Since Revision 2
 */
export interface MsgUpdateClassFeeResponse {
}
export interface MsgUpdateClassFeeResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFeeResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateClassFeeResponse is the Msg/UpdateClassFee response type.
 *
 * Since Revision 2
 */
export interface MsgUpdateClassFeeResponseAmino {
}
export interface MsgUpdateClassFeeResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgUpdateClassFeeResponse";
    value: MsgUpdateClassFeeResponseAmino;
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
export interface MsgAddAllowedBridgeChainProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChain";
    value: Uint8Array;
}
/**
 * MsgAddAllowedBridgeChain is the Msg/AddAllowedBridgeChain request type.
 *
 * Since Revision 2
 */
export interface MsgAddAllowedBridgeChainAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /**
     * chain_name is the name of the chain to allow bridging of ecocredits to
     * (i.e. polygon, ethereum, celo).
     */
    chain_name?: string;
}
export interface MsgAddAllowedBridgeChainAminoMsg {
    type: "regen/MsgAddAllowedBridgeChain";
    value: MsgAddAllowedBridgeChainAmino;
}
/**
 * MsgAddAllowedBridgeChain is the Msg/AddAllowedBridgeChain request type.
 *
 * Since Revision 2
 */
export interface MsgAddAllowedBridgeChainSDKType {
    authority: string;
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
export interface MsgAddAllowedBridgeChainResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChainResponse";
    value: Uint8Array;
}
/**
 * MsgAddAllowedBridgeChainResponse is the Msg/AddAllowedBridgeChain response
 * type.
 *
 * Since Revision 2
 */
export interface MsgAddAllowedBridgeChainResponseAmino {
}
export interface MsgAddAllowedBridgeChainResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgAddAllowedBridgeChainResponse";
    value: MsgAddAllowedBridgeChainResponseAmino;
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
export interface MsgRemoveAllowedBridgeChainProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain";
    value: Uint8Array;
}
/**
 * MsgRemoveAllowedBridgeChain is the Msg/RemoveAllowedBridgeChain request type.
 *
 * Since Revision 2
 */
export interface MsgRemoveAllowedBridgeChainAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /**
     * chain_name is the name of the chain to remove from the list of allowed
     * chains to bridge ecocredits to (i.e. polygon, ethereum, celo).
     */
    chain_name?: string;
}
export interface MsgRemoveAllowedBridgeChainAminoMsg {
    type: "regen/MsgRemoveAllowedBridgeChain";
    value: MsgRemoveAllowedBridgeChainAmino;
}
/**
 * MsgRemoveAllowedBridgeChain is the Msg/RemoveAllowedBridgeChain request type.
 *
 * Since Revision 2
 */
export interface MsgRemoveAllowedBridgeChainSDKType {
    authority: string;
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
export interface MsgRemoveAllowedBridgeChainResponseProtoMsg {
    typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChainResponse";
    value: Uint8Array;
}
/**
 * MsgRemoveAllowedBridgeChainResponse is the Msg/RemoveAllowedBridgeChain
 * response type.
 *
 * Since Revision 2
 */
export interface MsgRemoveAllowedBridgeChainResponseAmino {
}
export interface MsgRemoveAllowedBridgeChainResponseAminoMsg {
    type: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChainResponse";
    value: MsgRemoveAllowedBridgeChainResponseAmino;
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
    typeUrl: string;
    encode(message: MsgAddCreditType, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddCreditType;
    fromPartial(object: Partial<MsgAddCreditType>): MsgAddCreditType;
    fromAmino(object: MsgAddCreditTypeAmino): MsgAddCreditType;
    toAmino(message: MsgAddCreditType): MsgAddCreditTypeAmino;
    fromAminoMsg(object: MsgAddCreditTypeAminoMsg): MsgAddCreditType;
    toAminoMsg(message: MsgAddCreditType): MsgAddCreditTypeAminoMsg;
    fromProtoMsg(message: MsgAddCreditTypeProtoMsg): MsgAddCreditType;
    toProto(message: MsgAddCreditType): Uint8Array;
    toProtoMsg(message: MsgAddCreditType): MsgAddCreditTypeProtoMsg;
};
export declare const MsgAddCreditTypeResponse: {
    typeUrl: string;
    encode(_: MsgAddCreditTypeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddCreditTypeResponse;
    fromPartial(_: Partial<MsgAddCreditTypeResponse>): MsgAddCreditTypeResponse;
    fromAmino(_: MsgAddCreditTypeResponseAmino): MsgAddCreditTypeResponse;
    toAmino(_: MsgAddCreditTypeResponse): MsgAddCreditTypeResponseAmino;
    fromAminoMsg(object: MsgAddCreditTypeResponseAminoMsg): MsgAddCreditTypeResponse;
    fromProtoMsg(message: MsgAddCreditTypeResponseProtoMsg): MsgAddCreditTypeResponse;
    toProto(message: MsgAddCreditTypeResponse): Uint8Array;
    toProtoMsg(message: MsgAddCreditTypeResponse): MsgAddCreditTypeResponseProtoMsg;
};
export declare const MsgCreateClass: {
    typeUrl: string;
    encode(message: MsgCreateClass, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClass;
    fromPartial(object: Partial<MsgCreateClass>): MsgCreateClass;
    fromAmino(object: MsgCreateClassAmino): MsgCreateClass;
    toAmino(message: MsgCreateClass): MsgCreateClassAmino;
    fromAminoMsg(object: MsgCreateClassAminoMsg): MsgCreateClass;
    toAminoMsg(message: MsgCreateClass): MsgCreateClassAminoMsg;
    fromProtoMsg(message: MsgCreateClassProtoMsg): MsgCreateClass;
    toProto(message: MsgCreateClass): Uint8Array;
    toProtoMsg(message: MsgCreateClass): MsgCreateClassProtoMsg;
};
export declare const MsgCreateClassResponse: {
    typeUrl: string;
    encode(message: MsgCreateClassResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClassResponse;
    fromPartial(object: Partial<MsgCreateClassResponse>): MsgCreateClassResponse;
    fromAmino(object: MsgCreateClassResponseAmino): MsgCreateClassResponse;
    toAmino(message: MsgCreateClassResponse): MsgCreateClassResponseAmino;
    fromAminoMsg(object: MsgCreateClassResponseAminoMsg): MsgCreateClassResponse;
    fromProtoMsg(message: MsgCreateClassResponseProtoMsg): MsgCreateClassResponse;
    toProto(message: MsgCreateClassResponse): Uint8Array;
    toProtoMsg(message: MsgCreateClassResponse): MsgCreateClassResponseProtoMsg;
};
export declare const MsgCreateProject: {
    typeUrl: string;
    encode(message: MsgCreateProject, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateProject;
    fromPartial(object: Partial<MsgCreateProject>): MsgCreateProject;
    fromAmino(object: MsgCreateProjectAmino): MsgCreateProject;
    toAmino(message: MsgCreateProject): MsgCreateProjectAmino;
    fromAminoMsg(object: MsgCreateProjectAminoMsg): MsgCreateProject;
    toAminoMsg(message: MsgCreateProject): MsgCreateProjectAminoMsg;
    fromProtoMsg(message: MsgCreateProjectProtoMsg): MsgCreateProject;
    toProto(message: MsgCreateProject): Uint8Array;
    toProtoMsg(message: MsgCreateProject): MsgCreateProjectProtoMsg;
};
export declare const MsgCreateProjectResponse: {
    typeUrl: string;
    encode(message: MsgCreateProjectResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateProjectResponse;
    fromPartial(object: Partial<MsgCreateProjectResponse>): MsgCreateProjectResponse;
    fromAmino(object: MsgCreateProjectResponseAmino): MsgCreateProjectResponse;
    toAmino(message: MsgCreateProjectResponse): MsgCreateProjectResponseAmino;
    fromAminoMsg(object: MsgCreateProjectResponseAminoMsg): MsgCreateProjectResponse;
    fromProtoMsg(message: MsgCreateProjectResponseProtoMsg): MsgCreateProjectResponse;
    toProto(message: MsgCreateProjectResponse): Uint8Array;
    toProtoMsg(message: MsgCreateProjectResponse): MsgCreateProjectResponseProtoMsg;
};
export declare const MsgCreateBatch: {
    typeUrl: string;
    encode(message: MsgCreateBatch, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBatch;
    fromPartial(object: Partial<MsgCreateBatch>): MsgCreateBatch;
    fromAmino(object: MsgCreateBatchAmino): MsgCreateBatch;
    toAmino(message: MsgCreateBatch): MsgCreateBatchAmino;
    fromAminoMsg(object: MsgCreateBatchAminoMsg): MsgCreateBatch;
    toAminoMsg(message: MsgCreateBatch): MsgCreateBatchAminoMsg;
    fromProtoMsg(message: MsgCreateBatchProtoMsg): MsgCreateBatch;
    toProto(message: MsgCreateBatch): Uint8Array;
    toProtoMsg(message: MsgCreateBatch): MsgCreateBatchProtoMsg;
};
export declare const MsgCreateBatchResponse: {
    typeUrl: string;
    encode(message: MsgCreateBatchResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBatchResponse;
    fromPartial(object: Partial<MsgCreateBatchResponse>): MsgCreateBatchResponse;
    fromAmino(object: MsgCreateBatchResponseAmino): MsgCreateBatchResponse;
    toAmino(message: MsgCreateBatchResponse): MsgCreateBatchResponseAmino;
    fromAminoMsg(object: MsgCreateBatchResponseAminoMsg): MsgCreateBatchResponse;
    fromProtoMsg(message: MsgCreateBatchResponseProtoMsg): MsgCreateBatchResponse;
    toProto(message: MsgCreateBatchResponse): Uint8Array;
    toProtoMsg(message: MsgCreateBatchResponse): MsgCreateBatchResponseProtoMsg;
};
export declare const MsgMintBatchCredits: {
    typeUrl: string;
    encode(message: MsgMintBatchCredits, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMintBatchCredits;
    fromPartial(object: Partial<MsgMintBatchCredits>): MsgMintBatchCredits;
    fromAmino(object: MsgMintBatchCreditsAmino): MsgMintBatchCredits;
    toAmino(message: MsgMintBatchCredits): MsgMintBatchCreditsAmino;
    fromAminoMsg(object: MsgMintBatchCreditsAminoMsg): MsgMintBatchCredits;
    toAminoMsg(message: MsgMintBatchCredits): MsgMintBatchCreditsAminoMsg;
    fromProtoMsg(message: MsgMintBatchCreditsProtoMsg): MsgMintBatchCredits;
    toProto(message: MsgMintBatchCredits): Uint8Array;
    toProtoMsg(message: MsgMintBatchCredits): MsgMintBatchCreditsProtoMsg;
};
export declare const MsgMintBatchCreditsResponse: {
    typeUrl: string;
    encode(_: MsgMintBatchCreditsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMintBatchCreditsResponse;
    fromPartial(_: Partial<MsgMintBatchCreditsResponse>): MsgMintBatchCreditsResponse;
    fromAmino(_: MsgMintBatchCreditsResponseAmino): MsgMintBatchCreditsResponse;
    toAmino(_: MsgMintBatchCreditsResponse): MsgMintBatchCreditsResponseAmino;
    fromAminoMsg(object: MsgMintBatchCreditsResponseAminoMsg): MsgMintBatchCreditsResponse;
    fromProtoMsg(message: MsgMintBatchCreditsResponseProtoMsg): MsgMintBatchCreditsResponse;
    toProto(message: MsgMintBatchCreditsResponse): Uint8Array;
    toProtoMsg(message: MsgMintBatchCreditsResponse): MsgMintBatchCreditsResponseProtoMsg;
};
export declare const MsgSealBatch: {
    typeUrl: string;
    encode(message: MsgSealBatch, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSealBatch;
    fromPartial(object: Partial<MsgSealBatch>): MsgSealBatch;
    fromAmino(object: MsgSealBatchAmino): MsgSealBatch;
    toAmino(message: MsgSealBatch): MsgSealBatchAmino;
    fromAminoMsg(object: MsgSealBatchAminoMsg): MsgSealBatch;
    toAminoMsg(message: MsgSealBatch): MsgSealBatchAminoMsg;
    fromProtoMsg(message: MsgSealBatchProtoMsg): MsgSealBatch;
    toProto(message: MsgSealBatch): Uint8Array;
    toProtoMsg(message: MsgSealBatch): MsgSealBatchProtoMsg;
};
export declare const MsgSealBatchResponse: {
    typeUrl: string;
    encode(_: MsgSealBatchResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSealBatchResponse;
    fromPartial(_: Partial<MsgSealBatchResponse>): MsgSealBatchResponse;
    fromAmino(_: MsgSealBatchResponseAmino): MsgSealBatchResponse;
    toAmino(_: MsgSealBatchResponse): MsgSealBatchResponseAmino;
    fromAminoMsg(object: MsgSealBatchResponseAminoMsg): MsgSealBatchResponse;
    fromProtoMsg(message: MsgSealBatchResponseProtoMsg): MsgSealBatchResponse;
    toProto(message: MsgSealBatchResponse): Uint8Array;
    toProtoMsg(message: MsgSealBatchResponse): MsgSealBatchResponseProtoMsg;
};
export declare const MsgSend: {
    typeUrl: string;
    encode(message: MsgSend, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSend;
    fromPartial(object: Partial<MsgSend>): MsgSend;
    fromAmino(object: MsgSendAmino): MsgSend;
    toAmino(message: MsgSend): MsgSendAmino;
    fromAminoMsg(object: MsgSendAminoMsg): MsgSend;
    toAminoMsg(message: MsgSend): MsgSendAminoMsg;
    fromProtoMsg(message: MsgSendProtoMsg): MsgSend;
    toProto(message: MsgSend): Uint8Array;
    toProtoMsg(message: MsgSend): MsgSendProtoMsg;
};
export declare const MsgSend_SendCredits: {
    typeUrl: string;
    encode(message: MsgSend_SendCredits, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSend_SendCredits;
    fromPartial(object: Partial<MsgSend_SendCredits>): MsgSend_SendCredits;
    fromAmino(object: MsgSend_SendCreditsAmino): MsgSend_SendCredits;
    toAmino(message: MsgSend_SendCredits): MsgSend_SendCreditsAmino;
    fromAminoMsg(object: MsgSend_SendCreditsAminoMsg): MsgSend_SendCredits;
    fromProtoMsg(message: MsgSend_SendCreditsProtoMsg): MsgSend_SendCredits;
    toProto(message: MsgSend_SendCredits): Uint8Array;
    toProtoMsg(message: MsgSend_SendCredits): MsgSend_SendCreditsProtoMsg;
};
export declare const MsgSendResponse: {
    typeUrl: string;
    encode(_: MsgSendResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSendResponse;
    fromPartial(_: Partial<MsgSendResponse>): MsgSendResponse;
    fromAmino(_: MsgSendResponseAmino): MsgSendResponse;
    toAmino(_: MsgSendResponse): MsgSendResponseAmino;
    fromAminoMsg(object: MsgSendResponseAminoMsg): MsgSendResponse;
    fromProtoMsg(message: MsgSendResponseProtoMsg): MsgSendResponse;
    toProto(message: MsgSendResponse): Uint8Array;
    toProtoMsg(message: MsgSendResponse): MsgSendResponseProtoMsg;
};
export declare const MsgRetire: {
    typeUrl: string;
    encode(message: MsgRetire, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRetire;
    fromPartial(object: Partial<MsgRetire>): MsgRetire;
    fromAmino(object: MsgRetireAmino): MsgRetire;
    toAmino(message: MsgRetire): MsgRetireAmino;
    fromAminoMsg(object: MsgRetireAminoMsg): MsgRetire;
    toAminoMsg(message: MsgRetire): MsgRetireAminoMsg;
    fromProtoMsg(message: MsgRetireProtoMsg): MsgRetire;
    toProto(message: MsgRetire): Uint8Array;
    toProtoMsg(message: MsgRetire): MsgRetireProtoMsg;
};
export declare const MsgRetireResponse: {
    typeUrl: string;
    encode(_: MsgRetireResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRetireResponse;
    fromPartial(_: Partial<MsgRetireResponse>): MsgRetireResponse;
    fromAmino(_: MsgRetireResponseAmino): MsgRetireResponse;
    toAmino(_: MsgRetireResponse): MsgRetireResponseAmino;
    fromAminoMsg(object: MsgRetireResponseAminoMsg): MsgRetireResponse;
    fromProtoMsg(message: MsgRetireResponseProtoMsg): MsgRetireResponse;
    toProto(message: MsgRetireResponse): Uint8Array;
    toProtoMsg(message: MsgRetireResponse): MsgRetireResponseProtoMsg;
};
export declare const MsgCancel: {
    typeUrl: string;
    encode(message: MsgCancel, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCancel;
    fromPartial(object: Partial<MsgCancel>): MsgCancel;
    fromAmino(object: MsgCancelAmino): MsgCancel;
    toAmino(message: MsgCancel): MsgCancelAmino;
    fromAminoMsg(object: MsgCancelAminoMsg): MsgCancel;
    toAminoMsg(message: MsgCancel): MsgCancelAminoMsg;
    fromProtoMsg(message: MsgCancelProtoMsg): MsgCancel;
    toProto(message: MsgCancel): Uint8Array;
    toProtoMsg(message: MsgCancel): MsgCancelProtoMsg;
};
export declare const MsgCancelResponse: {
    typeUrl: string;
    encode(_: MsgCancelResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelResponse;
    fromPartial(_: Partial<MsgCancelResponse>): MsgCancelResponse;
    fromAmino(_: MsgCancelResponseAmino): MsgCancelResponse;
    toAmino(_: MsgCancelResponse): MsgCancelResponseAmino;
    fromAminoMsg(object: MsgCancelResponseAminoMsg): MsgCancelResponse;
    fromProtoMsg(message: MsgCancelResponseProtoMsg): MsgCancelResponse;
    toProto(message: MsgCancelResponse): Uint8Array;
    toProtoMsg(message: MsgCancelResponse): MsgCancelResponseProtoMsg;
};
export declare const MsgUpdateClassAdmin: {
    typeUrl: string;
    encode(message: MsgUpdateClassAdmin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassAdmin;
    fromPartial(object: Partial<MsgUpdateClassAdmin>): MsgUpdateClassAdmin;
    fromAmino(object: MsgUpdateClassAdminAmino): MsgUpdateClassAdmin;
    toAmino(message: MsgUpdateClassAdmin): MsgUpdateClassAdminAmino;
    fromAminoMsg(object: MsgUpdateClassAdminAminoMsg): MsgUpdateClassAdmin;
    toAminoMsg(message: MsgUpdateClassAdmin): MsgUpdateClassAdminAminoMsg;
    fromProtoMsg(message: MsgUpdateClassAdminProtoMsg): MsgUpdateClassAdmin;
    toProto(message: MsgUpdateClassAdmin): Uint8Array;
    toProtoMsg(message: MsgUpdateClassAdmin): MsgUpdateClassAdminProtoMsg;
};
export declare const MsgUpdateClassAdminResponse: {
    typeUrl: string;
    encode(_: MsgUpdateClassAdminResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassAdminResponse;
    fromPartial(_: Partial<MsgUpdateClassAdminResponse>): MsgUpdateClassAdminResponse;
    fromAmino(_: MsgUpdateClassAdminResponseAmino): MsgUpdateClassAdminResponse;
    toAmino(_: MsgUpdateClassAdminResponse): MsgUpdateClassAdminResponseAmino;
    fromAminoMsg(object: MsgUpdateClassAdminResponseAminoMsg): MsgUpdateClassAdminResponse;
    fromProtoMsg(message: MsgUpdateClassAdminResponseProtoMsg): MsgUpdateClassAdminResponse;
    toProto(message: MsgUpdateClassAdminResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateClassAdminResponse): MsgUpdateClassAdminResponseProtoMsg;
};
export declare const MsgUpdateClassIssuers: {
    typeUrl: string;
    encode(message: MsgUpdateClassIssuers, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassIssuers;
    fromPartial(object: Partial<MsgUpdateClassIssuers>): MsgUpdateClassIssuers;
    fromAmino(object: MsgUpdateClassIssuersAmino): MsgUpdateClassIssuers;
    toAmino(message: MsgUpdateClassIssuers): MsgUpdateClassIssuersAmino;
    fromAminoMsg(object: MsgUpdateClassIssuersAminoMsg): MsgUpdateClassIssuers;
    toAminoMsg(message: MsgUpdateClassIssuers): MsgUpdateClassIssuersAminoMsg;
    fromProtoMsg(message: MsgUpdateClassIssuersProtoMsg): MsgUpdateClassIssuers;
    toProto(message: MsgUpdateClassIssuers): Uint8Array;
    toProtoMsg(message: MsgUpdateClassIssuers): MsgUpdateClassIssuersProtoMsg;
};
export declare const MsgUpdateClassIssuersResponse: {
    typeUrl: string;
    encode(_: MsgUpdateClassIssuersResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassIssuersResponse;
    fromPartial(_: Partial<MsgUpdateClassIssuersResponse>): MsgUpdateClassIssuersResponse;
    fromAmino(_: MsgUpdateClassIssuersResponseAmino): MsgUpdateClassIssuersResponse;
    toAmino(_: MsgUpdateClassIssuersResponse): MsgUpdateClassIssuersResponseAmino;
    fromAminoMsg(object: MsgUpdateClassIssuersResponseAminoMsg): MsgUpdateClassIssuersResponse;
    fromProtoMsg(message: MsgUpdateClassIssuersResponseProtoMsg): MsgUpdateClassIssuersResponse;
    toProto(message: MsgUpdateClassIssuersResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateClassIssuersResponse): MsgUpdateClassIssuersResponseProtoMsg;
};
export declare const MsgUpdateClassMetadata: {
    typeUrl: string;
    encode(message: MsgUpdateClassMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassMetadata;
    fromPartial(object: Partial<MsgUpdateClassMetadata>): MsgUpdateClassMetadata;
    fromAmino(object: MsgUpdateClassMetadataAmino): MsgUpdateClassMetadata;
    toAmino(message: MsgUpdateClassMetadata): MsgUpdateClassMetadataAmino;
    fromAminoMsg(object: MsgUpdateClassMetadataAminoMsg): MsgUpdateClassMetadata;
    toAminoMsg(message: MsgUpdateClassMetadata): MsgUpdateClassMetadataAminoMsg;
    fromProtoMsg(message: MsgUpdateClassMetadataProtoMsg): MsgUpdateClassMetadata;
    toProto(message: MsgUpdateClassMetadata): Uint8Array;
    toProtoMsg(message: MsgUpdateClassMetadata): MsgUpdateClassMetadataProtoMsg;
};
export declare const MsgUpdateClassMetadataResponse: {
    typeUrl: string;
    encode(_: MsgUpdateClassMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassMetadataResponse;
    fromPartial(_: Partial<MsgUpdateClassMetadataResponse>): MsgUpdateClassMetadataResponse;
    fromAmino(_: MsgUpdateClassMetadataResponseAmino): MsgUpdateClassMetadataResponse;
    toAmino(_: MsgUpdateClassMetadataResponse): MsgUpdateClassMetadataResponseAmino;
    fromAminoMsg(object: MsgUpdateClassMetadataResponseAminoMsg): MsgUpdateClassMetadataResponse;
    fromProtoMsg(message: MsgUpdateClassMetadataResponseProtoMsg): MsgUpdateClassMetadataResponse;
    toProto(message: MsgUpdateClassMetadataResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateClassMetadataResponse): MsgUpdateClassMetadataResponseProtoMsg;
};
export declare const MsgUpdateProjectAdmin: {
    typeUrl: string;
    encode(message: MsgUpdateProjectAdmin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProjectAdmin;
    fromPartial(object: Partial<MsgUpdateProjectAdmin>): MsgUpdateProjectAdmin;
    fromAmino(object: MsgUpdateProjectAdminAmino): MsgUpdateProjectAdmin;
    toAmino(message: MsgUpdateProjectAdmin): MsgUpdateProjectAdminAmino;
    fromAminoMsg(object: MsgUpdateProjectAdminAminoMsg): MsgUpdateProjectAdmin;
    toAminoMsg(message: MsgUpdateProjectAdmin): MsgUpdateProjectAdminAminoMsg;
    fromProtoMsg(message: MsgUpdateProjectAdminProtoMsg): MsgUpdateProjectAdmin;
    toProto(message: MsgUpdateProjectAdmin): Uint8Array;
    toProtoMsg(message: MsgUpdateProjectAdmin): MsgUpdateProjectAdminProtoMsg;
};
export declare const MsgUpdateProjectAdminResponse: {
    typeUrl: string;
    encode(_: MsgUpdateProjectAdminResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProjectAdminResponse;
    fromPartial(_: Partial<MsgUpdateProjectAdminResponse>): MsgUpdateProjectAdminResponse;
    fromAmino(_: MsgUpdateProjectAdminResponseAmino): MsgUpdateProjectAdminResponse;
    toAmino(_: MsgUpdateProjectAdminResponse): MsgUpdateProjectAdminResponseAmino;
    fromAminoMsg(object: MsgUpdateProjectAdminResponseAminoMsg): MsgUpdateProjectAdminResponse;
    fromProtoMsg(message: MsgUpdateProjectAdminResponseProtoMsg): MsgUpdateProjectAdminResponse;
    toProto(message: MsgUpdateProjectAdminResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateProjectAdminResponse): MsgUpdateProjectAdminResponseProtoMsg;
};
export declare const MsgUpdateProjectMetadata: {
    typeUrl: string;
    encode(message: MsgUpdateProjectMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProjectMetadata;
    fromPartial(object: Partial<MsgUpdateProjectMetadata>): MsgUpdateProjectMetadata;
    fromAmino(object: MsgUpdateProjectMetadataAmino): MsgUpdateProjectMetadata;
    toAmino(message: MsgUpdateProjectMetadata): MsgUpdateProjectMetadataAmino;
    fromAminoMsg(object: MsgUpdateProjectMetadataAminoMsg): MsgUpdateProjectMetadata;
    toAminoMsg(message: MsgUpdateProjectMetadata): MsgUpdateProjectMetadataAminoMsg;
    fromProtoMsg(message: MsgUpdateProjectMetadataProtoMsg): MsgUpdateProjectMetadata;
    toProto(message: MsgUpdateProjectMetadata): Uint8Array;
    toProtoMsg(message: MsgUpdateProjectMetadata): MsgUpdateProjectMetadataProtoMsg;
};
export declare const MsgUpdateProjectMetadataResponse: {
    typeUrl: string;
    encode(_: MsgUpdateProjectMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProjectMetadataResponse;
    fromPartial(_: Partial<MsgUpdateProjectMetadataResponse>): MsgUpdateProjectMetadataResponse;
    fromAmino(_: MsgUpdateProjectMetadataResponseAmino): MsgUpdateProjectMetadataResponse;
    toAmino(_: MsgUpdateProjectMetadataResponse): MsgUpdateProjectMetadataResponseAmino;
    fromAminoMsg(object: MsgUpdateProjectMetadataResponseAminoMsg): MsgUpdateProjectMetadataResponse;
    fromProtoMsg(message: MsgUpdateProjectMetadataResponseProtoMsg): MsgUpdateProjectMetadataResponse;
    toProto(message: MsgUpdateProjectMetadataResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateProjectMetadataResponse): MsgUpdateProjectMetadataResponseProtoMsg;
};
export declare const MsgBridge: {
    typeUrl: string;
    encode(message: MsgBridge, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBridge;
    fromPartial(object: Partial<MsgBridge>): MsgBridge;
    fromAmino(object: MsgBridgeAmino): MsgBridge;
    toAmino(message: MsgBridge): MsgBridgeAmino;
    fromAminoMsg(object: MsgBridgeAminoMsg): MsgBridge;
    toAminoMsg(message: MsgBridge): MsgBridgeAminoMsg;
    fromProtoMsg(message: MsgBridgeProtoMsg): MsgBridge;
    toProto(message: MsgBridge): Uint8Array;
    toProtoMsg(message: MsgBridge): MsgBridgeProtoMsg;
};
export declare const MsgUpdateBatchMetadata: {
    typeUrl: string;
    encode(message: MsgUpdateBatchMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateBatchMetadata;
    fromPartial(object: Partial<MsgUpdateBatchMetadata>): MsgUpdateBatchMetadata;
    fromAmino(object: MsgUpdateBatchMetadataAmino): MsgUpdateBatchMetadata;
    toAmino(message: MsgUpdateBatchMetadata): MsgUpdateBatchMetadataAmino;
    fromAminoMsg(object: MsgUpdateBatchMetadataAminoMsg): MsgUpdateBatchMetadata;
    toAminoMsg(message: MsgUpdateBatchMetadata): MsgUpdateBatchMetadataAminoMsg;
    fromProtoMsg(message: MsgUpdateBatchMetadataProtoMsg): MsgUpdateBatchMetadata;
    toProto(message: MsgUpdateBatchMetadata): Uint8Array;
    toProtoMsg(message: MsgUpdateBatchMetadata): MsgUpdateBatchMetadataProtoMsg;
};
export declare const MsgUpdateBatchMetadataResponse: {
    typeUrl: string;
    encode(_: MsgUpdateBatchMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateBatchMetadataResponse;
    fromPartial(_: Partial<MsgUpdateBatchMetadataResponse>): MsgUpdateBatchMetadataResponse;
    fromAmino(_: MsgUpdateBatchMetadataResponseAmino): MsgUpdateBatchMetadataResponse;
    toAmino(_: MsgUpdateBatchMetadataResponse): MsgUpdateBatchMetadataResponseAmino;
    fromAminoMsg(object: MsgUpdateBatchMetadataResponseAminoMsg): MsgUpdateBatchMetadataResponse;
    fromProtoMsg(message: MsgUpdateBatchMetadataResponseProtoMsg): MsgUpdateBatchMetadataResponse;
    toProto(message: MsgUpdateBatchMetadataResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateBatchMetadataResponse): MsgUpdateBatchMetadataResponseProtoMsg;
};
export declare const MsgBridgeResponse: {
    typeUrl: string;
    encode(_: MsgBridgeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBridgeResponse;
    fromPartial(_: Partial<MsgBridgeResponse>): MsgBridgeResponse;
    fromAmino(_: MsgBridgeResponseAmino): MsgBridgeResponse;
    toAmino(_: MsgBridgeResponse): MsgBridgeResponseAmino;
    fromAminoMsg(object: MsgBridgeResponseAminoMsg): MsgBridgeResponse;
    fromProtoMsg(message: MsgBridgeResponseProtoMsg): MsgBridgeResponse;
    toProto(message: MsgBridgeResponse): Uint8Array;
    toProtoMsg(message: MsgBridgeResponse): MsgBridgeResponseProtoMsg;
};
export declare const MsgBridgeReceive: {
    typeUrl: string;
    encode(message: MsgBridgeReceive, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBridgeReceive;
    fromPartial(object: Partial<MsgBridgeReceive>): MsgBridgeReceive;
    fromAmino(object: MsgBridgeReceiveAmino): MsgBridgeReceive;
    toAmino(message: MsgBridgeReceive): MsgBridgeReceiveAmino;
    fromAminoMsg(object: MsgBridgeReceiveAminoMsg): MsgBridgeReceive;
    toAminoMsg(message: MsgBridgeReceive): MsgBridgeReceiveAminoMsg;
    fromProtoMsg(message: MsgBridgeReceiveProtoMsg): MsgBridgeReceive;
    toProto(message: MsgBridgeReceive): Uint8Array;
    toProtoMsg(message: MsgBridgeReceive): MsgBridgeReceiveProtoMsg;
};
export declare const MsgBridgeReceive_Batch: {
    typeUrl: string;
    encode(message: MsgBridgeReceive_Batch, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBridgeReceive_Batch;
    fromPartial(object: Partial<MsgBridgeReceive_Batch>): MsgBridgeReceive_Batch;
    fromAmino(object: MsgBridgeReceive_BatchAmino): MsgBridgeReceive_Batch;
    toAmino(message: MsgBridgeReceive_Batch): MsgBridgeReceive_BatchAmino;
    fromAminoMsg(object: MsgBridgeReceive_BatchAminoMsg): MsgBridgeReceive_Batch;
    fromProtoMsg(message: MsgBridgeReceive_BatchProtoMsg): MsgBridgeReceive_Batch;
    toProto(message: MsgBridgeReceive_Batch): Uint8Array;
    toProtoMsg(message: MsgBridgeReceive_Batch): MsgBridgeReceive_BatchProtoMsg;
};
export declare const MsgBridgeReceive_Project: {
    typeUrl: string;
    encode(message: MsgBridgeReceive_Project, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBridgeReceive_Project;
    fromPartial(object: Partial<MsgBridgeReceive_Project>): MsgBridgeReceive_Project;
    fromAmino(object: MsgBridgeReceive_ProjectAmino): MsgBridgeReceive_Project;
    toAmino(message: MsgBridgeReceive_Project): MsgBridgeReceive_ProjectAmino;
    fromAminoMsg(object: MsgBridgeReceive_ProjectAminoMsg): MsgBridgeReceive_Project;
    fromProtoMsg(message: MsgBridgeReceive_ProjectProtoMsg): MsgBridgeReceive_Project;
    toProto(message: MsgBridgeReceive_Project): Uint8Array;
    toProtoMsg(message: MsgBridgeReceive_Project): MsgBridgeReceive_ProjectProtoMsg;
};
export declare const MsgBridgeReceiveResponse: {
    typeUrl: string;
    encode(message: MsgBridgeReceiveResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBridgeReceiveResponse;
    fromPartial(object: Partial<MsgBridgeReceiveResponse>): MsgBridgeReceiveResponse;
    fromAmino(object: MsgBridgeReceiveResponseAmino): MsgBridgeReceiveResponse;
    toAmino(message: MsgBridgeReceiveResponse): MsgBridgeReceiveResponseAmino;
    fromAminoMsg(object: MsgBridgeReceiveResponseAminoMsg): MsgBridgeReceiveResponse;
    fromProtoMsg(message: MsgBridgeReceiveResponseProtoMsg): MsgBridgeReceiveResponse;
    toProto(message: MsgBridgeReceiveResponse): Uint8Array;
    toProtoMsg(message: MsgBridgeReceiveResponse): MsgBridgeReceiveResponseProtoMsg;
};
export declare const MsgAddClassCreator: {
    typeUrl: string;
    encode(message: MsgAddClassCreator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddClassCreator;
    fromPartial(object: Partial<MsgAddClassCreator>): MsgAddClassCreator;
    fromAmino(object: MsgAddClassCreatorAmino): MsgAddClassCreator;
    toAmino(message: MsgAddClassCreator): MsgAddClassCreatorAmino;
    fromAminoMsg(object: MsgAddClassCreatorAminoMsg): MsgAddClassCreator;
    toAminoMsg(message: MsgAddClassCreator): MsgAddClassCreatorAminoMsg;
    fromProtoMsg(message: MsgAddClassCreatorProtoMsg): MsgAddClassCreator;
    toProto(message: MsgAddClassCreator): Uint8Array;
    toProtoMsg(message: MsgAddClassCreator): MsgAddClassCreatorProtoMsg;
};
export declare const MsgAddClassCreatorResponse: {
    typeUrl: string;
    encode(_: MsgAddClassCreatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddClassCreatorResponse;
    fromPartial(_: Partial<MsgAddClassCreatorResponse>): MsgAddClassCreatorResponse;
    fromAmino(_: MsgAddClassCreatorResponseAmino): MsgAddClassCreatorResponse;
    toAmino(_: MsgAddClassCreatorResponse): MsgAddClassCreatorResponseAmino;
    fromAminoMsg(object: MsgAddClassCreatorResponseAminoMsg): MsgAddClassCreatorResponse;
    fromProtoMsg(message: MsgAddClassCreatorResponseProtoMsg): MsgAddClassCreatorResponse;
    toProto(message: MsgAddClassCreatorResponse): Uint8Array;
    toProtoMsg(message: MsgAddClassCreatorResponse): MsgAddClassCreatorResponseProtoMsg;
};
export declare const MsgSetClassCreatorAllowlist: {
    typeUrl: string;
    encode(message: MsgSetClassCreatorAllowlist, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetClassCreatorAllowlist;
    fromPartial(object: Partial<MsgSetClassCreatorAllowlist>): MsgSetClassCreatorAllowlist;
    fromAmino(object: MsgSetClassCreatorAllowlistAmino): MsgSetClassCreatorAllowlist;
    toAmino(message: MsgSetClassCreatorAllowlist): MsgSetClassCreatorAllowlistAmino;
    fromAminoMsg(object: MsgSetClassCreatorAllowlistAminoMsg): MsgSetClassCreatorAllowlist;
    toAminoMsg(message: MsgSetClassCreatorAllowlist): MsgSetClassCreatorAllowlistAminoMsg;
    fromProtoMsg(message: MsgSetClassCreatorAllowlistProtoMsg): MsgSetClassCreatorAllowlist;
    toProto(message: MsgSetClassCreatorAllowlist): Uint8Array;
    toProtoMsg(message: MsgSetClassCreatorAllowlist): MsgSetClassCreatorAllowlistProtoMsg;
};
export declare const MsgSetClassCreatorAllowlistResponse: {
    typeUrl: string;
    encode(_: MsgSetClassCreatorAllowlistResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetClassCreatorAllowlistResponse;
    fromPartial(_: Partial<MsgSetClassCreatorAllowlistResponse>): MsgSetClassCreatorAllowlistResponse;
    fromAmino(_: MsgSetClassCreatorAllowlistResponseAmino): MsgSetClassCreatorAllowlistResponse;
    toAmino(_: MsgSetClassCreatorAllowlistResponse): MsgSetClassCreatorAllowlistResponseAmino;
    fromAminoMsg(object: MsgSetClassCreatorAllowlistResponseAminoMsg): MsgSetClassCreatorAllowlistResponse;
    fromProtoMsg(message: MsgSetClassCreatorAllowlistResponseProtoMsg): MsgSetClassCreatorAllowlistResponse;
    toProto(message: MsgSetClassCreatorAllowlistResponse): Uint8Array;
    toProtoMsg(message: MsgSetClassCreatorAllowlistResponse): MsgSetClassCreatorAllowlistResponseProtoMsg;
};
export declare const MsgRemoveClassCreator: {
    typeUrl: string;
    encode(message: MsgRemoveClassCreator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveClassCreator;
    fromPartial(object: Partial<MsgRemoveClassCreator>): MsgRemoveClassCreator;
    fromAmino(object: MsgRemoveClassCreatorAmino): MsgRemoveClassCreator;
    toAmino(message: MsgRemoveClassCreator): MsgRemoveClassCreatorAmino;
    fromAminoMsg(object: MsgRemoveClassCreatorAminoMsg): MsgRemoveClassCreator;
    toAminoMsg(message: MsgRemoveClassCreator): MsgRemoveClassCreatorAminoMsg;
    fromProtoMsg(message: MsgRemoveClassCreatorProtoMsg): MsgRemoveClassCreator;
    toProto(message: MsgRemoveClassCreator): Uint8Array;
    toProtoMsg(message: MsgRemoveClassCreator): MsgRemoveClassCreatorProtoMsg;
};
export declare const MsgRemoveClassCreatorResponse: {
    typeUrl: string;
    encode(_: MsgRemoveClassCreatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveClassCreatorResponse;
    fromPartial(_: Partial<MsgRemoveClassCreatorResponse>): MsgRemoveClassCreatorResponse;
    fromAmino(_: MsgRemoveClassCreatorResponseAmino): MsgRemoveClassCreatorResponse;
    toAmino(_: MsgRemoveClassCreatorResponse): MsgRemoveClassCreatorResponseAmino;
    fromAminoMsg(object: MsgRemoveClassCreatorResponseAminoMsg): MsgRemoveClassCreatorResponse;
    fromProtoMsg(message: MsgRemoveClassCreatorResponseProtoMsg): MsgRemoveClassCreatorResponse;
    toProto(message: MsgRemoveClassCreatorResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveClassCreatorResponse): MsgRemoveClassCreatorResponseProtoMsg;
};
export declare const MsgUpdateClassFee: {
    typeUrl: string;
    encode(message: MsgUpdateClassFee, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassFee;
    fromPartial(object: Partial<MsgUpdateClassFee>): MsgUpdateClassFee;
    fromAmino(object: MsgUpdateClassFeeAmino): MsgUpdateClassFee;
    toAmino(message: MsgUpdateClassFee): MsgUpdateClassFeeAmino;
    fromAminoMsg(object: MsgUpdateClassFeeAminoMsg): MsgUpdateClassFee;
    toAminoMsg(message: MsgUpdateClassFee): MsgUpdateClassFeeAminoMsg;
    fromProtoMsg(message: MsgUpdateClassFeeProtoMsg): MsgUpdateClassFee;
    toProto(message: MsgUpdateClassFee): Uint8Array;
    toProtoMsg(message: MsgUpdateClassFee): MsgUpdateClassFeeProtoMsg;
};
export declare const MsgUpdateClassFeeResponse: {
    typeUrl: string;
    encode(_: MsgUpdateClassFeeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClassFeeResponse;
    fromPartial(_: Partial<MsgUpdateClassFeeResponse>): MsgUpdateClassFeeResponse;
    fromAmino(_: MsgUpdateClassFeeResponseAmino): MsgUpdateClassFeeResponse;
    toAmino(_: MsgUpdateClassFeeResponse): MsgUpdateClassFeeResponseAmino;
    fromAminoMsg(object: MsgUpdateClassFeeResponseAminoMsg): MsgUpdateClassFeeResponse;
    fromProtoMsg(message: MsgUpdateClassFeeResponseProtoMsg): MsgUpdateClassFeeResponse;
    toProto(message: MsgUpdateClassFeeResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateClassFeeResponse): MsgUpdateClassFeeResponseProtoMsg;
};
export declare const MsgAddAllowedBridgeChain: {
    typeUrl: string;
    encode(message: MsgAddAllowedBridgeChain, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAllowedBridgeChain;
    fromPartial(object: Partial<MsgAddAllowedBridgeChain>): MsgAddAllowedBridgeChain;
    fromAmino(object: MsgAddAllowedBridgeChainAmino): MsgAddAllowedBridgeChain;
    toAmino(message: MsgAddAllowedBridgeChain): MsgAddAllowedBridgeChainAmino;
    fromAminoMsg(object: MsgAddAllowedBridgeChainAminoMsg): MsgAddAllowedBridgeChain;
    toAminoMsg(message: MsgAddAllowedBridgeChain): MsgAddAllowedBridgeChainAminoMsg;
    fromProtoMsg(message: MsgAddAllowedBridgeChainProtoMsg): MsgAddAllowedBridgeChain;
    toProto(message: MsgAddAllowedBridgeChain): Uint8Array;
    toProtoMsg(message: MsgAddAllowedBridgeChain): MsgAddAllowedBridgeChainProtoMsg;
};
export declare const MsgAddAllowedBridgeChainResponse: {
    typeUrl: string;
    encode(_: MsgAddAllowedBridgeChainResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAllowedBridgeChainResponse;
    fromPartial(_: Partial<MsgAddAllowedBridgeChainResponse>): MsgAddAllowedBridgeChainResponse;
    fromAmino(_: MsgAddAllowedBridgeChainResponseAmino): MsgAddAllowedBridgeChainResponse;
    toAmino(_: MsgAddAllowedBridgeChainResponse): MsgAddAllowedBridgeChainResponseAmino;
    fromAminoMsg(object: MsgAddAllowedBridgeChainResponseAminoMsg): MsgAddAllowedBridgeChainResponse;
    fromProtoMsg(message: MsgAddAllowedBridgeChainResponseProtoMsg): MsgAddAllowedBridgeChainResponse;
    toProto(message: MsgAddAllowedBridgeChainResponse): Uint8Array;
    toProtoMsg(message: MsgAddAllowedBridgeChainResponse): MsgAddAllowedBridgeChainResponseProtoMsg;
};
export declare const MsgRemoveAllowedBridgeChain: {
    typeUrl: string;
    encode(message: MsgRemoveAllowedBridgeChain, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveAllowedBridgeChain;
    fromPartial(object: Partial<MsgRemoveAllowedBridgeChain>): MsgRemoveAllowedBridgeChain;
    fromAmino(object: MsgRemoveAllowedBridgeChainAmino): MsgRemoveAllowedBridgeChain;
    toAmino(message: MsgRemoveAllowedBridgeChain): MsgRemoveAllowedBridgeChainAmino;
    fromAminoMsg(object: MsgRemoveAllowedBridgeChainAminoMsg): MsgRemoveAllowedBridgeChain;
    toAminoMsg(message: MsgRemoveAllowedBridgeChain): MsgRemoveAllowedBridgeChainAminoMsg;
    fromProtoMsg(message: MsgRemoveAllowedBridgeChainProtoMsg): MsgRemoveAllowedBridgeChain;
    toProto(message: MsgRemoveAllowedBridgeChain): Uint8Array;
    toProtoMsg(message: MsgRemoveAllowedBridgeChain): MsgRemoveAllowedBridgeChainProtoMsg;
};
export declare const MsgRemoveAllowedBridgeChainResponse: {
    typeUrl: string;
    encode(_: MsgRemoveAllowedBridgeChainResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveAllowedBridgeChainResponse;
    fromPartial(_: Partial<MsgRemoveAllowedBridgeChainResponse>): MsgRemoveAllowedBridgeChainResponse;
    fromAmino(_: MsgRemoveAllowedBridgeChainResponseAmino): MsgRemoveAllowedBridgeChainResponse;
    toAmino(_: MsgRemoveAllowedBridgeChainResponse): MsgRemoveAllowedBridgeChainResponseAmino;
    fromAminoMsg(object: MsgRemoveAllowedBridgeChainResponseAminoMsg): MsgRemoveAllowedBridgeChainResponse;
    fromProtoMsg(message: MsgRemoveAllowedBridgeChainResponseProtoMsg): MsgRemoveAllowedBridgeChainResponse;
    toProto(message: MsgRemoveAllowedBridgeChainResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveAllowedBridgeChainResponse): MsgRemoveAllowedBridgeChainResponseProtoMsg;
};
