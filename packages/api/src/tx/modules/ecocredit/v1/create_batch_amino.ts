import { AminoMsg } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import { MsgCreateBatch } from '../../../../generated/regen/ecocredit/v1/tx';
import {
  BatchIssuance,
  OriginTx,
} from '../../../../generated/regen/ecocredit/v1/types';

const msgCreateBatchAminoType = 'regen.core/MsgCreateBatch';

export const createBatchTypeUrl = '/' + MsgCreateBatch.$type;

export interface AminoBatchIssuance {
  recipient: string;
  tradable_amount?: string;
  retired_amount?: string;
  retirement_jurisdiction?: string;
}

export interface AminoOriginTx {
  id?: string;
  source?: string;
}

export interface AminoMsgCreateBatch extends AminoMsg {
  readonly type: typeof msgCreateBatchAminoType;
  readonly value: {
    readonly issuer: string;
    readonly project_id: string;
    readonly issuance: AminoBatchIssuance[];
    readonly metadata: string;
    readonly start_date?: Date;
    readonly end_date?: Date;
    readonly open: boolean;
    readonly origin_tx?: AminoOriginTx;
    readonly note: string;
  };
}

export function isAminoMsgCreateBatch(
  msg: AminoMsg,
): msg is AminoMsgCreateBatch {
  return msg.type === msgCreateBatchAminoType;
}

export function createBatchConverter(): AminoConverter {
  return {
    aminoType: msgCreateBatchAminoType,
    toAmino: ({
      issuer,
      projectId,
      issuance,
      metadata,
      startDate,
      endDate,
      open,
      originTx,
      note,
    }: MsgCreateBatch): AminoMsgCreateBatch['value'] => {
      return {
        issuer,
        project_id: projectId,
        issuance: issuance.map(i => {
          return {
            recipient: i.recipient,
            tradable_amount: i.tradableAmount || undefined,
            retired_amount: i.retiredAmount || undefined,
            retirement_jurisdiction: i.retirementJurisdiction || undefined,
          };
        }),
        metadata,
        start_date: startDate,
        end_date: endDate,
        open,
        origin_tx: undefined,
        note,
      };
    },
    fromAmino: ({
      issuer,
      project_id,
      issuance,
      metadata,
      start_date,
      end_date,
      open,
      origin_tx,
      note,
    }: AminoMsgCreateBatch['value']): Partial<MsgCreateBatch> => {
      return {
        issuer,
        projectId: project_id,
        issuance: issuance.map(i => {
          return {
            $type: BatchIssuance.$type,
            recipient: i.recipient,
            tradableAmount: i.tradable_amount || '',
            retiredAmount: i.retired_amount || '',
            retirementJurisdiction: i.retirement_jurisdiction || '',
          };
        }) || undefined,
        metadata,
        startDate: start_date,
        endDate: end_date,
        open,
        originTx: undefined,
        note,
      };
    },
  };
}
