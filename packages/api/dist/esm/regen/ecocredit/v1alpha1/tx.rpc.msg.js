import { BinaryReader } from "../../../binary";
import { MsgCreateClass, MsgCreateClassResponse, MsgCreateBatch, MsgCreateBatchResponse, MsgSend, MsgSendResponse, MsgRetire, MsgRetireResponse, MsgCancel, MsgCancelResponse, MsgUpdateClassAdmin, MsgUpdateClassAdminResponse, MsgUpdateClassIssuers, MsgUpdateClassIssuersResponse, MsgUpdateClassMetadata, MsgUpdateClassMetadataResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createClass = this.createClass.bind(this);
        this.createBatch = this.createBatch.bind(this);
        this.send = this.send.bind(this);
        this.retire = this.retire.bind(this);
        this.cancel = this.cancel.bind(this);
        this.updateClassAdmin = this.updateClassAdmin.bind(this);
        this.updateClassIssuers = this.updateClassIssuers.bind(this);
        this.updateClassMetadata = this.updateClassMetadata.bind(this);
    }
    createClass(request) {
        const data = MsgCreateClass.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Msg", "CreateClass", data);
        return promise.then(data => MsgCreateClassResponse.decode(new BinaryReader(data)));
    }
    createBatch(request) {
        const data = MsgCreateBatch.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Msg", "CreateBatch", data);
        return promise.then(data => MsgCreateBatchResponse.decode(new BinaryReader(data)));
    }
    send(request) {
        const data = MsgSend.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Msg", "Send", data);
        return promise.then(data => MsgSendResponse.decode(new BinaryReader(data)));
    }
    retire(request) {
        const data = MsgRetire.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Msg", "Retire", data);
        return promise.then(data => MsgRetireResponse.decode(new BinaryReader(data)));
    }
    cancel(request) {
        const data = MsgCancel.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Msg", "Cancel", data);
        return promise.then(data => MsgCancelResponse.decode(new BinaryReader(data)));
    }
    updateClassAdmin(request) {
        const data = MsgUpdateClassAdmin.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Msg", "UpdateClassAdmin", data);
        return promise.then(data => MsgUpdateClassAdminResponse.decode(new BinaryReader(data)));
    }
    updateClassIssuers(request) {
        const data = MsgUpdateClassIssuers.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Msg", "UpdateClassIssuers", data);
        return promise.then(data => MsgUpdateClassIssuersResponse.decode(new BinaryReader(data)));
    }
    updateClassMetadata(request) {
        const data = MsgUpdateClassMetadata.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Msg", "UpdateClassMetadata", data);
        return promise.then(data => MsgUpdateClassMetadataResponse.decode(new BinaryReader(data)));
    }
}
