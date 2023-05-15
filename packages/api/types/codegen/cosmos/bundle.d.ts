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
import * as _171 from "./auth/v1beta1/query.lcd";
import * as _172 from "./authz/v1beta1/query.lcd";
import * as _173 from "./bank/v1beta1/query.lcd";
import * as _174 from "./base/node/v1beta1/query.lcd";
import * as _175 from "./base/tendermint/v1beta1/query.lcd";
import * as _176 from "./distribution/v1beta1/query.lcd";
import * as _177 from "./evidence/v1beta1/query.lcd";
import * as _178 from "./feegrant/v1beta1/query.lcd";
import * as _179 from "./gov/v1/query.lcd";
import * as _180 from "./gov/v1beta1/query.lcd";
import * as _181 from "./group/v1/query.lcd";
import * as _182 from "./mint/v1beta1/query.lcd";
import * as _183 from "./nft/v1beta1/query.lcd";
import * as _184 from "./params/v1beta1/query.lcd";
import * as _185 from "./slashing/v1beta1/query.lcd";
import * as _186 from "./staking/v1beta1/query.lcd";
import * as _187 from "./tx/v1beta1/service.lcd";
import * as _188 from "./upgrade/v1beta1/query.lcd";
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
                };
            };
        }
        const v1alpha1: {
            QueryConfigRequest: {
                encode(_: _5.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _5.QueryConfigRequest;
                fromJSON(_: any): _5.QueryConfigRequest;
                toJSON(_: _5.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_5.QueryConfigRequest>): _5.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _5.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _5.QueryConfigResponse;
                fromJSON(object: any): _5.QueryConfigResponse;
                toJSON(message: _5.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_5.QueryConfigResponse>): _5.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _4.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _4.ModuleDescriptor;
                fromJSON(object: any): _4.ModuleDescriptor;
                toJSON(message: _4.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_4.ModuleDescriptor>): _4.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _4.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _4.PackageReference;
                fromJSON(object: any): _4.PackageReference;
                toJSON(message: _4.PackageReference): unknown;
                fromPartial(object: Partial<_4.PackageReference>): _4.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _4.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _4.MigrateFromInfo;
                fromJSON(object: any): _4.MigrateFromInfo;
                toJSON(message: _4.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_4.MigrateFromInfo>): _4.MigrateFromInfo;
            };
            Config: {
                encode(message: _3.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _3.Config;
                fromJSON(object: any): _3.Config;
                toJSON(message: _3.Config): unknown;
                fromPartial(object: Partial<_3.Config>): _3.Config;
            };
            ModuleConfig: {
                encode(message: _3.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _3.ModuleConfig;
                fromJSON(object: any): _3.ModuleConfig;
                toJSON(message: _3.ModuleConfig): unknown;
                fromPartial(object: Partial<_3.ModuleConfig>): _3.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            LCDQueryClient: typeof _171.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _8.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryAccountsRequest;
                fromJSON(object: any): _8.QueryAccountsRequest;
                toJSON(message: _8.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_8.QueryAccountsRequest>): _8.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _8.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryAccountsResponse;
                fromJSON(object: any): _8.QueryAccountsResponse;
                toJSON(message: _8.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_8.QueryAccountsResponse>): _8.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _8.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryAccountRequest;
                fromJSON(object: any): _8.QueryAccountRequest;
                toJSON(message: _8.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_8.QueryAccountRequest>): _8.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _8.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryAccountResponse;
                fromJSON(object: any): _8.QueryAccountResponse;
                toJSON(message: _8.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_8.QueryAccountResponse>): _8.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _8.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryParamsRequest;
                fromJSON(_: any): _8.QueryParamsRequest;
                toJSON(_: _8.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_8.QueryParamsRequest>): _8.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _8.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryParamsResponse;
                fromJSON(object: any): _8.QueryParamsResponse;
                toJSON(message: _8.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_8.QueryParamsResponse>): _8.QueryParamsResponse;
            };
            QueryModuleAccountsRequest: {
                encode(_: _8.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryModuleAccountsRequest;
                fromJSON(_: any): _8.QueryModuleAccountsRequest;
                toJSON(_: _8.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_8.QueryModuleAccountsRequest>): _8.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _8.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryModuleAccountsResponse;
                fromJSON(object: any): _8.QueryModuleAccountsResponse;
                toJSON(message: _8.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_8.QueryModuleAccountsResponse>): _8.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _8.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryModuleAccountByNameRequest;
                fromJSON(object: any): _8.QueryModuleAccountByNameRequest;
                toJSON(message: _8.QueryModuleAccountByNameRequest): unknown;
                fromPartial(object: Partial<_8.QueryModuleAccountByNameRequest>): _8.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _8.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryModuleAccountByNameResponse;
                fromJSON(object: any): _8.QueryModuleAccountByNameResponse;
                toJSON(message: _8.QueryModuleAccountByNameResponse): unknown;
                fromPartial(object: Partial<_8.QueryModuleAccountByNameResponse>): _8.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _8.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.Bech32PrefixRequest;
                fromJSON(_: any): _8.Bech32PrefixRequest;
                toJSON(_: _8.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_8.Bech32PrefixRequest>): _8.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _8.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.Bech32PrefixResponse;
                fromJSON(object: any): _8.Bech32PrefixResponse;
                toJSON(message: _8.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_8.Bech32PrefixResponse>): _8.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _8.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.AddressBytesToStringRequest;
                fromJSON(object: any): _8.AddressBytesToStringRequest;
                toJSON(message: _8.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_8.AddressBytesToStringRequest>): _8.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _8.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.AddressBytesToStringResponse;
                fromJSON(object: any): _8.AddressBytesToStringResponse;
                toJSON(message: _8.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_8.AddressBytesToStringResponse>): _8.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _8.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.AddressStringToBytesRequest;
                fromJSON(object: any): _8.AddressStringToBytesRequest;
                toJSON(message: _8.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_8.AddressStringToBytesRequest>): _8.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _8.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.AddressStringToBytesResponse;
                fromJSON(object: any): _8.AddressStringToBytesResponse;
                toJSON(message: _8.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_8.AddressStringToBytesResponse>): _8.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _8.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryAccountAddressByIDRequest;
                fromJSON(object: any): _8.QueryAccountAddressByIDRequest;
                toJSON(message: _8.QueryAccountAddressByIDRequest): unknown;
                fromPartial(object: Partial<_8.QueryAccountAddressByIDRequest>): _8.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _8.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _8.QueryAccountAddressByIDResponse;
                fromJSON(object: any): _8.QueryAccountAddressByIDResponse;
                toJSON(message: _8.QueryAccountAddressByIDResponse): unknown;
                fromPartial(object: Partial<_8.QueryAccountAddressByIDResponse>): _8.QueryAccountAddressByIDResponse;
            };
            GenesisState: {
                encode(message: _7.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _7.GenesisState;
                fromJSON(object: any): _7.GenesisState;
                toJSON(message: _7.GenesisState): unknown;
                fromPartial(object: Partial<_7.GenesisState>): _7.GenesisState;
            };
            BaseAccount: {
                encode(message: _6.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _6.BaseAccount;
                fromJSON(object: any): _6.BaseAccount;
                toJSON(message: _6.BaseAccount): unknown;
                fromPartial(object: Partial<_6.BaseAccount>): _6.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _6.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _6.ModuleAccount;
                fromJSON(object: any): _6.ModuleAccount;
                toJSON(message: _6.ModuleAccount): unknown;
                fromPartial(object: Partial<_6.ModuleAccount>): _6.ModuleAccount;
            };
            Params: {
                encode(message: _6.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _6.Params;
                fromJSON(object: any): _6.Params;
                toJSON(message: _6.Params): unknown;
                fromPartial(object: Partial<_6.Params>): _6.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            LCDQueryClient: typeof _172.LCDQueryClient;
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
                    toAmino: ({ granter, grantee, grant }: _13.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _13.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _13.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _13.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _13.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _13.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _13.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _13.MsgGrant;
                fromJSON(object: any): _13.MsgGrant;
                toJSON(message: _13.MsgGrant): unknown;
                fromPartial(object: Partial<_13.MsgGrant>): _13.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _13.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _13.MsgExecResponse;
                fromJSON(object: any): _13.MsgExecResponse;
                toJSON(message: _13.MsgExecResponse): unknown;
                fromPartial(object: Partial<_13.MsgExecResponse>): _13.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _13.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _13.MsgExec;
                fromJSON(object: any): _13.MsgExec;
                toJSON(message: _13.MsgExec): unknown;
                fromPartial(object: Partial<_13.MsgExec>): _13.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _13.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _13.MsgGrantResponse;
                fromJSON(_: any): _13.MsgGrantResponse;
                toJSON(_: _13.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_13.MsgGrantResponse>): _13.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _13.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _13.MsgRevoke;
                fromJSON(object: any): _13.MsgRevoke;
                toJSON(message: _13.MsgRevoke): unknown;
                fromPartial(object: Partial<_13.MsgRevoke>): _13.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _13.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _13.MsgRevokeResponse;
                fromJSON(_: any): _13.MsgRevokeResponse;
                toJSON(_: _13.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_13.MsgRevokeResponse>): _13.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _12.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _12.QueryGrantsRequest;
                fromJSON(object: any): _12.QueryGrantsRequest;
                toJSON(message: _12.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_12.QueryGrantsRequest>): _12.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _12.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _12.QueryGrantsResponse;
                fromJSON(object: any): _12.QueryGrantsResponse;
                toJSON(message: _12.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_12.QueryGrantsResponse>): _12.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _12.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _12.QueryGranterGrantsRequest;
                fromJSON(object: any): _12.QueryGranterGrantsRequest;
                toJSON(message: _12.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_12.QueryGranterGrantsRequest>): _12.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _12.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _12.QueryGranterGrantsResponse;
                fromJSON(object: any): _12.QueryGranterGrantsResponse;
                toJSON(message: _12.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_12.QueryGranterGrantsResponse>): _12.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _12.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _12.QueryGranteeGrantsRequest;
                fromJSON(object: any): _12.QueryGranteeGrantsRequest;
                toJSON(message: _12.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_12.QueryGranteeGrantsRequest>): _12.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _12.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _12.QueryGranteeGrantsResponse;
                fromJSON(object: any): _12.QueryGranteeGrantsResponse;
                toJSON(message: _12.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_12.QueryGranteeGrantsResponse>): _12.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _11.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _11.GenesisState;
                fromJSON(object: any): _11.GenesisState;
                toJSON(message: _11.GenesisState): unknown;
                fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
            };
            EventGrant: {
                encode(message: _10.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _10.EventGrant;
                fromJSON(object: any): _10.EventGrant;
                toJSON(message: _10.EventGrant): unknown;
                fromPartial(object: Partial<_10.EventGrant>): _10.EventGrant;
            };
            EventRevoke: {
                encode(message: _10.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _10.EventRevoke;
                fromJSON(object: any): _10.EventRevoke;
                toJSON(message: _10.EventRevoke): unknown;
                fromPartial(object: Partial<_10.EventRevoke>): _10.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _9.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.GenericAuthorization;
                fromJSON(object: any): _9.GenericAuthorization;
                toJSON(message: _9.GenericAuthorization): unknown;
                fromPartial(object: Partial<_9.GenericAuthorization>): _9.GenericAuthorization;
            };
            Grant: {
                encode(message: _9.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.Grant;
                fromJSON(object: any): _9.Grant;
                toJSON(message: _9.Grant): unknown;
                fromPartial(object: Partial<_9.Grant>): _9.Grant;
            };
            GrantAuthorization: {
                encode(message: _9.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.GrantAuthorization;
                fromJSON(object: any): _9.GrantAuthorization;
                toJSON(message: _9.GrantAuthorization): unknown;
                fromPartial(object: Partial<_9.GrantAuthorization>): _9.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _9.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _9.GrantQueueItem;
                fromJSON(object: any): _9.GrantQueueItem;
                toJSON(message: _9.GrantQueueItem): unknown;
                fromPartial(object: Partial<_9.GrantQueueItem>): _9.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            LCDQueryClient: typeof _173.LCDQueryClient;
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
                    toAmino: ({ fromAddress, toAddress, amount }: _18.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _18.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _18.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _18.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _18.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _18.MsgSend;
                fromJSON(object: any): _18.MsgSend;
                toJSON(message: _18.MsgSend): unknown;
                fromPartial(object: Partial<_18.MsgSend>): _18.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _18.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _18.MsgSendResponse;
                fromJSON(_: any): _18.MsgSendResponse;
                toJSON(_: _18.MsgSendResponse): unknown;
                fromPartial(_: Partial<_18.MsgSendResponse>): _18.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _18.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _18.MsgMultiSend;
                fromJSON(object: any): _18.MsgMultiSend;
                toJSON(message: _18.MsgMultiSend): unknown;
                fromPartial(object: Partial<_18.MsgMultiSend>): _18.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _18.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _18.MsgMultiSendResponse;
                fromJSON(_: any): _18.MsgMultiSendResponse;
                toJSON(_: _18.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_18.MsgMultiSendResponse>): _18.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _17.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryBalanceRequest;
                fromJSON(object: any): _17.QueryBalanceRequest;
                toJSON(message: _17.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_17.QueryBalanceRequest>): _17.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _17.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryBalanceResponse;
                fromJSON(object: any): _17.QueryBalanceResponse;
                toJSON(message: _17.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_17.QueryBalanceResponse>): _17.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _17.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryAllBalancesRequest;
                fromJSON(object: any): _17.QueryAllBalancesRequest;
                toJSON(message: _17.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_17.QueryAllBalancesRequest>): _17.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _17.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryAllBalancesResponse;
                fromJSON(object: any): _17.QueryAllBalancesResponse;
                toJSON(message: _17.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_17.QueryAllBalancesResponse>): _17.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _17.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QuerySpendableBalancesRequest;
                fromJSON(object: any): _17.QuerySpendableBalancesRequest;
                toJSON(message: _17.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_17.QuerySpendableBalancesRequest>): _17.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _17.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QuerySpendableBalancesResponse;
                fromJSON(object: any): _17.QuerySpendableBalancesResponse;
                toJSON(message: _17.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_17.QuerySpendableBalancesResponse>): _17.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _17.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryTotalSupplyRequest;
                fromJSON(object: any): _17.QueryTotalSupplyRequest;
                toJSON(message: _17.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_17.QueryTotalSupplyRequest>): _17.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _17.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryTotalSupplyResponse;
                fromJSON(object: any): _17.QueryTotalSupplyResponse;
                toJSON(message: _17.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_17.QueryTotalSupplyResponse>): _17.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _17.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QuerySupplyOfRequest;
                fromJSON(object: any): _17.QuerySupplyOfRequest;
                toJSON(message: _17.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_17.QuerySupplyOfRequest>): _17.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _17.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QuerySupplyOfResponse;
                fromJSON(object: any): _17.QuerySupplyOfResponse;
                toJSON(message: _17.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_17.QuerySupplyOfResponse>): _17.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _17.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryParamsRequest;
                fromJSON(_: any): _17.QueryParamsRequest;
                toJSON(_: _17.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_17.QueryParamsRequest>): _17.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _17.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryParamsResponse;
                fromJSON(object: any): _17.QueryParamsResponse;
                toJSON(message: _17.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_17.QueryParamsResponse>): _17.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _17.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryDenomsMetadataRequest;
                fromJSON(object: any): _17.QueryDenomsMetadataRequest;
                toJSON(message: _17.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_17.QueryDenomsMetadataRequest>): _17.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _17.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryDenomsMetadataResponse;
                fromJSON(object: any): _17.QueryDenomsMetadataResponse;
                toJSON(message: _17.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_17.QueryDenomsMetadataResponse>): _17.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _17.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryDenomMetadataRequest;
                fromJSON(object: any): _17.QueryDenomMetadataRequest;
                toJSON(message: _17.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_17.QueryDenomMetadataRequest>): _17.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _17.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryDenomMetadataResponse;
                fromJSON(object: any): _17.QueryDenomMetadataResponse;
                toJSON(message: _17.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_17.QueryDenomMetadataResponse>): _17.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _17.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryDenomOwnersRequest;
                fromJSON(object: any): _17.QueryDenomOwnersRequest;
                toJSON(message: _17.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_17.QueryDenomOwnersRequest>): _17.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _17.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.DenomOwner;
                fromJSON(object: any): _17.DenomOwner;
                toJSON(message: _17.DenomOwner): unknown;
                fromPartial(object: Partial<_17.DenomOwner>): _17.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _17.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _17.QueryDenomOwnersResponse;
                fromJSON(object: any): _17.QueryDenomOwnersResponse;
                toJSON(message: _17.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_17.QueryDenomOwnersResponse>): _17.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _16.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _16.GenesisState;
                fromJSON(object: any): _16.GenesisState;
                toJSON(message: _16.GenesisState): unknown;
                fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
            };
            Balance: {
                encode(message: _16.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _16.Balance;
                fromJSON(object: any): _16.Balance;
                toJSON(message: _16.Balance): unknown;
                fromPartial(object: Partial<_16.Balance>): _16.Balance;
            };
            Params: {
                encode(message: _15.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.Params;
                fromJSON(object: any): _15.Params;
                toJSON(message: _15.Params): unknown;
                fromPartial(object: Partial<_15.Params>): _15.Params;
            };
            SendEnabled: {
                encode(message: _15.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.SendEnabled;
                fromJSON(object: any): _15.SendEnabled;
                toJSON(message: _15.SendEnabled): unknown;
                fromPartial(object: Partial<_15.SendEnabled>): _15.SendEnabled;
            };
            Input: {
                encode(message: _15.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.Input;
                fromJSON(object: any): _15.Input;
                toJSON(message: _15.Input): unknown;
                fromPartial(object: Partial<_15.Input>): _15.Input;
            };
            Output: {
                encode(message: _15.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.Output;
                fromJSON(object: any): _15.Output;
                toJSON(message: _15.Output): unknown;
                fromPartial(object: Partial<_15.Output>): _15.Output;
            };
            Supply: {
                encode(message: _15.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.Supply;
                fromJSON(object: any): _15.Supply;
                toJSON(message: _15.Supply): unknown;
                fromPartial(object: Partial<_15.Supply>): _15.Supply;
            };
            DenomUnit: {
                encode(message: _15.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.DenomUnit;
                fromJSON(object: any): _15.DenomUnit;
                toJSON(message: _15.DenomUnit): unknown;
                fromPartial(object: Partial<_15.DenomUnit>): _15.DenomUnit;
            };
            Metadata: {
                encode(message: _15.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _15.Metadata;
                fromJSON(object: any): _15.Metadata;
                toJSON(message: _15.Metadata): unknown;
                fromPartial(object: Partial<_15.Metadata>): _15.Metadata;
            };
            SendAuthorization: {
                encode(message: _14.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _14.SendAuthorization;
                fromJSON(object: any): _14.SendAuthorization;
                toJSON(message: _14.SendAuthorization): unknown;
                fromPartial(object: Partial<_14.SendAuthorization>): _14.SendAuthorization;
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
                };
                ABCIMessageLog: {
                    encode(message: _19.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.ABCIMessageLog;
                    fromJSON(object: any): _19.ABCIMessageLog;
                    toJSON(message: _19.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_19.ABCIMessageLog>): _19.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _19.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.StringEvent;
                    fromJSON(object: any): _19.StringEvent;
                    toJSON(message: _19.StringEvent): unknown;
                    fromPartial(object: Partial<_19.StringEvent>): _19.StringEvent;
                };
                Attribute: {
                    encode(message: _19.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.Attribute;
                    fromJSON(object: any): _19.Attribute;
                    toJSON(message: _19.Attribute): unknown;
                    fromPartial(object: Partial<_19.Attribute>): _19.Attribute;
                };
                GasInfo: {
                    encode(message: _19.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.GasInfo;
                    fromJSON(object: any): _19.GasInfo;
                    toJSON(message: _19.GasInfo): unknown;
                    fromPartial(object: Partial<_19.GasInfo>): _19.GasInfo;
                };
                Result: {
                    encode(message: _19.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.Result;
                    fromJSON(object: any): _19.Result;
                    toJSON(message: _19.Result): unknown;
                    fromPartial(object: Partial<_19.Result>): _19.Result;
                };
                SimulationResponse: {
                    encode(message: _19.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.SimulationResponse;
                    fromJSON(object: any): _19.SimulationResponse;
                    toJSON(message: _19.SimulationResponse): unknown;
                    fromPartial(object: Partial<_19.SimulationResponse>): _19.SimulationResponse;
                };
                MsgData: {
                    encode(message: _19.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.MsgData;
                    fromJSON(object: any): _19.MsgData;
                    toJSON(message: _19.MsgData): unknown;
                    fromPartial(object: Partial<_19.MsgData>): _19.MsgData;
                };
                TxMsgData: {
                    encode(message: _19.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.TxMsgData;
                    fromJSON(object: any): _19.TxMsgData;
                    toJSON(message: _19.TxMsgData): unknown;
                    fromPartial(object: Partial<_19.TxMsgData>): _19.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _19.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _19.SearchTxsResult;
                    fromJSON(object: any): _19.SearchTxsResult;
                    toJSON(message: _19.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_19.SearchTxsResult>): _19.SearchTxsResult;
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
                };
                Pair: {
                    encode(message: _20.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _20.Pair;
                    fromJSON(object: any): _20.Pair;
                    toJSON(message: _20.Pair): unknown;
                    fromPartial(object: Partial<_20.Pair>): _20.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                LCDQueryClient: typeof _174.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _21.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.ConfigRequest;
                    fromJSON(_: any): _21.ConfigRequest;
                    toJSON(_: _21.ConfigRequest): unknown;
                    fromPartial(_: Partial<_21.ConfigRequest>): _21.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _21.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _21.ConfigResponse;
                    fromJSON(object: any): _21.ConfigResponse;
                    toJSON(message: _21.ConfigResponse): unknown;
                    fromPartial(object: Partial<_21.ConfigResponse>): _21.ConfigResponse;
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
                };
                PageResponse: {
                    encode(message: _22.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _22.PageResponse;
                    fromJSON(object: any): _22.PageResponse;
                    toJSON(message: _22.PageResponse): unknown;
                    fromPartial(object: Partial<_22.PageResponse>): _22.PageResponse;
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
                };
                ListAllInterfacesResponse: {
                    encode(message: _23.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.ListAllInterfacesResponse;
                    fromJSON(object: any): _23.ListAllInterfacesResponse;
                    toJSON(message: _23.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_23.ListAllInterfacesResponse>): _23.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _23.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.ListImplementationsRequest;
                    fromJSON(object: any): _23.ListImplementationsRequest;
                    toJSON(message: _23.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_23.ListImplementationsRequest>): _23.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _23.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _23.ListImplementationsResponse;
                    fromJSON(object: any): _23.ListImplementationsResponse;
                    toJSON(message: _23.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_23.ListImplementationsResponse>): _23.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _24.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.AppDescriptor;
                    fromJSON(object: any): _24.AppDescriptor;
                    toJSON(message: _24.AppDescriptor): unknown;
                    fromPartial(object: Partial<_24.AppDescriptor>): _24.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _24.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.TxDescriptor;
                    fromJSON(object: any): _24.TxDescriptor;
                    toJSON(message: _24.TxDescriptor): unknown;
                    fromPartial(object: Partial<_24.TxDescriptor>): _24.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _24.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.AuthnDescriptor;
                    fromJSON(object: any): _24.AuthnDescriptor;
                    toJSON(message: _24.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_24.AuthnDescriptor>): _24.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _24.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.SigningModeDescriptor;
                    fromJSON(object: any): _24.SigningModeDescriptor;
                    toJSON(message: _24.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_24.SigningModeDescriptor>): _24.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _24.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.ChainDescriptor;
                    fromJSON(object: any): _24.ChainDescriptor;
                    toJSON(message: _24.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_24.ChainDescriptor>): _24.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _24.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.CodecDescriptor;
                    fromJSON(object: any): _24.CodecDescriptor;
                    toJSON(message: _24.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_24.CodecDescriptor>): _24.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _24.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.InterfaceDescriptor;
                    fromJSON(object: any): _24.InterfaceDescriptor;
                    toJSON(message: _24.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_24.InterfaceDescriptor>): _24.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _24.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _24.InterfaceImplementerDescriptor;
                    toJSON(message: _24.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_24.InterfaceImplementerDescriptor>): _24.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _24.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _24.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _24.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_24.InterfaceAcceptingMessageDescriptor>): _24.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _24.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.ConfigurationDescriptor;
                    fromJSON(object: any): _24.ConfigurationDescriptor;
                    toJSON(message: _24.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_24.ConfigurationDescriptor>): _24.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _24.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.MsgDescriptor;
                    fromJSON(object: any): _24.MsgDescriptor;
                    toJSON(message: _24.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_24.MsgDescriptor>): _24.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _24.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _24.GetAuthnDescriptorRequest;
                    toJSON(_: _24.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_24.GetAuthnDescriptorRequest>): _24.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _24.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _24.GetAuthnDescriptorResponse;
                    toJSON(message: _24.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_24.GetAuthnDescriptorResponse>): _24.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _24.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetChainDescriptorRequest;
                    fromJSON(_: any): _24.GetChainDescriptorRequest;
                    toJSON(_: _24.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_24.GetChainDescriptorRequest>): _24.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _24.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetChainDescriptorResponse;
                    fromJSON(object: any): _24.GetChainDescriptorResponse;
                    toJSON(message: _24.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_24.GetChainDescriptorResponse>): _24.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _24.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetCodecDescriptorRequest;
                    fromJSON(_: any): _24.GetCodecDescriptorRequest;
                    toJSON(_: _24.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_24.GetCodecDescriptorRequest>): _24.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _24.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetCodecDescriptorResponse;
                    fromJSON(object: any): _24.GetCodecDescriptorResponse;
                    toJSON(message: _24.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_24.GetCodecDescriptorResponse>): _24.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _24.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _24.GetConfigurationDescriptorRequest;
                    toJSON(_: _24.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_24.GetConfigurationDescriptorRequest>): _24.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _24.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _24.GetConfigurationDescriptorResponse;
                    toJSON(message: _24.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_24.GetConfigurationDescriptorResponse>): _24.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _24.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _24.GetQueryServicesDescriptorRequest;
                    toJSON(_: _24.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_24.GetQueryServicesDescriptorRequest>): _24.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _24.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _24.GetQueryServicesDescriptorResponse;
                    toJSON(message: _24.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_24.GetQueryServicesDescriptorResponse>): _24.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _24.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetTxDescriptorRequest;
                    fromJSON(_: any): _24.GetTxDescriptorRequest;
                    toJSON(_: _24.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_24.GetTxDescriptorRequest>): _24.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _24.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.GetTxDescriptorResponse;
                    fromJSON(object: any): _24.GetTxDescriptorResponse;
                    toJSON(message: _24.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_24.GetTxDescriptorResponse>): _24.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _24.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.QueryServicesDescriptor;
                    fromJSON(object: any): _24.QueryServicesDescriptor;
                    toJSON(message: _24.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_24.QueryServicesDescriptor>): _24.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _24.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.QueryServiceDescriptor;
                    fromJSON(object: any): _24.QueryServiceDescriptor;
                    toJSON(message: _24.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_24.QueryServiceDescriptor>): _24.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _24.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _24.QueryMethodDescriptor;
                    fromJSON(object: any): _24.QueryMethodDescriptor;
                    toJSON(message: _24.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_24.QueryMethodDescriptor>): _24.QueryMethodDescriptor;
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
                };
                Metadata: {
                    encode(message: _25.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.Metadata;
                    fromJSON(object: any): _25.Metadata;
                    toJSON(message: _25.Metadata): unknown;
                    fromPartial(object: Partial<_25.Metadata>): _25.Metadata;
                };
                SnapshotItem: {
                    encode(message: _25.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.SnapshotItem;
                    fromJSON(object: any): _25.SnapshotItem;
                    toJSON(message: _25.SnapshotItem): unknown;
                    fromPartial(object: Partial<_25.SnapshotItem>): _25.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _25.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.SnapshotStoreItem;
                    fromJSON(object: any): _25.SnapshotStoreItem;
                    toJSON(message: _25.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_25.SnapshotStoreItem>): _25.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _25.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.SnapshotIAVLItem;
                    fromJSON(object: any): _25.SnapshotIAVLItem;
                    toJSON(message: _25.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_25.SnapshotIAVLItem>): _25.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _25.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.SnapshotExtensionMeta;
                    fromJSON(object: any): _25.SnapshotExtensionMeta;
                    toJSON(message: _25.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_25.SnapshotExtensionMeta>): _25.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _25.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.SnapshotExtensionPayload;
                    fromJSON(object: any): _25.SnapshotExtensionPayload;
                    toJSON(message: _25.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_25.SnapshotExtensionPayload>): _25.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _25.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.SnapshotKVItem;
                    fromJSON(object: any): _25.SnapshotKVItem;
                    toJSON(message: _25.SnapshotKVItem): unknown;
                    fromPartial(object: Partial<_25.SnapshotKVItem>): _25.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _25.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _25.SnapshotSchema;
                    fromJSON(object: any): _25.SnapshotSchema;
                    toJSON(message: _25.SnapshotSchema): unknown;
                    fromPartial(object: Partial<_25.SnapshotSchema>): _25.SnapshotSchema;
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
                };
                BlockMetadata: {
                    encode(message: _27.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.BlockMetadata;
                    fromJSON(object: any): _27.BlockMetadata;
                    toJSON(message: _27.BlockMetadata): unknown;
                    fromPartial(object: Partial<_27.BlockMetadata>): _27.BlockMetadata;
                };
                BlockMetadata_DeliverTx: {
                    encode(message: _27.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _27.BlockMetadata_DeliverTx;
                    fromJSON(object: any): _27.BlockMetadata_DeliverTx;
                    toJSON(message: _27.BlockMetadata_DeliverTx): unknown;
                    fromPartial(object: Partial<_27.BlockMetadata_DeliverTx>): _27.BlockMetadata_DeliverTx;
                };
                CommitInfo: {
                    encode(message: _26.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _26.CommitInfo;
                    fromJSON(object: any): _26.CommitInfo;
                    toJSON(message: _26.CommitInfo): unknown;
                    fromPartial(object: Partial<_26.CommitInfo>): _26.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _26.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _26.StoreInfo;
                    fromJSON(object: any): _26.StoreInfo;
                    toJSON(message: _26.StoreInfo): unknown;
                    fromPartial(object: Partial<_26.StoreInfo>): _26.StoreInfo;
                };
                CommitID: {
                    encode(message: _26.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _26.CommitID;
                    fromJSON(object: any): _26.CommitID;
                    toJSON(message: _26.CommitID): unknown;
                    fromPartial(object: Partial<_26.CommitID>): _26.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                LCDQueryClient: typeof _175.LCDQueryClient;
                Block: {
                    encode(message: _29.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _29.Block;
                    fromJSON(object: any): _29.Block;
                    toJSON(message: _29.Block): unknown;
                    fromPartial(object: Partial<_29.Block>): _29.Block;
                };
                Header: {
                    encode(message: _29.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _29.Header;
                    fromJSON(object: any): _29.Header;
                    toJSON(message: _29.Header): unknown;
                    fromPartial(object: Partial<_29.Header>): _29.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _28.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _28.GetValidatorSetByHeightRequest;
                    toJSON(message: _28.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_28.GetValidatorSetByHeightRequest>): _28.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _28.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _28.GetValidatorSetByHeightResponse;
                    toJSON(message: _28.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_28.GetValidatorSetByHeightResponse>): _28.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _28.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _28.GetLatestValidatorSetRequest;
                    toJSON(message: _28.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_28.GetLatestValidatorSetRequest>): _28.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _28.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _28.GetLatestValidatorSetResponse;
                    toJSON(message: _28.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_28.GetLatestValidatorSetResponse>): _28.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _28.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.Validator;
                    fromJSON(object: any): _28.Validator;
                    toJSON(message: _28.Validator): unknown;
                    fromPartial(object: Partial<_28.Validator>): _28.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _28.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetBlockByHeightRequest;
                    fromJSON(object: any): _28.GetBlockByHeightRequest;
                    toJSON(message: _28.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_28.GetBlockByHeightRequest>): _28.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _28.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetBlockByHeightResponse;
                    fromJSON(object: any): _28.GetBlockByHeightResponse;
                    toJSON(message: _28.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_28.GetBlockByHeightResponse>): _28.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _28.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetLatestBlockRequest;
                    fromJSON(_: any): _28.GetLatestBlockRequest;
                    toJSON(_: _28.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_28.GetLatestBlockRequest>): _28.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _28.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetLatestBlockResponse;
                    fromJSON(object: any): _28.GetLatestBlockResponse;
                    toJSON(message: _28.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_28.GetLatestBlockResponse>): _28.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _28.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetSyncingRequest;
                    fromJSON(_: any): _28.GetSyncingRequest;
                    toJSON(_: _28.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_28.GetSyncingRequest>): _28.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _28.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetSyncingResponse;
                    fromJSON(object: any): _28.GetSyncingResponse;
                    toJSON(message: _28.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_28.GetSyncingResponse>): _28.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _28.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetNodeInfoRequest;
                    fromJSON(_: any): _28.GetNodeInfoRequest;
                    toJSON(_: _28.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_28.GetNodeInfoRequest>): _28.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _28.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.GetNodeInfoResponse;
                    fromJSON(object: any): _28.GetNodeInfoResponse;
                    toJSON(message: _28.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_28.GetNodeInfoResponse>): _28.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _28.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.VersionInfo;
                    fromJSON(object: any): _28.VersionInfo;
                    toJSON(message: _28.VersionInfo): unknown;
                    fromPartial(object: Partial<_28.VersionInfo>): _28.VersionInfo;
                };
                Module: {
                    encode(message: _28.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.Module;
                    fromJSON(object: any): _28.Module;
                    toJSON(message: _28.Module): unknown;
                    fromPartial(object: Partial<_28.Module>): _28.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _28.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.ABCIQueryRequest;
                    fromJSON(object: any): _28.ABCIQueryRequest;
                    toJSON(message: _28.ABCIQueryRequest): unknown;
                    fromPartial(object: Partial<_28.ABCIQueryRequest>): _28.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _28.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.ABCIQueryResponse;
                    fromJSON(object: any): _28.ABCIQueryResponse;
                    toJSON(message: _28.ABCIQueryResponse): unknown;
                    fromPartial(object: Partial<_28.ABCIQueryResponse>): _28.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _28.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.ProofOp;
                    fromJSON(object: any): _28.ProofOp;
                    toJSON(message: _28.ProofOp): unknown;
                    fromPartial(object: Partial<_28.ProofOp>): _28.ProofOp;
                };
                ProofOps: {
                    encode(message: _28.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _28.ProofOps;
                    fromJSON(object: any): _28.ProofOps;
                    toJSON(message: _28.ProofOps): unknown;
                    fromPartial(object: Partial<_28.ProofOps>): _28.ProofOps;
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
            };
            DecCoin: {
                encode(message: _30.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _30.DecCoin;
                fromJSON(object: any): _30.DecCoin;
                toJSON(message: _30.DecCoin): unknown;
                fromPartial(object: Partial<_30.DecCoin>): _30.DecCoin;
            };
            IntProto: {
                encode(message: _30.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _30.IntProto;
                fromJSON(object: any): _30.IntProto;
                toJSON(message: _30.IntProto): unknown;
                fromPartial(object: Partial<_30.IntProto>): _30.IntProto;
            };
            DecProto: {
                encode(message: _30.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _30.DecProto;
                fromJSON(object: any): _30.DecProto;
                toJSON(message: _30.DecProto): unknown;
                fromPartial(object: Partial<_30.DecProto>): _30.DecProto;
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
            };
            GenesisState: {
                encode(message: _32.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _32.GenesisState;
                fromJSON(object: any): _32.GenesisState;
                toJSON(message: _32.GenesisState): unknown;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
            };
            Capability: {
                encode(message: _31.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _31.Capability;
                fromJSON(object: any): _31.Capability;
                toJSON(message: _31.Capability): unknown;
                fromPartial(object: Partial<_31.Capability>): _31.Capability;
            };
            Owner: {
                encode(message: _31.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _31.Owner;
                fromJSON(object: any): _31.Owner;
                toJSON(message: _31.Owner): unknown;
                fromPartial(object: Partial<_31.Owner>): _31.Owner;
            };
            CapabilityOwners: {
                encode(message: _31.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _31.CapabilityOwners;
                fromJSON(object: any): _31.CapabilityOwners;
                toJSON(message: _31.CapabilityOwners): unknown;
                fromPartial(object: Partial<_31.CapabilityOwners>): _31.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
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
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _34.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _34.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _34.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _34.MsgVerifyInvariant;
                fromJSON(object: any): _34.MsgVerifyInvariant;
                toJSON(message: _34.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_34.MsgVerifyInvariant>): _34.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _34.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _34.MsgVerifyInvariantResponse;
                fromJSON(_: any): _34.MsgVerifyInvariantResponse;
                toJSON(_: _34.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_34.MsgVerifyInvariantResponse>): _34.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _33.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _33.GenesisState;
                fromJSON(object: any): _33.GenesisState;
                toJSON(message: _33.GenesisState): unknown;
                fromPartial(object: Partial<_33.GenesisState>): _33.GenesisState;
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
            };
            PrivKey: {
                encode(message: _35.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _35.PrivKey;
                fromJSON(object: any): _35.PrivKey;
                toJSON(message: _35.PrivKey): unknown;
                fromPartial(object: Partial<_35.PrivKey>): _35.PrivKey;
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
                };
                Record_Local: {
                    encode(message: _37.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _37.Record_Local;
                    fromJSON(object: any): _37.Record_Local;
                    toJSON(message: _37.Record_Local): unknown;
                    fromPartial(object: Partial<_37.Record_Local>): _37.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _37.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _37.Record_Ledger;
                    fromJSON(object: any): _37.Record_Ledger;
                    toJSON(message: _37.Record_Ledger): unknown;
                    fromPartial(object: Partial<_37.Record_Ledger>): _37.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _37.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _37.Record_Multi;
                    fromJSON(_: any): _37.Record_Multi;
                    toJSON(_: _37.Record_Multi): unknown;
                    fromPartial(_: Partial<_37.Record_Multi>): _37.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _37.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _37.Record_Offline;
                    fromJSON(_: any): _37.Record_Offline;
                    toJSON(_: _37.Record_Offline): unknown;
                    fromPartial(_: Partial<_37.Record_Offline>): _37.Record_Offline;
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
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _39.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _39.PubKey;
                fromJSON(object: any): _39.PubKey;
                toJSON(message: _39.PubKey): unknown;
                fromPartial(object: Partial<_39.PubKey>): _39.PubKey;
            };
            PrivKey: {
                encode(message: _39.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _39.PrivKey;
                fromJSON(object: any): _39.PrivKey;
                toJSON(message: _39.PrivKey): unknown;
                fromPartial(object: Partial<_39.PrivKey>): _39.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _40.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _40.PubKey;
                fromJSON(object: any): _40.PubKey;
                toJSON(message: _40.PubKey): unknown;
                fromPartial(object: Partial<_40.PubKey>): _40.PubKey;
            };
            PrivKey: {
                encode(message: _40.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _40.PrivKey;
                fromJSON(object: any): _40.PrivKey;
                toJSON(message: _40.PrivKey): unknown;
                fromPartial(object: Partial<_40.PrivKey>): _40.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            LCDQueryClient: typeof _176.LCDQueryClient;
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
                    toAmino: ({ delegatorAddress, withdrawAddress }: _44.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _44.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _44.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _44.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _44.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _44.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _44.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _44.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _44.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _44.MsgSetWithdrawAddress;
                fromJSON(object: any): _44.MsgSetWithdrawAddress;
                toJSON(message: _44.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_44.MsgSetWithdrawAddress>): _44.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _44.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _44.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _44.MsgSetWithdrawAddressResponse;
                toJSON(_: _44.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_44.MsgSetWithdrawAddressResponse>): _44.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _44.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _44.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _44.MsgWithdrawDelegatorReward;
                toJSON(message: _44.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_44.MsgWithdrawDelegatorReward>): _44.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _44.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _44.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _44.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _44.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_44.MsgWithdrawDelegatorRewardResponse>): _44.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _44.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _44.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _44.MsgWithdrawValidatorCommission;
                toJSON(message: _44.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_44.MsgWithdrawValidatorCommission>): _44.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _44.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _44.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _44.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _44.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_44.MsgWithdrawValidatorCommissionResponse>): _44.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _44.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _44.MsgFundCommunityPool;
                fromJSON(object: any): _44.MsgFundCommunityPool;
                toJSON(message: _44.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_44.MsgFundCommunityPool>): _44.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _44.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _44.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _44.MsgFundCommunityPoolResponse;
                toJSON(_: _44.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_44.MsgFundCommunityPoolResponse>): _44.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _43.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryParamsRequest;
                fromJSON(_: any): _43.QueryParamsRequest;
                toJSON(_: _43.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_43.QueryParamsRequest>): _43.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _43.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryParamsResponse;
                fromJSON(object: any): _43.QueryParamsResponse;
                toJSON(message: _43.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_43.QueryParamsResponse>): _43.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _43.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _43.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _43.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_43.QueryValidatorOutstandingRewardsRequest>): _43.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _43.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _43.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _43.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_43.QueryValidatorOutstandingRewardsResponse>): _43.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _43.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryValidatorCommissionRequest;
                fromJSON(object: any): _43.QueryValidatorCommissionRequest;
                toJSON(message: _43.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_43.QueryValidatorCommissionRequest>): _43.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _43.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryValidatorCommissionResponse;
                fromJSON(object: any): _43.QueryValidatorCommissionResponse;
                toJSON(message: _43.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_43.QueryValidatorCommissionResponse>): _43.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _43.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryValidatorSlashesRequest;
                fromJSON(object: any): _43.QueryValidatorSlashesRequest;
                toJSON(message: _43.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_43.QueryValidatorSlashesRequest>): _43.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _43.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryValidatorSlashesResponse;
                fromJSON(object: any): _43.QueryValidatorSlashesResponse;
                toJSON(message: _43.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_43.QueryValidatorSlashesResponse>): _43.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _43.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryDelegationRewardsRequest;
                fromJSON(object: any): _43.QueryDelegationRewardsRequest;
                toJSON(message: _43.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_43.QueryDelegationRewardsRequest>): _43.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _43.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryDelegationRewardsResponse;
                fromJSON(object: any): _43.QueryDelegationRewardsResponse;
                toJSON(message: _43.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_43.QueryDelegationRewardsResponse>): _43.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _43.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _43.QueryDelegationTotalRewardsRequest;
                toJSON(message: _43.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_43.QueryDelegationTotalRewardsRequest>): _43.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _43.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _43.QueryDelegationTotalRewardsResponse;
                toJSON(message: _43.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_43.QueryDelegationTotalRewardsResponse>): _43.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _43.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _43.QueryDelegatorValidatorsRequest;
                toJSON(message: _43.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_43.QueryDelegatorValidatorsRequest>): _43.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _43.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _43.QueryDelegatorValidatorsResponse;
                toJSON(message: _43.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_43.QueryDelegatorValidatorsResponse>): _43.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _43.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _43.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _43.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_43.QueryDelegatorWithdrawAddressRequest>): _43.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _43.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _43.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _43.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_43.QueryDelegatorWithdrawAddressResponse>): _43.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _43.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryCommunityPoolRequest;
                fromJSON(_: any): _43.QueryCommunityPoolRequest;
                toJSON(_: _43.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_43.QueryCommunityPoolRequest>): _43.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _43.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _43.QueryCommunityPoolResponse;
                fromJSON(object: any): _43.QueryCommunityPoolResponse;
                toJSON(message: _43.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_43.QueryCommunityPoolResponse>): _43.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _42.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _42.DelegatorWithdrawInfo;
                fromJSON(object: any): _42.DelegatorWithdrawInfo;
                toJSON(message: _42.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_42.DelegatorWithdrawInfo>): _42.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _42.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _42.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _42.ValidatorOutstandingRewardsRecord;
                toJSON(message: _42.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_42.ValidatorOutstandingRewardsRecord>): _42.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _42.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _42.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _42.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _42.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_42.ValidatorAccumulatedCommissionRecord>): _42.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _42.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _42.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _42.ValidatorHistoricalRewardsRecord;
                toJSON(message: _42.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_42.ValidatorHistoricalRewardsRecord>): _42.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _42.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _42.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _42.ValidatorCurrentRewardsRecord;
                toJSON(message: _42.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_42.ValidatorCurrentRewardsRecord>): _42.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _42.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _42.DelegatorStartingInfoRecord;
                fromJSON(object: any): _42.DelegatorStartingInfoRecord;
                toJSON(message: _42.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_42.DelegatorStartingInfoRecord>): _42.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _42.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _42.ValidatorSlashEventRecord;
                fromJSON(object: any): _42.ValidatorSlashEventRecord;
                toJSON(message: _42.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_42.ValidatorSlashEventRecord>): _42.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _42.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _42.GenesisState;
                fromJSON(object: any): _42.GenesisState;
                toJSON(message: _42.GenesisState): unknown;
                fromPartial(object: Partial<_42.GenesisState>): _42.GenesisState;
            };
            Params: {
                encode(message: _41.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.Params;
                fromJSON(object: any): _41.Params;
                toJSON(message: _41.Params): unknown;
                fromPartial(object: Partial<_41.Params>): _41.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _41.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.ValidatorHistoricalRewards;
                fromJSON(object: any): _41.ValidatorHistoricalRewards;
                toJSON(message: _41.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_41.ValidatorHistoricalRewards>): _41.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _41.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.ValidatorCurrentRewards;
                fromJSON(object: any): _41.ValidatorCurrentRewards;
                toJSON(message: _41.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_41.ValidatorCurrentRewards>): _41.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _41.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.ValidatorAccumulatedCommission;
                fromJSON(object: any): _41.ValidatorAccumulatedCommission;
                toJSON(message: _41.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_41.ValidatorAccumulatedCommission>): _41.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _41.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.ValidatorOutstandingRewards;
                fromJSON(object: any): _41.ValidatorOutstandingRewards;
                toJSON(message: _41.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_41.ValidatorOutstandingRewards>): _41.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _41.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.ValidatorSlashEvent;
                fromJSON(object: any): _41.ValidatorSlashEvent;
                toJSON(message: _41.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_41.ValidatorSlashEvent>): _41.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _41.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.ValidatorSlashEvents;
                fromJSON(object: any): _41.ValidatorSlashEvents;
                toJSON(message: _41.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_41.ValidatorSlashEvents>): _41.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _41.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.FeePool;
                fromJSON(object: any): _41.FeePool;
                toJSON(message: _41.FeePool): unknown;
                fromPartial(object: Partial<_41.FeePool>): _41.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _41.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.CommunityPoolSpendProposal;
                fromJSON(object: any): _41.CommunityPoolSpendProposal;
                toJSON(message: _41.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_41.CommunityPoolSpendProposal>): _41.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _41.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.DelegatorStartingInfo;
                fromJSON(object: any): _41.DelegatorStartingInfo;
                toJSON(message: _41.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_41.DelegatorStartingInfo>): _41.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _41.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.DelegationDelegatorReward;
                fromJSON(object: any): _41.DelegationDelegatorReward;
                toJSON(message: _41.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_41.DelegationDelegatorReward>): _41.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _41.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _41.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _41.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _41.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_41.CommunityPoolSpendProposalWithDeposit>): _41.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            LCDQueryClient: typeof _177.LCDQueryClient;
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
                    toAmino: ({ submitter, evidence }: _48.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _48.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _48.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.MsgSubmitEvidence;
                fromJSON(object: any): _48.MsgSubmitEvidence;
                toJSON(message: _48.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_48.MsgSubmitEvidence>): _48.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _48.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _48.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _48.MsgSubmitEvidenceResponse;
                toJSON(message: _48.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_48.MsgSubmitEvidenceResponse>): _48.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _47.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _47.QueryEvidenceRequest;
                fromJSON(object: any): _47.QueryEvidenceRequest;
                toJSON(message: _47.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_47.QueryEvidenceRequest>): _47.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _47.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _47.QueryEvidenceResponse;
                fromJSON(object: any): _47.QueryEvidenceResponse;
                toJSON(message: _47.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_47.QueryEvidenceResponse>): _47.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _47.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _47.QueryAllEvidenceRequest;
                fromJSON(object: any): _47.QueryAllEvidenceRequest;
                toJSON(message: _47.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_47.QueryAllEvidenceRequest>): _47.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _47.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _47.QueryAllEvidenceResponse;
                fromJSON(object: any): _47.QueryAllEvidenceResponse;
                toJSON(message: _47.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_47.QueryAllEvidenceResponse>): _47.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _46.GenesisState;
                fromJSON(object: any): _46.GenesisState;
                toJSON(message: _46.GenesisState): unknown;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
            };
            Equivocation: {
                encode(message: _45.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _45.Equivocation;
                fromJSON(object: any): _45.Equivocation;
                toJSON(message: _45.Equivocation): unknown;
                fromPartial(object: Partial<_45.Equivocation>): _45.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            LCDQueryClient: typeof _178.LCDQueryClient;
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
                    toAmino: ({ granter, grantee, allowance }: _52.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _52.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _52.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _52.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _52.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _52.MsgGrantAllowance;
                fromJSON(object: any): _52.MsgGrantAllowance;
                toJSON(message: _52.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_52.MsgGrantAllowance>): _52.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _52.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _52.MsgGrantAllowanceResponse;
                fromJSON(_: any): _52.MsgGrantAllowanceResponse;
                toJSON(_: _52.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_52.MsgGrantAllowanceResponse>): _52.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _52.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _52.MsgRevokeAllowance;
                fromJSON(object: any): _52.MsgRevokeAllowance;
                toJSON(message: _52.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_52.MsgRevokeAllowance>): _52.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _52.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _52.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _52.MsgRevokeAllowanceResponse;
                toJSON(_: _52.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_52.MsgRevokeAllowanceResponse>): _52.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _51.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.QueryAllowanceRequest;
                fromJSON(object: any): _51.QueryAllowanceRequest;
                toJSON(message: _51.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_51.QueryAllowanceRequest>): _51.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _51.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.QueryAllowanceResponse;
                fromJSON(object: any): _51.QueryAllowanceResponse;
                toJSON(message: _51.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_51.QueryAllowanceResponse>): _51.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _51.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.QueryAllowancesRequest;
                fromJSON(object: any): _51.QueryAllowancesRequest;
                toJSON(message: _51.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_51.QueryAllowancesRequest>): _51.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _51.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.QueryAllowancesResponse;
                fromJSON(object: any): _51.QueryAllowancesResponse;
                toJSON(message: _51.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_51.QueryAllowancesResponse>): _51.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _51.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _51.QueryAllowancesByGranterRequest;
                toJSON(message: _51.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_51.QueryAllowancesByGranterRequest>): _51.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _51.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _51.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _51.QueryAllowancesByGranterResponse;
                toJSON(message: _51.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_51.QueryAllowancesByGranterResponse>): _51.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _50.GenesisState;
                fromJSON(object: any): _50.GenesisState;
                toJSON(message: _50.GenesisState): unknown;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
            };
            BasicAllowance: {
                encode(message: _49.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.BasicAllowance;
                fromJSON(object: any): _49.BasicAllowance;
                toJSON(message: _49.BasicAllowance): unknown;
                fromPartial(object: Partial<_49.BasicAllowance>): _49.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _49.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.PeriodicAllowance;
                fromJSON(object: any): _49.PeriodicAllowance;
                toJSON(message: _49.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_49.PeriodicAllowance>): _49.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _49.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.AllowedMsgAllowance;
                fromJSON(object: any): _49.AllowedMsgAllowance;
                toJSON(message: _49.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_49.AllowedMsgAllowance>): _49.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _49.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _49.Grant;
                fromJSON(object: any): _49.Grant;
                toJSON(message: _49.Grant): unknown;
                fromPartial(object: Partial<_49.Grant>): _49.Grant;
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
            };
        };
    }
    namespace gov {
        const v1: {
            LCDQueryClient: typeof _179.LCDQueryClient;
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
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _57.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _57.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _57.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _57.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _57.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _57.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _57.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _57.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _57.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _57.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _57.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgSubmitProposal;
                fromJSON(object: any): _57.MsgSubmitProposal;
                toJSON(message: _57.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_57.MsgSubmitProposal>): _57.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _57.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgSubmitProposalResponse;
                fromJSON(object: any): _57.MsgSubmitProposalResponse;
                toJSON(message: _57.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_57.MsgSubmitProposalResponse>): _57.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _57.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgExecLegacyContent;
                fromJSON(object: any): _57.MsgExecLegacyContent;
                toJSON(message: _57.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_57.MsgExecLegacyContent>): _57.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _57.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgExecLegacyContentResponse;
                fromJSON(_: any): _57.MsgExecLegacyContentResponse;
                toJSON(_: _57.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_57.MsgExecLegacyContentResponse>): _57.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _57.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgVote;
                fromJSON(object: any): _57.MsgVote;
                toJSON(message: _57.MsgVote): unknown;
                fromPartial(object: Partial<_57.MsgVote>): _57.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _57.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgVoteResponse;
                fromJSON(_: any): _57.MsgVoteResponse;
                toJSON(_: _57.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_57.MsgVoteResponse>): _57.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _57.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgVoteWeighted;
                fromJSON(object: any): _57.MsgVoteWeighted;
                toJSON(message: _57.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_57.MsgVoteWeighted>): _57.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _57.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgVoteWeightedResponse;
                fromJSON(_: any): _57.MsgVoteWeightedResponse;
                toJSON(_: _57.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_57.MsgVoteWeightedResponse>): _57.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _57.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgDeposit;
                fromJSON(object: any): _57.MsgDeposit;
                toJSON(message: _57.MsgDeposit): unknown;
                fromPartial(object: Partial<_57.MsgDeposit>): _57.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _57.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _57.MsgDepositResponse;
                fromJSON(_: any): _57.MsgDepositResponse;
                toJSON(_: _57.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_57.MsgDepositResponse>): _57.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _56.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryProposalRequest;
                fromJSON(object: any): _56.QueryProposalRequest;
                toJSON(message: _56.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_56.QueryProposalRequest>): _56.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _56.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryProposalResponse;
                fromJSON(object: any): _56.QueryProposalResponse;
                toJSON(message: _56.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_56.QueryProposalResponse>): _56.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _56.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryProposalsRequest;
                fromJSON(object: any): _56.QueryProposalsRequest;
                toJSON(message: _56.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_56.QueryProposalsRequest>): _56.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _56.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryProposalsResponse;
                fromJSON(object: any): _56.QueryProposalsResponse;
                toJSON(message: _56.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_56.QueryProposalsResponse>): _56.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _56.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryVoteRequest;
                fromJSON(object: any): _56.QueryVoteRequest;
                toJSON(message: _56.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_56.QueryVoteRequest>): _56.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _56.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryVoteResponse;
                fromJSON(object: any): _56.QueryVoteResponse;
                toJSON(message: _56.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_56.QueryVoteResponse>): _56.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _56.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryVotesRequest;
                fromJSON(object: any): _56.QueryVotesRequest;
                toJSON(message: _56.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_56.QueryVotesRequest>): _56.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _56.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryVotesResponse;
                fromJSON(object: any): _56.QueryVotesResponse;
                toJSON(message: _56.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_56.QueryVotesResponse>): _56.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _56.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryParamsRequest;
                fromJSON(object: any): _56.QueryParamsRequest;
                toJSON(message: _56.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_56.QueryParamsRequest>): _56.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _56.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryParamsResponse;
                fromJSON(object: any): _56.QueryParamsResponse;
                toJSON(message: _56.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_56.QueryParamsResponse>): _56.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _56.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryDepositRequest;
                fromJSON(object: any): _56.QueryDepositRequest;
                toJSON(message: _56.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_56.QueryDepositRequest>): _56.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _56.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryDepositResponse;
                fromJSON(object: any): _56.QueryDepositResponse;
                toJSON(message: _56.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_56.QueryDepositResponse>): _56.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _56.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryDepositsRequest;
                fromJSON(object: any): _56.QueryDepositsRequest;
                toJSON(message: _56.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_56.QueryDepositsRequest>): _56.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _56.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryDepositsResponse;
                fromJSON(object: any): _56.QueryDepositsResponse;
                toJSON(message: _56.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_56.QueryDepositsResponse>): _56.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _56.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryTallyResultRequest;
                fromJSON(object: any): _56.QueryTallyResultRequest;
                toJSON(message: _56.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_56.QueryTallyResultRequest>): _56.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _56.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _56.QueryTallyResultResponse;
                fromJSON(object: any): _56.QueryTallyResultResponse;
                toJSON(message: _56.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_56.QueryTallyResultResponse>): _56.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _55.VoteOption;
            voteOptionToJSON(object: _55.VoteOption): string;
            proposalStatusFromJSON(object: any): _55.ProposalStatus;
            proposalStatusToJSON(object: _55.ProposalStatus): string;
            VoteOption: typeof _55.VoteOption;
            VoteOptionSDKType: typeof _55.VoteOptionSDKType;
            ProposalStatus: typeof _55.ProposalStatus;
            ProposalStatusSDKType: typeof _55.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _55.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.WeightedVoteOption;
                fromJSON(object: any): _55.WeightedVoteOption;
                toJSON(message: _55.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_55.WeightedVoteOption>): _55.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _55.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.Deposit;
                fromJSON(object: any): _55.Deposit;
                toJSON(message: _55.Deposit): unknown;
                fromPartial(object: Partial<_55.Deposit>): _55.Deposit;
            };
            Proposal: {
                encode(message: _55.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.Proposal;
                fromJSON(object: any): _55.Proposal;
                toJSON(message: _55.Proposal): unknown;
                fromPartial(object: Partial<_55.Proposal>): _55.Proposal;
            };
            TallyResult: {
                encode(message: _55.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.TallyResult;
                fromJSON(object: any): _55.TallyResult;
                toJSON(message: _55.TallyResult): unknown;
                fromPartial(object: Partial<_55.TallyResult>): _55.TallyResult;
            };
            Vote: {
                encode(message: _55.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.Vote;
                fromJSON(object: any): _55.Vote;
                toJSON(message: _55.Vote): unknown;
                fromPartial(object: Partial<_55.Vote>): _55.Vote;
            };
            DepositParams: {
                encode(message: _55.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.DepositParams;
                fromJSON(object: any): _55.DepositParams;
                toJSON(message: _55.DepositParams): unknown;
                fromPartial(object: Partial<_55.DepositParams>): _55.DepositParams;
            };
            VotingParams: {
                encode(message: _55.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.VotingParams;
                fromJSON(object: any): _55.VotingParams;
                toJSON(message: _55.VotingParams): unknown;
                fromPartial(object: Partial<_55.VotingParams>): _55.VotingParams;
            };
            TallyParams: {
                encode(message: _55.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _55.TallyParams;
                fromJSON(object: any): _55.TallyParams;
                toJSON(message: _55.TallyParams): unknown;
                fromPartial(object: Partial<_55.TallyParams>): _55.TallyParams;
            };
            GenesisState: {
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _54.GenesisState;
                fromJSON(object: any): _54.GenesisState;
                toJSON(message: _54.GenesisState): unknown;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
            };
        };
        const v1beta1: {
            LCDQueryClient: typeof _180.LCDQueryClient;
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
                    toAmino: ({ content, initialDeposit, proposer }: _61.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _61.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _61.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _61.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _61.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _61.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _61.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _61.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _61.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgSubmitProposal;
                fromJSON(object: any): _61.MsgSubmitProposal;
                toJSON(message: _61.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_61.MsgSubmitProposal>): _61.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _61.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgSubmitProposalResponse;
                fromJSON(object: any): _61.MsgSubmitProposalResponse;
                toJSON(message: _61.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_61.MsgSubmitProposalResponse>): _61.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _61.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgVote;
                fromJSON(object: any): _61.MsgVote;
                toJSON(message: _61.MsgVote): unknown;
                fromPartial(object: Partial<_61.MsgVote>): _61.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _61.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgVoteResponse;
                fromJSON(_: any): _61.MsgVoteResponse;
                toJSON(_: _61.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_61.MsgVoteResponse>): _61.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _61.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgVoteWeighted;
                fromJSON(object: any): _61.MsgVoteWeighted;
                toJSON(message: _61.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_61.MsgVoteWeighted>): _61.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _61.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgVoteWeightedResponse;
                fromJSON(_: any): _61.MsgVoteWeightedResponse;
                toJSON(_: _61.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_61.MsgVoteWeightedResponse>): _61.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _61.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgDeposit;
                fromJSON(object: any): _61.MsgDeposit;
                toJSON(message: _61.MsgDeposit): unknown;
                fromPartial(object: Partial<_61.MsgDeposit>): _61.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _61.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _61.MsgDepositResponse;
                fromJSON(_: any): _61.MsgDepositResponse;
                toJSON(_: _61.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_61.MsgDepositResponse>): _61.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _60.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryProposalRequest;
                fromJSON(object: any): _60.QueryProposalRequest;
                toJSON(message: _60.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_60.QueryProposalRequest>): _60.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _60.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryProposalResponse;
                fromJSON(object: any): _60.QueryProposalResponse;
                toJSON(message: _60.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_60.QueryProposalResponse>): _60.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _60.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryProposalsRequest;
                fromJSON(object: any): _60.QueryProposalsRequest;
                toJSON(message: _60.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_60.QueryProposalsRequest>): _60.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _60.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryProposalsResponse;
                fromJSON(object: any): _60.QueryProposalsResponse;
                toJSON(message: _60.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_60.QueryProposalsResponse>): _60.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _60.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryVoteRequest;
                fromJSON(object: any): _60.QueryVoteRequest;
                toJSON(message: _60.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_60.QueryVoteRequest>): _60.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _60.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryVoteResponse;
                fromJSON(object: any): _60.QueryVoteResponse;
                toJSON(message: _60.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_60.QueryVoteResponse>): _60.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _60.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryVotesRequest;
                fromJSON(object: any): _60.QueryVotesRequest;
                toJSON(message: _60.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_60.QueryVotesRequest>): _60.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _60.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryVotesResponse;
                fromJSON(object: any): _60.QueryVotesResponse;
                toJSON(message: _60.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_60.QueryVotesResponse>): _60.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _60.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryParamsRequest;
                fromJSON(object: any): _60.QueryParamsRequest;
                toJSON(message: _60.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_60.QueryParamsRequest>): _60.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _60.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryParamsResponse;
                fromJSON(object: any): _60.QueryParamsResponse;
                toJSON(message: _60.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_60.QueryParamsResponse>): _60.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _60.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryDepositRequest;
                fromJSON(object: any): _60.QueryDepositRequest;
                toJSON(message: _60.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_60.QueryDepositRequest>): _60.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _60.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryDepositResponse;
                fromJSON(object: any): _60.QueryDepositResponse;
                toJSON(message: _60.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_60.QueryDepositResponse>): _60.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _60.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryDepositsRequest;
                fromJSON(object: any): _60.QueryDepositsRequest;
                toJSON(message: _60.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_60.QueryDepositsRequest>): _60.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _60.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryDepositsResponse;
                fromJSON(object: any): _60.QueryDepositsResponse;
                toJSON(message: _60.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_60.QueryDepositsResponse>): _60.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _60.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryTallyResultRequest;
                fromJSON(object: any): _60.QueryTallyResultRequest;
                toJSON(message: _60.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_60.QueryTallyResultRequest>): _60.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _60.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _60.QueryTallyResultResponse;
                fromJSON(object: any): _60.QueryTallyResultResponse;
                toJSON(message: _60.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_60.QueryTallyResultResponse>): _60.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _59.VoteOption;
            voteOptionToJSON(object: _59.VoteOption): string;
            proposalStatusFromJSON(object: any): _59.ProposalStatus;
            proposalStatusToJSON(object: _59.ProposalStatus): string;
            VoteOption: typeof _59.VoteOption;
            VoteOptionSDKType: typeof _59.VoteOptionSDKType;
            ProposalStatus: typeof _59.ProposalStatus;
            ProposalStatusSDKType: typeof _59.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _59.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.WeightedVoteOption;
                fromJSON(object: any): _59.WeightedVoteOption;
                toJSON(message: _59.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_59.WeightedVoteOption>): _59.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _59.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.TextProposal;
                fromJSON(object: any): _59.TextProposal;
                toJSON(message: _59.TextProposal): unknown;
                fromPartial(object: Partial<_59.TextProposal>): _59.TextProposal;
            };
            Deposit: {
                encode(message: _59.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.Deposit;
                fromJSON(object: any): _59.Deposit;
                toJSON(message: _59.Deposit): unknown;
                fromPartial(object: Partial<_59.Deposit>): _59.Deposit;
            };
            Proposal: {
                encode(message: _59.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.Proposal;
                fromJSON(object: any): _59.Proposal;
                toJSON(message: _59.Proposal): unknown;
                fromPartial(object: Partial<_59.Proposal>): _59.Proposal;
            };
            TallyResult: {
                encode(message: _59.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.TallyResult;
                fromJSON(object: any): _59.TallyResult;
                toJSON(message: _59.TallyResult): unknown;
                fromPartial(object: Partial<_59.TallyResult>): _59.TallyResult;
            };
            Vote: {
                encode(message: _59.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.Vote;
                fromJSON(object: any): _59.Vote;
                toJSON(message: _59.Vote): unknown;
                fromPartial(object: Partial<_59.Vote>): _59.Vote;
            };
            DepositParams: {
                encode(message: _59.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.DepositParams;
                fromJSON(object: any): _59.DepositParams;
                toJSON(message: _59.DepositParams): unknown;
                fromPartial(object: Partial<_59.DepositParams>): _59.DepositParams;
            };
            VotingParams: {
                encode(message: _59.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.VotingParams;
                fromJSON(object: any): _59.VotingParams;
                toJSON(message: _59.VotingParams): unknown;
                fromPartial(object: Partial<_59.VotingParams>): _59.VotingParams;
            };
            TallyParams: {
                encode(message: _59.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _59.TallyParams;
                fromJSON(object: any): _59.TallyParams;
                toJSON(message: _59.TallyParams): unknown;
                fromPartial(object: Partial<_59.TallyParams>): _59.TallyParams;
            };
            GenesisState: {
                encode(message: _58.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _58.GenesisState;
                fromJSON(object: any): _58.GenesisState;
                toJSON(message: _58.GenesisState): unknown;
                fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            LCDQueryClient: typeof _181.LCDQueryClient;
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
                    toAmino: ({ admin, members, metadata }: _65.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        metadata: string;
                    }) => _65.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _65.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                    }) => _65.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _65.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _65.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _65.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _65.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _65.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _65.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _65.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _65.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, newAdmin }: _65.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_policy_address, new_admin }: {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    }) => _65.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: _65.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        group_policy_address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_policy_address, decision_policy }: {
                        admin: string;
                        group_policy_address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _65.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, metadata }: _65.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_policy_address, metadata }: {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    }) => _65.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec }: _65.MsgSubmitProposal) => {
                        group_policy_address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ group_policy_address, proposers, metadata, messages, exec }: {
                        group_policy_address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _65.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _65.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _65.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _65.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _65.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, executor }: _65.MsgExec) => {
                        proposal_id: string;
                        executor: string;
                    };
                    fromAmino: ({ proposal_id, executor }: {
                        proposal_id: string;
                        executor: string;
                    }) => _65.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _65.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _65.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _66.VoteOption;
            voteOptionToJSON(object: _66.VoteOption): string;
            proposalStatusFromJSON(object: any): _66.ProposalStatus;
            proposalStatusToJSON(object: _66.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _66.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _66.ProposalExecutorResult): string;
            VoteOption: typeof _66.VoteOption;
            VoteOptionSDKType: typeof _66.VoteOptionSDKType;
            ProposalStatus: typeof _66.ProposalStatus;
            ProposalStatusSDKType: typeof _66.ProposalStatusSDKType;
            ProposalExecutorResult: typeof _66.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _66.ProposalExecutorResultSDKType;
            Member: {
                encode(message: _66.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.Member;
                fromJSON(object: any): _66.Member;
                toJSON(message: _66.Member): unknown;
                fromPartial(object: Partial<_66.Member>): _66.Member;
            };
            MemberRequest: {
                encode(message: _66.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.MemberRequest;
                fromJSON(object: any): _66.MemberRequest;
                toJSON(message: _66.MemberRequest): unknown;
                fromPartial(object: Partial<_66.MemberRequest>): _66.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _66.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.ThresholdDecisionPolicy;
                fromJSON(object: any): _66.ThresholdDecisionPolicy;
                toJSON(message: _66.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_66.ThresholdDecisionPolicy>): _66.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _66.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.PercentageDecisionPolicy;
                fromJSON(object: any): _66.PercentageDecisionPolicy;
                toJSON(message: _66.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_66.PercentageDecisionPolicy>): _66.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _66.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.DecisionPolicyWindows;
                fromJSON(object: any): _66.DecisionPolicyWindows;
                toJSON(message: _66.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_66.DecisionPolicyWindows>): _66.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _66.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.GroupInfo;
                fromJSON(object: any): _66.GroupInfo;
                toJSON(message: _66.GroupInfo): unknown;
                fromPartial(object: Partial<_66.GroupInfo>): _66.GroupInfo;
            };
            GroupMember: {
                encode(message: _66.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.GroupMember;
                fromJSON(object: any): _66.GroupMember;
                toJSON(message: _66.GroupMember): unknown;
                fromPartial(object: Partial<_66.GroupMember>): _66.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _66.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.GroupPolicyInfo;
                fromJSON(object: any): _66.GroupPolicyInfo;
                toJSON(message: _66.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_66.GroupPolicyInfo>): _66.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _66.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.Proposal;
                fromJSON(object: any): _66.Proposal;
                toJSON(message: _66.Proposal): unknown;
                fromPartial(object: Partial<_66.Proposal>): _66.Proposal;
            };
            TallyResult: {
                encode(message: _66.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.TallyResult;
                fromJSON(object: any): _66.TallyResult;
                toJSON(message: _66.TallyResult): unknown;
                fromPartial(object: Partial<_66.TallyResult>): _66.TallyResult;
            };
            Vote: {
                encode(message: _66.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _66.Vote;
                fromJSON(object: any): _66.Vote;
                toJSON(message: _66.Vote): unknown;
                fromPartial(object: Partial<_66.Vote>): _66.Vote;
            };
            execFromJSON(object: any): _65.Exec;
            execToJSON(object: _65.Exec): string;
            Exec: typeof _65.Exec;
            ExecSDKType: typeof _65.ExecSDKType;
            MsgCreateGroup: {
                encode(message: _65.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgCreateGroup;
                fromJSON(object: any): _65.MsgCreateGroup;
                toJSON(message: _65.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_65.MsgCreateGroup>): _65.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _65.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgCreateGroupResponse;
                fromJSON(object: any): _65.MsgCreateGroupResponse;
                toJSON(message: _65.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_65.MsgCreateGroupResponse>): _65.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _65.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupMembers;
                fromJSON(object: any): _65.MsgUpdateGroupMembers;
                toJSON(message: _65.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_65.MsgUpdateGroupMembers>): _65.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _65.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _65.MsgUpdateGroupMembersResponse;
                toJSON(_: _65.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateGroupMembersResponse>): _65.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _65.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupAdmin;
                fromJSON(object: any): _65.MsgUpdateGroupAdmin;
                toJSON(message: _65.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_65.MsgUpdateGroupAdmin>): _65.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _65.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _65.MsgUpdateGroupAdminResponse;
                toJSON(_: _65.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateGroupAdminResponse>): _65.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _65.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupMetadata;
                fromJSON(object: any): _65.MsgUpdateGroupMetadata;
                toJSON(message: _65.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_65.MsgUpdateGroupMetadata>): _65.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _65.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _65.MsgUpdateGroupMetadataResponse;
                toJSON(_: _65.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateGroupMetadataResponse>): _65.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _65.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgCreateGroupPolicy;
                fromJSON(object: any): _65.MsgCreateGroupPolicy;
                toJSON(message: _65.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_65.MsgCreateGroupPolicy>): _65.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _65.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _65.MsgCreateGroupPolicyResponse;
                toJSON(message: _65.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_65.MsgCreateGroupPolicyResponse>): _65.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _65.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _65.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _65.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_65.MsgUpdateGroupPolicyAdmin>): _65.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _65.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _65.MsgCreateGroupWithPolicy;
                toJSON(message: _65.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_65.MsgCreateGroupWithPolicy>): _65.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _65.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _65.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _65.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_65.MsgCreateGroupWithPolicyResponse>): _65.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _65.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _65.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _65.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateGroupPolicyAdminResponse>): _65.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _65.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _65.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _65.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_65.MsgUpdateGroupPolicyDecisionPolicy>): _65.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _65.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _65.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _65.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateGroupPolicyDecisionPolicyResponse>): _65.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _65.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _65.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _65.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_65.MsgUpdateGroupPolicyMetadata>): _65.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _65.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _65.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _65.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateGroupPolicyMetadataResponse>): _65.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _65.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgSubmitProposal;
                fromJSON(object: any): _65.MsgSubmitProposal;
                toJSON(message: _65.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_65.MsgSubmitProposal>): _65.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _65.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgSubmitProposalResponse;
                fromJSON(object: any): _65.MsgSubmitProposalResponse;
                toJSON(message: _65.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_65.MsgSubmitProposalResponse>): _65.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _65.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgWithdrawProposal;
                fromJSON(object: any): _65.MsgWithdrawProposal;
                toJSON(message: _65.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_65.MsgWithdrawProposal>): _65.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _65.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgWithdrawProposalResponse;
                fromJSON(_: any): _65.MsgWithdrawProposalResponse;
                toJSON(_: _65.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_65.MsgWithdrawProposalResponse>): _65.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _65.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgVote;
                fromJSON(object: any): _65.MsgVote;
                toJSON(message: _65.MsgVote): unknown;
                fromPartial(object: Partial<_65.MsgVote>): _65.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _65.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgVoteResponse;
                fromJSON(_: any): _65.MsgVoteResponse;
                toJSON(_: _65.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_65.MsgVoteResponse>): _65.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _65.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgExec;
                fromJSON(object: any): _65.MsgExec;
                toJSON(message: _65.MsgExec): unknown;
                fromPartial(object: Partial<_65.MsgExec>): _65.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _65.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgExecResponse;
                fromJSON(object: any): _65.MsgExecResponse;
                toJSON(message: _65.MsgExecResponse): unknown;
                fromPartial(object: Partial<_65.MsgExecResponse>): _65.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _65.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgLeaveGroup;
                fromJSON(object: any): _65.MsgLeaveGroup;
                toJSON(message: _65.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_65.MsgLeaveGroup>): _65.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _65.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _65.MsgLeaveGroupResponse;
                fromJSON(_: any): _65.MsgLeaveGroupResponse;
                toJSON(_: _65.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_65.MsgLeaveGroupResponse>): _65.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _64.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupInfoRequest;
                fromJSON(object: any): _64.QueryGroupInfoRequest;
                toJSON(message: _64.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupInfoRequest>): _64.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _64.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupInfoResponse;
                fromJSON(object: any): _64.QueryGroupInfoResponse;
                toJSON(message: _64.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupInfoResponse>): _64.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _64.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _64.QueryGroupPolicyInfoRequest;
                toJSON(message: _64.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupPolicyInfoRequest>): _64.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _64.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _64.QueryGroupPolicyInfoResponse;
                toJSON(message: _64.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupPolicyInfoResponse>): _64.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _64.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupMembersRequest;
                fromJSON(object: any): _64.QueryGroupMembersRequest;
                toJSON(message: _64.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupMembersRequest>): _64.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _64.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupMembersResponse;
                fromJSON(object: any): _64.QueryGroupMembersResponse;
                toJSON(message: _64.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupMembersResponse>): _64.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _64.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupsByAdminRequest;
                fromJSON(object: any): _64.QueryGroupsByAdminRequest;
                toJSON(message: _64.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupsByAdminRequest>): _64.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _64.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupsByAdminResponse;
                fromJSON(object: any): _64.QueryGroupsByAdminResponse;
                toJSON(message: _64.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupsByAdminResponse>): _64.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _64.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _64.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _64.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupPoliciesByGroupRequest>): _64.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _64.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _64.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _64.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupPoliciesByGroupResponse>): _64.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _64.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _64.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _64.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupPoliciesByAdminRequest>): _64.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _64.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _64.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _64.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupPoliciesByAdminResponse>): _64.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _64.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryProposalRequest;
                fromJSON(object: any): _64.QueryProposalRequest;
                toJSON(message: _64.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_64.QueryProposalRequest>): _64.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _64.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryProposalResponse;
                fromJSON(object: any): _64.QueryProposalResponse;
                toJSON(message: _64.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_64.QueryProposalResponse>): _64.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _64.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _64.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _64.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_64.QueryProposalsByGroupPolicyRequest>): _64.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _64.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _64.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _64.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_64.QueryProposalsByGroupPolicyResponse>): _64.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _64.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _64.QueryVoteByProposalVoterRequest;
                toJSON(message: _64.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_64.QueryVoteByProposalVoterRequest>): _64.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _64.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _64.QueryVoteByProposalVoterResponse;
                toJSON(message: _64.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_64.QueryVoteByProposalVoterResponse>): _64.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _64.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryVotesByProposalRequest;
                fromJSON(object: any): _64.QueryVotesByProposalRequest;
                toJSON(message: _64.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_64.QueryVotesByProposalRequest>): _64.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _64.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryVotesByProposalResponse;
                fromJSON(object: any): _64.QueryVotesByProposalResponse;
                toJSON(message: _64.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_64.QueryVotesByProposalResponse>): _64.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _64.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryVotesByVoterRequest;
                fromJSON(object: any): _64.QueryVotesByVoterRequest;
                toJSON(message: _64.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_64.QueryVotesByVoterRequest>): _64.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _64.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryVotesByVoterResponse;
                fromJSON(object: any): _64.QueryVotesByVoterResponse;
                toJSON(message: _64.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_64.QueryVotesByVoterResponse>): _64.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _64.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupsByMemberRequest;
                fromJSON(object: any): _64.QueryGroupsByMemberRequest;
                toJSON(message: _64.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_64.QueryGroupsByMemberRequest>): _64.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _64.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryGroupsByMemberResponse;
                fromJSON(object: any): _64.QueryGroupsByMemberResponse;
                toJSON(message: _64.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_64.QueryGroupsByMemberResponse>): _64.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _64.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryTallyResultRequest;
                fromJSON(object: any): _64.QueryTallyResultRequest;
                toJSON(message: _64.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_64.QueryTallyResultRequest>): _64.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _64.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _64.QueryTallyResultResponse;
                fromJSON(object: any): _64.QueryTallyResultResponse;
                toJSON(message: _64.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_64.QueryTallyResultResponse>): _64.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _63.GenesisState;
                fromJSON(object: any): _63.GenesisState;
                toJSON(message: _63.GenesisState): unknown;
                fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _62.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.EventCreateGroup;
                fromJSON(object: any): _62.EventCreateGroup;
                toJSON(message: _62.EventCreateGroup): unknown;
                fromPartial(object: Partial<_62.EventCreateGroup>): _62.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _62.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.EventUpdateGroup;
                fromJSON(object: any): _62.EventUpdateGroup;
                toJSON(message: _62.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_62.EventUpdateGroup>): _62.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _62.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.EventCreateGroupPolicy;
                fromJSON(object: any): _62.EventCreateGroupPolicy;
                toJSON(message: _62.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_62.EventCreateGroupPolicy>): _62.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _62.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.EventUpdateGroupPolicy;
                fromJSON(object: any): _62.EventUpdateGroupPolicy;
                toJSON(message: _62.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_62.EventUpdateGroupPolicy>): _62.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _62.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.EventSubmitProposal;
                fromJSON(object: any): _62.EventSubmitProposal;
                toJSON(message: _62.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_62.EventSubmitProposal>): _62.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _62.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.EventWithdrawProposal;
                fromJSON(object: any): _62.EventWithdrawProposal;
                toJSON(message: _62.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_62.EventWithdrawProposal>): _62.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _62.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.EventVote;
                fromJSON(object: any): _62.EventVote;
                toJSON(message: _62.EventVote): unknown;
                fromPartial(object: Partial<_62.EventVote>): _62.EventVote;
            };
            EventExec: {
                encode(message: _62.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.EventExec;
                fromJSON(object: any): _62.EventExec;
                toJSON(message: _62.EventExec): unknown;
                fromPartial(object: Partial<_62.EventExec>): _62.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _62.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _62.EventLeaveGroup;
                fromJSON(object: any): _62.EventLeaveGroup;
                toJSON(message: _62.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_62.EventLeaveGroup>): _62.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            LCDQueryClient: typeof _182.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _69.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _69.QueryParamsRequest;
                fromJSON(_: any): _69.QueryParamsRequest;
                toJSON(_: _69.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_69.QueryParamsRequest>): _69.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _69.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _69.QueryParamsResponse;
                fromJSON(object: any): _69.QueryParamsResponse;
                toJSON(message: _69.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_69.QueryParamsResponse>): _69.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _69.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _69.QueryInflationRequest;
                fromJSON(_: any): _69.QueryInflationRequest;
                toJSON(_: _69.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_69.QueryInflationRequest>): _69.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _69.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _69.QueryInflationResponse;
                fromJSON(object: any): _69.QueryInflationResponse;
                toJSON(message: _69.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_69.QueryInflationResponse>): _69.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _69.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _69.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _69.QueryAnnualProvisionsRequest;
                toJSON(_: _69.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_69.QueryAnnualProvisionsRequest>): _69.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _69.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _69.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _69.QueryAnnualProvisionsResponse;
                toJSON(message: _69.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_69.QueryAnnualProvisionsResponse>): _69.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _68.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _68.Minter;
                fromJSON(object: any): _68.Minter;
                toJSON(message: _68.Minter): unknown;
                fromPartial(object: Partial<_68.Minter>): _68.Minter;
            };
            Params: {
                encode(message: _68.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _68.Params;
                fromJSON(object: any): _68.Params;
                toJSON(message: _68.Params): unknown;
                fromPartial(object: Partial<_68.Params>): _68.Params;
            };
            GenesisState: {
                encode(message: _67.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _67.GenesisState;
                fromJSON(object: any): _67.GenesisState;
                toJSON(message: _67.GenesisState): unknown;
                fromPartial(object: Partial<_67.GenesisState>): _67.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            LCDQueryClient: typeof _183.LCDQueryClient;
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
                    toAmino: ({ classId, id, sender, receiver }: _75.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _75.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _75.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _75.MsgSend;
                fromJSON(object: any): _75.MsgSend;
                toJSON(message: _75.MsgSend): unknown;
                fromPartial(object: Partial<_75.MsgSend>): _75.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _75.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _75.MsgSendResponse;
                fromJSON(_: any): _75.MsgSendResponse;
                toJSON(_: _75.MsgSendResponse): unknown;
                fromPartial(_: Partial<_75.MsgSendResponse>): _75.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _74.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryBalanceRequest;
                fromJSON(object: any): _74.QueryBalanceRequest;
                toJSON(message: _74.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_74.QueryBalanceRequest>): _74.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _74.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryBalanceResponse;
                fromJSON(object: any): _74.QueryBalanceResponse;
                toJSON(message: _74.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_74.QueryBalanceResponse>): _74.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _74.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryOwnerRequest;
                fromJSON(object: any): _74.QueryOwnerRequest;
                toJSON(message: _74.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_74.QueryOwnerRequest>): _74.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _74.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryOwnerResponse;
                fromJSON(object: any): _74.QueryOwnerResponse;
                toJSON(message: _74.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_74.QueryOwnerResponse>): _74.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _74.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QuerySupplyRequest;
                fromJSON(object: any): _74.QuerySupplyRequest;
                toJSON(message: _74.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_74.QuerySupplyRequest>): _74.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _74.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QuerySupplyResponse;
                fromJSON(object: any): _74.QuerySupplyResponse;
                toJSON(message: _74.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_74.QuerySupplyResponse>): _74.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _74.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryNFTsRequest;
                fromJSON(object: any): _74.QueryNFTsRequest;
                toJSON(message: _74.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_74.QueryNFTsRequest>): _74.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _74.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryNFTsResponse;
                fromJSON(object: any): _74.QueryNFTsResponse;
                toJSON(message: _74.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_74.QueryNFTsResponse>): _74.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _74.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryNFTRequest;
                fromJSON(object: any): _74.QueryNFTRequest;
                toJSON(message: _74.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_74.QueryNFTRequest>): _74.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _74.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryNFTResponse;
                fromJSON(object: any): _74.QueryNFTResponse;
                toJSON(message: _74.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_74.QueryNFTResponse>): _74.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _74.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryClassRequest;
                fromJSON(object: any): _74.QueryClassRequest;
                toJSON(message: _74.QueryClassRequest): unknown;
                fromPartial(object: Partial<_74.QueryClassRequest>): _74.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _74.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryClassResponse;
                fromJSON(object: any): _74.QueryClassResponse;
                toJSON(message: _74.QueryClassResponse): unknown;
                fromPartial(object: Partial<_74.QueryClassResponse>): _74.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _74.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryClassesRequest;
                fromJSON(object: any): _74.QueryClassesRequest;
                toJSON(message: _74.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_74.QueryClassesRequest>): _74.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _74.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _74.QueryClassesResponse;
                fromJSON(object: any): _74.QueryClassesResponse;
                toJSON(message: _74.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_74.QueryClassesResponse>): _74.QueryClassesResponse;
            };
            Class: {
                encode(message: _73.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _73.Class;
                fromJSON(object: any): _73.Class;
                toJSON(message: _73.Class): unknown;
                fromPartial(object: Partial<_73.Class>): _73.Class;
            };
            NFT: {
                encode(message: _73.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _73.NFT;
                fromJSON(object: any): _73.NFT;
                toJSON(message: _73.NFT): unknown;
                fromPartial(object: Partial<_73.NFT>): _73.NFT;
            };
            GenesisState: {
                encode(message: _72.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _72.GenesisState;
                fromJSON(object: any): _72.GenesisState;
                toJSON(message: _72.GenesisState): unknown;
                fromPartial(object: Partial<_72.GenesisState>): _72.GenesisState;
            };
            Entry: {
                encode(message: _72.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _72.Entry;
                fromJSON(object: any): _72.Entry;
                toJSON(message: _72.Entry): unknown;
                fromPartial(object: Partial<_72.Entry>): _72.Entry;
            };
            EventSend: {
                encode(message: _71.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.EventSend;
                fromJSON(object: any): _71.EventSend;
                toJSON(message: _71.EventSend): unknown;
                fromPartial(object: Partial<_71.EventSend>): _71.EventSend;
            };
            EventMint: {
                encode(message: _71.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.EventMint;
                fromJSON(object: any): _71.EventMint;
                toJSON(message: _71.EventMint): unknown;
                fromPartial(object: Partial<_71.EventMint>): _71.EventMint;
            };
            EventBurn: {
                encode(message: _71.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _71.EventBurn;
                fromJSON(object: any): _71.EventBurn;
                toJSON(message: _71.EventBurn): unknown;
                fromPartial(object: Partial<_71.EventBurn>): _71.EventBurn;
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
            };
            PrimaryKeyDescriptor: {
                encode(message: _77.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.PrimaryKeyDescriptor;
                fromJSON(object: any): _77.PrimaryKeyDescriptor;
                toJSON(message: _77.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_77.PrimaryKeyDescriptor>): _77.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _77.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.SecondaryIndexDescriptor;
                fromJSON(object: any): _77.SecondaryIndexDescriptor;
                toJSON(message: _77.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_77.SecondaryIndexDescriptor>): _77.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _77.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _77.SingletonDescriptor;
                fromJSON(object: any): _77.SingletonDescriptor;
                toJSON(message: _77.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_77.SingletonDescriptor>): _77.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _78.StorageType;
            storageTypeToJSON(object: _78.StorageType): string;
            StorageType: typeof _78.StorageType;
            StorageTypeSDKType: typeof _78.StorageTypeSDKType;
            ModuleSchemaDescriptor: {
                encode(message: _78.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _78.ModuleSchemaDescriptor;
                fromJSON(object: any): _78.ModuleSchemaDescriptor;
                toJSON(message: _78.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_78.ModuleSchemaDescriptor>): _78.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _78.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _78.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _78.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _78.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_78.ModuleSchemaDescriptor_FileEntry>): _78.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            LCDQueryClient: typeof _184.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _80.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _80.QueryParamsRequest;
                fromJSON(object: any): _80.QueryParamsRequest;
                toJSON(message: _80.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_80.QueryParamsRequest>): _80.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _80.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _80.QueryParamsResponse;
                fromJSON(object: any): _80.QueryParamsResponse;
                toJSON(message: _80.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_80.QueryParamsResponse>): _80.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _80.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _80.QuerySubspacesRequest;
                fromJSON(_: any): _80.QuerySubspacesRequest;
                toJSON(_: _80.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_80.QuerySubspacesRequest>): _80.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _80.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _80.QuerySubspacesResponse;
                fromJSON(object: any): _80.QuerySubspacesResponse;
                toJSON(message: _80.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_80.QuerySubspacesResponse>): _80.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _80.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _80.Subspace;
                fromJSON(object: any): _80.Subspace;
                toJSON(message: _80.Subspace): unknown;
                fromPartial(object: Partial<_80.Subspace>): _80.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _79.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _79.ParameterChangeProposal;
                fromJSON(object: any): _79.ParameterChangeProposal;
                toJSON(message: _79.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_79.ParameterChangeProposal>): _79.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _79.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _79.ParamChange;
                fromJSON(object: any): _79.ParamChange;
                toJSON(message: _79.ParamChange): unknown;
                fromPartial(object: Partial<_79.ParamChange>): _79.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            LCDQueryClient: typeof _185.LCDQueryClient;
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
                    toAmino: ({ validatorAddr }: _84.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _84.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _84.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _84.MsgUnjail;
                fromJSON(object: any): _84.MsgUnjail;
                toJSON(message: _84.MsgUnjail): unknown;
                fromPartial(object: Partial<_84.MsgUnjail>): _84.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _84.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _84.MsgUnjailResponse;
                fromJSON(_: any): _84.MsgUnjailResponse;
                toJSON(_: _84.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_84.MsgUnjailResponse>): _84.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _83.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _83.ValidatorSigningInfo;
                fromJSON(object: any): _83.ValidatorSigningInfo;
                toJSON(message: _83.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_83.ValidatorSigningInfo>): _83.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _83.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _83.Params;
                fromJSON(object: any): _83.Params;
                toJSON(message: _83.Params): unknown;
                fromPartial(object: Partial<_83.Params>): _83.Params;
            };
            QueryParamsRequest: {
                encode(_: _82.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _82.QueryParamsRequest;
                fromJSON(_: any): _82.QueryParamsRequest;
                toJSON(_: _82.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_82.QueryParamsRequest>): _82.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _82.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _82.QueryParamsResponse;
                fromJSON(object: any): _82.QueryParamsResponse;
                toJSON(message: _82.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_82.QueryParamsResponse>): _82.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _82.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _82.QuerySigningInfoRequest;
                fromJSON(object: any): _82.QuerySigningInfoRequest;
                toJSON(message: _82.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_82.QuerySigningInfoRequest>): _82.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _82.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _82.QuerySigningInfoResponse;
                fromJSON(object: any): _82.QuerySigningInfoResponse;
                toJSON(message: _82.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_82.QuerySigningInfoResponse>): _82.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _82.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _82.QuerySigningInfosRequest;
                fromJSON(object: any): _82.QuerySigningInfosRequest;
                toJSON(message: _82.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_82.QuerySigningInfosRequest>): _82.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _82.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _82.QuerySigningInfosResponse;
                fromJSON(object: any): _82.QuerySigningInfosResponse;
                toJSON(message: _82.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_82.QuerySigningInfosResponse>): _82.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _81.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _81.GenesisState;
                fromJSON(object: any): _81.GenesisState;
                toJSON(message: _81.GenesisState): unknown;
                fromPartial(object: Partial<_81.GenesisState>): _81.GenesisState;
            };
            SigningInfo: {
                encode(message: _81.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _81.SigningInfo;
                fromJSON(object: any): _81.SigningInfo;
                toJSON(message: _81.SigningInfo): unknown;
                fromPartial(object: Partial<_81.SigningInfo>): _81.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _81.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _81.ValidatorMissedBlocks;
                fromJSON(object: any): _81.ValidatorMissedBlocks;
                toJSON(message: _81.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_81.ValidatorMissedBlocks>): _81.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _81.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _81.MissedBlock;
                fromJSON(object: any): _81.MissedBlock;
                toJSON(message: _81.MissedBlock): unknown;
                fromPartial(object: Partial<_81.MissedBlock>): _81.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            LCDQueryClient: typeof _186.LCDQueryClient;
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
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _89.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _89.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _89.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _89.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _89.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _89.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _89.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _89.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _89.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _89.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _89.MsgCancelUnbondingDelegation) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        creation_height: string;
                    };
                    fromAmino: ({ delegator_address, validator_address, amount, creation_height }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        creation_height: string;
                    }) => _89.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                encode(message: _89.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgCreateValidator;
                fromJSON(object: any): _89.MsgCreateValidator;
                toJSON(message: _89.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_89.MsgCreateValidator>): _89.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _89.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgCreateValidatorResponse;
                fromJSON(_: any): _89.MsgCreateValidatorResponse;
                toJSON(_: _89.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_89.MsgCreateValidatorResponse>): _89.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _89.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgEditValidator;
                fromJSON(object: any): _89.MsgEditValidator;
                toJSON(message: _89.MsgEditValidator): unknown;
                fromPartial(object: Partial<_89.MsgEditValidator>): _89.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _89.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgEditValidatorResponse;
                fromJSON(_: any): _89.MsgEditValidatorResponse;
                toJSON(_: _89.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_89.MsgEditValidatorResponse>): _89.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _89.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgDelegate;
                fromJSON(object: any): _89.MsgDelegate;
                toJSON(message: _89.MsgDelegate): unknown;
                fromPartial(object: Partial<_89.MsgDelegate>): _89.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _89.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgDelegateResponse;
                fromJSON(_: any): _89.MsgDelegateResponse;
                toJSON(_: _89.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_89.MsgDelegateResponse>): _89.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _89.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgBeginRedelegate;
                fromJSON(object: any): _89.MsgBeginRedelegate;
                toJSON(message: _89.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_89.MsgBeginRedelegate>): _89.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _89.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgBeginRedelegateResponse;
                fromJSON(object: any): _89.MsgBeginRedelegateResponse;
                toJSON(message: _89.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_89.MsgBeginRedelegateResponse>): _89.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _89.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgUndelegate;
                fromJSON(object: any): _89.MsgUndelegate;
                toJSON(message: _89.MsgUndelegate): unknown;
                fromPartial(object: Partial<_89.MsgUndelegate>): _89.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _89.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgUndelegateResponse;
                fromJSON(object: any): _89.MsgUndelegateResponse;
                toJSON(message: _89.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_89.MsgUndelegateResponse>): _89.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _89.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgCancelUnbondingDelegation;
                fromJSON(object: any): _89.MsgCancelUnbondingDelegation;
                toJSON(message: _89.MsgCancelUnbondingDelegation): unknown;
                fromPartial(object: Partial<_89.MsgCancelUnbondingDelegation>): _89.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _89.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _89.MsgCancelUnbondingDelegationResponse;
                fromJSON(_: any): _89.MsgCancelUnbondingDelegationResponse;
                toJSON(_: _89.MsgCancelUnbondingDelegationResponse): unknown;
                fromPartial(_: Partial<_89.MsgCancelUnbondingDelegationResponse>): _89.MsgCancelUnbondingDelegationResponse;
            };
            bondStatusFromJSON(object: any): _88.BondStatus;
            bondStatusToJSON(object: _88.BondStatus): string;
            BondStatus: typeof _88.BondStatus;
            BondStatusSDKType: typeof _88.BondStatusSDKType;
            HistoricalInfo: {
                encode(message: _88.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.HistoricalInfo;
                fromJSON(object: any): _88.HistoricalInfo;
                toJSON(message: _88.HistoricalInfo): unknown;
                fromPartial(object: Partial<_88.HistoricalInfo>): _88.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _88.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.CommissionRates;
                fromJSON(object: any): _88.CommissionRates;
                toJSON(message: _88.CommissionRates): unknown;
                fromPartial(object: Partial<_88.CommissionRates>): _88.CommissionRates;
            };
            Commission: {
                encode(message: _88.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.Commission;
                fromJSON(object: any): _88.Commission;
                toJSON(message: _88.Commission): unknown;
                fromPartial(object: Partial<_88.Commission>): _88.Commission;
            };
            Description: {
                encode(message: _88.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.Description;
                fromJSON(object: any): _88.Description;
                toJSON(message: _88.Description): unknown;
                fromPartial(object: Partial<_88.Description>): _88.Description;
            };
            Validator: {
                encode(message: _88.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.Validator;
                fromJSON(object: any): _88.Validator;
                toJSON(message: _88.Validator): unknown;
                fromPartial(object: Partial<_88.Validator>): _88.Validator;
            };
            ValAddresses: {
                encode(message: _88.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.ValAddresses;
                fromJSON(object: any): _88.ValAddresses;
                toJSON(message: _88.ValAddresses): unknown;
                fromPartial(object: Partial<_88.ValAddresses>): _88.ValAddresses;
            };
            DVPair: {
                encode(message: _88.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.DVPair;
                fromJSON(object: any): _88.DVPair;
                toJSON(message: _88.DVPair): unknown;
                fromPartial(object: Partial<_88.DVPair>): _88.DVPair;
            };
            DVPairs: {
                encode(message: _88.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.DVPairs;
                fromJSON(object: any): _88.DVPairs;
                toJSON(message: _88.DVPairs): unknown;
                fromPartial(object: Partial<_88.DVPairs>): _88.DVPairs;
            };
            DVVTriplet: {
                encode(message: _88.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.DVVTriplet;
                fromJSON(object: any): _88.DVVTriplet;
                toJSON(message: _88.DVVTriplet): unknown;
                fromPartial(object: Partial<_88.DVVTriplet>): _88.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _88.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.DVVTriplets;
                fromJSON(object: any): _88.DVVTriplets;
                toJSON(message: _88.DVVTriplets): unknown;
                fromPartial(object: Partial<_88.DVVTriplets>): _88.DVVTriplets;
            };
            Delegation: {
                encode(message: _88.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.Delegation;
                fromJSON(object: any): _88.Delegation;
                toJSON(message: _88.Delegation): unknown;
                fromPartial(object: Partial<_88.Delegation>): _88.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _88.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.UnbondingDelegation;
                fromJSON(object: any): _88.UnbondingDelegation;
                toJSON(message: _88.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_88.UnbondingDelegation>): _88.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _88.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.UnbondingDelegationEntry;
                fromJSON(object: any): _88.UnbondingDelegationEntry;
                toJSON(message: _88.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_88.UnbondingDelegationEntry>): _88.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _88.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.RedelegationEntry;
                fromJSON(object: any): _88.RedelegationEntry;
                toJSON(message: _88.RedelegationEntry): unknown;
                fromPartial(object: Partial<_88.RedelegationEntry>): _88.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _88.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.Redelegation;
                fromJSON(object: any): _88.Redelegation;
                toJSON(message: _88.Redelegation): unknown;
                fromPartial(object: Partial<_88.Redelegation>): _88.Redelegation;
            };
            Params: {
                encode(message: _88.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.Params;
                fromJSON(object: any): _88.Params;
                toJSON(message: _88.Params): unknown;
                fromPartial(object: Partial<_88.Params>): _88.Params;
            };
            DelegationResponse: {
                encode(message: _88.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.DelegationResponse;
                fromJSON(object: any): _88.DelegationResponse;
                toJSON(message: _88.DelegationResponse): unknown;
                fromPartial(object: Partial<_88.DelegationResponse>): _88.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _88.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.RedelegationEntryResponse;
                fromJSON(object: any): _88.RedelegationEntryResponse;
                toJSON(message: _88.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_88.RedelegationEntryResponse>): _88.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _88.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.RedelegationResponse;
                fromJSON(object: any): _88.RedelegationResponse;
                toJSON(message: _88.RedelegationResponse): unknown;
                fromPartial(object: Partial<_88.RedelegationResponse>): _88.RedelegationResponse;
            };
            Pool: {
                encode(message: _88.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _88.Pool;
                fromJSON(object: any): _88.Pool;
                toJSON(message: _88.Pool): unknown;
                fromPartial(object: Partial<_88.Pool>): _88.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _87.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryValidatorsRequest;
                fromJSON(object: any): _87.QueryValidatorsRequest;
                toJSON(message: _87.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_87.QueryValidatorsRequest>): _87.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _87.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryValidatorsResponse;
                fromJSON(object: any): _87.QueryValidatorsResponse;
                toJSON(message: _87.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_87.QueryValidatorsResponse>): _87.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _87.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryValidatorRequest;
                fromJSON(object: any): _87.QueryValidatorRequest;
                toJSON(message: _87.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_87.QueryValidatorRequest>): _87.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _87.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryValidatorResponse;
                fromJSON(object: any): _87.QueryValidatorResponse;
                toJSON(message: _87.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_87.QueryValidatorResponse>): _87.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _87.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _87.QueryValidatorDelegationsRequest;
                toJSON(message: _87.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_87.QueryValidatorDelegationsRequest>): _87.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _87.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _87.QueryValidatorDelegationsResponse;
                toJSON(message: _87.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_87.QueryValidatorDelegationsResponse>): _87.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _87.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _87.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _87.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_87.QueryValidatorUnbondingDelegationsRequest>): _87.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _87.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _87.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _87.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_87.QueryValidatorUnbondingDelegationsResponse>): _87.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _87.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegationRequest;
                fromJSON(object: any): _87.QueryDelegationRequest;
                toJSON(message: _87.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegationRequest>): _87.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _87.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegationResponse;
                fromJSON(object: any): _87.QueryDelegationResponse;
                toJSON(message: _87.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegationResponse>): _87.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _87.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _87.QueryUnbondingDelegationRequest;
                toJSON(message: _87.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_87.QueryUnbondingDelegationRequest>): _87.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _87.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _87.QueryUnbondingDelegationResponse;
                toJSON(message: _87.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_87.QueryUnbondingDelegationResponse>): _87.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _87.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _87.QueryDelegatorDelegationsRequest;
                toJSON(message: _87.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorDelegationsRequest>): _87.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _87.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _87.QueryDelegatorDelegationsResponse;
                toJSON(message: _87.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorDelegationsResponse>): _87.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _87.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _87.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _87.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorUnbondingDelegationsRequest>): _87.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _87.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _87.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _87.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorUnbondingDelegationsResponse>): _87.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _87.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryRedelegationsRequest;
                fromJSON(object: any): _87.QueryRedelegationsRequest;
                toJSON(message: _87.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_87.QueryRedelegationsRequest>): _87.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _87.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryRedelegationsResponse;
                fromJSON(object: any): _87.QueryRedelegationsResponse;
                toJSON(message: _87.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_87.QueryRedelegationsResponse>): _87.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _87.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _87.QueryDelegatorValidatorsRequest;
                toJSON(message: _87.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorValidatorsRequest>): _87.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _87.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _87.QueryDelegatorValidatorsResponse;
                toJSON(message: _87.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorValidatorsResponse>): _87.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _87.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _87.QueryDelegatorValidatorRequest;
                toJSON(message: _87.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorValidatorRequest>): _87.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _87.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _87.QueryDelegatorValidatorResponse;
                toJSON(message: _87.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorValidatorResponse>): _87.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _87.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryHistoricalInfoRequest;
                fromJSON(object: any): _87.QueryHistoricalInfoRequest;
                toJSON(message: _87.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_87.QueryHistoricalInfoRequest>): _87.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _87.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryHistoricalInfoResponse;
                fromJSON(object: any): _87.QueryHistoricalInfoResponse;
                toJSON(message: _87.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_87.QueryHistoricalInfoResponse>): _87.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _87.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryPoolRequest;
                fromJSON(_: any): _87.QueryPoolRequest;
                toJSON(_: _87.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_87.QueryPoolRequest>): _87.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _87.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryPoolResponse;
                fromJSON(object: any): _87.QueryPoolResponse;
                toJSON(message: _87.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_87.QueryPoolResponse>): _87.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _87.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryParamsRequest;
                fromJSON(_: any): _87.QueryParamsRequest;
                toJSON(_: _87.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_87.QueryParamsRequest>): _87.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _87.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _87.QueryParamsResponse;
                fromJSON(object: any): _87.QueryParamsResponse;
                toJSON(message: _87.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_87.QueryParamsResponse>): _87.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _86.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _86.GenesisState;
                fromJSON(object: any): _86.GenesisState;
                toJSON(message: _86.GenesisState): unknown;
                fromPartial(object: Partial<_86.GenesisState>): _86.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _86.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _86.LastValidatorPower;
                fromJSON(object: any): _86.LastValidatorPower;
                toJSON(message: _86.LastValidatorPower): unknown;
                fromPartial(object: Partial<_86.LastValidatorPower>): _86.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _85.AuthorizationType;
            authorizationTypeToJSON(object: _85.AuthorizationType): string;
            AuthorizationType: typeof _85.AuthorizationType;
            AuthorizationTypeSDKType: typeof _85.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _85.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _85.StakeAuthorization;
                fromJSON(object: any): _85.StakeAuthorization;
                toJSON(message: _85.StakeAuthorization): unknown;
                fromPartial(object: Partial<_85.StakeAuthorization>): _85.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _85.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _85.StakeAuthorization_Validators;
                fromJSON(object: any): _85.StakeAuthorization_Validators;
                toJSON(message: _85.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_85.StakeAuthorization_Validators>): _85.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _90.SignMode;
                signModeToJSON(object: _90.SignMode): string;
                SignMode: typeof _90.SignMode;
                SignModeSDKType: typeof _90.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _90.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.SignatureDescriptors;
                    fromJSON(object: any): _90.SignatureDescriptors;
                    toJSON(message: _90.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_90.SignatureDescriptors>): _90.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _90.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.SignatureDescriptor;
                    fromJSON(object: any): _90.SignatureDescriptor;
                    toJSON(message: _90.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_90.SignatureDescriptor>): _90.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _90.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.SignatureDescriptor_Data;
                    fromJSON(object: any): _90.SignatureDescriptor_Data;
                    toJSON(message: _90.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_90.SignatureDescriptor_Data>): _90.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _90.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _90.SignatureDescriptor_Data_Single;
                    toJSON(message: _90.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_90.SignatureDescriptor_Data_Single>): _90.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _90.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _90.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _90.SignatureDescriptor_Data_Multi;
                    toJSON(message: _90.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_90.SignatureDescriptor_Data_Multi>): _90.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            LCDQueryClient: typeof _187.LCDQueryClient;
            Tx: {
                encode(message: _92.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.Tx;
                fromJSON(object: any): _92.Tx;
                toJSON(message: _92.Tx): unknown;
                fromPartial(object: Partial<_92.Tx>): _92.Tx;
            };
            TxRaw: {
                encode(message: _92.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.TxRaw;
                fromJSON(object: any): _92.TxRaw;
                toJSON(message: _92.TxRaw): unknown;
                fromPartial(object: Partial<_92.TxRaw>): _92.TxRaw;
            };
            SignDoc: {
                encode(message: _92.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.SignDoc;
                fromJSON(object: any): _92.SignDoc;
                toJSON(message: _92.SignDoc): unknown;
                fromPartial(object: Partial<_92.SignDoc>): _92.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _92.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.SignDocDirectAux;
                fromJSON(object: any): _92.SignDocDirectAux;
                toJSON(message: _92.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_92.SignDocDirectAux>): _92.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _92.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.TxBody;
                fromJSON(object: any): _92.TxBody;
                toJSON(message: _92.TxBody): unknown;
                fromPartial(object: Partial<_92.TxBody>): _92.TxBody;
            };
            AuthInfo: {
                encode(message: _92.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.AuthInfo;
                fromJSON(object: any): _92.AuthInfo;
                toJSON(message: _92.AuthInfo): unknown;
                fromPartial(object: Partial<_92.AuthInfo>): _92.AuthInfo;
            };
            SignerInfo: {
                encode(message: _92.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.SignerInfo;
                fromJSON(object: any): _92.SignerInfo;
                toJSON(message: _92.SignerInfo): unknown;
                fromPartial(object: Partial<_92.SignerInfo>): _92.SignerInfo;
            };
            ModeInfo: {
                encode(message: _92.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.ModeInfo;
                fromJSON(object: any): _92.ModeInfo;
                toJSON(message: _92.ModeInfo): unknown;
                fromPartial(object: Partial<_92.ModeInfo>): _92.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _92.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.ModeInfo_Single;
                fromJSON(object: any): _92.ModeInfo_Single;
                toJSON(message: _92.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_92.ModeInfo_Single>): _92.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _92.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.ModeInfo_Multi;
                fromJSON(object: any): _92.ModeInfo_Multi;
                toJSON(message: _92.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_92.ModeInfo_Multi>): _92.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _92.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.Fee;
                fromJSON(object: any): _92.Fee;
                toJSON(message: _92.Fee): unknown;
                fromPartial(object: Partial<_92.Fee>): _92.Fee;
            };
            Tip: {
                encode(message: _92.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.Tip;
                fromJSON(object: any): _92.Tip;
                toJSON(message: _92.Tip): unknown;
                fromPartial(object: Partial<_92.Tip>): _92.Tip;
            };
            AuxSignerData: {
                encode(message: _92.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _92.AuxSignerData;
                fromJSON(object: any): _92.AuxSignerData;
                toJSON(message: _92.AuxSignerData): unknown;
                fromPartial(object: Partial<_92.AuxSignerData>): _92.AuxSignerData;
            };
            orderByFromJSON(object: any): _91.OrderBy;
            orderByToJSON(object: _91.OrderBy): string;
            broadcastModeFromJSON(object: any): _91.BroadcastMode;
            broadcastModeToJSON(object: _91.BroadcastMode): string;
            OrderBy: typeof _91.OrderBy;
            OrderBySDKType: typeof _91.OrderBySDKType;
            BroadcastMode: typeof _91.BroadcastMode;
            BroadcastModeSDKType: typeof _91.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _91.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.GetTxsEventRequest;
                fromJSON(object: any): _91.GetTxsEventRequest;
                toJSON(message: _91.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_91.GetTxsEventRequest>): _91.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _91.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.GetTxsEventResponse;
                fromJSON(object: any): _91.GetTxsEventResponse;
                toJSON(message: _91.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_91.GetTxsEventResponse>): _91.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _91.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.BroadcastTxRequest;
                fromJSON(object: any): _91.BroadcastTxRequest;
                toJSON(message: _91.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_91.BroadcastTxRequest>): _91.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _91.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.BroadcastTxResponse;
                fromJSON(object: any): _91.BroadcastTxResponse;
                toJSON(message: _91.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_91.BroadcastTxResponse>): _91.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _91.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.SimulateRequest;
                fromJSON(object: any): _91.SimulateRequest;
                toJSON(message: _91.SimulateRequest): unknown;
                fromPartial(object: Partial<_91.SimulateRequest>): _91.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _91.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.SimulateResponse;
                fromJSON(object: any): _91.SimulateResponse;
                toJSON(message: _91.SimulateResponse): unknown;
                fromPartial(object: Partial<_91.SimulateResponse>): _91.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _91.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.GetTxRequest;
                fromJSON(object: any): _91.GetTxRequest;
                toJSON(message: _91.GetTxRequest): unknown;
                fromPartial(object: Partial<_91.GetTxRequest>): _91.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _91.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.GetTxResponse;
                fromJSON(object: any): _91.GetTxResponse;
                toJSON(message: _91.GetTxResponse): unknown;
                fromPartial(object: Partial<_91.GetTxResponse>): _91.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _91.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.GetBlockWithTxsRequest;
                fromJSON(object: any): _91.GetBlockWithTxsRequest;
                toJSON(message: _91.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_91.GetBlockWithTxsRequest>): _91.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _91.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _91.GetBlockWithTxsResponse;
                fromJSON(object: any): _91.GetBlockWithTxsResponse;
                toJSON(message: _91.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_91.GetBlockWithTxsResponse>): _91.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            LCDQueryClient: typeof _188.LCDQueryClient;
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
                    toAmino: ({ authority, plan }: _94.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _94.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _94.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _94.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _95.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _95.Plan;
                fromJSON(object: any): _95.Plan;
                toJSON(message: _95.Plan): unknown;
                fromPartial(object: Partial<_95.Plan>): _95.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _95.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _95.SoftwareUpgradeProposal;
                fromJSON(object: any): _95.SoftwareUpgradeProposal;
                toJSON(message: _95.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_95.SoftwareUpgradeProposal>): _95.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _95.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _95.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _95.CancelSoftwareUpgradeProposal;
                toJSON(message: _95.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_95.CancelSoftwareUpgradeProposal>): _95.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _95.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _95.ModuleVersion;
                fromJSON(object: any): _95.ModuleVersion;
                toJSON(message: _95.ModuleVersion): unknown;
                fromPartial(object: Partial<_95.ModuleVersion>): _95.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _94.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _94.MsgSoftwareUpgrade;
                fromJSON(object: any): _94.MsgSoftwareUpgrade;
                toJSON(message: _94.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_94.MsgSoftwareUpgrade>): _94.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _94.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _94.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _94.MsgSoftwareUpgradeResponse;
                toJSON(_: _94.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_94.MsgSoftwareUpgradeResponse>): _94.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _94.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _94.MsgCancelUpgrade;
                fromJSON(object: any): _94.MsgCancelUpgrade;
                toJSON(message: _94.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_94.MsgCancelUpgrade>): _94.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _94.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _94.MsgCancelUpgradeResponse;
                fromJSON(_: any): _94.MsgCancelUpgradeResponse;
                toJSON(_: _94.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_94.MsgCancelUpgradeResponse>): _94.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _93.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryCurrentPlanRequest;
                fromJSON(_: any): _93.QueryCurrentPlanRequest;
                toJSON(_: _93.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_93.QueryCurrentPlanRequest>): _93.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _93.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryCurrentPlanResponse;
                fromJSON(object: any): _93.QueryCurrentPlanResponse;
                toJSON(message: _93.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_93.QueryCurrentPlanResponse>): _93.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _93.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryAppliedPlanRequest;
                fromJSON(object: any): _93.QueryAppliedPlanRequest;
                toJSON(message: _93.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_93.QueryAppliedPlanRequest>): _93.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _93.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryAppliedPlanResponse;
                fromJSON(object: any): _93.QueryAppliedPlanResponse;
                toJSON(message: _93.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_93.QueryAppliedPlanResponse>): _93.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _93.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _93.QueryUpgradedConsensusStateRequest;
                toJSON(message: _93.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_93.QueryUpgradedConsensusStateRequest>): _93.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _93.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _93.QueryUpgradedConsensusStateResponse;
                toJSON(message: _93.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_93.QueryUpgradedConsensusStateResponse>): _93.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _93.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryModuleVersionsRequest;
                fromJSON(object: any): _93.QueryModuleVersionsRequest;
                toJSON(message: _93.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_93.QueryModuleVersionsRequest>): _93.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _93.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryModuleVersionsResponse;
                fromJSON(object: any): _93.QueryModuleVersionsResponse;
                toJSON(message: _93.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_93.QueryModuleVersionsResponse>): _93.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _93.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryAuthorityRequest;
                fromJSON(_: any): _93.QueryAuthorityRequest;
                toJSON(_: _93.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_93.QueryAuthorityRequest>): _93.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _93.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _93.QueryAuthorityResponse;
                fromJSON(object: any): _93.QueryAuthorityResponse;
                toJSON(message: _93.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_93.QueryAuthorityResponse>): _93.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
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
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _96.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _96.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _96.MsgCreatePermanentLockedAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _96.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _96.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _96.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _97.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _97.BaseVestingAccount;
                fromJSON(object: any): _97.BaseVestingAccount;
                toJSON(message: _97.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_97.BaseVestingAccount>): _97.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _97.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _97.ContinuousVestingAccount;
                fromJSON(object: any): _97.ContinuousVestingAccount;
                toJSON(message: _97.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_97.ContinuousVestingAccount>): _97.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _97.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _97.DelayedVestingAccount;
                fromJSON(object: any): _97.DelayedVestingAccount;
                toJSON(message: _97.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_97.DelayedVestingAccount>): _97.DelayedVestingAccount;
            };
            Period: {
                encode(message: _97.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _97.Period;
                fromJSON(object: any): _97.Period;
                toJSON(message: _97.Period): unknown;
                fromPartial(object: Partial<_97.Period>): _97.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _97.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _97.PeriodicVestingAccount;
                fromJSON(object: any): _97.PeriodicVestingAccount;
                toJSON(message: _97.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_97.PeriodicVestingAccount>): _97.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _97.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _97.PermanentLockedAccount;
                fromJSON(object: any): _97.PermanentLockedAccount;
                toJSON(message: _97.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_97.PermanentLockedAccount>): _97.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _96.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _96.MsgCreateVestingAccount;
                fromJSON(object: any): _96.MsgCreateVestingAccount;
                toJSON(message: _96.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_96.MsgCreateVestingAccount>): _96.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _96.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _96.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _96.MsgCreateVestingAccountResponse;
                toJSON(_: _96.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_96.MsgCreateVestingAccountResponse>): _96.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _96.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _96.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _96.MsgCreatePermanentLockedAccount;
                toJSON(message: _96.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_96.MsgCreatePermanentLockedAccount>): _96.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _96.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _96.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _96.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _96.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_96.MsgCreatePermanentLockedAccountResponse>): _96.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _96.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _96.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _96.MsgCreatePeriodicVestingAccount;
                toJSON(message: _96.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_96.MsgCreatePeriodicVestingAccount>): _96.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _96.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _96.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _96.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _96.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_96.MsgCreatePeriodicVestingAccountResponse>): _96.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _171.LCDQueryClient;
                };
                authz: {
                    v1beta1: _172.LCDQueryClient;
                };
                bank: {
                    v1beta1: _173.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _174.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _175.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _176.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _177.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _178.LCDQueryClient;
                };
                gov: {
                    v1: _179.LCDQueryClient;
                    v1beta1: _180.LCDQueryClient;
                };
                group: {
                    v1: _181.LCDQueryClient;
                };
                mint: {
                    v1beta1: _182.LCDQueryClient;
                };
                nft: {
                    v1beta1: _183.LCDQueryClient;
                };
                params: {
                    v1beta1: _184.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _185.LCDQueryClient;
                };
                staking: {
                    v1beta1: _186.LCDQueryClient;
                };
                tx: {
                    v1beta1: _187.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _188.LCDQueryClient;
                };
            };
        }>;
    };
}
