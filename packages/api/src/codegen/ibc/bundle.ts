import * as _105 from "./applications/transfer/v1/genesis";
import * as _106 from "./applications/transfer/v1/query";
import * as _107 from "./applications/transfer/v1/transfer";
import * as _108 from "./applications/transfer/v1/tx";
import * as _109 from "./core/client/v1/client";
import * as _110 from "./core/client/v1/genesis";
import * as _111 from "./core/client/v1/query";
import * as _112 from "./core/client/v1/tx";
import * as _231 from "./applications/transfer/v1/tx.amino";
import * as _232 from "./core/client/v1/tx.amino";
import * as _233 from "./applications/transfer/v1/tx.registry";
import * as _234 from "./core/client/v1/tx.registry";
import * as _235 from "./applications/transfer/v1/query.lcd";
import * as _236 from "./core/client/v1/query.lcd";
import * as _237 from "./applications/transfer/v1/query.rpc.Query";
import * as _238 from "./core/client/v1/query.rpc.Query";
import * as _239 from "./applications/transfer/v1/tx.rpc.msg";
import * as _240 from "./core/client/v1/tx.rpc.msg";
import * as _274 from "./lcd";
import * as _275 from "./rpc.query";
import * as _276 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._105,
        ..._106,
        ..._107,
        ..._108,
        ..._231,
        ..._233,
        ..._235,
        ..._237,
        ..._239
      };
    }
  }
  export namespace core {
    export namespace client {
      export const v1 = {
        ..._109,
        ..._110,
        ..._111,
        ..._112,
        ..._232,
        ..._234,
        ..._236,
        ..._238,
        ..._240
      };
    }
  }
  export const ClientFactory = {
    ..._274,
    ..._275,
    ..._276
  };
}