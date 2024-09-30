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
        this.proposal = this.proposal.bind(this);
        this.proposals = this.proposals.bind(this);
        this.vote = this.vote.bind(this);
        this.votes = this.votes.bind(this);
        this.params = this.params.bind(this);
        this.deposit = this.deposit.bind(this);
        this.deposits = this.deposits.bind(this);
        this.tallyResult = this.tallyResult.bind(this);
    }
    proposal(request) {
        const data = query_1.QueryProposalRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposal", data);
        return promise.then(data => query_1.QueryProposalResponse.decode(new binary_1.BinaryReader(data)));
    }
    proposals(request) {
        const data = query_1.QueryProposalsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposals", data);
        return promise.then(data => query_1.QueryProposalsResponse.decode(new binary_1.BinaryReader(data)));
    }
    vote(request) {
        const data = query_1.QueryVoteRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Vote", data);
        return promise.then(data => query_1.QueryVoteResponse.decode(new binary_1.BinaryReader(data)));
    }
    votes(request) {
        const data = query_1.QueryVotesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Votes", data);
        return promise.then(data => query_1.QueryVotesResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    deposit(request) {
        const data = query_1.QueryDepositRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposit", data);
        return promise.then(data => query_1.QueryDepositResponse.decode(new binary_1.BinaryReader(data)));
    }
    deposits(request) {
        const data = query_1.QueryDepositsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposits", data);
        return promise.then(data => query_1.QueryDepositsResponse.decode(new binary_1.BinaryReader(data)));
    }
    tallyResult(request) {
        const data = query_1.QueryTallyResultRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "TallyResult", data);
        return promise.then(data => query_1.QueryTallyResultResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        proposal(request) {
            return queryService.proposal(request);
        },
        proposals(request) {
            return queryService.proposals(request);
        },
        vote(request) {
            return queryService.vote(request);
        },
        votes(request) {
            return queryService.votes(request);
        },
        params(request) {
            return queryService.params(request);
        },
        deposit(request) {
            return queryService.deposit(request);
        },
        deposits(request) {
            return queryService.deposits(request);
        },
        tallyResult(request) {
            return queryService.tallyResult(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
