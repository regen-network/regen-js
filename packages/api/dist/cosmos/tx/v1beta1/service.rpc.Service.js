"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.ServiceClientImpl = void 0;
const binary_1 = require("../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const service_1 = require("./service");
class ServiceClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.simulate = this.simulate.bind(this);
        this.getTx = this.getTx.bind(this);
        this.broadcastTx = this.broadcastTx.bind(this);
        this.getTxsEvent = this.getTxsEvent.bind(this);
        this.getBlockWithTxs = this.getBlockWithTxs.bind(this);
    }
    simulate(request) {
        const data = service_1.SimulateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
        return promise.then(data => service_1.SimulateResponse.decode(new binary_1.BinaryReader(data)));
    }
    getTx(request) {
        const data = service_1.GetTxRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
        return promise.then(data => service_1.GetTxResponse.decode(new binary_1.BinaryReader(data)));
    }
    broadcastTx(request) {
        const data = service_1.BroadcastTxRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
        return promise.then(data => service_1.BroadcastTxResponse.decode(new binary_1.BinaryReader(data)));
    }
    getTxsEvent(request) {
        const data = service_1.GetTxsEventRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
        return promise.then(data => service_1.GetTxsEventResponse.decode(new binary_1.BinaryReader(data)));
    }
    getBlockWithTxs(request) {
        const data = service_1.GetBlockWithTxsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
        return promise.then(data => service_1.GetBlockWithTxsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.ServiceClientImpl = ServiceClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new ServiceClientImpl(rpc);
    return {
        simulate(request) {
            return queryService.simulate(request);
        },
        getTx(request) {
            return queryService.getTx(request);
        },
        broadcastTx(request) {
            return queryService.broadcastTx(request);
        },
        getTxsEvent(request) {
            return queryService.getTxsEvent(request);
        },
        getBlockWithTxs(request) {
            return queryService.getBlockWithTxs(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
