import * as _104 from "./data/v1/events";
import * as _105 from "./data/v1/query";
import * as _106 from "./data/v1/state";
import * as _107 from "./data/v1/tx";
import * as _108 from "./data/v1/types";
import * as _109 from "./ecocredit/basket/v1/events";
import * as _110 from "./ecocredit/basket/v1/query";
import * as _111 from "./ecocredit/basket/v1/state";
import * as _112 from "./ecocredit/basket/v1/tx";
import * as _113 from "./ecocredit/basket/v1/types";
import * as _114 from "./ecocredit/marketplace/v1/events";
import * as _115 from "./ecocredit/marketplace/v1/query";
import * as _116 from "./ecocredit/marketplace/v1/state";
import * as _117 from "./ecocredit/marketplace/v1/tx";
import * as _118 from "./ecocredit/marketplace/v1/types";
import * as _119 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _120 from "./ecocredit/v1/events";
import * as _121 from "./ecocredit/v1/query";
import * as _122 from "./ecocredit/v1/state";
import * as _123 from "./ecocredit/v1/tx";
import * as _124 from "./ecocredit/v1/types";
import * as _125 from "./ecocredit/v1alpha1/events";
import * as _126 from "./ecocredit/v1alpha1/genesis";
import * as _127 from "./ecocredit/v1alpha1/query";
import * as _128 from "./ecocredit/v1alpha1/tx";
import * as _129 from "./ecocredit/v1alpha1/types";
import * as _130 from "./intertx/v1/query";
import * as _131 from "./intertx/v1/tx";
import * as _189 from "./data/v1/tx.amino";
import * as _190 from "./ecocredit/basket/v1/tx.amino";
import * as _191 from "./ecocredit/marketplace/v1/tx.amino";
import * as _192 from "./ecocredit/v1/tx.amino";
import * as _193 from "./ecocredit/v1alpha1/tx.amino";
import * as _194 from "./intertx/v1/tx.amino";
import * as _195 from "./data/v1/tx.registry";
import * as _196 from "./ecocredit/basket/v1/tx.registry";
import * as _197 from "./ecocredit/marketplace/v1/tx.registry";
import * as _198 from "./ecocredit/v1/tx.registry";
import * as _199 from "./ecocredit/v1alpha1/tx.registry";
import * as _200 from "./intertx/v1/tx.registry";
import * as _201 from "./data/v1/query.lcd";
import * as _202 from "./ecocredit/basket/v1/query.lcd";
import * as _203 from "./ecocredit/marketplace/v1/query.lcd";
import * as _204 from "./ecocredit/v1/query.lcd";
import * as _205 from "./ecocredit/v1alpha1/query.lcd";
import * as _206 from "./intertx/v1/query.lcd";
import * as _208 from "./lcd";
export namespace regen {
  export namespace data {
    export const v1 = { ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._189,
      ..._195,
      ..._201
    };
  }
  export namespace ecocredit {
    export namespace basket {
      export const v1 = { ..._109,
        ..._110,
        ..._111,
        ..._112,
        ..._113,
        ..._190,
        ..._196,
        ..._202
      };
    }
    export namespace marketplace {
      export const v1 = { ..._114,
        ..._115,
        ..._116,
        ..._117,
        ..._118,
        ..._191,
        ..._197,
        ..._203
      };
    }
    export namespace orderbook {
      export const v1alpha1 = { ..._119
      };
    }
    export const v1 = { ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._192,
      ..._198,
      ..._204
    };
    export const v1alpha1 = { ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._193,
      ..._199,
      ..._205
    };
  }
  export namespace intertx {
    export const v1 = { ..._130,
      ..._131,
      ..._194,
      ..._200,
      ..._206
    };
  }
  export const ClientFactory = { ..._208
  };
}