import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
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
    regen: {
        data: {
            v1: import("./data/v1/tx.rpc.msg").MsgClientImpl;
        };
        ecocredit: {
            basket: {
                v1: import("./ecocredit/basket/v1/tx.rpc.msg").MsgClientImpl;
            };
            marketplace: {
                v1: import("./ecocredit/marketplace/v1/tx.rpc.msg").MsgClientImpl;
            };
            v1: import("./ecocredit/v1/tx.rpc.msg").MsgClientImpl;
            v1alpha1: import("./ecocredit/v1alpha1/tx.rpc.msg").MsgClientImpl;
        };
        intertx: {
            v1: import("./intertx/v1/tx.rpc.msg").MsgClientImpl;
        };
    };
}>;
