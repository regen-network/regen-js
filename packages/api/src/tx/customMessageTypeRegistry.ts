import {
  MsgCancel,
  MsgCreateClass,
  MsgSend,
  MsgBridge,
  MsgCreateBatch,
  MsgCreateProject,
  MsgMintBatchCredits,
  MsgRetire,
  MsgUpdateClassAdmin,
  MsgUpdateClassIssuers,
  MsgUpdateProjectMetadata,
  MsgUpdateProjectAdmin,
} from '../generated/regen/ecocredit/v1/tx';
import {
  MsgCreate,
  MsgPut,
  MsgTake,
} from '../generated/regen/ecocredit/basket/v1/tx';
import {
  MsgBuyDirect,
  MsgSell,
  MsgUpdateSellOrders,
  MsgCancelSellOrder,
} from '../generated/regen/ecocredit/marketplace/v1/tx';
import { GeneratedType } from '@cosmjs/proto-signing';

const ecocreditRegistry: Array<[string, GeneratedType]> = [
  [MsgCancel.$type, MsgCancel],
  [MsgCreateClass.$type, MsgCreateClass],
  [MsgSend.$type, MsgSend],
  [MsgBridge.$type, MsgBridge],
  [MsgCreateBatch.$type, MsgCreateBatch],
  [MsgCreateProject.$type, MsgCreateProject],
  [MsgMintBatchCredits.$type, MsgMintBatchCredits],
  [MsgRetire.$type, MsgRetire],
  [MsgUpdateClassAdmin.$type, MsgUpdateClassAdmin],
  [MsgUpdateClassIssuers.$type, MsgUpdateClassIssuers],
  [MsgUpdateProjectMetadata.$type, MsgUpdateProjectMetadata],
  [MsgUpdateProjectAdmin.$type, MsgUpdateProjectAdmin],
];

const basketRegistry: Array<[string, GeneratedType]> = [
  [MsgCreate.$type, MsgCreate],
  [MsgPut.$type, MsgPut],
  [MsgTake.$type, MsgTake],
];

const marketplaceRegistry: Array<[string, GeneratedType]> = [
  [MsgBuyDirect.$type, MsgBuyDirect],
  [MsgSell.$type, MsgSell],
  [MsgUpdateSellOrders.$type, MsgUpdateSellOrders],
  [MsgCancelSellOrder.$type, MsgCancelSellOrder],
];

export const customRegistry = [
  ...ecocreditRegistry,
  ...basketRegistry,
  ...marketplaceRegistry,
];
