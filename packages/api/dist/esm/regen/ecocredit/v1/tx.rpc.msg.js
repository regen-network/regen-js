import { BinaryReader } from "../../../binary";
import { MsgCreateClass, MsgCreateClassResponse, MsgCreateProject, MsgCreateProjectResponse, MsgCreateBatch, MsgCreateBatchResponse, MsgMintBatchCredits, MsgMintBatchCreditsResponse, MsgSealBatch, MsgSealBatchResponse, MsgSend, MsgSendResponse, MsgRetire, MsgRetireResponse, MsgCancel, MsgCancelResponse, MsgUpdateClassAdmin, MsgUpdateClassAdminResponse, MsgUpdateClassIssuers, MsgUpdateClassIssuersResponse, MsgUpdateClassMetadata, MsgUpdateClassMetadataResponse, MsgUpdateProjectAdmin, MsgUpdateProjectAdminResponse, MsgUpdateProjectMetadata, MsgUpdateProjectMetadataResponse, MsgUpdateBatchMetadata, MsgUpdateBatchMetadataResponse, MsgBridge, MsgBridgeResponse, MsgBridgeReceive, MsgBridgeReceiveResponse, MsgAddCreditType, MsgAddCreditTypeResponse, MsgSetClassCreatorAllowlist, MsgSetClassCreatorAllowlistResponse, MsgAddClassCreator, MsgAddClassCreatorResponse, MsgRemoveClassCreator, MsgRemoveClassCreatorResponse, MsgUpdateClassFee, MsgUpdateClassFeeResponse, MsgAddAllowedBridgeChain, MsgAddAllowedBridgeChainResponse, MsgRemoveAllowedBridgeChain, MsgRemoveAllowedBridgeChainResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createClass = this.createClass.bind(this);
        this.createProject = this.createProject.bind(this);
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
        this.addAllowedBridgeChain = this.addAllowedBridgeChain.bind(this);
        this.removeAllowedBridgeChain = this.removeAllowedBridgeChain.bind(this);
    }
    createClass(request) {
        const data = MsgCreateClass.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "CreateClass", data);
        return promise.then(data => MsgCreateClassResponse.decode(new BinaryReader(data)));
    }
    createProject(request) {
        const data = MsgCreateProject.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "CreateProject", data);
        return promise.then(data => MsgCreateProjectResponse.decode(new BinaryReader(data)));
    }
    createBatch(request) {
        const data = MsgCreateBatch.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "CreateBatch", data);
        return promise.then(data => MsgCreateBatchResponse.decode(new BinaryReader(data)));
    }
    mintBatchCredits(request) {
        const data = MsgMintBatchCredits.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "MintBatchCredits", data);
        return promise.then(data => MsgMintBatchCreditsResponse.decode(new BinaryReader(data)));
    }
    sealBatch(request) {
        const data = MsgSealBatch.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "SealBatch", data);
        return promise.then(data => MsgSealBatchResponse.decode(new BinaryReader(data)));
    }
    send(request) {
        const data = MsgSend.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "Send", data);
        return promise.then(data => MsgSendResponse.decode(new BinaryReader(data)));
    }
    retire(request) {
        const data = MsgRetire.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "Retire", data);
        return promise.then(data => MsgRetireResponse.decode(new BinaryReader(data)));
    }
    cancel(request) {
        const data = MsgCancel.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "Cancel", data);
        return promise.then(data => MsgCancelResponse.decode(new BinaryReader(data)));
    }
    updateClassAdmin(request) {
        const data = MsgUpdateClassAdmin.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateClassAdmin", data);
        return promise.then(data => MsgUpdateClassAdminResponse.decode(new BinaryReader(data)));
    }
    updateClassIssuers(request) {
        const data = MsgUpdateClassIssuers.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateClassIssuers", data);
        return promise.then(data => MsgUpdateClassIssuersResponse.decode(new BinaryReader(data)));
    }
    updateClassMetadata(request) {
        const data = MsgUpdateClassMetadata.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateClassMetadata", data);
        return promise.then(data => MsgUpdateClassMetadataResponse.decode(new BinaryReader(data)));
    }
    updateProjectAdmin(request) {
        const data = MsgUpdateProjectAdmin.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateProjectAdmin", data);
        return promise.then(data => MsgUpdateProjectAdminResponse.decode(new BinaryReader(data)));
    }
    updateProjectMetadata(request) {
        const data = MsgUpdateProjectMetadata.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateProjectMetadata", data);
        return promise.then(data => MsgUpdateProjectMetadataResponse.decode(new BinaryReader(data)));
    }
    updateBatchMetadata(request) {
        const data = MsgUpdateBatchMetadata.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateBatchMetadata", data);
        return promise.then(data => MsgUpdateBatchMetadataResponse.decode(new BinaryReader(data)));
    }
    bridge(request) {
        const data = MsgBridge.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "Bridge", data);
        return promise.then(data => MsgBridgeResponse.decode(new BinaryReader(data)));
    }
    bridgeReceive(request) {
        const data = MsgBridgeReceive.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "BridgeReceive", data);
        return promise.then(data => MsgBridgeReceiveResponse.decode(new BinaryReader(data)));
    }
    addCreditType(request) {
        const data = MsgAddCreditType.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "AddCreditType", data);
        return promise.then(data => MsgAddCreditTypeResponse.decode(new BinaryReader(data)));
    }
    setClassCreatorAllowlist(request) {
        const data = MsgSetClassCreatorAllowlist.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "SetClassCreatorAllowlist", data);
        return promise.then(data => MsgSetClassCreatorAllowlistResponse.decode(new BinaryReader(data)));
    }
    addClassCreator(request) {
        const data = MsgAddClassCreator.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "AddClassCreator", data);
        return promise.then(data => MsgAddClassCreatorResponse.decode(new BinaryReader(data)));
    }
    removeClassCreator(request) {
        const data = MsgRemoveClassCreator.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "RemoveClassCreator", data);
        return promise.then(data => MsgRemoveClassCreatorResponse.decode(new BinaryReader(data)));
    }
    updateClassFee(request) {
        const data = MsgUpdateClassFee.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateClassFee", data);
        return promise.then(data => MsgUpdateClassFeeResponse.decode(new BinaryReader(data)));
    }
    addAllowedBridgeChain(request) {
        const data = MsgAddAllowedBridgeChain.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "AddAllowedBridgeChain", data);
        return promise.then(data => MsgAddAllowedBridgeChainResponse.decode(new BinaryReader(data)));
    }
    removeAllowedBridgeChain(request) {
        const data = MsgRemoveAllowedBridgeChain.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "RemoveAllowedBridgeChain", data);
        return promise.then(data => MsgRemoveAllowedBridgeChainResponse.decode(new BinaryReader(data)));
    }
}
