import { AminoMsg } from "@cosmjs/amino";
import { AminoConverter } from "@cosmjs/stargate";
import { MsgPut } from "../../../../../generated/regen/ecocredit/basket/v1/tx";
import { BasketCredit } from "../../../../../generated/regen/ecocredit/basket/v1/types";

const msgPutAminoType = 'regen.basket/MsgPut';

export const putTypeUrl = "/" + MsgPut.$type;

export interface AminoBasketCredit {
    $type: BasketCredit['$type'];
    batch_denom: string;
    amount: string;
}

export interface AminoMsgPut extends AminoMsg {
    readonly type: typeof msgPutAminoType;
    readonly value: {
        readonly owner: string;
        readonly basket_denom: string;
        readonly credits: AminoBasketCredit[];
    }
}

export function isAminoMsgPut(msg: AminoMsg): msg is AminoMsgPut {
    return msg.type === msgPutAminoType;
}

export let putConverter: AminoConverter = {
    aminoType: msgPutAminoType,
    toAmino: ({owner, basketDenom, credits}: MsgPut): AminoMsgPut['value'] => {
        return {
            owner,
            basket_denom: basketDenom,
            credits: credits.map(c => {
                return {
                    $type: c.$type,
                    batch_denom: c.batchDenom,
                    amount: c.amount,
                }
            })
        }
    },
    fromAmino: ({owner, basket_denom, credits}: AminoMsgPut['value']): Partial<MsgPut> => {
        return {
            owner,
            basketDenom: basket_denom,
            credits: credits.map(c => {
                return {
                    $type: c.$type,
                    batchDenom: c.batch_denom,
                    amount: c.amount
                }
            })
        }
    }
}