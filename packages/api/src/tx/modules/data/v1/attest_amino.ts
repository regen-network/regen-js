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
  hash: string;
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
        hash: base64FromBytes(contentHash.hash),
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
        hash: bytesFromBase64(contentHash.hash),
        digestAlgorithm: contentHash.digest_algorithm || 0,
        canonicalizationAlgorithm: contentHash.canonicalization_algorithm || 0,
        merkleTree: contentHash.merkle_tree || 0,
      })),
    }),
  };
}

function bytesFromBase64(b64: string): Uint8Array {
  const bin = window.atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach(byte => {
    bin.push(String.fromCharCode(byte));
  });
  return window.btoa(bin.join(''));
}
