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
        this.clientState = this.clientState.bind(this);
        this.clientStates = this.clientStates.bind(this);
        this.consensusState = this.consensusState.bind(this);
        this.consensusStates = this.consensusStates.bind(this);
        this.consensusStateHeights = this.consensusStateHeights.bind(this);
        this.clientStatus = this.clientStatus.bind(this);
        this.clientParams = this.clientParams.bind(this);
        this.upgradedClientState = this.upgradedClientState.bind(this);
        this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
    }
    clientState(request) {
        const data = query_1.QueryClientStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
        return promise.then(data => query_1.QueryClientStateResponse.decode(new binary_1.BinaryReader(data)));
    }
    clientStates(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryClientStatesRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
        return promise.then(data => query_1.QueryClientStatesResponse.decode(new binary_1.BinaryReader(data)));
    }
    consensusState(request) {
        const data = query_1.QueryConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
        return promise.then(data => query_1.QueryConsensusStateResponse.decode(new binary_1.BinaryReader(data)));
    }
    consensusStates(request) {
        const data = query_1.QueryConsensusStatesRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
        return promise.then(data => query_1.QueryConsensusStatesResponse.decode(new binary_1.BinaryReader(data)));
    }
    consensusStateHeights(request) {
        const data = query_1.QueryConsensusStateHeightsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStateHeights", data);
        return promise.then(data => query_1.QueryConsensusStateHeightsResponse.decode(new binary_1.BinaryReader(data)));
    }
    clientStatus(request) {
        const data = query_1.QueryClientStatusRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
        return promise.then(data => query_1.QueryClientStatusResponse.decode(new binary_1.BinaryReader(data)));
    }
    clientParams(request = {}) {
        const data = query_1.QueryClientParamsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
        return promise.then(data => query_1.QueryClientParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    upgradedClientState(request = {}) {
        const data = query_1.QueryUpgradedClientStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
        return promise.then(data => query_1.QueryUpgradedClientStateResponse.decode(new binary_1.BinaryReader(data)));
    }
    upgradedConsensusState(request = {}) {
        const data = query_1.QueryUpgradedConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
        return promise.then(data => query_1.QueryUpgradedConsensusStateResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        clientState(request) {
            return queryService.clientState(request);
        },
        clientStates(request) {
            return queryService.clientStates(request);
        },
        consensusState(request) {
            return queryService.consensusState(request);
        },
        consensusStates(request) {
            return queryService.consensusStates(request);
        },
        consensusStateHeights(request) {
            return queryService.consensusStateHeights(request);
        },
        clientStatus(request) {
            return queryService.clientStatus(request);
        },
        clientParams(request) {
            return queryService.clientParams(request);
        },
        upgradedClientState(request) {
            return queryService.upgradedClientState(request);
        },
        upgradedConsensusState(request) {
            return queryService.upgradedConsensusState(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
