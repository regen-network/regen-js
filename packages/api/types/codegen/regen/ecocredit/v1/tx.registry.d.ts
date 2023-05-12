import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateClass, MsgCreateProject, MsgCreateBatch, MsgMintBatchCredits, MsgSealBatch, MsgSend, MsgRetire, MsgCancel, MsgUpdateClassAdmin, MsgUpdateClassIssuers, MsgUpdateClassMetadata, MsgUpdateProjectAdmin, MsgUpdateProjectMetadata, MsgUpdateBatchMetadata, MsgBridge, MsgBridgeReceive, MsgAddCreditType, MsgSetClassCreatorAllowlist, MsgAddClassCreator, MsgRemoveClassCreator, MsgUpdateClassFee, MsgAddAllowedBridgeChain, MsgRemoveAllowedBridgeChain } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createClass(value: MsgCreateClass): {
            typeUrl: string;
            value: Uint8Array;
        };
        createProject(value: MsgCreateProject): {
            typeUrl: string;
            value: Uint8Array;
        };
        createBatch(value: MsgCreateBatch): {
            typeUrl: string;
            value: Uint8Array;
        };
        mintBatchCredits(value: MsgMintBatchCredits): {
            typeUrl: string;
            value: Uint8Array;
        };
        sealBatch(value: MsgSealBatch): {
            typeUrl: string;
            value: Uint8Array;
        };
        send(value: MsgSend): {
            typeUrl: string;
            value: Uint8Array;
        };
        retire(value: MsgRetire): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancel(value: MsgCancel): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateClassAdmin(value: MsgUpdateClassAdmin): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateClassIssuers(value: MsgUpdateClassIssuers): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateClassMetadata(value: MsgUpdateClassMetadata): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateProjectAdmin(value: MsgUpdateProjectAdmin): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateProjectMetadata(value: MsgUpdateProjectMetadata): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateBatchMetadata(value: MsgUpdateBatchMetadata): {
            typeUrl: string;
            value: Uint8Array;
        };
        bridge(value: MsgBridge): {
            typeUrl: string;
            value: Uint8Array;
        };
        bridgeReceive(value: MsgBridgeReceive): {
            typeUrl: string;
            value: Uint8Array;
        };
        addCreditType(value: MsgAddCreditType): {
            typeUrl: string;
            value: Uint8Array;
        };
        setClassCreatorAllowlist(value: MsgSetClassCreatorAllowlist): {
            typeUrl: string;
            value: Uint8Array;
        };
        addClassCreator(value: MsgAddClassCreator): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeClassCreator(value: MsgRemoveClassCreator): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateClassFee(value: MsgUpdateClassFee): {
            typeUrl: string;
            value: Uint8Array;
        };
        addAllowedBridgeChain(value: MsgAddAllowedBridgeChain): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeAllowedBridgeChain(value: MsgRemoveAllowedBridgeChain): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createClass(value: MsgCreateClass): {
            typeUrl: string;
            value: MsgCreateClass;
        };
        createProject(value: MsgCreateProject): {
            typeUrl: string;
            value: MsgCreateProject;
        };
        createBatch(value: MsgCreateBatch): {
            typeUrl: string;
            value: MsgCreateBatch;
        };
        mintBatchCredits(value: MsgMintBatchCredits): {
            typeUrl: string;
            value: MsgMintBatchCredits;
        };
        sealBatch(value: MsgSealBatch): {
            typeUrl: string;
            value: MsgSealBatch;
        };
        send(value: MsgSend): {
            typeUrl: string;
            value: MsgSend;
        };
        retire(value: MsgRetire): {
            typeUrl: string;
            value: MsgRetire;
        };
        cancel(value: MsgCancel): {
            typeUrl: string;
            value: MsgCancel;
        };
        updateClassAdmin(value: MsgUpdateClassAdmin): {
            typeUrl: string;
            value: MsgUpdateClassAdmin;
        };
        updateClassIssuers(value: MsgUpdateClassIssuers): {
            typeUrl: string;
            value: MsgUpdateClassIssuers;
        };
        updateClassMetadata(value: MsgUpdateClassMetadata): {
            typeUrl: string;
            value: MsgUpdateClassMetadata;
        };
        updateProjectAdmin(value: MsgUpdateProjectAdmin): {
            typeUrl: string;
            value: MsgUpdateProjectAdmin;
        };
        updateProjectMetadata(value: MsgUpdateProjectMetadata): {
            typeUrl: string;
            value: MsgUpdateProjectMetadata;
        };
        updateBatchMetadata(value: MsgUpdateBatchMetadata): {
            typeUrl: string;
            value: MsgUpdateBatchMetadata;
        };
        bridge(value: MsgBridge): {
            typeUrl: string;
            value: MsgBridge;
        };
        bridgeReceive(value: MsgBridgeReceive): {
            typeUrl: string;
            value: MsgBridgeReceive;
        };
        addCreditType(value: MsgAddCreditType): {
            typeUrl: string;
            value: MsgAddCreditType;
        };
        setClassCreatorAllowlist(value: MsgSetClassCreatorAllowlist): {
            typeUrl: string;
            value: MsgSetClassCreatorAllowlist;
        };
        addClassCreator(value: MsgAddClassCreator): {
            typeUrl: string;
            value: MsgAddClassCreator;
        };
        removeClassCreator(value: MsgRemoveClassCreator): {
            typeUrl: string;
            value: MsgRemoveClassCreator;
        };
        updateClassFee(value: MsgUpdateClassFee): {
            typeUrl: string;
            value: MsgUpdateClassFee;
        };
        addAllowedBridgeChain(value: MsgAddAllowedBridgeChain): {
            typeUrl: string;
            value: MsgAddAllowedBridgeChain;
        };
        removeAllowedBridgeChain(value: MsgRemoveAllowedBridgeChain): {
            typeUrl: string;
            value: MsgRemoveAllowedBridgeChain;
        };
    };
    toJSON: {
        createClass(value: MsgCreateClass): {
            typeUrl: string;
            value: unknown;
        };
        createProject(value: MsgCreateProject): {
            typeUrl: string;
            value: unknown;
        };
        createBatch(value: MsgCreateBatch): {
            typeUrl: string;
            value: unknown;
        };
        mintBatchCredits(value: MsgMintBatchCredits): {
            typeUrl: string;
            value: unknown;
        };
        sealBatch(value: MsgSealBatch): {
            typeUrl: string;
            value: unknown;
        };
        send(value: MsgSend): {
            typeUrl: string;
            value: unknown;
        };
        retire(value: MsgRetire): {
            typeUrl: string;
            value: unknown;
        };
        cancel(value: MsgCancel): {
            typeUrl: string;
            value: unknown;
        };
        updateClassAdmin(value: MsgUpdateClassAdmin): {
            typeUrl: string;
            value: unknown;
        };
        updateClassIssuers(value: MsgUpdateClassIssuers): {
            typeUrl: string;
            value: unknown;
        };
        updateClassMetadata(value: MsgUpdateClassMetadata): {
            typeUrl: string;
            value: unknown;
        };
        updateProjectAdmin(value: MsgUpdateProjectAdmin): {
            typeUrl: string;
            value: unknown;
        };
        updateProjectMetadata(value: MsgUpdateProjectMetadata): {
            typeUrl: string;
            value: unknown;
        };
        updateBatchMetadata(value: MsgUpdateBatchMetadata): {
            typeUrl: string;
            value: unknown;
        };
        bridge(value: MsgBridge): {
            typeUrl: string;
            value: unknown;
        };
        bridgeReceive(value: MsgBridgeReceive): {
            typeUrl: string;
            value: unknown;
        };
        addCreditType(value: MsgAddCreditType): {
            typeUrl: string;
            value: unknown;
        };
        setClassCreatorAllowlist(value: MsgSetClassCreatorAllowlist): {
            typeUrl: string;
            value: unknown;
        };
        addClassCreator(value: MsgAddClassCreator): {
            typeUrl: string;
            value: unknown;
        };
        removeClassCreator(value: MsgRemoveClassCreator): {
            typeUrl: string;
            value: unknown;
        };
        updateClassFee(value: MsgUpdateClassFee): {
            typeUrl: string;
            value: unknown;
        };
        addAllowedBridgeChain(value: MsgAddAllowedBridgeChain): {
            typeUrl: string;
            value: unknown;
        };
        removeAllowedBridgeChain(value: MsgRemoveAllowedBridgeChain): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createClass(value: any): {
            typeUrl: string;
            value: MsgCreateClass;
        };
        createProject(value: any): {
            typeUrl: string;
            value: MsgCreateProject;
        };
        createBatch(value: any): {
            typeUrl: string;
            value: MsgCreateBatch;
        };
        mintBatchCredits(value: any): {
            typeUrl: string;
            value: MsgMintBatchCredits;
        };
        sealBatch(value: any): {
            typeUrl: string;
            value: MsgSealBatch;
        };
        send(value: any): {
            typeUrl: string;
            value: MsgSend;
        };
        retire(value: any): {
            typeUrl: string;
            value: MsgRetire;
        };
        cancel(value: any): {
            typeUrl: string;
            value: MsgCancel;
        };
        updateClassAdmin(value: any): {
            typeUrl: string;
            value: MsgUpdateClassAdmin;
        };
        updateClassIssuers(value: any): {
            typeUrl: string;
            value: MsgUpdateClassIssuers;
        };
        updateClassMetadata(value: any): {
            typeUrl: string;
            value: MsgUpdateClassMetadata;
        };
        updateProjectAdmin(value: any): {
            typeUrl: string;
            value: MsgUpdateProjectAdmin;
        };
        updateProjectMetadata(value: any): {
            typeUrl: string;
            value: MsgUpdateProjectMetadata;
        };
        updateBatchMetadata(value: any): {
            typeUrl: string;
            value: MsgUpdateBatchMetadata;
        };
        bridge(value: any): {
            typeUrl: string;
            value: MsgBridge;
        };
        bridgeReceive(value: any): {
            typeUrl: string;
            value: MsgBridgeReceive;
        };
        addCreditType(value: any): {
            typeUrl: string;
            value: MsgAddCreditType;
        };
        setClassCreatorAllowlist(value: any): {
            typeUrl: string;
            value: MsgSetClassCreatorAllowlist;
        };
        addClassCreator(value: any): {
            typeUrl: string;
            value: MsgAddClassCreator;
        };
        removeClassCreator(value: any): {
            typeUrl: string;
            value: MsgRemoveClassCreator;
        };
        updateClassFee(value: any): {
            typeUrl: string;
            value: MsgUpdateClassFee;
        };
        addAllowedBridgeChain(value: any): {
            typeUrl: string;
            value: MsgAddAllowedBridgeChain;
        };
        removeAllowedBridgeChain(value: any): {
            typeUrl: string;
            value: MsgRemoveAllowedBridgeChain;
        };
    };
    fromPartial: {
        createClass(value: MsgCreateClass): {
            typeUrl: string;
            value: MsgCreateClass;
        };
        createProject(value: MsgCreateProject): {
            typeUrl: string;
            value: MsgCreateProject;
        };
        createBatch(value: MsgCreateBatch): {
            typeUrl: string;
            value: MsgCreateBatch;
        };
        mintBatchCredits(value: MsgMintBatchCredits): {
            typeUrl: string;
            value: MsgMintBatchCredits;
        };
        sealBatch(value: MsgSealBatch): {
            typeUrl: string;
            value: MsgSealBatch;
        };
        send(value: MsgSend): {
            typeUrl: string;
            value: MsgSend;
        };
        retire(value: MsgRetire): {
            typeUrl: string;
            value: MsgRetire;
        };
        cancel(value: MsgCancel): {
            typeUrl: string;
            value: MsgCancel;
        };
        updateClassAdmin(value: MsgUpdateClassAdmin): {
            typeUrl: string;
            value: MsgUpdateClassAdmin;
        };
        updateClassIssuers(value: MsgUpdateClassIssuers): {
            typeUrl: string;
            value: MsgUpdateClassIssuers;
        };
        updateClassMetadata(value: MsgUpdateClassMetadata): {
            typeUrl: string;
            value: MsgUpdateClassMetadata;
        };
        updateProjectAdmin(value: MsgUpdateProjectAdmin): {
            typeUrl: string;
            value: MsgUpdateProjectAdmin;
        };
        updateProjectMetadata(value: MsgUpdateProjectMetadata): {
            typeUrl: string;
            value: MsgUpdateProjectMetadata;
        };
        updateBatchMetadata(value: MsgUpdateBatchMetadata): {
            typeUrl: string;
            value: MsgUpdateBatchMetadata;
        };
        bridge(value: MsgBridge): {
            typeUrl: string;
            value: MsgBridge;
        };
        bridgeReceive(value: MsgBridgeReceive): {
            typeUrl: string;
            value: MsgBridgeReceive;
        };
        addCreditType(value: MsgAddCreditType): {
            typeUrl: string;
            value: MsgAddCreditType;
        };
        setClassCreatorAllowlist(value: MsgSetClassCreatorAllowlist): {
            typeUrl: string;
            value: MsgSetClassCreatorAllowlist;
        };
        addClassCreator(value: MsgAddClassCreator): {
            typeUrl: string;
            value: MsgAddClassCreator;
        };
        removeClassCreator(value: MsgRemoveClassCreator): {
            typeUrl: string;
            value: MsgRemoveClassCreator;
        };
        updateClassFee(value: MsgUpdateClassFee): {
            typeUrl: string;
            value: MsgUpdateClassFee;
        };
        addAllowedBridgeChain(value: MsgAddAllowedBridgeChain): {
            typeUrl: string;
            value: MsgAddAllowedBridgeChain;
        };
        removeAllowedBridgeChain(value: MsgRemoveAllowedBridgeChain): {
            typeUrl: string;
            value: MsgRemoveAllowedBridgeChain;
        };
    };
};
