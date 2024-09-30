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
        this.interchainAccount = this.interchainAccount.bind(this);
    }
    interchainAccount(request) {
        const data = query_1.QueryInterchainAccountRequest.encode(request).finish();
        const promise = this.rpc.request("regen.intertx.v1.Query", "InterchainAccount", data);
        return promise.then(data => query_1.QueryInterchainAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        interchainAccount(request) {
            return queryService.interchainAccount(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
