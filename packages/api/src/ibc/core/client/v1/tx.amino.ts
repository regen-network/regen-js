//@ts-nocheck
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams, MsgDeleteClientCreator } from "./tx";
export const AminoConverter = {
  "/ibc.core.client.v1.MsgCreateClient": {
    aminoType: "cosmos-sdk/MsgCreateClient",
    toAmino: MsgCreateClient.toAmino,
    fromAmino: MsgCreateClient.fromAmino
  },
  "/ibc.core.client.v1.MsgUpdateClient": {
    aminoType: "cosmos-sdk/MsgUpdateClient",
    toAmino: MsgUpdateClient.toAmino,
    fromAmino: MsgUpdateClient.fromAmino
  },
  "/ibc.core.client.v1.MsgUpgradeClient": {
    aminoType: "cosmos-sdk/MsgUpgradeClient",
    toAmino: MsgUpgradeClient.toAmino,
    fromAmino: MsgUpgradeClient.fromAmino
  },
  "/ibc.core.client.v1.MsgRecoverClient": {
    aminoType: "cosmos-sdk/MsgRecoverClient",
    toAmino: MsgRecoverClient.toAmino,
    fromAmino: MsgRecoverClient.fromAmino
  },
  "/ibc.core.client.v1.MsgIBCSoftwareUpgrade": {
    aminoType: "cosmos-sdk/MsgIBCSoftwareUpgrade",
    toAmino: MsgIBCSoftwareUpgrade.toAmino,
    fromAmino: MsgIBCSoftwareUpgrade.fromAmino
  },
  "/ibc.core.client.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/ibc.core.client.v1.MsgDeleteClientCreator": {
    aminoType: "cosmos-sdk/MsgDeleteClientCreator",
    toAmino: MsgDeleteClientCreator.toAmino,
    fromAmino: MsgDeleteClientCreator.fromAmino
  }
};