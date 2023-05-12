import { AminoMsg } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import { MsgBridge } from '../../../../generated/regen/ecocredit/v1/tx';
import { Credits } from '../../../../generated/regen/ecocredit/v1/types';
import { AminoCredits } from './msg_cancel';

const msgBridgeAminoType = 'regen/MsgBridge';

export const bridgeTypeUrl = '/' + MsgBridge.$type;

export interface AminoMsgBridge extends AminoMsg {
  readonly type: typeof msgBridgeAminoType;
  readonly value: {
    // readonly $type: string; TODO: we will leave these off until nested types can be supported
    readonly owner: string;
    readonly target?: string;
    readonly recipient?: string;
    readonly credits: AminoCredits[];
  };
}

export function isAminoMsgBridge(msg: AminoMsg): msg is AminoMsgBridge {
  return msg.type === msgBridgeAminoType;
}

export function bridgeConverter(): AminoConverter {
  return {
    aminoType: msgBridgeAminoType,
    toAmino: ({
      owner,
      target,
      recipient,
      credits,
    }: MsgBridge): AminoMsgBridge['value'] => {
      return {
        owner,
        target,
        recipient,
        credits: credits.map(credit => {
          return {
            batch_denom: credit.batchDenom,
            amount: credit.amount,
          };
        }),
      };
    },
    fromAmino: ({
      owner,
      target,
      recipient,
      credits,
    }: AminoMsgBridge['value']): Partial<MsgBridge> => {
      return {
        owner,
        target,
        recipient,
        credits: credits.map(credit => {
          return {
            $type: Credits.$type,
            batchDenom: credit.batch_denom,
            amount: credit.amount,
          };
        }),
      };
    },
  };
}
