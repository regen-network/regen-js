"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/regen.ecocredit.marketplace.v1.MsgSell", tx_1.MsgSell], ["/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders", tx_1.MsgUpdateSellOrders], ["/regen.ecocredit.marketplace.v1.MsgCancelSellOrder", tx_1.MsgCancelSellOrder], ["/regen.ecocredit.marketplace.v1.MsgBuyDirect", tx_1.MsgBuyDirect], ["/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom", tx_1.MsgAddAllowedDenom], ["/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom", tx_1.MsgRemoveAllowedDenom]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        sell(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell",
                value: tx_1.MsgSell.encode(value).finish()
            };
        },
        updateSellOrders(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
                value: tx_1.MsgUpdateSellOrders.encode(value).finish()
            };
        },
        cancelSellOrder(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
                value: tx_1.MsgCancelSellOrder.encode(value).finish()
            };
        },
        buyDirect(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
                value: tx_1.MsgBuyDirect.encode(value).finish()
            };
        },
        addAllowedDenom(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom",
                value: tx_1.MsgAddAllowedDenom.encode(value).finish()
            };
        },
        removeAllowedDenom(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom",
                value: tx_1.MsgRemoveAllowedDenom.encode(value).finish()
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
                value: tx_1.MsgSell.fromPartial(value)
            };
        },
        updateSellOrders(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders",
                value: tx_1.MsgUpdateSellOrders.fromPartial(value)
            };
        },
        cancelSellOrder(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder",
                value: tx_1.MsgCancelSellOrder.fromPartial(value)
            };
        },
        buyDirect(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect",
                value: tx_1.MsgBuyDirect.fromPartial(value)
            };
        },
        addAllowedDenom(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom",
                value: tx_1.MsgAddAllowedDenom.fromPartial(value)
            };
        },
        removeAllowedDenom(value) {
            return {
                typeUrl: "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom",
                value: tx_1.MsgRemoveAllowedDenom.fromPartial(value)
            };
        }
    }
};
