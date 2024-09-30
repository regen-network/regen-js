"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.validatorOutstandingRewards = this.validatorOutstandingRewards.bind(this);
        this.validatorCommission = this.validatorCommission.bind(this);
        this.validatorSlashes = this.validatorSlashes.bind(this);
        this.delegationRewards = this.delegationRewards.bind(this);
        this.delegationTotalRewards = this.delegationTotalRewards.bind(this);
        this.delegatorValidators = this.delegatorValidators.bind(this);
        this.delegatorWithdrawAddress = this.delegatorWithdrawAddress.bind(this);
        this.communityPool = this.communityPool.bind(this);
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    validatorOutstandingRewards(request) {
        const data = query_1.QueryValidatorOutstandingRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorOutstandingRewards", data);
        return promise.then(data => query_1.QueryValidatorOutstandingRewardsResponse.decode(new binary_1.BinaryReader(data)));
    }
    validatorCommission(request) {
        const data = query_1.QueryValidatorCommissionRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
        return promise.then(data => query_1.QueryValidatorCommissionResponse.decode(new binary_1.BinaryReader(data)));
    }
    validatorSlashes(request) {
        const data = query_1.QueryValidatorSlashesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
        return promise.then(data => query_1.QueryValidatorSlashesResponse.decode(new binary_1.BinaryReader(data)));
    }
    delegationRewards(request) {
        const data = query_1.QueryDelegationRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
        return promise.then(data => query_1.QueryDelegationRewardsResponse.decode(new binary_1.BinaryReader(data)));
    }
    delegationTotalRewards(request) {
        const data = query_1.QueryDelegationTotalRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
        return promise.then(data => query_1.QueryDelegationTotalRewardsResponse.decode(new binary_1.BinaryReader(data)));
    }
    delegatorValidators(request) {
        const data = query_1.QueryDelegatorValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
        return promise.then(data => query_1.QueryDelegatorValidatorsResponse.decode(new binary_1.BinaryReader(data)));
    }
    delegatorWithdrawAddress(request) {
        const data = query_1.QueryDelegatorWithdrawAddressRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
        return promise.then(data => query_1.QueryDelegatorWithdrawAddressResponse.decode(new binary_1.BinaryReader(data)));
    }
    communityPool(request = {}) {
        const data = query_1.QueryCommunityPoolRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
        return promise.then(data => query_1.QueryCommunityPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        validatorOutstandingRewards(request) {
            return queryService.validatorOutstandingRewards(request);
        },
        validatorCommission(request) {
            return queryService.validatorCommission(request);
        },
        validatorSlashes(request) {
            return queryService.validatorSlashes(request);
        },
        delegationRewards(request) {
            return queryService.delegationRewards(request);
        },
        delegationTotalRewards(request) {
            return queryService.delegationTotalRewards(request);
        },
        delegatorValidators(request) {
            return queryService.delegatorValidators(request);
        },
        delegatorWithdrawAddress(request) {
            return queryService.delegatorWithdrawAddress(request);
        },
        communityPool(request) {
            return queryService.communityPool(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
