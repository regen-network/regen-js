import { BinaryReader } from "../../../binary";
import { MsgCreateValidator, MsgCreateValidatorResponse, MsgEditValidator, MsgEditValidatorResponse, MsgDelegate, MsgDelegateResponse, MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgUndelegate, MsgUndelegateResponse, MsgCancelUnbondingDelegation, MsgCancelUnbondingDelegationResponse } from "./tx";
export class MsgClientImpl {
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
        const data = MsgCreateValidator.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
        return promise.then(data => MsgCreateValidatorResponse.decode(new BinaryReader(data)));
    }
    editValidator(request) {
        const data = MsgEditValidator.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
        return promise.then(data => MsgEditValidatorResponse.decode(new BinaryReader(data)));
    }
    delegate(request) {
        const data = MsgDelegate.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
        return promise.then(data => MsgDelegateResponse.decode(new BinaryReader(data)));
    }
    beginRedelegate(request) {
        const data = MsgBeginRedelegate.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
        return promise.then(data => MsgBeginRedelegateResponse.decode(new BinaryReader(data)));
    }
    undelegate(request) {
        const data = MsgUndelegate.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
        return promise.then(data => MsgUndelegateResponse.decode(new BinaryReader(data)));
    }
    cancelUnbondingDelegation(request) {
        const data = MsgCancelUnbondingDelegation.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CancelUnbondingDelegation", data);
        return promise.then(data => MsgCancelUnbondingDelegationResponse.decode(new BinaryReader(data)));
    }
}
