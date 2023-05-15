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
export const AminoConverter = {
  "/regen.intertx.v1.MsgRegisterAccount": {
    aminoType: "/regen.intertx.v1.MsgRegisterAccount",
    toAmino: ({
      owner,
      connectionId,
      version
    }: MsgRegisterAccount): AminoMsgRegisterAccount["value"] => {
      return {
        owner,
        connection_id: connectionId,
        version
      };
    },
    fromAmino: ({
      owner,
      connection_id,
      version
    }: AminoMsgRegisterAccount["value"]): MsgRegisterAccount => {
      return {
        owner,
        connectionId: connection_id,
        version
      };
    }
  },
  "/regen.intertx.v1.MsgSubmitTx": {
    aminoType: "/regen.intertx.v1.MsgSubmitTx",
    toAmino: ({
      owner,
      connectionId,
      msg
    }: MsgSubmitTx): AminoMsgSubmitTx["value"] => {
      return {
        owner,
        connection_id: connectionId,
        msg: {
          type_url: msg.typeUrl,
          value: msg.value
        }
      };
    },
    fromAmino: ({
      owner,
      connection_id,
      msg
    }: AminoMsgSubmitTx["value"]): MsgSubmitTx => {
      return {
        owner,
        connectionId: connection_id,
        msg: {
          typeUrl: msg.type_url,
          value: msg.value
        }
      };
    }
  }
};