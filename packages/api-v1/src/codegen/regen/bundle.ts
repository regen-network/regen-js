import * as _105 from "./data/v1/events";
import * as _106 from "./data/v1/query";
import * as _107 from "./data/v1/state";
import * as _108 from "./data/v1/tx";
import * as _109 from "./data/v1/types";
import * as _110 from "./ecocredit/basket/v1/events";
import * as _111 from "./ecocredit/basket/v1/query";
import * as _112 from "./ecocredit/basket/v1/state";
import * as _113 from "./ecocredit/basket/v1/tx";
import * as _114 from "./ecocredit/basket/v1/types";
import * as _115 from "./ecocredit/marketplace/v1/events";
import * as _116 from "./ecocredit/marketplace/v1/query";
import * as _117 from "./ecocredit/marketplace/v1/state";
import * as _118 from "./ecocredit/marketplace/v1/tx";
import * as _119 from "./ecocredit/marketplace/v1/types";
import * as _120 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _121 from "./ecocredit/v1/events";
import * as _122 from "./ecocredit/v1/query";
import * as _123 from "./ecocredit/v1/state";
import * as _124 from "./ecocredit/v1/tx";
import * as _125 from "./ecocredit/v1/types";
import * as _126 from "./ecocredit/v1alpha1/events";
import * as _127 from "./ecocredit/v1alpha1/genesis";
import * as _128 from "./ecocredit/v1alpha1/query";
import * as _129 from "./ecocredit/v1alpha1/tx";
import * as _130 from "./ecocredit/v1alpha1/types";
import * as _131 from "./intertx/v1/query";
import * as _132 from "./intertx/v1/tx";
import * as _190 from "./data/v1/tx.amino";
import * as _191 from "./ecocredit/basket/v1/tx.amino";
import * as _192 from "./ecocredit/marketplace/v1/tx.amino";
import * as _193 from "./ecocredit/v1/tx.amino";
import * as _194 from "./ecocredit/v1alpha1/tx.amino";
import * as _195 from "./intertx/v1/tx.amino";
import * as _196 from "./data/v1/tx.registry";
import * as _197 from "./ecocredit/basket/v1/tx.registry";
import * as _198 from "./ecocredit/marketplace/v1/tx.registry";
import * as _199 from "./ecocredit/v1/tx.registry";
import * as _200 from "./ecocredit/v1alpha1/tx.registry";
import * as _201 from "./intertx/v1/tx.registry";
import * as _202 from "./data/v1/query.lcd";
import * as _203 from "./ecocredit/basket/v1/query.lcd";
import * as _204 from "./ecocredit/marketplace/v1/query.lcd";
import * as _205 from "./ecocredit/v1/query.lcd";
import * as _206 from "./ecocredit/v1alpha1/query.lcd";
import * as _207 from "./intertx/v1/query.lcd";
import * as _209 from "./lcd";
export namespace regen {
  export namespace data {
    export const v1 = { ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._190,
      ..._196,
      ..._202
    };
  }
  export namespace ecocredit {
    export namespace basket {
      export const v1 = { ..._110,
        ..._111,
        ..._112,
        ..._113,
        ..._114,
        ..._191,
        ..._197,
        ..._203
      };
    }
    export namespace marketplace {
      export const v1 = { ..._115,
        ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._192,
        ..._198,
        ..._204
      };
    }
    export namespace orderbook {
      export const v1alpha1 = { ..._120
      };
    }
    export const v1 = { ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._125,
      ..._193,
      ..._199,
      ..._205
    };
    export const v1alpha1 = { ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._194,
      ..._200,
      ..._206
    };
  }
  export namespace intertx {
    export const v1 = { ..._131,
      ..._132,
      ..._195,
      ..._201,
      ..._207
    };
  }
  export const ClientFactory = { ..._209
  };
}