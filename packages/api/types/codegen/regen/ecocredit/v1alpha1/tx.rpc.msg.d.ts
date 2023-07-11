import { Rpc } from "../../../helpers";
import { MsgCreateClass, MsgCreateClassResponse, MsgCreateBatch, MsgCreateBatchResponse, MsgSend, MsgSendResponse, MsgRetire, MsgRetireResponse, MsgCancel, MsgCancelResponse, MsgUpdateClassAdmin, MsgUpdateClassAdminResponse, MsgUpdateClassIssuers, MsgUpdateClassIssuersResponse, MsgUpdateClassMetadata, MsgUpdateClassMetadataResponse } from "./tx";
/** Msg is the regen.ecocredit.v1alpha1 Msg service. */
export interface Msg {
    /**
     * CreateClass creates a new credit class with an approved list of issuers and
     * optional metadata.
     */
    createClass(request: MsgCreateClass): Promise<MsgCreateClassResponse>;
    /**
     * CreateBatch creates a new batch of credits for an existing credit class.
     * This will create a new batch denom with a fixed supply. Issued credits can
     * be distributed to recipients in either tradable or retired form.
     */
    createBatch(request: MsgCreateBatch): Promise<MsgCreateBatchResponse>;
    /**
     * Send sends tradable credits from one account to another account. Sent
     * credits can either be tradable or retired on receipt.
     */
    send(request: MsgSend): Promise<MsgSendResponse>;
    /** Retire retires a specified number of credits in the holder's account. */
    retire(request: MsgRetire): Promise<MsgRetireResponse>;
    /**
     * Cancel removes a number of credits from the holder's account and also
     * deducts them from the tradable supply, effectively cancelling their
     * issuance on Regen Ledger
     */
    cancel(request: MsgCancel): Promise<MsgCancelResponse>;
    /** UpdateClassAdmin updates the credit class admin */
    updateClassAdmin(request: MsgUpdateClassAdmin): Promise<MsgUpdateClassAdminResponse>;
    /** UpdateClassIssuers updates the credit class issuer list */
    updateClassIssuers(request: MsgUpdateClassIssuers): Promise<MsgUpdateClassIssuersResponse>;
    /** UpdateClassMetadata updates the credit class metadata */
    updateClassMetadata(request: MsgUpdateClassMetadata): Promise<MsgUpdateClassMetadataResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createClass(request: MsgCreateClass): Promise<MsgCreateClassResponse>;
    createBatch(request: MsgCreateBatch): Promise<MsgCreateBatchResponse>;
    send(request: MsgSend): Promise<MsgSendResponse>;
    retire(request: MsgRetire): Promise<MsgRetireResponse>;
    cancel(request: MsgCancel): Promise<MsgCancelResponse>;
    updateClassAdmin(request: MsgUpdateClassAdmin): Promise<MsgUpdateClassAdminResponse>;
    updateClassIssuers(request: MsgUpdateClassIssuers): Promise<MsgUpdateClassIssuersResponse>;
    updateClassMetadata(request: MsgUpdateClassMetadata): Promise<MsgUpdateClassMetadataResponse>;
}
