import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** VoteOption enumerates the valid vote options for a given proposal. */
export declare enum VoteOption {
    /**
     * VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines an unspecified vote option which will
     * return an error.
     */
    VOTE_OPTION_UNSPECIFIED = 0,
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VOTE_OPTION_YES = 1,
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VOTE_OPTION_ABSTAIN = 2,
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VOTE_OPTION_NO = 3,
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VOTE_OPTION_NO_WITH_VETO = 4,
    UNRECOGNIZED = -1
}
export declare const VoteOptionSDKType: typeof VoteOption;
export declare const VoteOptionAmino: typeof VoteOption;
export declare function voteOptionFromJSON(object: any): VoteOption;
export declare function voteOptionToJSON(object: VoteOption): string;
/** ProposalStatus defines proposal statuses. */
export declare enum ProposalStatus {
    /** PROPOSAL_STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
    PROPOSAL_STATUS_UNSPECIFIED = 0,
    /** PROPOSAL_STATUS_SUBMITTED - Initial status of a proposal when submitted. */
    PROPOSAL_STATUS_SUBMITTED = 1,
    /**
     * PROPOSAL_STATUS_ACCEPTED - Final status of a proposal when the final tally is done and the outcome
     * passes the group policy's decision policy.
     */
    PROPOSAL_STATUS_ACCEPTED = 2,
    /**
     * PROPOSAL_STATUS_REJECTED - Final status of a proposal when the final tally is done and the outcome
     * is rejected by the group policy's decision policy.
     */
    PROPOSAL_STATUS_REJECTED = 3,
    /**
     * PROPOSAL_STATUS_ABORTED - Final status of a proposal when the group policy is modified before the
     * final tally.
     */
    PROPOSAL_STATUS_ABORTED = 4,
    /**
     * PROPOSAL_STATUS_WITHDRAWN - A proposal can be withdrawn before the voting start time by the owner.
     * When this happens the final status is Withdrawn.
     */
    PROPOSAL_STATUS_WITHDRAWN = 5,
    UNRECOGNIZED = -1
}
export declare const ProposalStatusSDKType: typeof ProposalStatus;
export declare const ProposalStatusAmino: typeof ProposalStatus;
export declare function proposalStatusFromJSON(object: any): ProposalStatus;
export declare function proposalStatusToJSON(object: ProposalStatus): string;
/** ProposalExecutorResult defines types of proposal executor results. */
export declare enum ProposalExecutorResult {
    /** PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
    PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED = 0,
    /** PROPOSAL_EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
    PROPOSAL_EXECUTOR_RESULT_NOT_RUN = 1,
    /** PROPOSAL_EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
    PROPOSAL_EXECUTOR_RESULT_SUCCESS = 2,
    /** PROPOSAL_EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
    PROPOSAL_EXECUTOR_RESULT_FAILURE = 3,
    UNRECOGNIZED = -1
}
export declare const ProposalExecutorResultSDKType: typeof ProposalExecutorResult;
export declare const ProposalExecutorResultAmino: typeof ProposalExecutorResult;
export declare function proposalExecutorResultFromJSON(object: any): ProposalExecutorResult;
export declare function proposalExecutorResultToJSON(object: ProposalExecutorResult): string;
/**
 * Member represents a group member with an account address,
 * non-zero weight, metadata and added_at timestamp.
 */
export interface Member {
    /** address is the member's account address. */
    address: string;
    /** weight is the member's voting weight that should be greater than 0. */
    weight: string;
    /** metadata is any arbitrary metadata attached to the member. */
    metadata: string;
    /** added_at is a timestamp specifying when a member was added. */
    addedAt: Timestamp;
}
export interface MemberProtoMsg {
    typeUrl: "/cosmos.group.v1.Member";
    value: Uint8Array;
}
/**
 * Member represents a group member with an account address,
 * non-zero weight, metadata and added_at timestamp.
 */
export interface MemberAmino {
    /** address is the member's account address. */
    address: string;
    /** weight is the member's voting weight that should be greater than 0. */
    weight: string;
    /** metadata is any arbitrary metadata attached to the member. */
    metadata: string;
    /** added_at is a timestamp specifying when a member was added. */
    added_at?: TimestampAmino;
}
export interface MemberAminoMsg {
    type: "cosmos-sdk/Member";
    value: MemberAmino;
}
/**
 * Member represents a group member with an account address,
 * non-zero weight, metadata and added_at timestamp.
 */
export interface MemberSDKType {
    address: string;
    weight: string;
    metadata: string;
    added_at: TimestampSDKType;
}
/**
 * MemberRequest represents a group member to be used in Msg server requests.
 * Contrary to `Member`, it doesn't have any `added_at` field
 * since this field cannot be set as part of requests.
 */
export interface MemberRequest {
    /** address is the member's account address. */
    address: string;
    /** weight is the member's voting weight that should be greater than 0. */
    weight: string;
    /** metadata is any arbitrary metadata attached to the member. */
    metadata: string;
}
export interface MemberRequestProtoMsg {
    typeUrl: "/cosmos.group.v1.MemberRequest";
    value: Uint8Array;
}
/**
 * MemberRequest represents a group member to be used in Msg server requests.
 * Contrary to `Member`, it doesn't have any `added_at` field
 * since this field cannot be set as part of requests.
 */
export interface MemberRequestAmino {
    /** address is the member's account address. */
    address: string;
    /** weight is the member's voting weight that should be greater than 0. */
    weight: string;
    /** metadata is any arbitrary metadata attached to the member. */
    metadata: string;
}
export interface MemberRequestAminoMsg {
    type: "cosmos-sdk/MemberRequest";
    value: MemberRequestAmino;
}
/**
 * MemberRequest represents a group member to be used in Msg server requests.
 * Contrary to `Member`, it doesn't have any `added_at` field
 * since this field cannot be set as part of requests.
 */
export interface MemberRequestSDKType {
    address: string;
    weight: string;
    metadata: string;
}
/**
 * ThresholdDecisionPolicy is a decision policy where a proposal passes when it
 * satisfies the two following conditions:
 * 1. The sum of all `YES` voters' weights is greater or equal than the defined
 *    `threshold`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */
export interface ThresholdDecisionPolicy {
    $typeUrl?: string;
    /**
     * threshold is the minimum weighted sum of `YES` votes that must be met or
     * exceeded for a proposal to succeed.
     */
    threshold: string;
    /** windows defines the different windows for voting and execution. */
    windows: DecisionPolicyWindows;
}
export interface ThresholdDecisionPolicyProtoMsg {
    typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy";
    value: Uint8Array;
}
/**
 * ThresholdDecisionPolicy is a decision policy where a proposal passes when it
 * satisfies the two following conditions:
 * 1. The sum of all `YES` voters' weights is greater or equal than the defined
 *    `threshold`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */
export interface ThresholdDecisionPolicyAmino {
    /**
     * threshold is the minimum weighted sum of `YES` votes that must be met or
     * exceeded for a proposal to succeed.
     */
    threshold: string;
    /** windows defines the different windows for voting and execution. */
    windows?: DecisionPolicyWindowsAmino;
}
export interface ThresholdDecisionPolicyAminoMsg {
    type: "cosmos-sdk/ThresholdDecisionPolicy";
    value: ThresholdDecisionPolicyAmino;
}
/**
 * ThresholdDecisionPolicy is a decision policy where a proposal passes when it
 * satisfies the two following conditions:
 * 1. The sum of all `YES` voters' weights is greater or equal than the defined
 *    `threshold`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */
export interface ThresholdDecisionPolicySDKType {
    $typeUrl?: string;
    threshold: string;
    windows: DecisionPolicyWindowsSDKType;
}
/**
 * PercentageDecisionPolicy is a decision policy where a proposal passes when
 * it satisfies the two following conditions:
 * 1. The percentage of all `YES` voters' weights out of the total group weight
 *    is greater or equal than the given `percentage`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */
export interface PercentageDecisionPolicy {
    $typeUrl?: string;
    /**
     * percentage is the minimum percentage the weighted sum of `YES` votes must
     * meet for a proposal to succeed.
     */
    percentage: string;
    /** windows defines the different windows for voting and execution. */
    windows: DecisionPolicyWindows;
}
export interface PercentageDecisionPolicyProtoMsg {
    typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy";
    value: Uint8Array;
}
/**
 * PercentageDecisionPolicy is a decision policy where a proposal passes when
 * it satisfies the two following conditions:
 * 1. The percentage of all `YES` voters' weights out of the total group weight
 *    is greater or equal than the given `percentage`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */
export interface PercentageDecisionPolicyAmino {
    /**
     * percentage is the minimum percentage the weighted sum of `YES` votes must
     * meet for a proposal to succeed.
     */
    percentage: string;
    /** windows defines the different windows for voting and execution. */
    windows?: DecisionPolicyWindowsAmino;
}
export interface PercentageDecisionPolicyAminoMsg {
    type: "cosmos-sdk/PercentageDecisionPolicy";
    value: PercentageDecisionPolicyAmino;
}
/**
 * PercentageDecisionPolicy is a decision policy where a proposal passes when
 * it satisfies the two following conditions:
 * 1. The percentage of all `YES` voters' weights out of the total group weight
 *    is greater or equal than the given `percentage`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 */
export interface PercentageDecisionPolicySDKType {
    $typeUrl?: string;
    percentage: string;
    windows: DecisionPolicyWindowsSDKType;
}
/** DecisionPolicyWindows defines the different windows for voting and execution. */
export interface DecisionPolicyWindows {
    /**
     * voting_period is the duration from submission of a proposal to the end of voting period
     * Within this times votes can be submitted with MsgVote.
     */
    votingPeriod: Duration;
    /**
     * min_execution_period is the minimum duration after the proposal submission
     * where members can start sending MsgExec. This means that the window for
     * sending a MsgExec transaction is:
     * `[ submission + min_execution_period ; submission + voting_period + max_execution_period]`
     * where max_execution_period is a app-specific config, defined in the keeper.
     * If not set, min_execution_period will default to 0.
     *
     * Please make sure to set a `min_execution_period` that is smaller than
     * `voting_period + max_execution_period`, or else the above execution window
     * is empty, meaning that all proposals created with this decision policy
     * won't be able to be executed.
     */
    minExecutionPeriod: Duration;
}
export interface DecisionPolicyWindowsProtoMsg {
    typeUrl: "/cosmos.group.v1.DecisionPolicyWindows";
    value: Uint8Array;
}
/** DecisionPolicyWindows defines the different windows for voting and execution. */
export interface DecisionPolicyWindowsAmino {
    /**
     * voting_period is the duration from submission of a proposal to the end of voting period
     * Within this times votes can be submitted with MsgVote.
     */
    voting_period?: DurationAmino;
    /**
     * min_execution_period is the minimum duration after the proposal submission
     * where members can start sending MsgExec. This means that the window for
     * sending a MsgExec transaction is:
     * `[ submission + min_execution_period ; submission + voting_period + max_execution_period]`
     * where max_execution_period is a app-specific config, defined in the keeper.
     * If not set, min_execution_period will default to 0.
     *
     * Please make sure to set a `min_execution_period` that is smaller than
     * `voting_period + max_execution_period`, or else the above execution window
     * is empty, meaning that all proposals created with this decision policy
     * won't be able to be executed.
     */
    min_execution_period?: DurationAmino;
}
export interface DecisionPolicyWindowsAminoMsg {
    type: "cosmos-sdk/DecisionPolicyWindows";
    value: DecisionPolicyWindowsAmino;
}
/** DecisionPolicyWindows defines the different windows for voting and execution. */
export interface DecisionPolicyWindowsSDKType {
    voting_period: DurationSDKType;
    min_execution_period: DurationSDKType;
}
/** GroupInfo represents the high-level on-chain information for a group. */
export interface GroupInfo {
    /** id is the unique ID of the group. */
    id: Long;
    /** admin is the account address of the group's admin. */
    admin: string;
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata: string;
    /**
     * version is used to track changes to a group's membership structure that
     * would break existing proposals. Whenever any members weight is changed,
     * or any member is added or removed this version is incremented and will
     * cause proposals based on older versions of this group to fail
     */
    version: Long;
    /** total_weight is the sum of the group members' weights. */
    totalWeight: string;
    /** created_at is a timestamp specifying when a group was created. */
    createdAt: Timestamp;
}
export interface GroupInfoProtoMsg {
    typeUrl: "/cosmos.group.v1.GroupInfo";
    value: Uint8Array;
}
/** GroupInfo represents the high-level on-chain information for a group. */
export interface GroupInfoAmino {
    /** id is the unique ID of the group. */
    id: string;
    /** admin is the account address of the group's admin. */
    admin: string;
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata: string;
    /**
     * version is used to track changes to a group's membership structure that
     * would break existing proposals. Whenever any members weight is changed,
     * or any member is added or removed this version is incremented and will
     * cause proposals based on older versions of this group to fail
     */
    version: string;
    /** total_weight is the sum of the group members' weights. */
    total_weight: string;
    /** created_at is a timestamp specifying when a group was created. */
    created_at?: TimestampAmino;
}
export interface GroupInfoAminoMsg {
    type: "cosmos-sdk/GroupInfo";
    value: GroupInfoAmino;
}
/** GroupInfo represents the high-level on-chain information for a group. */
export interface GroupInfoSDKType {
    id: Long;
    admin: string;
    metadata: string;
    version: Long;
    total_weight: string;
    created_at: TimestampSDKType;
}
/** GroupMember represents the relationship between a group and a member. */
export interface GroupMember {
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** member is the member data. */
    member: Member;
}
export interface GroupMemberProtoMsg {
    typeUrl: "/cosmos.group.v1.GroupMember";
    value: Uint8Array;
}
/** GroupMember represents the relationship between a group and a member. */
export interface GroupMemberAmino {
    /** group_id is the unique ID of the group. */
    group_id: string;
    /** member is the member data. */
    member?: MemberAmino;
}
export interface GroupMemberAminoMsg {
    type: "cosmos-sdk/GroupMember";
    value: GroupMemberAmino;
}
/** GroupMember represents the relationship between a group and a member. */
export interface GroupMemberSDKType {
    group_id: Long;
    member: MemberSDKType;
}
/** GroupPolicyInfo represents the high-level on-chain information for a group policy. */
export interface GroupPolicyInfo {
    /** address is the account address of group policy. */
    address: string;
    /** group_id is the unique ID of the group. */
    groupId: Long;
    /** admin is the account address of the group admin. */
    admin: string;
    /** metadata is any arbitrary metadata to attached to the group policy. */
    metadata: string;
    /**
     * version is used to track changes to a group's GroupPolicyInfo structure that
     * would create a different result on a running proposal.
     */
    version: Long;
    /** decision_policy specifies the group policy's decision policy. */
    decisionPolicy: (ThresholdDecisionPolicy & PercentageDecisionPolicy & Any) | undefined;
    /** created_at is a timestamp specifying when a group policy was created. */
    createdAt: Timestamp;
}
export interface GroupPolicyInfoProtoMsg {
    typeUrl: "/cosmos.group.v1.GroupPolicyInfo";
    value: Uint8Array;
}
export type GroupPolicyInfoEncoded = Omit<GroupPolicyInfo, "decisionPolicy"> & {
    /** decision_policy specifies the group policy's decision policy. */ decisionPolicy?: ThresholdDecisionPolicyProtoMsg | PercentageDecisionPolicyProtoMsg | AnyProtoMsg | undefined;
};
/** GroupPolicyInfo represents the high-level on-chain information for a group policy. */
export interface GroupPolicyInfoAmino {
    /** address is the account address of group policy. */
    address: string;
    /** group_id is the unique ID of the group. */
    group_id: string;
    /** admin is the account address of the group admin. */
    admin: string;
    /** metadata is any arbitrary metadata to attached to the group policy. */
    metadata: string;
    /**
     * version is used to track changes to a group's GroupPolicyInfo structure that
     * would create a different result on a running proposal.
     */
    version: string;
    /** decision_policy specifies the group policy's decision policy. */
    decision_policy?: AnyAmino;
    /** created_at is a timestamp specifying when a group policy was created. */
    created_at?: TimestampAmino;
}
export interface GroupPolicyInfoAminoMsg {
    type: "cosmos-sdk/GroupPolicyInfo";
    value: GroupPolicyInfoAmino;
}
/** GroupPolicyInfo represents the high-level on-chain information for a group policy. */
export interface GroupPolicyInfoSDKType {
    address: string;
    group_id: Long;
    admin: string;
    metadata: string;
    version: Long;
    decision_policy: ThresholdDecisionPolicySDKType | PercentageDecisionPolicySDKType | AnySDKType | undefined;
    created_at: TimestampSDKType;
}
/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 */
export interface Proposal {
    /** id is the unique id of the proposal. */
    id: Long;
    /** group_policy_address is the account address of group policy. */
    groupPolicyAddress: string;
    /** metadata is any arbitrary metadata to attached to the proposal. */
    metadata: string;
    /** proposers are the account addresses of the proposers. */
    proposers: string[];
    /** submit_time is a timestamp specifying when a proposal was submitted. */
    submitTime: Timestamp;
    /**
     * group_version tracks the version of the group at proposal submission.
     * This field is here for informational purposes only.
     */
    groupVersion: Long;
    /**
     * group_policy_version tracks the version of the group policy at proposal submission.
     * When a decision policy is changed, existing proposals from previous policy
     * versions will become invalid with the `ABORTED` status.
     * This field is here for informational purposes only.
     */
    groupPolicyVersion: Long;
    /** status represents the high level position in the life cycle of the proposal. Initial value is Submitted. */
    status: ProposalStatus;
    /**
     * final_tally_result contains the sums of all weighted votes for this
     * proposal for each vote option. It is empty at submission, and only
     * populated after tallying, at voting period end or at proposal execution,
     * whichever happens first.
     */
    finalTallyResult: TallyResult;
    /**
     * voting_period_end is the timestamp before which voting must be done.
     * Unless a successfull MsgExec is called before (to execute a proposal whose
     * tally is successful before the voting period ends), tallying will be done
     * at this point, and the `final_tally_result`and `status` fields will be
     * accordingly updated.
     */
    votingPeriodEnd: Timestamp;
    /** executor_result is the final result of the proposal execution. Initial value is NotRun. */
    executorResult: ProposalExecutorResult;
    /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
    messages: Any[];
}
export interface ProposalProtoMsg {
    typeUrl: "/cosmos.group.v1.Proposal";
    value: Uint8Array;
}
/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 */
export interface ProposalAmino {
    /** id is the unique id of the proposal. */
    id: string;
    /** group_policy_address is the account address of group policy. */
    group_policy_address: string;
    /** metadata is any arbitrary metadata to attached to the proposal. */
    metadata: string;
    /** proposers are the account addresses of the proposers. */
    proposers: string[];
    /** submit_time is a timestamp specifying when a proposal was submitted. */
    submit_time?: TimestampAmino;
    /**
     * group_version tracks the version of the group at proposal submission.
     * This field is here for informational purposes only.
     */
    group_version: string;
    /**
     * group_policy_version tracks the version of the group policy at proposal submission.
     * When a decision policy is changed, existing proposals from previous policy
     * versions will become invalid with the `ABORTED` status.
     * This field is here for informational purposes only.
     */
    group_policy_version: string;
    /** status represents the high level position in the life cycle of the proposal. Initial value is Submitted. */
    status: ProposalStatus;
    /**
     * final_tally_result contains the sums of all weighted votes for this
     * proposal for each vote option. It is empty at submission, and only
     * populated after tallying, at voting period end or at proposal execution,
     * whichever happens first.
     */
    final_tally_result?: TallyResultAmino;
    /**
     * voting_period_end is the timestamp before which voting must be done.
     * Unless a successfull MsgExec is called before (to execute a proposal whose
     * tally is successful before the voting period ends), tallying will be done
     * at this point, and the `final_tally_result`and `status` fields will be
     * accordingly updated.
     */
    voting_period_end?: TimestampAmino;
    /** executor_result is the final result of the proposal execution. Initial value is NotRun. */
    executor_result: ProposalExecutorResult;
    /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
    messages: AnyAmino[];
}
export interface ProposalAminoMsg {
    type: "cosmos-sdk/Proposal";
    value: ProposalAmino;
}
/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 */
export interface ProposalSDKType {
    id: Long;
    group_policy_address: string;
    metadata: string;
    proposers: string[];
    submit_time: TimestampSDKType;
    group_version: Long;
    group_policy_version: Long;
    status: ProposalStatus;
    final_tally_result: TallyResultSDKType;
    voting_period_end: TimestampSDKType;
    executor_result: ProposalExecutorResult;
    messages: AnySDKType[];
}
/** TallyResult represents the sum of weighted votes for each vote option. */
export interface TallyResult {
    /** yes_count is the weighted sum of yes votes. */
    yesCount: string;
    /** abstain_count is the weighted sum of abstainers. */
    abstainCount: string;
    /** no_count is the weighted sum of no votes. */
    noCount: string;
    /** no_with_veto_count is the weighted sum of veto. */
    noWithVetoCount: string;
}
export interface TallyResultProtoMsg {
    typeUrl: "/cosmos.group.v1.TallyResult";
    value: Uint8Array;
}
/** TallyResult represents the sum of weighted votes for each vote option. */
export interface TallyResultAmino {
    /** yes_count is the weighted sum of yes votes. */
    yes_count: string;
    /** abstain_count is the weighted sum of abstainers. */
    abstain_count: string;
    /** no_count is the weighted sum of no votes. */
    no_count: string;
    /** no_with_veto_count is the weighted sum of veto. */
    no_with_veto_count: string;
}
export interface TallyResultAminoMsg {
    type: "cosmos-sdk/TallyResult";
    value: TallyResultAmino;
}
/** TallyResult represents the sum of weighted votes for each vote option. */
export interface TallyResultSDKType {
    yes_count: string;
    abstain_count: string;
    no_count: string;
    no_with_veto_count: string;
}
/** Vote represents a vote for a proposal. */
export interface Vote {
    /** proposal is the unique ID of the proposal. */
    proposalId: Long;
    /** voter is the account address of the voter. */
    voter: string;
    /** option is the voter's choice on the proposal. */
    option: VoteOption;
    /** metadata is any arbitrary metadata to attached to the vote. */
    metadata: string;
    /** submit_time is the timestamp when the vote was submitted. */
    submitTime: Timestamp;
}
export interface VoteProtoMsg {
    typeUrl: "/cosmos.group.v1.Vote";
    value: Uint8Array;
}
/** Vote represents a vote for a proposal. */
export interface VoteAmino {
    /** proposal is the unique ID of the proposal. */
    proposal_id: string;
    /** voter is the account address of the voter. */
    voter: string;
    /** option is the voter's choice on the proposal. */
    option: VoteOption;
    /** metadata is any arbitrary metadata to attached to the vote. */
    metadata: string;
    /** submit_time is the timestamp when the vote was submitted. */
    submit_time?: TimestampAmino;
}
export interface VoteAminoMsg {
    type: "cosmos-sdk/Vote";
    value: VoteAmino;
}
/** Vote represents a vote for a proposal. */
export interface VoteSDKType {
    proposal_id: Long;
    voter: string;
    option: VoteOption;
    metadata: string;
    submit_time: TimestampSDKType;
}
export declare const Member: {
    encode(message: Member, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Member;
    fromJSON(object: any): Member;
    toJSON(message: Member): unknown;
    fromPartial(object: Partial<Member>): Member;
    fromAmino(object: MemberAmino): Member;
    toAmino(message: Member): MemberAmino;
    fromAminoMsg(object: MemberAminoMsg): Member;
    toAminoMsg(message: Member): MemberAminoMsg;
    fromProtoMsg(message: MemberProtoMsg): Member;
    toProto(message: Member): Uint8Array;
    toProtoMsg(message: Member): MemberProtoMsg;
};
export declare const MemberRequest: {
    encode(message: MemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MemberRequest;
    fromJSON(object: any): MemberRequest;
    toJSON(message: MemberRequest): unknown;
    fromPartial(object: Partial<MemberRequest>): MemberRequest;
    fromAmino(object: MemberRequestAmino): MemberRequest;
    toAmino(message: MemberRequest): MemberRequestAmino;
    fromAminoMsg(object: MemberRequestAminoMsg): MemberRequest;
    toAminoMsg(message: MemberRequest): MemberRequestAminoMsg;
    fromProtoMsg(message: MemberRequestProtoMsg): MemberRequest;
    toProto(message: MemberRequest): Uint8Array;
    toProtoMsg(message: MemberRequest): MemberRequestProtoMsg;
};
export declare const ThresholdDecisionPolicy: {
    encode(message: ThresholdDecisionPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ThresholdDecisionPolicy;
    fromJSON(object: any): ThresholdDecisionPolicy;
    toJSON(message: ThresholdDecisionPolicy): unknown;
    fromPartial(object: Partial<ThresholdDecisionPolicy>): ThresholdDecisionPolicy;
    fromAmino(object: ThresholdDecisionPolicyAmino): ThresholdDecisionPolicy;
    toAmino(message: ThresholdDecisionPolicy): ThresholdDecisionPolicyAmino;
    fromAminoMsg(object: ThresholdDecisionPolicyAminoMsg): ThresholdDecisionPolicy;
    toAminoMsg(message: ThresholdDecisionPolicy): ThresholdDecisionPolicyAminoMsg;
    fromProtoMsg(message: ThresholdDecisionPolicyProtoMsg): ThresholdDecisionPolicy;
    toProto(message: ThresholdDecisionPolicy): Uint8Array;
    toProtoMsg(message: ThresholdDecisionPolicy): ThresholdDecisionPolicyProtoMsg;
};
export declare const PercentageDecisionPolicy: {
    encode(message: PercentageDecisionPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PercentageDecisionPolicy;
    fromJSON(object: any): PercentageDecisionPolicy;
    toJSON(message: PercentageDecisionPolicy): unknown;
    fromPartial(object: Partial<PercentageDecisionPolicy>): PercentageDecisionPolicy;
    fromAmino(object: PercentageDecisionPolicyAmino): PercentageDecisionPolicy;
    toAmino(message: PercentageDecisionPolicy): PercentageDecisionPolicyAmino;
    fromAminoMsg(object: PercentageDecisionPolicyAminoMsg): PercentageDecisionPolicy;
    toAminoMsg(message: PercentageDecisionPolicy): PercentageDecisionPolicyAminoMsg;
    fromProtoMsg(message: PercentageDecisionPolicyProtoMsg): PercentageDecisionPolicy;
    toProto(message: PercentageDecisionPolicy): Uint8Array;
    toProtoMsg(message: PercentageDecisionPolicy): PercentageDecisionPolicyProtoMsg;
};
export declare const DecisionPolicyWindows: {
    encode(message: DecisionPolicyWindows, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DecisionPolicyWindows;
    fromJSON(object: any): DecisionPolicyWindows;
    toJSON(message: DecisionPolicyWindows): unknown;
    fromPartial(object: Partial<DecisionPolicyWindows>): DecisionPolicyWindows;
    fromAmino(object: DecisionPolicyWindowsAmino): DecisionPolicyWindows;
    toAmino(message: DecisionPolicyWindows): DecisionPolicyWindowsAmino;
    fromAminoMsg(object: DecisionPolicyWindowsAminoMsg): DecisionPolicyWindows;
    toAminoMsg(message: DecisionPolicyWindows): DecisionPolicyWindowsAminoMsg;
    fromProtoMsg(message: DecisionPolicyWindowsProtoMsg): DecisionPolicyWindows;
    toProto(message: DecisionPolicyWindows): Uint8Array;
    toProtoMsg(message: DecisionPolicyWindows): DecisionPolicyWindowsProtoMsg;
};
export declare const GroupInfo: {
    encode(message: GroupInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupInfo;
    fromJSON(object: any): GroupInfo;
    toJSON(message: GroupInfo): unknown;
    fromPartial(object: Partial<GroupInfo>): GroupInfo;
    fromAmino(object: GroupInfoAmino): GroupInfo;
    toAmino(message: GroupInfo): GroupInfoAmino;
    fromAminoMsg(object: GroupInfoAminoMsg): GroupInfo;
    toAminoMsg(message: GroupInfo): GroupInfoAminoMsg;
    fromProtoMsg(message: GroupInfoProtoMsg): GroupInfo;
    toProto(message: GroupInfo): Uint8Array;
    toProtoMsg(message: GroupInfo): GroupInfoProtoMsg;
};
export declare const GroupMember: {
    encode(message: GroupMember, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupMember;
    fromJSON(object: any): GroupMember;
    toJSON(message: GroupMember): unknown;
    fromPartial(object: Partial<GroupMember>): GroupMember;
    fromAmino(object: GroupMemberAmino): GroupMember;
    toAmino(message: GroupMember): GroupMemberAmino;
    fromAminoMsg(object: GroupMemberAminoMsg): GroupMember;
    toAminoMsg(message: GroupMember): GroupMemberAminoMsg;
    fromProtoMsg(message: GroupMemberProtoMsg): GroupMember;
    toProto(message: GroupMember): Uint8Array;
    toProtoMsg(message: GroupMember): GroupMemberProtoMsg;
};
export declare const GroupPolicyInfo: {
    encode(message: GroupPolicyInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GroupPolicyInfo;
    fromJSON(object: any): GroupPolicyInfo;
    toJSON(message: GroupPolicyInfo): unknown;
    fromPartial(object: Partial<GroupPolicyInfo>): GroupPolicyInfo;
    fromAmino(object: GroupPolicyInfoAmino): GroupPolicyInfo;
    toAmino(message: GroupPolicyInfo): GroupPolicyInfoAmino;
    fromAminoMsg(object: GroupPolicyInfoAminoMsg): GroupPolicyInfo;
    toAminoMsg(message: GroupPolicyInfo): GroupPolicyInfoAminoMsg;
    fromProtoMsg(message: GroupPolicyInfoProtoMsg): GroupPolicyInfo;
    toProto(message: GroupPolicyInfo): Uint8Array;
    toProtoMsg(message: GroupPolicyInfo): GroupPolicyInfoProtoMsg;
};
export declare const Proposal: {
    encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proposal;
    fromJSON(object: any): Proposal;
    toJSON(message: Proposal): unknown;
    fromPartial(object: Partial<Proposal>): Proposal;
    fromAmino(object: ProposalAmino): Proposal;
    toAmino(message: Proposal): ProposalAmino;
    fromAminoMsg(object: ProposalAminoMsg): Proposal;
    toAminoMsg(message: Proposal): ProposalAminoMsg;
    fromProtoMsg(message: ProposalProtoMsg): Proposal;
    toProto(message: Proposal): Uint8Array;
    toProtoMsg(message: Proposal): ProposalProtoMsg;
};
export declare const TallyResult: {
    encode(message: TallyResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TallyResult;
    fromJSON(object: any): TallyResult;
    toJSON(message: TallyResult): unknown;
    fromPartial(object: Partial<TallyResult>): TallyResult;
    fromAmino(object: TallyResultAmino): TallyResult;
    toAmino(message: TallyResult): TallyResultAmino;
    fromAminoMsg(object: TallyResultAminoMsg): TallyResult;
    toAminoMsg(message: TallyResult): TallyResultAminoMsg;
    fromProtoMsg(message: TallyResultProtoMsg): TallyResult;
    toProto(message: TallyResult): Uint8Array;
    toProtoMsg(message: TallyResult): TallyResultProtoMsg;
};
export declare const Vote: {
    encode(message: Vote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vote;
    fromJSON(object: any): Vote;
    toJSON(message: Vote): unknown;
    fromPartial(object: Partial<Vote>): Vote;
    fromAmino(object: VoteAmino): Vote;
    toAmino(message: Vote): VoteAmino;
    fromAminoMsg(object: VoteAminoMsg): Vote;
    toAminoMsg(message: Vote): VoteAminoMsg;
    fromProtoMsg(message: VoteProtoMsg): Vote;
    toProto(message: Vote): Uint8Array;
    toProtoMsg(message: Vote): VoteProtoMsg;
};
export declare const DecisionPolicy_InterfaceDecoder: (input: _m0.Reader | Uint8Array) => ThresholdDecisionPolicy | PercentageDecisionPolicy | Any;
export declare const DecisionPolicy_FromAmino: (content: AnyAmino) => Any;
export declare const DecisionPolicy_ToAmino: (content: Any) => AnyAmino;
