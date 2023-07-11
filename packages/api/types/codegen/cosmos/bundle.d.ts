import * as _2 from "./app/module/v1alpha1/module";
import * as _3 from "./app/v1alpha1/config";
import * as _4 from "./app/v1alpha1/module";
import * as _5 from "./app/v1alpha1/query";
import * as _6 from "./auth/v1beta1/auth";
import * as _7 from "./auth/v1beta1/genesis";
import * as _8 from "./auth/v1beta1/query";
import * as _9 from "./authz/v1beta1/authz";
import * as _10 from "./authz/v1beta1/event";
import * as _11 from "./authz/v1beta1/genesis";
import * as _12 from "./authz/v1beta1/query";
import * as _13 from "./authz/v1beta1/tx";
import * as _14 from "./bank/v1beta1/authz";
import * as _15 from "./bank/v1beta1/bank";
import * as _16 from "./bank/v1beta1/genesis";
import * as _17 from "./bank/v1beta1/query";
import * as _18 from "./bank/v1beta1/tx";
import * as _19 from "./base/abci/v1beta1/abci";
import * as _20 from "./base/kv/v1beta1/kv";
import * as _21 from "./base/node/v1beta1/query";
import * as _22 from "./base/query/v1beta1/pagination";
import * as _23 from "./base/reflection/v1beta1/reflection";
import * as _24 from "./base/reflection/v2alpha1/reflection";
import * as _25 from "./base/snapshots/v1beta1/snapshot";
import * as _26 from "./base/store/v1beta1/commit_info";
import * as _27 from "./base/store/v1beta1/listening";
import * as _28 from "./base/tendermint/v1beta1/query";
import * as _29 from "./base/tendermint/v1beta1/types";
import * as _30 from "./base/v1beta1/coin";
import * as _31 from "./capability/v1beta1/capability";
import * as _32 from "./capability/v1beta1/genesis";
import * as _33 from "./crisis/v1beta1/genesis";
import * as _34 from "./crisis/v1beta1/tx";
import * as _35 from "./crypto/ed25519/keys";
import * as _36 from "./crypto/hd/v1/hd";
import * as _37 from "./crypto/keyring/v1/record";
import * as _38 from "./crypto/multisig/keys";
import * as _39 from "./crypto/secp256k1/keys";
import * as _40 from "./crypto/secp256r1/keys";
import * as _41 from "./distribution/v1beta1/distribution";
import * as _42 from "./distribution/v1beta1/genesis";
import * as _43 from "./distribution/v1beta1/query";
import * as _44 from "./distribution/v1beta1/tx";
import * as _45 from "./evidence/v1beta1/evidence";
import * as _46 from "./evidence/v1beta1/genesis";
import * as _47 from "./evidence/v1beta1/query";
import * as _48 from "./evidence/v1beta1/tx";
import * as _49 from "./feegrant/v1beta1/feegrant";
import * as _50 from "./feegrant/v1beta1/genesis";
import * as _51 from "./feegrant/v1beta1/query";
import * as _52 from "./feegrant/v1beta1/tx";
import * as _53 from "./genutil/v1beta1/genesis";
import * as _54 from "./gov/v1/genesis";
import * as _55 from "./gov/v1/gov";
import * as _56 from "./gov/v1/query";
import * as _57 from "./gov/v1/tx";
import * as _58 from "./gov/v1beta1/genesis";
import * as _59 from "./gov/v1beta1/gov";
import * as _60 from "./gov/v1beta1/query";
import * as _61 from "./gov/v1beta1/tx";
import * as _62 from "./group/v1/events";
import * as _63 from "./group/v1/genesis";
import * as _64 from "./group/v1/query";
import * as _65 from "./group/v1/tx";
import * as _66 from "./group/v1/types";
import * as _67 from "./mint/v1beta1/genesis";
import * as _68 from "./mint/v1beta1/mint";
import * as _69 from "./mint/v1beta1/query";
import * as _71 from "./nft/v1beta1/event";
import * as _72 from "./nft/v1beta1/genesis";
import * as _73 from "./nft/v1beta1/nft";
import * as _74 from "./nft/v1beta1/query";
import * as _75 from "./nft/v1beta1/tx";
import * as _76 from "./orm/module/v1alpha1/module";
import * as _77 from "./orm/v1/orm";
import * as _78 from "./orm/v1alpha1/schema";
import * as _79 from "./params/v1beta1/params";
import * as _80 from "./params/v1beta1/query";
import * as _81 from "./slashing/v1beta1/genesis";
import * as _82 from "./slashing/v1beta1/query";
import * as _83 from "./slashing/v1beta1/slashing";
import * as _84 from "./slashing/v1beta1/tx";
import * as _85 from "./staking/v1beta1/authz";
import * as _86 from "./staking/v1beta1/genesis";
import * as _87 from "./staking/v1beta1/query";
import * as _88 from "./staking/v1beta1/staking";
import * as _89 from "./staking/v1beta1/tx";
import * as _90 from "./tx/signing/v1beta1/signing";
import * as _91 from "./tx/v1beta1/service";
import * as _92 from "./tx/v1beta1/tx";
import * as _93 from "./upgrade/v1beta1/query";
import * as _94 from "./upgrade/v1beta1/tx";
import * as _95 from "./upgrade/v1beta1/upgrade";
import * as _96 from "./vesting/v1beta1/tx";
import * as _97 from "./vesting/v1beta1/vesting";
import * as _179 from "./auth/v1beta1/query.lcd";
import * as _180 from "./authz/v1beta1/query.lcd";
import * as _181 from "./bank/v1beta1/query.lcd";
import * as _182 from "./base/node/v1beta1/query.lcd";
import * as _183 from "./base/tendermint/v1beta1/query.lcd";
import * as _184 from "./distribution/v1beta1/query.lcd";
import * as _185 from "./evidence/v1beta1/query.lcd";
import * as _186 from "./feegrant/v1beta1/query.lcd";
import * as _187 from "./gov/v1/query.lcd";
import * as _188 from "./gov/v1beta1/query.lcd";
import * as _189 from "./group/v1/query.lcd";
import * as _190 from "./mint/v1beta1/query.lcd";
import * as _191 from "./nft/v1beta1/query.lcd";
import * as _192 from "./params/v1beta1/query.lcd";
import * as _193 from "./slashing/v1beta1/query.lcd";
import * as _194 from "./staking/v1beta1/query.lcd";
import * as _195 from "./tx/v1beta1/service.lcd";
import * as _196 from "./upgrade/v1beta1/query.lcd";
import * as _197 from "./app/v1alpha1/query.rpc.Query";
import * as _198 from "./auth/v1beta1/query.rpc.Query";
import * as _199 from "./authz/v1beta1/query.rpc.Query";
import * as _200 from "./bank/v1beta1/query.rpc.Query";
import * as _201 from "./base/node/v1beta1/query.rpc.Service";
import * as _202 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _203 from "./distribution/v1beta1/query.rpc.Query";
import * as _204 from "./evidence/v1beta1/query.rpc.Query";
import * as _205 from "./feegrant/v1beta1/query.rpc.Query";
import * as _206 from "./gov/v1/query.rpc.Query";
import * as _207 from "./gov/v1beta1/query.rpc.Query";
import * as _208 from "./group/v1/query.rpc.Query";
import * as _209 from "./mint/v1beta1/query.rpc.Query";
import * as _210 from "./nft/v1beta1/query.rpc.Query";
import * as _211 from "./params/v1beta1/query.rpc.Query";
import * as _212 from "./slashing/v1beta1/query.rpc.Query";
import * as _213 from "./staking/v1beta1/query.rpc.Query";
import * as _214 from "./tx/v1beta1/service.rpc.Service";
import * as _215 from "./upgrade/v1beta1/query.rpc.Query";
import * as _216 from "./authz/v1beta1/tx.rpc.msg";
import * as _217 from "./bank/v1beta1/tx.rpc.msg";
import * as _218 from "./crisis/v1beta1/tx.rpc.msg";
import * as _219 from "./distribution/v1beta1/tx.rpc.msg";
import * as _220 from "./evidence/v1beta1/tx.rpc.msg";
import * as _221 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _222 from "./gov/v1/tx.rpc.msg";
import * as _223 from "./gov/v1beta1/tx.rpc.msg";
import * as _224 from "./group/v1/tx.rpc.msg";
import * as _225 from "./nft/v1beta1/tx.rpc.msg";
import * as _226 from "./slashing/v1beta1/tx.rpc.msg";
import * as _227 from "./staking/v1beta1/tx.rpc.msg";
import * as _228 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _229 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _2.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _2.Module;
                    fromJSON(_: any): _2.Module;
                    toJSON(_: _2.Module): unknown;
                    fromPartial(_: Partial<_2.Module>): _2.Module;
                    fromAmino(_: _2.ModuleAmino): _2.Module;
                    toAmino(_: _2.Module): _2.ModuleAmino;
                    fromAminoMsg(object: _2.ModuleAminoMsg): _2.Module;
                    toAminoMsg(message: _2.Module): _2.ModuleAminoMsg;
                    fromProtoMsg(message: _2.ModuleProtoMsg): _2.Module;
                    toProto(message: _2.Module): Uint8Array;
                    toProtoMsg(message: _2.Module): _2.ModuleProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _197.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _5.QueryConfigRequest | undefined): Promise<_5.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _5.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _5.QueryConfigRequest;
                fromJSON(_: any): _5.QueryConfigRequest;
                toJSON(_: _5.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_5.QueryConfigRequest>): _5.QueryConfigRequest;
                fromAmino(_: _5.QueryConfigRequestAmino): _5.QueryConfigRequest;
                toAmino(_: _5.QueryConfigRequest): _5.QueryConfigRequestAmino;
                fromAminoMsg(object: _5.QueryConfigRequestAminoMsg): _5.QueryConfigRequest;
                toAminoMsg(message: _5.QueryConfigRequest): _5.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _5.QueryConfigRequestProtoMsg): _5.QueryConfigRequest;
                toProto(message: _5.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _5.QueryConfigRequest): _5.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                encode(message: _5.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _5.QueryConfigResponse;
                fromJSON(object: any): _5.QueryConfigResponse;
                toJSON(message: _5.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_5.QueryConfigResponse>): _5.QueryConfigResponse;
                fromAmino(object: _5.QueryConfigResponseAmino): _5.QueryConfigResponse;
                toAmino(message: _5.QueryConfigResponse): _5.QueryConfigResponseAmino;
                fromAminoMsg(object: _5.QueryConfigResponseAminoMsg): _5.QueryConfigResponse;
                toAminoMsg(message: _5.QueryConfigResponse): _5.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _5.QueryConfigResponseProtoMsg): _5.QueryConfigResponse;
                toProto(message: _5.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _5.QueryConfigResponse): _5.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                encode(message: _4.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _4.ModuleDescriptor;
                fromJSON(object: any): _4.ModuleDescriptor;
                toJSON(message: _4.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_4.ModuleDescriptor>): _4.ModuleDescriptor;
                fromAmino(object: _4.ModuleDescriptorAmino): _4.ModuleDescriptor;
                toAmino(message: _4.ModuleDescriptor): _4.ModuleDescriptorAmino;
                fromAminoMsg(object: _4.ModuleDescriptorAminoMsg): _4.ModuleDescriptor;
                toAminoMsg(message: _4.ModuleDescriptor): _4.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _4.ModuleDescriptorProtoMsg): _4.ModuleDescriptor;
                toProto(message: _4.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _4.ModuleDescriptor): _4.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                encode(message: _4.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _4.PackageReference;
                fromJSON(object: any): _4.PackageReference;
                toJSON(message: _4.PackageReference): unknown;
                fromPartial(object: Partial<_4.PackageReference>): _4.PackageReference;
                fromAmino(object: _4.PackageReferenceAmino): _4.PackageReference;
                toAmino(message: _4.PackageReference): _4.PackageReferenceAmino;
                fromAminoMsg(object: _4.PackageReferenceAminoMsg): _4.PackageReference;
                toAminoMsg(message: _4.PackageReference): _4.PackageReferenceAminoMsg;
                fromProtoMsg(message: _4.PackageReferenceProtoMsg): _4.PackageReference;
                toProto(message: _4.PackageReference): Uint8Array;
                toProtoMsg(message: _4.PackageReference): _4.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                encode(message: _4.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _4.MigrateFromInfo;
                fromJSON(object: any): _4.MigrateFromInfo;
                toJSON(message: _4.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_4.MigrateFromInfo>): _4.MigrateFromInfo;
                fromAmino(object: _4.MigrateFromInfoAmino): _4.MigrateFromInfo;
                toAmino(message: _4.MigrateFromInfo): _4.MigrateFromInfoAmino;
                fromAminoMsg(object: _4.MigrateFromInfoAminoMsg): _4.MigrateFromInfo;
                toAminoMsg(message: _4.MigrateFromInfo): _4.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _4.MigrateFromInfoProtoMsg): _4.MigrateFromInfo;
                toProto(message: _4.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _4.MigrateFromInfo): _4.MigrateFromInfoProtoMsg;
            };
            Config: {
                encode(message: _3.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _3.Config;
                fromJSON(object: any): _3.Config;
                toJSON(message: _3.Config): unknown;
                fromPartial(object: Partial<_3.Config>): _3.Config;
                fromAmino(object: _3.ConfigAmino): _3.Config;
                toAmino(message: _3.Config): _3.ConfigAmino;
                fromAminoMsg(object: _3.ConfigAminoMsg): _3.Config;
                toAminoMsg(message: _3.Config): _3.ConfigAminoMsg;
                fromProtoMsg(message: _3.ConfigProtoMsg): _3.Config;
                toProto(message: _3.Config): Uint8Array;
                toProtoMsg(message: _3.Config): _3.ConfigProtoMsg;
            };
            ModuleConfig: {
                encode(message: _3.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _3.ModuleConfig;
                fromJSON(object: any): _3.ModuleConfig;
                toJSON(message: _3.ModuleConfig): unknown;
                fromPartial(object: Partial<_3.ModuleConfig>): _3.ModuleConfig;
                fromAmino(object: _3.ModuleConfigAmino): _3.ModuleConfig;
                toAmino(message: _3.ModuleConfig): _3.ModuleConfigAmino;
                fromAminoMsg(object: _3.ModuleConfigAminoMsg): _3.ModuleConfig;
                toAminoMsg(message: _3.ModuleConfig): _3.ModuleConfigAminoMsg;
                fromProtoMsg(message: _3.ModuleConfigProtoMsg): _3.ModuleConfig;
                toProto(message: _3.ModuleConfig): Uint8Array;
                toProtoMsg(message: _3.ModuleConfig): _3.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _198.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _8.QueryAccountsRequest | undefined): Promise<_8.QueryAccountsResponse>;
                account(request: _8.QueryAccountRequest): Promise<_8.QueryAccountResponse>;
                accountAddressByID(request: _8.QueryAccountAddressByIDRequest): Promise<_8.QueryAccountAddressByIDResponse>;
                params(request?: _8.QueryParamsRequest | undefined): Promise<_8.QueryParamsResponse>;
                moduleAccounts(request?: _8.QueryModuleAccountsRequest | undefined): Promise<_8.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _8.QueryModuleAccountByNameRequest): Promise<_8.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _8.Bech32PrefixRequest | undefined): Promise<_8.Bech32PrefixResponse>;
                addressBytesToString(request: _8.AddressBytesToStringRequest): Promise<_8.AddressBytesToStringResponse>;
                addressStringToBytes(request: _8.AddressStringToBytesRequest): Promise<_8.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _179.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _8.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryAccountsRequest;
                fromJSON(object: any): _8.QueryAccountsRequest;
                toJSON(message: _8.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_8.QueryAccountsRequest>): _8.QueryAccountsRequest;
                fromAmino(object: _8.QueryAccountsRequestAmino): _8.QueryAccountsRequest;
                toAmino(message: _8.QueryAccountsRequest): _8.QueryAccountsRequestAmino;
                fromAminoMsg(object: _8.QueryAccountsRequestAminoMsg): _8.QueryAccountsRequest;
                toAminoMsg(message: _8.QueryAccountsRequest): _8.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _8.QueryAccountsRequestProtoMsg): _8.QueryAccountsRequest;
                toProto(message: _8.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryAccountsRequest): _8.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                encode(message: _8.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryAccountsResponse;
                fromJSON(object: any): _8.QueryAccountsResponse;
                toJSON(message: _8.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_8.QueryAccountsResponse>): _8.QueryAccountsResponse;
                fromAmino(object: _8.QueryAccountsResponseAmino): _8.QueryAccountsResponse;
                toAmino(message: _8.QueryAccountsResponse): _8.QueryAccountsResponseAmino;
                fromAminoMsg(object: _8.QueryAccountsResponseAminoMsg): _8.QueryAccountsResponse;
                toAminoMsg(message: _8.QueryAccountsResponse): _8.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _8.QueryAccountsResponseProtoMsg): _8.QueryAccountsResponse;
                toProto(message: _8.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryAccountsResponse): _8.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                encode(message: _8.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryAccountRequest;
                fromJSON(object: any): _8.QueryAccountRequest;
                toJSON(message: _8.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_8.QueryAccountRequest>): _8.QueryAccountRequest;
                fromAmino(object: _8.QueryAccountRequestAmino): _8.QueryAccountRequest;
                toAmino(message: _8.QueryAccountRequest): _8.QueryAccountRequestAmino;
                fromAminoMsg(object: _8.QueryAccountRequestAminoMsg): _8.QueryAccountRequest;
                toAminoMsg(message: _8.QueryAccountRequest): _8.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _8.QueryAccountRequestProtoMsg): _8.QueryAccountRequest;
                toProto(message: _8.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _8.QueryAccountRequest): _8.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                encode(message: _8.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryAccountResponse;
                fromJSON(object: any): _8.QueryAccountResponse;
                toJSON(message: _8.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_8.QueryAccountResponse>): _8.QueryAccountResponse;
                fromAmino(object: _8.QueryAccountResponseAmino): _8.QueryAccountResponse;
                toAmino(message: _8.QueryAccountResponse): _8.QueryAccountResponseAmino;
                fromAminoMsg(object: _8.QueryAccountResponseAminoMsg): _8.QueryAccountResponse;
                toAminoMsg(message: _8.QueryAccountResponse): _8.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _8.QueryAccountResponseProtoMsg): _8.QueryAccountResponse;
                toProto(message: _8.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _8.QueryAccountResponse): _8.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _8.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryParamsRequest;
                fromJSON(_: any): _8.QueryParamsRequest;
                toJSON(_: _8.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_8.QueryParamsRequest>): _8.QueryParamsRequest;
                fromAmino(_: _8.QueryParamsRequestAmino): _8.QueryParamsRequest;
                toAmino(_: _8.QueryParamsRequest): _8.QueryParamsRequestAmino;
                fromAminoMsg(object: _8.QueryParamsRequestAminoMsg): _8.QueryParamsRequest;
                toAminoMsg(message: _8.QueryParamsRequest): _8.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _8.QueryParamsRequestProtoMsg): _8.QueryParamsRequest;
                toProto(message: _8.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryParamsRequest): _8.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _8.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryParamsResponse;
                fromJSON(object: any): _8.QueryParamsResponse;
                toJSON(message: _8.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_8.QueryParamsResponse>): _8.QueryParamsResponse;
                fromAmino(object: _8.QueryParamsResponseAmino): _8.QueryParamsResponse;
                toAmino(message: _8.QueryParamsResponse): _8.QueryParamsResponseAmino;
                fromAminoMsg(object: _8.QueryParamsResponseAminoMsg): _8.QueryParamsResponse;
                toAminoMsg(message: _8.QueryParamsResponse): _8.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _8.QueryParamsResponseProtoMsg): _8.QueryParamsResponse;
                toProto(message: _8.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryParamsResponse): _8.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                encode(_: _8.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryModuleAccountsRequest;
                fromJSON(_: any): _8.QueryModuleAccountsRequest;
                toJSON(_: _8.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_8.QueryModuleAccountsRequest>): _8.QueryModuleAccountsRequest;
                fromAmino(_: _8.QueryModuleAccountsRequestAmino): _8.QueryModuleAccountsRequest;
                toAmino(_: _8.QueryModuleAccountsRequest): _8.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _8.QueryModuleAccountsRequestAminoMsg): _8.QueryModuleAccountsRequest;
                toAminoMsg(message: _8.QueryModuleAccountsRequest): _8.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _8.QueryModuleAccountsRequestProtoMsg): _8.QueryModuleAccountsRequest;
                toProto(message: _8.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _8.QueryModuleAccountsRequest): _8.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                encode(message: _8.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryModuleAccountsResponse;
                fromJSON(object: any): _8.QueryModuleAccountsResponse;
                toJSON(message: _8.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_8.QueryModuleAccountsResponse>): _8.QueryModuleAccountsResponse;
                fromAmino(object: _8.QueryModuleAccountsResponseAmino): _8.QueryModuleAccountsResponse;
                toAmino(message: _8.QueryModuleAccountsResponse): _8.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _8.QueryModuleAccountsResponseAminoMsg): _8.QueryModuleAccountsResponse;
                toAminoMsg(message: _8.QueryModuleAccountsResponse): _8.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _8.QueryModuleAccountsResponseProtoMsg): _8.QueryModuleAccountsResponse;
                toProto(message: _8.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _8.QueryModuleAccountsResponse): _8.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _8.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryModuleAccountByNameRequest;
                fromJSON(object: any): _8.QueryModuleAccountByNameRequest;
                toJSON(message: _8.QueryModuleAccountByNameRequest): unknown;
                fromPartial(object: Partial<_8.QueryModuleAccountByNameRequest>): _8.QueryModuleAccountByNameRequest;
                fromAmino(object: _8.QueryModuleAccountByNameRequestAmino): _8.QueryModuleAccountByNameRequest;
                toAmino(message: _8.QueryModuleAccountByNameRequest): _8.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _8.QueryModuleAccountByNameRequestAminoMsg): _8.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _8.QueryModuleAccountByNameRequest): _8.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _8.QueryModuleAccountByNameRequestProtoMsg): _8.QueryModuleAccountByNameRequest;
                toProto(message: _8.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _8.QueryModuleAccountByNameRequest): _8.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _8.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryModuleAccountByNameResponse;
                fromJSON(object: any): _8.QueryModuleAccountByNameResponse;
                toJSON(message: _8.QueryModuleAccountByNameResponse): unknown;
                fromPartial(object: Partial<_8.QueryModuleAccountByNameResponse>): _8.QueryModuleAccountByNameResponse;
                fromAmino(object: _8.QueryModuleAccountByNameResponseAmino): _8.QueryModuleAccountByNameResponse;
                toAmino(message: _8.QueryModuleAccountByNameResponse): _8.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _8.QueryModuleAccountByNameResponseAminoMsg): _8.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _8.QueryModuleAccountByNameResponse): _8.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _8.QueryModuleAccountByNameResponseProtoMsg): _8.QueryModuleAccountByNameResponse;
                toProto(message: _8.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _8.QueryModuleAccountByNameResponse): _8.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                encode(_: _8.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.Bech32PrefixRequest;
                fromJSON(_: any): _8.Bech32PrefixRequest;
                toJSON(_: _8.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_8.Bech32PrefixRequest>): _8.Bech32PrefixRequest;
                fromAmino(_: _8.Bech32PrefixRequestAmino): _8.Bech32PrefixRequest;
                toAmino(_: _8.Bech32PrefixRequest): _8.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _8.Bech32PrefixRequestAminoMsg): _8.Bech32PrefixRequest;
                toAminoMsg(message: _8.Bech32PrefixRequest): _8.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _8.Bech32PrefixRequestProtoMsg): _8.Bech32PrefixRequest;
                toProto(message: _8.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _8.Bech32PrefixRequest): _8.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                encode(message: _8.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.Bech32PrefixResponse;
                fromJSON(object: any): _8.Bech32PrefixResponse;
                toJSON(message: _8.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_8.Bech32PrefixResponse>): _8.Bech32PrefixResponse;
                fromAmino(object: _8.Bech32PrefixResponseAmino): _8.Bech32PrefixResponse;
                toAmino(message: _8.Bech32PrefixResponse): _8.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _8.Bech32PrefixResponseAminoMsg): _8.Bech32PrefixResponse;
                toAminoMsg(message: _8.Bech32PrefixResponse): _8.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _8.Bech32PrefixResponseProtoMsg): _8.Bech32PrefixResponse;
                toProto(message: _8.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _8.Bech32PrefixResponse): _8.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                encode(message: _8.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.AddressBytesToStringRequest;
                fromJSON(object: any): _8.AddressBytesToStringRequest;
                toJSON(message: _8.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_8.AddressBytesToStringRequest>): _8.AddressBytesToStringRequest;
                fromAmino(object: _8.AddressBytesToStringRequestAmino): _8.AddressBytesToStringRequest;
                toAmino(message: _8.AddressBytesToStringRequest): _8.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _8.AddressBytesToStringRequestAminoMsg): _8.AddressBytesToStringRequest;
                toAminoMsg(message: _8.AddressBytesToStringRequest): _8.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _8.AddressBytesToStringRequestProtoMsg): _8.AddressBytesToStringRequest;
                toProto(message: _8.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _8.AddressBytesToStringRequest): _8.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                encode(message: _8.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.AddressBytesToStringResponse;
                fromJSON(object: any): _8.AddressBytesToStringResponse;
                toJSON(message: _8.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_8.AddressBytesToStringResponse>): _8.AddressBytesToStringResponse;
                fromAmino(object: _8.AddressBytesToStringResponseAmino): _8.AddressBytesToStringResponse;
                toAmino(message: _8.AddressBytesToStringResponse): _8.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _8.AddressBytesToStringResponseAminoMsg): _8.AddressBytesToStringResponse;
                toAminoMsg(message: _8.AddressBytesToStringResponse): _8.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _8.AddressBytesToStringResponseProtoMsg): _8.AddressBytesToStringResponse;
                toProto(message: _8.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _8.AddressBytesToStringResponse): _8.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                encode(message: _8.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.AddressStringToBytesRequest;
                fromJSON(object: any): _8.AddressStringToBytesRequest;
                toJSON(message: _8.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_8.AddressStringToBytesRequest>): _8.AddressStringToBytesRequest;
                fromAmino(object: _8.AddressStringToBytesRequestAmino): _8.AddressStringToBytesRequest;
                toAmino(message: _8.AddressStringToBytesRequest): _8.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _8.AddressStringToBytesRequestAminoMsg): _8.AddressStringToBytesRequest;
                toAminoMsg(message: _8.AddressStringToBytesRequest): _8.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _8.AddressStringToBytesRequestProtoMsg): _8.AddressStringToBytesRequest;
                toProto(message: _8.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _8.AddressStringToBytesRequest): _8.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                encode(message: _8.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.AddressStringToBytesResponse;
                fromJSON(object: any): _8.AddressStringToBytesResponse;
                toJSON(message: _8.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_8.AddressStringToBytesResponse>): _8.AddressStringToBytesResponse;
                fromAmino(object: _8.AddressStringToBytesResponseAmino): _8.AddressStringToBytesResponse;
                toAmino(message: _8.AddressStringToBytesResponse): _8.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _8.AddressStringToBytesResponseAminoMsg): _8.AddressStringToBytesResponse;
                toAminoMsg(message: _8.AddressStringToBytesResponse): _8.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _8.AddressStringToBytesResponseProtoMsg): _8.AddressStringToBytesResponse;
                toProto(message: _8.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _8.AddressStringToBytesResponse): _8.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _8.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryAccountAddressByIDRequest;
                fromJSON(object: any): _8.QueryAccountAddressByIDRequest;
                toJSON(message: _8.QueryAccountAddressByIDRequest): unknown;
                fromPartial(object: Partial<_8.QueryAccountAddressByIDRequest>): _8.QueryAccountAddressByIDRequest;
                fromAmino(object: _8.QueryAccountAddressByIDRequestAmino): _8.QueryAccountAddressByIDRequest;
                toAmino(message: _8.QueryAccountAddressByIDRequest): _8.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _8.QueryAccountAddressByIDRequestAminoMsg): _8.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _8.QueryAccountAddressByIDRequest): _8.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _8.QueryAccountAddressByIDRequestProtoMsg): _8.QueryAccountAddressByIDRequest;
                toProto(message: _8.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _8.QueryAccountAddressByIDRequest): _8.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _8.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryAccountAddressByIDResponse;
                fromJSON(object: any): _8.QueryAccountAddressByIDResponse;
                toJSON(message: _8.QueryAccountAddressByIDResponse): unknown;
                fromPartial(object: Partial<_8.QueryAccountAddressByIDResponse>): _8.QueryAccountAddressByIDResponse;
                fromAmino(object: _8.QueryAccountAddressByIDResponseAmino): _8.QueryAccountAddressByIDResponse;
                toAmino(message: _8.QueryAccountAddressByIDResponse): _8.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _8.QueryAccountAddressByIDResponseAminoMsg): _8.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _8.QueryAccountAddressByIDResponse): _8.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _8.QueryAccountAddressByIDResponseProtoMsg): _8.QueryAccountAddressByIDResponse;
                toProto(message: _8.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _8.QueryAccountAddressByIDResponse): _8.QueryAccountAddressByIDResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _6.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _6.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                encode(message: _7.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _7.GenesisState;
                fromJSON(object: any): _7.GenesisState;
                toJSON(message: _7.GenesisState): unknown;
                fromPartial(object: Partial<_7.GenesisState>): _7.GenesisState;
                fromAmino(object: _7.GenesisStateAmino): _7.GenesisState;
                toAmino(message: _7.GenesisState): _7.GenesisStateAmino;
                fromAminoMsg(object: _7.GenesisStateAminoMsg): _7.GenesisState;
                toAminoMsg(message: _7.GenesisState): _7.GenesisStateAminoMsg;
                fromProtoMsg(message: _7.GenesisStateProtoMsg): _7.GenesisState;
                toProto(message: _7.GenesisState): Uint8Array;
                toProtoMsg(message: _7.GenesisState): _7.GenesisStateProtoMsg;
            };
            BaseAccount: {
                encode(message: _6.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _6.BaseAccount;
                fromJSON(object: any): _6.BaseAccount;
                toJSON(message: _6.BaseAccount): unknown;
                fromPartial(object: Partial<_6.BaseAccount>): _6.BaseAccount;
                fromAmino(object: _6.BaseAccountAmino): _6.BaseAccount;
                toAmino(message: _6.BaseAccount): _6.BaseAccountAmino;
                fromAminoMsg(object: _6.BaseAccountAminoMsg): _6.BaseAccount;
                toAminoMsg(message: _6.BaseAccount): _6.BaseAccountAminoMsg;
                fromProtoMsg(message: _6.BaseAccountProtoMsg): _6.BaseAccount;
                toProto(message: _6.BaseAccount): Uint8Array;
                toProtoMsg(message: _6.BaseAccount): _6.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                encode(message: _6.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _6.ModuleAccount;
                fromJSON(object: any): _6.ModuleAccount;
                toJSON(message: _6.ModuleAccount): unknown;
                fromPartial(object: Partial<_6.ModuleAccount>): _6.ModuleAccount;
                fromAmino(object: _6.ModuleAccountAmino): _6.ModuleAccount;
                toAmino(message: _6.ModuleAccount): _6.ModuleAccountAmino;
                fromAminoMsg(object: _6.ModuleAccountAminoMsg): _6.ModuleAccount;
                toAminoMsg(message: _6.ModuleAccount): _6.ModuleAccountAminoMsg;
                fromProtoMsg(message: _6.ModuleAccountProtoMsg): _6.ModuleAccount;
                toProto(message: _6.ModuleAccount): Uint8Array;
                toProtoMsg(message: _6.ModuleAccount): _6.ModuleAccountProtoMsg;
            };
            Params: {
                encode(message: _6.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _6.Params;
                fromJSON(object: any): _6.Params;
                toJSON(message: _6.Params): unknown;
                fromPartial(object: Partial<_6.Params>): _6.Params;
                fromAmino(object: _6.ParamsAmino): _6.Params;
                toAmino(message: _6.Params): _6.ParamsAmino;
                fromAminoMsg(object: _6.ParamsAminoMsg): _6.Params;
                toAminoMsg(message: _6.Params): _6.ParamsAminoMsg;
                fromProtoMsg(message: _6.ParamsProtoMsg): _6.Params;
                toProto(message: _6.Params): Uint8Array;
                toProtoMsg(message: _6.Params): _6.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _216.MsgClientImpl;
            QueryClientImpl: typeof _199.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _12.QueryGrantsRequest): Promise<_12.QueryGrantsResponse>;
                granterGrants(request: _12.QueryGranterGrantsRequest): Promise<_12.QueryGranterGrantsResponse>;
                granteeGrants(request: _12.QueryGranteeGrantsRequest): Promise<_12.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _180.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _13.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _13.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _13.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _13.MsgGrant): {
                        typeUrl: string;
                        value: _13.MsgGrant;
                    };
                    exec(value: _13.MsgExec): {
                        typeUrl: string;
                        value: _13.MsgExec;
                    };
                    revoke(value: _13.MsgRevoke): {
                        typeUrl: string;
                        value: _13.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _13.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _13.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _13.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _13.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _13.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _13.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _13.MsgGrant): {
                        typeUrl: string;
                        value: _13.MsgGrant;
                    };
                    exec(value: _13.MsgExec): {
                        typeUrl: string;
                        value: _13.MsgExec;
                    };
                    revoke(value: _13.MsgRevoke): {
                        typeUrl: string;
                        value: _13.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _13.MsgGrant) => _13.MsgGrantAmino;
                    fromAmino: (object: _13.MsgGrantAmino) => _13.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _13.MsgExec) => _13.MsgExecAmino;
                    fromAmino: (object: _13.MsgExecAmino) => _13.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _13.MsgRevoke) => _13.MsgRevokeAmino;
                    fromAmino: (object: _13.MsgRevokeAmino) => _13.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _13.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _13.MsgGrant;
                fromJSON(object: any): _13.MsgGrant;
                toJSON(message: _13.MsgGrant): unknown;
                fromPartial(object: Partial<_13.MsgGrant>): _13.MsgGrant;
                fromAmino(object: _13.MsgGrantAmino): _13.MsgGrant;
                toAmino(message: _13.MsgGrant): _13.MsgGrantAmino;
                fromAminoMsg(object: _13.MsgGrantAminoMsg): _13.MsgGrant;
                toAminoMsg(message: _13.MsgGrant): _13.MsgGrantAminoMsg;
                fromProtoMsg(message: _13.MsgGrantProtoMsg): _13.MsgGrant;
                toProto(message: _13.MsgGrant): Uint8Array;
                toProtoMsg(message: _13.MsgGrant): _13.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                encode(message: _13.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _13.MsgExecResponse;
                fromJSON(object: any): _13.MsgExecResponse;
                toJSON(message: _13.MsgExecResponse): unknown;
                fromPartial(object: Partial<_13.MsgExecResponse>): _13.MsgExecResponse;
                fromAmino(object: _13.MsgExecResponseAmino): _13.MsgExecResponse;
                toAmino(message: _13.MsgExecResponse): _13.MsgExecResponseAmino;
                fromAminoMsg(object: _13.MsgExecResponseAminoMsg): _13.MsgExecResponse;
                toAminoMsg(message: _13.MsgExecResponse): _13.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _13.MsgExecResponseProtoMsg): _13.MsgExecResponse;
                toProto(message: _13.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _13.MsgExecResponse): _13.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                encode(message: _13.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _13.MsgExec;
                fromJSON(object: any): _13.MsgExec;
                toJSON(message: _13.MsgExec): unknown;
                fromPartial(object: Partial<_13.MsgExec>): _13.MsgExec;
                fromAmino(object: _13.MsgExecAmino): _13.MsgExec;
                toAmino(message: _13.MsgExec): _13.MsgExecAmino;
                fromAminoMsg(object: _13.MsgExecAminoMsg): _13.MsgExec;
                toAminoMsg(message: _13.MsgExec): _13.MsgExecAminoMsg;
                fromProtoMsg(message: _13.MsgExecProtoMsg): _13.MsgExec;
                toProto(message: _13.MsgExec): Uint8Array;
                toProtoMsg(message: _13.MsgExec): _13.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                encode(_: _13.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _13.MsgGrantResponse;
                fromJSON(_: any): _13.MsgGrantResponse;
                toJSON(_: _13.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_13.MsgGrantResponse>): _13.MsgGrantResponse;
                fromAmino(_: _13.MsgGrantResponseAmino): _13.MsgGrantResponse;
                toAmino(_: _13.MsgGrantResponse): _13.MsgGrantResponseAmino;
                fromAminoMsg(object: _13.MsgGrantResponseAminoMsg): _13.MsgGrantResponse;
                toAminoMsg(message: _13.MsgGrantResponse): _13.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _13.MsgGrantResponseProtoMsg): _13.MsgGrantResponse;
                toProto(message: _13.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _13.MsgGrantResponse): _13.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                encode(message: _13.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _13.MsgRevoke;
                fromJSON(object: any): _13.MsgRevoke;
                toJSON(message: _13.MsgRevoke): unknown;
                fromPartial(object: Partial<_13.MsgRevoke>): _13.MsgRevoke;
                fromAmino(object: _13.MsgRevokeAmino): _13.MsgRevoke;
                toAmino(message: _13.MsgRevoke): _13.MsgRevokeAmino;
                fromAminoMsg(object: _13.MsgRevokeAminoMsg): _13.MsgRevoke;
                toAminoMsg(message: _13.MsgRevoke): _13.MsgRevokeAminoMsg;
                fromProtoMsg(message: _13.MsgRevokeProtoMsg): _13.MsgRevoke;
                toProto(message: _13.MsgRevoke): Uint8Array;
                toProtoMsg(message: _13.MsgRevoke): _13.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                encode(_: _13.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _13.MsgRevokeResponse;
                fromJSON(_: any): _13.MsgRevokeResponse;
                toJSON(_: _13.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_13.MsgRevokeResponse>): _13.MsgRevokeResponse;
                fromAmino(_: _13.MsgRevokeResponseAmino): _13.MsgRevokeResponse;
                toAmino(_: _13.MsgRevokeResponse): _13.MsgRevokeResponseAmino;
                fromAminoMsg(object: _13.MsgRevokeResponseAminoMsg): _13.MsgRevokeResponse;
                toAminoMsg(message: _13.MsgRevokeResponse): _13.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _13.MsgRevokeResponseProtoMsg): _13.MsgRevokeResponse;
                toProto(message: _13.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _13.MsgRevokeResponse): _13.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                encode(message: _12.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _12.QueryGrantsRequest;
                fromJSON(object: any): _12.QueryGrantsRequest;
                toJSON(message: _12.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_12.QueryGrantsRequest>): _12.QueryGrantsRequest;
                fromAmino(object: _12.QueryGrantsRequestAmino): _12.QueryGrantsRequest;
                toAmino(message: _12.QueryGrantsRequest): _12.QueryGrantsRequestAmino;
                fromAminoMsg(object: _12.QueryGrantsRequestAminoMsg): _12.QueryGrantsRequest;
                toAminoMsg(message: _12.QueryGrantsRequest): _12.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _12.QueryGrantsRequestProtoMsg): _12.QueryGrantsRequest;
                toProto(message: _12.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _12.QueryGrantsRequest): _12.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                encode(message: _12.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _12.QueryGrantsResponse;
                fromJSON(object: any): _12.QueryGrantsResponse;
                toJSON(message: _12.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_12.QueryGrantsResponse>): _12.QueryGrantsResponse;
                fromAmino(object: _12.QueryGrantsResponseAmino): _12.QueryGrantsResponse;
                toAmino(message: _12.QueryGrantsResponse): _12.QueryGrantsResponseAmino;
                fromAminoMsg(object: _12.QueryGrantsResponseAminoMsg): _12.QueryGrantsResponse;
                toAminoMsg(message: _12.QueryGrantsResponse): _12.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _12.QueryGrantsResponseProtoMsg): _12.QueryGrantsResponse;
                toProto(message: _12.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryGrantsResponse): _12.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                encode(message: _12.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _12.QueryGranterGrantsRequest;
                fromJSON(object: any): _12.QueryGranterGrantsRequest;
                toJSON(message: _12.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_12.QueryGranterGrantsRequest>): _12.QueryGranterGrantsRequest;
                fromAmino(object: _12.QueryGranterGrantsRequestAmino): _12.QueryGranterGrantsRequest;
                toAmino(message: _12.QueryGranterGrantsRequest): _12.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _12.QueryGranterGrantsRequestAminoMsg): _12.QueryGranterGrantsRequest;
                toAminoMsg(message: _12.QueryGranterGrantsRequest): _12.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _12.QueryGranterGrantsRequestProtoMsg): _12.QueryGranterGrantsRequest;
                toProto(message: _12.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _12.QueryGranterGrantsRequest): _12.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                encode(message: _12.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _12.QueryGranterGrantsResponse;
                fromJSON(object: any): _12.QueryGranterGrantsResponse;
                toJSON(message: _12.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_12.QueryGranterGrantsResponse>): _12.QueryGranterGrantsResponse;
                fromAmino(object: _12.QueryGranterGrantsResponseAmino): _12.QueryGranterGrantsResponse;
                toAmino(message: _12.QueryGranterGrantsResponse): _12.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _12.QueryGranterGrantsResponseAminoMsg): _12.QueryGranterGrantsResponse;
                toAminoMsg(message: _12.QueryGranterGrantsResponse): _12.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _12.QueryGranterGrantsResponseProtoMsg): _12.QueryGranterGrantsResponse;
                toProto(message: _12.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryGranterGrantsResponse): _12.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _12.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _12.QueryGranteeGrantsRequest;
                fromJSON(object: any): _12.QueryGranteeGrantsRequest;
                toJSON(message: _12.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_12.QueryGranteeGrantsRequest>): _12.QueryGranteeGrantsRequest;
                fromAmino(object: _12.QueryGranteeGrantsRequestAmino): _12.QueryGranteeGrantsRequest;
                toAmino(message: _12.QueryGranteeGrantsRequest): _12.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _12.QueryGranteeGrantsRequestAminoMsg): _12.QueryGranteeGrantsRequest;
                toAminoMsg(message: _12.QueryGranteeGrantsRequest): _12.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _12.QueryGranteeGrantsRequestProtoMsg): _12.QueryGranteeGrantsRequest;
                toProto(message: _12.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _12.QueryGranteeGrantsRequest): _12.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _12.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _12.QueryGranteeGrantsResponse;
                fromJSON(object: any): _12.QueryGranteeGrantsResponse;
                toJSON(message: _12.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_12.QueryGranteeGrantsResponse>): _12.QueryGranteeGrantsResponse;
                fromAmino(object: _12.QueryGranteeGrantsResponseAmino): _12.QueryGranteeGrantsResponse;
                toAmino(message: _12.QueryGranteeGrantsResponse): _12.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _12.QueryGranteeGrantsResponseAminoMsg): _12.QueryGranteeGrantsResponse;
                toAminoMsg(message: _12.QueryGranteeGrantsResponse): _12.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _12.QueryGranteeGrantsResponseProtoMsg): _12.QueryGranteeGrantsResponse;
                toProto(message: _12.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryGranteeGrantsResponse): _12.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _11.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _11.GenesisState;
                fromJSON(object: any): _11.GenesisState;
                toJSON(message: _11.GenesisState): unknown;
                fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
                fromAmino(object: _11.GenesisStateAmino): _11.GenesisState;
                toAmino(message: _11.GenesisState): _11.GenesisStateAmino;
                fromAminoMsg(object: _11.GenesisStateAminoMsg): _11.GenesisState;
                toAminoMsg(message: _11.GenesisState): _11.GenesisStateAminoMsg;
                fromProtoMsg(message: _11.GenesisStateProtoMsg): _11.GenesisState;
                toProto(message: _11.GenesisState): Uint8Array;
                toProtoMsg(message: _11.GenesisState): _11.GenesisStateProtoMsg;
            };
            EventGrant: {
                encode(message: _10.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _10.EventGrant;
                fromJSON(object: any): _10.EventGrant;
                toJSON(message: _10.EventGrant): unknown;
                fromPartial(object: Partial<_10.EventGrant>): _10.EventGrant;
                fromAmino(object: _10.EventGrantAmino): _10.EventGrant;
                toAmino(message: _10.EventGrant): _10.EventGrantAmino;
                fromAminoMsg(object: _10.EventGrantAminoMsg): _10.EventGrant;
                toAminoMsg(message: _10.EventGrant): _10.EventGrantAminoMsg;
                fromProtoMsg(message: _10.EventGrantProtoMsg): _10.EventGrant;
                toProto(message: _10.EventGrant): Uint8Array;
                toProtoMsg(message: _10.EventGrant): _10.EventGrantProtoMsg;
            };
            EventRevoke: {
                encode(message: _10.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _10.EventRevoke;
                fromJSON(object: any): _10.EventRevoke;
                toJSON(message: _10.EventRevoke): unknown;
                fromPartial(object: Partial<_10.EventRevoke>): _10.EventRevoke;
                fromAmino(object: _10.EventRevokeAmino): _10.EventRevoke;
                toAmino(message: _10.EventRevoke): _10.EventRevokeAmino;
                fromAminoMsg(object: _10.EventRevokeAminoMsg): _10.EventRevoke;
                toAminoMsg(message: _10.EventRevoke): _10.EventRevokeAminoMsg;
                fromProtoMsg(message: _10.EventRevokeProtoMsg): _10.EventRevoke;
                toProto(message: _10.EventRevoke): Uint8Array;
                toProtoMsg(message: _10.EventRevoke): _10.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                encode(message: _9.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.GenericAuthorization;
                fromJSON(object: any): _9.GenericAuthorization;
                toJSON(message: _9.GenericAuthorization): unknown;
                fromPartial(object: Partial<_9.GenericAuthorization>): _9.GenericAuthorization;
                fromAmino(object: _9.GenericAuthorizationAmino): _9.GenericAuthorization;
                toAmino(message: _9.GenericAuthorization): _9.GenericAuthorizationAmino;
                fromAminoMsg(object: _9.GenericAuthorizationAminoMsg): _9.GenericAuthorization;
                toAminoMsg(message: _9.GenericAuthorization): _9.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _9.GenericAuthorizationProtoMsg): _9.GenericAuthorization;
                toProto(message: _9.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _9.GenericAuthorization): _9.GenericAuthorizationProtoMsg;
            };
            Grant: {
                encode(message: _9.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.Grant;
                fromJSON(object: any): _9.Grant;
                toJSON(message: _9.Grant): unknown;
                fromPartial(object: Partial<_9.Grant>): _9.Grant;
                fromAmino(object: _9.GrantAmino): _9.Grant;
                toAmino(message: _9.Grant): _9.GrantAmino;
                fromAminoMsg(object: _9.GrantAminoMsg): _9.Grant;
                toAminoMsg(message: _9.Grant): _9.GrantAminoMsg;
                fromProtoMsg(message: _9.GrantProtoMsg): _9.Grant;
                toProto(message: _9.Grant): Uint8Array;
                toProtoMsg(message: _9.Grant): _9.GrantProtoMsg;
            };
            GrantAuthorization: {
                encode(message: _9.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.GrantAuthorization;
                fromJSON(object: any): _9.GrantAuthorization;
                toJSON(message: _9.GrantAuthorization): unknown;
                fromPartial(object: Partial<_9.GrantAuthorization>): _9.GrantAuthorization;
                fromAmino(object: _9.GrantAuthorizationAmino): _9.GrantAuthorization;
                toAmino(message: _9.GrantAuthorization): _9.GrantAuthorizationAmino;
                fromAminoMsg(object: _9.GrantAuthorizationAminoMsg): _9.GrantAuthorization;
                toAminoMsg(message: _9.GrantAuthorization): _9.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _9.GrantAuthorizationProtoMsg): _9.GrantAuthorization;
                toProto(message: _9.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _9.GrantAuthorization): _9.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                encode(message: _9.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.GrantQueueItem;
                fromJSON(object: any): _9.GrantQueueItem;
                toJSON(message: _9.GrantQueueItem): unknown;
                fromPartial(object: Partial<_9.GrantQueueItem>): _9.GrantQueueItem;
                fromAmino(object: _9.GrantQueueItemAmino): _9.GrantQueueItem;
                toAmino(message: _9.GrantQueueItem): _9.GrantQueueItemAmino;
                fromAminoMsg(object: _9.GrantQueueItemAminoMsg): _9.GrantQueueItem;
                toAminoMsg(message: _9.GrantQueueItem): _9.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _9.GrantQueueItemProtoMsg): _9.GrantQueueItem;
                toProto(message: _9.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _9.GrantQueueItem): _9.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _14.SendAuthorization | _85.StakeAuthorization | _9.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _217.MsgClientImpl;
            QueryClientImpl: typeof _200.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _17.QueryBalanceRequest): Promise<_17.QueryBalanceResponse>;
                allBalances(request: _17.QueryAllBalancesRequest): Promise<_17.QueryAllBalancesResponse>;
                spendableBalances(request: _17.QuerySpendableBalancesRequest): Promise<_17.QuerySpendableBalancesResponse>;
                totalSupply(request?: _17.QueryTotalSupplyRequest | undefined): Promise<_17.QueryTotalSupplyResponse>;
                supplyOf(request: _17.QuerySupplyOfRequest): Promise<_17.QuerySupplyOfResponse>;
                params(request?: _17.QueryParamsRequest | undefined): Promise<_17.QueryParamsResponse>;
                denomMetadata(request: _17.QueryDenomMetadataRequest): Promise<_17.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _17.QueryDenomsMetadataRequest | undefined): Promise<_17.QueryDenomsMetadataResponse>;
                denomOwners(request: _17.QueryDenomOwnersRequest): Promise<_17.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _181.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _18.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _18.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _18.MsgSend): {
                        typeUrl: string;
                        value: _18.MsgSend;
                    };
                    multiSend(value: _18.MsgMultiSend): {
                        typeUrl: string;
                        value: _18.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _18.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _18.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _18.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _18.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _18.MsgSend): {
                        typeUrl: string;
                        value: _18.MsgSend;
                    };
                    multiSend(value: _18.MsgMultiSend): {
                        typeUrl: string;
                        value: _18.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _18.MsgSend) => _18.MsgSendAmino;
                    fromAmino: (object: _18.MsgSendAmino) => _18.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _18.MsgMultiSend) => _18.MsgMultiSendAmino;
                    fromAmino: (object: _18.MsgMultiSendAmino) => _18.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _18.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _18.MsgSend;
                fromJSON(object: any): _18.MsgSend;
                toJSON(message: _18.MsgSend): unknown;
                fromPartial(object: Partial<_18.MsgSend>): _18.MsgSend;
                fromAmino(object: _18.MsgSendAmino): _18.MsgSend;
                toAmino(message: _18.MsgSend): _18.MsgSendAmino;
                fromAminoMsg(object: _18.MsgSendAminoMsg): _18.MsgSend;
                toAminoMsg(message: _18.MsgSend): _18.MsgSendAminoMsg;
                fromProtoMsg(message: _18.MsgSendProtoMsg): _18.MsgSend;
                toProto(message: _18.MsgSend): Uint8Array;
                toProtoMsg(message: _18.MsgSend): _18.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _18.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _18.MsgSendResponse;
                fromJSON(_: any): _18.MsgSendResponse;
                toJSON(_: _18.MsgSendResponse): unknown;
                fromPartial(_: Partial<_18.MsgSendResponse>): _18.MsgSendResponse;
                fromAmino(_: _18.MsgSendResponseAmino): _18.MsgSendResponse;
                toAmino(_: _18.MsgSendResponse): _18.MsgSendResponseAmino;
                fromAminoMsg(object: _18.MsgSendResponseAminoMsg): _18.MsgSendResponse;
                toAminoMsg(message: _18.MsgSendResponse): _18.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _18.MsgSendResponseProtoMsg): _18.MsgSendResponse;
                toProto(message: _18.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _18.MsgSendResponse): _18.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                encode(message: _18.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _18.MsgMultiSend;
                fromJSON(object: any): _18.MsgMultiSend;
                toJSON(message: _18.MsgMultiSend): unknown;
                fromPartial(object: Partial<_18.MsgMultiSend>): _18.MsgMultiSend;
                fromAmino(object: _18.MsgMultiSendAmino): _18.MsgMultiSend;
                toAmino(message: _18.MsgMultiSend): _18.MsgMultiSendAmino;
                fromAminoMsg(object: _18.MsgMultiSendAminoMsg): _18.MsgMultiSend;
                toAminoMsg(message: _18.MsgMultiSend): _18.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _18.MsgMultiSendProtoMsg): _18.MsgMultiSend;
                toProto(message: _18.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _18.MsgMultiSend): _18.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                encode(_: _18.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _18.MsgMultiSendResponse;
                fromJSON(_: any): _18.MsgMultiSendResponse;
                toJSON(_: _18.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_18.MsgMultiSendResponse>): _18.MsgMultiSendResponse;
                fromAmino(_: _18.MsgMultiSendResponseAmino): _18.MsgMultiSendResponse;
                toAmino(_: _18.MsgMultiSendResponse): _18.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _18.MsgMultiSendResponseAminoMsg): _18.MsgMultiSendResponse;
                toAminoMsg(message: _18.MsgMultiSendResponse): _18.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _18.MsgMultiSendResponseProtoMsg): _18.MsgMultiSendResponse;
                toProto(message: _18.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _18.MsgMultiSendResponse): _18.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _17.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryBalanceRequest;
                fromJSON(object: any): _17.QueryBalanceRequest;
                toJSON(message: _17.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_17.QueryBalanceRequest>): _17.QueryBalanceRequest;
                fromAmino(object: _17.QueryBalanceRequestAmino): _17.QueryBalanceRequest;
                toAmino(message: _17.QueryBalanceRequest): _17.QueryBalanceRequestAmino;
                fromAminoMsg(object: _17.QueryBalanceRequestAminoMsg): _17.QueryBalanceRequest;
                toAminoMsg(message: _17.QueryBalanceRequest): _17.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _17.QueryBalanceRequestProtoMsg): _17.QueryBalanceRequest;
                toProto(message: _17.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _17.QueryBalanceRequest): _17.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _17.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryBalanceResponse;
                fromJSON(object: any): _17.QueryBalanceResponse;
                toJSON(message: _17.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_17.QueryBalanceResponse>): _17.QueryBalanceResponse;
                fromAmino(object: _17.QueryBalanceResponseAmino): _17.QueryBalanceResponse;
                toAmino(message: _17.QueryBalanceResponse): _17.QueryBalanceResponseAmino;
                fromAminoMsg(object: _17.QueryBalanceResponseAminoMsg): _17.QueryBalanceResponse;
                toAminoMsg(message: _17.QueryBalanceResponse): _17.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _17.QueryBalanceResponseProtoMsg): _17.QueryBalanceResponse;
                toProto(message: _17.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _17.QueryBalanceResponse): _17.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                encode(message: _17.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryAllBalancesRequest;
                fromJSON(object: any): _17.QueryAllBalancesRequest;
                toJSON(message: _17.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_17.QueryAllBalancesRequest>): _17.QueryAllBalancesRequest;
                fromAmino(object: _17.QueryAllBalancesRequestAmino): _17.QueryAllBalancesRequest;
                toAmino(message: _17.QueryAllBalancesRequest): _17.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _17.QueryAllBalancesRequestAminoMsg): _17.QueryAllBalancesRequest;
                toAminoMsg(message: _17.QueryAllBalancesRequest): _17.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _17.QueryAllBalancesRequestProtoMsg): _17.QueryAllBalancesRequest;
                toProto(message: _17.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _17.QueryAllBalancesRequest): _17.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                encode(message: _17.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryAllBalancesResponse;
                fromJSON(object: any): _17.QueryAllBalancesResponse;
                toJSON(message: _17.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_17.QueryAllBalancesResponse>): _17.QueryAllBalancesResponse;
                fromAmino(object: _17.QueryAllBalancesResponseAmino): _17.QueryAllBalancesResponse;
                toAmino(message: _17.QueryAllBalancesResponse): _17.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _17.QueryAllBalancesResponseAminoMsg): _17.QueryAllBalancesResponse;
                toAminoMsg(message: _17.QueryAllBalancesResponse): _17.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _17.QueryAllBalancesResponseProtoMsg): _17.QueryAllBalancesResponse;
                toProto(message: _17.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _17.QueryAllBalancesResponse): _17.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _17.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QuerySpendableBalancesRequest;
                fromJSON(object: any): _17.QuerySpendableBalancesRequest;
                toJSON(message: _17.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_17.QuerySpendableBalancesRequest>): _17.QuerySpendableBalancesRequest;
                fromAmino(object: _17.QuerySpendableBalancesRequestAmino): _17.QuerySpendableBalancesRequest;
                toAmino(message: _17.QuerySpendableBalancesRequest): _17.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _17.QuerySpendableBalancesRequestAminoMsg): _17.QuerySpendableBalancesRequest;
                toAminoMsg(message: _17.QuerySpendableBalancesRequest): _17.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _17.QuerySpendableBalancesRequestProtoMsg): _17.QuerySpendableBalancesRequest;
                toProto(message: _17.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _17.QuerySpendableBalancesRequest): _17.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _17.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QuerySpendableBalancesResponse;
                fromJSON(object: any): _17.QuerySpendableBalancesResponse;
                toJSON(message: _17.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_17.QuerySpendableBalancesResponse>): _17.QuerySpendableBalancesResponse;
                fromAmino(object: _17.QuerySpendableBalancesResponseAmino): _17.QuerySpendableBalancesResponse;
                toAmino(message: _17.QuerySpendableBalancesResponse): _17.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _17.QuerySpendableBalancesResponseAminoMsg): _17.QuerySpendableBalancesResponse;
                toAminoMsg(message: _17.QuerySpendableBalancesResponse): _17.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _17.QuerySpendableBalancesResponseProtoMsg): _17.QuerySpendableBalancesResponse;
                toProto(message: _17.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _17.QuerySpendableBalancesResponse): _17.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                encode(message: _17.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryTotalSupplyRequest;
                fromJSON(object: any): _17.QueryTotalSupplyRequest;
                toJSON(message: _17.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_17.QueryTotalSupplyRequest>): _17.QueryTotalSupplyRequest;
                fromAmino(object: _17.QueryTotalSupplyRequestAmino): _17.QueryTotalSupplyRequest;
                toAmino(message: _17.QueryTotalSupplyRequest): _17.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _17.QueryTotalSupplyRequestAminoMsg): _17.QueryTotalSupplyRequest;
                toAminoMsg(message: _17.QueryTotalSupplyRequest): _17.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _17.QueryTotalSupplyRequestProtoMsg): _17.QueryTotalSupplyRequest;
                toProto(message: _17.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _17.QueryTotalSupplyRequest): _17.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                encode(message: _17.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryTotalSupplyResponse;
                fromJSON(object: any): _17.QueryTotalSupplyResponse;
                toJSON(message: _17.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_17.QueryTotalSupplyResponse>): _17.QueryTotalSupplyResponse;
                fromAmino(object: _17.QueryTotalSupplyResponseAmino): _17.QueryTotalSupplyResponse;
                toAmino(message: _17.QueryTotalSupplyResponse): _17.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _17.QueryTotalSupplyResponseAminoMsg): _17.QueryTotalSupplyResponse;
                toAminoMsg(message: _17.QueryTotalSupplyResponse): _17.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _17.QueryTotalSupplyResponseProtoMsg): _17.QueryTotalSupplyResponse;
                toProto(message: _17.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _17.QueryTotalSupplyResponse): _17.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                encode(message: _17.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QuerySupplyOfRequest;
                fromJSON(object: any): _17.QuerySupplyOfRequest;
                toJSON(message: _17.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_17.QuerySupplyOfRequest>): _17.QuerySupplyOfRequest;
                fromAmino(object: _17.QuerySupplyOfRequestAmino): _17.QuerySupplyOfRequest;
                toAmino(message: _17.QuerySupplyOfRequest): _17.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _17.QuerySupplyOfRequestAminoMsg): _17.QuerySupplyOfRequest;
                toAminoMsg(message: _17.QuerySupplyOfRequest): _17.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _17.QuerySupplyOfRequestProtoMsg): _17.QuerySupplyOfRequest;
                toProto(message: _17.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _17.QuerySupplyOfRequest): _17.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                encode(message: _17.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QuerySupplyOfResponse;
                fromJSON(object: any): _17.QuerySupplyOfResponse;
                toJSON(message: _17.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_17.QuerySupplyOfResponse>): _17.QuerySupplyOfResponse;
                fromAmino(object: _17.QuerySupplyOfResponseAmino): _17.QuerySupplyOfResponse;
                toAmino(message: _17.QuerySupplyOfResponse): _17.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _17.QuerySupplyOfResponseAminoMsg): _17.QuerySupplyOfResponse;
                toAminoMsg(message: _17.QuerySupplyOfResponse): _17.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _17.QuerySupplyOfResponseProtoMsg): _17.QuerySupplyOfResponse;
                toProto(message: _17.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _17.QuerySupplyOfResponse): _17.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _17.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryParamsRequest;
                fromJSON(_: any): _17.QueryParamsRequest;
                toJSON(_: _17.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_17.QueryParamsRequest>): _17.QueryParamsRequest;
                fromAmino(_: _17.QueryParamsRequestAmino): _17.QueryParamsRequest;
                toAmino(_: _17.QueryParamsRequest): _17.QueryParamsRequestAmino;
                fromAminoMsg(object: _17.QueryParamsRequestAminoMsg): _17.QueryParamsRequest;
                toAminoMsg(message: _17.QueryParamsRequest): _17.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _17.QueryParamsRequestProtoMsg): _17.QueryParamsRequest;
                toProto(message: _17.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryParamsRequest): _17.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _17.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryParamsResponse;
                fromJSON(object: any): _17.QueryParamsResponse;
                toJSON(message: _17.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_17.QueryParamsResponse>): _17.QueryParamsResponse;
                fromAmino(object: _17.QueryParamsResponseAmino): _17.QueryParamsResponse;
                toAmino(message: _17.QueryParamsResponse): _17.QueryParamsResponseAmino;
                fromAminoMsg(object: _17.QueryParamsResponseAminoMsg): _17.QueryParamsResponse;
                toAminoMsg(message: _17.QueryParamsResponse): _17.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _17.QueryParamsResponseProtoMsg): _17.QueryParamsResponse;
                toProto(message: _17.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryParamsResponse): _17.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _17.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryDenomsMetadataRequest;
                fromJSON(object: any): _17.QueryDenomsMetadataRequest;
                toJSON(message: _17.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_17.QueryDenomsMetadataRequest>): _17.QueryDenomsMetadataRequest;
                fromAmino(object: _17.QueryDenomsMetadataRequestAmino): _17.QueryDenomsMetadataRequest;
                toAmino(message: _17.QueryDenomsMetadataRequest): _17.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _17.QueryDenomsMetadataRequestAminoMsg): _17.QueryDenomsMetadataRequest;
                toAminoMsg(message: _17.QueryDenomsMetadataRequest): _17.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _17.QueryDenomsMetadataRequestProtoMsg): _17.QueryDenomsMetadataRequest;
                toProto(message: _17.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _17.QueryDenomsMetadataRequest): _17.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _17.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryDenomsMetadataResponse;
                fromJSON(object: any): _17.QueryDenomsMetadataResponse;
                toJSON(message: _17.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_17.QueryDenomsMetadataResponse>): _17.QueryDenomsMetadataResponse;
                fromAmino(object: _17.QueryDenomsMetadataResponseAmino): _17.QueryDenomsMetadataResponse;
                toAmino(message: _17.QueryDenomsMetadataResponse): _17.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _17.QueryDenomsMetadataResponseAminoMsg): _17.QueryDenomsMetadataResponse;
                toAminoMsg(message: _17.QueryDenomsMetadataResponse): _17.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _17.QueryDenomsMetadataResponseProtoMsg): _17.QueryDenomsMetadataResponse;
                toProto(message: _17.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _17.QueryDenomsMetadataResponse): _17.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                encode(message: _17.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryDenomMetadataRequest;
                fromJSON(object: any): _17.QueryDenomMetadataRequest;
                toJSON(message: _17.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_17.QueryDenomMetadataRequest>): _17.QueryDenomMetadataRequest;
                fromAmino(object: _17.QueryDenomMetadataRequestAmino): _17.QueryDenomMetadataRequest;
                toAmino(message: _17.QueryDenomMetadataRequest): _17.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _17.QueryDenomMetadataRequestAminoMsg): _17.QueryDenomMetadataRequest;
                toAminoMsg(message: _17.QueryDenomMetadataRequest): _17.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _17.QueryDenomMetadataRequestProtoMsg): _17.QueryDenomMetadataRequest;
                toProto(message: _17.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _17.QueryDenomMetadataRequest): _17.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                encode(message: _17.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryDenomMetadataResponse;
                fromJSON(object: any): _17.QueryDenomMetadataResponse;
                toJSON(message: _17.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_17.QueryDenomMetadataResponse>): _17.QueryDenomMetadataResponse;
                fromAmino(object: _17.QueryDenomMetadataResponseAmino): _17.QueryDenomMetadataResponse;
                toAmino(message: _17.QueryDenomMetadataResponse): _17.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _17.QueryDenomMetadataResponseAminoMsg): _17.QueryDenomMetadataResponse;
                toAminoMsg(message: _17.QueryDenomMetadataResponse): _17.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _17.QueryDenomMetadataResponseProtoMsg): _17.QueryDenomMetadataResponse;
                toProto(message: _17.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _17.QueryDenomMetadataResponse): _17.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                encode(message: _17.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryDenomOwnersRequest;
                fromJSON(object: any): _17.QueryDenomOwnersRequest;
                toJSON(message: _17.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_17.QueryDenomOwnersRequest>): _17.QueryDenomOwnersRequest;
                fromAmino(object: _17.QueryDenomOwnersRequestAmino): _17.QueryDenomOwnersRequest;
                toAmino(message: _17.QueryDenomOwnersRequest): _17.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _17.QueryDenomOwnersRequestAminoMsg): _17.QueryDenomOwnersRequest;
                toAminoMsg(message: _17.QueryDenomOwnersRequest): _17.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _17.QueryDenomOwnersRequestProtoMsg): _17.QueryDenomOwnersRequest;
                toProto(message: _17.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _17.QueryDenomOwnersRequest): _17.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                encode(message: _17.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.DenomOwner;
                fromJSON(object: any): _17.DenomOwner;
                toJSON(message: _17.DenomOwner): unknown;
                fromPartial(object: Partial<_17.DenomOwner>): _17.DenomOwner;
                fromAmino(object: _17.DenomOwnerAmino): _17.DenomOwner;
                toAmino(message: _17.DenomOwner): _17.DenomOwnerAmino;
                fromAminoMsg(object: _17.DenomOwnerAminoMsg): _17.DenomOwner;
                toAminoMsg(message: _17.DenomOwner): _17.DenomOwnerAminoMsg;
                fromProtoMsg(message: _17.DenomOwnerProtoMsg): _17.DenomOwner;
                toProto(message: _17.DenomOwner): Uint8Array;
                toProtoMsg(message: _17.DenomOwner): _17.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                encode(message: _17.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryDenomOwnersResponse;
                fromJSON(object: any): _17.QueryDenomOwnersResponse;
                toJSON(message: _17.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_17.QueryDenomOwnersResponse>): _17.QueryDenomOwnersResponse;
                fromAmino(object: _17.QueryDenomOwnersResponseAmino): _17.QueryDenomOwnersResponse;
                toAmino(message: _17.QueryDenomOwnersResponse): _17.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _17.QueryDenomOwnersResponseAminoMsg): _17.QueryDenomOwnersResponse;
                toAminoMsg(message: _17.QueryDenomOwnersResponse): _17.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _17.QueryDenomOwnersResponseProtoMsg): _17.QueryDenomOwnersResponse;
                toProto(message: _17.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _17.QueryDenomOwnersResponse): _17.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _16.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _16.GenesisState;
                fromJSON(object: any): _16.GenesisState;
                toJSON(message: _16.GenesisState): unknown;
                fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
                fromAmino(object: _16.GenesisStateAmino): _16.GenesisState;
                toAmino(message: _16.GenesisState): _16.GenesisStateAmino;
                fromAminoMsg(object: _16.GenesisStateAminoMsg): _16.GenesisState;
                toAminoMsg(message: _16.GenesisState): _16.GenesisStateAminoMsg;
                fromProtoMsg(message: _16.GenesisStateProtoMsg): _16.GenesisState;
                toProto(message: _16.GenesisState): Uint8Array;
                toProtoMsg(message: _16.GenesisState): _16.GenesisStateProtoMsg;
            };
            Balance: {
                encode(message: _16.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _16.Balance;
                fromJSON(object: any): _16.Balance;
                toJSON(message: _16.Balance): unknown;
                fromPartial(object: Partial<_16.Balance>): _16.Balance;
                fromAmino(object: _16.BalanceAmino): _16.Balance;
                toAmino(message: _16.Balance): _16.BalanceAmino;
                fromAminoMsg(object: _16.BalanceAminoMsg): _16.Balance;
                toAminoMsg(message: _16.Balance): _16.BalanceAminoMsg;
                fromProtoMsg(message: _16.BalanceProtoMsg): _16.Balance;
                toProto(message: _16.Balance): Uint8Array;
                toProtoMsg(message: _16.Balance): _16.BalanceProtoMsg;
            };
            Params: {
                encode(message: _15.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.Params;
                fromJSON(object: any): _15.Params;
                toJSON(message: _15.Params): unknown;
                fromPartial(object: Partial<_15.Params>): _15.Params;
                fromAmino(object: _15.ParamsAmino): _15.Params;
                toAmino(message: _15.Params): _15.ParamsAmino;
                fromAminoMsg(object: _15.ParamsAminoMsg): _15.Params;
                toAminoMsg(message: _15.Params): _15.ParamsAminoMsg;
                fromProtoMsg(message: _15.ParamsProtoMsg): _15.Params;
                toProto(message: _15.Params): Uint8Array;
                toProtoMsg(message: _15.Params): _15.ParamsProtoMsg;
            };
            SendEnabled: {
                encode(message: _15.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.SendEnabled;
                fromJSON(object: any): _15.SendEnabled;
                toJSON(message: _15.SendEnabled): unknown;
                fromPartial(object: Partial<_15.SendEnabled>): _15.SendEnabled;
                fromAmino(object: _15.SendEnabledAmino): _15.SendEnabled;
                toAmino(message: _15.SendEnabled): _15.SendEnabledAmino;
                fromAminoMsg(object: _15.SendEnabledAminoMsg): _15.SendEnabled;
                toAminoMsg(message: _15.SendEnabled): _15.SendEnabledAminoMsg;
                fromProtoMsg(message: _15.SendEnabledProtoMsg): _15.SendEnabled;
                toProto(message: _15.SendEnabled): Uint8Array;
                toProtoMsg(message: _15.SendEnabled): _15.SendEnabledProtoMsg;
            };
            Input: {
                encode(message: _15.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.Input;
                fromJSON(object: any): _15.Input;
                toJSON(message: _15.Input): unknown;
                fromPartial(object: Partial<_15.Input>): _15.Input;
                fromAmino(object: _15.InputAmino): _15.Input;
                toAmino(message: _15.Input): _15.InputAmino;
                fromAminoMsg(object: _15.InputAminoMsg): _15.Input;
                toAminoMsg(message: _15.Input): _15.InputAminoMsg;
                fromProtoMsg(message: _15.InputProtoMsg): _15.Input;
                toProto(message: _15.Input): Uint8Array;
                toProtoMsg(message: _15.Input): _15.InputProtoMsg;
            };
            Output: {
                encode(message: _15.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.Output;
                fromJSON(object: any): _15.Output;
                toJSON(message: _15.Output): unknown;
                fromPartial(object: Partial<_15.Output>): _15.Output;
                fromAmino(object: _15.OutputAmino): _15.Output;
                toAmino(message: _15.Output): _15.OutputAmino;
                fromAminoMsg(object: _15.OutputAminoMsg): _15.Output;
                toAminoMsg(message: _15.Output): _15.OutputAminoMsg;
                fromProtoMsg(message: _15.OutputProtoMsg): _15.Output;
                toProto(message: _15.Output): Uint8Array;
                toProtoMsg(message: _15.Output): _15.OutputProtoMsg;
            };
            Supply: {
                encode(message: _15.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.Supply;
                fromJSON(object: any): _15.Supply;
                toJSON(message: _15.Supply): unknown;
                fromPartial(object: Partial<_15.Supply>): _15.Supply;
                fromAmino(object: _15.SupplyAmino): _15.Supply;
                toAmino(message: _15.Supply): _15.SupplyAmino;
                fromAminoMsg(object: _15.SupplyAminoMsg): _15.Supply;
                toAminoMsg(message: _15.Supply): _15.SupplyAminoMsg;
                fromProtoMsg(message: _15.SupplyProtoMsg): _15.Supply;
                toProto(message: _15.Supply): Uint8Array;
                toProtoMsg(message: _15.Supply): _15.SupplyProtoMsg;
            };
            DenomUnit: {
                encode(message: _15.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.DenomUnit;
                fromJSON(object: any): _15.DenomUnit;
                toJSON(message: _15.DenomUnit): unknown;
                fromPartial(object: Partial<_15.DenomUnit>): _15.DenomUnit;
                fromAmino(object: _15.DenomUnitAmino): _15.DenomUnit;
                toAmino(message: _15.DenomUnit): _15.DenomUnitAmino;
                fromAminoMsg(object: _15.DenomUnitAminoMsg): _15.DenomUnit;
                toAminoMsg(message: _15.DenomUnit): _15.DenomUnitAminoMsg;
                fromProtoMsg(message: _15.DenomUnitProtoMsg): _15.DenomUnit;
                toProto(message: _15.DenomUnit): Uint8Array;
                toProtoMsg(message: _15.DenomUnit): _15.DenomUnitProtoMsg;
            };
            Metadata: {
                encode(message: _15.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.Metadata;
                fromJSON(object: any): _15.Metadata;
                toJSON(message: _15.Metadata): unknown;
                fromPartial(object: Partial<_15.Metadata>): _15.Metadata;
                fromAmino(object: _15.MetadataAmino): _15.Metadata;
                toAmino(message: _15.Metadata): _15.MetadataAmino;
                fromAminoMsg(object: _15.MetadataAminoMsg): _15.Metadata;
                toAminoMsg(message: _15.Metadata): _15.MetadataAminoMsg;
                fromProtoMsg(message: _15.MetadataProtoMsg): _15.Metadata;
                toProto(message: _15.Metadata): Uint8Array;
                toProtoMsg(message: _15.Metadata): _15.MetadataProtoMsg;
            };
            SendAuthorization: {
                encode(message: _14.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _14.SendAuthorization;
                fromJSON(object: any): _14.SendAuthorization;
                toJSON(message: _14.SendAuthorization): unknown;
                fromPartial(object: Partial<_14.SendAuthorization>): _14.SendAuthorization;
                fromAmino(object: _14.SendAuthorizationAmino): _14.SendAuthorization;
                toAmino(message: _14.SendAuthorization): _14.SendAuthorizationAmino;
                fromAminoMsg(object: _14.SendAuthorizationAminoMsg): _14.SendAuthorization;
                toAminoMsg(message: _14.SendAuthorization): _14.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _14.SendAuthorizationProtoMsg): _14.SendAuthorization;
                toProto(message: _14.SendAuthorization): Uint8Array;
                toProtoMsg(message: _14.SendAuthorization): _14.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _19.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.TxResponse;
                    fromJSON(object: any): _19.TxResponse;
                    toJSON(message: _19.TxResponse): unknown;
                    fromPartial(object: Partial<_19.TxResponse>): _19.TxResponse;
                    fromAmino(object: _19.TxResponseAmino): _19.TxResponse;
                    toAmino(message: _19.TxResponse): _19.TxResponseAmino;
                    fromAminoMsg(object: _19.TxResponseAminoMsg): _19.TxResponse;
                    toAminoMsg(message: _19.TxResponse): _19.TxResponseAminoMsg;
                    fromProtoMsg(message: _19.TxResponseProtoMsg): _19.TxResponse;
                    toProto(message: _19.TxResponse): Uint8Array;
                    toProtoMsg(message: _19.TxResponse): _19.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    encode(message: _19.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.ABCIMessageLog;
                    fromJSON(object: any): _19.ABCIMessageLog;
                    toJSON(message: _19.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_19.ABCIMessageLog>): _19.ABCIMessageLog;
                    fromAmino(object: _19.ABCIMessageLogAmino): _19.ABCIMessageLog;
                    toAmino(message: _19.ABCIMessageLog): _19.ABCIMessageLogAmino;
                    fromAminoMsg(object: _19.ABCIMessageLogAminoMsg): _19.ABCIMessageLog;
                    toAminoMsg(message: _19.ABCIMessageLog): _19.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _19.ABCIMessageLogProtoMsg): _19.ABCIMessageLog;
                    toProto(message: _19.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _19.ABCIMessageLog): _19.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    encode(message: _19.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.StringEvent;
                    fromJSON(object: any): _19.StringEvent;
                    toJSON(message: _19.StringEvent): unknown;
                    fromPartial(object: Partial<_19.StringEvent>): _19.StringEvent;
                    fromAmino(object: _19.StringEventAmino): _19.StringEvent;
                    toAmino(message: _19.StringEvent): _19.StringEventAmino;
                    fromAminoMsg(object: _19.StringEventAminoMsg): _19.StringEvent;
                    toAminoMsg(message: _19.StringEvent): _19.StringEventAminoMsg;
                    fromProtoMsg(message: _19.StringEventProtoMsg): _19.StringEvent;
                    toProto(message: _19.StringEvent): Uint8Array;
                    toProtoMsg(message: _19.StringEvent): _19.StringEventProtoMsg;
                };
                Attribute: {
                    encode(message: _19.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.Attribute;
                    fromJSON(object: any): _19.Attribute;
                    toJSON(message: _19.Attribute): unknown;
                    fromPartial(object: Partial<_19.Attribute>): _19.Attribute;
                    fromAmino(object: _19.AttributeAmino): _19.Attribute;
                    toAmino(message: _19.Attribute): _19.AttributeAmino;
                    fromAminoMsg(object: _19.AttributeAminoMsg): _19.Attribute;
                    toAminoMsg(message: _19.Attribute): _19.AttributeAminoMsg;
                    fromProtoMsg(message: _19.AttributeProtoMsg): _19.Attribute;
                    toProto(message: _19.Attribute): Uint8Array;
                    toProtoMsg(message: _19.Attribute): _19.AttributeProtoMsg;
                };
                GasInfo: {
                    encode(message: _19.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.GasInfo;
                    fromJSON(object: any): _19.GasInfo;
                    toJSON(message: _19.GasInfo): unknown;
                    fromPartial(object: Partial<_19.GasInfo>): _19.GasInfo;
                    fromAmino(object: _19.GasInfoAmino): _19.GasInfo;
                    toAmino(message: _19.GasInfo): _19.GasInfoAmino;
                    fromAminoMsg(object: _19.GasInfoAminoMsg): _19.GasInfo;
                    toAminoMsg(message: _19.GasInfo): _19.GasInfoAminoMsg;
                    fromProtoMsg(message: _19.GasInfoProtoMsg): _19.GasInfo;
                    toProto(message: _19.GasInfo): Uint8Array;
                    toProtoMsg(message: _19.GasInfo): _19.GasInfoProtoMsg;
                };
                Result: {
                    encode(message: _19.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.Result;
                    fromJSON(object: any): _19.Result;
                    toJSON(message: _19.Result): unknown;
                    fromPartial(object: Partial<_19.Result>): _19.Result;
                    fromAmino(object: _19.ResultAmino): _19.Result;
                    toAmino(message: _19.Result): _19.ResultAmino;
                    fromAminoMsg(object: _19.ResultAminoMsg): _19.Result;
                    toAminoMsg(message: _19.Result): _19.ResultAminoMsg;
                    fromProtoMsg(message: _19.ResultProtoMsg): _19.Result;
                    toProto(message: _19.Result): Uint8Array;
                    toProtoMsg(message: _19.Result): _19.ResultProtoMsg;
                };
                SimulationResponse: {
                    encode(message: _19.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.SimulationResponse;
                    fromJSON(object: any): _19.SimulationResponse;
                    toJSON(message: _19.SimulationResponse): unknown;
                    fromPartial(object: Partial<_19.SimulationResponse>): _19.SimulationResponse;
                    fromAmino(object: _19.SimulationResponseAmino): _19.SimulationResponse;
                    toAmino(message: _19.SimulationResponse): _19.SimulationResponseAmino;
                    fromAminoMsg(object: _19.SimulationResponseAminoMsg): _19.SimulationResponse;
                    toAminoMsg(message: _19.SimulationResponse): _19.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _19.SimulationResponseProtoMsg): _19.SimulationResponse;
                    toProto(message: _19.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _19.SimulationResponse): _19.SimulationResponseProtoMsg;
                };
                MsgData: {
                    encode(message: _19.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.MsgData;
                    fromJSON(object: any): _19.MsgData;
                    toJSON(message: _19.MsgData): unknown;
                    fromPartial(object: Partial<_19.MsgData>): _19.MsgData;
                    fromAmino(object: _19.MsgDataAmino): _19.MsgData;
                    toAmino(message: _19.MsgData): _19.MsgDataAmino;
                    fromAminoMsg(object: _19.MsgDataAminoMsg): _19.MsgData;
                    toAminoMsg(message: _19.MsgData): _19.MsgDataAminoMsg;
                    fromProtoMsg(message: _19.MsgDataProtoMsg): _19.MsgData;
                    toProto(message: _19.MsgData): Uint8Array;
                    toProtoMsg(message: _19.MsgData): _19.MsgDataProtoMsg;
                };
                TxMsgData: {
                    encode(message: _19.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.TxMsgData;
                    fromJSON(object: any): _19.TxMsgData;
                    toJSON(message: _19.TxMsgData): unknown;
                    fromPartial(object: Partial<_19.TxMsgData>): _19.TxMsgData;
                    fromAmino(object: _19.TxMsgDataAmino): _19.TxMsgData;
                    toAmino(message: _19.TxMsgData): _19.TxMsgDataAmino;
                    fromAminoMsg(object: _19.TxMsgDataAminoMsg): _19.TxMsgData;
                    toAminoMsg(message: _19.TxMsgData): _19.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _19.TxMsgDataProtoMsg): _19.TxMsgData;
                    toProto(message: _19.TxMsgData): Uint8Array;
                    toProtoMsg(message: _19.TxMsgData): _19.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    encode(message: _19.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.SearchTxsResult;
                    fromJSON(object: any): _19.SearchTxsResult;
                    toJSON(message: _19.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_19.SearchTxsResult>): _19.SearchTxsResult;
                    fromAmino(object: _19.SearchTxsResultAmino): _19.SearchTxsResult;
                    toAmino(message: _19.SearchTxsResult): _19.SearchTxsResultAmino;
                    fromAminoMsg(object: _19.SearchTxsResultAminoMsg): _19.SearchTxsResult;
                    toAminoMsg(message: _19.SearchTxsResult): _19.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _19.SearchTxsResultProtoMsg): _19.SearchTxsResult;
                    toProto(message: _19.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _19.SearchTxsResult): _19.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _20.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.Pairs;
                    fromJSON(object: any): _20.Pairs;
                    toJSON(message: _20.Pairs): unknown;
                    fromPartial(object: Partial<_20.Pairs>): _20.Pairs;
                    fromAmino(object: _20.PairsAmino): _20.Pairs;
                    toAmino(message: _20.Pairs): _20.PairsAmino;
                    fromAminoMsg(object: _20.PairsAminoMsg): _20.Pairs;
                    toAminoMsg(message: _20.Pairs): _20.PairsAminoMsg;
                    fromProtoMsg(message: _20.PairsProtoMsg): _20.Pairs;
                    toProto(message: _20.Pairs): Uint8Array;
                    toProtoMsg(message: _20.Pairs): _20.PairsProtoMsg;
                };
                Pair: {
                    encode(message: _20.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.Pair;
                    fromJSON(object: any): _20.Pair;
                    toJSON(message: _20.Pair): unknown;
                    fromPartial(object: Partial<_20.Pair>): _20.Pair;
                    fromAmino(object: _20.PairAmino): _20.Pair;
                    toAmino(message: _20.Pair): _20.PairAmino;
                    fromAminoMsg(object: _20.PairAminoMsg): _20.Pair;
                    toAminoMsg(message: _20.Pair): _20.PairAminoMsg;
                    fromProtoMsg(message: _20.PairProtoMsg): _20.Pair;
                    toProto(message: _20.Pair): Uint8Array;
                    toProtoMsg(message: _20.Pair): _20.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _201.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _21.ConfigRequest | undefined): Promise<_21.ConfigResponse>;
                };
                LCDQueryClient: typeof _182.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _21.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.ConfigRequest;
                    fromJSON(_: any): _21.ConfigRequest;
                    toJSON(_: _21.ConfigRequest): unknown;
                    fromPartial(_: Partial<_21.ConfigRequest>): _21.ConfigRequest;
                    fromAmino(_: _21.ConfigRequestAmino): _21.ConfigRequest;
                    toAmino(_: _21.ConfigRequest): _21.ConfigRequestAmino;
                    fromAminoMsg(object: _21.ConfigRequestAminoMsg): _21.ConfigRequest;
                    toAminoMsg(message: _21.ConfigRequest): _21.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _21.ConfigRequestProtoMsg): _21.ConfigRequest;
                    toProto(message: _21.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _21.ConfigRequest): _21.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    encode(message: _21.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.ConfigResponse;
                    fromJSON(object: any): _21.ConfigResponse;
                    toJSON(message: _21.ConfigResponse): unknown;
                    fromPartial(object: Partial<_21.ConfigResponse>): _21.ConfigResponse;
                    fromAmino(object: _21.ConfigResponseAmino): _21.ConfigResponse;
                    toAmino(message: _21.ConfigResponse): _21.ConfigResponseAmino;
                    fromAminoMsg(object: _21.ConfigResponseAminoMsg): _21.ConfigResponse;
                    toAminoMsg(message: _21.ConfigResponse): _21.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _21.ConfigResponseProtoMsg): _21.ConfigResponse;
                    toProto(message: _21.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _21.ConfigResponse): _21.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _22.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _22.PageRequest;
                    fromJSON(object: any): _22.PageRequest;
                    toJSON(message: _22.PageRequest): unknown;
                    fromPartial(object: Partial<_22.PageRequest>): _22.PageRequest;
                    fromAmino(object: _22.PageRequestAmino): _22.PageRequest;
                    toAmino(message: _22.PageRequest): _22.PageRequestAmino;
                    fromAminoMsg(object: _22.PageRequestAminoMsg): _22.PageRequest;
                    toAminoMsg(message: _22.PageRequest): _22.PageRequestAminoMsg;
                    fromProtoMsg(message: _22.PageRequestProtoMsg): _22.PageRequest;
                    toProto(message: _22.PageRequest): Uint8Array;
                    toProtoMsg(message: _22.PageRequest): _22.PageRequestProtoMsg;
                };
                PageResponse: {
                    encode(message: _22.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _22.PageResponse;
                    fromJSON(object: any): _22.PageResponse;
                    toJSON(message: _22.PageResponse): unknown;
                    fromPartial(object: Partial<_22.PageResponse>): _22.PageResponse;
                    fromAmino(object: _22.PageResponseAmino): _22.PageResponse;
                    toAmino(message: _22.PageResponse): _22.PageResponseAmino;
                    fromAminoMsg(object: _22.PageResponseAminoMsg): _22.PageResponse;
                    toAminoMsg(message: _22.PageResponse): _22.PageResponseAminoMsg;
                    fromProtoMsg(message: _22.PageResponseProtoMsg): _22.PageResponse;
                    toProto(message: _22.PageResponse): Uint8Array;
                    toProtoMsg(message: _22.PageResponse): _22.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _23.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.ListAllInterfacesRequest;
                    fromJSON(_: any): _23.ListAllInterfacesRequest;
                    toJSON(_: _23.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_23.ListAllInterfacesRequest>): _23.ListAllInterfacesRequest;
                    fromAmino(_: _23.ListAllInterfacesRequestAmino): _23.ListAllInterfacesRequest;
                    toAmino(_: _23.ListAllInterfacesRequest): _23.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _23.ListAllInterfacesRequestAminoMsg): _23.ListAllInterfacesRequest;
                    toAminoMsg(message: _23.ListAllInterfacesRequest): _23.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _23.ListAllInterfacesRequestProtoMsg): _23.ListAllInterfacesRequest;
                    toProto(message: _23.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _23.ListAllInterfacesRequest): _23.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    encode(message: _23.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.ListAllInterfacesResponse;
                    fromJSON(object: any): _23.ListAllInterfacesResponse;
                    toJSON(message: _23.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_23.ListAllInterfacesResponse>): _23.ListAllInterfacesResponse;
                    fromAmino(object: _23.ListAllInterfacesResponseAmino): _23.ListAllInterfacesResponse;
                    toAmino(message: _23.ListAllInterfacesResponse): _23.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _23.ListAllInterfacesResponseAminoMsg): _23.ListAllInterfacesResponse;
                    toAminoMsg(message: _23.ListAllInterfacesResponse): _23.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _23.ListAllInterfacesResponseProtoMsg): _23.ListAllInterfacesResponse;
                    toProto(message: _23.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _23.ListAllInterfacesResponse): _23.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    encode(message: _23.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.ListImplementationsRequest;
                    fromJSON(object: any): _23.ListImplementationsRequest;
                    toJSON(message: _23.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_23.ListImplementationsRequest>): _23.ListImplementationsRequest;
                    fromAmino(object: _23.ListImplementationsRequestAmino): _23.ListImplementationsRequest;
                    toAmino(message: _23.ListImplementationsRequest): _23.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _23.ListImplementationsRequestAminoMsg): _23.ListImplementationsRequest;
                    toAminoMsg(message: _23.ListImplementationsRequest): _23.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _23.ListImplementationsRequestProtoMsg): _23.ListImplementationsRequest;
                    toProto(message: _23.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _23.ListImplementationsRequest): _23.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    encode(message: _23.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.ListImplementationsResponse;
                    fromJSON(object: any): _23.ListImplementationsResponse;
                    toJSON(message: _23.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_23.ListImplementationsResponse>): _23.ListImplementationsResponse;
                    fromAmino(object: _23.ListImplementationsResponseAmino): _23.ListImplementationsResponse;
                    toAmino(message: _23.ListImplementationsResponse): _23.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _23.ListImplementationsResponseAminoMsg): _23.ListImplementationsResponse;
                    toAminoMsg(message: _23.ListImplementationsResponse): _23.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _23.ListImplementationsResponseProtoMsg): _23.ListImplementationsResponse;
                    toProto(message: _23.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _23.ListImplementationsResponse): _23.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _24.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.AppDescriptor;
                    fromJSON(object: any): _24.AppDescriptor;
                    toJSON(message: _24.AppDescriptor): unknown;
                    fromPartial(object: Partial<_24.AppDescriptor>): _24.AppDescriptor;
                    fromAmino(object: _24.AppDescriptorAmino): _24.AppDescriptor;
                    toAmino(message: _24.AppDescriptor): _24.AppDescriptorAmino;
                    fromAminoMsg(object: _24.AppDescriptorAminoMsg): _24.AppDescriptor;
                    toAminoMsg(message: _24.AppDescriptor): _24.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _24.AppDescriptorProtoMsg): _24.AppDescriptor;
                    toProto(message: _24.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _24.AppDescriptor): _24.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    encode(message: _24.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.TxDescriptor;
                    fromJSON(object: any): _24.TxDescriptor;
                    toJSON(message: _24.TxDescriptor): unknown;
                    fromPartial(object: Partial<_24.TxDescriptor>): _24.TxDescriptor;
                    fromAmino(object: _24.TxDescriptorAmino): _24.TxDescriptor;
                    toAmino(message: _24.TxDescriptor): _24.TxDescriptorAmino;
                    fromAminoMsg(object: _24.TxDescriptorAminoMsg): _24.TxDescriptor;
                    toAminoMsg(message: _24.TxDescriptor): _24.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _24.TxDescriptorProtoMsg): _24.TxDescriptor;
                    toProto(message: _24.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _24.TxDescriptor): _24.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    encode(message: _24.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.AuthnDescriptor;
                    fromJSON(object: any): _24.AuthnDescriptor;
                    toJSON(message: _24.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_24.AuthnDescriptor>): _24.AuthnDescriptor;
                    fromAmino(object: _24.AuthnDescriptorAmino): _24.AuthnDescriptor;
                    toAmino(message: _24.AuthnDescriptor): _24.AuthnDescriptorAmino;
                    fromAminoMsg(object: _24.AuthnDescriptorAminoMsg): _24.AuthnDescriptor;
                    toAminoMsg(message: _24.AuthnDescriptor): _24.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _24.AuthnDescriptorProtoMsg): _24.AuthnDescriptor;
                    toProto(message: _24.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _24.AuthnDescriptor): _24.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    encode(message: _24.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.SigningModeDescriptor;
                    fromJSON(object: any): _24.SigningModeDescriptor;
                    toJSON(message: _24.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_24.SigningModeDescriptor>): _24.SigningModeDescriptor;
                    fromAmino(object: _24.SigningModeDescriptorAmino): _24.SigningModeDescriptor;
                    toAmino(message: _24.SigningModeDescriptor): _24.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _24.SigningModeDescriptorAminoMsg): _24.SigningModeDescriptor;
                    toAminoMsg(message: _24.SigningModeDescriptor): _24.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _24.SigningModeDescriptorProtoMsg): _24.SigningModeDescriptor;
                    toProto(message: _24.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _24.SigningModeDescriptor): _24.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    encode(message: _24.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.ChainDescriptor;
                    fromJSON(object: any): _24.ChainDescriptor;
                    toJSON(message: _24.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_24.ChainDescriptor>): _24.ChainDescriptor;
                    fromAmino(object: _24.ChainDescriptorAmino): _24.ChainDescriptor;
                    toAmino(message: _24.ChainDescriptor): _24.ChainDescriptorAmino;
                    fromAminoMsg(object: _24.ChainDescriptorAminoMsg): _24.ChainDescriptor;
                    toAminoMsg(message: _24.ChainDescriptor): _24.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _24.ChainDescriptorProtoMsg): _24.ChainDescriptor;
                    toProto(message: _24.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _24.ChainDescriptor): _24.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    encode(message: _24.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.CodecDescriptor;
                    fromJSON(object: any): _24.CodecDescriptor;
                    toJSON(message: _24.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_24.CodecDescriptor>): _24.CodecDescriptor;
                    fromAmino(object: _24.CodecDescriptorAmino): _24.CodecDescriptor;
                    toAmino(message: _24.CodecDescriptor): _24.CodecDescriptorAmino;
                    fromAminoMsg(object: _24.CodecDescriptorAminoMsg): _24.CodecDescriptor;
                    toAminoMsg(message: _24.CodecDescriptor): _24.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _24.CodecDescriptorProtoMsg): _24.CodecDescriptor;
                    toProto(message: _24.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _24.CodecDescriptor): _24.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    encode(message: _24.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.InterfaceDescriptor;
                    fromJSON(object: any): _24.InterfaceDescriptor;
                    toJSON(message: _24.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_24.InterfaceDescriptor>): _24.InterfaceDescriptor;
                    fromAmino(object: _24.InterfaceDescriptorAmino): _24.InterfaceDescriptor;
                    toAmino(message: _24.InterfaceDescriptor): _24.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _24.InterfaceDescriptorAminoMsg): _24.InterfaceDescriptor;
                    toAminoMsg(message: _24.InterfaceDescriptor): _24.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _24.InterfaceDescriptorProtoMsg): _24.InterfaceDescriptor;
                    toProto(message: _24.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _24.InterfaceDescriptor): _24.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _24.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _24.InterfaceImplementerDescriptor;
                    toJSON(message: _24.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_24.InterfaceImplementerDescriptor>): _24.InterfaceImplementerDescriptor;
                    fromAmino(object: _24.InterfaceImplementerDescriptorAmino): _24.InterfaceImplementerDescriptor;
                    toAmino(message: _24.InterfaceImplementerDescriptor): _24.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _24.InterfaceImplementerDescriptorAminoMsg): _24.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _24.InterfaceImplementerDescriptor): _24.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _24.InterfaceImplementerDescriptorProtoMsg): _24.InterfaceImplementerDescriptor;
                    toProto(message: _24.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _24.InterfaceImplementerDescriptor): _24.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _24.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _24.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _24.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_24.InterfaceAcceptingMessageDescriptor>): _24.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _24.InterfaceAcceptingMessageDescriptorAmino): _24.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _24.InterfaceAcceptingMessageDescriptor): _24.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _24.InterfaceAcceptingMessageDescriptorAminoMsg): _24.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _24.InterfaceAcceptingMessageDescriptor): _24.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _24.InterfaceAcceptingMessageDescriptorProtoMsg): _24.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _24.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _24.InterfaceAcceptingMessageDescriptor): _24.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    encode(message: _24.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.ConfigurationDescriptor;
                    fromJSON(object: any): _24.ConfigurationDescriptor;
                    toJSON(message: _24.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_24.ConfigurationDescriptor>): _24.ConfigurationDescriptor;
                    fromAmino(object: _24.ConfigurationDescriptorAmino): _24.ConfigurationDescriptor;
                    toAmino(message: _24.ConfigurationDescriptor): _24.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _24.ConfigurationDescriptorAminoMsg): _24.ConfigurationDescriptor;
                    toAminoMsg(message: _24.ConfigurationDescriptor): _24.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _24.ConfigurationDescriptorProtoMsg): _24.ConfigurationDescriptor;
                    toProto(message: _24.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _24.ConfigurationDescriptor): _24.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    encode(message: _24.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.MsgDescriptor;
                    fromJSON(object: any): _24.MsgDescriptor;
                    toJSON(message: _24.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_24.MsgDescriptor>): _24.MsgDescriptor;
                    fromAmino(object: _24.MsgDescriptorAmino): _24.MsgDescriptor;
                    toAmino(message: _24.MsgDescriptor): _24.MsgDescriptorAmino;
                    fromAminoMsg(object: _24.MsgDescriptorAminoMsg): _24.MsgDescriptor;
                    toAminoMsg(message: _24.MsgDescriptor): _24.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _24.MsgDescriptorProtoMsg): _24.MsgDescriptor;
                    toProto(message: _24.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _24.MsgDescriptor): _24.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _24.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _24.GetAuthnDescriptorRequest;
                    toJSON(_: _24.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_24.GetAuthnDescriptorRequest>): _24.GetAuthnDescriptorRequest;
                    fromAmino(_: _24.GetAuthnDescriptorRequestAmino): _24.GetAuthnDescriptorRequest;
                    toAmino(_: _24.GetAuthnDescriptorRequest): _24.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _24.GetAuthnDescriptorRequestAminoMsg): _24.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _24.GetAuthnDescriptorRequest): _24.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _24.GetAuthnDescriptorRequestProtoMsg): _24.GetAuthnDescriptorRequest;
                    toProto(message: _24.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _24.GetAuthnDescriptorRequest): _24.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _24.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _24.GetAuthnDescriptorResponse;
                    toJSON(message: _24.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_24.GetAuthnDescriptorResponse>): _24.GetAuthnDescriptorResponse;
                    fromAmino(object: _24.GetAuthnDescriptorResponseAmino): _24.GetAuthnDescriptorResponse;
                    toAmino(message: _24.GetAuthnDescriptorResponse): _24.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _24.GetAuthnDescriptorResponseAminoMsg): _24.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _24.GetAuthnDescriptorResponse): _24.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _24.GetAuthnDescriptorResponseProtoMsg): _24.GetAuthnDescriptorResponse;
                    toProto(message: _24.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _24.GetAuthnDescriptorResponse): _24.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    encode(_: _24.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetChainDescriptorRequest;
                    fromJSON(_: any): _24.GetChainDescriptorRequest;
                    toJSON(_: _24.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_24.GetChainDescriptorRequest>): _24.GetChainDescriptorRequest;
                    fromAmino(_: _24.GetChainDescriptorRequestAmino): _24.GetChainDescriptorRequest;
                    toAmino(_: _24.GetChainDescriptorRequest): _24.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _24.GetChainDescriptorRequestAminoMsg): _24.GetChainDescriptorRequest;
                    toAminoMsg(message: _24.GetChainDescriptorRequest): _24.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _24.GetChainDescriptorRequestProtoMsg): _24.GetChainDescriptorRequest;
                    toProto(message: _24.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _24.GetChainDescriptorRequest): _24.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    encode(message: _24.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetChainDescriptorResponse;
                    fromJSON(object: any): _24.GetChainDescriptorResponse;
                    toJSON(message: _24.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_24.GetChainDescriptorResponse>): _24.GetChainDescriptorResponse;
                    fromAmino(object: _24.GetChainDescriptorResponseAmino): _24.GetChainDescriptorResponse;
                    toAmino(message: _24.GetChainDescriptorResponse): _24.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _24.GetChainDescriptorResponseAminoMsg): _24.GetChainDescriptorResponse;
                    toAminoMsg(message: _24.GetChainDescriptorResponse): _24.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _24.GetChainDescriptorResponseProtoMsg): _24.GetChainDescriptorResponse;
                    toProto(message: _24.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _24.GetChainDescriptorResponse): _24.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _24.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetCodecDescriptorRequest;
                    fromJSON(_: any): _24.GetCodecDescriptorRequest;
                    toJSON(_: _24.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_24.GetCodecDescriptorRequest>): _24.GetCodecDescriptorRequest;
                    fromAmino(_: _24.GetCodecDescriptorRequestAmino): _24.GetCodecDescriptorRequest;
                    toAmino(_: _24.GetCodecDescriptorRequest): _24.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _24.GetCodecDescriptorRequestAminoMsg): _24.GetCodecDescriptorRequest;
                    toAminoMsg(message: _24.GetCodecDescriptorRequest): _24.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _24.GetCodecDescriptorRequestProtoMsg): _24.GetCodecDescriptorRequest;
                    toProto(message: _24.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _24.GetCodecDescriptorRequest): _24.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _24.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetCodecDescriptorResponse;
                    fromJSON(object: any): _24.GetCodecDescriptorResponse;
                    toJSON(message: _24.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_24.GetCodecDescriptorResponse>): _24.GetCodecDescriptorResponse;
                    fromAmino(object: _24.GetCodecDescriptorResponseAmino): _24.GetCodecDescriptorResponse;
                    toAmino(message: _24.GetCodecDescriptorResponse): _24.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _24.GetCodecDescriptorResponseAminoMsg): _24.GetCodecDescriptorResponse;
                    toAminoMsg(message: _24.GetCodecDescriptorResponse): _24.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _24.GetCodecDescriptorResponseProtoMsg): _24.GetCodecDescriptorResponse;
                    toProto(message: _24.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _24.GetCodecDescriptorResponse): _24.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _24.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _24.GetConfigurationDescriptorRequest;
                    toJSON(_: _24.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_24.GetConfigurationDescriptorRequest>): _24.GetConfigurationDescriptorRequest;
                    fromAmino(_: _24.GetConfigurationDescriptorRequestAmino): _24.GetConfigurationDescriptorRequest;
                    toAmino(_: _24.GetConfigurationDescriptorRequest): _24.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _24.GetConfigurationDescriptorRequestAminoMsg): _24.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _24.GetConfigurationDescriptorRequest): _24.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _24.GetConfigurationDescriptorRequestProtoMsg): _24.GetConfigurationDescriptorRequest;
                    toProto(message: _24.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _24.GetConfigurationDescriptorRequest): _24.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _24.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _24.GetConfigurationDescriptorResponse;
                    toJSON(message: _24.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_24.GetConfigurationDescriptorResponse>): _24.GetConfigurationDescriptorResponse;
                    fromAmino(object: _24.GetConfigurationDescriptorResponseAmino): _24.GetConfigurationDescriptorResponse;
                    toAmino(message: _24.GetConfigurationDescriptorResponse): _24.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _24.GetConfigurationDescriptorResponseAminoMsg): _24.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _24.GetConfigurationDescriptorResponse): _24.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _24.GetConfigurationDescriptorResponseProtoMsg): _24.GetConfigurationDescriptorResponse;
                    toProto(message: _24.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _24.GetConfigurationDescriptorResponse): _24.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _24.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _24.GetQueryServicesDescriptorRequest;
                    toJSON(_: _24.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_24.GetQueryServicesDescriptorRequest>): _24.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _24.GetQueryServicesDescriptorRequestAmino): _24.GetQueryServicesDescriptorRequest;
                    toAmino(_: _24.GetQueryServicesDescriptorRequest): _24.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _24.GetQueryServicesDescriptorRequestAminoMsg): _24.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _24.GetQueryServicesDescriptorRequest): _24.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _24.GetQueryServicesDescriptorRequestProtoMsg): _24.GetQueryServicesDescriptorRequest;
                    toProto(message: _24.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _24.GetQueryServicesDescriptorRequest): _24.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _24.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _24.GetQueryServicesDescriptorResponse;
                    toJSON(message: _24.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_24.GetQueryServicesDescriptorResponse>): _24.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _24.GetQueryServicesDescriptorResponseAmino): _24.GetQueryServicesDescriptorResponse;
                    toAmino(message: _24.GetQueryServicesDescriptorResponse): _24.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _24.GetQueryServicesDescriptorResponseAminoMsg): _24.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _24.GetQueryServicesDescriptorResponse): _24.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _24.GetQueryServicesDescriptorResponseProtoMsg): _24.GetQueryServicesDescriptorResponse;
                    toProto(message: _24.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _24.GetQueryServicesDescriptorResponse): _24.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    encode(_: _24.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetTxDescriptorRequest;
                    fromJSON(_: any): _24.GetTxDescriptorRequest;
                    toJSON(_: _24.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_24.GetTxDescriptorRequest>): _24.GetTxDescriptorRequest;
                    fromAmino(_: _24.GetTxDescriptorRequestAmino): _24.GetTxDescriptorRequest;
                    toAmino(_: _24.GetTxDescriptorRequest): _24.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _24.GetTxDescriptorRequestAminoMsg): _24.GetTxDescriptorRequest;
                    toAminoMsg(message: _24.GetTxDescriptorRequest): _24.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _24.GetTxDescriptorRequestProtoMsg): _24.GetTxDescriptorRequest;
                    toProto(message: _24.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _24.GetTxDescriptorRequest): _24.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    encode(message: _24.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetTxDescriptorResponse;
                    fromJSON(object: any): _24.GetTxDescriptorResponse;
                    toJSON(message: _24.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_24.GetTxDescriptorResponse>): _24.GetTxDescriptorResponse;
                    fromAmino(object: _24.GetTxDescriptorResponseAmino): _24.GetTxDescriptorResponse;
                    toAmino(message: _24.GetTxDescriptorResponse): _24.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _24.GetTxDescriptorResponseAminoMsg): _24.GetTxDescriptorResponse;
                    toAminoMsg(message: _24.GetTxDescriptorResponse): _24.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _24.GetTxDescriptorResponseProtoMsg): _24.GetTxDescriptorResponse;
                    toProto(message: _24.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _24.GetTxDescriptorResponse): _24.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    encode(message: _24.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.QueryServicesDescriptor;
                    fromJSON(object: any): _24.QueryServicesDescriptor;
                    toJSON(message: _24.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_24.QueryServicesDescriptor>): _24.QueryServicesDescriptor;
                    fromAmino(object: _24.QueryServicesDescriptorAmino): _24.QueryServicesDescriptor;
                    toAmino(message: _24.QueryServicesDescriptor): _24.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _24.QueryServicesDescriptorAminoMsg): _24.QueryServicesDescriptor;
                    toAminoMsg(message: _24.QueryServicesDescriptor): _24.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _24.QueryServicesDescriptorProtoMsg): _24.QueryServicesDescriptor;
                    toProto(message: _24.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _24.QueryServicesDescriptor): _24.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    encode(message: _24.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.QueryServiceDescriptor;
                    fromJSON(object: any): _24.QueryServiceDescriptor;
                    toJSON(message: _24.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_24.QueryServiceDescriptor>): _24.QueryServiceDescriptor;
                    fromAmino(object: _24.QueryServiceDescriptorAmino): _24.QueryServiceDescriptor;
                    toAmino(message: _24.QueryServiceDescriptor): _24.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _24.QueryServiceDescriptorAminoMsg): _24.QueryServiceDescriptor;
                    toAminoMsg(message: _24.QueryServiceDescriptor): _24.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _24.QueryServiceDescriptorProtoMsg): _24.QueryServiceDescriptor;
                    toProto(message: _24.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _24.QueryServiceDescriptor): _24.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    encode(message: _24.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.QueryMethodDescriptor;
                    fromJSON(object: any): _24.QueryMethodDescriptor;
                    toJSON(message: _24.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_24.QueryMethodDescriptor>): _24.QueryMethodDescriptor;
                    fromAmino(object: _24.QueryMethodDescriptorAmino): _24.QueryMethodDescriptor;
                    toAmino(message: _24.QueryMethodDescriptor): _24.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _24.QueryMethodDescriptorAminoMsg): _24.QueryMethodDescriptor;
                    toAminoMsg(message: _24.QueryMethodDescriptor): _24.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _24.QueryMethodDescriptorProtoMsg): _24.QueryMethodDescriptor;
                    toProto(message: _24.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _24.QueryMethodDescriptor): _24.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _25.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.Snapshot;
                    fromJSON(object: any): _25.Snapshot;
                    toJSON(message: _25.Snapshot): unknown;
                    fromPartial(object: Partial<_25.Snapshot>): _25.Snapshot;
                    fromAmino(object: _25.SnapshotAmino): _25.Snapshot;
                    toAmino(message: _25.Snapshot): _25.SnapshotAmino;
                    fromAminoMsg(object: _25.SnapshotAminoMsg): _25.Snapshot;
                    toAminoMsg(message: _25.Snapshot): _25.SnapshotAminoMsg;
                    fromProtoMsg(message: _25.SnapshotProtoMsg): _25.Snapshot;
                    toProto(message: _25.Snapshot): Uint8Array;
                    toProtoMsg(message: _25.Snapshot): _25.SnapshotProtoMsg;
                };
                Metadata: {
                    encode(message: _25.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.Metadata;
                    fromJSON(object: any): _25.Metadata;
                    toJSON(message: _25.Metadata): unknown;
                    fromPartial(object: Partial<_25.Metadata>): _25.Metadata;
                    fromAmino(object: _25.MetadataAmino): _25.Metadata;
                    toAmino(message: _25.Metadata): _25.MetadataAmino;
                    fromAminoMsg(object: _25.MetadataAminoMsg): _25.Metadata;
                    toAminoMsg(message: _25.Metadata): _25.MetadataAminoMsg;
                    fromProtoMsg(message: _25.MetadataProtoMsg): _25.Metadata;
                    toProto(message: _25.Metadata): Uint8Array;
                    toProtoMsg(message: _25.Metadata): _25.MetadataProtoMsg;
                };
                SnapshotItem: {
                    encode(message: _25.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.SnapshotItem;
                    fromJSON(object: any): _25.SnapshotItem;
                    toJSON(message: _25.SnapshotItem): unknown;
                    fromPartial(object: Partial<_25.SnapshotItem>): _25.SnapshotItem;
                    fromAmino(object: _25.SnapshotItemAmino): _25.SnapshotItem;
                    toAmino(message: _25.SnapshotItem): _25.SnapshotItemAmino;
                    fromAminoMsg(object: _25.SnapshotItemAminoMsg): _25.SnapshotItem;
                    toAminoMsg(message: _25.SnapshotItem): _25.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _25.SnapshotItemProtoMsg): _25.SnapshotItem;
                    toProto(message: _25.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _25.SnapshotItem): _25.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    encode(message: _25.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.SnapshotStoreItem;
                    fromJSON(object: any): _25.SnapshotStoreItem;
                    toJSON(message: _25.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_25.SnapshotStoreItem>): _25.SnapshotStoreItem;
                    fromAmino(object: _25.SnapshotStoreItemAmino): _25.SnapshotStoreItem;
                    toAmino(message: _25.SnapshotStoreItem): _25.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _25.SnapshotStoreItemAminoMsg): _25.SnapshotStoreItem;
                    toAminoMsg(message: _25.SnapshotStoreItem): _25.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _25.SnapshotStoreItemProtoMsg): _25.SnapshotStoreItem;
                    toProto(message: _25.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _25.SnapshotStoreItem): _25.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    encode(message: _25.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.SnapshotIAVLItem;
                    fromJSON(object: any): _25.SnapshotIAVLItem;
                    toJSON(message: _25.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_25.SnapshotIAVLItem>): _25.SnapshotIAVLItem;
                    fromAmino(object: _25.SnapshotIAVLItemAmino): _25.SnapshotIAVLItem;
                    toAmino(message: _25.SnapshotIAVLItem): _25.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _25.SnapshotIAVLItemAminoMsg): _25.SnapshotIAVLItem;
                    toAminoMsg(message: _25.SnapshotIAVLItem): _25.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _25.SnapshotIAVLItemProtoMsg): _25.SnapshotIAVLItem;
                    toProto(message: _25.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _25.SnapshotIAVLItem): _25.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    encode(message: _25.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.SnapshotExtensionMeta;
                    fromJSON(object: any): _25.SnapshotExtensionMeta;
                    toJSON(message: _25.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_25.SnapshotExtensionMeta>): _25.SnapshotExtensionMeta;
                    fromAmino(object: _25.SnapshotExtensionMetaAmino): _25.SnapshotExtensionMeta;
                    toAmino(message: _25.SnapshotExtensionMeta): _25.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _25.SnapshotExtensionMetaAminoMsg): _25.SnapshotExtensionMeta;
                    toAminoMsg(message: _25.SnapshotExtensionMeta): _25.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _25.SnapshotExtensionMetaProtoMsg): _25.SnapshotExtensionMeta;
                    toProto(message: _25.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _25.SnapshotExtensionMeta): _25.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    encode(message: _25.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.SnapshotExtensionPayload;
                    fromJSON(object: any): _25.SnapshotExtensionPayload;
                    toJSON(message: _25.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_25.SnapshotExtensionPayload>): _25.SnapshotExtensionPayload;
                    fromAmino(object: _25.SnapshotExtensionPayloadAmino): _25.SnapshotExtensionPayload;
                    toAmino(message: _25.SnapshotExtensionPayload): _25.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _25.SnapshotExtensionPayloadAminoMsg): _25.SnapshotExtensionPayload;
                    toAminoMsg(message: _25.SnapshotExtensionPayload): _25.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _25.SnapshotExtensionPayloadProtoMsg): _25.SnapshotExtensionPayload;
                    toProto(message: _25.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _25.SnapshotExtensionPayload): _25.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    encode(message: _25.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.SnapshotKVItem;
                    fromJSON(object: any): _25.SnapshotKVItem;
                    toJSON(message: _25.SnapshotKVItem): unknown;
                    fromPartial(object: Partial<_25.SnapshotKVItem>): _25.SnapshotKVItem;
                    fromAmino(object: _25.SnapshotKVItemAmino): _25.SnapshotKVItem;
                    toAmino(message: _25.SnapshotKVItem): _25.SnapshotKVItemAmino;
                    fromAminoMsg(object: _25.SnapshotKVItemAminoMsg): _25.SnapshotKVItem;
                    toAminoMsg(message: _25.SnapshotKVItem): _25.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _25.SnapshotKVItemProtoMsg): _25.SnapshotKVItem;
                    toProto(message: _25.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _25.SnapshotKVItem): _25.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    encode(message: _25.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.SnapshotSchema;
                    fromJSON(object: any): _25.SnapshotSchema;
                    toJSON(message: _25.SnapshotSchema): unknown;
                    fromPartial(object: Partial<_25.SnapshotSchema>): _25.SnapshotSchema;
                    fromAmino(object: _25.SnapshotSchemaAmino): _25.SnapshotSchema;
                    toAmino(message: _25.SnapshotSchema): _25.SnapshotSchemaAmino;
                    fromAminoMsg(object: _25.SnapshotSchemaAminoMsg): _25.SnapshotSchema;
                    toAminoMsg(message: _25.SnapshotSchema): _25.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _25.SnapshotSchemaProtoMsg): _25.SnapshotSchema;
                    toProto(message: _25.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _25.SnapshotSchema): _25.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _27.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.StoreKVPair;
                    fromJSON(object: any): _27.StoreKVPair;
                    toJSON(message: _27.StoreKVPair): unknown;
                    fromPartial(object: Partial<_27.StoreKVPair>): _27.StoreKVPair;
                    fromAmino(object: _27.StoreKVPairAmino): _27.StoreKVPair;
                    toAmino(message: _27.StoreKVPair): _27.StoreKVPairAmino;
                    fromAminoMsg(object: _27.StoreKVPairAminoMsg): _27.StoreKVPair;
                    toAminoMsg(message: _27.StoreKVPair): _27.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _27.StoreKVPairProtoMsg): _27.StoreKVPair;
                    toProto(message: _27.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _27.StoreKVPair): _27.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    encode(message: _27.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.BlockMetadata;
                    fromJSON(object: any): _27.BlockMetadata;
                    toJSON(message: _27.BlockMetadata): unknown;
                    fromPartial(object: Partial<_27.BlockMetadata>): _27.BlockMetadata;
                    fromAmino(object: _27.BlockMetadataAmino): _27.BlockMetadata;
                    toAmino(message: _27.BlockMetadata): _27.BlockMetadataAmino;
                    fromAminoMsg(object: _27.BlockMetadataAminoMsg): _27.BlockMetadata;
                    toAminoMsg(message: _27.BlockMetadata): _27.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _27.BlockMetadataProtoMsg): _27.BlockMetadata;
                    toProto(message: _27.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _27.BlockMetadata): _27.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _27.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.BlockMetadata_DeliverTx;
                    fromJSON(object: any): _27.BlockMetadata_DeliverTx;
                    toJSON(message: _27.BlockMetadata_DeliverTx): unknown;
                    fromPartial(object: Partial<_27.BlockMetadata_DeliverTx>): _27.BlockMetadata_DeliverTx;
                    fromAmino(object: _27.BlockMetadata_DeliverTxAmino): _27.BlockMetadata_DeliverTx;
                    toAmino(message: _27.BlockMetadata_DeliverTx): _27.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _27.BlockMetadata_DeliverTxAminoMsg): _27.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _27.BlockMetadata_DeliverTx): _27.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _27.BlockMetadata_DeliverTxProtoMsg): _27.BlockMetadata_DeliverTx;
                    toProto(message: _27.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _27.BlockMetadata_DeliverTx): _27.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    encode(message: _26.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _26.CommitInfo;
                    fromJSON(object: any): _26.CommitInfo;
                    toJSON(message: _26.CommitInfo): unknown;
                    fromPartial(object: Partial<_26.CommitInfo>): _26.CommitInfo;
                    fromAmino(object: _26.CommitInfoAmino): _26.CommitInfo;
                    toAmino(message: _26.CommitInfo): _26.CommitInfoAmino;
                    fromAminoMsg(object: _26.CommitInfoAminoMsg): _26.CommitInfo;
                    toAminoMsg(message: _26.CommitInfo): _26.CommitInfoAminoMsg;
                    fromProtoMsg(message: _26.CommitInfoProtoMsg): _26.CommitInfo;
                    toProto(message: _26.CommitInfo): Uint8Array;
                    toProtoMsg(message: _26.CommitInfo): _26.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    encode(message: _26.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _26.StoreInfo;
                    fromJSON(object: any): _26.StoreInfo;
                    toJSON(message: _26.StoreInfo): unknown;
                    fromPartial(object: Partial<_26.StoreInfo>): _26.StoreInfo;
                    fromAmino(object: _26.StoreInfoAmino): _26.StoreInfo;
                    toAmino(message: _26.StoreInfo): _26.StoreInfoAmino;
                    fromAminoMsg(object: _26.StoreInfoAminoMsg): _26.StoreInfo;
                    toAminoMsg(message: _26.StoreInfo): _26.StoreInfoAminoMsg;
                    fromProtoMsg(message: _26.StoreInfoProtoMsg): _26.StoreInfo;
                    toProto(message: _26.StoreInfo): Uint8Array;
                    toProtoMsg(message: _26.StoreInfo): _26.StoreInfoProtoMsg;
                };
                CommitID: {
                    encode(message: _26.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _26.CommitID;
                    fromJSON(object: any): _26.CommitID;
                    toJSON(message: _26.CommitID): unknown;
                    fromPartial(object: Partial<_26.CommitID>): _26.CommitID;
                    fromAmino(object: _26.CommitIDAmino): _26.CommitID;
                    toAmino(message: _26.CommitID): _26.CommitIDAmino;
                    fromAminoMsg(object: _26.CommitIDAminoMsg): _26.CommitID;
                    toAminoMsg(message: _26.CommitID): _26.CommitIDAminoMsg;
                    fromProtoMsg(message: _26.CommitIDProtoMsg): _26.CommitID;
                    toProto(message: _26.CommitID): Uint8Array;
                    toProtoMsg(message: _26.CommitID): _26.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _202.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _28.GetNodeInfoRequest | undefined): Promise<_28.GetNodeInfoResponse>;
                    getSyncing(request?: _28.GetSyncingRequest | undefined): Promise<_28.GetSyncingResponse>;
                    getLatestBlock(request?: _28.GetLatestBlockRequest | undefined): Promise<_28.GetLatestBlockResponse>;
                    getBlockByHeight(request: _28.GetBlockByHeightRequest): Promise<_28.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _28.GetLatestValidatorSetRequest | undefined): Promise<_28.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _28.GetValidatorSetByHeightRequest): Promise<_28.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _28.ABCIQueryRequest): Promise<_28.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _183.LCDQueryClient;
                Block: {
                    encode(message: _29.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _29.Block;
                    fromJSON(object: any): _29.Block;
                    toJSON(message: _29.Block): unknown;
                    fromPartial(object: Partial<_29.Block>): _29.Block;
                    fromAmino(object: _29.BlockAmino): _29.Block;
                    toAmino(message: _29.Block): _29.BlockAmino;
                    fromAminoMsg(object: _29.BlockAminoMsg): _29.Block;
                    toAminoMsg(message: _29.Block): _29.BlockAminoMsg;
                    fromProtoMsg(message: _29.BlockProtoMsg): _29.Block;
                    toProto(message: _29.Block): Uint8Array;
                    toProtoMsg(message: _29.Block): _29.BlockProtoMsg;
                };
                Header: {
                    encode(message: _29.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _29.Header;
                    fromJSON(object: any): _29.Header;
                    toJSON(message: _29.Header): unknown;
                    fromPartial(object: Partial<_29.Header>): _29.Header;
                    fromAmino(object: _29.HeaderAmino): _29.Header;
                    toAmino(message: _29.Header): _29.HeaderAmino;
                    fromAminoMsg(object: _29.HeaderAminoMsg): _29.Header;
                    toAminoMsg(message: _29.Header): _29.HeaderAminoMsg;
                    fromProtoMsg(message: _29.HeaderProtoMsg): _29.Header;
                    toProto(message: _29.Header): Uint8Array;
                    toProtoMsg(message: _29.Header): _29.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _28.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _28.GetValidatorSetByHeightRequest;
                    toJSON(message: _28.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_28.GetValidatorSetByHeightRequest>): _28.GetValidatorSetByHeightRequest;
                    fromAmino(object: _28.GetValidatorSetByHeightRequestAmino): _28.GetValidatorSetByHeightRequest;
                    toAmino(message: _28.GetValidatorSetByHeightRequest): _28.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _28.GetValidatorSetByHeightRequestAminoMsg): _28.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _28.GetValidatorSetByHeightRequest): _28.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _28.GetValidatorSetByHeightRequestProtoMsg): _28.GetValidatorSetByHeightRequest;
                    toProto(message: _28.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _28.GetValidatorSetByHeightRequest): _28.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _28.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _28.GetValidatorSetByHeightResponse;
                    toJSON(message: _28.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_28.GetValidatorSetByHeightResponse>): _28.GetValidatorSetByHeightResponse;
                    fromAmino(object: _28.GetValidatorSetByHeightResponseAmino): _28.GetValidatorSetByHeightResponse;
                    toAmino(message: _28.GetValidatorSetByHeightResponse): _28.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _28.GetValidatorSetByHeightResponseAminoMsg): _28.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _28.GetValidatorSetByHeightResponse): _28.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _28.GetValidatorSetByHeightResponseProtoMsg): _28.GetValidatorSetByHeightResponse;
                    toProto(message: _28.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _28.GetValidatorSetByHeightResponse): _28.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _28.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _28.GetLatestValidatorSetRequest;
                    toJSON(message: _28.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_28.GetLatestValidatorSetRequest>): _28.GetLatestValidatorSetRequest;
                    fromAmino(object: _28.GetLatestValidatorSetRequestAmino): _28.GetLatestValidatorSetRequest;
                    toAmino(message: _28.GetLatestValidatorSetRequest): _28.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _28.GetLatestValidatorSetRequestAminoMsg): _28.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _28.GetLatestValidatorSetRequest): _28.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _28.GetLatestValidatorSetRequestProtoMsg): _28.GetLatestValidatorSetRequest;
                    toProto(message: _28.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _28.GetLatestValidatorSetRequest): _28.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _28.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _28.GetLatestValidatorSetResponse;
                    toJSON(message: _28.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_28.GetLatestValidatorSetResponse>): _28.GetLatestValidatorSetResponse;
                    fromAmino(object: _28.GetLatestValidatorSetResponseAmino): _28.GetLatestValidatorSetResponse;
                    toAmino(message: _28.GetLatestValidatorSetResponse): _28.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _28.GetLatestValidatorSetResponseAminoMsg): _28.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _28.GetLatestValidatorSetResponse): _28.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _28.GetLatestValidatorSetResponseProtoMsg): _28.GetLatestValidatorSetResponse;
                    toProto(message: _28.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _28.GetLatestValidatorSetResponse): _28.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    encode(message: _28.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.Validator;
                    fromJSON(object: any): _28.Validator;
                    toJSON(message: _28.Validator): unknown;
                    fromPartial(object: Partial<_28.Validator>): _28.Validator;
                    fromAmino(object: _28.ValidatorAmino): _28.Validator;
                    toAmino(message: _28.Validator): _28.ValidatorAmino;
                    fromAminoMsg(object: _28.ValidatorAminoMsg): _28.Validator;
                    toAminoMsg(message: _28.Validator): _28.ValidatorAminoMsg;
                    fromProtoMsg(message: _28.ValidatorProtoMsg): _28.Validator;
                    toProto(message: _28.Validator): Uint8Array;
                    toProtoMsg(message: _28.Validator): _28.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    encode(message: _28.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetBlockByHeightRequest;
                    fromJSON(object: any): _28.GetBlockByHeightRequest;
                    toJSON(message: _28.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_28.GetBlockByHeightRequest>): _28.GetBlockByHeightRequest;
                    fromAmino(object: _28.GetBlockByHeightRequestAmino): _28.GetBlockByHeightRequest;
                    toAmino(message: _28.GetBlockByHeightRequest): _28.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _28.GetBlockByHeightRequestAminoMsg): _28.GetBlockByHeightRequest;
                    toAminoMsg(message: _28.GetBlockByHeightRequest): _28.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _28.GetBlockByHeightRequestProtoMsg): _28.GetBlockByHeightRequest;
                    toProto(message: _28.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _28.GetBlockByHeightRequest): _28.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    encode(message: _28.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetBlockByHeightResponse;
                    fromJSON(object: any): _28.GetBlockByHeightResponse;
                    toJSON(message: _28.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_28.GetBlockByHeightResponse>): _28.GetBlockByHeightResponse;
                    fromAmino(object: _28.GetBlockByHeightResponseAmino): _28.GetBlockByHeightResponse;
                    toAmino(message: _28.GetBlockByHeightResponse): _28.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _28.GetBlockByHeightResponseAminoMsg): _28.GetBlockByHeightResponse;
                    toAminoMsg(message: _28.GetBlockByHeightResponse): _28.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _28.GetBlockByHeightResponseProtoMsg): _28.GetBlockByHeightResponse;
                    toProto(message: _28.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _28.GetBlockByHeightResponse): _28.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    encode(_: _28.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetLatestBlockRequest;
                    fromJSON(_: any): _28.GetLatestBlockRequest;
                    toJSON(_: _28.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_28.GetLatestBlockRequest>): _28.GetLatestBlockRequest;
                    fromAmino(_: _28.GetLatestBlockRequestAmino): _28.GetLatestBlockRequest;
                    toAmino(_: _28.GetLatestBlockRequest): _28.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _28.GetLatestBlockRequestAminoMsg): _28.GetLatestBlockRequest;
                    toAminoMsg(message: _28.GetLatestBlockRequest): _28.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _28.GetLatestBlockRequestProtoMsg): _28.GetLatestBlockRequest;
                    toProto(message: _28.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _28.GetLatestBlockRequest): _28.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    encode(message: _28.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetLatestBlockResponse;
                    fromJSON(object: any): _28.GetLatestBlockResponse;
                    toJSON(message: _28.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_28.GetLatestBlockResponse>): _28.GetLatestBlockResponse;
                    fromAmino(object: _28.GetLatestBlockResponseAmino): _28.GetLatestBlockResponse;
                    toAmino(message: _28.GetLatestBlockResponse): _28.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _28.GetLatestBlockResponseAminoMsg): _28.GetLatestBlockResponse;
                    toAminoMsg(message: _28.GetLatestBlockResponse): _28.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _28.GetLatestBlockResponseProtoMsg): _28.GetLatestBlockResponse;
                    toProto(message: _28.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _28.GetLatestBlockResponse): _28.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    encode(_: _28.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetSyncingRequest;
                    fromJSON(_: any): _28.GetSyncingRequest;
                    toJSON(_: _28.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_28.GetSyncingRequest>): _28.GetSyncingRequest;
                    fromAmino(_: _28.GetSyncingRequestAmino): _28.GetSyncingRequest;
                    toAmino(_: _28.GetSyncingRequest): _28.GetSyncingRequestAmino;
                    fromAminoMsg(object: _28.GetSyncingRequestAminoMsg): _28.GetSyncingRequest;
                    toAminoMsg(message: _28.GetSyncingRequest): _28.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _28.GetSyncingRequestProtoMsg): _28.GetSyncingRequest;
                    toProto(message: _28.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _28.GetSyncingRequest): _28.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    encode(message: _28.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetSyncingResponse;
                    fromJSON(object: any): _28.GetSyncingResponse;
                    toJSON(message: _28.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_28.GetSyncingResponse>): _28.GetSyncingResponse;
                    fromAmino(object: _28.GetSyncingResponseAmino): _28.GetSyncingResponse;
                    toAmino(message: _28.GetSyncingResponse): _28.GetSyncingResponseAmino;
                    fromAminoMsg(object: _28.GetSyncingResponseAminoMsg): _28.GetSyncingResponse;
                    toAminoMsg(message: _28.GetSyncingResponse): _28.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _28.GetSyncingResponseProtoMsg): _28.GetSyncingResponse;
                    toProto(message: _28.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _28.GetSyncingResponse): _28.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    encode(_: _28.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetNodeInfoRequest;
                    fromJSON(_: any): _28.GetNodeInfoRequest;
                    toJSON(_: _28.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_28.GetNodeInfoRequest>): _28.GetNodeInfoRequest;
                    fromAmino(_: _28.GetNodeInfoRequestAmino): _28.GetNodeInfoRequest;
                    toAmino(_: _28.GetNodeInfoRequest): _28.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _28.GetNodeInfoRequestAminoMsg): _28.GetNodeInfoRequest;
                    toAminoMsg(message: _28.GetNodeInfoRequest): _28.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _28.GetNodeInfoRequestProtoMsg): _28.GetNodeInfoRequest;
                    toProto(message: _28.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _28.GetNodeInfoRequest): _28.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    encode(message: _28.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetNodeInfoResponse;
                    fromJSON(object: any): _28.GetNodeInfoResponse;
                    toJSON(message: _28.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_28.GetNodeInfoResponse>): _28.GetNodeInfoResponse;
                    fromAmino(object: _28.GetNodeInfoResponseAmino): _28.GetNodeInfoResponse;
                    toAmino(message: _28.GetNodeInfoResponse): _28.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _28.GetNodeInfoResponseAminoMsg): _28.GetNodeInfoResponse;
                    toAminoMsg(message: _28.GetNodeInfoResponse): _28.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _28.GetNodeInfoResponseProtoMsg): _28.GetNodeInfoResponse;
                    toProto(message: _28.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _28.GetNodeInfoResponse): _28.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    encode(message: _28.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.VersionInfo;
                    fromJSON(object: any): _28.VersionInfo;
                    toJSON(message: _28.VersionInfo): unknown;
                    fromPartial(object: Partial<_28.VersionInfo>): _28.VersionInfo;
                    fromAmino(object: _28.VersionInfoAmino): _28.VersionInfo;
                    toAmino(message: _28.VersionInfo): _28.VersionInfoAmino;
                    fromAminoMsg(object: _28.VersionInfoAminoMsg): _28.VersionInfo;
                    toAminoMsg(message: _28.VersionInfo): _28.VersionInfoAminoMsg;
                    fromProtoMsg(message: _28.VersionInfoProtoMsg): _28.VersionInfo;
                    toProto(message: _28.VersionInfo): Uint8Array;
                    toProtoMsg(message: _28.VersionInfo): _28.VersionInfoProtoMsg;
                };
                Module: {
                    encode(message: _28.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.Module;
                    fromJSON(object: any): _28.Module;
                    toJSON(message: _28.Module): unknown;
                    fromPartial(object: Partial<_28.Module>): _28.Module;
                    fromAmino(object: _28.ModuleAmino): _28.Module;
                    toAmino(message: _28.Module): _28.ModuleAmino;
                    fromAminoMsg(object: _28.ModuleAminoMsg): _28.Module;
                    toAminoMsg(message: _28.Module): _28.ModuleAminoMsg;
                    fromProtoMsg(message: _28.ModuleProtoMsg): _28.Module;
                    toProto(message: _28.Module): Uint8Array;
                    toProtoMsg(message: _28.Module): _28.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    encode(message: _28.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.ABCIQueryRequest;
                    fromJSON(object: any): _28.ABCIQueryRequest;
                    toJSON(message: _28.ABCIQueryRequest): unknown;
                    fromPartial(object: Partial<_28.ABCIQueryRequest>): _28.ABCIQueryRequest;
                    fromAmino(object: _28.ABCIQueryRequestAmino): _28.ABCIQueryRequest;
                    toAmino(message: _28.ABCIQueryRequest): _28.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _28.ABCIQueryRequestAminoMsg): _28.ABCIQueryRequest;
                    toAminoMsg(message: _28.ABCIQueryRequest): _28.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _28.ABCIQueryRequestProtoMsg): _28.ABCIQueryRequest;
                    toProto(message: _28.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _28.ABCIQueryRequest): _28.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    encode(message: _28.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.ABCIQueryResponse;
                    fromJSON(object: any): _28.ABCIQueryResponse;
                    toJSON(message: _28.ABCIQueryResponse): unknown;
                    fromPartial(object: Partial<_28.ABCIQueryResponse>): _28.ABCIQueryResponse;
                    fromAmino(object: _28.ABCIQueryResponseAmino): _28.ABCIQueryResponse;
                    toAmino(message: _28.ABCIQueryResponse): _28.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _28.ABCIQueryResponseAminoMsg): _28.ABCIQueryResponse;
                    toAminoMsg(message: _28.ABCIQueryResponse): _28.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _28.ABCIQueryResponseProtoMsg): _28.ABCIQueryResponse;
                    toProto(message: _28.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _28.ABCIQueryResponse): _28.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    encode(message: _28.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.ProofOp;
                    fromJSON(object: any): _28.ProofOp;
                    toJSON(message: _28.ProofOp): unknown;
                    fromPartial(object: Partial<_28.ProofOp>): _28.ProofOp;
                    fromAmino(object: _28.ProofOpAmino): _28.ProofOp;
                    toAmino(message: _28.ProofOp): _28.ProofOpAmino;
                    fromAminoMsg(object: _28.ProofOpAminoMsg): _28.ProofOp;
                    toAminoMsg(message: _28.ProofOp): _28.ProofOpAminoMsg;
                    fromProtoMsg(message: _28.ProofOpProtoMsg): _28.ProofOp;
                    toProto(message: _28.ProofOp): Uint8Array;
                    toProtoMsg(message: _28.ProofOp): _28.ProofOpProtoMsg;
                };
                ProofOps: {
                    encode(message: _28.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.ProofOps;
                    fromJSON(object: any): _28.ProofOps;
                    toJSON(message: _28.ProofOps): unknown;
                    fromPartial(object: Partial<_28.ProofOps>): _28.ProofOps;
                    fromAmino(object: _28.ProofOpsAmino): _28.ProofOps;
                    toAmino(message: _28.ProofOps): _28.ProofOpsAmino;
                    fromAminoMsg(object: _28.ProofOpsAminoMsg): _28.ProofOps;
                    toAminoMsg(message: _28.ProofOps): _28.ProofOpsAminoMsg;
                    fromProtoMsg(message: _28.ProofOpsProtoMsg): _28.ProofOps;
                    toProto(message: _28.ProofOps): Uint8Array;
                    toProtoMsg(message: _28.ProofOps): _28.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _30.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _30.Coin;
                fromJSON(object: any): _30.Coin;
                toJSON(message: _30.Coin): unknown;
                fromPartial(object: Partial<_30.Coin>): _30.Coin;
                fromAmino(object: _30.CoinAmino): _30.Coin;
                toAmino(message: _30.Coin): _30.CoinAmino;
                fromAminoMsg(object: _30.CoinAminoMsg): _30.Coin;
                toAminoMsg(message: _30.Coin): _30.CoinAminoMsg;
                fromProtoMsg(message: _30.CoinProtoMsg): _30.Coin;
                toProto(message: _30.Coin): Uint8Array;
                toProtoMsg(message: _30.Coin): _30.CoinProtoMsg;
            };
            DecCoin: {
                encode(message: _30.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _30.DecCoin;
                fromJSON(object: any): _30.DecCoin;
                toJSON(message: _30.DecCoin): unknown;
                fromPartial(object: Partial<_30.DecCoin>): _30.DecCoin;
                fromAmino(object: _30.DecCoinAmino): _30.DecCoin;
                toAmino(message: _30.DecCoin): _30.DecCoinAmino;
                fromAminoMsg(object: _30.DecCoinAminoMsg): _30.DecCoin;
                toAminoMsg(message: _30.DecCoin): _30.DecCoinAminoMsg;
                fromProtoMsg(message: _30.DecCoinProtoMsg): _30.DecCoin;
                toProto(message: _30.DecCoin): Uint8Array;
                toProtoMsg(message: _30.DecCoin): _30.DecCoinProtoMsg;
            };
            IntProto: {
                encode(message: _30.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _30.IntProto;
                fromJSON(object: any): _30.IntProto;
                toJSON(message: _30.IntProto): unknown;
                fromPartial(object: Partial<_30.IntProto>): _30.IntProto;
                fromAmino(object: _30.IntProtoAmino): _30.IntProto;
                toAmino(message: _30.IntProto): _30.IntProtoAmino;
                fromAminoMsg(object: _30.IntProtoAminoMsg): _30.IntProto;
                toAminoMsg(message: _30.IntProto): _30.IntProtoAminoMsg;
                fromProtoMsg(message: _30.IntProtoProtoMsg): _30.IntProto;
                toProto(message: _30.IntProto): Uint8Array;
                toProtoMsg(message: _30.IntProto): _30.IntProtoProtoMsg;
            };
            DecProto: {
                encode(message: _30.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _30.DecProto;
                fromJSON(object: any): _30.DecProto;
                toJSON(message: _30.DecProto): unknown;
                fromPartial(object: Partial<_30.DecProto>): _30.DecProto;
                fromAmino(object: _30.DecProtoAmino): _30.DecProto;
                toAmino(message: _30.DecProto): _30.DecProtoAmino;
                fromAminoMsg(object: _30.DecProtoAminoMsg): _30.DecProto;
                toAminoMsg(message: _30.DecProto): _30.DecProtoAminoMsg;
                fromProtoMsg(message: _30.DecProtoProtoMsg): _30.DecProto;
                toProto(message: _30.DecProto): Uint8Array;
                toProtoMsg(message: _30.DecProto): _30.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _32.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _32.GenesisOwners;
                fromJSON(object: any): _32.GenesisOwners;
                toJSON(message: _32.GenesisOwners): unknown;
                fromPartial(object: Partial<_32.GenesisOwners>): _32.GenesisOwners;
                fromAmino(object: _32.GenesisOwnersAmino): _32.GenesisOwners;
                toAmino(message: _32.GenesisOwners): _32.GenesisOwnersAmino;
                fromAminoMsg(object: _32.GenesisOwnersAminoMsg): _32.GenesisOwners;
                toAminoMsg(message: _32.GenesisOwners): _32.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _32.GenesisOwnersProtoMsg): _32.GenesisOwners;
                toProto(message: _32.GenesisOwners): Uint8Array;
                toProtoMsg(message: _32.GenesisOwners): _32.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                encode(message: _32.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _32.GenesisState;
                fromJSON(object: any): _32.GenesisState;
                toJSON(message: _32.GenesisState): unknown;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
                fromAmino(object: _32.GenesisStateAmino): _32.GenesisState;
                toAmino(message: _32.GenesisState): _32.GenesisStateAmino;
                fromAminoMsg(object: _32.GenesisStateAminoMsg): _32.GenesisState;
                toAminoMsg(message: _32.GenesisState): _32.GenesisStateAminoMsg;
                fromProtoMsg(message: _32.GenesisStateProtoMsg): _32.GenesisState;
                toProto(message: _32.GenesisState): Uint8Array;
                toProtoMsg(message: _32.GenesisState): _32.GenesisStateProtoMsg;
            };
            Capability: {
                encode(message: _31.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _31.Capability;
                fromJSON(object: any): _31.Capability;
                toJSON(message: _31.Capability): unknown;
                fromPartial(object: Partial<_31.Capability>): _31.Capability;
                fromAmino(object: _31.CapabilityAmino): _31.Capability;
                toAmino(message: _31.Capability): _31.CapabilityAmino;
                fromAminoMsg(object: _31.CapabilityAminoMsg): _31.Capability;
                toAminoMsg(message: _31.Capability): _31.CapabilityAminoMsg;
                fromProtoMsg(message: _31.CapabilityProtoMsg): _31.Capability;
                toProto(message: _31.Capability): Uint8Array;
                toProtoMsg(message: _31.Capability): _31.CapabilityProtoMsg;
            };
            Owner: {
                encode(message: _31.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _31.Owner;
                fromJSON(object: any): _31.Owner;
                toJSON(message: _31.Owner): unknown;
                fromPartial(object: Partial<_31.Owner>): _31.Owner;
                fromAmino(object: _31.OwnerAmino): _31.Owner;
                toAmino(message: _31.Owner): _31.OwnerAmino;
                fromAminoMsg(object: _31.OwnerAminoMsg): _31.Owner;
                toAminoMsg(message: _31.Owner): _31.OwnerAminoMsg;
                fromProtoMsg(message: _31.OwnerProtoMsg): _31.Owner;
                toProto(message: _31.Owner): Uint8Array;
                toProtoMsg(message: _31.Owner): _31.OwnerProtoMsg;
            };
            CapabilityOwners: {
                encode(message: _31.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _31.CapabilityOwners;
                fromJSON(object: any): _31.CapabilityOwners;
                toJSON(message: _31.CapabilityOwners): unknown;
                fromPartial(object: Partial<_31.CapabilityOwners>): _31.CapabilityOwners;
                fromAmino(object: _31.CapabilityOwnersAmino): _31.CapabilityOwners;
                toAmino(message: _31.CapabilityOwners): _31.CapabilityOwnersAmino;
                fromAminoMsg(object: _31.CapabilityOwnersAminoMsg): _31.CapabilityOwners;
                toAminoMsg(message: _31.CapabilityOwners): _31.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _31.CapabilityOwnersProtoMsg): _31.CapabilityOwners;
                toProto(message: _31.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _31.CapabilityOwners): _31.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _218.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _34.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _34.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _34.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _34.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _34.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _34.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _34.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _34.MsgVerifyInvariant) => _34.MsgVerifyInvariantAmino;
                    fromAmino: (object: _34.MsgVerifyInvariantAmino) => _34.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _34.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _34.MsgVerifyInvariant;
                fromJSON(object: any): _34.MsgVerifyInvariant;
                toJSON(message: _34.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_34.MsgVerifyInvariant>): _34.MsgVerifyInvariant;
                fromAmino(object: _34.MsgVerifyInvariantAmino): _34.MsgVerifyInvariant;
                toAmino(message: _34.MsgVerifyInvariant): _34.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _34.MsgVerifyInvariantAminoMsg): _34.MsgVerifyInvariant;
                toAminoMsg(message: _34.MsgVerifyInvariant): _34.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _34.MsgVerifyInvariantProtoMsg): _34.MsgVerifyInvariant;
                toProto(message: _34.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _34.MsgVerifyInvariant): _34.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _34.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _34.MsgVerifyInvariantResponse;
                fromJSON(_: any): _34.MsgVerifyInvariantResponse;
                toJSON(_: _34.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_34.MsgVerifyInvariantResponse>): _34.MsgVerifyInvariantResponse;
                fromAmino(_: _34.MsgVerifyInvariantResponseAmino): _34.MsgVerifyInvariantResponse;
                toAmino(_: _34.MsgVerifyInvariantResponse): _34.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _34.MsgVerifyInvariantResponseAminoMsg): _34.MsgVerifyInvariantResponse;
                toAminoMsg(message: _34.MsgVerifyInvariantResponse): _34.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _34.MsgVerifyInvariantResponseProtoMsg): _34.MsgVerifyInvariantResponse;
                toProto(message: _34.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _34.MsgVerifyInvariantResponse): _34.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _33.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _33.GenesisState;
                fromJSON(object: any): _33.GenesisState;
                toJSON(message: _33.GenesisState): unknown;
                fromPartial(object: Partial<_33.GenesisState>): _33.GenesisState;
                fromAmino(object: _33.GenesisStateAmino): _33.GenesisState;
                toAmino(message: _33.GenesisState): _33.GenesisStateAmino;
                fromAminoMsg(object: _33.GenesisStateAminoMsg): _33.GenesisState;
                toAminoMsg(message: _33.GenesisState): _33.GenesisStateAminoMsg;
                fromProtoMsg(message: _33.GenesisStateProtoMsg): _33.GenesisState;
                toProto(message: _33.GenesisState): Uint8Array;
                toProtoMsg(message: _33.GenesisState): _33.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _35.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _35.PubKey;
                fromJSON(object: any): _35.PubKey;
                toJSON(message: _35.PubKey): unknown;
                fromPartial(object: Partial<_35.PubKey>): _35.PubKey;
                fromAmino(object: _35.PubKeyAmino): _35.PubKey;
                toAmino(message: _35.PubKey): _35.PubKeyAmino;
                fromAminoMsg(object: _35.PubKeyAminoMsg): _35.PubKey;
                toAminoMsg(message: _35.PubKey): _35.PubKeyAminoMsg;
                fromProtoMsg(message: _35.PubKeyProtoMsg): _35.PubKey;
                toProto(message: _35.PubKey): Uint8Array;
                toProtoMsg(message: _35.PubKey): _35.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _35.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _35.PrivKey;
                fromJSON(object: any): _35.PrivKey;
                toJSON(message: _35.PrivKey): unknown;
                fromPartial(object: Partial<_35.PrivKey>): _35.PrivKey;
                fromAmino(object: _35.PrivKeyAmino): _35.PrivKey;
                toAmino(message: _35.PrivKey): _35.PrivKeyAmino;
                fromAminoMsg(object: _35.PrivKeyAminoMsg): _35.PrivKey;
                toAminoMsg(message: _35.PrivKey): _35.PrivKeyAminoMsg;
                fromProtoMsg(message: _35.PrivKeyProtoMsg): _35.PrivKey;
                toProto(message: _35.PrivKey): Uint8Array;
                toProtoMsg(message: _35.PrivKey): _35.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _36.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _36.BIP44Params;
                    fromJSON(object: any): _36.BIP44Params;
                    toJSON(message: _36.BIP44Params): unknown;
                    fromPartial(object: Partial<_36.BIP44Params>): _36.BIP44Params;
                    fromAmino(object: _36.BIP44ParamsAmino): _36.BIP44Params;
                    toAmino(message: _36.BIP44Params): _36.BIP44ParamsAmino;
                    fromAminoMsg(object: _36.BIP44ParamsAminoMsg): _36.BIP44Params;
                    toAminoMsg(message: _36.BIP44Params): _36.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _36.BIP44ParamsProtoMsg): _36.BIP44Params;
                    toProto(message: _36.BIP44Params): Uint8Array;
                    toProtoMsg(message: _36.BIP44Params): _36.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _37.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _37.Record;
                    fromJSON(object: any): _37.Record;
                    toJSON(message: _37.Record): unknown;
                    fromPartial(object: Partial<_37.Record>): _37.Record;
                    fromAmino(object: _37.RecordAmino): _37.Record;
                    toAmino(message: _37.Record): _37.RecordAmino;
                    fromAminoMsg(object: _37.RecordAminoMsg): _37.Record;
                    toAminoMsg(message: _37.Record): _37.RecordAminoMsg;
                    fromProtoMsg(message: _37.RecordProtoMsg): _37.Record;
                    toProto(message: _37.Record): Uint8Array;
                    toProtoMsg(message: _37.Record): _37.RecordProtoMsg;
                };
                Record_Local: {
                    encode(message: _37.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _37.Record_Local;
                    fromJSON(object: any): _37.Record_Local;
                    toJSON(message: _37.Record_Local): unknown;
                    fromPartial(object: Partial<_37.Record_Local>): _37.Record_Local;
                    fromAmino(object: _37.Record_LocalAmino): _37.Record_Local;
                    toAmino(message: _37.Record_Local): _37.Record_LocalAmino;
                    fromAminoMsg(object: _37.Record_LocalAminoMsg): _37.Record_Local;
                    toAminoMsg(message: _37.Record_Local): _37.Record_LocalAminoMsg;
                    fromProtoMsg(message: _37.Record_LocalProtoMsg): _37.Record_Local;
                    toProto(message: _37.Record_Local): Uint8Array;
                    toProtoMsg(message: _37.Record_Local): _37.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    encode(message: _37.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _37.Record_Ledger;
                    fromJSON(object: any): _37.Record_Ledger;
                    toJSON(message: _37.Record_Ledger): unknown;
                    fromPartial(object: Partial<_37.Record_Ledger>): _37.Record_Ledger;
                    fromAmino(object: _37.Record_LedgerAmino): _37.Record_Ledger;
                    toAmino(message: _37.Record_Ledger): _37.Record_LedgerAmino;
                    fromAminoMsg(object: _37.Record_LedgerAminoMsg): _37.Record_Ledger;
                    toAminoMsg(message: _37.Record_Ledger): _37.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _37.Record_LedgerProtoMsg): _37.Record_Ledger;
                    toProto(message: _37.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _37.Record_Ledger): _37.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    encode(_: _37.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _37.Record_Multi;
                    fromJSON(_: any): _37.Record_Multi;
                    toJSON(_: _37.Record_Multi): unknown;
                    fromPartial(_: Partial<_37.Record_Multi>): _37.Record_Multi;
                    fromAmino(_: _37.Record_MultiAmino): _37.Record_Multi;
                    toAmino(_: _37.Record_Multi): _37.Record_MultiAmino;
                    fromAminoMsg(object: _37.Record_MultiAminoMsg): _37.Record_Multi;
                    toAminoMsg(message: _37.Record_Multi): _37.Record_MultiAminoMsg;
                    fromProtoMsg(message: _37.Record_MultiProtoMsg): _37.Record_Multi;
                    toProto(message: _37.Record_Multi): Uint8Array;
                    toProtoMsg(message: _37.Record_Multi): _37.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    encode(_: _37.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _37.Record_Offline;
                    fromJSON(_: any): _37.Record_Offline;
                    toJSON(_: _37.Record_Offline): unknown;
                    fromPartial(_: Partial<_37.Record_Offline>): _37.Record_Offline;
                    fromAmino(_: _37.Record_OfflineAmino): _37.Record_Offline;
                    toAmino(_: _37.Record_Offline): _37.Record_OfflineAmino;
                    fromAminoMsg(object: _37.Record_OfflineAminoMsg): _37.Record_Offline;
                    toAminoMsg(message: _37.Record_Offline): _37.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _37.Record_OfflineProtoMsg): _37.Record_Offline;
                    toProto(message: _37.Record_Offline): Uint8Array;
                    toProtoMsg(message: _37.Record_Offline): _37.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _38.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _38.LegacyAminoPubKey;
                fromJSON(object: any): _38.LegacyAminoPubKey;
                toJSON(message: _38.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_38.LegacyAminoPubKey>): _38.LegacyAminoPubKey;
                fromAmino(object: _38.LegacyAminoPubKeyAmino): _38.LegacyAminoPubKey;
                toAmino(message: _38.LegacyAminoPubKey): _38.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _38.LegacyAminoPubKeyAminoMsg): _38.LegacyAminoPubKey;
                toAminoMsg(message: _38.LegacyAminoPubKey): _38.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _38.LegacyAminoPubKeyProtoMsg): _38.LegacyAminoPubKey;
                toProto(message: _38.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _38.LegacyAminoPubKey): _38.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _39.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _39.PubKey;
                fromJSON(object: any): _39.PubKey;
                toJSON(message: _39.PubKey): unknown;
                fromPartial(object: Partial<_39.PubKey>): _39.PubKey;
                fromAmino(object: _39.PubKeyAmino): _39.PubKey;
                toAmino(message: _39.PubKey): _39.PubKeyAmino;
                fromAminoMsg(object: _39.PubKeyAminoMsg): _39.PubKey;
                toAminoMsg(message: _39.PubKey): _39.PubKeyAminoMsg;
                fromProtoMsg(message: _39.PubKeyProtoMsg): _39.PubKey;
                toProto(message: _39.PubKey): Uint8Array;
                toProtoMsg(message: _39.PubKey): _39.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _39.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _39.PrivKey;
                fromJSON(object: any): _39.PrivKey;
                toJSON(message: _39.PrivKey): unknown;
                fromPartial(object: Partial<_39.PrivKey>): _39.PrivKey;
                fromAmino(object: _39.PrivKeyAmino): _39.PrivKey;
                toAmino(message: _39.PrivKey): _39.PrivKeyAmino;
                fromAminoMsg(object: _39.PrivKeyAminoMsg): _39.PrivKey;
                toAminoMsg(message: _39.PrivKey): _39.PrivKeyAminoMsg;
                fromProtoMsg(message: _39.PrivKeyProtoMsg): _39.PrivKey;
                toProto(message: _39.PrivKey): Uint8Array;
                toProtoMsg(message: _39.PrivKey): _39.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _40.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _40.PubKey;
                fromJSON(object: any): _40.PubKey;
                toJSON(message: _40.PubKey): unknown;
                fromPartial(object: Partial<_40.PubKey>): _40.PubKey;
                fromAmino(object: _40.PubKeyAmino): _40.PubKey;
                toAmino(message: _40.PubKey): _40.PubKeyAmino;
                fromAminoMsg(object: _40.PubKeyAminoMsg): _40.PubKey;
                toAminoMsg(message: _40.PubKey): _40.PubKeyAminoMsg;
                fromProtoMsg(message: _40.PubKeyProtoMsg): _40.PubKey;
                toProto(message: _40.PubKey): Uint8Array;
                toProtoMsg(message: _40.PubKey): _40.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _40.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _40.PrivKey;
                fromJSON(object: any): _40.PrivKey;
                toJSON(message: _40.PrivKey): unknown;
                fromPartial(object: Partial<_40.PrivKey>): _40.PrivKey;
                fromAmino(object: _40.PrivKeyAmino): _40.PrivKey;
                toAmino(message: _40.PrivKey): _40.PrivKeyAmino;
                fromAminoMsg(object: _40.PrivKeyAminoMsg): _40.PrivKey;
                toAminoMsg(message: _40.PrivKey): _40.PrivKeyAminoMsg;
                fromProtoMsg(message: _40.PrivKeyProtoMsg): _40.PrivKey;
                toProto(message: _40.PrivKey): Uint8Array;
                toProtoMsg(message: _40.PrivKey): _40.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _219.MsgClientImpl;
            QueryClientImpl: typeof _203.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _43.QueryParamsRequest | undefined): Promise<_43.QueryParamsResponse>;
                validatorOutstandingRewards(request: _43.QueryValidatorOutstandingRewardsRequest): Promise<_43.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _43.QueryValidatorCommissionRequest): Promise<_43.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _43.QueryValidatorSlashesRequest): Promise<_43.QueryValidatorSlashesResponse>;
                delegationRewards(request: _43.QueryDelegationRewardsRequest): Promise<_43.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _43.QueryDelegationTotalRewardsRequest): Promise<_43.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _43.QueryDelegatorValidatorsRequest): Promise<_43.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _43.QueryDelegatorWithdrawAddressRequest): Promise<_43.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _43.QueryCommunityPoolRequest | undefined): Promise<_43.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _184.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _44.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _44.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _44.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _44.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _44.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _44.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _44.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _44.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _44.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _44.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _44.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _44.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _44.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _44.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _44.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _44.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _44.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _44.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _44.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _44.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _44.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _44.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _44.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _44.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _44.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _44.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _44.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _44.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _44.MsgSetWithdrawAddress) => _44.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _44.MsgSetWithdrawAddressAmino) => _44.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _44.MsgWithdrawDelegatorReward) => _44.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _44.MsgWithdrawDelegatorRewardAmino) => _44.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _44.MsgWithdrawValidatorCommission) => _44.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _44.MsgWithdrawValidatorCommissionAmino) => _44.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _44.MsgFundCommunityPool) => _44.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _44.MsgFundCommunityPoolAmino) => _44.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _44.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _44.MsgSetWithdrawAddress;
                fromJSON(object: any): _44.MsgSetWithdrawAddress;
                toJSON(message: _44.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_44.MsgSetWithdrawAddress>): _44.MsgSetWithdrawAddress;
                fromAmino(object: _44.MsgSetWithdrawAddressAmino): _44.MsgSetWithdrawAddress;
                toAmino(message: _44.MsgSetWithdrawAddress): _44.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _44.MsgSetWithdrawAddressAminoMsg): _44.MsgSetWithdrawAddress;
                toAminoMsg(message: _44.MsgSetWithdrawAddress): _44.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _44.MsgSetWithdrawAddressProtoMsg): _44.MsgSetWithdrawAddress;
                toProto(message: _44.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _44.MsgSetWithdrawAddress): _44.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _44.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _44.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _44.MsgSetWithdrawAddressResponse;
                toJSON(_: _44.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_44.MsgSetWithdrawAddressResponse>): _44.MsgSetWithdrawAddressResponse;
                fromAmino(_: _44.MsgSetWithdrawAddressResponseAmino): _44.MsgSetWithdrawAddressResponse;
                toAmino(_: _44.MsgSetWithdrawAddressResponse): _44.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _44.MsgSetWithdrawAddressResponseAminoMsg): _44.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _44.MsgSetWithdrawAddressResponse): _44.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _44.MsgSetWithdrawAddressResponseProtoMsg): _44.MsgSetWithdrawAddressResponse;
                toProto(message: _44.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _44.MsgSetWithdrawAddressResponse): _44.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _44.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _44.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _44.MsgWithdrawDelegatorReward;
                toJSON(message: _44.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_44.MsgWithdrawDelegatorReward>): _44.MsgWithdrawDelegatorReward;
                fromAmino(object: _44.MsgWithdrawDelegatorRewardAmino): _44.MsgWithdrawDelegatorReward;
                toAmino(message: _44.MsgWithdrawDelegatorReward): _44.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _44.MsgWithdrawDelegatorRewardAminoMsg): _44.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _44.MsgWithdrawDelegatorReward): _44.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _44.MsgWithdrawDelegatorRewardProtoMsg): _44.MsgWithdrawDelegatorReward;
                toProto(message: _44.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _44.MsgWithdrawDelegatorReward): _44.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _44.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _44.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _44.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _44.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_44.MsgWithdrawDelegatorRewardResponse>): _44.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _44.MsgWithdrawDelegatorRewardResponseAmino): _44.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _44.MsgWithdrawDelegatorRewardResponse): _44.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _44.MsgWithdrawDelegatorRewardResponseAminoMsg): _44.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _44.MsgWithdrawDelegatorRewardResponse): _44.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _44.MsgWithdrawDelegatorRewardResponseProtoMsg): _44.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _44.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _44.MsgWithdrawDelegatorRewardResponse): _44.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _44.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _44.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _44.MsgWithdrawValidatorCommission;
                toJSON(message: _44.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_44.MsgWithdrawValidatorCommission>): _44.MsgWithdrawValidatorCommission;
                fromAmino(object: _44.MsgWithdrawValidatorCommissionAmino): _44.MsgWithdrawValidatorCommission;
                toAmino(message: _44.MsgWithdrawValidatorCommission): _44.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _44.MsgWithdrawValidatorCommissionAminoMsg): _44.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _44.MsgWithdrawValidatorCommission): _44.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _44.MsgWithdrawValidatorCommissionProtoMsg): _44.MsgWithdrawValidatorCommission;
                toProto(message: _44.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _44.MsgWithdrawValidatorCommission): _44.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _44.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _44.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _44.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _44.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_44.MsgWithdrawValidatorCommissionResponse>): _44.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _44.MsgWithdrawValidatorCommissionResponseAmino): _44.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _44.MsgWithdrawValidatorCommissionResponse): _44.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _44.MsgWithdrawValidatorCommissionResponseAminoMsg): _44.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _44.MsgWithdrawValidatorCommissionResponse): _44.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _44.MsgWithdrawValidatorCommissionResponseProtoMsg): _44.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _44.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _44.MsgWithdrawValidatorCommissionResponse): _44.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                encode(message: _44.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _44.MsgFundCommunityPool;
                fromJSON(object: any): _44.MsgFundCommunityPool;
                toJSON(message: _44.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_44.MsgFundCommunityPool>): _44.MsgFundCommunityPool;
                fromAmino(object: _44.MsgFundCommunityPoolAmino): _44.MsgFundCommunityPool;
                toAmino(message: _44.MsgFundCommunityPool): _44.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _44.MsgFundCommunityPoolAminoMsg): _44.MsgFundCommunityPool;
                toAminoMsg(message: _44.MsgFundCommunityPool): _44.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _44.MsgFundCommunityPoolProtoMsg): _44.MsgFundCommunityPool;
                toProto(message: _44.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _44.MsgFundCommunityPool): _44.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _44.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _44.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _44.MsgFundCommunityPoolResponse;
                toJSON(_: _44.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_44.MsgFundCommunityPoolResponse>): _44.MsgFundCommunityPoolResponse;
                fromAmino(_: _44.MsgFundCommunityPoolResponseAmino): _44.MsgFundCommunityPoolResponse;
                toAmino(_: _44.MsgFundCommunityPoolResponse): _44.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _44.MsgFundCommunityPoolResponseAminoMsg): _44.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _44.MsgFundCommunityPoolResponse): _44.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _44.MsgFundCommunityPoolResponseProtoMsg): _44.MsgFundCommunityPoolResponse;
                toProto(message: _44.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _44.MsgFundCommunityPoolResponse): _44.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _43.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryParamsRequest;
                fromJSON(_: any): _43.QueryParamsRequest;
                toJSON(_: _43.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_43.QueryParamsRequest>): _43.QueryParamsRequest;
                fromAmino(_: _43.QueryParamsRequestAmino): _43.QueryParamsRequest;
                toAmino(_: _43.QueryParamsRequest): _43.QueryParamsRequestAmino;
                fromAminoMsg(object: _43.QueryParamsRequestAminoMsg): _43.QueryParamsRequest;
                toAminoMsg(message: _43.QueryParamsRequest): _43.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryParamsRequestProtoMsg): _43.QueryParamsRequest;
                toProto(message: _43.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryParamsRequest): _43.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _43.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryParamsResponse;
                fromJSON(object: any): _43.QueryParamsResponse;
                toJSON(message: _43.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_43.QueryParamsResponse>): _43.QueryParamsResponse;
                fromAmino(object: _43.QueryParamsResponseAmino): _43.QueryParamsResponse;
                toAmino(message: _43.QueryParamsResponse): _43.QueryParamsResponseAmino;
                fromAminoMsg(object: _43.QueryParamsResponseAminoMsg): _43.QueryParamsResponse;
                toAminoMsg(message: _43.QueryParamsResponse): _43.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryParamsResponseProtoMsg): _43.QueryParamsResponse;
                toProto(message: _43.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryParamsResponse): _43.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _43.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _43.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _43.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_43.QueryValidatorOutstandingRewardsRequest>): _43.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _43.QueryValidatorOutstandingRewardsRequestAmino): _43.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _43.QueryValidatorOutstandingRewardsRequest): _43.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _43.QueryValidatorOutstandingRewardsRequestAminoMsg): _43.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _43.QueryValidatorOutstandingRewardsRequest): _43.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorOutstandingRewardsRequestProtoMsg): _43.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _43.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorOutstandingRewardsRequest): _43.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _43.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _43.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _43.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_43.QueryValidatorOutstandingRewardsResponse>): _43.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _43.QueryValidatorOutstandingRewardsResponseAmino): _43.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _43.QueryValidatorOutstandingRewardsResponse): _43.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _43.QueryValidatorOutstandingRewardsResponseAminoMsg): _43.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _43.QueryValidatorOutstandingRewardsResponse): _43.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorOutstandingRewardsResponseProtoMsg): _43.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _43.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorOutstandingRewardsResponse): _43.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _43.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryValidatorCommissionRequest;
                fromJSON(object: any): _43.QueryValidatorCommissionRequest;
                toJSON(message: _43.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_43.QueryValidatorCommissionRequest>): _43.QueryValidatorCommissionRequest;
                fromAmino(object: _43.QueryValidatorCommissionRequestAmino): _43.QueryValidatorCommissionRequest;
                toAmino(message: _43.QueryValidatorCommissionRequest): _43.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _43.QueryValidatorCommissionRequestAminoMsg): _43.QueryValidatorCommissionRequest;
                toAminoMsg(message: _43.QueryValidatorCommissionRequest): _43.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorCommissionRequestProtoMsg): _43.QueryValidatorCommissionRequest;
                toProto(message: _43.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorCommissionRequest): _43.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _43.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryValidatorCommissionResponse;
                fromJSON(object: any): _43.QueryValidatorCommissionResponse;
                toJSON(message: _43.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_43.QueryValidatorCommissionResponse>): _43.QueryValidatorCommissionResponse;
                fromAmino(object: _43.QueryValidatorCommissionResponseAmino): _43.QueryValidatorCommissionResponse;
                toAmino(message: _43.QueryValidatorCommissionResponse): _43.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _43.QueryValidatorCommissionResponseAminoMsg): _43.QueryValidatorCommissionResponse;
                toAminoMsg(message: _43.QueryValidatorCommissionResponse): _43.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorCommissionResponseProtoMsg): _43.QueryValidatorCommissionResponse;
                toProto(message: _43.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorCommissionResponse): _43.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _43.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryValidatorSlashesRequest;
                fromJSON(object: any): _43.QueryValidatorSlashesRequest;
                toJSON(message: _43.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_43.QueryValidatorSlashesRequest>): _43.QueryValidatorSlashesRequest;
                fromAmino(object: _43.QueryValidatorSlashesRequestAmino): _43.QueryValidatorSlashesRequest;
                toAmino(message: _43.QueryValidatorSlashesRequest): _43.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _43.QueryValidatorSlashesRequestAminoMsg): _43.QueryValidatorSlashesRequest;
                toAminoMsg(message: _43.QueryValidatorSlashesRequest): _43.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorSlashesRequestProtoMsg): _43.QueryValidatorSlashesRequest;
                toProto(message: _43.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorSlashesRequest): _43.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _43.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryValidatorSlashesResponse;
                fromJSON(object: any): _43.QueryValidatorSlashesResponse;
                toJSON(message: _43.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_43.QueryValidatorSlashesResponse>): _43.QueryValidatorSlashesResponse;
                fromAmino(object: _43.QueryValidatorSlashesResponseAmino): _43.QueryValidatorSlashesResponse;
                toAmino(message: _43.QueryValidatorSlashesResponse): _43.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _43.QueryValidatorSlashesResponseAminoMsg): _43.QueryValidatorSlashesResponse;
                toAminoMsg(message: _43.QueryValidatorSlashesResponse): _43.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorSlashesResponseProtoMsg): _43.QueryValidatorSlashesResponse;
                toProto(message: _43.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorSlashesResponse): _43.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _43.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryDelegationRewardsRequest;
                fromJSON(object: any): _43.QueryDelegationRewardsRequest;
                toJSON(message: _43.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_43.QueryDelegationRewardsRequest>): _43.QueryDelegationRewardsRequest;
                fromAmino(object: _43.QueryDelegationRewardsRequestAmino): _43.QueryDelegationRewardsRequest;
                toAmino(message: _43.QueryDelegationRewardsRequest): _43.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _43.QueryDelegationRewardsRequestAminoMsg): _43.QueryDelegationRewardsRequest;
                toAminoMsg(message: _43.QueryDelegationRewardsRequest): _43.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryDelegationRewardsRequestProtoMsg): _43.QueryDelegationRewardsRequest;
                toProto(message: _43.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryDelegationRewardsRequest): _43.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _43.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryDelegationRewardsResponse;
                fromJSON(object: any): _43.QueryDelegationRewardsResponse;
                toJSON(message: _43.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_43.QueryDelegationRewardsResponse>): _43.QueryDelegationRewardsResponse;
                fromAmino(object: _43.QueryDelegationRewardsResponseAmino): _43.QueryDelegationRewardsResponse;
                toAmino(message: _43.QueryDelegationRewardsResponse): _43.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _43.QueryDelegationRewardsResponseAminoMsg): _43.QueryDelegationRewardsResponse;
                toAminoMsg(message: _43.QueryDelegationRewardsResponse): _43.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryDelegationRewardsResponseProtoMsg): _43.QueryDelegationRewardsResponse;
                toProto(message: _43.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryDelegationRewardsResponse): _43.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _43.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _43.QueryDelegationTotalRewardsRequest;
                toJSON(message: _43.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_43.QueryDelegationTotalRewardsRequest>): _43.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _43.QueryDelegationTotalRewardsRequestAmino): _43.QueryDelegationTotalRewardsRequest;
                toAmino(message: _43.QueryDelegationTotalRewardsRequest): _43.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _43.QueryDelegationTotalRewardsRequestAminoMsg): _43.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _43.QueryDelegationTotalRewardsRequest): _43.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryDelegationTotalRewardsRequestProtoMsg): _43.QueryDelegationTotalRewardsRequest;
                toProto(message: _43.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryDelegationTotalRewardsRequest): _43.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _43.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _43.QueryDelegationTotalRewardsResponse;
                toJSON(message: _43.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_43.QueryDelegationTotalRewardsResponse>): _43.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _43.QueryDelegationTotalRewardsResponseAmino): _43.QueryDelegationTotalRewardsResponse;
                toAmino(message: _43.QueryDelegationTotalRewardsResponse): _43.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _43.QueryDelegationTotalRewardsResponseAminoMsg): _43.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _43.QueryDelegationTotalRewardsResponse): _43.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryDelegationTotalRewardsResponseProtoMsg): _43.QueryDelegationTotalRewardsResponse;
                toProto(message: _43.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryDelegationTotalRewardsResponse): _43.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _43.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _43.QueryDelegatorValidatorsRequest;
                toJSON(message: _43.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_43.QueryDelegatorValidatorsRequest>): _43.QueryDelegatorValidatorsRequest;
                fromAmino(object: _43.QueryDelegatorValidatorsRequestAmino): _43.QueryDelegatorValidatorsRequest;
                toAmino(message: _43.QueryDelegatorValidatorsRequest): _43.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _43.QueryDelegatorValidatorsRequestAminoMsg): _43.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _43.QueryDelegatorValidatorsRequest): _43.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryDelegatorValidatorsRequestProtoMsg): _43.QueryDelegatorValidatorsRequest;
                toProto(message: _43.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryDelegatorValidatorsRequest): _43.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _43.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _43.QueryDelegatorValidatorsResponse;
                toJSON(message: _43.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_43.QueryDelegatorValidatorsResponse>): _43.QueryDelegatorValidatorsResponse;
                fromAmino(object: _43.QueryDelegatorValidatorsResponseAmino): _43.QueryDelegatorValidatorsResponse;
                toAmino(message: _43.QueryDelegatorValidatorsResponse): _43.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _43.QueryDelegatorValidatorsResponseAminoMsg): _43.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _43.QueryDelegatorValidatorsResponse): _43.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryDelegatorValidatorsResponseProtoMsg): _43.QueryDelegatorValidatorsResponse;
                toProto(message: _43.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryDelegatorValidatorsResponse): _43.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _43.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _43.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _43.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_43.QueryDelegatorWithdrawAddressRequest>): _43.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _43.QueryDelegatorWithdrawAddressRequestAmino): _43.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _43.QueryDelegatorWithdrawAddressRequest): _43.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _43.QueryDelegatorWithdrawAddressRequestAminoMsg): _43.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _43.QueryDelegatorWithdrawAddressRequest): _43.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _43.QueryDelegatorWithdrawAddressRequestProtoMsg): _43.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _43.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _43.QueryDelegatorWithdrawAddressRequest): _43.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _43.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _43.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _43.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_43.QueryDelegatorWithdrawAddressResponse>): _43.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _43.QueryDelegatorWithdrawAddressResponseAmino): _43.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _43.QueryDelegatorWithdrawAddressResponse): _43.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _43.QueryDelegatorWithdrawAddressResponseAminoMsg): _43.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _43.QueryDelegatorWithdrawAddressResponse): _43.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _43.QueryDelegatorWithdrawAddressResponseProtoMsg): _43.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _43.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _43.QueryDelegatorWithdrawAddressResponse): _43.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                encode(_: _43.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryCommunityPoolRequest;
                fromJSON(_: any): _43.QueryCommunityPoolRequest;
                toJSON(_: _43.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_43.QueryCommunityPoolRequest>): _43.QueryCommunityPoolRequest;
                fromAmino(_: _43.QueryCommunityPoolRequestAmino): _43.QueryCommunityPoolRequest;
                toAmino(_: _43.QueryCommunityPoolRequest): _43.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _43.QueryCommunityPoolRequestAminoMsg): _43.QueryCommunityPoolRequest;
                toAminoMsg(message: _43.QueryCommunityPoolRequest): _43.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _43.QueryCommunityPoolRequestProtoMsg): _43.QueryCommunityPoolRequest;
                toProto(message: _43.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _43.QueryCommunityPoolRequest): _43.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                encode(message: _43.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryCommunityPoolResponse;
                fromJSON(object: any): _43.QueryCommunityPoolResponse;
                toJSON(message: _43.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_43.QueryCommunityPoolResponse>): _43.QueryCommunityPoolResponse;
                fromAmino(object: _43.QueryCommunityPoolResponseAmino): _43.QueryCommunityPoolResponse;
                toAmino(message: _43.QueryCommunityPoolResponse): _43.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _43.QueryCommunityPoolResponseAminoMsg): _43.QueryCommunityPoolResponse;
                toAminoMsg(message: _43.QueryCommunityPoolResponse): _43.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _43.QueryCommunityPoolResponseProtoMsg): _43.QueryCommunityPoolResponse;
                toProto(message: _43.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _43.QueryCommunityPoolResponse): _43.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                encode(message: _42.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _42.DelegatorWithdrawInfo;
                fromJSON(object: any): _42.DelegatorWithdrawInfo;
                toJSON(message: _42.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_42.DelegatorWithdrawInfo>): _42.DelegatorWithdrawInfo;
                fromAmino(object: _42.DelegatorWithdrawInfoAmino): _42.DelegatorWithdrawInfo;
                toAmino(message: _42.DelegatorWithdrawInfo): _42.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _42.DelegatorWithdrawInfoAminoMsg): _42.DelegatorWithdrawInfo;
                toAminoMsg(message: _42.DelegatorWithdrawInfo): _42.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _42.DelegatorWithdrawInfoProtoMsg): _42.DelegatorWithdrawInfo;
                toProto(message: _42.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _42.DelegatorWithdrawInfo): _42.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _42.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _42.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _42.ValidatorOutstandingRewardsRecord;
                toJSON(message: _42.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_42.ValidatorOutstandingRewardsRecord>): _42.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _42.ValidatorOutstandingRewardsRecordAmino): _42.ValidatorOutstandingRewardsRecord;
                toAmino(message: _42.ValidatorOutstandingRewardsRecord): _42.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _42.ValidatorOutstandingRewardsRecordAminoMsg): _42.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _42.ValidatorOutstandingRewardsRecord): _42.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _42.ValidatorOutstandingRewardsRecordProtoMsg): _42.ValidatorOutstandingRewardsRecord;
                toProto(message: _42.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _42.ValidatorOutstandingRewardsRecord): _42.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _42.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _42.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _42.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _42.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_42.ValidatorAccumulatedCommissionRecord>): _42.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _42.ValidatorAccumulatedCommissionRecordAmino): _42.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _42.ValidatorAccumulatedCommissionRecord): _42.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _42.ValidatorAccumulatedCommissionRecordAminoMsg): _42.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _42.ValidatorAccumulatedCommissionRecord): _42.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _42.ValidatorAccumulatedCommissionRecordProtoMsg): _42.ValidatorAccumulatedCommissionRecord;
                toProto(message: _42.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _42.ValidatorAccumulatedCommissionRecord): _42.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _42.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _42.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _42.ValidatorHistoricalRewardsRecord;
                toJSON(message: _42.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_42.ValidatorHistoricalRewardsRecord>): _42.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _42.ValidatorHistoricalRewardsRecordAmino): _42.ValidatorHistoricalRewardsRecord;
                toAmino(message: _42.ValidatorHistoricalRewardsRecord): _42.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _42.ValidatorHistoricalRewardsRecordAminoMsg): _42.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _42.ValidatorHistoricalRewardsRecord): _42.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _42.ValidatorHistoricalRewardsRecordProtoMsg): _42.ValidatorHistoricalRewardsRecord;
                toProto(message: _42.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _42.ValidatorHistoricalRewardsRecord): _42.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _42.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _42.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _42.ValidatorCurrentRewardsRecord;
                toJSON(message: _42.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_42.ValidatorCurrentRewardsRecord>): _42.ValidatorCurrentRewardsRecord;
                fromAmino(object: _42.ValidatorCurrentRewardsRecordAmino): _42.ValidatorCurrentRewardsRecord;
                toAmino(message: _42.ValidatorCurrentRewardsRecord): _42.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _42.ValidatorCurrentRewardsRecordAminoMsg): _42.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _42.ValidatorCurrentRewardsRecord): _42.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _42.ValidatorCurrentRewardsRecordProtoMsg): _42.ValidatorCurrentRewardsRecord;
                toProto(message: _42.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _42.ValidatorCurrentRewardsRecord): _42.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _42.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _42.DelegatorStartingInfoRecord;
                fromJSON(object: any): _42.DelegatorStartingInfoRecord;
                toJSON(message: _42.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_42.DelegatorStartingInfoRecord>): _42.DelegatorStartingInfoRecord;
                fromAmino(object: _42.DelegatorStartingInfoRecordAmino): _42.DelegatorStartingInfoRecord;
                toAmino(message: _42.DelegatorStartingInfoRecord): _42.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _42.DelegatorStartingInfoRecordAminoMsg): _42.DelegatorStartingInfoRecord;
                toAminoMsg(message: _42.DelegatorStartingInfoRecord): _42.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _42.DelegatorStartingInfoRecordProtoMsg): _42.DelegatorStartingInfoRecord;
                toProto(message: _42.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _42.DelegatorStartingInfoRecord): _42.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                encode(message: _42.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _42.ValidatorSlashEventRecord;
                fromJSON(object: any): _42.ValidatorSlashEventRecord;
                toJSON(message: _42.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_42.ValidatorSlashEventRecord>): _42.ValidatorSlashEventRecord;
                fromAmino(object: _42.ValidatorSlashEventRecordAmino): _42.ValidatorSlashEventRecord;
                toAmino(message: _42.ValidatorSlashEventRecord): _42.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _42.ValidatorSlashEventRecordAminoMsg): _42.ValidatorSlashEventRecord;
                toAminoMsg(message: _42.ValidatorSlashEventRecord): _42.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _42.ValidatorSlashEventRecordProtoMsg): _42.ValidatorSlashEventRecord;
                toProto(message: _42.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _42.ValidatorSlashEventRecord): _42.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                encode(message: _42.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _42.GenesisState;
                fromJSON(object: any): _42.GenesisState;
                toJSON(message: _42.GenesisState): unknown;
                fromPartial(object: Partial<_42.GenesisState>): _42.GenesisState;
                fromAmino(object: _42.GenesisStateAmino): _42.GenesisState;
                toAmino(message: _42.GenesisState): _42.GenesisStateAmino;
                fromAminoMsg(object: _42.GenesisStateAminoMsg): _42.GenesisState;
                toAminoMsg(message: _42.GenesisState): _42.GenesisStateAminoMsg;
                fromProtoMsg(message: _42.GenesisStateProtoMsg): _42.GenesisState;
                toProto(message: _42.GenesisState): Uint8Array;
                toProtoMsg(message: _42.GenesisState): _42.GenesisStateProtoMsg;
            };
            Params: {
                encode(message: _41.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.Params;
                fromJSON(object: any): _41.Params;
                toJSON(message: _41.Params): unknown;
                fromPartial(object: Partial<_41.Params>): _41.Params;
                fromAmino(object: _41.ParamsAmino): _41.Params;
                toAmino(message: _41.Params): _41.ParamsAmino;
                fromAminoMsg(object: _41.ParamsAminoMsg): _41.Params;
                toAminoMsg(message: _41.Params): _41.ParamsAminoMsg;
                fromProtoMsg(message: _41.ParamsProtoMsg): _41.Params;
                toProto(message: _41.Params): Uint8Array;
                toProtoMsg(message: _41.Params): _41.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                encode(message: _41.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.ValidatorHistoricalRewards;
                fromJSON(object: any): _41.ValidatorHistoricalRewards;
                toJSON(message: _41.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_41.ValidatorHistoricalRewards>): _41.ValidatorHistoricalRewards;
                fromAmino(object: _41.ValidatorHistoricalRewardsAmino): _41.ValidatorHistoricalRewards;
                toAmino(message: _41.ValidatorHistoricalRewards): _41.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _41.ValidatorHistoricalRewardsAminoMsg): _41.ValidatorHistoricalRewards;
                toAminoMsg(message: _41.ValidatorHistoricalRewards): _41.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _41.ValidatorHistoricalRewardsProtoMsg): _41.ValidatorHistoricalRewards;
                toProto(message: _41.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _41.ValidatorHistoricalRewards): _41.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                encode(message: _41.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.ValidatorCurrentRewards;
                fromJSON(object: any): _41.ValidatorCurrentRewards;
                toJSON(message: _41.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_41.ValidatorCurrentRewards>): _41.ValidatorCurrentRewards;
                fromAmino(object: _41.ValidatorCurrentRewardsAmino): _41.ValidatorCurrentRewards;
                toAmino(message: _41.ValidatorCurrentRewards): _41.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _41.ValidatorCurrentRewardsAminoMsg): _41.ValidatorCurrentRewards;
                toAminoMsg(message: _41.ValidatorCurrentRewards): _41.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _41.ValidatorCurrentRewardsProtoMsg): _41.ValidatorCurrentRewards;
                toProto(message: _41.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _41.ValidatorCurrentRewards): _41.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _41.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.ValidatorAccumulatedCommission;
                fromJSON(object: any): _41.ValidatorAccumulatedCommission;
                toJSON(message: _41.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_41.ValidatorAccumulatedCommission>): _41.ValidatorAccumulatedCommission;
                fromAmino(object: _41.ValidatorAccumulatedCommissionAmino): _41.ValidatorAccumulatedCommission;
                toAmino(message: _41.ValidatorAccumulatedCommission): _41.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _41.ValidatorAccumulatedCommissionAminoMsg): _41.ValidatorAccumulatedCommission;
                toAminoMsg(message: _41.ValidatorAccumulatedCommission): _41.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _41.ValidatorAccumulatedCommissionProtoMsg): _41.ValidatorAccumulatedCommission;
                toProto(message: _41.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _41.ValidatorAccumulatedCommission): _41.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                encode(message: _41.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.ValidatorOutstandingRewards;
                fromJSON(object: any): _41.ValidatorOutstandingRewards;
                toJSON(message: _41.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_41.ValidatorOutstandingRewards>): _41.ValidatorOutstandingRewards;
                fromAmino(object: _41.ValidatorOutstandingRewardsAmino): _41.ValidatorOutstandingRewards;
                toAmino(message: _41.ValidatorOutstandingRewards): _41.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _41.ValidatorOutstandingRewardsAminoMsg): _41.ValidatorOutstandingRewards;
                toAminoMsg(message: _41.ValidatorOutstandingRewards): _41.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _41.ValidatorOutstandingRewardsProtoMsg): _41.ValidatorOutstandingRewards;
                toProto(message: _41.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _41.ValidatorOutstandingRewards): _41.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                encode(message: _41.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.ValidatorSlashEvent;
                fromJSON(object: any): _41.ValidatorSlashEvent;
                toJSON(message: _41.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_41.ValidatorSlashEvent>): _41.ValidatorSlashEvent;
                fromAmino(object: _41.ValidatorSlashEventAmino): _41.ValidatorSlashEvent;
                toAmino(message: _41.ValidatorSlashEvent): _41.ValidatorSlashEventAmino;
                fromAminoMsg(object: _41.ValidatorSlashEventAminoMsg): _41.ValidatorSlashEvent;
                toAminoMsg(message: _41.ValidatorSlashEvent): _41.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _41.ValidatorSlashEventProtoMsg): _41.ValidatorSlashEvent;
                toProto(message: _41.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _41.ValidatorSlashEvent): _41.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                encode(message: _41.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.ValidatorSlashEvents;
                fromJSON(object: any): _41.ValidatorSlashEvents;
                toJSON(message: _41.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_41.ValidatorSlashEvents>): _41.ValidatorSlashEvents;
                fromAmino(object: _41.ValidatorSlashEventsAmino): _41.ValidatorSlashEvents;
                toAmino(message: _41.ValidatorSlashEvents): _41.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _41.ValidatorSlashEventsAminoMsg): _41.ValidatorSlashEvents;
                toAminoMsg(message: _41.ValidatorSlashEvents): _41.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _41.ValidatorSlashEventsProtoMsg): _41.ValidatorSlashEvents;
                toProto(message: _41.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _41.ValidatorSlashEvents): _41.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                encode(message: _41.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.FeePool;
                fromJSON(object: any): _41.FeePool;
                toJSON(message: _41.FeePool): unknown;
                fromPartial(object: Partial<_41.FeePool>): _41.FeePool;
                fromAmino(object: _41.FeePoolAmino): _41.FeePool;
                toAmino(message: _41.FeePool): _41.FeePoolAmino;
                fromAminoMsg(object: _41.FeePoolAminoMsg): _41.FeePool;
                toAminoMsg(message: _41.FeePool): _41.FeePoolAminoMsg;
                fromProtoMsg(message: _41.FeePoolProtoMsg): _41.FeePool;
                toProto(message: _41.FeePool): Uint8Array;
                toProtoMsg(message: _41.FeePool): _41.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                encode(message: _41.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.CommunityPoolSpendProposal;
                fromJSON(object: any): _41.CommunityPoolSpendProposal;
                toJSON(message: _41.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_41.CommunityPoolSpendProposal>): _41.CommunityPoolSpendProposal;
                fromAmino(object: _41.CommunityPoolSpendProposalAmino): _41.CommunityPoolSpendProposal;
                toAmino(message: _41.CommunityPoolSpendProposal): _41.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _41.CommunityPoolSpendProposalAminoMsg): _41.CommunityPoolSpendProposal;
                toAminoMsg(message: _41.CommunityPoolSpendProposal): _41.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _41.CommunityPoolSpendProposalProtoMsg): _41.CommunityPoolSpendProposal;
                toProto(message: _41.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _41.CommunityPoolSpendProposal): _41.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                encode(message: _41.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.DelegatorStartingInfo;
                fromJSON(object: any): _41.DelegatorStartingInfo;
                toJSON(message: _41.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_41.DelegatorStartingInfo>): _41.DelegatorStartingInfo;
                fromAmino(object: _41.DelegatorStartingInfoAmino): _41.DelegatorStartingInfo;
                toAmino(message: _41.DelegatorStartingInfo): _41.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _41.DelegatorStartingInfoAminoMsg): _41.DelegatorStartingInfo;
                toAminoMsg(message: _41.DelegatorStartingInfo): _41.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _41.DelegatorStartingInfoProtoMsg): _41.DelegatorStartingInfo;
                toProto(message: _41.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _41.DelegatorStartingInfo): _41.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                encode(message: _41.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.DelegationDelegatorReward;
                fromJSON(object: any): _41.DelegationDelegatorReward;
                toJSON(message: _41.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_41.DelegationDelegatorReward>): _41.DelegationDelegatorReward;
                fromAmino(object: _41.DelegationDelegatorRewardAmino): _41.DelegationDelegatorReward;
                toAmino(message: _41.DelegationDelegatorReward): _41.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _41.DelegationDelegatorRewardAminoMsg): _41.DelegationDelegatorReward;
                toAminoMsg(message: _41.DelegationDelegatorReward): _41.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _41.DelegationDelegatorRewardProtoMsg): _41.DelegationDelegatorReward;
                toProto(message: _41.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _41.DelegationDelegatorReward): _41.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _41.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _41.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _41.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_41.CommunityPoolSpendProposalWithDeposit>): _41.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _41.CommunityPoolSpendProposalWithDepositAmino): _41.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _41.CommunityPoolSpendProposalWithDeposit): _41.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _41.CommunityPoolSpendProposalWithDepositAminoMsg): _41.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _41.CommunityPoolSpendProposalWithDeposit): _41.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _41.CommunityPoolSpendProposalWithDepositProtoMsg): _41.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _41.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _41.CommunityPoolSpendProposalWithDeposit): _41.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _220.MsgClientImpl;
            QueryClientImpl: typeof _204.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _47.QueryEvidenceRequest): Promise<_47.QueryEvidenceResponse>;
                allEvidence(request?: _47.QueryAllEvidenceRequest | undefined): Promise<_47.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _185.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _48.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _48.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _48.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _48.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _48.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _48.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _48.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _48.MsgSubmitEvidence) => _48.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _48.MsgSubmitEvidenceAmino) => _48.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _48.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.MsgSubmitEvidence;
                fromJSON(object: any): _48.MsgSubmitEvidence;
                toJSON(message: _48.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_48.MsgSubmitEvidence>): _48.MsgSubmitEvidence;
                fromAmino(object: _48.MsgSubmitEvidenceAmino): _48.MsgSubmitEvidence;
                toAmino(message: _48.MsgSubmitEvidence): _48.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _48.MsgSubmitEvidenceAminoMsg): _48.MsgSubmitEvidence;
                toAminoMsg(message: _48.MsgSubmitEvidence): _48.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _48.MsgSubmitEvidenceProtoMsg): _48.MsgSubmitEvidence;
                toProto(message: _48.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _48.MsgSubmitEvidence): _48.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _48.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _48.MsgSubmitEvidenceResponse;
                toJSON(message: _48.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_48.MsgSubmitEvidenceResponse>): _48.MsgSubmitEvidenceResponse;
                fromAmino(object: _48.MsgSubmitEvidenceResponseAmino): _48.MsgSubmitEvidenceResponse;
                toAmino(message: _48.MsgSubmitEvidenceResponse): _48.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _48.MsgSubmitEvidenceResponseAminoMsg): _48.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _48.MsgSubmitEvidenceResponse): _48.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _48.MsgSubmitEvidenceResponseProtoMsg): _48.MsgSubmitEvidenceResponse;
                toProto(message: _48.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _48.MsgSubmitEvidenceResponse): _48.MsgSubmitEvidenceResponseProtoMsg;
            };
            Evidence_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                encode(message: _47.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _47.QueryEvidenceRequest;
                fromJSON(object: any): _47.QueryEvidenceRequest;
                toJSON(message: _47.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_47.QueryEvidenceRequest>): _47.QueryEvidenceRequest;
                fromAmino(object: _47.QueryEvidenceRequestAmino): _47.QueryEvidenceRequest;
                toAmino(message: _47.QueryEvidenceRequest): _47.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _47.QueryEvidenceRequestAminoMsg): _47.QueryEvidenceRequest;
                toAminoMsg(message: _47.QueryEvidenceRequest): _47.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _47.QueryEvidenceRequestProtoMsg): _47.QueryEvidenceRequest;
                toProto(message: _47.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _47.QueryEvidenceRequest): _47.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                encode(message: _47.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _47.QueryEvidenceResponse;
                fromJSON(object: any): _47.QueryEvidenceResponse;
                toJSON(message: _47.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_47.QueryEvidenceResponse>): _47.QueryEvidenceResponse;
                fromAmino(object: _47.QueryEvidenceResponseAmino): _47.QueryEvidenceResponse;
                toAmino(message: _47.QueryEvidenceResponse): _47.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _47.QueryEvidenceResponseAminoMsg): _47.QueryEvidenceResponse;
                toAminoMsg(message: _47.QueryEvidenceResponse): _47.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _47.QueryEvidenceResponseProtoMsg): _47.QueryEvidenceResponse;
                toProto(message: _47.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _47.QueryEvidenceResponse): _47.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                encode(message: _47.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _47.QueryAllEvidenceRequest;
                fromJSON(object: any): _47.QueryAllEvidenceRequest;
                toJSON(message: _47.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_47.QueryAllEvidenceRequest>): _47.QueryAllEvidenceRequest;
                fromAmino(object: _47.QueryAllEvidenceRequestAmino): _47.QueryAllEvidenceRequest;
                toAmino(message: _47.QueryAllEvidenceRequest): _47.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _47.QueryAllEvidenceRequestAminoMsg): _47.QueryAllEvidenceRequest;
                toAminoMsg(message: _47.QueryAllEvidenceRequest): _47.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _47.QueryAllEvidenceRequestProtoMsg): _47.QueryAllEvidenceRequest;
                toProto(message: _47.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _47.QueryAllEvidenceRequest): _47.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                encode(message: _47.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _47.QueryAllEvidenceResponse;
                fromJSON(object: any): _47.QueryAllEvidenceResponse;
                toJSON(message: _47.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_47.QueryAllEvidenceResponse>): _47.QueryAllEvidenceResponse;
                fromAmino(object: _47.QueryAllEvidenceResponseAmino): _47.QueryAllEvidenceResponse;
                toAmino(message: _47.QueryAllEvidenceResponse): _47.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _47.QueryAllEvidenceResponseAminoMsg): _47.QueryAllEvidenceResponse;
                toAminoMsg(message: _47.QueryAllEvidenceResponse): _47.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _47.QueryAllEvidenceResponseProtoMsg): _47.QueryAllEvidenceResponse;
                toProto(message: _47.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _47.QueryAllEvidenceResponse): _47.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _46.GenesisState;
                fromJSON(object: any): _46.GenesisState;
                toJSON(message: _46.GenesisState): unknown;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
                fromAmino(object: _46.GenesisStateAmino): _46.GenesisState;
                toAmino(message: _46.GenesisState): _46.GenesisStateAmino;
                fromAminoMsg(object: _46.GenesisStateAminoMsg): _46.GenesisState;
                toAminoMsg(message: _46.GenesisState): _46.GenesisStateAminoMsg;
                fromProtoMsg(message: _46.GenesisStateProtoMsg): _46.GenesisState;
                toProto(message: _46.GenesisState): Uint8Array;
                toProtoMsg(message: _46.GenesisState): _46.GenesisStateProtoMsg;
            };
            Equivocation: {
                encode(message: _45.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _45.Equivocation;
                fromJSON(object: any): _45.Equivocation;
                toJSON(message: _45.Equivocation): unknown;
                fromPartial(object: Partial<_45.Equivocation>): _45.Equivocation;
                fromAmino(object: _45.EquivocationAmino): _45.Equivocation;
                toAmino(message: _45.Equivocation): _45.EquivocationAmino;
                fromAminoMsg(object: _45.EquivocationAminoMsg): _45.Equivocation;
                toAminoMsg(message: _45.Equivocation): _45.EquivocationAminoMsg;
                fromProtoMsg(message: _45.EquivocationProtoMsg): _45.Equivocation;
                toProto(message: _45.Equivocation): Uint8Array;
                toProtoMsg(message: _45.Equivocation): _45.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _221.MsgClientImpl;
            QueryClientImpl: typeof _205.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _51.QueryAllowanceRequest): Promise<_51.QueryAllowanceResponse>;
                allowances(request: _51.QueryAllowancesRequest): Promise<_51.QueryAllowancesResponse>;
                allowancesByGranter(request: _51.QueryAllowancesByGranterRequest): Promise<_51.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _186.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _52.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _52.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _52.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _52.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _52.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _52.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _52.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _52.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _52.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _52.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _52.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _52.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _52.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _52.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _52.MsgGrantAllowance) => _52.MsgGrantAllowanceAmino;
                    fromAmino: (object: _52.MsgGrantAllowanceAmino) => _52.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _52.MsgRevokeAllowance) => _52.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _52.MsgRevokeAllowanceAmino) => _52.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _52.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _52.MsgGrantAllowance;
                fromJSON(object: any): _52.MsgGrantAllowance;
                toJSON(message: _52.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_52.MsgGrantAllowance>): _52.MsgGrantAllowance;
                fromAmino(object: _52.MsgGrantAllowanceAmino): _52.MsgGrantAllowance;
                toAmino(message: _52.MsgGrantAllowance): _52.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _52.MsgGrantAllowanceAminoMsg): _52.MsgGrantAllowance;
                toAminoMsg(message: _52.MsgGrantAllowance): _52.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _52.MsgGrantAllowanceProtoMsg): _52.MsgGrantAllowance;
                toProto(message: _52.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _52.MsgGrantAllowance): _52.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _52.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _52.MsgGrantAllowanceResponse;
                fromJSON(_: any): _52.MsgGrantAllowanceResponse;
                toJSON(_: _52.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_52.MsgGrantAllowanceResponse>): _52.MsgGrantAllowanceResponse;
                fromAmino(_: _52.MsgGrantAllowanceResponseAmino): _52.MsgGrantAllowanceResponse;
                toAmino(_: _52.MsgGrantAllowanceResponse): _52.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _52.MsgGrantAllowanceResponseAminoMsg): _52.MsgGrantAllowanceResponse;
                toAminoMsg(message: _52.MsgGrantAllowanceResponse): _52.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _52.MsgGrantAllowanceResponseProtoMsg): _52.MsgGrantAllowanceResponse;
                toProto(message: _52.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _52.MsgGrantAllowanceResponse): _52.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                encode(message: _52.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _52.MsgRevokeAllowance;
                fromJSON(object: any): _52.MsgRevokeAllowance;
                toJSON(message: _52.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_52.MsgRevokeAllowance>): _52.MsgRevokeAllowance;
                fromAmino(object: _52.MsgRevokeAllowanceAmino): _52.MsgRevokeAllowance;
                toAmino(message: _52.MsgRevokeAllowance): _52.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _52.MsgRevokeAllowanceAminoMsg): _52.MsgRevokeAllowance;
                toAminoMsg(message: _52.MsgRevokeAllowance): _52.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _52.MsgRevokeAllowanceProtoMsg): _52.MsgRevokeAllowance;
                toProto(message: _52.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _52.MsgRevokeAllowance): _52.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _52.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _52.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _52.MsgRevokeAllowanceResponse;
                toJSON(_: _52.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_52.MsgRevokeAllowanceResponse>): _52.MsgRevokeAllowanceResponse;
                fromAmino(_: _52.MsgRevokeAllowanceResponseAmino): _52.MsgRevokeAllowanceResponse;
                toAmino(_: _52.MsgRevokeAllowanceResponse): _52.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _52.MsgRevokeAllowanceResponseAminoMsg): _52.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _52.MsgRevokeAllowanceResponse): _52.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _52.MsgRevokeAllowanceResponseProtoMsg): _52.MsgRevokeAllowanceResponse;
                toProto(message: _52.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _52.MsgRevokeAllowanceResponse): _52.MsgRevokeAllowanceResponseProtoMsg;
            };
            FeeAllowanceI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _49.BasicAllowance | _49.PeriodicAllowance | _49.AllowedMsgAllowance;
            FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                encode(message: _51.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.QueryAllowanceRequest;
                fromJSON(object: any): _51.QueryAllowanceRequest;
                toJSON(message: _51.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_51.QueryAllowanceRequest>): _51.QueryAllowanceRequest;
                fromAmino(object: _51.QueryAllowanceRequestAmino): _51.QueryAllowanceRequest;
                toAmino(message: _51.QueryAllowanceRequest): _51.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _51.QueryAllowanceRequestAminoMsg): _51.QueryAllowanceRequest;
                toAminoMsg(message: _51.QueryAllowanceRequest): _51.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _51.QueryAllowanceRequestProtoMsg): _51.QueryAllowanceRequest;
                toProto(message: _51.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _51.QueryAllowanceRequest): _51.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                encode(message: _51.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.QueryAllowanceResponse;
                fromJSON(object: any): _51.QueryAllowanceResponse;
                toJSON(message: _51.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_51.QueryAllowanceResponse>): _51.QueryAllowanceResponse;
                fromAmino(object: _51.QueryAllowanceResponseAmino): _51.QueryAllowanceResponse;
                toAmino(message: _51.QueryAllowanceResponse): _51.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _51.QueryAllowanceResponseAminoMsg): _51.QueryAllowanceResponse;
                toAminoMsg(message: _51.QueryAllowanceResponse): _51.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _51.QueryAllowanceResponseProtoMsg): _51.QueryAllowanceResponse;
                toProto(message: _51.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _51.QueryAllowanceResponse): _51.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                encode(message: _51.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.QueryAllowancesRequest;
                fromJSON(object: any): _51.QueryAllowancesRequest;
                toJSON(message: _51.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_51.QueryAllowancesRequest>): _51.QueryAllowancesRequest;
                fromAmino(object: _51.QueryAllowancesRequestAmino): _51.QueryAllowancesRequest;
                toAmino(message: _51.QueryAllowancesRequest): _51.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _51.QueryAllowancesRequestAminoMsg): _51.QueryAllowancesRequest;
                toAminoMsg(message: _51.QueryAllowancesRequest): _51.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _51.QueryAllowancesRequestProtoMsg): _51.QueryAllowancesRequest;
                toProto(message: _51.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _51.QueryAllowancesRequest): _51.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                encode(message: _51.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.QueryAllowancesResponse;
                fromJSON(object: any): _51.QueryAllowancesResponse;
                toJSON(message: _51.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_51.QueryAllowancesResponse>): _51.QueryAllowancesResponse;
                fromAmino(object: _51.QueryAllowancesResponseAmino): _51.QueryAllowancesResponse;
                toAmino(message: _51.QueryAllowancesResponse): _51.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _51.QueryAllowancesResponseAminoMsg): _51.QueryAllowancesResponse;
                toAminoMsg(message: _51.QueryAllowancesResponse): _51.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _51.QueryAllowancesResponseProtoMsg): _51.QueryAllowancesResponse;
                toProto(message: _51.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _51.QueryAllowancesResponse): _51.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _51.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _51.QueryAllowancesByGranterRequest;
                toJSON(message: _51.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_51.QueryAllowancesByGranterRequest>): _51.QueryAllowancesByGranterRequest;
                fromAmino(object: _51.QueryAllowancesByGranterRequestAmino): _51.QueryAllowancesByGranterRequest;
                toAmino(message: _51.QueryAllowancesByGranterRequest): _51.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _51.QueryAllowancesByGranterRequestAminoMsg): _51.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _51.QueryAllowancesByGranterRequest): _51.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _51.QueryAllowancesByGranterRequestProtoMsg): _51.QueryAllowancesByGranterRequest;
                toProto(message: _51.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _51.QueryAllowancesByGranterRequest): _51.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _51.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _51.QueryAllowancesByGranterResponse;
                toJSON(message: _51.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_51.QueryAllowancesByGranterResponse>): _51.QueryAllowancesByGranterResponse;
                fromAmino(object: _51.QueryAllowancesByGranterResponseAmino): _51.QueryAllowancesByGranterResponse;
                toAmino(message: _51.QueryAllowancesByGranterResponse): _51.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _51.QueryAllowancesByGranterResponseAminoMsg): _51.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _51.QueryAllowancesByGranterResponse): _51.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _51.QueryAllowancesByGranterResponseProtoMsg): _51.QueryAllowancesByGranterResponse;
                toProto(message: _51.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _51.QueryAllowancesByGranterResponse): _51.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.GenesisState;
                fromJSON(object: any): _50.GenesisState;
                toJSON(message: _50.GenesisState): unknown;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
                fromAmino(object: _50.GenesisStateAmino): _50.GenesisState;
                toAmino(message: _50.GenesisState): _50.GenesisStateAmino;
                fromAminoMsg(object: _50.GenesisStateAminoMsg): _50.GenesisState;
                toAminoMsg(message: _50.GenesisState): _50.GenesisStateAminoMsg;
                fromProtoMsg(message: _50.GenesisStateProtoMsg): _50.GenesisState;
                toProto(message: _50.GenesisState): Uint8Array;
                toProtoMsg(message: _50.GenesisState): _50.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                encode(message: _49.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.BasicAllowance;
                fromJSON(object: any): _49.BasicAllowance;
                toJSON(message: _49.BasicAllowance): unknown;
                fromPartial(object: Partial<_49.BasicAllowance>): _49.BasicAllowance;
                fromAmino(object: _49.BasicAllowanceAmino): _49.BasicAllowance;
                toAmino(message: _49.BasicAllowance): _49.BasicAllowanceAmino;
                fromAminoMsg(object: _49.BasicAllowanceAminoMsg): _49.BasicAllowance;
                toAminoMsg(message: _49.BasicAllowance): _49.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _49.BasicAllowanceProtoMsg): _49.BasicAllowance;
                toProto(message: _49.BasicAllowance): Uint8Array;
                toProtoMsg(message: _49.BasicAllowance): _49.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                encode(message: _49.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.PeriodicAllowance;
                fromJSON(object: any): _49.PeriodicAllowance;
                toJSON(message: _49.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_49.PeriodicAllowance>): _49.PeriodicAllowance;
                fromAmino(object: _49.PeriodicAllowanceAmino): _49.PeriodicAllowance;
                toAmino(message: _49.PeriodicAllowance): _49.PeriodicAllowanceAmino;
                fromAminoMsg(object: _49.PeriodicAllowanceAminoMsg): _49.PeriodicAllowance;
                toAminoMsg(message: _49.PeriodicAllowance): _49.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _49.PeriodicAllowanceProtoMsg): _49.PeriodicAllowance;
                toProto(message: _49.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _49.PeriodicAllowance): _49.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                encode(message: _49.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.AllowedMsgAllowance;
                fromJSON(object: any): _49.AllowedMsgAllowance;
                toJSON(message: _49.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_49.AllowedMsgAllowance>): _49.AllowedMsgAllowance;
                fromAmino(object: _49.AllowedMsgAllowanceAmino): _49.AllowedMsgAllowance;
                toAmino(message: _49.AllowedMsgAllowance): _49.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _49.AllowedMsgAllowanceAminoMsg): _49.AllowedMsgAllowance;
                toAminoMsg(message: _49.AllowedMsgAllowance): _49.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _49.AllowedMsgAllowanceProtoMsg): _49.AllowedMsgAllowance;
                toProto(message: _49.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _49.AllowedMsgAllowance): _49.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                encode(message: _49.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.Grant;
                fromJSON(object: any): _49.Grant;
                toJSON(message: _49.Grant): unknown;
                fromPartial(object: Partial<_49.Grant>): _49.Grant;
                fromAmino(object: _49.GrantAmino): _49.Grant;
                toAmino(message: _49.Grant): _49.GrantAmino;
                fromAminoMsg(object: _49.GrantAminoMsg): _49.Grant;
                toAminoMsg(message: _49.Grant): _49.GrantAminoMsg;
                fromProtoMsg(message: _49.GrantProtoMsg): _49.Grant;
                toProto(message: _49.Grant): Uint8Array;
                toProtoMsg(message: _49.Grant): _49.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _53.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _53.GenesisState;
                fromJSON(object: any): _53.GenesisState;
                toJSON(message: _53.GenesisState): unknown;
                fromPartial(object: Partial<_53.GenesisState>): _53.GenesisState;
                fromAmino(object: _53.GenesisStateAmino): _53.GenesisState;
                toAmino(message: _53.GenesisState): _53.GenesisStateAmino;
                fromAminoMsg(object: _53.GenesisStateAminoMsg): _53.GenesisState;
                toAminoMsg(message: _53.GenesisState): _53.GenesisStateAminoMsg;
                fromProtoMsg(message: _53.GenesisStateProtoMsg): _53.GenesisState;
                toProto(message: _53.GenesisState): Uint8Array;
                toProtoMsg(message: _53.GenesisState): _53.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _222.MsgClientImpl;
            QueryClientImpl: typeof _206.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _56.QueryProposalRequest): Promise<_56.QueryProposalResponse>;
                proposals(request: _56.QueryProposalsRequest): Promise<_56.QueryProposalsResponse>;
                vote(request: _56.QueryVoteRequest): Promise<_56.QueryVoteResponse>;
                votes(request: _56.QueryVotesRequest): Promise<_56.QueryVotesResponse>;
                params(request: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                deposit(request: _56.QueryDepositRequest): Promise<_56.QueryDepositResponse>;
                deposits(request: _56.QueryDepositsRequest): Promise<_56.QueryDepositsResponse>;
                tallyResult(request: _56.QueryTallyResultRequest): Promise<_56.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _187.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _57.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _57.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _57.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _57.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _57.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _57.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _57.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _57.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _57.MsgExecLegacyContent;
                    };
                    vote(value: _57.MsgVote): {
                        typeUrl: string;
                        value: _57.MsgVote;
                    };
                    voteWeighted(value: _57.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _57.MsgVoteWeighted;
                    };
                    deposit(value: _57.MsgDeposit): {
                        typeUrl: string;
                        value: _57.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _57.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _57.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _57.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _57.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _57.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _57.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _57.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _57.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _57.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _57.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _57.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _57.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _57.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _57.MsgExecLegacyContent;
                    };
                    vote(value: _57.MsgVote): {
                        typeUrl: string;
                        value: _57.MsgVote;
                    };
                    voteWeighted(value: _57.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _57.MsgVoteWeighted;
                    };
                    deposit(value: _57.MsgDeposit): {
                        typeUrl: string;
                        value: _57.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _57.MsgSubmitProposal) => _57.MsgSubmitProposalAmino;
                    fromAmino: (object: _57.MsgSubmitProposalAmino) => _57.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _57.MsgExecLegacyContent) => _57.MsgExecLegacyContentAmino;
                    fromAmino: (object: _57.MsgExecLegacyContentAmino) => _57.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _57.MsgVote) => _57.MsgVoteAmino;
                    fromAmino: (object: _57.MsgVoteAmino) => _57.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _57.MsgVoteWeighted) => _57.MsgVoteWeightedAmino;
                    fromAmino: (object: _57.MsgVoteWeightedAmino) => _57.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _57.MsgDeposit) => _57.MsgDepositAmino;
                    fromAmino: (object: _57.MsgDepositAmino) => _57.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _57.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgSubmitProposal;
                fromJSON(object: any): _57.MsgSubmitProposal;
                toJSON(message: _57.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_57.MsgSubmitProposal>): _57.MsgSubmitProposal;
                fromAmino(object: _57.MsgSubmitProposalAmino): _57.MsgSubmitProposal;
                toAmino(message: _57.MsgSubmitProposal): _57.MsgSubmitProposalAmino;
                fromAminoMsg(object: _57.MsgSubmitProposalAminoMsg): _57.MsgSubmitProposal;
                toAminoMsg(message: _57.MsgSubmitProposal): _57.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _57.MsgSubmitProposalProtoMsg): _57.MsgSubmitProposal;
                toProto(message: _57.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _57.MsgSubmitProposal): _57.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _57.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgSubmitProposalResponse;
                fromJSON(object: any): _57.MsgSubmitProposalResponse;
                toJSON(message: _57.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_57.MsgSubmitProposalResponse>): _57.MsgSubmitProposalResponse;
                fromAmino(object: _57.MsgSubmitProposalResponseAmino): _57.MsgSubmitProposalResponse;
                toAmino(message: _57.MsgSubmitProposalResponse): _57.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _57.MsgSubmitProposalResponseAminoMsg): _57.MsgSubmitProposalResponse;
                toAminoMsg(message: _57.MsgSubmitProposalResponse): _57.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _57.MsgSubmitProposalResponseProtoMsg): _57.MsgSubmitProposalResponse;
                toProto(message: _57.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _57.MsgSubmitProposalResponse): _57.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                encode(message: _57.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgExecLegacyContent;
                fromJSON(object: any): _57.MsgExecLegacyContent;
                toJSON(message: _57.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_57.MsgExecLegacyContent>): _57.MsgExecLegacyContent;
                fromAmino(object: _57.MsgExecLegacyContentAmino): _57.MsgExecLegacyContent;
                toAmino(message: _57.MsgExecLegacyContent): _57.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _57.MsgExecLegacyContentAminoMsg): _57.MsgExecLegacyContent;
                toAminoMsg(message: _57.MsgExecLegacyContent): _57.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _57.MsgExecLegacyContentProtoMsg): _57.MsgExecLegacyContent;
                toProto(message: _57.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _57.MsgExecLegacyContent): _57.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _57.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgExecLegacyContentResponse;
                fromJSON(_: any): _57.MsgExecLegacyContentResponse;
                toJSON(_: _57.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_57.MsgExecLegacyContentResponse>): _57.MsgExecLegacyContentResponse;
                fromAmino(_: _57.MsgExecLegacyContentResponseAmino): _57.MsgExecLegacyContentResponse;
                toAmino(_: _57.MsgExecLegacyContentResponse): _57.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _57.MsgExecLegacyContentResponseAminoMsg): _57.MsgExecLegacyContentResponse;
                toAminoMsg(message: _57.MsgExecLegacyContentResponse): _57.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _57.MsgExecLegacyContentResponseProtoMsg): _57.MsgExecLegacyContentResponse;
                toProto(message: _57.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _57.MsgExecLegacyContentResponse): _57.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _57.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgVote;
                fromJSON(object: any): _57.MsgVote;
                toJSON(message: _57.MsgVote): unknown;
                fromPartial(object: Partial<_57.MsgVote>): _57.MsgVote;
                fromAmino(object: _57.MsgVoteAmino): _57.MsgVote;
                toAmino(message: _57.MsgVote): _57.MsgVoteAmino;
                fromAminoMsg(object: _57.MsgVoteAminoMsg): _57.MsgVote;
                toAminoMsg(message: _57.MsgVote): _57.MsgVoteAminoMsg;
                fromProtoMsg(message: _57.MsgVoteProtoMsg): _57.MsgVote;
                toProto(message: _57.MsgVote): Uint8Array;
                toProtoMsg(message: _57.MsgVote): _57.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _57.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgVoteResponse;
                fromJSON(_: any): _57.MsgVoteResponse;
                toJSON(_: _57.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_57.MsgVoteResponse>): _57.MsgVoteResponse;
                fromAmino(_: _57.MsgVoteResponseAmino): _57.MsgVoteResponse;
                toAmino(_: _57.MsgVoteResponse): _57.MsgVoteResponseAmino;
                fromAminoMsg(object: _57.MsgVoteResponseAminoMsg): _57.MsgVoteResponse;
                toAminoMsg(message: _57.MsgVoteResponse): _57.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _57.MsgVoteResponseProtoMsg): _57.MsgVoteResponse;
                toProto(message: _57.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _57.MsgVoteResponse): _57.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _57.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgVoteWeighted;
                fromJSON(object: any): _57.MsgVoteWeighted;
                toJSON(message: _57.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_57.MsgVoteWeighted>): _57.MsgVoteWeighted;
                fromAmino(object: _57.MsgVoteWeightedAmino): _57.MsgVoteWeighted;
                toAmino(message: _57.MsgVoteWeighted): _57.MsgVoteWeightedAmino;
                fromAminoMsg(object: _57.MsgVoteWeightedAminoMsg): _57.MsgVoteWeighted;
                toAminoMsg(message: _57.MsgVoteWeighted): _57.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _57.MsgVoteWeightedProtoMsg): _57.MsgVoteWeighted;
                toProto(message: _57.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _57.MsgVoteWeighted): _57.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _57.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgVoteWeightedResponse;
                fromJSON(_: any): _57.MsgVoteWeightedResponse;
                toJSON(_: _57.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_57.MsgVoteWeightedResponse>): _57.MsgVoteWeightedResponse;
                fromAmino(_: _57.MsgVoteWeightedResponseAmino): _57.MsgVoteWeightedResponse;
                toAmino(_: _57.MsgVoteWeightedResponse): _57.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _57.MsgVoteWeightedResponseAminoMsg): _57.MsgVoteWeightedResponse;
                toAminoMsg(message: _57.MsgVoteWeightedResponse): _57.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _57.MsgVoteWeightedResponseProtoMsg): _57.MsgVoteWeightedResponse;
                toProto(message: _57.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _57.MsgVoteWeightedResponse): _57.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _57.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgDeposit;
                fromJSON(object: any): _57.MsgDeposit;
                toJSON(message: _57.MsgDeposit): unknown;
                fromPartial(object: Partial<_57.MsgDeposit>): _57.MsgDeposit;
                fromAmino(object: _57.MsgDepositAmino): _57.MsgDeposit;
                toAmino(message: _57.MsgDeposit): _57.MsgDepositAmino;
                fromAminoMsg(object: _57.MsgDepositAminoMsg): _57.MsgDeposit;
                toAminoMsg(message: _57.MsgDeposit): _57.MsgDepositAminoMsg;
                fromProtoMsg(message: _57.MsgDepositProtoMsg): _57.MsgDeposit;
                toProto(message: _57.MsgDeposit): Uint8Array;
                toProtoMsg(message: _57.MsgDeposit): _57.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _57.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgDepositResponse;
                fromJSON(_: any): _57.MsgDepositResponse;
                toJSON(_: _57.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_57.MsgDepositResponse>): _57.MsgDepositResponse;
                fromAmino(_: _57.MsgDepositResponseAmino): _57.MsgDepositResponse;
                toAmino(_: _57.MsgDepositResponse): _57.MsgDepositResponseAmino;
                fromAminoMsg(object: _57.MsgDepositResponseAminoMsg): _57.MsgDepositResponse;
                toAminoMsg(message: _57.MsgDepositResponse): _57.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _57.MsgDepositResponseProtoMsg): _57.MsgDepositResponse;
                toProto(message: _57.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _57.MsgDepositResponse): _57.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _59.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                encode(message: _56.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryProposalRequest;
                fromJSON(object: any): _56.QueryProposalRequest;
                toJSON(message: _56.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_56.QueryProposalRequest>): _56.QueryProposalRequest;
                fromAmino(object: _56.QueryProposalRequestAmino): _56.QueryProposalRequest;
                toAmino(message: _56.QueryProposalRequest): _56.QueryProposalRequestAmino;
                fromAminoMsg(object: _56.QueryProposalRequestAminoMsg): _56.QueryProposalRequest;
                toAminoMsg(message: _56.QueryProposalRequest): _56.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _56.QueryProposalRequestProtoMsg): _56.QueryProposalRequest;
                toProto(message: _56.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _56.QueryProposalRequest): _56.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _56.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryProposalResponse;
                fromJSON(object: any): _56.QueryProposalResponse;
                toJSON(message: _56.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_56.QueryProposalResponse>): _56.QueryProposalResponse;
                fromAmino(object: _56.QueryProposalResponseAmino): _56.QueryProposalResponse;
                toAmino(message: _56.QueryProposalResponse): _56.QueryProposalResponseAmino;
                fromAminoMsg(object: _56.QueryProposalResponseAminoMsg): _56.QueryProposalResponse;
                toAminoMsg(message: _56.QueryProposalResponse): _56.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _56.QueryProposalResponseProtoMsg): _56.QueryProposalResponse;
                toProto(message: _56.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _56.QueryProposalResponse): _56.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _56.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryProposalsRequest;
                fromJSON(object: any): _56.QueryProposalsRequest;
                toJSON(message: _56.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_56.QueryProposalsRequest>): _56.QueryProposalsRequest;
                fromAmino(object: _56.QueryProposalsRequestAmino): _56.QueryProposalsRequest;
                toAmino(message: _56.QueryProposalsRequest): _56.QueryProposalsRequestAmino;
                fromAminoMsg(object: _56.QueryProposalsRequestAminoMsg): _56.QueryProposalsRequest;
                toAminoMsg(message: _56.QueryProposalsRequest): _56.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryProposalsRequestProtoMsg): _56.QueryProposalsRequest;
                toProto(message: _56.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryProposalsRequest): _56.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _56.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryProposalsResponse;
                fromJSON(object: any): _56.QueryProposalsResponse;
                toJSON(message: _56.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_56.QueryProposalsResponse>): _56.QueryProposalsResponse;
                fromAmino(object: _56.QueryProposalsResponseAmino): _56.QueryProposalsResponse;
                toAmino(message: _56.QueryProposalsResponse): _56.QueryProposalsResponseAmino;
                fromAminoMsg(object: _56.QueryProposalsResponseAminoMsg): _56.QueryProposalsResponse;
                toAminoMsg(message: _56.QueryProposalsResponse): _56.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryProposalsResponseProtoMsg): _56.QueryProposalsResponse;
                toProto(message: _56.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryProposalsResponse): _56.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _56.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryVoteRequest;
                fromJSON(object: any): _56.QueryVoteRequest;
                toJSON(message: _56.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_56.QueryVoteRequest>): _56.QueryVoteRequest;
                fromAmino(object: _56.QueryVoteRequestAmino): _56.QueryVoteRequest;
                toAmino(message: _56.QueryVoteRequest): _56.QueryVoteRequestAmino;
                fromAminoMsg(object: _56.QueryVoteRequestAminoMsg): _56.QueryVoteRequest;
                toAminoMsg(message: _56.QueryVoteRequest): _56.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _56.QueryVoteRequestProtoMsg): _56.QueryVoteRequest;
                toProto(message: _56.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _56.QueryVoteRequest): _56.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _56.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryVoteResponse;
                fromJSON(object: any): _56.QueryVoteResponse;
                toJSON(message: _56.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_56.QueryVoteResponse>): _56.QueryVoteResponse;
                fromAmino(object: _56.QueryVoteResponseAmino): _56.QueryVoteResponse;
                toAmino(message: _56.QueryVoteResponse): _56.QueryVoteResponseAmino;
                fromAminoMsg(object: _56.QueryVoteResponseAminoMsg): _56.QueryVoteResponse;
                toAminoMsg(message: _56.QueryVoteResponse): _56.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _56.QueryVoteResponseProtoMsg): _56.QueryVoteResponse;
                toProto(message: _56.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _56.QueryVoteResponse): _56.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _56.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryVotesRequest;
                fromJSON(object: any): _56.QueryVotesRequest;
                toJSON(message: _56.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_56.QueryVotesRequest>): _56.QueryVotesRequest;
                fromAmino(object: _56.QueryVotesRequestAmino): _56.QueryVotesRequest;
                toAmino(message: _56.QueryVotesRequest): _56.QueryVotesRequestAmino;
                fromAminoMsg(object: _56.QueryVotesRequestAminoMsg): _56.QueryVotesRequest;
                toAminoMsg(message: _56.QueryVotesRequest): _56.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _56.QueryVotesRequestProtoMsg): _56.QueryVotesRequest;
                toProto(message: _56.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _56.QueryVotesRequest): _56.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _56.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryVotesResponse;
                fromJSON(object: any): _56.QueryVotesResponse;
                toJSON(message: _56.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_56.QueryVotesResponse>): _56.QueryVotesResponse;
                fromAmino(object: _56.QueryVotesResponseAmino): _56.QueryVotesResponse;
                toAmino(message: _56.QueryVotesResponse): _56.QueryVotesResponseAmino;
                fromAminoMsg(object: _56.QueryVotesResponseAminoMsg): _56.QueryVotesResponse;
                toAminoMsg(message: _56.QueryVotesResponse): _56.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _56.QueryVotesResponseProtoMsg): _56.QueryVotesResponse;
                toProto(message: _56.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _56.QueryVotesResponse): _56.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _56.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryParamsRequest;
                fromJSON(object: any): _56.QueryParamsRequest;
                toJSON(message: _56.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_56.QueryParamsRequest>): _56.QueryParamsRequest;
                fromAmino(object: _56.QueryParamsRequestAmino): _56.QueryParamsRequest;
                toAmino(message: _56.QueryParamsRequest): _56.QueryParamsRequestAmino;
                fromAminoMsg(object: _56.QueryParamsRequestAminoMsg): _56.QueryParamsRequest;
                toAminoMsg(message: _56.QueryParamsRequest): _56.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryParamsRequestProtoMsg): _56.QueryParamsRequest;
                toProto(message: _56.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryParamsRequest): _56.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _56.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryParamsResponse;
                fromJSON(object: any): _56.QueryParamsResponse;
                toJSON(message: _56.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_56.QueryParamsResponse>): _56.QueryParamsResponse;
                fromAmino(object: _56.QueryParamsResponseAmino): _56.QueryParamsResponse;
                toAmino(message: _56.QueryParamsResponse): _56.QueryParamsResponseAmino;
                fromAminoMsg(object: _56.QueryParamsResponseAminoMsg): _56.QueryParamsResponse;
                toAminoMsg(message: _56.QueryParamsResponse): _56.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryParamsResponseProtoMsg): _56.QueryParamsResponse;
                toProto(message: _56.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryParamsResponse): _56.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                encode(message: _56.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryDepositRequest;
                fromJSON(object: any): _56.QueryDepositRequest;
                toJSON(message: _56.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_56.QueryDepositRequest>): _56.QueryDepositRequest;
                fromAmino(object: _56.QueryDepositRequestAmino): _56.QueryDepositRequest;
                toAmino(message: _56.QueryDepositRequest): _56.QueryDepositRequestAmino;
                fromAminoMsg(object: _56.QueryDepositRequestAminoMsg): _56.QueryDepositRequest;
                toAminoMsg(message: _56.QueryDepositRequest): _56.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDepositRequestProtoMsg): _56.QueryDepositRequest;
                toProto(message: _56.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDepositRequest): _56.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _56.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryDepositResponse;
                fromJSON(object: any): _56.QueryDepositResponse;
                toJSON(message: _56.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_56.QueryDepositResponse>): _56.QueryDepositResponse;
                fromAmino(object: _56.QueryDepositResponseAmino): _56.QueryDepositResponse;
                toAmino(message: _56.QueryDepositResponse): _56.QueryDepositResponseAmino;
                fromAminoMsg(object: _56.QueryDepositResponseAminoMsg): _56.QueryDepositResponse;
                toAminoMsg(message: _56.QueryDepositResponse): _56.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDepositResponseProtoMsg): _56.QueryDepositResponse;
                toProto(message: _56.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDepositResponse): _56.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _56.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryDepositsRequest;
                fromJSON(object: any): _56.QueryDepositsRequest;
                toJSON(message: _56.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_56.QueryDepositsRequest>): _56.QueryDepositsRequest;
                fromAmino(object: _56.QueryDepositsRequestAmino): _56.QueryDepositsRequest;
                toAmino(message: _56.QueryDepositsRequest): _56.QueryDepositsRequestAmino;
                fromAminoMsg(object: _56.QueryDepositsRequestAminoMsg): _56.QueryDepositsRequest;
                toAminoMsg(message: _56.QueryDepositsRequest): _56.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDepositsRequestProtoMsg): _56.QueryDepositsRequest;
                toProto(message: _56.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDepositsRequest): _56.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _56.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryDepositsResponse;
                fromJSON(object: any): _56.QueryDepositsResponse;
                toJSON(message: _56.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_56.QueryDepositsResponse>): _56.QueryDepositsResponse;
                fromAmino(object: _56.QueryDepositsResponseAmino): _56.QueryDepositsResponse;
                toAmino(message: _56.QueryDepositsResponse): _56.QueryDepositsResponseAmino;
                fromAminoMsg(object: _56.QueryDepositsResponseAminoMsg): _56.QueryDepositsResponse;
                toAminoMsg(message: _56.QueryDepositsResponse): _56.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDepositsResponseProtoMsg): _56.QueryDepositsResponse;
                toProto(message: _56.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDepositsResponse): _56.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _56.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryTallyResultRequest;
                fromJSON(object: any): _56.QueryTallyResultRequest;
                toJSON(message: _56.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_56.QueryTallyResultRequest>): _56.QueryTallyResultRequest;
                fromAmino(object: _56.QueryTallyResultRequestAmino): _56.QueryTallyResultRequest;
                toAmino(message: _56.QueryTallyResultRequest): _56.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _56.QueryTallyResultRequestAminoMsg): _56.QueryTallyResultRequest;
                toAminoMsg(message: _56.QueryTallyResultRequest): _56.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _56.QueryTallyResultRequestProtoMsg): _56.QueryTallyResultRequest;
                toProto(message: _56.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _56.QueryTallyResultRequest): _56.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _56.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryTallyResultResponse;
                fromJSON(object: any): _56.QueryTallyResultResponse;
                toJSON(message: _56.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_56.QueryTallyResultResponse>): _56.QueryTallyResultResponse;
                fromAmino(object: _56.QueryTallyResultResponseAmino): _56.QueryTallyResultResponse;
                toAmino(message: _56.QueryTallyResultResponse): _56.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _56.QueryTallyResultResponseAminoMsg): _56.QueryTallyResultResponse;
                toAminoMsg(message: _56.QueryTallyResultResponse): _56.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _56.QueryTallyResultResponseProtoMsg): _56.QueryTallyResultResponse;
                toProto(message: _56.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _56.QueryTallyResultResponse): _56.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _55.VoteOption;
            voteOptionToJSON(object: _55.VoteOption): string;
            proposalStatusFromJSON(object: any): _55.ProposalStatus;
            proposalStatusToJSON(object: _55.ProposalStatus): string;
            VoteOption: typeof _55.VoteOption;
            VoteOptionSDKType: typeof _55.VoteOption;
            VoteOptionAmino: typeof _55.VoteOption;
            ProposalStatus: typeof _55.ProposalStatus;
            ProposalStatusSDKType: typeof _55.ProposalStatus;
            ProposalStatusAmino: typeof _55.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _55.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.WeightedVoteOption;
                fromJSON(object: any): _55.WeightedVoteOption;
                toJSON(message: _55.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_55.WeightedVoteOption>): _55.WeightedVoteOption;
                fromAmino(object: _55.WeightedVoteOptionAmino): _55.WeightedVoteOption;
                toAmino(message: _55.WeightedVoteOption): _55.WeightedVoteOptionAmino;
                fromAminoMsg(object: _55.WeightedVoteOptionAminoMsg): _55.WeightedVoteOption;
                toAminoMsg(message: _55.WeightedVoteOption): _55.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _55.WeightedVoteOptionProtoMsg): _55.WeightedVoteOption;
                toProto(message: _55.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _55.WeightedVoteOption): _55.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                encode(message: _55.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.Deposit;
                fromJSON(object: any): _55.Deposit;
                toJSON(message: _55.Deposit): unknown;
                fromPartial(object: Partial<_55.Deposit>): _55.Deposit;
                fromAmino(object: _55.DepositAmino): _55.Deposit;
                toAmino(message: _55.Deposit): _55.DepositAmino;
                fromAminoMsg(object: _55.DepositAminoMsg): _55.Deposit;
                toAminoMsg(message: _55.Deposit): _55.DepositAminoMsg;
                fromProtoMsg(message: _55.DepositProtoMsg): _55.Deposit;
                toProto(message: _55.Deposit): Uint8Array;
                toProtoMsg(message: _55.Deposit): _55.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _55.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.Proposal;
                fromJSON(object: any): _55.Proposal;
                toJSON(message: _55.Proposal): unknown;
                fromPartial(object: Partial<_55.Proposal>): _55.Proposal;
                fromAmino(object: _55.ProposalAmino): _55.Proposal;
                toAmino(message: _55.Proposal): _55.ProposalAmino;
                fromAminoMsg(object: _55.ProposalAminoMsg): _55.Proposal;
                toAminoMsg(message: _55.Proposal): _55.ProposalAminoMsg;
                fromProtoMsg(message: _55.ProposalProtoMsg): _55.Proposal;
                toProto(message: _55.Proposal): Uint8Array;
                toProtoMsg(message: _55.Proposal): _55.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _55.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.TallyResult;
                fromJSON(object: any): _55.TallyResult;
                toJSON(message: _55.TallyResult): unknown;
                fromPartial(object: Partial<_55.TallyResult>): _55.TallyResult;
                fromAmino(object: _55.TallyResultAmino): _55.TallyResult;
                toAmino(message: _55.TallyResult): _55.TallyResultAmino;
                fromAminoMsg(object: _55.TallyResultAminoMsg): _55.TallyResult;
                toAminoMsg(message: _55.TallyResult): _55.TallyResultAminoMsg;
                fromProtoMsg(message: _55.TallyResultProtoMsg): _55.TallyResult;
                toProto(message: _55.TallyResult): Uint8Array;
                toProtoMsg(message: _55.TallyResult): _55.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _55.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.Vote;
                fromJSON(object: any): _55.Vote;
                toJSON(message: _55.Vote): unknown;
                fromPartial(object: Partial<_55.Vote>): _55.Vote;
                fromAmino(object: _55.VoteAmino): _55.Vote;
                toAmino(message: _55.Vote): _55.VoteAmino;
                fromAminoMsg(object: _55.VoteAminoMsg): _55.Vote;
                toAminoMsg(message: _55.Vote): _55.VoteAminoMsg;
                fromProtoMsg(message: _55.VoteProtoMsg): _55.Vote;
                toProto(message: _55.Vote): Uint8Array;
                toProtoMsg(message: _55.Vote): _55.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _55.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.DepositParams;
                fromJSON(object: any): _55.DepositParams;
                toJSON(message: _55.DepositParams): unknown;
                fromPartial(object: Partial<_55.DepositParams>): _55.DepositParams;
                fromAmino(object: _55.DepositParamsAmino): _55.DepositParams;
                toAmino(message: _55.DepositParams): _55.DepositParamsAmino;
                fromAminoMsg(object: _55.DepositParamsAminoMsg): _55.DepositParams;
                toAminoMsg(message: _55.DepositParams): _55.DepositParamsAminoMsg;
                fromProtoMsg(message: _55.DepositParamsProtoMsg): _55.DepositParams;
                toProto(message: _55.DepositParams): Uint8Array;
                toProtoMsg(message: _55.DepositParams): _55.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _55.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.VotingParams;
                fromJSON(object: any): _55.VotingParams;
                toJSON(message: _55.VotingParams): unknown;
                fromPartial(object: Partial<_55.VotingParams>): _55.VotingParams;
                fromAmino(object: _55.VotingParamsAmino): _55.VotingParams;
                toAmino(message: _55.VotingParams): _55.VotingParamsAmino;
                fromAminoMsg(object: _55.VotingParamsAminoMsg): _55.VotingParams;
                toAminoMsg(message: _55.VotingParams): _55.VotingParamsAminoMsg;
                fromProtoMsg(message: _55.VotingParamsProtoMsg): _55.VotingParams;
                toProto(message: _55.VotingParams): Uint8Array;
                toProtoMsg(message: _55.VotingParams): _55.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _55.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.TallyParams;
                fromJSON(object: any): _55.TallyParams;
                toJSON(message: _55.TallyParams): unknown;
                fromPartial(object: Partial<_55.TallyParams>): _55.TallyParams;
                fromAmino(object: _55.TallyParamsAmino): _55.TallyParams;
                toAmino(message: _55.TallyParams): _55.TallyParamsAmino;
                fromAminoMsg(object: _55.TallyParamsAminoMsg): _55.TallyParams;
                toAminoMsg(message: _55.TallyParams): _55.TallyParamsAminoMsg;
                fromProtoMsg(message: _55.TallyParamsProtoMsg): _55.TallyParams;
                toProto(message: _55.TallyParams): Uint8Array;
                toProtoMsg(message: _55.TallyParams): _55.TallyParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _54.GenesisState;
                fromJSON(object: any): _54.GenesisState;
                toJSON(message: _54.GenesisState): unknown;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
                fromAmino(object: _54.GenesisStateAmino): _54.GenesisState;
                toAmino(message: _54.GenesisState): _54.GenesisStateAmino;
                fromAminoMsg(object: _54.GenesisStateAminoMsg): _54.GenesisState;
                toAminoMsg(message: _54.GenesisState): _54.GenesisStateAminoMsg;
                fromProtoMsg(message: _54.GenesisStateProtoMsg): _54.GenesisState;
                toProto(message: _54.GenesisState): Uint8Array;
                toProtoMsg(message: _54.GenesisState): _54.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _223.MsgClientImpl;
            QueryClientImpl: typeof _207.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _60.QueryProposalRequest): Promise<_60.QueryProposalResponse>;
                proposals(request: _60.QueryProposalsRequest): Promise<_60.QueryProposalsResponse>;
                vote(request: _60.QueryVoteRequest): Promise<_60.QueryVoteResponse>;
                votes(request: _60.QueryVotesRequest): Promise<_60.QueryVotesResponse>;
                params(request: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                deposit(request: _60.QueryDepositRequest): Promise<_60.QueryDepositResponse>;
                deposits(request: _60.QueryDepositsRequest): Promise<_60.QueryDepositsResponse>;
                tallyResult(request: _60.QueryTallyResultRequest): Promise<_60.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _188.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _61.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _61.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _61.MsgSubmitProposal;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: _61.MsgVote;
                    };
                    voteWeighted(value: _61.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _61.MsgVoteWeighted;
                    };
                    deposit(value: _61.MsgDeposit): {
                        typeUrl: string;
                        value: _61.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _61.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _61.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _61.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _61.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _61.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _61.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _61.MsgSubmitProposal;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: _61.MsgVote;
                    };
                    voteWeighted(value: _61.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _61.MsgVoteWeighted;
                    };
                    deposit(value: _61.MsgDeposit): {
                        typeUrl: string;
                        value: _61.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _61.MsgSubmitProposal) => _61.MsgSubmitProposalAmino;
                    fromAmino: (object: _61.MsgSubmitProposalAmino) => _61.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _61.MsgVote) => _61.MsgVoteAmino;
                    fromAmino: (object: _61.MsgVoteAmino) => _61.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _61.MsgVoteWeighted) => _61.MsgVoteWeightedAmino;
                    fromAmino: (object: _61.MsgVoteWeightedAmino) => _61.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _61.MsgDeposit) => _61.MsgDepositAmino;
                    fromAmino: (object: _61.MsgDepositAmino) => _61.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _61.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgSubmitProposal;
                fromJSON(object: any): _61.MsgSubmitProposal;
                toJSON(message: _61.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_61.MsgSubmitProposal>): _61.MsgSubmitProposal;
                fromAmino(object: _61.MsgSubmitProposalAmino): _61.MsgSubmitProposal;
                toAmino(message: _61.MsgSubmitProposal): _61.MsgSubmitProposalAmino;
                fromAminoMsg(object: _61.MsgSubmitProposalAminoMsg): _61.MsgSubmitProposal;
                toAminoMsg(message: _61.MsgSubmitProposal): _61.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _61.MsgSubmitProposalProtoMsg): _61.MsgSubmitProposal;
                toProto(message: _61.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _61.MsgSubmitProposal): _61.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _61.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgSubmitProposalResponse;
                fromJSON(object: any): _61.MsgSubmitProposalResponse;
                toJSON(message: _61.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_61.MsgSubmitProposalResponse>): _61.MsgSubmitProposalResponse;
                fromAmino(object: _61.MsgSubmitProposalResponseAmino): _61.MsgSubmitProposalResponse;
                toAmino(message: _61.MsgSubmitProposalResponse): _61.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _61.MsgSubmitProposalResponseAminoMsg): _61.MsgSubmitProposalResponse;
                toAminoMsg(message: _61.MsgSubmitProposalResponse): _61.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _61.MsgSubmitProposalResponseProtoMsg): _61.MsgSubmitProposalResponse;
                toProto(message: _61.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _61.MsgSubmitProposalResponse): _61.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _61.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgVote;
                fromJSON(object: any): _61.MsgVote;
                toJSON(message: _61.MsgVote): unknown;
                fromPartial(object: Partial<_61.MsgVote>): _61.MsgVote;
                fromAmino(object: _61.MsgVoteAmino): _61.MsgVote;
                toAmino(message: _61.MsgVote): _61.MsgVoteAmino;
                fromAminoMsg(object: _61.MsgVoteAminoMsg): _61.MsgVote;
                toAminoMsg(message: _61.MsgVote): _61.MsgVoteAminoMsg;
                fromProtoMsg(message: _61.MsgVoteProtoMsg): _61.MsgVote;
                toProto(message: _61.MsgVote): Uint8Array;
                toProtoMsg(message: _61.MsgVote): _61.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _61.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgVoteResponse;
                fromJSON(_: any): _61.MsgVoteResponse;
                toJSON(_: _61.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_61.MsgVoteResponse>): _61.MsgVoteResponse;
                fromAmino(_: _61.MsgVoteResponseAmino): _61.MsgVoteResponse;
                toAmino(_: _61.MsgVoteResponse): _61.MsgVoteResponseAmino;
                fromAminoMsg(object: _61.MsgVoteResponseAminoMsg): _61.MsgVoteResponse;
                toAminoMsg(message: _61.MsgVoteResponse): _61.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _61.MsgVoteResponseProtoMsg): _61.MsgVoteResponse;
                toProto(message: _61.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _61.MsgVoteResponse): _61.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _61.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgVoteWeighted;
                fromJSON(object: any): _61.MsgVoteWeighted;
                toJSON(message: _61.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_61.MsgVoteWeighted>): _61.MsgVoteWeighted;
                fromAmino(object: _61.MsgVoteWeightedAmino): _61.MsgVoteWeighted;
                toAmino(message: _61.MsgVoteWeighted): _61.MsgVoteWeightedAmino;
                fromAminoMsg(object: _61.MsgVoteWeightedAminoMsg): _61.MsgVoteWeighted;
                toAminoMsg(message: _61.MsgVoteWeighted): _61.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _61.MsgVoteWeightedProtoMsg): _61.MsgVoteWeighted;
                toProto(message: _61.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _61.MsgVoteWeighted): _61.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _61.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgVoteWeightedResponse;
                fromJSON(_: any): _61.MsgVoteWeightedResponse;
                toJSON(_: _61.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_61.MsgVoteWeightedResponse>): _61.MsgVoteWeightedResponse;
                fromAmino(_: _61.MsgVoteWeightedResponseAmino): _61.MsgVoteWeightedResponse;
                toAmino(_: _61.MsgVoteWeightedResponse): _61.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _61.MsgVoteWeightedResponseAminoMsg): _61.MsgVoteWeightedResponse;
                toAminoMsg(message: _61.MsgVoteWeightedResponse): _61.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _61.MsgVoteWeightedResponseProtoMsg): _61.MsgVoteWeightedResponse;
                toProto(message: _61.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _61.MsgVoteWeightedResponse): _61.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _61.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgDeposit;
                fromJSON(object: any): _61.MsgDeposit;
                toJSON(message: _61.MsgDeposit): unknown;
                fromPartial(object: Partial<_61.MsgDeposit>): _61.MsgDeposit;
                fromAmino(object: _61.MsgDepositAmino): _61.MsgDeposit;
                toAmino(message: _61.MsgDeposit): _61.MsgDepositAmino;
                fromAminoMsg(object: _61.MsgDepositAminoMsg): _61.MsgDeposit;
                toAminoMsg(message: _61.MsgDeposit): _61.MsgDepositAminoMsg;
                fromProtoMsg(message: _61.MsgDepositProtoMsg): _61.MsgDeposit;
                toProto(message: _61.MsgDeposit): Uint8Array;
                toProtoMsg(message: _61.MsgDeposit): _61.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _61.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgDepositResponse;
                fromJSON(_: any): _61.MsgDepositResponse;
                toJSON(_: _61.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_61.MsgDepositResponse>): _61.MsgDepositResponse;
                fromAmino(_: _61.MsgDepositResponseAmino): _61.MsgDepositResponse;
                toAmino(_: _61.MsgDepositResponse): _61.MsgDepositResponseAmino;
                fromAminoMsg(object: _61.MsgDepositResponseAminoMsg): _61.MsgDepositResponse;
                toAminoMsg(message: _61.MsgDepositResponse): _61.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _61.MsgDepositResponseProtoMsg): _61.MsgDepositResponse;
                toProto(message: _61.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _61.MsgDepositResponse): _61.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _59.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                encode(message: _60.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryProposalRequest;
                fromJSON(object: any): _60.QueryProposalRequest;
                toJSON(message: _60.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_60.QueryProposalRequest>): _60.QueryProposalRequest;
                fromAmino(object: _60.QueryProposalRequestAmino): _60.QueryProposalRequest;
                toAmino(message: _60.QueryProposalRequest): _60.QueryProposalRequestAmino;
                fromAminoMsg(object: _60.QueryProposalRequestAminoMsg): _60.QueryProposalRequest;
                toAminoMsg(message: _60.QueryProposalRequest): _60.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _60.QueryProposalRequestProtoMsg): _60.QueryProposalRequest;
                toProto(message: _60.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _60.QueryProposalRequest): _60.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _60.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryProposalResponse;
                fromJSON(object: any): _60.QueryProposalResponse;
                toJSON(message: _60.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_60.QueryProposalResponse>): _60.QueryProposalResponse;
                fromAmino(object: _60.QueryProposalResponseAmino): _60.QueryProposalResponse;
                toAmino(message: _60.QueryProposalResponse): _60.QueryProposalResponseAmino;
                fromAminoMsg(object: _60.QueryProposalResponseAminoMsg): _60.QueryProposalResponse;
                toAminoMsg(message: _60.QueryProposalResponse): _60.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _60.QueryProposalResponseProtoMsg): _60.QueryProposalResponse;
                toProto(message: _60.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _60.QueryProposalResponse): _60.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _60.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryProposalsRequest;
                fromJSON(object: any): _60.QueryProposalsRequest;
                toJSON(message: _60.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_60.QueryProposalsRequest>): _60.QueryProposalsRequest;
                fromAmino(object: _60.QueryProposalsRequestAmino): _60.QueryProposalsRequest;
                toAmino(message: _60.QueryProposalsRequest): _60.QueryProposalsRequestAmino;
                fromAminoMsg(object: _60.QueryProposalsRequestAminoMsg): _60.QueryProposalsRequest;
                toAminoMsg(message: _60.QueryProposalsRequest): _60.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryProposalsRequestProtoMsg): _60.QueryProposalsRequest;
                toProto(message: _60.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryProposalsRequest): _60.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _60.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryProposalsResponse;
                fromJSON(object: any): _60.QueryProposalsResponse;
                toJSON(message: _60.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_60.QueryProposalsResponse>): _60.QueryProposalsResponse;
                fromAmino(object: _60.QueryProposalsResponseAmino): _60.QueryProposalsResponse;
                toAmino(message: _60.QueryProposalsResponse): _60.QueryProposalsResponseAmino;
                fromAminoMsg(object: _60.QueryProposalsResponseAminoMsg): _60.QueryProposalsResponse;
                toAminoMsg(message: _60.QueryProposalsResponse): _60.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryProposalsResponseProtoMsg): _60.QueryProposalsResponse;
                toProto(message: _60.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryProposalsResponse): _60.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _60.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryVoteRequest;
                fromJSON(object: any): _60.QueryVoteRequest;
                toJSON(message: _60.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_60.QueryVoteRequest>): _60.QueryVoteRequest;
                fromAmino(object: _60.QueryVoteRequestAmino): _60.QueryVoteRequest;
                toAmino(message: _60.QueryVoteRequest): _60.QueryVoteRequestAmino;
                fromAminoMsg(object: _60.QueryVoteRequestAminoMsg): _60.QueryVoteRequest;
                toAminoMsg(message: _60.QueryVoteRequest): _60.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _60.QueryVoteRequestProtoMsg): _60.QueryVoteRequest;
                toProto(message: _60.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _60.QueryVoteRequest): _60.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _60.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryVoteResponse;
                fromJSON(object: any): _60.QueryVoteResponse;
                toJSON(message: _60.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_60.QueryVoteResponse>): _60.QueryVoteResponse;
                fromAmino(object: _60.QueryVoteResponseAmino): _60.QueryVoteResponse;
                toAmino(message: _60.QueryVoteResponse): _60.QueryVoteResponseAmino;
                fromAminoMsg(object: _60.QueryVoteResponseAminoMsg): _60.QueryVoteResponse;
                toAminoMsg(message: _60.QueryVoteResponse): _60.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _60.QueryVoteResponseProtoMsg): _60.QueryVoteResponse;
                toProto(message: _60.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _60.QueryVoteResponse): _60.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _60.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryVotesRequest;
                fromJSON(object: any): _60.QueryVotesRequest;
                toJSON(message: _60.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_60.QueryVotesRequest>): _60.QueryVotesRequest;
                fromAmino(object: _60.QueryVotesRequestAmino): _60.QueryVotesRequest;
                toAmino(message: _60.QueryVotesRequest): _60.QueryVotesRequestAmino;
                fromAminoMsg(object: _60.QueryVotesRequestAminoMsg): _60.QueryVotesRequest;
                toAminoMsg(message: _60.QueryVotesRequest): _60.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _60.QueryVotesRequestProtoMsg): _60.QueryVotesRequest;
                toProto(message: _60.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _60.QueryVotesRequest): _60.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _60.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryVotesResponse;
                fromJSON(object: any): _60.QueryVotesResponse;
                toJSON(message: _60.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_60.QueryVotesResponse>): _60.QueryVotesResponse;
                fromAmino(object: _60.QueryVotesResponseAmino): _60.QueryVotesResponse;
                toAmino(message: _60.QueryVotesResponse): _60.QueryVotesResponseAmino;
                fromAminoMsg(object: _60.QueryVotesResponseAminoMsg): _60.QueryVotesResponse;
                toAminoMsg(message: _60.QueryVotesResponse): _60.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _60.QueryVotesResponseProtoMsg): _60.QueryVotesResponse;
                toProto(message: _60.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _60.QueryVotesResponse): _60.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _60.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryParamsRequest;
                fromJSON(object: any): _60.QueryParamsRequest;
                toJSON(message: _60.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_60.QueryParamsRequest>): _60.QueryParamsRequest;
                fromAmino(object: _60.QueryParamsRequestAmino): _60.QueryParamsRequest;
                toAmino(message: _60.QueryParamsRequest): _60.QueryParamsRequestAmino;
                fromAminoMsg(object: _60.QueryParamsRequestAminoMsg): _60.QueryParamsRequest;
                toAminoMsg(message: _60.QueryParamsRequest): _60.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryParamsRequestProtoMsg): _60.QueryParamsRequest;
                toProto(message: _60.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryParamsRequest): _60.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _60.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryParamsResponse;
                fromJSON(object: any): _60.QueryParamsResponse;
                toJSON(message: _60.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_60.QueryParamsResponse>): _60.QueryParamsResponse;
                fromAmino(object: _60.QueryParamsResponseAmino): _60.QueryParamsResponse;
                toAmino(message: _60.QueryParamsResponse): _60.QueryParamsResponseAmino;
                fromAminoMsg(object: _60.QueryParamsResponseAminoMsg): _60.QueryParamsResponse;
                toAminoMsg(message: _60.QueryParamsResponse): _60.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryParamsResponseProtoMsg): _60.QueryParamsResponse;
                toProto(message: _60.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryParamsResponse): _60.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                encode(message: _60.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryDepositRequest;
                fromJSON(object: any): _60.QueryDepositRequest;
                toJSON(message: _60.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_60.QueryDepositRequest>): _60.QueryDepositRequest;
                fromAmino(object: _60.QueryDepositRequestAmino): _60.QueryDepositRequest;
                toAmino(message: _60.QueryDepositRequest): _60.QueryDepositRequestAmino;
                fromAminoMsg(object: _60.QueryDepositRequestAminoMsg): _60.QueryDepositRequest;
                toAminoMsg(message: _60.QueryDepositRequest): _60.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDepositRequestProtoMsg): _60.QueryDepositRequest;
                toProto(message: _60.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDepositRequest): _60.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _60.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryDepositResponse;
                fromJSON(object: any): _60.QueryDepositResponse;
                toJSON(message: _60.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_60.QueryDepositResponse>): _60.QueryDepositResponse;
                fromAmino(object: _60.QueryDepositResponseAmino): _60.QueryDepositResponse;
                toAmino(message: _60.QueryDepositResponse): _60.QueryDepositResponseAmino;
                fromAminoMsg(object: _60.QueryDepositResponseAminoMsg): _60.QueryDepositResponse;
                toAminoMsg(message: _60.QueryDepositResponse): _60.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDepositResponseProtoMsg): _60.QueryDepositResponse;
                toProto(message: _60.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDepositResponse): _60.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _60.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryDepositsRequest;
                fromJSON(object: any): _60.QueryDepositsRequest;
                toJSON(message: _60.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_60.QueryDepositsRequest>): _60.QueryDepositsRequest;
                fromAmino(object: _60.QueryDepositsRequestAmino): _60.QueryDepositsRequest;
                toAmino(message: _60.QueryDepositsRequest): _60.QueryDepositsRequestAmino;
                fromAminoMsg(object: _60.QueryDepositsRequestAminoMsg): _60.QueryDepositsRequest;
                toAminoMsg(message: _60.QueryDepositsRequest): _60.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDepositsRequestProtoMsg): _60.QueryDepositsRequest;
                toProto(message: _60.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDepositsRequest): _60.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _60.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryDepositsResponse;
                fromJSON(object: any): _60.QueryDepositsResponse;
                toJSON(message: _60.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_60.QueryDepositsResponse>): _60.QueryDepositsResponse;
                fromAmino(object: _60.QueryDepositsResponseAmino): _60.QueryDepositsResponse;
                toAmino(message: _60.QueryDepositsResponse): _60.QueryDepositsResponseAmino;
                fromAminoMsg(object: _60.QueryDepositsResponseAminoMsg): _60.QueryDepositsResponse;
                toAminoMsg(message: _60.QueryDepositsResponse): _60.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDepositsResponseProtoMsg): _60.QueryDepositsResponse;
                toProto(message: _60.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDepositsResponse): _60.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _60.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryTallyResultRequest;
                fromJSON(object: any): _60.QueryTallyResultRequest;
                toJSON(message: _60.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_60.QueryTallyResultRequest>): _60.QueryTallyResultRequest;
                fromAmino(object: _60.QueryTallyResultRequestAmino): _60.QueryTallyResultRequest;
                toAmino(message: _60.QueryTallyResultRequest): _60.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _60.QueryTallyResultRequestAminoMsg): _60.QueryTallyResultRequest;
                toAminoMsg(message: _60.QueryTallyResultRequest): _60.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _60.QueryTallyResultRequestProtoMsg): _60.QueryTallyResultRequest;
                toProto(message: _60.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _60.QueryTallyResultRequest): _60.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _60.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryTallyResultResponse;
                fromJSON(object: any): _60.QueryTallyResultResponse;
                toJSON(message: _60.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_60.QueryTallyResultResponse>): _60.QueryTallyResultResponse;
                fromAmino(object: _60.QueryTallyResultResponseAmino): _60.QueryTallyResultResponse;
                toAmino(message: _60.QueryTallyResultResponse): _60.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _60.QueryTallyResultResponseAminoMsg): _60.QueryTallyResultResponse;
                toAminoMsg(message: _60.QueryTallyResultResponse): _60.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _60.QueryTallyResultResponseProtoMsg): _60.QueryTallyResultResponse;
                toProto(message: _60.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _60.QueryTallyResultResponse): _60.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _59.VoteOption;
            voteOptionToJSON(object: _59.VoteOption): string;
            proposalStatusFromJSON(object: any): _59.ProposalStatus;
            proposalStatusToJSON(object: _59.ProposalStatus): string;
            VoteOption: typeof _59.VoteOption;
            VoteOptionSDKType: typeof _59.VoteOption;
            VoteOptionAmino: typeof _59.VoteOption;
            ProposalStatus: typeof _59.ProposalStatus;
            ProposalStatusSDKType: typeof _59.ProposalStatus;
            ProposalStatusAmino: typeof _59.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _59.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.WeightedVoteOption;
                fromJSON(object: any): _59.WeightedVoteOption;
                toJSON(message: _59.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_59.WeightedVoteOption>): _59.WeightedVoteOption;
                fromAmino(object: _59.WeightedVoteOptionAmino): _59.WeightedVoteOption;
                toAmino(message: _59.WeightedVoteOption): _59.WeightedVoteOptionAmino;
                fromAminoMsg(object: _59.WeightedVoteOptionAminoMsg): _59.WeightedVoteOption;
                toAminoMsg(message: _59.WeightedVoteOption): _59.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _59.WeightedVoteOptionProtoMsg): _59.WeightedVoteOption;
                toProto(message: _59.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _59.WeightedVoteOption): _59.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                encode(message: _59.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.TextProposal;
                fromJSON(object: any): _59.TextProposal;
                toJSON(message: _59.TextProposal): unknown;
                fromPartial(object: Partial<_59.TextProposal>): _59.TextProposal;
                fromAmino(object: _59.TextProposalAmino): _59.TextProposal;
                toAmino(message: _59.TextProposal): _59.TextProposalAmino;
                fromAminoMsg(object: _59.TextProposalAminoMsg): _59.TextProposal;
                toAminoMsg(message: _59.TextProposal): _59.TextProposalAminoMsg;
                fromProtoMsg(message: _59.TextProposalProtoMsg): _59.TextProposal;
                toProto(message: _59.TextProposal): Uint8Array;
                toProtoMsg(message: _59.TextProposal): _59.TextProposalProtoMsg;
            };
            Deposit: {
                encode(message: _59.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.Deposit;
                fromJSON(object: any): _59.Deposit;
                toJSON(message: _59.Deposit): unknown;
                fromPartial(object: Partial<_59.Deposit>): _59.Deposit;
                fromAmino(object: _59.DepositAmino): _59.Deposit;
                toAmino(message: _59.Deposit): _59.DepositAmino;
                fromAminoMsg(object: _59.DepositAminoMsg): _59.Deposit;
                toAminoMsg(message: _59.Deposit): _59.DepositAminoMsg;
                fromProtoMsg(message: _59.DepositProtoMsg): _59.Deposit;
                toProto(message: _59.Deposit): Uint8Array;
                toProtoMsg(message: _59.Deposit): _59.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _59.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.Proposal;
                fromJSON(object: any): _59.Proposal;
                toJSON(message: _59.Proposal): unknown;
                fromPartial(object: Partial<_59.Proposal>): _59.Proposal;
                fromAmino(object: _59.ProposalAmino): _59.Proposal;
                toAmino(message: _59.Proposal): _59.ProposalAmino;
                fromAminoMsg(object: _59.ProposalAminoMsg): _59.Proposal;
                toAminoMsg(message: _59.Proposal): _59.ProposalAminoMsg;
                fromProtoMsg(message: _59.ProposalProtoMsg): _59.Proposal;
                toProto(message: _59.Proposal): Uint8Array;
                toProtoMsg(message: _59.Proposal): _59.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _59.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.TallyResult;
                fromJSON(object: any): _59.TallyResult;
                toJSON(message: _59.TallyResult): unknown;
                fromPartial(object: Partial<_59.TallyResult>): _59.TallyResult;
                fromAmino(object: _59.TallyResultAmino): _59.TallyResult;
                toAmino(message: _59.TallyResult): _59.TallyResultAmino;
                fromAminoMsg(object: _59.TallyResultAminoMsg): _59.TallyResult;
                toAminoMsg(message: _59.TallyResult): _59.TallyResultAminoMsg;
                fromProtoMsg(message: _59.TallyResultProtoMsg): _59.TallyResult;
                toProto(message: _59.TallyResult): Uint8Array;
                toProtoMsg(message: _59.TallyResult): _59.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _59.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.Vote;
                fromJSON(object: any): _59.Vote;
                toJSON(message: _59.Vote): unknown;
                fromPartial(object: Partial<_59.Vote>): _59.Vote;
                fromAmino(object: _59.VoteAmino): _59.Vote;
                toAmino(message: _59.Vote): _59.VoteAmino;
                fromAminoMsg(object: _59.VoteAminoMsg): _59.Vote;
                toAminoMsg(message: _59.Vote): _59.VoteAminoMsg;
                fromProtoMsg(message: _59.VoteProtoMsg): _59.Vote;
                toProto(message: _59.Vote): Uint8Array;
                toProtoMsg(message: _59.Vote): _59.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _59.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.DepositParams;
                fromJSON(object: any): _59.DepositParams;
                toJSON(message: _59.DepositParams): unknown;
                fromPartial(object: Partial<_59.DepositParams>): _59.DepositParams;
                fromAmino(object: _59.DepositParamsAmino): _59.DepositParams;
                toAmino(message: _59.DepositParams): _59.DepositParamsAmino;
                fromAminoMsg(object: _59.DepositParamsAminoMsg): _59.DepositParams;
                toAminoMsg(message: _59.DepositParams): _59.DepositParamsAminoMsg;
                fromProtoMsg(message: _59.DepositParamsProtoMsg): _59.DepositParams;
                toProto(message: _59.DepositParams): Uint8Array;
                toProtoMsg(message: _59.DepositParams): _59.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _59.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.VotingParams;
                fromJSON(object: any): _59.VotingParams;
                toJSON(message: _59.VotingParams): unknown;
                fromPartial(object: Partial<_59.VotingParams>): _59.VotingParams;
                fromAmino(object: _59.VotingParamsAmino): _59.VotingParams;
                toAmino(message: _59.VotingParams): _59.VotingParamsAmino;
                fromAminoMsg(object: _59.VotingParamsAminoMsg): _59.VotingParams;
                toAminoMsg(message: _59.VotingParams): _59.VotingParamsAminoMsg;
                fromProtoMsg(message: _59.VotingParamsProtoMsg): _59.VotingParams;
                toProto(message: _59.VotingParams): Uint8Array;
                toProtoMsg(message: _59.VotingParams): _59.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _59.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.TallyParams;
                fromJSON(object: any): _59.TallyParams;
                toJSON(message: _59.TallyParams): unknown;
                fromPartial(object: Partial<_59.TallyParams>): _59.TallyParams;
                fromAmino(object: _59.TallyParamsAmino): _59.TallyParams;
                toAmino(message: _59.TallyParams): _59.TallyParamsAmino;
                fromAminoMsg(object: _59.TallyParamsAminoMsg): _59.TallyParams;
                toAminoMsg(message: _59.TallyParams): _59.TallyParamsAminoMsg;
                fromProtoMsg(message: _59.TallyParamsProtoMsg): _59.TallyParams;
                toProto(message: _59.TallyParams): Uint8Array;
                toProtoMsg(message: _59.TallyParams): _59.TallyParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _58.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _58.GenesisState;
                fromJSON(object: any): _58.GenesisState;
                toJSON(message: _58.GenesisState): unknown;
                fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
                fromAmino(object: _58.GenesisStateAmino): _58.GenesisState;
                toAmino(message: _58.GenesisState): _58.GenesisStateAmino;
                fromAminoMsg(object: _58.GenesisStateAminoMsg): _58.GenesisState;
                toAminoMsg(message: _58.GenesisState): _58.GenesisStateAminoMsg;
                fromProtoMsg(message: _58.GenesisStateProtoMsg): _58.GenesisState;
                toProto(message: _58.GenesisState): Uint8Array;
                toProtoMsg(message: _58.GenesisState): _58.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _224.MsgClientImpl;
            QueryClientImpl: typeof _208.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _64.QueryGroupInfoRequest): Promise<_64.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _64.QueryGroupPolicyInfoRequest): Promise<_64.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _64.QueryGroupMembersRequest): Promise<_64.QueryGroupMembersResponse>;
                groupsByAdmin(request: _64.QueryGroupsByAdminRequest): Promise<_64.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _64.QueryGroupPoliciesByGroupRequest): Promise<_64.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _64.QueryGroupPoliciesByAdminRequest): Promise<_64.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _64.QueryProposalRequest): Promise<_64.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _64.QueryProposalsByGroupPolicyRequest): Promise<_64.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _64.QueryVoteByProposalVoterRequest): Promise<_64.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _64.QueryVotesByProposalRequest): Promise<_64.QueryVotesByProposalResponse>;
                votesByVoter(request: _64.QueryVotesByVoterRequest): Promise<_64.QueryVotesByVoterResponse>;
                groupsByMember(request: _64.QueryGroupsByMemberRequest): Promise<_64.QueryGroupsByMemberResponse>;
                tallyResult(request: _64.QueryTallyResultRequest): Promise<_64.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _189.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _65.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _65.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _65.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _65.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _65.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _65.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _65.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _65.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _65.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _65.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _65.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _65.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _65.MsgCreateGroup): {
                        typeUrl: string;
                        value: _65.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _65.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _65.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _65.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _65.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _65.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _65.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _65.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _65.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _65.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _65.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _65.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _65.MsgWithdrawProposal;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: _65.MsgVote;
                    };
                    exec(value: _65.MsgExec): {
                        typeUrl: string;
                        value: _65.MsgExec;
                    };
                    leaveGroup(value: _65.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _65.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _65.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _65.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _65.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _65.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _65.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _65.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _65.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _65.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _65.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _65.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _65.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _65.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _65.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _65.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _65.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _65.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _65.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _65.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _65.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _65.MsgCreateGroup): {
                        typeUrl: string;
                        value: _65.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _65.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _65.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _65.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _65.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _65.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _65.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _65.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _65.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _65.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _65.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _65.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _65.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _65.MsgWithdrawProposal;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: _65.MsgVote;
                    };
                    exec(value: _65.MsgExec): {
                        typeUrl: string;
                        value: _65.MsgExec;
                    };
                    leaveGroup(value: _65.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _65.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _65.MsgCreateGroup) => _65.MsgCreateGroupAmino;
                    fromAmino: (object: _65.MsgCreateGroupAmino) => _65.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _65.MsgUpdateGroupMembers) => _65.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _65.MsgUpdateGroupMembersAmino) => _65.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _65.MsgUpdateGroupAdmin) => _65.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _65.MsgUpdateGroupAdminAmino) => _65.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _65.MsgUpdateGroupMetadata) => _65.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _65.MsgUpdateGroupMetadataAmino) => _65.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _65.MsgCreateGroupPolicy) => _65.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _65.MsgCreateGroupPolicyAmino) => _65.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _65.MsgCreateGroupWithPolicy) => _65.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _65.MsgCreateGroupWithPolicyAmino) => _65.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _65.MsgUpdateGroupPolicyAdmin) => _65.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _65.MsgUpdateGroupPolicyAdminAmino) => _65.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _65.MsgUpdateGroupPolicyDecisionPolicy) => _65.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _65.MsgUpdateGroupPolicyDecisionPolicyAmino) => _65.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _65.MsgUpdateGroupPolicyMetadata) => _65.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _65.MsgUpdateGroupPolicyMetadataAmino) => _65.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _65.MsgSubmitProposal) => _65.MsgSubmitProposalAmino;
                    fromAmino: (object: _65.MsgSubmitProposalAmino) => _65.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _65.MsgWithdrawProposal) => _65.MsgWithdrawProposalAmino;
                    fromAmino: (object: _65.MsgWithdrawProposalAmino) => _65.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _65.MsgVote) => _65.MsgVoteAmino;
                    fromAmino: (object: _65.MsgVoteAmino) => _65.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _65.MsgExec) => _65.MsgExecAmino;
                    fromAmino: (object: _65.MsgExecAmino) => _65.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _65.MsgLeaveGroup) => _65.MsgLeaveGroupAmino;
                    fromAmino: (object: _65.MsgLeaveGroupAmino) => _65.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _66.VoteOption;
            voteOptionToJSON(object: _66.VoteOption): string;
            proposalStatusFromJSON(object: any): _66.ProposalStatus;
            proposalStatusToJSON(object: _66.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _66.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _66.ProposalExecutorResult): string;
            VoteOption: typeof _66.VoteOption;
            VoteOptionSDKType: typeof _66.VoteOption;
            VoteOptionAmino: typeof _66.VoteOption;
            ProposalStatus: typeof _66.ProposalStatus;
            ProposalStatusSDKType: typeof _66.ProposalStatus;
            ProposalStatusAmino: typeof _66.ProposalStatus;
            ProposalExecutorResult: typeof _66.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _66.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _66.ProposalExecutorResult;
            Member: {
                encode(message: _66.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.Member;
                fromJSON(object: any): _66.Member;
                toJSON(message: _66.Member): unknown;
                fromPartial(object: Partial<_66.Member>): _66.Member;
                fromAmino(object: _66.MemberAmino): _66.Member;
                toAmino(message: _66.Member): _66.MemberAmino;
                fromAminoMsg(object: _66.MemberAminoMsg): _66.Member;
                toAminoMsg(message: _66.Member): _66.MemberAminoMsg;
                fromProtoMsg(message: _66.MemberProtoMsg): _66.Member;
                toProto(message: _66.Member): Uint8Array;
                toProtoMsg(message: _66.Member): _66.MemberProtoMsg;
            };
            MemberRequest: {
                encode(message: _66.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.MemberRequest;
                fromJSON(object: any): _66.MemberRequest;
                toJSON(message: _66.MemberRequest): unknown;
                fromPartial(object: Partial<_66.MemberRequest>): _66.MemberRequest;
                fromAmino(object: _66.MemberRequestAmino): _66.MemberRequest;
                toAmino(message: _66.MemberRequest): _66.MemberRequestAmino;
                fromAminoMsg(object: _66.MemberRequestAminoMsg): _66.MemberRequest;
                toAminoMsg(message: _66.MemberRequest): _66.MemberRequestAminoMsg;
                fromProtoMsg(message: _66.MemberRequestProtoMsg): _66.MemberRequest;
                toProto(message: _66.MemberRequest): Uint8Array;
                toProtoMsg(message: _66.MemberRequest): _66.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                encode(message: _66.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.ThresholdDecisionPolicy;
                fromJSON(object: any): _66.ThresholdDecisionPolicy;
                toJSON(message: _66.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_66.ThresholdDecisionPolicy>): _66.ThresholdDecisionPolicy;
                fromAmino(object: _66.ThresholdDecisionPolicyAmino): _66.ThresholdDecisionPolicy;
                toAmino(message: _66.ThresholdDecisionPolicy): _66.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _66.ThresholdDecisionPolicyAminoMsg): _66.ThresholdDecisionPolicy;
                toAminoMsg(message: _66.ThresholdDecisionPolicy): _66.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _66.ThresholdDecisionPolicyProtoMsg): _66.ThresholdDecisionPolicy;
                toProto(message: _66.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _66.ThresholdDecisionPolicy): _66.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                encode(message: _66.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.PercentageDecisionPolicy;
                fromJSON(object: any): _66.PercentageDecisionPolicy;
                toJSON(message: _66.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_66.PercentageDecisionPolicy>): _66.PercentageDecisionPolicy;
                fromAmino(object: _66.PercentageDecisionPolicyAmino): _66.PercentageDecisionPolicy;
                toAmino(message: _66.PercentageDecisionPolicy): _66.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _66.PercentageDecisionPolicyAminoMsg): _66.PercentageDecisionPolicy;
                toAminoMsg(message: _66.PercentageDecisionPolicy): _66.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _66.PercentageDecisionPolicyProtoMsg): _66.PercentageDecisionPolicy;
                toProto(message: _66.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _66.PercentageDecisionPolicy): _66.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                encode(message: _66.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.DecisionPolicyWindows;
                fromJSON(object: any): _66.DecisionPolicyWindows;
                toJSON(message: _66.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_66.DecisionPolicyWindows>): _66.DecisionPolicyWindows;
                fromAmino(object: _66.DecisionPolicyWindowsAmino): _66.DecisionPolicyWindows;
                toAmino(message: _66.DecisionPolicyWindows): _66.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _66.DecisionPolicyWindowsAminoMsg): _66.DecisionPolicyWindows;
                toAminoMsg(message: _66.DecisionPolicyWindows): _66.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _66.DecisionPolicyWindowsProtoMsg): _66.DecisionPolicyWindows;
                toProto(message: _66.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _66.DecisionPolicyWindows): _66.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                encode(message: _66.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.GroupInfo;
                fromJSON(object: any): _66.GroupInfo;
                toJSON(message: _66.GroupInfo): unknown;
                fromPartial(object: Partial<_66.GroupInfo>): _66.GroupInfo;
                fromAmino(object: _66.GroupInfoAmino): _66.GroupInfo;
                toAmino(message: _66.GroupInfo): _66.GroupInfoAmino;
                fromAminoMsg(object: _66.GroupInfoAminoMsg): _66.GroupInfo;
                toAminoMsg(message: _66.GroupInfo): _66.GroupInfoAminoMsg;
                fromProtoMsg(message: _66.GroupInfoProtoMsg): _66.GroupInfo;
                toProto(message: _66.GroupInfo): Uint8Array;
                toProtoMsg(message: _66.GroupInfo): _66.GroupInfoProtoMsg;
            };
            GroupMember: {
                encode(message: _66.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.GroupMember;
                fromJSON(object: any): _66.GroupMember;
                toJSON(message: _66.GroupMember): unknown;
                fromPartial(object: Partial<_66.GroupMember>): _66.GroupMember;
                fromAmino(object: _66.GroupMemberAmino): _66.GroupMember;
                toAmino(message: _66.GroupMember): _66.GroupMemberAmino;
                fromAminoMsg(object: _66.GroupMemberAminoMsg): _66.GroupMember;
                toAminoMsg(message: _66.GroupMember): _66.GroupMemberAminoMsg;
                fromProtoMsg(message: _66.GroupMemberProtoMsg): _66.GroupMember;
                toProto(message: _66.GroupMember): Uint8Array;
                toProtoMsg(message: _66.GroupMember): _66.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                encode(message: _66.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.GroupPolicyInfo;
                fromJSON(object: any): _66.GroupPolicyInfo;
                toJSON(message: _66.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_66.GroupPolicyInfo>): _66.GroupPolicyInfo;
                fromAmino(object: _66.GroupPolicyInfoAmino): _66.GroupPolicyInfo;
                toAmino(message: _66.GroupPolicyInfo): _66.GroupPolicyInfoAmino;
                fromAminoMsg(object: _66.GroupPolicyInfoAminoMsg): _66.GroupPolicyInfo;
                toAminoMsg(message: _66.GroupPolicyInfo): _66.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _66.GroupPolicyInfoProtoMsg): _66.GroupPolicyInfo;
                toProto(message: _66.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _66.GroupPolicyInfo): _66.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                encode(message: _66.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.Proposal;
                fromJSON(object: any): _66.Proposal;
                toJSON(message: _66.Proposal): unknown;
                fromPartial(object: Partial<_66.Proposal>): _66.Proposal;
                fromAmino(object: _66.ProposalAmino): _66.Proposal;
                toAmino(message: _66.Proposal): _66.ProposalAmino;
                fromAminoMsg(object: _66.ProposalAminoMsg): _66.Proposal;
                toAminoMsg(message: _66.Proposal): _66.ProposalAminoMsg;
                fromProtoMsg(message: _66.ProposalProtoMsg): _66.Proposal;
                toProto(message: _66.Proposal): Uint8Array;
                toProtoMsg(message: _66.Proposal): _66.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _66.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.TallyResult;
                fromJSON(object: any): _66.TallyResult;
                toJSON(message: _66.TallyResult): unknown;
                fromPartial(object: Partial<_66.TallyResult>): _66.TallyResult;
                fromAmino(object: _66.TallyResultAmino): _66.TallyResult;
                toAmino(message: _66.TallyResult): _66.TallyResultAmino;
                fromAminoMsg(object: _66.TallyResultAminoMsg): _66.TallyResult;
                toAminoMsg(message: _66.TallyResult): _66.TallyResultAminoMsg;
                fromProtoMsg(message: _66.TallyResultProtoMsg): _66.TallyResult;
                toProto(message: _66.TallyResult): Uint8Array;
                toProtoMsg(message: _66.TallyResult): _66.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _66.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.Vote;
                fromJSON(object: any): _66.Vote;
                toJSON(message: _66.Vote): unknown;
                fromPartial(object: Partial<_66.Vote>): _66.Vote;
                fromAmino(object: _66.VoteAmino): _66.Vote;
                toAmino(message: _66.Vote): _66.VoteAmino;
                fromAminoMsg(object: _66.VoteAminoMsg): _66.Vote;
                toAminoMsg(message: _66.Vote): _66.VoteAminoMsg;
                fromProtoMsg(message: _66.VoteProtoMsg): _66.Vote;
                toProto(message: _66.Vote): Uint8Array;
                toProtoMsg(message: _66.Vote): _66.VoteProtoMsg;
            };
            DecisionPolicy_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _66.ThresholdDecisionPolicy | _66.PercentageDecisionPolicy;
            DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _65.Exec;
            execToJSON(object: _65.Exec): string;
            Exec: typeof _65.Exec;
            ExecSDKType: typeof _65.Exec;
            ExecAmino: typeof _65.Exec;
            MsgCreateGroup: {
                encode(message: _65.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgCreateGroup;
                fromJSON(object: any): _65.MsgCreateGroup;
                toJSON(message: _65.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_65.MsgCreateGroup>): _65.MsgCreateGroup;
                fromAmino(object: _65.MsgCreateGroupAmino): _65.MsgCreateGroup;
                toAmino(message: _65.MsgCreateGroup): _65.MsgCreateGroupAmino;
                fromAminoMsg(object: _65.MsgCreateGroupAminoMsg): _65.MsgCreateGroup;
                toAminoMsg(message: _65.MsgCreateGroup): _65.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _65.MsgCreateGroupProtoMsg): _65.MsgCreateGroup;
                toProto(message: _65.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _65.MsgCreateGroup): _65.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                encode(message: _65.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgCreateGroupResponse;
                fromJSON(object: any): _65.MsgCreateGroupResponse;
                toJSON(message: _65.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_65.MsgCreateGroupResponse>): _65.MsgCreateGroupResponse;
                fromAmino(object: _65.MsgCreateGroupResponseAmino): _65.MsgCreateGroupResponse;
                toAmino(message: _65.MsgCreateGroupResponse): _65.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _65.MsgCreateGroupResponseAminoMsg): _65.MsgCreateGroupResponse;
                toAminoMsg(message: _65.MsgCreateGroupResponse): _65.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _65.MsgCreateGroupResponseProtoMsg): _65.MsgCreateGroupResponse;
                toProto(message: _65.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _65.MsgCreateGroupResponse): _65.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                encode(message: _65.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupMembers;
                fromJSON(object: any): _65.MsgUpdateGroupMembers;
                toJSON(message: _65.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_65.MsgUpdateGroupMembers>): _65.MsgUpdateGroupMembers;
                fromAmino(object: _65.MsgUpdateGroupMembersAmino): _65.MsgUpdateGroupMembers;
                toAmino(message: _65.MsgUpdateGroupMembers): _65.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _65.MsgUpdateGroupMembersAminoMsg): _65.MsgUpdateGroupMembers;
                toAminoMsg(message: _65.MsgUpdateGroupMembers): _65.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _65.MsgUpdateGroupMembersProtoMsg): _65.MsgUpdateGroupMembers;
                toProto(message: _65.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _65.MsgUpdateGroupMembers): _65.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _65.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _65.MsgUpdateGroupMembersResponse;
                toJSON(_: _65.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateGroupMembersResponse>): _65.MsgUpdateGroupMembersResponse;
                fromAmino(_: _65.MsgUpdateGroupMembersResponseAmino): _65.MsgUpdateGroupMembersResponse;
                toAmino(_: _65.MsgUpdateGroupMembersResponse): _65.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _65.MsgUpdateGroupMembersResponseAminoMsg): _65.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _65.MsgUpdateGroupMembersResponse): _65.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _65.MsgUpdateGroupMembersResponseProtoMsg): _65.MsgUpdateGroupMembersResponse;
                toProto(message: _65.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _65.MsgUpdateGroupMembersResponse): _65.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _65.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupAdmin;
                fromJSON(object: any): _65.MsgUpdateGroupAdmin;
                toJSON(message: _65.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_65.MsgUpdateGroupAdmin>): _65.MsgUpdateGroupAdmin;
                fromAmino(object: _65.MsgUpdateGroupAdminAmino): _65.MsgUpdateGroupAdmin;
                toAmino(message: _65.MsgUpdateGroupAdmin): _65.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _65.MsgUpdateGroupAdminAminoMsg): _65.MsgUpdateGroupAdmin;
                toAminoMsg(message: _65.MsgUpdateGroupAdmin): _65.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _65.MsgUpdateGroupAdminProtoMsg): _65.MsgUpdateGroupAdmin;
                toProto(message: _65.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _65.MsgUpdateGroupAdmin): _65.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _65.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _65.MsgUpdateGroupAdminResponse;
                toJSON(_: _65.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateGroupAdminResponse>): _65.MsgUpdateGroupAdminResponse;
                fromAmino(_: _65.MsgUpdateGroupAdminResponseAmino): _65.MsgUpdateGroupAdminResponse;
                toAmino(_: _65.MsgUpdateGroupAdminResponse): _65.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _65.MsgUpdateGroupAdminResponseAminoMsg): _65.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _65.MsgUpdateGroupAdminResponse): _65.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _65.MsgUpdateGroupAdminResponseProtoMsg): _65.MsgUpdateGroupAdminResponse;
                toProto(message: _65.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _65.MsgUpdateGroupAdminResponse): _65.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _65.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupMetadata;
                fromJSON(object: any): _65.MsgUpdateGroupMetadata;
                toJSON(message: _65.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_65.MsgUpdateGroupMetadata>): _65.MsgUpdateGroupMetadata;
                fromAmino(object: _65.MsgUpdateGroupMetadataAmino): _65.MsgUpdateGroupMetadata;
                toAmino(message: _65.MsgUpdateGroupMetadata): _65.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _65.MsgUpdateGroupMetadataAminoMsg): _65.MsgUpdateGroupMetadata;
                toAminoMsg(message: _65.MsgUpdateGroupMetadata): _65.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _65.MsgUpdateGroupMetadataProtoMsg): _65.MsgUpdateGroupMetadata;
                toProto(message: _65.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _65.MsgUpdateGroupMetadata): _65.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _65.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _65.MsgUpdateGroupMetadataResponse;
                toJSON(_: _65.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateGroupMetadataResponse>): _65.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _65.MsgUpdateGroupMetadataResponseAmino): _65.MsgUpdateGroupMetadataResponse;
                toAmino(_: _65.MsgUpdateGroupMetadataResponse): _65.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _65.MsgUpdateGroupMetadataResponseAminoMsg): _65.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _65.MsgUpdateGroupMetadataResponse): _65.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _65.MsgUpdateGroupMetadataResponseProtoMsg): _65.MsgUpdateGroupMetadataResponse;
                toProto(message: _65.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _65.MsgUpdateGroupMetadataResponse): _65.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                encode(message: _65.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgCreateGroupPolicy;
                fromJSON(object: any): _65.MsgCreateGroupPolicy;
                toJSON(message: _65.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_65.MsgCreateGroupPolicy>): _65.MsgCreateGroupPolicy;
                fromAmino(object: _65.MsgCreateGroupPolicyAmino): _65.MsgCreateGroupPolicy;
                toAmino(message: _65.MsgCreateGroupPolicy): _65.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _65.MsgCreateGroupPolicyAminoMsg): _65.MsgCreateGroupPolicy;
                toAminoMsg(message: _65.MsgCreateGroupPolicy): _65.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _65.MsgCreateGroupPolicyProtoMsg): _65.MsgCreateGroupPolicy;
                toProto(message: _65.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _65.MsgCreateGroupPolicy): _65.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _65.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _65.MsgCreateGroupPolicyResponse;
                toJSON(message: _65.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_65.MsgCreateGroupPolicyResponse>): _65.MsgCreateGroupPolicyResponse;
                fromAmino(object: _65.MsgCreateGroupPolicyResponseAmino): _65.MsgCreateGroupPolicyResponse;
                toAmino(message: _65.MsgCreateGroupPolicyResponse): _65.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _65.MsgCreateGroupPolicyResponseAminoMsg): _65.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _65.MsgCreateGroupPolicyResponse): _65.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _65.MsgCreateGroupPolicyResponseProtoMsg): _65.MsgCreateGroupPolicyResponse;
                toProto(message: _65.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _65.MsgCreateGroupPolicyResponse): _65.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _65.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _65.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _65.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_65.MsgUpdateGroupPolicyAdmin>): _65.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _65.MsgUpdateGroupPolicyAdminAmino): _65.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _65.MsgUpdateGroupPolicyAdmin): _65.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _65.MsgUpdateGroupPolicyAdminAminoMsg): _65.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _65.MsgUpdateGroupPolicyAdmin): _65.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _65.MsgUpdateGroupPolicyAdminProtoMsg): _65.MsgUpdateGroupPolicyAdmin;
                toProto(message: _65.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _65.MsgUpdateGroupPolicyAdmin): _65.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _65.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _65.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _65.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateGroupPolicyAdminResponse>): _65.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _65.MsgUpdateGroupPolicyAdminResponseAmino): _65.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _65.MsgUpdateGroupPolicyAdminResponse): _65.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _65.MsgUpdateGroupPolicyAdminResponseAminoMsg): _65.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _65.MsgUpdateGroupPolicyAdminResponse): _65.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _65.MsgUpdateGroupPolicyAdminResponseProtoMsg): _65.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _65.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _65.MsgUpdateGroupPolicyAdminResponse): _65.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _65.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _65.MsgCreateGroupWithPolicy;
                toJSON(message: _65.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_65.MsgCreateGroupWithPolicy>): _65.MsgCreateGroupWithPolicy;
                fromAmino(object: _65.MsgCreateGroupWithPolicyAmino): _65.MsgCreateGroupWithPolicy;
                toAmino(message: _65.MsgCreateGroupWithPolicy): _65.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _65.MsgCreateGroupWithPolicyAminoMsg): _65.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _65.MsgCreateGroupWithPolicy): _65.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _65.MsgCreateGroupWithPolicyProtoMsg): _65.MsgCreateGroupWithPolicy;
                toProto(message: _65.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _65.MsgCreateGroupWithPolicy): _65.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _65.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _65.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _65.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_65.MsgCreateGroupWithPolicyResponse>): _65.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _65.MsgCreateGroupWithPolicyResponseAmino): _65.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _65.MsgCreateGroupWithPolicyResponse): _65.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _65.MsgCreateGroupWithPolicyResponseAminoMsg): _65.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _65.MsgCreateGroupWithPolicyResponse): _65.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _65.MsgCreateGroupWithPolicyResponseProtoMsg): _65.MsgCreateGroupWithPolicyResponse;
                toProto(message: _65.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _65.MsgCreateGroupWithPolicyResponse): _65.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _65.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _65.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _65.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_65.MsgUpdateGroupPolicyDecisionPolicy>): _65.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _65.MsgUpdateGroupPolicyDecisionPolicyAmino): _65.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _65.MsgUpdateGroupPolicyDecisionPolicy): _65.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _65.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _65.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _65.MsgUpdateGroupPolicyDecisionPolicy): _65.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _65.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _65.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _65.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _65.MsgUpdateGroupPolicyDecisionPolicy): _65.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _65.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _65.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _65.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateGroupPolicyDecisionPolicyResponse>): _65.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _65.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _65.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _65.MsgUpdateGroupPolicyDecisionPolicyResponse): _65.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _65.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _65.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _65.MsgUpdateGroupPolicyDecisionPolicyResponse): _65.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _65.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _65.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _65.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _65.MsgUpdateGroupPolicyDecisionPolicyResponse): _65.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _65.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _65.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _65.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_65.MsgUpdateGroupPolicyMetadata>): _65.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _65.MsgUpdateGroupPolicyMetadataAmino): _65.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _65.MsgUpdateGroupPolicyMetadata): _65.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _65.MsgUpdateGroupPolicyMetadataAminoMsg): _65.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _65.MsgUpdateGroupPolicyMetadata): _65.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _65.MsgUpdateGroupPolicyMetadataProtoMsg): _65.MsgUpdateGroupPolicyMetadata;
                toProto(message: _65.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _65.MsgUpdateGroupPolicyMetadata): _65.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _65.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _65.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _65.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateGroupPolicyMetadataResponse>): _65.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _65.MsgUpdateGroupPolicyMetadataResponseAmino): _65.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _65.MsgUpdateGroupPolicyMetadataResponse): _65.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _65.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _65.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _65.MsgUpdateGroupPolicyMetadataResponse): _65.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _65.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _65.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _65.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _65.MsgUpdateGroupPolicyMetadataResponse): _65.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                encode(message: _65.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgSubmitProposal;
                fromJSON(object: any): _65.MsgSubmitProposal;
                toJSON(message: _65.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_65.MsgSubmitProposal>): _65.MsgSubmitProposal;
                fromAmino(object: _65.MsgSubmitProposalAmino): _65.MsgSubmitProposal;
                toAmino(message: _65.MsgSubmitProposal): _65.MsgSubmitProposalAmino;
                fromAminoMsg(object: _65.MsgSubmitProposalAminoMsg): _65.MsgSubmitProposal;
                toAminoMsg(message: _65.MsgSubmitProposal): _65.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _65.MsgSubmitProposalProtoMsg): _65.MsgSubmitProposal;
                toProto(message: _65.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _65.MsgSubmitProposal): _65.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _65.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgSubmitProposalResponse;
                fromJSON(object: any): _65.MsgSubmitProposalResponse;
                toJSON(message: _65.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_65.MsgSubmitProposalResponse>): _65.MsgSubmitProposalResponse;
                fromAmino(object: _65.MsgSubmitProposalResponseAmino): _65.MsgSubmitProposalResponse;
                toAmino(message: _65.MsgSubmitProposalResponse): _65.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _65.MsgSubmitProposalResponseAminoMsg): _65.MsgSubmitProposalResponse;
                toAminoMsg(message: _65.MsgSubmitProposalResponse): _65.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _65.MsgSubmitProposalResponseProtoMsg): _65.MsgSubmitProposalResponse;
                toProto(message: _65.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _65.MsgSubmitProposalResponse): _65.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                encode(message: _65.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgWithdrawProposal;
                fromJSON(object: any): _65.MsgWithdrawProposal;
                toJSON(message: _65.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_65.MsgWithdrawProposal>): _65.MsgWithdrawProposal;
                fromAmino(object: _65.MsgWithdrawProposalAmino): _65.MsgWithdrawProposal;
                toAmino(message: _65.MsgWithdrawProposal): _65.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _65.MsgWithdrawProposalAminoMsg): _65.MsgWithdrawProposal;
                toAminoMsg(message: _65.MsgWithdrawProposal): _65.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _65.MsgWithdrawProposalProtoMsg): _65.MsgWithdrawProposal;
                toProto(message: _65.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _65.MsgWithdrawProposal): _65.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _65.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgWithdrawProposalResponse;
                fromJSON(_: any): _65.MsgWithdrawProposalResponse;
                toJSON(_: _65.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_65.MsgWithdrawProposalResponse>): _65.MsgWithdrawProposalResponse;
                fromAmino(_: _65.MsgWithdrawProposalResponseAmino): _65.MsgWithdrawProposalResponse;
                toAmino(_: _65.MsgWithdrawProposalResponse): _65.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _65.MsgWithdrawProposalResponseAminoMsg): _65.MsgWithdrawProposalResponse;
                toAminoMsg(message: _65.MsgWithdrawProposalResponse): _65.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _65.MsgWithdrawProposalResponseProtoMsg): _65.MsgWithdrawProposalResponse;
                toProto(message: _65.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _65.MsgWithdrawProposalResponse): _65.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _65.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgVote;
                fromJSON(object: any): _65.MsgVote;
                toJSON(message: _65.MsgVote): unknown;
                fromPartial(object: Partial<_65.MsgVote>): _65.MsgVote;
                fromAmino(object: _65.MsgVoteAmino): _65.MsgVote;
                toAmino(message: _65.MsgVote): _65.MsgVoteAmino;
                fromAminoMsg(object: _65.MsgVoteAminoMsg): _65.MsgVote;
                toAminoMsg(message: _65.MsgVote): _65.MsgVoteAminoMsg;
                fromProtoMsg(message: _65.MsgVoteProtoMsg): _65.MsgVote;
                toProto(message: _65.MsgVote): Uint8Array;
                toProtoMsg(message: _65.MsgVote): _65.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _65.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgVoteResponse;
                fromJSON(_: any): _65.MsgVoteResponse;
                toJSON(_: _65.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_65.MsgVoteResponse>): _65.MsgVoteResponse;
                fromAmino(_: _65.MsgVoteResponseAmino): _65.MsgVoteResponse;
                toAmino(_: _65.MsgVoteResponse): _65.MsgVoteResponseAmino;
                fromAminoMsg(object: _65.MsgVoteResponseAminoMsg): _65.MsgVoteResponse;
                toAminoMsg(message: _65.MsgVoteResponse): _65.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _65.MsgVoteResponseProtoMsg): _65.MsgVoteResponse;
                toProto(message: _65.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _65.MsgVoteResponse): _65.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                encode(message: _65.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgExec;
                fromJSON(object: any): _65.MsgExec;
                toJSON(message: _65.MsgExec): unknown;
                fromPartial(object: Partial<_65.MsgExec>): _65.MsgExec;
                fromAmino(object: _65.MsgExecAmino): _65.MsgExec;
                toAmino(message: _65.MsgExec): _65.MsgExecAmino;
                fromAminoMsg(object: _65.MsgExecAminoMsg): _65.MsgExec;
                toAminoMsg(message: _65.MsgExec): _65.MsgExecAminoMsg;
                fromProtoMsg(message: _65.MsgExecProtoMsg): _65.MsgExec;
                toProto(message: _65.MsgExec): Uint8Array;
                toProtoMsg(message: _65.MsgExec): _65.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                encode(message: _65.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgExecResponse;
                fromJSON(object: any): _65.MsgExecResponse;
                toJSON(message: _65.MsgExecResponse): unknown;
                fromPartial(object: Partial<_65.MsgExecResponse>): _65.MsgExecResponse;
                fromAmino(object: _65.MsgExecResponseAmino): _65.MsgExecResponse;
                toAmino(message: _65.MsgExecResponse): _65.MsgExecResponseAmino;
                fromAminoMsg(object: _65.MsgExecResponseAminoMsg): _65.MsgExecResponse;
                toAminoMsg(message: _65.MsgExecResponse): _65.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _65.MsgExecResponseProtoMsg): _65.MsgExecResponse;
                toProto(message: _65.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _65.MsgExecResponse): _65.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                encode(message: _65.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgLeaveGroup;
                fromJSON(object: any): _65.MsgLeaveGroup;
                toJSON(message: _65.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_65.MsgLeaveGroup>): _65.MsgLeaveGroup;
                fromAmino(object: _65.MsgLeaveGroupAmino): _65.MsgLeaveGroup;
                toAmino(message: _65.MsgLeaveGroup): _65.MsgLeaveGroupAmino;
                fromAminoMsg(object: _65.MsgLeaveGroupAminoMsg): _65.MsgLeaveGroup;
                toAminoMsg(message: _65.MsgLeaveGroup): _65.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _65.MsgLeaveGroupProtoMsg): _65.MsgLeaveGroup;
                toProto(message: _65.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _65.MsgLeaveGroup): _65.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                encode(_: _65.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgLeaveGroupResponse;
                fromJSON(_: any): _65.MsgLeaveGroupResponse;
                toJSON(_: _65.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_65.MsgLeaveGroupResponse>): _65.MsgLeaveGroupResponse;
                fromAmino(_: _65.MsgLeaveGroupResponseAmino): _65.MsgLeaveGroupResponse;
                toAmino(_: _65.MsgLeaveGroupResponse): _65.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _65.MsgLeaveGroupResponseAminoMsg): _65.MsgLeaveGroupResponse;
                toAminoMsg(message: _65.MsgLeaveGroupResponse): _65.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _65.MsgLeaveGroupResponseProtoMsg): _65.MsgLeaveGroupResponse;
                toProto(message: _65.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _65.MsgLeaveGroupResponse): _65.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                encode(message: _64.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupInfoRequest;
                fromJSON(object: any): _64.QueryGroupInfoRequest;
                toJSON(message: _64.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupInfoRequest>): _64.QueryGroupInfoRequest;
                fromAmino(object: _64.QueryGroupInfoRequestAmino): _64.QueryGroupInfoRequest;
                toAmino(message: _64.QueryGroupInfoRequest): _64.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _64.QueryGroupInfoRequestAminoMsg): _64.QueryGroupInfoRequest;
                toAminoMsg(message: _64.QueryGroupInfoRequest): _64.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGroupInfoRequestProtoMsg): _64.QueryGroupInfoRequest;
                toProto(message: _64.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGroupInfoRequest): _64.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                encode(message: _64.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupInfoResponse;
                fromJSON(object: any): _64.QueryGroupInfoResponse;
                toJSON(message: _64.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupInfoResponse>): _64.QueryGroupInfoResponse;
                fromAmino(object: _64.QueryGroupInfoResponseAmino): _64.QueryGroupInfoResponse;
                toAmino(message: _64.QueryGroupInfoResponse): _64.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _64.QueryGroupInfoResponseAminoMsg): _64.QueryGroupInfoResponse;
                toAminoMsg(message: _64.QueryGroupInfoResponse): _64.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGroupInfoResponseProtoMsg): _64.QueryGroupInfoResponse;
                toProto(message: _64.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGroupInfoResponse): _64.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _64.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _64.QueryGroupPolicyInfoRequest;
                toJSON(message: _64.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupPolicyInfoRequest>): _64.QueryGroupPolicyInfoRequest;
                fromAmino(object: _64.QueryGroupPolicyInfoRequestAmino): _64.QueryGroupPolicyInfoRequest;
                toAmino(message: _64.QueryGroupPolicyInfoRequest): _64.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _64.QueryGroupPolicyInfoRequestAminoMsg): _64.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _64.QueryGroupPolicyInfoRequest): _64.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGroupPolicyInfoRequestProtoMsg): _64.QueryGroupPolicyInfoRequest;
                toProto(message: _64.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGroupPolicyInfoRequest): _64.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _64.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _64.QueryGroupPolicyInfoResponse;
                toJSON(message: _64.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupPolicyInfoResponse>): _64.QueryGroupPolicyInfoResponse;
                fromAmino(object: _64.QueryGroupPolicyInfoResponseAmino): _64.QueryGroupPolicyInfoResponse;
                toAmino(message: _64.QueryGroupPolicyInfoResponse): _64.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _64.QueryGroupPolicyInfoResponseAminoMsg): _64.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _64.QueryGroupPolicyInfoResponse): _64.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGroupPolicyInfoResponseProtoMsg): _64.QueryGroupPolicyInfoResponse;
                toProto(message: _64.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGroupPolicyInfoResponse): _64.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                encode(message: _64.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupMembersRequest;
                fromJSON(object: any): _64.QueryGroupMembersRequest;
                toJSON(message: _64.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupMembersRequest>): _64.QueryGroupMembersRequest;
                fromAmino(object: _64.QueryGroupMembersRequestAmino): _64.QueryGroupMembersRequest;
                toAmino(message: _64.QueryGroupMembersRequest): _64.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _64.QueryGroupMembersRequestAminoMsg): _64.QueryGroupMembersRequest;
                toAminoMsg(message: _64.QueryGroupMembersRequest): _64.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGroupMembersRequestProtoMsg): _64.QueryGroupMembersRequest;
                toProto(message: _64.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGroupMembersRequest): _64.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                encode(message: _64.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupMembersResponse;
                fromJSON(object: any): _64.QueryGroupMembersResponse;
                toJSON(message: _64.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupMembersResponse>): _64.QueryGroupMembersResponse;
                fromAmino(object: _64.QueryGroupMembersResponseAmino): _64.QueryGroupMembersResponse;
                toAmino(message: _64.QueryGroupMembersResponse): _64.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _64.QueryGroupMembersResponseAminoMsg): _64.QueryGroupMembersResponse;
                toAminoMsg(message: _64.QueryGroupMembersResponse): _64.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGroupMembersResponseProtoMsg): _64.QueryGroupMembersResponse;
                toProto(message: _64.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGroupMembersResponse): _64.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _64.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupsByAdminRequest;
                fromJSON(object: any): _64.QueryGroupsByAdminRequest;
                toJSON(message: _64.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupsByAdminRequest>): _64.QueryGroupsByAdminRequest;
                fromAmino(object: _64.QueryGroupsByAdminRequestAmino): _64.QueryGroupsByAdminRequest;
                toAmino(message: _64.QueryGroupsByAdminRequest): _64.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _64.QueryGroupsByAdminRequestAminoMsg): _64.QueryGroupsByAdminRequest;
                toAminoMsg(message: _64.QueryGroupsByAdminRequest): _64.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGroupsByAdminRequestProtoMsg): _64.QueryGroupsByAdminRequest;
                toProto(message: _64.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGroupsByAdminRequest): _64.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _64.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupsByAdminResponse;
                fromJSON(object: any): _64.QueryGroupsByAdminResponse;
                toJSON(message: _64.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupsByAdminResponse>): _64.QueryGroupsByAdminResponse;
                fromAmino(object: _64.QueryGroupsByAdminResponseAmino): _64.QueryGroupsByAdminResponse;
                toAmino(message: _64.QueryGroupsByAdminResponse): _64.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _64.QueryGroupsByAdminResponseAminoMsg): _64.QueryGroupsByAdminResponse;
                toAminoMsg(message: _64.QueryGroupsByAdminResponse): _64.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGroupsByAdminResponseProtoMsg): _64.QueryGroupsByAdminResponse;
                toProto(message: _64.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGroupsByAdminResponse): _64.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _64.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _64.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _64.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupPoliciesByGroupRequest>): _64.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _64.QueryGroupPoliciesByGroupRequestAmino): _64.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _64.QueryGroupPoliciesByGroupRequest): _64.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _64.QueryGroupPoliciesByGroupRequestAminoMsg): _64.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _64.QueryGroupPoliciesByGroupRequest): _64.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGroupPoliciesByGroupRequestProtoMsg): _64.QueryGroupPoliciesByGroupRequest;
                toProto(message: _64.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGroupPoliciesByGroupRequest): _64.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _64.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _64.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _64.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupPoliciesByGroupResponse>): _64.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _64.QueryGroupPoliciesByGroupResponseAmino): _64.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _64.QueryGroupPoliciesByGroupResponse): _64.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _64.QueryGroupPoliciesByGroupResponseAminoMsg): _64.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _64.QueryGroupPoliciesByGroupResponse): _64.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGroupPoliciesByGroupResponseProtoMsg): _64.QueryGroupPoliciesByGroupResponse;
                toProto(message: _64.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGroupPoliciesByGroupResponse): _64.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _64.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _64.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _64.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupPoliciesByAdminRequest>): _64.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _64.QueryGroupPoliciesByAdminRequestAmino): _64.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _64.QueryGroupPoliciesByAdminRequest): _64.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _64.QueryGroupPoliciesByAdminRequestAminoMsg): _64.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _64.QueryGroupPoliciesByAdminRequest): _64.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGroupPoliciesByAdminRequestProtoMsg): _64.QueryGroupPoliciesByAdminRequest;
                toProto(message: _64.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGroupPoliciesByAdminRequest): _64.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _64.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _64.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _64.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupPoliciesByAdminResponse>): _64.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _64.QueryGroupPoliciesByAdminResponseAmino): _64.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _64.QueryGroupPoliciesByAdminResponse): _64.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _64.QueryGroupPoliciesByAdminResponseAminoMsg): _64.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _64.QueryGroupPoliciesByAdminResponse): _64.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGroupPoliciesByAdminResponseProtoMsg): _64.QueryGroupPoliciesByAdminResponse;
                toProto(message: _64.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGroupPoliciesByAdminResponse): _64.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                encode(message: _64.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryProposalRequest;
                fromJSON(object: any): _64.QueryProposalRequest;
                toJSON(message: _64.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_64.QueryProposalRequest>): _64.QueryProposalRequest;
                fromAmino(object: _64.QueryProposalRequestAmino): _64.QueryProposalRequest;
                toAmino(message: _64.QueryProposalRequest): _64.QueryProposalRequestAmino;
                fromAminoMsg(object: _64.QueryProposalRequestAminoMsg): _64.QueryProposalRequest;
                toAminoMsg(message: _64.QueryProposalRequest): _64.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _64.QueryProposalRequestProtoMsg): _64.QueryProposalRequest;
                toProto(message: _64.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _64.QueryProposalRequest): _64.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _64.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryProposalResponse;
                fromJSON(object: any): _64.QueryProposalResponse;
                toJSON(message: _64.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_64.QueryProposalResponse>): _64.QueryProposalResponse;
                fromAmino(object: _64.QueryProposalResponseAmino): _64.QueryProposalResponse;
                toAmino(message: _64.QueryProposalResponse): _64.QueryProposalResponseAmino;
                fromAminoMsg(object: _64.QueryProposalResponseAminoMsg): _64.QueryProposalResponse;
                toAminoMsg(message: _64.QueryProposalResponse): _64.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _64.QueryProposalResponseProtoMsg): _64.QueryProposalResponse;
                toProto(message: _64.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _64.QueryProposalResponse): _64.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _64.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _64.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _64.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_64.QueryProposalsByGroupPolicyRequest>): _64.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _64.QueryProposalsByGroupPolicyRequestAmino): _64.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _64.QueryProposalsByGroupPolicyRequest): _64.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _64.QueryProposalsByGroupPolicyRequestAminoMsg): _64.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _64.QueryProposalsByGroupPolicyRequest): _64.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _64.QueryProposalsByGroupPolicyRequestProtoMsg): _64.QueryProposalsByGroupPolicyRequest;
                toProto(message: _64.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _64.QueryProposalsByGroupPolicyRequest): _64.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _64.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _64.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _64.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_64.QueryProposalsByGroupPolicyResponse>): _64.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _64.QueryProposalsByGroupPolicyResponseAmino): _64.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _64.QueryProposalsByGroupPolicyResponse): _64.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _64.QueryProposalsByGroupPolicyResponseAminoMsg): _64.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _64.QueryProposalsByGroupPolicyResponse): _64.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _64.QueryProposalsByGroupPolicyResponseProtoMsg): _64.QueryProposalsByGroupPolicyResponse;
                toProto(message: _64.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _64.QueryProposalsByGroupPolicyResponse): _64.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _64.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _64.QueryVoteByProposalVoterRequest;
                toJSON(message: _64.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_64.QueryVoteByProposalVoterRequest>): _64.QueryVoteByProposalVoterRequest;
                fromAmino(object: _64.QueryVoteByProposalVoterRequestAmino): _64.QueryVoteByProposalVoterRequest;
                toAmino(message: _64.QueryVoteByProposalVoterRequest): _64.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _64.QueryVoteByProposalVoterRequestAminoMsg): _64.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _64.QueryVoteByProposalVoterRequest): _64.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _64.QueryVoteByProposalVoterRequestProtoMsg): _64.QueryVoteByProposalVoterRequest;
                toProto(message: _64.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _64.QueryVoteByProposalVoterRequest): _64.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _64.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _64.QueryVoteByProposalVoterResponse;
                toJSON(message: _64.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_64.QueryVoteByProposalVoterResponse>): _64.QueryVoteByProposalVoterResponse;
                fromAmino(object: _64.QueryVoteByProposalVoterResponseAmino): _64.QueryVoteByProposalVoterResponse;
                toAmino(message: _64.QueryVoteByProposalVoterResponse): _64.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _64.QueryVoteByProposalVoterResponseAminoMsg): _64.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _64.QueryVoteByProposalVoterResponse): _64.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _64.QueryVoteByProposalVoterResponseProtoMsg): _64.QueryVoteByProposalVoterResponse;
                toProto(message: _64.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _64.QueryVoteByProposalVoterResponse): _64.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                encode(message: _64.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryVotesByProposalRequest;
                fromJSON(object: any): _64.QueryVotesByProposalRequest;
                toJSON(message: _64.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_64.QueryVotesByProposalRequest>): _64.QueryVotesByProposalRequest;
                fromAmino(object: _64.QueryVotesByProposalRequestAmino): _64.QueryVotesByProposalRequest;
                toAmino(message: _64.QueryVotesByProposalRequest): _64.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _64.QueryVotesByProposalRequestAminoMsg): _64.QueryVotesByProposalRequest;
                toAminoMsg(message: _64.QueryVotesByProposalRequest): _64.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _64.QueryVotesByProposalRequestProtoMsg): _64.QueryVotesByProposalRequest;
                toProto(message: _64.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _64.QueryVotesByProposalRequest): _64.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                encode(message: _64.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryVotesByProposalResponse;
                fromJSON(object: any): _64.QueryVotesByProposalResponse;
                toJSON(message: _64.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_64.QueryVotesByProposalResponse>): _64.QueryVotesByProposalResponse;
                fromAmino(object: _64.QueryVotesByProposalResponseAmino): _64.QueryVotesByProposalResponse;
                toAmino(message: _64.QueryVotesByProposalResponse): _64.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _64.QueryVotesByProposalResponseAminoMsg): _64.QueryVotesByProposalResponse;
                toAminoMsg(message: _64.QueryVotesByProposalResponse): _64.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _64.QueryVotesByProposalResponseProtoMsg): _64.QueryVotesByProposalResponse;
                toProto(message: _64.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _64.QueryVotesByProposalResponse): _64.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                encode(message: _64.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryVotesByVoterRequest;
                fromJSON(object: any): _64.QueryVotesByVoterRequest;
                toJSON(message: _64.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_64.QueryVotesByVoterRequest>): _64.QueryVotesByVoterRequest;
                fromAmino(object: _64.QueryVotesByVoterRequestAmino): _64.QueryVotesByVoterRequest;
                toAmino(message: _64.QueryVotesByVoterRequest): _64.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _64.QueryVotesByVoterRequestAminoMsg): _64.QueryVotesByVoterRequest;
                toAminoMsg(message: _64.QueryVotesByVoterRequest): _64.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _64.QueryVotesByVoterRequestProtoMsg): _64.QueryVotesByVoterRequest;
                toProto(message: _64.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _64.QueryVotesByVoterRequest): _64.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                encode(message: _64.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryVotesByVoterResponse;
                fromJSON(object: any): _64.QueryVotesByVoterResponse;
                toJSON(message: _64.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_64.QueryVotesByVoterResponse>): _64.QueryVotesByVoterResponse;
                fromAmino(object: _64.QueryVotesByVoterResponseAmino): _64.QueryVotesByVoterResponse;
                toAmino(message: _64.QueryVotesByVoterResponse): _64.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _64.QueryVotesByVoterResponseAminoMsg): _64.QueryVotesByVoterResponse;
                toAminoMsg(message: _64.QueryVotesByVoterResponse): _64.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _64.QueryVotesByVoterResponseProtoMsg): _64.QueryVotesByVoterResponse;
                toProto(message: _64.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _64.QueryVotesByVoterResponse): _64.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _64.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupsByMemberRequest;
                fromJSON(object: any): _64.QueryGroupsByMemberRequest;
                toJSON(message: _64.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupsByMemberRequest>): _64.QueryGroupsByMemberRequest;
                fromAmino(object: _64.QueryGroupsByMemberRequestAmino): _64.QueryGroupsByMemberRequest;
                toAmino(message: _64.QueryGroupsByMemberRequest): _64.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _64.QueryGroupsByMemberRequestAminoMsg): _64.QueryGroupsByMemberRequest;
                toAminoMsg(message: _64.QueryGroupsByMemberRequest): _64.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _64.QueryGroupsByMemberRequestProtoMsg): _64.QueryGroupsByMemberRequest;
                toProto(message: _64.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _64.QueryGroupsByMemberRequest): _64.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _64.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupsByMemberResponse;
                fromJSON(object: any): _64.QueryGroupsByMemberResponse;
                toJSON(message: _64.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupsByMemberResponse>): _64.QueryGroupsByMemberResponse;
                fromAmino(object: _64.QueryGroupsByMemberResponseAmino): _64.QueryGroupsByMemberResponse;
                toAmino(message: _64.QueryGroupsByMemberResponse): _64.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _64.QueryGroupsByMemberResponseAminoMsg): _64.QueryGroupsByMemberResponse;
                toAminoMsg(message: _64.QueryGroupsByMemberResponse): _64.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _64.QueryGroupsByMemberResponseProtoMsg): _64.QueryGroupsByMemberResponse;
                toProto(message: _64.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _64.QueryGroupsByMemberResponse): _64.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _64.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryTallyResultRequest;
                fromJSON(object: any): _64.QueryTallyResultRequest;
                toJSON(message: _64.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_64.QueryTallyResultRequest>): _64.QueryTallyResultRequest;
                fromAmino(object: _64.QueryTallyResultRequestAmino): _64.QueryTallyResultRequest;
                toAmino(message: _64.QueryTallyResultRequest): _64.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _64.QueryTallyResultRequestAminoMsg): _64.QueryTallyResultRequest;
                toAminoMsg(message: _64.QueryTallyResultRequest): _64.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _64.QueryTallyResultRequestProtoMsg): _64.QueryTallyResultRequest;
                toProto(message: _64.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _64.QueryTallyResultRequest): _64.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _64.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryTallyResultResponse;
                fromJSON(object: any): _64.QueryTallyResultResponse;
                toJSON(message: _64.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_64.QueryTallyResultResponse>): _64.QueryTallyResultResponse;
                fromAmino(object: _64.QueryTallyResultResponseAmino): _64.QueryTallyResultResponse;
                toAmino(message: _64.QueryTallyResultResponse): _64.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _64.QueryTallyResultResponseAminoMsg): _64.QueryTallyResultResponse;
                toAminoMsg(message: _64.QueryTallyResultResponse): _64.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _64.QueryTallyResultResponseProtoMsg): _64.QueryTallyResultResponse;
                toProto(message: _64.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _64.QueryTallyResultResponse): _64.QueryTallyResultResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _63.GenesisState;
                fromJSON(object: any): _63.GenesisState;
                toJSON(message: _63.GenesisState): unknown;
                fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
                fromAmino(object: _63.GenesisStateAmino): _63.GenesisState;
                toAmino(message: _63.GenesisState): _63.GenesisStateAmino;
                fromAminoMsg(object: _63.GenesisStateAminoMsg): _63.GenesisState;
                toAminoMsg(message: _63.GenesisState): _63.GenesisStateAminoMsg;
                fromProtoMsg(message: _63.GenesisStateProtoMsg): _63.GenesisState;
                toProto(message: _63.GenesisState): Uint8Array;
                toProtoMsg(message: _63.GenesisState): _63.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                encode(message: _62.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.EventCreateGroup;
                fromJSON(object: any): _62.EventCreateGroup;
                toJSON(message: _62.EventCreateGroup): unknown;
                fromPartial(object: Partial<_62.EventCreateGroup>): _62.EventCreateGroup;
                fromAmino(object: _62.EventCreateGroupAmino): _62.EventCreateGroup;
                toAmino(message: _62.EventCreateGroup): _62.EventCreateGroupAmino;
                fromAminoMsg(object: _62.EventCreateGroupAminoMsg): _62.EventCreateGroup;
                toAminoMsg(message: _62.EventCreateGroup): _62.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _62.EventCreateGroupProtoMsg): _62.EventCreateGroup;
                toProto(message: _62.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _62.EventCreateGroup): _62.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                encode(message: _62.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.EventUpdateGroup;
                fromJSON(object: any): _62.EventUpdateGroup;
                toJSON(message: _62.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_62.EventUpdateGroup>): _62.EventUpdateGroup;
                fromAmino(object: _62.EventUpdateGroupAmino): _62.EventUpdateGroup;
                toAmino(message: _62.EventUpdateGroup): _62.EventUpdateGroupAmino;
                fromAminoMsg(object: _62.EventUpdateGroupAminoMsg): _62.EventUpdateGroup;
                toAminoMsg(message: _62.EventUpdateGroup): _62.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _62.EventUpdateGroupProtoMsg): _62.EventUpdateGroup;
                toProto(message: _62.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _62.EventUpdateGroup): _62.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                encode(message: _62.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.EventCreateGroupPolicy;
                fromJSON(object: any): _62.EventCreateGroupPolicy;
                toJSON(message: _62.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_62.EventCreateGroupPolicy>): _62.EventCreateGroupPolicy;
                fromAmino(object: _62.EventCreateGroupPolicyAmino): _62.EventCreateGroupPolicy;
                toAmino(message: _62.EventCreateGroupPolicy): _62.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _62.EventCreateGroupPolicyAminoMsg): _62.EventCreateGroupPolicy;
                toAminoMsg(message: _62.EventCreateGroupPolicy): _62.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _62.EventCreateGroupPolicyProtoMsg): _62.EventCreateGroupPolicy;
                toProto(message: _62.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _62.EventCreateGroupPolicy): _62.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                encode(message: _62.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.EventUpdateGroupPolicy;
                fromJSON(object: any): _62.EventUpdateGroupPolicy;
                toJSON(message: _62.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_62.EventUpdateGroupPolicy>): _62.EventUpdateGroupPolicy;
                fromAmino(object: _62.EventUpdateGroupPolicyAmino): _62.EventUpdateGroupPolicy;
                toAmino(message: _62.EventUpdateGroupPolicy): _62.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _62.EventUpdateGroupPolicyAminoMsg): _62.EventUpdateGroupPolicy;
                toAminoMsg(message: _62.EventUpdateGroupPolicy): _62.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _62.EventUpdateGroupPolicyProtoMsg): _62.EventUpdateGroupPolicy;
                toProto(message: _62.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _62.EventUpdateGroupPolicy): _62.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                encode(message: _62.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.EventSubmitProposal;
                fromJSON(object: any): _62.EventSubmitProposal;
                toJSON(message: _62.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_62.EventSubmitProposal>): _62.EventSubmitProposal;
                fromAmino(object: _62.EventSubmitProposalAmino): _62.EventSubmitProposal;
                toAmino(message: _62.EventSubmitProposal): _62.EventSubmitProposalAmino;
                fromAminoMsg(object: _62.EventSubmitProposalAminoMsg): _62.EventSubmitProposal;
                toAminoMsg(message: _62.EventSubmitProposal): _62.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _62.EventSubmitProposalProtoMsg): _62.EventSubmitProposal;
                toProto(message: _62.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _62.EventSubmitProposal): _62.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                encode(message: _62.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.EventWithdrawProposal;
                fromJSON(object: any): _62.EventWithdrawProposal;
                toJSON(message: _62.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_62.EventWithdrawProposal>): _62.EventWithdrawProposal;
                fromAmino(object: _62.EventWithdrawProposalAmino): _62.EventWithdrawProposal;
                toAmino(message: _62.EventWithdrawProposal): _62.EventWithdrawProposalAmino;
                fromAminoMsg(object: _62.EventWithdrawProposalAminoMsg): _62.EventWithdrawProposal;
                toAminoMsg(message: _62.EventWithdrawProposal): _62.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _62.EventWithdrawProposalProtoMsg): _62.EventWithdrawProposal;
                toProto(message: _62.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _62.EventWithdrawProposal): _62.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                encode(message: _62.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.EventVote;
                fromJSON(object: any): _62.EventVote;
                toJSON(message: _62.EventVote): unknown;
                fromPartial(object: Partial<_62.EventVote>): _62.EventVote;
                fromAmino(object: _62.EventVoteAmino): _62.EventVote;
                toAmino(message: _62.EventVote): _62.EventVoteAmino;
                fromAminoMsg(object: _62.EventVoteAminoMsg): _62.EventVote;
                toAminoMsg(message: _62.EventVote): _62.EventVoteAminoMsg;
                fromProtoMsg(message: _62.EventVoteProtoMsg): _62.EventVote;
                toProto(message: _62.EventVote): Uint8Array;
                toProtoMsg(message: _62.EventVote): _62.EventVoteProtoMsg;
            };
            EventExec: {
                encode(message: _62.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.EventExec;
                fromJSON(object: any): _62.EventExec;
                toJSON(message: _62.EventExec): unknown;
                fromPartial(object: Partial<_62.EventExec>): _62.EventExec;
                fromAmino(object: _62.EventExecAmino): _62.EventExec;
                toAmino(message: _62.EventExec): _62.EventExecAmino;
                fromAminoMsg(object: _62.EventExecAminoMsg): _62.EventExec;
                toAminoMsg(message: _62.EventExec): _62.EventExecAminoMsg;
                fromProtoMsg(message: _62.EventExecProtoMsg): _62.EventExec;
                toProto(message: _62.EventExec): Uint8Array;
                toProtoMsg(message: _62.EventExec): _62.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                encode(message: _62.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.EventLeaveGroup;
                fromJSON(object: any): _62.EventLeaveGroup;
                toJSON(message: _62.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_62.EventLeaveGroup>): _62.EventLeaveGroup;
                fromAmino(object: _62.EventLeaveGroupAmino): _62.EventLeaveGroup;
                toAmino(message: _62.EventLeaveGroup): _62.EventLeaveGroupAmino;
                fromAminoMsg(object: _62.EventLeaveGroupAminoMsg): _62.EventLeaveGroup;
                toAminoMsg(message: _62.EventLeaveGroup): _62.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _62.EventLeaveGroupProtoMsg): _62.EventLeaveGroup;
                toProto(message: _62.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _62.EventLeaveGroup): _62.EventLeaveGroupProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _209.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _69.QueryParamsRequest | undefined): Promise<_69.QueryParamsResponse>;
                inflation(request?: _69.QueryInflationRequest | undefined): Promise<_69.QueryInflationResponse>;
                annualProvisions(request?: _69.QueryAnnualProvisionsRequest | undefined): Promise<_69.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _190.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _69.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _69.QueryParamsRequest;
                fromJSON(_: any): _69.QueryParamsRequest;
                toJSON(_: _69.QueryParamsRequest): unknown;
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
                encode(message: _69.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _69.QueryParamsResponse;
                fromJSON(object: any): _69.QueryParamsResponse;
                toJSON(message: _69.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_69.QueryParamsResponse>): _69.QueryParamsResponse;
                fromAmino(object: _69.QueryParamsResponseAmino): _69.QueryParamsResponse;
                toAmino(message: _69.QueryParamsResponse): _69.QueryParamsResponseAmino;
                fromAminoMsg(object: _69.QueryParamsResponseAminoMsg): _69.QueryParamsResponse;
                toAminoMsg(message: _69.QueryParamsResponse): _69.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryParamsResponseProtoMsg): _69.QueryParamsResponse;
                toProto(message: _69.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryParamsResponse): _69.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                encode(_: _69.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _69.QueryInflationRequest;
                fromJSON(_: any): _69.QueryInflationRequest;
                toJSON(_: _69.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_69.QueryInflationRequest>): _69.QueryInflationRequest;
                fromAmino(_: _69.QueryInflationRequestAmino): _69.QueryInflationRequest;
                toAmino(_: _69.QueryInflationRequest): _69.QueryInflationRequestAmino;
                fromAminoMsg(object: _69.QueryInflationRequestAminoMsg): _69.QueryInflationRequest;
                toAminoMsg(message: _69.QueryInflationRequest): _69.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _69.QueryInflationRequestProtoMsg): _69.QueryInflationRequest;
                toProto(message: _69.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _69.QueryInflationRequest): _69.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                encode(message: _69.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _69.QueryInflationResponse;
                fromJSON(object: any): _69.QueryInflationResponse;
                toJSON(message: _69.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_69.QueryInflationResponse>): _69.QueryInflationResponse;
                fromAmino(object: _69.QueryInflationResponseAmino): _69.QueryInflationResponse;
                toAmino(message: _69.QueryInflationResponse): _69.QueryInflationResponseAmino;
                fromAminoMsg(object: _69.QueryInflationResponseAminoMsg): _69.QueryInflationResponse;
                toAminoMsg(message: _69.QueryInflationResponse): _69.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _69.QueryInflationResponseProtoMsg): _69.QueryInflationResponse;
                toProto(message: _69.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _69.QueryInflationResponse): _69.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _69.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _69.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _69.QueryAnnualProvisionsRequest;
                toJSON(_: _69.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_69.QueryAnnualProvisionsRequest>): _69.QueryAnnualProvisionsRequest;
                fromAmino(_: _69.QueryAnnualProvisionsRequestAmino): _69.QueryAnnualProvisionsRequest;
                toAmino(_: _69.QueryAnnualProvisionsRequest): _69.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _69.QueryAnnualProvisionsRequestAminoMsg): _69.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _69.QueryAnnualProvisionsRequest): _69.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _69.QueryAnnualProvisionsRequestProtoMsg): _69.QueryAnnualProvisionsRequest;
                toProto(message: _69.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _69.QueryAnnualProvisionsRequest): _69.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _69.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _69.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _69.QueryAnnualProvisionsResponse;
                toJSON(message: _69.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_69.QueryAnnualProvisionsResponse>): _69.QueryAnnualProvisionsResponse;
                fromAmino(object: _69.QueryAnnualProvisionsResponseAmino): _69.QueryAnnualProvisionsResponse;
                toAmino(message: _69.QueryAnnualProvisionsResponse): _69.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _69.QueryAnnualProvisionsResponseAminoMsg): _69.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _69.QueryAnnualProvisionsResponse): _69.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _69.QueryAnnualProvisionsResponseProtoMsg): _69.QueryAnnualProvisionsResponse;
                toProto(message: _69.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _69.QueryAnnualProvisionsResponse): _69.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                encode(message: _68.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _68.Minter;
                fromJSON(object: any): _68.Minter;
                toJSON(message: _68.Minter): unknown;
                fromPartial(object: Partial<_68.Minter>): _68.Minter;
                fromAmino(object: _68.MinterAmino): _68.Minter;
                toAmino(message: _68.Minter): _68.MinterAmino;
                fromAminoMsg(object: _68.MinterAminoMsg): _68.Minter;
                toAminoMsg(message: _68.Minter): _68.MinterAminoMsg;
                fromProtoMsg(message: _68.MinterProtoMsg): _68.Minter;
                toProto(message: _68.Minter): Uint8Array;
                toProtoMsg(message: _68.Minter): _68.MinterProtoMsg;
            };
            Params: {
                encode(message: _68.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _68.Params;
                fromJSON(object: any): _68.Params;
                toJSON(message: _68.Params): unknown;
                fromPartial(object: Partial<_68.Params>): _68.Params;
                fromAmino(object: _68.ParamsAmino): _68.Params;
                toAmino(message: _68.Params): _68.ParamsAmino;
                fromAminoMsg(object: _68.ParamsAminoMsg): _68.Params;
                toAminoMsg(message: _68.Params): _68.ParamsAminoMsg;
                fromProtoMsg(message: _68.ParamsProtoMsg): _68.Params;
                toProto(message: _68.Params): Uint8Array;
                toProtoMsg(message: _68.Params): _68.ParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _67.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.GenesisState;
                fromJSON(object: any): _67.GenesisState;
                toJSON(message: _67.GenesisState): unknown;
                fromPartial(object: Partial<_67.GenesisState>): _67.GenesisState;
                fromAmino(object: _67.GenesisStateAmino): _67.GenesisState;
                toAmino(message: _67.GenesisState): _67.GenesisStateAmino;
                fromAminoMsg(object: _67.GenesisStateAminoMsg): _67.GenesisState;
                toAminoMsg(message: _67.GenesisState): _67.GenesisStateAminoMsg;
                fromProtoMsg(message: _67.GenesisStateProtoMsg): _67.GenesisState;
                toProto(message: _67.GenesisState): Uint8Array;
                toProtoMsg(message: _67.GenesisState): _67.GenesisStateProtoMsg;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _225.MsgClientImpl;
            QueryClientImpl: typeof _210.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _74.QueryBalanceRequest): Promise<_74.QueryBalanceResponse>;
                owner(request: _74.QueryOwnerRequest): Promise<_74.QueryOwnerResponse>;
                supply(request: _74.QuerySupplyRequest): Promise<_74.QuerySupplyResponse>;
                nFTs(request: _74.QueryNFTsRequest): Promise<_74.QueryNFTsResponse>;
                nFT(request: _74.QueryNFTRequest): Promise<_74.QueryNFTResponse>;
                class(request: _74.QueryClassRequest): Promise<_74.QueryClassResponse>;
                classes(request?: _74.QueryClassesRequest | undefined): Promise<_74.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _191.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _75.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _75.MsgSend): {
                        typeUrl: string;
                        value: _75.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _75.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _75.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _75.MsgSend): {
                        typeUrl: string;
                        value: _75.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _75.MsgSend) => _75.MsgSendAmino;
                    fromAmino: (object: _75.MsgSendAmino) => _75.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _75.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _75.MsgSend;
                fromJSON(object: any): _75.MsgSend;
                toJSON(message: _75.MsgSend): unknown;
                fromPartial(object: Partial<_75.MsgSend>): _75.MsgSend;
                fromAmino(object: _75.MsgSendAmino): _75.MsgSend;
                toAmino(message: _75.MsgSend): _75.MsgSendAmino;
                fromAminoMsg(object: _75.MsgSendAminoMsg): _75.MsgSend;
                toAminoMsg(message: _75.MsgSend): _75.MsgSendAminoMsg;
                fromProtoMsg(message: _75.MsgSendProtoMsg): _75.MsgSend;
                toProto(message: _75.MsgSend): Uint8Array;
                toProtoMsg(message: _75.MsgSend): _75.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _75.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _75.MsgSendResponse;
                fromJSON(_: any): _75.MsgSendResponse;
                toJSON(_: _75.MsgSendResponse): unknown;
                fromPartial(_: Partial<_75.MsgSendResponse>): _75.MsgSendResponse;
                fromAmino(_: _75.MsgSendResponseAmino): _75.MsgSendResponse;
                toAmino(_: _75.MsgSendResponse): _75.MsgSendResponseAmino;
                fromAminoMsg(object: _75.MsgSendResponseAminoMsg): _75.MsgSendResponse;
                toAminoMsg(message: _75.MsgSendResponse): _75.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _75.MsgSendResponseProtoMsg): _75.MsgSendResponse;
                toProto(message: _75.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _75.MsgSendResponse): _75.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _74.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryBalanceRequest;
                fromJSON(object: any): _74.QueryBalanceRequest;
                toJSON(message: _74.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_74.QueryBalanceRequest>): _74.QueryBalanceRequest;
                fromAmino(object: _74.QueryBalanceRequestAmino): _74.QueryBalanceRequest;
                toAmino(message: _74.QueryBalanceRequest): _74.QueryBalanceRequestAmino;
                fromAminoMsg(object: _74.QueryBalanceRequestAminoMsg): _74.QueryBalanceRequest;
                toAminoMsg(message: _74.QueryBalanceRequest): _74.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _74.QueryBalanceRequestProtoMsg): _74.QueryBalanceRequest;
                toProto(message: _74.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _74.QueryBalanceRequest): _74.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _74.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryBalanceResponse;
                fromJSON(object: any): _74.QueryBalanceResponse;
                toJSON(message: _74.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_74.QueryBalanceResponse>): _74.QueryBalanceResponse;
                fromAmino(object: _74.QueryBalanceResponseAmino): _74.QueryBalanceResponse;
                toAmino(message: _74.QueryBalanceResponse): _74.QueryBalanceResponseAmino;
                fromAminoMsg(object: _74.QueryBalanceResponseAminoMsg): _74.QueryBalanceResponse;
                toAminoMsg(message: _74.QueryBalanceResponse): _74.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _74.QueryBalanceResponseProtoMsg): _74.QueryBalanceResponse;
                toProto(message: _74.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _74.QueryBalanceResponse): _74.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                encode(message: _74.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryOwnerRequest;
                fromJSON(object: any): _74.QueryOwnerRequest;
                toJSON(message: _74.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_74.QueryOwnerRequest>): _74.QueryOwnerRequest;
                fromAmino(object: _74.QueryOwnerRequestAmino): _74.QueryOwnerRequest;
                toAmino(message: _74.QueryOwnerRequest): _74.QueryOwnerRequestAmino;
                fromAminoMsg(object: _74.QueryOwnerRequestAminoMsg): _74.QueryOwnerRequest;
                toAminoMsg(message: _74.QueryOwnerRequest): _74.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _74.QueryOwnerRequestProtoMsg): _74.QueryOwnerRequest;
                toProto(message: _74.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _74.QueryOwnerRequest): _74.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                encode(message: _74.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryOwnerResponse;
                fromJSON(object: any): _74.QueryOwnerResponse;
                toJSON(message: _74.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_74.QueryOwnerResponse>): _74.QueryOwnerResponse;
                fromAmino(object: _74.QueryOwnerResponseAmino): _74.QueryOwnerResponse;
                toAmino(message: _74.QueryOwnerResponse): _74.QueryOwnerResponseAmino;
                fromAminoMsg(object: _74.QueryOwnerResponseAminoMsg): _74.QueryOwnerResponse;
                toAminoMsg(message: _74.QueryOwnerResponse): _74.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _74.QueryOwnerResponseProtoMsg): _74.QueryOwnerResponse;
                toProto(message: _74.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _74.QueryOwnerResponse): _74.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                encode(message: _74.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QuerySupplyRequest;
                fromJSON(object: any): _74.QuerySupplyRequest;
                toJSON(message: _74.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_74.QuerySupplyRequest>): _74.QuerySupplyRequest;
                fromAmino(object: _74.QuerySupplyRequestAmino): _74.QuerySupplyRequest;
                toAmino(message: _74.QuerySupplyRequest): _74.QuerySupplyRequestAmino;
                fromAminoMsg(object: _74.QuerySupplyRequestAminoMsg): _74.QuerySupplyRequest;
                toAminoMsg(message: _74.QuerySupplyRequest): _74.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _74.QuerySupplyRequestProtoMsg): _74.QuerySupplyRequest;
                toProto(message: _74.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _74.QuerySupplyRequest): _74.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                encode(message: _74.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QuerySupplyResponse;
                fromJSON(object: any): _74.QuerySupplyResponse;
                toJSON(message: _74.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_74.QuerySupplyResponse>): _74.QuerySupplyResponse;
                fromAmino(object: _74.QuerySupplyResponseAmino): _74.QuerySupplyResponse;
                toAmino(message: _74.QuerySupplyResponse): _74.QuerySupplyResponseAmino;
                fromAminoMsg(object: _74.QuerySupplyResponseAminoMsg): _74.QuerySupplyResponse;
                toAminoMsg(message: _74.QuerySupplyResponse): _74.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _74.QuerySupplyResponseProtoMsg): _74.QuerySupplyResponse;
                toProto(message: _74.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _74.QuerySupplyResponse): _74.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                encode(message: _74.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryNFTsRequest;
                fromJSON(object: any): _74.QueryNFTsRequest;
                toJSON(message: _74.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_74.QueryNFTsRequest>): _74.QueryNFTsRequest;
                fromAmino(object: _74.QueryNFTsRequestAmino): _74.QueryNFTsRequest;
                toAmino(message: _74.QueryNFTsRequest): _74.QueryNFTsRequestAmino;
                fromAminoMsg(object: _74.QueryNFTsRequestAminoMsg): _74.QueryNFTsRequest;
                toAminoMsg(message: _74.QueryNFTsRequest): _74.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryNFTsRequestProtoMsg): _74.QueryNFTsRequest;
                toProto(message: _74.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryNFTsRequest): _74.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                encode(message: _74.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryNFTsResponse;
                fromJSON(object: any): _74.QueryNFTsResponse;
                toJSON(message: _74.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_74.QueryNFTsResponse>): _74.QueryNFTsResponse;
                fromAmino(object: _74.QueryNFTsResponseAmino): _74.QueryNFTsResponse;
                toAmino(message: _74.QueryNFTsResponse): _74.QueryNFTsResponseAmino;
                fromAminoMsg(object: _74.QueryNFTsResponseAminoMsg): _74.QueryNFTsResponse;
                toAminoMsg(message: _74.QueryNFTsResponse): _74.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryNFTsResponseProtoMsg): _74.QueryNFTsResponse;
                toProto(message: _74.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryNFTsResponse): _74.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                encode(message: _74.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryNFTRequest;
                fromJSON(object: any): _74.QueryNFTRequest;
                toJSON(message: _74.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_74.QueryNFTRequest>): _74.QueryNFTRequest;
                fromAmino(object: _74.QueryNFTRequestAmino): _74.QueryNFTRequest;
                toAmino(message: _74.QueryNFTRequest): _74.QueryNFTRequestAmino;
                fromAminoMsg(object: _74.QueryNFTRequestAminoMsg): _74.QueryNFTRequest;
                toAminoMsg(message: _74.QueryNFTRequest): _74.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _74.QueryNFTRequestProtoMsg): _74.QueryNFTRequest;
                toProto(message: _74.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _74.QueryNFTRequest): _74.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                encode(message: _74.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryNFTResponse;
                fromJSON(object: any): _74.QueryNFTResponse;
                toJSON(message: _74.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_74.QueryNFTResponse>): _74.QueryNFTResponse;
                fromAmino(object: _74.QueryNFTResponseAmino): _74.QueryNFTResponse;
                toAmino(message: _74.QueryNFTResponse): _74.QueryNFTResponseAmino;
                fromAminoMsg(object: _74.QueryNFTResponseAminoMsg): _74.QueryNFTResponse;
                toAminoMsg(message: _74.QueryNFTResponse): _74.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _74.QueryNFTResponseProtoMsg): _74.QueryNFTResponse;
                toProto(message: _74.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _74.QueryNFTResponse): _74.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                encode(message: _74.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryClassRequest;
                fromJSON(object: any): _74.QueryClassRequest;
                toJSON(message: _74.QueryClassRequest): unknown;
                fromPartial(object: Partial<_74.QueryClassRequest>): _74.QueryClassRequest;
                fromAmino(object: _74.QueryClassRequestAmino): _74.QueryClassRequest;
                toAmino(message: _74.QueryClassRequest): _74.QueryClassRequestAmino;
                fromAminoMsg(object: _74.QueryClassRequestAminoMsg): _74.QueryClassRequest;
                toAminoMsg(message: _74.QueryClassRequest): _74.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _74.QueryClassRequestProtoMsg): _74.QueryClassRequest;
                toProto(message: _74.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _74.QueryClassRequest): _74.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                encode(message: _74.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryClassResponse;
                fromJSON(object: any): _74.QueryClassResponse;
                toJSON(message: _74.QueryClassResponse): unknown;
                fromPartial(object: Partial<_74.QueryClassResponse>): _74.QueryClassResponse;
                fromAmino(object: _74.QueryClassResponseAmino): _74.QueryClassResponse;
                toAmino(message: _74.QueryClassResponse): _74.QueryClassResponseAmino;
                fromAminoMsg(object: _74.QueryClassResponseAminoMsg): _74.QueryClassResponse;
                toAminoMsg(message: _74.QueryClassResponse): _74.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _74.QueryClassResponseProtoMsg): _74.QueryClassResponse;
                toProto(message: _74.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _74.QueryClassResponse): _74.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                encode(message: _74.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryClassesRequest;
                fromJSON(object: any): _74.QueryClassesRequest;
                toJSON(message: _74.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_74.QueryClassesRequest>): _74.QueryClassesRequest;
                fromAmino(object: _74.QueryClassesRequestAmino): _74.QueryClassesRequest;
                toAmino(message: _74.QueryClassesRequest): _74.QueryClassesRequestAmino;
                fromAminoMsg(object: _74.QueryClassesRequestAminoMsg): _74.QueryClassesRequest;
                toAminoMsg(message: _74.QueryClassesRequest): _74.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _74.QueryClassesRequestProtoMsg): _74.QueryClassesRequest;
                toProto(message: _74.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _74.QueryClassesRequest): _74.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                encode(message: _74.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryClassesResponse;
                fromJSON(object: any): _74.QueryClassesResponse;
                toJSON(message: _74.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_74.QueryClassesResponse>): _74.QueryClassesResponse;
                fromAmino(object: _74.QueryClassesResponseAmino): _74.QueryClassesResponse;
                toAmino(message: _74.QueryClassesResponse): _74.QueryClassesResponseAmino;
                fromAminoMsg(object: _74.QueryClassesResponseAminoMsg): _74.QueryClassesResponse;
                toAminoMsg(message: _74.QueryClassesResponse): _74.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _74.QueryClassesResponseProtoMsg): _74.QueryClassesResponse;
                toProto(message: _74.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _74.QueryClassesResponse): _74.QueryClassesResponseProtoMsg;
            };
            Class: {
                encode(message: _73.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _73.Class;
                fromJSON(object: any): _73.Class;
                toJSON(message: _73.Class): unknown;
                fromPartial(object: Partial<_73.Class>): _73.Class;
                fromAmino(object: _73.ClassAmino): _73.Class;
                toAmino(message: _73.Class): _73.ClassAmino;
                fromAminoMsg(object: _73.ClassAminoMsg): _73.Class;
                toAminoMsg(message: _73.Class): _73.ClassAminoMsg;
                fromProtoMsg(message: _73.ClassProtoMsg): _73.Class;
                toProto(message: _73.Class): Uint8Array;
                toProtoMsg(message: _73.Class): _73.ClassProtoMsg;
            };
            NFT: {
                encode(message: _73.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _73.NFT;
                fromJSON(object: any): _73.NFT;
                toJSON(message: _73.NFT): unknown;
                fromPartial(object: Partial<_73.NFT>): _73.NFT;
                fromAmino(object: _73.NFTAmino): _73.NFT;
                toAmino(message: _73.NFT): _73.NFTAmino;
                fromAminoMsg(object: _73.NFTAminoMsg): _73.NFT;
                toAminoMsg(message: _73.NFT): _73.NFTAminoMsg;
                fromProtoMsg(message: _73.NFTProtoMsg): _73.NFT;
                toProto(message: _73.NFT): Uint8Array;
                toProtoMsg(message: _73.NFT): _73.NFTProtoMsg;
            };
            GenesisState: {
                encode(message: _72.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _72.GenesisState;
                fromJSON(object: any): _72.GenesisState;
                toJSON(message: _72.GenesisState): unknown;
                fromPartial(object: Partial<_72.GenesisState>): _72.GenesisState;
                fromAmino(object: _72.GenesisStateAmino): _72.GenesisState;
                toAmino(message: _72.GenesisState): _72.GenesisStateAmino;
                fromAminoMsg(object: _72.GenesisStateAminoMsg): _72.GenesisState;
                toAminoMsg(message: _72.GenesisState): _72.GenesisStateAminoMsg;
                fromProtoMsg(message: _72.GenesisStateProtoMsg): _72.GenesisState;
                toProto(message: _72.GenesisState): Uint8Array;
                toProtoMsg(message: _72.GenesisState): _72.GenesisStateProtoMsg;
            };
            Entry: {
                encode(message: _72.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _72.Entry;
                fromJSON(object: any): _72.Entry;
                toJSON(message: _72.Entry): unknown;
                fromPartial(object: Partial<_72.Entry>): _72.Entry;
                fromAmino(object: _72.EntryAmino): _72.Entry;
                toAmino(message: _72.Entry): _72.EntryAmino;
                fromAminoMsg(object: _72.EntryAminoMsg): _72.Entry;
                toAminoMsg(message: _72.Entry): _72.EntryAminoMsg;
                fromProtoMsg(message: _72.EntryProtoMsg): _72.Entry;
                toProto(message: _72.Entry): Uint8Array;
                toProtoMsg(message: _72.Entry): _72.EntryProtoMsg;
            };
            EventSend: {
                encode(message: _71.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.EventSend;
                fromJSON(object: any): _71.EventSend;
                toJSON(message: _71.EventSend): unknown;
                fromPartial(object: Partial<_71.EventSend>): _71.EventSend;
                fromAmino(object: _71.EventSendAmino): _71.EventSend;
                toAmino(message: _71.EventSend): _71.EventSendAmino;
                fromAminoMsg(object: _71.EventSendAminoMsg): _71.EventSend;
                toAminoMsg(message: _71.EventSend): _71.EventSendAminoMsg;
                fromProtoMsg(message: _71.EventSendProtoMsg): _71.EventSend;
                toProto(message: _71.EventSend): Uint8Array;
                toProtoMsg(message: _71.EventSend): _71.EventSendProtoMsg;
            };
            EventMint: {
                encode(message: _71.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.EventMint;
                fromJSON(object: any): _71.EventMint;
                toJSON(message: _71.EventMint): unknown;
                fromPartial(object: Partial<_71.EventMint>): _71.EventMint;
                fromAmino(object: _71.EventMintAmino): _71.EventMint;
                toAmino(message: _71.EventMint): _71.EventMintAmino;
                fromAminoMsg(object: _71.EventMintAminoMsg): _71.EventMint;
                toAminoMsg(message: _71.EventMint): _71.EventMintAminoMsg;
                fromProtoMsg(message: _71.EventMintProtoMsg): _71.EventMint;
                toProto(message: _71.EventMint): Uint8Array;
                toProtoMsg(message: _71.EventMint): _71.EventMintProtoMsg;
            };
            EventBurn: {
                encode(message: _71.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.EventBurn;
                fromJSON(object: any): _71.EventBurn;
                toJSON(message: _71.EventBurn): unknown;
                fromPartial(object: Partial<_71.EventBurn>): _71.EventBurn;
                fromAmino(object: _71.EventBurnAmino): _71.EventBurn;
                toAmino(message: _71.EventBurn): _71.EventBurnAmino;
                fromAminoMsg(object: _71.EventBurnAminoMsg): _71.EventBurn;
                toAminoMsg(message: _71.EventBurn): _71.EventBurnAminoMsg;
                fromProtoMsg(message: _71.EventBurnProtoMsg): _71.EventBurn;
                toProto(message: _71.EventBurn): Uint8Array;
                toProtoMsg(message: _71.EventBurn): _71.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _76.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _76.Module;
                    fromJSON(_: any): _76.Module;
                    toJSON(_: _76.Module): unknown;
                    fromPartial(_: Partial<_76.Module>): _76.Module;
                    fromAmino(_: _76.ModuleAmino): _76.Module;
                    toAmino(_: _76.Module): _76.ModuleAmino;
                    fromAminoMsg(object: _76.ModuleAminoMsg): _76.Module;
                    toAminoMsg(message: _76.Module): _76.ModuleAminoMsg;
                    fromProtoMsg(message: _76.ModuleProtoMsg): _76.Module;
                    toProto(message: _76.Module): Uint8Array;
                    toProtoMsg(message: _76.Module): _76.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _77.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.TableDescriptor;
                fromJSON(object: any): _77.TableDescriptor;
                toJSON(message: _77.TableDescriptor): unknown;
                fromPartial(object: Partial<_77.TableDescriptor>): _77.TableDescriptor;
                fromAmino(object: _77.TableDescriptorAmino): _77.TableDescriptor;
                toAmino(message: _77.TableDescriptor): _77.TableDescriptorAmino;
                fromAminoMsg(object: _77.TableDescriptorAminoMsg): _77.TableDescriptor;
                toAminoMsg(message: _77.TableDescriptor): _77.TableDescriptorAminoMsg;
                fromProtoMsg(message: _77.TableDescriptorProtoMsg): _77.TableDescriptor;
                toProto(message: _77.TableDescriptor): Uint8Array;
                toProtoMsg(message: _77.TableDescriptor): _77.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                encode(message: _77.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.PrimaryKeyDescriptor;
                fromJSON(object: any): _77.PrimaryKeyDescriptor;
                toJSON(message: _77.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_77.PrimaryKeyDescriptor>): _77.PrimaryKeyDescriptor;
                fromAmino(object: _77.PrimaryKeyDescriptorAmino): _77.PrimaryKeyDescriptor;
                toAmino(message: _77.PrimaryKeyDescriptor): _77.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _77.PrimaryKeyDescriptorAminoMsg): _77.PrimaryKeyDescriptor;
                toAminoMsg(message: _77.PrimaryKeyDescriptor): _77.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _77.PrimaryKeyDescriptorProtoMsg): _77.PrimaryKeyDescriptor;
                toProto(message: _77.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _77.PrimaryKeyDescriptor): _77.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                encode(message: _77.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.SecondaryIndexDescriptor;
                fromJSON(object: any): _77.SecondaryIndexDescriptor;
                toJSON(message: _77.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_77.SecondaryIndexDescriptor>): _77.SecondaryIndexDescriptor;
                fromAmino(object: _77.SecondaryIndexDescriptorAmino): _77.SecondaryIndexDescriptor;
                toAmino(message: _77.SecondaryIndexDescriptor): _77.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _77.SecondaryIndexDescriptorAminoMsg): _77.SecondaryIndexDescriptor;
                toAminoMsg(message: _77.SecondaryIndexDescriptor): _77.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _77.SecondaryIndexDescriptorProtoMsg): _77.SecondaryIndexDescriptor;
                toProto(message: _77.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _77.SecondaryIndexDescriptor): _77.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                encode(message: _77.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.SingletonDescriptor;
                fromJSON(object: any): _77.SingletonDescriptor;
                toJSON(message: _77.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_77.SingletonDescriptor>): _77.SingletonDescriptor;
                fromAmino(object: _77.SingletonDescriptorAmino): _77.SingletonDescriptor;
                toAmino(message: _77.SingletonDescriptor): _77.SingletonDescriptorAmino;
                fromAminoMsg(object: _77.SingletonDescriptorAminoMsg): _77.SingletonDescriptor;
                toAminoMsg(message: _77.SingletonDescriptor): _77.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _77.SingletonDescriptorProtoMsg): _77.SingletonDescriptor;
                toProto(message: _77.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _77.SingletonDescriptor): _77.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _78.StorageType;
            storageTypeToJSON(object: _78.StorageType): string;
            StorageType: typeof _78.StorageType;
            StorageTypeSDKType: typeof _78.StorageType;
            StorageTypeAmino: typeof _78.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _78.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _78.ModuleSchemaDescriptor;
                fromJSON(object: any): _78.ModuleSchemaDescriptor;
                toJSON(message: _78.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_78.ModuleSchemaDescriptor>): _78.ModuleSchemaDescriptor;
                fromAmino(object: _78.ModuleSchemaDescriptorAmino): _78.ModuleSchemaDescriptor;
                toAmino(message: _78.ModuleSchemaDescriptor): _78.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _78.ModuleSchemaDescriptorAminoMsg): _78.ModuleSchemaDescriptor;
                toAminoMsg(message: _78.ModuleSchemaDescriptor): _78.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _78.ModuleSchemaDescriptorProtoMsg): _78.ModuleSchemaDescriptor;
                toProto(message: _78.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _78.ModuleSchemaDescriptor): _78.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _78.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _78.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _78.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _78.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_78.ModuleSchemaDescriptor_FileEntry>): _78.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _78.ModuleSchemaDescriptor_FileEntryAmino): _78.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _78.ModuleSchemaDescriptor_FileEntry): _78.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _78.ModuleSchemaDescriptor_FileEntryAminoMsg): _78.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _78.ModuleSchemaDescriptor_FileEntry): _78.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _78.ModuleSchemaDescriptor_FileEntryProtoMsg): _78.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _78.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _78.ModuleSchemaDescriptor_FileEntry): _78.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                subspaces(request?: _80.QuerySubspacesRequest | undefined): Promise<_80.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _192.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _80.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _80.QueryParamsRequest;
                fromJSON(object: any): _80.QueryParamsRequest;
                toJSON(message: _80.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_80.QueryParamsRequest>): _80.QueryParamsRequest;
                fromAmino(object: _80.QueryParamsRequestAmino): _80.QueryParamsRequest;
                toAmino(message: _80.QueryParamsRequest): _80.QueryParamsRequestAmino;
                fromAminoMsg(object: _80.QueryParamsRequestAminoMsg): _80.QueryParamsRequest;
                toAminoMsg(message: _80.QueryParamsRequest): _80.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _80.QueryParamsRequestProtoMsg): _80.QueryParamsRequest;
                toProto(message: _80.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _80.QueryParamsRequest): _80.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _80.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _80.QueryParamsResponse;
                fromJSON(object: any): _80.QueryParamsResponse;
                toJSON(message: _80.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_80.QueryParamsResponse>): _80.QueryParamsResponse;
                fromAmino(object: _80.QueryParamsResponseAmino): _80.QueryParamsResponse;
                toAmino(message: _80.QueryParamsResponse): _80.QueryParamsResponseAmino;
                fromAminoMsg(object: _80.QueryParamsResponseAminoMsg): _80.QueryParamsResponse;
                toAminoMsg(message: _80.QueryParamsResponse): _80.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _80.QueryParamsResponseProtoMsg): _80.QueryParamsResponse;
                toProto(message: _80.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _80.QueryParamsResponse): _80.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                encode(_: _80.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _80.QuerySubspacesRequest;
                fromJSON(_: any): _80.QuerySubspacesRequest;
                toJSON(_: _80.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_80.QuerySubspacesRequest>): _80.QuerySubspacesRequest;
                fromAmino(_: _80.QuerySubspacesRequestAmino): _80.QuerySubspacesRequest;
                toAmino(_: _80.QuerySubspacesRequest): _80.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _80.QuerySubspacesRequestAminoMsg): _80.QuerySubspacesRequest;
                toAminoMsg(message: _80.QuerySubspacesRequest): _80.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _80.QuerySubspacesRequestProtoMsg): _80.QuerySubspacesRequest;
                toProto(message: _80.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _80.QuerySubspacesRequest): _80.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                encode(message: _80.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _80.QuerySubspacesResponse;
                fromJSON(object: any): _80.QuerySubspacesResponse;
                toJSON(message: _80.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_80.QuerySubspacesResponse>): _80.QuerySubspacesResponse;
                fromAmino(object: _80.QuerySubspacesResponseAmino): _80.QuerySubspacesResponse;
                toAmino(message: _80.QuerySubspacesResponse): _80.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _80.QuerySubspacesResponseAminoMsg): _80.QuerySubspacesResponse;
                toAminoMsg(message: _80.QuerySubspacesResponse): _80.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _80.QuerySubspacesResponseProtoMsg): _80.QuerySubspacesResponse;
                toProto(message: _80.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _80.QuerySubspacesResponse): _80.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                encode(message: _80.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _80.Subspace;
                fromJSON(object: any): _80.Subspace;
                toJSON(message: _80.Subspace): unknown;
                fromPartial(object: Partial<_80.Subspace>): _80.Subspace;
                fromAmino(object: _80.SubspaceAmino): _80.Subspace;
                toAmino(message: _80.Subspace): _80.SubspaceAmino;
                fromAminoMsg(object: _80.SubspaceAminoMsg): _80.Subspace;
                toAminoMsg(message: _80.Subspace): _80.SubspaceAminoMsg;
                fromProtoMsg(message: _80.SubspaceProtoMsg): _80.Subspace;
                toProto(message: _80.Subspace): Uint8Array;
                toProtoMsg(message: _80.Subspace): _80.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                encode(message: _79.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _79.ParameterChangeProposal;
                fromJSON(object: any): _79.ParameterChangeProposal;
                toJSON(message: _79.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_79.ParameterChangeProposal>): _79.ParameterChangeProposal;
                fromAmino(object: _79.ParameterChangeProposalAmino): _79.ParameterChangeProposal;
                toAmino(message: _79.ParameterChangeProposal): _79.ParameterChangeProposalAmino;
                fromAminoMsg(object: _79.ParameterChangeProposalAminoMsg): _79.ParameterChangeProposal;
                toAminoMsg(message: _79.ParameterChangeProposal): _79.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _79.ParameterChangeProposalProtoMsg): _79.ParameterChangeProposal;
                toProto(message: _79.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _79.ParameterChangeProposal): _79.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                encode(message: _79.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _79.ParamChange;
                fromJSON(object: any): _79.ParamChange;
                toJSON(message: _79.ParamChange): unknown;
                fromPartial(object: Partial<_79.ParamChange>): _79.ParamChange;
                fromAmino(object: _79.ParamChangeAmino): _79.ParamChange;
                toAmino(message: _79.ParamChange): _79.ParamChangeAmino;
                fromAminoMsg(object: _79.ParamChangeAminoMsg): _79.ParamChange;
                toAminoMsg(message: _79.ParamChange): _79.ParamChangeAminoMsg;
                fromProtoMsg(message: _79.ParamChangeProtoMsg): _79.ParamChange;
                toProto(message: _79.ParamChange): Uint8Array;
                toProtoMsg(message: _79.ParamChange): _79.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _226.MsgClientImpl;
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _82.QueryParamsRequest | undefined): Promise<_82.QueryParamsResponse>;
                signingInfo(request: _82.QuerySigningInfoRequest): Promise<_82.QuerySigningInfoResponse>;
                signingInfos(request?: _82.QuerySigningInfosRequest | undefined): Promise<_82.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _193.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _84.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _84.MsgUnjail): {
                        typeUrl: string;
                        value: _84.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _84.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _84.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _84.MsgUnjail): {
                        typeUrl: string;
                        value: _84.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _84.MsgUnjail) => _84.MsgUnjailAmino;
                    fromAmino: (object: _84.MsgUnjailAmino) => _84.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _84.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _84.MsgUnjail;
                fromJSON(object: any): _84.MsgUnjail;
                toJSON(message: _84.MsgUnjail): unknown;
                fromPartial(object: Partial<_84.MsgUnjail>): _84.MsgUnjail;
                fromAmino(object: _84.MsgUnjailAmino): _84.MsgUnjail;
                toAmino(message: _84.MsgUnjail): _84.MsgUnjailAmino;
                fromAminoMsg(object: _84.MsgUnjailAminoMsg): _84.MsgUnjail;
                toAminoMsg(message: _84.MsgUnjail): _84.MsgUnjailAminoMsg;
                fromProtoMsg(message: _84.MsgUnjailProtoMsg): _84.MsgUnjail;
                toProto(message: _84.MsgUnjail): Uint8Array;
                toProtoMsg(message: _84.MsgUnjail): _84.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                encode(_: _84.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _84.MsgUnjailResponse;
                fromJSON(_: any): _84.MsgUnjailResponse;
                toJSON(_: _84.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_84.MsgUnjailResponse>): _84.MsgUnjailResponse;
                fromAmino(_: _84.MsgUnjailResponseAmino): _84.MsgUnjailResponse;
                toAmino(_: _84.MsgUnjailResponse): _84.MsgUnjailResponseAmino;
                fromAminoMsg(object: _84.MsgUnjailResponseAminoMsg): _84.MsgUnjailResponse;
                toAminoMsg(message: _84.MsgUnjailResponse): _84.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _84.MsgUnjailResponseProtoMsg): _84.MsgUnjailResponse;
                toProto(message: _84.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _84.MsgUnjailResponse): _84.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                encode(message: _83.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _83.ValidatorSigningInfo;
                fromJSON(object: any): _83.ValidatorSigningInfo;
                toJSON(message: _83.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_83.ValidatorSigningInfo>): _83.ValidatorSigningInfo;
                fromAmino(object: _83.ValidatorSigningInfoAmino): _83.ValidatorSigningInfo;
                toAmino(message: _83.ValidatorSigningInfo): _83.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _83.ValidatorSigningInfoAminoMsg): _83.ValidatorSigningInfo;
                toAminoMsg(message: _83.ValidatorSigningInfo): _83.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _83.ValidatorSigningInfoProtoMsg): _83.ValidatorSigningInfo;
                toProto(message: _83.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _83.ValidatorSigningInfo): _83.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                encode(message: _83.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _83.Params;
                fromJSON(object: any): _83.Params;
                toJSON(message: _83.Params): unknown;
                fromPartial(object: Partial<_83.Params>): _83.Params;
                fromAmino(object: _83.ParamsAmino): _83.Params;
                toAmino(message: _83.Params): _83.ParamsAmino;
                fromAminoMsg(object: _83.ParamsAminoMsg): _83.Params;
                toAminoMsg(message: _83.Params): _83.ParamsAminoMsg;
                fromProtoMsg(message: _83.ParamsProtoMsg): _83.Params;
                toProto(message: _83.Params): Uint8Array;
                toProtoMsg(message: _83.Params): _83.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _82.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _82.QueryParamsRequest;
                fromJSON(_: any): _82.QueryParamsRequest;
                toJSON(_: _82.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_82.QueryParamsRequest>): _82.QueryParamsRequest;
                fromAmino(_: _82.QueryParamsRequestAmino): _82.QueryParamsRequest;
                toAmino(_: _82.QueryParamsRequest): _82.QueryParamsRequestAmino;
                fromAminoMsg(object: _82.QueryParamsRequestAminoMsg): _82.QueryParamsRequest;
                toAminoMsg(message: _82.QueryParamsRequest): _82.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _82.QueryParamsRequestProtoMsg): _82.QueryParamsRequest;
                toProto(message: _82.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _82.QueryParamsRequest): _82.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _82.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _82.QueryParamsResponse;
                fromJSON(object: any): _82.QueryParamsResponse;
                toJSON(message: _82.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_82.QueryParamsResponse>): _82.QueryParamsResponse;
                fromAmino(object: _82.QueryParamsResponseAmino): _82.QueryParamsResponse;
                toAmino(message: _82.QueryParamsResponse): _82.QueryParamsResponseAmino;
                fromAminoMsg(object: _82.QueryParamsResponseAminoMsg): _82.QueryParamsResponse;
                toAminoMsg(message: _82.QueryParamsResponse): _82.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _82.QueryParamsResponseProtoMsg): _82.QueryParamsResponse;
                toProto(message: _82.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _82.QueryParamsResponse): _82.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                encode(message: _82.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _82.QuerySigningInfoRequest;
                fromJSON(object: any): _82.QuerySigningInfoRequest;
                toJSON(message: _82.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_82.QuerySigningInfoRequest>): _82.QuerySigningInfoRequest;
                fromAmino(object: _82.QuerySigningInfoRequestAmino): _82.QuerySigningInfoRequest;
                toAmino(message: _82.QuerySigningInfoRequest): _82.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _82.QuerySigningInfoRequestAminoMsg): _82.QuerySigningInfoRequest;
                toAminoMsg(message: _82.QuerySigningInfoRequest): _82.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _82.QuerySigningInfoRequestProtoMsg): _82.QuerySigningInfoRequest;
                toProto(message: _82.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _82.QuerySigningInfoRequest): _82.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                encode(message: _82.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _82.QuerySigningInfoResponse;
                fromJSON(object: any): _82.QuerySigningInfoResponse;
                toJSON(message: _82.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_82.QuerySigningInfoResponse>): _82.QuerySigningInfoResponse;
                fromAmino(object: _82.QuerySigningInfoResponseAmino): _82.QuerySigningInfoResponse;
                toAmino(message: _82.QuerySigningInfoResponse): _82.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _82.QuerySigningInfoResponseAminoMsg): _82.QuerySigningInfoResponse;
                toAminoMsg(message: _82.QuerySigningInfoResponse): _82.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _82.QuerySigningInfoResponseProtoMsg): _82.QuerySigningInfoResponse;
                toProto(message: _82.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _82.QuerySigningInfoResponse): _82.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                encode(message: _82.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _82.QuerySigningInfosRequest;
                fromJSON(object: any): _82.QuerySigningInfosRequest;
                toJSON(message: _82.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_82.QuerySigningInfosRequest>): _82.QuerySigningInfosRequest;
                fromAmino(object: _82.QuerySigningInfosRequestAmino): _82.QuerySigningInfosRequest;
                toAmino(message: _82.QuerySigningInfosRequest): _82.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _82.QuerySigningInfosRequestAminoMsg): _82.QuerySigningInfosRequest;
                toAminoMsg(message: _82.QuerySigningInfosRequest): _82.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _82.QuerySigningInfosRequestProtoMsg): _82.QuerySigningInfosRequest;
                toProto(message: _82.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _82.QuerySigningInfosRequest): _82.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                encode(message: _82.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _82.QuerySigningInfosResponse;
                fromJSON(object: any): _82.QuerySigningInfosResponse;
                toJSON(message: _82.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_82.QuerySigningInfosResponse>): _82.QuerySigningInfosResponse;
                fromAmino(object: _82.QuerySigningInfosResponseAmino): _82.QuerySigningInfosResponse;
                toAmino(message: _82.QuerySigningInfosResponse): _82.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _82.QuerySigningInfosResponseAminoMsg): _82.QuerySigningInfosResponse;
                toAminoMsg(message: _82.QuerySigningInfosResponse): _82.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _82.QuerySigningInfosResponseProtoMsg): _82.QuerySigningInfosResponse;
                toProto(message: _82.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _82.QuerySigningInfosResponse): _82.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _81.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _81.GenesisState;
                fromJSON(object: any): _81.GenesisState;
                toJSON(message: _81.GenesisState): unknown;
                fromPartial(object: Partial<_81.GenesisState>): _81.GenesisState;
                fromAmino(object: _81.GenesisStateAmino): _81.GenesisState;
                toAmino(message: _81.GenesisState): _81.GenesisStateAmino;
                fromAminoMsg(object: _81.GenesisStateAminoMsg): _81.GenesisState;
                toAminoMsg(message: _81.GenesisState): _81.GenesisStateAminoMsg;
                fromProtoMsg(message: _81.GenesisStateProtoMsg): _81.GenesisState;
                toProto(message: _81.GenesisState): Uint8Array;
                toProtoMsg(message: _81.GenesisState): _81.GenesisStateProtoMsg;
            };
            SigningInfo: {
                encode(message: _81.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _81.SigningInfo;
                fromJSON(object: any): _81.SigningInfo;
                toJSON(message: _81.SigningInfo): unknown;
                fromPartial(object: Partial<_81.SigningInfo>): _81.SigningInfo;
                fromAmino(object: _81.SigningInfoAmino): _81.SigningInfo;
                toAmino(message: _81.SigningInfo): _81.SigningInfoAmino;
                fromAminoMsg(object: _81.SigningInfoAminoMsg): _81.SigningInfo;
                toAminoMsg(message: _81.SigningInfo): _81.SigningInfoAminoMsg;
                fromProtoMsg(message: _81.SigningInfoProtoMsg): _81.SigningInfo;
                toProto(message: _81.SigningInfo): Uint8Array;
                toProtoMsg(message: _81.SigningInfo): _81.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                encode(message: _81.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _81.ValidatorMissedBlocks;
                fromJSON(object: any): _81.ValidatorMissedBlocks;
                toJSON(message: _81.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_81.ValidatorMissedBlocks>): _81.ValidatorMissedBlocks;
                fromAmino(object: _81.ValidatorMissedBlocksAmino): _81.ValidatorMissedBlocks;
                toAmino(message: _81.ValidatorMissedBlocks): _81.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _81.ValidatorMissedBlocksAminoMsg): _81.ValidatorMissedBlocks;
                toAminoMsg(message: _81.ValidatorMissedBlocks): _81.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _81.ValidatorMissedBlocksProtoMsg): _81.ValidatorMissedBlocks;
                toProto(message: _81.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _81.ValidatorMissedBlocks): _81.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                encode(message: _81.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _81.MissedBlock;
                fromJSON(object: any): _81.MissedBlock;
                toJSON(message: _81.MissedBlock): unknown;
                fromPartial(object: Partial<_81.MissedBlock>): _81.MissedBlock;
                fromAmino(object: _81.MissedBlockAmino): _81.MissedBlock;
                toAmino(message: _81.MissedBlock): _81.MissedBlockAmino;
                fromAminoMsg(object: _81.MissedBlockAminoMsg): _81.MissedBlock;
                toAminoMsg(message: _81.MissedBlock): _81.MissedBlockAminoMsg;
                fromProtoMsg(message: _81.MissedBlockProtoMsg): _81.MissedBlock;
                toProto(message: _81.MissedBlock): Uint8Array;
                toProtoMsg(message: _81.MissedBlock): _81.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _227.MsgClientImpl;
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _87.QueryValidatorsRequest): Promise<_87.QueryValidatorsResponse>;
                validator(request: _87.QueryValidatorRequest): Promise<_87.QueryValidatorResponse>;
                validatorDelegations(request: _87.QueryValidatorDelegationsRequest): Promise<_87.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _87.QueryValidatorUnbondingDelegationsRequest): Promise<_87.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _87.QueryDelegationRequest): Promise<_87.QueryDelegationResponse>;
                unbondingDelegation(request: _87.QueryUnbondingDelegationRequest): Promise<_87.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _87.QueryDelegatorDelegationsRequest): Promise<_87.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _87.QueryDelegatorUnbondingDelegationsRequest): Promise<_87.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _87.QueryRedelegationsRequest): Promise<_87.QueryRedelegationsResponse>;
                delegatorValidators(request: _87.QueryDelegatorValidatorsRequest): Promise<_87.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _87.QueryDelegatorValidatorRequest): Promise<_87.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _87.QueryHistoricalInfoRequest): Promise<_87.QueryHistoricalInfoResponse>;
                pool(request?: _87.QueryPoolRequest | undefined): Promise<_87.QueryPoolResponse>;
                params(request?: _87.QueryParamsRequest | undefined): Promise<_87.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _194.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _89.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _89.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _89.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _89.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _89.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _89.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _89.MsgCreateValidator): {
                        typeUrl: string;
                        value: _89.MsgCreateValidator;
                    };
                    editValidator(value: _89.MsgEditValidator): {
                        typeUrl: string;
                        value: _89.MsgEditValidator;
                    };
                    delegate(value: _89.MsgDelegate): {
                        typeUrl: string;
                        value: _89.MsgDelegate;
                    };
                    beginRedelegate(value: _89.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _89.MsgBeginRedelegate;
                    };
                    undelegate(value: _89.MsgUndelegate): {
                        typeUrl: string;
                        value: _89.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _89.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _89.MsgCancelUnbondingDelegation;
                    };
                };
                toJSON: {
                    createValidator(value: _89.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _89.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _89.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _89.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _89.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUnbondingDelegation(value: _89.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _89.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _89.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _89.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _89.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _89.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _89.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _89.MsgCreateValidator): {
                        typeUrl: string;
                        value: _89.MsgCreateValidator;
                    };
                    editValidator(value: _89.MsgEditValidator): {
                        typeUrl: string;
                        value: _89.MsgEditValidator;
                    };
                    delegate(value: _89.MsgDelegate): {
                        typeUrl: string;
                        value: _89.MsgDelegate;
                    };
                    beginRedelegate(value: _89.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _89.MsgBeginRedelegate;
                    };
                    undelegate(value: _89.MsgUndelegate): {
                        typeUrl: string;
                        value: _89.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _89.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _89.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _89.MsgCreateValidator) => _89.MsgCreateValidatorAmino;
                    fromAmino: (object: _89.MsgCreateValidatorAmino) => _89.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _89.MsgEditValidator) => _89.MsgEditValidatorAmino;
                    fromAmino: (object: _89.MsgEditValidatorAmino) => _89.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _89.MsgDelegate) => _89.MsgDelegateAmino;
                    fromAmino: (object: _89.MsgDelegateAmino) => _89.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _89.MsgBeginRedelegate) => _89.MsgBeginRedelegateAmino;
                    fromAmino: (object: _89.MsgBeginRedelegateAmino) => _89.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _89.MsgUndelegate) => _89.MsgUndelegateAmino;
                    fromAmino: (object: _89.MsgUndelegateAmino) => _89.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _89.MsgCancelUnbondingDelegation) => _89.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _89.MsgCancelUnbondingDelegationAmino) => _89.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                encode(message: _89.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgCreateValidator;
                fromJSON(object: any): _89.MsgCreateValidator;
                toJSON(message: _89.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_89.MsgCreateValidator>): _89.MsgCreateValidator;
                fromAmino(object: _89.MsgCreateValidatorAmino): _89.MsgCreateValidator;
                toAmino(message: _89.MsgCreateValidator): _89.MsgCreateValidatorAmino;
                fromAminoMsg(object: _89.MsgCreateValidatorAminoMsg): _89.MsgCreateValidator;
                toAminoMsg(message: _89.MsgCreateValidator): _89.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _89.MsgCreateValidatorProtoMsg): _89.MsgCreateValidator;
                toProto(message: _89.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _89.MsgCreateValidator): _89.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                encode(_: _89.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgCreateValidatorResponse;
                fromJSON(_: any): _89.MsgCreateValidatorResponse;
                toJSON(_: _89.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_89.MsgCreateValidatorResponse>): _89.MsgCreateValidatorResponse;
                fromAmino(_: _89.MsgCreateValidatorResponseAmino): _89.MsgCreateValidatorResponse;
                toAmino(_: _89.MsgCreateValidatorResponse): _89.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _89.MsgCreateValidatorResponseAminoMsg): _89.MsgCreateValidatorResponse;
                toAminoMsg(message: _89.MsgCreateValidatorResponse): _89.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _89.MsgCreateValidatorResponseProtoMsg): _89.MsgCreateValidatorResponse;
                toProto(message: _89.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _89.MsgCreateValidatorResponse): _89.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                encode(message: _89.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgEditValidator;
                fromJSON(object: any): _89.MsgEditValidator;
                toJSON(message: _89.MsgEditValidator): unknown;
                fromPartial(object: Partial<_89.MsgEditValidator>): _89.MsgEditValidator;
                fromAmino(object: _89.MsgEditValidatorAmino): _89.MsgEditValidator;
                toAmino(message: _89.MsgEditValidator): _89.MsgEditValidatorAmino;
                fromAminoMsg(object: _89.MsgEditValidatorAminoMsg): _89.MsgEditValidator;
                toAminoMsg(message: _89.MsgEditValidator): _89.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _89.MsgEditValidatorProtoMsg): _89.MsgEditValidator;
                toProto(message: _89.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _89.MsgEditValidator): _89.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                encode(_: _89.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgEditValidatorResponse;
                fromJSON(_: any): _89.MsgEditValidatorResponse;
                toJSON(_: _89.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_89.MsgEditValidatorResponse>): _89.MsgEditValidatorResponse;
                fromAmino(_: _89.MsgEditValidatorResponseAmino): _89.MsgEditValidatorResponse;
                toAmino(_: _89.MsgEditValidatorResponse): _89.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _89.MsgEditValidatorResponseAminoMsg): _89.MsgEditValidatorResponse;
                toAminoMsg(message: _89.MsgEditValidatorResponse): _89.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _89.MsgEditValidatorResponseProtoMsg): _89.MsgEditValidatorResponse;
                toProto(message: _89.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _89.MsgEditValidatorResponse): _89.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                encode(message: _89.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgDelegate;
                fromJSON(object: any): _89.MsgDelegate;
                toJSON(message: _89.MsgDelegate): unknown;
                fromPartial(object: Partial<_89.MsgDelegate>): _89.MsgDelegate;
                fromAmino(object: _89.MsgDelegateAmino): _89.MsgDelegate;
                toAmino(message: _89.MsgDelegate): _89.MsgDelegateAmino;
                fromAminoMsg(object: _89.MsgDelegateAminoMsg): _89.MsgDelegate;
                toAminoMsg(message: _89.MsgDelegate): _89.MsgDelegateAminoMsg;
                fromProtoMsg(message: _89.MsgDelegateProtoMsg): _89.MsgDelegate;
                toProto(message: _89.MsgDelegate): Uint8Array;
                toProtoMsg(message: _89.MsgDelegate): _89.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                encode(_: _89.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgDelegateResponse;
                fromJSON(_: any): _89.MsgDelegateResponse;
                toJSON(_: _89.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_89.MsgDelegateResponse>): _89.MsgDelegateResponse;
                fromAmino(_: _89.MsgDelegateResponseAmino): _89.MsgDelegateResponse;
                toAmino(_: _89.MsgDelegateResponse): _89.MsgDelegateResponseAmino;
                fromAminoMsg(object: _89.MsgDelegateResponseAminoMsg): _89.MsgDelegateResponse;
                toAminoMsg(message: _89.MsgDelegateResponse): _89.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _89.MsgDelegateResponseProtoMsg): _89.MsgDelegateResponse;
                toProto(message: _89.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _89.MsgDelegateResponse): _89.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                encode(message: _89.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgBeginRedelegate;
                fromJSON(object: any): _89.MsgBeginRedelegate;
                toJSON(message: _89.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_89.MsgBeginRedelegate>): _89.MsgBeginRedelegate;
                fromAmino(object: _89.MsgBeginRedelegateAmino): _89.MsgBeginRedelegate;
                toAmino(message: _89.MsgBeginRedelegate): _89.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _89.MsgBeginRedelegateAminoMsg): _89.MsgBeginRedelegate;
                toAminoMsg(message: _89.MsgBeginRedelegate): _89.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _89.MsgBeginRedelegateProtoMsg): _89.MsgBeginRedelegate;
                toProto(message: _89.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _89.MsgBeginRedelegate): _89.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _89.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgBeginRedelegateResponse;
                fromJSON(object: any): _89.MsgBeginRedelegateResponse;
                toJSON(message: _89.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_89.MsgBeginRedelegateResponse>): _89.MsgBeginRedelegateResponse;
                fromAmino(object: _89.MsgBeginRedelegateResponseAmino): _89.MsgBeginRedelegateResponse;
                toAmino(message: _89.MsgBeginRedelegateResponse): _89.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _89.MsgBeginRedelegateResponseAminoMsg): _89.MsgBeginRedelegateResponse;
                toAminoMsg(message: _89.MsgBeginRedelegateResponse): _89.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _89.MsgBeginRedelegateResponseProtoMsg): _89.MsgBeginRedelegateResponse;
                toProto(message: _89.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _89.MsgBeginRedelegateResponse): _89.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                encode(message: _89.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgUndelegate;
                fromJSON(object: any): _89.MsgUndelegate;
                toJSON(message: _89.MsgUndelegate): unknown;
                fromPartial(object: Partial<_89.MsgUndelegate>): _89.MsgUndelegate;
                fromAmino(object: _89.MsgUndelegateAmino): _89.MsgUndelegate;
                toAmino(message: _89.MsgUndelegate): _89.MsgUndelegateAmino;
                fromAminoMsg(object: _89.MsgUndelegateAminoMsg): _89.MsgUndelegate;
                toAminoMsg(message: _89.MsgUndelegate): _89.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _89.MsgUndelegateProtoMsg): _89.MsgUndelegate;
                toProto(message: _89.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _89.MsgUndelegate): _89.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                encode(message: _89.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgUndelegateResponse;
                fromJSON(object: any): _89.MsgUndelegateResponse;
                toJSON(message: _89.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_89.MsgUndelegateResponse>): _89.MsgUndelegateResponse;
                fromAmino(object: _89.MsgUndelegateResponseAmino): _89.MsgUndelegateResponse;
                toAmino(message: _89.MsgUndelegateResponse): _89.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _89.MsgUndelegateResponseAminoMsg): _89.MsgUndelegateResponse;
                toAminoMsg(message: _89.MsgUndelegateResponse): _89.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _89.MsgUndelegateResponseProtoMsg): _89.MsgUndelegateResponse;
                toProto(message: _89.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _89.MsgUndelegateResponse): _89.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _89.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgCancelUnbondingDelegation;
                fromJSON(object: any): _89.MsgCancelUnbondingDelegation;
                toJSON(message: _89.MsgCancelUnbondingDelegation): unknown;
                fromPartial(object: Partial<_89.MsgCancelUnbondingDelegation>): _89.MsgCancelUnbondingDelegation;
                fromAmino(object: _89.MsgCancelUnbondingDelegationAmino): _89.MsgCancelUnbondingDelegation;
                toAmino(message: _89.MsgCancelUnbondingDelegation): _89.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _89.MsgCancelUnbondingDelegationAminoMsg): _89.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _89.MsgCancelUnbondingDelegation): _89.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _89.MsgCancelUnbondingDelegationProtoMsg): _89.MsgCancelUnbondingDelegation;
                toProto(message: _89.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _89.MsgCancelUnbondingDelegation): _89.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _89.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgCancelUnbondingDelegationResponse;
                fromJSON(_: any): _89.MsgCancelUnbondingDelegationResponse;
                toJSON(_: _89.MsgCancelUnbondingDelegationResponse): unknown;
                fromPartial(_: Partial<_89.MsgCancelUnbondingDelegationResponse>): _89.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _89.MsgCancelUnbondingDelegationResponseAmino): _89.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _89.MsgCancelUnbondingDelegationResponse): _89.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _89.MsgCancelUnbondingDelegationResponseAminoMsg): _89.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _89.MsgCancelUnbondingDelegationResponse): _89.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _89.MsgCancelUnbondingDelegationResponseProtoMsg): _89.MsgCancelUnbondingDelegationResponse;
                toProto(message: _89.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _89.MsgCancelUnbondingDelegationResponse): _89.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => string;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => {
                typeUrl: string;
                value: Uint8Array;
            };
            bondStatusFromJSON(object: any): _88.BondStatus;
            bondStatusToJSON(object: _88.BondStatus): string;
            BondStatus: typeof _88.BondStatus;
            BondStatusSDKType: typeof _88.BondStatus;
            BondStatusAmino: typeof _88.BondStatus;
            HistoricalInfo: {
                encode(message: _88.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.HistoricalInfo;
                fromJSON(object: any): _88.HistoricalInfo;
                toJSON(message: _88.HistoricalInfo): unknown;
                fromPartial(object: Partial<_88.HistoricalInfo>): _88.HistoricalInfo;
                fromAmino(object: _88.HistoricalInfoAmino): _88.HistoricalInfo;
                toAmino(message: _88.HistoricalInfo): _88.HistoricalInfoAmino;
                fromAminoMsg(object: _88.HistoricalInfoAminoMsg): _88.HistoricalInfo;
                toAminoMsg(message: _88.HistoricalInfo): _88.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _88.HistoricalInfoProtoMsg): _88.HistoricalInfo;
                toProto(message: _88.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _88.HistoricalInfo): _88.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                encode(message: _88.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.CommissionRates;
                fromJSON(object: any): _88.CommissionRates;
                toJSON(message: _88.CommissionRates): unknown;
                fromPartial(object: Partial<_88.CommissionRates>): _88.CommissionRates;
                fromAmino(object: _88.CommissionRatesAmino): _88.CommissionRates;
                toAmino(message: _88.CommissionRates): _88.CommissionRatesAmino;
                fromAminoMsg(object: _88.CommissionRatesAminoMsg): _88.CommissionRates;
                toAminoMsg(message: _88.CommissionRates): _88.CommissionRatesAminoMsg;
                fromProtoMsg(message: _88.CommissionRatesProtoMsg): _88.CommissionRates;
                toProto(message: _88.CommissionRates): Uint8Array;
                toProtoMsg(message: _88.CommissionRates): _88.CommissionRatesProtoMsg;
            };
            Commission: {
                encode(message: _88.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.Commission;
                fromJSON(object: any): _88.Commission;
                toJSON(message: _88.Commission): unknown;
                fromPartial(object: Partial<_88.Commission>): _88.Commission;
                fromAmino(object: _88.CommissionAmino): _88.Commission;
                toAmino(message: _88.Commission): _88.CommissionAmino;
                fromAminoMsg(object: _88.CommissionAminoMsg): _88.Commission;
                toAminoMsg(message: _88.Commission): _88.CommissionAminoMsg;
                fromProtoMsg(message: _88.CommissionProtoMsg): _88.Commission;
                toProto(message: _88.Commission): Uint8Array;
                toProtoMsg(message: _88.Commission): _88.CommissionProtoMsg;
            };
            Description: {
                encode(message: _88.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.Description;
                fromJSON(object: any): _88.Description;
                toJSON(message: _88.Description): unknown;
                fromPartial(object: Partial<_88.Description>): _88.Description;
                fromAmino(object: _88.DescriptionAmino): _88.Description;
                toAmino(message: _88.Description): _88.DescriptionAmino;
                fromAminoMsg(object: _88.DescriptionAminoMsg): _88.Description;
                toAminoMsg(message: _88.Description): _88.DescriptionAminoMsg;
                fromProtoMsg(message: _88.DescriptionProtoMsg): _88.Description;
                toProto(message: _88.Description): Uint8Array;
                toProtoMsg(message: _88.Description): _88.DescriptionProtoMsg;
            };
            Validator: {
                encode(message: _88.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.Validator;
                fromJSON(object: any): _88.Validator;
                toJSON(message: _88.Validator): unknown;
                fromPartial(object: Partial<_88.Validator>): _88.Validator;
                fromAmino(object: _88.ValidatorAmino): _88.Validator;
                toAmino(message: _88.Validator): _88.ValidatorAmino;
                fromAminoMsg(object: _88.ValidatorAminoMsg): _88.Validator;
                toAminoMsg(message: _88.Validator): _88.ValidatorAminoMsg;
                fromProtoMsg(message: _88.ValidatorProtoMsg): _88.Validator;
                toProto(message: _88.Validator): Uint8Array;
                toProtoMsg(message: _88.Validator): _88.ValidatorProtoMsg;
            };
            ValAddresses: {
                encode(message: _88.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.ValAddresses;
                fromJSON(object: any): _88.ValAddresses;
                toJSON(message: _88.ValAddresses): unknown;
                fromPartial(object: Partial<_88.ValAddresses>): _88.ValAddresses;
                fromAmino(object: _88.ValAddressesAmino): _88.ValAddresses;
                toAmino(message: _88.ValAddresses): _88.ValAddressesAmino;
                fromAminoMsg(object: _88.ValAddressesAminoMsg): _88.ValAddresses;
                toAminoMsg(message: _88.ValAddresses): _88.ValAddressesAminoMsg;
                fromProtoMsg(message: _88.ValAddressesProtoMsg): _88.ValAddresses;
                toProto(message: _88.ValAddresses): Uint8Array;
                toProtoMsg(message: _88.ValAddresses): _88.ValAddressesProtoMsg;
            };
            DVPair: {
                encode(message: _88.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.DVPair;
                fromJSON(object: any): _88.DVPair;
                toJSON(message: _88.DVPair): unknown;
                fromPartial(object: Partial<_88.DVPair>): _88.DVPair;
                fromAmino(object: _88.DVPairAmino): _88.DVPair;
                toAmino(message: _88.DVPair): _88.DVPairAmino;
                fromAminoMsg(object: _88.DVPairAminoMsg): _88.DVPair;
                toAminoMsg(message: _88.DVPair): _88.DVPairAminoMsg;
                fromProtoMsg(message: _88.DVPairProtoMsg): _88.DVPair;
                toProto(message: _88.DVPair): Uint8Array;
                toProtoMsg(message: _88.DVPair): _88.DVPairProtoMsg;
            };
            DVPairs: {
                encode(message: _88.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.DVPairs;
                fromJSON(object: any): _88.DVPairs;
                toJSON(message: _88.DVPairs): unknown;
                fromPartial(object: Partial<_88.DVPairs>): _88.DVPairs;
                fromAmino(object: _88.DVPairsAmino): _88.DVPairs;
                toAmino(message: _88.DVPairs): _88.DVPairsAmino;
                fromAminoMsg(object: _88.DVPairsAminoMsg): _88.DVPairs;
                toAminoMsg(message: _88.DVPairs): _88.DVPairsAminoMsg;
                fromProtoMsg(message: _88.DVPairsProtoMsg): _88.DVPairs;
                toProto(message: _88.DVPairs): Uint8Array;
                toProtoMsg(message: _88.DVPairs): _88.DVPairsProtoMsg;
            };
            DVVTriplet: {
                encode(message: _88.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.DVVTriplet;
                fromJSON(object: any): _88.DVVTriplet;
                toJSON(message: _88.DVVTriplet): unknown;
                fromPartial(object: Partial<_88.DVVTriplet>): _88.DVVTriplet;
                fromAmino(object: _88.DVVTripletAmino): _88.DVVTriplet;
                toAmino(message: _88.DVVTriplet): _88.DVVTripletAmino;
                fromAminoMsg(object: _88.DVVTripletAminoMsg): _88.DVVTriplet;
                toAminoMsg(message: _88.DVVTriplet): _88.DVVTripletAminoMsg;
                fromProtoMsg(message: _88.DVVTripletProtoMsg): _88.DVVTriplet;
                toProto(message: _88.DVVTriplet): Uint8Array;
                toProtoMsg(message: _88.DVVTriplet): _88.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                encode(message: _88.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.DVVTriplets;
                fromJSON(object: any): _88.DVVTriplets;
                toJSON(message: _88.DVVTriplets): unknown;
                fromPartial(object: Partial<_88.DVVTriplets>): _88.DVVTriplets;
                fromAmino(object: _88.DVVTripletsAmino): _88.DVVTriplets;
                toAmino(message: _88.DVVTriplets): _88.DVVTripletsAmino;
                fromAminoMsg(object: _88.DVVTripletsAminoMsg): _88.DVVTriplets;
                toAminoMsg(message: _88.DVVTriplets): _88.DVVTripletsAminoMsg;
                fromProtoMsg(message: _88.DVVTripletsProtoMsg): _88.DVVTriplets;
                toProto(message: _88.DVVTriplets): Uint8Array;
                toProtoMsg(message: _88.DVVTriplets): _88.DVVTripletsProtoMsg;
            };
            Delegation: {
                encode(message: _88.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.Delegation;
                fromJSON(object: any): _88.Delegation;
                toJSON(message: _88.Delegation): unknown;
                fromPartial(object: Partial<_88.Delegation>): _88.Delegation;
                fromAmino(object: _88.DelegationAmino): _88.Delegation;
                toAmino(message: _88.Delegation): _88.DelegationAmino;
                fromAminoMsg(object: _88.DelegationAminoMsg): _88.Delegation;
                toAminoMsg(message: _88.Delegation): _88.DelegationAminoMsg;
                fromProtoMsg(message: _88.DelegationProtoMsg): _88.Delegation;
                toProto(message: _88.Delegation): Uint8Array;
                toProtoMsg(message: _88.Delegation): _88.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                encode(message: _88.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.UnbondingDelegation;
                fromJSON(object: any): _88.UnbondingDelegation;
                toJSON(message: _88.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_88.UnbondingDelegation>): _88.UnbondingDelegation;
                fromAmino(object: _88.UnbondingDelegationAmino): _88.UnbondingDelegation;
                toAmino(message: _88.UnbondingDelegation): _88.UnbondingDelegationAmino;
                fromAminoMsg(object: _88.UnbondingDelegationAminoMsg): _88.UnbondingDelegation;
                toAminoMsg(message: _88.UnbondingDelegation): _88.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _88.UnbondingDelegationProtoMsg): _88.UnbondingDelegation;
                toProto(message: _88.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _88.UnbondingDelegation): _88.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                encode(message: _88.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.UnbondingDelegationEntry;
                fromJSON(object: any): _88.UnbondingDelegationEntry;
                toJSON(message: _88.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_88.UnbondingDelegationEntry>): _88.UnbondingDelegationEntry;
                fromAmino(object: _88.UnbondingDelegationEntryAmino): _88.UnbondingDelegationEntry;
                toAmino(message: _88.UnbondingDelegationEntry): _88.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _88.UnbondingDelegationEntryAminoMsg): _88.UnbondingDelegationEntry;
                toAminoMsg(message: _88.UnbondingDelegationEntry): _88.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _88.UnbondingDelegationEntryProtoMsg): _88.UnbondingDelegationEntry;
                toProto(message: _88.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _88.UnbondingDelegationEntry): _88.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                encode(message: _88.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.RedelegationEntry;
                fromJSON(object: any): _88.RedelegationEntry;
                toJSON(message: _88.RedelegationEntry): unknown;
                fromPartial(object: Partial<_88.RedelegationEntry>): _88.RedelegationEntry;
                fromAmino(object: _88.RedelegationEntryAmino): _88.RedelegationEntry;
                toAmino(message: _88.RedelegationEntry): _88.RedelegationEntryAmino;
                fromAminoMsg(object: _88.RedelegationEntryAminoMsg): _88.RedelegationEntry;
                toAminoMsg(message: _88.RedelegationEntry): _88.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _88.RedelegationEntryProtoMsg): _88.RedelegationEntry;
                toProto(message: _88.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _88.RedelegationEntry): _88.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                encode(message: _88.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.Redelegation;
                fromJSON(object: any): _88.Redelegation;
                toJSON(message: _88.Redelegation): unknown;
                fromPartial(object: Partial<_88.Redelegation>): _88.Redelegation;
                fromAmino(object: _88.RedelegationAmino): _88.Redelegation;
                toAmino(message: _88.Redelegation): _88.RedelegationAmino;
                fromAminoMsg(object: _88.RedelegationAminoMsg): _88.Redelegation;
                toAminoMsg(message: _88.Redelegation): _88.RedelegationAminoMsg;
                fromProtoMsg(message: _88.RedelegationProtoMsg): _88.Redelegation;
                toProto(message: _88.Redelegation): Uint8Array;
                toProtoMsg(message: _88.Redelegation): _88.RedelegationProtoMsg;
            };
            Params: {
                encode(message: _88.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.Params;
                fromJSON(object: any): _88.Params;
                toJSON(message: _88.Params): unknown;
                fromPartial(object: Partial<_88.Params>): _88.Params;
                fromAmino(object: _88.ParamsAmino): _88.Params;
                toAmino(message: _88.Params): _88.ParamsAmino;
                fromAminoMsg(object: _88.ParamsAminoMsg): _88.Params;
                toAminoMsg(message: _88.Params): _88.ParamsAminoMsg;
                fromProtoMsg(message: _88.ParamsProtoMsg): _88.Params;
                toProto(message: _88.Params): Uint8Array;
                toProtoMsg(message: _88.Params): _88.ParamsProtoMsg;
            };
            DelegationResponse: {
                encode(message: _88.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.DelegationResponse;
                fromJSON(object: any): _88.DelegationResponse;
                toJSON(message: _88.DelegationResponse): unknown;
                fromPartial(object: Partial<_88.DelegationResponse>): _88.DelegationResponse;
                fromAmino(object: _88.DelegationResponseAmino): _88.DelegationResponse;
                toAmino(message: _88.DelegationResponse): _88.DelegationResponseAmino;
                fromAminoMsg(object: _88.DelegationResponseAminoMsg): _88.DelegationResponse;
                toAminoMsg(message: _88.DelegationResponse): _88.DelegationResponseAminoMsg;
                fromProtoMsg(message: _88.DelegationResponseProtoMsg): _88.DelegationResponse;
                toProto(message: _88.DelegationResponse): Uint8Array;
                toProtoMsg(message: _88.DelegationResponse): _88.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                encode(message: _88.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.RedelegationEntryResponse;
                fromJSON(object: any): _88.RedelegationEntryResponse;
                toJSON(message: _88.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_88.RedelegationEntryResponse>): _88.RedelegationEntryResponse;
                fromAmino(object: _88.RedelegationEntryResponseAmino): _88.RedelegationEntryResponse;
                toAmino(message: _88.RedelegationEntryResponse): _88.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _88.RedelegationEntryResponseAminoMsg): _88.RedelegationEntryResponse;
                toAminoMsg(message: _88.RedelegationEntryResponse): _88.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _88.RedelegationEntryResponseProtoMsg): _88.RedelegationEntryResponse;
                toProto(message: _88.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _88.RedelegationEntryResponse): _88.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                encode(message: _88.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.RedelegationResponse;
                fromJSON(object: any): _88.RedelegationResponse;
                toJSON(message: _88.RedelegationResponse): unknown;
                fromPartial(object: Partial<_88.RedelegationResponse>): _88.RedelegationResponse;
                fromAmino(object: _88.RedelegationResponseAmino): _88.RedelegationResponse;
                toAmino(message: _88.RedelegationResponse): _88.RedelegationResponseAmino;
                fromAminoMsg(object: _88.RedelegationResponseAminoMsg): _88.RedelegationResponse;
                toAminoMsg(message: _88.RedelegationResponse): _88.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _88.RedelegationResponseProtoMsg): _88.RedelegationResponse;
                toProto(message: _88.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _88.RedelegationResponse): _88.RedelegationResponseProtoMsg;
            };
            Pool: {
                encode(message: _88.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.Pool;
                fromJSON(object: any): _88.Pool;
                toJSON(message: _88.Pool): unknown;
                fromPartial(object: Partial<_88.Pool>): _88.Pool;
                fromAmino(object: _88.PoolAmino): _88.Pool;
                toAmino(message: _88.Pool): _88.PoolAmino;
                fromAminoMsg(object: _88.PoolAminoMsg): _88.Pool;
                toAminoMsg(message: _88.Pool): _88.PoolAminoMsg;
                fromProtoMsg(message: _88.PoolProtoMsg): _88.Pool;
                toProto(message: _88.Pool): Uint8Array;
                toProtoMsg(message: _88.Pool): _88.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                encode(message: _87.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryValidatorsRequest;
                fromJSON(object: any): _87.QueryValidatorsRequest;
                toJSON(message: _87.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_87.QueryValidatorsRequest>): _87.QueryValidatorsRequest;
                fromAmino(object: _87.QueryValidatorsRequestAmino): _87.QueryValidatorsRequest;
                toAmino(message: _87.QueryValidatorsRequest): _87.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _87.QueryValidatorsRequestAminoMsg): _87.QueryValidatorsRequest;
                toAminoMsg(message: _87.QueryValidatorsRequest): _87.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryValidatorsRequestProtoMsg): _87.QueryValidatorsRequest;
                toProto(message: _87.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryValidatorsRequest): _87.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                encode(message: _87.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryValidatorsResponse;
                fromJSON(object: any): _87.QueryValidatorsResponse;
                toJSON(message: _87.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_87.QueryValidatorsResponse>): _87.QueryValidatorsResponse;
                fromAmino(object: _87.QueryValidatorsResponseAmino): _87.QueryValidatorsResponse;
                toAmino(message: _87.QueryValidatorsResponse): _87.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _87.QueryValidatorsResponseAminoMsg): _87.QueryValidatorsResponse;
                toAminoMsg(message: _87.QueryValidatorsResponse): _87.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryValidatorsResponseProtoMsg): _87.QueryValidatorsResponse;
                toProto(message: _87.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryValidatorsResponse): _87.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                encode(message: _87.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryValidatorRequest;
                fromJSON(object: any): _87.QueryValidatorRequest;
                toJSON(message: _87.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_87.QueryValidatorRequest>): _87.QueryValidatorRequest;
                fromAmino(object: _87.QueryValidatorRequestAmino): _87.QueryValidatorRequest;
                toAmino(message: _87.QueryValidatorRequest): _87.QueryValidatorRequestAmino;
                fromAminoMsg(object: _87.QueryValidatorRequestAminoMsg): _87.QueryValidatorRequest;
                toAminoMsg(message: _87.QueryValidatorRequest): _87.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _87.QueryValidatorRequestProtoMsg): _87.QueryValidatorRequest;
                toProto(message: _87.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _87.QueryValidatorRequest): _87.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                encode(message: _87.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryValidatorResponse;
                fromJSON(object: any): _87.QueryValidatorResponse;
                toJSON(message: _87.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_87.QueryValidatorResponse>): _87.QueryValidatorResponse;
                fromAmino(object: _87.QueryValidatorResponseAmino): _87.QueryValidatorResponse;
                toAmino(message: _87.QueryValidatorResponse): _87.QueryValidatorResponseAmino;
                fromAminoMsg(object: _87.QueryValidatorResponseAminoMsg): _87.QueryValidatorResponse;
                toAminoMsg(message: _87.QueryValidatorResponse): _87.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _87.QueryValidatorResponseProtoMsg): _87.QueryValidatorResponse;
                toProto(message: _87.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _87.QueryValidatorResponse): _87.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _87.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _87.QueryValidatorDelegationsRequest;
                toJSON(message: _87.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_87.QueryValidatorDelegationsRequest>): _87.QueryValidatorDelegationsRequest;
                fromAmino(object: _87.QueryValidatorDelegationsRequestAmino): _87.QueryValidatorDelegationsRequest;
                toAmino(message: _87.QueryValidatorDelegationsRequest): _87.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _87.QueryValidatorDelegationsRequestAminoMsg): _87.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _87.QueryValidatorDelegationsRequest): _87.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryValidatorDelegationsRequestProtoMsg): _87.QueryValidatorDelegationsRequest;
                toProto(message: _87.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryValidatorDelegationsRequest): _87.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _87.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _87.QueryValidatorDelegationsResponse;
                toJSON(message: _87.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_87.QueryValidatorDelegationsResponse>): _87.QueryValidatorDelegationsResponse;
                fromAmino(object: _87.QueryValidatorDelegationsResponseAmino): _87.QueryValidatorDelegationsResponse;
                toAmino(message: _87.QueryValidatorDelegationsResponse): _87.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _87.QueryValidatorDelegationsResponseAminoMsg): _87.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _87.QueryValidatorDelegationsResponse): _87.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryValidatorDelegationsResponseProtoMsg): _87.QueryValidatorDelegationsResponse;
                toProto(message: _87.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryValidatorDelegationsResponse): _87.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _87.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _87.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _87.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_87.QueryValidatorUnbondingDelegationsRequest>): _87.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _87.QueryValidatorUnbondingDelegationsRequestAmino): _87.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _87.QueryValidatorUnbondingDelegationsRequest): _87.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _87.QueryValidatorUnbondingDelegationsRequestAminoMsg): _87.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _87.QueryValidatorUnbondingDelegationsRequest): _87.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryValidatorUnbondingDelegationsRequestProtoMsg): _87.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _87.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryValidatorUnbondingDelegationsRequest): _87.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _87.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _87.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _87.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_87.QueryValidatorUnbondingDelegationsResponse>): _87.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _87.QueryValidatorUnbondingDelegationsResponseAmino): _87.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _87.QueryValidatorUnbondingDelegationsResponse): _87.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _87.QueryValidatorUnbondingDelegationsResponseAminoMsg): _87.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _87.QueryValidatorUnbondingDelegationsResponse): _87.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryValidatorUnbondingDelegationsResponseProtoMsg): _87.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _87.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryValidatorUnbondingDelegationsResponse): _87.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                encode(message: _87.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegationRequest;
                fromJSON(object: any): _87.QueryDelegationRequest;
                toJSON(message: _87.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegationRequest>): _87.QueryDelegationRequest;
                fromAmino(object: _87.QueryDelegationRequestAmino): _87.QueryDelegationRequest;
                toAmino(message: _87.QueryDelegationRequest): _87.QueryDelegationRequestAmino;
                fromAminoMsg(object: _87.QueryDelegationRequestAminoMsg): _87.QueryDelegationRequest;
                toAminoMsg(message: _87.QueryDelegationRequest): _87.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _87.QueryDelegationRequestProtoMsg): _87.QueryDelegationRequest;
                toProto(message: _87.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDelegationRequest): _87.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                encode(message: _87.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegationResponse;
                fromJSON(object: any): _87.QueryDelegationResponse;
                toJSON(message: _87.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegationResponse>): _87.QueryDelegationResponse;
                fromAmino(object: _87.QueryDelegationResponseAmino): _87.QueryDelegationResponse;
                toAmino(message: _87.QueryDelegationResponse): _87.QueryDelegationResponseAmino;
                fromAminoMsg(object: _87.QueryDelegationResponseAminoMsg): _87.QueryDelegationResponse;
                toAminoMsg(message: _87.QueryDelegationResponse): _87.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _87.QueryDelegationResponseProtoMsg): _87.QueryDelegationResponse;
                toProto(message: _87.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _87.QueryDelegationResponse): _87.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _87.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _87.QueryUnbondingDelegationRequest;
                toJSON(message: _87.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_87.QueryUnbondingDelegationRequest>): _87.QueryUnbondingDelegationRequest;
                fromAmino(object: _87.QueryUnbondingDelegationRequestAmino): _87.QueryUnbondingDelegationRequest;
                toAmino(message: _87.QueryUnbondingDelegationRequest): _87.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _87.QueryUnbondingDelegationRequestAminoMsg): _87.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _87.QueryUnbondingDelegationRequest): _87.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _87.QueryUnbondingDelegationRequestProtoMsg): _87.QueryUnbondingDelegationRequest;
                toProto(message: _87.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _87.QueryUnbondingDelegationRequest): _87.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _87.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _87.QueryUnbondingDelegationResponse;
                toJSON(message: _87.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_87.QueryUnbondingDelegationResponse>): _87.QueryUnbondingDelegationResponse;
                fromAmino(object: _87.QueryUnbondingDelegationResponseAmino): _87.QueryUnbondingDelegationResponse;
                toAmino(message: _87.QueryUnbondingDelegationResponse): _87.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _87.QueryUnbondingDelegationResponseAminoMsg): _87.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _87.QueryUnbondingDelegationResponse): _87.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _87.QueryUnbondingDelegationResponseProtoMsg): _87.QueryUnbondingDelegationResponse;
                toProto(message: _87.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _87.QueryUnbondingDelegationResponse): _87.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _87.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _87.QueryDelegatorDelegationsRequest;
                toJSON(message: _87.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorDelegationsRequest>): _87.QueryDelegatorDelegationsRequest;
                fromAmino(object: _87.QueryDelegatorDelegationsRequestAmino): _87.QueryDelegatorDelegationsRequest;
                toAmino(message: _87.QueryDelegatorDelegationsRequest): _87.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _87.QueryDelegatorDelegationsRequestAminoMsg): _87.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _87.QueryDelegatorDelegationsRequest): _87.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryDelegatorDelegationsRequestProtoMsg): _87.QueryDelegatorDelegationsRequest;
                toProto(message: _87.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDelegatorDelegationsRequest): _87.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _87.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _87.QueryDelegatorDelegationsResponse;
                toJSON(message: _87.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorDelegationsResponse>): _87.QueryDelegatorDelegationsResponse;
                fromAmino(object: _87.QueryDelegatorDelegationsResponseAmino): _87.QueryDelegatorDelegationsResponse;
                toAmino(message: _87.QueryDelegatorDelegationsResponse): _87.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _87.QueryDelegatorDelegationsResponseAminoMsg): _87.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _87.QueryDelegatorDelegationsResponse): _87.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryDelegatorDelegationsResponseProtoMsg): _87.QueryDelegatorDelegationsResponse;
                toProto(message: _87.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryDelegatorDelegationsResponse): _87.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _87.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _87.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _87.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorUnbondingDelegationsRequest>): _87.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _87.QueryDelegatorUnbondingDelegationsRequestAmino): _87.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _87.QueryDelegatorUnbondingDelegationsRequest): _87.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _87.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _87.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _87.QueryDelegatorUnbondingDelegationsRequest): _87.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _87.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _87.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDelegatorUnbondingDelegationsRequest): _87.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _87.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _87.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _87.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorUnbondingDelegationsResponse>): _87.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _87.QueryDelegatorUnbondingDelegationsResponseAmino): _87.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _87.QueryDelegatorUnbondingDelegationsResponse): _87.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _87.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _87.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _87.QueryDelegatorUnbondingDelegationsResponse): _87.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _87.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _87.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryDelegatorUnbondingDelegationsResponse): _87.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                encode(message: _87.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryRedelegationsRequest;
                fromJSON(object: any): _87.QueryRedelegationsRequest;
                toJSON(message: _87.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_87.QueryRedelegationsRequest>): _87.QueryRedelegationsRequest;
                fromAmino(object: _87.QueryRedelegationsRequestAmino): _87.QueryRedelegationsRequest;
                toAmino(message: _87.QueryRedelegationsRequest): _87.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _87.QueryRedelegationsRequestAminoMsg): _87.QueryRedelegationsRequest;
                toAminoMsg(message: _87.QueryRedelegationsRequest): _87.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryRedelegationsRequestProtoMsg): _87.QueryRedelegationsRequest;
                toProto(message: _87.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryRedelegationsRequest): _87.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                encode(message: _87.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryRedelegationsResponse;
                fromJSON(object: any): _87.QueryRedelegationsResponse;
                toJSON(message: _87.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_87.QueryRedelegationsResponse>): _87.QueryRedelegationsResponse;
                fromAmino(object: _87.QueryRedelegationsResponseAmino): _87.QueryRedelegationsResponse;
                toAmino(message: _87.QueryRedelegationsResponse): _87.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _87.QueryRedelegationsResponseAminoMsg): _87.QueryRedelegationsResponse;
                toAminoMsg(message: _87.QueryRedelegationsResponse): _87.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryRedelegationsResponseProtoMsg): _87.QueryRedelegationsResponse;
                toProto(message: _87.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryRedelegationsResponse): _87.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _87.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _87.QueryDelegatorValidatorsRequest;
                toJSON(message: _87.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorValidatorsRequest>): _87.QueryDelegatorValidatorsRequest;
                fromAmino(object: _87.QueryDelegatorValidatorsRequestAmino): _87.QueryDelegatorValidatorsRequest;
                toAmino(message: _87.QueryDelegatorValidatorsRequest): _87.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _87.QueryDelegatorValidatorsRequestAminoMsg): _87.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _87.QueryDelegatorValidatorsRequest): _87.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryDelegatorValidatorsRequestProtoMsg): _87.QueryDelegatorValidatorsRequest;
                toProto(message: _87.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDelegatorValidatorsRequest): _87.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _87.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _87.QueryDelegatorValidatorsResponse;
                toJSON(message: _87.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorValidatorsResponse>): _87.QueryDelegatorValidatorsResponse;
                fromAmino(object: _87.QueryDelegatorValidatorsResponseAmino): _87.QueryDelegatorValidatorsResponse;
                toAmino(message: _87.QueryDelegatorValidatorsResponse): _87.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _87.QueryDelegatorValidatorsResponseAminoMsg): _87.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _87.QueryDelegatorValidatorsResponse): _87.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryDelegatorValidatorsResponseProtoMsg): _87.QueryDelegatorValidatorsResponse;
                toProto(message: _87.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryDelegatorValidatorsResponse): _87.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _87.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _87.QueryDelegatorValidatorRequest;
                toJSON(message: _87.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorValidatorRequest>): _87.QueryDelegatorValidatorRequest;
                fromAmino(object: _87.QueryDelegatorValidatorRequestAmino): _87.QueryDelegatorValidatorRequest;
                toAmino(message: _87.QueryDelegatorValidatorRequest): _87.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _87.QueryDelegatorValidatorRequestAminoMsg): _87.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _87.QueryDelegatorValidatorRequest): _87.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _87.QueryDelegatorValidatorRequestProtoMsg): _87.QueryDelegatorValidatorRequest;
                toProto(message: _87.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDelegatorValidatorRequest): _87.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _87.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _87.QueryDelegatorValidatorResponse;
                toJSON(message: _87.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorValidatorResponse>): _87.QueryDelegatorValidatorResponse;
                fromAmino(object: _87.QueryDelegatorValidatorResponseAmino): _87.QueryDelegatorValidatorResponse;
                toAmino(message: _87.QueryDelegatorValidatorResponse): _87.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _87.QueryDelegatorValidatorResponseAminoMsg): _87.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _87.QueryDelegatorValidatorResponse): _87.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _87.QueryDelegatorValidatorResponseProtoMsg): _87.QueryDelegatorValidatorResponse;
                toProto(message: _87.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _87.QueryDelegatorValidatorResponse): _87.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _87.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryHistoricalInfoRequest;
                fromJSON(object: any): _87.QueryHistoricalInfoRequest;
                toJSON(message: _87.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_87.QueryHistoricalInfoRequest>): _87.QueryHistoricalInfoRequest;
                fromAmino(object: _87.QueryHistoricalInfoRequestAmino): _87.QueryHistoricalInfoRequest;
                toAmino(message: _87.QueryHistoricalInfoRequest): _87.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _87.QueryHistoricalInfoRequestAminoMsg): _87.QueryHistoricalInfoRequest;
                toAminoMsg(message: _87.QueryHistoricalInfoRequest): _87.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _87.QueryHistoricalInfoRequestProtoMsg): _87.QueryHistoricalInfoRequest;
                toProto(message: _87.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _87.QueryHistoricalInfoRequest): _87.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _87.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryHistoricalInfoResponse;
                fromJSON(object: any): _87.QueryHistoricalInfoResponse;
                toJSON(message: _87.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_87.QueryHistoricalInfoResponse>): _87.QueryHistoricalInfoResponse;
                fromAmino(object: _87.QueryHistoricalInfoResponseAmino): _87.QueryHistoricalInfoResponse;
                toAmino(message: _87.QueryHistoricalInfoResponse): _87.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _87.QueryHistoricalInfoResponseAminoMsg): _87.QueryHistoricalInfoResponse;
                toAminoMsg(message: _87.QueryHistoricalInfoResponse): _87.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _87.QueryHistoricalInfoResponseProtoMsg): _87.QueryHistoricalInfoResponse;
                toProto(message: _87.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _87.QueryHistoricalInfoResponse): _87.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                encode(_: _87.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryPoolRequest;
                fromJSON(_: any): _87.QueryPoolRequest;
                toJSON(_: _87.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_87.QueryPoolRequest>): _87.QueryPoolRequest;
                fromAmino(_: _87.QueryPoolRequestAmino): _87.QueryPoolRequest;
                toAmino(_: _87.QueryPoolRequest): _87.QueryPoolRequestAmino;
                fromAminoMsg(object: _87.QueryPoolRequestAminoMsg): _87.QueryPoolRequest;
                toAminoMsg(message: _87.QueryPoolRequest): _87.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _87.QueryPoolRequestProtoMsg): _87.QueryPoolRequest;
                toProto(message: _87.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _87.QueryPoolRequest): _87.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                encode(message: _87.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryPoolResponse;
                fromJSON(object: any): _87.QueryPoolResponse;
                toJSON(message: _87.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_87.QueryPoolResponse>): _87.QueryPoolResponse;
                fromAmino(object: _87.QueryPoolResponseAmino): _87.QueryPoolResponse;
                toAmino(message: _87.QueryPoolResponse): _87.QueryPoolResponseAmino;
                fromAminoMsg(object: _87.QueryPoolResponseAminoMsg): _87.QueryPoolResponse;
                toAminoMsg(message: _87.QueryPoolResponse): _87.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _87.QueryPoolResponseProtoMsg): _87.QueryPoolResponse;
                toProto(message: _87.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _87.QueryPoolResponse): _87.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _87.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryParamsRequest;
                fromJSON(_: any): _87.QueryParamsRequest;
                toJSON(_: _87.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_87.QueryParamsRequest>): _87.QueryParamsRequest;
                fromAmino(_: _87.QueryParamsRequestAmino): _87.QueryParamsRequest;
                toAmino(_: _87.QueryParamsRequest): _87.QueryParamsRequestAmino;
                fromAminoMsg(object: _87.QueryParamsRequestAminoMsg): _87.QueryParamsRequest;
                toAminoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryParamsRequestProtoMsg): _87.QueryParamsRequest;
                toProto(message: _87.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _87.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryParamsResponse;
                fromJSON(object: any): _87.QueryParamsResponse;
                toJSON(message: _87.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_87.QueryParamsResponse>): _87.QueryParamsResponse;
                fromAmino(object: _87.QueryParamsResponseAmino): _87.QueryParamsResponse;
                toAmino(message: _87.QueryParamsResponse): _87.QueryParamsResponseAmino;
                fromAminoMsg(object: _87.QueryParamsResponseAminoMsg): _87.QueryParamsResponse;
                toAminoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryParamsResponseProtoMsg): _87.QueryParamsResponse;
                toProto(message: _87.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _86.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _86.GenesisState;
                fromJSON(object: any): _86.GenesisState;
                toJSON(message: _86.GenesisState): unknown;
                fromPartial(object: Partial<_86.GenesisState>): _86.GenesisState;
                fromAmino(object: _86.GenesisStateAmino): _86.GenesisState;
                toAmino(message: _86.GenesisState): _86.GenesisStateAmino;
                fromAminoMsg(object: _86.GenesisStateAminoMsg): _86.GenesisState;
                toAminoMsg(message: _86.GenesisState): _86.GenesisStateAminoMsg;
                fromProtoMsg(message: _86.GenesisStateProtoMsg): _86.GenesisState;
                toProto(message: _86.GenesisState): Uint8Array;
                toProtoMsg(message: _86.GenesisState): _86.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                encode(message: _86.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _86.LastValidatorPower;
                fromJSON(object: any): _86.LastValidatorPower;
                toJSON(message: _86.LastValidatorPower): unknown;
                fromPartial(object: Partial<_86.LastValidatorPower>): _86.LastValidatorPower;
                fromAmino(object: _86.LastValidatorPowerAmino): _86.LastValidatorPower;
                toAmino(message: _86.LastValidatorPower): _86.LastValidatorPowerAmino;
                fromAminoMsg(object: _86.LastValidatorPowerAminoMsg): _86.LastValidatorPower;
                toAminoMsg(message: _86.LastValidatorPower): _86.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _86.LastValidatorPowerProtoMsg): _86.LastValidatorPower;
                toProto(message: _86.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _86.LastValidatorPower): _86.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _85.AuthorizationType;
            authorizationTypeToJSON(object: _85.AuthorizationType): string;
            AuthorizationType: typeof _85.AuthorizationType;
            AuthorizationTypeSDKType: typeof _85.AuthorizationType;
            AuthorizationTypeAmino: typeof _85.AuthorizationType;
            StakeAuthorization: {
                encode(message: _85.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _85.StakeAuthorization;
                fromJSON(object: any): _85.StakeAuthorization;
                toJSON(message: _85.StakeAuthorization): unknown;
                fromPartial(object: Partial<_85.StakeAuthorization>): _85.StakeAuthorization;
                fromAmino(object: _85.StakeAuthorizationAmino): _85.StakeAuthorization;
                toAmino(message: _85.StakeAuthorization): _85.StakeAuthorizationAmino;
                fromAminoMsg(object: _85.StakeAuthorizationAminoMsg): _85.StakeAuthorization;
                toAminoMsg(message: _85.StakeAuthorization): _85.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _85.StakeAuthorizationProtoMsg): _85.StakeAuthorization;
                toProto(message: _85.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _85.StakeAuthorization): _85.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                encode(message: _85.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _85.StakeAuthorization_Validators;
                fromJSON(object: any): _85.StakeAuthorization_Validators;
                toJSON(message: _85.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_85.StakeAuthorization_Validators>): _85.StakeAuthorization_Validators;
                fromAmino(object: _85.StakeAuthorization_ValidatorsAmino): _85.StakeAuthorization_Validators;
                toAmino(message: _85.StakeAuthorization_Validators): _85.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _85.StakeAuthorization_ValidatorsAminoMsg): _85.StakeAuthorization_Validators;
                toAminoMsg(message: _85.StakeAuthorization_Validators): _85.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _85.StakeAuthorization_ValidatorsProtoMsg): _85.StakeAuthorization_Validators;
                toProto(message: _85.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _85.StakeAuthorization_Validators): _85.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _90.SignMode;
                signModeToJSON(object: _90.SignMode): string;
                SignMode: typeof _90.SignMode;
                SignModeSDKType: typeof _90.SignMode;
                SignModeAmino: typeof _90.SignMode;
                SignatureDescriptors: {
                    encode(message: _90.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.SignatureDescriptors;
                    fromJSON(object: any): _90.SignatureDescriptors;
                    toJSON(message: _90.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_90.SignatureDescriptors>): _90.SignatureDescriptors;
                    fromAmino(object: _90.SignatureDescriptorsAmino): _90.SignatureDescriptors;
                    toAmino(message: _90.SignatureDescriptors): _90.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _90.SignatureDescriptorsAminoMsg): _90.SignatureDescriptors;
                    toAminoMsg(message: _90.SignatureDescriptors): _90.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _90.SignatureDescriptorsProtoMsg): _90.SignatureDescriptors;
                    toProto(message: _90.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _90.SignatureDescriptors): _90.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    encode(message: _90.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.SignatureDescriptor;
                    fromJSON(object: any): _90.SignatureDescriptor;
                    toJSON(message: _90.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_90.SignatureDescriptor>): _90.SignatureDescriptor;
                    fromAmino(object: _90.SignatureDescriptorAmino): _90.SignatureDescriptor;
                    toAmino(message: _90.SignatureDescriptor): _90.SignatureDescriptorAmino;
                    fromAminoMsg(object: _90.SignatureDescriptorAminoMsg): _90.SignatureDescriptor;
                    toAminoMsg(message: _90.SignatureDescriptor): _90.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _90.SignatureDescriptorProtoMsg): _90.SignatureDescriptor;
                    toProto(message: _90.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _90.SignatureDescriptor): _90.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    encode(message: _90.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.SignatureDescriptor_Data;
                    fromJSON(object: any): _90.SignatureDescriptor_Data;
                    toJSON(message: _90.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_90.SignatureDescriptor_Data>): _90.SignatureDescriptor_Data;
                    fromAmino(object: _90.SignatureDescriptor_DataAmino): _90.SignatureDescriptor_Data;
                    toAmino(message: _90.SignatureDescriptor_Data): _90.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _90.SignatureDescriptor_DataAminoMsg): _90.SignatureDescriptor_Data;
                    toAminoMsg(message: _90.SignatureDescriptor_Data): _90.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _90.SignatureDescriptor_DataProtoMsg): _90.SignatureDescriptor_Data;
                    toProto(message: _90.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _90.SignatureDescriptor_Data): _90.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _90.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _90.SignatureDescriptor_Data_Single;
                    toJSON(message: _90.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_90.SignatureDescriptor_Data_Single>): _90.SignatureDescriptor_Data_Single;
                    fromAmino(object: _90.SignatureDescriptor_Data_SingleAmino): _90.SignatureDescriptor_Data_Single;
                    toAmino(message: _90.SignatureDescriptor_Data_Single): _90.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _90.SignatureDescriptor_Data_SingleAminoMsg): _90.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _90.SignatureDescriptor_Data_Single): _90.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _90.SignatureDescriptor_Data_SingleProtoMsg): _90.SignatureDescriptor_Data_Single;
                    toProto(message: _90.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _90.SignatureDescriptor_Data_Single): _90.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _90.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _90.SignatureDescriptor_Data_Multi;
                    toJSON(message: _90.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_90.SignatureDescriptor_Data_Multi>): _90.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _90.SignatureDescriptor_Data_MultiAmino): _90.SignatureDescriptor_Data_Multi;
                    toAmino(message: _90.SignatureDescriptor_Data_Multi): _90.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _90.SignatureDescriptor_Data_MultiAminoMsg): _90.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _90.SignatureDescriptor_Data_Multi): _90.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _90.SignatureDescriptor_Data_MultiProtoMsg): _90.SignatureDescriptor_Data_Multi;
                    toProto(message: _90.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _90.SignatureDescriptor_Data_Multi): _90.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _214.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _91.SimulateRequest): Promise<_91.SimulateResponse>;
                getTx(request: _91.GetTxRequest): Promise<_91.GetTxResponse>;
                broadcastTx(request: _91.BroadcastTxRequest): Promise<_91.BroadcastTxResponse>;
                getTxsEvent(request: _91.GetTxsEventRequest): Promise<_91.GetTxsEventResponse>;
                getBlockWithTxs(request: _91.GetBlockWithTxsRequest): Promise<_91.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _195.LCDQueryClient;
            Tx: {
                encode(message: _92.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.Tx;
                fromJSON(object: any): _92.Tx;
                toJSON(message: _92.Tx): unknown;
                fromPartial(object: Partial<_92.Tx>): _92.Tx;
                fromAmino(object: _92.TxAmino): _92.Tx;
                toAmino(message: _92.Tx): _92.TxAmino;
                fromAminoMsg(object: _92.TxAminoMsg): _92.Tx;
                toAminoMsg(message: _92.Tx): _92.TxAminoMsg;
                fromProtoMsg(message: _92.TxProtoMsg): _92.Tx;
                toProto(message: _92.Tx): Uint8Array;
                toProtoMsg(message: _92.Tx): _92.TxProtoMsg;
            };
            TxRaw: {
                encode(message: _92.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.TxRaw;
                fromJSON(object: any): _92.TxRaw;
                toJSON(message: _92.TxRaw): unknown;
                fromPartial(object: Partial<_92.TxRaw>): _92.TxRaw;
                fromAmino(object: _92.TxRawAmino): _92.TxRaw;
                toAmino(message: _92.TxRaw): _92.TxRawAmino;
                fromAminoMsg(object: _92.TxRawAminoMsg): _92.TxRaw;
                toAminoMsg(message: _92.TxRaw): _92.TxRawAminoMsg;
                fromProtoMsg(message: _92.TxRawProtoMsg): _92.TxRaw;
                toProto(message: _92.TxRaw): Uint8Array;
                toProtoMsg(message: _92.TxRaw): _92.TxRawProtoMsg;
            };
            SignDoc: {
                encode(message: _92.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.SignDoc;
                fromJSON(object: any): _92.SignDoc;
                toJSON(message: _92.SignDoc): unknown;
                fromPartial(object: Partial<_92.SignDoc>): _92.SignDoc;
                fromAmino(object: _92.SignDocAmino): _92.SignDoc;
                toAmino(message: _92.SignDoc): _92.SignDocAmino;
                fromAminoMsg(object: _92.SignDocAminoMsg): _92.SignDoc;
                toAminoMsg(message: _92.SignDoc): _92.SignDocAminoMsg;
                fromProtoMsg(message: _92.SignDocProtoMsg): _92.SignDoc;
                toProto(message: _92.SignDoc): Uint8Array;
                toProtoMsg(message: _92.SignDoc): _92.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                encode(message: _92.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.SignDocDirectAux;
                fromJSON(object: any): _92.SignDocDirectAux;
                toJSON(message: _92.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_92.SignDocDirectAux>): _92.SignDocDirectAux;
                fromAmino(object: _92.SignDocDirectAuxAmino): _92.SignDocDirectAux;
                toAmino(message: _92.SignDocDirectAux): _92.SignDocDirectAuxAmino;
                fromAminoMsg(object: _92.SignDocDirectAuxAminoMsg): _92.SignDocDirectAux;
                toAminoMsg(message: _92.SignDocDirectAux): _92.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _92.SignDocDirectAuxProtoMsg): _92.SignDocDirectAux;
                toProto(message: _92.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _92.SignDocDirectAux): _92.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                encode(message: _92.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.TxBody;
                fromJSON(object: any): _92.TxBody;
                toJSON(message: _92.TxBody): unknown;
                fromPartial(object: Partial<_92.TxBody>): _92.TxBody;
                fromAmino(object: _92.TxBodyAmino): _92.TxBody;
                toAmino(message: _92.TxBody): _92.TxBodyAmino;
                fromAminoMsg(object: _92.TxBodyAminoMsg): _92.TxBody;
                toAminoMsg(message: _92.TxBody): _92.TxBodyAminoMsg;
                fromProtoMsg(message: _92.TxBodyProtoMsg): _92.TxBody;
                toProto(message: _92.TxBody): Uint8Array;
                toProtoMsg(message: _92.TxBody): _92.TxBodyProtoMsg;
            };
            AuthInfo: {
                encode(message: _92.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.AuthInfo;
                fromJSON(object: any): _92.AuthInfo;
                toJSON(message: _92.AuthInfo): unknown;
                fromPartial(object: Partial<_92.AuthInfo>): _92.AuthInfo;
                fromAmino(object: _92.AuthInfoAmino): _92.AuthInfo;
                toAmino(message: _92.AuthInfo): _92.AuthInfoAmino;
                fromAminoMsg(object: _92.AuthInfoAminoMsg): _92.AuthInfo;
                toAminoMsg(message: _92.AuthInfo): _92.AuthInfoAminoMsg;
                fromProtoMsg(message: _92.AuthInfoProtoMsg): _92.AuthInfo;
                toProto(message: _92.AuthInfo): Uint8Array;
                toProtoMsg(message: _92.AuthInfo): _92.AuthInfoProtoMsg;
            };
            SignerInfo: {
                encode(message: _92.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.SignerInfo;
                fromJSON(object: any): _92.SignerInfo;
                toJSON(message: _92.SignerInfo): unknown;
                fromPartial(object: Partial<_92.SignerInfo>): _92.SignerInfo;
                fromAmino(object: _92.SignerInfoAmino): _92.SignerInfo;
                toAmino(message: _92.SignerInfo): _92.SignerInfoAmino;
                fromAminoMsg(object: _92.SignerInfoAminoMsg): _92.SignerInfo;
                toAminoMsg(message: _92.SignerInfo): _92.SignerInfoAminoMsg;
                fromProtoMsg(message: _92.SignerInfoProtoMsg): _92.SignerInfo;
                toProto(message: _92.SignerInfo): Uint8Array;
                toProtoMsg(message: _92.SignerInfo): _92.SignerInfoProtoMsg;
            };
            ModeInfo: {
                encode(message: _92.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.ModeInfo;
                fromJSON(object: any): _92.ModeInfo;
                toJSON(message: _92.ModeInfo): unknown;
                fromPartial(object: Partial<_92.ModeInfo>): _92.ModeInfo;
                fromAmino(object: _92.ModeInfoAmino): _92.ModeInfo;
                toAmino(message: _92.ModeInfo): _92.ModeInfoAmino;
                fromAminoMsg(object: _92.ModeInfoAminoMsg): _92.ModeInfo;
                toAminoMsg(message: _92.ModeInfo): _92.ModeInfoAminoMsg;
                fromProtoMsg(message: _92.ModeInfoProtoMsg): _92.ModeInfo;
                toProto(message: _92.ModeInfo): Uint8Array;
                toProtoMsg(message: _92.ModeInfo): _92.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                encode(message: _92.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.ModeInfo_Single;
                fromJSON(object: any): _92.ModeInfo_Single;
                toJSON(message: _92.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_92.ModeInfo_Single>): _92.ModeInfo_Single;
                fromAmino(object: _92.ModeInfo_SingleAmino): _92.ModeInfo_Single;
                toAmino(message: _92.ModeInfo_Single): _92.ModeInfo_SingleAmino;
                fromAminoMsg(object: _92.ModeInfo_SingleAminoMsg): _92.ModeInfo_Single;
                toAminoMsg(message: _92.ModeInfo_Single): _92.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _92.ModeInfo_SingleProtoMsg): _92.ModeInfo_Single;
                toProto(message: _92.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _92.ModeInfo_Single): _92.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                encode(message: _92.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.ModeInfo_Multi;
                fromJSON(object: any): _92.ModeInfo_Multi;
                toJSON(message: _92.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_92.ModeInfo_Multi>): _92.ModeInfo_Multi;
                fromAmino(object: _92.ModeInfo_MultiAmino): _92.ModeInfo_Multi;
                toAmino(message: _92.ModeInfo_Multi): _92.ModeInfo_MultiAmino;
                fromAminoMsg(object: _92.ModeInfo_MultiAminoMsg): _92.ModeInfo_Multi;
                toAminoMsg(message: _92.ModeInfo_Multi): _92.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _92.ModeInfo_MultiProtoMsg): _92.ModeInfo_Multi;
                toProto(message: _92.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _92.ModeInfo_Multi): _92.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                encode(message: _92.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.Fee;
                fromJSON(object: any): _92.Fee;
                toJSON(message: _92.Fee): unknown;
                fromPartial(object: Partial<_92.Fee>): _92.Fee;
                fromAmino(object: _92.FeeAmino): _92.Fee;
                toAmino(message: _92.Fee): _92.FeeAmino;
                fromAminoMsg(object: _92.FeeAminoMsg): _92.Fee;
                toAminoMsg(message: _92.Fee): _92.FeeAminoMsg;
                fromProtoMsg(message: _92.FeeProtoMsg): _92.Fee;
                toProto(message: _92.Fee): Uint8Array;
                toProtoMsg(message: _92.Fee): _92.FeeProtoMsg;
            };
            Tip: {
                encode(message: _92.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.Tip;
                fromJSON(object: any): _92.Tip;
                toJSON(message: _92.Tip): unknown;
                fromPartial(object: Partial<_92.Tip>): _92.Tip;
                fromAmino(object: _92.TipAmino): _92.Tip;
                toAmino(message: _92.Tip): _92.TipAmino;
                fromAminoMsg(object: _92.TipAminoMsg): _92.Tip;
                toAminoMsg(message: _92.Tip): _92.TipAminoMsg;
                fromProtoMsg(message: _92.TipProtoMsg): _92.Tip;
                toProto(message: _92.Tip): Uint8Array;
                toProtoMsg(message: _92.Tip): _92.TipProtoMsg;
            };
            AuxSignerData: {
                encode(message: _92.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.AuxSignerData;
                fromJSON(object: any): _92.AuxSignerData;
                toJSON(message: _92.AuxSignerData): unknown;
                fromPartial(object: Partial<_92.AuxSignerData>): _92.AuxSignerData;
                fromAmino(object: _92.AuxSignerDataAmino): _92.AuxSignerData;
                toAmino(message: _92.AuxSignerData): _92.AuxSignerDataAmino;
                fromAminoMsg(object: _92.AuxSignerDataAminoMsg): _92.AuxSignerData;
                toAminoMsg(message: _92.AuxSignerData): _92.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _92.AuxSignerDataProtoMsg): _92.AuxSignerData;
                toProto(message: _92.AuxSignerData): Uint8Array;
                toProtoMsg(message: _92.AuxSignerData): _92.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _91.OrderBy;
            orderByToJSON(object: _91.OrderBy): string;
            broadcastModeFromJSON(object: any): _91.BroadcastMode;
            broadcastModeToJSON(object: _91.BroadcastMode): string;
            OrderBy: typeof _91.OrderBy;
            OrderBySDKType: typeof _91.OrderBy;
            OrderByAmino: typeof _91.OrderBy;
            BroadcastMode: typeof _91.BroadcastMode;
            BroadcastModeSDKType: typeof _91.BroadcastMode;
            BroadcastModeAmino: typeof _91.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _91.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.GetTxsEventRequest;
                fromJSON(object: any): _91.GetTxsEventRequest;
                toJSON(message: _91.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_91.GetTxsEventRequest>): _91.GetTxsEventRequest;
                fromAmino(object: _91.GetTxsEventRequestAmino): _91.GetTxsEventRequest;
                toAmino(message: _91.GetTxsEventRequest): _91.GetTxsEventRequestAmino;
                fromAminoMsg(object: _91.GetTxsEventRequestAminoMsg): _91.GetTxsEventRequest;
                toAminoMsg(message: _91.GetTxsEventRequest): _91.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _91.GetTxsEventRequestProtoMsg): _91.GetTxsEventRequest;
                toProto(message: _91.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _91.GetTxsEventRequest): _91.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                encode(message: _91.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.GetTxsEventResponse;
                fromJSON(object: any): _91.GetTxsEventResponse;
                toJSON(message: _91.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_91.GetTxsEventResponse>): _91.GetTxsEventResponse;
                fromAmino(object: _91.GetTxsEventResponseAmino): _91.GetTxsEventResponse;
                toAmino(message: _91.GetTxsEventResponse): _91.GetTxsEventResponseAmino;
                fromAminoMsg(object: _91.GetTxsEventResponseAminoMsg): _91.GetTxsEventResponse;
                toAminoMsg(message: _91.GetTxsEventResponse): _91.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _91.GetTxsEventResponseProtoMsg): _91.GetTxsEventResponse;
                toProto(message: _91.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _91.GetTxsEventResponse): _91.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                encode(message: _91.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.BroadcastTxRequest;
                fromJSON(object: any): _91.BroadcastTxRequest;
                toJSON(message: _91.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_91.BroadcastTxRequest>): _91.BroadcastTxRequest;
                fromAmino(object: _91.BroadcastTxRequestAmino): _91.BroadcastTxRequest;
                toAmino(message: _91.BroadcastTxRequest): _91.BroadcastTxRequestAmino;
                fromAminoMsg(object: _91.BroadcastTxRequestAminoMsg): _91.BroadcastTxRequest;
                toAminoMsg(message: _91.BroadcastTxRequest): _91.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _91.BroadcastTxRequestProtoMsg): _91.BroadcastTxRequest;
                toProto(message: _91.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _91.BroadcastTxRequest): _91.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                encode(message: _91.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.BroadcastTxResponse;
                fromJSON(object: any): _91.BroadcastTxResponse;
                toJSON(message: _91.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_91.BroadcastTxResponse>): _91.BroadcastTxResponse;
                fromAmino(object: _91.BroadcastTxResponseAmino): _91.BroadcastTxResponse;
                toAmino(message: _91.BroadcastTxResponse): _91.BroadcastTxResponseAmino;
                fromAminoMsg(object: _91.BroadcastTxResponseAminoMsg): _91.BroadcastTxResponse;
                toAminoMsg(message: _91.BroadcastTxResponse): _91.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _91.BroadcastTxResponseProtoMsg): _91.BroadcastTxResponse;
                toProto(message: _91.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _91.BroadcastTxResponse): _91.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                encode(message: _91.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.SimulateRequest;
                fromJSON(object: any): _91.SimulateRequest;
                toJSON(message: _91.SimulateRequest): unknown;
                fromPartial(object: Partial<_91.SimulateRequest>): _91.SimulateRequest;
                fromAmino(object: _91.SimulateRequestAmino): _91.SimulateRequest;
                toAmino(message: _91.SimulateRequest): _91.SimulateRequestAmino;
                fromAminoMsg(object: _91.SimulateRequestAminoMsg): _91.SimulateRequest;
                toAminoMsg(message: _91.SimulateRequest): _91.SimulateRequestAminoMsg;
                fromProtoMsg(message: _91.SimulateRequestProtoMsg): _91.SimulateRequest;
                toProto(message: _91.SimulateRequest): Uint8Array;
                toProtoMsg(message: _91.SimulateRequest): _91.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                encode(message: _91.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.SimulateResponse;
                fromJSON(object: any): _91.SimulateResponse;
                toJSON(message: _91.SimulateResponse): unknown;
                fromPartial(object: Partial<_91.SimulateResponse>): _91.SimulateResponse;
                fromAmino(object: _91.SimulateResponseAmino): _91.SimulateResponse;
                toAmino(message: _91.SimulateResponse): _91.SimulateResponseAmino;
                fromAminoMsg(object: _91.SimulateResponseAminoMsg): _91.SimulateResponse;
                toAminoMsg(message: _91.SimulateResponse): _91.SimulateResponseAminoMsg;
                fromProtoMsg(message: _91.SimulateResponseProtoMsg): _91.SimulateResponse;
                toProto(message: _91.SimulateResponse): Uint8Array;
                toProtoMsg(message: _91.SimulateResponse): _91.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                encode(message: _91.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.GetTxRequest;
                fromJSON(object: any): _91.GetTxRequest;
                toJSON(message: _91.GetTxRequest): unknown;
                fromPartial(object: Partial<_91.GetTxRequest>): _91.GetTxRequest;
                fromAmino(object: _91.GetTxRequestAmino): _91.GetTxRequest;
                toAmino(message: _91.GetTxRequest): _91.GetTxRequestAmino;
                fromAminoMsg(object: _91.GetTxRequestAminoMsg): _91.GetTxRequest;
                toAminoMsg(message: _91.GetTxRequest): _91.GetTxRequestAminoMsg;
                fromProtoMsg(message: _91.GetTxRequestProtoMsg): _91.GetTxRequest;
                toProto(message: _91.GetTxRequest): Uint8Array;
                toProtoMsg(message: _91.GetTxRequest): _91.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                encode(message: _91.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.GetTxResponse;
                fromJSON(object: any): _91.GetTxResponse;
                toJSON(message: _91.GetTxResponse): unknown;
                fromPartial(object: Partial<_91.GetTxResponse>): _91.GetTxResponse;
                fromAmino(object: _91.GetTxResponseAmino): _91.GetTxResponse;
                toAmino(message: _91.GetTxResponse): _91.GetTxResponseAmino;
                fromAminoMsg(object: _91.GetTxResponseAminoMsg): _91.GetTxResponse;
                toAminoMsg(message: _91.GetTxResponse): _91.GetTxResponseAminoMsg;
                fromProtoMsg(message: _91.GetTxResponseProtoMsg): _91.GetTxResponse;
                toProto(message: _91.GetTxResponse): Uint8Array;
                toProtoMsg(message: _91.GetTxResponse): _91.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                encode(message: _91.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.GetBlockWithTxsRequest;
                fromJSON(object: any): _91.GetBlockWithTxsRequest;
                toJSON(message: _91.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_91.GetBlockWithTxsRequest>): _91.GetBlockWithTxsRequest;
                fromAmino(object: _91.GetBlockWithTxsRequestAmino): _91.GetBlockWithTxsRequest;
                toAmino(message: _91.GetBlockWithTxsRequest): _91.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _91.GetBlockWithTxsRequestAminoMsg): _91.GetBlockWithTxsRequest;
                toAminoMsg(message: _91.GetBlockWithTxsRequest): _91.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _91.GetBlockWithTxsRequestProtoMsg): _91.GetBlockWithTxsRequest;
                toProto(message: _91.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _91.GetBlockWithTxsRequest): _91.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                encode(message: _91.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.GetBlockWithTxsResponse;
                fromJSON(object: any): _91.GetBlockWithTxsResponse;
                toJSON(message: _91.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_91.GetBlockWithTxsResponse>): _91.GetBlockWithTxsResponse;
                fromAmino(object: _91.GetBlockWithTxsResponseAmino): _91.GetBlockWithTxsResponse;
                toAmino(message: _91.GetBlockWithTxsResponse): _91.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _91.GetBlockWithTxsResponseAminoMsg): _91.GetBlockWithTxsResponse;
                toAminoMsg(message: _91.GetBlockWithTxsResponse): _91.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _91.GetBlockWithTxsResponseProtoMsg): _91.GetBlockWithTxsResponse;
                toProto(message: _91.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _91.GetBlockWithTxsResponse): _91.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _228.MsgClientImpl;
            QueryClientImpl: typeof _215.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _93.QueryCurrentPlanRequest | undefined): Promise<_93.QueryCurrentPlanResponse>;
                appliedPlan(request: _93.QueryAppliedPlanRequest): Promise<_93.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _93.QueryUpgradedConsensusStateRequest): Promise<_93.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _93.QueryModuleVersionsRequest): Promise<_93.QueryModuleVersionsResponse>;
                authority(request?: _93.QueryAuthorityRequest | undefined): Promise<_93.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _196.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _94.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _94.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _94.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _94.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _94.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _94.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _94.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _94.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _94.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _94.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _94.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _94.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _94.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _94.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _94.MsgSoftwareUpgrade) => _94.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _94.MsgSoftwareUpgradeAmino) => _94.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _94.MsgCancelUpgrade) => _94.MsgCancelUpgradeAmino;
                    fromAmino: (object: _94.MsgCancelUpgradeAmino) => _94.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _95.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _95.Plan;
                fromJSON(object: any): _95.Plan;
                toJSON(message: _95.Plan): unknown;
                fromPartial(object: Partial<_95.Plan>): _95.Plan;
                fromAmino(object: _95.PlanAmino): _95.Plan;
                toAmino(message: _95.Plan): _95.PlanAmino;
                fromAminoMsg(object: _95.PlanAminoMsg): _95.Plan;
                toAminoMsg(message: _95.Plan): _95.PlanAminoMsg;
                fromProtoMsg(message: _95.PlanProtoMsg): _95.Plan;
                toProto(message: _95.Plan): Uint8Array;
                toProtoMsg(message: _95.Plan): _95.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                encode(message: _95.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _95.SoftwareUpgradeProposal;
                fromJSON(object: any): _95.SoftwareUpgradeProposal;
                toJSON(message: _95.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_95.SoftwareUpgradeProposal>): _95.SoftwareUpgradeProposal;
                fromAmino(object: _95.SoftwareUpgradeProposalAmino): _95.SoftwareUpgradeProposal;
                toAmino(message: _95.SoftwareUpgradeProposal): _95.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _95.SoftwareUpgradeProposalAminoMsg): _95.SoftwareUpgradeProposal;
                toAminoMsg(message: _95.SoftwareUpgradeProposal): _95.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _95.SoftwareUpgradeProposalProtoMsg): _95.SoftwareUpgradeProposal;
                toProto(message: _95.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _95.SoftwareUpgradeProposal): _95.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _95.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _95.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _95.CancelSoftwareUpgradeProposal;
                toJSON(message: _95.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_95.CancelSoftwareUpgradeProposal>): _95.CancelSoftwareUpgradeProposal;
                fromAmino(object: _95.CancelSoftwareUpgradeProposalAmino): _95.CancelSoftwareUpgradeProposal;
                toAmino(message: _95.CancelSoftwareUpgradeProposal): _95.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _95.CancelSoftwareUpgradeProposalAminoMsg): _95.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _95.CancelSoftwareUpgradeProposal): _95.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _95.CancelSoftwareUpgradeProposalProtoMsg): _95.CancelSoftwareUpgradeProposal;
                toProto(message: _95.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _95.CancelSoftwareUpgradeProposal): _95.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                encode(message: _95.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _95.ModuleVersion;
                fromJSON(object: any): _95.ModuleVersion;
                toJSON(message: _95.ModuleVersion): unknown;
                fromPartial(object: Partial<_95.ModuleVersion>): _95.ModuleVersion;
                fromAmino(object: _95.ModuleVersionAmino): _95.ModuleVersion;
                toAmino(message: _95.ModuleVersion): _95.ModuleVersionAmino;
                fromAminoMsg(object: _95.ModuleVersionAminoMsg): _95.ModuleVersion;
                toAminoMsg(message: _95.ModuleVersion): _95.ModuleVersionAminoMsg;
                fromProtoMsg(message: _95.ModuleVersionProtoMsg): _95.ModuleVersion;
                toProto(message: _95.ModuleVersion): Uint8Array;
                toProtoMsg(message: _95.ModuleVersion): _95.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                encode(message: _94.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _94.MsgSoftwareUpgrade;
                fromJSON(object: any): _94.MsgSoftwareUpgrade;
                toJSON(message: _94.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_94.MsgSoftwareUpgrade>): _94.MsgSoftwareUpgrade;
                fromAmino(object: _94.MsgSoftwareUpgradeAmino): _94.MsgSoftwareUpgrade;
                toAmino(message: _94.MsgSoftwareUpgrade): _94.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _94.MsgSoftwareUpgradeAminoMsg): _94.MsgSoftwareUpgrade;
                toAminoMsg(message: _94.MsgSoftwareUpgrade): _94.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _94.MsgSoftwareUpgradeProtoMsg): _94.MsgSoftwareUpgrade;
                toProto(message: _94.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _94.MsgSoftwareUpgrade): _94.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _94.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _94.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _94.MsgSoftwareUpgradeResponse;
                toJSON(_: _94.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_94.MsgSoftwareUpgradeResponse>): _94.MsgSoftwareUpgradeResponse;
                fromAmino(_: _94.MsgSoftwareUpgradeResponseAmino): _94.MsgSoftwareUpgradeResponse;
                toAmino(_: _94.MsgSoftwareUpgradeResponse): _94.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _94.MsgSoftwareUpgradeResponseAminoMsg): _94.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _94.MsgSoftwareUpgradeResponse): _94.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _94.MsgSoftwareUpgradeResponseProtoMsg): _94.MsgSoftwareUpgradeResponse;
                toProto(message: _94.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _94.MsgSoftwareUpgradeResponse): _94.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                encode(message: _94.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _94.MsgCancelUpgrade;
                fromJSON(object: any): _94.MsgCancelUpgrade;
                toJSON(message: _94.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_94.MsgCancelUpgrade>): _94.MsgCancelUpgrade;
                fromAmino(object: _94.MsgCancelUpgradeAmino): _94.MsgCancelUpgrade;
                toAmino(message: _94.MsgCancelUpgrade): _94.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _94.MsgCancelUpgradeAminoMsg): _94.MsgCancelUpgrade;
                toAminoMsg(message: _94.MsgCancelUpgrade): _94.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _94.MsgCancelUpgradeProtoMsg): _94.MsgCancelUpgrade;
                toProto(message: _94.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _94.MsgCancelUpgrade): _94.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _94.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _94.MsgCancelUpgradeResponse;
                fromJSON(_: any): _94.MsgCancelUpgradeResponse;
                toJSON(_: _94.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_94.MsgCancelUpgradeResponse>): _94.MsgCancelUpgradeResponse;
                fromAmino(_: _94.MsgCancelUpgradeResponseAmino): _94.MsgCancelUpgradeResponse;
                toAmino(_: _94.MsgCancelUpgradeResponse): _94.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _94.MsgCancelUpgradeResponseAminoMsg): _94.MsgCancelUpgradeResponse;
                toAminoMsg(message: _94.MsgCancelUpgradeResponse): _94.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _94.MsgCancelUpgradeResponseProtoMsg): _94.MsgCancelUpgradeResponse;
                toProto(message: _94.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _94.MsgCancelUpgradeResponse): _94.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                encode(_: _93.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryCurrentPlanRequest;
                fromJSON(_: any): _93.QueryCurrentPlanRequest;
                toJSON(_: _93.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_93.QueryCurrentPlanRequest>): _93.QueryCurrentPlanRequest;
                fromAmino(_: _93.QueryCurrentPlanRequestAmino): _93.QueryCurrentPlanRequest;
                toAmino(_: _93.QueryCurrentPlanRequest): _93.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _93.QueryCurrentPlanRequestAminoMsg): _93.QueryCurrentPlanRequest;
                toAminoMsg(message: _93.QueryCurrentPlanRequest): _93.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _93.QueryCurrentPlanRequestProtoMsg): _93.QueryCurrentPlanRequest;
                toProto(message: _93.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _93.QueryCurrentPlanRequest): _93.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                encode(message: _93.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryCurrentPlanResponse;
                fromJSON(object: any): _93.QueryCurrentPlanResponse;
                toJSON(message: _93.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_93.QueryCurrentPlanResponse>): _93.QueryCurrentPlanResponse;
                fromAmino(object: _93.QueryCurrentPlanResponseAmino): _93.QueryCurrentPlanResponse;
                toAmino(message: _93.QueryCurrentPlanResponse): _93.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _93.QueryCurrentPlanResponseAminoMsg): _93.QueryCurrentPlanResponse;
                toAminoMsg(message: _93.QueryCurrentPlanResponse): _93.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _93.QueryCurrentPlanResponseProtoMsg): _93.QueryCurrentPlanResponse;
                toProto(message: _93.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _93.QueryCurrentPlanResponse): _93.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                encode(message: _93.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryAppliedPlanRequest;
                fromJSON(object: any): _93.QueryAppliedPlanRequest;
                toJSON(message: _93.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_93.QueryAppliedPlanRequest>): _93.QueryAppliedPlanRequest;
                fromAmino(object: _93.QueryAppliedPlanRequestAmino): _93.QueryAppliedPlanRequest;
                toAmino(message: _93.QueryAppliedPlanRequest): _93.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _93.QueryAppliedPlanRequestAminoMsg): _93.QueryAppliedPlanRequest;
                toAminoMsg(message: _93.QueryAppliedPlanRequest): _93.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _93.QueryAppliedPlanRequestProtoMsg): _93.QueryAppliedPlanRequest;
                toProto(message: _93.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _93.QueryAppliedPlanRequest): _93.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                encode(message: _93.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryAppliedPlanResponse;
                fromJSON(object: any): _93.QueryAppliedPlanResponse;
                toJSON(message: _93.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_93.QueryAppliedPlanResponse>): _93.QueryAppliedPlanResponse;
                fromAmino(object: _93.QueryAppliedPlanResponseAmino): _93.QueryAppliedPlanResponse;
                toAmino(message: _93.QueryAppliedPlanResponse): _93.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _93.QueryAppliedPlanResponseAminoMsg): _93.QueryAppliedPlanResponse;
                toAminoMsg(message: _93.QueryAppliedPlanResponse): _93.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _93.QueryAppliedPlanResponseProtoMsg): _93.QueryAppliedPlanResponse;
                toProto(message: _93.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _93.QueryAppliedPlanResponse): _93.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _93.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _93.QueryUpgradedConsensusStateRequest;
                toJSON(message: _93.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_93.QueryUpgradedConsensusStateRequest>): _93.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _93.QueryUpgradedConsensusStateRequestAmino): _93.QueryUpgradedConsensusStateRequest;
                toAmino(message: _93.QueryUpgradedConsensusStateRequest): _93.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _93.QueryUpgradedConsensusStateRequestAminoMsg): _93.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _93.QueryUpgradedConsensusStateRequest): _93.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _93.QueryUpgradedConsensusStateRequestProtoMsg): _93.QueryUpgradedConsensusStateRequest;
                toProto(message: _93.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _93.QueryUpgradedConsensusStateRequest): _93.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _93.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _93.QueryUpgradedConsensusStateResponse;
                toJSON(message: _93.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_93.QueryUpgradedConsensusStateResponse>): _93.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _93.QueryUpgradedConsensusStateResponseAmino): _93.QueryUpgradedConsensusStateResponse;
                toAmino(message: _93.QueryUpgradedConsensusStateResponse): _93.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _93.QueryUpgradedConsensusStateResponseAminoMsg): _93.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _93.QueryUpgradedConsensusStateResponse): _93.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _93.QueryUpgradedConsensusStateResponseProtoMsg): _93.QueryUpgradedConsensusStateResponse;
                toProto(message: _93.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _93.QueryUpgradedConsensusStateResponse): _93.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                encode(message: _93.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryModuleVersionsRequest;
                fromJSON(object: any): _93.QueryModuleVersionsRequest;
                toJSON(message: _93.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_93.QueryModuleVersionsRequest>): _93.QueryModuleVersionsRequest;
                fromAmino(object: _93.QueryModuleVersionsRequestAmino): _93.QueryModuleVersionsRequest;
                toAmino(message: _93.QueryModuleVersionsRequest): _93.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _93.QueryModuleVersionsRequestAminoMsg): _93.QueryModuleVersionsRequest;
                toAminoMsg(message: _93.QueryModuleVersionsRequest): _93.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _93.QueryModuleVersionsRequestProtoMsg): _93.QueryModuleVersionsRequest;
                toProto(message: _93.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _93.QueryModuleVersionsRequest): _93.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                encode(message: _93.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryModuleVersionsResponse;
                fromJSON(object: any): _93.QueryModuleVersionsResponse;
                toJSON(message: _93.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_93.QueryModuleVersionsResponse>): _93.QueryModuleVersionsResponse;
                fromAmino(object: _93.QueryModuleVersionsResponseAmino): _93.QueryModuleVersionsResponse;
                toAmino(message: _93.QueryModuleVersionsResponse): _93.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _93.QueryModuleVersionsResponseAminoMsg): _93.QueryModuleVersionsResponse;
                toAminoMsg(message: _93.QueryModuleVersionsResponse): _93.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _93.QueryModuleVersionsResponseProtoMsg): _93.QueryModuleVersionsResponse;
                toProto(message: _93.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _93.QueryModuleVersionsResponse): _93.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                encode(_: _93.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryAuthorityRequest;
                fromJSON(_: any): _93.QueryAuthorityRequest;
                toJSON(_: _93.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_93.QueryAuthorityRequest>): _93.QueryAuthorityRequest;
                fromAmino(_: _93.QueryAuthorityRequestAmino): _93.QueryAuthorityRequest;
                toAmino(_: _93.QueryAuthorityRequest): _93.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _93.QueryAuthorityRequestAminoMsg): _93.QueryAuthorityRequest;
                toAminoMsg(message: _93.QueryAuthorityRequest): _93.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _93.QueryAuthorityRequestProtoMsg): _93.QueryAuthorityRequest;
                toProto(message: _93.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _93.QueryAuthorityRequest): _93.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                encode(message: _93.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryAuthorityResponse;
                fromJSON(object: any): _93.QueryAuthorityResponse;
                toJSON(message: _93.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_93.QueryAuthorityResponse>): _93.QueryAuthorityResponse;
                fromAmino(object: _93.QueryAuthorityResponseAmino): _93.QueryAuthorityResponse;
                toAmino(message: _93.QueryAuthorityResponse): _93.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _93.QueryAuthorityResponseAminoMsg): _93.QueryAuthorityResponse;
                toAminoMsg(message: _93.QueryAuthorityResponse): _93.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _93.QueryAuthorityResponseProtoMsg): _93.QueryAuthorityResponse;
                toProto(message: _93.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _93.QueryAuthorityResponse): _93.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _229.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _96.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _96.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _96.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _96.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _96.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _96.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _96.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _96.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _96.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _96.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _96.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _96.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _96.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _96.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _96.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _96.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _96.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _96.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _96.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _96.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _96.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _96.MsgCreateVestingAccount) => _96.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _96.MsgCreateVestingAccountAmino) => _96.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _96.MsgCreatePermanentLockedAccount) => _96.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _96.MsgCreatePermanentLockedAccountAmino) => _96.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _96.MsgCreatePeriodicVestingAccount) => _96.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _96.MsgCreatePeriodicVestingAccountAmino) => _96.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _97.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _97.BaseVestingAccount;
                fromJSON(object: any): _97.BaseVestingAccount;
                toJSON(message: _97.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_97.BaseVestingAccount>): _97.BaseVestingAccount;
                fromAmino(object: _97.BaseVestingAccountAmino): _97.BaseVestingAccount;
                toAmino(message: _97.BaseVestingAccount): _97.BaseVestingAccountAmino;
                fromAminoMsg(object: _97.BaseVestingAccountAminoMsg): _97.BaseVestingAccount;
                toAminoMsg(message: _97.BaseVestingAccount): _97.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _97.BaseVestingAccountProtoMsg): _97.BaseVestingAccount;
                toProto(message: _97.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _97.BaseVestingAccount): _97.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                encode(message: _97.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _97.ContinuousVestingAccount;
                fromJSON(object: any): _97.ContinuousVestingAccount;
                toJSON(message: _97.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_97.ContinuousVestingAccount>): _97.ContinuousVestingAccount;
                fromAmino(object: _97.ContinuousVestingAccountAmino): _97.ContinuousVestingAccount;
                toAmino(message: _97.ContinuousVestingAccount): _97.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _97.ContinuousVestingAccountAminoMsg): _97.ContinuousVestingAccount;
                toAminoMsg(message: _97.ContinuousVestingAccount): _97.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _97.ContinuousVestingAccountProtoMsg): _97.ContinuousVestingAccount;
                toProto(message: _97.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _97.ContinuousVestingAccount): _97.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                encode(message: _97.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _97.DelayedVestingAccount;
                fromJSON(object: any): _97.DelayedVestingAccount;
                toJSON(message: _97.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_97.DelayedVestingAccount>): _97.DelayedVestingAccount;
                fromAmino(object: _97.DelayedVestingAccountAmino): _97.DelayedVestingAccount;
                toAmino(message: _97.DelayedVestingAccount): _97.DelayedVestingAccountAmino;
                fromAminoMsg(object: _97.DelayedVestingAccountAminoMsg): _97.DelayedVestingAccount;
                toAminoMsg(message: _97.DelayedVestingAccount): _97.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _97.DelayedVestingAccountProtoMsg): _97.DelayedVestingAccount;
                toProto(message: _97.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _97.DelayedVestingAccount): _97.DelayedVestingAccountProtoMsg;
            };
            Period: {
                encode(message: _97.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _97.Period;
                fromJSON(object: any): _97.Period;
                toJSON(message: _97.Period): unknown;
                fromPartial(object: Partial<_97.Period>): _97.Period;
                fromAmino(object: _97.PeriodAmino): _97.Period;
                toAmino(message: _97.Period): _97.PeriodAmino;
                fromAminoMsg(object: _97.PeriodAminoMsg): _97.Period;
                toAminoMsg(message: _97.Period): _97.PeriodAminoMsg;
                fromProtoMsg(message: _97.PeriodProtoMsg): _97.Period;
                toProto(message: _97.Period): Uint8Array;
                toProtoMsg(message: _97.Period): _97.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                encode(message: _97.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _97.PeriodicVestingAccount;
                fromJSON(object: any): _97.PeriodicVestingAccount;
                toJSON(message: _97.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_97.PeriodicVestingAccount>): _97.PeriodicVestingAccount;
                fromAmino(object: _97.PeriodicVestingAccountAmino): _97.PeriodicVestingAccount;
                toAmino(message: _97.PeriodicVestingAccount): _97.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _97.PeriodicVestingAccountAminoMsg): _97.PeriodicVestingAccount;
                toAminoMsg(message: _97.PeriodicVestingAccount): _97.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _97.PeriodicVestingAccountProtoMsg): _97.PeriodicVestingAccount;
                toProto(message: _97.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _97.PeriodicVestingAccount): _97.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                encode(message: _97.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _97.PermanentLockedAccount;
                fromJSON(object: any): _97.PermanentLockedAccount;
                toJSON(message: _97.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_97.PermanentLockedAccount>): _97.PermanentLockedAccount;
                fromAmino(object: _97.PermanentLockedAccountAmino): _97.PermanentLockedAccount;
                toAmino(message: _97.PermanentLockedAccount): _97.PermanentLockedAccountAmino;
                fromAminoMsg(object: _97.PermanentLockedAccountAminoMsg): _97.PermanentLockedAccount;
                toAminoMsg(message: _97.PermanentLockedAccount): _97.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _97.PermanentLockedAccountProtoMsg): _97.PermanentLockedAccount;
                toProto(message: _97.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _97.PermanentLockedAccount): _97.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                encode(message: _96.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _96.MsgCreateVestingAccount;
                fromJSON(object: any): _96.MsgCreateVestingAccount;
                toJSON(message: _96.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_96.MsgCreateVestingAccount>): _96.MsgCreateVestingAccount;
                fromAmino(object: _96.MsgCreateVestingAccountAmino): _96.MsgCreateVestingAccount;
                toAmino(message: _96.MsgCreateVestingAccount): _96.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _96.MsgCreateVestingAccountAminoMsg): _96.MsgCreateVestingAccount;
                toAminoMsg(message: _96.MsgCreateVestingAccount): _96.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _96.MsgCreateVestingAccountProtoMsg): _96.MsgCreateVestingAccount;
                toProto(message: _96.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _96.MsgCreateVestingAccount): _96.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _96.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _96.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _96.MsgCreateVestingAccountResponse;
                toJSON(_: _96.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_96.MsgCreateVestingAccountResponse>): _96.MsgCreateVestingAccountResponse;
                fromAmino(_: _96.MsgCreateVestingAccountResponseAmino): _96.MsgCreateVestingAccountResponse;
                toAmino(_: _96.MsgCreateVestingAccountResponse): _96.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _96.MsgCreateVestingAccountResponseAminoMsg): _96.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _96.MsgCreateVestingAccountResponse): _96.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _96.MsgCreateVestingAccountResponseProtoMsg): _96.MsgCreateVestingAccountResponse;
                toProto(message: _96.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _96.MsgCreateVestingAccountResponse): _96.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _96.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _96.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _96.MsgCreatePermanentLockedAccount;
                toJSON(message: _96.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_96.MsgCreatePermanentLockedAccount>): _96.MsgCreatePermanentLockedAccount;
                fromAmino(object: _96.MsgCreatePermanentLockedAccountAmino): _96.MsgCreatePermanentLockedAccount;
                toAmino(message: _96.MsgCreatePermanentLockedAccount): _96.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _96.MsgCreatePermanentLockedAccountAminoMsg): _96.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _96.MsgCreatePermanentLockedAccount): _96.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _96.MsgCreatePermanentLockedAccountProtoMsg): _96.MsgCreatePermanentLockedAccount;
                toProto(message: _96.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _96.MsgCreatePermanentLockedAccount): _96.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _96.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _96.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _96.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _96.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_96.MsgCreatePermanentLockedAccountResponse>): _96.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _96.MsgCreatePermanentLockedAccountResponseAmino): _96.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _96.MsgCreatePermanentLockedAccountResponse): _96.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _96.MsgCreatePermanentLockedAccountResponseAminoMsg): _96.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _96.MsgCreatePermanentLockedAccountResponse): _96.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _96.MsgCreatePermanentLockedAccountResponseProtoMsg): _96.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _96.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _96.MsgCreatePermanentLockedAccountResponse): _96.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _96.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _96.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _96.MsgCreatePeriodicVestingAccount;
                toJSON(message: _96.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_96.MsgCreatePeriodicVestingAccount>): _96.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _96.MsgCreatePeriodicVestingAccountAmino): _96.MsgCreatePeriodicVestingAccount;
                toAmino(message: _96.MsgCreatePeriodicVestingAccount): _96.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _96.MsgCreatePeriodicVestingAccountAminoMsg): _96.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _96.MsgCreatePeriodicVestingAccount): _96.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _96.MsgCreatePeriodicVestingAccountProtoMsg): _96.MsgCreatePeriodicVestingAccount;
                toProto(message: _96.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _96.MsgCreatePeriodicVestingAccount): _96.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _96.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _96.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _96.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _96.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_96.MsgCreatePeriodicVestingAccountResponse>): _96.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _96.MsgCreatePeriodicVestingAccountResponseAmino): _96.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _96.MsgCreatePeriodicVestingAccountResponse): _96.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _96.MsgCreatePeriodicVestingAccountResponseAminoMsg): _96.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _96.MsgCreatePeriodicVestingAccountResponse): _96.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _96.MsgCreatePeriodicVestingAccountResponseProtoMsg): _96.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _96.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _96.MsgCreatePeriodicVestingAccountResponse): _96.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _216.MsgClientImpl;
                };
                bank: {
                    v1beta1: _217.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _218.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _219.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _220.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _221.MsgClientImpl;
                };
                gov: {
                    v1: _222.MsgClientImpl;
                    v1beta1: _223.MsgClientImpl;
                };
                group: {
                    v1: _224.MsgClientImpl;
                };
                nft: {
                    v1beta1: _225.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _226.MsgClientImpl;
                };
                staking: {
                    v1beta1: _227.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _228.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _229.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _5.QueryConfigRequest | undefined): Promise<_5.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _8.QueryAccountsRequest | undefined): Promise<_8.QueryAccountsResponse>;
                        account(request: _8.QueryAccountRequest): Promise<_8.QueryAccountResponse>;
                        accountAddressByID(request: _8.QueryAccountAddressByIDRequest): Promise<_8.QueryAccountAddressByIDResponse>;
                        params(request?: _8.QueryParamsRequest | undefined): Promise<_8.QueryParamsResponse>;
                        moduleAccounts(request?: _8.QueryModuleAccountsRequest | undefined): Promise<_8.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _8.QueryModuleAccountByNameRequest): Promise<_8.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _8.Bech32PrefixRequest | undefined): Promise<_8.Bech32PrefixResponse>;
                        addressBytesToString(request: _8.AddressBytesToStringRequest): Promise<_8.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _8.AddressStringToBytesRequest): Promise<_8.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _12.QueryGrantsRequest): Promise<_12.QueryGrantsResponse>;
                        granterGrants(request: _12.QueryGranterGrantsRequest): Promise<_12.QueryGranterGrantsResponse>;
                        granteeGrants(request: _12.QueryGranteeGrantsRequest): Promise<_12.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _17.QueryBalanceRequest): Promise<_17.QueryBalanceResponse>;
                        allBalances(request: _17.QueryAllBalancesRequest): Promise<_17.QueryAllBalancesResponse>;
                        spendableBalances(request: _17.QuerySpendableBalancesRequest): Promise<_17.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _17.QueryTotalSupplyRequest | undefined): Promise<_17.QueryTotalSupplyResponse>;
                        supplyOf(request: _17.QuerySupplyOfRequest): Promise<_17.QuerySupplyOfResponse>;
                        params(request?: _17.QueryParamsRequest | undefined): Promise<_17.QueryParamsResponse>;
                        denomMetadata(request: _17.QueryDenomMetadataRequest): Promise<_17.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _17.QueryDenomsMetadataRequest | undefined): Promise<_17.QueryDenomsMetadataResponse>;
                        denomOwners(request: _17.QueryDenomOwnersRequest): Promise<_17.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _21.ConfigRequest | undefined): Promise<_21.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _28.GetNodeInfoRequest | undefined): Promise<_28.GetNodeInfoResponse>;
                            getSyncing(request?: _28.GetSyncingRequest | undefined): Promise<_28.GetSyncingResponse>;
                            getLatestBlock(request?: _28.GetLatestBlockRequest | undefined): Promise<_28.GetLatestBlockResponse>;
                            getBlockByHeight(request: _28.GetBlockByHeightRequest): Promise<_28.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _28.GetLatestValidatorSetRequest | undefined): Promise<_28.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _28.GetValidatorSetByHeightRequest): Promise<_28.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _28.ABCIQueryRequest): Promise<_28.ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _43.QueryParamsRequest | undefined): Promise<_43.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _43.QueryValidatorOutstandingRewardsRequest): Promise<_43.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _43.QueryValidatorCommissionRequest): Promise<_43.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _43.QueryValidatorSlashesRequest): Promise<_43.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _43.QueryDelegationRewardsRequest): Promise<_43.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _43.QueryDelegationTotalRewardsRequest): Promise<_43.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _43.QueryDelegatorValidatorsRequest): Promise<_43.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _43.QueryDelegatorWithdrawAddressRequest): Promise<_43.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _43.QueryCommunityPoolRequest | undefined): Promise<_43.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _47.QueryEvidenceRequest): Promise<_47.QueryEvidenceResponse>;
                        allEvidence(request?: _47.QueryAllEvidenceRequest | undefined): Promise<_47.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _51.QueryAllowanceRequest): Promise<_51.QueryAllowanceResponse>;
                        allowances(request: _51.QueryAllowancesRequest): Promise<_51.QueryAllowancesResponse>;
                        allowancesByGranter(request: _51.QueryAllowancesByGranterRequest): Promise<_51.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _56.QueryProposalRequest): Promise<_56.QueryProposalResponse>;
                        proposals(request: _56.QueryProposalsRequest): Promise<_56.QueryProposalsResponse>;
                        vote(request: _56.QueryVoteRequest): Promise<_56.QueryVoteResponse>;
                        votes(request: _56.QueryVotesRequest): Promise<_56.QueryVotesResponse>;
                        params(request: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                        deposit(request: _56.QueryDepositRequest): Promise<_56.QueryDepositResponse>;
                        deposits(request: _56.QueryDepositsRequest): Promise<_56.QueryDepositsResponse>;
                        tallyResult(request: _56.QueryTallyResultRequest): Promise<_56.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _60.QueryProposalRequest): Promise<_60.QueryProposalResponse>;
                        proposals(request: _60.QueryProposalsRequest): Promise<_60.QueryProposalsResponse>;
                        vote(request: _60.QueryVoteRequest): Promise<_60.QueryVoteResponse>;
                        votes(request: _60.QueryVotesRequest): Promise<_60.QueryVotesResponse>;
                        params(request: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                        deposit(request: _60.QueryDepositRequest): Promise<_60.QueryDepositResponse>;
                        deposits(request: _60.QueryDepositsRequest): Promise<_60.QueryDepositsResponse>;
                        tallyResult(request: _60.QueryTallyResultRequest): Promise<_60.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _64.QueryGroupInfoRequest): Promise<_64.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _64.QueryGroupPolicyInfoRequest): Promise<_64.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _64.QueryGroupMembersRequest): Promise<_64.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _64.QueryGroupsByAdminRequest): Promise<_64.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _64.QueryGroupPoliciesByGroupRequest): Promise<_64.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _64.QueryGroupPoliciesByAdminRequest): Promise<_64.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _64.QueryProposalRequest): Promise<_64.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _64.QueryProposalsByGroupPolicyRequest): Promise<_64.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _64.QueryVoteByProposalVoterRequest): Promise<_64.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _64.QueryVotesByProposalRequest): Promise<_64.QueryVotesByProposalResponse>;
                        votesByVoter(request: _64.QueryVotesByVoterRequest): Promise<_64.QueryVotesByVoterResponse>;
                        groupsByMember(request: _64.QueryGroupsByMemberRequest): Promise<_64.QueryGroupsByMemberResponse>;
                        tallyResult(request: _64.QueryTallyResultRequest): Promise<_64.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _69.QueryParamsRequest | undefined): Promise<_69.QueryParamsResponse>;
                        inflation(request?: _69.QueryInflationRequest | undefined): Promise<_69.QueryInflationResponse>;
                        annualProvisions(request?: _69.QueryAnnualProvisionsRequest | undefined): Promise<_69.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _74.QueryBalanceRequest): Promise<_74.QueryBalanceResponse>;
                        owner(request: _74.QueryOwnerRequest): Promise<_74.QueryOwnerResponse>;
                        supply(request: _74.QuerySupplyRequest): Promise<_74.QuerySupplyResponse>;
                        nFTs(request: _74.QueryNFTsRequest): Promise<_74.QueryNFTsResponse>;
                        nFT(request: _74.QueryNFTRequest): Promise<_74.QueryNFTResponse>;
                        class(request: _74.QueryClassRequest): Promise<_74.QueryClassResponse>;
                        classes(request?: _74.QueryClassesRequest | undefined): Promise<_74.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _80.QueryParamsRequest): Promise<_80.QueryParamsResponse>;
                        subspaces(request?: _80.QuerySubspacesRequest | undefined): Promise<_80.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _82.QueryParamsRequest | undefined): Promise<_82.QueryParamsResponse>;
                        signingInfo(request: _82.QuerySigningInfoRequest): Promise<_82.QuerySigningInfoResponse>;
                        signingInfos(request?: _82.QuerySigningInfosRequest | undefined): Promise<_82.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _87.QueryValidatorsRequest): Promise<_87.QueryValidatorsResponse>;
                        validator(request: _87.QueryValidatorRequest): Promise<_87.QueryValidatorResponse>;
                        validatorDelegations(request: _87.QueryValidatorDelegationsRequest): Promise<_87.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _87.QueryValidatorUnbondingDelegationsRequest): Promise<_87.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _87.QueryDelegationRequest): Promise<_87.QueryDelegationResponse>;
                        unbondingDelegation(request: _87.QueryUnbondingDelegationRequest): Promise<_87.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _87.QueryDelegatorDelegationsRequest): Promise<_87.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _87.QueryDelegatorUnbondingDelegationsRequest): Promise<_87.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _87.QueryRedelegationsRequest): Promise<_87.QueryRedelegationsResponse>;
                        delegatorValidators(request: _87.QueryDelegatorValidatorsRequest): Promise<_87.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _87.QueryDelegatorValidatorRequest): Promise<_87.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _87.QueryHistoricalInfoRequest): Promise<_87.QueryHistoricalInfoResponse>;
                        pool(request?: _87.QueryPoolRequest | undefined): Promise<_87.QueryPoolResponse>;
                        params(request?: _87.QueryParamsRequest | undefined): Promise<_87.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _91.SimulateRequest): Promise<_91.SimulateResponse>;
                        getTx(request: _91.GetTxRequest): Promise<_91.GetTxResponse>;
                        broadcastTx(request: _91.BroadcastTxRequest): Promise<_91.BroadcastTxResponse>;
                        getTxsEvent(request: _91.GetTxsEventRequest): Promise<_91.GetTxsEventResponse>;
                        getBlockWithTxs(request: _91.GetBlockWithTxsRequest): Promise<_91.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _93.QueryCurrentPlanRequest | undefined): Promise<_93.QueryCurrentPlanResponse>;
                        appliedPlan(request: _93.QueryAppliedPlanRequest): Promise<_93.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _93.QueryUpgradedConsensusStateRequest): Promise<_93.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _93.QueryModuleVersionsRequest): Promise<_93.QueryModuleVersionsResponse>;
                        authority(request?: _93.QueryAuthorityRequest | undefined): Promise<_93.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _179.LCDQueryClient;
                };
                authz: {
                    v1beta1: _180.LCDQueryClient;
                };
                bank: {
                    v1beta1: _181.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _182.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _183.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _184.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _185.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _186.LCDQueryClient;
                };
                gov: {
                    v1: _187.LCDQueryClient;
                    v1beta1: _188.LCDQueryClient;
                };
                group: {
                    v1: _189.LCDQueryClient;
                };
                mint: {
                    v1beta1: _190.LCDQueryClient;
                };
                nft: {
                    v1beta1: _191.LCDQueryClient;
                };
                params: {
                    v1beta1: _192.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _193.LCDQueryClient;
                };
                staking: {
                    v1beta1: _194.LCDQueryClient;
                };
                tx: {
                    v1beta1: _195.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _196.LCDQueryClient;
                };
            };
        }>;
    };
}
