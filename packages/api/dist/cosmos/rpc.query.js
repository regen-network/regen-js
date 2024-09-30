"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRPCQueryClient = void 0;
//@ts-nocheck
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const stargate_1 = require("@cosmjs/stargate");
const createRPCQueryClient = async ({ rpcEndpoint }) => {
    const tmClient = await tendermint_rpc_1.Tendermint34Client.connect(rpcEndpoint);
    const client = new stargate_1.QueryClient(tmClient);
    return {
        cosmos: {
            auth: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./auth/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            authz: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./authz/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            bank: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./bank/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            base: {
                node: {
                    v1beta1: (await Promise.resolve().then(() => __importStar(require("./base/node/v1beta1/query.rpc.Service")))).createRpcQueryExtension(client)
                }
            },
            distribution: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./distribution/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            feegrant: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./feegrant/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            gov: {
                v1: (await Promise.resolve().then(() => __importStar(require("./gov/v1/query.rpc.Query")))).createRpcQueryExtension(client),
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./gov/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            group: {
                v1: (await Promise.resolve().then(() => __importStar(require("./group/v1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            mint: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./mint/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            params: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./params/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            staking: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./staking/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            },
            tx: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./tx/v1beta1/service.rpc.Service")))).createRpcQueryExtension(client)
            },
            upgrade: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./upgrade/v1beta1/query.rpc.Query")))).createRpcQueryExtension(client)
            }
        }
    };
};
exports.createRPCQueryClient = createRPCQueryClient;
