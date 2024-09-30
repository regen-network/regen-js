"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.transfer = this.transfer.bind(this);
    }
    transfer(request) {
        const data = tx_1.MsgTransfer.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Msg", "Transfer", data);
        return promise.then(data => tx_1.MsgTransferResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
