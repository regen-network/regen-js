//@ts-nocheck
import * as _109 from "./abci/types";
import * as _110 from "./crypto/keys";
import * as _111 from "./crypto/proof";
import * as _112 from "./libs/bits/types";
import * as _113 from "./p2p/types";
import * as _114 from "./types/block";
import * as _115 from "./types/evidence";
import * as _116 from "./types/params";
import * as _117 from "./types/types";
import * as _118 from "./types/validator";
import * as _119 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._109
  };
  export const crypto = {
    ..._110,
    ..._111
  };
  export namespace libs {
    export const bits = {
      ..._112
    };
  }
  export const p2p = {
    ..._113
  };
  export const types = {
    ..._114,
    ..._115,
    ..._116,
    ..._117,
    ..._118
  };
  export const version = {
    ..._119
  };
}