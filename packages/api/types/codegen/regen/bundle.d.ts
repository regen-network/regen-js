import * as _114 from "./data/v1/events";
import * as _115 from "./data/v1/query";
import * as _116 from "./data/v1/state";
import * as _117 from "./data/v1/tx";
import * as _118 from "./data/v1/types";
import * as _119 from "./ecocredit/basket/v1/events";
import * as _120 from "./ecocredit/basket/v1/query";
import * as _121 from "./ecocredit/basket/v1/state";
import * as _122 from "./ecocredit/basket/v1/tx";
import * as _123 from "./ecocredit/basket/v1/types";
import * as _124 from "./ecocredit/marketplace/v1/events";
import * as _125 from "./ecocredit/marketplace/v1/query";
import * as _126 from "./ecocredit/marketplace/v1/state";
import * as _127 from "./ecocredit/marketplace/v1/tx";
import * as _128 from "./ecocredit/marketplace/v1/types";
import * as _129 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _130 from "./ecocredit/v1/events";
import * as _131 from "./ecocredit/v1/query";
import * as _132 from "./ecocredit/v1/state";
import * as _133 from "./ecocredit/v1/tx";
import * as _134 from "./ecocredit/v1/types";
import * as _135 from "./ecocredit/v1alpha1/events";
import * as _136 from "./ecocredit/v1alpha1/genesis";
import * as _137 from "./ecocredit/v1alpha1/query";
import * as _138 from "./ecocredit/v1alpha1/tx";
import * as _139 from "./ecocredit/v1alpha1/types";
import * as _140 from "./intertx/v1/query";
import * as _141 from "./intertx/v1/tx";
import * as _217 from "./data/v1/query.lcd";
import * as _218 from "./ecocredit/basket/v1/query.lcd";
import * as _219 from "./ecocredit/marketplace/v1/query.lcd";
import * as _220 from "./ecocredit/v1/query.lcd";
import * as _221 from "./ecocredit/v1alpha1/query.lcd";
import * as _222 from "./intertx/v1/query.lcd";
export declare namespace regen {
    namespace data {
        const v1: {
            LCDQueryClient: typeof _217.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    anchor(value: _117.MsgAnchor): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    attest(value: _117.MsgAttest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    defineResolver(value: _117.MsgDefineResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerResolver(value: _117.MsgRegisterResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    anchor(value: _117.MsgAnchor): {
                        typeUrl: string;
                        value: _117.MsgAnchor;
                    };
                    attest(value: _117.MsgAttest): {
                        typeUrl: string;
                        value: _117.MsgAttest;
                    };
                    defineResolver(value: _117.MsgDefineResolver): {
                        typeUrl: string;
                        value: _117.MsgDefineResolver;
                    };
                    registerResolver(value: _117.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _117.MsgRegisterResolver;
                    };
                };
                toJSON: {
                    anchor(value: _117.MsgAnchor): {
                        typeUrl: string;
                        value: unknown;
                    };
                    attest(value: _117.MsgAttest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    defineResolver(value: _117.MsgDefineResolver): {
                        typeUrl: string;
                        value: unknown;
                    };
                    registerResolver(value: _117.MsgRegisterResolver): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    anchor(value: any): {
                        typeUrl: string;
                        value: _117.MsgAnchor;
                    };
                    attest(value: any): {
                        typeUrl: string;
                        value: _117.MsgAttest;
                    };
                    defineResolver(value: any): {
                        typeUrl: string;
                        value: _117.MsgDefineResolver;
                    };
                    registerResolver(value: any): {
                        typeUrl: string;
                        value: _117.MsgRegisterResolver;
                    };
                };
                fromPartial: {
                    anchor(value: _117.MsgAnchor): {
                        typeUrl: string;
                        value: _117.MsgAnchor;
                    };
                    attest(value: _117.MsgAttest): {
                        typeUrl: string;
                        value: _117.MsgAttest;
                    };
                    defineResolver(value: _117.MsgDefineResolver): {
                        typeUrl: string;
                        value: _117.MsgDefineResolver;
                    };
                    registerResolver(value: _117.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _117.MsgRegisterResolver;
                    };
                };
            };
            AminoConverter: {
                "/regen.data.v1.MsgAnchor": {
                    aminoType: string;
                    toAmino: (message: _117.MsgAnchor) => _117.MsgAnchorAmino;
                    fromAmino: (object: _117.MsgAnchorAmino) => _117.MsgAnchor;
                };
                "/regen.data.v1.MsgAttest": {
                    aminoType: string;
                    toAmino: (message: _117.MsgAttest) => _117.MsgAttestAmino;
                    fromAmino: (object: _117.MsgAttestAmino) => _117.MsgAttest;
                };
                "/regen.data.v1.MsgDefineResolver": {
                    aminoType: string;
                    toAmino: (message: _117.MsgDefineResolver) => _117.MsgDefineResolverAmino;
                    fromAmino: (object: _117.MsgDefineResolverAmino) => _117.MsgDefineResolver;
                };
                "/regen.data.v1.MsgRegisterResolver": {
                    aminoType: string;
                    toAmino: (message: _117.MsgRegisterResolver) => _117.MsgRegisterResolverAmino;
                    fromAmino: (object: _117.MsgRegisterResolverAmino) => _117.MsgRegisterResolver;
                };
            };
            digestAlgorithmFromJSON(object: any): _118.DigestAlgorithm;
            digestAlgorithmToJSON(object: _118.DigestAlgorithm): string;
            rawMediaTypeFromJSON(object: any): _118.RawMediaType;
            rawMediaTypeToJSON(object: _118.RawMediaType): string;
            graphCanonicalizationAlgorithmFromJSON(object: any): _118.GraphCanonicalizationAlgorithm;
            graphCanonicalizationAlgorithmToJSON(object: _118.GraphCanonicalizationAlgorithm): string;
            graphMerkleTreeFromJSON(object: any): _118.GraphMerkleTree;
            graphMerkleTreeToJSON(object: _118.GraphMerkleTree): string;
            DigestAlgorithm: typeof _118.DigestAlgorithm;
            DigestAlgorithmSDKType: typeof _118.DigestAlgorithm;
            DigestAlgorithmAmino: typeof _118.DigestAlgorithm;
            RawMediaType: typeof _118.RawMediaType;
            RawMediaTypeSDKType: typeof _118.RawMediaType;
            RawMediaTypeAmino: typeof _118.RawMediaType;
            GraphCanonicalizationAlgorithm: typeof _118.GraphCanonicalizationAlgorithm;
            GraphCanonicalizationAlgorithmSDKType: typeof _118.GraphCanonicalizationAlgorithm;
            GraphCanonicalizationAlgorithmAmino: typeof _118.GraphCanonicalizationAlgorithm;
            GraphMerkleTree: typeof _118.GraphMerkleTree;
            GraphMerkleTreeSDKType: typeof _118.GraphMerkleTree;
            GraphMerkleTreeAmino: typeof _118.GraphMerkleTree;
            ContentHash: {
                encode(message: _118.ContentHash, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.ContentHash;
                fromJSON(object: any): _118.ContentHash;
                toJSON(message: _118.ContentHash): unknown;
                fromPartial(object: Partial<_118.ContentHash>): _118.ContentHash;
                fromAmino(object: _118.ContentHashAmino): _118.ContentHash;
                toAmino(message: _118.ContentHash): _118.ContentHashAmino;
                fromAminoMsg(object: _118.ContentHashAminoMsg): _118.ContentHash;
                fromProtoMsg(message: _118.ContentHashProtoMsg): _118.ContentHash;
                toProto(message: _118.ContentHash): Uint8Array;
                toProtoMsg(message: _118.ContentHash): _118.ContentHashProtoMsg;
            };
            ContentHash_Raw: {
                encode(message: _118.ContentHash_Raw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.ContentHash_Raw;
                fromJSON(object: any): _118.ContentHash_Raw;
                toJSON(message: _118.ContentHash_Raw): unknown;
                fromPartial(object: Partial<_118.ContentHash_Raw>): _118.ContentHash_Raw;
                fromAmino(object: _118.ContentHash_RawAmino): _118.ContentHash_Raw;
                toAmino(message: _118.ContentHash_Raw): _118.ContentHash_RawAmino;
                fromAminoMsg(object: _118.ContentHash_RawAminoMsg): _118.ContentHash_Raw;
                fromProtoMsg(message: _118.ContentHash_RawProtoMsg): _118.ContentHash_Raw;
                toProto(message: _118.ContentHash_Raw): Uint8Array;
                toProtoMsg(message: _118.ContentHash_Raw): _118.ContentHash_RawProtoMsg;
            };
            ContentHash_Graph: {
                encode(message: _118.ContentHash_Graph, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.ContentHash_Graph;
                fromJSON(object: any): _118.ContentHash_Graph;
                toJSON(message: _118.ContentHash_Graph): unknown;
                fromPartial(object: Partial<_118.ContentHash_Graph>): _118.ContentHash_Graph;
                fromAmino(object: _118.ContentHash_GraphAmino): _118.ContentHash_Graph;
                toAmino(message: _118.ContentHash_Graph): _118.ContentHash_GraphAmino;
                fromAminoMsg(object: _118.ContentHash_GraphAminoMsg): _118.ContentHash_Graph;
                fromProtoMsg(message: _118.ContentHash_GraphProtoMsg): _118.ContentHash_Graph;
                toProto(message: _118.ContentHash_Graph): Uint8Array;
                toProtoMsg(message: _118.ContentHash_Graph): _118.ContentHash_GraphProtoMsg;
            };
            ContentHashes: {
                encode(message: _118.ContentHashes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _118.ContentHashes;
                fromJSON(object: any): _118.ContentHashes;
                toJSON(message: _118.ContentHashes): unknown;
                fromPartial(object: Partial<_118.ContentHashes>): _118.ContentHashes;
                fromAmino(object: _118.ContentHashesAmino): _118.ContentHashes;
                toAmino(message: _118.ContentHashes): _118.ContentHashesAmino;
                fromAminoMsg(object: _118.ContentHashesAminoMsg): _118.ContentHashes;
                fromProtoMsg(message: _118.ContentHashesProtoMsg): _118.ContentHashes;
                toProto(message: _118.ContentHashes): Uint8Array;
                toProtoMsg(message: _118.ContentHashes): _118.ContentHashesProtoMsg;
            };
            MsgAnchor: {
                encode(message: _117.MsgAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgAnchor;
                fromJSON(object: any): _117.MsgAnchor;
                toJSON(message: _117.MsgAnchor): unknown;
                fromPartial(object: Partial<_117.MsgAnchor>): _117.MsgAnchor;
                fromAmino(object: _117.MsgAnchorAmino): _117.MsgAnchor;
                toAmino(message: _117.MsgAnchor): _117.MsgAnchorAmino;
                fromAminoMsg(object: _117.MsgAnchorAminoMsg): _117.MsgAnchor;
                toAminoMsg(message: _117.MsgAnchor): _117.MsgAnchorAminoMsg;
                fromProtoMsg(message: _117.MsgAnchorProtoMsg): _117.MsgAnchor;
                toProto(message: _117.MsgAnchor): Uint8Array;
                toProtoMsg(message: _117.MsgAnchor): _117.MsgAnchorProtoMsg;
            };
            MsgAnchorResponse: {
                encode(message: _117.MsgAnchorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgAnchorResponse;
                fromJSON(object: any): _117.MsgAnchorResponse;
                toJSON(message: _117.MsgAnchorResponse): unknown;
                fromPartial(object: Partial<_117.MsgAnchorResponse>): _117.MsgAnchorResponse;
                fromAmino(object: _117.MsgAnchorResponseAmino): _117.MsgAnchorResponse;
                toAmino(message: _117.MsgAnchorResponse): _117.MsgAnchorResponseAmino;
                fromAminoMsg(object: _117.MsgAnchorResponseAminoMsg): _117.MsgAnchorResponse;
                fromProtoMsg(message: _117.MsgAnchorResponseProtoMsg): _117.MsgAnchorResponse;
                toProto(message: _117.MsgAnchorResponse): Uint8Array;
                toProtoMsg(message: _117.MsgAnchorResponse): _117.MsgAnchorResponseProtoMsg;
            };
            MsgAttest: {
                encode(message: _117.MsgAttest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgAttest;
                fromJSON(object: any): _117.MsgAttest;
                toJSON(message: _117.MsgAttest): unknown;
                fromPartial(object: Partial<_117.MsgAttest>): _117.MsgAttest;
                fromAmino(object: _117.MsgAttestAmino): _117.MsgAttest;
                toAmino(message: _117.MsgAttest): _117.MsgAttestAmino;
                fromAminoMsg(object: _117.MsgAttestAminoMsg): _117.MsgAttest;
                toAminoMsg(message: _117.MsgAttest): _117.MsgAttestAminoMsg;
                fromProtoMsg(message: _117.MsgAttestProtoMsg): _117.MsgAttest;
                toProto(message: _117.MsgAttest): Uint8Array;
                toProtoMsg(message: _117.MsgAttest): _117.MsgAttestProtoMsg;
            };
            MsgAttestResponse: {
                encode(message: _117.MsgAttestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgAttestResponse;
                fromJSON(object: any): _117.MsgAttestResponse;
                toJSON(message: _117.MsgAttestResponse): unknown;
                fromPartial(object: Partial<_117.MsgAttestResponse>): _117.MsgAttestResponse;
                fromAmino(object: _117.MsgAttestResponseAmino): _117.MsgAttestResponse;
                toAmino(message: _117.MsgAttestResponse): _117.MsgAttestResponseAmino;
                fromAminoMsg(object: _117.MsgAttestResponseAminoMsg): _117.MsgAttestResponse;
                fromProtoMsg(message: _117.MsgAttestResponseProtoMsg): _117.MsgAttestResponse;
                toProto(message: _117.MsgAttestResponse): Uint8Array;
                toProtoMsg(message: _117.MsgAttestResponse): _117.MsgAttestResponseProtoMsg;
            };
            MsgDefineResolver: {
                encode(message: _117.MsgDefineResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgDefineResolver;
                fromJSON(object: any): _117.MsgDefineResolver;
                toJSON(message: _117.MsgDefineResolver): unknown;
                fromPartial(object: Partial<_117.MsgDefineResolver>): _117.MsgDefineResolver;
                fromAmino(object: _117.MsgDefineResolverAmino): _117.MsgDefineResolver;
                toAmino(message: _117.MsgDefineResolver): _117.MsgDefineResolverAmino;
                fromAminoMsg(object: _117.MsgDefineResolverAminoMsg): _117.MsgDefineResolver;
                toAminoMsg(message: _117.MsgDefineResolver): _117.MsgDefineResolverAminoMsg;
                fromProtoMsg(message: _117.MsgDefineResolverProtoMsg): _117.MsgDefineResolver;
                toProto(message: _117.MsgDefineResolver): Uint8Array;
                toProtoMsg(message: _117.MsgDefineResolver): _117.MsgDefineResolverProtoMsg;
            };
            MsgDefineResolverResponse: {
                encode(message: _117.MsgDefineResolverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgDefineResolverResponse;
                fromJSON(object: any): _117.MsgDefineResolverResponse;
                toJSON(message: _117.MsgDefineResolverResponse): unknown;
                fromPartial(object: Partial<_117.MsgDefineResolverResponse>): _117.MsgDefineResolverResponse;
                fromAmino(object: _117.MsgDefineResolverResponseAmino): _117.MsgDefineResolverResponse;
                toAmino(message: _117.MsgDefineResolverResponse): _117.MsgDefineResolverResponseAmino;
                fromAminoMsg(object: _117.MsgDefineResolverResponseAminoMsg): _117.MsgDefineResolverResponse;
                fromProtoMsg(message: _117.MsgDefineResolverResponseProtoMsg): _117.MsgDefineResolverResponse;
                toProto(message: _117.MsgDefineResolverResponse): Uint8Array;
                toProtoMsg(message: _117.MsgDefineResolverResponse): _117.MsgDefineResolverResponseProtoMsg;
            };
            MsgRegisterResolver: {
                encode(message: _117.MsgRegisterResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgRegisterResolver;
                fromJSON(object: any): _117.MsgRegisterResolver;
                toJSON(message: _117.MsgRegisterResolver): unknown;
                fromPartial(object: Partial<_117.MsgRegisterResolver>): _117.MsgRegisterResolver;
                fromAmino(object: _117.MsgRegisterResolverAmino): _117.MsgRegisterResolver;
                toAmino(message: _117.MsgRegisterResolver): _117.MsgRegisterResolverAmino;
                fromAminoMsg(object: _117.MsgRegisterResolverAminoMsg): _117.MsgRegisterResolver;
                toAminoMsg(message: _117.MsgRegisterResolver): _117.MsgRegisterResolverAminoMsg;
                fromProtoMsg(message: _117.MsgRegisterResolverProtoMsg): _117.MsgRegisterResolver;
                toProto(message: _117.MsgRegisterResolver): Uint8Array;
                toProtoMsg(message: _117.MsgRegisterResolver): _117.MsgRegisterResolverProtoMsg;
            };
            MsgRegisterResolverResponse: {
                encode(_: _117.MsgRegisterResolverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _117.MsgRegisterResolverResponse;
                fromJSON(_: any): _117.MsgRegisterResolverResponse;
                toJSON(_: _117.MsgRegisterResolverResponse): unknown;
                fromPartial(_: Partial<_117.MsgRegisterResolverResponse>): _117.MsgRegisterResolverResponse;
                fromAmino(_: _117.MsgRegisterResolverResponseAmino): _117.MsgRegisterResolverResponse;
                toAmino(_: _117.MsgRegisterResolverResponse): _117.MsgRegisterResolverResponseAmino;
                fromAminoMsg(object: _117.MsgRegisterResolverResponseAminoMsg): _117.MsgRegisterResolverResponse;
                fromProtoMsg(message: _117.MsgRegisterResolverResponseProtoMsg): _117.MsgRegisterResolverResponse;
                toProto(message: _117.MsgRegisterResolverResponse): Uint8Array;
                toProtoMsg(message: _117.MsgRegisterResolverResponse): _117.MsgRegisterResolverResponseProtoMsg;
            };
            DataID: {
                encode(message: _116.DataID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.DataID;
                fromJSON(object: any): _116.DataID;
                toJSON(message: _116.DataID): unknown;
                fromPartial(object: Partial<_116.DataID>): _116.DataID;
                fromAmino(object: _116.DataIDAmino): _116.DataID;
                toAmino(message: _116.DataID): _116.DataIDAmino;
                fromAminoMsg(object: _116.DataIDAminoMsg): _116.DataID;
                fromProtoMsg(message: _116.DataIDProtoMsg): _116.DataID;
                toProto(message: _116.DataID): Uint8Array;
                toProtoMsg(message: _116.DataID): _116.DataIDProtoMsg;
            };
            DataAnchor: {
                encode(message: _116.DataAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.DataAnchor;
                fromJSON(object: any): _116.DataAnchor;
                toJSON(message: _116.DataAnchor): unknown;
                fromPartial(object: Partial<_116.DataAnchor>): _116.DataAnchor;
                fromAmino(object: _116.DataAnchorAmino): _116.DataAnchor;
                toAmino(message: _116.DataAnchor): _116.DataAnchorAmino;
                fromAminoMsg(object: _116.DataAnchorAminoMsg): _116.DataAnchor;
                fromProtoMsg(message: _116.DataAnchorProtoMsg): _116.DataAnchor;
                toProto(message: _116.DataAnchor): Uint8Array;
                toProtoMsg(message: _116.DataAnchor): _116.DataAnchorProtoMsg;
            };
            DataAttestor: {
                encode(message: _116.DataAttestor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.DataAttestor;
                fromJSON(object: any): _116.DataAttestor;
                toJSON(message: _116.DataAttestor): unknown;
                fromPartial(object: Partial<_116.DataAttestor>): _116.DataAttestor;
                fromAmino(object: _116.DataAttestorAmino): _116.DataAttestor;
                toAmino(message: _116.DataAttestor): _116.DataAttestorAmino;
                fromAminoMsg(object: _116.DataAttestorAminoMsg): _116.DataAttestor;
                fromProtoMsg(message: _116.DataAttestorProtoMsg): _116.DataAttestor;
                toProto(message: _116.DataAttestor): Uint8Array;
                toProtoMsg(message: _116.DataAttestor): _116.DataAttestorProtoMsg;
            };
            Resolver: {
                encode(message: _116.Resolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.Resolver;
                fromJSON(object: any): _116.Resolver;
                toJSON(message: _116.Resolver): unknown;
                fromPartial(object: Partial<_116.Resolver>): _116.Resolver;
                fromAmino(object: _116.ResolverAmino): _116.Resolver;
                toAmino(message: _116.Resolver): _116.ResolverAmino;
                fromAminoMsg(object: _116.ResolverAminoMsg): _116.Resolver;
                fromProtoMsg(message: _116.ResolverProtoMsg): _116.Resolver;
                toProto(message: _116.Resolver): Uint8Array;
                toProtoMsg(message: _116.Resolver): _116.ResolverProtoMsg;
            };
            DataResolver: {
                encode(message: _116.DataResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _116.DataResolver;
                fromJSON(object: any): _116.DataResolver;
                toJSON(message: _116.DataResolver): unknown;
                fromPartial(object: Partial<_116.DataResolver>): _116.DataResolver;
                fromAmino(object: _116.DataResolverAmino): _116.DataResolver;
                toAmino(message: _116.DataResolver): _116.DataResolverAmino;
                fromAminoMsg(object: _116.DataResolverAminoMsg): _116.DataResolver;
                fromProtoMsg(message: _116.DataResolverProtoMsg): _116.DataResolver;
                toProto(message: _116.DataResolver): Uint8Array;
                toProtoMsg(message: _116.DataResolver): _116.DataResolverProtoMsg;
            };
            QueryAnchorByIRIRequest: {
                encode(message: _115.QueryAnchorByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryAnchorByIRIRequest;
                fromJSON(object: any): _115.QueryAnchorByIRIRequest;
                toJSON(message: _115.QueryAnchorByIRIRequest): unknown;
                fromPartial(object: Partial<_115.QueryAnchorByIRIRequest>): _115.QueryAnchorByIRIRequest;
                fromAmino(object: _115.QueryAnchorByIRIRequestAmino): _115.QueryAnchorByIRIRequest;
                toAmino(message: _115.QueryAnchorByIRIRequest): _115.QueryAnchorByIRIRequestAmino;
                fromAminoMsg(object: _115.QueryAnchorByIRIRequestAminoMsg): _115.QueryAnchorByIRIRequest;
                fromProtoMsg(message: _115.QueryAnchorByIRIRequestProtoMsg): _115.QueryAnchorByIRIRequest;
                toProto(message: _115.QueryAnchorByIRIRequest): Uint8Array;
                toProtoMsg(message: _115.QueryAnchorByIRIRequest): _115.QueryAnchorByIRIRequestProtoMsg;
            };
            QueryAnchorByIRIResponse: {
                encode(message: _115.QueryAnchorByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryAnchorByIRIResponse;
                fromJSON(object: any): _115.QueryAnchorByIRIResponse;
                toJSON(message: _115.QueryAnchorByIRIResponse): unknown;
                fromPartial(object: Partial<_115.QueryAnchorByIRIResponse>): _115.QueryAnchorByIRIResponse;
                fromAmino(object: _115.QueryAnchorByIRIResponseAmino): _115.QueryAnchorByIRIResponse;
                toAmino(message: _115.QueryAnchorByIRIResponse): _115.QueryAnchorByIRIResponseAmino;
                fromAminoMsg(object: _115.QueryAnchorByIRIResponseAminoMsg): _115.QueryAnchorByIRIResponse;
                fromProtoMsg(message: _115.QueryAnchorByIRIResponseProtoMsg): _115.QueryAnchorByIRIResponse;
                toProto(message: _115.QueryAnchorByIRIResponse): Uint8Array;
                toProtoMsg(message: _115.QueryAnchorByIRIResponse): _115.QueryAnchorByIRIResponseProtoMsg;
            };
            QueryAnchorByHashRequest: {
                encode(message: _115.QueryAnchorByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryAnchorByHashRequest;
                fromJSON(object: any): _115.QueryAnchorByHashRequest;
                toJSON(message: _115.QueryAnchorByHashRequest): unknown;
                fromPartial(object: Partial<_115.QueryAnchorByHashRequest>): _115.QueryAnchorByHashRequest;
                fromAmino(object: _115.QueryAnchorByHashRequestAmino): _115.QueryAnchorByHashRequest;
                toAmino(message: _115.QueryAnchorByHashRequest): _115.QueryAnchorByHashRequestAmino;
                fromAminoMsg(object: _115.QueryAnchorByHashRequestAminoMsg): _115.QueryAnchorByHashRequest;
                fromProtoMsg(message: _115.QueryAnchorByHashRequestProtoMsg): _115.QueryAnchorByHashRequest;
                toProto(message: _115.QueryAnchorByHashRequest): Uint8Array;
                toProtoMsg(message: _115.QueryAnchorByHashRequest): _115.QueryAnchorByHashRequestProtoMsg;
            };
            QueryAnchorByHashResponse: {
                encode(message: _115.QueryAnchorByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryAnchorByHashResponse;
                fromJSON(object: any): _115.QueryAnchorByHashResponse;
                toJSON(message: _115.QueryAnchorByHashResponse): unknown;
                fromPartial(object: Partial<_115.QueryAnchorByHashResponse>): _115.QueryAnchorByHashResponse;
                fromAmino(object: _115.QueryAnchorByHashResponseAmino): _115.QueryAnchorByHashResponse;
                toAmino(message: _115.QueryAnchorByHashResponse): _115.QueryAnchorByHashResponseAmino;
                fromAminoMsg(object: _115.QueryAnchorByHashResponseAminoMsg): _115.QueryAnchorByHashResponse;
                fromProtoMsg(message: _115.QueryAnchorByHashResponseProtoMsg): _115.QueryAnchorByHashResponse;
                toProto(message: _115.QueryAnchorByHashResponse): Uint8Array;
                toProtoMsg(message: _115.QueryAnchorByHashResponse): _115.QueryAnchorByHashResponseProtoMsg;
            };
            QueryAttestationsByAttestorRequest: {
                encode(message: _115.QueryAttestationsByAttestorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryAttestationsByAttestorRequest;
                fromJSON(object: any): _115.QueryAttestationsByAttestorRequest;
                toJSON(message: _115.QueryAttestationsByAttestorRequest): unknown;
                fromPartial(object: Partial<_115.QueryAttestationsByAttestorRequest>): _115.QueryAttestationsByAttestorRequest;
                fromAmino(object: _115.QueryAttestationsByAttestorRequestAmino): _115.QueryAttestationsByAttestorRequest;
                toAmino(message: _115.QueryAttestationsByAttestorRequest): _115.QueryAttestationsByAttestorRequestAmino;
                fromAminoMsg(object: _115.QueryAttestationsByAttestorRequestAminoMsg): _115.QueryAttestationsByAttestorRequest;
                fromProtoMsg(message: _115.QueryAttestationsByAttestorRequestProtoMsg): _115.QueryAttestationsByAttestorRequest;
                toProto(message: _115.QueryAttestationsByAttestorRequest): Uint8Array;
                toProtoMsg(message: _115.QueryAttestationsByAttestorRequest): _115.QueryAttestationsByAttestorRequestProtoMsg;
            };
            QueryAttestationsByAttestorResponse: {
                encode(message: _115.QueryAttestationsByAttestorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryAttestationsByAttestorResponse;
                fromJSON(object: any): _115.QueryAttestationsByAttestorResponse;
                toJSON(message: _115.QueryAttestationsByAttestorResponse): unknown;
                fromPartial(object: Partial<_115.QueryAttestationsByAttestorResponse>): _115.QueryAttestationsByAttestorResponse;
                fromAmino(object: _115.QueryAttestationsByAttestorResponseAmino): _115.QueryAttestationsByAttestorResponse;
                toAmino(message: _115.QueryAttestationsByAttestorResponse): _115.QueryAttestationsByAttestorResponseAmino;
                fromAminoMsg(object: _115.QueryAttestationsByAttestorResponseAminoMsg): _115.QueryAttestationsByAttestorResponse;
                fromProtoMsg(message: _115.QueryAttestationsByAttestorResponseProtoMsg): _115.QueryAttestationsByAttestorResponse;
                toProto(message: _115.QueryAttestationsByAttestorResponse): Uint8Array;
                toProtoMsg(message: _115.QueryAttestationsByAttestorResponse): _115.QueryAttestationsByAttestorResponseProtoMsg;
            };
            QueryAttestationsByIRIRequest: {
                encode(message: _115.QueryAttestationsByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryAttestationsByIRIRequest;
                fromJSON(object: any): _115.QueryAttestationsByIRIRequest;
                toJSON(message: _115.QueryAttestationsByIRIRequest): unknown;
                fromPartial(object: Partial<_115.QueryAttestationsByIRIRequest>): _115.QueryAttestationsByIRIRequest;
                fromAmino(object: _115.QueryAttestationsByIRIRequestAmino): _115.QueryAttestationsByIRIRequest;
                toAmino(message: _115.QueryAttestationsByIRIRequest): _115.QueryAttestationsByIRIRequestAmino;
                fromAminoMsg(object: _115.QueryAttestationsByIRIRequestAminoMsg): _115.QueryAttestationsByIRIRequest;
                fromProtoMsg(message: _115.QueryAttestationsByIRIRequestProtoMsg): _115.QueryAttestationsByIRIRequest;
                toProto(message: _115.QueryAttestationsByIRIRequest): Uint8Array;
                toProtoMsg(message: _115.QueryAttestationsByIRIRequest): _115.QueryAttestationsByIRIRequestProtoMsg;
            };
            QueryAttestationsByIRIResponse: {
                encode(message: _115.QueryAttestationsByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryAttestationsByIRIResponse;
                fromJSON(object: any): _115.QueryAttestationsByIRIResponse;
                toJSON(message: _115.QueryAttestationsByIRIResponse): unknown;
                fromPartial(object: Partial<_115.QueryAttestationsByIRIResponse>): _115.QueryAttestationsByIRIResponse;
                fromAmino(object: _115.QueryAttestationsByIRIResponseAmino): _115.QueryAttestationsByIRIResponse;
                toAmino(message: _115.QueryAttestationsByIRIResponse): _115.QueryAttestationsByIRIResponseAmino;
                fromAminoMsg(object: _115.QueryAttestationsByIRIResponseAminoMsg): _115.QueryAttestationsByIRIResponse;
                fromProtoMsg(message: _115.QueryAttestationsByIRIResponseProtoMsg): _115.QueryAttestationsByIRIResponse;
                toProto(message: _115.QueryAttestationsByIRIResponse): Uint8Array;
                toProtoMsg(message: _115.QueryAttestationsByIRIResponse): _115.QueryAttestationsByIRIResponseProtoMsg;
            };
            QueryAttestationsByHashRequest: {
                encode(message: _115.QueryAttestationsByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryAttestationsByHashRequest;
                fromJSON(object: any): _115.QueryAttestationsByHashRequest;
                toJSON(message: _115.QueryAttestationsByHashRequest): unknown;
                fromPartial(object: Partial<_115.QueryAttestationsByHashRequest>): _115.QueryAttestationsByHashRequest;
                fromAmino(object: _115.QueryAttestationsByHashRequestAmino): _115.QueryAttestationsByHashRequest;
                toAmino(message: _115.QueryAttestationsByHashRequest): _115.QueryAttestationsByHashRequestAmino;
                fromAminoMsg(object: _115.QueryAttestationsByHashRequestAminoMsg): _115.QueryAttestationsByHashRequest;
                fromProtoMsg(message: _115.QueryAttestationsByHashRequestProtoMsg): _115.QueryAttestationsByHashRequest;
                toProto(message: _115.QueryAttestationsByHashRequest): Uint8Array;
                toProtoMsg(message: _115.QueryAttestationsByHashRequest): _115.QueryAttestationsByHashRequestProtoMsg;
            };
            QueryAttestationsByHashResponse: {
                encode(message: _115.QueryAttestationsByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryAttestationsByHashResponse;
                fromJSON(object: any): _115.QueryAttestationsByHashResponse;
                toJSON(message: _115.QueryAttestationsByHashResponse): unknown;
                fromPartial(object: Partial<_115.QueryAttestationsByHashResponse>): _115.QueryAttestationsByHashResponse;
                fromAmino(object: _115.QueryAttestationsByHashResponseAmino): _115.QueryAttestationsByHashResponse;
                toAmino(message: _115.QueryAttestationsByHashResponse): _115.QueryAttestationsByHashResponseAmino;
                fromAminoMsg(object: _115.QueryAttestationsByHashResponseAminoMsg): _115.QueryAttestationsByHashResponse;
                fromProtoMsg(message: _115.QueryAttestationsByHashResponseProtoMsg): _115.QueryAttestationsByHashResponse;
                toProto(message: _115.QueryAttestationsByHashResponse): Uint8Array;
                toProtoMsg(message: _115.QueryAttestationsByHashResponse): _115.QueryAttestationsByHashResponseProtoMsg;
            };
            QueryResolverRequest: {
                encode(message: _115.QueryResolverRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryResolverRequest;
                fromJSON(object: any): _115.QueryResolverRequest;
                toJSON(message: _115.QueryResolverRequest): unknown;
                fromPartial(object: Partial<_115.QueryResolverRequest>): _115.QueryResolverRequest;
                fromAmino(object: _115.QueryResolverRequestAmino): _115.QueryResolverRequest;
                toAmino(message: _115.QueryResolverRequest): _115.QueryResolverRequestAmino;
                fromAminoMsg(object: _115.QueryResolverRequestAminoMsg): _115.QueryResolverRequest;
                fromProtoMsg(message: _115.QueryResolverRequestProtoMsg): _115.QueryResolverRequest;
                toProto(message: _115.QueryResolverRequest): Uint8Array;
                toProtoMsg(message: _115.QueryResolverRequest): _115.QueryResolverRequestProtoMsg;
            };
            QueryResolverResponse: {
                encode(message: _115.QueryResolverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryResolverResponse;
                fromJSON(object: any): _115.QueryResolverResponse;
                toJSON(message: _115.QueryResolverResponse): unknown;
                fromPartial(object: Partial<_115.QueryResolverResponse>): _115.QueryResolverResponse;
                fromAmino(object: _115.QueryResolverResponseAmino): _115.QueryResolverResponse;
                toAmino(message: _115.QueryResolverResponse): _115.QueryResolverResponseAmino;
                fromAminoMsg(object: _115.QueryResolverResponseAminoMsg): _115.QueryResolverResponse;
                fromProtoMsg(message: _115.QueryResolverResponseProtoMsg): _115.QueryResolverResponse;
                toProto(message: _115.QueryResolverResponse): Uint8Array;
                toProtoMsg(message: _115.QueryResolverResponse): _115.QueryResolverResponseProtoMsg;
            };
            QueryResolversByIRIRequest: {
                encode(message: _115.QueryResolversByIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryResolversByIRIRequest;
                fromJSON(object: any): _115.QueryResolversByIRIRequest;
                toJSON(message: _115.QueryResolversByIRIRequest): unknown;
                fromPartial(object: Partial<_115.QueryResolversByIRIRequest>): _115.QueryResolversByIRIRequest;
                fromAmino(object: _115.QueryResolversByIRIRequestAmino): _115.QueryResolversByIRIRequest;
                toAmino(message: _115.QueryResolversByIRIRequest): _115.QueryResolversByIRIRequestAmino;
                fromAminoMsg(object: _115.QueryResolversByIRIRequestAminoMsg): _115.QueryResolversByIRIRequest;
                fromProtoMsg(message: _115.QueryResolversByIRIRequestProtoMsg): _115.QueryResolversByIRIRequest;
                toProto(message: _115.QueryResolversByIRIRequest): Uint8Array;
                toProtoMsg(message: _115.QueryResolversByIRIRequest): _115.QueryResolversByIRIRequestProtoMsg;
            };
            QueryResolversByIRIResponse: {
                encode(message: _115.QueryResolversByIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryResolversByIRIResponse;
                fromJSON(object: any): _115.QueryResolversByIRIResponse;
                toJSON(message: _115.QueryResolversByIRIResponse): unknown;
                fromPartial(object: Partial<_115.QueryResolversByIRIResponse>): _115.QueryResolversByIRIResponse;
                fromAmino(object: _115.QueryResolversByIRIResponseAmino): _115.QueryResolversByIRIResponse;
                toAmino(message: _115.QueryResolversByIRIResponse): _115.QueryResolversByIRIResponseAmino;
                fromAminoMsg(object: _115.QueryResolversByIRIResponseAminoMsg): _115.QueryResolversByIRIResponse;
                fromProtoMsg(message: _115.QueryResolversByIRIResponseProtoMsg): _115.QueryResolversByIRIResponse;
                toProto(message: _115.QueryResolversByIRIResponse): Uint8Array;
                toProtoMsg(message: _115.QueryResolversByIRIResponse): _115.QueryResolversByIRIResponseProtoMsg;
            };
            QueryResolversByHashRequest: {
                encode(message: _115.QueryResolversByHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryResolversByHashRequest;
                fromJSON(object: any): _115.QueryResolversByHashRequest;
                toJSON(message: _115.QueryResolversByHashRequest): unknown;
                fromPartial(object: Partial<_115.QueryResolversByHashRequest>): _115.QueryResolversByHashRequest;
                fromAmino(object: _115.QueryResolversByHashRequestAmino): _115.QueryResolversByHashRequest;
                toAmino(message: _115.QueryResolversByHashRequest): _115.QueryResolversByHashRequestAmino;
                fromAminoMsg(object: _115.QueryResolversByHashRequestAminoMsg): _115.QueryResolversByHashRequest;
                fromProtoMsg(message: _115.QueryResolversByHashRequestProtoMsg): _115.QueryResolversByHashRequest;
                toProto(message: _115.QueryResolversByHashRequest): Uint8Array;
                toProtoMsg(message: _115.QueryResolversByHashRequest): _115.QueryResolversByHashRequestProtoMsg;
            };
            QueryResolversByHashResponse: {
                encode(message: _115.QueryResolversByHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryResolversByHashResponse;
                fromJSON(object: any): _115.QueryResolversByHashResponse;
                toJSON(message: _115.QueryResolversByHashResponse): unknown;
                fromPartial(object: Partial<_115.QueryResolversByHashResponse>): _115.QueryResolversByHashResponse;
                fromAmino(object: _115.QueryResolversByHashResponseAmino): _115.QueryResolversByHashResponse;
                toAmino(message: _115.QueryResolversByHashResponse): _115.QueryResolversByHashResponseAmino;
                fromAminoMsg(object: _115.QueryResolversByHashResponseAminoMsg): _115.QueryResolversByHashResponse;
                fromProtoMsg(message: _115.QueryResolversByHashResponseProtoMsg): _115.QueryResolversByHashResponse;
                toProto(message: _115.QueryResolversByHashResponse): Uint8Array;
                toProtoMsg(message: _115.QueryResolversByHashResponse): _115.QueryResolversByHashResponseProtoMsg;
            };
            QueryResolversByURLRequest: {
                encode(message: _115.QueryResolversByURLRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryResolversByURLRequest;
                fromJSON(object: any): _115.QueryResolversByURLRequest;
                toJSON(message: _115.QueryResolversByURLRequest): unknown;
                fromPartial(object: Partial<_115.QueryResolversByURLRequest>): _115.QueryResolversByURLRequest;
                fromAmino(object: _115.QueryResolversByURLRequestAmino): _115.QueryResolversByURLRequest;
                toAmino(message: _115.QueryResolversByURLRequest): _115.QueryResolversByURLRequestAmino;
                fromAminoMsg(object: _115.QueryResolversByURLRequestAminoMsg): _115.QueryResolversByURLRequest;
                fromProtoMsg(message: _115.QueryResolversByURLRequestProtoMsg): _115.QueryResolversByURLRequest;
                toProto(message: _115.QueryResolversByURLRequest): Uint8Array;
                toProtoMsg(message: _115.QueryResolversByURLRequest): _115.QueryResolversByURLRequestProtoMsg;
            };
            QueryResolversByURLResponse: {
                encode(message: _115.QueryResolversByURLResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.QueryResolversByURLResponse;
                fromJSON(object: any): _115.QueryResolversByURLResponse;
                toJSON(message: _115.QueryResolversByURLResponse): unknown;
                fromPartial(object: Partial<_115.QueryResolversByURLResponse>): _115.QueryResolversByURLResponse;
                fromAmino(object: _115.QueryResolversByURLResponseAmino): _115.QueryResolversByURLResponse;
                toAmino(message: _115.QueryResolversByURLResponse): _115.QueryResolversByURLResponseAmino;
                fromAminoMsg(object: _115.QueryResolversByURLResponseAminoMsg): _115.QueryResolversByURLResponse;
                fromProtoMsg(message: _115.QueryResolversByURLResponseProtoMsg): _115.QueryResolversByURLResponse;
                toProto(message: _115.QueryResolversByURLResponse): Uint8Array;
                toProtoMsg(message: _115.QueryResolversByURLResponse): _115.QueryResolversByURLResponseProtoMsg;
            };
            ConvertIRIToHashRequest: {
                encode(message: _115.ConvertIRIToHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.ConvertIRIToHashRequest;
                fromJSON(object: any): _115.ConvertIRIToHashRequest;
                toJSON(message: _115.ConvertIRIToHashRequest): unknown;
                fromPartial(object: Partial<_115.ConvertIRIToHashRequest>): _115.ConvertIRIToHashRequest;
                fromAmino(object: _115.ConvertIRIToHashRequestAmino): _115.ConvertIRIToHashRequest;
                toAmino(message: _115.ConvertIRIToHashRequest): _115.ConvertIRIToHashRequestAmino;
                fromAminoMsg(object: _115.ConvertIRIToHashRequestAminoMsg): _115.ConvertIRIToHashRequest;
                fromProtoMsg(message: _115.ConvertIRIToHashRequestProtoMsg): _115.ConvertIRIToHashRequest;
                toProto(message: _115.ConvertIRIToHashRequest): Uint8Array;
                toProtoMsg(message: _115.ConvertIRIToHashRequest): _115.ConvertIRIToHashRequestProtoMsg;
            };
            ConvertIRIToHashResponse: {
                encode(message: _115.ConvertIRIToHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.ConvertIRIToHashResponse;
                fromJSON(object: any): _115.ConvertIRIToHashResponse;
                toJSON(message: _115.ConvertIRIToHashResponse): unknown;
                fromPartial(object: Partial<_115.ConvertIRIToHashResponse>): _115.ConvertIRIToHashResponse;
                fromAmino(object: _115.ConvertIRIToHashResponseAmino): _115.ConvertIRIToHashResponse;
                toAmino(message: _115.ConvertIRIToHashResponse): _115.ConvertIRIToHashResponseAmino;
                fromAminoMsg(object: _115.ConvertIRIToHashResponseAminoMsg): _115.ConvertIRIToHashResponse;
                fromProtoMsg(message: _115.ConvertIRIToHashResponseProtoMsg): _115.ConvertIRIToHashResponse;
                toProto(message: _115.ConvertIRIToHashResponse): Uint8Array;
                toProtoMsg(message: _115.ConvertIRIToHashResponse): _115.ConvertIRIToHashResponseProtoMsg;
            };
            ConvertHashToIRIRequest: {
                encode(message: _115.ConvertHashToIRIRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.ConvertHashToIRIRequest;
                fromJSON(object: any): _115.ConvertHashToIRIRequest;
                toJSON(message: _115.ConvertHashToIRIRequest): unknown;
                fromPartial(object: Partial<_115.ConvertHashToIRIRequest>): _115.ConvertHashToIRIRequest;
                fromAmino(object: _115.ConvertHashToIRIRequestAmino): _115.ConvertHashToIRIRequest;
                toAmino(message: _115.ConvertHashToIRIRequest): _115.ConvertHashToIRIRequestAmino;
                fromAminoMsg(object: _115.ConvertHashToIRIRequestAminoMsg): _115.ConvertHashToIRIRequest;
                fromProtoMsg(message: _115.ConvertHashToIRIRequestProtoMsg): _115.ConvertHashToIRIRequest;
                toProto(message: _115.ConvertHashToIRIRequest): Uint8Array;
                toProtoMsg(message: _115.ConvertHashToIRIRequest): _115.ConvertHashToIRIRequestProtoMsg;
            };
            ConvertHashToIRIResponse: {
                encode(message: _115.ConvertHashToIRIResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.ConvertHashToIRIResponse;
                fromJSON(object: any): _115.ConvertHashToIRIResponse;
                toJSON(message: _115.ConvertHashToIRIResponse): unknown;
                fromPartial(object: Partial<_115.ConvertHashToIRIResponse>): _115.ConvertHashToIRIResponse;
                fromAmino(object: _115.ConvertHashToIRIResponseAmino): _115.ConvertHashToIRIResponse;
                toAmino(message: _115.ConvertHashToIRIResponse): _115.ConvertHashToIRIResponseAmino;
                fromAminoMsg(object: _115.ConvertHashToIRIResponseAminoMsg): _115.ConvertHashToIRIResponse;
                fromProtoMsg(message: _115.ConvertHashToIRIResponseProtoMsg): _115.ConvertHashToIRIResponse;
                toProto(message: _115.ConvertHashToIRIResponse): Uint8Array;
                toProtoMsg(message: _115.ConvertHashToIRIResponse): _115.ConvertHashToIRIResponseProtoMsg;
            };
            AnchorInfo: {
                encode(message: _115.AnchorInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.AnchorInfo;
                fromJSON(object: any): _115.AnchorInfo;
                toJSON(message: _115.AnchorInfo): unknown;
                fromPartial(object: Partial<_115.AnchorInfo>): _115.AnchorInfo;
                fromAmino(object: _115.AnchorInfoAmino): _115.AnchorInfo;
                toAmino(message: _115.AnchorInfo): _115.AnchorInfoAmino;
                fromAminoMsg(object: _115.AnchorInfoAminoMsg): _115.AnchorInfo;
                fromProtoMsg(message: _115.AnchorInfoProtoMsg): _115.AnchorInfo;
                toProto(message: _115.AnchorInfo): Uint8Array;
                toProtoMsg(message: _115.AnchorInfo): _115.AnchorInfoProtoMsg;
            };
            AttestationInfo: {
                encode(message: _115.AttestationInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.AttestationInfo;
                fromJSON(object: any): _115.AttestationInfo;
                toJSON(message: _115.AttestationInfo): unknown;
                fromPartial(object: Partial<_115.AttestationInfo>): _115.AttestationInfo;
                fromAmino(object: _115.AttestationInfoAmino): _115.AttestationInfo;
                toAmino(message: _115.AttestationInfo): _115.AttestationInfoAmino;
                fromAminoMsg(object: _115.AttestationInfoAminoMsg): _115.AttestationInfo;
                fromProtoMsg(message: _115.AttestationInfoProtoMsg): _115.AttestationInfo;
                toProto(message: _115.AttestationInfo): Uint8Array;
                toProtoMsg(message: _115.AttestationInfo): _115.AttestationInfoProtoMsg;
            };
            ResolverInfo: {
                encode(message: _115.ResolverInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _115.ResolverInfo;
                fromJSON(object: any): _115.ResolverInfo;
                toJSON(message: _115.ResolverInfo): unknown;
                fromPartial(object: Partial<_115.ResolverInfo>): _115.ResolverInfo;
                fromAmino(object: _115.ResolverInfoAmino): _115.ResolverInfo;
                toAmino(message: _115.ResolverInfo): _115.ResolverInfoAmino;
                fromAminoMsg(object: _115.ResolverInfoAminoMsg): _115.ResolverInfo;
                fromProtoMsg(message: _115.ResolverInfoProtoMsg): _115.ResolverInfo;
                toProto(message: _115.ResolverInfo): Uint8Array;
                toProtoMsg(message: _115.ResolverInfo): _115.ResolverInfoProtoMsg;
            };
            EventAnchor: {
                encode(message: _114.EventAnchor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.EventAnchor;
                fromJSON(object: any): _114.EventAnchor;
                toJSON(message: _114.EventAnchor): unknown;
                fromPartial(object: Partial<_114.EventAnchor>): _114.EventAnchor;
                fromAmino(object: _114.EventAnchorAmino): _114.EventAnchor;
                toAmino(message: _114.EventAnchor): _114.EventAnchorAmino;
                fromAminoMsg(object: _114.EventAnchorAminoMsg): _114.EventAnchor;
                fromProtoMsg(message: _114.EventAnchorProtoMsg): _114.EventAnchor;
                toProto(message: _114.EventAnchor): Uint8Array;
                toProtoMsg(message: _114.EventAnchor): _114.EventAnchorProtoMsg;
            };
            EventAttest: {
                encode(message: _114.EventAttest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.EventAttest;
                fromJSON(object: any): _114.EventAttest;
                toJSON(message: _114.EventAttest): unknown;
                fromPartial(object: Partial<_114.EventAttest>): _114.EventAttest;
                fromAmino(object: _114.EventAttestAmino): _114.EventAttest;
                toAmino(message: _114.EventAttest): _114.EventAttestAmino;
                fromAminoMsg(object: _114.EventAttestAminoMsg): _114.EventAttest;
                fromProtoMsg(message: _114.EventAttestProtoMsg): _114.EventAttest;
                toProto(message: _114.EventAttest): Uint8Array;
                toProtoMsg(message: _114.EventAttest): _114.EventAttestProtoMsg;
            };
            EventDefineResolver: {
                encode(message: _114.EventDefineResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.EventDefineResolver;
                fromJSON(object: any): _114.EventDefineResolver;
                toJSON(message: _114.EventDefineResolver): unknown;
                fromPartial(object: Partial<_114.EventDefineResolver>): _114.EventDefineResolver;
                fromAmino(object: _114.EventDefineResolverAmino): _114.EventDefineResolver;
                toAmino(message: _114.EventDefineResolver): _114.EventDefineResolverAmino;
                fromAminoMsg(object: _114.EventDefineResolverAminoMsg): _114.EventDefineResolver;
                fromProtoMsg(message: _114.EventDefineResolverProtoMsg): _114.EventDefineResolver;
                toProto(message: _114.EventDefineResolver): Uint8Array;
                toProtoMsg(message: _114.EventDefineResolver): _114.EventDefineResolverProtoMsg;
            };
            EventRegisterResolver: {
                encode(message: _114.EventRegisterResolver, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _114.EventRegisterResolver;
                fromJSON(object: any): _114.EventRegisterResolver;
                toJSON(message: _114.EventRegisterResolver): unknown;
                fromPartial(object: Partial<_114.EventRegisterResolver>): _114.EventRegisterResolver;
                fromAmino(object: _114.EventRegisterResolverAmino): _114.EventRegisterResolver;
                toAmino(message: _114.EventRegisterResolver): _114.EventRegisterResolverAmino;
                fromAminoMsg(object: _114.EventRegisterResolverAminoMsg): _114.EventRegisterResolver;
                fromProtoMsg(message: _114.EventRegisterResolverProtoMsg): _114.EventRegisterResolver;
                toProto(message: _114.EventRegisterResolver): Uint8Array;
                toProtoMsg(message: _114.EventRegisterResolver): _114.EventRegisterResolverProtoMsg;
            };
        };
    }
    namespace ecocredit {
        namespace basket {
            const v1: {
                LCDQueryClient: typeof _218.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        create(value: _122.MsgCreate): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        put(value: _122.MsgPut): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        take(value: _122.MsgTake): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateBasketFee(value: _122.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateCurator(value: _122.MsgUpdateCurator): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateDateCriteria(value: _122.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        create(value: _122.MsgCreate): {
                            typeUrl: string;
                            value: _122.MsgCreate;
                        };
                        put(value: _122.MsgPut): {
                            typeUrl: string;
                            value: _122.MsgPut;
                        };
                        take(value: _122.MsgTake): {
                            typeUrl: string;
                            value: _122.MsgTake;
                        };
                        updateBasketFee(value: _122.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: _122.MsgUpdateBasketFee;
                        };
                        updateCurator(value: _122.MsgUpdateCurator): {
                            typeUrl: string;
                            value: _122.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: _122.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: _122.MsgUpdateDateCriteria;
                        };
                    };
                    toJSON: {
                        create(value: _122.MsgCreate): {
                            typeUrl: string;
                            value: unknown;
                        };
                        put(value: _122.MsgPut): {
                            typeUrl: string;
                            value: unknown;
                        };
                        take(value: _122.MsgTake): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateBasketFee(value: _122.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateCurator(value: _122.MsgUpdateCurator): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateDateCriteria(value: _122.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        create(value: any): {
                            typeUrl: string;
                            value: _122.MsgCreate;
                        };
                        put(value: any): {
                            typeUrl: string;
                            value: _122.MsgPut;
                        };
                        take(value: any): {
                            typeUrl: string;
                            value: _122.MsgTake;
                        };
                        updateBasketFee(value: any): {
                            typeUrl: string;
                            value: _122.MsgUpdateBasketFee;
                        };
                        updateCurator(value: any): {
                            typeUrl: string;
                            value: _122.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: any): {
                            typeUrl: string;
                            value: _122.MsgUpdateDateCriteria;
                        };
                    };
                    fromPartial: {
                        create(value: _122.MsgCreate): {
                            typeUrl: string;
                            value: _122.MsgCreate;
                        };
                        put(value: _122.MsgPut): {
                            typeUrl: string;
                            value: _122.MsgPut;
                        };
                        take(value: _122.MsgTake): {
                            typeUrl: string;
                            value: _122.MsgTake;
                        };
                        updateBasketFee(value: _122.MsgUpdateBasketFee): {
                            typeUrl: string;
                            value: _122.MsgUpdateBasketFee;
                        };
                        updateCurator(value: _122.MsgUpdateCurator): {
                            typeUrl: string;
                            value: _122.MsgUpdateCurator;
                        };
                        updateDateCriteria(value: _122.MsgUpdateDateCriteria): {
                            typeUrl: string;
                            value: _122.MsgUpdateDateCriteria;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.basket.v1.MsgCreate": {
                        aminoType: string;
                        toAmino: (message: _122.MsgCreate) => _122.MsgCreateAmino;
                        fromAmino: (object: _122.MsgCreateAmino) => _122.MsgCreate;
                    };
                    "/regen.ecocredit.basket.v1.MsgPut": {
                        aminoType: string;
                        toAmino: (message: _122.MsgPut) => _122.MsgPutAmino;
                        fromAmino: (object: _122.MsgPutAmino) => _122.MsgPut;
                    };
                    "/regen.ecocredit.basket.v1.MsgTake": {
                        aminoType: string;
                        toAmino: (message: _122.MsgTake) => _122.MsgTakeAmino;
                        fromAmino: (object: _122.MsgTakeAmino) => _122.MsgTake;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateBasketFee": {
                        aminoType: string;
                        toAmino: (message: _122.MsgUpdateBasketFee) => _122.MsgUpdateBasketFeeAmino;
                        fromAmino: (object: _122.MsgUpdateBasketFeeAmino) => _122.MsgUpdateBasketFee;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateCurator": {
                        aminoType: string;
                        toAmino: (message: _122.MsgUpdateCurator) => _122.MsgUpdateCuratorAmino;
                        fromAmino: (object: _122.MsgUpdateCuratorAmino) => _122.MsgUpdateCurator;
                    };
                    "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria": {
                        aminoType: string;
                        toAmino: (message: _122.MsgUpdateDateCriteria) => _122.MsgUpdateDateCriteriaAmino;
                        fromAmino: (object: _122.MsgUpdateDateCriteriaAmino) => _122.MsgUpdateDateCriteria;
                    };
                };
                BasketCredit: {
                    encode(message: _123.BasketCredit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.BasketCredit;
                    fromJSON(object: any): _123.BasketCredit;
                    toJSON(message: _123.BasketCredit): unknown;
                    fromPartial(object: Partial<_123.BasketCredit>): _123.BasketCredit;
                    fromAmino(object: _123.BasketCreditAmino): _123.BasketCredit;
                    toAmino(message: _123.BasketCredit): _123.BasketCreditAmino;
                    fromAminoMsg(object: _123.BasketCreditAminoMsg): _123.BasketCredit;
                    fromProtoMsg(message: _123.BasketCreditProtoMsg): _123.BasketCredit;
                    toProto(message: _123.BasketCredit): Uint8Array;
                    toProtoMsg(message: _123.BasketCredit): _123.BasketCreditProtoMsg;
                };
                DateCriteria: {
                    encode(message: _123.DateCriteria, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _123.DateCriteria;
                    fromJSON(object: any): _123.DateCriteria;
                    toJSON(message: _123.DateCriteria): unknown;
                    fromPartial(object: Partial<_123.DateCriteria>): _123.DateCriteria;
                    fromAmino(object: _123.DateCriteriaAmino): _123.DateCriteria;
                    toAmino(message: _123.DateCriteria): _123.DateCriteriaAmino;
                    fromAminoMsg(object: _123.DateCriteriaAminoMsg): _123.DateCriteria;
                    fromProtoMsg(message: _123.DateCriteriaProtoMsg): _123.DateCriteria;
                    toProto(message: _123.DateCriteria): Uint8Array;
                    toProtoMsg(message: _123.DateCriteria): _123.DateCriteriaProtoMsg;
                };
                MsgCreate: {
                    encode(message: _122.MsgCreate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.MsgCreate;
                    fromJSON(object: any): _122.MsgCreate;
                    toJSON(message: _122.MsgCreate): unknown;
                    fromPartial(object: Partial<_122.MsgCreate>): _122.MsgCreate;
                    fromAmino(object: _122.MsgCreateAmino): _122.MsgCreate;
                    toAmino(message: _122.MsgCreate): _122.MsgCreateAmino;
                    fromAminoMsg(object: _122.MsgCreateAminoMsg): _122.MsgCreate;
                    toAminoMsg(message: _122.MsgCreate): _122.MsgCreateAminoMsg;
                    fromProtoMsg(message: _122.MsgCreateProtoMsg): _122.MsgCreate;
                    toProto(message: _122.MsgCreate): Uint8Array;
                    toProtoMsg(message: _122.MsgCreate): _122.MsgCreateProtoMsg;
                };
                MsgCreateResponse: {
                    encode(message: _122.MsgCreateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.MsgCreateResponse;
                    fromJSON(object: any): _122.MsgCreateResponse;
                    toJSON(message: _122.MsgCreateResponse): unknown;
                    fromPartial(object: Partial<_122.MsgCreateResponse>): _122.MsgCreateResponse;
                    fromAmino(object: _122.MsgCreateResponseAmino): _122.MsgCreateResponse;
                    toAmino(message: _122.MsgCreateResponse): _122.MsgCreateResponseAmino;
                    fromAminoMsg(object: _122.MsgCreateResponseAminoMsg): _122.MsgCreateResponse;
                    fromProtoMsg(message: _122.MsgCreateResponseProtoMsg): _122.MsgCreateResponse;
                    toProto(message: _122.MsgCreateResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgCreateResponse): _122.MsgCreateResponseProtoMsg;
                };
                MsgPut: {
                    encode(message: _122.MsgPut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.MsgPut;
                    fromJSON(object: any): _122.MsgPut;
                    toJSON(message: _122.MsgPut): unknown;
                    fromPartial(object: Partial<_122.MsgPut>): _122.MsgPut;
                    fromAmino(object: _122.MsgPutAmino): _122.MsgPut;
                    toAmino(message: _122.MsgPut): _122.MsgPutAmino;
                    fromAminoMsg(object: _122.MsgPutAminoMsg): _122.MsgPut;
                    toAminoMsg(message: _122.MsgPut): _122.MsgPutAminoMsg;
                    fromProtoMsg(message: _122.MsgPutProtoMsg): _122.MsgPut;
                    toProto(message: _122.MsgPut): Uint8Array;
                    toProtoMsg(message: _122.MsgPut): _122.MsgPutProtoMsg;
                };
                MsgPutResponse: {
                    encode(message: _122.MsgPutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.MsgPutResponse;
                    fromJSON(object: any): _122.MsgPutResponse;
                    toJSON(message: _122.MsgPutResponse): unknown;
                    fromPartial(object: Partial<_122.MsgPutResponse>): _122.MsgPutResponse;
                    fromAmino(object: _122.MsgPutResponseAmino): _122.MsgPutResponse;
                    toAmino(message: _122.MsgPutResponse): _122.MsgPutResponseAmino;
                    fromAminoMsg(object: _122.MsgPutResponseAminoMsg): _122.MsgPutResponse;
                    fromProtoMsg(message: _122.MsgPutResponseProtoMsg): _122.MsgPutResponse;
                    toProto(message: _122.MsgPutResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgPutResponse): _122.MsgPutResponseProtoMsg;
                };
                MsgTake: {
                    encode(message: _122.MsgTake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.MsgTake;
                    fromJSON(object: any): _122.MsgTake;
                    toJSON(message: _122.MsgTake): unknown;
                    fromPartial(object: Partial<_122.MsgTake>): _122.MsgTake;
                    fromAmino(object: _122.MsgTakeAmino): _122.MsgTake;
                    toAmino(message: _122.MsgTake): _122.MsgTakeAmino;
                    fromAminoMsg(object: _122.MsgTakeAminoMsg): _122.MsgTake;
                    toAminoMsg(message: _122.MsgTake): _122.MsgTakeAminoMsg;
                    fromProtoMsg(message: _122.MsgTakeProtoMsg): _122.MsgTake;
                    toProto(message: _122.MsgTake): Uint8Array;
                    toProtoMsg(message: _122.MsgTake): _122.MsgTakeProtoMsg;
                };
                MsgTakeResponse: {
                    encode(message: _122.MsgTakeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.MsgTakeResponse;
                    fromJSON(object: any): _122.MsgTakeResponse;
                    toJSON(message: _122.MsgTakeResponse): unknown;
                    fromPartial(object: Partial<_122.MsgTakeResponse>): _122.MsgTakeResponse;
                    fromAmino(object: _122.MsgTakeResponseAmino): _122.MsgTakeResponse;
                    toAmino(message: _122.MsgTakeResponse): _122.MsgTakeResponseAmino;
                    fromAminoMsg(object: _122.MsgTakeResponseAminoMsg): _122.MsgTakeResponse;
                    fromProtoMsg(message: _122.MsgTakeResponseProtoMsg): _122.MsgTakeResponse;
                    toProto(message: _122.MsgTakeResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgTakeResponse): _122.MsgTakeResponseProtoMsg;
                };
                MsgUpdateBasketFee: {
                    encode(message: _122.MsgUpdateBasketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.MsgUpdateBasketFee;
                    fromJSON(object: any): _122.MsgUpdateBasketFee;
                    toJSON(message: _122.MsgUpdateBasketFee): unknown;
                    fromPartial(object: Partial<_122.MsgUpdateBasketFee>): _122.MsgUpdateBasketFee;
                    fromAmino(object: _122.MsgUpdateBasketFeeAmino): _122.MsgUpdateBasketFee;
                    toAmino(message: _122.MsgUpdateBasketFee): _122.MsgUpdateBasketFeeAmino;
                    fromAminoMsg(object: _122.MsgUpdateBasketFeeAminoMsg): _122.MsgUpdateBasketFee;
                    toAminoMsg(message: _122.MsgUpdateBasketFee): _122.MsgUpdateBasketFeeAminoMsg;
                    fromProtoMsg(message: _122.MsgUpdateBasketFeeProtoMsg): _122.MsgUpdateBasketFee;
                    toProto(message: _122.MsgUpdateBasketFee): Uint8Array;
                    toProtoMsg(message: _122.MsgUpdateBasketFee): _122.MsgUpdateBasketFeeProtoMsg;
                };
                MsgUpdateBasketFeeResponse: {
                    encode(_: _122.MsgUpdateBasketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.MsgUpdateBasketFeeResponse;
                    fromJSON(_: any): _122.MsgUpdateBasketFeeResponse;
                    toJSON(_: _122.MsgUpdateBasketFeeResponse): unknown;
                    fromPartial(_: Partial<_122.MsgUpdateBasketFeeResponse>): _122.MsgUpdateBasketFeeResponse;
                    fromAmino(_: _122.MsgUpdateBasketFeeResponseAmino): _122.MsgUpdateBasketFeeResponse;
                    toAmino(_: _122.MsgUpdateBasketFeeResponse): _122.MsgUpdateBasketFeeResponseAmino;
                    fromAminoMsg(object: _122.MsgUpdateBasketFeeResponseAminoMsg): _122.MsgUpdateBasketFeeResponse;
                    fromProtoMsg(message: _122.MsgUpdateBasketFeeResponseProtoMsg): _122.MsgUpdateBasketFeeResponse;
                    toProto(message: _122.MsgUpdateBasketFeeResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgUpdateBasketFeeResponse): _122.MsgUpdateBasketFeeResponseProtoMsg;
                };
                MsgUpdateCurator: {
                    encode(message: _122.MsgUpdateCurator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.MsgUpdateCurator;
                    fromJSON(object: any): _122.MsgUpdateCurator;
                    toJSON(message: _122.MsgUpdateCurator): unknown;
                    fromPartial(object: Partial<_122.MsgUpdateCurator>): _122.MsgUpdateCurator;
                    fromAmino(object: _122.MsgUpdateCuratorAmino): _122.MsgUpdateCurator;
                    toAmino(message: _122.MsgUpdateCurator): _122.MsgUpdateCuratorAmino;
                    fromAminoMsg(object: _122.MsgUpdateCuratorAminoMsg): _122.MsgUpdateCurator;
                    toAminoMsg(message: _122.MsgUpdateCurator): _122.MsgUpdateCuratorAminoMsg;
                    fromProtoMsg(message: _122.MsgUpdateCuratorProtoMsg): _122.MsgUpdateCurator;
                    toProto(message: _122.MsgUpdateCurator): Uint8Array;
                    toProtoMsg(message: _122.MsgUpdateCurator): _122.MsgUpdateCuratorProtoMsg;
                };
                MsgUpdateCuratorResponse: {
                    encode(_: _122.MsgUpdateCuratorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.MsgUpdateCuratorResponse;
                    fromJSON(_: any): _122.MsgUpdateCuratorResponse;
                    toJSON(_: _122.MsgUpdateCuratorResponse): unknown;
                    fromPartial(_: Partial<_122.MsgUpdateCuratorResponse>): _122.MsgUpdateCuratorResponse;
                    fromAmino(_: _122.MsgUpdateCuratorResponseAmino): _122.MsgUpdateCuratorResponse;
                    toAmino(_: _122.MsgUpdateCuratorResponse): _122.MsgUpdateCuratorResponseAmino;
                    fromAminoMsg(object: _122.MsgUpdateCuratorResponseAminoMsg): _122.MsgUpdateCuratorResponse;
                    fromProtoMsg(message: _122.MsgUpdateCuratorResponseProtoMsg): _122.MsgUpdateCuratorResponse;
                    toProto(message: _122.MsgUpdateCuratorResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgUpdateCuratorResponse): _122.MsgUpdateCuratorResponseProtoMsg;
                };
                MsgUpdateDateCriteria: {
                    encode(message: _122.MsgUpdateDateCriteria, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.MsgUpdateDateCriteria;
                    fromJSON(object: any): _122.MsgUpdateDateCriteria;
                    toJSON(message: _122.MsgUpdateDateCriteria): unknown;
                    fromPartial(object: Partial<_122.MsgUpdateDateCriteria>): _122.MsgUpdateDateCriteria;
                    fromAmino(object: _122.MsgUpdateDateCriteriaAmino): _122.MsgUpdateDateCriteria;
                    toAmino(message: _122.MsgUpdateDateCriteria): _122.MsgUpdateDateCriteriaAmino;
                    fromAminoMsg(object: _122.MsgUpdateDateCriteriaAminoMsg): _122.MsgUpdateDateCriteria;
                    toAminoMsg(message: _122.MsgUpdateDateCriteria): _122.MsgUpdateDateCriteriaAminoMsg;
                    fromProtoMsg(message: _122.MsgUpdateDateCriteriaProtoMsg): _122.MsgUpdateDateCriteria;
                    toProto(message: _122.MsgUpdateDateCriteria): Uint8Array;
                    toProtoMsg(message: _122.MsgUpdateDateCriteria): _122.MsgUpdateDateCriteriaProtoMsg;
                };
                MsgUpdateDateCriteriaResponse: {
                    encode(_: _122.MsgUpdateDateCriteriaResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _122.MsgUpdateDateCriteriaResponse;
                    fromJSON(_: any): _122.MsgUpdateDateCriteriaResponse;
                    toJSON(_: _122.MsgUpdateDateCriteriaResponse): unknown;
                    fromPartial(_: Partial<_122.MsgUpdateDateCriteriaResponse>): _122.MsgUpdateDateCriteriaResponse;
                    fromAmino(_: _122.MsgUpdateDateCriteriaResponseAmino): _122.MsgUpdateDateCriteriaResponse;
                    toAmino(_: _122.MsgUpdateDateCriteriaResponse): _122.MsgUpdateDateCriteriaResponseAmino;
                    fromAminoMsg(object: _122.MsgUpdateDateCriteriaResponseAminoMsg): _122.MsgUpdateDateCriteriaResponse;
                    fromProtoMsg(message: _122.MsgUpdateDateCriteriaResponseProtoMsg): _122.MsgUpdateDateCriteriaResponse;
                    toProto(message: _122.MsgUpdateDateCriteriaResponse): Uint8Array;
                    toProtoMsg(message: _122.MsgUpdateDateCriteriaResponse): _122.MsgUpdateDateCriteriaResponseProtoMsg;
                };
                Basket: {
                    encode(message: _121.Basket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.Basket;
                    fromJSON(object: any): _121.Basket;
                    toJSON(message: _121.Basket): unknown;
                    fromPartial(object: Partial<_121.Basket>): _121.Basket;
                    fromAmino(object: _121.BasketAmino): _121.Basket;
                    toAmino(message: _121.Basket): _121.BasketAmino;
                    fromAminoMsg(object: _121.BasketAminoMsg): _121.Basket;
                    fromProtoMsg(message: _121.BasketProtoMsg): _121.Basket;
                    toProto(message: _121.Basket): Uint8Array;
                    toProtoMsg(message: _121.Basket): _121.BasketProtoMsg;
                };
                BasketClass: {
                    encode(message: _121.BasketClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.BasketClass;
                    fromJSON(object: any): _121.BasketClass;
                    toJSON(message: _121.BasketClass): unknown;
                    fromPartial(object: Partial<_121.BasketClass>): _121.BasketClass;
                    fromAmino(object: _121.BasketClassAmino): _121.BasketClass;
                    toAmino(message: _121.BasketClass): _121.BasketClassAmino;
                    fromAminoMsg(object: _121.BasketClassAminoMsg): _121.BasketClass;
                    fromProtoMsg(message: _121.BasketClassProtoMsg): _121.BasketClass;
                    toProto(message: _121.BasketClass): Uint8Array;
                    toProtoMsg(message: _121.BasketClass): _121.BasketClassProtoMsg;
                };
                BasketBalance: {
                    encode(message: _121.BasketBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.BasketBalance;
                    fromJSON(object: any): _121.BasketBalance;
                    toJSON(message: _121.BasketBalance): unknown;
                    fromPartial(object: Partial<_121.BasketBalance>): _121.BasketBalance;
                    fromAmino(object: _121.BasketBalanceAmino): _121.BasketBalance;
                    toAmino(message: _121.BasketBalance): _121.BasketBalanceAmino;
                    fromAminoMsg(object: _121.BasketBalanceAminoMsg): _121.BasketBalance;
                    fromProtoMsg(message: _121.BasketBalanceProtoMsg): _121.BasketBalance;
                    toProto(message: _121.BasketBalance): Uint8Array;
                    toProtoMsg(message: _121.BasketBalance): _121.BasketBalanceProtoMsg;
                };
                BasketFee: {
                    encode(message: _121.BasketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _121.BasketFee;
                    fromJSON(object: any): _121.BasketFee;
                    toJSON(message: _121.BasketFee): unknown;
                    fromPartial(object: Partial<_121.BasketFee>): _121.BasketFee;
                    fromAmino(object: _121.BasketFeeAmino): _121.BasketFee;
                    toAmino(message: _121.BasketFee): _121.BasketFeeAmino;
                    fromAminoMsg(object: _121.BasketFeeAminoMsg): _121.BasketFee;
                    fromProtoMsg(message: _121.BasketFeeProtoMsg): _121.BasketFee;
                    toProto(message: _121.BasketFee): Uint8Array;
                    toProtoMsg(message: _121.BasketFee): _121.BasketFeeProtoMsg;
                };
                QueryBasketRequest: {
                    encode(message: _120.QueryBasketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.QueryBasketRequest;
                    fromJSON(object: any): _120.QueryBasketRequest;
                    toJSON(message: _120.QueryBasketRequest): unknown;
                    fromPartial(object: Partial<_120.QueryBasketRequest>): _120.QueryBasketRequest;
                    fromAmino(object: _120.QueryBasketRequestAmino): _120.QueryBasketRequest;
                    toAmino(message: _120.QueryBasketRequest): _120.QueryBasketRequestAmino;
                    fromAminoMsg(object: _120.QueryBasketRequestAminoMsg): _120.QueryBasketRequest;
                    fromProtoMsg(message: _120.QueryBasketRequestProtoMsg): _120.QueryBasketRequest;
                    toProto(message: _120.QueryBasketRequest): Uint8Array;
                    toProtoMsg(message: _120.QueryBasketRequest): _120.QueryBasketRequestProtoMsg;
                };
                QueryBasketResponse: {
                    encode(message: _120.QueryBasketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.QueryBasketResponse;
                    fromJSON(object: any): _120.QueryBasketResponse;
                    toJSON(message: _120.QueryBasketResponse): unknown;
                    fromPartial(object: Partial<_120.QueryBasketResponse>): _120.QueryBasketResponse;
                    fromAmino(object: _120.QueryBasketResponseAmino): _120.QueryBasketResponse;
                    toAmino(message: _120.QueryBasketResponse): _120.QueryBasketResponseAmino;
                    fromAminoMsg(object: _120.QueryBasketResponseAminoMsg): _120.QueryBasketResponse;
                    fromProtoMsg(message: _120.QueryBasketResponseProtoMsg): _120.QueryBasketResponse;
                    toProto(message: _120.QueryBasketResponse): Uint8Array;
                    toProtoMsg(message: _120.QueryBasketResponse): _120.QueryBasketResponseProtoMsg;
                };
                QueryBasketsRequest: {
                    encode(message: _120.QueryBasketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.QueryBasketsRequest;
                    fromJSON(object: any): _120.QueryBasketsRequest;
                    toJSON(message: _120.QueryBasketsRequest): unknown;
                    fromPartial(object: Partial<_120.QueryBasketsRequest>): _120.QueryBasketsRequest;
                    fromAmino(object: _120.QueryBasketsRequestAmino): _120.QueryBasketsRequest;
                    toAmino(message: _120.QueryBasketsRequest): _120.QueryBasketsRequestAmino;
                    fromAminoMsg(object: _120.QueryBasketsRequestAminoMsg): _120.QueryBasketsRequest;
                    fromProtoMsg(message: _120.QueryBasketsRequestProtoMsg): _120.QueryBasketsRequest;
                    toProto(message: _120.QueryBasketsRequest): Uint8Array;
                    toProtoMsg(message: _120.QueryBasketsRequest): _120.QueryBasketsRequestProtoMsg;
                };
                QueryBasketsResponse: {
                    encode(message: _120.QueryBasketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.QueryBasketsResponse;
                    fromJSON(object: any): _120.QueryBasketsResponse;
                    toJSON(message: _120.QueryBasketsResponse): unknown;
                    fromPartial(object: Partial<_120.QueryBasketsResponse>): _120.QueryBasketsResponse;
                    fromAmino(object: _120.QueryBasketsResponseAmino): _120.QueryBasketsResponse;
                    toAmino(message: _120.QueryBasketsResponse): _120.QueryBasketsResponseAmino;
                    fromAminoMsg(object: _120.QueryBasketsResponseAminoMsg): _120.QueryBasketsResponse;
                    fromProtoMsg(message: _120.QueryBasketsResponseProtoMsg): _120.QueryBasketsResponse;
                    toProto(message: _120.QueryBasketsResponse): Uint8Array;
                    toProtoMsg(message: _120.QueryBasketsResponse): _120.QueryBasketsResponseProtoMsg;
                };
                QueryBasketBalancesRequest: {
                    encode(message: _120.QueryBasketBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.QueryBasketBalancesRequest;
                    fromJSON(object: any): _120.QueryBasketBalancesRequest;
                    toJSON(message: _120.QueryBasketBalancesRequest): unknown;
                    fromPartial(object: Partial<_120.QueryBasketBalancesRequest>): _120.QueryBasketBalancesRequest;
                    fromAmino(object: _120.QueryBasketBalancesRequestAmino): _120.QueryBasketBalancesRequest;
                    toAmino(message: _120.QueryBasketBalancesRequest): _120.QueryBasketBalancesRequestAmino;
                    fromAminoMsg(object: _120.QueryBasketBalancesRequestAminoMsg): _120.QueryBasketBalancesRequest;
                    fromProtoMsg(message: _120.QueryBasketBalancesRequestProtoMsg): _120.QueryBasketBalancesRequest;
                    toProto(message: _120.QueryBasketBalancesRequest): Uint8Array;
                    toProtoMsg(message: _120.QueryBasketBalancesRequest): _120.QueryBasketBalancesRequestProtoMsg;
                };
                QueryBasketBalancesResponse: {
                    encode(message: _120.QueryBasketBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.QueryBasketBalancesResponse;
                    fromJSON(object: any): _120.QueryBasketBalancesResponse;
                    toJSON(message: _120.QueryBasketBalancesResponse): unknown;
                    fromPartial(object: Partial<_120.QueryBasketBalancesResponse>): _120.QueryBasketBalancesResponse;
                    fromAmino(object: _120.QueryBasketBalancesResponseAmino): _120.QueryBasketBalancesResponse;
                    toAmino(message: _120.QueryBasketBalancesResponse): _120.QueryBasketBalancesResponseAmino;
                    fromAminoMsg(object: _120.QueryBasketBalancesResponseAminoMsg): _120.QueryBasketBalancesResponse;
                    fromProtoMsg(message: _120.QueryBasketBalancesResponseProtoMsg): _120.QueryBasketBalancesResponse;
                    toProto(message: _120.QueryBasketBalancesResponse): Uint8Array;
                    toProtoMsg(message: _120.QueryBasketBalancesResponse): _120.QueryBasketBalancesResponseProtoMsg;
                };
                QueryBasketBalanceRequest: {
                    encode(message: _120.QueryBasketBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.QueryBasketBalanceRequest;
                    fromJSON(object: any): _120.QueryBasketBalanceRequest;
                    toJSON(message: _120.QueryBasketBalanceRequest): unknown;
                    fromPartial(object: Partial<_120.QueryBasketBalanceRequest>): _120.QueryBasketBalanceRequest;
                    fromAmino(object: _120.QueryBasketBalanceRequestAmino): _120.QueryBasketBalanceRequest;
                    toAmino(message: _120.QueryBasketBalanceRequest): _120.QueryBasketBalanceRequestAmino;
                    fromAminoMsg(object: _120.QueryBasketBalanceRequestAminoMsg): _120.QueryBasketBalanceRequest;
                    fromProtoMsg(message: _120.QueryBasketBalanceRequestProtoMsg): _120.QueryBasketBalanceRequest;
                    toProto(message: _120.QueryBasketBalanceRequest): Uint8Array;
                    toProtoMsg(message: _120.QueryBasketBalanceRequest): _120.QueryBasketBalanceRequestProtoMsg;
                };
                QueryBasketBalanceResponse: {
                    encode(message: _120.QueryBasketBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.QueryBasketBalanceResponse;
                    fromJSON(object: any): _120.QueryBasketBalanceResponse;
                    toJSON(message: _120.QueryBasketBalanceResponse): unknown;
                    fromPartial(object: Partial<_120.QueryBasketBalanceResponse>): _120.QueryBasketBalanceResponse;
                    fromAmino(object: _120.QueryBasketBalanceResponseAmino): _120.QueryBasketBalanceResponse;
                    toAmino(message: _120.QueryBasketBalanceResponse): _120.QueryBasketBalanceResponseAmino;
                    fromAminoMsg(object: _120.QueryBasketBalanceResponseAminoMsg): _120.QueryBasketBalanceResponse;
                    fromProtoMsg(message: _120.QueryBasketBalanceResponseProtoMsg): _120.QueryBasketBalanceResponse;
                    toProto(message: _120.QueryBasketBalanceResponse): Uint8Array;
                    toProtoMsg(message: _120.QueryBasketBalanceResponse): _120.QueryBasketBalanceResponseProtoMsg;
                };
                BasketInfo: {
                    encode(message: _120.BasketInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.BasketInfo;
                    fromJSON(object: any): _120.BasketInfo;
                    toJSON(message: _120.BasketInfo): unknown;
                    fromPartial(object: Partial<_120.BasketInfo>): _120.BasketInfo;
                    fromAmino(object: _120.BasketInfoAmino): _120.BasketInfo;
                    toAmino(message: _120.BasketInfo): _120.BasketInfoAmino;
                    fromAminoMsg(object: _120.BasketInfoAminoMsg): _120.BasketInfo;
                    fromProtoMsg(message: _120.BasketInfoProtoMsg): _120.BasketInfo;
                    toProto(message: _120.BasketInfo): Uint8Array;
                    toProtoMsg(message: _120.BasketInfo): _120.BasketInfoProtoMsg;
                };
                BasketBalanceInfo: {
                    encode(message: _120.BasketBalanceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.BasketBalanceInfo;
                    fromJSON(object: any): _120.BasketBalanceInfo;
                    toJSON(message: _120.BasketBalanceInfo): unknown;
                    fromPartial(object: Partial<_120.BasketBalanceInfo>): _120.BasketBalanceInfo;
                    fromAmino(object: _120.BasketBalanceInfoAmino): _120.BasketBalanceInfo;
                    toAmino(message: _120.BasketBalanceInfo): _120.BasketBalanceInfoAmino;
                    fromAminoMsg(object: _120.BasketBalanceInfoAminoMsg): _120.BasketBalanceInfo;
                    fromProtoMsg(message: _120.BasketBalanceInfoProtoMsg): _120.BasketBalanceInfo;
                    toProto(message: _120.BasketBalanceInfo): Uint8Array;
                    toProtoMsg(message: _120.BasketBalanceInfo): _120.BasketBalanceInfoProtoMsg;
                };
                QueryBasketFeeRequest: {
                    encode(_: _120.QueryBasketFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.QueryBasketFeeRequest;
                    fromJSON(_: any): _120.QueryBasketFeeRequest;
                    toJSON(_: _120.QueryBasketFeeRequest): unknown;
                    fromPartial(_: Partial<_120.QueryBasketFeeRequest>): _120.QueryBasketFeeRequest;
                    fromAmino(_: _120.QueryBasketFeeRequestAmino): _120.QueryBasketFeeRequest;
                    toAmino(_: _120.QueryBasketFeeRequest): _120.QueryBasketFeeRequestAmino;
                    fromAminoMsg(object: _120.QueryBasketFeeRequestAminoMsg): _120.QueryBasketFeeRequest;
                    fromProtoMsg(message: _120.QueryBasketFeeRequestProtoMsg): _120.QueryBasketFeeRequest;
                    toProto(message: _120.QueryBasketFeeRequest): Uint8Array;
                    toProtoMsg(message: _120.QueryBasketFeeRequest): _120.QueryBasketFeeRequestProtoMsg;
                };
                QueryBasketFeeResponse: {
                    encode(message: _120.QueryBasketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _120.QueryBasketFeeResponse;
                    fromJSON(object: any): _120.QueryBasketFeeResponse;
                    toJSON(message: _120.QueryBasketFeeResponse): unknown;
                    fromPartial(object: Partial<_120.QueryBasketFeeResponse>): _120.QueryBasketFeeResponse;
                    fromAmino(object: _120.QueryBasketFeeResponseAmino): _120.QueryBasketFeeResponse;
                    toAmino(message: _120.QueryBasketFeeResponse): _120.QueryBasketFeeResponseAmino;
                    fromAminoMsg(object: _120.QueryBasketFeeResponseAminoMsg): _120.QueryBasketFeeResponse;
                    fromProtoMsg(message: _120.QueryBasketFeeResponseProtoMsg): _120.QueryBasketFeeResponse;
                    toProto(message: _120.QueryBasketFeeResponse): Uint8Array;
                    toProtoMsg(message: _120.QueryBasketFeeResponse): _120.QueryBasketFeeResponseProtoMsg;
                };
                EventCreate: {
                    encode(message: _119.EventCreate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.EventCreate;
                    fromJSON(object: any): _119.EventCreate;
                    toJSON(message: _119.EventCreate): unknown;
                    fromPartial(object: Partial<_119.EventCreate>): _119.EventCreate;
                    fromAmino(object: _119.EventCreateAmino): _119.EventCreate;
                    toAmino(message: _119.EventCreate): _119.EventCreateAmino;
                    fromAminoMsg(object: _119.EventCreateAminoMsg): _119.EventCreate;
                    fromProtoMsg(message: _119.EventCreateProtoMsg): _119.EventCreate;
                    toProto(message: _119.EventCreate): Uint8Array;
                    toProtoMsg(message: _119.EventCreate): _119.EventCreateProtoMsg;
                };
                EventPut: {
                    encode(message: _119.EventPut, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.EventPut;
                    fromJSON(object: any): _119.EventPut;
                    toJSON(message: _119.EventPut): unknown;
                    fromPartial(object: Partial<_119.EventPut>): _119.EventPut;
                    fromAmino(object: _119.EventPutAmino): _119.EventPut;
                    toAmino(message: _119.EventPut): _119.EventPutAmino;
                    fromAminoMsg(object: _119.EventPutAminoMsg): _119.EventPut;
                    fromProtoMsg(message: _119.EventPutProtoMsg): _119.EventPut;
                    toProto(message: _119.EventPut): Uint8Array;
                    toProtoMsg(message: _119.EventPut): _119.EventPutProtoMsg;
                };
                EventTake: {
                    encode(message: _119.EventTake, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.EventTake;
                    fromJSON(object: any): _119.EventTake;
                    toJSON(message: _119.EventTake): unknown;
                    fromPartial(object: Partial<_119.EventTake>): _119.EventTake;
                    fromAmino(object: _119.EventTakeAmino): _119.EventTake;
                    toAmino(message: _119.EventTake): _119.EventTakeAmino;
                    fromAminoMsg(object: _119.EventTakeAminoMsg): _119.EventTake;
                    fromProtoMsg(message: _119.EventTakeProtoMsg): _119.EventTake;
                    toProto(message: _119.EventTake): Uint8Array;
                    toProtoMsg(message: _119.EventTake): _119.EventTakeProtoMsg;
                };
                EventUpdateCurator: {
                    encode(message: _119.EventUpdateCurator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.EventUpdateCurator;
                    fromJSON(object: any): _119.EventUpdateCurator;
                    toJSON(message: _119.EventUpdateCurator): unknown;
                    fromPartial(object: Partial<_119.EventUpdateCurator>): _119.EventUpdateCurator;
                    fromAmino(object: _119.EventUpdateCuratorAmino): _119.EventUpdateCurator;
                    toAmino(message: _119.EventUpdateCurator): _119.EventUpdateCuratorAmino;
                    fromAminoMsg(object: _119.EventUpdateCuratorAminoMsg): _119.EventUpdateCurator;
                    fromProtoMsg(message: _119.EventUpdateCuratorProtoMsg): _119.EventUpdateCurator;
                    toProto(message: _119.EventUpdateCurator): Uint8Array;
                    toProtoMsg(message: _119.EventUpdateCurator): _119.EventUpdateCuratorProtoMsg;
                };
                EventUpdateDateCriteria: {
                    encode(message: _119.EventUpdateDateCriteria, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _119.EventUpdateDateCriteria;
                    fromJSON(object: any): _119.EventUpdateDateCriteria;
                    toJSON(message: _119.EventUpdateDateCriteria): unknown;
                    fromPartial(object: Partial<_119.EventUpdateDateCriteria>): _119.EventUpdateDateCriteria;
                    fromAmino(object: _119.EventUpdateDateCriteriaAmino): _119.EventUpdateDateCriteria;
                    toAmino(message: _119.EventUpdateDateCriteria): _119.EventUpdateDateCriteriaAmino;
                    fromAminoMsg(object: _119.EventUpdateDateCriteriaAminoMsg): _119.EventUpdateDateCriteria;
                    fromProtoMsg(message: _119.EventUpdateDateCriteriaProtoMsg): _119.EventUpdateDateCriteria;
                    toProto(message: _119.EventUpdateDateCriteria): Uint8Array;
                    toProtoMsg(message: _119.EventUpdateDateCriteria): _119.EventUpdateDateCriteriaProtoMsg;
                };
            };
        }
        namespace marketplace {
            const v1: {
                LCDQueryClient: typeof _219.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        sell(value: _127.MsgSell): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateSellOrders(value: _127.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        cancelSellOrder(value: _127.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        buyDirect(value: _127.MsgBuyDirect): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        addAllowedDenom(value: _127.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        removeAllowedDenom(value: _127.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        sell(value: _127.MsgSell): {
                            typeUrl: string;
                            value: _127.MsgSell;
                        };
                        updateSellOrders(value: _127.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _127.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _127.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _127.MsgCancelSellOrder;
                        };
                        buyDirect(value: _127.MsgBuyDirect): {
                            typeUrl: string;
                            value: _127.MsgBuyDirect;
                        };
                        addAllowedDenom(value: _127.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: _127.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: _127.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: _127.MsgRemoveAllowedDenom;
                        };
                    };
                    toJSON: {
                        sell(value: _127.MsgSell): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateSellOrders(value: _127.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: unknown;
                        };
                        cancelSellOrder(value: _127.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: unknown;
                        };
                        buyDirect(value: _127.MsgBuyDirect): {
                            typeUrl: string;
                            value: unknown;
                        };
                        addAllowedDenom(value: _127.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: unknown;
                        };
                        removeAllowedDenom(value: _127.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        sell(value: any): {
                            typeUrl: string;
                            value: _127.MsgSell;
                        };
                        updateSellOrders(value: any): {
                            typeUrl: string;
                            value: _127.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: any): {
                            typeUrl: string;
                            value: _127.MsgCancelSellOrder;
                        };
                        buyDirect(value: any): {
                            typeUrl: string;
                            value: _127.MsgBuyDirect;
                        };
                        addAllowedDenom(value: any): {
                            typeUrl: string;
                            value: _127.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: any): {
                            typeUrl: string;
                            value: _127.MsgRemoveAllowedDenom;
                        };
                    };
                    fromPartial: {
                        sell(value: _127.MsgSell): {
                            typeUrl: string;
                            value: _127.MsgSell;
                        };
                        updateSellOrders(value: _127.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _127.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _127.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _127.MsgCancelSellOrder;
                        };
                        buyDirect(value: _127.MsgBuyDirect): {
                            typeUrl: string;
                            value: _127.MsgBuyDirect;
                        };
                        addAllowedDenom(value: _127.MsgAddAllowedDenom): {
                            typeUrl: string;
                            value: _127.MsgAddAllowedDenom;
                        };
                        removeAllowedDenom(value: _127.MsgRemoveAllowedDenom): {
                            typeUrl: string;
                            value: _127.MsgRemoveAllowedDenom;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.marketplace.v1.MsgSell": {
                        aminoType: string;
                        toAmino: (message: _127.MsgSell) => _127.MsgSellAmino;
                        fromAmino: (object: _127.MsgSellAmino) => _127.MsgSell;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
                        aminoType: string;
                        toAmino: (message: _127.MsgUpdateSellOrders) => _127.MsgUpdateSellOrdersAmino;
                        fromAmino: (object: _127.MsgUpdateSellOrdersAmino) => _127.MsgUpdateSellOrders;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
                        aminoType: string;
                        toAmino: (message: _127.MsgCancelSellOrder) => _127.MsgCancelSellOrderAmino;
                        fromAmino: (object: _127.MsgCancelSellOrderAmino) => _127.MsgCancelSellOrder;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
                        aminoType: string;
                        toAmino: (message: _127.MsgBuyDirect) => _127.MsgBuyDirectAmino;
                        fromAmino: (object: _127.MsgBuyDirectAmino) => _127.MsgBuyDirect;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom": {
                        aminoType: string;
                        toAmino: (message: _127.MsgAddAllowedDenom) => _127.MsgAddAllowedDenomAmino;
                        fromAmino: (object: _127.MsgAddAllowedDenomAmino) => _127.MsgAddAllowedDenom;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom": {
                        aminoType: string;
                        toAmino: (message: _127.MsgRemoveAllowedDenom) => _127.MsgRemoveAllowedDenomAmino;
                        fromAmino: (object: _127.MsgRemoveAllowedDenomAmino) => _127.MsgRemoveAllowedDenom;
                    };
                };
                AllowDenomProposal: {
                    encode(message: _128.AllowDenomProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _128.AllowDenomProposal;
                    fromJSON(object: any): _128.AllowDenomProposal;
                    toJSON(message: _128.AllowDenomProposal): unknown;
                    fromPartial(object: Partial<_128.AllowDenomProposal>): _128.AllowDenomProposal;
                    fromAmino(object: _128.AllowDenomProposalAmino): _128.AllowDenomProposal;
                    toAmino(message: _128.AllowDenomProposal): _128.AllowDenomProposalAmino;
                    fromAminoMsg(object: _128.AllowDenomProposalAminoMsg): _128.AllowDenomProposal;
                    fromProtoMsg(message: _128.AllowDenomProposalProtoMsg): _128.AllowDenomProposal;
                    toProto(message: _128.AllowDenomProposal): Uint8Array;
                    toProtoMsg(message: _128.AllowDenomProposal): _128.AllowDenomProposalProtoMsg;
                };
                MsgSell: {
                    encode(message: _127.MsgSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgSell;
                    fromJSON(object: any): _127.MsgSell;
                    toJSON(message: _127.MsgSell): unknown;
                    fromPartial(object: Partial<_127.MsgSell>): _127.MsgSell;
                    fromAmino(object: _127.MsgSellAmino): _127.MsgSell;
                    toAmino(message: _127.MsgSell): _127.MsgSellAmino;
                    fromAminoMsg(object: _127.MsgSellAminoMsg): _127.MsgSell;
                    toAminoMsg(message: _127.MsgSell): _127.MsgSellAminoMsg;
                    fromProtoMsg(message: _127.MsgSellProtoMsg): _127.MsgSell;
                    toProto(message: _127.MsgSell): Uint8Array;
                    toProtoMsg(message: _127.MsgSell): _127.MsgSellProtoMsg;
                };
                MsgSell_Order: {
                    encode(message: _127.MsgSell_Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgSell_Order;
                    fromJSON(object: any): _127.MsgSell_Order;
                    toJSON(message: _127.MsgSell_Order): unknown;
                    fromPartial(object: Partial<_127.MsgSell_Order>): _127.MsgSell_Order;
                    fromAmino(object: _127.MsgSell_OrderAmino): _127.MsgSell_Order;
                    toAmino(message: _127.MsgSell_Order): _127.MsgSell_OrderAmino;
                    fromAminoMsg(object: _127.MsgSell_OrderAminoMsg): _127.MsgSell_Order;
                    fromProtoMsg(message: _127.MsgSell_OrderProtoMsg): _127.MsgSell_Order;
                    toProto(message: _127.MsgSell_Order): Uint8Array;
                    toProtoMsg(message: _127.MsgSell_Order): _127.MsgSell_OrderProtoMsg;
                };
                MsgSellResponse: {
                    encode(message: _127.MsgSellResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgSellResponse;
                    fromJSON(object: any): _127.MsgSellResponse;
                    toJSON(message: _127.MsgSellResponse): unknown;
                    fromPartial(object: Partial<_127.MsgSellResponse>): _127.MsgSellResponse;
                    fromAmino(object: _127.MsgSellResponseAmino): _127.MsgSellResponse;
                    toAmino(message: _127.MsgSellResponse): _127.MsgSellResponseAmino;
                    fromAminoMsg(object: _127.MsgSellResponseAminoMsg): _127.MsgSellResponse;
                    fromProtoMsg(message: _127.MsgSellResponseProtoMsg): _127.MsgSellResponse;
                    toProto(message: _127.MsgSellResponse): Uint8Array;
                    toProtoMsg(message: _127.MsgSellResponse): _127.MsgSellResponseProtoMsg;
                };
                MsgUpdateSellOrders: {
                    encode(message: _127.MsgUpdateSellOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgUpdateSellOrders;
                    fromJSON(object: any): _127.MsgUpdateSellOrders;
                    toJSON(message: _127.MsgUpdateSellOrders): unknown;
                    fromPartial(object: Partial<_127.MsgUpdateSellOrders>): _127.MsgUpdateSellOrders;
                    fromAmino(object: _127.MsgUpdateSellOrdersAmino): _127.MsgUpdateSellOrders;
                    toAmino(message: _127.MsgUpdateSellOrders): _127.MsgUpdateSellOrdersAmino;
                    fromAminoMsg(object: _127.MsgUpdateSellOrdersAminoMsg): _127.MsgUpdateSellOrders;
                    toAminoMsg(message: _127.MsgUpdateSellOrders): _127.MsgUpdateSellOrdersAminoMsg;
                    fromProtoMsg(message: _127.MsgUpdateSellOrdersProtoMsg): _127.MsgUpdateSellOrders;
                    toProto(message: _127.MsgUpdateSellOrders): Uint8Array;
                    toProtoMsg(message: _127.MsgUpdateSellOrders): _127.MsgUpdateSellOrdersProtoMsg;
                };
                MsgUpdateSellOrders_Update: {
                    encode(message: _127.MsgUpdateSellOrders_Update, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgUpdateSellOrders_Update;
                    fromJSON(object: any): _127.MsgUpdateSellOrders_Update;
                    toJSON(message: _127.MsgUpdateSellOrders_Update): unknown;
                    fromPartial(object: Partial<_127.MsgUpdateSellOrders_Update>): _127.MsgUpdateSellOrders_Update;
                    fromAmino(object: _127.MsgUpdateSellOrders_UpdateAmino): _127.MsgUpdateSellOrders_Update;
                    toAmino(message: _127.MsgUpdateSellOrders_Update): _127.MsgUpdateSellOrders_UpdateAmino;
                    fromAminoMsg(object: _127.MsgUpdateSellOrders_UpdateAminoMsg): _127.MsgUpdateSellOrders_Update;
                    fromProtoMsg(message: _127.MsgUpdateSellOrders_UpdateProtoMsg): _127.MsgUpdateSellOrders_Update;
                    toProto(message: _127.MsgUpdateSellOrders_Update): Uint8Array;
                    toProtoMsg(message: _127.MsgUpdateSellOrders_Update): _127.MsgUpdateSellOrders_UpdateProtoMsg;
                };
                MsgUpdateSellOrdersResponse: {
                    encode(_: _127.MsgUpdateSellOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgUpdateSellOrdersResponse;
                    fromJSON(_: any): _127.MsgUpdateSellOrdersResponse;
                    toJSON(_: _127.MsgUpdateSellOrdersResponse): unknown;
                    fromPartial(_: Partial<_127.MsgUpdateSellOrdersResponse>): _127.MsgUpdateSellOrdersResponse;
                    fromAmino(_: _127.MsgUpdateSellOrdersResponseAmino): _127.MsgUpdateSellOrdersResponse;
                    toAmino(_: _127.MsgUpdateSellOrdersResponse): _127.MsgUpdateSellOrdersResponseAmino;
                    fromAminoMsg(object: _127.MsgUpdateSellOrdersResponseAminoMsg): _127.MsgUpdateSellOrdersResponse;
                    fromProtoMsg(message: _127.MsgUpdateSellOrdersResponseProtoMsg): _127.MsgUpdateSellOrdersResponse;
                    toProto(message: _127.MsgUpdateSellOrdersResponse): Uint8Array;
                    toProtoMsg(message: _127.MsgUpdateSellOrdersResponse): _127.MsgUpdateSellOrdersResponseProtoMsg;
                };
                MsgCancelSellOrder: {
                    encode(message: _127.MsgCancelSellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgCancelSellOrder;
                    fromJSON(object: any): _127.MsgCancelSellOrder;
                    toJSON(message: _127.MsgCancelSellOrder): unknown;
                    fromPartial(object: Partial<_127.MsgCancelSellOrder>): _127.MsgCancelSellOrder;
                    fromAmino(object: _127.MsgCancelSellOrderAmino): _127.MsgCancelSellOrder;
                    toAmino(message: _127.MsgCancelSellOrder): _127.MsgCancelSellOrderAmino;
                    fromAminoMsg(object: _127.MsgCancelSellOrderAminoMsg): _127.MsgCancelSellOrder;
                    toAminoMsg(message: _127.MsgCancelSellOrder): _127.MsgCancelSellOrderAminoMsg;
                    fromProtoMsg(message: _127.MsgCancelSellOrderProtoMsg): _127.MsgCancelSellOrder;
                    toProto(message: _127.MsgCancelSellOrder): Uint8Array;
                    toProtoMsg(message: _127.MsgCancelSellOrder): _127.MsgCancelSellOrderProtoMsg;
                };
                MsgCancelSellOrderResponse: {
                    encode(_: _127.MsgCancelSellOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgCancelSellOrderResponse;
                    fromJSON(_: any): _127.MsgCancelSellOrderResponse;
                    toJSON(_: _127.MsgCancelSellOrderResponse): unknown;
                    fromPartial(_: Partial<_127.MsgCancelSellOrderResponse>): _127.MsgCancelSellOrderResponse;
                    fromAmino(_: _127.MsgCancelSellOrderResponseAmino): _127.MsgCancelSellOrderResponse;
                    toAmino(_: _127.MsgCancelSellOrderResponse): _127.MsgCancelSellOrderResponseAmino;
                    fromAminoMsg(object: _127.MsgCancelSellOrderResponseAminoMsg): _127.MsgCancelSellOrderResponse;
                    fromProtoMsg(message: _127.MsgCancelSellOrderResponseProtoMsg): _127.MsgCancelSellOrderResponse;
                    toProto(message: _127.MsgCancelSellOrderResponse): Uint8Array;
                    toProtoMsg(message: _127.MsgCancelSellOrderResponse): _127.MsgCancelSellOrderResponseProtoMsg;
                };
                MsgBuyDirect: {
                    encode(message: _127.MsgBuyDirect, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgBuyDirect;
                    fromJSON(object: any): _127.MsgBuyDirect;
                    toJSON(message: _127.MsgBuyDirect): unknown;
                    fromPartial(object: Partial<_127.MsgBuyDirect>): _127.MsgBuyDirect;
                    fromAmino(object: _127.MsgBuyDirectAmino): _127.MsgBuyDirect;
                    toAmino(message: _127.MsgBuyDirect): _127.MsgBuyDirectAmino;
                    fromAminoMsg(object: _127.MsgBuyDirectAminoMsg): _127.MsgBuyDirect;
                    toAminoMsg(message: _127.MsgBuyDirect): _127.MsgBuyDirectAminoMsg;
                    fromProtoMsg(message: _127.MsgBuyDirectProtoMsg): _127.MsgBuyDirect;
                    toProto(message: _127.MsgBuyDirect): Uint8Array;
                    toProtoMsg(message: _127.MsgBuyDirect): _127.MsgBuyDirectProtoMsg;
                };
                MsgBuyDirect_Order: {
                    encode(message: _127.MsgBuyDirect_Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgBuyDirect_Order;
                    fromJSON(object: any): _127.MsgBuyDirect_Order;
                    toJSON(message: _127.MsgBuyDirect_Order): unknown;
                    fromPartial(object: Partial<_127.MsgBuyDirect_Order>): _127.MsgBuyDirect_Order;
                    fromAmino(object: _127.MsgBuyDirect_OrderAmino): _127.MsgBuyDirect_Order;
                    toAmino(message: _127.MsgBuyDirect_Order): _127.MsgBuyDirect_OrderAmino;
                    fromAminoMsg(object: _127.MsgBuyDirect_OrderAminoMsg): _127.MsgBuyDirect_Order;
                    fromProtoMsg(message: _127.MsgBuyDirect_OrderProtoMsg): _127.MsgBuyDirect_Order;
                    toProto(message: _127.MsgBuyDirect_Order): Uint8Array;
                    toProtoMsg(message: _127.MsgBuyDirect_Order): _127.MsgBuyDirect_OrderProtoMsg;
                };
                MsgBuyDirectResponse: {
                    encode(_: _127.MsgBuyDirectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgBuyDirectResponse;
                    fromJSON(_: any): _127.MsgBuyDirectResponse;
                    toJSON(_: _127.MsgBuyDirectResponse): unknown;
                    fromPartial(_: Partial<_127.MsgBuyDirectResponse>): _127.MsgBuyDirectResponse;
                    fromAmino(_: _127.MsgBuyDirectResponseAmino): _127.MsgBuyDirectResponse;
                    toAmino(_: _127.MsgBuyDirectResponse): _127.MsgBuyDirectResponseAmino;
                    fromAminoMsg(object: _127.MsgBuyDirectResponseAminoMsg): _127.MsgBuyDirectResponse;
                    fromProtoMsg(message: _127.MsgBuyDirectResponseProtoMsg): _127.MsgBuyDirectResponse;
                    toProto(message: _127.MsgBuyDirectResponse): Uint8Array;
                    toProtoMsg(message: _127.MsgBuyDirectResponse): _127.MsgBuyDirectResponseProtoMsg;
                };
                MsgAddAllowedDenom: {
                    encode(message: _127.MsgAddAllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgAddAllowedDenom;
                    fromJSON(object: any): _127.MsgAddAllowedDenom;
                    toJSON(message: _127.MsgAddAllowedDenom): unknown;
                    fromPartial(object: Partial<_127.MsgAddAllowedDenom>): _127.MsgAddAllowedDenom;
                    fromAmino(object: _127.MsgAddAllowedDenomAmino): _127.MsgAddAllowedDenom;
                    toAmino(message: _127.MsgAddAllowedDenom): _127.MsgAddAllowedDenomAmino;
                    fromAminoMsg(object: _127.MsgAddAllowedDenomAminoMsg): _127.MsgAddAllowedDenom;
                    toAminoMsg(message: _127.MsgAddAllowedDenom): _127.MsgAddAllowedDenomAminoMsg;
                    fromProtoMsg(message: _127.MsgAddAllowedDenomProtoMsg): _127.MsgAddAllowedDenom;
                    toProto(message: _127.MsgAddAllowedDenom): Uint8Array;
                    toProtoMsg(message: _127.MsgAddAllowedDenom): _127.MsgAddAllowedDenomProtoMsg;
                };
                MsgAddAllowedDenomResponse: {
                    encode(_: _127.MsgAddAllowedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgAddAllowedDenomResponse;
                    fromJSON(_: any): _127.MsgAddAllowedDenomResponse;
                    toJSON(_: _127.MsgAddAllowedDenomResponse): unknown;
                    fromPartial(_: Partial<_127.MsgAddAllowedDenomResponse>): _127.MsgAddAllowedDenomResponse;
                    fromAmino(_: _127.MsgAddAllowedDenomResponseAmino): _127.MsgAddAllowedDenomResponse;
                    toAmino(_: _127.MsgAddAllowedDenomResponse): _127.MsgAddAllowedDenomResponseAmino;
                    fromAminoMsg(object: _127.MsgAddAllowedDenomResponseAminoMsg): _127.MsgAddAllowedDenomResponse;
                    fromProtoMsg(message: _127.MsgAddAllowedDenomResponseProtoMsg): _127.MsgAddAllowedDenomResponse;
                    toProto(message: _127.MsgAddAllowedDenomResponse): Uint8Array;
                    toProtoMsg(message: _127.MsgAddAllowedDenomResponse): _127.MsgAddAllowedDenomResponseProtoMsg;
                };
                MsgRemoveAllowedDenom: {
                    encode(message: _127.MsgRemoveAllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgRemoveAllowedDenom;
                    fromJSON(object: any): _127.MsgRemoveAllowedDenom;
                    toJSON(message: _127.MsgRemoveAllowedDenom): unknown;
                    fromPartial(object: Partial<_127.MsgRemoveAllowedDenom>): _127.MsgRemoveAllowedDenom;
                    fromAmino(object: _127.MsgRemoveAllowedDenomAmino): _127.MsgRemoveAllowedDenom;
                    toAmino(message: _127.MsgRemoveAllowedDenom): _127.MsgRemoveAllowedDenomAmino;
                    fromAminoMsg(object: _127.MsgRemoveAllowedDenomAminoMsg): _127.MsgRemoveAllowedDenom;
                    toAminoMsg(message: _127.MsgRemoveAllowedDenom): _127.MsgRemoveAllowedDenomAminoMsg;
                    fromProtoMsg(message: _127.MsgRemoveAllowedDenomProtoMsg): _127.MsgRemoveAllowedDenom;
                    toProto(message: _127.MsgRemoveAllowedDenom): Uint8Array;
                    toProtoMsg(message: _127.MsgRemoveAllowedDenom): _127.MsgRemoveAllowedDenomProtoMsg;
                };
                MsgRemoveAllowedDenomResponse: {
                    encode(_: _127.MsgRemoveAllowedDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _127.MsgRemoveAllowedDenomResponse;
                    fromJSON(_: any): _127.MsgRemoveAllowedDenomResponse;
                    toJSON(_: _127.MsgRemoveAllowedDenomResponse): unknown;
                    fromPartial(_: Partial<_127.MsgRemoveAllowedDenomResponse>): _127.MsgRemoveAllowedDenomResponse;
                    fromAmino(_: _127.MsgRemoveAllowedDenomResponseAmino): _127.MsgRemoveAllowedDenomResponse;
                    toAmino(_: _127.MsgRemoveAllowedDenomResponse): _127.MsgRemoveAllowedDenomResponseAmino;
                    fromAminoMsg(object: _127.MsgRemoveAllowedDenomResponseAminoMsg): _127.MsgRemoveAllowedDenomResponse;
                    fromProtoMsg(message: _127.MsgRemoveAllowedDenomResponseProtoMsg): _127.MsgRemoveAllowedDenomResponse;
                    toProto(message: _127.MsgRemoveAllowedDenomResponse): Uint8Array;
                    toProtoMsg(message: _127.MsgRemoveAllowedDenomResponse): _127.MsgRemoveAllowedDenomResponseProtoMsg;
                };
                SellOrder: {
                    encode(message: _126.SellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.SellOrder;
                    fromJSON(object: any): _126.SellOrder;
                    toJSON(message: _126.SellOrder): unknown;
                    fromPartial(object: Partial<_126.SellOrder>): _126.SellOrder;
                    fromAmino(object: _126.SellOrderAmino): _126.SellOrder;
                    toAmino(message: _126.SellOrder): _126.SellOrderAmino;
                    fromAminoMsg(object: _126.SellOrderAminoMsg): _126.SellOrder;
                    fromProtoMsg(message: _126.SellOrderProtoMsg): _126.SellOrder;
                    toProto(message: _126.SellOrder): Uint8Array;
                    toProtoMsg(message: _126.SellOrder): _126.SellOrderProtoMsg;
                };
                AllowedDenom: {
                    encode(message: _126.AllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.AllowedDenom;
                    fromJSON(object: any): _126.AllowedDenom;
                    toJSON(message: _126.AllowedDenom): unknown;
                    fromPartial(object: Partial<_126.AllowedDenom>): _126.AllowedDenom;
                    fromAmino(object: _126.AllowedDenomAmino): _126.AllowedDenom;
                    toAmino(message: _126.AllowedDenom): _126.AllowedDenomAmino;
                    fromAminoMsg(object: _126.AllowedDenomAminoMsg): _126.AllowedDenom;
                    fromProtoMsg(message: _126.AllowedDenomProtoMsg): _126.AllowedDenom;
                    toProto(message: _126.AllowedDenom): Uint8Array;
                    toProtoMsg(message: _126.AllowedDenom): _126.AllowedDenomProtoMsg;
                };
                Market: {
                    encode(message: _126.Market, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _126.Market;
                    fromJSON(object: any): _126.Market;
                    toJSON(message: _126.Market): unknown;
                    fromPartial(object: Partial<_126.Market>): _126.Market;
                    fromAmino(object: _126.MarketAmino): _126.Market;
                    toAmino(message: _126.Market): _126.MarketAmino;
                    fromAminoMsg(object: _126.MarketAminoMsg): _126.Market;
                    fromProtoMsg(message: _126.MarketProtoMsg): _126.Market;
                    toProto(message: _126.Market): Uint8Array;
                    toProtoMsg(message: _126.Market): _126.MarketProtoMsg;
                };
                QuerySellOrderRequest: {
                    encode(message: _125.QuerySellOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.QuerySellOrderRequest;
                    fromJSON(object: any): _125.QuerySellOrderRequest;
                    toJSON(message: _125.QuerySellOrderRequest): unknown;
                    fromPartial(object: Partial<_125.QuerySellOrderRequest>): _125.QuerySellOrderRequest;
                    fromAmino(object: _125.QuerySellOrderRequestAmino): _125.QuerySellOrderRequest;
                    toAmino(message: _125.QuerySellOrderRequest): _125.QuerySellOrderRequestAmino;
                    fromAminoMsg(object: _125.QuerySellOrderRequestAminoMsg): _125.QuerySellOrderRequest;
                    fromProtoMsg(message: _125.QuerySellOrderRequestProtoMsg): _125.QuerySellOrderRequest;
                    toProto(message: _125.QuerySellOrderRequest): Uint8Array;
                    toProtoMsg(message: _125.QuerySellOrderRequest): _125.QuerySellOrderRequestProtoMsg;
                };
                QuerySellOrderResponse: {
                    encode(message: _125.QuerySellOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.QuerySellOrderResponse;
                    fromJSON(object: any): _125.QuerySellOrderResponse;
                    toJSON(message: _125.QuerySellOrderResponse): unknown;
                    fromPartial(object: Partial<_125.QuerySellOrderResponse>): _125.QuerySellOrderResponse;
                    fromAmino(object: _125.QuerySellOrderResponseAmino): _125.QuerySellOrderResponse;
                    toAmino(message: _125.QuerySellOrderResponse): _125.QuerySellOrderResponseAmino;
                    fromAminoMsg(object: _125.QuerySellOrderResponseAminoMsg): _125.QuerySellOrderResponse;
                    fromProtoMsg(message: _125.QuerySellOrderResponseProtoMsg): _125.QuerySellOrderResponse;
                    toProto(message: _125.QuerySellOrderResponse): Uint8Array;
                    toProtoMsg(message: _125.QuerySellOrderResponse): _125.QuerySellOrderResponseProtoMsg;
                };
                QuerySellOrdersRequest: {
                    encode(message: _125.QuerySellOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.QuerySellOrdersRequest;
                    fromJSON(object: any): _125.QuerySellOrdersRequest;
                    toJSON(message: _125.QuerySellOrdersRequest): unknown;
                    fromPartial(object: Partial<_125.QuerySellOrdersRequest>): _125.QuerySellOrdersRequest;
                    fromAmino(object: _125.QuerySellOrdersRequestAmino): _125.QuerySellOrdersRequest;
                    toAmino(message: _125.QuerySellOrdersRequest): _125.QuerySellOrdersRequestAmino;
                    fromAminoMsg(object: _125.QuerySellOrdersRequestAminoMsg): _125.QuerySellOrdersRequest;
                    fromProtoMsg(message: _125.QuerySellOrdersRequestProtoMsg): _125.QuerySellOrdersRequest;
                    toProto(message: _125.QuerySellOrdersRequest): Uint8Array;
                    toProtoMsg(message: _125.QuerySellOrdersRequest): _125.QuerySellOrdersRequestProtoMsg;
                };
                QuerySellOrdersResponse: {
                    encode(message: _125.QuerySellOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.QuerySellOrdersResponse;
                    fromJSON(object: any): _125.QuerySellOrdersResponse;
                    toJSON(message: _125.QuerySellOrdersResponse): unknown;
                    fromPartial(object: Partial<_125.QuerySellOrdersResponse>): _125.QuerySellOrdersResponse;
                    fromAmino(object: _125.QuerySellOrdersResponseAmino): _125.QuerySellOrdersResponse;
                    toAmino(message: _125.QuerySellOrdersResponse): _125.QuerySellOrdersResponseAmino;
                    fromAminoMsg(object: _125.QuerySellOrdersResponseAminoMsg): _125.QuerySellOrdersResponse;
                    fromProtoMsg(message: _125.QuerySellOrdersResponseProtoMsg): _125.QuerySellOrdersResponse;
                    toProto(message: _125.QuerySellOrdersResponse): Uint8Array;
                    toProtoMsg(message: _125.QuerySellOrdersResponse): _125.QuerySellOrdersResponseProtoMsg;
                };
                QuerySellOrdersByBatchRequest: {
                    encode(message: _125.QuerySellOrdersByBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.QuerySellOrdersByBatchRequest;
                    fromJSON(object: any): _125.QuerySellOrdersByBatchRequest;
                    toJSON(message: _125.QuerySellOrdersByBatchRequest): unknown;
                    fromPartial(object: Partial<_125.QuerySellOrdersByBatchRequest>): _125.QuerySellOrdersByBatchRequest;
                    fromAmino(object: _125.QuerySellOrdersByBatchRequestAmino): _125.QuerySellOrdersByBatchRequest;
                    toAmino(message: _125.QuerySellOrdersByBatchRequest): _125.QuerySellOrdersByBatchRequestAmino;
                    fromAminoMsg(object: _125.QuerySellOrdersByBatchRequestAminoMsg): _125.QuerySellOrdersByBatchRequest;
                    fromProtoMsg(message: _125.QuerySellOrdersByBatchRequestProtoMsg): _125.QuerySellOrdersByBatchRequest;
                    toProto(message: _125.QuerySellOrdersByBatchRequest): Uint8Array;
                    toProtoMsg(message: _125.QuerySellOrdersByBatchRequest): _125.QuerySellOrdersByBatchRequestProtoMsg;
                };
                QuerySellOrdersByBatchResponse: {
                    encode(message: _125.QuerySellOrdersByBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.QuerySellOrdersByBatchResponse;
                    fromJSON(object: any): _125.QuerySellOrdersByBatchResponse;
                    toJSON(message: _125.QuerySellOrdersByBatchResponse): unknown;
                    fromPartial(object: Partial<_125.QuerySellOrdersByBatchResponse>): _125.QuerySellOrdersByBatchResponse;
                    fromAmino(object: _125.QuerySellOrdersByBatchResponseAmino): _125.QuerySellOrdersByBatchResponse;
                    toAmino(message: _125.QuerySellOrdersByBatchResponse): _125.QuerySellOrdersByBatchResponseAmino;
                    fromAminoMsg(object: _125.QuerySellOrdersByBatchResponseAminoMsg): _125.QuerySellOrdersByBatchResponse;
                    fromProtoMsg(message: _125.QuerySellOrdersByBatchResponseProtoMsg): _125.QuerySellOrdersByBatchResponse;
                    toProto(message: _125.QuerySellOrdersByBatchResponse): Uint8Array;
                    toProtoMsg(message: _125.QuerySellOrdersByBatchResponse): _125.QuerySellOrdersByBatchResponseProtoMsg;
                };
                QuerySellOrdersBySellerRequest: {
                    encode(message: _125.QuerySellOrdersBySellerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.QuerySellOrdersBySellerRequest;
                    fromJSON(object: any): _125.QuerySellOrdersBySellerRequest;
                    toJSON(message: _125.QuerySellOrdersBySellerRequest): unknown;
                    fromPartial(object: Partial<_125.QuerySellOrdersBySellerRequest>): _125.QuerySellOrdersBySellerRequest;
                    fromAmino(object: _125.QuerySellOrdersBySellerRequestAmino): _125.QuerySellOrdersBySellerRequest;
                    toAmino(message: _125.QuerySellOrdersBySellerRequest): _125.QuerySellOrdersBySellerRequestAmino;
                    fromAminoMsg(object: _125.QuerySellOrdersBySellerRequestAminoMsg): _125.QuerySellOrdersBySellerRequest;
                    fromProtoMsg(message: _125.QuerySellOrdersBySellerRequestProtoMsg): _125.QuerySellOrdersBySellerRequest;
                    toProto(message: _125.QuerySellOrdersBySellerRequest): Uint8Array;
                    toProtoMsg(message: _125.QuerySellOrdersBySellerRequest): _125.QuerySellOrdersBySellerRequestProtoMsg;
                };
                QuerySellOrdersBySellerResponse: {
                    encode(message: _125.QuerySellOrdersBySellerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.QuerySellOrdersBySellerResponse;
                    fromJSON(object: any): _125.QuerySellOrdersBySellerResponse;
                    toJSON(message: _125.QuerySellOrdersBySellerResponse): unknown;
                    fromPartial(object: Partial<_125.QuerySellOrdersBySellerResponse>): _125.QuerySellOrdersBySellerResponse;
                    fromAmino(object: _125.QuerySellOrdersBySellerResponseAmino): _125.QuerySellOrdersBySellerResponse;
                    toAmino(message: _125.QuerySellOrdersBySellerResponse): _125.QuerySellOrdersBySellerResponseAmino;
                    fromAminoMsg(object: _125.QuerySellOrdersBySellerResponseAminoMsg): _125.QuerySellOrdersBySellerResponse;
                    fromProtoMsg(message: _125.QuerySellOrdersBySellerResponseProtoMsg): _125.QuerySellOrdersBySellerResponse;
                    toProto(message: _125.QuerySellOrdersBySellerResponse): Uint8Array;
                    toProtoMsg(message: _125.QuerySellOrdersBySellerResponse): _125.QuerySellOrdersBySellerResponseProtoMsg;
                };
                QueryAllowedDenomsRequest: {
                    encode(message: _125.QueryAllowedDenomsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.QueryAllowedDenomsRequest;
                    fromJSON(object: any): _125.QueryAllowedDenomsRequest;
                    toJSON(message: _125.QueryAllowedDenomsRequest): unknown;
                    fromPartial(object: Partial<_125.QueryAllowedDenomsRequest>): _125.QueryAllowedDenomsRequest;
                    fromAmino(object: _125.QueryAllowedDenomsRequestAmino): _125.QueryAllowedDenomsRequest;
                    toAmino(message: _125.QueryAllowedDenomsRequest): _125.QueryAllowedDenomsRequestAmino;
                    fromAminoMsg(object: _125.QueryAllowedDenomsRequestAminoMsg): _125.QueryAllowedDenomsRequest;
                    fromProtoMsg(message: _125.QueryAllowedDenomsRequestProtoMsg): _125.QueryAllowedDenomsRequest;
                    toProto(message: _125.QueryAllowedDenomsRequest): Uint8Array;
                    toProtoMsg(message: _125.QueryAllowedDenomsRequest): _125.QueryAllowedDenomsRequestProtoMsg;
                };
                QueryAllowedDenomsResponse: {
                    encode(message: _125.QueryAllowedDenomsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.QueryAllowedDenomsResponse;
                    fromJSON(object: any): _125.QueryAllowedDenomsResponse;
                    toJSON(message: _125.QueryAllowedDenomsResponse): unknown;
                    fromPartial(object: Partial<_125.QueryAllowedDenomsResponse>): _125.QueryAllowedDenomsResponse;
                    fromAmino(object: _125.QueryAllowedDenomsResponseAmino): _125.QueryAllowedDenomsResponse;
                    toAmino(message: _125.QueryAllowedDenomsResponse): _125.QueryAllowedDenomsResponseAmino;
                    fromAminoMsg(object: _125.QueryAllowedDenomsResponseAminoMsg): _125.QueryAllowedDenomsResponse;
                    fromProtoMsg(message: _125.QueryAllowedDenomsResponseProtoMsg): _125.QueryAllowedDenomsResponse;
                    toProto(message: _125.QueryAllowedDenomsResponse): Uint8Array;
                    toProtoMsg(message: _125.QueryAllowedDenomsResponse): _125.QueryAllowedDenomsResponseProtoMsg;
                };
                SellOrderInfo: {
                    encode(message: _125.SellOrderInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _125.SellOrderInfo;
                    fromJSON(object: any): _125.SellOrderInfo;
                    toJSON(message: _125.SellOrderInfo): unknown;
                    fromPartial(object: Partial<_125.SellOrderInfo>): _125.SellOrderInfo;
                    fromAmino(object: _125.SellOrderInfoAmino): _125.SellOrderInfo;
                    toAmino(message: _125.SellOrderInfo): _125.SellOrderInfoAmino;
                    fromAminoMsg(object: _125.SellOrderInfoAminoMsg): _125.SellOrderInfo;
                    fromProtoMsg(message: _125.SellOrderInfoProtoMsg): _125.SellOrderInfo;
                    toProto(message: _125.SellOrderInfo): Uint8Array;
                    toProtoMsg(message: _125.SellOrderInfo): _125.SellOrderInfoProtoMsg;
                };
                EventSell: {
                    encode(message: _124.EventSell, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.EventSell;
                    fromJSON(object: any): _124.EventSell;
                    toJSON(message: _124.EventSell): unknown;
                    fromPartial(object: Partial<_124.EventSell>): _124.EventSell;
                    fromAmino(object: _124.EventSellAmino): _124.EventSell;
                    toAmino(message: _124.EventSell): _124.EventSellAmino;
                    fromAminoMsg(object: _124.EventSellAminoMsg): _124.EventSell;
                    fromProtoMsg(message: _124.EventSellProtoMsg): _124.EventSell;
                    toProto(message: _124.EventSell): Uint8Array;
                    toProtoMsg(message: _124.EventSell): _124.EventSellProtoMsg;
                };
                EventBuyDirect: {
                    encode(message: _124.EventBuyDirect, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.EventBuyDirect;
                    fromJSON(object: any): _124.EventBuyDirect;
                    toJSON(message: _124.EventBuyDirect): unknown;
                    fromPartial(object: Partial<_124.EventBuyDirect>): _124.EventBuyDirect;
                    fromAmino(object: _124.EventBuyDirectAmino): _124.EventBuyDirect;
                    toAmino(message: _124.EventBuyDirect): _124.EventBuyDirectAmino;
                    fromAminoMsg(object: _124.EventBuyDirectAminoMsg): _124.EventBuyDirect;
                    fromProtoMsg(message: _124.EventBuyDirectProtoMsg): _124.EventBuyDirect;
                    toProto(message: _124.EventBuyDirect): Uint8Array;
                    toProtoMsg(message: _124.EventBuyDirect): _124.EventBuyDirectProtoMsg;
                };
                EventUpdateSellOrder: {
                    encode(message: _124.EventUpdateSellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.EventUpdateSellOrder;
                    fromJSON(object: any): _124.EventUpdateSellOrder;
                    toJSON(message: _124.EventUpdateSellOrder): unknown;
                    fromPartial(object: Partial<_124.EventUpdateSellOrder>): _124.EventUpdateSellOrder;
                    fromAmino(object: _124.EventUpdateSellOrderAmino): _124.EventUpdateSellOrder;
                    toAmino(message: _124.EventUpdateSellOrder): _124.EventUpdateSellOrderAmino;
                    fromAminoMsg(object: _124.EventUpdateSellOrderAminoMsg): _124.EventUpdateSellOrder;
                    fromProtoMsg(message: _124.EventUpdateSellOrderProtoMsg): _124.EventUpdateSellOrder;
                    toProto(message: _124.EventUpdateSellOrder): Uint8Array;
                    toProtoMsg(message: _124.EventUpdateSellOrder): _124.EventUpdateSellOrderProtoMsg;
                };
                EventCancelSellOrder: {
                    encode(message: _124.EventCancelSellOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.EventCancelSellOrder;
                    fromJSON(object: any): _124.EventCancelSellOrder;
                    toJSON(message: _124.EventCancelSellOrder): unknown;
                    fromPartial(object: Partial<_124.EventCancelSellOrder>): _124.EventCancelSellOrder;
                    fromAmino(object: _124.EventCancelSellOrderAmino): _124.EventCancelSellOrder;
                    toAmino(message: _124.EventCancelSellOrder): _124.EventCancelSellOrderAmino;
                    fromAminoMsg(object: _124.EventCancelSellOrderAminoMsg): _124.EventCancelSellOrder;
                    fromProtoMsg(message: _124.EventCancelSellOrderProtoMsg): _124.EventCancelSellOrder;
                    toProto(message: _124.EventCancelSellOrder): Uint8Array;
                    toProtoMsg(message: _124.EventCancelSellOrder): _124.EventCancelSellOrderProtoMsg;
                };
                EventAllowDenom: {
                    encode(message: _124.EventAllowDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.EventAllowDenom;
                    fromJSON(object: any): _124.EventAllowDenom;
                    toJSON(message: _124.EventAllowDenom): unknown;
                    fromPartial(object: Partial<_124.EventAllowDenom>): _124.EventAllowDenom;
                    fromAmino(object: _124.EventAllowDenomAmino): _124.EventAllowDenom;
                    toAmino(message: _124.EventAllowDenom): _124.EventAllowDenomAmino;
                    fromAminoMsg(object: _124.EventAllowDenomAminoMsg): _124.EventAllowDenom;
                    fromProtoMsg(message: _124.EventAllowDenomProtoMsg): _124.EventAllowDenom;
                    toProto(message: _124.EventAllowDenom): Uint8Array;
                    toProtoMsg(message: _124.EventAllowDenom): _124.EventAllowDenomProtoMsg;
                };
                EventRemoveAllowedDenom: {
                    encode(message: _124.EventRemoveAllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _124.EventRemoveAllowedDenom;
                    fromJSON(object: any): _124.EventRemoveAllowedDenom;
                    toJSON(message: _124.EventRemoveAllowedDenom): unknown;
                    fromPartial(object: Partial<_124.EventRemoveAllowedDenom>): _124.EventRemoveAllowedDenom;
                    fromAmino(object: _124.EventRemoveAllowedDenomAmino): _124.EventRemoveAllowedDenom;
                    toAmino(message: _124.EventRemoveAllowedDenom): _124.EventRemoveAllowedDenomAmino;
                    fromAminoMsg(object: _124.EventRemoveAllowedDenomAminoMsg): _124.EventRemoveAllowedDenom;
                    fromProtoMsg(message: _124.EventRemoveAllowedDenomProtoMsg): _124.EventRemoveAllowedDenom;
                    toProto(message: _124.EventRemoveAllowedDenom): Uint8Array;
                    toProtoMsg(message: _124.EventRemoveAllowedDenom): _124.EventRemoveAllowedDenomProtoMsg;
                };
            };
        }
        namespace orderbook {
            const v1alpha1: {
                BuyOrderSellOrderMatch: {
                    encode(message: _129.BuyOrderSellOrderMatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.BuyOrderSellOrderMatch;
                    fromJSON(object: any): _129.BuyOrderSellOrderMatch;
                    toJSON(message: _129.BuyOrderSellOrderMatch): unknown;
                    fromPartial(object: Partial<_129.BuyOrderSellOrderMatch>): _129.BuyOrderSellOrderMatch;
                    fromAmino(object: _129.BuyOrderSellOrderMatchAmino): _129.BuyOrderSellOrderMatch;
                    toAmino(message: _129.BuyOrderSellOrderMatch): _129.BuyOrderSellOrderMatchAmino;
                    fromAminoMsg(object: _129.BuyOrderSellOrderMatchAminoMsg): _129.BuyOrderSellOrderMatch;
                    fromProtoMsg(message: _129.BuyOrderSellOrderMatchProtoMsg): _129.BuyOrderSellOrderMatch;
                    toProto(message: _129.BuyOrderSellOrderMatch): Uint8Array;
                    toProtoMsg(message: _129.BuyOrderSellOrderMatch): _129.BuyOrderSellOrderMatchProtoMsg;
                };
                BuyOrderClassSelector: {
                    encode(message: _129.BuyOrderClassSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.BuyOrderClassSelector;
                    fromJSON(object: any): _129.BuyOrderClassSelector;
                    toJSON(message: _129.BuyOrderClassSelector): unknown;
                    fromPartial(object: Partial<_129.BuyOrderClassSelector>): _129.BuyOrderClassSelector;
                    fromAmino(object: _129.BuyOrderClassSelectorAmino): _129.BuyOrderClassSelector;
                    toAmino(message: _129.BuyOrderClassSelector): _129.BuyOrderClassSelectorAmino;
                    fromAminoMsg(object: _129.BuyOrderClassSelectorAminoMsg): _129.BuyOrderClassSelector;
                    fromProtoMsg(message: _129.BuyOrderClassSelectorProtoMsg): _129.BuyOrderClassSelector;
                    toProto(message: _129.BuyOrderClassSelector): Uint8Array;
                    toProtoMsg(message: _129.BuyOrderClassSelector): _129.BuyOrderClassSelectorProtoMsg;
                };
                BuyOrderProjectSelector: {
                    encode(message: _129.BuyOrderProjectSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.BuyOrderProjectSelector;
                    fromJSON(object: any): _129.BuyOrderProjectSelector;
                    toJSON(message: _129.BuyOrderProjectSelector): unknown;
                    fromPartial(object: Partial<_129.BuyOrderProjectSelector>): _129.BuyOrderProjectSelector;
                    fromAmino(object: _129.BuyOrderProjectSelectorAmino): _129.BuyOrderProjectSelector;
                    toAmino(message: _129.BuyOrderProjectSelector): _129.BuyOrderProjectSelectorAmino;
                    fromAminoMsg(object: _129.BuyOrderProjectSelectorAminoMsg): _129.BuyOrderProjectSelector;
                    fromProtoMsg(message: _129.BuyOrderProjectSelectorProtoMsg): _129.BuyOrderProjectSelector;
                    toProto(message: _129.BuyOrderProjectSelector): Uint8Array;
                    toProtoMsg(message: _129.BuyOrderProjectSelector): _129.BuyOrderProjectSelectorProtoMsg;
                };
                BuyOrderBatchSelector: {
                    encode(message: _129.BuyOrderBatchSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _129.BuyOrderBatchSelector;
                    fromJSON(object: any): _129.BuyOrderBatchSelector;
                    toJSON(message: _129.BuyOrderBatchSelector): unknown;
                    fromPartial(object: Partial<_129.BuyOrderBatchSelector>): _129.BuyOrderBatchSelector;
                    fromAmino(object: _129.BuyOrderBatchSelectorAmino): _129.BuyOrderBatchSelector;
                    toAmino(message: _129.BuyOrderBatchSelector): _129.BuyOrderBatchSelectorAmino;
                    fromAminoMsg(object: _129.BuyOrderBatchSelectorAminoMsg): _129.BuyOrderBatchSelector;
                    fromProtoMsg(message: _129.BuyOrderBatchSelectorProtoMsg): _129.BuyOrderBatchSelector;
                    toProto(message: _129.BuyOrderBatchSelector): Uint8Array;
                    toProtoMsg(message: _129.BuyOrderBatchSelector): _129.BuyOrderBatchSelectorProtoMsg;
                };
            };
        }
        const v1: {
            LCDQueryClient: typeof _220.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _133.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createProject(value: _133.MsgCreateProject): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _133.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintBatchCredits(value: _133.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sealBatch(value: _133.MsgSealBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _133.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _133.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _133.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _133.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _133.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _133.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectAdmin(value: _133.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectMetadata(value: _133.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateBatchMetadata(value: _133.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    bridge(value: _133.MsgBridge): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    bridgeReceive(value: _133.MsgBridgeReceive): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCreditType(value: _133.MsgAddCreditType): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setClassCreatorAllowlist(value: _133.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addClassCreator(value: _133.MsgAddClassCreator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeClassCreator(value: _133.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassFee(value: _133.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addAllowedBridgeChain(value: _133.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeAllowedBridgeChain(value: _133.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _133.MsgCreateClass): {
                        typeUrl: string;
                        value: _133.MsgCreateClass;
                    };
                    createProject(value: _133.MsgCreateProject): {
                        typeUrl: string;
                        value: _133.MsgCreateProject;
                    };
                    createBatch(value: _133.MsgCreateBatch): {
                        typeUrl: string;
                        value: _133.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _133.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _133.MsgMintBatchCredits;
                    };
                    sealBatch(value: _133.MsgSealBatch): {
                        typeUrl: string;
                        value: _133.MsgSealBatch;
                    };
                    send(value: _133.MsgSend): {
                        typeUrl: string;
                        value: _133.MsgSend;
                    };
                    retire(value: _133.MsgRetire): {
                        typeUrl: string;
                        value: _133.MsgRetire;
                    };
                    cancel(value: _133.MsgCancel): {
                        typeUrl: string;
                        value: _133.MsgCancel;
                    };
                    updateClassAdmin(value: _133.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _133.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _133.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _133.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _133.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _133.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _133.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _133.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _133.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _133.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: _133.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: _133.MsgUpdateBatchMetadata;
                    };
                    bridge(value: _133.MsgBridge): {
                        typeUrl: string;
                        value: _133.MsgBridge;
                    };
                    bridgeReceive(value: _133.MsgBridgeReceive): {
                        typeUrl: string;
                        value: _133.MsgBridgeReceive;
                    };
                    addCreditType(value: _133.MsgAddCreditType): {
                        typeUrl: string;
                        value: _133.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: _133.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: _133.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: _133.MsgAddClassCreator): {
                        typeUrl: string;
                        value: _133.MsgAddClassCreator;
                    };
                    removeClassCreator(value: _133.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: _133.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: _133.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: _133.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: _133.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: _133.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: _133.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: _133.MsgRemoveAllowedBridgeChain;
                    };
                };
                toJSON: {
                    createClass(value: _133.MsgCreateClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createProject(value: _133.MsgCreateProject): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createBatch(value: _133.MsgCreateBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mintBatchCredits(value: _133.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: unknown;
                    };
                    sealBatch(value: _133.MsgSealBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    send(value: _133.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    retire(value: _133.MsgRetire): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancel(value: _133.MsgCancel): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassAdmin(value: _133.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassIssuers(value: _133.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassMetadata(value: _133.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateProjectAdmin(value: _133.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateProjectMetadata(value: _133.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateBatchMetadata(value: _133.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    bridge(value: _133.MsgBridge): {
                        typeUrl: string;
                        value: unknown;
                    };
                    bridgeReceive(value: _133.MsgBridgeReceive): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addCreditType(value: _133.MsgAddCreditType): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setClassCreatorAllowlist(value: _133.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addClassCreator(value: _133.MsgAddClassCreator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeClassCreator(value: _133.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassFee(value: _133.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addAllowedBridgeChain(value: _133.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeAllowedBridgeChain(value: _133.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClass(value: any): {
                        typeUrl: string;
                        value: _133.MsgCreateClass;
                    };
                    createProject(value: any): {
                        typeUrl: string;
                        value: _133.MsgCreateProject;
                    };
                    createBatch(value: any): {
                        typeUrl: string;
                        value: _133.MsgCreateBatch;
                    };
                    mintBatchCredits(value: any): {
                        typeUrl: string;
                        value: _133.MsgMintBatchCredits;
                    };
                    sealBatch(value: any): {
                        typeUrl: string;
                        value: _133.MsgSealBatch;
                    };
                    send(value: any): {
                        typeUrl: string;
                        value: _133.MsgSend;
                    };
                    retire(value: any): {
                        typeUrl: string;
                        value: _133.MsgRetire;
                    };
                    cancel(value: any): {
                        typeUrl: string;
                        value: _133.MsgCancel;
                    };
                    updateClassAdmin(value: any): {
                        typeUrl: string;
                        value: _133.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: any): {
                        typeUrl: string;
                        value: _133.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: any): {
                        typeUrl: string;
                        value: _133.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: any): {
                        typeUrl: string;
                        value: _133.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: any): {
                        typeUrl: string;
                        value: _133.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: any): {
                        typeUrl: string;
                        value: _133.MsgUpdateBatchMetadata;
                    };
                    bridge(value: any): {
                        typeUrl: string;
                        value: _133.MsgBridge;
                    };
                    bridgeReceive(value: any): {
                        typeUrl: string;
                        value: _133.MsgBridgeReceive;
                    };
                    addCreditType(value: any): {
                        typeUrl: string;
                        value: _133.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: any): {
                        typeUrl: string;
                        value: _133.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: any): {
                        typeUrl: string;
                        value: _133.MsgAddClassCreator;
                    };
                    removeClassCreator(value: any): {
                        typeUrl: string;
                        value: _133.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: any): {
                        typeUrl: string;
                        value: _133.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: any): {
                        typeUrl: string;
                        value: _133.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: any): {
                        typeUrl: string;
                        value: _133.MsgRemoveAllowedBridgeChain;
                    };
                };
                fromPartial: {
                    createClass(value: _133.MsgCreateClass): {
                        typeUrl: string;
                        value: _133.MsgCreateClass;
                    };
                    createProject(value: _133.MsgCreateProject): {
                        typeUrl: string;
                        value: _133.MsgCreateProject;
                    };
                    createBatch(value: _133.MsgCreateBatch): {
                        typeUrl: string;
                        value: _133.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _133.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _133.MsgMintBatchCredits;
                    };
                    sealBatch(value: _133.MsgSealBatch): {
                        typeUrl: string;
                        value: _133.MsgSealBatch;
                    };
                    send(value: _133.MsgSend): {
                        typeUrl: string;
                        value: _133.MsgSend;
                    };
                    retire(value: _133.MsgRetire): {
                        typeUrl: string;
                        value: _133.MsgRetire;
                    };
                    cancel(value: _133.MsgCancel): {
                        typeUrl: string;
                        value: _133.MsgCancel;
                    };
                    updateClassAdmin(value: _133.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _133.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _133.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _133.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _133.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _133.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _133.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _133.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _133.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _133.MsgUpdateProjectMetadata;
                    };
                    updateBatchMetadata(value: _133.MsgUpdateBatchMetadata): {
                        typeUrl: string;
                        value: _133.MsgUpdateBatchMetadata;
                    };
                    bridge(value: _133.MsgBridge): {
                        typeUrl: string;
                        value: _133.MsgBridge;
                    };
                    bridgeReceive(value: _133.MsgBridgeReceive): {
                        typeUrl: string;
                        value: _133.MsgBridgeReceive;
                    };
                    addCreditType(value: _133.MsgAddCreditType): {
                        typeUrl: string;
                        value: _133.MsgAddCreditType;
                    };
                    setClassCreatorAllowlist(value: _133.MsgSetClassCreatorAllowlist): {
                        typeUrl: string;
                        value: _133.MsgSetClassCreatorAllowlist;
                    };
                    addClassCreator(value: _133.MsgAddClassCreator): {
                        typeUrl: string;
                        value: _133.MsgAddClassCreator;
                    };
                    removeClassCreator(value: _133.MsgRemoveClassCreator): {
                        typeUrl: string;
                        value: _133.MsgRemoveClassCreator;
                    };
                    updateClassFee(value: _133.MsgUpdateClassFee): {
                        typeUrl: string;
                        value: _133.MsgUpdateClassFee;
                    };
                    addAllowedBridgeChain(value: _133.MsgAddAllowedBridgeChain): {
                        typeUrl: string;
                        value: _133.MsgAddAllowedBridgeChain;
                    };
                    removeAllowedBridgeChain(value: _133.MsgRemoveAllowedBridgeChain): {
                        typeUrl: string;
                        value: _133.MsgRemoveAllowedBridgeChain;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: (message: _133.MsgCreateClass) => _133.MsgCreateClassAmino;
                    fromAmino: (object: _133.MsgCreateClassAmino) => _133.MsgCreateClass;
                };
                "/regen.ecocredit.v1.MsgCreateProject": {
                    aminoType: string;
                    toAmino: (message: _133.MsgCreateProject) => _133.MsgCreateProjectAmino;
                    fromAmino: (object: _133.MsgCreateProjectAmino) => _133.MsgCreateProject;
                };
                "/regen.ecocredit.v1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: (message: _133.MsgCreateBatch) => _133.MsgCreateBatchAmino;
                    fromAmino: (object: _133.MsgCreateBatchAmino) => _133.MsgCreateBatch;
                };
                "/regen.ecocredit.v1.MsgMintBatchCredits": {
                    aminoType: string;
                    toAmino: (message: _133.MsgMintBatchCredits) => _133.MsgMintBatchCreditsAmino;
                    fromAmino: (object: _133.MsgMintBatchCreditsAmino) => _133.MsgMintBatchCredits;
                };
                "/regen.ecocredit.v1.MsgSealBatch": {
                    aminoType: string;
                    toAmino: (message: _133.MsgSealBatch) => _133.MsgSealBatchAmino;
                    fromAmino: (object: _133.MsgSealBatchAmino) => _133.MsgSealBatch;
                };
                "/regen.ecocredit.v1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _133.MsgSend) => _133.MsgSendAmino;
                    fromAmino: (object: _133.MsgSendAmino) => _133.MsgSend;
                };
                "/regen.ecocredit.v1.MsgRetire": {
                    aminoType: string;
                    toAmino: (message: _133.MsgRetire) => _133.MsgRetireAmino;
                    fromAmino: (object: _133.MsgRetireAmino) => _133.MsgRetire;
                };
                "/regen.ecocredit.v1.MsgCancel": {
                    aminoType: string;
                    toAmino: (message: _133.MsgCancel) => _133.MsgCancelAmino;
                    fromAmino: (object: _133.MsgCancelAmino) => _133.MsgCancel;
                };
                "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: (message: _133.MsgUpdateClassAdmin) => _133.MsgUpdateClassAdminAmino;
                    fromAmino: (object: _133.MsgUpdateClassAdminAmino) => _133.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: (message: _133.MsgUpdateClassIssuers) => _133.MsgUpdateClassIssuersAmino;
                    fromAmino: (object: _133.MsgUpdateClassIssuersAmino) => _133.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: (message: _133.MsgUpdateClassMetadata) => _133.MsgUpdateClassMetadataAmino;
                    fromAmino: (object: _133.MsgUpdateClassMetadataAmino) => _133.MsgUpdateClassMetadata;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
                    aminoType: string;
                    toAmino: (message: _133.MsgUpdateProjectAdmin) => _133.MsgUpdateProjectAdminAmino;
                    fromAmino: (object: _133.MsgUpdateProjectAdminAmino) => _133.MsgUpdateProjectAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
                    aminoType: string;
                    toAmino: (message: _133.MsgUpdateProjectMetadata) => _133.MsgUpdateProjectMetadataAmino;
                    fromAmino: (object: _133.MsgUpdateProjectMetadataAmino) => _133.MsgUpdateProjectMetadata;
                };
                "/regen.ecocredit.v1.MsgUpdateBatchMetadata": {
                    aminoType: string;
                    toAmino: (message: _133.MsgUpdateBatchMetadata) => _133.MsgUpdateBatchMetadataAmino;
                    fromAmino: (object: _133.MsgUpdateBatchMetadataAmino) => _133.MsgUpdateBatchMetadata;
                };
                "/regen.ecocredit.v1.MsgBridge": {
                    aminoType: string;
                    toAmino: (message: _133.MsgBridge) => _133.MsgBridgeAmino;
                    fromAmino: (object: _133.MsgBridgeAmino) => _133.MsgBridge;
                };
                "/regen.ecocredit.v1.MsgBridgeReceive": {
                    aminoType: string;
                    toAmino: (message: _133.MsgBridgeReceive) => _133.MsgBridgeReceiveAmino;
                    fromAmino: (object: _133.MsgBridgeReceiveAmino) => _133.MsgBridgeReceive;
                };
                "/regen.ecocredit.v1.MsgAddCreditType": {
                    aminoType: string;
                    toAmino: (message: _133.MsgAddCreditType) => _133.MsgAddCreditTypeAmino;
                    fromAmino: (object: _133.MsgAddCreditTypeAmino) => _133.MsgAddCreditType;
                };
                "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist": {
                    aminoType: string;
                    toAmino: (message: _133.MsgSetClassCreatorAllowlist) => _133.MsgSetClassCreatorAllowlistAmino;
                    fromAmino: (object: _133.MsgSetClassCreatorAllowlistAmino) => _133.MsgSetClassCreatorAllowlist;
                };
                "/regen.ecocredit.v1.MsgAddClassCreator": {
                    aminoType: string;
                    toAmino: (message: _133.MsgAddClassCreator) => _133.MsgAddClassCreatorAmino;
                    fromAmino: (object: _133.MsgAddClassCreatorAmino) => _133.MsgAddClassCreator;
                };
                "/regen.ecocredit.v1.MsgRemoveClassCreator": {
                    aminoType: string;
                    toAmino: (message: _133.MsgRemoveClassCreator) => _133.MsgRemoveClassCreatorAmino;
                    fromAmino: (object: _133.MsgRemoveClassCreatorAmino) => _133.MsgRemoveClassCreator;
                };
                "/regen.ecocredit.v1.MsgUpdateClassFee": {
                    aminoType: string;
                    toAmino: (message: _133.MsgUpdateClassFee) => _133.MsgUpdateClassFeeAmino;
                    fromAmino: (object: _133.MsgUpdateClassFeeAmino) => _133.MsgUpdateClassFee;
                };
                "/regen.ecocredit.v1.MsgAddAllowedBridgeChain": {
                    aminoType: string;
                    toAmino: (message: _133.MsgAddAllowedBridgeChain) => _133.MsgAddAllowedBridgeChainAmino;
                    fromAmino: (object: _133.MsgAddAllowedBridgeChainAmino) => _133.MsgAddAllowedBridgeChain;
                };
                "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain": {
                    aminoType: string;
                    toAmino: (message: _133.MsgRemoveAllowedBridgeChain) => _133.MsgRemoveAllowedBridgeChainAmino;
                    fromAmino: (object: _133.MsgRemoveAllowedBridgeChainAmino) => _133.MsgRemoveAllowedBridgeChain;
                };
            };
            Params: {
                encode(message: _134.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _134.Params;
                fromJSON(object: any): _134.Params;
                toJSON(message: _134.Params): unknown;
                fromPartial(object: Partial<_134.Params>): _134.Params;
                fromAmino(object: _134.ParamsAmino): _134.Params;
                toAmino(message: _134.Params): _134.ParamsAmino;
                fromAminoMsg(object: _134.ParamsAminoMsg): _134.Params;
                fromProtoMsg(message: _134.ParamsProtoMsg): _134.Params;
                toProto(message: _134.Params): Uint8Array;
                toProtoMsg(message: _134.Params): _134.ParamsProtoMsg;
            };
            Credits: {
                encode(message: _134.Credits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _134.Credits;
                fromJSON(object: any): _134.Credits;
                toJSON(message: _134.Credits): unknown;
                fromPartial(object: Partial<_134.Credits>): _134.Credits;
                fromAmino(object: _134.CreditsAmino): _134.Credits;
                toAmino(message: _134.Credits): _134.CreditsAmino;
                fromAminoMsg(object: _134.CreditsAminoMsg): _134.Credits;
                fromProtoMsg(message: _134.CreditsProtoMsg): _134.Credits;
                toProto(message: _134.Credits): Uint8Array;
                toProtoMsg(message: _134.Credits): _134.CreditsProtoMsg;
            };
            BatchIssuance: {
                encode(message: _134.BatchIssuance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _134.BatchIssuance;
                fromJSON(object: any): _134.BatchIssuance;
                toJSON(message: _134.BatchIssuance): unknown;
                fromPartial(object: Partial<_134.BatchIssuance>): _134.BatchIssuance;
                fromAmino(object: _134.BatchIssuanceAmino): _134.BatchIssuance;
                toAmino(message: _134.BatchIssuance): _134.BatchIssuanceAmino;
                fromAminoMsg(object: _134.BatchIssuanceAminoMsg): _134.BatchIssuance;
                fromProtoMsg(message: _134.BatchIssuanceProtoMsg): _134.BatchIssuance;
                toProto(message: _134.BatchIssuance): Uint8Array;
                toProtoMsg(message: _134.BatchIssuance): _134.BatchIssuanceProtoMsg;
            };
            OriginTx: {
                encode(message: _134.OriginTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _134.OriginTx;
                fromJSON(object: any): _134.OriginTx;
                toJSON(message: _134.OriginTx): unknown;
                fromPartial(object: Partial<_134.OriginTx>): _134.OriginTx;
                fromAmino(object: _134.OriginTxAmino): _134.OriginTx;
                toAmino(message: _134.OriginTx): _134.OriginTxAmino;
                fromAminoMsg(object: _134.OriginTxAminoMsg): _134.OriginTx;
                fromProtoMsg(message: _134.OriginTxProtoMsg): _134.OriginTx;
                toProto(message: _134.OriginTx): Uint8Array;
                toProtoMsg(message: _134.OriginTx): _134.OriginTxProtoMsg;
            };
            CreditTypeProposal: {
                encode(message: _134.CreditTypeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _134.CreditTypeProposal;
                fromJSON(object: any): _134.CreditTypeProposal;
                toJSON(message: _134.CreditTypeProposal): unknown;
                fromPartial(object: Partial<_134.CreditTypeProposal>): _134.CreditTypeProposal;
                fromAmino(object: _134.CreditTypeProposalAmino): _134.CreditTypeProposal;
                toAmino(message: _134.CreditTypeProposal): _134.CreditTypeProposalAmino;
                fromAminoMsg(object: _134.CreditTypeProposalAminoMsg): _134.CreditTypeProposal;
                fromProtoMsg(message: _134.CreditTypeProposalProtoMsg): _134.CreditTypeProposal;
                toProto(message: _134.CreditTypeProposal): Uint8Array;
                toProtoMsg(message: _134.CreditTypeProposal): _134.CreditTypeProposalProtoMsg;
            };
            AllowedDenom: {
                encode(message: _134.AllowedDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _134.AllowedDenom;
                fromJSON(object: any): _134.AllowedDenom;
                toJSON(message: _134.AllowedDenom): unknown;
                fromPartial(object: Partial<_134.AllowedDenom>): _134.AllowedDenom;
                fromAmino(object: _134.AllowedDenomAmino): _134.AllowedDenom;
                toAmino(message: _134.AllowedDenom): _134.AllowedDenomAmino;
                fromAminoMsg(object: _134.AllowedDenomAminoMsg): _134.AllowedDenom;
                fromProtoMsg(message: _134.AllowedDenomProtoMsg): _134.AllowedDenom;
                toProto(message: _134.AllowedDenom): Uint8Array;
                toProtoMsg(message: _134.AllowedDenom): _134.AllowedDenomProtoMsg;
            };
            MsgAddCreditType: {
                encode(message: _133.MsgAddCreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgAddCreditType;
                fromJSON(object: any): _133.MsgAddCreditType;
                toJSON(message: _133.MsgAddCreditType): unknown;
                fromPartial(object: Partial<_133.MsgAddCreditType>): _133.MsgAddCreditType;
                fromAmino(object: _133.MsgAddCreditTypeAmino): _133.MsgAddCreditType;
                toAmino(message: _133.MsgAddCreditType): _133.MsgAddCreditTypeAmino;
                fromAminoMsg(object: _133.MsgAddCreditTypeAminoMsg): _133.MsgAddCreditType;
                toAminoMsg(message: _133.MsgAddCreditType): _133.MsgAddCreditTypeAminoMsg;
                fromProtoMsg(message: _133.MsgAddCreditTypeProtoMsg): _133.MsgAddCreditType;
                toProto(message: _133.MsgAddCreditType): Uint8Array;
                toProtoMsg(message: _133.MsgAddCreditType): _133.MsgAddCreditTypeProtoMsg;
            };
            MsgAddCreditTypeResponse: {
                encode(_: _133.MsgAddCreditTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgAddCreditTypeResponse;
                fromJSON(_: any): _133.MsgAddCreditTypeResponse;
                toJSON(_: _133.MsgAddCreditTypeResponse): unknown;
                fromPartial(_: Partial<_133.MsgAddCreditTypeResponse>): _133.MsgAddCreditTypeResponse;
                fromAmino(_: _133.MsgAddCreditTypeResponseAmino): _133.MsgAddCreditTypeResponse;
                toAmino(_: _133.MsgAddCreditTypeResponse): _133.MsgAddCreditTypeResponseAmino;
                fromAminoMsg(object: _133.MsgAddCreditTypeResponseAminoMsg): _133.MsgAddCreditTypeResponse;
                fromProtoMsg(message: _133.MsgAddCreditTypeResponseProtoMsg): _133.MsgAddCreditTypeResponse;
                toProto(message: _133.MsgAddCreditTypeResponse): Uint8Array;
                toProtoMsg(message: _133.MsgAddCreditTypeResponse): _133.MsgAddCreditTypeResponseProtoMsg;
            };
            MsgCreateClass: {
                encode(message: _133.MsgCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgCreateClass;
                fromJSON(object: any): _133.MsgCreateClass;
                toJSON(message: _133.MsgCreateClass): unknown;
                fromPartial(object: Partial<_133.MsgCreateClass>): _133.MsgCreateClass;
                fromAmino(object: _133.MsgCreateClassAmino): _133.MsgCreateClass;
                toAmino(message: _133.MsgCreateClass): _133.MsgCreateClassAmino;
                fromAminoMsg(object: _133.MsgCreateClassAminoMsg): _133.MsgCreateClass;
                toAminoMsg(message: _133.MsgCreateClass): _133.MsgCreateClassAminoMsg;
                fromProtoMsg(message: _133.MsgCreateClassProtoMsg): _133.MsgCreateClass;
                toProto(message: _133.MsgCreateClass): Uint8Array;
                toProtoMsg(message: _133.MsgCreateClass): _133.MsgCreateClassProtoMsg;
            };
            MsgCreateClassResponse: {
                encode(message: _133.MsgCreateClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgCreateClassResponse;
                fromJSON(object: any): _133.MsgCreateClassResponse;
                toJSON(message: _133.MsgCreateClassResponse): unknown;
                fromPartial(object: Partial<_133.MsgCreateClassResponse>): _133.MsgCreateClassResponse;
                fromAmino(object: _133.MsgCreateClassResponseAmino): _133.MsgCreateClassResponse;
                toAmino(message: _133.MsgCreateClassResponse): _133.MsgCreateClassResponseAmino;
                fromAminoMsg(object: _133.MsgCreateClassResponseAminoMsg): _133.MsgCreateClassResponse;
                fromProtoMsg(message: _133.MsgCreateClassResponseProtoMsg): _133.MsgCreateClassResponse;
                toProto(message: _133.MsgCreateClassResponse): Uint8Array;
                toProtoMsg(message: _133.MsgCreateClassResponse): _133.MsgCreateClassResponseProtoMsg;
            };
            MsgCreateProject: {
                encode(message: _133.MsgCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgCreateProject;
                fromJSON(object: any): _133.MsgCreateProject;
                toJSON(message: _133.MsgCreateProject): unknown;
                fromPartial(object: Partial<_133.MsgCreateProject>): _133.MsgCreateProject;
                fromAmino(object: _133.MsgCreateProjectAmino): _133.MsgCreateProject;
                toAmino(message: _133.MsgCreateProject): _133.MsgCreateProjectAmino;
                fromAminoMsg(object: _133.MsgCreateProjectAminoMsg): _133.MsgCreateProject;
                toAminoMsg(message: _133.MsgCreateProject): _133.MsgCreateProjectAminoMsg;
                fromProtoMsg(message: _133.MsgCreateProjectProtoMsg): _133.MsgCreateProject;
                toProto(message: _133.MsgCreateProject): Uint8Array;
                toProtoMsg(message: _133.MsgCreateProject): _133.MsgCreateProjectProtoMsg;
            };
            MsgCreateProjectResponse: {
                encode(message: _133.MsgCreateProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgCreateProjectResponse;
                fromJSON(object: any): _133.MsgCreateProjectResponse;
                toJSON(message: _133.MsgCreateProjectResponse): unknown;
                fromPartial(object: Partial<_133.MsgCreateProjectResponse>): _133.MsgCreateProjectResponse;
                fromAmino(object: _133.MsgCreateProjectResponseAmino): _133.MsgCreateProjectResponse;
                toAmino(message: _133.MsgCreateProjectResponse): _133.MsgCreateProjectResponseAmino;
                fromAminoMsg(object: _133.MsgCreateProjectResponseAminoMsg): _133.MsgCreateProjectResponse;
                fromProtoMsg(message: _133.MsgCreateProjectResponseProtoMsg): _133.MsgCreateProjectResponse;
                toProto(message: _133.MsgCreateProjectResponse): Uint8Array;
                toProtoMsg(message: _133.MsgCreateProjectResponse): _133.MsgCreateProjectResponseProtoMsg;
            };
            MsgCreateBatch: {
                encode(message: _133.MsgCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgCreateBatch;
                fromJSON(object: any): _133.MsgCreateBatch;
                toJSON(message: _133.MsgCreateBatch): unknown;
                fromPartial(object: Partial<_133.MsgCreateBatch>): _133.MsgCreateBatch;
                fromAmino(object: _133.MsgCreateBatchAmino): _133.MsgCreateBatch;
                toAmino(message: _133.MsgCreateBatch): _133.MsgCreateBatchAmino;
                fromAminoMsg(object: _133.MsgCreateBatchAminoMsg): _133.MsgCreateBatch;
                toAminoMsg(message: _133.MsgCreateBatch): _133.MsgCreateBatchAminoMsg;
                fromProtoMsg(message: _133.MsgCreateBatchProtoMsg): _133.MsgCreateBatch;
                toProto(message: _133.MsgCreateBatch): Uint8Array;
                toProtoMsg(message: _133.MsgCreateBatch): _133.MsgCreateBatchProtoMsg;
            };
            MsgCreateBatchResponse: {
                encode(message: _133.MsgCreateBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgCreateBatchResponse;
                fromJSON(object: any): _133.MsgCreateBatchResponse;
                toJSON(message: _133.MsgCreateBatchResponse): unknown;
                fromPartial(object: Partial<_133.MsgCreateBatchResponse>): _133.MsgCreateBatchResponse;
                fromAmino(object: _133.MsgCreateBatchResponseAmino): _133.MsgCreateBatchResponse;
                toAmino(message: _133.MsgCreateBatchResponse): _133.MsgCreateBatchResponseAmino;
                fromAminoMsg(object: _133.MsgCreateBatchResponseAminoMsg): _133.MsgCreateBatchResponse;
                fromProtoMsg(message: _133.MsgCreateBatchResponseProtoMsg): _133.MsgCreateBatchResponse;
                toProto(message: _133.MsgCreateBatchResponse): Uint8Array;
                toProtoMsg(message: _133.MsgCreateBatchResponse): _133.MsgCreateBatchResponseProtoMsg;
            };
            MsgMintBatchCredits: {
                encode(message: _133.MsgMintBatchCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgMintBatchCredits;
                fromJSON(object: any): _133.MsgMintBatchCredits;
                toJSON(message: _133.MsgMintBatchCredits): unknown;
                fromPartial(object: Partial<_133.MsgMintBatchCredits>): _133.MsgMintBatchCredits;
                fromAmino(object: _133.MsgMintBatchCreditsAmino): _133.MsgMintBatchCredits;
                toAmino(message: _133.MsgMintBatchCredits): _133.MsgMintBatchCreditsAmino;
                fromAminoMsg(object: _133.MsgMintBatchCreditsAminoMsg): _133.MsgMintBatchCredits;
                toAminoMsg(message: _133.MsgMintBatchCredits): _133.MsgMintBatchCreditsAminoMsg;
                fromProtoMsg(message: _133.MsgMintBatchCreditsProtoMsg): _133.MsgMintBatchCredits;
                toProto(message: _133.MsgMintBatchCredits): Uint8Array;
                toProtoMsg(message: _133.MsgMintBatchCredits): _133.MsgMintBatchCreditsProtoMsg;
            };
            MsgMintBatchCreditsResponse: {
                encode(_: _133.MsgMintBatchCreditsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgMintBatchCreditsResponse;
                fromJSON(_: any): _133.MsgMintBatchCreditsResponse;
                toJSON(_: _133.MsgMintBatchCreditsResponse): unknown;
                fromPartial(_: Partial<_133.MsgMintBatchCreditsResponse>): _133.MsgMintBatchCreditsResponse;
                fromAmino(_: _133.MsgMintBatchCreditsResponseAmino): _133.MsgMintBatchCreditsResponse;
                toAmino(_: _133.MsgMintBatchCreditsResponse): _133.MsgMintBatchCreditsResponseAmino;
                fromAminoMsg(object: _133.MsgMintBatchCreditsResponseAminoMsg): _133.MsgMintBatchCreditsResponse;
                fromProtoMsg(message: _133.MsgMintBatchCreditsResponseProtoMsg): _133.MsgMintBatchCreditsResponse;
                toProto(message: _133.MsgMintBatchCreditsResponse): Uint8Array;
                toProtoMsg(message: _133.MsgMintBatchCreditsResponse): _133.MsgMintBatchCreditsResponseProtoMsg;
            };
            MsgSealBatch: {
                encode(message: _133.MsgSealBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgSealBatch;
                fromJSON(object: any): _133.MsgSealBatch;
                toJSON(message: _133.MsgSealBatch): unknown;
                fromPartial(object: Partial<_133.MsgSealBatch>): _133.MsgSealBatch;
                fromAmino(object: _133.MsgSealBatchAmino): _133.MsgSealBatch;
                toAmino(message: _133.MsgSealBatch): _133.MsgSealBatchAmino;
                fromAminoMsg(object: _133.MsgSealBatchAminoMsg): _133.MsgSealBatch;
                toAminoMsg(message: _133.MsgSealBatch): _133.MsgSealBatchAminoMsg;
                fromProtoMsg(message: _133.MsgSealBatchProtoMsg): _133.MsgSealBatch;
                toProto(message: _133.MsgSealBatch): Uint8Array;
                toProtoMsg(message: _133.MsgSealBatch): _133.MsgSealBatchProtoMsg;
            };
            MsgSealBatchResponse: {
                encode(_: _133.MsgSealBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgSealBatchResponse;
                fromJSON(_: any): _133.MsgSealBatchResponse;
                toJSON(_: _133.MsgSealBatchResponse): unknown;
                fromPartial(_: Partial<_133.MsgSealBatchResponse>): _133.MsgSealBatchResponse;
                fromAmino(_: _133.MsgSealBatchResponseAmino): _133.MsgSealBatchResponse;
                toAmino(_: _133.MsgSealBatchResponse): _133.MsgSealBatchResponseAmino;
                fromAminoMsg(object: _133.MsgSealBatchResponseAminoMsg): _133.MsgSealBatchResponse;
                fromProtoMsg(message: _133.MsgSealBatchResponseProtoMsg): _133.MsgSealBatchResponse;
                toProto(message: _133.MsgSealBatchResponse): Uint8Array;
                toProtoMsg(message: _133.MsgSealBatchResponse): _133.MsgSealBatchResponseProtoMsg;
            };
            MsgSend: {
                encode(message: _133.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgSend;
                fromJSON(object: any): _133.MsgSend;
                toJSON(message: _133.MsgSend): unknown;
                fromPartial(object: Partial<_133.MsgSend>): _133.MsgSend;
                fromAmino(object: _133.MsgSendAmino): _133.MsgSend;
                toAmino(message: _133.MsgSend): _133.MsgSendAmino;
                fromAminoMsg(object: _133.MsgSendAminoMsg): _133.MsgSend;
                toAminoMsg(message: _133.MsgSend): _133.MsgSendAminoMsg;
                fromProtoMsg(message: _133.MsgSendProtoMsg): _133.MsgSend;
                toProto(message: _133.MsgSend): Uint8Array;
                toProtoMsg(message: _133.MsgSend): _133.MsgSendProtoMsg;
            };
            MsgSend_SendCredits: {
                encode(message: _133.MsgSend_SendCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgSend_SendCredits;
                fromJSON(object: any): _133.MsgSend_SendCredits;
                toJSON(message: _133.MsgSend_SendCredits): unknown;
                fromPartial(object: Partial<_133.MsgSend_SendCredits>): _133.MsgSend_SendCredits;
                fromAmino(object: _133.MsgSend_SendCreditsAmino): _133.MsgSend_SendCredits;
                toAmino(message: _133.MsgSend_SendCredits): _133.MsgSend_SendCreditsAmino;
                fromAminoMsg(object: _133.MsgSend_SendCreditsAminoMsg): _133.MsgSend_SendCredits;
                fromProtoMsg(message: _133.MsgSend_SendCreditsProtoMsg): _133.MsgSend_SendCredits;
                toProto(message: _133.MsgSend_SendCredits): Uint8Array;
                toProtoMsg(message: _133.MsgSend_SendCredits): _133.MsgSend_SendCreditsProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _133.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgSendResponse;
                fromJSON(_: any): _133.MsgSendResponse;
                toJSON(_: _133.MsgSendResponse): unknown;
                fromPartial(_: Partial<_133.MsgSendResponse>): _133.MsgSendResponse;
                fromAmino(_: _133.MsgSendResponseAmino): _133.MsgSendResponse;
                toAmino(_: _133.MsgSendResponse): _133.MsgSendResponseAmino;
                fromAminoMsg(object: _133.MsgSendResponseAminoMsg): _133.MsgSendResponse;
                fromProtoMsg(message: _133.MsgSendResponseProtoMsg): _133.MsgSendResponse;
                toProto(message: _133.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _133.MsgSendResponse): _133.MsgSendResponseProtoMsg;
            };
            MsgRetire: {
                encode(message: _133.MsgRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgRetire;
                fromJSON(object: any): _133.MsgRetire;
                toJSON(message: _133.MsgRetire): unknown;
                fromPartial(object: Partial<_133.MsgRetire>): _133.MsgRetire;
                fromAmino(object: _133.MsgRetireAmino): _133.MsgRetire;
                toAmino(message: _133.MsgRetire): _133.MsgRetireAmino;
                fromAminoMsg(object: _133.MsgRetireAminoMsg): _133.MsgRetire;
                toAminoMsg(message: _133.MsgRetire): _133.MsgRetireAminoMsg;
                fromProtoMsg(message: _133.MsgRetireProtoMsg): _133.MsgRetire;
                toProto(message: _133.MsgRetire): Uint8Array;
                toProtoMsg(message: _133.MsgRetire): _133.MsgRetireProtoMsg;
            };
            MsgRetireResponse: {
                encode(_: _133.MsgRetireResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgRetireResponse;
                fromJSON(_: any): _133.MsgRetireResponse;
                toJSON(_: _133.MsgRetireResponse): unknown;
                fromPartial(_: Partial<_133.MsgRetireResponse>): _133.MsgRetireResponse;
                fromAmino(_: _133.MsgRetireResponseAmino): _133.MsgRetireResponse;
                toAmino(_: _133.MsgRetireResponse): _133.MsgRetireResponseAmino;
                fromAminoMsg(object: _133.MsgRetireResponseAminoMsg): _133.MsgRetireResponse;
                fromProtoMsg(message: _133.MsgRetireResponseProtoMsg): _133.MsgRetireResponse;
                toProto(message: _133.MsgRetireResponse): Uint8Array;
                toProtoMsg(message: _133.MsgRetireResponse): _133.MsgRetireResponseProtoMsg;
            };
            MsgCancel: {
                encode(message: _133.MsgCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgCancel;
                fromJSON(object: any): _133.MsgCancel;
                toJSON(message: _133.MsgCancel): unknown;
                fromPartial(object: Partial<_133.MsgCancel>): _133.MsgCancel;
                fromAmino(object: _133.MsgCancelAmino): _133.MsgCancel;
                toAmino(message: _133.MsgCancel): _133.MsgCancelAmino;
                fromAminoMsg(object: _133.MsgCancelAminoMsg): _133.MsgCancel;
                toAminoMsg(message: _133.MsgCancel): _133.MsgCancelAminoMsg;
                fromProtoMsg(message: _133.MsgCancelProtoMsg): _133.MsgCancel;
                toProto(message: _133.MsgCancel): Uint8Array;
                toProtoMsg(message: _133.MsgCancel): _133.MsgCancelProtoMsg;
            };
            MsgCancelResponse: {
                encode(_: _133.MsgCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgCancelResponse;
                fromJSON(_: any): _133.MsgCancelResponse;
                toJSON(_: _133.MsgCancelResponse): unknown;
                fromPartial(_: Partial<_133.MsgCancelResponse>): _133.MsgCancelResponse;
                fromAmino(_: _133.MsgCancelResponseAmino): _133.MsgCancelResponse;
                toAmino(_: _133.MsgCancelResponse): _133.MsgCancelResponseAmino;
                fromAminoMsg(object: _133.MsgCancelResponseAminoMsg): _133.MsgCancelResponse;
                fromProtoMsg(message: _133.MsgCancelResponseProtoMsg): _133.MsgCancelResponse;
                toProto(message: _133.MsgCancelResponse): Uint8Array;
                toProtoMsg(message: _133.MsgCancelResponse): _133.MsgCancelResponseProtoMsg;
            };
            MsgUpdateClassAdmin: {
                encode(message: _133.MsgUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgUpdateClassAdmin;
                fromJSON(object: any): _133.MsgUpdateClassAdmin;
                toJSON(message: _133.MsgUpdateClassAdmin): unknown;
                fromPartial(object: Partial<_133.MsgUpdateClassAdmin>): _133.MsgUpdateClassAdmin;
                fromAmino(object: _133.MsgUpdateClassAdminAmino): _133.MsgUpdateClassAdmin;
                toAmino(message: _133.MsgUpdateClassAdmin): _133.MsgUpdateClassAdminAmino;
                fromAminoMsg(object: _133.MsgUpdateClassAdminAminoMsg): _133.MsgUpdateClassAdmin;
                toAminoMsg(message: _133.MsgUpdateClassAdmin): _133.MsgUpdateClassAdminAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateClassAdminProtoMsg): _133.MsgUpdateClassAdmin;
                toProto(message: _133.MsgUpdateClassAdmin): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateClassAdmin): _133.MsgUpdateClassAdminProtoMsg;
            };
            MsgUpdateClassAdminResponse: {
                encode(_: _133.MsgUpdateClassAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgUpdateClassAdminResponse;
                fromJSON(_: any): _133.MsgUpdateClassAdminResponse;
                toJSON(_: _133.MsgUpdateClassAdminResponse): unknown;
                fromPartial(_: Partial<_133.MsgUpdateClassAdminResponse>): _133.MsgUpdateClassAdminResponse;
                fromAmino(_: _133.MsgUpdateClassAdminResponseAmino): _133.MsgUpdateClassAdminResponse;
                toAmino(_: _133.MsgUpdateClassAdminResponse): _133.MsgUpdateClassAdminResponseAmino;
                fromAminoMsg(object: _133.MsgUpdateClassAdminResponseAminoMsg): _133.MsgUpdateClassAdminResponse;
                fromProtoMsg(message: _133.MsgUpdateClassAdminResponseProtoMsg): _133.MsgUpdateClassAdminResponse;
                toProto(message: _133.MsgUpdateClassAdminResponse): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateClassAdminResponse): _133.MsgUpdateClassAdminResponseProtoMsg;
            };
            MsgUpdateClassIssuers: {
                encode(message: _133.MsgUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgUpdateClassIssuers;
                fromJSON(object: any): _133.MsgUpdateClassIssuers;
                toJSON(message: _133.MsgUpdateClassIssuers): unknown;
                fromPartial(object: Partial<_133.MsgUpdateClassIssuers>): _133.MsgUpdateClassIssuers;
                fromAmino(object: _133.MsgUpdateClassIssuersAmino): _133.MsgUpdateClassIssuers;
                toAmino(message: _133.MsgUpdateClassIssuers): _133.MsgUpdateClassIssuersAmino;
                fromAminoMsg(object: _133.MsgUpdateClassIssuersAminoMsg): _133.MsgUpdateClassIssuers;
                toAminoMsg(message: _133.MsgUpdateClassIssuers): _133.MsgUpdateClassIssuersAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateClassIssuersProtoMsg): _133.MsgUpdateClassIssuers;
                toProto(message: _133.MsgUpdateClassIssuers): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateClassIssuers): _133.MsgUpdateClassIssuersProtoMsg;
            };
            MsgUpdateClassIssuersResponse: {
                encode(_: _133.MsgUpdateClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgUpdateClassIssuersResponse;
                fromJSON(_: any): _133.MsgUpdateClassIssuersResponse;
                toJSON(_: _133.MsgUpdateClassIssuersResponse): unknown;
                fromPartial(_: Partial<_133.MsgUpdateClassIssuersResponse>): _133.MsgUpdateClassIssuersResponse;
                fromAmino(_: _133.MsgUpdateClassIssuersResponseAmino): _133.MsgUpdateClassIssuersResponse;
                toAmino(_: _133.MsgUpdateClassIssuersResponse): _133.MsgUpdateClassIssuersResponseAmino;
                fromAminoMsg(object: _133.MsgUpdateClassIssuersResponseAminoMsg): _133.MsgUpdateClassIssuersResponse;
                fromProtoMsg(message: _133.MsgUpdateClassIssuersResponseProtoMsg): _133.MsgUpdateClassIssuersResponse;
                toProto(message: _133.MsgUpdateClassIssuersResponse): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateClassIssuersResponse): _133.MsgUpdateClassIssuersResponseProtoMsg;
            };
            MsgUpdateClassMetadata: {
                encode(message: _133.MsgUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgUpdateClassMetadata;
                fromJSON(object: any): _133.MsgUpdateClassMetadata;
                toJSON(message: _133.MsgUpdateClassMetadata): unknown;
                fromPartial(object: Partial<_133.MsgUpdateClassMetadata>): _133.MsgUpdateClassMetadata;
                fromAmino(object: _133.MsgUpdateClassMetadataAmino): _133.MsgUpdateClassMetadata;
                toAmino(message: _133.MsgUpdateClassMetadata): _133.MsgUpdateClassMetadataAmino;
                fromAminoMsg(object: _133.MsgUpdateClassMetadataAminoMsg): _133.MsgUpdateClassMetadata;
                toAminoMsg(message: _133.MsgUpdateClassMetadata): _133.MsgUpdateClassMetadataAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateClassMetadataProtoMsg): _133.MsgUpdateClassMetadata;
                toProto(message: _133.MsgUpdateClassMetadata): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateClassMetadata): _133.MsgUpdateClassMetadataProtoMsg;
            };
            MsgUpdateClassMetadataResponse: {
                encode(_: _133.MsgUpdateClassMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgUpdateClassMetadataResponse;
                fromJSON(_: any): _133.MsgUpdateClassMetadataResponse;
                toJSON(_: _133.MsgUpdateClassMetadataResponse): unknown;
                fromPartial(_: Partial<_133.MsgUpdateClassMetadataResponse>): _133.MsgUpdateClassMetadataResponse;
                fromAmino(_: _133.MsgUpdateClassMetadataResponseAmino): _133.MsgUpdateClassMetadataResponse;
                toAmino(_: _133.MsgUpdateClassMetadataResponse): _133.MsgUpdateClassMetadataResponseAmino;
                fromAminoMsg(object: _133.MsgUpdateClassMetadataResponseAminoMsg): _133.MsgUpdateClassMetadataResponse;
                fromProtoMsg(message: _133.MsgUpdateClassMetadataResponseProtoMsg): _133.MsgUpdateClassMetadataResponse;
                toProto(message: _133.MsgUpdateClassMetadataResponse): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateClassMetadataResponse): _133.MsgUpdateClassMetadataResponseProtoMsg;
            };
            MsgUpdateProjectAdmin: {
                encode(message: _133.MsgUpdateProjectAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgUpdateProjectAdmin;
                fromJSON(object: any): _133.MsgUpdateProjectAdmin;
                toJSON(message: _133.MsgUpdateProjectAdmin): unknown;
                fromPartial(object: Partial<_133.MsgUpdateProjectAdmin>): _133.MsgUpdateProjectAdmin;
                fromAmino(object: _133.MsgUpdateProjectAdminAmino): _133.MsgUpdateProjectAdmin;
                toAmino(message: _133.MsgUpdateProjectAdmin): _133.MsgUpdateProjectAdminAmino;
                fromAminoMsg(object: _133.MsgUpdateProjectAdminAminoMsg): _133.MsgUpdateProjectAdmin;
                toAminoMsg(message: _133.MsgUpdateProjectAdmin): _133.MsgUpdateProjectAdminAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateProjectAdminProtoMsg): _133.MsgUpdateProjectAdmin;
                toProto(message: _133.MsgUpdateProjectAdmin): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateProjectAdmin): _133.MsgUpdateProjectAdminProtoMsg;
            };
            MsgUpdateProjectAdminResponse: {
                encode(_: _133.MsgUpdateProjectAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgUpdateProjectAdminResponse;
                fromJSON(_: any): _133.MsgUpdateProjectAdminResponse;
                toJSON(_: _133.MsgUpdateProjectAdminResponse): unknown;
                fromPartial(_: Partial<_133.MsgUpdateProjectAdminResponse>): _133.MsgUpdateProjectAdminResponse;
                fromAmino(_: _133.MsgUpdateProjectAdminResponseAmino): _133.MsgUpdateProjectAdminResponse;
                toAmino(_: _133.MsgUpdateProjectAdminResponse): _133.MsgUpdateProjectAdminResponseAmino;
                fromAminoMsg(object: _133.MsgUpdateProjectAdminResponseAminoMsg): _133.MsgUpdateProjectAdminResponse;
                fromProtoMsg(message: _133.MsgUpdateProjectAdminResponseProtoMsg): _133.MsgUpdateProjectAdminResponse;
                toProto(message: _133.MsgUpdateProjectAdminResponse): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateProjectAdminResponse): _133.MsgUpdateProjectAdminResponseProtoMsg;
            };
            MsgUpdateProjectMetadata: {
                encode(message: _133.MsgUpdateProjectMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgUpdateProjectMetadata;
                fromJSON(object: any): _133.MsgUpdateProjectMetadata;
                toJSON(message: _133.MsgUpdateProjectMetadata): unknown;
                fromPartial(object: Partial<_133.MsgUpdateProjectMetadata>): _133.MsgUpdateProjectMetadata;
                fromAmino(object: _133.MsgUpdateProjectMetadataAmino): _133.MsgUpdateProjectMetadata;
                toAmino(message: _133.MsgUpdateProjectMetadata): _133.MsgUpdateProjectMetadataAmino;
                fromAminoMsg(object: _133.MsgUpdateProjectMetadataAminoMsg): _133.MsgUpdateProjectMetadata;
                toAminoMsg(message: _133.MsgUpdateProjectMetadata): _133.MsgUpdateProjectMetadataAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateProjectMetadataProtoMsg): _133.MsgUpdateProjectMetadata;
                toProto(message: _133.MsgUpdateProjectMetadata): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateProjectMetadata): _133.MsgUpdateProjectMetadataProtoMsg;
            };
            MsgUpdateProjectMetadataResponse: {
                encode(_: _133.MsgUpdateProjectMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgUpdateProjectMetadataResponse;
                fromJSON(_: any): _133.MsgUpdateProjectMetadataResponse;
                toJSON(_: _133.MsgUpdateProjectMetadataResponse): unknown;
                fromPartial(_: Partial<_133.MsgUpdateProjectMetadataResponse>): _133.MsgUpdateProjectMetadataResponse;
                fromAmino(_: _133.MsgUpdateProjectMetadataResponseAmino): _133.MsgUpdateProjectMetadataResponse;
                toAmino(_: _133.MsgUpdateProjectMetadataResponse): _133.MsgUpdateProjectMetadataResponseAmino;
                fromAminoMsg(object: _133.MsgUpdateProjectMetadataResponseAminoMsg): _133.MsgUpdateProjectMetadataResponse;
                fromProtoMsg(message: _133.MsgUpdateProjectMetadataResponseProtoMsg): _133.MsgUpdateProjectMetadataResponse;
                toProto(message: _133.MsgUpdateProjectMetadataResponse): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateProjectMetadataResponse): _133.MsgUpdateProjectMetadataResponseProtoMsg;
            };
            MsgBridge: {
                encode(message: _133.MsgBridge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgBridge;
                fromJSON(object: any): _133.MsgBridge;
                toJSON(message: _133.MsgBridge): unknown;
                fromPartial(object: Partial<_133.MsgBridge>): _133.MsgBridge;
                fromAmino(object: _133.MsgBridgeAmino): _133.MsgBridge;
                toAmino(message: _133.MsgBridge): _133.MsgBridgeAmino;
                fromAminoMsg(object: _133.MsgBridgeAminoMsg): _133.MsgBridge;
                toAminoMsg(message: _133.MsgBridge): _133.MsgBridgeAminoMsg;
                fromProtoMsg(message: _133.MsgBridgeProtoMsg): _133.MsgBridge;
                toProto(message: _133.MsgBridge): Uint8Array;
                toProtoMsg(message: _133.MsgBridge): _133.MsgBridgeProtoMsg;
            };
            MsgUpdateBatchMetadata: {
                encode(message: _133.MsgUpdateBatchMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgUpdateBatchMetadata;
                fromJSON(object: any): _133.MsgUpdateBatchMetadata;
                toJSON(message: _133.MsgUpdateBatchMetadata): unknown;
                fromPartial(object: Partial<_133.MsgUpdateBatchMetadata>): _133.MsgUpdateBatchMetadata;
                fromAmino(object: _133.MsgUpdateBatchMetadataAmino): _133.MsgUpdateBatchMetadata;
                toAmino(message: _133.MsgUpdateBatchMetadata): _133.MsgUpdateBatchMetadataAmino;
                fromAminoMsg(object: _133.MsgUpdateBatchMetadataAminoMsg): _133.MsgUpdateBatchMetadata;
                toAminoMsg(message: _133.MsgUpdateBatchMetadata): _133.MsgUpdateBatchMetadataAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateBatchMetadataProtoMsg): _133.MsgUpdateBatchMetadata;
                toProto(message: _133.MsgUpdateBatchMetadata): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateBatchMetadata): _133.MsgUpdateBatchMetadataProtoMsg;
            };
            MsgUpdateBatchMetadataResponse: {
                encode(_: _133.MsgUpdateBatchMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgUpdateBatchMetadataResponse;
                fromJSON(_: any): _133.MsgUpdateBatchMetadataResponse;
                toJSON(_: _133.MsgUpdateBatchMetadataResponse): unknown;
                fromPartial(_: Partial<_133.MsgUpdateBatchMetadataResponse>): _133.MsgUpdateBatchMetadataResponse;
                fromAmino(_: _133.MsgUpdateBatchMetadataResponseAmino): _133.MsgUpdateBatchMetadataResponse;
                toAmino(_: _133.MsgUpdateBatchMetadataResponse): _133.MsgUpdateBatchMetadataResponseAmino;
                fromAminoMsg(object: _133.MsgUpdateBatchMetadataResponseAminoMsg): _133.MsgUpdateBatchMetadataResponse;
                fromProtoMsg(message: _133.MsgUpdateBatchMetadataResponseProtoMsg): _133.MsgUpdateBatchMetadataResponse;
                toProto(message: _133.MsgUpdateBatchMetadataResponse): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateBatchMetadataResponse): _133.MsgUpdateBatchMetadataResponseProtoMsg;
            };
            MsgBridgeResponse: {
                encode(_: _133.MsgBridgeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgBridgeResponse;
                fromJSON(_: any): _133.MsgBridgeResponse;
                toJSON(_: _133.MsgBridgeResponse): unknown;
                fromPartial(_: Partial<_133.MsgBridgeResponse>): _133.MsgBridgeResponse;
                fromAmino(_: _133.MsgBridgeResponseAmino): _133.MsgBridgeResponse;
                toAmino(_: _133.MsgBridgeResponse): _133.MsgBridgeResponseAmino;
                fromAminoMsg(object: _133.MsgBridgeResponseAminoMsg): _133.MsgBridgeResponse;
                fromProtoMsg(message: _133.MsgBridgeResponseProtoMsg): _133.MsgBridgeResponse;
                toProto(message: _133.MsgBridgeResponse): Uint8Array;
                toProtoMsg(message: _133.MsgBridgeResponse): _133.MsgBridgeResponseProtoMsg;
            };
            MsgBridgeReceive: {
                encode(message: _133.MsgBridgeReceive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgBridgeReceive;
                fromJSON(object: any): _133.MsgBridgeReceive;
                toJSON(message: _133.MsgBridgeReceive): unknown;
                fromPartial(object: Partial<_133.MsgBridgeReceive>): _133.MsgBridgeReceive;
                fromAmino(object: _133.MsgBridgeReceiveAmino): _133.MsgBridgeReceive;
                toAmino(message: _133.MsgBridgeReceive): _133.MsgBridgeReceiveAmino;
                fromAminoMsg(object: _133.MsgBridgeReceiveAminoMsg): _133.MsgBridgeReceive;
                toAminoMsg(message: _133.MsgBridgeReceive): _133.MsgBridgeReceiveAminoMsg;
                fromProtoMsg(message: _133.MsgBridgeReceiveProtoMsg): _133.MsgBridgeReceive;
                toProto(message: _133.MsgBridgeReceive): Uint8Array;
                toProtoMsg(message: _133.MsgBridgeReceive): _133.MsgBridgeReceiveProtoMsg;
            };
            MsgBridgeReceive_Batch: {
                encode(message: _133.MsgBridgeReceive_Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgBridgeReceive_Batch;
                fromJSON(object: any): _133.MsgBridgeReceive_Batch;
                toJSON(message: _133.MsgBridgeReceive_Batch): unknown;
                fromPartial(object: Partial<_133.MsgBridgeReceive_Batch>): _133.MsgBridgeReceive_Batch;
                fromAmino(object: _133.MsgBridgeReceive_BatchAmino): _133.MsgBridgeReceive_Batch;
                toAmino(message: _133.MsgBridgeReceive_Batch): _133.MsgBridgeReceive_BatchAmino;
                fromAminoMsg(object: _133.MsgBridgeReceive_BatchAminoMsg): _133.MsgBridgeReceive_Batch;
                fromProtoMsg(message: _133.MsgBridgeReceive_BatchProtoMsg): _133.MsgBridgeReceive_Batch;
                toProto(message: _133.MsgBridgeReceive_Batch): Uint8Array;
                toProtoMsg(message: _133.MsgBridgeReceive_Batch): _133.MsgBridgeReceive_BatchProtoMsg;
            };
            MsgBridgeReceive_Project: {
                encode(message: _133.MsgBridgeReceive_Project, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgBridgeReceive_Project;
                fromJSON(object: any): _133.MsgBridgeReceive_Project;
                toJSON(message: _133.MsgBridgeReceive_Project): unknown;
                fromPartial(object: Partial<_133.MsgBridgeReceive_Project>): _133.MsgBridgeReceive_Project;
                fromAmino(object: _133.MsgBridgeReceive_ProjectAmino): _133.MsgBridgeReceive_Project;
                toAmino(message: _133.MsgBridgeReceive_Project): _133.MsgBridgeReceive_ProjectAmino;
                fromAminoMsg(object: _133.MsgBridgeReceive_ProjectAminoMsg): _133.MsgBridgeReceive_Project;
                fromProtoMsg(message: _133.MsgBridgeReceive_ProjectProtoMsg): _133.MsgBridgeReceive_Project;
                toProto(message: _133.MsgBridgeReceive_Project): Uint8Array;
                toProtoMsg(message: _133.MsgBridgeReceive_Project): _133.MsgBridgeReceive_ProjectProtoMsg;
            };
            MsgBridgeReceiveResponse: {
                encode(message: _133.MsgBridgeReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgBridgeReceiveResponse;
                fromJSON(object: any): _133.MsgBridgeReceiveResponse;
                toJSON(message: _133.MsgBridgeReceiveResponse): unknown;
                fromPartial(object: Partial<_133.MsgBridgeReceiveResponse>): _133.MsgBridgeReceiveResponse;
                fromAmino(object: _133.MsgBridgeReceiveResponseAmino): _133.MsgBridgeReceiveResponse;
                toAmino(message: _133.MsgBridgeReceiveResponse): _133.MsgBridgeReceiveResponseAmino;
                fromAminoMsg(object: _133.MsgBridgeReceiveResponseAminoMsg): _133.MsgBridgeReceiveResponse;
                fromProtoMsg(message: _133.MsgBridgeReceiveResponseProtoMsg): _133.MsgBridgeReceiveResponse;
                toProto(message: _133.MsgBridgeReceiveResponse): Uint8Array;
                toProtoMsg(message: _133.MsgBridgeReceiveResponse): _133.MsgBridgeReceiveResponseProtoMsg;
            };
            MsgAddClassCreator: {
                encode(message: _133.MsgAddClassCreator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgAddClassCreator;
                fromJSON(object: any): _133.MsgAddClassCreator;
                toJSON(message: _133.MsgAddClassCreator): unknown;
                fromPartial(object: Partial<_133.MsgAddClassCreator>): _133.MsgAddClassCreator;
                fromAmino(object: _133.MsgAddClassCreatorAmino): _133.MsgAddClassCreator;
                toAmino(message: _133.MsgAddClassCreator): _133.MsgAddClassCreatorAmino;
                fromAminoMsg(object: _133.MsgAddClassCreatorAminoMsg): _133.MsgAddClassCreator;
                toAminoMsg(message: _133.MsgAddClassCreator): _133.MsgAddClassCreatorAminoMsg;
                fromProtoMsg(message: _133.MsgAddClassCreatorProtoMsg): _133.MsgAddClassCreator;
                toProto(message: _133.MsgAddClassCreator): Uint8Array;
                toProtoMsg(message: _133.MsgAddClassCreator): _133.MsgAddClassCreatorProtoMsg;
            };
            MsgAddClassCreatorResponse: {
                encode(_: _133.MsgAddClassCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgAddClassCreatorResponse;
                fromJSON(_: any): _133.MsgAddClassCreatorResponse;
                toJSON(_: _133.MsgAddClassCreatorResponse): unknown;
                fromPartial(_: Partial<_133.MsgAddClassCreatorResponse>): _133.MsgAddClassCreatorResponse;
                fromAmino(_: _133.MsgAddClassCreatorResponseAmino): _133.MsgAddClassCreatorResponse;
                toAmino(_: _133.MsgAddClassCreatorResponse): _133.MsgAddClassCreatorResponseAmino;
                fromAminoMsg(object: _133.MsgAddClassCreatorResponseAminoMsg): _133.MsgAddClassCreatorResponse;
                fromProtoMsg(message: _133.MsgAddClassCreatorResponseProtoMsg): _133.MsgAddClassCreatorResponse;
                toProto(message: _133.MsgAddClassCreatorResponse): Uint8Array;
                toProtoMsg(message: _133.MsgAddClassCreatorResponse): _133.MsgAddClassCreatorResponseProtoMsg;
            };
            MsgSetClassCreatorAllowlist: {
                encode(message: _133.MsgSetClassCreatorAllowlist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgSetClassCreatorAllowlist;
                fromJSON(object: any): _133.MsgSetClassCreatorAllowlist;
                toJSON(message: _133.MsgSetClassCreatorAllowlist): unknown;
                fromPartial(object: Partial<_133.MsgSetClassCreatorAllowlist>): _133.MsgSetClassCreatorAllowlist;
                fromAmino(object: _133.MsgSetClassCreatorAllowlistAmino): _133.MsgSetClassCreatorAllowlist;
                toAmino(message: _133.MsgSetClassCreatorAllowlist): _133.MsgSetClassCreatorAllowlistAmino;
                fromAminoMsg(object: _133.MsgSetClassCreatorAllowlistAminoMsg): _133.MsgSetClassCreatorAllowlist;
                toAminoMsg(message: _133.MsgSetClassCreatorAllowlist): _133.MsgSetClassCreatorAllowlistAminoMsg;
                fromProtoMsg(message: _133.MsgSetClassCreatorAllowlistProtoMsg): _133.MsgSetClassCreatorAllowlist;
                toProto(message: _133.MsgSetClassCreatorAllowlist): Uint8Array;
                toProtoMsg(message: _133.MsgSetClassCreatorAllowlist): _133.MsgSetClassCreatorAllowlistProtoMsg;
            };
            MsgSetClassCreatorAllowlistResponse: {
                encode(_: _133.MsgSetClassCreatorAllowlistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgSetClassCreatorAllowlistResponse;
                fromJSON(_: any): _133.MsgSetClassCreatorAllowlistResponse;
                toJSON(_: _133.MsgSetClassCreatorAllowlistResponse): unknown;
                fromPartial(_: Partial<_133.MsgSetClassCreatorAllowlistResponse>): _133.MsgSetClassCreatorAllowlistResponse;
                fromAmino(_: _133.MsgSetClassCreatorAllowlistResponseAmino): _133.MsgSetClassCreatorAllowlistResponse;
                toAmino(_: _133.MsgSetClassCreatorAllowlistResponse): _133.MsgSetClassCreatorAllowlistResponseAmino;
                fromAminoMsg(object: _133.MsgSetClassCreatorAllowlistResponseAminoMsg): _133.MsgSetClassCreatorAllowlistResponse;
                fromProtoMsg(message: _133.MsgSetClassCreatorAllowlistResponseProtoMsg): _133.MsgSetClassCreatorAllowlistResponse;
                toProto(message: _133.MsgSetClassCreatorAllowlistResponse): Uint8Array;
                toProtoMsg(message: _133.MsgSetClassCreatorAllowlistResponse): _133.MsgSetClassCreatorAllowlistResponseProtoMsg;
            };
            MsgRemoveClassCreator: {
                encode(message: _133.MsgRemoveClassCreator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgRemoveClassCreator;
                fromJSON(object: any): _133.MsgRemoveClassCreator;
                toJSON(message: _133.MsgRemoveClassCreator): unknown;
                fromPartial(object: Partial<_133.MsgRemoveClassCreator>): _133.MsgRemoveClassCreator;
                fromAmino(object: _133.MsgRemoveClassCreatorAmino): _133.MsgRemoveClassCreator;
                toAmino(message: _133.MsgRemoveClassCreator): _133.MsgRemoveClassCreatorAmino;
                fromAminoMsg(object: _133.MsgRemoveClassCreatorAminoMsg): _133.MsgRemoveClassCreator;
                toAminoMsg(message: _133.MsgRemoveClassCreator): _133.MsgRemoveClassCreatorAminoMsg;
                fromProtoMsg(message: _133.MsgRemoveClassCreatorProtoMsg): _133.MsgRemoveClassCreator;
                toProto(message: _133.MsgRemoveClassCreator): Uint8Array;
                toProtoMsg(message: _133.MsgRemoveClassCreator): _133.MsgRemoveClassCreatorProtoMsg;
            };
            MsgRemoveClassCreatorResponse: {
                encode(_: _133.MsgRemoveClassCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgRemoveClassCreatorResponse;
                fromJSON(_: any): _133.MsgRemoveClassCreatorResponse;
                toJSON(_: _133.MsgRemoveClassCreatorResponse): unknown;
                fromPartial(_: Partial<_133.MsgRemoveClassCreatorResponse>): _133.MsgRemoveClassCreatorResponse;
                fromAmino(_: _133.MsgRemoveClassCreatorResponseAmino): _133.MsgRemoveClassCreatorResponse;
                toAmino(_: _133.MsgRemoveClassCreatorResponse): _133.MsgRemoveClassCreatorResponseAmino;
                fromAminoMsg(object: _133.MsgRemoveClassCreatorResponseAminoMsg): _133.MsgRemoveClassCreatorResponse;
                fromProtoMsg(message: _133.MsgRemoveClassCreatorResponseProtoMsg): _133.MsgRemoveClassCreatorResponse;
                toProto(message: _133.MsgRemoveClassCreatorResponse): Uint8Array;
                toProtoMsg(message: _133.MsgRemoveClassCreatorResponse): _133.MsgRemoveClassCreatorResponseProtoMsg;
            };
            MsgUpdateClassFee: {
                encode(message: _133.MsgUpdateClassFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgUpdateClassFee;
                fromJSON(object: any): _133.MsgUpdateClassFee;
                toJSON(message: _133.MsgUpdateClassFee): unknown;
                fromPartial(object: Partial<_133.MsgUpdateClassFee>): _133.MsgUpdateClassFee;
                fromAmino(object: _133.MsgUpdateClassFeeAmino): _133.MsgUpdateClassFee;
                toAmino(message: _133.MsgUpdateClassFee): _133.MsgUpdateClassFeeAmino;
                fromAminoMsg(object: _133.MsgUpdateClassFeeAminoMsg): _133.MsgUpdateClassFee;
                toAminoMsg(message: _133.MsgUpdateClassFee): _133.MsgUpdateClassFeeAminoMsg;
                fromProtoMsg(message: _133.MsgUpdateClassFeeProtoMsg): _133.MsgUpdateClassFee;
                toProto(message: _133.MsgUpdateClassFee): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateClassFee): _133.MsgUpdateClassFeeProtoMsg;
            };
            MsgUpdateClassFeeResponse: {
                encode(_: _133.MsgUpdateClassFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgUpdateClassFeeResponse;
                fromJSON(_: any): _133.MsgUpdateClassFeeResponse;
                toJSON(_: _133.MsgUpdateClassFeeResponse): unknown;
                fromPartial(_: Partial<_133.MsgUpdateClassFeeResponse>): _133.MsgUpdateClassFeeResponse;
                fromAmino(_: _133.MsgUpdateClassFeeResponseAmino): _133.MsgUpdateClassFeeResponse;
                toAmino(_: _133.MsgUpdateClassFeeResponse): _133.MsgUpdateClassFeeResponseAmino;
                fromAminoMsg(object: _133.MsgUpdateClassFeeResponseAminoMsg): _133.MsgUpdateClassFeeResponse;
                fromProtoMsg(message: _133.MsgUpdateClassFeeResponseProtoMsg): _133.MsgUpdateClassFeeResponse;
                toProto(message: _133.MsgUpdateClassFeeResponse): Uint8Array;
                toProtoMsg(message: _133.MsgUpdateClassFeeResponse): _133.MsgUpdateClassFeeResponseProtoMsg;
            };
            MsgAddAllowedBridgeChain: {
                encode(message: _133.MsgAddAllowedBridgeChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgAddAllowedBridgeChain;
                fromJSON(object: any): _133.MsgAddAllowedBridgeChain;
                toJSON(message: _133.MsgAddAllowedBridgeChain): unknown;
                fromPartial(object: Partial<_133.MsgAddAllowedBridgeChain>): _133.MsgAddAllowedBridgeChain;
                fromAmino(object: _133.MsgAddAllowedBridgeChainAmino): _133.MsgAddAllowedBridgeChain;
                toAmino(message: _133.MsgAddAllowedBridgeChain): _133.MsgAddAllowedBridgeChainAmino;
                fromAminoMsg(object: _133.MsgAddAllowedBridgeChainAminoMsg): _133.MsgAddAllowedBridgeChain;
                toAminoMsg(message: _133.MsgAddAllowedBridgeChain): _133.MsgAddAllowedBridgeChainAminoMsg;
                fromProtoMsg(message: _133.MsgAddAllowedBridgeChainProtoMsg): _133.MsgAddAllowedBridgeChain;
                toProto(message: _133.MsgAddAllowedBridgeChain): Uint8Array;
                toProtoMsg(message: _133.MsgAddAllowedBridgeChain): _133.MsgAddAllowedBridgeChainProtoMsg;
            };
            MsgAddAllowedBridgeChainResponse: {
                encode(_: _133.MsgAddAllowedBridgeChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgAddAllowedBridgeChainResponse;
                fromJSON(_: any): _133.MsgAddAllowedBridgeChainResponse;
                toJSON(_: _133.MsgAddAllowedBridgeChainResponse): unknown;
                fromPartial(_: Partial<_133.MsgAddAllowedBridgeChainResponse>): _133.MsgAddAllowedBridgeChainResponse;
                fromAmino(_: _133.MsgAddAllowedBridgeChainResponseAmino): _133.MsgAddAllowedBridgeChainResponse;
                toAmino(_: _133.MsgAddAllowedBridgeChainResponse): _133.MsgAddAllowedBridgeChainResponseAmino;
                fromAminoMsg(object: _133.MsgAddAllowedBridgeChainResponseAminoMsg): _133.MsgAddAllowedBridgeChainResponse;
                fromProtoMsg(message: _133.MsgAddAllowedBridgeChainResponseProtoMsg): _133.MsgAddAllowedBridgeChainResponse;
                toProto(message: _133.MsgAddAllowedBridgeChainResponse): Uint8Array;
                toProtoMsg(message: _133.MsgAddAllowedBridgeChainResponse): _133.MsgAddAllowedBridgeChainResponseProtoMsg;
            };
            MsgRemoveAllowedBridgeChain: {
                encode(message: _133.MsgRemoveAllowedBridgeChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgRemoveAllowedBridgeChain;
                fromJSON(object: any): _133.MsgRemoveAllowedBridgeChain;
                toJSON(message: _133.MsgRemoveAllowedBridgeChain): unknown;
                fromPartial(object: Partial<_133.MsgRemoveAllowedBridgeChain>): _133.MsgRemoveAllowedBridgeChain;
                fromAmino(object: _133.MsgRemoveAllowedBridgeChainAmino): _133.MsgRemoveAllowedBridgeChain;
                toAmino(message: _133.MsgRemoveAllowedBridgeChain): _133.MsgRemoveAllowedBridgeChainAmino;
                fromAminoMsg(object: _133.MsgRemoveAllowedBridgeChainAminoMsg): _133.MsgRemoveAllowedBridgeChain;
                toAminoMsg(message: _133.MsgRemoveAllowedBridgeChain): _133.MsgRemoveAllowedBridgeChainAminoMsg;
                fromProtoMsg(message: _133.MsgRemoveAllowedBridgeChainProtoMsg): _133.MsgRemoveAllowedBridgeChain;
                toProto(message: _133.MsgRemoveAllowedBridgeChain): Uint8Array;
                toProtoMsg(message: _133.MsgRemoveAllowedBridgeChain): _133.MsgRemoveAllowedBridgeChainProtoMsg;
            };
            MsgRemoveAllowedBridgeChainResponse: {
                encode(_: _133.MsgRemoveAllowedBridgeChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.MsgRemoveAllowedBridgeChainResponse;
                fromJSON(_: any): _133.MsgRemoveAllowedBridgeChainResponse;
                toJSON(_: _133.MsgRemoveAllowedBridgeChainResponse): unknown;
                fromPartial(_: Partial<_133.MsgRemoveAllowedBridgeChainResponse>): _133.MsgRemoveAllowedBridgeChainResponse;
                fromAmino(_: _133.MsgRemoveAllowedBridgeChainResponseAmino): _133.MsgRemoveAllowedBridgeChainResponse;
                toAmino(_: _133.MsgRemoveAllowedBridgeChainResponse): _133.MsgRemoveAllowedBridgeChainResponseAmino;
                fromAminoMsg(object: _133.MsgRemoveAllowedBridgeChainResponseAminoMsg): _133.MsgRemoveAllowedBridgeChainResponse;
                fromProtoMsg(message: _133.MsgRemoveAllowedBridgeChainResponseProtoMsg): _133.MsgRemoveAllowedBridgeChainResponse;
                toProto(message: _133.MsgRemoveAllowedBridgeChainResponse): Uint8Array;
                toProtoMsg(message: _133.MsgRemoveAllowedBridgeChainResponse): _133.MsgRemoveAllowedBridgeChainResponseProtoMsg;
            };
            CreditType: {
                encode(message: _132.CreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.CreditType;
                fromJSON(object: any): _132.CreditType;
                toJSON(message: _132.CreditType): unknown;
                fromPartial(object: Partial<_132.CreditType>): _132.CreditType;
                fromAmino(object: _132.CreditTypeAmino): _132.CreditType;
                toAmino(message: _132.CreditType): _132.CreditTypeAmino;
                fromAminoMsg(object: _132.CreditTypeAminoMsg): _132.CreditType;
                fromProtoMsg(message: _132.CreditTypeProtoMsg): _132.CreditType;
                toProto(message: _132.CreditType): Uint8Array;
                toProtoMsg(message: _132.CreditType): _132.CreditTypeProtoMsg;
            };
            Class: {
                encode(message: _132.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.Class;
                fromJSON(object: any): _132.Class;
                toJSON(message: _132.Class): unknown;
                fromPartial(object: Partial<_132.Class>): _132.Class;
                fromAmino(object: _132.ClassAmino): _132.Class;
                toAmino(message: _132.Class): _132.ClassAmino;
                fromAminoMsg(object: _132.ClassAminoMsg): _132.Class;
                fromProtoMsg(message: _132.ClassProtoMsg): _132.Class;
                toProto(message: _132.Class): Uint8Array;
                toProtoMsg(message: _132.Class): _132.ClassProtoMsg;
            };
            ClassIssuer: {
                encode(message: _132.ClassIssuer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ClassIssuer;
                fromJSON(object: any): _132.ClassIssuer;
                toJSON(message: _132.ClassIssuer): unknown;
                fromPartial(object: Partial<_132.ClassIssuer>): _132.ClassIssuer;
                fromAmino(object: _132.ClassIssuerAmino): _132.ClassIssuer;
                toAmino(message: _132.ClassIssuer): _132.ClassIssuerAmino;
                fromAminoMsg(object: _132.ClassIssuerAminoMsg): _132.ClassIssuer;
                fromProtoMsg(message: _132.ClassIssuerProtoMsg): _132.ClassIssuer;
                toProto(message: _132.ClassIssuer): Uint8Array;
                toProtoMsg(message: _132.ClassIssuer): _132.ClassIssuerProtoMsg;
            };
            Project: {
                encode(message: _132.Project, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.Project;
                fromJSON(object: any): _132.Project;
                toJSON(message: _132.Project): unknown;
                fromPartial(object: Partial<_132.Project>): _132.Project;
                fromAmino(object: _132.ProjectAmino): _132.Project;
                toAmino(message: _132.Project): _132.ProjectAmino;
                fromAminoMsg(object: _132.ProjectAminoMsg): _132.Project;
                fromProtoMsg(message: _132.ProjectProtoMsg): _132.Project;
                toProto(message: _132.Project): Uint8Array;
                toProtoMsg(message: _132.Project): _132.ProjectProtoMsg;
            };
            Batch: {
                encode(message: _132.Batch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.Batch;
                fromJSON(object: any): _132.Batch;
                toJSON(message: _132.Batch): unknown;
                fromPartial(object: Partial<_132.Batch>): _132.Batch;
                fromAmino(object: _132.BatchAmino): _132.Batch;
                toAmino(message: _132.Batch): _132.BatchAmino;
                fromAminoMsg(object: _132.BatchAminoMsg): _132.Batch;
                fromProtoMsg(message: _132.BatchProtoMsg): _132.Batch;
                toProto(message: _132.Batch): Uint8Array;
                toProtoMsg(message: _132.Batch): _132.BatchProtoMsg;
            };
            ClassSequence: {
                encode(message: _132.ClassSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ClassSequence;
                fromJSON(object: any): _132.ClassSequence;
                toJSON(message: _132.ClassSequence): unknown;
                fromPartial(object: Partial<_132.ClassSequence>): _132.ClassSequence;
                fromAmino(object: _132.ClassSequenceAmino): _132.ClassSequence;
                toAmino(message: _132.ClassSequence): _132.ClassSequenceAmino;
                fromAminoMsg(object: _132.ClassSequenceAminoMsg): _132.ClassSequence;
                fromProtoMsg(message: _132.ClassSequenceProtoMsg): _132.ClassSequence;
                toProto(message: _132.ClassSequence): Uint8Array;
                toProtoMsg(message: _132.ClassSequence): _132.ClassSequenceProtoMsg;
            };
            ProjectSequence: {
                encode(message: _132.ProjectSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ProjectSequence;
                fromJSON(object: any): _132.ProjectSequence;
                toJSON(message: _132.ProjectSequence): unknown;
                fromPartial(object: Partial<_132.ProjectSequence>): _132.ProjectSequence;
                fromAmino(object: _132.ProjectSequenceAmino): _132.ProjectSequence;
                toAmino(message: _132.ProjectSequence): _132.ProjectSequenceAmino;
                fromAminoMsg(object: _132.ProjectSequenceAminoMsg): _132.ProjectSequence;
                fromProtoMsg(message: _132.ProjectSequenceProtoMsg): _132.ProjectSequence;
                toProto(message: _132.ProjectSequence): Uint8Array;
                toProtoMsg(message: _132.ProjectSequence): _132.ProjectSequenceProtoMsg;
            };
            BatchSequence: {
                encode(message: _132.BatchSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.BatchSequence;
                fromJSON(object: any): _132.BatchSequence;
                toJSON(message: _132.BatchSequence): unknown;
                fromPartial(object: Partial<_132.BatchSequence>): _132.BatchSequence;
                fromAmino(object: _132.BatchSequenceAmino): _132.BatchSequence;
                toAmino(message: _132.BatchSequence): _132.BatchSequenceAmino;
                fromAminoMsg(object: _132.BatchSequenceAminoMsg): _132.BatchSequence;
                fromProtoMsg(message: _132.BatchSequenceProtoMsg): _132.BatchSequence;
                toProto(message: _132.BatchSequence): Uint8Array;
                toProtoMsg(message: _132.BatchSequence): _132.BatchSequenceProtoMsg;
            };
            BatchBalance: {
                encode(message: _132.BatchBalance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.BatchBalance;
                fromJSON(object: any): _132.BatchBalance;
                toJSON(message: _132.BatchBalance): unknown;
                fromPartial(object: Partial<_132.BatchBalance>): _132.BatchBalance;
                fromAmino(object: _132.BatchBalanceAmino): _132.BatchBalance;
                toAmino(message: _132.BatchBalance): _132.BatchBalanceAmino;
                fromAminoMsg(object: _132.BatchBalanceAminoMsg): _132.BatchBalance;
                fromProtoMsg(message: _132.BatchBalanceProtoMsg): _132.BatchBalance;
                toProto(message: _132.BatchBalance): Uint8Array;
                toProtoMsg(message: _132.BatchBalance): _132.BatchBalanceProtoMsg;
            };
            BatchSupply: {
                encode(message: _132.BatchSupply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.BatchSupply;
                fromJSON(object: any): _132.BatchSupply;
                toJSON(message: _132.BatchSupply): unknown;
                fromPartial(object: Partial<_132.BatchSupply>): _132.BatchSupply;
                fromAmino(object: _132.BatchSupplyAmino): _132.BatchSupply;
                toAmino(message: _132.BatchSupply): _132.BatchSupplyAmino;
                fromAminoMsg(object: _132.BatchSupplyAminoMsg): _132.BatchSupply;
                fromProtoMsg(message: _132.BatchSupplyProtoMsg): _132.BatchSupply;
                toProto(message: _132.BatchSupply): Uint8Array;
                toProtoMsg(message: _132.BatchSupply): _132.BatchSupplyProtoMsg;
            };
            OriginTxIndex: {
                encode(message: _132.OriginTxIndex, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.OriginTxIndex;
                fromJSON(object: any): _132.OriginTxIndex;
                toJSON(message: _132.OriginTxIndex): unknown;
                fromPartial(object: Partial<_132.OriginTxIndex>): _132.OriginTxIndex;
                fromAmino(object: _132.OriginTxIndexAmino): _132.OriginTxIndex;
                toAmino(message: _132.OriginTxIndex): _132.OriginTxIndexAmino;
                fromAminoMsg(object: _132.OriginTxIndexAminoMsg): _132.OriginTxIndex;
                fromProtoMsg(message: _132.OriginTxIndexProtoMsg): _132.OriginTxIndex;
                toProto(message: _132.OriginTxIndex): Uint8Array;
                toProtoMsg(message: _132.OriginTxIndex): _132.OriginTxIndexProtoMsg;
            };
            BatchContract: {
                encode(message: _132.BatchContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.BatchContract;
                fromJSON(object: any): _132.BatchContract;
                toJSON(message: _132.BatchContract): unknown;
                fromPartial(object: Partial<_132.BatchContract>): _132.BatchContract;
                fromAmino(object: _132.BatchContractAmino): _132.BatchContract;
                toAmino(message: _132.BatchContract): _132.BatchContractAmino;
                fromAminoMsg(object: _132.BatchContractAminoMsg): _132.BatchContract;
                fromProtoMsg(message: _132.BatchContractProtoMsg): _132.BatchContract;
                toProto(message: _132.BatchContract): Uint8Array;
                toProtoMsg(message: _132.BatchContract): _132.BatchContractProtoMsg;
            };
            ClassCreatorAllowlist: {
                encode(message: _132.ClassCreatorAllowlist, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ClassCreatorAllowlist;
                fromJSON(object: any): _132.ClassCreatorAllowlist;
                toJSON(message: _132.ClassCreatorAllowlist): unknown;
                fromPartial(object: Partial<_132.ClassCreatorAllowlist>): _132.ClassCreatorAllowlist;
                fromAmino(object: _132.ClassCreatorAllowlistAmino): _132.ClassCreatorAllowlist;
                toAmino(message: _132.ClassCreatorAllowlist): _132.ClassCreatorAllowlistAmino;
                fromAminoMsg(object: _132.ClassCreatorAllowlistAminoMsg): _132.ClassCreatorAllowlist;
                fromProtoMsg(message: _132.ClassCreatorAllowlistProtoMsg): _132.ClassCreatorAllowlist;
                toProto(message: _132.ClassCreatorAllowlist): Uint8Array;
                toProtoMsg(message: _132.ClassCreatorAllowlist): _132.ClassCreatorAllowlistProtoMsg;
            };
            AllowedClassCreator: {
                encode(message: _132.AllowedClassCreator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.AllowedClassCreator;
                fromJSON(object: any): _132.AllowedClassCreator;
                toJSON(message: _132.AllowedClassCreator): unknown;
                fromPartial(object: Partial<_132.AllowedClassCreator>): _132.AllowedClassCreator;
                fromAmino(object: _132.AllowedClassCreatorAmino): _132.AllowedClassCreator;
                toAmino(message: _132.AllowedClassCreator): _132.AllowedClassCreatorAmino;
                fromAminoMsg(object: _132.AllowedClassCreatorAminoMsg): _132.AllowedClassCreator;
                fromProtoMsg(message: _132.AllowedClassCreatorProtoMsg): _132.AllowedClassCreator;
                toProto(message: _132.AllowedClassCreator): Uint8Array;
                toProtoMsg(message: _132.AllowedClassCreator): _132.AllowedClassCreatorProtoMsg;
            };
            ClassFee: {
                encode(message: _132.ClassFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ClassFee;
                fromJSON(object: any): _132.ClassFee;
                toJSON(message: _132.ClassFee): unknown;
                fromPartial(object: Partial<_132.ClassFee>): _132.ClassFee;
                fromAmino(object: _132.ClassFeeAmino): _132.ClassFee;
                toAmino(message: _132.ClassFee): _132.ClassFeeAmino;
                fromAminoMsg(object: _132.ClassFeeAminoMsg): _132.ClassFee;
                fromProtoMsg(message: _132.ClassFeeProtoMsg): _132.ClassFee;
                toProto(message: _132.ClassFee): Uint8Array;
                toProtoMsg(message: _132.ClassFee): _132.ClassFeeProtoMsg;
            };
            AllowedBridgeChain: {
                encode(message: _132.AllowedBridgeChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.AllowedBridgeChain;
                fromJSON(object: any): _132.AllowedBridgeChain;
                toJSON(message: _132.AllowedBridgeChain): unknown;
                fromPartial(object: Partial<_132.AllowedBridgeChain>): _132.AllowedBridgeChain;
                fromAmino(object: _132.AllowedBridgeChainAmino): _132.AllowedBridgeChain;
                toAmino(message: _132.AllowedBridgeChain): _132.AllowedBridgeChainAmino;
                fromAminoMsg(object: _132.AllowedBridgeChainAminoMsg): _132.AllowedBridgeChain;
                fromProtoMsg(message: _132.AllowedBridgeChainProtoMsg): _132.AllowedBridgeChain;
                toProto(message: _132.AllowedBridgeChain): Uint8Array;
                toProtoMsg(message: _132.AllowedBridgeChain): _132.AllowedBridgeChainProtoMsg;
            };
            QueryClassesRequest: {
                encode(message: _131.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryClassesRequest;
                fromJSON(object: any): _131.QueryClassesRequest;
                toJSON(message: _131.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_131.QueryClassesRequest>): _131.QueryClassesRequest;
                fromAmino(object: _131.QueryClassesRequestAmino): _131.QueryClassesRequest;
                toAmino(message: _131.QueryClassesRequest): _131.QueryClassesRequestAmino;
                fromAminoMsg(object: _131.QueryClassesRequestAminoMsg): _131.QueryClassesRequest;
                fromProtoMsg(message: _131.QueryClassesRequestProtoMsg): _131.QueryClassesRequest;
                toProto(message: _131.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _131.QueryClassesRequest): _131.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                encode(message: _131.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryClassesResponse;
                fromJSON(object: any): _131.QueryClassesResponse;
                toJSON(message: _131.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_131.QueryClassesResponse>): _131.QueryClassesResponse;
                fromAmino(object: _131.QueryClassesResponseAmino): _131.QueryClassesResponse;
                toAmino(message: _131.QueryClassesResponse): _131.QueryClassesResponseAmino;
                fromAminoMsg(object: _131.QueryClassesResponseAminoMsg): _131.QueryClassesResponse;
                fromProtoMsg(message: _131.QueryClassesResponseProtoMsg): _131.QueryClassesResponse;
                toProto(message: _131.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _131.QueryClassesResponse): _131.QueryClassesResponseProtoMsg;
            };
            QueryClassesByAdminRequest: {
                encode(message: _131.QueryClassesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryClassesByAdminRequest;
                fromJSON(object: any): _131.QueryClassesByAdminRequest;
                toJSON(message: _131.QueryClassesByAdminRequest): unknown;
                fromPartial(object: Partial<_131.QueryClassesByAdminRequest>): _131.QueryClassesByAdminRequest;
                fromAmino(object: _131.QueryClassesByAdminRequestAmino): _131.QueryClassesByAdminRequest;
                toAmino(message: _131.QueryClassesByAdminRequest): _131.QueryClassesByAdminRequestAmino;
                fromAminoMsg(object: _131.QueryClassesByAdminRequestAminoMsg): _131.QueryClassesByAdminRequest;
                fromProtoMsg(message: _131.QueryClassesByAdminRequestProtoMsg): _131.QueryClassesByAdminRequest;
                toProto(message: _131.QueryClassesByAdminRequest): Uint8Array;
                toProtoMsg(message: _131.QueryClassesByAdminRequest): _131.QueryClassesByAdminRequestProtoMsg;
            };
            QueryClassesByAdminResponse: {
                encode(message: _131.QueryClassesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryClassesByAdminResponse;
                fromJSON(object: any): _131.QueryClassesByAdminResponse;
                toJSON(message: _131.QueryClassesByAdminResponse): unknown;
                fromPartial(object: Partial<_131.QueryClassesByAdminResponse>): _131.QueryClassesByAdminResponse;
                fromAmino(object: _131.QueryClassesByAdminResponseAmino): _131.QueryClassesByAdminResponse;
                toAmino(message: _131.QueryClassesByAdminResponse): _131.QueryClassesByAdminResponseAmino;
                fromAminoMsg(object: _131.QueryClassesByAdminResponseAminoMsg): _131.QueryClassesByAdminResponse;
                fromProtoMsg(message: _131.QueryClassesByAdminResponseProtoMsg): _131.QueryClassesByAdminResponse;
                toProto(message: _131.QueryClassesByAdminResponse): Uint8Array;
                toProtoMsg(message: _131.QueryClassesByAdminResponse): _131.QueryClassesByAdminResponseProtoMsg;
            };
            QueryClassRequest: {
                encode(message: _131.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryClassRequest;
                fromJSON(object: any): _131.QueryClassRequest;
                toJSON(message: _131.QueryClassRequest): unknown;
                fromPartial(object: Partial<_131.QueryClassRequest>): _131.QueryClassRequest;
                fromAmino(object: _131.QueryClassRequestAmino): _131.QueryClassRequest;
                toAmino(message: _131.QueryClassRequest): _131.QueryClassRequestAmino;
                fromAminoMsg(object: _131.QueryClassRequestAminoMsg): _131.QueryClassRequest;
                fromProtoMsg(message: _131.QueryClassRequestProtoMsg): _131.QueryClassRequest;
                toProto(message: _131.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _131.QueryClassRequest): _131.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                encode(message: _131.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryClassResponse;
                fromJSON(object: any): _131.QueryClassResponse;
                toJSON(message: _131.QueryClassResponse): unknown;
                fromPartial(object: Partial<_131.QueryClassResponse>): _131.QueryClassResponse;
                fromAmino(object: _131.QueryClassResponseAmino): _131.QueryClassResponse;
                toAmino(message: _131.QueryClassResponse): _131.QueryClassResponseAmino;
                fromAminoMsg(object: _131.QueryClassResponseAminoMsg): _131.QueryClassResponse;
                fromProtoMsg(message: _131.QueryClassResponseProtoMsg): _131.QueryClassResponse;
                toProto(message: _131.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _131.QueryClassResponse): _131.QueryClassResponseProtoMsg;
            };
            QueryClassIssuersRequest: {
                encode(message: _131.QueryClassIssuersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryClassIssuersRequest;
                fromJSON(object: any): _131.QueryClassIssuersRequest;
                toJSON(message: _131.QueryClassIssuersRequest): unknown;
                fromPartial(object: Partial<_131.QueryClassIssuersRequest>): _131.QueryClassIssuersRequest;
                fromAmino(object: _131.QueryClassIssuersRequestAmino): _131.QueryClassIssuersRequest;
                toAmino(message: _131.QueryClassIssuersRequest): _131.QueryClassIssuersRequestAmino;
                fromAminoMsg(object: _131.QueryClassIssuersRequestAminoMsg): _131.QueryClassIssuersRequest;
                fromProtoMsg(message: _131.QueryClassIssuersRequestProtoMsg): _131.QueryClassIssuersRequest;
                toProto(message: _131.QueryClassIssuersRequest): Uint8Array;
                toProtoMsg(message: _131.QueryClassIssuersRequest): _131.QueryClassIssuersRequestProtoMsg;
            };
            QueryClassIssuersResponse: {
                encode(message: _131.QueryClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryClassIssuersResponse;
                fromJSON(object: any): _131.QueryClassIssuersResponse;
                toJSON(message: _131.QueryClassIssuersResponse): unknown;
                fromPartial(object: Partial<_131.QueryClassIssuersResponse>): _131.QueryClassIssuersResponse;
                fromAmino(object: _131.QueryClassIssuersResponseAmino): _131.QueryClassIssuersResponse;
                toAmino(message: _131.QueryClassIssuersResponse): _131.QueryClassIssuersResponseAmino;
                fromAminoMsg(object: _131.QueryClassIssuersResponseAminoMsg): _131.QueryClassIssuersResponse;
                fromProtoMsg(message: _131.QueryClassIssuersResponseProtoMsg): _131.QueryClassIssuersResponse;
                toProto(message: _131.QueryClassIssuersResponse): Uint8Array;
                toProtoMsg(message: _131.QueryClassIssuersResponse): _131.QueryClassIssuersResponseProtoMsg;
            };
            QueryProjectsRequest: {
                encode(message: _131.QueryProjectsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryProjectsRequest;
                fromJSON(object: any): _131.QueryProjectsRequest;
                toJSON(message: _131.QueryProjectsRequest): unknown;
                fromPartial(object: Partial<_131.QueryProjectsRequest>): _131.QueryProjectsRequest;
                fromAmino(object: _131.QueryProjectsRequestAmino): _131.QueryProjectsRequest;
                toAmino(message: _131.QueryProjectsRequest): _131.QueryProjectsRequestAmino;
                fromAminoMsg(object: _131.QueryProjectsRequestAminoMsg): _131.QueryProjectsRequest;
                fromProtoMsg(message: _131.QueryProjectsRequestProtoMsg): _131.QueryProjectsRequest;
                toProto(message: _131.QueryProjectsRequest): Uint8Array;
                toProtoMsg(message: _131.QueryProjectsRequest): _131.QueryProjectsRequestProtoMsg;
            };
            QueryProjectsResponse: {
                encode(message: _131.QueryProjectsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryProjectsResponse;
                fromJSON(object: any): _131.QueryProjectsResponse;
                toJSON(message: _131.QueryProjectsResponse): unknown;
                fromPartial(object: Partial<_131.QueryProjectsResponse>): _131.QueryProjectsResponse;
                fromAmino(object: _131.QueryProjectsResponseAmino): _131.QueryProjectsResponse;
                toAmino(message: _131.QueryProjectsResponse): _131.QueryProjectsResponseAmino;
                fromAminoMsg(object: _131.QueryProjectsResponseAminoMsg): _131.QueryProjectsResponse;
                fromProtoMsg(message: _131.QueryProjectsResponseProtoMsg): _131.QueryProjectsResponse;
                toProto(message: _131.QueryProjectsResponse): Uint8Array;
                toProtoMsg(message: _131.QueryProjectsResponse): _131.QueryProjectsResponseProtoMsg;
            };
            QueryProjectsByClassRequest: {
                encode(message: _131.QueryProjectsByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryProjectsByClassRequest;
                fromJSON(object: any): _131.QueryProjectsByClassRequest;
                toJSON(message: _131.QueryProjectsByClassRequest): unknown;
                fromPartial(object: Partial<_131.QueryProjectsByClassRequest>): _131.QueryProjectsByClassRequest;
                fromAmino(object: _131.QueryProjectsByClassRequestAmino): _131.QueryProjectsByClassRequest;
                toAmino(message: _131.QueryProjectsByClassRequest): _131.QueryProjectsByClassRequestAmino;
                fromAminoMsg(object: _131.QueryProjectsByClassRequestAminoMsg): _131.QueryProjectsByClassRequest;
                fromProtoMsg(message: _131.QueryProjectsByClassRequestProtoMsg): _131.QueryProjectsByClassRequest;
                toProto(message: _131.QueryProjectsByClassRequest): Uint8Array;
                toProtoMsg(message: _131.QueryProjectsByClassRequest): _131.QueryProjectsByClassRequestProtoMsg;
            };
            QueryProjectsByClassResponse: {
                encode(message: _131.QueryProjectsByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryProjectsByClassResponse;
                fromJSON(object: any): _131.QueryProjectsByClassResponse;
                toJSON(message: _131.QueryProjectsByClassResponse): unknown;
                fromPartial(object: Partial<_131.QueryProjectsByClassResponse>): _131.QueryProjectsByClassResponse;
                fromAmino(object: _131.QueryProjectsByClassResponseAmino): _131.QueryProjectsByClassResponse;
                toAmino(message: _131.QueryProjectsByClassResponse): _131.QueryProjectsByClassResponseAmino;
                fromAminoMsg(object: _131.QueryProjectsByClassResponseAminoMsg): _131.QueryProjectsByClassResponse;
                fromProtoMsg(message: _131.QueryProjectsByClassResponseProtoMsg): _131.QueryProjectsByClassResponse;
                toProto(message: _131.QueryProjectsByClassResponse): Uint8Array;
                toProtoMsg(message: _131.QueryProjectsByClassResponse): _131.QueryProjectsByClassResponseProtoMsg;
            };
            QueryProjectsByReferenceIdRequest: {
                encode(message: _131.QueryProjectsByReferenceIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryProjectsByReferenceIdRequest;
                fromJSON(object: any): _131.QueryProjectsByReferenceIdRequest;
                toJSON(message: _131.QueryProjectsByReferenceIdRequest): unknown;
                fromPartial(object: Partial<_131.QueryProjectsByReferenceIdRequest>): _131.QueryProjectsByReferenceIdRequest;
                fromAmino(object: _131.QueryProjectsByReferenceIdRequestAmino): _131.QueryProjectsByReferenceIdRequest;
                toAmino(message: _131.QueryProjectsByReferenceIdRequest): _131.QueryProjectsByReferenceIdRequestAmino;
                fromAminoMsg(object: _131.QueryProjectsByReferenceIdRequestAminoMsg): _131.QueryProjectsByReferenceIdRequest;
                fromProtoMsg(message: _131.QueryProjectsByReferenceIdRequestProtoMsg): _131.QueryProjectsByReferenceIdRequest;
                toProto(message: _131.QueryProjectsByReferenceIdRequest): Uint8Array;
                toProtoMsg(message: _131.QueryProjectsByReferenceIdRequest): _131.QueryProjectsByReferenceIdRequestProtoMsg;
            };
            QueryProjectsByReferenceIdResponse: {
                encode(message: _131.QueryProjectsByReferenceIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryProjectsByReferenceIdResponse;
                fromJSON(object: any): _131.QueryProjectsByReferenceIdResponse;
                toJSON(message: _131.QueryProjectsByReferenceIdResponse): unknown;
                fromPartial(object: Partial<_131.QueryProjectsByReferenceIdResponse>): _131.QueryProjectsByReferenceIdResponse;
                fromAmino(object: _131.QueryProjectsByReferenceIdResponseAmino): _131.QueryProjectsByReferenceIdResponse;
                toAmino(message: _131.QueryProjectsByReferenceIdResponse): _131.QueryProjectsByReferenceIdResponseAmino;
                fromAminoMsg(object: _131.QueryProjectsByReferenceIdResponseAminoMsg): _131.QueryProjectsByReferenceIdResponse;
                fromProtoMsg(message: _131.QueryProjectsByReferenceIdResponseProtoMsg): _131.QueryProjectsByReferenceIdResponse;
                toProto(message: _131.QueryProjectsByReferenceIdResponse): Uint8Array;
                toProtoMsg(message: _131.QueryProjectsByReferenceIdResponse): _131.QueryProjectsByReferenceIdResponseProtoMsg;
            };
            QueryProjectsByAdminRequest: {
                encode(message: _131.QueryProjectsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryProjectsByAdminRequest;
                fromJSON(object: any): _131.QueryProjectsByAdminRequest;
                toJSON(message: _131.QueryProjectsByAdminRequest): unknown;
                fromPartial(object: Partial<_131.QueryProjectsByAdminRequest>): _131.QueryProjectsByAdminRequest;
                fromAmino(object: _131.QueryProjectsByAdminRequestAmino): _131.QueryProjectsByAdminRequest;
                toAmino(message: _131.QueryProjectsByAdminRequest): _131.QueryProjectsByAdminRequestAmino;
                fromAminoMsg(object: _131.QueryProjectsByAdminRequestAminoMsg): _131.QueryProjectsByAdminRequest;
                fromProtoMsg(message: _131.QueryProjectsByAdminRequestProtoMsg): _131.QueryProjectsByAdminRequest;
                toProto(message: _131.QueryProjectsByAdminRequest): Uint8Array;
                toProtoMsg(message: _131.QueryProjectsByAdminRequest): _131.QueryProjectsByAdminRequestProtoMsg;
            };
            QueryProjectsByAdminResponse: {
                encode(message: _131.QueryProjectsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryProjectsByAdminResponse;
                fromJSON(object: any): _131.QueryProjectsByAdminResponse;
                toJSON(message: _131.QueryProjectsByAdminResponse): unknown;
                fromPartial(object: Partial<_131.QueryProjectsByAdminResponse>): _131.QueryProjectsByAdminResponse;
                fromAmino(object: _131.QueryProjectsByAdminResponseAmino): _131.QueryProjectsByAdminResponse;
                toAmino(message: _131.QueryProjectsByAdminResponse): _131.QueryProjectsByAdminResponseAmino;
                fromAminoMsg(object: _131.QueryProjectsByAdminResponseAminoMsg): _131.QueryProjectsByAdminResponse;
                fromProtoMsg(message: _131.QueryProjectsByAdminResponseProtoMsg): _131.QueryProjectsByAdminResponse;
                toProto(message: _131.QueryProjectsByAdminResponse): Uint8Array;
                toProtoMsg(message: _131.QueryProjectsByAdminResponse): _131.QueryProjectsByAdminResponseProtoMsg;
            };
            QueryProjectRequest: {
                encode(message: _131.QueryProjectRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryProjectRequest;
                fromJSON(object: any): _131.QueryProjectRequest;
                toJSON(message: _131.QueryProjectRequest): unknown;
                fromPartial(object: Partial<_131.QueryProjectRequest>): _131.QueryProjectRequest;
                fromAmino(object: _131.QueryProjectRequestAmino): _131.QueryProjectRequest;
                toAmino(message: _131.QueryProjectRequest): _131.QueryProjectRequestAmino;
                fromAminoMsg(object: _131.QueryProjectRequestAminoMsg): _131.QueryProjectRequest;
                fromProtoMsg(message: _131.QueryProjectRequestProtoMsg): _131.QueryProjectRequest;
                toProto(message: _131.QueryProjectRequest): Uint8Array;
                toProtoMsg(message: _131.QueryProjectRequest): _131.QueryProjectRequestProtoMsg;
            };
            QueryProjectResponse: {
                encode(message: _131.QueryProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryProjectResponse;
                fromJSON(object: any): _131.QueryProjectResponse;
                toJSON(message: _131.QueryProjectResponse): unknown;
                fromPartial(object: Partial<_131.QueryProjectResponse>): _131.QueryProjectResponse;
                fromAmino(object: _131.QueryProjectResponseAmino): _131.QueryProjectResponse;
                toAmino(message: _131.QueryProjectResponse): _131.QueryProjectResponseAmino;
                fromAminoMsg(object: _131.QueryProjectResponseAminoMsg): _131.QueryProjectResponse;
                fromProtoMsg(message: _131.QueryProjectResponseProtoMsg): _131.QueryProjectResponse;
                toProto(message: _131.QueryProjectResponse): Uint8Array;
                toProtoMsg(message: _131.QueryProjectResponse): _131.QueryProjectResponseProtoMsg;
            };
            QueryBatchesRequest: {
                encode(message: _131.QueryBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryBatchesRequest;
                fromJSON(object: any): _131.QueryBatchesRequest;
                toJSON(message: _131.QueryBatchesRequest): unknown;
                fromPartial(object: Partial<_131.QueryBatchesRequest>): _131.QueryBatchesRequest;
                fromAmino(object: _131.QueryBatchesRequestAmino): _131.QueryBatchesRequest;
                toAmino(message: _131.QueryBatchesRequest): _131.QueryBatchesRequestAmino;
                fromAminoMsg(object: _131.QueryBatchesRequestAminoMsg): _131.QueryBatchesRequest;
                fromProtoMsg(message: _131.QueryBatchesRequestProtoMsg): _131.QueryBatchesRequest;
                toProto(message: _131.QueryBatchesRequest): Uint8Array;
                toProtoMsg(message: _131.QueryBatchesRequest): _131.QueryBatchesRequestProtoMsg;
            };
            QueryBatchesResponse: {
                encode(message: _131.QueryBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryBatchesResponse;
                fromJSON(object: any): _131.QueryBatchesResponse;
                toJSON(message: _131.QueryBatchesResponse): unknown;
                fromPartial(object: Partial<_131.QueryBatchesResponse>): _131.QueryBatchesResponse;
                fromAmino(object: _131.QueryBatchesResponseAmino): _131.QueryBatchesResponse;
                toAmino(message: _131.QueryBatchesResponse): _131.QueryBatchesResponseAmino;
                fromAminoMsg(object: _131.QueryBatchesResponseAminoMsg): _131.QueryBatchesResponse;
                fromProtoMsg(message: _131.QueryBatchesResponseProtoMsg): _131.QueryBatchesResponse;
                toProto(message: _131.QueryBatchesResponse): Uint8Array;
                toProtoMsg(message: _131.QueryBatchesResponse): _131.QueryBatchesResponseProtoMsg;
            };
            QueryBatchesByIssuerRequest: {
                encode(message: _131.QueryBatchesByIssuerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryBatchesByIssuerRequest;
                fromJSON(object: any): _131.QueryBatchesByIssuerRequest;
                toJSON(message: _131.QueryBatchesByIssuerRequest): unknown;
                fromPartial(object: Partial<_131.QueryBatchesByIssuerRequest>): _131.QueryBatchesByIssuerRequest;
                fromAmino(object: _131.QueryBatchesByIssuerRequestAmino): _131.QueryBatchesByIssuerRequest;
                toAmino(message: _131.QueryBatchesByIssuerRequest): _131.QueryBatchesByIssuerRequestAmino;
                fromAminoMsg(object: _131.QueryBatchesByIssuerRequestAminoMsg): _131.QueryBatchesByIssuerRequest;
                fromProtoMsg(message: _131.QueryBatchesByIssuerRequestProtoMsg): _131.QueryBatchesByIssuerRequest;
                toProto(message: _131.QueryBatchesByIssuerRequest): Uint8Array;
                toProtoMsg(message: _131.QueryBatchesByIssuerRequest): _131.QueryBatchesByIssuerRequestProtoMsg;
            };
            QueryBatchesByIssuerResponse: {
                encode(message: _131.QueryBatchesByIssuerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryBatchesByIssuerResponse;
                fromJSON(object: any): _131.QueryBatchesByIssuerResponse;
                toJSON(message: _131.QueryBatchesByIssuerResponse): unknown;
                fromPartial(object: Partial<_131.QueryBatchesByIssuerResponse>): _131.QueryBatchesByIssuerResponse;
                fromAmino(object: _131.QueryBatchesByIssuerResponseAmino): _131.QueryBatchesByIssuerResponse;
                toAmino(message: _131.QueryBatchesByIssuerResponse): _131.QueryBatchesByIssuerResponseAmino;
                fromAminoMsg(object: _131.QueryBatchesByIssuerResponseAminoMsg): _131.QueryBatchesByIssuerResponse;
                fromProtoMsg(message: _131.QueryBatchesByIssuerResponseProtoMsg): _131.QueryBatchesByIssuerResponse;
                toProto(message: _131.QueryBatchesByIssuerResponse): Uint8Array;
                toProtoMsg(message: _131.QueryBatchesByIssuerResponse): _131.QueryBatchesByIssuerResponseProtoMsg;
            };
            QueryBatchesByClassRequest: {
                encode(message: _131.QueryBatchesByClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryBatchesByClassRequest;
                fromJSON(object: any): _131.QueryBatchesByClassRequest;
                toJSON(message: _131.QueryBatchesByClassRequest): unknown;
                fromPartial(object: Partial<_131.QueryBatchesByClassRequest>): _131.QueryBatchesByClassRequest;
                fromAmino(object: _131.QueryBatchesByClassRequestAmino): _131.QueryBatchesByClassRequest;
                toAmino(message: _131.QueryBatchesByClassRequest): _131.QueryBatchesByClassRequestAmino;
                fromAminoMsg(object: _131.QueryBatchesByClassRequestAminoMsg): _131.QueryBatchesByClassRequest;
                fromProtoMsg(message: _131.QueryBatchesByClassRequestProtoMsg): _131.QueryBatchesByClassRequest;
                toProto(message: _131.QueryBatchesByClassRequest): Uint8Array;
                toProtoMsg(message: _131.QueryBatchesByClassRequest): _131.QueryBatchesByClassRequestProtoMsg;
            };
            QueryBatchesByProjectRequest: {
                encode(message: _131.QueryBatchesByProjectRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryBatchesByProjectRequest;
                fromJSON(object: any): _131.QueryBatchesByProjectRequest;
                toJSON(message: _131.QueryBatchesByProjectRequest): unknown;
                fromPartial(object: Partial<_131.QueryBatchesByProjectRequest>): _131.QueryBatchesByProjectRequest;
                fromAmino(object: _131.QueryBatchesByProjectRequestAmino): _131.QueryBatchesByProjectRequest;
                toAmino(message: _131.QueryBatchesByProjectRequest): _131.QueryBatchesByProjectRequestAmino;
                fromAminoMsg(object: _131.QueryBatchesByProjectRequestAminoMsg): _131.QueryBatchesByProjectRequest;
                fromProtoMsg(message: _131.QueryBatchesByProjectRequestProtoMsg): _131.QueryBatchesByProjectRequest;
                toProto(message: _131.QueryBatchesByProjectRequest): Uint8Array;
                toProtoMsg(message: _131.QueryBatchesByProjectRequest): _131.QueryBatchesByProjectRequestProtoMsg;
            };
            QueryBatchesByProjectResponse: {
                encode(message: _131.QueryBatchesByProjectResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryBatchesByProjectResponse;
                fromJSON(object: any): _131.QueryBatchesByProjectResponse;
                toJSON(message: _131.QueryBatchesByProjectResponse): unknown;
                fromPartial(object: Partial<_131.QueryBatchesByProjectResponse>): _131.QueryBatchesByProjectResponse;
                fromAmino(object: _131.QueryBatchesByProjectResponseAmino): _131.QueryBatchesByProjectResponse;
                toAmino(message: _131.QueryBatchesByProjectResponse): _131.QueryBatchesByProjectResponseAmino;
                fromAminoMsg(object: _131.QueryBatchesByProjectResponseAminoMsg): _131.QueryBatchesByProjectResponse;
                fromProtoMsg(message: _131.QueryBatchesByProjectResponseProtoMsg): _131.QueryBatchesByProjectResponse;
                toProto(message: _131.QueryBatchesByProjectResponse): Uint8Array;
                toProtoMsg(message: _131.QueryBatchesByProjectResponse): _131.QueryBatchesByProjectResponseProtoMsg;
            };
            QueryBatchesByClassResponse: {
                encode(message: _131.QueryBatchesByClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryBatchesByClassResponse;
                fromJSON(object: any): _131.QueryBatchesByClassResponse;
                toJSON(message: _131.QueryBatchesByClassResponse): unknown;
                fromPartial(object: Partial<_131.QueryBatchesByClassResponse>): _131.QueryBatchesByClassResponse;
                fromAmino(object: _131.QueryBatchesByClassResponseAmino): _131.QueryBatchesByClassResponse;
                toAmino(message: _131.QueryBatchesByClassResponse): _131.QueryBatchesByClassResponseAmino;
                fromAminoMsg(object: _131.QueryBatchesByClassResponseAminoMsg): _131.QueryBatchesByClassResponse;
                fromProtoMsg(message: _131.QueryBatchesByClassResponseProtoMsg): _131.QueryBatchesByClassResponse;
                toProto(message: _131.QueryBatchesByClassResponse): Uint8Array;
                toProtoMsg(message: _131.QueryBatchesByClassResponse): _131.QueryBatchesByClassResponseProtoMsg;
            };
            QueryBatchRequest: {
                encode(message: _131.QueryBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryBatchRequest;
                fromJSON(object: any): _131.QueryBatchRequest;
                toJSON(message: _131.QueryBatchRequest): unknown;
                fromPartial(object: Partial<_131.QueryBatchRequest>): _131.QueryBatchRequest;
                fromAmino(object: _131.QueryBatchRequestAmino): _131.QueryBatchRequest;
                toAmino(message: _131.QueryBatchRequest): _131.QueryBatchRequestAmino;
                fromAminoMsg(object: _131.QueryBatchRequestAminoMsg): _131.QueryBatchRequest;
                fromProtoMsg(message: _131.QueryBatchRequestProtoMsg): _131.QueryBatchRequest;
                toProto(message: _131.QueryBatchRequest): Uint8Array;
                toProtoMsg(message: _131.QueryBatchRequest): _131.QueryBatchRequestProtoMsg;
            };
            QueryBatchResponse: {
                encode(message: _131.QueryBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryBatchResponse;
                fromJSON(object: any): _131.QueryBatchResponse;
                toJSON(message: _131.QueryBatchResponse): unknown;
                fromPartial(object: Partial<_131.QueryBatchResponse>): _131.QueryBatchResponse;
                fromAmino(object: _131.QueryBatchResponseAmino): _131.QueryBatchResponse;
                toAmino(message: _131.QueryBatchResponse): _131.QueryBatchResponseAmino;
                fromAminoMsg(object: _131.QueryBatchResponseAminoMsg): _131.QueryBatchResponse;
                fromProtoMsg(message: _131.QueryBatchResponseProtoMsg): _131.QueryBatchResponse;
                toProto(message: _131.QueryBatchResponse): Uint8Array;
                toProtoMsg(message: _131.QueryBatchResponse): _131.QueryBatchResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _131.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryBalanceRequest;
                fromJSON(object: any): _131.QueryBalanceRequest;
                toJSON(message: _131.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_131.QueryBalanceRequest>): _131.QueryBalanceRequest;
                fromAmino(object: _131.QueryBalanceRequestAmino): _131.QueryBalanceRequest;
                toAmino(message: _131.QueryBalanceRequest): _131.QueryBalanceRequestAmino;
                fromAminoMsg(object: _131.QueryBalanceRequestAminoMsg): _131.QueryBalanceRequest;
                fromProtoMsg(message: _131.QueryBalanceRequestProtoMsg): _131.QueryBalanceRequest;
                toProto(message: _131.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _131.QueryBalanceRequest): _131.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _131.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryBalanceResponse;
                fromJSON(object: any): _131.QueryBalanceResponse;
                toJSON(message: _131.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_131.QueryBalanceResponse>): _131.QueryBalanceResponse;
                fromAmino(object: _131.QueryBalanceResponseAmino): _131.QueryBalanceResponse;
                toAmino(message: _131.QueryBalanceResponse): _131.QueryBalanceResponseAmino;
                fromAminoMsg(object: _131.QueryBalanceResponseAminoMsg): _131.QueryBalanceResponse;
                fromProtoMsg(message: _131.QueryBalanceResponseProtoMsg): _131.QueryBalanceResponse;
                toProto(message: _131.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _131.QueryBalanceResponse): _131.QueryBalanceResponseProtoMsg;
            };
            QueryBalancesRequest: {
                encode(message: _131.QueryBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryBalancesRequest;
                fromJSON(object: any): _131.QueryBalancesRequest;
                toJSON(message: _131.QueryBalancesRequest): unknown;
                fromPartial(object: Partial<_131.QueryBalancesRequest>): _131.QueryBalancesRequest;
                fromAmino(object: _131.QueryBalancesRequestAmino): _131.QueryBalancesRequest;
                toAmino(message: _131.QueryBalancesRequest): _131.QueryBalancesRequestAmino;
                fromAminoMsg(object: _131.QueryBalancesRequestAminoMsg): _131.QueryBalancesRequest;
                fromProtoMsg(message: _131.QueryBalancesRequestProtoMsg): _131.QueryBalancesRequest;
                toProto(message: _131.QueryBalancesRequest): Uint8Array;
                toProtoMsg(message: _131.QueryBalancesRequest): _131.QueryBalancesRequestProtoMsg;
            };
            QueryBalancesResponse: {
                encode(message: _131.QueryBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryBalancesResponse;
                fromJSON(object: any): _131.QueryBalancesResponse;
                toJSON(message: _131.QueryBalancesResponse): unknown;
                fromPartial(object: Partial<_131.QueryBalancesResponse>): _131.QueryBalancesResponse;
                fromAmino(object: _131.QueryBalancesResponseAmino): _131.QueryBalancesResponse;
                toAmino(message: _131.QueryBalancesResponse): _131.QueryBalancesResponseAmino;
                fromAminoMsg(object: _131.QueryBalancesResponseAminoMsg): _131.QueryBalancesResponse;
                fromProtoMsg(message: _131.QueryBalancesResponseProtoMsg): _131.QueryBalancesResponse;
                toProto(message: _131.QueryBalancesResponse): Uint8Array;
                toProtoMsg(message: _131.QueryBalancesResponse): _131.QueryBalancesResponseProtoMsg;
            };
            QueryBalancesByBatchRequest: {
                encode(message: _131.QueryBalancesByBatchRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryBalancesByBatchRequest;
                fromJSON(object: any): _131.QueryBalancesByBatchRequest;
                toJSON(message: _131.QueryBalancesByBatchRequest): unknown;
                fromPartial(object: Partial<_131.QueryBalancesByBatchRequest>): _131.QueryBalancesByBatchRequest;
                fromAmino(object: _131.QueryBalancesByBatchRequestAmino): _131.QueryBalancesByBatchRequest;
                toAmino(message: _131.QueryBalancesByBatchRequest): _131.QueryBalancesByBatchRequestAmino;
                fromAminoMsg(object: _131.QueryBalancesByBatchRequestAminoMsg): _131.QueryBalancesByBatchRequest;
                fromProtoMsg(message: _131.QueryBalancesByBatchRequestProtoMsg): _131.QueryBalancesByBatchRequest;
                toProto(message: _131.QueryBalancesByBatchRequest): Uint8Array;
                toProtoMsg(message: _131.QueryBalancesByBatchRequest): _131.QueryBalancesByBatchRequestProtoMsg;
            };
            QueryBalancesByBatchResponse: {
                encode(message: _131.QueryBalancesByBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryBalancesByBatchResponse;
                fromJSON(object: any): _131.QueryBalancesByBatchResponse;
                toJSON(message: _131.QueryBalancesByBatchResponse): unknown;
                fromPartial(object: Partial<_131.QueryBalancesByBatchResponse>): _131.QueryBalancesByBatchResponse;
                fromAmino(object: _131.QueryBalancesByBatchResponseAmino): _131.QueryBalancesByBatchResponse;
                toAmino(message: _131.QueryBalancesByBatchResponse): _131.QueryBalancesByBatchResponseAmino;
                fromAminoMsg(object: _131.QueryBalancesByBatchResponseAminoMsg): _131.QueryBalancesByBatchResponse;
                fromProtoMsg(message: _131.QueryBalancesByBatchResponseProtoMsg): _131.QueryBalancesByBatchResponse;
                toProto(message: _131.QueryBalancesByBatchResponse): Uint8Array;
                toProtoMsg(message: _131.QueryBalancesByBatchResponse): _131.QueryBalancesByBatchResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                encode(message: _131.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryAllBalancesRequest;
                fromJSON(object: any): _131.QueryAllBalancesRequest;
                toJSON(message: _131.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_131.QueryAllBalancesRequest>): _131.QueryAllBalancesRequest;
                fromAmino(object: _131.QueryAllBalancesRequestAmino): _131.QueryAllBalancesRequest;
                toAmino(message: _131.QueryAllBalancesRequest): _131.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _131.QueryAllBalancesRequestAminoMsg): _131.QueryAllBalancesRequest;
                fromProtoMsg(message: _131.QueryAllBalancesRequestProtoMsg): _131.QueryAllBalancesRequest;
                toProto(message: _131.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _131.QueryAllBalancesRequest): _131.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                encode(message: _131.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryAllBalancesResponse;
                fromJSON(object: any): _131.QueryAllBalancesResponse;
                toJSON(message: _131.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_131.QueryAllBalancesResponse>): _131.QueryAllBalancesResponse;
                fromAmino(object: _131.QueryAllBalancesResponseAmino): _131.QueryAllBalancesResponse;
                toAmino(message: _131.QueryAllBalancesResponse): _131.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _131.QueryAllBalancesResponseAminoMsg): _131.QueryAllBalancesResponse;
                fromProtoMsg(message: _131.QueryAllBalancesResponseProtoMsg): _131.QueryAllBalancesResponse;
                toProto(message: _131.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _131.QueryAllBalancesResponse): _131.QueryAllBalancesResponseProtoMsg;
            };
            QuerySupplyRequest: {
                encode(message: _131.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QuerySupplyRequest;
                fromJSON(object: any): _131.QuerySupplyRequest;
                toJSON(message: _131.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_131.QuerySupplyRequest>): _131.QuerySupplyRequest;
                fromAmino(object: _131.QuerySupplyRequestAmino): _131.QuerySupplyRequest;
                toAmino(message: _131.QuerySupplyRequest): _131.QuerySupplyRequestAmino;
                fromAminoMsg(object: _131.QuerySupplyRequestAminoMsg): _131.QuerySupplyRequest;
                fromProtoMsg(message: _131.QuerySupplyRequestProtoMsg): _131.QuerySupplyRequest;
                toProto(message: _131.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _131.QuerySupplyRequest): _131.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                encode(message: _131.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QuerySupplyResponse;
                fromJSON(object: any): _131.QuerySupplyResponse;
                toJSON(message: _131.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_131.QuerySupplyResponse>): _131.QuerySupplyResponse;
                fromAmino(object: _131.QuerySupplyResponseAmino): _131.QuerySupplyResponse;
                toAmino(message: _131.QuerySupplyResponse): _131.QuerySupplyResponseAmino;
                fromAminoMsg(object: _131.QuerySupplyResponseAminoMsg): _131.QuerySupplyResponse;
                fromProtoMsg(message: _131.QuerySupplyResponseProtoMsg): _131.QuerySupplyResponse;
                toProto(message: _131.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _131.QuerySupplyResponse): _131.QuerySupplyResponseProtoMsg;
            };
            QueryCreditTypesRequest: {
                encode(_: _131.QueryCreditTypesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryCreditTypesRequest;
                fromJSON(_: any): _131.QueryCreditTypesRequest;
                toJSON(_: _131.QueryCreditTypesRequest): unknown;
                fromPartial(_: Partial<_131.QueryCreditTypesRequest>): _131.QueryCreditTypesRequest;
                fromAmino(_: _131.QueryCreditTypesRequestAmino): _131.QueryCreditTypesRequest;
                toAmino(_: _131.QueryCreditTypesRequest): _131.QueryCreditTypesRequestAmino;
                fromAminoMsg(object: _131.QueryCreditTypesRequestAminoMsg): _131.QueryCreditTypesRequest;
                fromProtoMsg(message: _131.QueryCreditTypesRequestProtoMsg): _131.QueryCreditTypesRequest;
                toProto(message: _131.QueryCreditTypesRequest): Uint8Array;
                toProtoMsg(message: _131.QueryCreditTypesRequest): _131.QueryCreditTypesRequestProtoMsg;
            };
            QueryCreditTypesResponse: {
                encode(message: _131.QueryCreditTypesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryCreditTypesResponse;
                fromJSON(object: any): _131.QueryCreditTypesResponse;
                toJSON(message: _131.QueryCreditTypesResponse): unknown;
                fromPartial(object: Partial<_131.QueryCreditTypesResponse>): _131.QueryCreditTypesResponse;
                fromAmino(object: _131.QueryCreditTypesResponseAmino): _131.QueryCreditTypesResponse;
                toAmino(message: _131.QueryCreditTypesResponse): _131.QueryCreditTypesResponseAmino;
                fromAminoMsg(object: _131.QueryCreditTypesResponseAminoMsg): _131.QueryCreditTypesResponse;
                fromProtoMsg(message: _131.QueryCreditTypesResponseProtoMsg): _131.QueryCreditTypesResponse;
                toProto(message: _131.QueryCreditTypesResponse): Uint8Array;
                toProtoMsg(message: _131.QueryCreditTypesResponse): _131.QueryCreditTypesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _131.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryParamsRequest;
                fromJSON(_: any): _131.QueryParamsRequest;
                toJSON(_: _131.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_131.QueryParamsRequest>): _131.QueryParamsRequest;
                fromAmino(_: _131.QueryParamsRequestAmino): _131.QueryParamsRequest;
                toAmino(_: _131.QueryParamsRequest): _131.QueryParamsRequestAmino;
                fromAminoMsg(object: _131.QueryParamsRequestAminoMsg): _131.QueryParamsRequest;
                fromProtoMsg(message: _131.QueryParamsRequestProtoMsg): _131.QueryParamsRequest;
                toProto(message: _131.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _131.QueryParamsRequest): _131.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _131.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryParamsResponse;
                fromJSON(object: any): _131.QueryParamsResponse;
                toJSON(message: _131.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_131.QueryParamsResponse>): _131.QueryParamsResponse;
                fromAmino(object: _131.QueryParamsResponseAmino): _131.QueryParamsResponse;
                toAmino(message: _131.QueryParamsResponse): _131.QueryParamsResponseAmino;
                fromAminoMsg(object: _131.QueryParamsResponseAminoMsg): _131.QueryParamsResponse;
                fromProtoMsg(message: _131.QueryParamsResponseProtoMsg): _131.QueryParamsResponse;
                toProto(message: _131.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _131.QueryParamsResponse): _131.QueryParamsResponseProtoMsg;
            };
            QueryCreditTypeRequest: {
                encode(message: _131.QueryCreditTypeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryCreditTypeRequest;
                fromJSON(object: any): _131.QueryCreditTypeRequest;
                toJSON(message: _131.QueryCreditTypeRequest): unknown;
                fromPartial(object: Partial<_131.QueryCreditTypeRequest>): _131.QueryCreditTypeRequest;
                fromAmino(object: _131.QueryCreditTypeRequestAmino): _131.QueryCreditTypeRequest;
                toAmino(message: _131.QueryCreditTypeRequest): _131.QueryCreditTypeRequestAmino;
                fromAminoMsg(object: _131.QueryCreditTypeRequestAminoMsg): _131.QueryCreditTypeRequest;
                fromProtoMsg(message: _131.QueryCreditTypeRequestProtoMsg): _131.QueryCreditTypeRequest;
                toProto(message: _131.QueryCreditTypeRequest): Uint8Array;
                toProtoMsg(message: _131.QueryCreditTypeRequest): _131.QueryCreditTypeRequestProtoMsg;
            };
            QueryCreditTypeResponse: {
                encode(message: _131.QueryCreditTypeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryCreditTypeResponse;
                fromJSON(object: any): _131.QueryCreditTypeResponse;
                toJSON(message: _131.QueryCreditTypeResponse): unknown;
                fromPartial(object: Partial<_131.QueryCreditTypeResponse>): _131.QueryCreditTypeResponse;
                fromAmino(object: _131.QueryCreditTypeResponseAmino): _131.QueryCreditTypeResponse;
                toAmino(message: _131.QueryCreditTypeResponse): _131.QueryCreditTypeResponseAmino;
                fromAminoMsg(object: _131.QueryCreditTypeResponseAminoMsg): _131.QueryCreditTypeResponse;
                fromProtoMsg(message: _131.QueryCreditTypeResponseProtoMsg): _131.QueryCreditTypeResponse;
                toProto(message: _131.QueryCreditTypeResponse): Uint8Array;
                toProtoMsg(message: _131.QueryCreditTypeResponse): _131.QueryCreditTypeResponseProtoMsg;
            };
            ClassInfo: {
                encode(message: _131.ClassInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.ClassInfo;
                fromJSON(object: any): _131.ClassInfo;
                toJSON(message: _131.ClassInfo): unknown;
                fromPartial(object: Partial<_131.ClassInfo>): _131.ClassInfo;
                fromAmino(object: _131.ClassInfoAmino): _131.ClassInfo;
                toAmino(message: _131.ClassInfo): _131.ClassInfoAmino;
                fromAminoMsg(object: _131.ClassInfoAminoMsg): _131.ClassInfo;
                fromProtoMsg(message: _131.ClassInfoProtoMsg): _131.ClassInfo;
                toProto(message: _131.ClassInfo): Uint8Array;
                toProtoMsg(message: _131.ClassInfo): _131.ClassInfoProtoMsg;
            };
            ProjectInfo: {
                encode(message: _131.ProjectInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.ProjectInfo;
                fromJSON(object: any): _131.ProjectInfo;
                toJSON(message: _131.ProjectInfo): unknown;
                fromPartial(object: Partial<_131.ProjectInfo>): _131.ProjectInfo;
                fromAmino(object: _131.ProjectInfoAmino): _131.ProjectInfo;
                toAmino(message: _131.ProjectInfo): _131.ProjectInfoAmino;
                fromAminoMsg(object: _131.ProjectInfoAminoMsg): _131.ProjectInfo;
                fromProtoMsg(message: _131.ProjectInfoProtoMsg): _131.ProjectInfo;
                toProto(message: _131.ProjectInfo): Uint8Array;
                toProtoMsg(message: _131.ProjectInfo): _131.ProjectInfoProtoMsg;
            };
            BatchInfo: {
                encode(message: _131.BatchInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.BatchInfo;
                fromJSON(object: any): _131.BatchInfo;
                toJSON(message: _131.BatchInfo): unknown;
                fromPartial(object: Partial<_131.BatchInfo>): _131.BatchInfo;
                fromAmino(object: _131.BatchInfoAmino): _131.BatchInfo;
                toAmino(message: _131.BatchInfo): _131.BatchInfoAmino;
                fromAminoMsg(object: _131.BatchInfoAminoMsg): _131.BatchInfo;
                fromProtoMsg(message: _131.BatchInfoProtoMsg): _131.BatchInfo;
                toProto(message: _131.BatchInfo): Uint8Array;
                toProtoMsg(message: _131.BatchInfo): _131.BatchInfoProtoMsg;
            };
            BatchBalanceInfo: {
                encode(message: _131.BatchBalanceInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.BatchBalanceInfo;
                fromJSON(object: any): _131.BatchBalanceInfo;
                toJSON(message: _131.BatchBalanceInfo): unknown;
                fromPartial(object: Partial<_131.BatchBalanceInfo>): _131.BatchBalanceInfo;
                fromAmino(object: _131.BatchBalanceInfoAmino): _131.BatchBalanceInfo;
                toAmino(message: _131.BatchBalanceInfo): _131.BatchBalanceInfoAmino;
                fromAminoMsg(object: _131.BatchBalanceInfoAminoMsg): _131.BatchBalanceInfo;
                fromProtoMsg(message: _131.BatchBalanceInfoProtoMsg): _131.BatchBalanceInfo;
                toProto(message: _131.BatchBalanceInfo): Uint8Array;
                toProtoMsg(message: _131.BatchBalanceInfo): _131.BatchBalanceInfoProtoMsg;
            };
            QueryClassCreatorAllowlistRequest: {
                encode(_: _131.QueryClassCreatorAllowlistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryClassCreatorAllowlistRequest;
                fromJSON(_: any): _131.QueryClassCreatorAllowlistRequest;
                toJSON(_: _131.QueryClassCreatorAllowlistRequest): unknown;
                fromPartial(_: Partial<_131.QueryClassCreatorAllowlistRequest>): _131.QueryClassCreatorAllowlistRequest;
                fromAmino(_: _131.QueryClassCreatorAllowlistRequestAmino): _131.QueryClassCreatorAllowlistRequest;
                toAmino(_: _131.QueryClassCreatorAllowlistRequest): _131.QueryClassCreatorAllowlistRequestAmino;
                fromAminoMsg(object: _131.QueryClassCreatorAllowlistRequestAminoMsg): _131.QueryClassCreatorAllowlistRequest;
                fromProtoMsg(message: _131.QueryClassCreatorAllowlistRequestProtoMsg): _131.QueryClassCreatorAllowlistRequest;
                toProto(message: _131.QueryClassCreatorAllowlistRequest): Uint8Array;
                toProtoMsg(message: _131.QueryClassCreatorAllowlistRequest): _131.QueryClassCreatorAllowlistRequestProtoMsg;
            };
            QueryClassCreatorAllowlistResponse: {
                encode(message: _131.QueryClassCreatorAllowlistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryClassCreatorAllowlistResponse;
                fromJSON(object: any): _131.QueryClassCreatorAllowlistResponse;
                toJSON(message: _131.QueryClassCreatorAllowlistResponse): unknown;
                fromPartial(object: Partial<_131.QueryClassCreatorAllowlistResponse>): _131.QueryClassCreatorAllowlistResponse;
                fromAmino(object: _131.QueryClassCreatorAllowlistResponseAmino): _131.QueryClassCreatorAllowlistResponse;
                toAmino(message: _131.QueryClassCreatorAllowlistResponse): _131.QueryClassCreatorAllowlistResponseAmino;
                fromAminoMsg(object: _131.QueryClassCreatorAllowlistResponseAminoMsg): _131.QueryClassCreatorAllowlistResponse;
                fromProtoMsg(message: _131.QueryClassCreatorAllowlistResponseProtoMsg): _131.QueryClassCreatorAllowlistResponse;
                toProto(message: _131.QueryClassCreatorAllowlistResponse): Uint8Array;
                toProtoMsg(message: _131.QueryClassCreatorAllowlistResponse): _131.QueryClassCreatorAllowlistResponseProtoMsg;
            };
            QueryAllowedClassCreatorsRequest: {
                encode(message: _131.QueryAllowedClassCreatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryAllowedClassCreatorsRequest;
                fromJSON(object: any): _131.QueryAllowedClassCreatorsRequest;
                toJSON(message: _131.QueryAllowedClassCreatorsRequest): unknown;
                fromPartial(object: Partial<_131.QueryAllowedClassCreatorsRequest>): _131.QueryAllowedClassCreatorsRequest;
                fromAmino(object: _131.QueryAllowedClassCreatorsRequestAmino): _131.QueryAllowedClassCreatorsRequest;
                toAmino(message: _131.QueryAllowedClassCreatorsRequest): _131.QueryAllowedClassCreatorsRequestAmino;
                fromAminoMsg(object: _131.QueryAllowedClassCreatorsRequestAminoMsg): _131.QueryAllowedClassCreatorsRequest;
                fromProtoMsg(message: _131.QueryAllowedClassCreatorsRequestProtoMsg): _131.QueryAllowedClassCreatorsRequest;
                toProto(message: _131.QueryAllowedClassCreatorsRequest): Uint8Array;
                toProtoMsg(message: _131.QueryAllowedClassCreatorsRequest): _131.QueryAllowedClassCreatorsRequestProtoMsg;
            };
            QueryAllowedClassCreatorsResponse: {
                encode(message: _131.QueryAllowedClassCreatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryAllowedClassCreatorsResponse;
                fromJSON(object: any): _131.QueryAllowedClassCreatorsResponse;
                toJSON(message: _131.QueryAllowedClassCreatorsResponse): unknown;
                fromPartial(object: Partial<_131.QueryAllowedClassCreatorsResponse>): _131.QueryAllowedClassCreatorsResponse;
                fromAmino(object: _131.QueryAllowedClassCreatorsResponseAmino): _131.QueryAllowedClassCreatorsResponse;
                toAmino(message: _131.QueryAllowedClassCreatorsResponse): _131.QueryAllowedClassCreatorsResponseAmino;
                fromAminoMsg(object: _131.QueryAllowedClassCreatorsResponseAminoMsg): _131.QueryAllowedClassCreatorsResponse;
                fromProtoMsg(message: _131.QueryAllowedClassCreatorsResponseProtoMsg): _131.QueryAllowedClassCreatorsResponse;
                toProto(message: _131.QueryAllowedClassCreatorsResponse): Uint8Array;
                toProtoMsg(message: _131.QueryAllowedClassCreatorsResponse): _131.QueryAllowedClassCreatorsResponseProtoMsg;
            };
            QueryClassFeeRequest: {
                encode(_: _131.QueryClassFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryClassFeeRequest;
                fromJSON(_: any): _131.QueryClassFeeRequest;
                toJSON(_: _131.QueryClassFeeRequest): unknown;
                fromPartial(_: Partial<_131.QueryClassFeeRequest>): _131.QueryClassFeeRequest;
                fromAmino(_: _131.QueryClassFeeRequestAmino): _131.QueryClassFeeRequest;
                toAmino(_: _131.QueryClassFeeRequest): _131.QueryClassFeeRequestAmino;
                fromAminoMsg(object: _131.QueryClassFeeRequestAminoMsg): _131.QueryClassFeeRequest;
                fromProtoMsg(message: _131.QueryClassFeeRequestProtoMsg): _131.QueryClassFeeRequest;
                toProto(message: _131.QueryClassFeeRequest): Uint8Array;
                toProtoMsg(message: _131.QueryClassFeeRequest): _131.QueryClassFeeRequestProtoMsg;
            };
            QueryClassFeeResponse: {
                encode(message: _131.QueryClassFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryClassFeeResponse;
                fromJSON(object: any): _131.QueryClassFeeResponse;
                toJSON(message: _131.QueryClassFeeResponse): unknown;
                fromPartial(object: Partial<_131.QueryClassFeeResponse>): _131.QueryClassFeeResponse;
                fromAmino(object: _131.QueryClassFeeResponseAmino): _131.QueryClassFeeResponse;
                toAmino(message: _131.QueryClassFeeResponse): _131.QueryClassFeeResponseAmino;
                fromAminoMsg(object: _131.QueryClassFeeResponseAminoMsg): _131.QueryClassFeeResponse;
                fromProtoMsg(message: _131.QueryClassFeeResponseProtoMsg): _131.QueryClassFeeResponse;
                toProto(message: _131.QueryClassFeeResponse): Uint8Array;
                toProtoMsg(message: _131.QueryClassFeeResponse): _131.QueryClassFeeResponseProtoMsg;
            };
            QueryAllowedBridgeChainsRequest: {
                encode(_: _131.QueryAllowedBridgeChainsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryAllowedBridgeChainsRequest;
                fromJSON(_: any): _131.QueryAllowedBridgeChainsRequest;
                toJSON(_: _131.QueryAllowedBridgeChainsRequest): unknown;
                fromPartial(_: Partial<_131.QueryAllowedBridgeChainsRequest>): _131.QueryAllowedBridgeChainsRequest;
                fromAmino(_: _131.QueryAllowedBridgeChainsRequestAmino): _131.QueryAllowedBridgeChainsRequest;
                toAmino(_: _131.QueryAllowedBridgeChainsRequest): _131.QueryAllowedBridgeChainsRequestAmino;
                fromAminoMsg(object: _131.QueryAllowedBridgeChainsRequestAminoMsg): _131.QueryAllowedBridgeChainsRequest;
                fromProtoMsg(message: _131.QueryAllowedBridgeChainsRequestProtoMsg): _131.QueryAllowedBridgeChainsRequest;
                toProto(message: _131.QueryAllowedBridgeChainsRequest): Uint8Array;
                toProtoMsg(message: _131.QueryAllowedBridgeChainsRequest): _131.QueryAllowedBridgeChainsRequestProtoMsg;
            };
            QueryAllowedBridgeChainsResponse: {
                encode(message: _131.QueryAllowedBridgeChainsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _131.QueryAllowedBridgeChainsResponse;
                fromJSON(object: any): _131.QueryAllowedBridgeChainsResponse;
                toJSON(message: _131.QueryAllowedBridgeChainsResponse): unknown;
                fromPartial(object: Partial<_131.QueryAllowedBridgeChainsResponse>): _131.QueryAllowedBridgeChainsResponse;
                fromAmino(object: _131.QueryAllowedBridgeChainsResponseAmino): _131.QueryAllowedBridgeChainsResponse;
                toAmino(message: _131.QueryAllowedBridgeChainsResponse): _131.QueryAllowedBridgeChainsResponseAmino;
                fromAminoMsg(object: _131.QueryAllowedBridgeChainsResponseAminoMsg): _131.QueryAllowedBridgeChainsResponse;
                fromProtoMsg(message: _131.QueryAllowedBridgeChainsResponseProtoMsg): _131.QueryAllowedBridgeChainsResponse;
                toProto(message: _131.QueryAllowedBridgeChainsResponse): Uint8Array;
                toProtoMsg(message: _131.QueryAllowedBridgeChainsResponse): _131.QueryAllowedBridgeChainsResponseProtoMsg;
            };
            EventCreateClass: {
                encode(message: _130.EventCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.EventCreateClass;
                fromJSON(object: any): _130.EventCreateClass;
                toJSON(message: _130.EventCreateClass): unknown;
                fromPartial(object: Partial<_130.EventCreateClass>): _130.EventCreateClass;
                fromAmino(object: _130.EventCreateClassAmino): _130.EventCreateClass;
                toAmino(message: _130.EventCreateClass): _130.EventCreateClassAmino;
                fromAminoMsg(object: _130.EventCreateClassAminoMsg): _130.EventCreateClass;
                fromProtoMsg(message: _130.EventCreateClassProtoMsg): _130.EventCreateClass;
                toProto(message: _130.EventCreateClass): Uint8Array;
                toProtoMsg(message: _130.EventCreateClass): _130.EventCreateClassProtoMsg;
            };
            EventCreateProject: {
                encode(message: _130.EventCreateProject, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.EventCreateProject;
                fromJSON(object: any): _130.EventCreateProject;
                toJSON(message: _130.EventCreateProject): unknown;
                fromPartial(object: Partial<_130.EventCreateProject>): _130.EventCreateProject;
                fromAmino(object: _130.EventCreateProjectAmino): _130.EventCreateProject;
                toAmino(message: _130.EventCreateProject): _130.EventCreateProjectAmino;
                fromAminoMsg(object: _130.EventCreateProjectAminoMsg): _130.EventCreateProject;
                fromProtoMsg(message: _130.EventCreateProjectProtoMsg): _130.EventCreateProject;
                toProto(message: _130.EventCreateProject): Uint8Array;
                toProtoMsg(message: _130.EventCreateProject): _130.EventCreateProjectProtoMsg;
            };
            EventCreateBatch: {
                encode(message: _130.EventCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.EventCreateBatch;
                fromJSON(object: any): _130.EventCreateBatch;
                toJSON(message: _130.EventCreateBatch): unknown;
                fromPartial(object: Partial<_130.EventCreateBatch>): _130.EventCreateBatch;
                fromAmino(object: _130.EventCreateBatchAmino): _130.EventCreateBatch;
                toAmino(message: _130.EventCreateBatch): _130.EventCreateBatchAmino;
                fromAminoMsg(object: _130.EventCreateBatchAminoMsg): _130.EventCreateBatch;
                fromProtoMsg(message: _130.EventCreateBatchProtoMsg): _130.EventCreateBatch;
                toProto(message: _130.EventCreateBatch): Uint8Array;
                toProtoMsg(message: _130.EventCreateBatch): _130.EventCreateBatchProtoMsg;
            };
            EventMint: {
                encode(message: _130.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.EventMint;
                fromJSON(object: any): _130.EventMint;
                toJSON(message: _130.EventMint): unknown;
                fromPartial(object: Partial<_130.EventMint>): _130.EventMint;
                fromAmino(object: _130.EventMintAmino): _130.EventMint;
                toAmino(message: _130.EventMint): _130.EventMintAmino;
                fromAminoMsg(object: _130.EventMintAminoMsg): _130.EventMint;
                fromProtoMsg(message: _130.EventMintProtoMsg): _130.EventMint;
                toProto(message: _130.EventMint): Uint8Array;
                toProtoMsg(message: _130.EventMint): _130.EventMintProtoMsg;
            };
            EventMintBatchCredits: {
                encode(message: _130.EventMintBatchCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.EventMintBatchCredits;
                fromJSON(object: any): _130.EventMintBatchCredits;
                toJSON(message: _130.EventMintBatchCredits): unknown;
                fromPartial(object: Partial<_130.EventMintBatchCredits>): _130.EventMintBatchCredits;
                fromAmino(object: _130.EventMintBatchCreditsAmino): _130.EventMintBatchCredits;
                toAmino(message: _130.EventMintBatchCredits): _130.EventMintBatchCreditsAmino;
                fromAminoMsg(object: _130.EventMintBatchCreditsAminoMsg): _130.EventMintBatchCredits;
                fromProtoMsg(message: _130.EventMintBatchCreditsProtoMsg): _130.EventMintBatchCredits;
                toProto(message: _130.EventMintBatchCredits): Uint8Array;
                toProtoMsg(message: _130.EventMintBatchCredits): _130.EventMintBatchCreditsProtoMsg;
            };
            EventTransfer: {
                encode(message: _130.EventTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.EventTransfer;
                fromJSON(object: any): _130.EventTransfer;
                toJSON(message: _130.EventTransfer): unknown;
                fromPartial(object: Partial<_130.EventTransfer>): _130.EventTransfer;
                fromAmino(object: _130.EventTransferAmino): _130.EventTransfer;
                toAmino(message: _130.EventTransfer): _130.EventTransferAmino;
                fromAminoMsg(object: _130.EventTransferAminoMsg): _130.EventTransfer;
                fromProtoMsg(message: _130.EventTransferProtoMsg): _130.EventTransfer;
                toProto(message: _130.EventTransfer): Uint8Array;
                toProtoMsg(message: _130.EventTransfer): _130.EventTransferProtoMsg;
            };
            EventRetire: {
                encode(message: _130.EventRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.EventRetire;
                fromJSON(object: any): _130.EventRetire;
                toJSON(message: _130.EventRetire): unknown;
                fromPartial(object: Partial<_130.EventRetire>): _130.EventRetire;
                fromAmino(object: _130.EventRetireAmino): _130.EventRetire;
                toAmino(message: _130.EventRetire): _130.EventRetireAmino;
                fromAminoMsg(object: _130.EventRetireAminoMsg): _130.EventRetire;
                fromProtoMsg(message: _130.EventRetireProtoMsg): _130.EventRetire;
                toProto(message: _130.EventRetire): Uint8Array;
                toProtoMsg(message: _130.EventRetire): _130.EventRetireProtoMsg;
            };
            EventCancel: {
                encode(message: _130.EventCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.EventCancel;
                fromJSON(object: any): _130.EventCancel;
                toJSON(message: _130.EventCancel): unknown;
                fromPartial(object: Partial<_130.EventCancel>): _130.EventCancel;
                fromAmino(object: _130.EventCancelAmino): _130.EventCancel;
                toAmino(message: _130.EventCancel): _130.EventCancelAmino;
                fromAminoMsg(object: _130.EventCancelAminoMsg): _130.EventCancel;
                fromProtoMsg(message: _130.EventCancelProtoMsg): _130.EventCancel;
                toProto(message: _130.EventCancel): Uint8Array;
                toProtoMsg(message: _130.EventCancel): _130.EventCancelProtoMsg;
            };
            EventUpdateClassAdmin: {
                encode(message: _130.EventUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.EventUpdateClassAdmin;
                fromJSON(object: any): _130.EventUpdateClassAdmin;
                toJSON(message: _130.EventUpdateClassAdmin): unknown;
                fromPartial(object: Partial<_130.EventUpdateClassAdmin>): _130.EventUpdateClassAdmin;
                fromAmino(object: _130.EventUpdateClassAdminAmino): _130.EventUpdateClassAdmin;
                toAmino(message: _130.EventUpdateClassAdmin): _130.EventUpdateClassAdminAmino;
                fromAminoMsg(object: _130.EventUpdateClassAdminAminoMsg): _130.EventUpdateClassAdmin;
                fromProtoMsg(message: _130.EventUpdateClassAdminProtoMsg): _130.EventUpdateClassAdmin;
                toProto(message: _130.EventUpdateClassAdmin): Uint8Array;
                toProtoMsg(message: _130.EventUpdateClassAdmin): _130.EventUpdateClassAdminProtoMsg;
            };
            EventUpdateClassIssuers: {
                encode(message: _130.EventUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.EventUpdateClassIssuers;
                fromJSON(object: any): _130.EventUpdateClassIssuers;
                toJSON(message: _130.EventUpdateClassIssuers): unknown;
                fromPartial(object: Partial<_130.EventUpdateClassIssuers>): _130.EventUpdateClassIssuers;
                fromAmino(object: _130.EventUpdateClassIssuersAmino): _130.EventUpdateClassIssuers;
                toAmino(message: _130.EventUpdateClassIssuers): _130.EventUpdateClassIssuersAmino;
                fromAminoMsg(object: _130.EventUpdateClassIssuersAminoMsg): _130.EventUpdateClassIssuers;
                fromProtoMsg(message: _130.EventUpdateClassIssuersProtoMsg): _130.EventUpdateClassIssuers;
                toProto(message: _130.EventUpdateClassIssuers): Uint8Array;
                toProtoMsg(message: _130.EventUpdateClassIssuers): _130.EventUpdateClassIssuersProtoMsg;
            };
            EventUpdateClassMetadata: {
                encode(message: _130.EventUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.EventUpdateClassMetadata;
                fromJSON(object: any): _130.EventUpdateClassMetadata;
                toJSON(message: _130.EventUpdateClassMetadata): unknown;
                fromPartial(object: Partial<_130.EventUpdateClassMetadata>): _130.EventUpdateClassMetadata;
                fromAmino(object: _130.EventUpdateClassMetadataAmino): _130.EventUpdateClassMetadata;
                toAmino(message: _130.EventUpdateClassMetadata): _130.EventUpdateClassMetadataAmino;
                fromAminoMsg(object: _130.EventUpdateClassMetadataAminoMsg): _130.EventUpdateClassMetadata;
                fromProtoMsg(message: _130.EventUpdateClassMetadataProtoMsg): _130.EventUpdateClassMetadata;
                toProto(message: _130.EventUpdateClassMetadata): Uint8Array;
                toProtoMsg(message: _130.EventUpdateClassMetadata): _130.EventUpdateClassMetadataProtoMsg;
            };
            EventUpdateProjectAdmin: {
                encode(message: _130.EventUpdateProjectAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.EventUpdateProjectAdmin;
                fromJSON(object: any): _130.EventUpdateProjectAdmin;
                toJSON(message: _130.EventUpdateProjectAdmin): unknown;
                fromPartial(object: Partial<_130.EventUpdateProjectAdmin>): _130.EventUpdateProjectAdmin;
                fromAmino(object: _130.EventUpdateProjectAdminAmino): _130.EventUpdateProjectAdmin;
                toAmino(message: _130.EventUpdateProjectAdmin): _130.EventUpdateProjectAdminAmino;
                fromAminoMsg(object: _130.EventUpdateProjectAdminAminoMsg): _130.EventUpdateProjectAdmin;
                fromProtoMsg(message: _130.EventUpdateProjectAdminProtoMsg): _130.EventUpdateProjectAdmin;
                toProto(message: _130.EventUpdateProjectAdmin): Uint8Array;
                toProtoMsg(message: _130.EventUpdateProjectAdmin): _130.EventUpdateProjectAdminProtoMsg;
            };
            EventUpdateProjectMetadata: {
                encode(message: _130.EventUpdateProjectMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.EventUpdateProjectMetadata;
                fromJSON(object: any): _130.EventUpdateProjectMetadata;
                toJSON(message: _130.EventUpdateProjectMetadata): unknown;
                fromPartial(object: Partial<_130.EventUpdateProjectMetadata>): _130.EventUpdateProjectMetadata;
                fromAmino(object: _130.EventUpdateProjectMetadataAmino): _130.EventUpdateProjectMetadata;
                toAmino(message: _130.EventUpdateProjectMetadata): _130.EventUpdateProjectMetadataAmino;
                fromAminoMsg(object: _130.EventUpdateProjectMetadataAminoMsg): _130.EventUpdateProjectMetadata;
                fromProtoMsg(message: _130.EventUpdateProjectMetadataProtoMsg): _130.EventUpdateProjectMetadata;
                toProto(message: _130.EventUpdateProjectMetadata): Uint8Array;
                toProtoMsg(message: _130.EventUpdateProjectMetadata): _130.EventUpdateProjectMetadataProtoMsg;
            };
            EventUpdateBatchMetadata: {
                encode(message: _130.EventUpdateBatchMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.EventUpdateBatchMetadata;
                fromJSON(object: any): _130.EventUpdateBatchMetadata;
                toJSON(message: _130.EventUpdateBatchMetadata): unknown;
                fromPartial(object: Partial<_130.EventUpdateBatchMetadata>): _130.EventUpdateBatchMetadata;
                fromAmino(object: _130.EventUpdateBatchMetadataAmino): _130.EventUpdateBatchMetadata;
                toAmino(message: _130.EventUpdateBatchMetadata): _130.EventUpdateBatchMetadataAmino;
                fromAminoMsg(object: _130.EventUpdateBatchMetadataAminoMsg): _130.EventUpdateBatchMetadata;
                fromProtoMsg(message: _130.EventUpdateBatchMetadataProtoMsg): _130.EventUpdateBatchMetadata;
                toProto(message: _130.EventUpdateBatchMetadata): Uint8Array;
                toProtoMsg(message: _130.EventUpdateBatchMetadata): _130.EventUpdateBatchMetadataProtoMsg;
            };
            EventSealBatch: {
                encode(message: _130.EventSealBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.EventSealBatch;
                fromJSON(object: any): _130.EventSealBatch;
                toJSON(message: _130.EventSealBatch): unknown;
                fromPartial(object: Partial<_130.EventSealBatch>): _130.EventSealBatch;
                fromAmino(object: _130.EventSealBatchAmino): _130.EventSealBatch;
                toAmino(message: _130.EventSealBatch): _130.EventSealBatchAmino;
                fromAminoMsg(object: _130.EventSealBatchAminoMsg): _130.EventSealBatch;
                fromProtoMsg(message: _130.EventSealBatchProtoMsg): _130.EventSealBatch;
                toProto(message: _130.EventSealBatch): Uint8Array;
                toProtoMsg(message: _130.EventSealBatch): _130.EventSealBatchProtoMsg;
            };
            EventAddCreditType: {
                encode(message: _130.EventAddCreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.EventAddCreditType;
                fromJSON(object: any): _130.EventAddCreditType;
                toJSON(message: _130.EventAddCreditType): unknown;
                fromPartial(object: Partial<_130.EventAddCreditType>): _130.EventAddCreditType;
                fromAmino(object: _130.EventAddCreditTypeAmino): _130.EventAddCreditType;
                toAmino(message: _130.EventAddCreditType): _130.EventAddCreditTypeAmino;
                fromAminoMsg(object: _130.EventAddCreditTypeAminoMsg): _130.EventAddCreditType;
                fromProtoMsg(message: _130.EventAddCreditTypeProtoMsg): _130.EventAddCreditType;
                toProto(message: _130.EventAddCreditType): Uint8Array;
                toProtoMsg(message: _130.EventAddCreditType): _130.EventAddCreditTypeProtoMsg;
            };
            EventBridge: {
                encode(message: _130.EventBridge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.EventBridge;
                fromJSON(object: any): _130.EventBridge;
                toJSON(message: _130.EventBridge): unknown;
                fromPartial(object: Partial<_130.EventBridge>): _130.EventBridge;
                fromAmino(object: _130.EventBridgeAmino): _130.EventBridge;
                toAmino(message: _130.EventBridge): _130.EventBridgeAmino;
                fromAminoMsg(object: _130.EventBridgeAminoMsg): _130.EventBridge;
                fromProtoMsg(message: _130.EventBridgeProtoMsg): _130.EventBridge;
                toProto(message: _130.EventBridge): Uint8Array;
                toProtoMsg(message: _130.EventBridge): _130.EventBridgeProtoMsg;
            };
            EventBridgeReceive: {
                encode(message: _130.EventBridgeReceive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _130.EventBridgeReceive;
                fromJSON(object: any): _130.EventBridgeReceive;
                toJSON(message: _130.EventBridgeReceive): unknown;
                fromPartial(object: Partial<_130.EventBridgeReceive>): _130.EventBridgeReceive;
                fromAmino(object: _130.EventBridgeReceiveAmino): _130.EventBridgeReceive;
                toAmino(message: _130.EventBridgeReceive): _130.EventBridgeReceiveAmino;
                fromAminoMsg(object: _130.EventBridgeReceiveAminoMsg): _130.EventBridgeReceive;
                fromProtoMsg(message: _130.EventBridgeReceiveProtoMsg): _130.EventBridgeReceive;
                toProto(message: _130.EventBridgeReceive): Uint8Array;
                toProtoMsg(message: _130.EventBridgeReceive): _130.EventBridgeReceiveProtoMsg;
            };
        };
        const v1alpha1: {
            LCDQueryClient: typeof _221.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _138.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _138.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _138.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _138.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _138.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _138.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _138.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _138.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _138.MsgCreateClass): {
                        typeUrl: string;
                        value: _138.MsgCreateClass;
                    };
                    createBatch(value: _138.MsgCreateBatch): {
                        typeUrl: string;
                        value: _138.MsgCreateBatch;
                    };
                    send(value: _138.MsgSend): {
                        typeUrl: string;
                        value: _138.MsgSend;
                    };
                    retire(value: _138.MsgRetire): {
                        typeUrl: string;
                        value: _138.MsgRetire;
                    };
                    cancel(value: _138.MsgCancel): {
                        typeUrl: string;
                        value: _138.MsgCancel;
                    };
                    updateClassAdmin(value: _138.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _138.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _138.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _138.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _138.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _138.MsgUpdateClassMetadata;
                    };
                };
                toJSON: {
                    createClass(value: _138.MsgCreateClass): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createBatch(value: _138.MsgCreateBatch): {
                        typeUrl: string;
                        value: unknown;
                    };
                    send(value: _138.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    retire(value: _138.MsgRetire): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancel(value: _138.MsgCancel): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassAdmin(value: _138.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassIssuers(value: _138.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateClassMetadata(value: _138.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClass(value: any): {
                        typeUrl: string;
                        value: _138.MsgCreateClass;
                    };
                    createBatch(value: any): {
                        typeUrl: string;
                        value: _138.MsgCreateBatch;
                    };
                    send(value: any): {
                        typeUrl: string;
                        value: _138.MsgSend;
                    };
                    retire(value: any): {
                        typeUrl: string;
                        value: _138.MsgRetire;
                    };
                    cancel(value: any): {
                        typeUrl: string;
                        value: _138.MsgCancel;
                    };
                    updateClassAdmin(value: any): {
                        typeUrl: string;
                        value: _138.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: any): {
                        typeUrl: string;
                        value: _138.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: any): {
                        typeUrl: string;
                        value: _138.MsgUpdateClassMetadata;
                    };
                };
                fromPartial: {
                    createClass(value: _138.MsgCreateClass): {
                        typeUrl: string;
                        value: _138.MsgCreateClass;
                    };
                    createBatch(value: _138.MsgCreateBatch): {
                        typeUrl: string;
                        value: _138.MsgCreateBatch;
                    };
                    send(value: _138.MsgSend): {
                        typeUrl: string;
                        value: _138.MsgSend;
                    };
                    retire(value: _138.MsgRetire): {
                        typeUrl: string;
                        value: _138.MsgRetire;
                    };
                    cancel(value: _138.MsgCancel): {
                        typeUrl: string;
                        value: _138.MsgCancel;
                    };
                    updateClassAdmin(value: _138.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _138.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _138.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _138.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _138.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _138.MsgUpdateClassMetadata;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1alpha1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: (message: _138.MsgCreateClass) => _138.MsgCreateClassAmino;
                    fromAmino: (object: _138.MsgCreateClassAmino) => _138.MsgCreateClass;
                };
                "/regen.ecocredit.v1alpha1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: (message: _138.MsgCreateBatch) => _138.MsgCreateBatchAmino;
                    fromAmino: (object: _138.MsgCreateBatchAmino) => _138.MsgCreateBatch;
                };
                "/regen.ecocredit.v1alpha1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _138.MsgSend) => _138.MsgSendAmino;
                    fromAmino: (object: _138.MsgSendAmino) => _138.MsgSend;
                };
                "/regen.ecocredit.v1alpha1.MsgRetire": {
                    aminoType: string;
                    toAmino: (message: _138.MsgRetire) => _138.MsgRetireAmino;
                    fromAmino: (object: _138.MsgRetireAmino) => _138.MsgRetire;
                };
                "/regen.ecocredit.v1alpha1.MsgCancel": {
                    aminoType: string;
                    toAmino: (message: _138.MsgCancel) => _138.MsgCancelAmino;
                    fromAmino: (object: _138.MsgCancelAmino) => _138.MsgCancel;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: (message: _138.MsgUpdateClassAdmin) => _138.MsgUpdateClassAdminAmino;
                    fromAmino: (object: _138.MsgUpdateClassAdminAmino) => _138.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: (message: _138.MsgUpdateClassIssuers) => _138.MsgUpdateClassIssuersAmino;
                    fromAmino: (object: _138.MsgUpdateClassIssuersAmino) => _138.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: (message: _138.MsgUpdateClassMetadata) => _138.MsgUpdateClassMetadataAmino;
                    fromAmino: (object: _138.MsgUpdateClassMetadataAmino) => _138.MsgUpdateClassMetadata;
                };
            };
            ClassInfo: {
                encode(message: _139.ClassInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.ClassInfo;
                fromJSON(object: any): _139.ClassInfo;
                toJSON(message: _139.ClassInfo): unknown;
                fromPartial(object: Partial<_139.ClassInfo>): _139.ClassInfo;
                fromAmino(object: _139.ClassInfoAmino): _139.ClassInfo;
                toAmino(message: _139.ClassInfo): _139.ClassInfoAmino;
                fromAminoMsg(object: _139.ClassInfoAminoMsg): _139.ClassInfo;
                fromProtoMsg(message: _139.ClassInfoProtoMsg): _139.ClassInfo;
                toProto(message: _139.ClassInfo): Uint8Array;
                toProtoMsg(message: _139.ClassInfo): _139.ClassInfoProtoMsg;
            };
            BatchInfo: {
                encode(message: _139.BatchInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.BatchInfo;
                fromJSON(object: any): _139.BatchInfo;
                toJSON(message: _139.BatchInfo): unknown;
                fromPartial(object: Partial<_139.BatchInfo>): _139.BatchInfo;
                fromAmino(object: _139.BatchInfoAmino): _139.BatchInfo;
                toAmino(message: _139.BatchInfo): _139.BatchInfoAmino;
                fromAminoMsg(object: _139.BatchInfoAminoMsg): _139.BatchInfo;
                fromProtoMsg(message: _139.BatchInfoProtoMsg): _139.BatchInfo;
                toProto(message: _139.BatchInfo): Uint8Array;
                toProtoMsg(message: _139.BatchInfo): _139.BatchInfoProtoMsg;
            };
            Params: {
                encode(message: _139.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.Params;
                fromJSON(object: any): _139.Params;
                toJSON(message: _139.Params): unknown;
                fromPartial(object: Partial<_139.Params>): _139.Params;
                fromAmino(object: _139.ParamsAmino): _139.Params;
                toAmino(message: _139.Params): _139.ParamsAmino;
                fromAminoMsg(object: _139.ParamsAminoMsg): _139.Params;
                fromProtoMsg(message: _139.ParamsProtoMsg): _139.Params;
                toProto(message: _139.Params): Uint8Array;
                toProtoMsg(message: _139.Params): _139.ParamsProtoMsg;
            };
            CreditType: {
                encode(message: _139.CreditType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.CreditType;
                fromJSON(object: any): _139.CreditType;
                toJSON(message: _139.CreditType): unknown;
                fromPartial(object: Partial<_139.CreditType>): _139.CreditType;
                fromAmino(object: _139.CreditTypeAmino): _139.CreditType;
                toAmino(message: _139.CreditType): _139.CreditTypeAmino;
                fromAminoMsg(object: _139.CreditTypeAminoMsg): _139.CreditType;
                fromProtoMsg(message: _139.CreditTypeProtoMsg): _139.CreditType;
                toProto(message: _139.CreditType): Uint8Array;
                toProtoMsg(message: _139.CreditType): _139.CreditTypeProtoMsg;
            };
            CreditTypeSeq: {
                encode(message: _139.CreditTypeSeq, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.CreditTypeSeq;
                fromJSON(object: any): _139.CreditTypeSeq;
                toJSON(message: _139.CreditTypeSeq): unknown;
                fromPartial(object: Partial<_139.CreditTypeSeq>): _139.CreditTypeSeq;
                fromAmino(object: _139.CreditTypeSeqAmino): _139.CreditTypeSeq;
                toAmino(message: _139.CreditTypeSeq): _139.CreditTypeSeqAmino;
                fromAminoMsg(object: _139.CreditTypeSeqAminoMsg): _139.CreditTypeSeq;
                fromProtoMsg(message: _139.CreditTypeSeqProtoMsg): _139.CreditTypeSeq;
                toProto(message: _139.CreditTypeSeq): Uint8Array;
                toProtoMsg(message: _139.CreditTypeSeq): _139.CreditTypeSeqProtoMsg;
            };
            MsgCreateClass: {
                encode(message: _138.MsgCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgCreateClass;
                fromJSON(object: any): _138.MsgCreateClass;
                toJSON(message: _138.MsgCreateClass): unknown;
                fromPartial(object: Partial<_138.MsgCreateClass>): _138.MsgCreateClass;
                fromAmino(object: _138.MsgCreateClassAmino): _138.MsgCreateClass;
                toAmino(message: _138.MsgCreateClass): _138.MsgCreateClassAmino;
                fromAminoMsg(object: _138.MsgCreateClassAminoMsg): _138.MsgCreateClass;
                fromProtoMsg(message: _138.MsgCreateClassProtoMsg): _138.MsgCreateClass;
                toProto(message: _138.MsgCreateClass): Uint8Array;
                toProtoMsg(message: _138.MsgCreateClass): _138.MsgCreateClassProtoMsg;
            };
            MsgCreateClassResponse: {
                encode(message: _138.MsgCreateClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgCreateClassResponse;
                fromJSON(object: any): _138.MsgCreateClassResponse;
                toJSON(message: _138.MsgCreateClassResponse): unknown;
                fromPartial(object: Partial<_138.MsgCreateClassResponse>): _138.MsgCreateClassResponse;
                fromAmino(object: _138.MsgCreateClassResponseAmino): _138.MsgCreateClassResponse;
                toAmino(message: _138.MsgCreateClassResponse): _138.MsgCreateClassResponseAmino;
                fromAminoMsg(object: _138.MsgCreateClassResponseAminoMsg): _138.MsgCreateClassResponse;
                fromProtoMsg(message: _138.MsgCreateClassResponseProtoMsg): _138.MsgCreateClassResponse;
                toProto(message: _138.MsgCreateClassResponse): Uint8Array;
                toProtoMsg(message: _138.MsgCreateClassResponse): _138.MsgCreateClassResponseProtoMsg;
            };
            MsgCreateBatch: {
                encode(message: _138.MsgCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgCreateBatch;
                fromJSON(object: any): _138.MsgCreateBatch;
                toJSON(message: _138.MsgCreateBatch): unknown;
                fromPartial(object: Partial<_138.MsgCreateBatch>): _138.MsgCreateBatch;
                fromAmino(object: _138.MsgCreateBatchAmino): _138.MsgCreateBatch;
                toAmino(message: _138.MsgCreateBatch): _138.MsgCreateBatchAmino;
                fromAminoMsg(object: _138.MsgCreateBatchAminoMsg): _138.MsgCreateBatch;
                fromProtoMsg(message: _138.MsgCreateBatchProtoMsg): _138.MsgCreateBatch;
                toProto(message: _138.MsgCreateBatch): Uint8Array;
                toProtoMsg(message: _138.MsgCreateBatch): _138.MsgCreateBatchProtoMsg;
            };
            MsgCreateBatch_BatchIssuance: {
                encode(message: _138.MsgCreateBatch_BatchIssuance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgCreateBatch_BatchIssuance;
                fromJSON(object: any): _138.MsgCreateBatch_BatchIssuance;
                toJSON(message: _138.MsgCreateBatch_BatchIssuance): unknown;
                fromPartial(object: Partial<_138.MsgCreateBatch_BatchIssuance>): _138.MsgCreateBatch_BatchIssuance;
                fromAmino(object: _138.MsgCreateBatch_BatchIssuanceAmino): _138.MsgCreateBatch_BatchIssuance;
                toAmino(message: _138.MsgCreateBatch_BatchIssuance): _138.MsgCreateBatch_BatchIssuanceAmino;
                fromAminoMsg(object: _138.MsgCreateBatch_BatchIssuanceAminoMsg): _138.MsgCreateBatch_BatchIssuance;
                fromProtoMsg(message: _138.MsgCreateBatch_BatchIssuanceProtoMsg): _138.MsgCreateBatch_BatchIssuance;
                toProto(message: _138.MsgCreateBatch_BatchIssuance): Uint8Array;
                toProtoMsg(message: _138.MsgCreateBatch_BatchIssuance): _138.MsgCreateBatch_BatchIssuanceProtoMsg;
            };
            MsgCreateBatchResponse: {
                encode(message: _138.MsgCreateBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgCreateBatchResponse;
                fromJSON(object: any): _138.MsgCreateBatchResponse;
                toJSON(message: _138.MsgCreateBatchResponse): unknown;
                fromPartial(object: Partial<_138.MsgCreateBatchResponse>): _138.MsgCreateBatchResponse;
                fromAmino(object: _138.MsgCreateBatchResponseAmino): _138.MsgCreateBatchResponse;
                toAmino(message: _138.MsgCreateBatchResponse): _138.MsgCreateBatchResponseAmino;
                fromAminoMsg(object: _138.MsgCreateBatchResponseAminoMsg): _138.MsgCreateBatchResponse;
                fromProtoMsg(message: _138.MsgCreateBatchResponseProtoMsg): _138.MsgCreateBatchResponse;
                toProto(message: _138.MsgCreateBatchResponse): Uint8Array;
                toProtoMsg(message: _138.MsgCreateBatchResponse): _138.MsgCreateBatchResponseProtoMsg;
            };
            MsgSend: {
                encode(message: _138.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgSend;
                fromJSON(object: any): _138.MsgSend;
                toJSON(message: _138.MsgSend): unknown;
                fromPartial(object: Partial<_138.MsgSend>): _138.MsgSend;
                fromAmino(object: _138.MsgSendAmino): _138.MsgSend;
                toAmino(message: _138.MsgSend): _138.MsgSendAmino;
                fromAminoMsg(object: _138.MsgSendAminoMsg): _138.MsgSend;
                fromProtoMsg(message: _138.MsgSendProtoMsg): _138.MsgSend;
                toProto(message: _138.MsgSend): Uint8Array;
                toProtoMsg(message: _138.MsgSend): _138.MsgSendProtoMsg;
            };
            MsgSend_SendCredits: {
                encode(message: _138.MsgSend_SendCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgSend_SendCredits;
                fromJSON(object: any): _138.MsgSend_SendCredits;
                toJSON(message: _138.MsgSend_SendCredits): unknown;
                fromPartial(object: Partial<_138.MsgSend_SendCredits>): _138.MsgSend_SendCredits;
                fromAmino(object: _138.MsgSend_SendCreditsAmino): _138.MsgSend_SendCredits;
                toAmino(message: _138.MsgSend_SendCredits): _138.MsgSend_SendCreditsAmino;
                fromAminoMsg(object: _138.MsgSend_SendCreditsAminoMsg): _138.MsgSend_SendCredits;
                fromProtoMsg(message: _138.MsgSend_SendCreditsProtoMsg): _138.MsgSend_SendCredits;
                toProto(message: _138.MsgSend_SendCredits): Uint8Array;
                toProtoMsg(message: _138.MsgSend_SendCredits): _138.MsgSend_SendCreditsProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _138.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgSendResponse;
                fromJSON(_: any): _138.MsgSendResponse;
                toJSON(_: _138.MsgSendResponse): unknown;
                fromPartial(_: Partial<_138.MsgSendResponse>): _138.MsgSendResponse;
                fromAmino(_: _138.MsgSendResponseAmino): _138.MsgSendResponse;
                toAmino(_: _138.MsgSendResponse): _138.MsgSendResponseAmino;
                fromAminoMsg(object: _138.MsgSendResponseAminoMsg): _138.MsgSendResponse;
                fromProtoMsg(message: _138.MsgSendResponseProtoMsg): _138.MsgSendResponse;
                toProto(message: _138.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _138.MsgSendResponse): _138.MsgSendResponseProtoMsg;
            };
            MsgRetire: {
                encode(message: _138.MsgRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgRetire;
                fromJSON(object: any): _138.MsgRetire;
                toJSON(message: _138.MsgRetire): unknown;
                fromPartial(object: Partial<_138.MsgRetire>): _138.MsgRetire;
                fromAmino(object: _138.MsgRetireAmino): _138.MsgRetire;
                toAmino(message: _138.MsgRetire): _138.MsgRetireAmino;
                fromAminoMsg(object: _138.MsgRetireAminoMsg): _138.MsgRetire;
                fromProtoMsg(message: _138.MsgRetireProtoMsg): _138.MsgRetire;
                toProto(message: _138.MsgRetire): Uint8Array;
                toProtoMsg(message: _138.MsgRetire): _138.MsgRetireProtoMsg;
            };
            MsgRetire_RetireCredits: {
                encode(message: _138.MsgRetire_RetireCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgRetire_RetireCredits;
                fromJSON(object: any): _138.MsgRetire_RetireCredits;
                toJSON(message: _138.MsgRetire_RetireCredits): unknown;
                fromPartial(object: Partial<_138.MsgRetire_RetireCredits>): _138.MsgRetire_RetireCredits;
                fromAmino(object: _138.MsgRetire_RetireCreditsAmino): _138.MsgRetire_RetireCredits;
                toAmino(message: _138.MsgRetire_RetireCredits): _138.MsgRetire_RetireCreditsAmino;
                fromAminoMsg(object: _138.MsgRetire_RetireCreditsAminoMsg): _138.MsgRetire_RetireCredits;
                fromProtoMsg(message: _138.MsgRetire_RetireCreditsProtoMsg): _138.MsgRetire_RetireCredits;
                toProto(message: _138.MsgRetire_RetireCredits): Uint8Array;
                toProtoMsg(message: _138.MsgRetire_RetireCredits): _138.MsgRetire_RetireCreditsProtoMsg;
            };
            MsgRetireResponse: {
                encode(_: _138.MsgRetireResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgRetireResponse;
                fromJSON(_: any): _138.MsgRetireResponse;
                toJSON(_: _138.MsgRetireResponse): unknown;
                fromPartial(_: Partial<_138.MsgRetireResponse>): _138.MsgRetireResponse;
                fromAmino(_: _138.MsgRetireResponseAmino): _138.MsgRetireResponse;
                toAmino(_: _138.MsgRetireResponse): _138.MsgRetireResponseAmino;
                fromAminoMsg(object: _138.MsgRetireResponseAminoMsg): _138.MsgRetireResponse;
                fromProtoMsg(message: _138.MsgRetireResponseProtoMsg): _138.MsgRetireResponse;
                toProto(message: _138.MsgRetireResponse): Uint8Array;
                toProtoMsg(message: _138.MsgRetireResponse): _138.MsgRetireResponseProtoMsg;
            };
            MsgCancel: {
                encode(message: _138.MsgCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgCancel;
                fromJSON(object: any): _138.MsgCancel;
                toJSON(message: _138.MsgCancel): unknown;
                fromPartial(object: Partial<_138.MsgCancel>): _138.MsgCancel;
                fromAmino(object: _138.MsgCancelAmino): _138.MsgCancel;
                toAmino(message: _138.MsgCancel): _138.MsgCancelAmino;
                fromAminoMsg(object: _138.MsgCancelAminoMsg): _138.MsgCancel;
                fromProtoMsg(message: _138.MsgCancelProtoMsg): _138.MsgCancel;
                toProto(message: _138.MsgCancel): Uint8Array;
                toProtoMsg(message: _138.MsgCancel): _138.MsgCancelProtoMsg;
            };
            MsgCancel_CancelCredits: {
                encode(message: _138.MsgCancel_CancelCredits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgCancel_CancelCredits;
                fromJSON(object: any): _138.MsgCancel_CancelCredits;
                toJSON(message: _138.MsgCancel_CancelCredits): unknown;
                fromPartial(object: Partial<_138.MsgCancel_CancelCredits>): _138.MsgCancel_CancelCredits;
                fromAmino(object: _138.MsgCancel_CancelCreditsAmino): _138.MsgCancel_CancelCredits;
                toAmino(message: _138.MsgCancel_CancelCredits): _138.MsgCancel_CancelCreditsAmino;
                fromAminoMsg(object: _138.MsgCancel_CancelCreditsAminoMsg): _138.MsgCancel_CancelCredits;
                fromProtoMsg(message: _138.MsgCancel_CancelCreditsProtoMsg): _138.MsgCancel_CancelCredits;
                toProto(message: _138.MsgCancel_CancelCredits): Uint8Array;
                toProtoMsg(message: _138.MsgCancel_CancelCredits): _138.MsgCancel_CancelCreditsProtoMsg;
            };
            MsgCancelResponse: {
                encode(_: _138.MsgCancelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgCancelResponse;
                fromJSON(_: any): _138.MsgCancelResponse;
                toJSON(_: _138.MsgCancelResponse): unknown;
                fromPartial(_: Partial<_138.MsgCancelResponse>): _138.MsgCancelResponse;
                fromAmino(_: _138.MsgCancelResponseAmino): _138.MsgCancelResponse;
                toAmino(_: _138.MsgCancelResponse): _138.MsgCancelResponseAmino;
                fromAminoMsg(object: _138.MsgCancelResponseAminoMsg): _138.MsgCancelResponse;
                fromProtoMsg(message: _138.MsgCancelResponseProtoMsg): _138.MsgCancelResponse;
                toProto(message: _138.MsgCancelResponse): Uint8Array;
                toProtoMsg(message: _138.MsgCancelResponse): _138.MsgCancelResponseProtoMsg;
            };
            MsgUpdateClassAdmin: {
                encode(message: _138.MsgUpdateClassAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgUpdateClassAdmin;
                fromJSON(object: any): _138.MsgUpdateClassAdmin;
                toJSON(message: _138.MsgUpdateClassAdmin): unknown;
                fromPartial(object: Partial<_138.MsgUpdateClassAdmin>): _138.MsgUpdateClassAdmin;
                fromAmino(object: _138.MsgUpdateClassAdminAmino): _138.MsgUpdateClassAdmin;
                toAmino(message: _138.MsgUpdateClassAdmin): _138.MsgUpdateClassAdminAmino;
                fromAminoMsg(object: _138.MsgUpdateClassAdminAminoMsg): _138.MsgUpdateClassAdmin;
                fromProtoMsg(message: _138.MsgUpdateClassAdminProtoMsg): _138.MsgUpdateClassAdmin;
                toProto(message: _138.MsgUpdateClassAdmin): Uint8Array;
                toProtoMsg(message: _138.MsgUpdateClassAdmin): _138.MsgUpdateClassAdminProtoMsg;
            };
            MsgUpdateClassAdminResponse: {
                encode(_: _138.MsgUpdateClassAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgUpdateClassAdminResponse;
                fromJSON(_: any): _138.MsgUpdateClassAdminResponse;
                toJSON(_: _138.MsgUpdateClassAdminResponse): unknown;
                fromPartial(_: Partial<_138.MsgUpdateClassAdminResponse>): _138.MsgUpdateClassAdminResponse;
                fromAmino(_: _138.MsgUpdateClassAdminResponseAmino): _138.MsgUpdateClassAdminResponse;
                toAmino(_: _138.MsgUpdateClassAdminResponse): _138.MsgUpdateClassAdminResponseAmino;
                fromAminoMsg(object: _138.MsgUpdateClassAdminResponseAminoMsg): _138.MsgUpdateClassAdminResponse;
                fromProtoMsg(message: _138.MsgUpdateClassAdminResponseProtoMsg): _138.MsgUpdateClassAdminResponse;
                toProto(message: _138.MsgUpdateClassAdminResponse): Uint8Array;
                toProtoMsg(message: _138.MsgUpdateClassAdminResponse): _138.MsgUpdateClassAdminResponseProtoMsg;
            };
            MsgUpdateClassIssuers: {
                encode(message: _138.MsgUpdateClassIssuers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgUpdateClassIssuers;
                fromJSON(object: any): _138.MsgUpdateClassIssuers;
                toJSON(message: _138.MsgUpdateClassIssuers): unknown;
                fromPartial(object: Partial<_138.MsgUpdateClassIssuers>): _138.MsgUpdateClassIssuers;
                fromAmino(object: _138.MsgUpdateClassIssuersAmino): _138.MsgUpdateClassIssuers;
                toAmino(message: _138.MsgUpdateClassIssuers): _138.MsgUpdateClassIssuersAmino;
                fromAminoMsg(object: _138.MsgUpdateClassIssuersAminoMsg): _138.MsgUpdateClassIssuers;
                fromProtoMsg(message: _138.MsgUpdateClassIssuersProtoMsg): _138.MsgUpdateClassIssuers;
                toProto(message: _138.MsgUpdateClassIssuers): Uint8Array;
                toProtoMsg(message: _138.MsgUpdateClassIssuers): _138.MsgUpdateClassIssuersProtoMsg;
            };
            MsgUpdateClassIssuersResponse: {
                encode(_: _138.MsgUpdateClassIssuersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgUpdateClassIssuersResponse;
                fromJSON(_: any): _138.MsgUpdateClassIssuersResponse;
                toJSON(_: _138.MsgUpdateClassIssuersResponse): unknown;
                fromPartial(_: Partial<_138.MsgUpdateClassIssuersResponse>): _138.MsgUpdateClassIssuersResponse;
                fromAmino(_: _138.MsgUpdateClassIssuersResponseAmino): _138.MsgUpdateClassIssuersResponse;
                toAmino(_: _138.MsgUpdateClassIssuersResponse): _138.MsgUpdateClassIssuersResponseAmino;
                fromAminoMsg(object: _138.MsgUpdateClassIssuersResponseAminoMsg): _138.MsgUpdateClassIssuersResponse;
                fromProtoMsg(message: _138.MsgUpdateClassIssuersResponseProtoMsg): _138.MsgUpdateClassIssuersResponse;
                toProto(message: _138.MsgUpdateClassIssuersResponse): Uint8Array;
                toProtoMsg(message: _138.MsgUpdateClassIssuersResponse): _138.MsgUpdateClassIssuersResponseProtoMsg;
            };
            MsgUpdateClassMetadata: {
                encode(message: _138.MsgUpdateClassMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgUpdateClassMetadata;
                fromJSON(object: any): _138.MsgUpdateClassMetadata;
                toJSON(message: _138.MsgUpdateClassMetadata): unknown;
                fromPartial(object: Partial<_138.MsgUpdateClassMetadata>): _138.MsgUpdateClassMetadata;
                fromAmino(object: _138.MsgUpdateClassMetadataAmino): _138.MsgUpdateClassMetadata;
                toAmino(message: _138.MsgUpdateClassMetadata): _138.MsgUpdateClassMetadataAmino;
                fromAminoMsg(object: _138.MsgUpdateClassMetadataAminoMsg): _138.MsgUpdateClassMetadata;
                fromProtoMsg(message: _138.MsgUpdateClassMetadataProtoMsg): _138.MsgUpdateClassMetadata;
                toProto(message: _138.MsgUpdateClassMetadata): Uint8Array;
                toProtoMsg(message: _138.MsgUpdateClassMetadata): _138.MsgUpdateClassMetadataProtoMsg;
            };
            MsgUpdateClassMetadataResponse: {
                encode(_: _138.MsgUpdateClassMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.MsgUpdateClassMetadataResponse;
                fromJSON(_: any): _138.MsgUpdateClassMetadataResponse;
                toJSON(_: _138.MsgUpdateClassMetadataResponse): unknown;
                fromPartial(_: Partial<_138.MsgUpdateClassMetadataResponse>): _138.MsgUpdateClassMetadataResponse;
                fromAmino(_: _138.MsgUpdateClassMetadataResponseAmino): _138.MsgUpdateClassMetadataResponse;
                toAmino(_: _138.MsgUpdateClassMetadataResponse): _138.MsgUpdateClassMetadataResponseAmino;
                fromAminoMsg(object: _138.MsgUpdateClassMetadataResponseAminoMsg): _138.MsgUpdateClassMetadataResponse;
                fromProtoMsg(message: _138.MsgUpdateClassMetadataResponseProtoMsg): _138.MsgUpdateClassMetadataResponse;
                toProto(message: _138.MsgUpdateClassMetadataResponse): Uint8Array;
                toProtoMsg(message: _138.MsgUpdateClassMetadataResponse): _138.MsgUpdateClassMetadataResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _137.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.QueryParamsRequest;
                fromJSON(_: any): _137.QueryParamsRequest;
                toJSON(_: _137.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_137.QueryParamsRequest>): _137.QueryParamsRequest;
                fromAmino(_: _137.QueryParamsRequestAmino): _137.QueryParamsRequest;
                toAmino(_: _137.QueryParamsRequest): _137.QueryParamsRequestAmino;
                fromAminoMsg(object: _137.QueryParamsRequestAminoMsg): _137.QueryParamsRequest;
                fromProtoMsg(message: _137.QueryParamsRequestProtoMsg): _137.QueryParamsRequest;
                toProto(message: _137.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _137.QueryParamsRequest): _137.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _137.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.QueryParamsResponse;
                fromJSON(object: any): _137.QueryParamsResponse;
                toJSON(message: _137.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_137.QueryParamsResponse>): _137.QueryParamsResponse;
                fromAmino(object: _137.QueryParamsResponseAmino): _137.QueryParamsResponse;
                toAmino(message: _137.QueryParamsResponse): _137.QueryParamsResponseAmino;
                fromAminoMsg(object: _137.QueryParamsResponseAminoMsg): _137.QueryParamsResponse;
                fromProtoMsg(message: _137.QueryParamsResponseProtoMsg): _137.QueryParamsResponse;
                toProto(message: _137.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _137.QueryParamsResponse): _137.QueryParamsResponseProtoMsg;
            };
            QueryClassesRequest: {
                encode(message: _137.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.QueryClassesRequest;
                fromJSON(object: any): _137.QueryClassesRequest;
                toJSON(message: _137.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_137.QueryClassesRequest>): _137.QueryClassesRequest;
                fromAmino(object: _137.QueryClassesRequestAmino): _137.QueryClassesRequest;
                toAmino(message: _137.QueryClassesRequest): _137.QueryClassesRequestAmino;
                fromAminoMsg(object: _137.QueryClassesRequestAminoMsg): _137.QueryClassesRequest;
                fromProtoMsg(message: _137.QueryClassesRequestProtoMsg): _137.QueryClassesRequest;
                toProto(message: _137.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _137.QueryClassesRequest): _137.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                encode(message: _137.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.QueryClassesResponse;
                fromJSON(object: any): _137.QueryClassesResponse;
                toJSON(message: _137.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_137.QueryClassesResponse>): _137.QueryClassesResponse;
                fromAmino(object: _137.QueryClassesResponseAmino): _137.QueryClassesResponse;
                toAmino(message: _137.QueryClassesResponse): _137.QueryClassesResponseAmino;
                fromAminoMsg(object: _137.QueryClassesResponseAminoMsg): _137.QueryClassesResponse;
                fromProtoMsg(message: _137.QueryClassesResponseProtoMsg): _137.QueryClassesResponse;
                toProto(message: _137.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _137.QueryClassesResponse): _137.QueryClassesResponseProtoMsg;
            };
            QueryClassInfoRequest: {
                encode(message: _137.QueryClassInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.QueryClassInfoRequest;
                fromJSON(object: any): _137.QueryClassInfoRequest;
                toJSON(message: _137.QueryClassInfoRequest): unknown;
                fromPartial(object: Partial<_137.QueryClassInfoRequest>): _137.QueryClassInfoRequest;
                fromAmino(object: _137.QueryClassInfoRequestAmino): _137.QueryClassInfoRequest;
                toAmino(message: _137.QueryClassInfoRequest): _137.QueryClassInfoRequestAmino;
                fromAminoMsg(object: _137.QueryClassInfoRequestAminoMsg): _137.QueryClassInfoRequest;
                fromProtoMsg(message: _137.QueryClassInfoRequestProtoMsg): _137.QueryClassInfoRequest;
                toProto(message: _137.QueryClassInfoRequest): Uint8Array;
                toProtoMsg(message: _137.QueryClassInfoRequest): _137.QueryClassInfoRequestProtoMsg;
            };
            QueryClassInfoResponse: {
                encode(message: _137.QueryClassInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.QueryClassInfoResponse;
                fromJSON(object: any): _137.QueryClassInfoResponse;
                toJSON(message: _137.QueryClassInfoResponse): unknown;
                fromPartial(object: Partial<_137.QueryClassInfoResponse>): _137.QueryClassInfoResponse;
                fromAmino(object: _137.QueryClassInfoResponseAmino): _137.QueryClassInfoResponse;
                toAmino(message: _137.QueryClassInfoResponse): _137.QueryClassInfoResponseAmino;
                fromAminoMsg(object: _137.QueryClassInfoResponseAminoMsg): _137.QueryClassInfoResponse;
                fromProtoMsg(message: _137.QueryClassInfoResponseProtoMsg): _137.QueryClassInfoResponse;
                toProto(message: _137.QueryClassInfoResponse): Uint8Array;
                toProtoMsg(message: _137.QueryClassInfoResponse): _137.QueryClassInfoResponseProtoMsg;
            };
            QueryBatchesRequest: {
                encode(message: _137.QueryBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.QueryBatchesRequest;
                fromJSON(object: any): _137.QueryBatchesRequest;
                toJSON(message: _137.QueryBatchesRequest): unknown;
                fromPartial(object: Partial<_137.QueryBatchesRequest>): _137.QueryBatchesRequest;
                fromAmino(object: _137.QueryBatchesRequestAmino): _137.QueryBatchesRequest;
                toAmino(message: _137.QueryBatchesRequest): _137.QueryBatchesRequestAmino;
                fromAminoMsg(object: _137.QueryBatchesRequestAminoMsg): _137.QueryBatchesRequest;
                fromProtoMsg(message: _137.QueryBatchesRequestProtoMsg): _137.QueryBatchesRequest;
                toProto(message: _137.QueryBatchesRequest): Uint8Array;
                toProtoMsg(message: _137.QueryBatchesRequest): _137.QueryBatchesRequestProtoMsg;
            };
            QueryBatchesResponse: {
                encode(message: _137.QueryBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.QueryBatchesResponse;
                fromJSON(object: any): _137.QueryBatchesResponse;
                toJSON(message: _137.QueryBatchesResponse): unknown;
                fromPartial(object: Partial<_137.QueryBatchesResponse>): _137.QueryBatchesResponse;
                fromAmino(object: _137.QueryBatchesResponseAmino): _137.QueryBatchesResponse;
                toAmino(message: _137.QueryBatchesResponse): _137.QueryBatchesResponseAmino;
                fromAminoMsg(object: _137.QueryBatchesResponseAminoMsg): _137.QueryBatchesResponse;
                fromProtoMsg(message: _137.QueryBatchesResponseProtoMsg): _137.QueryBatchesResponse;
                toProto(message: _137.QueryBatchesResponse): Uint8Array;
                toProtoMsg(message: _137.QueryBatchesResponse): _137.QueryBatchesResponseProtoMsg;
            };
            QueryBatchInfoRequest: {
                encode(message: _137.QueryBatchInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.QueryBatchInfoRequest;
                fromJSON(object: any): _137.QueryBatchInfoRequest;
                toJSON(message: _137.QueryBatchInfoRequest): unknown;
                fromPartial(object: Partial<_137.QueryBatchInfoRequest>): _137.QueryBatchInfoRequest;
                fromAmino(object: _137.QueryBatchInfoRequestAmino): _137.QueryBatchInfoRequest;
                toAmino(message: _137.QueryBatchInfoRequest): _137.QueryBatchInfoRequestAmino;
                fromAminoMsg(object: _137.QueryBatchInfoRequestAminoMsg): _137.QueryBatchInfoRequest;
                fromProtoMsg(message: _137.QueryBatchInfoRequestProtoMsg): _137.QueryBatchInfoRequest;
                toProto(message: _137.QueryBatchInfoRequest): Uint8Array;
                toProtoMsg(message: _137.QueryBatchInfoRequest): _137.QueryBatchInfoRequestProtoMsg;
            };
            QueryBatchInfoResponse: {
                encode(message: _137.QueryBatchInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.QueryBatchInfoResponse;
                fromJSON(object: any): _137.QueryBatchInfoResponse;
                toJSON(message: _137.QueryBatchInfoResponse): unknown;
                fromPartial(object: Partial<_137.QueryBatchInfoResponse>): _137.QueryBatchInfoResponse;
                fromAmino(object: _137.QueryBatchInfoResponseAmino): _137.QueryBatchInfoResponse;
                toAmino(message: _137.QueryBatchInfoResponse): _137.QueryBatchInfoResponseAmino;
                fromAminoMsg(object: _137.QueryBatchInfoResponseAminoMsg): _137.QueryBatchInfoResponse;
                fromProtoMsg(message: _137.QueryBatchInfoResponseProtoMsg): _137.QueryBatchInfoResponse;
                toProto(message: _137.QueryBatchInfoResponse): Uint8Array;
                toProtoMsg(message: _137.QueryBatchInfoResponse): _137.QueryBatchInfoResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _137.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.QueryBalanceRequest;
                fromJSON(object: any): _137.QueryBalanceRequest;
                toJSON(message: _137.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_137.QueryBalanceRequest>): _137.QueryBalanceRequest;
                fromAmino(object: _137.QueryBalanceRequestAmino): _137.QueryBalanceRequest;
                toAmino(message: _137.QueryBalanceRequest): _137.QueryBalanceRequestAmino;
                fromAminoMsg(object: _137.QueryBalanceRequestAminoMsg): _137.QueryBalanceRequest;
                fromProtoMsg(message: _137.QueryBalanceRequestProtoMsg): _137.QueryBalanceRequest;
                toProto(message: _137.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _137.QueryBalanceRequest): _137.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _137.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.QueryBalanceResponse;
                fromJSON(object: any): _137.QueryBalanceResponse;
                toJSON(message: _137.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_137.QueryBalanceResponse>): _137.QueryBalanceResponse;
                fromAmino(object: _137.QueryBalanceResponseAmino): _137.QueryBalanceResponse;
                toAmino(message: _137.QueryBalanceResponse): _137.QueryBalanceResponseAmino;
                fromAminoMsg(object: _137.QueryBalanceResponseAminoMsg): _137.QueryBalanceResponse;
                fromProtoMsg(message: _137.QueryBalanceResponseProtoMsg): _137.QueryBalanceResponse;
                toProto(message: _137.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _137.QueryBalanceResponse): _137.QueryBalanceResponseProtoMsg;
            };
            QuerySupplyRequest: {
                encode(message: _137.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.QuerySupplyRequest;
                fromJSON(object: any): _137.QuerySupplyRequest;
                toJSON(message: _137.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_137.QuerySupplyRequest>): _137.QuerySupplyRequest;
                fromAmino(object: _137.QuerySupplyRequestAmino): _137.QuerySupplyRequest;
                toAmino(message: _137.QuerySupplyRequest): _137.QuerySupplyRequestAmino;
                fromAminoMsg(object: _137.QuerySupplyRequestAminoMsg): _137.QuerySupplyRequest;
                fromProtoMsg(message: _137.QuerySupplyRequestProtoMsg): _137.QuerySupplyRequest;
                toProto(message: _137.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _137.QuerySupplyRequest): _137.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                encode(message: _137.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.QuerySupplyResponse;
                fromJSON(object: any): _137.QuerySupplyResponse;
                toJSON(message: _137.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_137.QuerySupplyResponse>): _137.QuerySupplyResponse;
                fromAmino(object: _137.QuerySupplyResponseAmino): _137.QuerySupplyResponse;
                toAmino(message: _137.QuerySupplyResponse): _137.QuerySupplyResponseAmino;
                fromAminoMsg(object: _137.QuerySupplyResponseAminoMsg): _137.QuerySupplyResponse;
                fromProtoMsg(message: _137.QuerySupplyResponseProtoMsg): _137.QuerySupplyResponse;
                toProto(message: _137.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _137.QuerySupplyResponse): _137.QuerySupplyResponseProtoMsg;
            };
            QueryCreditTypesRequest: {
                encode(_: _137.QueryCreditTypesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.QueryCreditTypesRequest;
                fromJSON(_: any): _137.QueryCreditTypesRequest;
                toJSON(_: _137.QueryCreditTypesRequest): unknown;
                fromPartial(_: Partial<_137.QueryCreditTypesRequest>): _137.QueryCreditTypesRequest;
                fromAmino(_: _137.QueryCreditTypesRequestAmino): _137.QueryCreditTypesRequest;
                toAmino(_: _137.QueryCreditTypesRequest): _137.QueryCreditTypesRequestAmino;
                fromAminoMsg(object: _137.QueryCreditTypesRequestAminoMsg): _137.QueryCreditTypesRequest;
                fromProtoMsg(message: _137.QueryCreditTypesRequestProtoMsg): _137.QueryCreditTypesRequest;
                toProto(message: _137.QueryCreditTypesRequest): Uint8Array;
                toProtoMsg(message: _137.QueryCreditTypesRequest): _137.QueryCreditTypesRequestProtoMsg;
            };
            QueryCreditTypesResponse: {
                encode(message: _137.QueryCreditTypesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.QueryCreditTypesResponse;
                fromJSON(object: any): _137.QueryCreditTypesResponse;
                toJSON(message: _137.QueryCreditTypesResponse): unknown;
                fromPartial(object: Partial<_137.QueryCreditTypesResponse>): _137.QueryCreditTypesResponse;
                fromAmino(object: _137.QueryCreditTypesResponseAmino): _137.QueryCreditTypesResponse;
                toAmino(message: _137.QueryCreditTypesResponse): _137.QueryCreditTypesResponseAmino;
                fromAminoMsg(object: _137.QueryCreditTypesResponseAminoMsg): _137.QueryCreditTypesResponse;
                fromProtoMsg(message: _137.QueryCreditTypesResponseProtoMsg): _137.QueryCreditTypesResponse;
                toProto(message: _137.QueryCreditTypesResponse): Uint8Array;
                toProtoMsg(message: _137.QueryCreditTypesResponse): _137.QueryCreditTypesResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _136.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.GenesisState;
                fromJSON(object: any): _136.GenesisState;
                toJSON(message: _136.GenesisState): unknown;
                fromPartial(object: Partial<_136.GenesisState>): _136.GenesisState;
                fromAmino(object: _136.GenesisStateAmino): _136.GenesisState;
                toAmino(message: _136.GenesisState): _136.GenesisStateAmino;
                fromAminoMsg(object: _136.GenesisStateAminoMsg): _136.GenesisState;
                fromProtoMsg(message: _136.GenesisStateProtoMsg): _136.GenesisState;
                toProto(message: _136.GenesisState): Uint8Array;
                toProtoMsg(message: _136.GenesisState): _136.GenesisStateProtoMsg;
            };
            Balance: {
                encode(message: _136.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.Balance;
                fromJSON(object: any): _136.Balance;
                toJSON(message: _136.Balance): unknown;
                fromPartial(object: Partial<_136.Balance>): _136.Balance;
                fromAmino(object: _136.BalanceAmino): _136.Balance;
                toAmino(message: _136.Balance): _136.BalanceAmino;
                fromAminoMsg(object: _136.BalanceAminoMsg): _136.Balance;
                fromProtoMsg(message: _136.BalanceProtoMsg): _136.Balance;
                toProto(message: _136.Balance): Uint8Array;
                toProtoMsg(message: _136.Balance): _136.BalanceProtoMsg;
            };
            Supply: {
                encode(message: _136.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.Supply;
                fromJSON(object: any): _136.Supply;
                toJSON(message: _136.Supply): unknown;
                fromPartial(object: Partial<_136.Supply>): _136.Supply;
                fromAmino(object: _136.SupplyAmino): _136.Supply;
                toAmino(message: _136.Supply): _136.SupplyAmino;
                fromAminoMsg(object: _136.SupplyAminoMsg): _136.Supply;
                fromProtoMsg(message: _136.SupplyProtoMsg): _136.Supply;
                toProto(message: _136.Supply): Uint8Array;
                toProtoMsg(message: _136.Supply): _136.SupplyProtoMsg;
            };
            EventCreateClass: {
                encode(message: _135.EventCreateClass, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.EventCreateClass;
                fromJSON(object: any): _135.EventCreateClass;
                toJSON(message: _135.EventCreateClass): unknown;
                fromPartial(object: Partial<_135.EventCreateClass>): _135.EventCreateClass;
                fromAmino(object: _135.EventCreateClassAmino): _135.EventCreateClass;
                toAmino(message: _135.EventCreateClass): _135.EventCreateClassAmino;
                fromAminoMsg(object: _135.EventCreateClassAminoMsg): _135.EventCreateClass;
                fromProtoMsg(message: _135.EventCreateClassProtoMsg): _135.EventCreateClass;
                toProto(message: _135.EventCreateClass): Uint8Array;
                toProtoMsg(message: _135.EventCreateClass): _135.EventCreateClassProtoMsg;
            };
            EventCreateBatch: {
                encode(message: _135.EventCreateBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.EventCreateBatch;
                fromJSON(object: any): _135.EventCreateBatch;
                toJSON(message: _135.EventCreateBatch): unknown;
                fromPartial(object: Partial<_135.EventCreateBatch>): _135.EventCreateBatch;
                fromAmino(object: _135.EventCreateBatchAmino): _135.EventCreateBatch;
                toAmino(message: _135.EventCreateBatch): _135.EventCreateBatchAmino;
                fromAminoMsg(object: _135.EventCreateBatchAminoMsg): _135.EventCreateBatch;
                fromProtoMsg(message: _135.EventCreateBatchProtoMsg): _135.EventCreateBatch;
                toProto(message: _135.EventCreateBatch): Uint8Array;
                toProtoMsg(message: _135.EventCreateBatch): _135.EventCreateBatchProtoMsg;
            };
            EventReceive: {
                encode(message: _135.EventReceive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.EventReceive;
                fromJSON(object: any): _135.EventReceive;
                toJSON(message: _135.EventReceive): unknown;
                fromPartial(object: Partial<_135.EventReceive>): _135.EventReceive;
                fromAmino(object: _135.EventReceiveAmino): _135.EventReceive;
                toAmino(message: _135.EventReceive): _135.EventReceiveAmino;
                fromAminoMsg(object: _135.EventReceiveAminoMsg): _135.EventReceive;
                fromProtoMsg(message: _135.EventReceiveProtoMsg): _135.EventReceive;
                toProto(message: _135.EventReceive): Uint8Array;
                toProtoMsg(message: _135.EventReceive): _135.EventReceiveProtoMsg;
            };
            EventRetire: {
                encode(message: _135.EventRetire, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.EventRetire;
                fromJSON(object: any): _135.EventRetire;
                toJSON(message: _135.EventRetire): unknown;
                fromPartial(object: Partial<_135.EventRetire>): _135.EventRetire;
                fromAmino(object: _135.EventRetireAmino): _135.EventRetire;
                toAmino(message: _135.EventRetire): _135.EventRetireAmino;
                fromAminoMsg(object: _135.EventRetireAminoMsg): _135.EventRetire;
                fromProtoMsg(message: _135.EventRetireProtoMsg): _135.EventRetire;
                toProto(message: _135.EventRetire): Uint8Array;
                toProtoMsg(message: _135.EventRetire): _135.EventRetireProtoMsg;
            };
            EventCancel: {
                encode(message: _135.EventCancel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.EventCancel;
                fromJSON(object: any): _135.EventCancel;
                toJSON(message: _135.EventCancel): unknown;
                fromPartial(object: Partial<_135.EventCancel>): _135.EventCancel;
                fromAmino(object: _135.EventCancelAmino): _135.EventCancel;
                toAmino(message: _135.EventCancel): _135.EventCancelAmino;
                fromAminoMsg(object: _135.EventCancelAminoMsg): _135.EventCancel;
                fromProtoMsg(message: _135.EventCancelProtoMsg): _135.EventCancel;
                toProto(message: _135.EventCancel): Uint8Array;
                toProtoMsg(message: _135.EventCancel): _135.EventCancelProtoMsg;
            };
        };
    }
    namespace intertx {
        const v1: {
            LCDQueryClient: typeof _222.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerAccount(value: _141.MsgRegisterAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitTx(value: _141.MsgSubmitTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerAccount(value: _141.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _141.MsgRegisterAccount;
                    };
                    submitTx(value: _141.MsgSubmitTx): {
                        typeUrl: string;
                        value: _141.MsgSubmitTx;
                    };
                };
                toJSON: {
                    registerAccount(value: _141.MsgRegisterAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitTx(value: _141.MsgSubmitTx): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    registerAccount(value: any): {
                        typeUrl: string;
                        value: _141.MsgRegisterAccount;
                    };
                    submitTx(value: any): {
                        typeUrl: string;
                        value: _141.MsgSubmitTx;
                    };
                };
                fromPartial: {
                    registerAccount(value: _141.MsgRegisterAccount): {
                        typeUrl: string;
                        value: _141.MsgRegisterAccount;
                    };
                    submitTx(value: _141.MsgSubmitTx): {
                        typeUrl: string;
                        value: _141.MsgSubmitTx;
                    };
                };
            };
            AminoConverter: {
                "/regen.intertx.v1.MsgRegisterAccount": {
                    aminoType: string;
                    toAmino: (message: _141.MsgRegisterAccount) => _141.MsgRegisterAccountAmino;
                    fromAmino: (object: _141.MsgRegisterAccountAmino) => _141.MsgRegisterAccount;
                };
                "/regen.intertx.v1.MsgSubmitTx": {
                    aminoType: string;
                    toAmino: (message: _141.MsgSubmitTx) => _141.MsgSubmitTxAmino;
                    fromAmino: (object: _141.MsgSubmitTxAmino) => _141.MsgSubmitTx;
                };
            };
            MsgRegisterAccount: {
                encode(message: _141.MsgRegisterAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.MsgRegisterAccount;
                fromJSON(object: any): _141.MsgRegisterAccount;
                toJSON(message: _141.MsgRegisterAccount): unknown;
                fromPartial(object: Partial<_141.MsgRegisterAccount>): _141.MsgRegisterAccount;
                fromAmino(object: _141.MsgRegisterAccountAmino): _141.MsgRegisterAccount;
                toAmino(message: _141.MsgRegisterAccount): _141.MsgRegisterAccountAmino;
                fromAminoMsg(object: _141.MsgRegisterAccountAminoMsg): _141.MsgRegisterAccount;
                fromProtoMsg(message: _141.MsgRegisterAccountProtoMsg): _141.MsgRegisterAccount;
                toProto(message: _141.MsgRegisterAccount): Uint8Array;
                toProtoMsg(message: _141.MsgRegisterAccount): _141.MsgRegisterAccountProtoMsg;
            };
            MsgRegisterAccountResponse: {
                encode(_: _141.MsgRegisterAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.MsgRegisterAccountResponse;
                fromJSON(_: any): _141.MsgRegisterAccountResponse;
                toJSON(_: _141.MsgRegisterAccountResponse): unknown;
                fromPartial(_: Partial<_141.MsgRegisterAccountResponse>): _141.MsgRegisterAccountResponse;
                fromAmino(_: _141.MsgRegisterAccountResponseAmino): _141.MsgRegisterAccountResponse;
                toAmino(_: _141.MsgRegisterAccountResponse): _141.MsgRegisterAccountResponseAmino;
                fromAminoMsg(object: _141.MsgRegisterAccountResponseAminoMsg): _141.MsgRegisterAccountResponse;
                fromProtoMsg(message: _141.MsgRegisterAccountResponseProtoMsg): _141.MsgRegisterAccountResponse;
                toProto(message: _141.MsgRegisterAccountResponse): Uint8Array;
                toProtoMsg(message: _141.MsgRegisterAccountResponse): _141.MsgRegisterAccountResponseProtoMsg;
            };
            MsgSubmitTx: {
                encode(message: _141.MsgSubmitTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.MsgSubmitTx;
                fromJSON(object: any): _141.MsgSubmitTx;
                toJSON(message: _141.MsgSubmitTx): unknown;
                fromPartial(object: Partial<_141.MsgSubmitTx>): _141.MsgSubmitTx;
                fromAmino(object: _141.MsgSubmitTxAmino): _141.MsgSubmitTx;
                toAmino(message: _141.MsgSubmitTx): _141.MsgSubmitTxAmino;
                fromAminoMsg(object: _141.MsgSubmitTxAminoMsg): _141.MsgSubmitTx;
                fromProtoMsg(message: _141.MsgSubmitTxProtoMsg): _141.MsgSubmitTx;
                toProto(message: _141.MsgSubmitTx): Uint8Array;
                toProtoMsg(message: _141.MsgSubmitTx): _141.MsgSubmitTxProtoMsg;
            };
            MsgSubmitTxResponse: {
                encode(_: _141.MsgSubmitTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.MsgSubmitTxResponse;
                fromJSON(_: any): _141.MsgSubmitTxResponse;
                toJSON(_: _141.MsgSubmitTxResponse): unknown;
                fromPartial(_: Partial<_141.MsgSubmitTxResponse>): _141.MsgSubmitTxResponse;
                fromAmino(_: _141.MsgSubmitTxResponseAmino): _141.MsgSubmitTxResponse;
                toAmino(_: _141.MsgSubmitTxResponse): _141.MsgSubmitTxResponseAmino;
                fromAminoMsg(object: _141.MsgSubmitTxResponseAminoMsg): _141.MsgSubmitTxResponse;
                fromProtoMsg(message: _141.MsgSubmitTxResponseProtoMsg): _141.MsgSubmitTxResponse;
                toProto(message: _141.MsgSubmitTxResponse): Uint8Array;
                toProtoMsg(message: _141.MsgSubmitTxResponse): _141.MsgSubmitTxResponseProtoMsg;
            };
            QueryInterchainAccountRequest: {
                encode(message: _140.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryInterchainAccountRequest;
                fromJSON(object: any): _140.QueryInterchainAccountRequest;
                toJSON(message: _140.QueryInterchainAccountRequest): unknown;
                fromPartial(object: Partial<_140.QueryInterchainAccountRequest>): _140.QueryInterchainAccountRequest;
                fromAmino(object: _140.QueryInterchainAccountRequestAmino): _140.QueryInterchainAccountRequest;
                toAmino(message: _140.QueryInterchainAccountRequest): _140.QueryInterchainAccountRequestAmino;
                fromAminoMsg(object: _140.QueryInterchainAccountRequestAminoMsg): _140.QueryInterchainAccountRequest;
                fromProtoMsg(message: _140.QueryInterchainAccountRequestProtoMsg): _140.QueryInterchainAccountRequest;
                toProto(message: _140.QueryInterchainAccountRequest): Uint8Array;
                toProtoMsg(message: _140.QueryInterchainAccountRequest): _140.QueryInterchainAccountRequestProtoMsg;
            };
            QueryInterchainAccountResponse: {
                encode(message: _140.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.QueryInterchainAccountResponse;
                fromJSON(object: any): _140.QueryInterchainAccountResponse;
                toJSON(message: _140.QueryInterchainAccountResponse): unknown;
                fromPartial(object: Partial<_140.QueryInterchainAccountResponse>): _140.QueryInterchainAccountResponse;
                fromAmino(object: _140.QueryInterchainAccountResponseAmino): _140.QueryInterchainAccountResponse;
                toAmino(message: _140.QueryInterchainAccountResponse): _140.QueryInterchainAccountResponseAmino;
                fromAminoMsg(object: _140.QueryInterchainAccountResponseAminoMsg): _140.QueryInterchainAccountResponse;
                fromProtoMsg(message: _140.QueryInterchainAccountResponseProtoMsg): _140.QueryInterchainAccountResponse;
                toProto(message: _140.QueryInterchainAccountResponse): Uint8Array;
                toProtoMsg(message: _140.QueryInterchainAccountResponse): _140.QueryInterchainAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            regen: {
                data: {
                    v1: _217.LCDQueryClient;
                };
                ecocredit: {
                    basket: {
                        v1: _218.LCDQueryClient;
                    };
                    marketplace: {
                        v1: _219.LCDQueryClient;
                    };
                    v1: _220.LCDQueryClient;
                    v1alpha1: _221.LCDQueryClient;
                };
                intertx: {
                    v1: _222.LCDQueryClient;
                };
            };
        }>;
    };
}
