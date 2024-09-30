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
exports.cosmos = void 0;
//@ts-nocheck
const _2 = __importStar(require("./app/module/v1alpha1/module"));
const _3 = __importStar(require("./auth/v1beta1/auth"));
const _4 = __importStar(require("./auth/v1beta1/genesis"));
const _5 = __importStar(require("./auth/v1beta1/query"));
const _6 = __importStar(require("./authz/v1beta1/authz"));
const _7 = __importStar(require("./authz/v1beta1/event"));
const _8 = __importStar(require("./authz/v1beta1/genesis"));
const _9 = __importStar(require("./authz/v1beta1/query"));
const _10 = __importStar(require("./authz/v1beta1/tx"));
const _11 = __importStar(require("./bank/v1beta1/authz"));
const _12 = __importStar(require("./bank/v1beta1/bank"));
const _13 = __importStar(require("./bank/v1beta1/genesis"));
const _14 = __importStar(require("./bank/v1beta1/query"));
const _15 = __importStar(require("./bank/v1beta1/tx"));
const _16 = __importStar(require("./base/abci/v1beta1/abci"));
const _17 = __importStar(require("./base/node/v1beta1/query"));
const _18 = __importStar(require("./base/query/v1beta1/pagination"));
const _19 = __importStar(require("./base/reflection/v2alpha1/reflection"));
const _20 = __importStar(require("./base/v1beta1/coin"));
const _21 = __importStar(require("./crypto/ed25519/keys"));
const _22 = __importStar(require("./crypto/hd/v1/hd"));
const _23 = __importStar(require("./crypto/keyring/v1/record"));
const _24 = __importStar(require("./crypto/multisig/keys"));
const _25 = __importStar(require("./crypto/secp256k1/keys"));
const _26 = __importStar(require("./crypto/secp256r1/keys"));
const _27 = __importStar(require("./distribution/v1beta1/distribution"));
const _28 = __importStar(require("./distribution/v1beta1/genesis"));
const _29 = __importStar(require("./distribution/v1beta1/query"));
const _30 = __importStar(require("./distribution/v1beta1/tx"));
const _31 = __importStar(require("./feegrant/v1beta1/feegrant"));
const _32 = __importStar(require("./feegrant/v1beta1/genesis"));
const _33 = __importStar(require("./feegrant/v1beta1/query"));
const _34 = __importStar(require("./feegrant/v1beta1/tx"));
const _35 = __importStar(require("./gov/v1/genesis"));
const _36 = __importStar(require("./gov/v1/gov"));
const _37 = __importStar(require("./gov/v1/query"));
const _38 = __importStar(require("./gov/v1/tx"));
const _39 = __importStar(require("./gov/v1beta1/genesis"));
const _40 = __importStar(require("./gov/v1beta1/gov"));
const _41 = __importStar(require("./gov/v1beta1/query"));
const _42 = __importStar(require("./gov/v1beta1/tx"));
const _43 = __importStar(require("./group/v1/events"));
const _44 = __importStar(require("./group/v1/genesis"));
const _45 = __importStar(require("./group/v1/query"));
const _46 = __importStar(require("./group/v1/tx"));
const _47 = __importStar(require("./group/v1/types"));
const _48 = __importStar(require("./mint/v1beta1/genesis"));
const _49 = __importStar(require("./mint/v1beta1/mint"));
const _50 = __importStar(require("./mint/v1beta1/query"));
const _51 = __importStar(require("./orm/module/v1alpha1/module"));
const _52 = __importStar(require("./params/v1beta1/params"));
const _53 = __importStar(require("./params/v1beta1/query"));
const _54 = __importStar(require("./staking/v1beta1/authz"));
const _55 = __importStar(require("./staking/v1beta1/genesis"));
const _56 = __importStar(require("./staking/v1beta1/query"));
const _57 = __importStar(require("./staking/v1beta1/staking"));
const _58 = __importStar(require("./staking/v1beta1/tx"));
const _59 = __importStar(require("./tx/signing/v1beta1/signing"));
const _60 = __importStar(require("./tx/v1beta1/service"));
const _61 = __importStar(require("./tx/v1beta1/tx"));
const _62 = __importStar(require("./upgrade/v1beta1/query"));
const _63 = __importStar(require("./upgrade/v1beta1/tx"));
const _64 = __importStar(require("./upgrade/v1beta1/upgrade"));
const _65 = __importStar(require("./vesting/v1beta1/tx"));
const _66 = __importStar(require("./vesting/v1beta1/vesting"));
const _119 = __importStar(require("./authz/v1beta1/tx.amino"));
const _120 = __importStar(require("./bank/v1beta1/tx.amino"));
const _121 = __importStar(require("./distribution/v1beta1/tx.amino"));
const _122 = __importStar(require("./feegrant/v1beta1/tx.amino"));
const _123 = __importStar(require("./gov/v1/tx.amino"));
const _124 = __importStar(require("./gov/v1beta1/tx.amino"));
const _125 = __importStar(require("./group/v1/tx.amino"));
const _126 = __importStar(require("./staking/v1beta1/tx.amino"));
const _127 = __importStar(require("./upgrade/v1beta1/tx.amino"));
const _128 = __importStar(require("./vesting/v1beta1/tx.amino"));
const _129 = __importStar(require("./authz/v1beta1/tx.registry"));
const _130 = __importStar(require("./bank/v1beta1/tx.registry"));
const _131 = __importStar(require("./distribution/v1beta1/tx.registry"));
const _132 = __importStar(require("./feegrant/v1beta1/tx.registry"));
const _133 = __importStar(require("./gov/v1/tx.registry"));
const _134 = __importStar(require("./gov/v1beta1/tx.registry"));
const _135 = __importStar(require("./group/v1/tx.registry"));
const _136 = __importStar(require("./staking/v1beta1/tx.registry"));
const _137 = __importStar(require("./upgrade/v1beta1/tx.registry"));
const _138 = __importStar(require("./vesting/v1beta1/tx.registry"));
const _139 = __importStar(require("./auth/v1beta1/query.lcd"));
const _140 = __importStar(require("./authz/v1beta1/query.lcd"));
const _141 = __importStar(require("./bank/v1beta1/query.lcd"));
const _142 = __importStar(require("./base/node/v1beta1/query.lcd"));
const _143 = __importStar(require("./distribution/v1beta1/query.lcd"));
const _144 = __importStar(require("./feegrant/v1beta1/query.lcd"));
const _145 = __importStar(require("./gov/v1/query.lcd"));
const _146 = __importStar(require("./gov/v1beta1/query.lcd"));
const _147 = __importStar(require("./group/v1/query.lcd"));
const _148 = __importStar(require("./mint/v1beta1/query.lcd"));
const _149 = __importStar(require("./params/v1beta1/query.lcd"));
const _150 = __importStar(require("./staking/v1beta1/query.lcd"));
const _151 = __importStar(require("./tx/v1beta1/service.lcd"));
const _152 = __importStar(require("./upgrade/v1beta1/query.lcd"));
const _153 = __importStar(require("./auth/v1beta1/query.rpc.Query"));
const _154 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
const _155 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
const _156 = __importStar(require("./base/node/v1beta1/query.rpc.Service"));
const _157 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
const _158 = __importStar(require("./feegrant/v1beta1/query.rpc.Query"));
const _159 = __importStar(require("./gov/v1/query.rpc.Query"));
const _160 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
const _161 = __importStar(require("./group/v1/query.rpc.Query"));
const _162 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _163 = __importStar(require("./params/v1beta1/query.rpc.Query"));
const _164 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
const _165 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
const _166 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
const _167 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
const _168 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
const _169 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
const _170 = __importStar(require("./feegrant/v1beta1/tx.rpc.msg"));
const _171 = __importStar(require("./gov/v1/tx.rpc.msg"));
const _172 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
const _173 = __importStar(require("./group/v1/tx.rpc.msg"));
const _174 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
const _175 = __importStar(require("./upgrade/v1beta1/tx.rpc.msg"));
const _176 = __importStar(require("./vesting/v1beta1/tx.rpc.msg"));
const _217 = __importStar(require("./lcd"));
const _218 = __importStar(require("./rpc.query"));
const _219 = __importStar(require("./rpc.tx"));
var cosmos;
(function (cosmos) {
    let app;
    (function (app) {
        let module;
        (function (module) {
            module.v1alpha1 = {
                ..._2
            };
        })(module = app.module || (app.module = {}));
    })(app = cosmos.app || (cosmos.app = {}));
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._3,
            ..._4,
            ..._5,
            ..._139,
            ..._153
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        authz.v1beta1 = {
            ..._6,
            ..._7,
            ..._8,
            ..._9,
            ..._10,
            ..._119,
            ..._129,
            ..._140,
            ..._154,
            ..._167
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        bank.v1beta1 = {
            ..._11,
            ..._12,
            ..._13,
            ..._14,
            ..._15,
            ..._120,
            ..._130,
            ..._141,
            ..._155,
            ..._168
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._16
            };
        })(abci = base.abci || (base.abci = {}));
        let node;
        (function (node) {
            node.v1beta1 = {
                ..._17,
                ..._142,
                ..._156
            };
        })(node = base.node || (base.node = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._18
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v2alpha1 = {
                ..._19
            };
        })(reflection = base.reflection || (base.reflection = {}));
        base.v1beta1 = {
            ..._20
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._21
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._22
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._23
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._24
        };
        crypto.secp256k1 = {
            ..._25
        };
        crypto.secp256r1 = {
            ..._26
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        distribution.v1beta1 = {
            ..._27,
            ..._28,
            ..._29,
            ..._30,
            ..._121,
            ..._131,
            ..._143,
            ..._157,
            ..._169
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let feegrant;
    (function (feegrant) {
        feegrant.v1beta1 = {
            ..._31,
            ..._32,
            ..._33,
            ..._34,
            ..._122,
            ..._132,
            ..._144,
            ..._158,
            ..._170
        };
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
    let gov;
    (function (gov) {
        gov.v1 = {
            ..._35,
            ..._36,
            ..._37,
            ..._38,
            ..._123,
            ..._133,
            ..._145,
            ..._159,
            ..._171
        };
        gov.v1beta1 = {
            ..._39,
            ..._40,
            ..._41,
            ..._42,
            ..._124,
            ..._134,
            ..._146,
            ..._160,
            ..._172
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let group;
    (function (group) {
        group.v1 = {
            ..._43,
            ..._44,
            ..._45,
            ..._46,
            ..._47,
            ..._125,
            ..._135,
            ..._147,
            ..._161,
            ..._173
        };
    })(group = cosmos.group || (cosmos.group = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._48,
            ..._49,
            ..._50,
            ..._148,
            ..._162
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let orm;
    (function (orm) {
        let module;
        (function (module) {
            module.v1alpha1 = {
                ..._51
            };
        })(module = orm.module || (orm.module = {}));
    })(orm = cosmos.orm || (cosmos.orm = {}));
    let params;
    (function (params) {
        params.v1beta1 = {
            ..._52,
            ..._53,
            ..._149,
            ..._163
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._54,
            ..._55,
            ..._56,
            ..._57,
            ..._58,
            ..._126,
            ..._136,
            ..._150,
            ..._164,
            ..._174
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._59
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._60,
            ..._61,
            ..._151,
            ..._165
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._62,
            ..._63,
            ..._64,
            ..._127,
            ..._137,
            ..._152,
            ..._166,
            ..._175
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        vesting.v1beta1 = {
            ..._65,
            ..._66,
            ..._128,
            ..._138,
            ..._176
        };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = {
        ..._217,
        ..._218,
        ..._219
    };
})(cosmos || (exports.cosmos = cosmos = {}));
