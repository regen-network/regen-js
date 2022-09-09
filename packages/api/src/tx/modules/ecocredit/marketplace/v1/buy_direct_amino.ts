import { AminoMsg, Coin as AminoCoin } from "@cosmjs/amino";
import { AminoConverter } from "@cosmjs/stargate";
import { MsgBuyDirect, MsgBuyDirect_Order } from "../../../../../generated/regen/ecocredit/marketplace/v1/tx";

const msgBuyDirectAmnioType = 'regen.marketplace/MsgBuyDirect';

export const buyDirectTypeUrl = "/" + MsgBuyDirect.$type;

interface AminoBuyDirect_Order {
    $type: MsgBuyDirect_Order['$type'];
    sell_order_id: Long;
    quantity: string;
    bid_price?: AminoCoin;
    disable_auto_retire: boolean;
    retirement_jurisdiction: string;
}

export interface AminoMsgBuyDirect extends AminoMsg {
    readonly type: typeof msgBuyDirectAmnioType;
    readonly value: {
        readonly buyer: string;
        readonly orders: AminoBuyDirect_Order[];
    }
}

export function isAminoMsgBuyDirect(msg: AminoMsg): msg is AminoMsgBuyDirect {
    return msg.type === msgBuyDirectAmnioType;
}

export let buyDirectConverter: AminoConverter = {
    aminoType: msgBuyDirectAmnioType,
    toAmino: ({buyer, orders}: MsgBuyDirect): AminoMsgBuyDirect['value'] => {
        return {
            buyer,
            orders: orders.map(b => {
                return {
                    $type: b.$type,
                    sell_order_id: b.sellOrderId,
                    quantity: b.quantity,
                    bid_price: b.bidPrice,
                    disable_auto_retire: b.disableAutoRetire,
                    retirement_jurisdiction: b.retirementJurisdiction
                }
            })
        }
    },
    fromAmino: ({buyer, orders}: AminoMsgBuyDirect['value']): Partial<MsgBuyDirect> => {
        return {
            buyer,
            orders: orders.map(b => {
                return {
                    $type: b.$type,
                    sellOrderId: b.sell_order_id,
                    quantity: b.quantity,
                    bidPrice: b.bid_price && {
                        $type: "cosmos.base.v1beta1.Coin",
                        amount: b.bid_price.amount,
                        denom: b.bid_price.denom,
                    },
                    disableAutoRetire: b.disable_auto_retire,
                    retirementJurisdiction: b.retirement_jurisdiction,
                }
            })
        }
    }
}
