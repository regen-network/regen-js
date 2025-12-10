//@ts-nocheck
import * as _130 from "./app/v1alpha1/module";
import * as _131 from "./data/v1/events";
import * as _132 from "./data/v1/query";
import * as _133 from "./data/v1/state";
import * as _134 from "./data/v1/tx";
import * as _135 from "./data/v1/types";
import * as _136 from "./data/v2/events";
import * as _137 from "./data/v2/query";
import * as _138 from "./data/v2/state";
import * as _139 from "./data/v2/tx";
import * as _140 from "./data/v2/types";
import * as _141 from "./ecocredit/basket/v1/events";
import * as _142 from "./ecocredit/basket/v1/query";
import * as _143 from "./ecocredit/basket/v1/state";
import * as _144 from "./ecocredit/basket/v1/tx";
import * as _145 from "./ecocredit/basket/v1/types";
import * as _146 from "./ecocredit/marketplace/v1/events";
import * as _147 from "./ecocredit/marketplace/v1/query";
import * as _148 from "./ecocredit/marketplace/v1/state";
import * as _149 from "./ecocredit/marketplace/v1/tx";
import * as _150 from "./ecocredit/marketplace/v1/types";
import * as _151 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _152 from "./ecocredit/v1/events";
import * as _153 from "./ecocredit/v1/query";
import * as _154 from "./ecocredit/v1/state";
import * as _155 from "./ecocredit/v1/tx";
import * as _156 from "./ecocredit/v1/types";
import * as _157 from "./ecocredit/v1alpha1/events";
import * as _158 from "./ecocredit/v1alpha1/genesis";
import * as _159 from "./ecocredit/v1alpha1/query";
import * as _160 from "./ecocredit/v1alpha1/tx";
import * as _161 from "./ecocredit/v1alpha1/types";
import * as _162 from "./orm/module/v1alpha1/module";
import * as _163 from "./orm/v1/orm";
import * as _164 from "./orm/v1alpha1/schema";
import * as _278 from "./data/v1/tx.amino";
import * as _279 from "./data/v2/tx.amino";
import * as _280 from "./ecocredit/basket/v1/tx.amino";
import * as _281 from "./ecocredit/marketplace/v1/tx.amino";
import * as _282 from "./ecocredit/v1/tx.amino";
import * as _283 from "./ecocredit/v1alpha1/tx.amino";
import * as _284 from "./data/v1/tx.registry";
import * as _285 from "./data/v2/tx.registry";
import * as _286 from "./ecocredit/basket/v1/tx.registry";
import * as _287 from "./ecocredit/marketplace/v1/tx.registry";
import * as _288 from "./ecocredit/v1/tx.registry";
import * as _289 from "./ecocredit/v1alpha1/tx.registry";
import * as _290 from "./data/v1/query.lcd";
import * as _291 from "./data/v2/query.lcd";
import * as _292 from "./ecocredit/basket/v1/query.lcd";
import * as _293 from "./ecocredit/marketplace/v1/query.lcd";
import * as _294 from "./ecocredit/v1/query.lcd";
import * as _295 from "./ecocredit/v1alpha1/query.lcd";
import * as _296 from "./data/v1/query.rpc.Query";
import * as _297 from "./data/v2/query.rpc.Query";
import * as _298 from "./ecocredit/basket/v1/query.rpc.Query";
import * as _299 from "./ecocredit/marketplace/v1/query.rpc.Query";
import * as _300 from "./ecocredit/v1/query.rpc.Query";
import * as _301 from "./ecocredit/v1alpha1/query.rpc.Query";
import * as _302 from "./data/v1/tx.rpc.msg";
import * as _303 from "./data/v2/tx.rpc.msg";
import * as _304 from "./ecocredit/basket/v1/tx.rpc.msg";
import * as _305 from "./ecocredit/marketplace/v1/tx.rpc.msg";
import * as _306 from "./ecocredit/v1/tx.rpc.msg";
import * as _307 from "./ecocredit/v1alpha1/tx.rpc.msg";
import * as _314 from "./lcd";
import * as _315 from "./rpc.query";
import * as _316 from "./rpc.tx";
export namespace regen {
  export namespace app {
    export const v1alpha1 = {
      ..._130
    };
  }
  export namespace data {
    export const v1 = {
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._278,
      ..._284,
      ..._290,
      ..._296,
      ..._302
    };
    export const v2 = {
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._279,
      ..._285,
      ..._291,
      ..._297,
      ..._303
    };
  }
  export namespace ecocredit {
    export namespace basket {
      export const v1 = {
        ..._141,
        ..._142,
        ..._143,
        ..._144,
        ..._145,
        ..._280,
        ..._286,
        ..._292,
        ..._298,
        ..._304
      };
    }
    export namespace marketplace {
      export const v1 = {
        ..._146,
        ..._147,
        ..._148,
        ..._149,
        ..._150,
        ..._281,
        ..._287,
        ..._293,
        ..._299,
        ..._305
      };
    }
    export namespace orderbook {
      export const v1alpha1 = {
        ..._151
      };
    }
    export const v1 = {
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._282,
      ..._288,
      ..._294,
      ..._300,
      ..._306
    };
    export const v1alpha1 = {
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._283,
      ..._289,
      ..._295,
      ..._301,
      ..._307
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._162
      };
    }
    export const v1 = {
      ..._163
    };
    export const v1alpha1 = {
      ..._164
    };
  }
  export const ClientFactory = {
    ..._314,
    ..._315,
    ..._316
  };
}