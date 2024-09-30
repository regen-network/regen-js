import { MsgAnchor, MsgAttest, MsgDefineResolver, MsgRegisterResolver } from "./tx";
export declare const AminoConverter: {
    "/regen.data.v1.MsgAnchor": {
        aminoType: string;
        toAmino: (message: MsgAnchor) => import("./tx").MsgAnchorAmino;
        fromAmino: (object: import("./tx").MsgAnchorAmino) => MsgAnchor;
    };
    "/regen.data.v1.MsgAttest": {
        aminoType: string;
        toAmino: (message: MsgAttest) => import("./tx").MsgAttestAmino;
        fromAmino: (object: import("./tx").MsgAttestAmino) => MsgAttest;
    };
    "/regen.data.v1.MsgDefineResolver": {
        aminoType: string;
        toAmino: (message: MsgDefineResolver) => import("./tx").MsgDefineResolverAmino;
        fromAmino: (object: import("./tx").MsgDefineResolverAmino) => MsgDefineResolver;
    };
    "/regen.data.v1.MsgRegisterResolver": {
        aminoType: string;
        toAmino: (message: MsgRegisterResolver) => import("./tx").MsgRegisterResolverAmino;
        fromAmino: (object: import("./tx").MsgRegisterResolverAmino) => MsgRegisterResolver;
    };
};
