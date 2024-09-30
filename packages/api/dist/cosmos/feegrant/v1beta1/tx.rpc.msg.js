"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.grantAllowance = this.grantAllowance.bind(this);
        this.revokeAllowance = this.revokeAllowance.bind(this);
    }
    grantAllowance(request) {
        const data = tx_1.MsgGrantAllowance.encode(request).finish();
        const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "GrantAllowance", data);
        return promise.then(data => tx_1.MsgGrantAllowanceResponse.decode(new binary_1.BinaryReader(data)));
    }
    revokeAllowance(request) {
        const data = tx_1.MsgRevokeAllowance.encode(request).finish();
        const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "RevokeAllowance", data);
        return promise.then(data => tx_1.MsgRevokeAllowanceResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
