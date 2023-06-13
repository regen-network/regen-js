import * as _106 from "./applications/transfer/v1/genesis";
import * as _107 from "./applications/transfer/v1/query";
import * as _108 from "./applications/transfer/v1/transfer";
import * as _109 from "./applications/transfer/v1/tx";
import * as _110 from "./core/client/v1/client";
import * as _111 from "./core/client/v1/genesis";
import * as _112 from "./core/client/v1/query";
import * as _113 from "./core/client/v1/tx";
import * as _199 from "./applications/transfer/v1/tx.amino";
import * as _200 from "./core/client/v1/tx.amino";
import * as _201 from "./applications/transfer/v1/tx.registry";
import * as _202 from "./core/client/v1/tx.registry";
import * as _203 from "./applications/transfer/v1/query.lcd";
import * as _204 from "./core/client/v1/query.lcd";
import * as _224 from "./lcd";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._106,
        ..._107,
        ..._108,
        ..._109,
        ..._199,
        ..._201,
        ..._203
      };
    }
  }
  export namespace core {
    export namespace client {
      export const v1 = { ..._110,
        ..._111,
        ..._112,
        ..._113,
        ..._200,
        ..._202,
        ..._204
      };
    }
  }
  export const ClientFactory = { ..._224
  };
}