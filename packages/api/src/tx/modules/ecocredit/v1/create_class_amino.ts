import { AminoMsg, Coin as AminoCoin } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import { MsgCreateClass } from '../../../../generated/regen/ecocredit/v1/tx';
import { Coin } from '../../../../generated/cosmos/base/v1beta1/coin';

const msgCreateClassAminoType = 'regen.core/MsgCreateClass';

export const createClassTypeUrl = "/" + MsgCreateClass.$type;

export interface AminoMsgCreateClass extends AminoMsg {
    readonly type: typeof msgCreateClassAminoType;
    readonly value: {
        readonly admin: string;
        readonly issuers: string[];
        readonly metadata: string;
        readonly credit_type_abbrev: string;
        readonly fee?: AminoCoin;
    };
}

export function isAminoMsgCreateClass(
    msg: AminoMsg,
): msg is AminoMsgCreateClass {
    return msg.type === msgCreateClassAminoType;
}

export let createClassConverter: AminoConverter = {
    aminoType: msgCreateClassAminoType,
    toAmino: ({
        admin,
        issuers,
        metadata,
        creditTypeAbbrev,
        fee,
    }: MsgCreateClass): AminoMsgCreateClass['value'] => {
        return {
            admin,
            issuers,
            metadata,
            credit_type_abbrev: creditTypeAbbrev,
            fee: fee && { amount: fee.amount, denom: fee.denom },
        };
    },
    fromAmino: ({
        admin,
        issuers,
        metadata,
        credit_type_abbrev,
        fee,
    }: AminoMsgCreateClass['value']): Partial<MsgCreateClass> => {
        return {
            admin,
            issuers,
            metadata,
            creditTypeAbbrev: credit_type_abbrev,
            fee: fee && Coin.fromPartial(fee),
        };
    },
}

