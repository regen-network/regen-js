//@ts-nocheck
import * as _117 from "./applications/transfer/v1/authz";
import * as _118 from "./applications/transfer/v1/denomtrace";
import * as _119 from "./applications/transfer/v1/genesis";
import * as _120 from "./applications/transfer/v1/packet";
import * as _121 from "./applications/transfer/v1/query";
import * as _122 from "./applications/transfer/v1/token";
import * as _123 from "./applications/transfer/v1/transfer";
import * as _124 from "./applications/transfer/v1/tx";
import * as _125 from "./core/client/v1/client";
import * as _126 from "./core/client/v1/genesis";
import * as _127 from "./core/client/v1/query";
import * as _128 from "./core/client/v1/tx";
import * as _129 from "./core/commitment/v2/commitment";
import * as _268 from "./applications/transfer/v1/tx.amino";
import * as _269 from "./core/client/v1/tx.amino";
import * as _270 from "./applications/transfer/v1/tx.registry";
import * as _271 from "./core/client/v1/tx.registry";
import * as _272 from "./applications/transfer/v1/query.lcd";
import * as _273 from "./core/client/v1/query.lcd";
import * as _274 from "./applications/transfer/v1/query.rpc.Query";
import * as _275 from "./core/client/v1/query.rpc.Query";
import * as _276 from "./applications/transfer/v1/tx.rpc.msg";
import * as _277 from "./core/client/v1/tx.rpc.msg";
import * as _311 from "./lcd";
import * as _312 from "./rpc.query";
import * as _313 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._117,
        ..._118,
        ..._119,
        ..._120,
        ..._121,
        ..._122,
        ..._123,
        ..._124,
        ..._268,
        ..._270,
        ..._272,
        ..._274,
        ..._276
      };
    }
  }
  export namespace core {
    export namespace client {
      export const v1 = {
        ..._125,
        ..._126,
        ..._127,
        ..._128,
        ..._269,
        ..._271,
        ..._273,
        ..._275,
        ..._277
      };
    }
    export namespace commitment {
      export const v2 = {
        ..._129
      };
    }
  }
  export const ClientFactory = {
    ..._311,
    ..._312,
    ..._313
  };
}