//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSell, MsgUpdateSellOrders, MsgCancelSellOrder, MsgBuyDirect, MsgAddAllowedDenom, MsgRemoveAllowedDenom, MsgGovSetFeeParams, MsgGovSendFromFeePool } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/regen.ecocredit.marketplace.v1.MsgSell", MsgSell], ["/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders", MsgUpdateSellOrders], ["/regen.ecocredit.marketplace.v1.MsgCancelSellOrder", MsgCancelSellOrder], ["/regen.ecocredit.marketplace.v1.MsgBuyDirect", MsgBuyDirect], ["/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom", MsgAddAllowedDenom], ["/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom", MsgRemoveAllowedDenom], ["/regen.ecocredit.marketplace.v1.MsgGovSetFeeParams", MsgGovSetFeeParams], ["/regen.ecocredit.marketplace.v1.MsgGovSendFromFeePool", MsgGovSendFromFeePool]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    sell(value: MsgSell) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
        value: MsgSell.encode(value).finish()
      };
    },
    updateSellOrders(value: MsgUpdateSellOrders) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
        value: MsgUpdateSellOrders.encode(value).finish()
      };
    },
    cancelSellOrder(value: MsgCancelSellOrder) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
        value: MsgCancelSellOrder.encode(value).finish()
      };
    },
    buyDirect(value: MsgBuyDirect) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
        value: MsgBuyDirect.encode(value).finish()
      };
    },
    addAllowedDenom(value: MsgAddAllowedDenom) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom",
        value: MsgAddAllowedDenom.encode(value).finish()
      };
    },
    removeAllowedDenom(value: MsgRemoveAllowedDenom) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom",
        value: MsgRemoveAllowedDenom.encode(value).finish()
      };
    },
    govSetFeeParams(value: MsgGovSetFeeParams) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgGovSetFeeParams",
        value: MsgGovSetFeeParams.encode(value).finish()
      };
    },
    govSendFromFeePool(value: MsgGovSendFromFeePool) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgGovSendFromFeePool",
        value: MsgGovSendFromFeePool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    sell(value: MsgSell) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
        value
      };
    },
    updateSellOrders(value: MsgUpdateSellOrders) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
        value
      };
    },
    cancelSellOrder(value: MsgCancelSellOrder) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
        value
      };
    },
    buyDirect(value: MsgBuyDirect) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
        value
      };
    },
    addAllowedDenom(value: MsgAddAllowedDenom) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom",
        value
      };
    },
    removeAllowedDenom(value: MsgRemoveAllowedDenom) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom",
        value
      };
    },
    govSetFeeParams(value: MsgGovSetFeeParams) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgGovSetFeeParams",
        value
      };
    },
    govSendFromFeePool(value: MsgGovSendFromFeePool) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgGovSendFromFeePool",
        value
      };
    }
  },
  fromPartial: {
    sell(value: MsgSell) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
        value: MsgSell.fromPartial(value)
      };
    },
    updateSellOrders(value: MsgUpdateSellOrders) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
        value: MsgUpdateSellOrders.fromPartial(value)
      };
    },
    cancelSellOrder(value: MsgCancelSellOrder) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
        value: MsgCancelSellOrder.fromPartial(value)
      };
    },
    buyDirect(value: MsgBuyDirect) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
        value: MsgBuyDirect.fromPartial(value)
      };
    },
    addAllowedDenom(value: MsgAddAllowedDenom) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom",
        value: MsgAddAllowedDenom.fromPartial(value)
      };
    },
    removeAllowedDenom(value: MsgRemoveAllowedDenom) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom",
        value: MsgRemoveAllowedDenom.fromPartial(value)
      };
    },
    govSetFeeParams(value: MsgGovSetFeeParams) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgGovSetFeeParams",
        value: MsgGovSetFeeParams.fromPartial(value)
      };
    },
    govSendFromFeePool(value: MsgGovSendFromFeePool) {
      return {
        typeUrl: "/regen.ecocredit.marketplace.v1.MsgGovSendFromFeePool",
        value: MsgGovSendFromFeePool.fromPartial(value)
      };
    }
  }
};