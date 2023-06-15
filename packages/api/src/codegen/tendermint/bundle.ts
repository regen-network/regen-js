import * as _140 from "./abci/types";
import * as _141 from "./crypto/keys";
import * as _142 from "./crypto/proof";
import * as _143 from "./libs/bits/types";
import * as _144 from "./p2p/types";
import * as _145 from "./types/block";
import * as _146 from "./types/evidence";
import * as _147 from "./types/params";
import * as _148 from "./types/types";
import * as _149 from "./types/validator";
import * as _150 from "./version/types";
export namespace tendermint {
  export const abci = { ..._140
  };
  export const crypto = { ..._141,
    ..._142
  };
  export namespace libs {
    export const bits = { ..._143
    };
  }
  export const p2p = { ..._144
  };
  export const types = { ..._145,
    ..._146,
    ..._147,
    ..._148,
    ..._149
  };
  export const version = { ..._150
  };
}