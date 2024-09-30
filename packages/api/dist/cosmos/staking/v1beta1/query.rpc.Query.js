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
        this.validators = this.validators.bind(this);
        this.validator = this.validator.bind(this);
        this.validatorDelegations = this.validatorDelegations.bind(this);
        this.validatorUnbondingDelegations = this.validatorUnbondingDelegations.bind(this);
        this.delegation = this.delegation.bind(this);
        this.unbondingDelegation = this.unbondingDelegation.bind(this);
        this.delegatorDelegations = this.delegatorDelegations.bind(this);
        this.delegatorUnbondingDelegations = this.delegatorUnbondingDelegations.bind(this);
        this.redelegations = this.redelegations.bind(this);
        this.delegatorValidators = this.delegatorValidators.bind(this);
        this.delegatorValidator = this.delegatorValidator.bind(this);
        this.historicalInfo = this.historicalInfo.bind(this);
        this.pool = this.pool.bind(this);
        this.params = this.params.bind(this);
    }
    validators(request) {
        const data = query_1.QueryValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
        return promise.then(data => query_1.QueryValidatorsResponse.decode(new binary_1.BinaryReader(data)));
    }
    validator(request) {
        const data = query_1.QueryValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
        return promise.then(data => query_1.QueryValidatorResponse.decode(new binary_1.BinaryReader(data)));
    }
    validatorDelegations(request) {
        const data = query_1.QueryValidatorDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
        return promise.then(data => query_1.QueryValidatorDelegationsResponse.decode(new binary_1.BinaryReader(data)));
    }
    validatorUnbondingDelegations(request) {
        const data = query_1.QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
        return promise.then(data => query_1.QueryValidatorUnbondingDelegationsResponse.decode(new binary_1.BinaryReader(data)));
    }
    delegation(request) {
        const data = query_1.QueryDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
        return promise.then(data => query_1.QueryDelegationResponse.decode(new binary_1.BinaryReader(data)));
    }
    unbondingDelegation(request) {
        const data = query_1.QueryUnbondingDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
        return promise.then(data => query_1.QueryUnbondingDelegationResponse.decode(new binary_1.BinaryReader(data)));
    }
    delegatorDelegations(request) {
        const data = query_1.QueryDelegatorDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
        return promise.then(data => query_1.QueryDelegatorDelegationsResponse.decode(new binary_1.BinaryReader(data)));
    }
    delegatorUnbondingDelegations(request) {
        const data = query_1.QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
        return promise.then(data => query_1.QueryDelegatorUnbondingDelegationsResponse.decode(new binary_1.BinaryReader(data)));
    }
    redelegations(request) {
        const data = query_1.QueryRedelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
        return promise.then(data => query_1.QueryRedelegationsResponse.decode(new binary_1.BinaryReader(data)));
    }
    delegatorValidators(request) {
        const data = query_1.QueryDelegatorValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
        return promise.then(data => query_1.QueryDelegatorValidatorsResponse.decode(new binary_1.BinaryReader(data)));
    }
    delegatorValidator(request) {
        const data = query_1.QueryDelegatorValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
        return promise.then(data => query_1.QueryDelegatorValidatorResponse.decode(new binary_1.BinaryReader(data)));
    }
    historicalInfo(request) {
        const data = query_1.QueryHistoricalInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
        return promise.then(data => query_1.QueryHistoricalInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    pool(request = {}) {
        const data = query_1.QueryPoolRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
        return promise.then(data => query_1.QueryPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        validators(request) {
            return queryService.validators(request);
        },
        validator(request) {
            return queryService.validator(request);
        },
        validatorDelegations(request) {
            return queryService.validatorDelegations(request);
        },
        validatorUnbondingDelegations(request) {
            return queryService.validatorUnbondingDelegations(request);
        },
        delegation(request) {
            return queryService.delegation(request);
        },
        unbondingDelegation(request) {
            return queryService.unbondingDelegation(request);
        },
        delegatorDelegations(request) {
            return queryService.delegatorDelegations(request);
        },
        delegatorUnbondingDelegations(request) {
            return queryService.delegatorUnbondingDelegations(request);
        },
        redelegations(request) {
            return queryService.redelegations(request);
        },
        delegatorValidators(request) {
            return queryService.delegatorValidators(request);
        },
        delegatorValidator(request) {
            return queryService.delegatorValidator(request);
        },
        historicalInfo(request) {
            return queryService.historicalInfo(request);
        },
        pool(request) {
            return queryService.pool(request);
        },
        params(request) {
            return queryService.params(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
