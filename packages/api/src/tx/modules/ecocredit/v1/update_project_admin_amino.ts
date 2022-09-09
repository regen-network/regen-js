import { AminoMsg } from "@cosmjs/amino";
import { AminoConverter } from "@cosmjs/stargate";
import { MsgUpdateProjectAdmin } from "../../../../generated/regen/ecocredit/v1/tx";


const msgUpdateProjectAdminAminoType = 'regen.core/MsgUpdateProjectAdmin';

export const updateProjectAdminTypeUrl = "/" + MsgUpdateProjectAdmin.$type;

export interface AminoMsgUpdateProjectAdmin extends AminoMsg {
    readonly type: typeof msgUpdateProjectAdminAminoType;
    readonly value: {
        readonly admin: string;
        readonly project_id: string;
        readonly new_admin: string;
    }
}

export function isAminoMsgUpdateProjectAdmin(msg: AminoMsg): msg is AminoMsgUpdateProjectAdmin {
    return msg.type === msgUpdateProjectAdminAminoType;
}

export let updateProjectAdminConverter: AminoConverter = {
    aminoType: msgUpdateProjectAdminAminoType,
    toAmino: ({admin, projectId, newAdmin}: MsgUpdateProjectAdmin): AminoMsgUpdateProjectAdmin['value'] => {
        return {
            admin,
            project_id: projectId,
            new_admin: newAdmin,
        }
    },
    fromAmino: ({admin, project_id, new_admin}: AminoMsgUpdateProjectAdmin['value']): Partial<MsgUpdateProjectAdmin> => {
        return {
            admin,
            projectId: project_id,
            newAdmin: new_admin,
        }
    }
}