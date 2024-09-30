"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.groupInfo = this.groupInfo.bind(this);
        this.groupPolicyInfo = this.groupPolicyInfo.bind(this);
        this.groupMembers = this.groupMembers.bind(this);
        this.groupsByAdmin = this.groupsByAdmin.bind(this);
        this.groupPoliciesByGroup = this.groupPoliciesByGroup.bind(this);
        this.groupPoliciesByAdmin = this.groupPoliciesByAdmin.bind(this);
        this.proposal = this.proposal.bind(this);
        this.proposalsByGroupPolicy = this.proposalsByGroupPolicy.bind(this);
        this.voteByProposalVoter = this.voteByProposalVoter.bind(this);
        this.votesByProposal = this.votesByProposal.bind(this);
        this.votesByVoter = this.votesByVoter.bind(this);
        this.groupsByMember = this.groupsByMember.bind(this);
        this.tallyResult = this.tallyResult.bind(this);
    }
    groupInfo(request) {
        const data = query_1.QueryGroupInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupInfo", data);
        return promise.then(data => query_1.QueryGroupInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    groupPolicyInfo(request) {
        const data = query_1.QueryGroupPolicyInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPolicyInfo", data);
        return promise.then(data => query_1.QueryGroupPolicyInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    groupMembers(request) {
        const data = query_1.QueryGroupMembersRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupMembers", data);
        return promise.then(data => query_1.QueryGroupMembersResponse.decode(new binary_1.BinaryReader(data)));
    }
    groupsByAdmin(request) {
        const data = query_1.QueryGroupsByAdminRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByAdmin", data);
        return promise.then(data => query_1.QueryGroupsByAdminResponse.decode(new binary_1.BinaryReader(data)));
    }
    groupPoliciesByGroup(request) {
        const data = query_1.QueryGroupPoliciesByGroupRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByGroup", data);
        return promise.then(data => query_1.QueryGroupPoliciesByGroupResponse.decode(new binary_1.BinaryReader(data)));
    }
    groupPoliciesByAdmin(request) {
        const data = query_1.QueryGroupPoliciesByAdminRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByAdmin", data);
        return promise.then(data => query_1.QueryGroupPoliciesByAdminResponse.decode(new binary_1.BinaryReader(data)));
    }
    proposal(request) {
        const data = query_1.QueryProposalRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "Proposal", data);
        return promise.then(data => query_1.QueryProposalResponse.decode(new binary_1.BinaryReader(data)));
    }
    proposalsByGroupPolicy(request) {
        const data = query_1.QueryProposalsByGroupPolicyRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "ProposalsByGroupPolicy", data);
        return promise.then(data => query_1.QueryProposalsByGroupPolicyResponse.decode(new binary_1.BinaryReader(data)));
    }
    voteByProposalVoter(request) {
        const data = query_1.QueryVoteByProposalVoterRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "VoteByProposalVoter", data);
        return promise.then(data => query_1.QueryVoteByProposalVoterResponse.decode(new binary_1.BinaryReader(data)));
    }
    votesByProposal(request) {
        const data = query_1.QueryVotesByProposalRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByProposal", data);
        return promise.then(data => query_1.QueryVotesByProposalResponse.decode(new binary_1.BinaryReader(data)));
    }
    votesByVoter(request) {
        const data = query_1.QueryVotesByVoterRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByVoter", data);
        return promise.then(data => query_1.QueryVotesByVoterResponse.decode(new binary_1.BinaryReader(data)));
    }
    groupsByMember(request) {
        const data = query_1.QueryGroupsByMemberRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByMember", data);
        return promise.then(data => query_1.QueryGroupsByMemberResponse.decode(new binary_1.BinaryReader(data)));
    }
    tallyResult(request) {
        const data = query_1.QueryTallyResultRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "TallyResult", data);
        return promise.then(data => query_1.QueryTallyResultResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        groupInfo(request) {
            return queryService.groupInfo(request);
        },
        groupPolicyInfo(request) {
            return queryService.groupPolicyInfo(request);
        },
        groupMembers(request) {
            return queryService.groupMembers(request);
        },
        groupsByAdmin(request) {
            return queryService.groupsByAdmin(request);
        },
        groupPoliciesByGroup(request) {
            return queryService.groupPoliciesByGroup(request);
        },
        groupPoliciesByAdmin(request) {
            return queryService.groupPoliciesByAdmin(request);
        },
        proposal(request) {
            return queryService.proposal(request);
        },
        proposalsByGroupPolicy(request) {
            return queryService.proposalsByGroupPolicy(request);
        },
        voteByProposalVoter(request) {
            return queryService.voteByProposalVoter(request);
        },
        votesByProposal(request) {
            return queryService.votesByProposal(request);
        },
        votesByVoter(request) {
            return queryService.votesByVoter(request);
        },
        groupsByMember(request) {
            return queryService.groupsByMember(request);
        },
        tallyResult(request) {
            return queryService.tallyResult(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
