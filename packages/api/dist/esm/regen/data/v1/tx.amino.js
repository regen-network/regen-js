//@ts-nocheck
import { MsgAnchor, MsgAttest, MsgDefineResolver, MsgRegisterResolver } from "./tx";
export const AminoConverter = {
    "/regen.data.v1.MsgAnchor": {
        aminoType: "regen-ledger/MsgAnchor",
        toAmino: MsgAnchor.toAmino,
        fromAmino: MsgAnchor.fromAmino
    },
    "/regen.data.v1.MsgAttest": {
        aminoType: "regen-ledger/MsgAttest",
        toAmino: MsgAttest.toAmino,
        fromAmino: MsgAttest.fromAmino
    },
    "/regen.data.v1.MsgDefineResolver": {
        aminoType: "regen-ledger/MsgDefineResolver",
        toAmino: MsgDefineResolver.toAmino,
        fromAmino: MsgDefineResolver.fromAmino
    },
    "/regen.data.v1.MsgRegisterResolver": {
        aminoType: "regen-ledger/MsgRegisterResolver",
        toAmino: MsgRegisterResolver.toAmino,
        fromAmino: MsgRegisterResolver.fromAmino
    }
};
