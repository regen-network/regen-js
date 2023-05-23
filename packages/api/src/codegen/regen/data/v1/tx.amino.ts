import { digestAlgorithmFromJSON, rawMediaTypeFromJSON, graphCanonicalizationAlgorithmFromJSON, graphMerkleTreeFromJSON } from "./types";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgAnchor, MsgAttest, MsgDefineResolver, MsgRegisterResolver } from "./tx";
export interface AminoMsgAnchor extends AminoMsg {
  type: "regen-ledger/MsgAnchor";
  value: {
    sender: string;
    content_hash: {
      raw: {
        hash: Uint8Array;
        digest_algorithm: number;
        media_type: number;
      };
      graph: {
        hash: Uint8Array;
        digest_algorithm: number;
        canonicalization_algorithm: number;
        merkle_tree: number;
      };
    };
  };
}
export interface AminoMsgAttest extends AminoMsg {
  type: "regen-ledger/MsgAttest";
  value: {
    attestor: string;
    content_hashes: {
      hash: Uint8Array;
      digest_algorithm: number;
      canonicalization_algorithm: number;
      merkle_tree: number;
    }[];
  };
}
export interface AminoMsgDefineResolver extends AminoMsg {
  type: "regen-ledger/MsgDefineResolver";
  value: {
    manager: string;
    resolver_url: string;
  };
}
export interface AminoMsgRegisterResolver extends AminoMsg {
  type: "regen-ledger/MsgRegisterResolver";
  value: {
    manager: string;
    resolver_id: string;
    content_hashes: {
      raw: {
        hash: Uint8Array;
        digest_algorithm: number;
        media_type: number;
      };
      graph: {
        hash: Uint8Array;
        digest_algorithm: number;
        canonicalization_algorithm: number;
        merkle_tree: number;
      };
    }[];
  };
}
export const AminoConverter = {
  "/regen.data.v1.MsgAnchor": {
    aminoType: "regen-ledger/MsgAnchor",
    toAmino: ({
      sender,
      contentHash
    }: MsgAnchor): AminoMsgAnchor["value"] => {
      return {
        sender,
        content_hash: {
          raw: {
            hash: contentHash.raw.hash,
            digest_algorithm: contentHash.raw.digestAlgorithm,
            media_type: contentHash.raw.mediaType
          },
          graph: {
            hash: contentHash.graph.hash,
            digest_algorithm: contentHash.graph.digestAlgorithm,
            canonicalization_algorithm: contentHash.graph.canonicalizationAlgorithm,
            merkle_tree: contentHash.graph.merkleTree
          }
        }
      };
    },
    fromAmino: ({
      sender,
      content_hash
    }: AminoMsgAnchor["value"]): MsgAnchor => {
      return {
        sender,
        contentHash: {
          raw: {
            hash: content_hash.raw.hash,
            digestAlgorithm: digestAlgorithmFromJSON(content_hash.raw.digest_algorithm),
            mediaType: rawMediaTypeFromJSON(content_hash.raw.media_type)
          },
          graph: {
            hash: content_hash.graph.hash,
            digestAlgorithm: digestAlgorithmFromJSON(content_hash.graph.digest_algorithm),
            canonicalizationAlgorithm: graphCanonicalizationAlgorithmFromJSON(content_hash.graph.canonicalization_algorithm),
            merkleTree: graphMerkleTreeFromJSON(content_hash.graph.merkle_tree)
          }
        }
      };
    }
  },
  "/regen.data.v1.MsgAttest": {
    aminoType: "regen-ledger/MsgAttest",
    toAmino: ({
      attestor,
      contentHashes
    }: MsgAttest): AminoMsgAttest["value"] => {
      return {
        attestor,
        content_hashes: contentHashes.map(el0 => ({
          hash: el0.hash,
          digest_algorithm: el0.digestAlgorithm,
          canonicalization_algorithm: el0.canonicalizationAlgorithm,
          merkle_tree: el0.merkleTree
        }))
      };
    },
    fromAmino: ({
      attestor,
      content_hashes
    }: AminoMsgAttest["value"]): MsgAttest => {
      return {
        attestor,
        contentHashes: content_hashes.map(el0 => ({
          hash: el0.hash,
          digestAlgorithm: digestAlgorithmFromJSON(el0.digest_algorithm),
          canonicalizationAlgorithm: graphCanonicalizationAlgorithmFromJSON(el0.canonicalization_algorithm),
          merkleTree: graphMerkleTreeFromJSON(el0.merkle_tree)
        }))
      };
    }
  },
  "/regen.data.v1.MsgDefineResolver": {
    aminoType: "regen-ledger/MsgDefineResolver",
    toAmino: ({
      manager,
      resolverUrl
    }: MsgDefineResolver): AminoMsgDefineResolver["value"] => {
      return {
        manager,
        resolver_url: resolverUrl
      };
    },
    fromAmino: ({
      manager,
      resolver_url
    }: AminoMsgDefineResolver["value"]): MsgDefineResolver => {
      return {
        manager,
        resolverUrl: resolver_url
      };
    }
  },
  "/regen.data.v1.MsgRegisterResolver": {
    aminoType: "regen-ledger/MsgRegisterResolver",
    toAmino: ({
      manager,
      resolverId,
      contentHashes
    }: MsgRegisterResolver): AminoMsgRegisterResolver["value"] => {
      return {
        manager,
        resolver_id: resolverId.toString(),
        content_hashes: contentHashes.map(el0 => ({
          raw: {
            hash: el0.raw.hash,
            digest_algorithm: el0.raw.digestAlgorithm,
            media_type: el0.raw.mediaType
          },
          graph: {
            hash: el0.graph.hash,
            digest_algorithm: el0.graph.digestAlgorithm,
            canonicalization_algorithm: el0.graph.canonicalizationAlgorithm,
            merkle_tree: el0.graph.merkleTree
          }
        }))
      };
    },
    fromAmino: ({
      manager,
      resolver_id,
      content_hashes
    }: AminoMsgRegisterResolver["value"]): MsgRegisterResolver => {
      return {
        manager,
        resolverId: Long.fromString(resolver_id),
        contentHashes: content_hashes.map(el0 => ({
          raw: {
            hash: el0.raw.hash,
            digestAlgorithm: digestAlgorithmFromJSON(el0.raw.digest_algorithm),
            mediaType: rawMediaTypeFromJSON(el0.raw.media_type)
          },
          graph: {
            hash: el0.graph.hash,
            digestAlgorithm: digestAlgorithmFromJSON(el0.graph.digest_algorithm),
            canonicalizationAlgorithm: graphCanonicalizationAlgorithmFromJSON(el0.graph.canonicalization_algorithm),
            merkleTree: graphMerkleTreeFromJSON(el0.graph.merkle_tree)
          }
        }))
      };
    }
  }
};