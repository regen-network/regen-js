"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.ServiceClientImpl = void 0;
const binary_1 = require("../../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class ServiceClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.config = this.config.bind(this);
    }
    config(request = {}) {
        const data = query_1.ConfigRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.node.v1beta1.Service", "Config", data);
        return promise.then(data => query_1.ConfigResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.ServiceClientImpl = ServiceClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new ServiceClientImpl(rpc);
    return {
        config(request) {
            return queryService.config(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
