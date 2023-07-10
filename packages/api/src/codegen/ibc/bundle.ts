import * as _104 from "./applications/transfer/v1/genesis";
import * as _105 from "./applications/transfer/v1/query";
import * as _106 from "./applications/transfer/v1/transfer";
import * as _107 from "./applications/transfer/v1/tx";
import * as _108 from "./core/client/v1/client";
import * as _109 from "./core/client/v1/genesis";
import * as _110 from "./core/client/v1/query";
import * as _111 from "./core/client/v1/tx";
import * as _197 from "./applications/transfer/v1/tx.amino";
import * as _198 from "./core/client/v1/tx.amino";
import * as _199 from "./applications/transfer/v1/tx.registry";
import * as _200 from "./core/client/v1/tx.registry";
import * as _201 from "./applications/transfer/v1/query.lcd";
import * as _202 from "./core/client/v1/query.lcd";
import * as _222 from "./lcd";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._104,
        ..._105,
        ..._106,
        ..._107,
        ..._197,
        ..._199,
        ..._201
      };
    }
  }
  export namespace core {
    export namespace client {
      export const v1 = {
        ..._108,
        ..._109,
        ..._110,
        ..._111,
        ..._198,
        ..._200,
        ..._202
      };
    }
  }
  export const ClientFactory = {
    ..._222
  };
}