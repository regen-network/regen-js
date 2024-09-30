"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.denomTrace = this.denomTrace.bind(this);
        this.denomTraces = this.denomTraces.bind(this);
        this.params = this.params.bind(this);
        this.denomHash = this.denomHash.bind(this);
        this.escrowAddress = this.escrowAddress.bind(this);
    }
    denomTrace(request) {
        const data = query_1.QueryDenomTraceRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTrace", data);
        return promise.then(data => query_1.QueryDenomTraceResponse.decode(new binary_1.BinaryReader(data)));
    }
    denomTraces(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryDenomTracesRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTraces", data);
        return promise.then(data => query_1.QueryDenomTracesResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    denomHash(request) {
        const data = query_1.QueryDenomHashRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomHash", data);
        return promise.then(data => query_1.QueryDenomHashResponse.decode(new binary_1.BinaryReader(data)));
    }
    escrowAddress(request) {
        const data = query_1.QueryEscrowAddressRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "EscrowAddress", data);
        return promise.then(data => query_1.QueryEscrowAddressResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        denomTrace(request) {
            return queryService.denomTrace(request);
        },
        denomTraces(request) {
            return queryService.denomTraces(request);
        },
        params(request) {
            return queryService.params(request);
        },
        denomHash(request) {
            return queryService.denomHash(request);
        },
        escrowAddress(request) {
            return queryService.escrowAddress(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
