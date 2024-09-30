import { MsgCreate, MsgPut, MsgTake, MsgUpdateBasketFee, MsgUpdateCurator, MsgUpdateDateCriteria } from "./tx";
export const registry = [["/regen.ecocredit.basket.v1.MsgCreate", MsgCreate], ["/regen.ecocredit.basket.v1.MsgPut", MsgPut], ["/regen.ecocredit.basket.v1.MsgTake", MsgTake], ["/regen.ecocredit.basket.v1.MsgUpdateBasketFee", MsgUpdateBasketFee], ["/regen.ecocredit.basket.v1.MsgUpdateCurator", MsgUpdateCurator], ["/regen.ecocredit.basket.v1.MsgUpdateDateCriteria", MsgUpdateDateCriteria]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        create(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
                value: MsgCreate.encode(value).finish()
            };
        },
        put(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
                value: MsgPut.encode(value).finish()
            };
        },
        take(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
                value: MsgTake.encode(value).finish()
            };
        },
        updateBasketFee(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateBasketFee",
                value: MsgUpdateBasketFee.encode(value).finish()
            };
        },
        updateCurator(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateCurator",
                value: MsgUpdateCurator.encode(value).finish()
            };
        },
        updateDateCriteria(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria",
                value: MsgUpdateDateCriteria.encode(value).finish()
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
                value: MsgCreate.fromPartial(value)
            };
        },
        put(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
                value: MsgPut.fromPartial(value)
            };
        },
        take(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
                value: MsgTake.fromPartial(value)
            };
        },
        updateBasketFee(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateBasketFee",
                value: MsgUpdateBasketFee.fromPartial(value)
            };
        },
        updateCurator(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateCurator",
                value: MsgUpdateCurator.fromPartial(value)
            };
        },
        updateDateCriteria(value) {
            return {
                typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria",
                value: MsgUpdateDateCriteria.fromPartial(value)
            };
        }
    }
};
