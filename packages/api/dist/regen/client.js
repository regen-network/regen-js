"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSigningRegenClient = exports.getSigningRegenClientOptions = exports.regenProtoRegistry = exports.regenAminoConverters = void 0;
//@ts-nocheck
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const regenDataV1TxRegistry = __importStar(require("./data/v1/tx.registry"));
const regenEcocreditBasketV1TxRegistry = __importStar(require("./ecocredit/basket/v1/tx.registry"));
const regenEcocreditMarketplaceV1TxRegistry = __importStar(require("./ecocredit/marketplace/v1/tx.registry"));
const regenEcocreditV1TxRegistry = __importStar(require("./ecocredit/v1/tx.registry"));
const regenEcocreditV1alpha1TxRegistry = __importStar(require("./ecocredit/v1alpha1/tx.registry"));
const regenIntertxV1TxRegistry = __importStar(require("./intertx/v1/tx.registry"));
const regenDataV1TxAmino = __importStar(require("./data/v1/tx.amino"));
const regenEcocreditBasketV1TxAmino = __importStar(require("./ecocredit/basket/v1/tx.amino"));
const regenEcocreditMarketplaceV1TxAmino = __importStar(require("./ecocredit/marketplace/v1/tx.amino"));
const regenEcocreditV1TxAmino = __importStar(require("./ecocredit/v1/tx.amino"));
const regenEcocreditV1alpha1TxAmino = __importStar(require("./ecocredit/v1alpha1/tx.amino"));
const regenIntertxV1TxAmino = __importStar(require("./intertx/v1/tx.amino"));
exports.regenAminoConverters = {
    ...regenDataV1TxAmino.AminoConverter,
    ...regenEcocreditBasketV1TxAmino.AminoConverter,
    ...regenEcocreditMarketplaceV1TxAmino.AminoConverter,
    ...regenEcocreditV1TxAmino.AminoConverter,
    ...regenEcocreditV1alpha1TxAmino.AminoConverter,
    ...regenIntertxV1TxAmino.AminoConverter
};
exports.regenProtoRegistry = [...regenDataV1TxRegistry.registry, ...regenEcocreditBasketV1TxRegistry.registry, ...regenEcocreditMarketplaceV1TxRegistry.registry, ...regenEcocreditV1TxRegistry.registry, ...regenEcocreditV1alpha1TxRegistry.registry, ...regenIntertxV1TxRegistry.registry];
const getSigningRegenClientOptions = ({ defaultTypes = stargate_1.defaultRegistryTypes } = {}) => {
    const registry = new proto_signing_1.Registry([...defaultTypes, ...exports.regenProtoRegistry]);
    const aminoTypes = new stargate_1.AminoTypes({
        ...exports.regenAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
exports.getSigningRegenClientOptions = getSigningRegenClientOptions;
const getSigningRegenClient = async ({ rpcEndpoint, signer, defaultTypes = stargate_1.defaultRegistryTypes }) => {
    const { registry, aminoTypes } = (0, exports.getSigningRegenClientOptions)({
        defaultTypes
    });
    const client = await stargate_1.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
exports.getSigningRegenClient = getSigningRegenClient;
