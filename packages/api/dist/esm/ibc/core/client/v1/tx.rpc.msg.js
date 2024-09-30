import { BinaryReader } from "../../../../binary";
import { MsgCreateClient, MsgCreateClientResponse, MsgUpdateClient, MsgUpdateClientResponse, MsgUpgradeClient, MsgUpgradeClientResponse, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createClient = this.createClient.bind(this);
        this.updateClient = this.updateClient.bind(this);
        this.upgradeClient = this.upgradeClient.bind(this);
        this.submitMisbehaviour = this.submitMisbehaviour.bind(this);
    }
    createClient(request) {
        const data = MsgCreateClient.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "CreateClient", data);
        return promise.then(data => MsgCreateClientResponse.decode(new BinaryReader(data)));
    }
    updateClient(request) {
        const data = MsgUpdateClient.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClient", data);
        return promise.then(data => MsgUpdateClientResponse.decode(new BinaryReader(data)));
    }
    upgradeClient(request) {
        const data = MsgUpgradeClient.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpgradeClient", data);
        return promise.then(data => MsgUpgradeClientResponse.decode(new BinaryReader(data)));
    }
    submitMisbehaviour(request) {
        const data = MsgSubmitMisbehaviour.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "SubmitMisbehaviour", data);
        return promise.then(data => MsgSubmitMisbehaviourResponse.decode(new BinaryReader(data)));
    }
}
