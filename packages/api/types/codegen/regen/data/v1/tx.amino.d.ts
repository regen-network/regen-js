import { AminoMsg } from "@cosmjs/amino";
import { MsgAnchor, MsgAttest, MsgDefineResolver, MsgRegisterResolver } from "./tx";
export interface AminoMsgAnchor extends AminoMsg {
    type: "/regen.data.v1.MsgAnchor";
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
    type: "/regen.data.v1.MsgAttest";
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
    type: "/regen.data.v1.MsgDefineResolver";
    value: {
        manager: string;
        resolver_url: string;
    };
}
export interface AminoMsgRegisterResolver extends AminoMsg {
    type: "/regen.data.v1.MsgRegisterResolver";
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
export declare const AminoConverter: {
    "/regen.data.v1.MsgAnchor": {
        aminoType: string;
        toAmino: ({ sender, contentHash }: MsgAnchor) => AminoMsgAnchor["value"];
        fromAmino: ({ sender, content_hash }: AminoMsgAnchor["value"]) => MsgAnchor;
    };
    "/regen.data.v1.MsgAttest": {
        aminoType: string;
        toAmino: ({ attestor, contentHashes }: MsgAttest) => AminoMsgAttest["value"];
        fromAmino: ({ attestor, content_hashes }: AminoMsgAttest["value"]) => MsgAttest;
    };
    "/regen.data.v1.MsgDefineResolver": {
        aminoType: string;
        toAmino: ({ manager, resolverUrl }: MsgDefineResolver) => AminoMsgDefineResolver["value"];
        fromAmino: ({ manager, resolver_url }: AminoMsgDefineResolver["value"]) => MsgDefineResolver;
    };
    "/regen.data.v1.MsgRegisterResolver": {
        aminoType: string;
        toAmino: ({ manager, resolverId, contentHashes }: MsgRegisterResolver) => AminoMsgRegisterResolver["value"];
        fromAmino: ({ manager, resolver_id, content_hashes }: AminoMsgRegisterResolver["value"]) => MsgRegisterResolver;
    };
};
