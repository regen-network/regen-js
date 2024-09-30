//@ts-nocheck
import * as _76 from "./data/v1/events";
import * as _77 from "./data/v1/query";
import * as _78 from "./data/v1/state";
import * as _79 from "./data/v1/tx";
import * as _80 from "./data/v1/types";
import * as _81 from "./ecocredit/basket/v1/events";
import * as _82 from "./ecocredit/basket/v1/query";
import * as _83 from "./ecocredit/basket/v1/state";
import * as _84 from "./ecocredit/basket/v1/tx";
import * as _85 from "./ecocredit/basket/v1/types";
import * as _86 from "./ecocredit/marketplace/v1/events";
import * as _87 from "./ecocredit/marketplace/v1/query";
import * as _88 from "./ecocredit/marketplace/v1/state";
import * as _89 from "./ecocredit/marketplace/v1/tx";
import * as _90 from "./ecocredit/marketplace/v1/types";
import * as _91 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _92 from "./ecocredit/v1/events";
import * as _93 from "./ecocredit/v1/query";
import * as _94 from "./ecocredit/v1/state";
import * as _95 from "./ecocredit/v1/tx";
import * as _96 from "./ecocredit/v1/types";
import * as _97 from "./ecocredit/v1alpha1/events";
import * as _98 from "./ecocredit/v1alpha1/genesis";
import * as _99 from "./ecocredit/v1alpha1/query";
import * as _100 from "./ecocredit/v1alpha1/tx";
import * as _101 from "./ecocredit/v1alpha1/types";
import * as _102 from "./intertx/v1/query";
import * as _103 from "./intertx/v1/tx";
import * as _187 from "./data/v1/tx.amino";
import * as _188 from "./ecocredit/basket/v1/tx.amino";
import * as _189 from "./ecocredit/marketplace/v1/tx.amino";
import * as _190 from "./ecocredit/v1/tx.amino";
import * as _191 from "./ecocredit/v1alpha1/tx.amino";
import * as _192 from "./intertx/v1/tx.amino";
import * as _193 from "./data/v1/tx.registry";
import * as _194 from "./ecocredit/basket/v1/tx.registry";
import * as _195 from "./ecocredit/marketplace/v1/tx.registry";
import * as _196 from "./ecocredit/v1/tx.registry";
import * as _197 from "./ecocredit/v1alpha1/tx.registry";
import * as _198 from "./intertx/v1/tx.registry";
import * as _199 from "./data/v1/query.lcd";
import * as _200 from "./ecocredit/basket/v1/query.lcd";
import * as _201 from "./ecocredit/marketplace/v1/query.lcd";
import * as _202 from "./ecocredit/v1/query.lcd";
import * as _203 from "./ecocredit/v1alpha1/query.lcd";
import * as _204 from "./intertx/v1/query.lcd";
import * as _205 from "./data/v1/query.rpc.Query";
import * as _206 from "./ecocredit/basket/v1/query.rpc.Query";
import * as _207 from "./ecocredit/marketplace/v1/query.rpc.Query";
import * as _208 from "./ecocredit/v1/query.rpc.Query";
import * as _209 from "./ecocredit/v1alpha1/query.rpc.Query";
import * as _210 from "./intertx/v1/query.rpc.Query";
import * as _211 from "./data/v1/tx.rpc.msg";
import * as _212 from "./ecocredit/basket/v1/tx.rpc.msg";
import * as _213 from "./ecocredit/marketplace/v1/tx.rpc.msg";
import * as _214 from "./ecocredit/v1/tx.rpc.msg";
import * as _215 from "./ecocredit/v1alpha1/tx.rpc.msg";
import * as _216 from "./intertx/v1/tx.rpc.msg";
import * as _223 from "./lcd";
import * as _224 from "./rpc.query";
import * as _225 from "./rpc.tx";
export var regen;
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
})(regen || (regen = {}));
