import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string | HttpEndpoint;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: {
                accounts(request?: import("./auth/v1beta1/query").QueryAccountsRequest): Promise<import("./auth/v1beta1/query").QueryAccountsResponse>;
                account(request: import("./auth/v1beta1/query").QueryAccountRequest): Promise<import("./auth/v1beta1/query").QueryAccountResponse>;
                accountAddressByID(request: import("./auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("./auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                params(request?: import("./auth/v1beta1/query").QueryParamsRequest): Promise<import("./auth/v1beta1/query").QueryParamsResponse>;
                moduleAccounts(request?: import("./auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("./auth/v1beta1/query").QueryModuleAccountsResponse>;
                moduleAccountByName(request: import("./auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("./auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: import("./auth/v1beta1/query").Bech32PrefixRequest): Promise<import("./auth/v1beta1/query").Bech32PrefixResponse>;
                addressBytesToString(request: import("./auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("./auth/v1beta1/query").AddressBytesToStringResponse>;
                addressStringToBytes(request: import("./auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("./auth/v1beta1/query").AddressStringToBytesResponse>;
            };
        };
        authz: {
            v1beta1: {
                grants(request: import("./authz/v1beta1/query").QueryGrantsRequest): Promise<import("./authz/v1beta1/query").QueryGrantsResponse>;
                granterGrants(request: import("./authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("./authz/v1beta1/query").QueryGranterGrantsResponse>;
                granteeGrants(request: import("./authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("./authz/v1beta1/query").QueryGranteeGrantsResponse>;
            };
        };
        bank: {
            v1beta1: {
                balance(request: import("./bank/v1beta1/query").QueryBalanceRequest): Promise<import("./bank/v1beta1/query").QueryBalanceResponse>;
                allBalances(request: import("./bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("./bank/v1beta1/query").QueryAllBalancesResponse>;
                spendableBalances(request: import("./bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("./bank/v1beta1/query").QuerySpendableBalancesResponse>;
                totalSupply(request?: import("./bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("./bank/v1beta1/query").QueryTotalSupplyResponse>;
                supplyOf(request: import("./bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("./bank/v1beta1/query").QuerySupplyOfResponse>;
                params(request?: import("./bank/v1beta1/query").QueryParamsRequest): Promise<import("./bank/v1beta1/query").QueryParamsResponse>;
                denomMetadata(request: import("./bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("./bank/v1beta1/query").QueryDenomMetadataResponse>;
                denomsMetadata(request?: import("./bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("./bank/v1beta1/query").QueryDenomsMetadataResponse>;
                denomOwners(request: import("./bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("./bank/v1beta1/query").QueryDenomOwnersResponse>;
            };
        };
        base: {
            node: {
                v1beta1: {
                    config(request?: import("./base/node/v1beta1/query").ConfigRequest): Promise<import("./base/node/v1beta1/query").ConfigResponse>;
                };
            };
        };
        distribution: {
            v1beta1: {
                params(request?: import("./distribution/v1beta1/query").QueryParamsRequest): Promise<import("./distribution/v1beta1/query").QueryParamsResponse>;
                validatorOutstandingRewards(request: import("./distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("./distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: import("./distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("./distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                validatorSlashes(request: import("./distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("./distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                delegationRewards(request: import("./distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("./distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: import("./distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("./distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: import("./distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("./distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: import("./distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("./distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: import("./distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("./distribution/v1beta1/query").QueryCommunityPoolResponse>;
            };
        };
        feegrant: {
            v1beta1: {
                allowance(request: import("./feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("./feegrant/v1beta1/query").QueryAllowanceResponse>;
                allowances(request: import("./feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("./feegrant/v1beta1/query").QueryAllowancesResponse>;
                allowancesByGranter(request: import("./feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("./feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
            };
        };
        gov: {
            v1: {
                proposal(request: import("./gov/v1/query").QueryProposalRequest): Promise<import("./gov/v1/query").QueryProposalResponse>;
                proposals(request: import("./gov/v1/query").QueryProposalsRequest): Promise<import("./gov/v1/query").QueryProposalsResponse>;
                vote(request: import("./gov/v1/query").QueryVoteRequest): Promise<import("./gov/v1/query").QueryVoteResponse>;
                votes(request: import("./gov/v1/query").QueryVotesRequest): Promise<import("./gov/v1/query").QueryVotesResponse>;
                params(request: import("./gov/v1/query").QueryParamsRequest): Promise<import("./gov/v1/query").QueryParamsResponse>;
                deposit(request: import("./gov/v1/query").QueryDepositRequest): Promise<import("./gov/v1/query").QueryDepositResponse>;
                deposits(request: import("./gov/v1/query").QueryDepositsRequest): Promise<import("./gov/v1/query").QueryDepositsResponse>;
                tallyResult(request: import("./gov/v1/query").QueryTallyResultRequest): Promise<import("./gov/v1/query").QueryTallyResultResponse>;
            };
            v1beta1: {
                proposal(request: import("./gov/v1beta1/query").QueryProposalRequest): Promise<import("./gov/v1beta1/query").QueryProposalResponse>;
                proposals(request: import("./gov/v1beta1/query").QueryProposalsRequest): Promise<import("./gov/v1beta1/query").QueryProposalsResponse>;
                vote(request: import("./gov/v1beta1/query").QueryVoteRequest): Promise<import("./gov/v1beta1/query").QueryVoteResponse>;
                votes(request: import("./gov/v1beta1/query").QueryVotesRequest): Promise<import("./gov/v1beta1/query").QueryVotesResponse>;
                params(request: import("./gov/v1beta1/query").QueryParamsRequest): Promise<import("./gov/v1beta1/query").QueryParamsResponse>;
                deposit(request: import("./gov/v1beta1/query").QueryDepositRequest): Promise<import("./gov/v1beta1/query").QueryDepositResponse>;
                deposits(request: import("./gov/v1beta1/query").QueryDepositsRequest): Promise<import("./gov/v1beta1/query").QueryDepositsResponse>;
                tallyResult(request: import("./gov/v1beta1/query").QueryTallyResultRequest): Promise<import("./gov/v1beta1/query").QueryTallyResultResponse>;
            };
        };
        group: {
            v1: {
                groupInfo(request: import("./group/v1/query").QueryGroupInfoRequest): Promise<import("./group/v1/query").QueryGroupInfoResponse>;
                groupPolicyInfo(request: import("./group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("./group/v1/query").QueryGroupPolicyInfoResponse>;
                groupMembers(request: import("./group/v1/query").QueryGroupMembersRequest): Promise<import("./group/v1/query").QueryGroupMembersResponse>;
                groupsByAdmin(request: import("./group/v1/query").QueryGroupsByAdminRequest): Promise<import("./group/v1/query").QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: import("./group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("./group/v1/query").QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: import("./group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("./group/v1/query").QueryGroupPoliciesByAdminResponse>;
                proposal(request: import("./group/v1/query").QueryProposalRequest): Promise<import("./group/v1/query").QueryProposalResponse>;
                proposalsByGroupPolicy(request: import("./group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("./group/v1/query").QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: import("./group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("./group/v1/query").QueryVoteByProposalVoterResponse>;
                votesByProposal(request: import("./group/v1/query").QueryVotesByProposalRequest): Promise<import("./group/v1/query").QueryVotesByProposalResponse>;
                votesByVoter(request: import("./group/v1/query").QueryVotesByVoterRequest): Promise<import("./group/v1/query").QueryVotesByVoterResponse>;
                groupsByMember(request: import("./group/v1/query").QueryGroupsByMemberRequest): Promise<import("./group/v1/query").QueryGroupsByMemberResponse>;
                tallyResult(request: import("./group/v1/query").QueryTallyResultRequest): Promise<import("./group/v1/query").QueryTallyResultResponse>;
            };
        };
        mint: {
            v1beta1: {
                params(request?: import("./mint/v1beta1/query").QueryParamsRequest): Promise<import("./mint/v1beta1/query").QueryParamsResponse>;
                inflation(request?: import("./mint/v1beta1/query").QueryInflationRequest): Promise<import("./mint/v1beta1/query").QueryInflationResponse>;
                annualProvisions(request?: import("./mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("./mint/v1beta1/query").QueryAnnualProvisionsResponse>;
            };
        };
        params: {
            v1beta1: {
                params(request: import("./params/v1beta1/query").QueryParamsRequest): Promise<import("./params/v1beta1/query").QueryParamsResponse>;
                subspaces(request?: import("./params/v1beta1/query").QuerySubspacesRequest): Promise<import("./params/v1beta1/query").QuerySubspacesResponse>;
            };
        };
        staking: {
            v1beta1: {
                validators(request: import("./staking/v1beta1/query").QueryValidatorsRequest): Promise<import("./staking/v1beta1/query").QueryValidatorsResponse>;
                validator(request: import("./staking/v1beta1/query").QueryValidatorRequest): Promise<import("./staking/v1beta1/query").QueryValidatorResponse>;
                validatorDelegations(request: import("./staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("./staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: import("./staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("./staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: import("./staking/v1beta1/query").QueryDelegationRequest): Promise<import("./staking/v1beta1/query").QueryDelegationResponse>;
                unbondingDelegation(request: import("./staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("./staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: import("./staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("./staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: import("./staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("./staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: import("./staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("./staking/v1beta1/query").QueryRedelegationsResponse>;
                delegatorValidators(request: import("./staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("./staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: import("./staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("./staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                historicalInfo(request: import("./staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("./staking/v1beta1/query").QueryHistoricalInfoResponse>;
                pool(request?: import("./staking/v1beta1/query").QueryPoolRequest): Promise<import("./staking/v1beta1/query").QueryPoolResponse>;
                params(request?: import("./staking/v1beta1/query").QueryParamsRequest): Promise<import("./staking/v1beta1/query").QueryParamsResponse>;
            };
        };
        tx: {
            v1beta1: {
                simulate(request: import("./tx/v1beta1/service").SimulateRequest): Promise<import("./tx/v1beta1/service").SimulateResponse>;
                getTx(request: import("./tx/v1beta1/service").GetTxRequest): Promise<import("./tx/v1beta1/service").GetTxResponse>;
                broadcastTx(request: import("./tx/v1beta1/service").BroadcastTxRequest): Promise<import("./tx/v1beta1/service").BroadcastTxResponse>;
                getTxsEvent(request: import("./tx/v1beta1/service").GetTxsEventRequest): Promise<import("./tx/v1beta1/service").GetTxsEventResponse>;
                getBlockWithTxs(request: import("./tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("./tx/v1beta1/service").GetBlockWithTxsResponse>;
            };
        };
        upgrade: {
            v1beta1: {
                currentPlan(request?: import("./upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("./upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                appliedPlan(request: import("./upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("./upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                upgradedConsensusState(request: import("./upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("./upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: import("./upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("./upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                authority(request?: import("./upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("./upgrade/v1beta1/query").QueryAuthorityResponse>;
            };
        };
    };
}>;
