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
export declare const AllowDenomProposal: {
    typeUrl: string;
    encode(message: AllowDenomProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllowDenomProposal;
    fromJSON(object: any): AllowDenomProposal;
    toJSON(message: AllowDenomProposal): unknown;
    fromPartial(object: Partial<AllowDenomProposal>): AllowDenomProposal;
    fromAmino(object: AllowDenomProposalAmino): AllowDenomProposal;
    toAmino(message: AllowDenomProposal): AllowDenomProposalAmino;
    fromAminoMsg(object: AllowDenomProposalAminoMsg): AllowDenomProposal;
    fromProtoMsg(message: AllowDenomProposalProtoMsg): AllowDenomProposal;
    toProto(message: AllowDenomProposal): Uint8Array;
    toProtoMsg(message: AllowDenomProposal): AllowDenomProposalProtoMsg;
};
