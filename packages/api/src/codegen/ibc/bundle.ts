import * as _104 from "./applications/transfer/v1/genesis";
import * as _105 from "./applications/transfer/v1/query";
import * as _106 from "./applications/transfer/v1/transfer";
import * as _107 from "./applications/transfer/v1/tx";
import * as _108 from "./core/client/v1/client";
import * as _109 from "./core/client/v1/genesis";
import * as _110 from "./core/client/v1/query";
import * as _111 from "./core/client/v1/tx";
import * as _230 from "./applications/transfer/v1/tx.amino";
import * as _231 from "./core/client/v1/tx.amino";
import * as _232 from "./applications/transfer/v1/tx.registry";
import * as _233 from "./core/client/v1/tx.registry";
import * as _234 from "./applications/transfer/v1/query.lcd";
import * as _235 from "./core/client/v1/query.lcd";
import * as _236 from "./applications/transfer/v1/query.rpc.Query";
import * as _237 from "./core/client/v1/query.rpc.Query";
import * as _238 from "./applications/transfer/v1/tx.rpc.msg";
import * as _239 from "./core/client/v1/tx.rpc.msg";
import * as _273 from "./lcd";
import * as _274 from "./rpc.query";
import * as _275 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._104,
        ..._105,
        ..._106,
        ..._107,
        ..._230,
        ..._232,
        ..._234,
        ..._236,
        ..._238
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
        ..._231,
        ..._233,
        ..._235,
        ..._237,
        ..._239
      };
    }
  }
  export const ClientFactory = {
    ..._273,
    ..._274,
    ..._275
  };
}