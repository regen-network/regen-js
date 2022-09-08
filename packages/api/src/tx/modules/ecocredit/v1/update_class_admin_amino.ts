import { AminoMsg } from "@cosmjs/amino";
import { AminoConverter } from "@cosmjs/stargate";
import { MsgUpdateClassAdmin } from "../../../../generated/regen/ecocredit/v1/tx";

const msgUpdateClassAdminAminoType = 'regen.core/MsgUpdateClassAdmin';

export interface AminoMsgUpdateClassAdmin extends AminoMsg {
    readonly type: typeof msgUpdateClassAdminAminoType;
    readonly value: {
        readonly admin: string;
        readonly class_id: string;
        readonly new_admin: string;
    }
}

export function isAminoMsgUpdateClassAdmin(msg: AminoMsg): msg is AminoMsgUpdateClassAdmin {
    return msg.type === msgUpdateClassAdminAminoType;
}

let updateClassAdminConverter: AminoConverter = {
    aminoType: msgUpdateClassAdminAminoType,
    toAmino: ({admin, classId, newAdmin}: MsgUpdateClassAdmin): AminoMsgUpdateClassAdmin['value'] => {
        return {
            admin,
            class_id: classId,
            new_admin: newAdmin,
        }
    },
    fromAmino: ({admin, class_id, new_admin}: AminoMsgUpdateClassAdmin['value']): Partial<MsgUpdateClassAdmin> => {
        return {
            admin,
            classId: class_id,
            newAdmin: new_admin,
        }
    }
}