"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.registerAccount = this.registerAccount.bind(this);
        this.submitTx = this.submitTx.bind(this);
    }
    registerAccount(request) {
        const data = tx_1.MsgRegisterAccount.encode(request).finish();
        const promise = this.rpc.request("regen.intertx.v1.Msg", "RegisterAccount", data);
        return promise.then(data => tx_1.MsgRegisterAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    submitTx(request) {
        const data = tx_1.MsgSubmitTx.encode(request).finish();
        const promise = this.rpc.request("regen.intertx.v1.Msg", "SubmitTx", data);
        return promise.then(data => tx_1.MsgSubmitTxResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
