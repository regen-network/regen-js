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
        this.classes = this.classes.bind(this);
        this.classInfo = this.classInfo.bind(this);
        this.batches = this.batches.bind(this);
        this.batchInfo = this.batchInfo.bind(this);
        this.balance = this.balance.bind(this);
        this.supply = this.supply.bind(this);
        this.creditTypes = this.creditTypes.bind(this);
        this.params = this.params.bind(this);
    }
    classes(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryClassesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Classes", data);
        return promise.then(data => query_1.QueryClassesResponse.decode(new binary_1.BinaryReader(data)));
    }
    classInfo(request) {
        const data = query_1.QueryClassInfoRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "ClassInfo", data);
        return promise.then(data => query_1.QueryClassInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    batches(request) {
        const data = query_1.QueryBatchesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Batches", data);
        return promise.then(data => query_1.QueryBatchesResponse.decode(new binary_1.BinaryReader(data)));
    }
    batchInfo(request) {
        const data = query_1.QueryBatchInfoRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "BatchInfo", data);
        return promise.then(data => query_1.QueryBatchInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    balance(request) {
        const data = query_1.QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Balance", data);
        return promise.then(data => query_1.QueryBalanceResponse.decode(new binary_1.BinaryReader(data)));
    }
    supply(request) {
        const data = query_1.QuerySupplyRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Supply", data);
        return promise.then(data => query_1.QuerySupplyResponse.decode(new binary_1.BinaryReader(data)));
    }
    creditTypes(request = {}) {
        const data = query_1.QueryCreditTypesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "CreditTypes", data);
        return promise.then(data => query_1.QueryCreditTypesResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        classes(request) {
            return queryService.classes(request);
        },
        classInfo(request) {
            return queryService.classInfo(request);
        },
        batches(request) {
            return queryService.batches(request);
        },
        batchInfo(request) {
            return queryService.batchInfo(request);
        },
        balance(request) {
            return queryService.balance(request);
        },
        supply(request) {
            return queryService.supply(request);
        },
        creditTypes(request) {
            return queryService.creditTypes(request);
        },
        params(request) {
            return queryService.params(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
