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
exports.tendermint = void 0;
//@ts-nocheck
const _104 = __importStar(require("./abci/types"));
const _105 = __importStar(require("./crypto/keys"));
const _106 = __importStar(require("./crypto/proof"));
const _107 = __importStar(require("./libs/bits/types"));
const _108 = __importStar(require("./p2p/types"));
const _109 = __importStar(require("./types/block"));
const _110 = __importStar(require("./types/evidence"));
const _111 = __importStar(require("./types/params"));
const _112 = __importStar(require("./types/types"));
const _113 = __importStar(require("./types/validator"));
const _114 = __importStar(require("./version/types"));
var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._104
    };
    tendermint.crypto = {
        ..._105,
        ..._106
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._107
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._108
    };
    tendermint.types = {
        ..._109,
        ..._110,
        ..._111,
        ..._112,
        ..._113
    };
    tendermint.version = {
        ..._114
    };
})(tendermint || (exports.tendermint = tendermint = {}));
