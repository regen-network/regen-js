import * as _114 from "./data/v1/events";
import * as _115 from "./data/v1/query";
import * as _116 from "./data/v1/state";
import * as _117 from "./data/v1/tx";
import * as _118 from "./data/v1/types";
import * as _119 from "./ecocredit/basket/v1/events";
import * as _120 from "./ecocredit/basket/v1/query";
import * as _121 from "./ecocredit/basket/v1/state";
import * as _122 from "./ecocredit/basket/v1/tx";
import * as _123 from "./ecocredit/basket/v1/types";
import * as _124 from "./ecocredit/marketplace/v1/events";
import * as _125 from "./ecocredit/marketplace/v1/query";
import * as _126 from "./ecocredit/marketplace/v1/state";
import * as _127 from "./ecocredit/marketplace/v1/tx";
import * as _128 from "./ecocredit/marketplace/v1/types";
import * as _129 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _130 from "./ecocredit/v1/events";
import * as _131 from "./ecocredit/v1/query";
import * as _132 from "./ecocredit/v1/state";
import * as _133 from "./ecocredit/v1/tx";
import * as _134 from "./ecocredit/v1/types";
import * as _135 from "./ecocredit/v1alpha1/events";
import * as _136 from "./ecocredit/v1alpha1/genesis";
import * as _137 from "./ecocredit/v1alpha1/query";
import * as _138 from "./ecocredit/v1alpha1/tx";
import * as _139 from "./ecocredit/v1alpha1/types";
import * as _140 from "./intertx/v1/query";
import * as _141 from "./intertx/v1/tx";
import * as _205 from "./data/v1/tx.amino";
import * as _206 from "./ecocredit/basket/v1/tx.amino";
import * as _207 from "./ecocredit/marketplace/v1/tx.amino";
import * as _208 from "./ecocredit/v1/tx.amino";
import * as _209 from "./ecocredit/v1alpha1/tx.amino";
import * as _210 from "./intertx/v1/tx.amino";
import * as _211 from "./data/v1/tx.registry";
import * as _212 from "./ecocredit/basket/v1/tx.registry";
import * as _213 from "./ecocredit/marketplace/v1/tx.registry";
import * as _214 from "./ecocredit/v1/tx.registry";
import * as _215 from "./ecocredit/v1alpha1/tx.registry";
import * as _216 from "./intertx/v1/tx.registry";
import * as _217 from "./data/v1/query.lcd";
import * as _218 from "./ecocredit/basket/v1/query.lcd";
import * as _219 from "./ecocredit/marketplace/v1/query.lcd";
import * as _220 from "./ecocredit/v1/query.lcd";
import * as _221 from "./ecocredit/v1alpha1/query.lcd";
import * as _222 from "./intertx/v1/query.lcd";
import * as _225 from "./lcd";
export namespace regen {
  export namespace data {
    export const v1 = { ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._205,
      ..._211,
      ..._217
    };
  }
  export namespace ecocredit {
    export namespace basket {
      export const v1 = { ..._119,
        ..._120,
        ..._121,
        ..._122,
        ..._123,
        ..._206,
        ..._212,
        ..._218
      };
    }
    export namespace marketplace {
      export const v1 = { ..._124,
        ..._125,
        ..._126,
        ..._127,
        ..._128,
        ..._207,
        ..._213,
        ..._219
      };
    }
    export namespace orderbook {
      export const v1alpha1 = { ..._129
      };
    }
    export const v1 = { ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._208,
      ..._214,
      ..._220
    };
    export const v1alpha1 = { ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._209,
      ..._215,
      ..._221
    };
  }
  export namespace intertx {
    export const v1 = { ..._140,
      ..._141,
      ..._210,
      ..._216,
      ..._222
    };
  }
  export const ClientFactory = { ..._225
  };
}