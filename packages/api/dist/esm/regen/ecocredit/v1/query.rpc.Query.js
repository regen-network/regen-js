import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryClassesRequest, QueryClassesResponse, QueryClassesByAdminRequest, QueryClassesByAdminResponse, QueryClassRequest, QueryClassResponse, QueryClassIssuersRequest, QueryClassIssuersResponse, QueryProjectsRequest, QueryProjectsResponse, QueryProjectsByClassRequest, QueryProjectsByClassResponse, QueryProjectsByReferenceIdRequest, QueryProjectsByReferenceIdResponse, QueryProjectsByAdminRequest, QueryProjectsByAdminResponse, QueryProjectRequest, QueryProjectResponse, QueryBatchesRequest, QueryBatchesResponse, QueryBatchesByIssuerRequest, QueryBatchesByIssuerResponse, QueryBatchesByClassRequest, QueryBatchesByClassResponse, QueryBatchesByProjectRequest, QueryBatchesByProjectResponse, QueryBatchRequest, QueryBatchResponse, QueryBalanceRequest, QueryBalanceResponse, QueryBalancesRequest, QueryBalancesResponse, QueryBalancesByBatchRequest, QueryBalancesByBatchResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySupplyRequest, QuerySupplyResponse, QueryCreditTypesRequest, QueryCreditTypesResponse, QueryParamsRequest, QueryParamsResponse, QueryCreditTypeRequest, QueryCreditTypeResponse, QueryClassCreatorAllowlistRequest, QueryClassCreatorAllowlistResponse, QueryAllowedClassCreatorsRequest, QueryAllowedClassCreatorsResponse, QueryClassFeeRequest, QueryClassFeeResponse, QueryAllowedBridgeChainsRequest, QueryAllowedBridgeChainsResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.classes = this.classes.bind(this);
        this.classesByAdmin = this.classesByAdmin.bind(this);
        this.class = this.class.bind(this);
        this.classIssuers = this.classIssuers.bind(this);
        this.projects = this.projects.bind(this);
        this.projectsByClass = this.projectsByClass.bind(this);
        this.projectsByReferenceId = this.projectsByReferenceId.bind(this);
        this.projectsByAdmin = this.projectsByAdmin.bind(this);
        this.project = this.project.bind(this);
        this.batches = this.batches.bind(this);
        this.batchesByIssuer = this.batchesByIssuer.bind(this);
        this.batchesByClass = this.batchesByClass.bind(this);
        this.batchesByProject = this.batchesByProject.bind(this);
        this.batch = this.batch.bind(this);
        this.balance = this.balance.bind(this);
        this.balances = this.balances.bind(this);
        this.balancesByBatch = this.balancesByBatch.bind(this);
        this.allBalances = this.allBalances.bind(this);
        this.supply = this.supply.bind(this);
        this.creditTypes = this.creditTypes.bind(this);
        this.params = this.params.bind(this);
        this.creditType = this.creditType.bind(this);
        this.classCreatorAllowlist = this.classCreatorAllowlist.bind(this);
        this.allowedClassCreators = this.allowedClassCreators.bind(this);
        this.classFee = this.classFee.bind(this);
        this.allowedBridgeChains = this.allowedBridgeChains.bind(this);
    }
    classes(request = {
        pagination: undefined
    }) {
        const data = QueryClassesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Classes", data);
        return promise.then(data => QueryClassesResponse.decode(new BinaryReader(data)));
    }
    classesByAdmin(request) {
        const data = QueryClassesByAdminRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ClassesByAdmin", data);
        return promise.then(data => QueryClassesByAdminResponse.decode(new BinaryReader(data)));
    }
    class(request) {
        const data = QueryClassRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Class", data);
        return promise.then(data => QueryClassResponse.decode(new BinaryReader(data)));
    }
    classIssuers(request) {
        const data = QueryClassIssuersRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ClassIssuers", data);
        return promise.then(data => QueryClassIssuersResponse.decode(new BinaryReader(data)));
    }
    projects(request = {
        pagination: undefined
    }) {
        const data = QueryProjectsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Projects", data);
        return promise.then(data => QueryProjectsResponse.decode(new BinaryReader(data)));
    }
    projectsByClass(request) {
        const data = QueryProjectsByClassRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ProjectsByClass", data);
        return promise.then(data => QueryProjectsByClassResponse.decode(new BinaryReader(data)));
    }
    projectsByReferenceId(request) {
        const data = QueryProjectsByReferenceIdRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ProjectsByReferenceId", data);
        return promise.then(data => QueryProjectsByReferenceIdResponse.decode(new BinaryReader(data)));
    }
    projectsByAdmin(request) {
        const data = QueryProjectsByAdminRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ProjectsByAdmin", data);
        return promise.then(data => QueryProjectsByAdminResponse.decode(new BinaryReader(data)));
    }
    project(request) {
        const data = QueryProjectRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Project", data);
        return promise.then(data => QueryProjectResponse.decode(new BinaryReader(data)));
    }
    batches(request = {
        pagination: undefined
    }) {
        const data = QueryBatchesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Batches", data);
        return promise.then(data => QueryBatchesResponse.decode(new BinaryReader(data)));
    }
    batchesByIssuer(request) {
        const data = QueryBatchesByIssuerRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "BatchesByIssuer", data);
        return promise.then(data => QueryBatchesByIssuerResponse.decode(new BinaryReader(data)));
    }
    batchesByClass(request) {
        const data = QueryBatchesByClassRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "BatchesByClass", data);
        return promise.then(data => QueryBatchesByClassResponse.decode(new BinaryReader(data)));
    }
    batchesByProject(request) {
        const data = QueryBatchesByProjectRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "BatchesByProject", data);
        return promise.then(data => QueryBatchesByProjectResponse.decode(new BinaryReader(data)));
    }
    batch(request) {
        const data = QueryBatchRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Batch", data);
        return promise.then(data => QueryBatchResponse.decode(new BinaryReader(data)));
    }
    balance(request) {
        const data = QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Balance", data);
        return promise.then(data => QueryBalanceResponse.decode(new BinaryReader(data)));
    }
    balances(request) {
        const data = QueryBalancesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Balances", data);
        return promise.then(data => QueryBalancesResponse.decode(new BinaryReader(data)));
    }
    balancesByBatch(request) {
        const data = QueryBalancesByBatchRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "BalancesByBatch", data);
        return promise.then(data => QueryBalancesByBatchResponse.decode(new BinaryReader(data)));
    }
    allBalances(request = {
        pagination: undefined
    }) {
        const data = QueryAllBalancesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "AllBalances", data);
        return promise.then(data => QueryAllBalancesResponse.decode(new BinaryReader(data)));
    }
    supply(request) {
        const data = QuerySupplyRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Supply", data);
        return promise.then(data => QuerySupplyResponse.decode(new BinaryReader(data)));
    }
    creditTypes(request = {}) {
        const data = QueryCreditTypesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "CreditTypes", data);
        return promise.then(data => QueryCreditTypesResponse.decode(new BinaryReader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    creditType(request) {
        const data = QueryCreditTypeRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "CreditType", data);
        return promise.then(data => QueryCreditTypeResponse.decode(new BinaryReader(data)));
    }
    classCreatorAllowlist(request = {}) {
        const data = QueryClassCreatorAllowlistRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ClassCreatorAllowlist", data);
        return promise.then(data => QueryClassCreatorAllowlistResponse.decode(new BinaryReader(data)));
    }
    allowedClassCreators(request = {
        pagination: undefined
    }) {
        const data = QueryAllowedClassCreatorsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "AllowedClassCreators", data);
        return promise.then(data => QueryAllowedClassCreatorsResponse.decode(new BinaryReader(data)));
    }
    classFee(request = {}) {
        const data = QueryClassFeeRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ClassFee", data);
        return promise.then(data => QueryClassFeeResponse.decode(new BinaryReader(data)));
    }
    allowedBridgeChains(request = {}) {
        const data = QueryAllowedBridgeChainsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "AllowedBridgeChains", data);
        return promise.then(data => QueryAllowedBridgeChainsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        classes(request) {
            return queryService.classes(request);
        },
        classesByAdmin(request) {
            return queryService.classesByAdmin(request);
        },
        class(request) {
            return queryService.class(request);
        },
        classIssuers(request) {
            return queryService.classIssuers(request);
        },
        projects(request) {
            return queryService.projects(request);
        },
        projectsByClass(request) {
            return queryService.projectsByClass(request);
        },
        projectsByReferenceId(request) {
            return queryService.projectsByReferenceId(request);
        },
        projectsByAdmin(request) {
            return queryService.projectsByAdmin(request);
        },
        project(request) {
            return queryService.project(request);
        },
        batches(request) {
            return queryService.batches(request);
        },
        batchesByIssuer(request) {
            return queryService.batchesByIssuer(request);
        },
        batchesByClass(request) {
            return queryService.batchesByClass(request);
        },
        batchesByProject(request) {
            return queryService.batchesByProject(request);
        },
        batch(request) {
            return queryService.batch(request);
        },
        balance(request) {
            return queryService.balance(request);
        },
        balances(request) {
            return queryService.balances(request);
        },
        balancesByBatch(request) {
            return queryService.balancesByBatch(request);
        },
        allBalances(request) {
            return queryService.allBalances(request);
        },
        supply(request) {
            return queryService.supply(request);
        },
        creditTypes(request) {
            return queryService.creditTypes(request);
        },
        params(request) {
            return queryService.params(request);
        },
        creditType(request) {
            return queryService.creditType(request);
        },
        classCreatorAllowlist(request) {
            return queryService.classCreatorAllowlist(request);
        },
        allowedClassCreators(request) {
            return queryService.allowedClassCreators(request);
        },
        classFee(request) {
            return queryService.classFee(request);
        },
        allowedBridgeChains(request) {
            return queryService.allowedBridgeChains(request);
        }
    };
};
