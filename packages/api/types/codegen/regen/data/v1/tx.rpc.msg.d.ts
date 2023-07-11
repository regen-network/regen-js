import { Rpc } from "../../../helpers";
import { MsgAnchor, MsgAnchorResponse, MsgAttest, MsgAttestResponse, MsgDefineResolver, MsgDefineResolverResponse, MsgRegisterResolver, MsgRegisterResolverResponse } from "./tx";
/** Msg is the regen.data.v1 Msg service */
export interface Msg {
    /**
     * Anchor "anchors" a piece of data to the blockchain based on its secure
     * hash, effectively providing a tamper resistant timestamp.
     *
     * The sender in Anchor is not attesting to the veracity of the underlying
     * data. They can simply be an intermediary providing timestamp services.
     * Attest should be used to create a digital signature attesting to the
     * veracity of some piece of data.
     */
    anchor(request: MsgAnchor): Promise<MsgAnchorResponse>;
    /**
     * Attest allows for digital signing of an arbitrary piece of data on the
     * blockchain. By attesting to data, the attestor is making a statement about
     * the veracity of the data itself. It is like signing a legal document,
     * meaning that I agree to all conditions and to the best of my knowledge
     * everything is true. When anchoring data, the sender is not attesting to the
     * veracity of the data, they are simply communicating that it exists.
     *
     * On-chain signatures have the following benefits:
     * - on-chain identities can be managed using different cryptographic keys
     *   that change over time through key rotation practices
     * - an on-chain identity may represent an organization and through delegation
     *   individual members may sign on behalf of the group
     * - the blockchain transaction envelope provides built-in replay protection
     *   and timestamping
     *
     * Attest implicitly calls Anchor if the data was not already anchored.
     *
     * Attest can be called multiple times for the same content hash with
     * different attestors and those attestors will be appended to the list of
     * attestors. If the same attestor attempts to attest to the same piece of
     * data, the attestor will be ignored and a new attestation with a new
     * timestamp will not be added.
     */
    attest(request: MsgAttest): Promise<MsgAttestResponse>;
    /**
     * DefineResolver defines a resolver URL and assigns it a new integer ID
     * that can be used in calls to RegisterResolver.
     */
    defineResolver(request: MsgDefineResolver): Promise<MsgDefineResolverResponse>;
    /** RegisterResolver registers data content hashes */
    registerResolver(request: MsgRegisterResolver): Promise<MsgRegisterResolverResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    anchor(request: MsgAnchor): Promise<MsgAnchorResponse>;
    attest(request: MsgAttest): Promise<MsgAttestResponse>;
    defineResolver(request: MsgDefineResolver): Promise<MsgDefineResolverResponse>;
    registerResolver(request: MsgRegisterResolver): Promise<MsgRegisterResolverResponse>;
}
