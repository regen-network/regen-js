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
        this.allowance = this.allowance.bind(this);
        this.allowances = this.allowances.bind(this);
        this.allowancesByGranter = this.allowancesByGranter.bind(this);
    }
    allowance(request) {
        const data = query_1.QueryAllowanceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowance", data);
        return promise.then(data => query_1.QueryAllowanceResponse.decode(new binary_1.BinaryReader(data)));
    }
    allowances(request) {
        const data = query_1.QueryAllowancesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowances", data);
        return promise.then(data => query_1.QueryAllowancesResponse.decode(new binary_1.BinaryReader(data)));
    }
    allowancesByGranter(request) {
        const data = query_1.QueryAllowancesByGranterRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "AllowancesByGranter", data);
        return promise.then(data => query_1.QueryAllowancesByGranterResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        allowance(request) {
            return queryService.allowance(request);
        },
        allowances(request) {
            return queryService.allowances(request);
        },
        allowancesByGranter(request) {
            return queryService.allowancesByGranter(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
