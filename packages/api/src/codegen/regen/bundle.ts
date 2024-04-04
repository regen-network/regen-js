import * as _113 from "./data/v1/events";
import * as _114 from "./data/v1/query";
import * as _115 from "./data/v1/state";
import * as _116 from "./data/v1/tx";
import * as _117 from "./data/v1/types";
import * as _118 from "./ecocredit/basket/v1/events";
import * as _119 from "./ecocredit/basket/v1/query";
import * as _120 from "./ecocredit/basket/v1/state";
import * as _121 from "./ecocredit/basket/v1/tx";
import * as _122 from "./ecocredit/basket/v1/types";
import * as _123 from "./ecocredit/marketplace/v1/events";
import * as _124 from "./ecocredit/marketplace/v1/query";
import * as _125 from "./ecocredit/marketplace/v1/state";
import * as _126 from "./ecocredit/marketplace/v1/tx";
import * as _127 from "./ecocredit/marketplace/v1/types";
import * as _128 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _129 from "./ecocredit/v1/events";
import * as _130 from "./ecocredit/v1/query";
import * as _131 from "./ecocredit/v1/state";
import * as _132 from "./ecocredit/v1/tx";
import * as _133 from "./ecocredit/v1/types";
import * as _134 from "./ecocredit/v1alpha1/events";
import * as _135 from "./ecocredit/v1alpha1/genesis";
import * as _136 from "./ecocredit/v1alpha1/query";
import * as _137 from "./ecocredit/v1alpha1/tx";
import * as _138 from "./ecocredit/v1alpha1/types";
import * as _139 from "./intertx/v1/query";
import * as _140 from "./intertx/v1/tx";
import * as _241 from "./data/v1/tx.amino";
import * as _242 from "./ecocredit/basket/v1/tx.amino";
import * as _243 from "./ecocredit/marketplace/v1/tx.amino";
import * as _244 from "./ecocredit/v1/tx.amino";
import * as _245 from "./ecocredit/v1alpha1/tx.amino";
import * as _246 from "./intertx/v1/tx.amino";
import * as _247 from "./data/v1/tx.registry";
import * as _248 from "./ecocredit/basket/v1/tx.registry";
import * as _249 from "./ecocredit/marketplace/v1/tx.registry";
import * as _250 from "./ecocredit/v1/tx.registry";
import * as _251 from "./ecocredit/v1alpha1/tx.registry";
import * as _252 from "./intertx/v1/tx.registry";
import * as _253 from "./data/v1/query.lcd";
import * as _254 from "./ecocredit/basket/v1/query.lcd";
import * as _255 from "./ecocredit/marketplace/v1/query.lcd";
import * as _256 from "./ecocredit/v1/query.lcd";
import * as _257 from "./ecocredit/v1alpha1/query.lcd";
import * as _258 from "./intertx/v1/query.lcd";
import * as _259 from "./data/v1/query.rpc.Query";
import * as _260 from "./ecocredit/basket/v1/query.rpc.Query";
import * as _261 from "./ecocredit/marketplace/v1/query.rpc.Query";
import * as _262 from "./ecocredit/v1/query.rpc.Query";
import * as _263 from "./ecocredit/v1alpha1/query.rpc.Query";
import * as _264 from "./intertx/v1/query.rpc.Query";
import * as _265 from "./data/v1/tx.rpc.msg";
import * as _266 from "./ecocredit/basket/v1/tx.rpc.msg";
import * as _267 from "./ecocredit/marketplace/v1/tx.rpc.msg";
import * as _268 from "./ecocredit/v1/tx.rpc.msg";
import * as _269 from "./ecocredit/v1alpha1/tx.rpc.msg";
import * as _270 from "./intertx/v1/tx.rpc.msg";
import * as _277 from "./lcd";
import * as _278 from "./rpc.query";
import * as _279 from "./rpc.tx";
export namespace regen {
  export namespace data {
    export const v1 = {
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._241,
      ..._247,
      ..._253,
      ..._259,
      ..._265
    };
  }
  export namespace ecocredit {
    export namespace basket {
      export const v1 = {
        ..._118,
        ..._119,
        ..._120,
        ..._121,
        ..._122,
        ..._242,
        ..._248,
        ..._254,
        ..._260,
        ..._266
      };
    }
    export namespace marketplace {
      export const v1 = {
        ..._123,
        ..._124,
        ..._125,
        ..._126,
        ..._127,
        ..._243,
        ..._249,
        ..._255,
        ..._261,
        ..._267
      };
    }
    export namespace orderbook {
      export const v1alpha1 = {
        ..._128
      };
    }
    export const v1 = {
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._244,
      ..._250,
      ..._256,
      ..._262,
      ..._268
    };
    export const v1alpha1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._245,
      ..._251,
      ..._257,
      ..._263,
      ..._269
    };
  }
  export namespace intertx {
    export const v1 = {
      ..._139,
      ..._140,
      ..._246,
      ..._252,
      ..._258,
      ..._264,
      ..._270
    };
  }
  export const ClientFactory = {
    ..._277,
    ..._278,
    ..._279
  };
}