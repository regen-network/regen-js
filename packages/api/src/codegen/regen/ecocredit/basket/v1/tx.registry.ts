import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreate, MsgPut, MsgTake, MsgUpdateBasketFee, MsgUpdateCurator, MsgUpdateDateCriteria } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/regen.ecocredit.basket.v1.MsgCreate", MsgCreate], ["/regen.ecocredit.basket.v1.MsgPut", MsgPut], ["/regen.ecocredit.basket.v1.MsgTake", MsgTake], ["/regen.ecocredit.basket.v1.MsgUpdateBasketFee", MsgUpdateBasketFee], ["/regen.ecocredit.basket.v1.MsgUpdateCurator", MsgUpdateCurator], ["/regen.ecocredit.basket.v1.MsgUpdateDateCriteria", MsgUpdateDateCriteria]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    create(value: MsgCreate) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
        value: MsgCreate.encode(value).finish()
      };
    },
    put(value: MsgPut) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
        value: MsgPut.encode(value).finish()
      };
    },
    take(value: MsgTake) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
        value: MsgTake.encode(value).finish()
      };
    },
    updateBasketFee(value: MsgUpdateBasketFee) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateBasketFee",
        value: MsgUpdateBasketFee.encode(value).finish()
      };
    },
    updateCurator(value: MsgUpdateCurator) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateCurator",
        value: MsgUpdateCurator.encode(value).finish()
      };
    },
    updateDateCriteria(value: MsgUpdateDateCriteria) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria",
        value: MsgUpdateDateCriteria.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    create(value: MsgCreate) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
        value
      };
    },
    put(value: MsgPut) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
        value
      };
    },
    take(value: MsgTake) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
        value
      };
    },
    updateBasketFee(value: MsgUpdateBasketFee) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateBasketFee",
        value
      };
    },
    updateCurator(value: MsgUpdateCurator) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateCurator",
        value
      };
    },
    updateDateCriteria(value: MsgUpdateDateCriteria) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria",
        value
      };
    }
  },
  toJSON: {
    create(value: MsgCreate) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
        value: MsgCreate.toJSON(value)
      };
    },
    put(value: MsgPut) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
        value: MsgPut.toJSON(value)
      };
    },
    take(value: MsgTake) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
        value: MsgTake.toJSON(value)
      };
    },
    updateBasketFee(value: MsgUpdateBasketFee) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateBasketFee",
        value: MsgUpdateBasketFee.toJSON(value)
      };
    },
    updateCurator(value: MsgUpdateCurator) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateCurator",
        value: MsgUpdateCurator.toJSON(value)
      };
    },
    updateDateCriteria(value: MsgUpdateDateCriteria) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria",
        value: MsgUpdateDateCriteria.toJSON(value)
      };
    }
  },
  fromJSON: {
    create(value: any) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
        value: MsgCreate.fromJSON(value)
      };
    },
    put(value: any) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
        value: MsgPut.fromJSON(value)
      };
    },
    take(value: any) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
        value: MsgTake.fromJSON(value)
      };
    },
    updateBasketFee(value: any) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateBasketFee",
        value: MsgUpdateBasketFee.fromJSON(value)
      };
    },
    updateCurator(value: any) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateCurator",
        value: MsgUpdateCurator.fromJSON(value)
      };
    },
    updateDateCriteria(value: any) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria",
        value: MsgUpdateDateCriteria.fromJSON(value)
      };
    }
  },
  fromPartial: {
    create(value: MsgCreate) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
        value: MsgCreate.fromPartial(value)
      };
    },
    put(value: MsgPut) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
        value: MsgPut.fromPartial(value)
      };
    },
    take(value: MsgTake) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
        value: MsgTake.fromPartial(value)
      };
    },
    updateBasketFee(value: MsgUpdateBasketFee) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateBasketFee",
        value: MsgUpdateBasketFee.fromPartial(value)
      };
    },
    updateCurator(value: MsgUpdateCurator) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateCurator",
        value: MsgUpdateCurator.fromPartial(value)
      };
    },
    updateDateCriteria(value: MsgUpdateDateCriteria) {
      return {
        typeUrl: "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria",
        value: MsgUpdateDateCriteria.fromPartial(value)
      };
    }
  }
};