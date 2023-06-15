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
import * as _203 from "./data/v1/tx.amino";
import * as _204 from "./ecocredit/basket/v1/tx.amino";
import * as _205 from "./ecocredit/marketplace/v1/tx.amino";
import * as _206 from "./ecocredit/v1/tx.amino";
import * as _207 from "./ecocredit/v1alpha1/tx.amino";
import * as _208 from "./intertx/v1/tx.amino";
import * as _209 from "./data/v1/tx.registry";
import * as _210 from "./ecocredit/basket/v1/tx.registry";
import * as _211 from "./ecocredit/marketplace/v1/tx.registry";
import * as _212 from "./ecocredit/v1/tx.registry";
import * as _213 from "./ecocredit/v1alpha1/tx.registry";
import * as _214 from "./intertx/v1/tx.registry";
import * as _215 from "./data/v1/query.lcd";
import * as _216 from "./ecocredit/basket/v1/query.lcd";
import * as _217 from "./ecocredit/marketplace/v1/query.lcd";
import * as _218 from "./ecocredit/v1/query.lcd";
import * as _219 from "./ecocredit/v1alpha1/query.lcd";
import * as _220 from "./intertx/v1/query.lcd";
import * as _223 from "./lcd";
export namespace regen {
  export namespace data {
    export const v1 = { ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._203,
      ..._209,
      ..._215
    };
  }
  export namespace ecocredit {
    export namespace basket {
      export const v1 = { ..._117,
        ..._118,
        ..._119,
        ..._120,
        ..._121,
        ..._204,
        ..._210,
        ..._216
      };
    }
    export namespace marketplace {
      export const v1 = { ..._122,
        ..._123,
        ..._124,
        ..._125,
        ..._126,
        ..._205,
        ..._211,
        ..._217
      };
    }
    export namespace orderbook {
      export const v1alpha1 = { ..._127
      };
    }
    export const v1 = { ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._206,
      ..._212,
      ..._218
    };
    export const v1alpha1 = { ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._207,
      ..._213,
      ..._219
    };
  }
  export namespace intertx {
    export const v1 = { ..._138,
      ..._139,
      ..._208,
      ..._214,
      ..._220
    };
  }
  export const ClientFactory = { ..._223
  };
}