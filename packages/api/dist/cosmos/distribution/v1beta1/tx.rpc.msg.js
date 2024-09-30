"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.setWithdrawAddress = this.setWithdrawAddress.bind(this);
        this.withdrawDelegatorReward = this.withdrawDelegatorReward.bind(this);
        this.withdrawValidatorCommission = this.withdrawValidatorCommission.bind(this);
        this.fundCommunityPool = this.fundCommunityPool.bind(this);
    }
    setWithdrawAddress(request) {
        const data = tx_1.MsgSetWithdrawAddress.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "SetWithdrawAddress", data);
        return promise.then(data => tx_1.MsgSetWithdrawAddressResponse.decode(new binary_1.BinaryReader(data)));
    }
    withdrawDelegatorReward(request) {
        const data = tx_1.MsgWithdrawDelegatorReward.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawDelegatorReward", data);
        return promise.then(data => tx_1.MsgWithdrawDelegatorRewardResponse.decode(new binary_1.BinaryReader(data)));
    }
    withdrawValidatorCommission(request) {
        const data = tx_1.MsgWithdrawValidatorCommission.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawValidatorCommission", data);
        return promise.then(data => tx_1.MsgWithdrawValidatorCommissionResponse.decode(new binary_1.BinaryReader(data)));
    }
    fundCommunityPool(request) {
        const data = tx_1.MsgFundCommunityPool.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "FundCommunityPool", data);
        return promise.then(data => tx_1.MsgFundCommunityPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
