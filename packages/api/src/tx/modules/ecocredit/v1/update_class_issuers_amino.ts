import { AminoMsg } from "@cosmjs/amino";
import { AminoConverter } from "@cosmjs/stargate";
import { MsgUpdateClassIssuers } from "../../../../generated/regen/ecocredit/v1/tx";

const msgUpdateClassIssuersAminoType = 'regen.core/MsgUpdateClassIssuers';

export const updateClassIssuersTypeUrl = "/" + MsgUpdateClassIssuers.$type;

export interface AminoMsgUpdateClassIssuers extends AminoMsg {
    readonly type: typeof msgUpdateClassIssuersAminoType;
    readonly value: {
        readonly admin: string;
        readonly class_id: string;
        readonly add_issuers: string[];
        readonly remove_issuers: string[];
    }
}

export function isAminoMsgUpdateClassIssuers(msg: AminoMsg): msg is AminoMsgUpdateClassIssuers {
    return msg.type === msgUpdateClassIssuersAminoType;
}

export let updateClassIssuersConverter: AminoConverter = {
    aminoType: msgUpdateClassIssuersAminoType,
    toAmino: ({admin, classId, addIssuers, removeIssuers}: MsgUpdateClassIssuers): AminoMsgUpdateClassIssuers['value'] => {
        return {
            admin, 
            class_id: classId,
            add_issuers: addIssuers,
            remove_issuers: removeIssuers,
        }
    },
    fromAmino: ({admin, class_id, add_issuers, remove_issuers}: AminoMsgUpdateClassIssuers['value']): Partial<MsgUpdateClassIssuers> => {
        return {
            admin,
            classId: class_id,
            addIssuers: add_issuers,
            removeIssuers: remove_issuers,
        }
    }
}