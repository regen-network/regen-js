import * as _105 from "./applications/transfer/v1/genesis";
import * as _106 from "./applications/transfer/v1/query";
import * as _107 from "./applications/transfer/v1/transfer";
import * as _108 from "./applications/transfer/v1/tx";
import * as _109 from "./core/client/v1/client";
import * as _110 from "./core/client/v1/genesis";
import * as _111 from "./core/client/v1/query";
import * as _112 from "./core/client/v1/tx";
import * as _235 from "./applications/transfer/v1/query.lcd";
import * as _236 from "./core/client/v1/query.lcd";
import * as _237 from "./applications/transfer/v1/query.rpc.Query";
import * as _238 from "./core/client/v1/query.rpc.Query";
import * as _239 from "./applications/transfer/v1/tx.rpc.msg";
import * as _240 from "./core/client/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _239.MsgClientImpl;
                QueryClientImpl: typeof _237.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _106.QueryDenomTraceRequest): Promise<_106.QueryDenomTraceResponse>;
                    denomTraces(request?: _106.QueryDenomTracesRequest | undefined): Promise<_106.QueryDenomTracesResponse>;
                    params(request?: _106.QueryParamsRequest | undefined): Promise<_106.QueryParamsResponse>;
                    denomHash(request: _106.QueryDenomHashRequest): Promise<_106.QueryDenomHashResponse>;
                    escrowAddress(request: _106.QueryEscrowAddressRequest): Promise<_106.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _235.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _108.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _108.MsgTransfer): {
                            typeUrl: string;
                            value: _108.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _108.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _108.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _108.MsgTransfer): {
                            typeUrl: string;
                            value: _108.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _108.MsgTransfer) => _108.MsgTransferAmino;
                        fromAmino: (object: _108.MsgTransferAmino) => _108.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _108.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _108.MsgTransfer;
                    fromJSON(object: any): _108.MsgTransfer;
                    toJSON(message: _108.MsgTransfer): unknown;
                    fromPartial(object: Partial<_108.MsgTransfer>): _108.MsgTransfer;
                    fromAmino(object: _108.MsgTransferAmino): _108.MsgTransfer;
                    toAmino(message: _108.MsgTransfer): _108.MsgTransferAmino;
                    fromAminoMsg(object: _108.MsgTransferAminoMsg): _108.MsgTransfer;
                    toAminoMsg(message: _108.MsgTransfer): _108.MsgTransferAminoMsg;
                    fromProtoMsg(message: _108.MsgTransferProtoMsg): _108.MsgTransfer;
                    toProto(message: _108.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _108.MsgTransfer): _108.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(_: _108.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _108.MsgTransferResponse;
                    fromJSON(_: any): _108.MsgTransferResponse;
                    toJSON(_: _108.MsgTransferResponse): unknown;
                    fromPartial(_: Partial<_108.MsgTransferResponse>): _108.MsgTransferResponse;
                    fromAmino(_: _108.MsgTransferResponseAmino): _108.MsgTransferResponse;
                    toAmino(_: _108.MsgTransferResponse): _108.MsgTransferResponseAmino;
                    fromAminoMsg(object: _108.MsgTransferResponseAminoMsg): _108.MsgTransferResponse;
                    toAminoMsg(message: _108.MsgTransferResponse): _108.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _108.MsgTransferResponseProtoMsg): _108.MsgTransferResponse;
                    toProto(message: _108.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _108.MsgTransferResponse): _108.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _107.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _107.DenomTrace;
                    fromJSON(object: any): _107.DenomTrace;
                    toJSON(message: _107.DenomTrace): unknown;
                    fromPartial(object: Partial<_107.DenomTrace>): _107.DenomTrace;
                    fromAmino(object: _107.DenomTraceAmino): _107.DenomTrace;
                    toAmino(message: _107.DenomTrace): _107.DenomTraceAmino;
                    fromAminoMsg(object: _107.DenomTraceAminoMsg): _107.DenomTrace;
                    toAminoMsg(message: _107.DenomTrace): _107.DenomTraceAminoMsg;
                    fromProtoMsg(message: _107.DenomTraceProtoMsg): _107.DenomTrace;
                    toProto(message: _107.DenomTrace): Uint8Array;
                    toProtoMsg(message: _107.DenomTrace): _107.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _107.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _107.Params;
                    fromJSON(object: any): _107.Params;
                    toJSON(message: _107.Params): unknown;
                    fromPartial(object: Partial<_107.Params>): _107.Params;
                    fromAmino(object: _107.ParamsAmino): _107.Params;
                    toAmino(message: _107.Params): _107.ParamsAmino;
                    fromAminoMsg(object: _107.ParamsAminoMsg): _107.Params;
                    toAminoMsg(message: _107.Params): _107.ParamsAminoMsg;
                    fromProtoMsg(message: _107.ParamsProtoMsg): _107.Params;
                    toProto(message: _107.Params): Uint8Array;
                    toProtoMsg(message: _107.Params): _107.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _106.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _106.QueryDenomTraceRequest;
                    fromJSON(object: any): _106.QueryDenomTraceRequest;
                    toJSON(message: _106.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_106.QueryDenomTraceRequest>): _106.QueryDenomTraceRequest;
                    fromAmino(object: _106.QueryDenomTraceRequestAmino): _106.QueryDenomTraceRequest;
                    toAmino(message: _106.QueryDenomTraceRequest): _106.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _106.QueryDenomTraceRequestAminoMsg): _106.QueryDenomTraceRequest;
                    toAminoMsg(message: _106.QueryDenomTraceRequest): _106.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _106.QueryDenomTraceRequestProtoMsg): _106.QueryDenomTraceRequest;
                    toProto(message: _106.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _106.QueryDenomTraceRequest): _106.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _106.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _106.QueryDenomTraceResponse;
                    fromJSON(object: any): _106.QueryDenomTraceResponse;
                    toJSON(message: _106.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_106.QueryDenomTraceResponse>): _106.QueryDenomTraceResponse;
                    fromAmino(object: _106.QueryDenomTraceResponseAmino): _106.QueryDenomTraceResponse;
                    toAmino(message: _106.QueryDenomTraceResponse): _106.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _106.QueryDenomTraceResponseAminoMsg): _106.QueryDenomTraceResponse;
                    toAminoMsg(message: _106.QueryDenomTraceResponse): _106.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _106.QueryDenomTraceResponseProtoMsg): _106.QueryDenomTraceResponse;
                    toProto(message: _106.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _106.QueryDenomTraceResponse): _106.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _106.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _106.QueryDenomTracesRequest;
                    fromJSON(object: any): _106.QueryDenomTracesRequest;
                    toJSON(message: _106.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_106.QueryDenomTracesRequest>): _106.QueryDenomTracesRequest;
                    fromAmino(object: _106.QueryDenomTracesRequestAmino): _106.QueryDenomTracesRequest;
                    toAmino(message: _106.QueryDenomTracesRequest): _106.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _106.QueryDenomTracesRequestAminoMsg): _106.QueryDenomTracesRequest;
                    toAminoMsg(message: _106.QueryDenomTracesRequest): _106.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _106.QueryDenomTracesRequestProtoMsg): _106.QueryDenomTracesRequest;
                    toProto(message: _106.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _106.QueryDenomTracesRequest): _106.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _106.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _106.QueryDenomTracesResponse;
                    fromJSON(object: any): _106.QueryDenomTracesResponse;
                    toJSON(message: _106.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_106.QueryDenomTracesResponse>): _106.QueryDenomTracesResponse;
                    fromAmino(object: _106.QueryDenomTracesResponseAmino): _106.QueryDenomTracesResponse;
                    toAmino(message: _106.QueryDenomTracesResponse): _106.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _106.QueryDenomTracesResponseAminoMsg): _106.QueryDenomTracesResponse;
                    toAminoMsg(message: _106.QueryDenomTracesResponse): _106.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _106.QueryDenomTracesResponseProtoMsg): _106.QueryDenomTracesResponse;
                    toProto(message: _106.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _106.QueryDenomTracesResponse): _106.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _106.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _106.QueryParamsRequest;
                    fromJSON(_: any): _106.QueryParamsRequest;
                    toJSON(_: _106.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_106.QueryParamsRequest>): _106.QueryParamsRequest;
                    fromAmino(_: _106.QueryParamsRequestAmino): _106.QueryParamsRequest;
                    toAmino(_: _106.QueryParamsRequest): _106.QueryParamsRequestAmino;
                    fromAminoMsg(object: _106.QueryParamsRequestAminoMsg): _106.QueryParamsRequest;
                    toAminoMsg(message: _106.QueryParamsRequest): _106.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _106.QueryParamsRequestProtoMsg): _106.QueryParamsRequest;
                    toProto(message: _106.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _106.QueryParamsRequest): _106.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _106.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _106.QueryParamsResponse;
                    fromJSON(object: any): _106.QueryParamsResponse;
                    toJSON(message: _106.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_106.QueryParamsResponse>): _106.QueryParamsResponse;
                    fromAmino(object: _106.QueryParamsResponseAmino): _106.QueryParamsResponse;
                    toAmino(message: _106.QueryParamsResponse): _106.QueryParamsResponseAmino;
                    fromAminoMsg(object: _106.QueryParamsResponseAminoMsg): _106.QueryParamsResponse;
                    toAminoMsg(message: _106.QueryParamsResponse): _106.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _106.QueryParamsResponseProtoMsg): _106.QueryParamsResponse;
                    toProto(message: _106.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _106.QueryParamsResponse): _106.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _106.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _106.QueryDenomHashRequest;
                    fromJSON(object: any): _106.QueryDenomHashRequest;
                    toJSON(message: _106.QueryDenomHashRequest): unknown;
                    fromPartial(object: Partial<_106.QueryDenomHashRequest>): _106.QueryDenomHashRequest;
                    fromAmino(object: _106.QueryDenomHashRequestAmino): _106.QueryDenomHashRequest;
                    toAmino(message: _106.QueryDenomHashRequest): _106.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _106.QueryDenomHashRequestAminoMsg): _106.QueryDenomHashRequest;
                    toAminoMsg(message: _106.QueryDenomHashRequest): _106.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _106.QueryDenomHashRequestProtoMsg): _106.QueryDenomHashRequest;
                    toProto(message: _106.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _106.QueryDenomHashRequest): _106.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _106.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _106.QueryDenomHashResponse;
                    fromJSON(object: any): _106.QueryDenomHashResponse;
                    toJSON(message: _106.QueryDenomHashResponse): unknown;
                    fromPartial(object: Partial<_106.QueryDenomHashResponse>): _106.QueryDenomHashResponse;
                    fromAmino(object: _106.QueryDenomHashResponseAmino): _106.QueryDenomHashResponse;
                    toAmino(message: _106.QueryDenomHashResponse): _106.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _106.QueryDenomHashResponseAminoMsg): _106.QueryDenomHashResponse;
                    toAminoMsg(message: _106.QueryDenomHashResponse): _106.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _106.QueryDenomHashResponseProtoMsg): _106.QueryDenomHashResponse;
                    toProto(message: _106.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _106.QueryDenomHashResponse): _106.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _106.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _106.QueryEscrowAddressRequest;
                    fromJSON(object: any): _106.QueryEscrowAddressRequest;
                    toJSON(message: _106.QueryEscrowAddressRequest): unknown;
                    fromPartial(object: Partial<_106.QueryEscrowAddressRequest>): _106.QueryEscrowAddressRequest;
                    fromAmino(object: _106.QueryEscrowAddressRequestAmino): _106.QueryEscrowAddressRequest;
                    toAmino(message: _106.QueryEscrowAddressRequest): _106.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _106.QueryEscrowAddressRequestAminoMsg): _106.QueryEscrowAddressRequest;
                    toAminoMsg(message: _106.QueryEscrowAddressRequest): _106.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _106.QueryEscrowAddressRequestProtoMsg): _106.QueryEscrowAddressRequest;
                    toProto(message: _106.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _106.QueryEscrowAddressRequest): _106.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _106.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _106.QueryEscrowAddressResponse;
                    fromJSON(object: any): _106.QueryEscrowAddressResponse;
                    toJSON(message: _106.QueryEscrowAddressResponse): unknown;
                    fromPartial(object: Partial<_106.QueryEscrowAddressResponse>): _106.QueryEscrowAddressResponse;
                    fromAmino(object: _106.QueryEscrowAddressResponseAmino): _106.QueryEscrowAddressResponse;
                    toAmino(message: _106.QueryEscrowAddressResponse): _106.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _106.QueryEscrowAddressResponseAminoMsg): _106.QueryEscrowAddressResponse;
                    toAminoMsg(message: _106.QueryEscrowAddressResponse): _106.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _106.QueryEscrowAddressResponseProtoMsg): _106.QueryEscrowAddressResponse;
                    toProto(message: _106.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _106.QueryEscrowAddressResponse): _106.QueryEscrowAddressResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _105.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _105.GenesisState;
                    fromJSON(object: any): _105.GenesisState;
                    toJSON(message: _105.GenesisState): unknown;
                    fromPartial(object: Partial<_105.GenesisState>): _105.GenesisState;
                    fromAmino(object: _105.GenesisStateAmino): _105.GenesisState;
                    toAmino(message: _105.GenesisState): _105.GenesisStateAmino;
                    fromAminoMsg(object: _105.GenesisStateAminoMsg): _105.GenesisState;
                    toAminoMsg(message: _105.GenesisState): _105.GenesisStateAminoMsg;
                    fromProtoMsg(message: _105.GenesisStateProtoMsg): _105.GenesisState;
                    toProto(message: _105.GenesisState): Uint8Array;
                    toProtoMsg(message: _105.GenesisState): _105.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace client {
            const v1: {
                MsgClientImpl: typeof _240.MsgClientImpl;
                QueryClientImpl: typeof _238.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _111.QueryClientStateRequest): Promise<_111.QueryClientStateResponse>;
                    clientStates(request?: _111.QueryClientStatesRequest | undefined): Promise<_111.QueryClientStatesResponse>;
                    consensusState(request: _111.QueryConsensusStateRequest): Promise<_111.QueryConsensusStateResponse>;
                    consensusStates(request: _111.QueryConsensusStatesRequest): Promise<_111.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _111.QueryConsensusStateHeightsRequest): Promise<_111.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _111.QueryClientStatusRequest): Promise<_111.QueryClientStatusResponse>;
                    clientParams(request?: _111.QueryClientParamsRequest | undefined): Promise<_111.QueryClientParamsResponse>;
                    upgradedClientState(request?: _111.QueryUpgradedClientStateRequest | undefined): Promise<_111.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _111.QueryUpgradedConsensusStateRequest | undefined): Promise<_111.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _236.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _112.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _112.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _112.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _112.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _112.MsgCreateClient): {
                            typeUrl: string;
                            value: _112.MsgCreateClient;
                        };
                        updateClient(value: _112.MsgUpdateClient): {
                            typeUrl: string;
                            value: _112.MsgUpdateClient;
                        };
                        upgradeClient(value: _112.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _112.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _112.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _112.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _112.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _112.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _112.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _112.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _112.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _112.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _112.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _112.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _112.MsgCreateClient): {
                            typeUrl: string;
                            value: _112.MsgCreateClient;
                        };
                        updateClient(value: _112.MsgUpdateClient): {
                            typeUrl: string;
                            value: _112.MsgUpdateClient;
                        };
                        upgradeClient(value: _112.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _112.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _112.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _112.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _112.MsgCreateClient) => _112.MsgCreateClientAmino;
                        fromAmino: (object: _112.MsgCreateClientAmino) => _112.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _112.MsgUpdateClient) => _112.MsgUpdateClientAmino;
                        fromAmino: (object: _112.MsgUpdateClientAmino) => _112.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _112.MsgUpgradeClient) => _112.MsgUpgradeClientAmino;
                        fromAmino: (object: _112.MsgUpgradeClientAmino) => _112.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _112.MsgSubmitMisbehaviour) => _112.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _112.MsgSubmitMisbehaviourAmino) => _112.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _112.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _112.MsgCreateClient;
                    fromJSON(object: any): _112.MsgCreateClient;
                    toJSON(message: _112.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_112.MsgCreateClient>): _112.MsgCreateClient;
                    fromAmino(object: _112.MsgCreateClientAmino): _112.MsgCreateClient;
                    toAmino(message: _112.MsgCreateClient): _112.MsgCreateClientAmino;
                    fromAminoMsg(object: _112.MsgCreateClientAminoMsg): _112.MsgCreateClient;
                    toAminoMsg(message: _112.MsgCreateClient): _112.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _112.MsgCreateClientProtoMsg): _112.MsgCreateClient;
                    toProto(message: _112.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _112.MsgCreateClient): _112.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _112.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _112.MsgCreateClientResponse;
                    fromJSON(_: any): _112.MsgCreateClientResponse;
                    toJSON(_: _112.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_112.MsgCreateClientResponse>): _112.MsgCreateClientResponse;
                    fromAmino(_: _112.MsgCreateClientResponseAmino): _112.MsgCreateClientResponse;
                    toAmino(_: _112.MsgCreateClientResponse): _112.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _112.MsgCreateClientResponseAminoMsg): _112.MsgCreateClientResponse;
                    toAminoMsg(message: _112.MsgCreateClientResponse): _112.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgCreateClientResponseProtoMsg): _112.MsgCreateClientResponse;
                    toProto(message: _112.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgCreateClientResponse): _112.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _112.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _112.MsgUpdateClient;
                    fromJSON(object: any): _112.MsgUpdateClient;
                    toJSON(message: _112.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_112.MsgUpdateClient>): _112.MsgUpdateClient;
                    fromAmino(object: _112.MsgUpdateClientAmino): _112.MsgUpdateClient;
                    toAmino(message: _112.MsgUpdateClient): _112.MsgUpdateClientAmino;
                    fromAminoMsg(object: _112.MsgUpdateClientAminoMsg): _112.MsgUpdateClient;
                    toAminoMsg(message: _112.MsgUpdateClient): _112.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _112.MsgUpdateClientProtoMsg): _112.MsgUpdateClient;
                    toProto(message: _112.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _112.MsgUpdateClient): _112.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _112.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _112.MsgUpdateClientResponse;
                    fromJSON(_: any): _112.MsgUpdateClientResponse;
                    toJSON(_: _112.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_112.MsgUpdateClientResponse>): _112.MsgUpdateClientResponse;
                    fromAmino(_: _112.MsgUpdateClientResponseAmino): _112.MsgUpdateClientResponse;
                    toAmino(_: _112.MsgUpdateClientResponse): _112.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _112.MsgUpdateClientResponseAminoMsg): _112.MsgUpdateClientResponse;
                    toAminoMsg(message: _112.MsgUpdateClientResponse): _112.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgUpdateClientResponseProtoMsg): _112.MsgUpdateClientResponse;
                    toProto(message: _112.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgUpdateClientResponse): _112.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _112.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _112.MsgUpgradeClient;
                    fromJSON(object: any): _112.MsgUpgradeClient;
                    toJSON(message: _112.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_112.MsgUpgradeClient>): _112.MsgUpgradeClient;
                    fromAmino(object: _112.MsgUpgradeClientAmino): _112.MsgUpgradeClient;
                    toAmino(message: _112.MsgUpgradeClient): _112.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _112.MsgUpgradeClientAminoMsg): _112.MsgUpgradeClient;
                    toAminoMsg(message: _112.MsgUpgradeClient): _112.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _112.MsgUpgradeClientProtoMsg): _112.MsgUpgradeClient;
                    toProto(message: _112.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _112.MsgUpgradeClient): _112.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _112.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _112.MsgUpgradeClientResponse;
                    fromJSON(_: any): _112.MsgUpgradeClientResponse;
                    toJSON(_: _112.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_112.MsgUpgradeClientResponse>): _112.MsgUpgradeClientResponse;
                    fromAmino(_: _112.MsgUpgradeClientResponseAmino): _112.MsgUpgradeClientResponse;
                    toAmino(_: _112.MsgUpgradeClientResponse): _112.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _112.MsgUpgradeClientResponseAminoMsg): _112.MsgUpgradeClientResponse;
                    toAminoMsg(message: _112.MsgUpgradeClientResponse): _112.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgUpgradeClientResponseProtoMsg): _112.MsgUpgradeClientResponse;
                    toProto(message: _112.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgUpgradeClientResponse): _112.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _112.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _112.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _112.MsgSubmitMisbehaviour;
                    toJSON(message: _112.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_112.MsgSubmitMisbehaviour>): _112.MsgSubmitMisbehaviour;
                    fromAmino(object: _112.MsgSubmitMisbehaviourAmino): _112.MsgSubmitMisbehaviour;
                    toAmino(message: _112.MsgSubmitMisbehaviour): _112.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _112.MsgSubmitMisbehaviourAminoMsg): _112.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _112.MsgSubmitMisbehaviour): _112.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _112.MsgSubmitMisbehaviourProtoMsg): _112.MsgSubmitMisbehaviour;
                    toProto(message: _112.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _112.MsgSubmitMisbehaviour): _112.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _112.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _112.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _112.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _112.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_112.MsgSubmitMisbehaviourResponse>): _112.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _112.MsgSubmitMisbehaviourResponseAmino): _112.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _112.MsgSubmitMisbehaviourResponse): _112.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _112.MsgSubmitMisbehaviourResponseAminoMsg): _112.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _112.MsgSubmitMisbehaviourResponse): _112.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgSubmitMisbehaviourResponseProtoMsg): _112.MsgSubmitMisbehaviourResponse;
                    toProto(message: _112.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgSubmitMisbehaviourResponse): _112.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _111.QueryClientStateRequest;
                    fromJSON(object: any): _111.QueryClientStateRequest;
                    toJSON(message: _111.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_111.QueryClientStateRequest>): _111.QueryClientStateRequest;
                    fromAmino(object: _111.QueryClientStateRequestAmino): _111.QueryClientStateRequest;
                    toAmino(message: _111.QueryClientStateRequest): _111.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _111.QueryClientStateRequestAminoMsg): _111.QueryClientStateRequest;
                    toAminoMsg(message: _111.QueryClientStateRequest): _111.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryClientStateRequestProtoMsg): _111.QueryClientStateRequest;
                    toProto(message: _111.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryClientStateRequest): _111.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _111.QueryClientStateResponse;
                    fromJSON(object: any): _111.QueryClientStateResponse;
                    toJSON(message: _111.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_111.QueryClientStateResponse>): _111.QueryClientStateResponse;
                    fromAmino(object: _111.QueryClientStateResponseAmino): _111.QueryClientStateResponse;
                    toAmino(message: _111.QueryClientStateResponse): _111.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _111.QueryClientStateResponseAminoMsg): _111.QueryClientStateResponse;
                    toAminoMsg(message: _111.QueryClientStateResponse): _111.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryClientStateResponseProtoMsg): _111.QueryClientStateResponse;
                    toProto(message: _111.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryClientStateResponse): _111.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _111.QueryClientStatesRequest;
                    fromJSON(object: any): _111.QueryClientStatesRequest;
                    toJSON(message: _111.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_111.QueryClientStatesRequest>): _111.QueryClientStatesRequest;
                    fromAmino(object: _111.QueryClientStatesRequestAmino): _111.QueryClientStatesRequest;
                    toAmino(message: _111.QueryClientStatesRequest): _111.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _111.QueryClientStatesRequestAminoMsg): _111.QueryClientStatesRequest;
                    toAminoMsg(message: _111.QueryClientStatesRequest): _111.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryClientStatesRequestProtoMsg): _111.QueryClientStatesRequest;
                    toProto(message: _111.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryClientStatesRequest): _111.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _111.QueryClientStatesResponse;
                    fromJSON(object: any): _111.QueryClientStatesResponse;
                    toJSON(message: _111.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_111.QueryClientStatesResponse>): _111.QueryClientStatesResponse;
                    fromAmino(object: _111.QueryClientStatesResponseAmino): _111.QueryClientStatesResponse;
                    toAmino(message: _111.QueryClientStatesResponse): _111.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _111.QueryClientStatesResponseAminoMsg): _111.QueryClientStatesResponse;
                    toAminoMsg(message: _111.QueryClientStatesResponse): _111.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryClientStatesResponseProtoMsg): _111.QueryClientStatesResponse;
                    toProto(message: _111.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryClientStatesResponse): _111.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _111.QueryConsensusStateRequest;
                    fromJSON(object: any): _111.QueryConsensusStateRequest;
                    toJSON(message: _111.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_111.QueryConsensusStateRequest>): _111.QueryConsensusStateRequest;
                    fromAmino(object: _111.QueryConsensusStateRequestAmino): _111.QueryConsensusStateRequest;
                    toAmino(message: _111.QueryConsensusStateRequest): _111.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _111.QueryConsensusStateRequestAminoMsg): _111.QueryConsensusStateRequest;
                    toAminoMsg(message: _111.QueryConsensusStateRequest): _111.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryConsensusStateRequestProtoMsg): _111.QueryConsensusStateRequest;
                    toProto(message: _111.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryConsensusStateRequest): _111.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _111.QueryConsensusStateResponse;
                    fromJSON(object: any): _111.QueryConsensusStateResponse;
                    toJSON(message: _111.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_111.QueryConsensusStateResponse>): _111.QueryConsensusStateResponse;
                    fromAmino(object: _111.QueryConsensusStateResponseAmino): _111.QueryConsensusStateResponse;
                    toAmino(message: _111.QueryConsensusStateResponse): _111.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _111.QueryConsensusStateResponseAminoMsg): _111.QueryConsensusStateResponse;
                    toAminoMsg(message: _111.QueryConsensusStateResponse): _111.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryConsensusStateResponseProtoMsg): _111.QueryConsensusStateResponse;
                    toProto(message: _111.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryConsensusStateResponse): _111.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _111.QueryConsensusStatesRequest;
                    fromJSON(object: any): _111.QueryConsensusStatesRequest;
                    toJSON(message: _111.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_111.QueryConsensusStatesRequest>): _111.QueryConsensusStatesRequest;
                    fromAmino(object: _111.QueryConsensusStatesRequestAmino): _111.QueryConsensusStatesRequest;
                    toAmino(message: _111.QueryConsensusStatesRequest): _111.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _111.QueryConsensusStatesRequestAminoMsg): _111.QueryConsensusStatesRequest;
                    toAminoMsg(message: _111.QueryConsensusStatesRequest): _111.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryConsensusStatesRequestProtoMsg): _111.QueryConsensusStatesRequest;
                    toProto(message: _111.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryConsensusStatesRequest): _111.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _111.QueryConsensusStatesResponse;
                    fromJSON(object: any): _111.QueryConsensusStatesResponse;
                    toJSON(message: _111.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_111.QueryConsensusStatesResponse>): _111.QueryConsensusStatesResponse;
                    fromAmino(object: _111.QueryConsensusStatesResponseAmino): _111.QueryConsensusStatesResponse;
                    toAmino(message: _111.QueryConsensusStatesResponse): _111.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _111.QueryConsensusStatesResponseAminoMsg): _111.QueryConsensusStatesResponse;
                    toAminoMsg(message: _111.QueryConsensusStatesResponse): _111.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryConsensusStatesResponseProtoMsg): _111.QueryConsensusStatesResponse;
                    toProto(message: _111.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryConsensusStatesResponse): _111.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _111.QueryConsensusStateHeightsRequest;
                    fromJSON(object: any): _111.QueryConsensusStateHeightsRequest;
                    toJSON(message: _111.QueryConsensusStateHeightsRequest): unknown;
                    fromPartial(object: Partial<_111.QueryConsensusStateHeightsRequest>): _111.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _111.QueryConsensusStateHeightsRequestAmino): _111.QueryConsensusStateHeightsRequest;
                    toAmino(message: _111.QueryConsensusStateHeightsRequest): _111.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _111.QueryConsensusStateHeightsRequestAminoMsg): _111.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _111.QueryConsensusStateHeightsRequest): _111.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryConsensusStateHeightsRequestProtoMsg): _111.QueryConsensusStateHeightsRequest;
                    toProto(message: _111.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryConsensusStateHeightsRequest): _111.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _111.QueryConsensusStateHeightsResponse;
                    fromJSON(object: any): _111.QueryConsensusStateHeightsResponse;
                    toJSON(message: _111.QueryConsensusStateHeightsResponse): unknown;
                    fromPartial(object: Partial<_111.QueryConsensusStateHeightsResponse>): _111.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _111.QueryConsensusStateHeightsResponseAmino): _111.QueryConsensusStateHeightsResponse;
                    toAmino(message: _111.QueryConsensusStateHeightsResponse): _111.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _111.QueryConsensusStateHeightsResponseAminoMsg): _111.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _111.QueryConsensusStateHeightsResponse): _111.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryConsensusStateHeightsResponseProtoMsg): _111.QueryConsensusStateHeightsResponse;
                    toProto(message: _111.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryConsensusStateHeightsResponse): _111.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _111.QueryClientStatusRequest;
                    fromJSON(object: any): _111.QueryClientStatusRequest;
                    toJSON(message: _111.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_111.QueryClientStatusRequest>): _111.QueryClientStatusRequest;
                    fromAmino(object: _111.QueryClientStatusRequestAmino): _111.QueryClientStatusRequest;
                    toAmino(message: _111.QueryClientStatusRequest): _111.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _111.QueryClientStatusRequestAminoMsg): _111.QueryClientStatusRequest;
                    toAminoMsg(message: _111.QueryClientStatusRequest): _111.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryClientStatusRequestProtoMsg): _111.QueryClientStatusRequest;
                    toProto(message: _111.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryClientStatusRequest): _111.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _111.QueryClientStatusResponse;
                    fromJSON(object: any): _111.QueryClientStatusResponse;
                    toJSON(message: _111.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_111.QueryClientStatusResponse>): _111.QueryClientStatusResponse;
                    fromAmino(object: _111.QueryClientStatusResponseAmino): _111.QueryClientStatusResponse;
                    toAmino(message: _111.QueryClientStatusResponse): _111.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _111.QueryClientStatusResponseAminoMsg): _111.QueryClientStatusResponse;
                    toAminoMsg(message: _111.QueryClientStatusResponse): _111.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryClientStatusResponseProtoMsg): _111.QueryClientStatusResponse;
                    toProto(message: _111.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryClientStatusResponse): _111.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _111.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _111.QueryClientParamsRequest;
                    fromJSON(_: any): _111.QueryClientParamsRequest;
                    toJSON(_: _111.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_111.QueryClientParamsRequest>): _111.QueryClientParamsRequest;
                    fromAmino(_: _111.QueryClientParamsRequestAmino): _111.QueryClientParamsRequest;
                    toAmino(_: _111.QueryClientParamsRequest): _111.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _111.QueryClientParamsRequestAminoMsg): _111.QueryClientParamsRequest;
                    toAminoMsg(message: _111.QueryClientParamsRequest): _111.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryClientParamsRequestProtoMsg): _111.QueryClientParamsRequest;
                    toProto(message: _111.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryClientParamsRequest): _111.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _111.QueryClientParamsResponse;
                    fromJSON(object: any): _111.QueryClientParamsResponse;
                    toJSON(message: _111.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_111.QueryClientParamsResponse>): _111.QueryClientParamsResponse;
                    fromAmino(object: _111.QueryClientParamsResponseAmino): _111.QueryClientParamsResponse;
                    toAmino(message: _111.QueryClientParamsResponse): _111.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _111.QueryClientParamsResponseAminoMsg): _111.QueryClientParamsResponse;
                    toAminoMsg(message: _111.QueryClientParamsResponse): _111.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryClientParamsResponseProtoMsg): _111.QueryClientParamsResponse;
                    toProto(message: _111.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryClientParamsResponse): _111.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _111.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _111.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _111.QueryUpgradedClientStateRequest;
                    toJSON(_: _111.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_111.QueryUpgradedClientStateRequest>): _111.QueryUpgradedClientStateRequest;
                    fromAmino(_: _111.QueryUpgradedClientStateRequestAmino): _111.QueryUpgradedClientStateRequest;
                    toAmino(_: _111.QueryUpgradedClientStateRequest): _111.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _111.QueryUpgradedClientStateRequestAminoMsg): _111.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _111.QueryUpgradedClientStateRequest): _111.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryUpgradedClientStateRequestProtoMsg): _111.QueryUpgradedClientStateRequest;
                    toProto(message: _111.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryUpgradedClientStateRequest): _111.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _111.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _111.QueryUpgradedClientStateResponse;
                    toJSON(message: _111.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_111.QueryUpgradedClientStateResponse>): _111.QueryUpgradedClientStateResponse;
                    fromAmino(object: _111.QueryUpgradedClientStateResponseAmino): _111.QueryUpgradedClientStateResponse;
                    toAmino(message: _111.QueryUpgradedClientStateResponse): _111.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _111.QueryUpgradedClientStateResponseAminoMsg): _111.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _111.QueryUpgradedClientStateResponse): _111.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryUpgradedClientStateResponseProtoMsg): _111.QueryUpgradedClientStateResponse;
                    toProto(message: _111.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryUpgradedClientStateResponse): _111.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _111.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _111.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _111.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _111.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_111.QueryUpgradedConsensusStateRequest>): _111.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _111.QueryUpgradedConsensusStateRequestAmino): _111.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _111.QueryUpgradedConsensusStateRequest): _111.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _111.QueryUpgradedConsensusStateRequestAminoMsg): _111.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _111.QueryUpgradedConsensusStateRequest): _111.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryUpgradedConsensusStateRequestProtoMsg): _111.QueryUpgradedConsensusStateRequest;
                    toProto(message: _111.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryUpgradedConsensusStateRequest): _111.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _111.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _111.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _111.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_111.QueryUpgradedConsensusStateResponse>): _111.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _111.QueryUpgradedConsensusStateResponseAmino): _111.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _111.QueryUpgradedConsensusStateResponse): _111.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _111.QueryUpgradedConsensusStateResponseAminoMsg): _111.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _111.QueryUpgradedConsensusStateResponse): _111.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryUpgradedConsensusStateResponseProtoMsg): _111.QueryUpgradedConsensusStateResponse;
                    toProto(message: _111.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryUpgradedConsensusStateResponse): _111.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _110.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _110.GenesisState;
                    fromJSON(object: any): _110.GenesisState;
                    toJSON(message: _110.GenesisState): unknown;
                    fromPartial(object: Partial<_110.GenesisState>): _110.GenesisState;
                    fromAmino(object: _110.GenesisStateAmino): _110.GenesisState;
                    toAmino(message: _110.GenesisState): _110.GenesisStateAmino;
                    fromAminoMsg(object: _110.GenesisStateAminoMsg): _110.GenesisState;
                    toAminoMsg(message: _110.GenesisState): _110.GenesisStateAminoMsg;
                    fromProtoMsg(message: _110.GenesisStateProtoMsg): _110.GenesisState;
                    toProto(message: _110.GenesisState): Uint8Array;
                    toProtoMsg(message: _110.GenesisState): _110.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _110.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _110.GenesisMetadata;
                    fromJSON(object: any): _110.GenesisMetadata;
                    toJSON(message: _110.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_110.GenesisMetadata>): _110.GenesisMetadata;
                    fromAmino(object: _110.GenesisMetadataAmino): _110.GenesisMetadata;
                    toAmino(message: _110.GenesisMetadata): _110.GenesisMetadataAmino;
                    fromAminoMsg(object: _110.GenesisMetadataAminoMsg): _110.GenesisMetadata;
                    toAminoMsg(message: _110.GenesisMetadata): _110.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _110.GenesisMetadataProtoMsg): _110.GenesisMetadata;
                    toProto(message: _110.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _110.GenesisMetadata): _110.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _110.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _110.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _110.IdentifiedGenesisMetadata;
                    toJSON(message: _110.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_110.IdentifiedGenesisMetadata>): _110.IdentifiedGenesisMetadata;
                    fromAmino(object: _110.IdentifiedGenesisMetadataAmino): _110.IdentifiedGenesisMetadata;
                    toAmino(message: _110.IdentifiedGenesisMetadata): _110.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _110.IdentifiedGenesisMetadataAminoMsg): _110.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _110.IdentifiedGenesisMetadata): _110.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _110.IdentifiedGenesisMetadataProtoMsg): _110.IdentifiedGenesisMetadata;
                    toProto(message: _110.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _110.IdentifiedGenesisMetadata): _110.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _109.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _109.IdentifiedClientState;
                    fromJSON(object: any): _109.IdentifiedClientState;
                    toJSON(message: _109.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_109.IdentifiedClientState>): _109.IdentifiedClientState;
                    fromAmino(object: _109.IdentifiedClientStateAmino): _109.IdentifiedClientState;
                    toAmino(message: _109.IdentifiedClientState): _109.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _109.IdentifiedClientStateAminoMsg): _109.IdentifiedClientState;
                    toAminoMsg(message: _109.IdentifiedClientState): _109.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _109.IdentifiedClientStateProtoMsg): _109.IdentifiedClientState;
                    toProto(message: _109.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _109.IdentifiedClientState): _109.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _109.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _109.ConsensusStateWithHeight;
                    fromJSON(object: any): _109.ConsensusStateWithHeight;
                    toJSON(message: _109.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_109.ConsensusStateWithHeight>): _109.ConsensusStateWithHeight;
                    fromAmino(object: _109.ConsensusStateWithHeightAmino): _109.ConsensusStateWithHeight;
                    toAmino(message: _109.ConsensusStateWithHeight): _109.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _109.ConsensusStateWithHeightAminoMsg): _109.ConsensusStateWithHeight;
                    toAminoMsg(message: _109.ConsensusStateWithHeight): _109.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _109.ConsensusStateWithHeightProtoMsg): _109.ConsensusStateWithHeight;
                    toProto(message: _109.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _109.ConsensusStateWithHeight): _109.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _109.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _109.ClientConsensusStates;
                    fromJSON(object: any): _109.ClientConsensusStates;
                    toJSON(message: _109.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_109.ClientConsensusStates>): _109.ClientConsensusStates;
                    fromAmino(object: _109.ClientConsensusStatesAmino): _109.ClientConsensusStates;
                    toAmino(message: _109.ClientConsensusStates): _109.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _109.ClientConsensusStatesAminoMsg): _109.ClientConsensusStates;
                    toAminoMsg(message: _109.ClientConsensusStates): _109.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _109.ClientConsensusStatesProtoMsg): _109.ClientConsensusStates;
                    toProto(message: _109.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _109.ClientConsensusStates): _109.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _109.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _109.ClientUpdateProposal;
                    fromJSON(object: any): _109.ClientUpdateProposal;
                    toJSON(message: _109.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_109.ClientUpdateProposal>): _109.ClientUpdateProposal;
                    fromAmino(object: _109.ClientUpdateProposalAmino): _109.ClientUpdateProposal;
                    toAmino(message: _109.ClientUpdateProposal): _109.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _109.ClientUpdateProposalAminoMsg): _109.ClientUpdateProposal;
                    toAminoMsg(message: _109.ClientUpdateProposal): _109.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _109.ClientUpdateProposalProtoMsg): _109.ClientUpdateProposal;
                    toProto(message: _109.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _109.ClientUpdateProposal): _109.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _109.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _109.UpgradeProposal;
                    fromJSON(object: any): _109.UpgradeProposal;
                    toJSON(message: _109.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_109.UpgradeProposal>): _109.UpgradeProposal;
                    fromAmino(object: _109.UpgradeProposalAmino): _109.UpgradeProposal;
                    toAmino(message: _109.UpgradeProposal): _109.UpgradeProposalAmino;
                    fromAminoMsg(object: _109.UpgradeProposalAminoMsg): _109.UpgradeProposal;
                    toAminoMsg(message: _109.UpgradeProposal): _109.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _109.UpgradeProposalProtoMsg): _109.UpgradeProposal;
                    toProto(message: _109.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _109.UpgradeProposal): _109.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _109.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _109.Height;
                    fromJSON(object: any): _109.Height;
                    toJSON(message: _109.Height): unknown;
                    fromPartial(object: Partial<_109.Height>): _109.Height;
                    fromAmino(object: _109.HeightAmino): _109.Height;
                    toAmino(message: _109.Height): _109.HeightAmino;
                    fromAminoMsg(object: _109.HeightAminoMsg): _109.Height;
                    toAminoMsg(message: _109.Height): _109.HeightAminoMsg;
                    fromProtoMsg(message: _109.HeightProtoMsg): _109.Height;
                    toProto(message: _109.Height): Uint8Array;
                    toProtoMsg(message: _109.Height): _109.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _109.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number | undefined): _109.Params;
                    fromJSON(object: any): _109.Params;
                    toJSON(message: _109.Params): unknown;
                    fromPartial(object: Partial<_109.Params>): _109.Params;
                    fromAmino(object: _109.ParamsAmino): _109.Params;
                    toAmino(message: _109.Params): _109.ParamsAmino;
                    fromAminoMsg(object: _109.ParamsAminoMsg): _109.Params;
                    toAminoMsg(message: _109.Params): _109.ParamsAminoMsg;
                    fromProtoMsg(message: _109.ParamsProtoMsg): _109.Params;
                    toProto(message: _109.Params): Uint8Array;
                    toProtoMsg(message: _109.Params): _109.ParamsProtoMsg;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _239.MsgClientImpl;
                    };
                };
                core: {
                    client: {
                        v1: _240.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest | undefined): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest | undefined): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest | undefined): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest | undefined): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest | undefined): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest | undefined): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest | undefined): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest | undefined): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest | undefined): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest | undefined): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest | undefined): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest | undefined): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest | undefined): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest | undefined): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest | undefined): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest | undefined): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest | undefined): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest | undefined): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest | undefined): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest | undefined): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest | undefined): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest | undefined): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest | undefined): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest | undefined): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest | undefined): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest | undefined): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest | undefined): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _106.QueryDenomTraceRequest): Promise<_106.QueryDenomTraceResponse>;
                            denomTraces(request?: _106.QueryDenomTracesRequest | undefined): Promise<_106.QueryDenomTracesResponse>;
                            params(request?: _106.QueryParamsRequest | undefined): Promise<_106.QueryParamsResponse>;
                            denomHash(request: _106.QueryDenomHashRequest): Promise<_106.QueryDenomHashResponse>;
                            escrowAddress(request: _106.QueryEscrowAddressRequest): Promise<_106.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    client: {
                        v1: {
                            clientState(request: _111.QueryClientStateRequest): Promise<_111.QueryClientStateResponse>;
                            clientStates(request?: _111.QueryClientStatesRequest | undefined): Promise<_111.QueryClientStatesResponse>;
                            consensusState(request: _111.QueryConsensusStateRequest): Promise<_111.QueryConsensusStateResponse>;
                            consensusStates(request: _111.QueryConsensusStatesRequest): Promise<_111.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _111.QueryConsensusStateHeightsRequest): Promise<_111.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _111.QueryClientStatusRequest): Promise<_111.QueryClientStatusResponse>;
                            clientParams(request?: _111.QueryClientParamsRequest | undefined): Promise<_111.QueryClientParamsResponse>;
                            upgradedClientState(request?: _111.QueryUpgradedClientStateRequest | undefined): Promise<_111.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _111.QueryUpgradedConsensusStateRequest | undefined): Promise<_111.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _235.LCDQueryClient;
                    };
                };
                core: {
                    client: {
                        v1: _236.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
