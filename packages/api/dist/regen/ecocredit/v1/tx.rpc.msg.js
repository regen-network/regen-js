"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
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
        const data = tx_1.MsgCreateClass.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "CreateClass", data);
        return promise.then(data => tx_1.MsgCreateClassResponse.decode(new binary_1.BinaryReader(data)));
    }
    createProject(request) {
        const data = tx_1.MsgCreateProject.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "CreateProject", data);
        return promise.then(data => tx_1.MsgCreateProjectResponse.decode(new binary_1.BinaryReader(data)));
    }
    createBatch(request) {
        const data = tx_1.MsgCreateBatch.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "CreateBatch", data);
        return promise.then(data => tx_1.MsgCreateBatchResponse.decode(new binary_1.BinaryReader(data)));
    }
    mintBatchCredits(request) {
        const data = tx_1.MsgMintBatchCredits.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "MintBatchCredits", data);
        return promise.then(data => tx_1.MsgMintBatchCreditsResponse.decode(new binary_1.BinaryReader(data)));
    }
    sealBatch(request) {
        const data = tx_1.MsgSealBatch.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "SealBatch", data);
        return promise.then(data => tx_1.MsgSealBatchResponse.decode(new binary_1.BinaryReader(data)));
    }
    send(request) {
        const data = tx_1.MsgSend.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "Send", data);
        return promise.then(data => tx_1.MsgSendResponse.decode(new binary_1.BinaryReader(data)));
    }
    retire(request) {
        const data = tx_1.MsgRetire.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "Retire", data);
        return promise.then(data => tx_1.MsgRetireResponse.decode(new binary_1.BinaryReader(data)));
    }
    cancel(request) {
        const data = tx_1.MsgCancel.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "Cancel", data);
        return promise.then(data => tx_1.MsgCancelResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateClassAdmin(request) {
        const data = tx_1.MsgUpdateClassAdmin.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateClassAdmin", data);
        return promise.then(data => tx_1.MsgUpdateClassAdminResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateClassIssuers(request) {
        const data = tx_1.MsgUpdateClassIssuers.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateClassIssuers", data);
        return promise.then(data => tx_1.MsgUpdateClassIssuersResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateClassMetadata(request) {
        const data = tx_1.MsgUpdateClassMetadata.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateClassMetadata", data);
        return promise.then(data => tx_1.MsgUpdateClassMetadataResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateProjectAdmin(request) {
        const data = tx_1.MsgUpdateProjectAdmin.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateProjectAdmin", data);
        return promise.then(data => tx_1.MsgUpdateProjectAdminResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateProjectMetadata(request) {
        const data = tx_1.MsgUpdateProjectMetadata.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateProjectMetadata", data);
        return promise.then(data => tx_1.MsgUpdateProjectMetadataResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateBatchMetadata(request) {
        const data = tx_1.MsgUpdateBatchMetadata.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateBatchMetadata", data);
        return promise.then(data => tx_1.MsgUpdateBatchMetadataResponse.decode(new binary_1.BinaryReader(data)));
    }
    bridge(request) {
        const data = tx_1.MsgBridge.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "Bridge", data);
        return promise.then(data => tx_1.MsgBridgeResponse.decode(new binary_1.BinaryReader(data)));
    }
    bridgeReceive(request) {
        const data = tx_1.MsgBridgeReceive.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "BridgeReceive", data);
        return promise.then(data => tx_1.MsgBridgeReceiveResponse.decode(new binary_1.BinaryReader(data)));
    }
    addCreditType(request) {
        const data = tx_1.MsgAddCreditType.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "AddCreditType", data);
        return promise.then(data => tx_1.MsgAddCreditTypeResponse.decode(new binary_1.BinaryReader(data)));
    }
    setClassCreatorAllowlist(request) {
        const data = tx_1.MsgSetClassCreatorAllowlist.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "SetClassCreatorAllowlist", data);
        return promise.then(data => tx_1.MsgSetClassCreatorAllowlistResponse.decode(new binary_1.BinaryReader(data)));
    }
    addClassCreator(request) {
        const data = tx_1.MsgAddClassCreator.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "AddClassCreator", data);
        return promise.then(data => tx_1.MsgAddClassCreatorResponse.decode(new binary_1.BinaryReader(data)));
    }
    removeClassCreator(request) {
        const data = tx_1.MsgRemoveClassCreator.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "RemoveClassCreator", data);
        return promise.then(data => tx_1.MsgRemoveClassCreatorResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateClassFee(request) {
        const data = tx_1.MsgUpdateClassFee.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "UpdateClassFee", data);
        return promise.then(data => tx_1.MsgUpdateClassFeeResponse.decode(new binary_1.BinaryReader(data)));
    }
    addAllowedBridgeChain(request) {
        const data = tx_1.MsgAddAllowedBridgeChain.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "AddAllowedBridgeChain", data);
        return promise.then(data => tx_1.MsgAddAllowedBridgeChainResponse.decode(new binary_1.BinaryReader(data)));
    }
    removeAllowedBridgeChain(request) {
        const data = tx_1.MsgRemoveAllowedBridgeChain.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Msg", "RemoveAllowedBridgeChain", data);
        return promise.then(data => tx_1.MsgRemoveAllowedBridgeChainResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
