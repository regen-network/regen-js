//@ts-nocheck
import * as _68 from "./applications/transfer/v1/genesis";
import * as _69 from "./applications/transfer/v1/query";
import * as _70 from "./applications/transfer/v1/transfer";
import * as _71 from "./applications/transfer/v1/tx";
import * as _72 from "./core/client/v1/client";
import * as _73 from "./core/client/v1/genesis";
import * as _74 from "./core/client/v1/query";
import * as _75 from "./core/client/v1/tx";
import * as _177 from "./applications/transfer/v1/tx.amino";
import * as _178 from "./core/client/v1/tx.amino";
import * as _179 from "./applications/transfer/v1/tx.registry";
import * as _180 from "./core/client/v1/tx.registry";
import * as _181 from "./applications/transfer/v1/query.lcd";
import * as _182 from "./core/client/v1/query.lcd";
import * as _183 from "./applications/transfer/v1/query.rpc.Query";
import * as _184 from "./core/client/v1/query.rpc.Query";
import * as _185 from "./applications/transfer/v1/tx.rpc.msg";
import * as _186 from "./core/client/v1/tx.rpc.msg";
import * as _220 from "./lcd";
import * as _221 from "./rpc.query";
import * as _222 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._68,
        ..._69,
        ..._70,
        ..._71,
        ..._177,
        ..._179,
        ..._181,
        ..._183,
        ..._185
      };
    }
  }
  export namespace core {
    export namespace client {
      export const v1 = {
        ..._72,
        ..._73,
        ..._74,
        ..._75,
        ..._178,
        ..._180,
        ..._182,
        ..._184,
        ..._186
      };
    }
  }
  export const ClientFactory = {
    ..._220,
    ..._221,
    ..._222
  };
}