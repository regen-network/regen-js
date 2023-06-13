import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupInfoAmino, GroupInfoSDKType, GroupPolicyInfo, GroupPolicyInfoAmino, GroupPolicyInfoSDKType, GroupMember, GroupMemberAmino, GroupMemberSDKType, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType, TallyResult, TallyResultAmino, TallyResultSDKType } from "./types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequest {
    /** group_id is the unique ID of the group. */
    groupId: Long;
}
export interface QueryGroupInfoRequestProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest";
    value: Uint8Array;
}
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequestAmino {
    /** group_id is the unique ID of the group. */
    group_id: string;
}
export interface QueryGroupInfoRequestAminoMsg {
    type: "cosmos-sdk/QueryGroupInfoRequest";
    value: QueryGroupInfoRequestAmino;
}
/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequestSDKType {
    group_id: Long;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponse {
    /** info is the GroupInfo for the group. */
    info?: GroupInfo;
}
export interface QueryGroupInfoResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse";
    value: Uint8Array;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponseAmino {
    /** info is the GroupInfo for the group. */
    info?: GroupInfoAmino;
}
export interface QueryGroupInfoResponseAminoMsg {
    type: "cosmos-sdk/QueryGroupInfoResponse";
    value: QueryGroupInfoResponseAmino;
}
/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponseSDKType {
    info?: GroupInfoSDKType;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequest {
    /** address is the account address of the group policy. */
    address: string;
}
export interface QueryGroupPolicyInfoRequestProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest";
    value: Uint8Array;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequestAmino {
    /** address is the account address of the group policy. */
    address: string;
}
export interface QueryGroupPolicyInfoRequestAminoMsg {
    type: "cosmos-sdk/QueryGroupPolicyInfoRequest";
    value: QueryGroupPolicyInfoRequestAmino;
}
/** QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type. */
export interface QueryGroupPolicyInfoRequestSDKType {
    address: string;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponse {
    /** info is the GroupPolicyInfo for the group policy. */
    info?: GroupPolicyInfo;
}
export interface QueryGroupPolicyInfoResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse";
    value: Uint8Array;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponseAmino {
    /** info is the GroupPolicyInfo for the group policy. */
    info?: GroupPolicyInfoAmino;
}
export interface QueryGroupPolicyInfoResponseAminoMsg {
    type: "cosmos-sdk/QueryGroupPolicyInfoResponse";
    value: QueryGroupPolicyInfoResponseAmino;
}
/** QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type. */
export interface QueryGroupPolicyInfoResponseSDKType {
    info?: GroupPolicyInfoSDKType;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequest {
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryGroupMembersRequestProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest";
    value: Uint8Array;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequestAmino {
    /** group_id is the unique ID of the group. */
    group_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryGroupMembersRequestAminoMsg {
    type: "cosmos-sdk/QueryGroupMembersRequest";
    value: QueryGroupMembersRequestAmino;
}
/** QueryGroupMembersRequest is the Query/GroupMembers request type. */
export interface QueryGroupMembersRequestSDKType {
    group_id: Long;
    pagination?: PageRequestSDKType;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponse {
    /** members are the members of the group with given group_id. */
    members: GroupMember[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryGroupMembersResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse";
    value: Uint8Array;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponseAmino {
    /** members are the members of the group with given group_id. */
    members: GroupMemberAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryGroupMembersResponseAminoMsg {
    type: "cosmos-sdk/QueryGroupMembersResponse";
    value: QueryGroupMembersResponseAmino;
}
/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponseSDKType {
    members: GroupMemberSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequest {
    /** admin is the account address of a group's admin. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryGroupsByAdminRequestProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest";
    value: Uint8Array;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequestAmino {
    /** admin is the account address of a group's admin. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryGroupsByAdminRequestAminoMsg {
    type: "cosmos-sdk/QueryGroupsByAdminRequest";
    value: QueryGroupsByAdminRequestAmino;
}
/** QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type. */
export interface QueryGroupsByAdminRequestSDKType {
    admin: string;
    pagination?: PageRequestSDKType;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponse {
    /** groups are the groups info with the provided admin. */
    groups: GroupInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryGroupsByAdminResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse";
    value: Uint8Array;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponseAmino {
    /** groups are the groups info with the provided admin. */
    groups: GroupInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryGroupsByAdminResponseAminoMsg {
    type: "cosmos-sdk/QueryGroupsByAdminResponse";
    value: QueryGroupsByAdminResponseAmino;
}
/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponseSDKType {
    groups: GroupInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequest {
    /** group_id is the unique ID of the group policy's group. */
    groupId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryGroupPoliciesByGroupRequestProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest";
    value: Uint8Array;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequestAmino {
    /** group_id is the unique ID of the group policy's group. */
    group_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryGroupPoliciesByGroupRequestAminoMsg {
    type: "cosmos-sdk/QueryGroupPoliciesByGroupRequest";
    value: QueryGroupPoliciesByGroupRequestAmino;
}
/** QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type. */
export interface QueryGroupPoliciesByGroupRequestSDKType {
    group_id: Long;
    pagination?: PageRequestSDKType;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponse {
    /** group_policies are the group policies info associated with the provided group. */
    groupPolicies: GroupPolicyInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryGroupPoliciesByGroupResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse";
    value: Uint8Array;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponseAmino {
    /** group_policies are the group policies info associated with the provided group. */
    group_policies: GroupPolicyInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryGroupPoliciesByGroupResponseAminoMsg {
    type: "cosmos-sdk/QueryGroupPoliciesByGroupResponse";
    value: QueryGroupPoliciesByGroupResponseAmino;
}
/** QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type. */
export interface QueryGroupPoliciesByGroupResponseSDKType {
    group_policies: GroupPolicyInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequest {
    /** admin is the admin address of the group policy. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryGroupPoliciesByAdminRequestProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest";
    value: Uint8Array;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequestAmino {
    /** admin is the admin address of the group policy. */
    admin: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryGroupPoliciesByAdminRequestAminoMsg {
    type: "cosmos-sdk/QueryGroupPoliciesByAdminRequest";
    value: QueryGroupPoliciesByAdminRequestAmino;
}
/** QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type. */
export interface QueryGroupPoliciesByAdminRequestSDKType {
    admin: string;
    pagination?: PageRequestSDKType;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponse {
    /** group_policies are the group policies info with provided admin. */
    groupPolicies: GroupPolicyInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryGroupPoliciesByAdminResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse";
    value: Uint8Array;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponseAmino {
    /** group_policies are the group policies info with provided admin. */
    group_policies: GroupPolicyInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryGroupPoliciesByAdminResponseAminoMsg {
    type: "cosmos-sdk/QueryGroupPoliciesByAdminResponse";
    value: QueryGroupPoliciesByAdminResponseAmino;
}
/** QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type. */
export interface QueryGroupPoliciesByAdminResponseSDKType {
    group_policies: GroupPolicyInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequest {
    /** proposal_id is the unique ID of a proposal. */
    proposalId: Long;
}
export interface QueryProposalRequestProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryProposalRequest";
    value: Uint8Array;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequestAmino {
    /** proposal_id is the unique ID of a proposal. */
    proposal_id: string;
}
export interface QueryProposalRequestAminoMsg {
    type: "cosmos-sdk/QueryProposalRequest";
    value: QueryProposalRequestAmino;
}
/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequestSDKType {
    proposal_id: Long;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponse {
    /** proposal is the proposal info. */
    proposal?: Proposal;
}
export interface QueryProposalResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryProposalResponse";
    value: Uint8Array;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponseAmino {
    /** proposal is the proposal info. */
    proposal?: ProposalAmino;
}
export interface QueryProposalResponseAminoMsg {
    type: "cosmos-sdk/QueryProposalResponse";
    value: QueryProposalResponseAmino;
}
/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponseSDKType {
    proposal?: ProposalSDKType;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequest {
    /** address is the account address of the group policy related to proposals. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryProposalsByGroupPolicyRequestProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest";
    value: Uint8Array;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequestAmino {
    /** address is the account address of the group policy related to proposals. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryProposalsByGroupPolicyRequestAminoMsg {
    type: "cosmos-sdk/QueryProposalsByGroupPolicyRequest";
    value: QueryProposalsByGroupPolicyRequestAmino;
}
/** QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type. */
export interface QueryProposalsByGroupPolicyRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponse {
    /** proposals are the proposals with given group policy. */
    proposals: Proposal[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryProposalsByGroupPolicyResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse";
    value: Uint8Array;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponseAmino {
    /** proposals are the proposals with given group policy. */
    proposals: ProposalAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryProposalsByGroupPolicyResponseAminoMsg {
    type: "cosmos-sdk/QueryProposalsByGroupPolicyResponse";
    value: QueryProposalsByGroupPolicyResponseAmino;
}
/** QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type. */
export interface QueryProposalsByGroupPolicyResponseSDKType {
    proposals: ProposalSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequest {
    /** proposal_id is the unique ID of a proposal. */
    proposalId: Long;
    /** voter is a proposal voter account address. */
    voter: string;
}
export interface QueryVoteByProposalVoterRequestProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest";
    value: Uint8Array;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequestAmino {
    /** proposal_id is the unique ID of a proposal. */
    proposal_id: string;
    /** voter is a proposal voter account address. */
    voter: string;
}
export interface QueryVoteByProposalVoterRequestAminoMsg {
    type: "cosmos-sdk/QueryVoteByProposalVoterRequest";
    value: QueryVoteByProposalVoterRequestAmino;
}
/** QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequestSDKType {
    proposal_id: Long;
    voter: string;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponse {
    /** vote is the vote with given proposal_id and voter. */
    vote?: Vote;
}
export interface QueryVoteByProposalVoterResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse";
    value: Uint8Array;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponseAmino {
    /** vote is the vote with given proposal_id and voter. */
    vote?: VoteAmino;
}
export interface QueryVoteByProposalVoterResponseAminoMsg {
    type: "cosmos-sdk/QueryVoteByProposalVoterResponse";
    value: QueryVoteByProposalVoterResponseAmino;
}
/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponseSDKType {
    vote?: VoteSDKType;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequest {
    /** proposal_id is the unique ID of a proposal. */
    proposalId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryVotesByProposalRequestProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest";
    value: Uint8Array;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequestAmino {
    /** proposal_id is the unique ID of a proposal. */
    proposal_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryVotesByProposalRequestAminoMsg {
    type: "cosmos-sdk/QueryVotesByProposalRequest";
    value: QueryVotesByProposalRequestAmino;
}
/** QueryVotesByProposalRequest is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequestSDKType {
    proposal_id: Long;
    pagination?: PageRequestSDKType;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponse {
    /** votes are the list of votes for given proposal_id. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryVotesByProposalResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse";
    value: Uint8Array;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponseAmino {
    /** votes are the list of votes for given proposal_id. */
    votes: VoteAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryVotesByProposalResponseAminoMsg {
    type: "cosmos-sdk/QueryVotesByProposalResponse";
    value: QueryVotesByProposalResponseAmino;
}
/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponseSDKType {
    votes: VoteSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequest {
    /** voter is a proposal voter account address. */
    voter: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryVotesByVoterRequestProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest";
    value: Uint8Array;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequestAmino {
    /** voter is a proposal voter account address. */
    voter: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryVotesByVoterRequestAminoMsg {
    type: "cosmos-sdk/QueryVotesByVoterRequest";
    value: QueryVotesByVoterRequestAmino;
}
/** QueryVotesByVoterRequest is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequestSDKType {
    voter: string;
    pagination?: PageRequestSDKType;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponse {
    /** votes are the list of votes by given voter. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryVotesByVoterResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse";
    value: Uint8Array;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponseAmino {
    /** votes are the list of votes by given voter. */
    votes: VoteAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryVotesByVoterResponseAminoMsg {
    type: "cosmos-sdk/QueryVotesByVoterResponse";
    value: QueryVotesByVoterResponseAmino;
}
/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponseSDKType {
    votes: VoteSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequest {
    /** address is the group member address. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryGroupsByMemberRequestProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest";
    value: Uint8Array;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequestAmino {
    /** address is the group member address. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryGroupsByMemberRequestAminoMsg {
    type: "cosmos-sdk/QueryGroupsByMemberRequest";
    value: QueryGroupsByMemberRequestAmino;
}
/** QueryGroupsByMemberRequest is the Query/GroupsByMember request type. */
export interface QueryGroupsByMemberRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponse {
    /** groups are the groups info with the provided group member. */
    groups: GroupInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryGroupsByMemberResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse";
    value: Uint8Array;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponseAmino {
    /** groups are the groups info with the provided group member. */
    groups: GroupInfoAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryGroupsByMemberResponseAminoMsg {
    type: "cosmos-sdk/QueryGroupsByMemberResponse";
    value: QueryGroupsByMemberResponseAmino;
}
/** QueryGroupsByMemberResponse is the Query/GroupsByMember response type. */
export interface QueryGroupsByMemberResponseSDKType {
    groups: GroupInfoSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequest {
    /** proposal_id is the unique id of a proposal. */
    proposalId: Long;
}
export interface QueryTallyResultRequestProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryTallyResultRequest";
    value: Uint8Array;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequestAmino {
    /** proposal_id is the unique id of a proposal. */
    proposal_id: string;
}
export interface QueryTallyResultRequestAminoMsg {
    type: "cosmos-sdk/QueryTallyResultRequest";
    value: QueryTallyResultRequestAmino;
}
/** QueryTallyResultRequest is the Query/TallyResult request type. */
export interface QueryTallyResultRequestSDKType {
    proposal_id: Long;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponse {
    /** tally defines the requested tally. */
    tally?: TallyResult;
}
export interface QueryTallyResultResponseProtoMsg {
    typeUrl: "/cosmos.group.v1.QueryTallyResultResponse";
    value: Uint8Array;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponseAmino {
    /** tally defines the requested tally. */
    tally?: TallyResultAmino;
}
export interface QueryTallyResultResponseAminoMsg {
    type: "cosmos-sdk/QueryTallyResultResponse";
    value: QueryTallyResultResponseAmino;
}
/** QueryTallyResultResponse is the Query/TallyResult response type. */
export interface QueryTallyResultResponseSDKType {
    tally?: TallyResultSDKType;
}
export declare const QueryGroupInfoRequest: {
    encode(message: QueryGroupInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupInfoRequest;
    fromJSON(object: any): QueryGroupInfoRequest;
    toJSON(message: QueryGroupInfoRequest): unknown;
    fromPartial(object: Partial<QueryGroupInfoRequest>): QueryGroupInfoRequest;
    fromAmino(object: QueryGroupInfoRequestAmino): QueryGroupInfoRequest;
    toAmino(message: QueryGroupInfoRequest): QueryGroupInfoRequestAmino;
    fromAminoMsg(object: QueryGroupInfoRequestAminoMsg): QueryGroupInfoRequest;
    toAminoMsg(message: QueryGroupInfoRequest): QueryGroupInfoRequestAminoMsg;
    fromProtoMsg(message: QueryGroupInfoRequestProtoMsg): QueryGroupInfoRequest;
    toProto(message: QueryGroupInfoRequest): Uint8Array;
    toProtoMsg(message: QueryGroupInfoRequest): QueryGroupInfoRequestProtoMsg;
};
export declare const QueryGroupInfoResponse: {
    encode(message: QueryGroupInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupInfoResponse;
    fromJSON(object: any): QueryGroupInfoResponse;
    toJSON(message: QueryGroupInfoResponse): unknown;
    fromPartial(object: Partial<QueryGroupInfoResponse>): QueryGroupInfoResponse;
    fromAmino(object: QueryGroupInfoResponseAmino): QueryGroupInfoResponse;
    toAmino(message: QueryGroupInfoResponse): QueryGroupInfoResponseAmino;
    fromAminoMsg(object: QueryGroupInfoResponseAminoMsg): QueryGroupInfoResponse;
    toAminoMsg(message: QueryGroupInfoResponse): QueryGroupInfoResponseAminoMsg;
    fromProtoMsg(message: QueryGroupInfoResponseProtoMsg): QueryGroupInfoResponse;
    toProto(message: QueryGroupInfoResponse): Uint8Array;
    toProtoMsg(message: QueryGroupInfoResponse): QueryGroupInfoResponseProtoMsg;
};
export declare const QueryGroupPolicyInfoRequest: {
    encode(message: QueryGroupPolicyInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPolicyInfoRequest;
    fromJSON(object: any): QueryGroupPolicyInfoRequest;
    toJSON(message: QueryGroupPolicyInfoRequest): unknown;
    fromPartial(object: Partial<QueryGroupPolicyInfoRequest>): QueryGroupPolicyInfoRequest;
    fromAmino(object: QueryGroupPolicyInfoRequestAmino): QueryGroupPolicyInfoRequest;
    toAmino(message: QueryGroupPolicyInfoRequest): QueryGroupPolicyInfoRequestAmino;
    fromAminoMsg(object: QueryGroupPolicyInfoRequestAminoMsg): QueryGroupPolicyInfoRequest;
    toAminoMsg(message: QueryGroupPolicyInfoRequest): QueryGroupPolicyInfoRequestAminoMsg;
    fromProtoMsg(message: QueryGroupPolicyInfoRequestProtoMsg): QueryGroupPolicyInfoRequest;
    toProto(message: QueryGroupPolicyInfoRequest): Uint8Array;
    toProtoMsg(message: QueryGroupPolicyInfoRequest): QueryGroupPolicyInfoRequestProtoMsg;
};
export declare const QueryGroupPolicyInfoResponse: {
    encode(message: QueryGroupPolicyInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPolicyInfoResponse;
    fromJSON(object: any): QueryGroupPolicyInfoResponse;
    toJSON(message: QueryGroupPolicyInfoResponse): unknown;
    fromPartial(object: Partial<QueryGroupPolicyInfoResponse>): QueryGroupPolicyInfoResponse;
    fromAmino(object: QueryGroupPolicyInfoResponseAmino): QueryGroupPolicyInfoResponse;
    toAmino(message: QueryGroupPolicyInfoResponse): QueryGroupPolicyInfoResponseAmino;
    fromAminoMsg(object: QueryGroupPolicyInfoResponseAminoMsg): QueryGroupPolicyInfoResponse;
    toAminoMsg(message: QueryGroupPolicyInfoResponse): QueryGroupPolicyInfoResponseAminoMsg;
    fromProtoMsg(message: QueryGroupPolicyInfoResponseProtoMsg): QueryGroupPolicyInfoResponse;
    toProto(message: QueryGroupPolicyInfoResponse): Uint8Array;
    toProtoMsg(message: QueryGroupPolicyInfoResponse): QueryGroupPolicyInfoResponseProtoMsg;
};
export declare const QueryGroupMembersRequest: {
    encode(message: QueryGroupMembersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupMembersRequest;
    fromJSON(object: any): QueryGroupMembersRequest;
    toJSON(message: QueryGroupMembersRequest): unknown;
    fromPartial(object: Partial<QueryGroupMembersRequest>): QueryGroupMembersRequest;
    fromAmino(object: QueryGroupMembersRequestAmino): QueryGroupMembersRequest;
    toAmino(message: QueryGroupMembersRequest): QueryGroupMembersRequestAmino;
    fromAminoMsg(object: QueryGroupMembersRequestAminoMsg): QueryGroupMembersRequest;
    toAminoMsg(message: QueryGroupMembersRequest): QueryGroupMembersRequestAminoMsg;
    fromProtoMsg(message: QueryGroupMembersRequestProtoMsg): QueryGroupMembersRequest;
    toProto(message: QueryGroupMembersRequest): Uint8Array;
    toProtoMsg(message: QueryGroupMembersRequest): QueryGroupMembersRequestProtoMsg;
};
export declare const QueryGroupMembersResponse: {
    encode(message: QueryGroupMembersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupMembersResponse;
    fromJSON(object: any): QueryGroupMembersResponse;
    toJSON(message: QueryGroupMembersResponse): unknown;
    fromPartial(object: Partial<QueryGroupMembersResponse>): QueryGroupMembersResponse;
    fromAmino(object: QueryGroupMembersResponseAmino): QueryGroupMembersResponse;
    toAmino(message: QueryGroupMembersResponse): QueryGroupMembersResponseAmino;
    fromAminoMsg(object: QueryGroupMembersResponseAminoMsg): QueryGroupMembersResponse;
    toAminoMsg(message: QueryGroupMembersResponse): QueryGroupMembersResponseAminoMsg;
    fromProtoMsg(message: QueryGroupMembersResponseProtoMsg): QueryGroupMembersResponse;
    toProto(message: QueryGroupMembersResponse): Uint8Array;
    toProtoMsg(message: QueryGroupMembersResponse): QueryGroupMembersResponseProtoMsg;
};
export declare const QueryGroupsByAdminRequest: {
    encode(message: QueryGroupsByAdminRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByAdminRequest;
    fromJSON(object: any): QueryGroupsByAdminRequest;
    toJSON(message: QueryGroupsByAdminRequest): unknown;
    fromPartial(object: Partial<QueryGroupsByAdminRequest>): QueryGroupsByAdminRequest;
    fromAmino(object: QueryGroupsByAdminRequestAmino): QueryGroupsByAdminRequest;
    toAmino(message: QueryGroupsByAdminRequest): QueryGroupsByAdminRequestAmino;
    fromAminoMsg(object: QueryGroupsByAdminRequestAminoMsg): QueryGroupsByAdminRequest;
    toAminoMsg(message: QueryGroupsByAdminRequest): QueryGroupsByAdminRequestAminoMsg;
    fromProtoMsg(message: QueryGroupsByAdminRequestProtoMsg): QueryGroupsByAdminRequest;
    toProto(message: QueryGroupsByAdminRequest): Uint8Array;
    toProtoMsg(message: QueryGroupsByAdminRequest): QueryGroupsByAdminRequestProtoMsg;
};
export declare const QueryGroupsByAdminResponse: {
    encode(message: QueryGroupsByAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByAdminResponse;
    fromJSON(object: any): QueryGroupsByAdminResponse;
    toJSON(message: QueryGroupsByAdminResponse): unknown;
    fromPartial(object: Partial<QueryGroupsByAdminResponse>): QueryGroupsByAdminResponse;
    fromAmino(object: QueryGroupsByAdminResponseAmino): QueryGroupsByAdminResponse;
    toAmino(message: QueryGroupsByAdminResponse): QueryGroupsByAdminResponseAmino;
    fromAminoMsg(object: QueryGroupsByAdminResponseAminoMsg): QueryGroupsByAdminResponse;
    toAminoMsg(message: QueryGroupsByAdminResponse): QueryGroupsByAdminResponseAminoMsg;
    fromProtoMsg(message: QueryGroupsByAdminResponseProtoMsg): QueryGroupsByAdminResponse;
    toProto(message: QueryGroupsByAdminResponse): Uint8Array;
    toProtoMsg(message: QueryGroupsByAdminResponse): QueryGroupsByAdminResponseProtoMsg;
};
export declare const QueryGroupPoliciesByGroupRequest: {
    encode(message: QueryGroupPoliciesByGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByGroupRequest;
    fromJSON(object: any): QueryGroupPoliciesByGroupRequest;
    toJSON(message: QueryGroupPoliciesByGroupRequest): unknown;
    fromPartial(object: Partial<QueryGroupPoliciesByGroupRequest>): QueryGroupPoliciesByGroupRequest;
    fromAmino(object: QueryGroupPoliciesByGroupRequestAmino): QueryGroupPoliciesByGroupRequest;
    toAmino(message: QueryGroupPoliciesByGroupRequest): QueryGroupPoliciesByGroupRequestAmino;
    fromAminoMsg(object: QueryGroupPoliciesByGroupRequestAminoMsg): QueryGroupPoliciesByGroupRequest;
    toAminoMsg(message: QueryGroupPoliciesByGroupRequest): QueryGroupPoliciesByGroupRequestAminoMsg;
    fromProtoMsg(message: QueryGroupPoliciesByGroupRequestProtoMsg): QueryGroupPoliciesByGroupRequest;
    toProto(message: QueryGroupPoliciesByGroupRequest): Uint8Array;
    toProtoMsg(message: QueryGroupPoliciesByGroupRequest): QueryGroupPoliciesByGroupRequestProtoMsg;
};
export declare const QueryGroupPoliciesByGroupResponse: {
    encode(message: QueryGroupPoliciesByGroupResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByGroupResponse;
    fromJSON(object: any): QueryGroupPoliciesByGroupResponse;
    toJSON(message: QueryGroupPoliciesByGroupResponse): unknown;
    fromPartial(object: Partial<QueryGroupPoliciesByGroupResponse>): QueryGroupPoliciesByGroupResponse;
    fromAmino(object: QueryGroupPoliciesByGroupResponseAmino): QueryGroupPoliciesByGroupResponse;
    toAmino(message: QueryGroupPoliciesByGroupResponse): QueryGroupPoliciesByGroupResponseAmino;
    fromAminoMsg(object: QueryGroupPoliciesByGroupResponseAminoMsg): QueryGroupPoliciesByGroupResponse;
    toAminoMsg(message: QueryGroupPoliciesByGroupResponse): QueryGroupPoliciesByGroupResponseAminoMsg;
    fromProtoMsg(message: QueryGroupPoliciesByGroupResponseProtoMsg): QueryGroupPoliciesByGroupResponse;
    toProto(message: QueryGroupPoliciesByGroupResponse): Uint8Array;
    toProtoMsg(message: QueryGroupPoliciesByGroupResponse): QueryGroupPoliciesByGroupResponseProtoMsg;
};
export declare const QueryGroupPoliciesByAdminRequest: {
    encode(message: QueryGroupPoliciesByAdminRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByAdminRequest;
    fromJSON(object: any): QueryGroupPoliciesByAdminRequest;
    toJSON(message: QueryGroupPoliciesByAdminRequest): unknown;
    fromPartial(object: Partial<QueryGroupPoliciesByAdminRequest>): QueryGroupPoliciesByAdminRequest;
    fromAmino(object: QueryGroupPoliciesByAdminRequestAmino): QueryGroupPoliciesByAdminRequest;
    toAmino(message: QueryGroupPoliciesByAdminRequest): QueryGroupPoliciesByAdminRequestAmino;
    fromAminoMsg(object: QueryGroupPoliciesByAdminRequestAminoMsg): QueryGroupPoliciesByAdminRequest;
    toAminoMsg(message: QueryGroupPoliciesByAdminRequest): QueryGroupPoliciesByAdminRequestAminoMsg;
    fromProtoMsg(message: QueryGroupPoliciesByAdminRequestProtoMsg): QueryGroupPoliciesByAdminRequest;
    toProto(message: QueryGroupPoliciesByAdminRequest): Uint8Array;
    toProtoMsg(message: QueryGroupPoliciesByAdminRequest): QueryGroupPoliciesByAdminRequestProtoMsg;
};
export declare const QueryGroupPoliciesByAdminResponse: {
    encode(message: QueryGroupPoliciesByAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupPoliciesByAdminResponse;
    fromJSON(object: any): QueryGroupPoliciesByAdminResponse;
    toJSON(message: QueryGroupPoliciesByAdminResponse): unknown;
    fromPartial(object: Partial<QueryGroupPoliciesByAdminResponse>): QueryGroupPoliciesByAdminResponse;
    fromAmino(object: QueryGroupPoliciesByAdminResponseAmino): QueryGroupPoliciesByAdminResponse;
    toAmino(message: QueryGroupPoliciesByAdminResponse): QueryGroupPoliciesByAdminResponseAmino;
    fromAminoMsg(object: QueryGroupPoliciesByAdminResponseAminoMsg): QueryGroupPoliciesByAdminResponse;
    toAminoMsg(message: QueryGroupPoliciesByAdminResponse): QueryGroupPoliciesByAdminResponseAminoMsg;
    fromProtoMsg(message: QueryGroupPoliciesByAdminResponseProtoMsg): QueryGroupPoliciesByAdminResponse;
    toProto(message: QueryGroupPoliciesByAdminResponse): Uint8Array;
    toProtoMsg(message: QueryGroupPoliciesByAdminResponse): QueryGroupPoliciesByAdminResponseProtoMsg;
};
export declare const QueryProposalRequest: {
    encode(message: QueryProposalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalRequest;
    fromJSON(object: any): QueryProposalRequest;
    toJSON(message: QueryProposalRequest): unknown;
    fromPartial(object: Partial<QueryProposalRequest>): QueryProposalRequest;
    fromAmino(object: QueryProposalRequestAmino): QueryProposalRequest;
    toAmino(message: QueryProposalRequest): QueryProposalRequestAmino;
    fromAminoMsg(object: QueryProposalRequestAminoMsg): QueryProposalRequest;
    toAminoMsg(message: QueryProposalRequest): QueryProposalRequestAminoMsg;
    fromProtoMsg(message: QueryProposalRequestProtoMsg): QueryProposalRequest;
    toProto(message: QueryProposalRequest): Uint8Array;
    toProtoMsg(message: QueryProposalRequest): QueryProposalRequestProtoMsg;
};
export declare const QueryProposalResponse: {
    encode(message: QueryProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalResponse;
    fromJSON(object: any): QueryProposalResponse;
    toJSON(message: QueryProposalResponse): unknown;
    fromPartial(object: Partial<QueryProposalResponse>): QueryProposalResponse;
    fromAmino(object: QueryProposalResponseAmino): QueryProposalResponse;
    toAmino(message: QueryProposalResponse): QueryProposalResponseAmino;
    fromAminoMsg(object: QueryProposalResponseAminoMsg): QueryProposalResponse;
    toAminoMsg(message: QueryProposalResponse): QueryProposalResponseAminoMsg;
    fromProtoMsg(message: QueryProposalResponseProtoMsg): QueryProposalResponse;
    toProto(message: QueryProposalResponse): Uint8Array;
    toProtoMsg(message: QueryProposalResponse): QueryProposalResponseProtoMsg;
};
export declare const QueryProposalsByGroupPolicyRequest: {
    encode(message: QueryProposalsByGroupPolicyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsByGroupPolicyRequest;
    fromJSON(object: any): QueryProposalsByGroupPolicyRequest;
    toJSON(message: QueryProposalsByGroupPolicyRequest): unknown;
    fromPartial(object: Partial<QueryProposalsByGroupPolicyRequest>): QueryProposalsByGroupPolicyRequest;
    fromAmino(object: QueryProposalsByGroupPolicyRequestAmino): QueryProposalsByGroupPolicyRequest;
    toAmino(message: QueryProposalsByGroupPolicyRequest): QueryProposalsByGroupPolicyRequestAmino;
    fromAminoMsg(object: QueryProposalsByGroupPolicyRequestAminoMsg): QueryProposalsByGroupPolicyRequest;
    toAminoMsg(message: QueryProposalsByGroupPolicyRequest): QueryProposalsByGroupPolicyRequestAminoMsg;
    fromProtoMsg(message: QueryProposalsByGroupPolicyRequestProtoMsg): QueryProposalsByGroupPolicyRequest;
    toProto(message: QueryProposalsByGroupPolicyRequest): Uint8Array;
    toProtoMsg(message: QueryProposalsByGroupPolicyRequest): QueryProposalsByGroupPolicyRequestProtoMsg;
};
export declare const QueryProposalsByGroupPolicyResponse: {
    encode(message: QueryProposalsByGroupPolicyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsByGroupPolicyResponse;
    fromJSON(object: any): QueryProposalsByGroupPolicyResponse;
    toJSON(message: QueryProposalsByGroupPolicyResponse): unknown;
    fromPartial(object: Partial<QueryProposalsByGroupPolicyResponse>): QueryProposalsByGroupPolicyResponse;
    fromAmino(object: QueryProposalsByGroupPolicyResponseAmino): QueryProposalsByGroupPolicyResponse;
    toAmino(message: QueryProposalsByGroupPolicyResponse): QueryProposalsByGroupPolicyResponseAmino;
    fromAminoMsg(object: QueryProposalsByGroupPolicyResponseAminoMsg): QueryProposalsByGroupPolicyResponse;
    toAminoMsg(message: QueryProposalsByGroupPolicyResponse): QueryProposalsByGroupPolicyResponseAminoMsg;
    fromProtoMsg(message: QueryProposalsByGroupPolicyResponseProtoMsg): QueryProposalsByGroupPolicyResponse;
    toProto(message: QueryProposalsByGroupPolicyResponse): Uint8Array;
    toProtoMsg(message: QueryProposalsByGroupPolicyResponse): QueryProposalsByGroupPolicyResponseProtoMsg;
};
export declare const QueryVoteByProposalVoterRequest: {
    encode(message: QueryVoteByProposalVoterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteByProposalVoterRequest;
    fromJSON(object: any): QueryVoteByProposalVoterRequest;
    toJSON(message: QueryVoteByProposalVoterRequest): unknown;
    fromPartial(object: Partial<QueryVoteByProposalVoterRequest>): QueryVoteByProposalVoterRequest;
    fromAmino(object: QueryVoteByProposalVoterRequestAmino): QueryVoteByProposalVoterRequest;
    toAmino(message: QueryVoteByProposalVoterRequest): QueryVoteByProposalVoterRequestAmino;
    fromAminoMsg(object: QueryVoteByProposalVoterRequestAminoMsg): QueryVoteByProposalVoterRequest;
    toAminoMsg(message: QueryVoteByProposalVoterRequest): QueryVoteByProposalVoterRequestAminoMsg;
    fromProtoMsg(message: QueryVoteByProposalVoterRequestProtoMsg): QueryVoteByProposalVoterRequest;
    toProto(message: QueryVoteByProposalVoterRequest): Uint8Array;
    toProtoMsg(message: QueryVoteByProposalVoterRequest): QueryVoteByProposalVoterRequestProtoMsg;
};
export declare const QueryVoteByProposalVoterResponse: {
    encode(message: QueryVoteByProposalVoterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteByProposalVoterResponse;
    fromJSON(object: any): QueryVoteByProposalVoterResponse;
    toJSON(message: QueryVoteByProposalVoterResponse): unknown;
    fromPartial(object: Partial<QueryVoteByProposalVoterResponse>): QueryVoteByProposalVoterResponse;
    fromAmino(object: QueryVoteByProposalVoterResponseAmino): QueryVoteByProposalVoterResponse;
    toAmino(message: QueryVoteByProposalVoterResponse): QueryVoteByProposalVoterResponseAmino;
    fromAminoMsg(object: QueryVoteByProposalVoterResponseAminoMsg): QueryVoteByProposalVoterResponse;
    toAminoMsg(message: QueryVoteByProposalVoterResponse): QueryVoteByProposalVoterResponseAminoMsg;
    fromProtoMsg(message: QueryVoteByProposalVoterResponseProtoMsg): QueryVoteByProposalVoterResponse;
    toProto(message: QueryVoteByProposalVoterResponse): Uint8Array;
    toProtoMsg(message: QueryVoteByProposalVoterResponse): QueryVoteByProposalVoterResponseProtoMsg;
};
export declare const QueryVotesByProposalRequest: {
    encode(message: QueryVotesByProposalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByProposalRequest;
    fromJSON(object: any): QueryVotesByProposalRequest;
    toJSON(message: QueryVotesByProposalRequest): unknown;
    fromPartial(object: Partial<QueryVotesByProposalRequest>): QueryVotesByProposalRequest;
    fromAmino(object: QueryVotesByProposalRequestAmino): QueryVotesByProposalRequest;
    toAmino(message: QueryVotesByProposalRequest): QueryVotesByProposalRequestAmino;
    fromAminoMsg(object: QueryVotesByProposalRequestAminoMsg): QueryVotesByProposalRequest;
    toAminoMsg(message: QueryVotesByProposalRequest): QueryVotesByProposalRequestAminoMsg;
    fromProtoMsg(message: QueryVotesByProposalRequestProtoMsg): QueryVotesByProposalRequest;
    toProto(message: QueryVotesByProposalRequest): Uint8Array;
    toProtoMsg(message: QueryVotesByProposalRequest): QueryVotesByProposalRequestProtoMsg;
};
export declare const QueryVotesByProposalResponse: {
    encode(message: QueryVotesByProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByProposalResponse;
    fromJSON(object: any): QueryVotesByProposalResponse;
    toJSON(message: QueryVotesByProposalResponse): unknown;
    fromPartial(object: Partial<QueryVotesByProposalResponse>): QueryVotesByProposalResponse;
    fromAmino(object: QueryVotesByProposalResponseAmino): QueryVotesByProposalResponse;
    toAmino(message: QueryVotesByProposalResponse): QueryVotesByProposalResponseAmino;
    fromAminoMsg(object: QueryVotesByProposalResponseAminoMsg): QueryVotesByProposalResponse;
    toAminoMsg(message: QueryVotesByProposalResponse): QueryVotesByProposalResponseAminoMsg;
    fromProtoMsg(message: QueryVotesByProposalResponseProtoMsg): QueryVotesByProposalResponse;
    toProto(message: QueryVotesByProposalResponse): Uint8Array;
    toProtoMsg(message: QueryVotesByProposalResponse): QueryVotesByProposalResponseProtoMsg;
};
export declare const QueryVotesByVoterRequest: {
    encode(message: QueryVotesByVoterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByVoterRequest;
    fromJSON(object: any): QueryVotesByVoterRequest;
    toJSON(message: QueryVotesByVoterRequest): unknown;
    fromPartial(object: Partial<QueryVotesByVoterRequest>): QueryVotesByVoterRequest;
    fromAmino(object: QueryVotesByVoterRequestAmino): QueryVotesByVoterRequest;
    toAmino(message: QueryVotesByVoterRequest): QueryVotesByVoterRequestAmino;
    fromAminoMsg(object: QueryVotesByVoterRequestAminoMsg): QueryVotesByVoterRequest;
    toAminoMsg(message: QueryVotesByVoterRequest): QueryVotesByVoterRequestAminoMsg;
    fromProtoMsg(message: QueryVotesByVoterRequestProtoMsg): QueryVotesByVoterRequest;
    toProto(message: QueryVotesByVoterRequest): Uint8Array;
    toProtoMsg(message: QueryVotesByVoterRequest): QueryVotesByVoterRequestProtoMsg;
};
export declare const QueryVotesByVoterResponse: {
    encode(message: QueryVotesByVoterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesByVoterResponse;
    fromJSON(object: any): QueryVotesByVoterResponse;
    toJSON(message: QueryVotesByVoterResponse): unknown;
    fromPartial(object: Partial<QueryVotesByVoterResponse>): QueryVotesByVoterResponse;
    fromAmino(object: QueryVotesByVoterResponseAmino): QueryVotesByVoterResponse;
    toAmino(message: QueryVotesByVoterResponse): QueryVotesByVoterResponseAmino;
    fromAminoMsg(object: QueryVotesByVoterResponseAminoMsg): QueryVotesByVoterResponse;
    toAminoMsg(message: QueryVotesByVoterResponse): QueryVotesByVoterResponseAminoMsg;
    fromProtoMsg(message: QueryVotesByVoterResponseProtoMsg): QueryVotesByVoterResponse;
    toProto(message: QueryVotesByVoterResponse): Uint8Array;
    toProtoMsg(message: QueryVotesByVoterResponse): QueryVotesByVoterResponseProtoMsg;
};
export declare const QueryGroupsByMemberRequest: {
    encode(message: QueryGroupsByMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByMemberRequest;
    fromJSON(object: any): QueryGroupsByMemberRequest;
    toJSON(message: QueryGroupsByMemberRequest): unknown;
    fromPartial(object: Partial<QueryGroupsByMemberRequest>): QueryGroupsByMemberRequest;
    fromAmino(object: QueryGroupsByMemberRequestAmino): QueryGroupsByMemberRequest;
    toAmino(message: QueryGroupsByMemberRequest): QueryGroupsByMemberRequestAmino;
    fromAminoMsg(object: QueryGroupsByMemberRequestAminoMsg): QueryGroupsByMemberRequest;
    toAminoMsg(message: QueryGroupsByMemberRequest): QueryGroupsByMemberRequestAminoMsg;
    fromProtoMsg(message: QueryGroupsByMemberRequestProtoMsg): QueryGroupsByMemberRequest;
    toProto(message: QueryGroupsByMemberRequest): Uint8Array;
    toProtoMsg(message: QueryGroupsByMemberRequest): QueryGroupsByMemberRequestProtoMsg;
};
export declare const QueryGroupsByMemberResponse: {
    encode(message: QueryGroupsByMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupsByMemberResponse;
    fromJSON(object: any): QueryGroupsByMemberResponse;
    toJSON(message: QueryGroupsByMemberResponse): unknown;
    fromPartial(object: Partial<QueryGroupsByMemberResponse>): QueryGroupsByMemberResponse;
    fromAmino(object: QueryGroupsByMemberResponseAmino): QueryGroupsByMemberResponse;
    toAmino(message: QueryGroupsByMemberResponse): QueryGroupsByMemberResponseAmino;
    fromAminoMsg(object: QueryGroupsByMemberResponseAminoMsg): QueryGroupsByMemberResponse;
    toAminoMsg(message: QueryGroupsByMemberResponse): QueryGroupsByMemberResponseAminoMsg;
    fromProtoMsg(message: QueryGroupsByMemberResponseProtoMsg): QueryGroupsByMemberResponse;
    toProto(message: QueryGroupsByMemberResponse): Uint8Array;
    toProtoMsg(message: QueryGroupsByMemberResponse): QueryGroupsByMemberResponseProtoMsg;
};
export declare const QueryTallyResultRequest: {
    encode(message: QueryTallyResultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResultRequest;
    fromJSON(object: any): QueryTallyResultRequest;
    toJSON(message: QueryTallyResultRequest): unknown;
    fromPartial(object: Partial<QueryTallyResultRequest>): QueryTallyResultRequest;
    fromAmino(object: QueryTallyResultRequestAmino): QueryTallyResultRequest;
    toAmino(message: QueryTallyResultRequest): QueryTallyResultRequestAmino;
    fromAminoMsg(object: QueryTallyResultRequestAminoMsg): QueryTallyResultRequest;
    toAminoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestAminoMsg;
    fromProtoMsg(message: QueryTallyResultRequestProtoMsg): QueryTallyResultRequest;
    toProto(message: QueryTallyResultRequest): Uint8Array;
    toProtoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestProtoMsg;
};
export declare const QueryTallyResultResponse: {
    encode(message: QueryTallyResultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResultResponse;
    fromJSON(object: any): QueryTallyResultResponse;
    toJSON(message: QueryTallyResultResponse): unknown;
    fromPartial(object: Partial<QueryTallyResultResponse>): QueryTallyResultResponse;
    fromAmino(object: QueryTallyResultResponseAmino): QueryTallyResultResponse;
    toAmino(message: QueryTallyResultResponse): QueryTallyResultResponseAmino;
    fromAminoMsg(object: QueryTallyResultResponseAminoMsg): QueryTallyResultResponse;
    toAminoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseAminoMsg;
    fromProtoMsg(message: QueryTallyResultResponseProtoMsg): QueryTallyResultResponse;
    toProto(message: QueryTallyResultResponse): Uint8Array;
    toProtoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseProtoMsg;
};
