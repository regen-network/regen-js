import { MsgRegisterAccount, MsgSubmitTx } from "./tx";
export declare const AminoConverter: {
    "/regen.intertx.v1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: (message: MsgRegisterAccount) => import("./tx").MsgRegisterAccountAmino;
        fromAmino: (object: import("./tx").MsgRegisterAccountAmino) => MsgRegisterAccount;
    };
    "/regen.intertx.v1.MsgSubmitTx": {
        aminoType: string;
        toAmino: (message: MsgSubmitTx) => import("./tx").MsgSubmitTxAmino;
        fromAmino: (object: import("./tx").MsgSubmitTxAmino) => MsgSubmitTx;
    };
};
