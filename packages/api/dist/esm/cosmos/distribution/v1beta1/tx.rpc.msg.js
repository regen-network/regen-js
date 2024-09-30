import { BinaryReader } from "../../../binary";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse, MsgFundCommunityPool, MsgFundCommunityPoolResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.setWithdrawAddress = this.setWithdrawAddress.bind(this);
        this.withdrawDelegatorReward = this.withdrawDelegatorReward.bind(this);
        this.withdrawValidatorCommission = this.withdrawValidatorCommission.bind(this);
        this.fundCommunityPool = this.fundCommunityPool.bind(this);
    }
    setWithdrawAddress(request) {
        const data = MsgSetWithdrawAddress.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "SetWithdrawAddress", data);
        return promise.then(data => MsgSetWithdrawAddressResponse.decode(new BinaryReader(data)));
    }
    withdrawDelegatorReward(request) {
        const data = MsgWithdrawDelegatorReward.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawDelegatorReward", data);
        return promise.then(data => MsgWithdrawDelegatorRewardResponse.decode(new BinaryReader(data)));
    }
    withdrawValidatorCommission(request) {
        const data = MsgWithdrawValidatorCommission.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawValidatorCommission", data);
        return promise.then(data => MsgWithdrawValidatorCommissionResponse.decode(new BinaryReader(data)));
    }
    fundCommunityPool(request) {
        const data = MsgFundCommunityPool.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "FundCommunityPool", data);
        return promise.then(data => MsgFundCommunityPoolResponse.decode(new BinaryReader(data)));
    }
}
