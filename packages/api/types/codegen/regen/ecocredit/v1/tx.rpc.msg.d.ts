import { Rpc } from "../../../helpers";
import { MsgCreateClass, MsgCreateClassResponse, MsgCreateProject, MsgCreateProjectResponse, MsgCreateBatch, MsgCreateBatchResponse, MsgMintBatchCredits, MsgMintBatchCreditsResponse, MsgSealBatch, MsgSealBatchResponse, MsgSend, MsgSendResponse, MsgRetire, MsgRetireResponse, MsgCancel, MsgCancelResponse, MsgUpdateClassAdmin, MsgUpdateClassAdminResponse, MsgUpdateClassIssuers, MsgUpdateClassIssuersResponse, MsgUpdateClassMetadata, MsgUpdateClassMetadataResponse, MsgUpdateProjectAdmin, MsgUpdateProjectAdminResponse, MsgUpdateProjectMetadata, MsgUpdateProjectMetadataResponse, MsgUpdateBatchMetadata, MsgUpdateBatchMetadataResponse, MsgBridge, MsgBridgeResponse, MsgBridgeReceive, MsgBridgeReceiveResponse, MsgAddCreditType, MsgAddCreditTypeResponse, MsgSetClassCreatorAllowlist, MsgSetClassCreatorAllowlistResponse, MsgAddClassCreator, MsgAddClassCreatorResponse, MsgRemoveClassCreator, MsgRemoveClassCreatorResponse, MsgUpdateClassFee, MsgUpdateClassFeeResponse, MsgAddAllowedBridgeChain, MsgAddAllowedBridgeChainResponse, MsgRemoveAllowedBridgeChain, MsgRemoveAllowedBridgeChainResponse } from "./tx";
/** Msg is the regen.ecocredit.v1 Msg service. */
export interface Msg {
    /**
     * CreateClass creates a new credit class under the given credit type with an
     * approved list of issuers and optional metadata. If the class fee parameter
     * is set, the fee field must be populated with equal value. A greater fee can
     * be provided, however, the creator will only be charged the amount specified
     * in the fee parameter. The creator of the credit class becomes the admin of
     * the credit class upon creation.
     */
    createClass(request: MsgCreateClass): Promise<MsgCreateClassResponse>;
    /**
     * CreateProject creates a new project under the given credit class with a
     * jurisdiction, optional metadata, and an optional reference ID. The creator
     * of the project must be an approved credit class issuer for the given credit
     * class. The creator becomes the admin of the project upon creation.
     */
    createProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse>;
    /**
     * CreateBatch creates a new batch of credits under the given project with a
     * start and end date representing the monitoring period, a list of credits to
     * be issued with each issuance specifying a recipient, the amount of tradable
     * and retired credits, and the retirement jurisdiction (if credits are to be
     * retired upon receipt), and optional metadata. The credit batch creator must
     * be listed as an approved issuer within the credit class of the project that
     * the credits are being issued under.
     *
     * The default behavior is for a new credit batch to be "sealed" as opposed to
     * being "open". When a credit batch is "open", new credits can be dynamically
     * minted to the credit batch following the creation of the credit batch. This
     * "open" option should only be set to true when bridging credits from another
     * chain or registry as a result of a bridge operation and is not intended for
     * native credit issuance.
     */
    createBatch(request: MsgCreateBatch): Promise<MsgCreateBatchResponse>;
    /**
     * MintBatchCredits dynamically mints credits to an "open" credit batch. This
     * feature is only meant to be used when bridging credits from another chain
     * or registry and is not intended for native credit issuance. When bridging
     * credits from the same vintage (or monitoring period) as an existing credit
     * batch, the credits can be dynamically minted to the existing credit batch
     * if the credit batch is "open".
     */
    mintBatchCredits(request: MsgMintBatchCredits): Promise<MsgMintBatchCreditsResponse>;
    /**
     * MsgSealBatch seals an "open" credit batch. Once a credit batch is sealed
     * (i.e. once "open" is set to false), credits can no longer be dynamically
     * minted to the credit batch. A sealed credit batch cannot be unsealed and
     * only the credit batch issuer can seal a credit batch.
     */
    sealBatch(request: MsgSealBatch): Promise<MsgSealBatchResponse>;
    /**
     * Send sends a specified amount of tradable credits from the credit owner's
     * account to another account. Sent credits can either remain tradable or be
     * retired upon receipt.
     */
    send(request: MsgSend): Promise<MsgSendResponse>;
    /**
     * Retire retires a specified amount of tradable credits, removing the amount
     * from the credit owner's tradable balance and adding it to their retired
     * balance. Retiring credits is permanent and implies the credits are being
     * consumed as a offset.
     */
    retire(request: MsgRetire): Promise<MsgRetireResponse>;
    /**
     * Cancel cancels a specified amount of tradable credits, removing the amount
     * from the credit owner's tradable balance and removing the amount from the
     * credit batch's tradable supply. Cancelling credits is permanent and implies
     * the credits have been moved to another chain or registry.
     */
    cancel(request: MsgCancel): Promise<MsgCancelResponse>;
    /**
     * UpdateClassAdmin updates the credit class admin. Only the admin of the
     * credit class can update the credit class.
     */
    updateClassAdmin(request: MsgUpdateClassAdmin): Promise<MsgUpdateClassAdminResponse>;
    /**
     * UpdateClassIssuers updates the credit class issuer list. Only the admin of
     * the credit class can update the credit class.
     */
    updateClassIssuers(request: MsgUpdateClassIssuers): Promise<MsgUpdateClassIssuersResponse>;
    /**
     * UpdateClassMetadata updates the credit class metadata. Only the admin of
     * the credit class can update the credit class.
     */
    updateClassMetadata(request: MsgUpdateClassMetadata): Promise<MsgUpdateClassMetadataResponse>;
    /**
     * UpdateProjectAdmin updates the project admin address. Only the admin of the
     * project can update the project.
     */
    updateProjectAdmin(request: MsgUpdateProjectAdmin): Promise<MsgUpdateProjectAdminResponse>;
    /**
     * UpdateProjectMetadata updates the project metadata. Only the admin of the
     * project can update the project.
     */
    updateProjectMetadata(request: MsgUpdateProjectMetadata): Promise<MsgUpdateProjectMetadataResponse>;
    /**
     * UpdateBatchMetadata updates the batch metadata. Only an "open" batch can be
     * updated and only the issuer of the batch can update the batch.
     *
     * Since Revision 2
     */
    updateBatchMetadata(request: MsgUpdateBatchMetadata): Promise<MsgUpdateBatchMetadataResponse>;
    /**
     * Bridge processes credits being sent back to the source chain. When credits
     * are sent back to the source chain, the credits are cancelled and an event
     * is emitted to be handled by an external bridge service.
     */
    bridge(request: MsgBridge): Promise<MsgBridgeResponse>;
    /**
     * BridgeReceive processes credits being sent from another chain. When the
     * credits are sent from the same vintage as an existing credit batch within
     * the scope of the provided credit class, the credits will be minted to the
     * existing credit batch, otherwise the credits will be issued in a new credit
     * batch. The new credit batch will be created under an existing project if a
     * project with a matching reference id already exists within the scope of the
     * credit class, otherwise a new project will be created.
     */
    bridgeReceive(request: MsgBridgeReceive): Promise<MsgBridgeReceiveResponse>;
    /**
     * AddCreditType is a governance method that allows the addition of new
     * credit types to the network.
     *
     * Since Revision 2
     */
    addCreditType(request: MsgAddCreditType): Promise<MsgAddCreditTypeResponse>;
    /**
     * SetClassCreatorAllowlist is a governance method that updates the class
     * creator allowlist enabled setting. When enabled, only addresses listed in
     * the allowlist can create credit classes. When disabled, any address can
     * create credit classes.
     *
     * Since Revision 2
     */
    setClassCreatorAllowlist(request: MsgSetClassCreatorAllowlist): Promise<MsgSetClassCreatorAllowlistResponse>;
    /**
     * AddClassCreator is a governance method that allows the addition of a new
     * address to the class creation allowlist.
     *
     * Since Revision 2
     */
    addClassCreator(request: MsgAddClassCreator): Promise<MsgAddClassCreatorResponse>;
    /**
     * RemoveClassCreator is a governance method that removes an
     * address from the class creation allowlist.
     *
     * Since Revision 2
     */
    removeClassCreator(request: MsgRemoveClassCreator): Promise<MsgRemoveClassCreatorResponse>;
    /**
     * UpdateClassFee is a governance method that allows for updating the credit
     * class creation fee. If no fee is specified in the request, the credit
     * class creation fee will be removed and no fee will be required to create
     * a credit class.
     *
     * Since Revision 2
     */
    updateClassFee(request: MsgUpdateClassFee): Promise<MsgUpdateClassFeeResponse>;
    /**
     * AddAllowedBridgeChain is a governance method that allows for the
     * addition of a chain to bridge ecocredits to.
     *
     * Since Revision 2
     */
    addAllowedBridgeChain(request: MsgAddAllowedBridgeChain): Promise<MsgAddAllowedBridgeChainResponse>;
    /**
     * RemoveAllowedBridgeChain is a governance method that allows for the
     * removal of a chain to bridge ecocredits to.
     *
     * Since Revision 2
     */
    removeAllowedBridgeChain(request: MsgRemoveAllowedBridgeChain): Promise<MsgRemoveAllowedBridgeChainResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createClass(request: MsgCreateClass): Promise<MsgCreateClassResponse>;
    createProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse>;
    createBatch(request: MsgCreateBatch): Promise<MsgCreateBatchResponse>;
    mintBatchCredits(request: MsgMintBatchCredits): Promise<MsgMintBatchCreditsResponse>;
    sealBatch(request: MsgSealBatch): Promise<MsgSealBatchResponse>;
    send(request: MsgSend): Promise<MsgSendResponse>;
    retire(request: MsgRetire): Promise<MsgRetireResponse>;
    cancel(request: MsgCancel): Promise<MsgCancelResponse>;
    updateClassAdmin(request: MsgUpdateClassAdmin): Promise<MsgUpdateClassAdminResponse>;
    updateClassIssuers(request: MsgUpdateClassIssuers): Promise<MsgUpdateClassIssuersResponse>;
    updateClassMetadata(request: MsgUpdateClassMetadata): Promise<MsgUpdateClassMetadataResponse>;
    updateProjectAdmin(request: MsgUpdateProjectAdmin): Promise<MsgUpdateProjectAdminResponse>;
    updateProjectMetadata(request: MsgUpdateProjectMetadata): Promise<MsgUpdateProjectMetadataResponse>;
    updateBatchMetadata(request: MsgUpdateBatchMetadata): Promise<MsgUpdateBatchMetadataResponse>;
    bridge(request: MsgBridge): Promise<MsgBridgeResponse>;
    bridgeReceive(request: MsgBridgeReceive): Promise<MsgBridgeReceiveResponse>;
    addCreditType(request: MsgAddCreditType): Promise<MsgAddCreditTypeResponse>;
    setClassCreatorAllowlist(request: MsgSetClassCreatorAllowlist): Promise<MsgSetClassCreatorAllowlistResponse>;
    addClassCreator(request: MsgAddClassCreator): Promise<MsgAddClassCreatorResponse>;
    removeClassCreator(request: MsgRemoveClassCreator): Promise<MsgRemoveClassCreatorResponse>;
    updateClassFee(request: MsgUpdateClassFee): Promise<MsgUpdateClassFeeResponse>;
    addAllowedBridgeChain(request: MsgAddAllowedBridgeChain): Promise<MsgAddAllowedBridgeChainResponse>;
    removeAllowedBridgeChain(request: MsgRemoveAllowedBridgeChain): Promise<MsgRemoveAllowedBridgeChainResponse>;
}
