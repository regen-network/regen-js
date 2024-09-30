"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createVestingAccount = this.createVestingAccount.bind(this);
        this.createPermanentLockedAccount = this.createPermanentLockedAccount.bind(this);
        this.createPeriodicVestingAccount = this.createPeriodicVestingAccount.bind(this);
    }
    createVestingAccount(request) {
        const data = tx_1.MsgCreateVestingAccount.encode(request).finish();
        const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateVestingAccount", data);
        return promise.then(data => tx_1.MsgCreateVestingAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    createPermanentLockedAccount(request) {
        const data = tx_1.MsgCreatePermanentLockedAccount.encode(request).finish();
        const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreatePermanentLockedAccount", data);
        return promise.then(data => tx_1.MsgCreatePermanentLockedAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    createPeriodicVestingAccount(request) {
        const data = tx_1.MsgCreatePeriodicVestingAccount.encode(request).finish();
        const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreatePeriodicVestingAccount", data);
        return promise.then(data => tx_1.MsgCreatePeriodicVestingAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
