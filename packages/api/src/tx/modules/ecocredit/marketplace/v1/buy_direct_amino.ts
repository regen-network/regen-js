import { AminoMsg } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import { longify } from '@cosmjs/stargate/build/queryclient';
import {
  MsgBuyDirect,
  MsgBuyDirect_Order,
} from '../../../../../generated/regen/ecocredit/marketplace/v1/tx';
import { AminoCoin } from './sell_amino';
import { omitDefault } from '../../converter-utils';

const msgBuyDirectAmnioType = 'regen.marketplace/MsgBuyDirect';

export const buyDirectTypeUrl = '/' + MsgBuyDirect.$type;

interface AminoBuyDirect_Order {
  $type: MsgBuyDirect_Order['$type'];
  sell_order_id?: string;
  quantity?: string;
  bid_price?: AminoCoin;
  disable_auto_retire?: boolean;
  retirement_jurisdiction?: string;
}

export interface AminoMsgBuyDirect extends AminoMsg {
  readonly type: typeof msgBuyDirectAmnioType;
  readonly value: {
    readonly buyer: string;
    readonly orders: AminoBuyDirect_Order[];
  };
}

export function isAminoMsgBuyDirect(msg: AminoMsg): msg is AminoMsgBuyDirect {
  return msg.type === msgBuyDirectAmnioType;
}

export function buyDirectConverter(): AminoConverter {
  return {
    aminoType: msgBuyDirectAmnioType,
    toAmino: ({ buyer, orders }: MsgBuyDirect): AminoMsgBuyDirect['value'] => {
      return {
        buyer,
        orders: orders.map(b => {
          return {
            $type: b.$type,
            sell_order_id: omitDefault(b.sellOrderId)?.toString(),
            quantity: omitDefault(b.quantity),
            bid_price: {
              denom: omitDefault(b.bidPrice?.denom),
              amount: omitDefault(b.bidPrice?.amount),
            },
            disable_auto_retire: omitDefault(b.disableAutoRetire),
            retirement_jurisdiction: omitDefault(b.retirementJurisdiction),
          };
        }),
      };
    },
    fromAmino: ({
      buyer,
      orders,
    }: AminoMsgBuyDirect['value']): Partial<MsgBuyDirect> => {
      return {
        buyer,
        orders: orders.map(b => {
          return {
            $type: b.$type,
            sellOrderId: longify(b.sell_order_id || 0),
            quantity: b.quantity || '0',
            bidPrice: b.bid_price && {
              $type: 'cosmos.base.v1beta1.Coin',
              amount: b.bid_price?.amount || '0',
              denom: b.bid_price?.denom || '',
            },
            disableAutoRetire: Boolean(b.disable_auto_retire),
            retirementJurisdiction: b.retirement_jurisdiction || '',
          };
        }),
      };
    },
  };
}
