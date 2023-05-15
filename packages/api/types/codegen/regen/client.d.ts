import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const regenAminoConverters: {
    "/regen.intertx.v1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: ({ owner, connectionId, version }: import("./intertx/v1/tx").MsgRegisterAccount) => {
            owner: string;
            connection_id: string;
            version: string;
        };
        fromAmino: ({ owner, connection_id, version }: {
            owner: string;
            connection_id: string;
            version: string;
        }) => import("./intertx/v1/tx").MsgRegisterAccount;
    };
    "/regen.intertx.v1.MsgSubmitTx": {
        aminoType: string;
        toAmino: ({ owner, connectionId, msg }: import("./intertx/v1/tx").MsgSubmitTx) => {
            owner: string;
            connection_id: string;
            msg: {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromAmino: ({ owner, connection_id, msg }: {
            owner: string;
            connection_id: string;
            msg: {
                type_url: string;
                value: Uint8Array;
            };
        }) => import("./intertx/v1/tx").MsgSubmitTx;
    };
    "/regen.ecocredit.v1alpha1.MsgCreateClass": {
        aminoType: string;
        toAmino: ({ admin, issuers, metadata, creditTypeName }: import("./ecocredit/v1alpha1/tx").MsgCreateClass) => {
            admin: string;
            issuers: string[];
            metadata: Uint8Array;
            credit_type_name: string;
        };
        fromAmino: ({ admin, issuers, metadata, credit_type_name }: {
            admin: string;
            issuers: string[];
            metadata: Uint8Array;
            credit_type_name: string;
        }) => import("./ecocredit/v1alpha1/tx").MsgCreateClass;
    };
    "/regen.ecocredit.v1alpha1.MsgCreateBatch": {
        aminoType: string;
        toAmino: ({ issuer, classId, issuance, metadata, startDate, endDate, projectLocation }: import("./ecocredit/v1alpha1/tx").MsgCreateBatch) => {
            issuer: string;
            class_id: string;
            issuance: {
                recipient: string;
                tradable_amount: string;
                retired_amount: string;
                retirement_location: string;
            }[];
            metadata: Uint8Array;
            start_date: {
                seconds: string;
                nanos: number;
            };
            end_date: {
                seconds: string;
                nanos: number;
            };
            project_location: string;
        };
        fromAmino: ({ issuer, class_id, issuance, metadata, start_date, end_date, project_location }: {
            issuer: string;
            class_id: string;
            issuance: {
                recipient: string;
                tradable_amount: string;
                retired_amount: string;
                retirement_location: string;
            }[];
            metadata: Uint8Array;
            start_date: {
                seconds: string;
                nanos: number;
            };
            end_date: {
                seconds: string;
                nanos: number;
            };
            project_location: string;
        }) => import("./ecocredit/v1alpha1/tx").MsgCreateBatch;
    };
    "/regen.ecocredit.v1alpha1.MsgSend": {
        aminoType: string;
        toAmino: ({ sender, recipient, credits }: import("./ecocredit/v1alpha1/tx").MsgSend) => {
            sender: string;
            recipient: string;
            credits: {
                batch_denom: string;
                tradable_amount: string;
                retired_amount: string;
                retirement_location: string;
            }[];
        };
        fromAmino: ({ sender, recipient, credits }: {
            sender: string;
            recipient: string;
            credits: {
                batch_denom: string;
                tradable_amount: string;
                retired_amount: string;
                retirement_location: string;
            }[];
        }) => import("./ecocredit/v1alpha1/tx").MsgSend;
    };
    "/regen.ecocredit.v1alpha1.MsgRetire": {
        aminoType: string;
        toAmino: ({ holder, credits, location }: import("./ecocredit/v1alpha1/tx").MsgRetire) => {
            holder: string;
            credits: {
                batch_denom: string;
                amount: string;
            }[];
            location: string;
        };
        fromAmino: ({ holder, credits, location }: {
            holder: string;
            credits: {
                batch_denom: string;
                amount: string;
            }[];
            location: string;
        }) => import("./ecocredit/v1alpha1/tx").MsgRetire;
    };
    "/regen.ecocredit.v1alpha1.MsgCancel": {
        aminoType: string;
        toAmino: ({ holder, credits }: import("./ecocredit/v1alpha1/tx").MsgCancel) => {
            holder: string;
            credits: {
                batch_denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ holder, credits }: {
            holder: string;
            credits: {
                batch_denom: string;
                amount: string;
            }[];
        }) => import("./ecocredit/v1alpha1/tx").MsgCancel;
    };
    "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin": {
        aminoType: string;
        toAmino: ({ admin, classId, newAdmin }: import("./ecocredit/v1alpha1/tx").MsgUpdateClassAdmin) => {
            admin: string;
            class_id: string;
            new_admin: string;
        };
        fromAmino: ({ admin, class_id, new_admin }: {
            admin: string;
            class_id: string;
            new_admin: string;
        }) => import("./ecocredit/v1alpha1/tx").MsgUpdateClassAdmin;
    };
    "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers": {
        aminoType: string;
        toAmino: ({ admin, classId, issuers }: import("./ecocredit/v1alpha1/tx").MsgUpdateClassIssuers) => {
            admin: string;
            class_id: string;
            issuers: string[];
        };
        fromAmino: ({ admin, class_id, issuers }: {
            admin: string;
            class_id: string;
            issuers: string[];
        }) => import("./ecocredit/v1alpha1/tx").MsgUpdateClassIssuers;
    };
    "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata": {
        aminoType: string;
        toAmino: ({ admin, classId, metadata }: import("./ecocredit/v1alpha1/tx").MsgUpdateClassMetadata) => {
            admin: string;
            class_id: string;
            metadata: Uint8Array;
        };
        fromAmino: ({ admin, class_id, metadata }: {
            admin: string;
            class_id: string;
            metadata: Uint8Array;
        }) => import("./ecocredit/v1alpha1/tx").MsgUpdateClassMetadata;
    };
    "/regen.ecocredit.v1.MsgCreateClass": {
        aminoType: string;
        toAmino: ({ admin, issuers, metadata, creditTypeAbbrev, fee }: import("./ecocredit/v1/tx").MsgCreateClass) => {
            admin: string;
            issuers: string[];
            metadata: string;
            credit_type_abbrev: string;
            fee: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ admin, issuers, metadata, credit_type_abbrev, fee }: {
            admin: string;
            issuers: string[];
            metadata: string;
            credit_type_abbrev: string;
            fee: {
                denom: string;
                amount: string;
            };
        }) => import("./ecocredit/v1/tx").MsgCreateClass;
    };
    "/regen.ecocredit.v1.MsgCreateProject": {
        aminoType: string;
        toAmino: ({ admin, classId, metadata, jurisdiction, referenceId }: import("./ecocredit/v1/tx").MsgCreateProject) => {
            admin: string;
            class_id: string;
            metadata: string;
            jurisdiction: string;
            reference_id: string;
        };
        fromAmino: ({ admin, class_id, metadata, jurisdiction, reference_id }: {
            admin: string;
            class_id: string;
            metadata: string;
            jurisdiction: string;
            reference_id: string;
        }) => import("./ecocredit/v1/tx").MsgCreateProject;
    };
    "/regen.ecocredit.v1.MsgCreateBatch": {
        aminoType: string;
        toAmino: ({ issuer, projectId, issuance, metadata, startDate, endDate, open, originTx }: import("./ecocredit/v1/tx").MsgCreateBatch) => {
            issuer: string;
            project_id: string;
            issuance: {
                recipient: string;
                tradable_amount: string;
                retired_amount: string;
                retirement_jurisdiction: string;
                retirement_reason: string;
            }[];
            metadata: string;
            start_date: {
                seconds: string;
                nanos: number;
            };
            end_date: {
                seconds: string;
                nanos: number;
            };
            open: boolean;
            origin_tx: {
                id: string;
                source: string;
                contract: string;
                note: string;
            };
        };
        fromAmino: ({ issuer, project_id, issuance, metadata, start_date, end_date, open, origin_tx }: {
            issuer: string;
            project_id: string;
            issuance: {
                recipient: string;
                tradable_amount: string;
                retired_amount: string;
                retirement_jurisdiction: string;
                retirement_reason: string;
            }[];
            metadata: string;
            start_date: {
                seconds: string;
                nanos: number;
            };
            end_date: {
                seconds: string;
                nanos: number;
            };
            open: boolean;
            origin_tx: {
                id: string;
                source: string;
                contract: string;
                note: string;
            };
        }) => import("./ecocredit/v1/tx").MsgCreateBatch;
    };
    "/regen.ecocredit.v1.MsgMintBatchCredits": {
        aminoType: string;
        toAmino: ({ issuer, batchDenom, issuance, originTx }: import("./ecocredit/v1/tx").MsgMintBatchCredits) => {
            issuer: string;
            batch_denom: string;
            issuance: {
                recipient: string;
                tradable_amount: string;
                retired_amount: string;
                retirement_jurisdiction: string;
                retirement_reason: string;
            }[];
            origin_tx: {
                id: string;
                source: string;
                contract: string;
                note: string;
            };
        };
        fromAmino: ({ issuer, batch_denom, issuance, origin_tx }: {
            issuer: string;
            batch_denom: string;
            issuance: {
                recipient: string;
                tradable_amount: string;
                retired_amount: string;
                retirement_jurisdiction: string;
                retirement_reason: string;
            }[];
            origin_tx: {
                id: string;
                source: string;
                contract: string;
                note: string;
            };
        }) => import("./ecocredit/v1/tx").MsgMintBatchCredits;
    };
    "/regen.ecocredit.v1.MsgSealBatch": {
        aminoType: string;
        toAmino: ({ issuer, batchDenom }: import("./ecocredit/v1/tx").MsgSealBatch) => {
            issuer: string;
            batch_denom: string;
        };
        fromAmino: ({ issuer, batch_denom }: {
            issuer: string;
            batch_denom: string;
        }) => import("./ecocredit/v1/tx").MsgSealBatch;
    };
    "/regen.ecocredit.v1.MsgSend": {
        aminoType: string;
        toAmino: ({ sender, recipient, credits }: import("./ecocredit/v1/tx").MsgSend) => {
            sender: string;
            recipient: string;
            credits: {
                batch_denom: string;
                tradable_amount: string;
                retired_amount: string;
                retirement_jurisdiction: string;
                retirement_reason: string;
            }[];
        };
        fromAmino: ({ sender, recipient, credits }: {
            sender: string;
            recipient: string;
            credits: {
                batch_denom: string;
                tradable_amount: string;
                retired_amount: string;
                retirement_jurisdiction: string;
                retirement_reason: string;
            }[];
        }) => import("./ecocredit/v1/tx").MsgSend;
    };
    "/regen.ecocredit.v1.MsgRetire": {
        aminoType: string;
        toAmino: ({ owner, credits, jurisdiction, reason }: import("./ecocredit/v1/tx").MsgRetire) => {
            owner: string;
            credits: {
                batch_denom: string;
                amount: string;
            }[];
            jurisdiction: string;
            reason: string;
        };
        fromAmino: ({ owner, credits, jurisdiction, reason }: {
            owner: string;
            credits: {
                batch_denom: string;
                amount: string;
            }[];
            jurisdiction: string;
            reason: string;
        }) => import("./ecocredit/v1/tx").MsgRetire;
    };
    "/regen.ecocredit.v1.MsgCancel": {
        aminoType: string;
        toAmino: ({ owner, credits, reason }: import("./ecocredit/v1/tx").MsgCancel) => {
            owner: string;
            credits: {
                batch_denom: string;
                amount: string;
            }[];
            reason: string;
        };
        fromAmino: ({ owner, credits, reason }: {
            owner: string;
            credits: {
                batch_denom: string;
                amount: string;
            }[];
            reason: string;
        }) => import("./ecocredit/v1/tx").MsgCancel;
    };
    "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
        aminoType: string;
        toAmino: ({ admin, classId, newAdmin }: import("./ecocredit/v1/tx").MsgUpdateClassAdmin) => {
            admin: string;
            class_id: string;
            new_admin: string;
        };
        fromAmino: ({ admin, class_id, new_admin }: {
            admin: string;
            class_id: string;
            new_admin: string;
        }) => import("./ecocredit/v1/tx").MsgUpdateClassAdmin;
    };
    "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
        aminoType: string;
        toAmino: ({ admin, classId, addIssuers, removeIssuers }: import("./ecocredit/v1/tx").MsgUpdateClassIssuers) => {
            admin: string;
            class_id: string;
            add_issuers: string[];
            remove_issuers: string[];
        };
        fromAmino: ({ admin, class_id, add_issuers, remove_issuers }: {
            admin: string;
            class_id: string;
            add_issuers: string[];
            remove_issuers: string[];
        }) => import("./ecocredit/v1/tx").MsgUpdateClassIssuers;
    };
    "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
        aminoType: string;
        toAmino: ({ admin, classId, newMetadata }: import("./ecocredit/v1/tx").MsgUpdateClassMetadata) => {
            admin: string;
            class_id: string;
            new_metadata: string;
        };
        fromAmino: ({ admin, class_id, new_metadata }: {
            admin: string;
            class_id: string;
            new_metadata: string;
        }) => import("./ecocredit/v1/tx").MsgUpdateClassMetadata;
    };
    "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
        aminoType: string;
        toAmino: ({ admin, projectId, newAdmin }: import("./ecocredit/v1/tx").MsgUpdateProjectAdmin) => {
            admin: string;
            project_id: string;
            new_admin: string;
        };
        fromAmino: ({ admin, project_id, new_admin }: {
            admin: string;
            project_id: string;
            new_admin: string;
        }) => import("./ecocredit/v1/tx").MsgUpdateProjectAdmin;
    };
    "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
        aminoType: string;
        toAmino: ({ admin, projectId, newMetadata }: import("./ecocredit/v1/tx").MsgUpdateProjectMetadata) => {
            admin: string;
            project_id: string;
            new_metadata: string;
        };
        fromAmino: ({ admin, project_id, new_metadata }: {
            admin: string;
            project_id: string;
            new_metadata: string;
        }) => import("./ecocredit/v1/tx").MsgUpdateProjectMetadata;
    };
    "/regen.ecocredit.v1.MsgUpdateBatchMetadata": {
        aminoType: string;
        toAmino: ({ issuer, batchDenom, newMetadata }: import("./ecocredit/v1/tx").MsgUpdateBatchMetadata) => {
            issuer: string;
            batch_denom: string;
            new_metadata: string;
        };
        fromAmino: ({ issuer, batch_denom, new_metadata }: {
            issuer: string;
            batch_denom: string;
            new_metadata: string;
        }) => import("./ecocredit/v1/tx").MsgUpdateBatchMetadata;
    };
    "/regen.ecocredit.v1.MsgBridge": {
        aminoType: string;
        toAmino: ({ owner, target, recipient, credits }: import("./ecocredit/v1/tx").MsgBridge) => {
            owner: string;
            target: string;
            recipient: string;
            credits: {
                batch_denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ owner, target, recipient, credits }: {
            owner: string;
            target: string;
            recipient: string;
            credits: {
                batch_denom: string;
                amount: string;
            }[];
        }) => import("./ecocredit/v1/tx").MsgBridge;
    };
    "/regen.ecocredit.v1.MsgBridgeReceive": {
        aminoType: string;
        toAmino: ({ issuer, classId, project, batch, originTx }: import("./ecocredit/v1/tx").MsgBridgeReceive) => {
            issuer: string;
            class_id: string;
            project: {
                reference_id: string;
                jurisdiction: string;
                metadata: string;
            };
            batch: {
                recipient: string;
                amount: string;
                start_date: {
                    seconds: string;
                    nanos: number;
                };
                end_date: {
                    seconds: string;
                    nanos: number;
                };
                metadata: string;
            };
            origin_tx: {
                id: string;
                source: string;
                contract: string;
                note: string;
            };
        };
        fromAmino: ({ issuer, class_id, project, batch, origin_tx }: {
            issuer: string;
            class_id: string;
            project: {
                reference_id: string;
                jurisdiction: string;
                metadata: string;
            };
            batch: {
                recipient: string;
                amount: string;
                start_date: {
                    seconds: string;
                    nanos: number;
                };
                end_date: {
                    seconds: string;
                    nanos: number;
                };
                metadata: string;
            };
            origin_tx: {
                id: string;
                source: string;
                contract: string;
                note: string;
            };
        }) => import("./ecocredit/v1/tx").MsgBridgeReceive;
    };
    "/regen.ecocredit.v1.MsgAddCreditType": {
        aminoType: string;
        toAmino: ({ authority, creditType }: import("./ecocredit/v1/tx").MsgAddCreditType) => {
            authority: string;
            credit_type: {
                abbreviation: string;
                name: string;
                unit: string;
                precision: number;
            };
        };
        fromAmino: ({ authority, credit_type }: {
            authority: string;
            credit_type: {
                abbreviation: string;
                name: string;
                unit: string;
                precision: number;
            };
        }) => import("./ecocredit/v1/tx").MsgAddCreditType;
    };
    "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist": {
        aminoType: string;
        toAmino: ({ authority, enabled }: import("./ecocredit/v1/tx").MsgSetClassCreatorAllowlist) => {
            authority: string;
            enabled: boolean;
        };
        fromAmino: ({ authority, enabled }: {
            authority: string;
            enabled: boolean;
        }) => import("./ecocredit/v1/tx").MsgSetClassCreatorAllowlist;
    };
    "/regen.ecocredit.v1.MsgAddClassCreator": {
        aminoType: string;
        toAmino: ({ authority, creator }: import("./ecocredit/v1/tx").MsgAddClassCreator) => {
            authority: string;
            creator: string;
        };
        fromAmino: ({ authority, creator }: {
            authority: string;
            creator: string;
        }) => import("./ecocredit/v1/tx").MsgAddClassCreator;
    };
    "/regen.ecocredit.v1.MsgRemoveClassCreator": {
        aminoType: string;
        toAmino: ({ authority, creator }: import("./ecocredit/v1/tx").MsgRemoveClassCreator) => {
            authority: string;
            creator: string;
        };
        fromAmino: ({ authority, creator }: {
            authority: string;
            creator: string;
        }) => import("./ecocredit/v1/tx").MsgRemoveClassCreator;
    };
    "/regen.ecocredit.v1.MsgUpdateClassFee": {
        aminoType: string;
        toAmino: ({ authority, fee }: import("./ecocredit/v1/tx").MsgUpdateClassFee) => {
            authority: string;
            fee: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ authority, fee }: {
            authority: string;
            fee: {
                denom: string;
                amount: string;
            };
        }) => import("./ecocredit/v1/tx").MsgUpdateClassFee;
    };
    "/regen.ecocredit.v1.MsgAddAllowedBridgeChain": {
        aminoType: string;
        toAmino: ({ authority, chainName }: import("./ecocredit/v1/tx").MsgAddAllowedBridgeChain) => {
            authority: string;
            chain_name: string;
        };
        fromAmino: ({ authority, chain_name }: {
            authority: string;
            chain_name: string;
        }) => import("./ecocredit/v1/tx").MsgAddAllowedBridgeChain;
    };
    "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain": {
        aminoType: string;
        toAmino: ({ authority, chainName }: import("./ecocredit/v1/tx").MsgRemoveAllowedBridgeChain) => {
            authority: string;
            chain_name: string;
        };
        fromAmino: ({ authority, chain_name }: {
            authority: string;
            chain_name: string;
        }) => import("./ecocredit/v1/tx").MsgRemoveAllowedBridgeChain;
    };
    "/regen.ecocredit.marketplace.v1.MsgSell": {
        aminoType: string;
        toAmino: ({ seller, orders }: import("./ecocredit/marketplace/v1/tx").MsgSell) => {
            seller: string;
            orders: {
                batch_denom: string;
                quantity: string;
                ask_price: {
                    denom: string;
                    amount: string;
                };
                disable_auto_retire: boolean;
                expiration: {
                    seconds: string;
                    nanos: number;
                };
            }[];
        };
        fromAmino: ({ seller, orders }: {
            seller: string;
            orders: {
                batch_denom: string;
                quantity: string;
                ask_price: {
                    denom: string;
                    amount: string;
                };
                disable_auto_retire: boolean;
                expiration: {
                    seconds: string;
                    nanos: number;
                };
            }[];
        }) => import("./ecocredit/marketplace/v1/tx").MsgSell;
    };
    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
        aminoType: string;
        toAmino: ({ seller, updates }: import("./ecocredit/marketplace/v1/tx").MsgUpdateSellOrders) => {
            seller: string;
            updates: {
                sell_order_id: string;
                new_quantity: string;
                new_ask_price: {
                    denom: string;
                    amount: string;
                };
                disable_auto_retire: boolean;
                new_expiration: {
                    seconds: string;
                    nanos: number;
                };
            }[];
        };
        fromAmino: ({ seller, updates }: {
            seller: string;
            updates: {
                sell_order_id: string;
                new_quantity: string;
                new_ask_price: {
                    denom: string;
                    amount: string;
                };
                disable_auto_retire: boolean;
                new_expiration: {
                    seconds: string;
                    nanos: number;
                };
            }[];
        }) => import("./ecocredit/marketplace/v1/tx").MsgUpdateSellOrders;
    };
    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
        aminoType: string;
        toAmino: ({ seller, sellOrderId }: import("./ecocredit/marketplace/v1/tx").MsgCancelSellOrder) => {
            seller: string;
            sell_order_id: string;
        };
        fromAmino: ({ seller, sell_order_id }: {
            seller: string;
            sell_order_id: string;
        }) => import("./ecocredit/marketplace/v1/tx").MsgCancelSellOrder;
    };
    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
        aminoType: string;
        toAmino: ({ buyer, orders }: import("./ecocredit/marketplace/v1/tx").MsgBuyDirect) => {
            buyer: string;
            orders: {
                batch_denom: string;
                quantity: string;
                ask_price: {
                    denom: string;
                    amount: string;
                };
                disable_auto_retire: boolean;
                expiration: {
                    seconds: string;
                    nanos: number;
                };
            }[];
        };
        fromAmino: ({ buyer, orders }: {
            buyer: string;
            orders: {
                batch_denom: string;
                quantity: string;
                ask_price: {
                    denom: string;
                    amount: string;
                };
                disable_auto_retire: boolean;
                expiration: {
                    seconds: string;
                    nanos: number;
                };
            }[];
        }) => import("./ecocredit/marketplace/v1/tx").MsgBuyDirect;
    };
    "/regen.ecocredit.marketplace.v1.MsgAddAllowedDenom": {
        aminoType: string;
        toAmino: ({ authority, bankDenom, displayDenom, exponent }: import("./ecocredit/marketplace/v1/tx").MsgAddAllowedDenom) => {
            authority: string;
            bank_denom: string;
            display_denom: string;
            exponent: number;
        };
        fromAmino: ({ authority, bank_denom, display_denom, exponent }: {
            authority: string;
            bank_denom: string;
            display_denom: string;
            exponent: number;
        }) => import("./ecocredit/marketplace/v1/tx").MsgAddAllowedDenom;
    };
    "/regen.ecocredit.marketplace.v1.MsgRemoveAllowedDenom": {
        aminoType: string;
        toAmino: ({ authority, denom }: import("./ecocredit/marketplace/v1/tx").MsgRemoveAllowedDenom) => {
            authority: string;
            denom: string;
        };
        fromAmino: ({ authority, denom }: {
            authority: string;
            denom: string;
        }) => import("./ecocredit/marketplace/v1/tx").MsgRemoveAllowedDenom;
    };
    "/regen.ecocredit.basket.v1.MsgCreate": {
        aminoType: string;
        toAmino: ({ curator, name, description, exponent, disableAutoRetire, creditTypeAbbrev, allowedClasses, dateCriteria, fee }: import("./ecocredit/basket/v1/tx").MsgCreate) => {
            curator: string;
            name: string;
            description: string;
            exponent: number;
            disable_auto_retire: boolean;
            credit_type_abbrev: string;
            allowed_classes: string[];
            date_criteria: {
                min_start_date: {
                    seconds: string;
                    nanos: number;
                };
                start_date_window: {
                    seconds: string;
                    nanos: number;
                };
                years_in_the_past: number;
            };
            fee: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ curator, name, description, exponent, disable_auto_retire, credit_type_abbrev, allowed_classes, date_criteria, fee }: {
            curator: string;
            name: string;
            description: string;
            exponent: number;
            disable_auto_retire: boolean;
            credit_type_abbrev: string;
            allowed_classes: string[];
            date_criteria: {
                min_start_date: {
                    seconds: string;
                    nanos: number;
                };
                start_date_window: {
                    seconds: string;
                    nanos: number;
                };
                years_in_the_past: number;
            };
            fee: {
                denom: string;
                amount: string;
            }[];
        }) => import("./ecocredit/basket/v1/tx").MsgCreate;
    };
    "/regen.ecocredit.basket.v1.MsgPut": {
        aminoType: string;
        toAmino: ({ owner, basketDenom, credits }: import("./ecocredit/basket/v1/tx").MsgPut) => {
            owner: string;
            basket_denom: string;
            credits: {
                batch_denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ owner, basket_denom, credits }: {
            owner: string;
            basket_denom: string;
            credits: {
                batch_denom: string;
                amount: string;
            }[];
        }) => import("./ecocredit/basket/v1/tx").MsgPut;
    };
    "/regen.ecocredit.basket.v1.MsgTake": {
        aminoType: string;
        toAmino: ({ owner, basketDenom, amount, retirementLocation, retireOnTake, retirementJurisdiction, retirementReason }: import("./ecocredit/basket/v1/tx").MsgTake) => {
            owner: string;
            basket_denom: string;
            amount: string;
            retirement_location: string;
            retire_on_take: boolean;
            retirement_jurisdiction: string;
            retirement_reason: string;
        };
        fromAmino: ({ owner, basket_denom, amount, retirement_location, retire_on_take, retirement_jurisdiction, retirement_reason }: {
            owner: string;
            basket_denom: string;
            amount: string;
            retirement_location: string;
            retire_on_take: boolean;
            retirement_jurisdiction: string;
            retirement_reason: string;
        }) => import("./ecocredit/basket/v1/tx").MsgTake;
    };
    "/regen.ecocredit.basket.v1.MsgUpdateBasketFee": {
        aminoType: string;
        toAmino: ({ authority, fee }: import("./ecocredit/basket/v1/tx").MsgUpdateBasketFee) => {
            authority: string;
            fee: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ authority, fee }: {
            authority: string;
            fee: {
                denom: string;
                amount: string;
            };
        }) => import("./ecocredit/basket/v1/tx").MsgUpdateBasketFee;
    };
    "/regen.ecocredit.basket.v1.MsgUpdateCurator": {
        aminoType: string;
        toAmino: ({ curator, denom, newCurator }: import("./ecocredit/basket/v1/tx").MsgUpdateCurator) => {
            curator: string;
            denom: string;
            new_curator: string;
        };
        fromAmino: ({ curator, denom, new_curator }: {
            curator: string;
            denom: string;
            new_curator: string;
        }) => import("./ecocredit/basket/v1/tx").MsgUpdateCurator;
    };
    "/regen.ecocredit.basket.v1.MsgUpdateDateCriteria": {
        aminoType: string;
        toAmino: ({ authority, denom, newDateCriteria }: import("./ecocredit/basket/v1/tx").MsgUpdateDateCriteria) => {
            authority: string;
            denom: string;
            new_date_criteria: {
                min_start_date: {
                    seconds: string;
                    nanos: number;
                };
                start_date_window: {
                    seconds: string;
                    nanos: number;
                };
                years_in_the_past: number;
            };
        };
        fromAmino: ({ authority, denom, new_date_criteria }: {
            authority: string;
            denom: string;
            new_date_criteria: {
                min_start_date: {
                    seconds: string;
                    nanos: number;
                };
                start_date_window: {
                    seconds: string;
                    nanos: number;
                };
                years_in_the_past: number;
            };
        }) => import("./ecocredit/basket/v1/tx").MsgUpdateDateCriteria;
    };
    "/regen.data.v1.MsgAnchor": {
        aminoType: string;
        toAmino: ({ sender, contentHash }: import("./data/v1/tx").MsgAnchor) => {
            sender: string;
            content_hash: {
                raw: {
                    hash: Uint8Array;
                    digest_algorithm: number;
                    media_type: number;
                };
                graph: {
                    hash: Uint8Array;
                    digest_algorithm: number;
                    canonicalization_algorithm: number;
                    merkle_tree: number;
                };
            };
        };
        fromAmino: ({ sender, content_hash }: {
            sender: string;
            content_hash: {
                raw: {
                    hash: Uint8Array;
                    digest_algorithm: number;
                    media_type: number;
                };
                graph: {
                    hash: Uint8Array;
                    digest_algorithm: number;
                    canonicalization_algorithm: number;
                    merkle_tree: number;
                };
            };
        }) => import("./data/v1/tx").MsgAnchor;
    };
    "/regen.data.v1.MsgAttest": {
        aminoType: string;
        toAmino: ({ attestor, contentHashes }: import("./data/v1/tx").MsgAttest) => {
            attestor: string;
            content_hashes: {
                hash: Uint8Array;
                digest_algorithm: number;
                canonicalization_algorithm: number;
                merkle_tree: number;
            }[];
        };
        fromAmino: ({ attestor, content_hashes }: {
            attestor: string;
            content_hashes: {
                hash: Uint8Array;
                digest_algorithm: number;
                canonicalization_algorithm: number;
                merkle_tree: number;
            }[];
        }) => import("./data/v1/tx").MsgAttest;
    };
    "/regen.data.v1.MsgDefineResolver": {
        aminoType: string;
        toAmino: ({ manager, resolverUrl }: import("./data/v1/tx").MsgDefineResolver) => {
            manager: string;
            resolver_url: string;
        };
        fromAmino: ({ manager, resolver_url }: {
            manager: string;
            resolver_url: string;
        }) => import("./data/v1/tx").MsgDefineResolver;
    };
    "/regen.data.v1.MsgRegisterResolver": {
        aminoType: string;
        toAmino: ({ manager, resolverId, contentHashes }: import("./data/v1/tx").MsgRegisterResolver) => {
            manager: string;
            resolver_id: string;
            content_hashes: {
                raw: {
                    hash: Uint8Array;
                    digest_algorithm: number;
                    media_type: number;
                };
                graph: {
                    hash: Uint8Array;
                    digest_algorithm: number;
                    canonicalization_algorithm: number;
                    merkle_tree: number;
                };
            }[];
        };
        fromAmino: ({ manager, resolver_id, content_hashes }: {
            manager: string;
            resolver_id: string;
            content_hashes: {
                raw: {
                    hash: Uint8Array;
                    digest_algorithm: number;
                    media_type: number;
                };
                graph: {
                    hash: Uint8Array;
                    digest_algorithm: number;
                    canonicalization_algorithm: number;
                    merkle_tree: number;
                };
            }[];
        }) => import("./data/v1/tx").MsgRegisterResolver;
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
