import { AllowedDenom, AllowedDenomSDKType } from "./state";
import * as _m0 from "protobufjs/minimal";
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
/**
 * AllowDenomProposal is a gov Content type for approving a denom for use in the
 * marketplace.
 *
 * Deprecated (Since Revision 1): This message is no longer used and will be
 * removed in the next version. See MsgAddAllowedDenom.
 */
export interface AllowDenomProposalSDKType {
    /** title is the title of the proposal. */
    title: string;
    /** description is the description of the proposal. */
    description: string;
    /**
     * denom contains coin denom information that will be added to the
     * list of allowed denoms for use in the marketplace.
     */
    denom?: AllowedDenomSDKType;
}
export declare const AllowDenomProposal: {
    encode(message: AllowDenomProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowDenomProposal;
    fromJSON(object: any): AllowDenomProposal;
    toJSON(message: AllowDenomProposal): unknown;
    fromPartial(object: Partial<AllowDenomProposal>): AllowDenomProposal;
};
