"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createValidator = this.createValidator.bind(this);
        this.editValidator = this.editValidator.bind(this);
        this.delegate = this.delegate.bind(this);
        this.beginRedelegate = this.beginRedelegate.bind(this);
        this.undelegate = this.undelegate.bind(this);
        this.cancelUnbondingDelegation = this.cancelUnbondingDelegation.bind(this);
    }
    createValidator(request) {
        const data = tx_1.MsgCreateValidator.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
        return promise.then(data => tx_1.MsgCreateValidatorResponse.decode(new binary_1.BinaryReader(data)));
    }
    editValidator(request) {
        const data = tx_1.MsgEditValidator.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
        return promise.then(data => tx_1.MsgEditValidatorResponse.decode(new binary_1.BinaryReader(data)));
    }
    delegate(request) {
        const data = tx_1.MsgDelegate.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
        return promise.then(data => tx_1.MsgDelegateResponse.decode(new binary_1.BinaryReader(data)));
    }
    beginRedelegate(request) {
        const data = tx_1.MsgBeginRedelegate.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
        return promise.then(data => tx_1.MsgBeginRedelegateResponse.decode(new binary_1.BinaryReader(data)));
    }
    undelegate(request) {
        const data = tx_1.MsgUndelegate.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
        return promise.then(data => tx_1.MsgUndelegateResponse.decode(new binary_1.BinaryReader(data)));
    }
    cancelUnbondingDelegation(request) {
        const data = tx_1.MsgCancelUnbondingDelegation.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CancelUnbondingDelegation", data);
        return promise.then(data => tx_1.MsgCancelUnbondingDelegationResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
