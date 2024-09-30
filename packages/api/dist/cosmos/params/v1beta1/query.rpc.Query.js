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
        this.subspaces = this.subspaces.bind(this);
    }
    params(request) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.params.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    subspaces(request = {}) {
        const data = query_1.QuerySubspacesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.params.v1beta1.Query", "Subspaces", data);
        return promise.then(data => query_1.QuerySubspacesResponse.decode(new binary_1.BinaryReader(data)));
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
        subspaces(request) {
            return queryService.subspaces(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
