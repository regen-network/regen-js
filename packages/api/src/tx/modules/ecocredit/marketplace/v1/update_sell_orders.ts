import { AminoMsg, Coin as AminoCoin } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import {
  MsgUpdateSellOrders,
  MsgUpdateSellOrders_Update,
} from '../../../../../generated/regen/ecocredit/marketplace/v1/tx';

const msgUpdateSellOrdersAminoType = 'regen.marketplace/MsgUpdateSellOrders';

export const updateSellOrdersTypeUrl = '/' + MsgUpdateSellOrders.$type;

interface AminoMsgUpdateSellOrders_Update {
  $type: MsgUpdateSellOrders_Update['$type'];
  sell_order_id: Long;
  new_quantity: string;
  new_ask_price?: AminoCoin;
  disable_auto_retire: boolean;
  new_expiration?: Date;
}

export interface AminoMsgUpdateSellOrders extends AminoMsg {
  readonly type: typeof msgUpdateSellOrdersAminoType;
  readonly value: {
    readonly seller: string;
    readonly updates: AminoMsgUpdateSellOrders_Update[];
  };
}

export function isAminoMsgUpdateSellOrders(
  msg: AminoMsg,
): msg is AminoMsgUpdateSellOrders {
  return msg.type === msgUpdateSellOrdersAminoType;
}

export let updateSellOrderConverter: AminoConverter = {
  aminoType: msgUpdateSellOrdersAminoType,
  toAmino: ({
    seller,
    updates,
  }: MsgUpdateSellOrders): AminoMsgUpdateSellOrders['value'] => {
    return {
      seller,
      updates: updates.map(u => {
        return {
          $type: u.$type,
          sell_order_id: u.sellOrderId,
          new_quantity: u.newQuantity,
          new_ask_price: u.newAskPrice,
          disable_auto_retire: u.disableAutoRetire,
          new_expiration: u.newExpiration,
        };
      }),
    };
  },
  fromAmino: ({
    seller,
    updates,
  }: AminoMsgUpdateSellOrders['value']): Partial<MsgUpdateSellOrders> => {
    return {
      seller,
      updates: updates.map(u => {
        return {
          $type: u.$type,
          sellOrderId: u.sell_order_id,
          newQuantity: u.new_quantity,
          newAskPrice: u.new_ask_price && {
            $type: 'cosmos.base.v1beta1.Coin',
            amount: u.new_ask_price.amount,
            denom: u.new_ask_price.denom,
          },
          disableAutoRetire: u.disable_auto_retire,
          newExpiration: u.new_expiration,
        };
      }),
    };
  },
};
