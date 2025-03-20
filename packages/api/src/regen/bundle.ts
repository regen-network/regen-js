//@ts-nocheck
import * as _76 from "./data/v1/events";
import * as _77 from "./data/v1/query";
import * as _78 from "./data/v1/state";
import * as _79 from "./data/v1/tx";
import * as _80 from "./data/v1/types";
import * as _81 from "./data/v2/events";
import * as _82 from "./data/v2/query";
import * as _83 from "./data/v2/state";
import * as _84 from "./data/v2/tx";
import * as _85 from "./data/v2/types";
import * as _86 from "./ecocredit/basket/v1/events";
import * as _87 from "./ecocredit/basket/v1/query";
import * as _88 from "./ecocredit/basket/v1/state";
import * as _89 from "./ecocredit/basket/v1/tx";
import * as _90 from "./ecocredit/basket/v1/types";
import * as _91 from "./ecocredit/marketplace/v1/events";
import * as _92 from "./ecocredit/marketplace/v1/query";
import * as _93 from "./ecocredit/marketplace/v1/state";
import * as _94 from "./ecocredit/marketplace/v1/tx";
import * as _95 from "./ecocredit/marketplace/v1/types";
import * as _96 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _97 from "./ecocredit/v1/events";
import * as _98 from "./ecocredit/v1/query";
import * as _99 from "./ecocredit/v1/state";
import * as _100 from "./ecocredit/v1/tx";
import * as _101 from "./ecocredit/v1/types";
import * as _102 from "./ecocredit/v1alpha1/events";
import * as _103 from "./ecocredit/v1alpha1/genesis";
import * as _104 from "./ecocredit/v1alpha1/query";
import * as _105 from "./ecocredit/v1alpha1/tx";
import * as _106 from "./ecocredit/v1alpha1/types";
import * as _107 from "./intertx/v1/query";
import * as _108 from "./intertx/v1/tx";
import * as _192 from "./data/v1/tx.amino";
import * as _193 from "./data/v2/tx.amino";
import * as _194 from "./ecocredit/basket/v1/tx.amino";
import * as _195 from "./ecocredit/marketplace/v1/tx.amino";
import * as _196 from "./ecocredit/v1/tx.amino";
import * as _197 from "./ecocredit/v1alpha1/tx.amino";
import * as _198 from "./intertx/v1/tx.amino";
import * as _199 from "./data/v1/tx.registry";
import * as _200 from "./data/v2/tx.registry";
import * as _201 from "./ecocredit/basket/v1/tx.registry";
import * as _202 from "./ecocredit/marketplace/v1/tx.registry";
import * as _203 from "./ecocredit/v1/tx.registry";
import * as _204 from "./ecocredit/v1alpha1/tx.registry";
import * as _205 from "./intertx/v1/tx.registry";
import * as _206 from "./data/v1/query.lcd";
import * as _207 from "./data/v2/query.lcd";
import * as _208 from "./ecocredit/basket/v1/query.lcd";
import * as _209 from "./ecocredit/marketplace/v1/query.lcd";
import * as _210 from "./ecocredit/v1/query.lcd";
import * as _211 from "./ecocredit/v1alpha1/query.lcd";
import * as _212 from "./intertx/v1/query.lcd";
import * as _213 from "./data/v1/query.rpc.Query";
import * as _214 from "./data/v2/query.rpc.Query";
import * as _215 from "./ecocredit/basket/v1/query.rpc.Query";
import * as _216 from "./ecocredit/marketplace/v1/query.rpc.Query";
import * as _217 from "./ecocredit/v1/query.rpc.Query";
import * as _218 from "./ecocredit/v1alpha1/query.rpc.Query";
import * as _219 from "./intertx/v1/query.rpc.Query";
import * as _220 from "./data/v1/tx.rpc.msg";
import * as _221 from "./data/v2/tx.rpc.msg";
import * as _222 from "./ecocredit/basket/v1/tx.rpc.msg";
import * as _223 from "./ecocredit/marketplace/v1/tx.rpc.msg";
import * as _224 from "./ecocredit/v1/tx.rpc.msg";
import * as _225 from "./ecocredit/v1alpha1/tx.rpc.msg";
import * as _226 from "./intertx/v1/tx.rpc.msg";
import * as _233 from "./lcd";
import * as _234 from "./rpc.query";
import * as _235 from "./rpc.tx";
export namespace regen {
  export namespace data {
    export const v1 = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._192,
      ..._199,
      ..._206,
      ..._213,
      ..._220
    };
    export const v2 = {
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._193,
      ..._200,
      ..._207,
      ..._214,
      ..._221
    };
  }
  export namespace ecocredit {
    export namespace basket {
      export const v1 = {
        ..._86,
        ..._87,
        ..._88,
        ..._89,
        ..._90,
        ..._194,
        ..._201,
        ..._208,
        ..._215,
        ..._222
      };
    }
    export namespace marketplace {
      export const v1 = {
        ..._91,
        ..._92,
        ..._93,
        ..._94,
        ..._95,
        ..._195,
        ..._202,
        ..._209,
        ..._216,
        ..._223
      };
    }
    export namespace orderbook {
      export const v1alpha1 = {
        ..._96
      };
    }
    export const v1 = {
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._196,
      ..._203,
      ..._210,
      ..._217,
      ..._224
    };
    export const v1alpha1 = {
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._197,
      ..._204,
      ..._211,
      ..._218,
      ..._225
    };
  }
  export namespace intertx {
    export const v1 = {
      ..._107,
      ..._108,
      ..._198,
      ..._205,
      ..._212,
      ..._219,
      ..._226
    };
  }
  export const ClientFactory = {
    ..._233,
    ..._234,
    ..._235
  };
}