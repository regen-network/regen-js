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
  $type: BatchIssuance['$type'];
  recipient: string;
  tradable_amount: string;
  retired_amount: string;
  retirement_jurisdiction: string;
}

export interface AminoOriginTx {
  $type: OriginTx['$type'];
  id: string;
  source: string;
}

export interface AminoMsgCreateBatch extends AminoMsg {
  readonly type: typeof msgCreateBatchAminoType;
  readonly value: {
    readonly issuer: string;
    readonly project_id: string;
    readonly issuance: AminoBatchIssuance[];
    readonly metadata: string;
    readonly start_date: Date | undefined;
    readonly end_date: Date | undefined;
    readonly open: boolean;
    readonly origin_tx: AminoOriginTx | undefined;
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
            $type: i.$type,
            recipient: i.recipient,
            tradable_amount: i.tradableAmount,
            retired_amount: i.retiredAmount,
            retirement_jurisdiction: i.retirementJurisdiction,
          };
        }),
        metadata,
        start_date: startDate,
        end_date: endDate,
        open,
        origin_tx: originTx && {
          $type: originTx?.$type,
          id: originTx?.id,
          source: originTx?.source,
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
      return {
        issuer,
        projectId: project_id,
        issuance: issuance.map(i => {
          return {
            $type: i.$type,
            recipient: i.recipient,
            tradableAmount: i.tradable_amount,
            retiredAmount: i.retired_amount,
            retirementJurisdiction: i.retirement_jurisdiction,
          };
        }),
        metadata,
        startDate: start_date,
        endDate: end_date,
        open,
        originTx: origin_tx,
      };
    },
  };
}
