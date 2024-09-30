"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.grant = this.grant.bind(this);
        this.exec = this.exec.bind(this);
        this.revoke = this.revoke.bind(this);
    }
    grant(request) {
        const data = tx_1.MsgGrant.encode(request).finish();
        const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Grant", data);
        return promise.then(data => tx_1.MsgGrantResponse.decode(new binary_1.BinaryReader(data)));
    }
    exec(request) {
        const data = tx_1.MsgExec.encode(request).finish();
        const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Exec", data);
        return promise.then(data => tx_1.MsgExecResponse.decode(new binary_1.BinaryReader(data)));
    }
    revoke(request) {
        const data = tx_1.MsgRevoke.encode(request).finish();
        const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Revoke", data);
        return promise.then(data => tx_1.MsgRevokeResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
