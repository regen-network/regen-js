import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterAccount, MsgSubmitTx } from "./tx";
export interface AminoMsgRegisterAccount extends AminoMsg {
    type: "/regen.intertx.v1.MsgRegisterAccount";
    value: {
        owner: string;
        connection_id: string;
        version: string;
    };
}
export interface AminoMsgSubmitTx extends AminoMsg {
    type: "/regen.intertx.v1.MsgSubmitTx";
    value: {
        owner: string;
        connection_id: string;
        msg: {
            type_url: string;
            value: Uint8Array;
        };
    };
}
export declare const AminoConverter: {
    "/regen.intertx.v1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: ({ owner, connectionId, version }: MsgRegisterAccount) => AminoMsgRegisterAccount["value"];
        fromAmino: ({ owner, connection_id, version }: AminoMsgRegisterAccount["value"]) => MsgRegisterAccount;
    };
    "/regen.intertx.v1.MsgSubmitTx": {
        aminoType: string;
        toAmino: ({ owner, connectionId, msg }: MsgSubmitTx) => AminoMsgSubmitTx["value"];
        fromAmino: ({ owner, connection_id, msg }: AminoMsgSubmitTx["value"]) => MsgSubmitTx;
    };
};
