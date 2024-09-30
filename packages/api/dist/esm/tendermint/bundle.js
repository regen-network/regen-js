//@ts-nocheck
import * as _104 from "./abci/types";
import * as _105 from "./crypto/keys";
import * as _106 from "./crypto/proof";
import * as _107 from "./libs/bits/types";
import * as _108 from "./p2p/types";
import * as _109 from "./types/block";
import * as _110 from "./types/evidence";
import * as _111 from "./types/params";
import * as _112 from "./types/types";
import * as _113 from "./types/validator";
import * as _114 from "./version/types";
export var tendermint;
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
})(tendermint || (tendermint = {}));
