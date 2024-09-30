import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const ibcAminoConverters: {
    "/ibc.core.client.v1.MsgCreateClient": {
        aminoType: string;
        toAmino: (message: import("./core/client/v1/tx").MsgCreateClient) => import("./core/client/v1/tx").MsgCreateClientAmino;
        fromAmino: (object: import("./core/client/v1/tx").MsgCreateClientAmino) => import("./core/client/v1/tx").MsgCreateClient;
    };
    "/ibc.core.client.v1.MsgUpdateClient": {
        aminoType: string;
        toAmino: (message: import("./core/client/v1/tx").MsgUpdateClient) => import("./core/client/v1/tx").MsgUpdateClientAmino;
        fromAmino: (object: import("./core/client/v1/tx").MsgUpdateClientAmino) => import("./core/client/v1/tx").MsgUpdateClient;
    };
    "/ibc.core.client.v1.MsgUpgradeClient": {
        aminoType: string;
        toAmino: (message: import("./core/client/v1/tx").MsgUpgradeClient) => import("./core/client/v1/tx").MsgUpgradeClientAmino;
        fromAmino: (object: import("./core/client/v1/tx").MsgUpgradeClientAmino) => import("./core/client/v1/tx").MsgUpgradeClient;
    };
    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
        aminoType: string;
        toAmino: (message: import("./core/client/v1/tx").MsgSubmitMisbehaviour) => import("./core/client/v1/tx").MsgSubmitMisbehaviourAmino;
        fromAmino: (object: import("./core/client/v1/tx").MsgSubmitMisbehaviourAmino) => import("./core/client/v1/tx").MsgSubmitMisbehaviour;
    };
    "/ibc.applications.transfer.v1.MsgTransfer": {
        aminoType: string;
        toAmino: (message: import("./applications/transfer/v1/tx").MsgTransfer) => import("./applications/transfer/v1/tx").MsgTransferAmino;
        fromAmino: (object: import("./applications/transfer/v1/tx").MsgTransferAmino) => import("./applications/transfer/v1/tx").MsgTransfer;
    };
};
export declare const ibcProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningIbcClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningIbcClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
