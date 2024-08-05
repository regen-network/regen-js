import { AminoMsg } from '@cosmjs/amino';

import { MsgAttest } from '../../../../generated/regen/data/v1/tx';
import {
  DigestAlgorithm,
  GraphCanonicalizationAlgorithm,
  GraphMerkleTree,
  ContentHash_Graph,
} from '../../../../generated/regen/data/v1/types';
import { AminoConverter } from '@cosmjs/stargate';
import { omitDefault } from '../../converter-utils';

const msgAttestAminoType = 'regen-ledger/MsgAttest';

export const attestTypeUrl = '/' + MsgAttest.$type;

type AminoContentHash_Graph = {
  hash: Uint8Array;
  digest_algorithm?: DigestAlgorithm;
  canonicalization_algorithm?: GraphCanonicalizationAlgorithm;
  merkle_tree?: GraphMerkleTree;
};
export interface AminoMsgAttest extends AminoMsg {
  readonly type: typeof msgAttestAminoType;
  readonly value: {
    readonly attestor: string;
    readonly content_hashes: AminoContentHash_Graph[];
  };
}

export function attestConverter(): AminoConverter {
  return {
    aminoType: msgAttestAminoType,
    toAmino: ({
      attestor,
      contentHashes,
    }: MsgAttest): AminoMsgAttest['value'] => ({
      attestor,
      content_hashes: contentHashes.map(contentHash => ({
        hash: contentHash.hash,
        digest_algorithm: omitDefault(contentHash.digestAlgorithm),
        canonicalization_algorithm: omitDefault(
          contentHash.canonicalizationAlgorithm,
        ),
        merkle_tree: omitDefault(contentHash.merkleTree),
      })),
    }),
    fromAmino: ({
      attestor,
      content_hashes,
    }: AminoMsgAttest['value']): Partial<MsgAttest> => ({
      attestor,
      contentHashes: content_hashes.map(contentHash => ({
        $type: ContentHash_Graph.$type,
        hash: contentHash.hash,
        digestAlgorithm: contentHash.digest_algorithm || 0,
        canonicalizationAlgorithm: contentHash.canonicalization_algorithm || 0,
        merkleTree: contentHash.merkle_tree || 0,
      })),
    }),
  };
}
