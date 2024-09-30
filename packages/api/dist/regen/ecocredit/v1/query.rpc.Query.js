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
        const data = query_1.QueryClassesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Classes", data);
        return promise.then(data => query_1.QueryClassesResponse.decode(new binary_1.BinaryReader(data)));
    }
    classesByAdmin(request) {
        const data = query_1.QueryClassesByAdminRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ClassesByAdmin", data);
        return promise.then(data => query_1.QueryClassesByAdminResponse.decode(new binary_1.BinaryReader(data)));
    }
    class(request) {
        const data = query_1.QueryClassRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Class", data);
        return promise.then(data => query_1.QueryClassResponse.decode(new binary_1.BinaryReader(data)));
    }
    classIssuers(request) {
        const data = query_1.QueryClassIssuersRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ClassIssuers", data);
        return promise.then(data => query_1.QueryClassIssuersResponse.decode(new binary_1.BinaryReader(data)));
    }
    projects(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryProjectsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Projects", data);
        return promise.then(data => query_1.QueryProjectsResponse.decode(new binary_1.BinaryReader(data)));
    }
    projectsByClass(request) {
        const data = query_1.QueryProjectsByClassRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ProjectsByClass", data);
        return promise.then(data => query_1.QueryProjectsByClassResponse.decode(new binary_1.BinaryReader(data)));
    }
    projectsByReferenceId(request) {
        const data = query_1.QueryProjectsByReferenceIdRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ProjectsByReferenceId", data);
        return promise.then(data => query_1.QueryProjectsByReferenceIdResponse.decode(new binary_1.BinaryReader(data)));
    }
    projectsByAdmin(request) {
        const data = query_1.QueryProjectsByAdminRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ProjectsByAdmin", data);
        return promise.then(data => query_1.QueryProjectsByAdminResponse.decode(new binary_1.BinaryReader(data)));
    }
    project(request) {
        const data = query_1.QueryProjectRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Project", data);
        return promise.then(data => query_1.QueryProjectResponse.decode(new binary_1.BinaryReader(data)));
    }
    batches(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryBatchesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Batches", data);
        return promise.then(data => query_1.QueryBatchesResponse.decode(new binary_1.BinaryReader(data)));
    }
    batchesByIssuer(request) {
        const data = query_1.QueryBatchesByIssuerRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "BatchesByIssuer", data);
        return promise.then(data => query_1.QueryBatchesByIssuerResponse.decode(new binary_1.BinaryReader(data)));
    }
    batchesByClass(request) {
        const data = query_1.QueryBatchesByClassRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "BatchesByClass", data);
        return promise.then(data => query_1.QueryBatchesByClassResponse.decode(new binary_1.BinaryReader(data)));
    }
    batchesByProject(request) {
        const data = query_1.QueryBatchesByProjectRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "BatchesByProject", data);
        return promise.then(data => query_1.QueryBatchesByProjectResponse.decode(new binary_1.BinaryReader(data)));
    }
    batch(request) {
        const data = query_1.QueryBatchRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Batch", data);
        return promise.then(data => query_1.QueryBatchResponse.decode(new binary_1.BinaryReader(data)));
    }
    balance(request) {
        const data = query_1.QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Balance", data);
        return promise.then(data => query_1.QueryBalanceResponse.decode(new binary_1.BinaryReader(data)));
    }
    balances(request) {
        const data = query_1.QueryBalancesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Balances", data);
        return promise.then(data => query_1.QueryBalancesResponse.decode(new binary_1.BinaryReader(data)));
    }
    balancesByBatch(request) {
        const data = query_1.QueryBalancesByBatchRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "BalancesByBatch", data);
        return promise.then(data => query_1.QueryBalancesByBatchResponse.decode(new binary_1.BinaryReader(data)));
    }
    allBalances(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryAllBalancesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "AllBalances", data);
        return promise.then(data => query_1.QueryAllBalancesResponse.decode(new binary_1.BinaryReader(data)));
    }
    supply(request) {
        const data = query_1.QuerySupplyRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Supply", data);
        return promise.then(data => query_1.QuerySupplyResponse.decode(new binary_1.BinaryReader(data)));
    }
    creditTypes(request = {}) {
        const data = query_1.QueryCreditTypesRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "CreditTypes", data);
        return promise.then(data => query_1.QueryCreditTypesResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    creditType(request) {
        const data = query_1.QueryCreditTypeRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "CreditType", data);
        return promise.then(data => query_1.QueryCreditTypeResponse.decode(new binary_1.BinaryReader(data)));
    }
    classCreatorAllowlist(request = {}) {
        const data = query_1.QueryClassCreatorAllowlistRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ClassCreatorAllowlist", data);
        return promise.then(data => query_1.QueryClassCreatorAllowlistResponse.decode(new binary_1.BinaryReader(data)));
    }
    allowedClassCreators(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryAllowedClassCreatorsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "AllowedClassCreators", data);
        return promise.then(data => query_1.QueryAllowedClassCreatorsResponse.decode(new binary_1.BinaryReader(data)));
    }
    classFee(request = {}) {
        const data = query_1.QueryClassFeeRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "ClassFee", data);
        return promise.then(data => query_1.QueryClassFeeResponse.decode(new binary_1.BinaryReader(data)));
    }
    allowedBridgeChains(request = {}) {
        const data = query_1.QueryAllowedBridgeChainsRequest.encode(request).finish();
        const promise = this.rpc.request("regen.ecocredit.v1.Query", "AllowedBridgeChains", data);
        return promise.then(data => query_1.QueryAllowedBridgeChainsResponse.decode(new binary_1.BinaryReader(data)));
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
exports.createRpcQueryExtension = createRpcQueryExtension;
