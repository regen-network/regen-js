import { AllowedDenom, AllowedDenomAmino, AllowedDenomSDKType } from "./state";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
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
  denom: AllowedDenom;
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
  title: string;
  /** description is the description of the proposal. */
  description: string;
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
  denom: AllowedDenomSDKType;
}
function createBaseAllowDenomProposal(): AllowDenomProposal {
  return {
    title: "",
    description: "",
    denom: AllowedDenom.fromPartial({})
  };
}
export const AllowDenomProposal = {
  encode(message: AllowDenomProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): AllowDenomProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): AllowDenomProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      denom: isSet(object.denom) ? AllowedDenom.fromJSON(object.denom) : undefined
    };
  },
  toJSON(message: AllowDenomProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.denom !== undefined && (obj.denom = message.denom ? AllowedDenom.toJSON(message.denom) : undefined);
    return obj;
  },
  fromPartial(object: Partial<AllowDenomProposal>): AllowDenomProposal {
    const message = createBaseAllowDenomProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom !== undefined && object.denom !== null ? AllowedDenom.fromPartial(object.denom) : undefined;
    return message;
  },
  fromAmino(object: AllowDenomProposalAmino): AllowDenomProposal {
    return {
      title: object.title,
      description: object.description,
      denom: object?.denom ? AllowedDenom.fromAmino(object.denom) : undefined
    };
  },
  toAmino(message: AllowDenomProposal): AllowDenomProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
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