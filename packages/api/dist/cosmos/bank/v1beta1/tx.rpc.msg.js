"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.send = this.send.bind(this);
        this.multiSend = this.multiSend.bind(this);
    }
    send(request) {
        const data = tx_1.MsgSend.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "Send", data);
        return promise.then(data => tx_1.MsgSendResponse.decode(new binary_1.BinaryReader(data)));
    }
    multiSend(request) {
        const data = tx_1.MsgMultiSend.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "MultiSend", data);
        return promise.then(data => tx_1.MsgMultiSendResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
