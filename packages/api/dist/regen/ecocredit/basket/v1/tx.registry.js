"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/regen.ecocredit.basket.v1.MsgCreate", tx_1.MsgCreate], ["/regen.ecocredit.basket.v1.MsgPut", tx_1.MsgPut], ["/regen.ecocredit.basket.v1.MsgTake", tx_1.MsgTake], ["/regen.ecocredit.basket.v1.MsgUpdateBasketFee", tx_1.MsgUpdateBasketFee], ["/regen.ecocredit.basket.v1.MsgUpdateCurator", tx_1.MsgUpdateCurator], ["/regen.ecocredit.basket.v1.MsgUpdateDateCriteria", tx_1.MsgUpdateDateCriteria]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        create(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
                value: tx_1.MsgCreate.encode(value).finish()
            };
        },
        put(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
                value: tx_1.MsgPut.encode(value).finish()
            };
        },
        take(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
                value: tx_1.MsgTake.encode(value).finish()
            };
        },
        updateBasketFee(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateBasketFee",
                value: tx_1.MsgUpdateBasketFee.encode(value).finish()
            };
        },
        updateCurator(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateCurator",
                value: tx_1.MsgUpdateCurator.encode(value).finish()
            };
        },
        updateDateCriteria(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria",
                value: tx_1.MsgUpdateDateCriteria.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        create(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
                value
            };
        },
        put(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
                value
            };
        },
        take(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
                value
            };
        },
        updateBasketFee(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateBasketFee",
                value
            };
        },
        updateCurator(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateCurator",
                value
            };
        },
        updateDateCriteria(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria",
                value
            };
        }
    },
    fromPartial: {
        create(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
                value: tx_1.MsgCreate.fromPartial(value)
            };
        },
        put(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
                value: tx_1.MsgPut.fromPartial(value)
            };
        },
        take(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
                value: tx_1.MsgTake.fromPartial(value)
            };
        },
        updateBasketFee(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateBasketFee",
                value: tx_1.MsgUpdateBasketFee.fromPartial(value)
            };
        },
        updateCurator(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateCurator",
                value: tx_1.MsgUpdateCurator.fromPartial(value)
            };
        },
        updateDateCriteria(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria",
                value: tx_1.MsgUpdateDateCriteria.fromPartial(value)
            };
        }
    }
};
