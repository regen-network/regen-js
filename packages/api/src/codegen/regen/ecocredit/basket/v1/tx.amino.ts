import { MsgCreate, MsgPut, MsgTake, MsgUpdateBasketFee, MsgUpdateCurator, MsgUpdateDateCriteria } from "./tx";
export const AminoConverter = {
  "/regen.ecocredit.basket.v1.MsgCreate": {
    aminoType: "regen.basket/MsgCreate",
    toAmino: MsgCreate.toAmino,
    fromAmino: MsgCreate.fromAmino
  },
  "/regen.ecocredit.basket.v1.MsgPut": {
    aminoType: "regen.basket/MsgPut",
    toAmino: MsgPut.toAmino,
    fromAmino: MsgPut.fromAmino
  },
  "/regen.ecocredit.basket.v1.MsgTake": {
    aminoType: "regen.basket/MsgTake",
    toAmino: MsgTake.toAmino,
    fromAmino: MsgTake.fromAmino
  },
  "/regen.ecocredit.basket.v1.MsgUpdateBasketFee": {
    aminoType: "regen.basket/MsgUpdateBasketFee",
    toAmino: MsgUpdateBasketFee.toAmino,
    fromAmino: MsgUpdateBasketFee.fromAmino
  },
  "/regen.ecocredit.basket.v1.MsgUpdateCurator": {
    aminoType: "regen.basket/MsgUpdateCurator",
    toAmino: MsgUpdateCurator.toAmino,
    fromAmino: MsgUpdateCurator.fromAmino
  },
  "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria": {
    aminoType: "regen.basket/MsgUpdateDateCriteria",
    toAmino: MsgUpdateDateCriteria.toAmino,
    fromAmino: MsgUpdateDateCriteria.fromAmino
  }
};