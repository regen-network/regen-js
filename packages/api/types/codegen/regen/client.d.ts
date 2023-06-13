import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const regenAminoConverters: {
    "/regen.intertx.v1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: (message: import("./intertx/v1/tx").MsgRegisterAccount) => import("./intertx/v1/tx").MsgRegisterAccountAmino;
        fromAmino: (object: import("./intertx/v1/tx").MsgRegisterAccountAmino) => import("./intertx/v1/tx").MsgRegisterAccount;
    };
    "/regen.intertx.v1.MsgSubmitTx": {
        aminoType: string;
        toAmino: (message: import("./intertx/v1/tx").MsgSubmitTx) => import("./intertx/v1/tx").MsgSubmitTxAmino;
        fromAmino: (object: import("./intertx/v1/tx").MsgSubmitTxAmino) => import("./intertx/v1/tx").MsgSubmitTx;
    };
    "/regen.ecocredit.v1alpha1.MsgCreateClass": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1alpha1/tx").MsgCreateClass) => import("./ecocredit/v1alpha1/tx").MsgCreateClassAmino;
        fromAmino: (object: import("./ecocredit/v1alpha1/tx").MsgCreateClassAmino) => import("./ecocredit/v1alpha1/tx").MsgCreateClass;
    };
    "/regen.ecocredit.v1alpha1.MsgCreateBatch": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1alpha1/tx").MsgCreateBatch) => import("./ecocredit/v1alpha1/tx").MsgCreateBatchAmino;
        fromAmino: (object: import("./ecocredit/v1alpha1/tx").MsgCreateBatchAmino) => import("./ecocredit/v1alpha1/tx").MsgCreateBatch;
    };
    "/regen.ecocredit.v1alpha1.MsgSend": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1alpha1/tx").MsgSend) => import("./ecocredit/v1alpha1/tx").MsgSendAmino;
        fromAmino: (object: import("./ecocredit/v1alpha1/tx").MsgSendAmino) => import("./ecocredit/v1alpha1/tx").MsgSend;
    };
    "/regen.ecocredit.v1alpha1.MsgRetire": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1alpha1/tx").MsgRetire) => import("./ecocredit/v1alpha1/tx").MsgRetireAmino;
        fromAmino: (object: import("./ecocredit/v1alpha1/tx").MsgRetireAmino) => import("./ecocredit/v1alpha1/tx").MsgRetire;
    };
    "/regen.ecocredit.v1alpha1.MsgCancel": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1alpha1/tx").MsgCancel) => import("./ecocredit/v1alpha1/tx").MsgCancelAmino;
        fromAmino: (object: import("./ecocredit/v1alpha1/tx").MsgCancelAmino) => import("./ecocredit/v1alpha1/tx").MsgCancel;
    };
    "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1alpha1/tx").MsgUpdateClassAdmin) => import("./ecocredit/v1alpha1/tx").MsgUpdateClassAdminAmino;
        fromAmino: (object: import("./ecocredit/v1alpha1/tx").MsgUpdateClassAdminAmino) => import("./ecocredit/v1alpha1/tx").MsgUpdateClassAdmin;
    };
    "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1alpha1/tx").MsgUpdateClassIssuers) => import("./ecocredit/v1alpha1/tx").MsgUpdateClassIssuersAmino;
        fromAmino: (object: import("./ecocredit/v1alpha1/tx").MsgUpdateClassIssuersAmino) => import("./ecocredit/v1alpha1/tx").MsgUpdateClassIssuers;
    };
    "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1alpha1/tx").MsgUpdateClassMetadata) => import("./ecocredit/v1alpha1/tx").MsgUpdateClassMetadataAmino;
        fromAmino: (object: import("./ecocredit/v1alpha1/tx").MsgUpdateClassMetadataAmino) => import("./ecocredit/v1alpha1/tx").MsgUpdateClassMetadata;
    };
    "/regen.ecocredit.v1.MsgCreateClass": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgCreateClass) => import("./ecocredit/v1/tx").MsgCreateClassAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgCreateClassAmino) => import("./ecocredit/v1/tx").MsgCreateClass;
    };
    "/regen.ecocredit.v1.MsgCreateProject": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgCreateProject) => import("./ecocredit/v1/tx").MsgCreateProjectAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgCreateProjectAmino) => import("./ecocredit/v1/tx").MsgCreateProject;
    };
    "/regen.ecocredit.v1.MsgCreateBatch": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgCreateBatch) => import("./ecocredit/v1/tx").MsgCreateBatchAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgCreateBatchAmino) => import("./ecocredit/v1/tx").MsgCreateBatch;
    };
    "/regen.ecocredit.v1.MsgMintBatchCredits": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgMintBatchCredits) => import("./ecocredit/v1/tx").MsgMintBatchCreditsAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgMintBatchCreditsAmino) => import("./ecocredit/v1/tx").MsgMintBatchCredits;
    };
    "/regen.ecocredit.v1.MsgSealBatch": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgSealBatch) => import("./ecocredit/v1/tx").MsgSealBatchAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgSealBatchAmino) => import("./ecocredit/v1/tx").MsgSealBatch;
    };
    "/regen.ecocredit.v1.MsgSend": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgSend) => import("./ecocredit/v1/tx").MsgSendAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgSendAmino) => import("./ecocredit/v1/tx").MsgSend;
    };
    "/regen.ecocredit.v1.MsgRetire": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgRetire) => import("./ecocredit/v1/tx").MsgRetireAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgRetireAmino) => import("./ecocredit/v1/tx").MsgRetire;
    };
    "/regen.ecocredit.v1.MsgCancel": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgCancel) => import("./ecocredit/v1/tx").MsgCancelAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgCancelAmino) => import("./ecocredit/v1/tx").MsgCancel;
    };
    "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgUpdateClassAdmin) => import("./ecocredit/v1/tx").MsgUpdateClassAdminAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgUpdateClassAdminAmino) => import("./ecocredit/v1/tx").MsgUpdateClassAdmin;
    };
    "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgUpdateClassIssuers) => import("./ecocredit/v1/tx").MsgUpdateClassIssuersAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgUpdateClassIssuersAmino) => import("./ecocredit/v1/tx").MsgUpdateClassIssuers;
    };
    "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgUpdateClassMetadata) => import("./ecocredit/v1/tx").MsgUpdateClassMetadataAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgUpdateClassMetadataAmino) => import("./ecocredit/v1/tx").MsgUpdateClassMetadata;
    };
    "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgUpdateProjectAdmin) => import("./ecocredit/v1/tx").MsgUpdateProjectAdminAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgUpdateProjectAdminAmino) => import("./ecocredit/v1/tx").MsgUpdateProjectAdmin;
    };
    "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgUpdateProjectMetadata) => import("./ecocredit/v1/tx").MsgUpdateProjectMetadataAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgUpdateProjectMetadataAmino) => import("./ecocredit/v1/tx").MsgUpdateProjectMetadata;
    };
    "/regen.ecocredit.v1.MsgUpdateBatchMetadata": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgUpdateBatchMetadata) => import("./ecocredit/v1/tx").MsgUpdateBatchMetadataAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgUpdateBatchMetadataAmino) => import("./ecocredit/v1/tx").MsgUpdateBatchMetadata;
    };
    "/regen.ecocredit.v1.MsgBridge": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgBridge) => import("./ecocredit/v1/tx").MsgBridgeAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgBridgeAmino) => import("./ecocredit/v1/tx").MsgBridge;
    };
    "/regen.ecocredit.v1.MsgBridgeReceive": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgBridgeReceive) => import("./ecocredit/v1/tx").MsgBridgeReceiveAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgBridgeReceiveAmino) => import("./ecocredit/v1/tx").MsgBridgeReceive;
    };
    "/regen.ecocredit.v1.MsgAddCreditType": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgAddCreditType) => import("./ecocredit/v1/tx").MsgAddCreditTypeAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgAddCreditTypeAmino) => import("./ecocredit/v1/tx").MsgAddCreditType;
    };
    "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgSetClassCreatorAllowlist) => import("./ecocredit/v1/tx").MsgSetClassCreatorAllowlistAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgSetClassCreatorAllowlistAmino) => import("./ecocredit/v1/tx").MsgSetClassCreatorAllowlist;
    };
    "/regen.ecocredit.v1.MsgAddClassCreator": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgAddClassCreator) => import("./ecocredit/v1/tx").MsgAddClassCreatorAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgAddClassCreatorAmino) => import("./ecocredit/v1/tx").MsgAddClassCreator;
    };
    "/regen.ecocredit.v1.MsgRemoveClassCreator": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgRemoveClassCreator) => import("./ecocredit/v1/tx").MsgRemoveClassCreatorAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgRemoveClassCreatorAmino) => import("./ecocredit/v1/tx").MsgRemoveClassCreator;
    };
    "/regen.ecocredit.v1.MsgUpdateClassFee": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgUpdateClassFee) => import("./ecocredit/v1/tx").MsgUpdateClassFeeAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgUpdateClassFeeAmino) => import("./ecocredit/v1/tx").MsgUpdateClassFee;
    };
    "/regen.ecocredit.v1.MsgAddAllowedBridgeChain": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgAddAllowedBridgeChain) => import("./ecocredit/v1/tx").MsgAddAllowedBridgeChainAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgAddAllowedBridgeChainAmino) => import("./ecocredit/v1/tx").MsgAddAllowedBridgeChain;
    };
    "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/v1/tx").MsgRemoveAllowedBridgeChain) => import("./ecocredit/v1/tx").MsgRemoveAllowedBridgeChainAmino;
        fromAmino: (object: import("./ecocredit/v1/tx").MsgRemoveAllowedBridgeChainAmino) => import("./ecocredit/v1/tx").MsgRemoveAllowedBridgeChain;
    };
    "/regen.ecocredit.marketplace.v1.MsgSell": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/marketplace/v1/tx").MsgSell) => import("./ecocredit/marketplace/v1/tx").MsgSellAmino;
        fromAmino: (object: import("./ecocredit/marketplace/v1/tx").MsgSellAmino) => import("./ecocredit/marketplace/v1/tx").MsgSell;
    };
    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/marketplace/v1/tx").MsgUpdateSellOrders) => import("./ecocredit/marketplace/v1/tx").MsgUpdateSellOrdersAmino;
        fromAmino: (object: import("./ecocredit/marketplace/v1/tx").MsgUpdateSellOrdersAmino) => import("./ecocredit/marketplace/v1/tx").MsgUpdateSellOrders;
    };
    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/marketplace/v1/tx").MsgCancelSellOrder) => import("./ecocredit/marketplace/v1/tx").MsgCancelSellOrderAmino;
        fromAmino: (object: import("./ecocredit/marketplace/v1/tx").MsgCancelSellOrderAmino) => import("./ecocredit/marketplace/v1/tx").MsgCancelSellOrder;
    };
    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/marketplace/v1/tx").MsgBuyDirect) => import("./ecocredit/marketplace/v1/tx").MsgBuyDirectAmino;
        fromAmino: (object: import("./ecocredit/marketplace/v1/tx").MsgBuyDirectAmino) => import("./ecocredit/marketplace/v1/tx").MsgBuyDirect;
    };
    "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/marketplace/v1/tx").MsgAddAllowedDenom) => import("./ecocredit/marketplace/v1/tx").MsgAddAllowedDenomAmino;
        fromAmino: (object: import("./ecocredit/marketplace/v1/tx").MsgAddAllowedDenomAmino) => import("./ecocredit/marketplace/v1/tx").MsgAddAllowedDenom;
    };
    "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/marketplace/v1/tx").MsgRemoveAllowedDenom) => import("./ecocredit/marketplace/v1/tx").MsgRemoveAllowedDenomAmino;
        fromAmino: (object: import("./ecocredit/marketplace/v1/tx").MsgRemoveAllowedDenomAmino) => import("./ecocredit/marketplace/v1/tx").MsgRemoveAllowedDenom;
    };
    "/regen.ecocredit.basket.v1.MsgCreate": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/basket/v1/tx").MsgCreate) => import("./ecocredit/basket/v1/tx").MsgCreateAmino;
        fromAmino: (object: import("./ecocredit/basket/v1/tx").MsgCreateAmino) => import("./ecocredit/basket/v1/tx").MsgCreate;
    };
    "/regen.ecocredit.basket.v1.MsgPut": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/basket/v1/tx").MsgPut) => import("./ecocredit/basket/v1/tx").MsgPutAmino;
        fromAmino: (object: import("./ecocredit/basket/v1/tx").MsgPutAmino) => import("./ecocredit/basket/v1/tx").MsgPut;
    };
    "/regen.ecocredit.basket.v1.MsgTake": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/basket/v1/tx").MsgTake) => import("./ecocredit/basket/v1/tx").MsgTakeAmino;
        fromAmino: (object: import("./ecocredit/basket/v1/tx").MsgTakeAmino) => import("./ecocredit/basket/v1/tx").MsgTake;
    };
    "/regen.ecocredit.basket.v1.MsgUpdateBasketFee": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/basket/v1/tx").MsgUpdateBasketFee) => import("./ecocredit/basket/v1/tx").MsgUpdateBasketFeeAmino;
        fromAmino: (object: import("./ecocredit/basket/v1/tx").MsgUpdateBasketFeeAmino) => import("./ecocredit/basket/v1/tx").MsgUpdateBasketFee;
    };
    "/regen.ecocredit.basket.v1.MsgUpdateCurator": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/basket/v1/tx").MsgUpdateCurator) => import("./ecocredit/basket/v1/tx").MsgUpdateCuratorAmino;
        fromAmino: (object: import("./ecocredit/basket/v1/tx").MsgUpdateCuratorAmino) => import("./ecocredit/basket/v1/tx").MsgUpdateCurator;
    };
    "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria": {
        aminoType: string;
        toAmino: (message: import("./ecocredit/basket/v1/tx").MsgUpdateDateCriteria) => import("./ecocredit/basket/v1/tx").MsgUpdateDateCriteriaAmino;
        fromAmino: (object: import("./ecocredit/basket/v1/tx").MsgUpdateDateCriteriaAmino) => import("./ecocredit/basket/v1/tx").MsgUpdateDateCriteria;
    };
    "/regen.data.v1.MsgAnchor": {
        aminoType: string;
        toAmino: (message: import("./data/v1/tx").MsgAnchor) => import("./data/v1/tx").MsgAnchorAmino;
        fromAmino: (object: import("./data/v1/tx").MsgAnchorAmino) => import("./data/v1/tx").MsgAnchor;
    };
    "/regen.data.v1.MsgAttest": {
        aminoType: string;
        toAmino: (message: import("./data/v1/tx").MsgAttest) => import("./data/v1/tx").MsgAttestAmino;
        fromAmino: (object: import("./data/v1/tx").MsgAttestAmino) => import("./data/v1/tx").MsgAttest;
    };
    "/regen.data.v1.MsgDefineResolver": {
        aminoType: string;
        toAmino: (message: import("./data/v1/tx").MsgDefineResolver) => import("./data/v1/tx").MsgDefineResolverAmino;
        fromAmino: (object: import("./data/v1/tx").MsgDefineResolverAmino) => import("./data/v1/tx").MsgDefineResolver;
    };
    "/regen.data.v1.MsgRegisterResolver": {
        aminoType: string;
        toAmino: (message: import("./data/v1/tx").MsgRegisterResolver) => import("./data/v1/tx").MsgRegisterResolverAmino;
        fromAmino: (object: import("./data/v1/tx").MsgRegisterResolverAmino) => import("./data/v1/tx").MsgRegisterResolver;
    };
};
export declare const regenProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningRegenClientOptions: ({ defaultTypes }?: {
    defaultTypes?: readonly [string, GeneratedType][] | undefined;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningRegenClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: readonly [string, GeneratedType][] | undefined;
}) => Promise<SigningStargateClient>;
