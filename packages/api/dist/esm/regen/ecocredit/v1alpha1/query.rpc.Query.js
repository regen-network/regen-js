import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryClassesRequest, QueryClassesResponse, QueryClassInfoRequest, QueryClassInfoResponse, QueryBatchesRequest, QueryBatchesResponse, QueryBatchInfoRequest, QueryBatchInfoResponse, QueryBalanceRequest, QueryBalanceResponse, QuerySupplyRequest, QuerySupplyResponse, QueryCreditTypesRequest, QueryCreditTypesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class QueryClientImpl {
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
        const data = QueryClassesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Classes", data);
        return promise.then(data => QueryClassesResponse.decode(new BinaryReader(data)));
    }
    classInfo(request) {
        const data = QueryClassInfoRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "ClassInfo", data);
        return promise.then(data => QueryClassInfoResponse.decode(new BinaryReader(data)));
    }
    batches(request) {
        const data = QueryBatchesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Batches", data);
        return promise.then(data => QueryBatchesResponse.decode(new BinaryReader(data)));
    }
    batchInfo(request) {
        const data = QueryBatchInfoRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "BatchInfo", data);
        return promise.then(data => QueryBatchInfoResponse.decode(new BinaryReader(data)));
    }
    balance(request) {
        const data = QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Balance", data);
        return promise.then(data => QueryBalanceResponse.decode(new BinaryReader(data)));
    }
    supply(request) {
        const data = QuerySupplyRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Supply", data);
        return promise.then(data => QuerySupplyResponse.decode(new BinaryReader(data)));
    }
    creditTypes(request = {}) {
        const data = QueryCreditTypesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "CreditTypes", data);
        return promise.then(data => QueryCreditTypesResponse.decode(new BinaryReader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
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
