import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../../helpers";
import { MsgSell, MsgUpdateSellOrders, MsgCancelSellOrder, MsgBuyDirect, MsgAddAllowedDenom, MsgRemoveAllowedDenom } from "./tx";
export interface AminoMsgSell extends AminoMsg {
  type: "/regen.ecocredit.marketplace.v1.MsgSell";
  value: {
    seller: string;
    orders: {
      batch_denom: string;
      quantity: string;
      ask_price: {
        denom: string;
        amount: string;
      };
      disable_auto_retire: boolean;
      expiration: {
        seconds: string;
        nanos: number;
      };
    }[];
  };
}
export interface AminoMsgUpdateSellOrders extends AminoMsg {
  type: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders";
  value: {
    seller: string;
    updates: {
      sell_order_id: string;
      new_quantity: string;
      new_ask_price: {
        denom: string;
        amount: string;
      };
      disable_auto_retire: boolean;
      new_expiration: {
        seconds: string;
        nanos: number;
      };
    }[];
  };
}
export interface AminoMsgCancelSellOrder extends AminoMsg {
  type: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder";
  value: {
    seller: string;
    sell_order_id: string;
  };
}
export interface AminoMsgBuyDirect extends AminoMsg {
  type: "/regen.ecocredit.marketplace.v1.MsgBuyDirect";
  value: {
    buyer: string;
    orders: {
      batch_denom: string;
      quantity: string;
      ask_price: {
        denom: string;
        amount: string;
      };
      disable_auto_retire: boolean;
      expiration: {
        seconds: string;
        nanos: number;
      };
    }[];
  };
}
export interface AminoMsgAddAllowedDenom extends AminoMsg {
  type: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom";
  value: {
    authority: string;
    bank_denom: string;
    display_denom: string;
    exponent: number;
  };
}
export interface AminoMsgRemoveAllowedDenom extends AminoMsg {
  type: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom";
  value: {
    authority: string;
    denom: string;
  };
}
export const AminoConverter = {
  "/regen.ecocredit.marketplace.v1.MsgSell": {
    aminoType: "/regen.ecocredit.marketplace.v1.MsgSell",
    toAmino: ({
      seller,
      orders
    }: MsgSell): AminoMsgSell["value"] => {
      return {
        seller,
        orders: orders.map(el0 => ({
          batch_denom: el0.batchDenom,
          quantity: el0.quantity,
          ask_price: {
            denom: el0.askPrice.denom,
            amount: Long.fromValue(el0.askPrice.amount).toString()
          },
          disable_auto_retire: el0.disableAutoRetire,
          expiration: el0.expiration
        }))
      };
    },
    fromAmino: ({
      seller,
      orders
    }: AminoMsgSell["value"]): MsgSell => {
      return {
        seller,
        orders: orders.map(el0 => ({
          batchDenom: el0.batch_denom,
          quantity: el0.quantity,
          askPrice: {
            denom: el0.ask_price.denom,
            amount: el0.ask_price.amount
          },
          disableAutoRetire: el0.disable_auto_retire,
          expiration: el0.expiration
        }))
      };
    }
  },
  "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
    aminoType: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
    toAmino: ({
      seller,
      updates
    }: MsgUpdateSellOrders): AminoMsgUpdateSellOrders["value"] => {
      return {
        seller,
        updates: updates.map(el0 => ({
          sell_order_id: el0.sellOrderId.toString(),
          new_quantity: el0.newQuantity,
          new_ask_price: {
            denom: el0.newAskPrice.denom,
            amount: Long.fromValue(el0.newAskPrice.amount).toString()
          },
          disable_auto_retire: el0.disableAutoRetire,
          new_expiration: el0.newExpiration
        }))
      };
    },
    fromAmino: ({
      seller,
      updates
    }: AminoMsgUpdateSellOrders["value"]): MsgUpdateSellOrders => {
      return {
        seller,
        updates: updates.map(el0 => ({
          sellOrderId: Long.fromString(el0.sell_order_id),
          newQuantity: el0.new_quantity,
          newAskPrice: {
            denom: el0.new_ask_price.denom,
            amount: el0.new_ask_price.amount
          },
          disableAutoRetire: el0.disable_auto_retire,
          newExpiration: el0.new_expiration
        }))
      };
    }
  },
  "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
    aminoType: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
    toAmino: ({
      seller,
      sellOrderId
    }: MsgCancelSellOrder): AminoMsgCancelSellOrder["value"] => {
      return {
        seller,
        sell_order_id: sellOrderId.toString()
      };
    },
    fromAmino: ({
      seller,
      sell_order_id
    }: AminoMsgCancelSellOrder["value"]): MsgCancelSellOrder => {
      return {
        seller,
        sellOrderId: Long.fromString(sell_order_id)
      };
    }
  },
  "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
    aminoType: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
    toAmino: ({
      buyer,
      orders
    }: MsgBuyDirect): AminoMsgBuyDirect["value"] => {
      return {
        buyer,
        orders: orders.map(el0 => ({
          batch_denom: el0.batchDenom,
          quantity: el0.quantity,
          ask_price: {
            denom: el0.askPrice.denom,
            amount: Long.fromValue(el0.askPrice.amount).toString()
          },
          disable_auto_retire: el0.disableAutoRetire,
          expiration: el0.expiration
        }))
      };
    },
    fromAmino: ({
      buyer,
      orders
    }: AminoMsgBuyDirect["value"]): MsgBuyDirect => {
      return {
        buyer,
        orders: orders.map(el0 => ({
          batchDenom: el0.batch_denom,
          quantity: el0.quantity,
          askPrice: {
            denom: el0.ask_price.denom,
            amount: el0.ask_price.amount
          },
          disableAutoRetire: el0.disable_auto_retire,
          expiration: el0.expiration
        }))
      };
    }
  },
  "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom": {
    aminoType: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom",
    toAmino: ({
      authority,
      bankDenom,
      displayDenom,
      exponent
    }: MsgAddAllowedDenom): AminoMsgAddAllowedDenom["value"] => {
      return {
        authority,
        bank_denom: bankDenom,
        display_denom: displayDenom,
        exponent
      };
    },
    fromAmino: ({
      authority,
      bank_denom,
      display_denom,
      exponent
    }: AminoMsgAddAllowedDenom["value"]): MsgAddAllowedDenom => {
      return {
        authority,
        bankDenom: bank_denom,
        displayDenom: display_denom,
        exponent
      };
    }
  },
  "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom": {
    aminoType: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom",
    toAmino: ({
      authority,
      denom
    }: MsgRemoveAllowedDenom): AminoMsgRemoveAllowedDenom["value"] => {
      return {
        authority,
        denom
      };
    },
    fromAmino: ({
      authority,
      denom
    }: AminoMsgRemoveAllowedDenom["value"]): MsgRemoveAllowedDenom => {
      return {
        authority,
        denom
      };
    }
  }
};