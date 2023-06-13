import * as _142 from "./abci/types";
import * as _143 from "./crypto/keys";
import * as _144 from "./crypto/proof";
import * as _145 from "./libs/bits/types";
import * as _146 from "./p2p/types";
import * as _147 from "./types/block";
import * as _148 from "./types/evidence";
import * as _149 from "./types/params";
import * as _150 from "./types/types";
import * as _151 from "./types/validator";
import * as _152 from "./version/types";
export namespace tendermint {
  export const abci = { ..._142
  };
  export const crypto = { ..._143,
    ..._144
  };
  export namespace libs {
    export const bits = { ..._145
    };
  }
  export const p2p = { ..._146
  };
  export const types = { ..._147,
    ..._148,
    ..._149,
    ..._150,
    ..._151
  };
  export const version = { ..._152
  };
}