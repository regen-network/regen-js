import * as _112 from "./data/v1/events";
import * as _113 from "./data/v1/query";
import * as _114 from "./data/v1/state";
import * as _115 from "./data/v1/tx";
import * as _116 from "./data/v1/types";
import * as _117 from "./ecocredit/basket/v1/events";
import * as _118 from "./ecocredit/basket/v1/query";
import * as _119 from "./ecocredit/basket/v1/state";
import * as _120 from "./ecocredit/basket/v1/tx";
import * as _121 from "./ecocredit/basket/v1/types";
import * as _122 from "./ecocredit/marketplace/v1/events";
import * as _123 from "./ecocredit/marketplace/v1/query";
import * as _124 from "./ecocredit/marketplace/v1/state";
import * as _125 from "./ecocredit/marketplace/v1/tx";
import * as _126 from "./ecocredit/marketplace/v1/types";
import * as _127 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _128 from "./ecocredit/v1/events";
import * as _129 from "./ecocredit/v1/query";
import * as _130 from "./ecocredit/v1/state";
import * as _131 from "./ecocredit/v1/tx";
import * as _132 from "./ecocredit/v1/types";
import * as _133 from "./ecocredit/v1alpha1/events";
import * as _134 from "./ecocredit/v1alpha1/genesis";
import * as _135 from "./ecocredit/v1alpha1/query";
import * as _136 from "./ecocredit/v1alpha1/tx";
import * as _137 from "./ecocredit/v1alpha1/types";
import * as _138 from "./intertx/v1/query";
import * as _139 from "./intertx/v1/tx";
import * as _240 from "./data/v1/tx.amino";
import * as _241 from "./ecocredit/basket/v1/tx.amino";
import * as _242 from "./ecocredit/marketplace/v1/tx.amino";
import * as _243 from "./ecocredit/v1/tx.amino";
import * as _244 from "./ecocredit/v1alpha1/tx.amino";
import * as _245 from "./intertx/v1/tx.amino";
import * as _246 from "./data/v1/tx.registry";
import * as _247 from "./ecocredit/basket/v1/tx.registry";
import * as _248 from "./ecocredit/marketplace/v1/tx.registry";
import * as _249 from "./ecocredit/v1/tx.registry";
import * as _250 from "./ecocredit/v1alpha1/tx.registry";
import * as _251 from "./intertx/v1/tx.registry";
import * as _252 from "./data/v1/query.lcd";
import * as _253 from "./ecocredit/basket/v1/query.lcd";
import * as _254 from "./ecocredit/marketplace/v1/query.lcd";
import * as _255 from "./ecocredit/v1/query.lcd";
import * as _256 from "./ecocredit/v1alpha1/query.lcd";
import * as _257 from "./intertx/v1/query.lcd";
import * as _258 from "./data/v1/query.rpc.Query";
import * as _259 from "./ecocredit/basket/v1/query.rpc.Query";
import * as _260 from "./ecocredit/marketplace/v1/query.rpc.Query";
import * as _261 from "./ecocredit/v1/query.rpc.Query";
import * as _262 from "./ecocredit/v1alpha1/query.rpc.Query";
import * as _263 from "./intertx/v1/query.rpc.Query";
import * as _264 from "./data/v1/tx.rpc.msg";
import * as _265 from "./ecocredit/basket/v1/tx.rpc.msg";
import * as _266 from "./ecocredit/marketplace/v1/tx.rpc.msg";
import * as _267 from "./ecocredit/v1/tx.rpc.msg";
import * as _268 from "./ecocredit/v1alpha1/tx.rpc.msg";
import * as _269 from "./intertx/v1/tx.rpc.msg";
import * as _276 from "./lcd";
import * as _277 from "./rpc.query";
import * as _278 from "./rpc.tx";
export namespace regen {
  export namespace data {
    export const v1 = {
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._240,
      ..._246,
      ..._252,
      ..._258,
      ..._264
    };
  }
  export namespace ecocredit {
    export namespace basket {
      export const v1 = {
        ..._117,
        ..._118,
        ..._119,
        ..._120,
        ..._121,
        ..._241,
        ..._247,
        ..._253,
        ..._259,
        ..._265
      };
    }
    export namespace marketplace {
      export const v1 = {
        ..._122,
        ..._123,
        ..._124,
        ..._125,
        ..._126,
        ..._242,
        ..._248,
        ..._254,
        ..._260,
        ..._266
      };
    }
    export namespace orderbook {
      export const v1alpha1 = {
        ..._127
      };
    }
    export const v1 = {
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._243,
      ..._249,
      ..._255,
      ..._261,
      ..._267
    };
    export const v1alpha1 = {
      ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._244,
      ..._250,
      ..._256,
      ..._262,
      ..._268
    };
  }
  export namespace intertx {
    export const v1 = {
      ..._138,
      ..._139,
      ..._245,
      ..._251,
      ..._257,
      ..._263,
      ..._269
    };
  }
  export const ClientFactory = {
    ..._276,
    ..._277,
    ..._278
  };
}