import { AminoMsg } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import { MsgUpdateClassMetadata } from '../../../../generated/regen/ecocredit/v1/tx';

const msgUpdateClassMetadataAminoType = 'regen.core/MsgUpdateClassMetadata';

export interface AminoMsgUpdateClassMetadata extends AminoMsg {
  readonly type: typeof msgUpdateClassMetadataAminoType;
  readonly value: {
    readonly admin: string;
    readonly class_id: string;
    readonly new_metadata: string;
  };
}

export function isAminoMsgUpdateClassMetadata(
  msg: AminoMsg,
): msg is AminoMsgUpdateClassMetadata {
  return msg.type === msgUpdateClassMetadataAminoType;
}

let updateClassMetadataConverter: AminoConverter = {
  aminoType: msgUpdateClassMetadataAminoType,
  toAmino: ({
    admin,
    classId,
    newMetadata,
  }: MsgUpdateClassMetadata): AminoMsgUpdateClassMetadata['value'] => {
    return {
      admin,
      class_id: classId,
      new_metadata: newMetadata,
    };
  },
  fromAmino: ({
    admin,
    class_id,
    new_metadata,
  }: AminoMsgUpdateClassMetadata['value']): Partial<MsgUpdateClassMetadata> => {
    return {
      admin,
      classId: class_id,
      newMetadata: new_metadata,
    };
  },
};
