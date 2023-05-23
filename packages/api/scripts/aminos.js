export const AMINO_MAP = {

  // cosmos.auth.v1beta1
  '/cosmos.auth.v1beta1.BaseAccount': {
    aminoType: 'cosmos-sdk/BaseAccount'
  },
  '/cosmos.auth.v1beta1.ModuleAccount': {
    aminoType: 'cosmos-sdk/ModuleAccount'
  },

  // cosmos.authz.v1beta1
  '/cosmos.authz.v1beta1.MsgGrant': {
    aminoType: 'cosmos-sdk/MsgGrant'
  },
  '/cosmos.authz.v1beta1.MsgRevoke': {
    aminoType: 'cosmos-sdk/MsgRevoke'
  },
  '/cosmos.authz.v1beta1.MsgExec': {
    aminoType: 'cosmos-sdk/MsgExec'
  },

  // cosmos.bank.v1beta1
  '/cosmos.bank.v1beta1.MsgSend': {
    aminoType: 'cosmos-sdk/MsgSend'
  },
  '/cosmos.bank.v1beta1.MsgMultiSend': {
    aminoType: 'cosmos-sdk/MsgMultiSend'
  },
  '/cosmos.bank.v1beta1.SendAuthorization': {
    aminoType: 'cosmos-sdk/SendAuthorization'
  },

  // cosmos.distribution.v1beta1
  '/cosmos.distribution.v1beta1.MsgWithdrawDelegationReward': {
    aminoType: 'cosmos-sdk/MsgWithdrawDelegationReward'
  },
  '/cosmos.distribution.v1beta1.MsgWithdrawValCommission': {
    aminoType: 'cosmos-sdk/MsgWithdrawValCommission'
  },
  '/cosmos.distribution.v1beta1.MsgModifyWithdrawAddress': {
    aminoType: 'cosmos-sdk/MsgModifyWithdrawAddress'
  },
  '/cosmos.distribution.v1beta1.MsgFundCommunityPool': {
    aminoType: 'cosmos-sdk/MsgFundCommunityPool'
  },
  '/cosmos.distribution.v1beta1.CommunityPoolSpendProposal': {
    aminoType: 'cosmos-sdk/CommunityPoolSpendProposal'
  },

  // cosmos.feegrant.v1beta1
  '/cosmos.feegrant.v1beta1.MsgGrantAllowance': {
    aminoType: 'cosmos-sdk/MsgGrantAllowance'
  },
  '/cosmos.feegrant.v1beta1.MsgRevokeAllowance': {
    aminoType: 'cosmos-sdk/MsgRevokeAllowance'
  },
  '/cosmos.feegrant.v1beta1.BasicAllowance': {
    aminoType: 'cosmos-sdk/BasicAllowance'
  },
  '/cosmos.feegrant.v1beta1.PeriodicAllowance': {
    aminoType: 'cosmos-sdk/PeriodicAllowance'
  },
  '/cosmos.feegrant.v1beta1.AllowedMsgAllowance': {
    aminoType: 'cosmos-sdk/AllowedMsgAllowance'
  },

  // cosmos.gov.v1
  '/cosmos.gov.v1.MsgSubmitProposal': {
    aminoType: 'cosmos-sdk/v1/MsgSubmitProposal'
  },
  '/cosmos.gov.v1.MsgDeposit': {
    aminoType: 'cosmos-sdk/v1/MsgDeposit'
  },
  '/cosmos.gov.v1.MsgVote': {
    aminoType: 'cosmos-sdk/v1/MsgVote'
  },
  '/cosmos.gov.v1.MsgVoteWeighted': {
    aminoType: 'cosmos-sdk/v1/MsgVoteWeighted'
  },
  '/cosmos.gov.v1.MsgExecLegacyContent': {
    aminoType: 'cosmos-sdk/v1/MsgExecLegacyContent'
  },

  // cosmos.gov.v1beta1
  '/cosmos.gov.v1beta1.MsgSubmitProposal': {
    aminoType: 'cosmos-sdk/MsgSubmitProposal'
  },
  '/cosmos.gov.v1beta1.MsgDeposit': {
    aminoType: 'cosmos-sdk/MsgDeposit'
  },
  '/cosmos.gov.v1beta1.MsgVote': {
    aminoType: 'cosmos-sdk/MsgVote'
  },
  '/cosmos.gov.v1beta1.MsgVoteWeighted': {
    aminoType: 'cosmos-sdk/MsgVoteWeighted'
  },
  '/cosmos.gov.v1beta1.TextProposal': {
    aminoType: 'cosmos-sdk/TextProposal'
  },

  // cosmos.group.v1
  '/cosmos.group.v1.ThresholdDecisionPolicy': {
    aminoType: 'cosmos-sdk/ThresholdDecisionPolicy'
  },
  '/cosmos.group.v1.PercentageDecisionPolicy': {
    aminoType: 'cosmos-sdk/PercentageDecisionPolicy'
  },
  '/cosmos.group.v1.MsgCreateGroup': {
    aminoType: 'cosmos-sdk/MsgCreateGroup'
  },
  '/cosmos.group.v1.MsgUpdateGroupMembers': {
    aminoType: 'cosmos-sdk/MsgUpdateGroupMembers'
  },
  '/cosmos.group.v1.MsgUpdateGroupAdmin': {
    aminoType: 'cosmos-sdk/MsgUpdateGroupAdmin'
  },
  '/cosmos.group.v1.MsgUpdateGroupMetadata': {
    aminoType: 'cosmos-sdk/MsgUpdateGroupMetadata'
  },
  '/cosmos.group.v1.MsgCreateGroupWithPolicy': {
    aminoType: 'cosmos-sdk/MsgCreateGroupWithPolicy'
  },
  '/cosmos.group.v1.MsgCreateGroupPolicy': {
    aminoType: 'cosmos-sdk/MsgCreateGroupPolicy'
  },
  '/cosmos.group.v1.MsgUpdateGroupPolicyAdmin': {
    aminoType: 'cosmos-sdk/MsgUpdateGroupPolicyAdmin'
  },
  '/cosmos.group.v1.MsgUpdateGroupDecisionPolicy': {
    aminoType: 'cosmos-sdk/MsgUpdateGroupDecisionPolicy'
  },
  '/cosmos.group.v1.MsgUpdateGroupPolicyMetadata': {
    aminoType: 'cosmos-sdk/MsgUpdateGroupPolicyMetadata'
  },
  '/cosmos.group.v1.MsgSubmitProposal': {
    aminoType: 'cosmos-sdk/group/MsgSubmitProposal'
  },
  '/cosmos.group.v1.MsgWithdrawProposal': {
    aminoType: 'cosmos-sdk/group/MsgWithdrawProposal'
  },
  '/cosmos.group.v1.MsgVote': {
    aminoType: 'cosmos-sdk/group/MsgVote'
  },
  '/cosmos.group.v1.MsgExec': {
    aminoType: 'cosmos-sdk/group/MsgExec'
  },
  '/cosmos.group.v1.MsgLeaveGroup': {
    aminoType: 'cosmos-sdk/group/MsgLeaveGroup'
  },

  // cosmos.staking.v1beta1
  '/cosmos.staking.v1beta1.MsgCreateValidator': {
    aminoType: 'cosmos-sdk/MsgCreateValidator'
  },
  '/cosmos.staking.v1beta1.MsgEditValidator': {
    aminoType: 'cosmos-sdk/MsgEditValidator'
  },
  '/cosmos.staking.v1beta1.MsgDelegate': {
    aminoType: 'cosmos-sdk/MsgDelegate'
  },
  '/cosmos.staking.v1beta1.MsgUndelegate': {
    aminoType: 'cosmos-sdk/MsgUndelegate'
  },
  '/cosmos.staking.v1beta1.MsgBeginRedelegate': {
    aminoType: 'cosmos-sdk/MsgBeginRedelegate'
  },
  '/cosmos.staking.v1beta1.StakeAuthorization': {
    aminoType: 'cosmos-sdk/StakeAuthorization'
  },
  '/cosmos.staking.v1beta1.StakeAuthorization_AllowList': {
    aminoType: 'cosmos-sdk/StakeAuthorization/AllowList'
  },
  '/cosmos.staking.v1beta1.StakeAuthorization_DenyList': {
    aminoType: 'cosmos-sdk/StakeAuthorization/DenyList'
  },

  // TODO(#72): add ibc amino types after updating ibc proto files

  // regen.data.v1
  '/regen.data.v1.MsgAnchor': {
    aminoType: 'regen-ledger/MsgAnchor'
  },
  '/regen.data.v1.MsgAttest': {
    aminoType: 'regen-ledger/MsgAttest'
  },
  '/regen.data.v1.MsgDefineResolver': {
    aminoType: 'regen-ledger/MsgDefineResolver'
  },
  '/regen.data.v1.MsgRegisterResolver': {
    aminoType: 'regen-ledger/MsgRegisterResolver'
  },

  // regen.ecocredit.v1
  '/regen.ecocredit.v1.MsgCreateClass': {
    aminoType: 'regen/MsgCreateClass'
  },
  '/regen.ecocredit.v1.MsgCreateProject': {
    aminoType: 'regen/MsgCreateProject'
  },
  '/regen.ecocredit.v1.MsgCreateBatch': {
    aminoType: 'regen/MsgCreateBatch'
  },
  '/regen.ecocredit.v1.MsgMintBatchCredits': {
    aminoType: 'regen/MsgMintBatchCredits'
  },
  '/regen.ecocredit.v1.MsgSealBatch': {
    aminoType: 'regen/MsgSealBatch'
  },
  '/regen.ecocredit.v1.MsgSend': {
    aminoType: 'regen/MsgSend'
  },
  '/regen.ecocredit.v1.MsgRetire': {
    aminoType: 'regen/MsgRetire'
  },
  '/regen.ecocredit.v1.MsgCancel': {
    aminoType: 'regen/MsgCancel'
  },
  '/regen.ecocredit.v1.MsgUpdateClassAdmin': {
    aminoType: 'regen/MsgUpdateClassAdmin'
  },
  '/regen.ecocredit.v1.MsgUpdateClassIssuers': {
    aminoType: 'regen/MsgUpdateClassIssuers'
  },
  '/regen.ecocredit.v1.MsgUpdateClassMetadata': {
    aminoType: 'regen/MsgUpdateClassMetadata'
  },
  '/regen.ecocredit.v1.MsgUpdateProjectAdmin': {
    aminoType: 'regen/MsgUpdateProjectAdmin'
  },
  '/regen.ecocredit.v1.MsgUpdateProjectMetadata': {
    aminoType: 'regen/MsgUpdateProjectMetadata'
  },
  '/regen.ecocredit.v1.MsgUpdateBatchMetadata': {
    aminoType: 'regen/MsgUpdateBatchMetadata'
  },
  '/regen.ecocredit.v1.MsgBridge': {
    aminoType: 'regen/MsgBridge'
  },
  '/regen.ecocredit.v1.MsgBridgeReceive': {
    aminoType: 'regen/MsgBridgeReceive'
  },
  '/regen.ecocredit.v1.MsgAddCreditType': {
    aminoType: 'regen/MsgAddCreditType'
  },
  '/regen.ecocredit.v1.MsgSetClassCreatorAllowlist': {
    aminoType: 'regen/MsgSetClassCreatorAllowlist'
  },
  '/regen.ecocredit.v1.MsgAddClassCreator': {
    aminoType: 'regen/MsgAddClassCreator'
  },
  '/regen.ecocredit.v1.MsgRemoveClassCreator': {
    aminoType: 'regen/MsgRemoveClassCreator'
  },
  '/regen.ecocredit.v1.MsgUpdateClassFee': {
    aminoType: 'regen/MsgUpdateClassFee'
  },
  '/regen.ecocredit.v1.MsgAddAllowedBridgeChain': {
    aminoType: 'regen/MsgAddAllowedBridgeChain'
  },
  '/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain': {
    aminoType: 'regen/MsgRemoveAllowedBridgeChain'
  },

  // regen.ecocredit.basket.v1
  '/regen.ecocredit.basket.v1.MsgCreate': {
    aminoType: 'regen.basket/MsgCreate'
  },
  '/regen.ecocredit.basket.v1.MsgPut': {
    aminoType: 'regen.basket/MsgPut'
  },
  '/regen.ecocredit.basket.v1.MsgTake': {
    aminoType: 'regen.basket/MsgTake'
  },
  '/regen.ecocredit.basket.v1.MsgUpdateBasketFee': {
    aminoType: 'regen.basket/MsgUpdateBasketFee'
  },
  '/regen.ecocredit.basket.v1.MsgUpdateCurator': {
    aminoType: 'regen.basket/MsgUpdateCurator'
  },
  '/regen.ecocredit.basket.v1.MsgUpdateDateCriteria': {
    aminoType: 'regen.basket/MsgUpdateDateCriteria'
  },

  // regen.ecocredit.marketplace.v1
  '/regen.ecocredit.marketplace.v1.MsgSell': {
    aminoType: 'regen.marketplace/MsgSell'
  },
  '/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders': {
    aminoType: 'regen.marketplace/MsgUpdateSellOrders'
  },
  '/regen.ecocredit.marketplace.v1.MsgCancelSellOrder': {
    aminoType: 'regen.marketplace/MsgCancelSellOrder'
  },
  '/regen.ecocredit.marketplace.v1.MsgBuyDirect': {
    aminoType: 'regen.marketplace/MsgBuyDirect'
  },
  '/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom': {
    aminoType: 'regen.marketplace/MsgAddAllowedDenom'
  },
  '/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom': {
    aminoType: 'regen.marketplace/MsgRemoveAllowedDenom'
  },
};
