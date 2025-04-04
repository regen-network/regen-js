//@ts-nocheck
import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl(rpc),
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    group: {
      v1: new (await import("../cosmos/group/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  regen: {
    data: {
      v1: new (await import("./data/v1/tx.rpc.msg")).MsgClientImpl(rpc),
      v2: new (await import("./data/v2/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    ecocredit: {
      basket: {
        v1: new (await import("./ecocredit/basket/v1/tx.rpc.msg")).MsgClientImpl(rpc)
      },
      marketplace: {
        v1: new (await import("./ecocredit/marketplace/v1/tx.rpc.msg")).MsgClientImpl(rpc)
      },
      v1: new (await import("./ecocredit/v1/tx.rpc.msg")).MsgClientImpl(rpc),
      v1alpha1: new (await import("./ecocredit/v1alpha1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    intertx: {
      v1: new (await import("./intertx/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});