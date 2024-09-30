"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.anchor = this.anchor.bind(this);
        this.attest = this.attest.bind(this);
        this.defineResolver = this.defineResolver.bind(this);
        this.registerResolver = this.registerResolver.bind(this);
    }
    anchor(request) {
        const data = tx_1.MsgAnchor.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Msg", "Anchor", data);
        return promise.then(data => tx_1.MsgAnchorResponse.decode(new binary_1.BinaryReader(data)));
    }
    attest(request) {
        const data = tx_1.MsgAttest.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Msg", "Attest", data);
        return promise.then(data => tx_1.MsgAttestResponse.decode(new binary_1.BinaryReader(data)));
    }
    defineResolver(request) {
        const data = tx_1.MsgDefineResolver.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Msg", "DefineResolver", data);
        return promise.then(data => tx_1.MsgDefineResolverResponse.decode(new binary_1.BinaryReader(data)));
    }
    registerResolver(request) {
        const data = tx_1.MsgRegisterResolver.encode(request).finish();
        const promise = this.rpc.request("regen.data.v1.Msg", "RegisterResolver", data);
        return promise.then(data => tx_1.MsgRegisterResolverResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
