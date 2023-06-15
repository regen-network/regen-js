import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, WeightedVoteOption, WeightedVoteOptionAmino, WeightedVoteOptionSDKType } from "./gov";
import { TextProposal, TextProposalProtoMsg, TextProposalSDKType } from "../v1beta1/gov";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposal {
    messages: Any[];
    initialDeposit: Coin[];
    proposer: string;
    /** metadata is any arbitrary metadata attached to the proposal. */
    metadata: string;
}
export interface MsgSubmitProposalProtoMsg {
    typeUrl: "/cosmos.gov.v1.MsgSubmitProposal";
    value: Uint8Array;
}
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalAmino {
    messages: AnyAmino[];
    initial_deposit: CoinAmino[];
    proposer: string;
    /** metadata is any arbitrary metadata attached to the proposal. */
    metadata: string;
}
export interface MsgSubmitProposalAminoMsg {
    type: "cosmos-sdk/v1/MsgSubmitProposal";
    value: MsgSubmitProposalAmino;
}
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalSDKType {
    messages: AnySDKType[];
    initial_deposit: CoinSDKType[];
    proposer: string;
    metadata: string;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
    proposalId: Long;
}
export interface MsgSubmitProposalResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1.MsgSubmitProposalResponse";
    value: Uint8Array;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseAmino {
    proposal_id: string;
}
export interface MsgSubmitProposalResponseAminoMsg {
    type: "cosmos-sdk/v1/MsgSubmitProposalResponse";
    value: MsgSubmitProposalResponseAmino;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseSDKType {
    proposal_id: Long;
}
/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 */
export interface MsgExecLegacyContent {
    /** content is the proposal's content. */
    content?: (TextProposal & Any) | undefined;
    /** authority must be the gov module address. */
    authority: string;
}
export interface MsgExecLegacyContentProtoMsg {
    typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent";
    value: Uint8Array;
}
export type MsgExecLegacyContentEncoded = Omit<MsgExecLegacyContent, "content"> & {
    /** content is the proposal's content. */
    content?: TextProposalProtoMsg | AnyProtoMsg | undefined;
};
/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 */
export interface MsgExecLegacyContentAmino {
    /** content is the proposal's content. */
    content?: AnyAmino;
    /** authority must be the gov module address. */
    authority: string;
}
export interface MsgExecLegacyContentAminoMsg {
    type: "cosmos-sdk/v1/MsgExecLegacyContent";
    value: MsgExecLegacyContentAmino;
}
/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 */
export interface MsgExecLegacyContentSDKType {
    content?: TextProposalSDKType | AnySDKType | undefined;
    authority: string;
}
/** MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type. */
export interface MsgExecLegacyContentResponse {
}
export interface MsgExecLegacyContentResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1.MsgExecLegacyContentResponse";
    value: Uint8Array;
}
/** MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type. */
export interface MsgExecLegacyContentResponseAmino {
}
export interface MsgExecLegacyContentResponseAminoMsg {
    type: "cosmos-sdk/v1/MsgExecLegacyContentResponse";
    value: MsgExecLegacyContentResponseAmino;
}
/** MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type. */
export interface MsgExecLegacyContentResponseSDKType {
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVote {
    proposalId: Long;
    voter: string;
    option: VoteOption;
    metadata: string;
}
export interface MsgVoteProtoMsg {
    typeUrl: "/cosmos.gov.v1.MsgVote";
    value: Uint8Array;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVoteAmino {
    proposal_id: string;
    voter: string;
    option: VoteOption;
    metadata: string;
}
export interface MsgVoteAminoMsg {
    type: "cosmos-sdk/v1/MsgVote";
    value: MsgVoteAmino;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVoteSDKType {
    proposal_id: Long;
    voter: string;
    option: VoteOption;
    metadata: string;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponse {
}
export interface MsgVoteResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1.MsgVoteResponse";
    value: Uint8Array;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponseAmino {
}
export interface MsgVoteResponseAminoMsg {
    type: "cosmos-sdk/v1/MsgVoteResponse";
    value: MsgVoteResponseAmino;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponseSDKType {
}
/** MsgVoteWeighted defines a message to cast a vote. */
export interface MsgVoteWeighted {
    proposalId: Long;
    voter: string;
    options: WeightedVoteOption[];
    metadata: string;
}
export interface MsgVoteWeightedProtoMsg {
    typeUrl: "/cosmos.gov.v1.MsgVoteWeighted";
    value: Uint8Array;
}
/** MsgVoteWeighted defines a message to cast a vote. */
export interface MsgVoteWeightedAmino {
    proposal_id: string;
    voter: string;
    options: WeightedVoteOptionAmino[];
    metadata: string;
}
export interface MsgVoteWeightedAminoMsg {
    type: "cosmos-sdk/v1/MsgVoteWeighted";
    value: MsgVoteWeightedAmino;
}
/** MsgVoteWeighted defines a message to cast a vote. */
export interface MsgVoteWeightedSDKType {
    proposal_id: Long;
    voter: string;
    options: WeightedVoteOptionSDKType[];
    metadata: string;
}
/** MsgVoteWeightedResponse defines the Msg/VoteWeighted response type. */
export interface MsgVoteWeightedResponse {
}
export interface MsgVoteWeightedResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1.MsgVoteWeightedResponse";
    value: Uint8Array;
}
/** MsgVoteWeightedResponse defines the Msg/VoteWeighted response type. */
export interface MsgVoteWeightedResponseAmino {
}
export interface MsgVoteWeightedResponseAminoMsg {
    type: "cosmos-sdk/v1/MsgVoteWeightedResponse";
    value: MsgVoteWeightedResponseAmino;
}
/** MsgVoteWeightedResponse defines the Msg/VoteWeighted response type. */
export interface MsgVoteWeightedResponseSDKType {
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDeposit {
    proposalId: Long;
    depositor: string;
    amount: Coin[];
}
export interface MsgDepositProtoMsg {
    typeUrl: "/cosmos.gov.v1.MsgDeposit";
    value: Uint8Array;
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDepositAmino {
    proposal_id: string;
    depositor: string;
    amount: CoinAmino[];
}
export interface MsgDepositAminoMsg {
    type: "cosmos-sdk/v1/MsgDeposit";
    value: MsgDepositAmino;
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDepositSDKType {
    proposal_id: Long;
    depositor: string;
    amount: CoinSDKType[];
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
}
export interface MsgDepositResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1.MsgDepositResponse";
    value: Uint8Array;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseAmino {
}
export interface MsgDepositResponseAminoMsg {
    type: "cosmos-sdk/v1/MsgDepositResponse";
    value: MsgDepositResponseAmino;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {
}
export declare const MsgSubmitProposal: {
    encode(message: MsgSubmitProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal;
    fromJSON(object: any): MsgSubmitProposal;
    toJSON(message: MsgSubmitProposal): unknown;
    fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal;
    fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal;
    toAmino(message: MsgSubmitProposal): MsgSubmitProposalAmino;
    fromAminoMsg(object: MsgSubmitProposalAminoMsg): MsgSubmitProposal;
    toAminoMsg(message: MsgSubmitProposal): MsgSubmitProposalAminoMsg;
    fromProtoMsg(message: MsgSubmitProposalProtoMsg): MsgSubmitProposal;
    toProto(message: MsgSubmitProposal): Uint8Array;
    toProtoMsg(message: MsgSubmitProposal): MsgSubmitProposalProtoMsg;
};
export declare const MsgSubmitProposalResponse: {
    encode(message: MsgSubmitProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposalResponse;
    fromJSON(object: any): MsgSubmitProposalResponse;
    toJSON(message: MsgSubmitProposalResponse): unknown;
    fromPartial(object: Partial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse;
    fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse;
    toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAmino;
    fromAminoMsg(object: MsgSubmitProposalResponseAminoMsg): MsgSubmitProposalResponse;
    toAminoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAminoMsg;
    fromProtoMsg(message: MsgSubmitProposalResponseProtoMsg): MsgSubmitProposalResponse;
    toProto(message: MsgSubmitProposalResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseProtoMsg;
};
export declare const MsgExecLegacyContent: {
    encode(message: MsgExecLegacyContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecLegacyContent;
    fromJSON(object: any): MsgExecLegacyContent;
    toJSON(message: MsgExecLegacyContent): unknown;
    fromPartial(object: Partial<MsgExecLegacyContent>): MsgExecLegacyContent;
    fromAmino(object: MsgExecLegacyContentAmino): MsgExecLegacyContent;
    toAmino(message: MsgExecLegacyContent): MsgExecLegacyContentAmino;
    fromAminoMsg(object: MsgExecLegacyContentAminoMsg): MsgExecLegacyContent;
    toAminoMsg(message: MsgExecLegacyContent): MsgExecLegacyContentAminoMsg;
    fromProtoMsg(message: MsgExecLegacyContentProtoMsg): MsgExecLegacyContent;
    toProto(message: MsgExecLegacyContent): Uint8Array;
    toProtoMsg(message: MsgExecLegacyContent): MsgExecLegacyContentProtoMsg;
};
export declare const MsgExecLegacyContentResponse: {
    encode(_: MsgExecLegacyContentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecLegacyContentResponse;
    fromJSON(_: any): MsgExecLegacyContentResponse;
    toJSON(_: MsgExecLegacyContentResponse): unknown;
    fromPartial(_: Partial<MsgExecLegacyContentResponse>): MsgExecLegacyContentResponse;
    fromAmino(_: MsgExecLegacyContentResponseAmino): MsgExecLegacyContentResponse;
    toAmino(_: MsgExecLegacyContentResponse): MsgExecLegacyContentResponseAmino;
    fromAminoMsg(object: MsgExecLegacyContentResponseAminoMsg): MsgExecLegacyContentResponse;
    toAminoMsg(message: MsgExecLegacyContentResponse): MsgExecLegacyContentResponseAminoMsg;
    fromProtoMsg(message: MsgExecLegacyContentResponseProtoMsg): MsgExecLegacyContentResponse;
    toProto(message: MsgExecLegacyContentResponse): Uint8Array;
    toProtoMsg(message: MsgExecLegacyContentResponse): MsgExecLegacyContentResponseProtoMsg;
};
export declare const MsgVote: {
    encode(message: MsgVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote;
    fromJSON(object: any): MsgVote;
    toJSON(message: MsgVote): unknown;
    fromPartial(object: Partial<MsgVote>): MsgVote;
    fromAmino(object: MsgVoteAmino): MsgVote;
    toAmino(message: MsgVote): MsgVoteAmino;
    fromAminoMsg(object: MsgVoteAminoMsg): MsgVote;
    toAminoMsg(message: MsgVote): MsgVoteAminoMsg;
    fromProtoMsg(message: MsgVoteProtoMsg): MsgVote;
    toProto(message: MsgVote): Uint8Array;
    toProtoMsg(message: MsgVote): MsgVoteProtoMsg;
};
export declare const MsgVoteResponse: {
    encode(_: MsgVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponse;
    fromJSON(_: any): MsgVoteResponse;
    toJSON(_: MsgVoteResponse): unknown;
    fromPartial(_: Partial<MsgVoteResponse>): MsgVoteResponse;
    fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse;
    toAmino(_: MsgVoteResponse): MsgVoteResponseAmino;
    fromAminoMsg(object: MsgVoteResponseAminoMsg): MsgVoteResponse;
    toAminoMsg(message: MsgVoteResponse): MsgVoteResponseAminoMsg;
    fromProtoMsg(message: MsgVoteResponseProtoMsg): MsgVoteResponse;
    toProto(message: MsgVoteResponse): Uint8Array;
    toProtoMsg(message: MsgVoteResponse): MsgVoteResponseProtoMsg;
};
export declare const MsgVoteWeighted: {
    encode(message: MsgVoteWeighted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeighted;
    fromJSON(object: any): MsgVoteWeighted;
    toJSON(message: MsgVoteWeighted): unknown;
    fromPartial(object: Partial<MsgVoteWeighted>): MsgVoteWeighted;
    fromAmino(object: MsgVoteWeightedAmino): MsgVoteWeighted;
    toAmino(message: MsgVoteWeighted): MsgVoteWeightedAmino;
    fromAminoMsg(object: MsgVoteWeightedAminoMsg): MsgVoteWeighted;
    toAminoMsg(message: MsgVoteWeighted): MsgVoteWeightedAminoMsg;
    fromProtoMsg(message: MsgVoteWeightedProtoMsg): MsgVoteWeighted;
    toProto(message: MsgVoteWeighted): Uint8Array;
    toProtoMsg(message: MsgVoteWeighted): MsgVoteWeightedProtoMsg;
};
export declare const MsgVoteWeightedResponse: {
    encode(_: MsgVoteWeightedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeightedResponse;
    fromJSON(_: any): MsgVoteWeightedResponse;
    toJSON(_: MsgVoteWeightedResponse): unknown;
    fromPartial(_: Partial<MsgVoteWeightedResponse>): MsgVoteWeightedResponse;
    fromAmino(_: MsgVoteWeightedResponseAmino): MsgVoteWeightedResponse;
    toAmino(_: MsgVoteWeightedResponse): MsgVoteWeightedResponseAmino;
    fromAminoMsg(object: MsgVoteWeightedResponseAminoMsg): MsgVoteWeightedResponse;
    toAminoMsg(message: MsgVoteWeightedResponse): MsgVoteWeightedResponseAminoMsg;
    fromProtoMsg(message: MsgVoteWeightedResponseProtoMsg): MsgVoteWeightedResponse;
    toProto(message: MsgVoteWeightedResponse): Uint8Array;
    toProtoMsg(message: MsgVoteWeightedResponse): MsgVoteWeightedResponseProtoMsg;
};
export declare const MsgDeposit: {
    encode(message: MsgDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit;
    fromJSON(object: any): MsgDeposit;
    toJSON(message: MsgDeposit): unknown;
    fromPartial(object: Partial<MsgDeposit>): MsgDeposit;
    fromAmino(object: MsgDepositAmino): MsgDeposit;
    toAmino(message: MsgDeposit): MsgDepositAmino;
    fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit;
    toAminoMsg(message: MsgDeposit): MsgDepositAminoMsg;
    fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit;
    toProto(message: MsgDeposit): Uint8Array;
    toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg;
};
export declare const MsgDepositResponse: {
    encode(_: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse;
    fromJSON(_: any): MsgDepositResponse;
    toJSON(_: MsgDepositResponse): unknown;
    fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse;
    fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse;
    toAmino(_: MsgDepositResponse): MsgDepositResponseAmino;
    fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse;
    toAminoMsg(message: MsgDepositResponse): MsgDepositResponseAminoMsg;
    fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse;
    toProto(message: MsgDepositResponse): Uint8Array;
    toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg;
};
export declare const Content_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => TextProposal | Any;
export declare const Content_FromAmino: (content: AnyAmino) => Any;
export declare const Content_ToAmino: (content: Any) => AnyAmino;
