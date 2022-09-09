import { AminoMsg } from "@cosmjs/amino";
import { AminoConverter } from "@cosmjs/stargate";
import { MsgSealBatch } from "../../../../generated/regen/ecocredit/v1/tx";

const msgSealBatchAminoType = 'regen.core/MsgSealBatch';

export const sealBatchTypeUrl = "/" + MsgSealBatch.$type;

export interface AminoMsgSealBatch extends AminoMsg {
    readonly type: typeof msgSealBatchAminoType;
    readonly value: {
        readonly issuer: string;
        readonly batch_denom: string;
    }
}

export function isAminoMsgSealBatch(msg :AminoMsg): msg is AminoMsgSealBatch {
    return msg.type === msgSealBatchAminoType;
}

export let sealBatchConverter: AminoConverter = {
    aminoType: msgSealBatchAminoType,
    toAmino: ({issuer, batchDenom}: MsgSealBatch): AminoMsgSealBatch['value'] => {
        return {
            issuer,
            batch_denom: batchDenom
        }
    },
    fromAmino: ({issuer, batch_denom}: AminoMsgSealBatch['value']): Partial<MsgSealBatch> => {
        return {
            issuer,
            batchDenom: batch_denom
        }
    }
}