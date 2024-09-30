import { BinaryReader } from "../../../binary";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgExecLegacyContent, MsgExecLegacyContentResponse, MsgVote, MsgVoteResponse, MsgVoteWeighted, MsgVoteWeightedResponse, MsgDeposit, MsgDepositResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.submitProposal = this.submitProposal.bind(this);
        this.execLegacyContent = this.execLegacyContent.bind(this);
        this.vote = this.vote.bind(this);
        this.voteWeighted = this.voteWeighted.bind(this);
        this.deposit = this.deposit.bind(this);
    }
    submitProposal(request) {
        const data = MsgSubmitProposal.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1.Msg", "SubmitProposal", data);
        return promise.then(data => MsgSubmitProposalResponse.decode(new BinaryReader(data)));
    }
    execLegacyContent(request) {
        const data = MsgExecLegacyContent.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1.Msg", "ExecLegacyContent", data);
        return promise.then(data => MsgExecLegacyContentResponse.decode(new BinaryReader(data)));
    }
    vote(request) {
        const data = MsgVote.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1.Msg", "Vote", data);
        return promise.then(data => MsgVoteResponse.decode(new BinaryReader(data)));
    }
    voteWeighted(request) {
        const data = MsgVoteWeighted.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1.Msg", "VoteWeighted", data);
        return promise.then(data => MsgVoteWeightedResponse.decode(new BinaryReader(data)));
    }
    deposit(request) {
        const data = MsgDeposit.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1.Msg", "Deposit", data);
        return promise.then(data => MsgDepositResponse.decode(new BinaryReader(data)));
    }
}
