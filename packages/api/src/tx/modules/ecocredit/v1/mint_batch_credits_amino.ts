import { AminoMsg } from "@cosmjs/amino";
import { AminoConverter } from "@cosmjs/stargate";
import { MsgMintBatchCredits } from "../../../../generated/regen/ecocredit/v1/tx";
import { BatchIssuance } from "../../../../generated/regen/ecocredit/v1/types";
import { AminoBatchIssuance, AminoOriginTx } from "./create_batch_amino";

const msgMintBatchCreditsAminoType = 'regen.core/MsgMintBatchCredits'

export interface AminoMsgMintBatchCredits extends AminoMsg {
    readonly type: typeof msgMintBatchCreditsAminoType;
    readonly value: {
        readonly issuer: string;
        readonly batch_denom: string;
        readonly issuance: AminoBatchIssuance[];
        readonly origin_tx: AminoOriginTx | undefined;
    }
}

export function isAminoMsgMintBatchCredits(
    msg: AminoMsg,
  ): msg is AminoMsgMintBatchCredits {
    return msg.type === msgMintBatchCreditsAminoType;
}

let mintBatchCreditsConverter: AminoConverter = {
    aminoType: msgMintBatchCreditsAminoType,
    toAmino: ({issuer, batchDenom, issuance, originTx}: MsgMintBatchCredits): AminoMsgMintBatchCredits['value'] => {
        return {
            issuer,
            batch_denom: batchDenom,
            issuance: issuance.map(i => {
                return {
                    $type: i.$type,
                    recipient: i.recipient,
                    tradable_amount: i.tradableAmount,
                    retired_amount: i.retiredAmount,
                    retirement_jurisdiction: i.retirementJurisdiction,
                }
            }),
            origin_tx: originTx && {
                $type: originTx?.$type,
                id: originTx?.id,
                source: originTx?.source
            },
        };
    },
    fromAmino: ({issuer, batch_denom, issuance, origin_tx}: AminoMsgMintBatchCredits['value']): Partial<MsgMintBatchCredits> => {
        return {
            issuer,
            batchDenom: batch_denom,
            issuance: issuance.map(i => {
                return {
                    $type: i.$type,
                    recipient: i.recipient,
                    tradableAmount: i.tradable_amount,
                    retiredAmount: i.retired_amount,
                    retirementJurisdiction: i.retirement_jurisdiction
                };
            }),
            originTx: origin_tx
        }
    }
}