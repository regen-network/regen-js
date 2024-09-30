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
exports.ibc = void 0;
//@ts-nocheck
const _68 = __importStar(require("./applications/transfer/v1/genesis"));
const _69 = __importStar(require("./applications/transfer/v1/query"));
const _70 = __importStar(require("./applications/transfer/v1/transfer"));
const _71 = __importStar(require("./applications/transfer/v1/tx"));
const _72 = __importStar(require("./core/client/v1/client"));
const _73 = __importStar(require("./core/client/v1/genesis"));
const _74 = __importStar(require("./core/client/v1/query"));
const _75 = __importStar(require("./core/client/v1/tx"));
const _177 = __importStar(require("./applications/transfer/v1/tx.amino"));
const _178 = __importStar(require("./core/client/v1/tx.amino"));
const _179 = __importStar(require("./applications/transfer/v1/tx.registry"));
const _180 = __importStar(require("./core/client/v1/tx.registry"));
const _181 = __importStar(require("./applications/transfer/v1/query.lcd"));
const _182 = __importStar(require("./core/client/v1/query.lcd"));
const _183 = __importStar(require("./applications/transfer/v1/query.rpc.Query"));
const _184 = __importStar(require("./core/client/v1/query.rpc.Query"));
const _185 = __importStar(require("./applications/transfer/v1/tx.rpc.msg"));
const _186 = __importStar(require("./core/client/v1/tx.rpc.msg"));
const _220 = __importStar(require("./lcd"));
const _221 = __importStar(require("./rpc.query"));
const _222 = __importStar(require("./rpc.tx"));
var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._68,
                ..._69,
                ..._70,
                ..._71,
                ..._177,
                ..._179,
                ..._181,
                ..._183,
                ..._185
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let client;
        (function (client) {
            client.v1 = {
                ..._72,
                ..._73,
                ..._74,
                ..._75,
                ..._178,
                ..._180,
                ..._182,
                ..._184,
                ..._186
            };
        })(client = core.client || (core.client = {}));
    })(core = ibc.core || (ibc.core = {}));
    ibc.ClientFactory = {
        ..._220,
        ..._221,
        ..._222
    };
})(ibc || (exports.ibc = ibc = {}));
