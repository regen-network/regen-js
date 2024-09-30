//@ts-nocheck
import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as ibcApplicationsTransferV1TxRegistry from "./applications/transfer/v1/tx.registry";
import * as ibcCoreClientV1TxRegistry from "./core/client/v1/tx.registry";
import * as ibcApplicationsTransferV1TxAmino from "./applications/transfer/v1/tx.amino";
import * as ibcCoreClientV1TxAmino from "./core/client/v1/tx.amino";
export const ibcAminoConverters = {
    ...ibcApplicationsTransferV1TxAmino.AminoConverter,
    ...ibcCoreClientV1TxAmino.AminoConverter
};
export const ibcProtoRegistry = [...ibcApplicationsTransferV1TxRegistry.registry, ...ibcCoreClientV1TxRegistry.registry];
export const getSigningIbcClientOptions = ({ defaultTypes = defaultRegistryTypes } = {}) => {
    const registry = new Registry([...defaultTypes, ...ibcProtoRegistry]);
    const aminoTypes = new AminoTypes({
        ...ibcAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
export const getSigningIbcClient = async ({ rpcEndpoint, signer, defaultTypes = defaultRegistryTypes }) => {
    const { registry, aminoTypes } = getSigningIbcClientOptions({
        defaultTypes
    });
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
