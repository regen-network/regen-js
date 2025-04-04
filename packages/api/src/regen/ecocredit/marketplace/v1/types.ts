//@ts-nocheck
import { AllowedDenom, AllowedDenomAmino, AllowedDenomSDKType } from "./state";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/**
 * AllowDenomProposal is a gov Content type for approving a denom for use in the
 * marketplace.
 * 
 * Deprecated (Since Revision 1): This message is no longer used and will be
 * removed in the next version. See MsgAddAllowedDenom.
 */
export interface AllowDenomProposal {
  /** title is the title of the proposal. */
  title: string;
  /** description is the description of the proposal. */
  description: string;
  /**
   * denom contains coin denom information that will be added to the
   * list of allowed denoms for use in the marketplace.
   */
  denom?: AllowedDenom;
}
export interface AllowDenomProposalProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.AllowDenomProposal";
  value: Uint8Array;
}
/**
 * AllowDenomProposal is a gov Content type for approving a denom for use in the
 * marketplace.
 * 
 * Deprecated (Since Revision 1): This message is no longer used and will be
 * removed in the next version. See MsgAddAllowedDenom.
 */
export interface AllowDenomProposalAmino {
  /** title is the title of the proposal. */
  title?: string;
  /** description is the description of the proposal. */
  description?: string;
  /**
   * denom contains coin denom information that will be added to the
   * list of allowed denoms for use in the marketplace.
   */
  denom?: AllowedDenomAmino;
}
export interface AllowDenomProposalAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.AllowDenomProposal";
  value: AllowDenomProposalAmino;
}
/**
 * AllowDenomProposal is a gov Content type for approving a denom for use in the
 * marketplace.
 * 
 * Deprecated (Since Revision 1): This message is no longer used and will be
 * removed in the next version. See MsgAddAllowedDenom.
 */
export interface AllowDenomProposalSDKType {
  title: string;
  description: string;
  denom?: AllowedDenomSDKType;
}
function createBaseAllowDenomProposal(): AllowDenomProposal {
  return {
    title: "",
    description: "",
    denom: undefined
  };
}
export const AllowDenomProposal = {
  typeUrl: "/regen.ecocredit.marketplace.v1.AllowDenomProposal",
  encode(message: AllowDenomProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== undefined) {
      AllowedDenom.encode(message.denom, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllowDenomProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowDenomProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.denom = AllowedDenom.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AllowDenomProposal>): AllowDenomProposal {
    const message = createBaseAllowDenomProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom !== undefined && object.denom !== null ? AllowedDenom.fromPartial(object.denom) : undefined;
    return message;
  },
  fromAmino(object: AllowDenomProposalAmino): AllowDenomProposal {
    const message = createBaseAllowDenomProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = AllowedDenom.fromAmino(object.denom);
    }
    return message;
  },
  toAmino(message: AllowDenomProposal): AllowDenomProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.denom = message.denom ? AllowedDenom.toAmino(message.denom) : undefined;
    return obj;
  },
  fromAminoMsg(object: AllowDenomProposalAminoMsg): AllowDenomProposal {
    return AllowDenomProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AllowDenomProposalProtoMsg): AllowDenomProposal {
    return AllowDenomProposal.decode(message.value);
  },
  toProto(message: AllowDenomProposal): Uint8Array {
    return AllowDenomProposal.encode(message).finish();
  },
  toProtoMsg(message: AllowDenomProposal): AllowDenomProposalProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.AllowDenomProposal",
      value: AllowDenomProposal.encode(message).finish()
    };
  }
};