import * as _68 from "./applications/transfer/v1/genesis";
import * as _69 from "./applications/transfer/v1/query";
import * as _70 from "./applications/transfer/v1/transfer";
import * as _71 from "./applications/transfer/v1/tx";
import * as _72 from "./core/client/v1/client";
import * as _73 from "./core/client/v1/genesis";
import * as _74 from "./core/client/v1/query";
import * as _75 from "./core/client/v1/tx";
import * as _181 from "./applications/transfer/v1/query.lcd";
import * as _182 from "./core/client/v1/query.lcd";
import * as _183 from "./applications/transfer/v1/query.rpc.Query";
import * as _184 from "./core/client/v1/query.rpc.Query";
import * as _185 from "./applications/transfer/v1/tx.rpc.msg";
import * as _186 from "./core/client/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _185.MsgClientImpl;
                QueryClientImpl: typeof _183.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _69.QueryDenomTraceRequest): Promise<_69.QueryDenomTraceResponse>;
                    denomTraces(request?: _69.QueryDenomTracesRequest): Promise<_69.QueryDenomTracesResponse>;
                    params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                    denomHash(request: _69.QueryDenomHashRequest): Promise<_69.QueryDenomHashResponse>;
                    escrowAddress(request: _69.QueryEscrowAddressRequest): Promise<_69.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _181.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _71.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _71.MsgTransfer): {
                            typeUrl: string;
                            value: _71.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _71.MsgTransfer): {
                            typeUrl: string;
                            value: _71.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _71.MsgTransfer) => _71.MsgTransferAmino;
                        fromAmino: (object: _71.MsgTransferAmino) => _71.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _71.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.MsgTransfer;
                    fromPartial(object: Partial<_71.MsgTransfer>): _71.MsgTransfer;
                    fromAmino(object: _71.MsgTransferAmino): _71.MsgTransfer;
                    toAmino(message: _71.MsgTransfer): _71.MsgTransferAmino;
                    fromAminoMsg(object: _71.MsgTransferAminoMsg): _71.MsgTransfer;
                    toAminoMsg(message: _71.MsgTransfer): _71.MsgTransferAminoMsg;
                    fromProtoMsg(message: _71.MsgTransferProtoMsg): _71.MsgTransfer;
                    toProto(message: _71.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _71.MsgTransfer): _71.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(_: _71.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.MsgTransferResponse;
                    fromPartial(_: Partial<_71.MsgTransferResponse>): _71.MsgTransferResponse;
                    fromAmino(_: _71.MsgTransferResponseAmino): _71.MsgTransferResponse;
                    toAmino(_: _71.MsgTransferResponse): _71.MsgTransferResponseAmino;
                    fromAminoMsg(object: _71.MsgTransferResponseAminoMsg): _71.MsgTransferResponse;
                    toAminoMsg(message: _71.MsgTransferResponse): _71.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _71.MsgTransferResponseProtoMsg): _71.MsgTransferResponse;
                    toProto(message: _71.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _71.MsgTransferResponse): _71.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _70.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.DenomTrace;
                    fromPartial(object: Partial<_70.DenomTrace>): _70.DenomTrace;
                    fromAmino(object: _70.DenomTraceAmino): _70.DenomTrace;
                    toAmino(message: _70.DenomTrace): _70.DenomTraceAmino;
                    fromAminoMsg(object: _70.DenomTraceAminoMsg): _70.DenomTrace;
                    toAminoMsg(message: _70.DenomTrace): _70.DenomTraceAminoMsg;
                    fromProtoMsg(message: _70.DenomTraceProtoMsg): _70.DenomTrace;
                    toProto(message: _70.DenomTrace): Uint8Array;
                    toProtoMsg(message: _70.DenomTrace): _70.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _70.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.Params;
                    fromPartial(object: Partial<_70.Params>): _70.Params;
                    fromAmino(object: _70.ParamsAmino): _70.Params;
                    toAmino(message: _70.Params): _70.ParamsAmino;
                    fromAminoMsg(object: _70.ParamsAminoMsg): _70.Params;
                    toAminoMsg(message: _70.Params): _70.ParamsAminoMsg;
                    fromProtoMsg(message: _70.ParamsProtoMsg): _70.Params;
                    toProto(message: _70.Params): Uint8Array;
                    toProtoMsg(message: _70.Params): _70.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _69.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_69.QueryDenomTraceRequest>): _69.QueryDenomTraceRequest;
                    fromAmino(object: _69.QueryDenomTraceRequestAmino): _69.QueryDenomTraceRequest;
                    toAmino(message: _69.QueryDenomTraceRequest): _69.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _69.QueryDenomTraceRequestAminoMsg): _69.QueryDenomTraceRequest;
                    toAminoMsg(message: _69.QueryDenomTraceRequest): _69.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryDenomTraceRequestProtoMsg): _69.QueryDenomTraceRequest;
                    toProto(message: _69.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryDenomTraceRequest): _69.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _69.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_69.QueryDenomTraceResponse>): _69.QueryDenomTraceResponse;
                    fromAmino(object: _69.QueryDenomTraceResponseAmino): _69.QueryDenomTraceResponse;
                    toAmino(message: _69.QueryDenomTraceResponse): _69.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _69.QueryDenomTraceResponseAminoMsg): _69.QueryDenomTraceResponse;
                    toAminoMsg(message: _69.QueryDenomTraceResponse): _69.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryDenomTraceResponseProtoMsg): _69.QueryDenomTraceResponse;
                    toProto(message: _69.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryDenomTraceResponse): _69.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _69.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_69.QueryDenomTracesRequest>): _69.QueryDenomTracesRequest;
                    fromAmino(object: _69.QueryDenomTracesRequestAmino): _69.QueryDenomTracesRequest;
                    toAmino(message: _69.QueryDenomTracesRequest): _69.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _69.QueryDenomTracesRequestAminoMsg): _69.QueryDenomTracesRequest;
                    toAminoMsg(message: _69.QueryDenomTracesRequest): _69.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryDenomTracesRequestProtoMsg): _69.QueryDenomTracesRequest;
                    toProto(message: _69.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryDenomTracesRequest): _69.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _69.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_69.QueryDenomTracesResponse>): _69.QueryDenomTracesResponse;
                    fromAmino(object: _69.QueryDenomTracesResponseAmino): _69.QueryDenomTracesResponse;
                    toAmino(message: _69.QueryDenomTracesResponse): _69.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _69.QueryDenomTracesResponseAminoMsg): _69.QueryDenomTracesResponse;
                    toAminoMsg(message: _69.QueryDenomTracesResponse): _69.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryDenomTracesResponseProtoMsg): _69.QueryDenomTracesResponse;
                    toProto(message: _69.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryDenomTracesResponse): _69.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _69.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryParamsRequest;
                    fromPartial(_: Partial<_69.QueryParamsRequest>): _69.QueryParamsRequest;
                    fromAmino(_: _69.QueryParamsRequestAmino): _69.QueryParamsRequest;
                    toAmino(_: _69.QueryParamsRequest): _69.QueryParamsRequestAmino;
                    fromAminoMsg(object: _69.QueryParamsRequestAminoMsg): _69.QueryParamsRequest;
                    toAminoMsg(message: _69.QueryParamsRequest): _69.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryParamsRequestProtoMsg): _69.QueryParamsRequest;
                    toProto(message: _69.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryParamsRequest): _69.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _69.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryParamsResponse;
                    fromPartial(object: Partial<_69.QueryParamsResponse>): _69.QueryParamsResponse;
                    fromAmino(object: _69.QueryParamsResponseAmino): _69.QueryParamsResponse;
                    toAmino(message: _69.QueryParamsResponse): _69.QueryParamsResponseAmino;
                    fromAminoMsg(object: _69.QueryParamsResponseAminoMsg): _69.QueryParamsResponse;
                    toAminoMsg(message: _69.QueryParamsResponse): _69.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryParamsResponseProtoMsg): _69.QueryParamsResponse;
                    toProto(message: _69.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryParamsResponse): _69.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _69.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryDenomHashRequest;
                    fromPartial(object: Partial<_69.QueryDenomHashRequest>): _69.QueryDenomHashRequest;
                    fromAmino(object: _69.QueryDenomHashRequestAmino): _69.QueryDenomHashRequest;
                    toAmino(message: _69.QueryDenomHashRequest): _69.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _69.QueryDenomHashRequestAminoMsg): _69.QueryDenomHashRequest;
                    toAminoMsg(message: _69.QueryDenomHashRequest): _69.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryDenomHashRequestProtoMsg): _69.QueryDenomHashRequest;
                    toProto(message: _69.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryDenomHashRequest): _69.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _69.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryDenomHashResponse;
                    fromPartial(object: Partial<_69.QueryDenomHashResponse>): _69.QueryDenomHashResponse;
                    fromAmino(object: _69.QueryDenomHashResponseAmino): _69.QueryDenomHashResponse;
                    toAmino(message: _69.QueryDenomHashResponse): _69.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _69.QueryDenomHashResponseAminoMsg): _69.QueryDenomHashResponse;
                    toAminoMsg(message: _69.QueryDenomHashResponse): _69.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryDenomHashResponseProtoMsg): _69.QueryDenomHashResponse;
                    toProto(message: _69.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryDenomHashResponse): _69.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _69.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_69.QueryEscrowAddressRequest>): _69.QueryEscrowAddressRequest;
                    fromAmino(object: _69.QueryEscrowAddressRequestAmino): _69.QueryEscrowAddressRequest;
                    toAmino(message: _69.QueryEscrowAddressRequest): _69.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _69.QueryEscrowAddressRequestAminoMsg): _69.QueryEscrowAddressRequest;
                    toAminoMsg(message: _69.QueryEscrowAddressRequest): _69.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryEscrowAddressRequestProtoMsg): _69.QueryEscrowAddressRequest;
                    toProto(message: _69.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryEscrowAddressRequest): _69.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _69.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_69.QueryEscrowAddressResponse>): _69.QueryEscrowAddressResponse;
                    fromAmino(object: _69.QueryEscrowAddressResponseAmino): _69.QueryEscrowAddressResponse;
                    toAmino(message: _69.QueryEscrowAddressResponse): _69.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _69.QueryEscrowAddressResponseAminoMsg): _69.QueryEscrowAddressResponse;
                    toAminoMsg(message: _69.QueryEscrowAddressResponse): _69.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryEscrowAddressResponseProtoMsg): _69.QueryEscrowAddressResponse;
                    toProto(message: _69.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryEscrowAddressResponse): _69.QueryEscrowAddressResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _68.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.GenesisState;
                    fromPartial(object: Partial<_68.GenesisState>): _68.GenesisState;
                    fromAmino(object: _68.GenesisStateAmino): _68.GenesisState;
                    toAmino(message: _68.GenesisState): _68.GenesisStateAmino;
                    fromAminoMsg(object: _68.GenesisStateAminoMsg): _68.GenesisState;
                    toAminoMsg(message: _68.GenesisState): _68.GenesisStateAminoMsg;
                    fromProtoMsg(message: _68.GenesisStateProtoMsg): _68.GenesisState;
                    toProto(message: _68.GenesisState): Uint8Array;
                    toProtoMsg(message: _68.GenesisState): _68.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace client {
            const v1: {
                MsgClientImpl: typeof _186.MsgClientImpl;
                QueryClientImpl: typeof _184.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _74.QueryClientStateRequest): Promise<_74.QueryClientStateResponse>;
                    clientStates(request?: _74.QueryClientStatesRequest): Promise<_74.QueryClientStatesResponse>;
                    consensusState(request: _74.QueryConsensusStateRequest): Promise<_74.QueryConsensusStateResponse>;
                    consensusStates(request: _74.QueryConsensusStatesRequest): Promise<_74.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _74.QueryConsensusStateHeightsRequest): Promise<_74.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _74.QueryClientStatusRequest): Promise<_74.QueryClientStatusResponse>;
                    clientParams(request?: _74.QueryClientParamsRequest): Promise<_74.QueryClientParamsResponse>;
                    upgradedClientState(request?: _74.QueryUpgradedClientStateRequest): Promise<_74.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _74.QueryUpgradedConsensusStateRequest): Promise<_74.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _182.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _75.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _75.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _75.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _75.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _75.MsgCreateClient): {
                            typeUrl: string;
                            value: _75.MsgCreateClient;
                        };
                        updateClient(value: _75.MsgUpdateClient): {
                            typeUrl: string;
                            value: _75.MsgUpdateClient;
                        };
                        upgradeClient(value: _75.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _75.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _75.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _75.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _75.MsgCreateClient): {
                            typeUrl: string;
                            value: _75.MsgCreateClient;
                        };
                        updateClient(value: _75.MsgUpdateClient): {
                            typeUrl: string;
                            value: _75.MsgUpdateClient;
                        };
                        upgradeClient(value: _75.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _75.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _75.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _75.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _75.MsgCreateClient) => _75.MsgCreateClientAmino;
                        fromAmino: (object: _75.MsgCreateClientAmino) => _75.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _75.MsgUpdateClient) => _75.MsgUpdateClientAmino;
                        fromAmino: (object: _75.MsgUpdateClientAmino) => _75.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _75.MsgUpgradeClient) => _75.MsgUpgradeClientAmino;
                        fromAmino: (object: _75.MsgUpgradeClientAmino) => _75.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _75.MsgSubmitMisbehaviour) => _75.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _75.MsgSubmitMisbehaviourAmino) => _75.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _75.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.MsgCreateClient;
                    fromPartial(object: Partial<_75.MsgCreateClient>): _75.MsgCreateClient;
                    fromAmino(object: _75.MsgCreateClientAmino): _75.MsgCreateClient;
                    toAmino(message: _75.MsgCreateClient): _75.MsgCreateClientAmino;
                    fromAminoMsg(object: _75.MsgCreateClientAminoMsg): _75.MsgCreateClient;
                    toAminoMsg(message: _75.MsgCreateClient): _75.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _75.MsgCreateClientProtoMsg): _75.MsgCreateClient;
                    toProto(message: _75.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _75.MsgCreateClient): _75.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _75.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.MsgCreateClientResponse;
                    fromPartial(_: Partial<_75.MsgCreateClientResponse>): _75.MsgCreateClientResponse;
                    fromAmino(_: _75.MsgCreateClientResponseAmino): _75.MsgCreateClientResponse;
                    toAmino(_: _75.MsgCreateClientResponse): _75.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _75.MsgCreateClientResponseAminoMsg): _75.MsgCreateClientResponse;
                    toAminoMsg(message: _75.MsgCreateClientResponse): _75.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _75.MsgCreateClientResponseProtoMsg): _75.MsgCreateClientResponse;
                    toProto(message: _75.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _75.MsgCreateClientResponse): _75.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _75.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.MsgUpdateClient;
                    fromPartial(object: Partial<_75.MsgUpdateClient>): _75.MsgUpdateClient;
                    fromAmino(object: _75.MsgUpdateClientAmino): _75.MsgUpdateClient;
                    toAmino(message: _75.MsgUpdateClient): _75.MsgUpdateClientAmino;
                    fromAminoMsg(object: _75.MsgUpdateClientAminoMsg): _75.MsgUpdateClient;
                    toAminoMsg(message: _75.MsgUpdateClient): _75.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _75.MsgUpdateClientProtoMsg): _75.MsgUpdateClient;
                    toProto(message: _75.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _75.MsgUpdateClient): _75.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _75.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_75.MsgUpdateClientResponse>): _75.MsgUpdateClientResponse;
                    fromAmino(_: _75.MsgUpdateClientResponseAmino): _75.MsgUpdateClientResponse;
                    toAmino(_: _75.MsgUpdateClientResponse): _75.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _75.MsgUpdateClientResponseAminoMsg): _75.MsgUpdateClientResponse;
                    toAminoMsg(message: _75.MsgUpdateClientResponse): _75.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _75.MsgUpdateClientResponseProtoMsg): _75.MsgUpdateClientResponse;
                    toProto(message: _75.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _75.MsgUpdateClientResponse): _75.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _75.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.MsgUpgradeClient;
                    fromPartial(object: Partial<_75.MsgUpgradeClient>): _75.MsgUpgradeClient;
                    fromAmino(object: _75.MsgUpgradeClientAmino): _75.MsgUpgradeClient;
                    toAmino(message: _75.MsgUpgradeClient): _75.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _75.MsgUpgradeClientAminoMsg): _75.MsgUpgradeClient;
                    toAminoMsg(message: _75.MsgUpgradeClient): _75.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _75.MsgUpgradeClientProtoMsg): _75.MsgUpgradeClient;
                    toProto(message: _75.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _75.MsgUpgradeClient): _75.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _75.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_75.MsgUpgradeClientResponse>): _75.MsgUpgradeClientResponse;
                    fromAmino(_: _75.MsgUpgradeClientResponseAmino): _75.MsgUpgradeClientResponse;
                    toAmino(_: _75.MsgUpgradeClientResponse): _75.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _75.MsgUpgradeClientResponseAminoMsg): _75.MsgUpgradeClientResponse;
                    toAminoMsg(message: _75.MsgUpgradeClientResponse): _75.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _75.MsgUpgradeClientResponseProtoMsg): _75.MsgUpgradeClientResponse;
                    toProto(message: _75.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _75.MsgUpgradeClientResponse): _75.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _75.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_75.MsgSubmitMisbehaviour>): _75.MsgSubmitMisbehaviour;
                    fromAmino(object: _75.MsgSubmitMisbehaviourAmino): _75.MsgSubmitMisbehaviour;
                    toAmino(message: _75.MsgSubmitMisbehaviour): _75.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _75.MsgSubmitMisbehaviourAminoMsg): _75.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _75.MsgSubmitMisbehaviour): _75.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _75.MsgSubmitMisbehaviourProtoMsg): _75.MsgSubmitMisbehaviour;
                    toProto(message: _75.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _75.MsgSubmitMisbehaviour): _75.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _75.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_75.MsgSubmitMisbehaviourResponse>): _75.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _75.MsgSubmitMisbehaviourResponseAmino): _75.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _75.MsgSubmitMisbehaviourResponse): _75.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _75.MsgSubmitMisbehaviourResponseAminoMsg): _75.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _75.MsgSubmitMisbehaviourResponse): _75.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _75.MsgSubmitMisbehaviourResponseProtoMsg): _75.MsgSubmitMisbehaviourResponse;
                    toProto(message: _75.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _75.MsgSubmitMisbehaviourResponse): _75.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _74.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.QueryClientStateRequest;
                    fromPartial(object: Partial<_74.QueryClientStateRequest>): _74.QueryClientStateRequest;
                    fromAmino(object: _74.QueryClientStateRequestAmino): _74.QueryClientStateRequest;
                    toAmino(message: _74.QueryClientStateRequest): _74.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _74.QueryClientStateRequestAminoMsg): _74.QueryClientStateRequest;
                    toAminoMsg(message: _74.QueryClientStateRequest): _74.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryClientStateRequestProtoMsg): _74.QueryClientStateRequest;
                    toProto(message: _74.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryClientStateRequest): _74.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _74.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.QueryClientStateResponse;
                    fromPartial(object: Partial<_74.QueryClientStateResponse>): _74.QueryClientStateResponse;
                    fromAmino(object: _74.QueryClientStateResponseAmino): _74.QueryClientStateResponse;
                    toAmino(message: _74.QueryClientStateResponse): _74.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _74.QueryClientStateResponseAminoMsg): _74.QueryClientStateResponse;
                    toAminoMsg(message: _74.QueryClientStateResponse): _74.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryClientStateResponseProtoMsg): _74.QueryClientStateResponse;
                    toProto(message: _74.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryClientStateResponse): _74.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _74.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.QueryClientStatesRequest;
                    fromPartial(object: Partial<_74.QueryClientStatesRequest>): _74.QueryClientStatesRequest;
                    fromAmino(object: _74.QueryClientStatesRequestAmino): _74.QueryClientStatesRequest;
                    toAmino(message: _74.QueryClientStatesRequest): _74.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _74.QueryClientStatesRequestAminoMsg): _74.QueryClientStatesRequest;
                    toAminoMsg(message: _74.QueryClientStatesRequest): _74.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryClientStatesRequestProtoMsg): _74.QueryClientStatesRequest;
                    toProto(message: _74.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryClientStatesRequest): _74.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _74.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.QueryClientStatesResponse;
                    fromPartial(object: Partial<_74.QueryClientStatesResponse>): _74.QueryClientStatesResponse;
                    fromAmino(object: _74.QueryClientStatesResponseAmino): _74.QueryClientStatesResponse;
                    toAmino(message: _74.QueryClientStatesResponse): _74.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _74.QueryClientStatesResponseAminoMsg): _74.QueryClientStatesResponse;
                    toAminoMsg(message: _74.QueryClientStatesResponse): _74.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryClientStatesResponseProtoMsg): _74.QueryClientStatesResponse;
                    toProto(message: _74.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryClientStatesResponse): _74.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _74.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_74.QueryConsensusStateRequest>): _74.QueryConsensusStateRequest;
                    fromAmino(object: _74.QueryConsensusStateRequestAmino): _74.QueryConsensusStateRequest;
                    toAmino(message: _74.QueryConsensusStateRequest): _74.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _74.QueryConsensusStateRequestAminoMsg): _74.QueryConsensusStateRequest;
                    toAminoMsg(message: _74.QueryConsensusStateRequest): _74.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryConsensusStateRequestProtoMsg): _74.QueryConsensusStateRequest;
                    toProto(message: _74.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryConsensusStateRequest): _74.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _74.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_74.QueryConsensusStateResponse>): _74.QueryConsensusStateResponse;
                    fromAmino(object: _74.QueryConsensusStateResponseAmino): _74.QueryConsensusStateResponse;
                    toAmino(message: _74.QueryConsensusStateResponse): _74.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _74.QueryConsensusStateResponseAminoMsg): _74.QueryConsensusStateResponse;
                    toAminoMsg(message: _74.QueryConsensusStateResponse): _74.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryConsensusStateResponseProtoMsg): _74.QueryConsensusStateResponse;
                    toProto(message: _74.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryConsensusStateResponse): _74.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _74.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_74.QueryConsensusStatesRequest>): _74.QueryConsensusStatesRequest;
                    fromAmino(object: _74.QueryConsensusStatesRequestAmino): _74.QueryConsensusStatesRequest;
                    toAmino(message: _74.QueryConsensusStatesRequest): _74.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _74.QueryConsensusStatesRequestAminoMsg): _74.QueryConsensusStatesRequest;
                    toAminoMsg(message: _74.QueryConsensusStatesRequest): _74.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryConsensusStatesRequestProtoMsg): _74.QueryConsensusStatesRequest;
                    toProto(message: _74.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryConsensusStatesRequest): _74.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _74.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_74.QueryConsensusStatesResponse>): _74.QueryConsensusStatesResponse;
                    fromAmino(object: _74.QueryConsensusStatesResponseAmino): _74.QueryConsensusStatesResponse;
                    toAmino(message: _74.QueryConsensusStatesResponse): _74.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _74.QueryConsensusStatesResponseAminoMsg): _74.QueryConsensusStatesResponse;
                    toAminoMsg(message: _74.QueryConsensusStatesResponse): _74.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryConsensusStatesResponseProtoMsg): _74.QueryConsensusStatesResponse;
                    toProto(message: _74.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryConsensusStatesResponse): _74.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _74.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_74.QueryConsensusStateHeightsRequest>): _74.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _74.QueryConsensusStateHeightsRequestAmino): _74.QueryConsensusStateHeightsRequest;
                    toAmino(message: _74.QueryConsensusStateHeightsRequest): _74.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _74.QueryConsensusStateHeightsRequestAminoMsg): _74.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _74.QueryConsensusStateHeightsRequest): _74.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryConsensusStateHeightsRequestProtoMsg): _74.QueryConsensusStateHeightsRequest;
                    toProto(message: _74.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryConsensusStateHeightsRequest): _74.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _74.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_74.QueryConsensusStateHeightsResponse>): _74.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _74.QueryConsensusStateHeightsResponseAmino): _74.QueryConsensusStateHeightsResponse;
                    toAmino(message: _74.QueryConsensusStateHeightsResponse): _74.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _74.QueryConsensusStateHeightsResponseAminoMsg): _74.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _74.QueryConsensusStateHeightsResponse): _74.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryConsensusStateHeightsResponseProtoMsg): _74.QueryConsensusStateHeightsResponse;
                    toProto(message: _74.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryConsensusStateHeightsResponse): _74.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _74.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.QueryClientStatusRequest;
                    fromPartial(object: Partial<_74.QueryClientStatusRequest>): _74.QueryClientStatusRequest;
                    fromAmino(object: _74.QueryClientStatusRequestAmino): _74.QueryClientStatusRequest;
                    toAmino(message: _74.QueryClientStatusRequest): _74.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _74.QueryClientStatusRequestAminoMsg): _74.QueryClientStatusRequest;
                    toAminoMsg(message: _74.QueryClientStatusRequest): _74.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryClientStatusRequestProtoMsg): _74.QueryClientStatusRequest;
                    toProto(message: _74.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryClientStatusRequest): _74.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _74.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.QueryClientStatusResponse;
                    fromPartial(object: Partial<_74.QueryClientStatusResponse>): _74.QueryClientStatusResponse;
                    fromAmino(object: _74.QueryClientStatusResponseAmino): _74.QueryClientStatusResponse;
                    toAmino(message: _74.QueryClientStatusResponse): _74.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _74.QueryClientStatusResponseAminoMsg): _74.QueryClientStatusResponse;
                    toAminoMsg(message: _74.QueryClientStatusResponse): _74.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryClientStatusResponseProtoMsg): _74.QueryClientStatusResponse;
                    toProto(message: _74.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryClientStatusResponse): _74.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _74.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.QueryClientParamsRequest;
                    fromPartial(_: Partial<_74.QueryClientParamsRequest>): _74.QueryClientParamsRequest;
                    fromAmino(_: _74.QueryClientParamsRequestAmino): _74.QueryClientParamsRequest;
                    toAmino(_: _74.QueryClientParamsRequest): _74.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _74.QueryClientParamsRequestAminoMsg): _74.QueryClientParamsRequest;
                    toAminoMsg(message: _74.QueryClientParamsRequest): _74.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryClientParamsRequestProtoMsg): _74.QueryClientParamsRequest;
                    toProto(message: _74.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryClientParamsRequest): _74.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _74.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.QueryClientParamsResponse;
                    fromPartial(object: Partial<_74.QueryClientParamsResponse>): _74.QueryClientParamsResponse;
                    fromAmino(object: _74.QueryClientParamsResponseAmino): _74.QueryClientParamsResponse;
                    toAmino(message: _74.QueryClientParamsResponse): _74.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _74.QueryClientParamsResponseAminoMsg): _74.QueryClientParamsResponse;
                    toAminoMsg(message: _74.QueryClientParamsResponse): _74.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryClientParamsResponseProtoMsg): _74.QueryClientParamsResponse;
                    toProto(message: _74.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryClientParamsResponse): _74.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _74.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_74.QueryUpgradedClientStateRequest>): _74.QueryUpgradedClientStateRequest;
                    fromAmino(_: _74.QueryUpgradedClientStateRequestAmino): _74.QueryUpgradedClientStateRequest;
                    toAmino(_: _74.QueryUpgradedClientStateRequest): _74.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _74.QueryUpgradedClientStateRequestAminoMsg): _74.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _74.QueryUpgradedClientStateRequest): _74.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryUpgradedClientStateRequestProtoMsg): _74.QueryUpgradedClientStateRequest;
                    toProto(message: _74.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryUpgradedClientStateRequest): _74.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _74.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_74.QueryUpgradedClientStateResponse>): _74.QueryUpgradedClientStateResponse;
                    fromAmino(object: _74.QueryUpgradedClientStateResponseAmino): _74.QueryUpgradedClientStateResponse;
                    toAmino(message: _74.QueryUpgradedClientStateResponse): _74.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _74.QueryUpgradedClientStateResponseAminoMsg): _74.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _74.QueryUpgradedClientStateResponse): _74.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryUpgradedClientStateResponseProtoMsg): _74.QueryUpgradedClientStateResponse;
                    toProto(message: _74.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryUpgradedClientStateResponse): _74.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _74.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_74.QueryUpgradedConsensusStateRequest>): _74.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _74.QueryUpgradedConsensusStateRequestAmino): _74.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _74.QueryUpgradedConsensusStateRequest): _74.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _74.QueryUpgradedConsensusStateRequestAminoMsg): _74.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _74.QueryUpgradedConsensusStateRequest): _74.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryUpgradedConsensusStateRequestProtoMsg): _74.QueryUpgradedConsensusStateRequest;
                    toProto(message: _74.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryUpgradedConsensusStateRequest): _74.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _74.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_74.QueryUpgradedConsensusStateResponse>): _74.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _74.QueryUpgradedConsensusStateResponseAmino): _74.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _74.QueryUpgradedConsensusStateResponse): _74.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _74.QueryUpgradedConsensusStateResponseAminoMsg): _74.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _74.QueryUpgradedConsensusStateResponse): _74.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryUpgradedConsensusStateResponseProtoMsg): _74.QueryUpgradedConsensusStateResponse;
                    toProto(message: _74.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryUpgradedConsensusStateResponse): _74.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _73.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.GenesisState;
                    fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
                    fromAmino(object: _73.GenesisStateAmino): _73.GenesisState;
                    toAmino(message: _73.GenesisState): _73.GenesisStateAmino;
                    fromAminoMsg(object: _73.GenesisStateAminoMsg): _73.GenesisState;
                    toAminoMsg(message: _73.GenesisState): _73.GenesisStateAminoMsg;
                    fromProtoMsg(message: _73.GenesisStateProtoMsg): _73.GenesisState;
                    toProto(message: _73.GenesisState): Uint8Array;
                    toProtoMsg(message: _73.GenesisState): _73.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _73.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.GenesisMetadata;
                    fromPartial(object: Partial<_73.GenesisMetadata>): _73.GenesisMetadata;
                    fromAmino(object: _73.GenesisMetadataAmino): _73.GenesisMetadata;
                    toAmino(message: _73.GenesisMetadata): _73.GenesisMetadataAmino;
                    fromAminoMsg(object: _73.GenesisMetadataAminoMsg): _73.GenesisMetadata;
                    toAminoMsg(message: _73.GenesisMetadata): _73.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _73.GenesisMetadataProtoMsg): _73.GenesisMetadata;
                    toProto(message: _73.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _73.GenesisMetadata): _73.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _73.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_73.IdentifiedGenesisMetadata>): _73.IdentifiedGenesisMetadata;
                    fromAmino(object: _73.IdentifiedGenesisMetadataAmino): _73.IdentifiedGenesisMetadata;
                    toAmino(message: _73.IdentifiedGenesisMetadata): _73.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _73.IdentifiedGenesisMetadataAminoMsg): _73.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _73.IdentifiedGenesisMetadata): _73.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _73.IdentifiedGenesisMetadataProtoMsg): _73.IdentifiedGenesisMetadata;
                    toProto(message: _73.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _73.IdentifiedGenesisMetadata): _73.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _72.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.IdentifiedClientState;
                    fromPartial(object: Partial<_72.IdentifiedClientState>): _72.IdentifiedClientState;
                    fromAmino(object: _72.IdentifiedClientStateAmino): _72.IdentifiedClientState;
                    toAmino(message: _72.IdentifiedClientState): _72.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _72.IdentifiedClientStateAminoMsg): _72.IdentifiedClientState;
                    toAminoMsg(message: _72.IdentifiedClientState): _72.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _72.IdentifiedClientStateProtoMsg): _72.IdentifiedClientState;
                    toProto(message: _72.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _72.IdentifiedClientState): _72.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _72.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_72.ConsensusStateWithHeight>): _72.ConsensusStateWithHeight;
                    fromAmino(object: _72.ConsensusStateWithHeightAmino): _72.ConsensusStateWithHeight;
                    toAmino(message: _72.ConsensusStateWithHeight): _72.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _72.ConsensusStateWithHeightAminoMsg): _72.ConsensusStateWithHeight;
                    toAminoMsg(message: _72.ConsensusStateWithHeight): _72.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _72.ConsensusStateWithHeightProtoMsg): _72.ConsensusStateWithHeight;
                    toProto(message: _72.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _72.ConsensusStateWithHeight): _72.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _72.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.ClientConsensusStates;
                    fromPartial(object: Partial<_72.ClientConsensusStates>): _72.ClientConsensusStates;
                    fromAmino(object: _72.ClientConsensusStatesAmino): _72.ClientConsensusStates;
                    toAmino(message: _72.ClientConsensusStates): _72.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _72.ClientConsensusStatesAminoMsg): _72.ClientConsensusStates;
                    toAminoMsg(message: _72.ClientConsensusStates): _72.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _72.ClientConsensusStatesProtoMsg): _72.ClientConsensusStates;
                    toProto(message: _72.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _72.ClientConsensusStates): _72.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _72.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.ClientUpdateProposal;
                    fromPartial(object: Partial<_72.ClientUpdateProposal>): _72.ClientUpdateProposal;
                    fromAmino(object: _72.ClientUpdateProposalAmino): _72.ClientUpdateProposal;
                    toAmino(message: _72.ClientUpdateProposal): _72.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _72.ClientUpdateProposalAminoMsg): _72.ClientUpdateProposal;
                    toAminoMsg(message: _72.ClientUpdateProposal): _72.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _72.ClientUpdateProposalProtoMsg): _72.ClientUpdateProposal;
                    toProto(message: _72.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _72.ClientUpdateProposal): _72.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _72.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.UpgradeProposal;
                    fromPartial(object: Partial<_72.UpgradeProposal>): _72.UpgradeProposal;
                    fromAmino(object: _72.UpgradeProposalAmino): _72.UpgradeProposal;
                    toAmino(message: _72.UpgradeProposal): _72.UpgradeProposalAmino;
                    fromAminoMsg(object: _72.UpgradeProposalAminoMsg): _72.UpgradeProposal;
                    toAminoMsg(message: _72.UpgradeProposal): _72.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _72.UpgradeProposalProtoMsg): _72.UpgradeProposal;
                    toProto(message: _72.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _72.UpgradeProposal): _72.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _72.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.Height;
                    fromPartial(object: Partial<_72.Height>): _72.Height;
                    fromAmino(object: _72.HeightAmino): _72.Height;
                    toAmino(message: _72.Height): _72.HeightAmino;
                    fromAminoMsg(object: _72.HeightAminoMsg): _72.Height;
                    toAminoMsg(message: _72.Height): _72.HeightAminoMsg;
                    fromProtoMsg(message: _72.HeightProtoMsg): _72.Height;
                    toProto(message: _72.Height): Uint8Array;
                    toProtoMsg(message: _72.Height): _72.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _72.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.Params;
                    fromPartial(object: Partial<_72.Params>): _72.Params;
                    fromAmino(object: _72.ParamsAmino): _72.Params;
                    toAmino(message: _72.Params): _72.ParamsAmino;
                    fromAminoMsg(object: _72.ParamsAminoMsg): _72.Params;
                    toAminoMsg(message: _72.Params): _72.ParamsAminoMsg;
                    fromProtoMsg(message: _72.ParamsProtoMsg): _72.Params;
                    toProto(message: _72.Params): Uint8Array;
                    toProtoMsg(message: _72.Params): _72.ParamsProtoMsg;
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
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
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
                        v1: _185.MsgClientImpl;
                    };
                };
                core: {
                    client: {
                        v1: _186.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
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
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
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
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
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
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
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
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _69.QueryDenomTraceRequest): Promise<_69.QueryDenomTraceResponse>;
                            denomTraces(request?: _69.QueryDenomTracesRequest): Promise<_69.QueryDenomTracesResponse>;
                            params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                            denomHash(request: _69.QueryDenomHashRequest): Promise<_69.QueryDenomHashResponse>;
                            escrowAddress(request: _69.QueryEscrowAddressRequest): Promise<_69.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    client: {
                        v1: {
                            clientState(request: _74.QueryClientStateRequest): Promise<_74.QueryClientStateResponse>;
                            clientStates(request?: _74.QueryClientStatesRequest): Promise<_74.QueryClientStatesResponse>;
                            consensusState(request: _74.QueryConsensusStateRequest): Promise<_74.QueryConsensusStateResponse>;
                            consensusStates(request: _74.QueryConsensusStatesRequest): Promise<_74.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _74.QueryConsensusStateHeightsRequest): Promise<_74.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _74.QueryClientStatusRequest): Promise<_74.QueryClientStatusResponse>;
                            clientParams(request?: _74.QueryClientParamsRequest): Promise<_74.QueryClientParamsResponse>;
                            upgradedClientState(request?: _74.QueryUpgradedClientStateRequest): Promise<_74.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _74.QueryUpgradedConsensusStateRequest): Promise<_74.QueryUpgradedConsensusStateResponse>;
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
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
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
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
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
                        v1: _181.LCDQueryClient;
                    };
                };
                core: {
                    client: {
                        v1: _182.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
