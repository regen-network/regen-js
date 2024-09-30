import { MsgSell, MsgUpdateSellOrders, MsgCancelSellOrder, MsgBuyDirect, MsgAddAllowedDenom, MsgRemoveAllowedDenom } from "./tx";
export const registry = [["/regen.ecocredit.marketplace.v1.MsgSell", MsgSell], ["/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders", MsgUpdateSellOrders], ["/regen.ecocredit.marketplace.v1.MsgCancelSellOrder", MsgCancelSellOrder], ["/regen.ecocredit.marketplace.v1.MsgBuyDirect", MsgBuyDirect], ["/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom", MsgAddAllowedDenom], ["/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom", MsgRemoveAllowedDenom]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        sell(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
                value: MsgSell.encode(value).finish()
            };
        },
        updateSellOrders(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
                value: MsgUpdateSellOrders.encode(value).finish()
            };
        },
        cancelSellOrder(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
                value: MsgCancelSellOrder.encode(value).finish()
            };
        },
        buyDirect(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
                value: MsgBuyDirect.encode(value).finish()
            };
        },
        addAllowedDenom(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom",
                value: MsgAddAllowedDenom.encode(value).finish()
            };
        },
        removeAllowedDenom(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom",
                value: MsgRemoveAllowedDenom.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        sell(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
                value
            };
        },
        updateSellOrders(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
                value
            };
        },
        cancelSellOrder(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
                value
            };
        },
        buyDirect(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
                value
            };
        },
        addAllowedDenom(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom",
                value
            };
        },
        removeAllowedDenom(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom",
                value
            };
        }
    },
    fromPartial: {
        sell(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
                value: MsgSell.fromPartial(value)
            };
        },
        updateSellOrders(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
                value: MsgUpdateSellOrders.fromPartial(value)
            };
        },
        cancelSellOrder(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
                value: MsgCancelSellOrder.fromPartial(value)
            };
        },
        buyDirect(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
                value: MsgBuyDirect.fromPartial(value)
            };
        },
        addAllowedDenom(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom",
                value: MsgAddAllowedDenom.fromPartial(value)
            };
        },
        removeAllowedDenom(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom",
                value: MsgRemoveAllowedDenom.fromPartial(value)
            };
        }
    }
};
