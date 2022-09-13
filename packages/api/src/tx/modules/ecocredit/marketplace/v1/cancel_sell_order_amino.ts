import { AminoMsg } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import { longify } from '@cosmjs/stargate/build/queryclient';
import { MsgCancelSellOrder } from '../../../../../generated/regen/ecocredit/marketplace/v1/tx';
import { omitDefault } from '../../../../converter-utils';

const msgCancelSellOrderAminoType = 'regen.marketplace/MsgCancelSellOrder';

export const cancelSellOrderTypeUrl = '/' + MsgCancelSellOrder.$type;

export interface AminoMsgCancelSellOrder extends AminoMsg {
  readonly type: typeof msgCancelSellOrderAminoType;
  readonly value: {
    readonly seller: string;
    readonly sell_order_id: string;
  };
}

export function isAminoMsgCancelSellOrder(
  msg: AminoMsg,
): msg is AminoMsgCancelSellOrder {
  return msg.type === msgCancelSellOrderAminoType;
}

export function cancelSellOrderConverter(): AminoConverter {
  return {
    aminoType: msgCancelSellOrderAminoType,
    toAmino: ({
      seller,
      sellOrderId,
    }: MsgCancelSellOrder): AminoMsgCancelSellOrder['value'] => {
      return {
        seller,
        sell_order_id: sellOrderId.toString(),
      };
    },
    fromAmino: ({
      seller,
      sell_order_id,
    }: AminoMsgCancelSellOrder['value']): Partial<MsgCancelSellOrder> => {
      return {
        seller,
        sellOrderId: longify(sell_order_id || 0),
      };
    },
  };
}
