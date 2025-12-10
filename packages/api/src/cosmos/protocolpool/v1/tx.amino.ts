//@ts-nocheck
import { MsgFundCommunityPool, MsgCommunityPoolSpend, MsgCreateContinuousFund, MsgCancelContinuousFund, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/cosmos.protocolpool.v1.MsgFundCommunityPool": {
    aminoType: "cosmos-sdk/MsgFundCommunityPool",
    toAmino: MsgFundCommunityPool.toAmino,
    fromAmino: MsgFundCommunityPool.fromAmino
  },
  "/cosmos.protocolpool.v1.MsgCommunityPoolSpend": {
    aminoType: "cosmos-sdk/MsgCommunityPoolSpend",
    toAmino: MsgCommunityPoolSpend.toAmino,
    fromAmino: MsgCommunityPoolSpend.fromAmino
  },
  "/cosmos.protocolpool.v1.MsgCreateContinuousFund": {
    aminoType: "cosmos-sdk/MsgCreateContinuousFund",
    toAmino: MsgCreateContinuousFund.toAmino,
    fromAmino: MsgCreateContinuousFund.fromAmino
  },
  "/cosmos.protocolpool.v1.MsgCancelContinuousFund": {
    aminoType: "cosmos-sdk/MsgCancelContinuousFund",
    toAmino: MsgCancelContinuousFund.toAmino,
    fromAmino: MsgCancelContinuousFund.fromAmino
  },
  "/cosmos.protocolpool.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};