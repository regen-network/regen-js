import { AminoMsg } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import { MsgCreateBatch } from '../../../../generated/regen/ecocredit/v1/tx';
import { BatchIssuance, OriginTx } from '../../../../generated/regen/ecocredit/v1/types';
import { AminoDate } from '../../../converter-utils';

const msgCreateBatchAminoType = 'regen.core/MsgCreateBatch';

export const createBatchTypeUrl = '/' + MsgCreateBatch.$type

export interface AminoBatchIssuance {
  recipient?: string;
  tradable_amount?: string;
  retired_amount?: string;
  retirement_jurisdiction?: string;
}

export interface AminoOriginTx {
  id?: string;
  source?: string;
  contract?: string;
  note?: string;
}

export interface AminoMsgCreateBatch extends AminoMsg {
  readonly type: typeof msgCreateBatchAminoType;
  readonly value: {
    readonly issuer: string;
    readonly project_id: string;
    readonly issuance: AminoBatchIssuance[];
    readonly metadata: string;
    readonly start_date?: string;
    readonly end_date?: string;
    readonly open: boolean;
    readonly origin_tx?: AminoOriginTx;
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
    }: MsgCreateBatch): AminoMsgCreateBatch['value'] => {
      return {
        issuer,
        project_id: projectId,
        issuance: issuance.map(i => {
          return {
            recipient: i.recipient || undefined,
            tradable_amount: i.tradableAmount || undefined,
            retired_amount: i.retiredAmount || undefined,
            retirement_jurisdiction: i.retirementJurisdiction || undefined,
          }
        }),
        metadata,
        start_date: AminoDate(startDate),
        end_date: AminoDate(endDate),
        open,
        origin_tx: {
          id: originTx?.id || undefined,
          source: originTx?.source || undefined,
          contract: originTx?.contract || undefined,
          note: originTx?.note || undefined,
        },
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
    }: AminoMsgCreateBatch['value']): Partial<MsgCreateBatch> => {
      const start: Date = start_date === undefined ? new Date() : new Date(start_date);
      const end: Date = end_date === undefined ? new Date() : new Date(end_date);
      return  {
        issuer,
        projectId: project_id,
        issuance: issuance.map(i => {
          return {
            $type: BatchIssuance.$type,
            recipient: i.recipient || '',
            tradableAmount: i.tradable_amount || '',
            retiredAmount: i.retired_amount || '',
            retirementJurisdiction: i.retirement_jurisdiction || '',
          }
        }),
        metadata,
        startDate: start,
        endDate: end,
        open,
        originTx: origin_tx && {
          $type: OriginTx.$type,
          id: origin_tx.id || '',
          source: origin_tx.source || '',
          contract: origin_tx.contract || '',
          note: origin_tx.note || '',
        },
      };
    },
  };
}
