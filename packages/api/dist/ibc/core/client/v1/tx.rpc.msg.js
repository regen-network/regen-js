"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createClient = this.createClient.bind(this);
        this.updateClient = this.updateClient.bind(this);
        this.upgradeClient = this.upgradeClient.bind(this);
        this.submitMisbehaviour = this.submitMisbehaviour.bind(this);
    }
    createClient(request) {
        const data = tx_1.MsgCreateClient.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "CreateClient", data);
        return promise.then(data => tx_1.MsgCreateClientResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateClient(request) {
        const data = tx_1.MsgUpdateClient.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClient", data);
        return promise.then(data => tx_1.MsgUpdateClientResponse.decode(new binary_1.BinaryReader(data)));
    }
    upgradeClient(request) {
        const data = tx_1.MsgUpgradeClient.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpgradeClient", data);
        return promise.then(data => tx_1.MsgUpgradeClientResponse.decode(new binary_1.BinaryReader(data)));
    }
    submitMisbehaviour(request) {
        const data = tx_1.MsgSubmitMisbehaviour.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "SubmitMisbehaviour", data);
        return promise.then(data => tx_1.MsgSubmitMisbehaviourResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
