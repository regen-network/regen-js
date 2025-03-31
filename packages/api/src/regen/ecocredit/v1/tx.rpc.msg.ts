//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateClass, MsgCreateClassResponse, MsgCreateProject, MsgCreateProjectResponse, MsgCreateUnregisteredProject, MsgCreateUnregisteredProjectResponse, MsgCreateOrUpdateApplication, MsgCreateOrUpdateApplicationResponse, MsgUpdateProjectEnrollment, MsgUpdateProjectEnrollmentResponse, MsgCreateBatch, MsgCreateBatchResponse, MsgMintBatchCredits, MsgMintBatchCreditsResponse, MsgSealBatch, MsgSealBatchResponse, MsgSend, MsgSendResponse, MsgRetire, MsgRetireResponse, MsgCancel, MsgCancelResponse, MsgUpdateClassAdmin, MsgUpdateClassAdminResponse, MsgUpdateClassIssuers, MsgUpdateClassIssuersResponse, MsgUpdateClassMetadata, MsgUpdateClassMetadataResponse, MsgUpdateProjectAdmin, MsgUpdateProjectAdminResponse, MsgUpdateProjectMetadata, MsgUpdateProjectMetadataResponse, MsgUpdateBatchMetadata, MsgUpdateBatchMetadataResponse, MsgBridge, MsgBridgeResponse, MsgBridgeReceive, MsgBridgeReceiveResponse, MsgAddCreditType, MsgAddCreditTypeResponse, MsgSetClassCreatorAllowlist, MsgSetClassCreatorAllowlistResponse, MsgAddClassCreator, MsgAddClassCreatorResponse, MsgRemoveClassCreator, MsgRemoveClassCreatorResponse, MsgUpdateClassFee, MsgUpdateClassFeeResponse, MsgUpdateProjectFee, MsgUpdateProjectFeeResponse, MsgAddAllowedBridgeChain, MsgAddAllowedBridgeChainResponse, MsgRemoveAllowedBridgeChain, MsgRemoveAllowedBridgeChainResponse, MsgBurnRegen, MsgBurnRegenResponse } from "./tx";
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
   * CreateUnregisteredProject creates a new project without registering it
   * under a credit class. This method is intended to be used by project proponents
   * who are not yet ready to register their project under a credit class, but who
   * want to create a project and receive a project ID.
   */
  createUnregisteredProject(request: MsgCreateUnregisteredProject): Promise<MsgCreateUnregisteredProjectResponse>;
  /**
   * CreateOrUpdateApplicaton creates a new project credit class application, updates
   * the metadata for an existing one when changes have been requested, or withdraws
   * the application. When an application is withdrawn, its data will be deleted from
   * state and the project may apply again to the same credit class in the future.
   * 
   * Since Revision 3
   */
  createOrUpdateApplication(request: MsgCreateOrUpdateApplication): Promise<MsgCreateOrUpdateApplicationResponse>;
  /**
   * UpdateProjectEnrollment allows a credit class issuer to evaluate a project
   * application - either approving, requesting changes to, or
   * rejecting it, or to terminate an existing enrollment.
   * Any issuer in the credit class may update the project credit
   * class enrollment status using this method. If more sophisticated rules are
   * required to coordinate between different issuers, the credit class admin
   * should set up an on or off-chain governance process to coordinate this.
   * Issuers may not admit projects into credit classes using this method
   * without the project first creating an application. For an issuer to
   * admit a project into a credit class without an
   * application the CreateProject method should be used instead.
   * 
   * If a project has not yet been accepted then the issuer may change the
   * status to either changes requested, accepted or rejected. If the status
   * is already accepted, the issuer may only change the status to terminated.
   * Whenever a project is rejected or terminated, the project's enrollment
   * the enrollment state will be deleted and the project may apply again
   * to the same credit class in the future.
   * 
   * Since Revision 3
   */
  updateProjectEnrollment(request: MsgUpdateProjectEnrollment): Promise<MsgUpdateProjectEnrollmentResponse>;
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
   * UpdateProjectFee is a governance method that allows for updating the
   * project creation fee. If no fee is specified in the request, the project
   * creation fee will be removed and no fee will be required to create a
   * project.
   * 
   * Since Revision 3
   */
  updateProjectFee(request: MsgUpdateProjectFee): Promise<MsgUpdateProjectFeeResponse>;
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
  /**
   * BurnRegen burns REGEN tokens to account for platform fees when creating or transferring credits.
   * 
   * Since Revision 3
   */
  burnRegen(request: MsgBurnRegen): Promise<MsgBurnRegenResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createClass = this.createClass.bind(this);
    this.createProject = this.createProject.bind(this);
    this.createUnregisteredProject = this.createUnregisteredProject.bind(this);
    this.createOrUpdateApplication = this.createOrUpdateApplication.bind(this);
    this.updateProjectEnrollment = this.updateProjectEnrollment.bind(this);
    this.createBatch = this.createBatch.bind(this);
    this.mintBatchCredits = this.mintBatchCredits.bind(this);
    this.sealBatch = this.sealBatch.bind(this);
    this.send = this.send.bind(this);
    this.retire = this.retire.bind(this);
    this.cancel = this.cancel.bind(this);
    this.updateClassAdmin = this.updateClassAdmin.bind(this);
    this.updateClassIssuers = this.updateClassIssuers.bind(this);
    this.updateClassMetadata = this.updateClassMetadata.bind(this);
    this.updateProjectAdmin = this.updateProjectAdmin.bind(this);
    this.updateProjectMetadata = this.updateProjectMetadata.bind(this);
    this.updateBatchMetadata = this.updateBatchMetadata.bind(this);
    this.bridge = this.bridge.bind(this);
    this.bridgeReceive = this.bridgeReceive.bind(this);
    this.addCreditType = this.addCreditType.bind(this);
    this.setClassCreatorAllowlist = this.setClassCreatorAllowlist.bind(this);
    this.addClassCreator = this.addClassCreator.bind(this);
    this.removeClassCreator = this.removeClassCreator.bind(this);
    this.updateClassFee = this.updateClassFee.bind(this);
    this.updateProjectFee = this.updateProjectFee.bind(this);
    this.addAllowedBridgeChain = this.addAllowedBridgeChain.bind(this);
    this.removeAllowedBridgeChain = this.removeAllowedBridgeChain.bind(this);
    this.burnRegen = this.burnRegen.bind(this);
  }
  createClass(request: MsgCreateClass): Promise<MsgCreateClassResponse> {
    const data = MsgCreateClass.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "CreateClass", data);
    return promise.then(data => MsgCreateClassResponse.decode(new BinaryReader(data)));
  }
  createProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse> {
    const data = MsgCreateProject.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "CreateProject", data);
    return promise.then(data => MsgCreateProjectResponse.decode(new BinaryReader(data)));
  }
  createUnregisteredProject(request: MsgCreateUnregisteredProject): Promise<MsgCreateUnregisteredProjectResponse> {
    const data = MsgCreateUnregisteredProject.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "CreateUnregisteredProject", data);
    return promise.then(data => MsgCreateUnregisteredProjectResponse.decode(new BinaryReader(data)));
  }
  createOrUpdateApplication(request: MsgCreateOrUpdateApplication): Promise<MsgCreateOrUpdateApplicationResponse> {
    const data = MsgCreateOrUpdateApplication.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "CreateOrUpdateApplication", data);
    return promise.then(data => MsgCreateOrUpdateApplicationResponse.decode(new BinaryReader(data)));
  }
  updateProjectEnrollment(request: MsgUpdateProjectEnrollment): Promise<MsgUpdateProjectEnrollmentResponse> {
    const data = MsgUpdateProjectEnrollment.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateProjectEnrollment", data);
    return promise.then(data => MsgUpdateProjectEnrollmentResponse.decode(new BinaryReader(data)));
  }
  createBatch(request: MsgCreateBatch): Promise<MsgCreateBatchResponse> {
    const data = MsgCreateBatch.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "CreateBatch", data);
    return promise.then(data => MsgCreateBatchResponse.decode(new BinaryReader(data)));
  }
  mintBatchCredits(request: MsgMintBatchCredits): Promise<MsgMintBatchCreditsResponse> {
    const data = MsgMintBatchCredits.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "MintBatchCredits", data);
    return promise.then(data => MsgMintBatchCreditsResponse.decode(new BinaryReader(data)));
  }
  sealBatch(request: MsgSealBatch): Promise<MsgSealBatchResponse> {
    const data = MsgSealBatch.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "SealBatch", data);
    return promise.then(data => MsgSealBatchResponse.decode(new BinaryReader(data)));
  }
  send(request: MsgSend): Promise<MsgSendResponse> {
    const data = MsgSend.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "Send", data);
    return promise.then(data => MsgSendResponse.decode(new BinaryReader(data)));
  }
  retire(request: MsgRetire): Promise<MsgRetireResponse> {
    const data = MsgRetire.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "Retire", data);
    return promise.then(data => MsgRetireResponse.decode(new BinaryReader(data)));
  }
  cancel(request: MsgCancel): Promise<MsgCancelResponse> {
    const data = MsgCancel.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "Cancel", data);
    return promise.then(data => MsgCancelResponse.decode(new BinaryReader(data)));
  }
  updateClassAdmin(request: MsgUpdateClassAdmin): Promise<MsgUpdateClassAdminResponse> {
    const data = MsgUpdateClassAdmin.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateClassAdmin", data);
    return promise.then(data => MsgUpdateClassAdminResponse.decode(new BinaryReader(data)));
  }
  updateClassIssuers(request: MsgUpdateClassIssuers): Promise<MsgUpdateClassIssuersResponse> {
    const data = MsgUpdateClassIssuers.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateClassIssuers", data);
    return promise.then(data => MsgUpdateClassIssuersResponse.decode(new BinaryReader(data)));
  }
  updateClassMetadata(request: MsgUpdateClassMetadata): Promise<MsgUpdateClassMetadataResponse> {
    const data = MsgUpdateClassMetadata.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateClassMetadata", data);
    return promise.then(data => MsgUpdateClassMetadataResponse.decode(new BinaryReader(data)));
  }
  updateProjectAdmin(request: MsgUpdateProjectAdmin): Promise<MsgUpdateProjectAdminResponse> {
    const data = MsgUpdateProjectAdmin.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateProjectAdmin", data);
    return promise.then(data => MsgUpdateProjectAdminResponse.decode(new BinaryReader(data)));
  }
  updateProjectMetadata(request: MsgUpdateProjectMetadata): Promise<MsgUpdateProjectMetadataResponse> {
    const data = MsgUpdateProjectMetadata.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateProjectMetadata", data);
    return promise.then(data => MsgUpdateProjectMetadataResponse.decode(new BinaryReader(data)));
  }
  updateBatchMetadata(request: MsgUpdateBatchMetadata): Promise<MsgUpdateBatchMetadataResponse> {
    const data = MsgUpdateBatchMetadata.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateBatchMetadata", data);
    return promise.then(data => MsgUpdateBatchMetadataResponse.decode(new BinaryReader(data)));
  }
  bridge(request: MsgBridge): Promise<MsgBridgeResponse> {
    const data = MsgBridge.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "Bridge", data);
    return promise.then(data => MsgBridgeResponse.decode(new BinaryReader(data)));
  }
  bridgeReceive(request: MsgBridgeReceive): Promise<MsgBridgeReceiveResponse> {
    const data = MsgBridgeReceive.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "BridgeReceive", data);
    return promise.then(data => MsgBridgeReceiveResponse.decode(new BinaryReader(data)));
  }
  addCreditType(request: MsgAddCreditType): Promise<MsgAddCreditTypeResponse> {
    const data = MsgAddCreditType.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "AddCreditType", data);
    return promise.then(data => MsgAddCreditTypeResponse.decode(new BinaryReader(data)));
  }
  setClassCreatorAllowlist(request: MsgSetClassCreatorAllowlist): Promise<MsgSetClassCreatorAllowlistResponse> {
    const data = MsgSetClassCreatorAllowlist.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "SetClassCreatorAllowlist", data);
    return promise.then(data => MsgSetClassCreatorAllowlistResponse.decode(new BinaryReader(data)));
  }
  addClassCreator(request: MsgAddClassCreator): Promise<MsgAddClassCreatorResponse> {
    const data = MsgAddClassCreator.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "AddClassCreator", data);
    return promise.then(data => MsgAddClassCreatorResponse.decode(new BinaryReader(data)));
  }
  removeClassCreator(request: MsgRemoveClassCreator): Promise<MsgRemoveClassCreatorResponse> {
    const data = MsgRemoveClassCreator.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "RemoveClassCreator", data);
    return promise.then(data => MsgRemoveClassCreatorResponse.decode(new BinaryReader(data)));
  }
  updateClassFee(request: MsgUpdateClassFee): Promise<MsgUpdateClassFeeResponse> {
    const data = MsgUpdateClassFee.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateClassFee", data);
    return promise.then(data => MsgUpdateClassFeeResponse.decode(new BinaryReader(data)));
  }
  updateProjectFee(request: MsgUpdateProjectFee): Promise<MsgUpdateProjectFeeResponse> {
    const data = MsgUpdateProjectFee.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateProjectFee", data);
    return promise.then(data => MsgUpdateProjectFeeResponse.decode(new BinaryReader(data)));
  }
  addAllowedBridgeChain(request: MsgAddAllowedBridgeChain): Promise<MsgAddAllowedBridgeChainResponse> {
    const data = MsgAddAllowedBridgeChain.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "AddAllowedBridgeChain", data);
    return promise.then(data => MsgAddAllowedBridgeChainResponse.decode(new BinaryReader(data)));
  }
  removeAllowedBridgeChain(request: MsgRemoveAllowedBridgeChain): Promise<MsgRemoveAllowedBridgeChainResponse> {
    const data = MsgRemoveAllowedBridgeChain.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "RemoveAllowedBridgeChain", data);
    return promise.then(data => MsgRemoveAllowedBridgeChainResponse.decode(new BinaryReader(data)));
  }
  burnRegen(request: MsgBurnRegen): Promise<MsgBurnRegenResponse> {
    const data = MsgBurnRegen.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1.Msg", "BurnRegen", data);
    return promise.then(data => MsgBurnRegenResponse.decode(new BinaryReader(data)));
  }
}