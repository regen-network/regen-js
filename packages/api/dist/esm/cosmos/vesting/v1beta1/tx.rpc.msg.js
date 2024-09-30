import { BinaryReader } from "../../../binary";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountResponse, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createVestingAccount = this.createVestingAccount.bind(this);
        this.createPermanentLockedAccount = this.createPermanentLockedAccount.bind(this);
        this.createPeriodicVestingAccount = this.createPeriodicVestingAccount.bind(this);
    }
    createVestingAccount(request) {
        const data = MsgCreateVestingAccount.encode(request).finish();
        const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateVestingAccount", data);
        return promise.then(data => MsgCreateVestingAccountResponse.decode(new BinaryReader(data)));
    }
    createPermanentLockedAccount(request) {
        const data = MsgCreatePermanentLockedAccount.encode(request).finish();
        const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreatePermanentLockedAccount", data);
        return promise.then(data => MsgCreatePermanentLockedAccountResponse.decode(new BinaryReader(data)));
    }
    createPeriodicVestingAccount(request) {
        const data = MsgCreatePeriodicVestingAccount.encode(request).finish();
        const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreatePeriodicVestingAccount", data);
        return promise.then(data => MsgCreatePeriodicVestingAccountResponse.decode(new BinaryReader(data)));
    }
}
