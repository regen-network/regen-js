import { AminoMsg, Coin as AminoCoin } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import {
  MsgSell,
  MsgSell_Order,
} from '../../../../../generated/regen/ecocredit/marketplace/v1/tx';

const msgSellAminoType = 'regen.marketplace/MsgSell';

export const sellTypeUrl = '/' + MsgSell.$type;

interface AminoSell_Order {
  $type: MsgSell_Order['$type'];
  batch_denom: string;
  quantity: string;
  ask_price?: AminoCoin;
  disable_auto_retire: boolean;
  expiration?: Date;
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
            $type: o.$type,
            batch_denom: o.batchDenom,
            quantity: o.quantity,
            ask_price: o.askPrice,
            disable_auto_retire: o.disableAutoRetire,
            expiration: o.expiration,
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
            $type: o.$type,
            batchDenom: o.batch_denom,
            quantity: o.quantity,
            askPrice: o.ask_price && {
              $type: 'cosmos.base.v1beta1.Coin',
              amount: o.ask_price.amount,
              denom: o.ask_price.denom,
            },
            disableAutoRetire: o.disable_auto_retire,
            expiration: o.expiration,
          };
        }),
      };
    },
  };
}
