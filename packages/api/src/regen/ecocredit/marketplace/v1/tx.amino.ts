//@ts-nocheck
import { MsgSell, MsgUpdateSellOrders, MsgCancelSellOrder, MsgBuyDirect, MsgAddAllowedDenom, MsgRemoveAllowedDenom, MsgGovSetFeeParams, MsgGovSendFromFeePool } from "./tx";
export const AminoConverter = {
  "/regen.ecocredit.marketplace.v1.MsgSell": {
    aminoType: "regen.marketplace/MsgSell",
    toAmino: MsgSell.toAmino,
    fromAmino: MsgSell.fromAmino
  },
  "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
    aminoType: "regen.marketplace/MsgUpdateSellOrders",
    toAmino: MsgUpdateSellOrders.toAmino,
    fromAmino: MsgUpdateSellOrders.fromAmino
  },
  "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
    aminoType: "regen.marketplace/MsgCancelSellOrder",
    toAmino: MsgCancelSellOrder.toAmino,
    fromAmino: MsgCancelSellOrder.fromAmino
  },
  "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
    aminoType: "regen.marketplace/MsgBuyDirect",
    toAmino: MsgBuyDirect.toAmino,
    fromAmino: MsgBuyDirect.fromAmino
  },
  "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom": {
    aminoType: "regen.marketplace/MsgAddAllowedDenom",
    toAmino: MsgAddAllowedDenom.toAmino,
    fromAmino: MsgAddAllowedDenom.fromAmino
  },
  "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom": {
    aminoType: "regen.marketplace/MsgRemoveAllowedDenom",
    toAmino: MsgRemoveAllowedDenom.toAmino,
    fromAmino: MsgRemoveAllowedDenom.fromAmino
  },
  "/regen.ecocredit.marketplace.v1.MsgGovSetFeeParams": {
    aminoType: "/regen.ecocredit.marketplace.v1.MsgGovSetFeeParams",
    toAmino: MsgGovSetFeeParams.toAmino,
    fromAmino: MsgGovSetFeeParams.fromAmino
  },
  "/regen.ecocredit.marketplace.v1.MsgGovSendFromFeePool": {
    aminoType: "/regen.ecocredit.marketplace.v1.MsgGovSendFromFeePool",
    toAmino: MsgGovSendFromFeePool.toAmino,
    fromAmino: MsgGovSendFromFeePool.fromAmino
  }
};