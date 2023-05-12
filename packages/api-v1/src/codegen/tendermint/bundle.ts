import * as _133 from "./abci/types";
import * as _134 from "./crypto/keys";
import * as _135 from "./crypto/proof";
import * as _136 from "./libs/bits/types";
import * as _137 from "./p2p/types";
import * as _138 from "./types/block";
import * as _139 from "./types/evidence";
import * as _140 from "./types/params";
import * as _141 from "./types/types";
import * as _142 from "./types/validator";
import * as _143 from "./version/types";
export namespace tendermint {
  export const abci = { ..._133
  };
  export const crypto = { ..._134,
    ..._135
  };
  export namespace libs {
    export const bits = { ..._136
    };
  }
  export const p2p = { ..._137
  };
  export const types = { ..._138,
    ..._139,
    ..._140,
    ..._141,
    ..._142
  };
  export const version = { ..._143
  };
}