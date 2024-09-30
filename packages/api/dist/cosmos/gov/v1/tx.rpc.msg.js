"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
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
        const data = tx_1.MsgSubmitProposal.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1.Msg", "SubmitProposal", data);
        return promise.then(data => tx_1.MsgSubmitProposalResponse.decode(new binary_1.BinaryReader(data)));
    }
    execLegacyContent(request) {
        const data = tx_1.MsgExecLegacyContent.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1.Msg", "ExecLegacyContent", data);
        return promise.then(data => tx_1.MsgExecLegacyContentResponse.decode(new binary_1.BinaryReader(data)));
    }
    vote(request) {
        const data = tx_1.MsgVote.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1.Msg", "Vote", data);
        return promise.then(data => tx_1.MsgVoteResponse.decode(new binary_1.BinaryReader(data)));
    }
    voteWeighted(request) {
        const data = tx_1.MsgVoteWeighted.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1.Msg", "VoteWeighted", data);
        return promise.then(data => tx_1.MsgVoteWeightedResponse.decode(new binary_1.BinaryReader(data)));
    }
    deposit(request) {
        const data = tx_1.MsgDeposit.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1.Msg", "Deposit", data);
        return promise.then(data => tx_1.MsgDepositResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
