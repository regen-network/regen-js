import { AminoMsg } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import { MsgUpdateProjectMetadata } from '../../../../generated/regen/ecocredit/v1/tx';

const msgUpdateProjectMetadataAminoType = 'regen/MsgUpdateProjectMetadata';

export const updateProjectMetadataTypeUrl =
  '/' + MsgUpdateProjectMetadata.$type;

export interface AminoMsgUpdateProjectMetadata extends AminoMsg {
  readonly type: typeof msgUpdateProjectMetadataAminoType;
  readonly value: {
    readonly admin: string;
    readonly project_id: string;
    readonly new_metadata: string;
  };
}

export function isAminoMsgUpdateProjectMetadata(
  msg: AminoMsg,
): msg is AminoMsgUpdateProjectMetadata {
  return msg.type === msgUpdateProjectMetadataAminoType;
}

export function updateProjectMetadataConverter(): AminoConverter {
  return {
    aminoType: msgUpdateProjectMetadataAminoType,
    toAmino: ({
      admin,
      projectId,
      newMetadata,
    }: MsgUpdateProjectMetadata): AminoMsgUpdateProjectMetadata['value'] => {
      return {
        admin,
        project_id: projectId,
        new_metadata: newMetadata,
      };
    },
    fromAmino: ({
      admin,
      project_id,
      new_metadata,
    }: AminoMsgUpdateProjectMetadata['value']): Partial<MsgUpdateProjectMetadata> => {
      return {
        admin,
        projectId: project_id,
        newMetadata: new_metadata,
      };
    },
  };
}
