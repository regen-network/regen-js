import * as _2 from "./app/module/v1alpha1/module";
import * as _3 from "./app/v1alpha1/config";
import * as _4 from "./app/v1alpha1/module";
import * as _5 from "./app/v1alpha1/query";
import * as _6 from "./auth/v1beta1/auth";
import * as _7 from "./auth/v1beta1/genesis";
import * as _8 from "./auth/v1beta1/query";
import * as _9 from "./authz/v1beta1/authz";
import * as _10 from "./authz/v1beta1/event";
import * as _11 from "./authz/v1beta1/genesis";
import * as _12 from "./authz/v1beta1/query";
import * as _13 from "./authz/v1beta1/tx";
import * as _14 from "./bank/v1beta1/authz";
import * as _15 from "./bank/v1beta1/bank";
import * as _16 from "./bank/v1beta1/genesis";
import * as _17 from "./bank/v1beta1/query";
import * as _18 from "./bank/v1beta1/tx";
import * as _19 from "./base/abci/v1beta1/abci";
import * as _20 from "./base/kv/v1beta1/kv";
import * as _21 from "./base/node/v1beta1/query";
import * as _22 from "./base/query/v1beta1/pagination";
import * as _23 from "./base/reflection/v1beta1/reflection";
import * as _24 from "./base/reflection/v2alpha1/reflection";
import * as _25 from "./base/snapshots/v1beta1/snapshot";
import * as _26 from "./base/store/v1beta1/commit_info";
import * as _27 from "./base/store/v1beta1/listening";
import * as _28 from "./base/tendermint/v1beta1/query";
import * as _29 from "./base/tendermint/v1beta1/types";
import * as _30 from "./base/v1beta1/coin";
import * as _31 from "./capability/v1beta1/capability";
import * as _32 from "./capability/v1beta1/genesis";
import * as _33 from "./crisis/v1beta1/genesis";
import * as _34 from "./crisis/v1beta1/tx";
import * as _35 from "./crypto/ed25519/keys";
import * as _36 from "./crypto/hd/v1/hd";
import * as _37 from "./crypto/keyring/v1/record";
import * as _38 from "./crypto/multisig/keys";
import * as _39 from "./crypto/secp256k1/keys";
import * as _40 from "./crypto/secp256r1/keys";
import * as _41 from "./distribution/v1beta1/distribution";
import * as _42 from "./distribution/v1beta1/genesis";
import * as _43 from "./distribution/v1beta1/query";
import * as _44 from "./distribution/v1beta1/tx";
import * as _45 from "./evidence/v1beta1/evidence";
import * as _46 from "./evidence/v1beta1/genesis";
import * as _47 from "./evidence/v1beta1/query";
import * as _48 from "./evidence/v1beta1/tx";
import * as _49 from "./feegrant/v1beta1/feegrant";
import * as _50 from "./feegrant/v1beta1/genesis";
import * as _51 from "./feegrant/v1beta1/query";
import * as _52 from "./feegrant/v1beta1/tx";
import * as _53 from "./genutil/v1beta1/genesis";
import * as _54 from "./gov/v1/genesis";
import * as _55 from "./gov/v1/gov";
import * as _56 from "./gov/v1/query";
import * as _57 from "./gov/v1/tx";
import * as _58 from "./gov/v1beta1/genesis";
import * as _59 from "./gov/v1beta1/gov";
import * as _60 from "./gov/v1beta1/query";
import * as _61 from "./gov/v1beta1/tx";
import * as _62 from "./group/v1/events";
import * as _63 from "./group/v1/genesis";
import * as _64 from "./group/v1/query";
import * as _65 from "./group/v1/tx";
import * as _66 from "./group/v1/types";
import * as _67 from "./mint/v1beta1/genesis";
import * as _68 from "./mint/v1beta1/mint";
import * as _69 from "./mint/v1beta1/query";
import * as _70 from "./msg/v1/msg";
import * as _71 from "./nft/v1beta1/event";
import * as _72 from "./nft/v1beta1/genesis";
import * as _73 from "./nft/v1beta1/nft";
import * as _74 from "./nft/v1beta1/query";
import * as _75 from "./nft/v1beta1/tx";
import * as _76 from "./orm/module/v1alpha1/module";
import * as _77 from "./orm/v1/orm";
import * as _78 from "./orm/v1alpha1/schema";
import * as _79 from "./params/v1beta1/params";
import * as _80 from "./params/v1beta1/query";
import * as _81 from "./slashing/v1beta1/genesis";
import * as _82 from "./slashing/v1beta1/query";
import * as _83 from "./slashing/v1beta1/slashing";
import * as _84 from "./slashing/v1beta1/tx";
import * as _85 from "./staking/v1beta1/authz";
import * as _86 from "./staking/v1beta1/genesis";
import * as _87 from "./staking/v1beta1/query";
import * as _88 from "./staking/v1beta1/staking";
import * as _89 from "./staking/v1beta1/tx";
import * as _90 from "./tx/signing/v1beta1/signing";
import * as _91 from "./tx/v1beta1/service";
import * as _92 from "./tx/v1beta1/tx";
import * as _93 from "./upgrade/v1beta1/query";
import * as _94 from "./upgrade/v1beta1/tx";
import * as _95 from "./upgrade/v1beta1/upgrade";
import * as _96 from "./vesting/v1beta1/tx";
import * as _97 from "./vesting/v1beta1/vesting";
import * as _144 from "./authz/v1beta1/tx.amino";
import * as _145 from "./bank/v1beta1/tx.amino";
import * as _146 from "./crisis/v1beta1/tx.amino";
import * as _147 from "./distribution/v1beta1/tx.amino";
import * as _148 from "./evidence/v1beta1/tx.amino";
import * as _149 from "./feegrant/v1beta1/tx.amino";
import * as _150 from "./gov/v1/tx.amino";
import * as _151 from "./gov/v1beta1/tx.amino";
import * as _152 from "./group/v1/tx.amino";
import * as _153 from "./nft/v1beta1/tx.amino";
import * as _154 from "./slashing/v1beta1/tx.amino";
import * as _155 from "./staking/v1beta1/tx.amino";
import * as _156 from "./upgrade/v1beta1/tx.amino";
import * as _157 from "./vesting/v1beta1/tx.amino";
import * as _158 from "./authz/v1beta1/tx.registry";
import * as _159 from "./bank/v1beta1/tx.registry";
import * as _160 from "./crisis/v1beta1/tx.registry";
import * as _161 from "./distribution/v1beta1/tx.registry";
import * as _162 from "./evidence/v1beta1/tx.registry";
import * as _163 from "./feegrant/v1beta1/tx.registry";
import * as _164 from "./gov/v1/tx.registry";
import * as _165 from "./gov/v1beta1/tx.registry";
import * as _166 from "./group/v1/tx.registry";
import * as _167 from "./nft/v1beta1/tx.registry";
import * as _168 from "./slashing/v1beta1/tx.registry";
import * as _169 from "./staking/v1beta1/tx.registry";
import * as _170 from "./upgrade/v1beta1/tx.registry";
import * as _171 from "./vesting/v1beta1/tx.registry";
import * as _172 from "./auth/v1beta1/query.lcd";
import * as _173 from "./authz/v1beta1/query.lcd";
import * as _174 from "./bank/v1beta1/query.lcd";
import * as _175 from "./base/node/v1beta1/query.lcd";
import * as _176 from "./base/tendermint/v1beta1/query.lcd";
import * as _177 from "./distribution/v1beta1/query.lcd";
import * as _178 from "./evidence/v1beta1/query.lcd";
import * as _179 from "./feegrant/v1beta1/query.lcd";
import * as _180 from "./gov/v1/query.lcd";
import * as _181 from "./gov/v1beta1/query.lcd";
import * as _182 from "./group/v1/query.lcd";
import * as _183 from "./mint/v1beta1/query.lcd";
import * as _184 from "./nft/v1beta1/query.lcd";
import * as _185 from "./params/v1beta1/query.lcd";
import * as _186 from "./slashing/v1beta1/query.lcd";
import * as _187 from "./staking/v1beta1/query.lcd";
import * as _188 from "./tx/v1beta1/service.lcd";
import * as _189 from "./upgrade/v1beta1/query.lcd";
import * as _208 from "./lcd";
export namespace cosmos {
  export namespace app {
    export namespace module {
      export const v1alpha1 = { ..._2
      };
    }
    export const v1alpha1 = { ..._3,
      ..._4,
      ..._5
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._6,
      ..._7,
      ..._8,
      ..._172
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._144,
      ..._158,
      ..._173
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._145,
      ..._159,
      ..._174
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._19
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._20
      };
    }
    export namespace node {
      export const v1beta1 = { ..._21,
        ..._175
      };
    }
    export namespace query {
      export const v1beta1 = { ..._22
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._23
      };
      export const v2alpha1 = { ..._24
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._25
      };
    }
    export namespace store {
      export const v1beta1 = { ..._26,
        ..._27
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._28,
        ..._29,
        ..._176
      };
    }
    export const v1beta1 = { ..._30
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._31,
      ..._32
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._33,
      ..._34,
      ..._146,
      ..._160
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._35
    };
    export namespace hd {
      export const v1 = { ..._36
      };
    }
    export namespace keyring {
      export const v1 = { ..._37
      };
    }
    export const multisig = { ..._38
    };
    export const secp256k1 = { ..._39
    };
    export const secp256r1 = { ..._40
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._147,
      ..._161,
      ..._177
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._148,
      ..._162,
      ..._178
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._149,
      ..._163,
      ..._179
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._53
    };
  }
  export namespace gov {
    export const v1 = { ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._150,
      ..._164,
      ..._180
    };
    export const v1beta1 = { ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._151,
      ..._165,
      ..._181
    };
  }
  export namespace group {
    export const v1 = { ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._152,
      ..._166,
      ..._182
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._67,
      ..._68,
      ..._69,
      ..._183
    };
  }
  export namespace msg {
    export const v1 = { ..._70
    };
  }
  export namespace nft {
    export const v1beta1 = { ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._153,
      ..._167,
      ..._184
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = { ..._76
      };
    }
    export const v1 = { ..._77
    };
    export const v1alpha1 = { ..._78
    };
  }
  export namespace params {
    export const v1beta1 = { ..._79,
      ..._80,
      ..._185
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._154,
      ..._168,
      ..._186
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._155,
      ..._169,
      ..._187
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._90
      };
    }
    export const v1beta1 = { ..._91,
      ..._92,
      ..._188
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._93,
      ..._94,
      ..._95,
      ..._156,
      ..._170,
      ..._189
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._96,
      ..._97,
      ..._157,
      ..._171
    };
  }
  export const ClientFactory = { ..._208
  };
}