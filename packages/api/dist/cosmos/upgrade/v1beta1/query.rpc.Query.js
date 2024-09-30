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
        this.currentPlan = this.currentPlan.bind(this);
        this.appliedPlan = this.appliedPlan.bind(this);
        this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
        this.moduleVersions = this.moduleVersions.bind(this);
        this.authority = this.authority.bind(this);
    }
    currentPlan(request = {}) {
        const data = query_1.QueryCurrentPlanRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
        return promise.then(data => query_1.QueryCurrentPlanResponse.decode(new binary_1.BinaryReader(data)));
    }
    appliedPlan(request) {
        const data = query_1.QueryAppliedPlanRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
        return promise.then(data => query_1.QueryAppliedPlanResponse.decode(new binary_1.BinaryReader(data)));
    }
    upgradedConsensusState(request) {
        const data = query_1.QueryUpgradedConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
        return promise.then(data => query_1.QueryUpgradedConsensusStateResponse.decode(new binary_1.BinaryReader(data)));
    }
    moduleVersions(request) {
        const data = query_1.QueryModuleVersionsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
        return promise.then(data => query_1.QueryModuleVersionsResponse.decode(new binary_1.BinaryReader(data)));
    }
    authority(request = {}) {
        const data = query_1.QueryAuthorityRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "Authority", data);
        return promise.then(data => query_1.QueryAuthorityResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        currentPlan(request) {
            return queryService.currentPlan(request);
        },
        appliedPlan(request) {
            return queryService.appliedPlan(request);
        },
        upgradedConsensusState(request) {
            return queryService.upgradedConsensusState(request);
        },
        moduleVersions(request) {
            return queryService.moduleVersions(request);
        },
        authority(request) {
            return queryService.authority(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
