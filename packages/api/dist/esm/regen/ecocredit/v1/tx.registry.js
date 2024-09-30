import { MsgCreateClass, MsgCreateProject, MsgCreateBatch, MsgMintBatchCredits, MsgSealBatch, MsgSend, MsgRetire, MsgCancel, MsgUpdateClassAdmin, MsgUpdateClassIssuers, MsgUpdateClassMetadata, MsgUpdateProjectAdmin, MsgUpdateProjectMetadata, MsgUpdateBatchMetadata, MsgBridge, MsgBridgeReceive, MsgAddCreditType, MsgSetClassCreatorAllowlist, MsgAddClassCreator, MsgRemoveClassCreator, MsgUpdateClassFee, MsgAddAllowedBridgeChain, MsgRemoveAllowedBridgeChain } from "./tx";
export const registry = [["/regen.ecocredit.v1.MsgCreateClass", MsgCreateClass], ["/regen.ecocredit.v1.MsgCreateProject", MsgCreateProject], ["/regen.ecocredit.v1.MsgCreateBatch", MsgCreateBatch], ["/regen.ecocredit.v1.MsgMintBatchCredits", MsgMintBatchCredits], ["/regen.ecocredit.v1.MsgSealBatch", MsgSealBatch], ["/regen.ecocredit.v1.MsgSend", MsgSend], ["/regen.ecocredit.v1.MsgRetire", MsgRetire], ["/regen.ecocredit.v1.MsgCancel", MsgCancel], ["/regen.ecocredit.v1.MsgUpdateClassAdmin", MsgUpdateClassAdmin], ["/regen.ecocredit.v1.MsgUpdateClassIssuers", MsgUpdateClassIssuers], ["/regen.ecocredit.v1.MsgUpdateClassMetadata", MsgUpdateClassMetadata], ["/regen.ecocredit.v1.MsgUpdateProjectAdmin", MsgUpdateProjectAdmin], ["/regen.ecocredit.v1.MsgUpdateProjectMetadata", MsgUpdateProjectMetadata], ["/regen.ecocredit.v1.MsgUpdateBatchMetadata", MsgUpdateBatchMetadata], ["/regen.ecocredit.v1.MsgBridge", MsgBridge], ["/regen.ecocredit.v1.MsgBridgeReceive", MsgBridgeReceive], ["/regen.ecocredit.v1.MsgAddCreditType", MsgAddCreditType], ["/regen.ecocredit.v1.MsgSetClassCreatorAllowlist", MsgSetClassCreatorAllowlist], ["/regen.ecocredit.v1.MsgAddClassCreator", MsgAddClassCreator], ["/regen.ecocredit.v1.MsgRemoveClassCreator", MsgRemoveClassCreator], ["/regen.ecocredit.v1.MsgUpdateClassFee", MsgUpdateClassFee], ["/regen.ecocredit.v1.MsgAddAllowedBridgeChain", MsgAddAllowedBridgeChain], ["/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain", MsgRemoveAllowedBridgeChain]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createClass(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateClass",
                value: MsgCreateClass.encode(value).finish()
            };
        },
        createProject(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateProject",
                value: MsgCreateProject.encode(value).finish()
            };
        },
        createBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateBatch",
                value: MsgCreateBatch.encode(value).finish()
            };
        },
        mintBatchCredits(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits",
                value: MsgMintBatchCredits.encode(value).finish()
            };
        },
        sealBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSealBatch",
                value: MsgSealBatch.encode(value).finish()
            };
        },
        send(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSend",
                value: MsgSend.encode(value).finish()
            };
        },
        retire(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgRetire",
                value: MsgRetire.encode(value).finish()
            };
        },
        cancel(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCancel",
                value: MsgCancel.encode(value).finish()
            };
        },
        updateClassAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
                value: MsgUpdateClassAdmin.encode(value).finish()
            };
        },
        updateClassIssuers(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
                value: MsgUpdateClassIssuers.encode(value).finish()
            };
        },
        updateClassMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
                value: MsgUpdateClassMetadata.encode(value).finish()
            };
        },
        updateProjectAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
                value: MsgUpdateProjectAdmin.encode(value).finish()
            };
        },
        updateProjectMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
                value: MsgUpdateProjectMetadata.encode(value).finish()
            };
        },
        updateBatchMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadata",
                value: MsgUpdateBatchMetadata.encode(value).finish()
            };
        },
        bridge(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgBridge",
                value: MsgBridge.encode(value).finish()
            };
        },
        bridgeReceive(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgBridgeReceive",
                value: MsgBridgeReceive.encode(value).finish()
            };
        },
        addCreditType(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgAddCreditType",
                value: MsgAddCreditType.encode(value).finish()
            };
        },
        setClassCreatorAllowlist(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist",
                value: MsgSetClassCreatorAllowlist.encode(value).finish()
            };
        },
        addClassCreator(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgAddClassCreator",
                value: MsgAddClassCreator.encode(value).finish()
            };
        },
        removeClassCreator(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreator",
                value: MsgRemoveClassCreator.encode(value).finish()
            };
        },
        updateClassFee(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFee",
                value: MsgUpdateClassFee.encode(value).finish()
            };
        },
        addAllowedBridgeChain(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChain",
                value: MsgAddAllowedBridgeChain.encode(value).finish()
            };
        },
        removeAllowedBridgeChain(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain",
                value: MsgRemoveAllowedBridgeChain.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createClass(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateClass",
                value
            };
        },
        createProject(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateProject",
                value
            };
        },
        createBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateBatch",
                value
            };
        },
        mintBatchCredits(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits",
                value
            };
        },
        sealBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSealBatch",
                value
            };
        },
        send(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSend",
                value
            };
        },
        retire(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgRetire",
                value
            };
        },
        cancel(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCancel",
                value
            };
        },
        updateClassAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
                value
            };
        },
        updateClassIssuers(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
                value
            };
        },
        updateClassMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
                value
            };
        },
        updateProjectAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
                value
            };
        },
        updateProjectMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
                value
            };
        },
        updateBatchMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadata",
                value
            };
        },
        bridge(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgBridge",
                value
            };
        },
        bridgeReceive(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgBridgeReceive",
                value
            };
        },
        addCreditType(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgAddCreditType",
                value
            };
        },
        setClassCreatorAllowlist(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist",
                value
            };
        },
        addClassCreator(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgAddClassCreator",
                value
            };
        },
        removeClassCreator(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreator",
                value
            };
        },
        updateClassFee(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFee",
                value
            };
        },
        addAllowedBridgeChain(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChain",
                value
            };
        },
        removeAllowedBridgeChain(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain",
                value
            };
        }
    },
    fromPartial: {
        createClass(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateClass",
                value: MsgCreateClass.fromPartial(value)
            };
        },
        createProject(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateProject",
                value: MsgCreateProject.fromPartial(value)
            };
        },
        createBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateBatch",
                value: MsgCreateBatch.fromPartial(value)
            };
        },
        mintBatchCredits(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits",
                value: MsgMintBatchCredits.fromPartial(value)
            };
        },
        sealBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSealBatch",
                value: MsgSealBatch.fromPartial(value)
            };
        },
        send(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSend",
                value: MsgSend.fromPartial(value)
            };
        },
        retire(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgRetire",
                value: MsgRetire.fromPartial(value)
            };
        },
        cancel(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCancel",
                value: MsgCancel.fromPartial(value)
            };
        },
        updateClassAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
                value: MsgUpdateClassAdmin.fromPartial(value)
            };
        },
        updateClassIssuers(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
                value: MsgUpdateClassIssuers.fromPartial(value)
            };
        },
        updateClassMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
                value: MsgUpdateClassMetadata.fromPartial(value)
            };
        },
        updateProjectAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
                value: MsgUpdateProjectAdmin.fromPartial(value)
            };
        },
        updateProjectMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
                value: MsgUpdateProjectMetadata.fromPartial(value)
            };
        },
        updateBatchMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateBatchMetadata",
                value: MsgUpdateBatchMetadata.fromPartial(value)
            };
        },
        bridge(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgBridge",
                value: MsgBridge.fromPartial(value)
            };
        },
        bridgeReceive(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgBridgeReceive",
                value: MsgBridgeReceive.fromPartial(value)
            };
        },
        addCreditType(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgAddCreditType",
                value: MsgAddCreditType.fromPartial(value)
            };
        },
        setClassCreatorAllowlist(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist",
                value: MsgSetClassCreatorAllowlist.fromPartial(value)
            };
        },
        addClassCreator(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgAddClassCreator",
                value: MsgAddClassCreator.fromPartial(value)
            };
        },
        removeClassCreator(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgRemoveClassCreator",
                value: MsgRemoveClassCreator.fromPartial(value)
            };
        },
        updateClassFee(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassFee",
                value: MsgUpdateClassFee.fromPartial(value)
            };
        },
        addAllowedBridgeChain(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgAddAllowedBridgeChain",
                value: MsgAddAllowedBridgeChain.fromPartial(value)
            };
        },
        removeAllowedBridgeChain(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain",
                value: MsgRemoveAllowedBridgeChain.fromPartial(value)
            };
        }
    }
};
