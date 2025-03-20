//@ts-nocheck
import * as _68 from "./applications/transfer/v1/genesis";
import * as _69 from "./applications/transfer/v1/query";
import * as _70 from "./applications/transfer/v1/transfer";
import * as _71 from "./applications/transfer/v1/tx";
import * as _72 from "./core/client/v1/client";
import * as _73 from "./core/client/v1/genesis";
import * as _74 from "./core/client/v1/query";
import * as _75 from "./core/client/v1/tx";
import * as _182 from "./applications/transfer/v1/tx.amino";
import * as _183 from "./core/client/v1/tx.amino";
import * as _184 from "./applications/transfer/v1/tx.registry";
import * as _185 from "./core/client/v1/tx.registry";
import * as _186 from "./applications/transfer/v1/query.lcd";
import * as _187 from "./core/client/v1/query.lcd";
import * as _188 from "./applications/transfer/v1/query.rpc.Query";
import * as _189 from "./core/client/v1/query.rpc.Query";
import * as _190 from "./applications/transfer/v1/tx.rpc.msg";
import * as _191 from "./core/client/v1/tx.rpc.msg";
import * as _230 from "./lcd";
import * as _231 from "./rpc.query";
import * as _232 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._68,
        ..._69,
        ..._70,
        ..._71,
        ..._182,
        ..._184,
        ..._186,
        ..._188,
        ..._190
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
        ..._183,
        ..._185,
        ..._187,
        ..._189,
        ..._191
      };
    }
  }
  export const ClientFactory = {
    ..._230,
    ..._231,
    ..._232
  };
}