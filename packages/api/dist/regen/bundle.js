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
exports.regen = void 0;
//@ts-nocheck
const _76 = __importStar(require("./data/v1/events"));
const _77 = __importStar(require("./data/v1/query"));
const _78 = __importStar(require("./data/v1/state"));
const _79 = __importStar(require("./data/v1/tx"));
const _80 = __importStar(require("./data/v1/types"));
const _81 = __importStar(require("./ecocredit/basket/v1/events"));
const _82 = __importStar(require("./ecocredit/basket/v1/query"));
const _83 = __importStar(require("./ecocredit/basket/v1/state"));
const _84 = __importStar(require("./ecocredit/basket/v1/tx"));
const _85 = __importStar(require("./ecocredit/basket/v1/types"));
const _86 = __importStar(require("./ecocredit/marketplace/v1/events"));
const _87 = __importStar(require("./ecocredit/marketplace/v1/query"));
const _88 = __importStar(require("./ecocredit/marketplace/v1/state"));
const _89 = __importStar(require("./ecocredit/marketplace/v1/tx"));
const _90 = __importStar(require("./ecocredit/marketplace/v1/types"));
const _91 = __importStar(require("./ecocredit/orderbook/v1alpha1/memory"));
const _92 = __importStar(require("./ecocredit/v1/events"));
const _93 = __importStar(require("./ecocredit/v1/query"));
const _94 = __importStar(require("./ecocredit/v1/state"));
const _95 = __importStar(require("./ecocredit/v1/tx"));
const _96 = __importStar(require("./ecocredit/v1/types"));
const _97 = __importStar(require("./ecocredit/v1alpha1/events"));
const _98 = __importStar(require("./ecocredit/v1alpha1/genesis"));
const _99 = __importStar(require("./ecocredit/v1alpha1/query"));
const _100 = __importStar(require("./ecocredit/v1alpha1/tx"));
const _101 = __importStar(require("./ecocredit/v1alpha1/types"));
const _102 = __importStar(require("./intertx/v1/query"));
const _103 = __importStar(require("./intertx/v1/tx"));
const _187 = __importStar(require("./data/v1/tx.amino"));
const _188 = __importStar(require("./ecocredit/basket/v1/tx.amino"));
const _189 = __importStar(require("./ecocredit/marketplace/v1/tx.amino"));
const _190 = __importStar(require("./ecocredit/v1/tx.amino"));
const _191 = __importStar(require("./ecocredit/v1alpha1/tx.amino"));
const _192 = __importStar(require("./intertx/v1/tx.amino"));
const _193 = __importStar(require("./data/v1/tx.registry"));
const _194 = __importStar(require("./ecocredit/basket/v1/tx.registry"));
const _195 = __importStar(require("./ecocredit/marketplace/v1/tx.registry"));
const _196 = __importStar(require("./ecocredit/v1/tx.registry"));
const _197 = __importStar(require("./ecocredit/v1alpha1/tx.registry"));
const _198 = __importStar(require("./intertx/v1/tx.registry"));
const _199 = __importStar(require("./data/v1/query.lcd"));
const _200 = __importStar(require("./ecocredit/basket/v1/query.lcd"));
const _201 = __importStar(require("./ecocredit/marketplace/v1/query.lcd"));
const _202 = __importStar(require("./ecocredit/v1/query.lcd"));
const _203 = __importStar(require("./ecocredit/v1alpha1/query.lcd"));
const _204 = __importStar(require("./intertx/v1/query.lcd"));
const _205 = __importStar(require("./data/v1/query.rpc.Query"));
const _206 = __importStar(require("./ecocredit/basket/v1/query.rpc.Query"));
const _207 = __importStar(require("./ecocredit/marketplace/v1/query.rpc.Query"));
const _208 = __importStar(require("./ecocredit/v1/query.rpc.Query"));
const _209 = __importStar(require("./ecocredit/v1alpha1/query.rpc.Query"));
const _210 = __importStar(require("./intertx/v1/query.rpc.Query"));
const _211 = __importStar(require("./data/v1/tx.rpc.msg"));
const _212 = __importStar(require("./ecocredit/basket/v1/tx.rpc.msg"));
const _213 = __importStar(require("./ecocredit/marketplace/v1/tx.rpc.msg"));
const _214 = __importStar(require("./ecocredit/v1/tx.rpc.msg"));
const _215 = __importStar(require("./ecocredit/v1alpha1/tx.rpc.msg"));
const _216 = __importStar(require("./intertx/v1/tx.rpc.msg"));
const _223 = __importStar(require("./lcd"));
const _224 = __importStar(require("./rpc.query"));
const _225 = __importStar(require("./rpc.tx"));
var regen;
(function (regen) {
    let data;
    (function (data) {
        data.v1 = {
            ..._76,
            ..._77,
            ..._78,
            ..._79,
            ..._80,
            ..._187,
            ..._193,
            ..._199,
            ..._205,
            ..._211
        };
    })(data = regen.data || (regen.data = {}));
    let ecocredit;
    (function (ecocredit) {
        let basket;
        (function (basket) {
            basket.v1 = {
                ..._81,
                ..._82,
                ..._83,
                ..._84,
                ..._85,
                ..._188,
                ..._194,
                ..._200,
                ..._206,
                ..._212
            };
        })(basket = ecocredit.basket || (ecocredit.basket = {}));
        let marketplace;
        (function (marketplace) {
            marketplace.v1 = {
                ..._86,
                ..._87,
                ..._88,
                ..._89,
                ..._90,
                ..._189,
                ..._195,
                ..._201,
                ..._207,
                ..._213
            };
        })(marketplace = ecocredit.marketplace || (ecocredit.marketplace = {}));
        let orderbook;
        (function (orderbook) {
            orderbook.v1alpha1 = {
                ..._91
            };
        })(orderbook = ecocredit.orderbook || (ecocredit.orderbook = {}));
        ecocredit.v1 = {
            ..._92,
            ..._93,
            ..._94,
            ..._95,
            ..._96,
            ..._190,
            ..._196,
            ..._202,
            ..._208,
            ..._214
        };
        ecocredit.v1alpha1 = {
            ..._97,
            ..._98,
            ..._99,
            ..._100,
            ..._101,
            ..._191,
            ..._197,
            ..._203,
            ..._209,
            ..._215
        };
    })(ecocredit = regen.ecocredit || (regen.ecocredit = {}));
    let intertx;
    (function (intertx) {
        intertx.v1 = {
            ..._102,
            ..._103,
            ..._192,
            ..._198,
            ..._204,
            ..._210,
            ..._216
        };
    })(intertx = regen.intertx || (regen.intertx = {}));
    regen.ClientFactory = {
        ..._223,
        ..._224,
        ..._225
    };
})(regen || (exports.regen = regen = {}));
