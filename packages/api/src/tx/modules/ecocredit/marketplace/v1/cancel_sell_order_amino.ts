import { AminoMsg } from "@cosmjs/amino";
import { AminoConverter } from "@cosmjs/stargate";
import { MsgCancelSellOrder } from "../../../../../generated/regen/ecocredit/marketplace/v1/tx";

const msgCancelSellOrderAminoType = 'regen.marketplace/MsgCancelSellOrder';

export const cancelSellOrderTypeUrl = "/" + MsgCancelSellOrder.$type;

export interface AminoMsgCancelSellOrder extends AminoMsg {
    readonly type: typeof msgCancelSellOrderAminoType;
    readonly value: {
        readonly seller: string;
        readonly sell_order_id: Long;
    }
}

export function isAminoMsgCancelSellOrder(msg: AminoMsg): msg is AminoMsgCancelSellOrder {
    return msg.type === msgCancelSellOrderAminoType;
}

export let cancelSellOrderConverter: AminoConverter = {
    aminoType: msgCancelSellOrderAminoType,
    toAmino: ({seller, sellOrderId}: MsgCancelSellOrder): AminoMsgCancelSellOrder['value'] => {
        return {
            seller,
            sell_order_id: sellOrderId,
        }
    },
    fromAmino: ({seller, sell_order_id}: AminoMsgCancelSellOrder['value']): Partial<MsgCancelSellOrder> => {
        return {
            seller,
            sellOrderId: sell_order_id,
        }
    }
}