import { AminoMsg } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import {
  MsgSell,
  MsgSell_Order,
} from '../../../../../generated/regen/ecocredit/marketplace/v1/tx';
import { AminoDate } from '../../../converter-utils';

const msgSellAminoType = 'regen.marketplace/MsgSell';

export const sellTypeUrl = '/' + MsgSell.$type;

interface AminoSell_Order {
  batch_denom: string;
  quantity: string;
  ask_price?: AminoCoin;
  disable_auto_retire?: boolean;
  expiration?: string;
}

export interface AminoCoin {
  amount?: string;
  denom?: string;
}

export interface AminoMsgSell extends AminoMsg {
  readonly type: typeof msgSellAminoType;
  readonly value: {
    readonly seller: string;
    readonly orders: AminoSell_Order[];
  };
}

export function isAminoMsgSell(msg: AminoMsg): msg is AminoMsgSell {
  return msg.type === msgSellAminoType;
}

export function sellConverter(): AminoConverter {
  return {
    aminoType: msgSellAminoType,
    toAmino: ({ seller, orders }: MsgSell): AminoMsgSell['value'] => {
      return {
        seller,
        orders: orders.map(o => {
          return {
            batch_denom: o.batchDenom,
            quantity: o.quantity,
            ask_price: {
              amount: o.askPrice?.amount || undefined,
              denom: o.askPrice?.denom || undefined,
            },
            disable_auto_retire: o?.disableAutoRetire || undefined,
            expiration: AminoDate(o.expiration) || undefined,
          };
        }),
      };
    },
    fromAmino: ({
      seller,
      orders,
    }: AminoMsgSell['value']): Partial<MsgSell> => {
      return {
        seller,
        orders: orders.map(o => {
          return {
            $type: MsgSell_Order.$type,
            batchDenom: o.batch_denom,
            quantity: o.quantity,
            askPrice: o.ask_price && {
              $type: 'cosmos.base.v1beta1.Coin',
              amount: o.ask_price.amount || '0',
              denom: o.ask_price.denom || '',
            },
            disableAutoRetire: Boolean(o.disable_auto_retire),
            expiration: o.expiration ? new Date(o.expiration) : undefined,
          };
        }),
      };
    },
  };
}
