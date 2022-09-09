import { AminoMsg, Coin as AminoCoin } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import { MsgCreateProject } from '../../../../generated/regen/ecocredit/v1/tx';

const msgCreateProjectAminoType = 'regen.core/MsgCreateProject';

export const createProjectTypeUrl = "/" + MsgCreateProject.$type;

export interface AminoMsgCreateProject extends AminoMsg {
    readonly type: typeof  msgCreateProjectAminoType;
    readonly value: {
      readonly admin: string;
      readonly class_id: string;
      readonly metadata: string;
      readonly jurisdiction: string;
      readonly reference_id: string;
    }
  }

  export function isAminoMsgCreateProject(
    msg: AminoMsg,
  ): msg is AminoMsgCreateProject {
    return msg.type === msgCreateProjectAminoType;
  }

export let createProjectConverter: AminoConverter = {
    aminoType: msgCreateProjectAminoType,
    toAmino: ({admin, classId, metadata, jurisdiction, referenceId}: MsgCreateProject): AminoMsgCreateProject['value'] => {
        return {
            admin: admin,
            class_id: classId,
            metadata: metadata,
            jurisdiction: jurisdiction,
            reference_id: referenceId,
        }
    },
    fromAmino: ({admin, class_id, metadata, jurisdiction, reference_id}: AminoMsgCreateProject['value']): Partial<MsgCreateProject> => {
        return {
            admin,
            classId: class_id,
            metadata,
            jurisdiction,
            referenceId: reference_id
        };
    }
}