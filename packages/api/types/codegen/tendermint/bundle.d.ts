import * as _132 from "./abci/types";
import * as _133 from "./crypto/keys";
import * as _134 from "./crypto/proof";
import * as _135 from "./libs/bits/types";
import * as _136 from "./p2p/types";
import * as _137 from "./types/block";
import * as _138 from "./types/evidence";
import * as _139 from "./types/params";
import * as _140 from "./types/types";
import * as _141 from "./types/validator";
import * as _142 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _132.CheckTxType;
        checkTxTypeToJSON(object: _132.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _132.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _132.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _132.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _132.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _132.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _132.ResponseProcessProposal_ProposalStatus): string;
        misbehaviorTypeFromJSON(object: any): _132.MisbehaviorType;
        misbehaviorTypeToJSON(object: _132.MisbehaviorType): string;
        CheckTxType: typeof _132.CheckTxType;
        CheckTxTypeSDKType: typeof _132.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _132.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _132.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _132.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _132.ResponseApplySnapshotChunk_ResultSDKType;
        ResponseProcessProposal_ProposalStatus: typeof _132.ResponseProcessProposal_ProposalStatus;
        ResponseProcessProposal_ProposalStatusSDKType: typeof _132.ResponseProcessProposal_ProposalStatusSDKType;
        MisbehaviorType: typeof _132.MisbehaviorType;
        MisbehaviorTypeSDKType: typeof _132.MisbehaviorTypeSDKType;
        Request: {
            encode(message: _132.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.Request;
            fromJSON(object: any): _132.Request;
            toJSON(message: _132.Request): unknown;
            fromPartial(object: Partial<_132.Request>): _132.Request;
        };
        RequestEcho: {
            encode(message: _132.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.RequestEcho;
            fromJSON(object: any): _132.RequestEcho;
            toJSON(message: _132.RequestEcho): unknown;
            fromPartial(object: Partial<_132.RequestEcho>): _132.RequestEcho;
        };
        RequestFlush: {
            encode(_: _132.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.RequestFlush;
            fromJSON(_: any): _132.RequestFlush;
            toJSON(_: _132.RequestFlush): unknown;
            fromPartial(_: Partial<_132.RequestFlush>): _132.RequestFlush;
        };
        RequestInfo: {
            encode(message: _132.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.RequestInfo;
            fromJSON(object: any): _132.RequestInfo;
            toJSON(message: _132.RequestInfo): unknown;
            fromPartial(object: Partial<_132.RequestInfo>): _132.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _132.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.RequestInitChain;
            fromJSON(object: any): _132.RequestInitChain;
            toJSON(message: _132.RequestInitChain): unknown;
            fromPartial(object: Partial<_132.RequestInitChain>): _132.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _132.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.RequestQuery;
            fromJSON(object: any): _132.RequestQuery;
            toJSON(message: _132.RequestQuery): unknown;
            fromPartial(object: Partial<_132.RequestQuery>): _132.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _132.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.RequestBeginBlock;
            fromJSON(object: any): _132.RequestBeginBlock;
            toJSON(message: _132.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_132.RequestBeginBlock>): _132.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _132.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.RequestCheckTx;
            fromJSON(object: any): _132.RequestCheckTx;
            toJSON(message: _132.RequestCheckTx): unknown;
            fromPartial(object: Partial<_132.RequestCheckTx>): _132.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _132.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.RequestDeliverTx;
            fromJSON(object: any): _132.RequestDeliverTx;
            toJSON(message: _132.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_132.RequestDeliverTx>): _132.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _132.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.RequestEndBlock;
            fromJSON(object: any): _132.RequestEndBlock;
            toJSON(message: _132.RequestEndBlock): unknown;
            fromPartial(object: Partial<_132.RequestEndBlock>): _132.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _132.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.RequestCommit;
            fromJSON(_: any): _132.RequestCommit;
            toJSON(_: _132.RequestCommit): unknown;
            fromPartial(_: Partial<_132.RequestCommit>): _132.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _132.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.RequestListSnapshots;
            fromJSON(_: any): _132.RequestListSnapshots;
            toJSON(_: _132.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_132.RequestListSnapshots>): _132.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _132.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.RequestOfferSnapshot;
            fromJSON(object: any): _132.RequestOfferSnapshot;
            toJSON(message: _132.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_132.RequestOfferSnapshot>): _132.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _132.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.RequestLoadSnapshotChunk;
            fromJSON(object: any): _132.RequestLoadSnapshotChunk;
            toJSON(message: _132.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_132.RequestLoadSnapshotChunk>): _132.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _132.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.RequestApplySnapshotChunk;
            fromJSON(object: any): _132.RequestApplySnapshotChunk;
            toJSON(message: _132.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_132.RequestApplySnapshotChunk>): _132.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _132.RequestPrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.RequestPrepareProposal;
            fromJSON(object: any): _132.RequestPrepareProposal;
            toJSON(message: _132.RequestPrepareProposal): unknown;
            fromPartial(object: Partial<_132.RequestPrepareProposal>): _132.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _132.RequestProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.RequestProcessProposal;
            fromJSON(object: any): _132.RequestProcessProposal;
            toJSON(message: _132.RequestProcessProposal): unknown;
            fromPartial(object: Partial<_132.RequestProcessProposal>): _132.RequestProcessProposal;
        };
        Response: {
            encode(message: _132.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.Response;
            fromJSON(object: any): _132.Response;
            toJSON(message: _132.Response): unknown;
            fromPartial(object: Partial<_132.Response>): _132.Response;
        };
        ResponseException: {
            encode(message: _132.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ResponseException;
            fromJSON(object: any): _132.ResponseException;
            toJSON(message: _132.ResponseException): unknown;
            fromPartial(object: Partial<_132.ResponseException>): _132.ResponseException;
        };
        ResponseEcho: {
            encode(message: _132.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ResponseEcho;
            fromJSON(object: any): _132.ResponseEcho;
            toJSON(message: _132.ResponseEcho): unknown;
            fromPartial(object: Partial<_132.ResponseEcho>): _132.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _132.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ResponseFlush;
            fromJSON(_: any): _132.ResponseFlush;
            toJSON(_: _132.ResponseFlush): unknown;
            fromPartial(_: Partial<_132.ResponseFlush>): _132.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _132.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ResponseInfo;
            fromJSON(object: any): _132.ResponseInfo;
            toJSON(message: _132.ResponseInfo): unknown;
            fromPartial(object: Partial<_132.ResponseInfo>): _132.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _132.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ResponseInitChain;
            fromJSON(object: any): _132.ResponseInitChain;
            toJSON(message: _132.ResponseInitChain): unknown;
            fromPartial(object: Partial<_132.ResponseInitChain>): _132.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _132.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ResponseQuery;
            fromJSON(object: any): _132.ResponseQuery;
            toJSON(message: _132.ResponseQuery): unknown;
            fromPartial(object: Partial<_132.ResponseQuery>): _132.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _132.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ResponseBeginBlock;
            fromJSON(object: any): _132.ResponseBeginBlock;
            toJSON(message: _132.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_132.ResponseBeginBlock>): _132.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _132.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ResponseCheckTx;
            fromJSON(object: any): _132.ResponseCheckTx;
            toJSON(message: _132.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_132.ResponseCheckTx>): _132.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _132.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ResponseDeliverTx;
            fromJSON(object: any): _132.ResponseDeliverTx;
            toJSON(message: _132.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_132.ResponseDeliverTx>): _132.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _132.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ResponseEndBlock;
            fromJSON(object: any): _132.ResponseEndBlock;
            toJSON(message: _132.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_132.ResponseEndBlock>): _132.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _132.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ResponseCommit;
            fromJSON(object: any): _132.ResponseCommit;
            toJSON(message: _132.ResponseCommit): unknown;
            fromPartial(object: Partial<_132.ResponseCommit>): _132.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _132.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ResponseListSnapshots;
            fromJSON(object: any): _132.ResponseListSnapshots;
            toJSON(message: _132.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_132.ResponseListSnapshots>): _132.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _132.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ResponseOfferSnapshot;
            fromJSON(object: any): _132.ResponseOfferSnapshot;
            toJSON(message: _132.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_132.ResponseOfferSnapshot>): _132.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _132.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _132.ResponseLoadSnapshotChunk;
            toJSON(message: _132.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_132.ResponseLoadSnapshotChunk>): _132.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _132.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ResponseApplySnapshotChunk;
            fromJSON(object: any): _132.ResponseApplySnapshotChunk;
            toJSON(message: _132.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_132.ResponseApplySnapshotChunk>): _132.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _132.ResponsePrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ResponsePrepareProposal;
            fromJSON(object: any): _132.ResponsePrepareProposal;
            toJSON(message: _132.ResponsePrepareProposal): unknown;
            fromPartial(object: Partial<_132.ResponsePrepareProposal>): _132.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _132.ResponseProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ResponseProcessProposal;
            fromJSON(object: any): _132.ResponseProcessProposal;
            toJSON(message: _132.ResponseProcessProposal): unknown;
            fromPartial(object: Partial<_132.ResponseProcessProposal>): _132.ResponseProcessProposal;
        };
        CommitInfo: {
            encode(message: _132.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.CommitInfo;
            fromJSON(object: any): _132.CommitInfo;
            toJSON(message: _132.CommitInfo): unknown;
            fromPartial(object: Partial<_132.CommitInfo>): _132.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _132.ExtendedCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ExtendedCommitInfo;
            fromJSON(object: any): _132.ExtendedCommitInfo;
            toJSON(message: _132.ExtendedCommitInfo): unknown;
            fromPartial(object: Partial<_132.ExtendedCommitInfo>): _132.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _132.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.Event;
            fromJSON(object: any): _132.Event;
            toJSON(message: _132.Event): unknown;
            fromPartial(object: Partial<_132.Event>): _132.Event;
        };
        EventAttribute: {
            encode(message: _132.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.EventAttribute;
            fromJSON(object: any): _132.EventAttribute;
            toJSON(message: _132.EventAttribute): unknown;
            fromPartial(object: Partial<_132.EventAttribute>): _132.EventAttribute;
        };
        TxResult: {
            encode(message: _132.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.TxResult;
            fromJSON(object: any): _132.TxResult;
            toJSON(message: _132.TxResult): unknown;
            fromPartial(object: Partial<_132.TxResult>): _132.TxResult;
        };
        Validator: {
            encode(message: _132.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.Validator;
            fromJSON(object: any): _132.Validator;
            toJSON(message: _132.Validator): unknown;
            fromPartial(object: Partial<_132.Validator>): _132.Validator;
        };
        ValidatorUpdate: {
            encode(message: _132.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ValidatorUpdate;
            fromJSON(object: any): _132.ValidatorUpdate;
            toJSON(message: _132.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_132.ValidatorUpdate>): _132.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _132.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.VoteInfo;
            fromJSON(object: any): _132.VoteInfo;
            toJSON(message: _132.VoteInfo): unknown;
            fromPartial(object: Partial<_132.VoteInfo>): _132.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _132.ExtendedVoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.ExtendedVoteInfo;
            fromJSON(object: any): _132.ExtendedVoteInfo;
            toJSON(message: _132.ExtendedVoteInfo): unknown;
            fromPartial(object: Partial<_132.ExtendedVoteInfo>): _132.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _132.Misbehavior, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.Misbehavior;
            fromJSON(object: any): _132.Misbehavior;
            toJSON(message: _132.Misbehavior): unknown;
            fromPartial(object: Partial<_132.Misbehavior>): _132.Misbehavior;
        };
        Snapshot: {
            encode(message: _132.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _132.Snapshot;
            fromJSON(object: any): _132.Snapshot;
            toJSON(message: _132.Snapshot): unknown;
            fromPartial(object: Partial<_132.Snapshot>): _132.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _134.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _134.Proof;
            fromJSON(object: any): _134.Proof;
            toJSON(message: _134.Proof): unknown;
            fromPartial(object: Partial<_134.Proof>): _134.Proof;
        };
        ValueOp: {
            encode(message: _134.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _134.ValueOp;
            fromJSON(object: any): _134.ValueOp;
            toJSON(message: _134.ValueOp): unknown;
            fromPartial(object: Partial<_134.ValueOp>): _134.ValueOp;
        };
        DominoOp: {
            encode(message: _134.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _134.DominoOp;
            fromJSON(object: any): _134.DominoOp;
            toJSON(message: _134.DominoOp): unknown;
            fromPartial(object: Partial<_134.DominoOp>): _134.DominoOp;
        };
        ProofOp: {
            encode(message: _134.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _134.ProofOp;
            fromJSON(object: any): _134.ProofOp;
            toJSON(message: _134.ProofOp): unknown;
            fromPartial(object: Partial<_134.ProofOp>): _134.ProofOp;
        };
        ProofOps: {
            encode(message: _134.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _134.ProofOps;
            fromJSON(object: any): _134.ProofOps;
            toJSON(message: _134.ProofOps): unknown;
            fromPartial(object: Partial<_134.ProofOps>): _134.ProofOps;
        };
        PublicKey: {
            encode(message: _133.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.PublicKey;
            fromJSON(object: any): _133.PublicKey;
            toJSON(message: _133.PublicKey): unknown;
            fromPartial(object: Partial<_133.PublicKey>): _133.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _135.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.BitArray;
                fromJSON(object: any): _135.BitArray;
                toJSON(message: _135.BitArray): unknown;
                fromPartial(object: Partial<_135.BitArray>): _135.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _136.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.NetAddress;
            fromJSON(object: any): _136.NetAddress;
            toJSON(message: _136.NetAddress): unknown;
            fromPartial(object: Partial<_136.NetAddress>): _136.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _136.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.ProtocolVersion;
            fromJSON(object: any): _136.ProtocolVersion;
            toJSON(message: _136.ProtocolVersion): unknown;
            fromPartial(object: Partial<_136.ProtocolVersion>): _136.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _136.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.DefaultNodeInfo;
            fromJSON(object: any): _136.DefaultNodeInfo;
            toJSON(message: _136.DefaultNodeInfo): unknown;
            fromPartial(object: Partial<_136.DefaultNodeInfo>): _136.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _136.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.DefaultNodeInfoOther;
            fromJSON(object: any): _136.DefaultNodeInfoOther;
            toJSON(message: _136.DefaultNodeInfoOther): unknown;
            fromPartial(object: Partial<_136.DefaultNodeInfoOther>): _136.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _141.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.ValidatorSet;
            fromJSON(object: any): _141.ValidatorSet;
            toJSON(message: _141.ValidatorSet): unknown;
            fromPartial(object: Partial<_141.ValidatorSet>): _141.ValidatorSet;
        };
        Validator: {
            encode(message: _141.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.Validator;
            fromJSON(object: any): _141.Validator;
            toJSON(message: _141.Validator): unknown;
            fromPartial(object: Partial<_141.Validator>): _141.Validator;
        };
        SimpleValidator: {
            encode(message: _141.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.SimpleValidator;
            fromJSON(object: any): _141.SimpleValidator;
            toJSON(message: _141.SimpleValidator): unknown;
            fromPartial(object: Partial<_141.SimpleValidator>): _141.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _140.BlockIDFlag;
        blockIDFlagToJSON(object: _140.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _140.SignedMsgType;
        signedMsgTypeToJSON(object: _140.SignedMsgType): string;
        BlockIDFlag: typeof _140.BlockIDFlag;
        BlockIDFlagSDKType: typeof _140.BlockIDFlagSDKType;
        SignedMsgType: typeof _140.SignedMsgType;
        SignedMsgTypeSDKType: typeof _140.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _140.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.PartSetHeader;
            fromJSON(object: any): _140.PartSetHeader;
            toJSON(message: _140.PartSetHeader): unknown;
            fromPartial(object: Partial<_140.PartSetHeader>): _140.PartSetHeader;
        };
        Part: {
            encode(message: _140.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.Part;
            fromJSON(object: any): _140.Part;
            toJSON(message: _140.Part): unknown;
            fromPartial(object: Partial<_140.Part>): _140.Part;
        };
        BlockID: {
            encode(message: _140.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.BlockID;
            fromJSON(object: any): _140.BlockID;
            toJSON(message: _140.BlockID): unknown;
            fromPartial(object: Partial<_140.BlockID>): _140.BlockID;
        };
        Header: {
            encode(message: _140.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.Header;
            fromJSON(object: any): _140.Header;
            toJSON(message: _140.Header): unknown;
            fromPartial(object: Partial<_140.Header>): _140.Header;
        };
        Data: {
            encode(message: _140.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.Data;
            fromJSON(object: any): _140.Data;
            toJSON(message: _140.Data): unknown;
            fromPartial(object: Partial<_140.Data>): _140.Data;
        };
        Vote: {
            encode(message: _140.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.Vote;
            fromJSON(object: any): _140.Vote;
            toJSON(message: _140.Vote): unknown;
            fromPartial(object: Partial<_140.Vote>): _140.Vote;
        };
        Commit: {
            encode(message: _140.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.Commit;
            fromJSON(object: any): _140.Commit;
            toJSON(message: _140.Commit): unknown;
            fromPartial(object: Partial<_140.Commit>): _140.Commit;
        };
        CommitSig: {
            encode(message: _140.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.CommitSig;
            fromJSON(object: any): _140.CommitSig;
            toJSON(message: _140.CommitSig): unknown;
            fromPartial(object: Partial<_140.CommitSig>): _140.CommitSig;
        };
        Proposal: {
            encode(message: _140.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.Proposal;
            fromJSON(object: any): _140.Proposal;
            toJSON(message: _140.Proposal): unknown;
            fromPartial(object: Partial<_140.Proposal>): _140.Proposal;
        };
        SignedHeader: {
            encode(message: _140.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.SignedHeader;
            fromJSON(object: any): _140.SignedHeader;
            toJSON(message: _140.SignedHeader): unknown;
            fromPartial(object: Partial<_140.SignedHeader>): _140.SignedHeader;
        };
        LightBlock: {
            encode(message: _140.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.LightBlock;
            fromJSON(object: any): _140.LightBlock;
            toJSON(message: _140.LightBlock): unknown;
            fromPartial(object: Partial<_140.LightBlock>): _140.LightBlock;
        };
        BlockMeta: {
            encode(message: _140.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.BlockMeta;
            fromJSON(object: any): _140.BlockMeta;
            toJSON(message: _140.BlockMeta): unknown;
            fromPartial(object: Partial<_140.BlockMeta>): _140.BlockMeta;
        };
        TxProof: {
            encode(message: _140.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.TxProof;
            fromJSON(object: any): _140.TxProof;
            toJSON(message: _140.TxProof): unknown;
            fromPartial(object: Partial<_140.TxProof>): _140.TxProof;
        };
        ConsensusParams: {
            encode(message: _139.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.ConsensusParams;
            fromJSON(object: any): _139.ConsensusParams;
            toJSON(message: _139.ConsensusParams): unknown;
            fromPartial(object: Partial<_139.ConsensusParams>): _139.ConsensusParams;
        };
        BlockParams: {
            encode(message: _139.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.BlockParams;
            fromJSON(object: any): _139.BlockParams;
            toJSON(message: _139.BlockParams): unknown;
            fromPartial(object: Partial<_139.BlockParams>): _139.BlockParams;
        };
        EvidenceParams: {
            encode(message: _139.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.EvidenceParams;
            fromJSON(object: any): _139.EvidenceParams;
            toJSON(message: _139.EvidenceParams): unknown;
            fromPartial(object: Partial<_139.EvidenceParams>): _139.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _139.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.ValidatorParams;
            fromJSON(object: any): _139.ValidatorParams;
            toJSON(message: _139.ValidatorParams): unknown;
            fromPartial(object: Partial<_139.ValidatorParams>): _139.ValidatorParams;
        };
        VersionParams: {
            encode(message: _139.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.VersionParams;
            fromJSON(object: any): _139.VersionParams;
            toJSON(message: _139.VersionParams): unknown;
            fromPartial(object: Partial<_139.VersionParams>): _139.VersionParams;
        };
        HashedParams: {
            encode(message: _139.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.HashedParams;
            fromJSON(object: any): _139.HashedParams;
            toJSON(message: _139.HashedParams): unknown;
            fromPartial(object: Partial<_139.HashedParams>): _139.HashedParams;
        };
        Evidence: {
            encode(message: _138.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.Evidence;
            fromJSON(object: any): _138.Evidence;
            toJSON(message: _138.Evidence): unknown;
            fromPartial(object: Partial<_138.Evidence>): _138.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _138.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.DuplicateVoteEvidence;
            fromJSON(object: any): _138.DuplicateVoteEvidence;
            toJSON(message: _138.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_138.DuplicateVoteEvidence>): _138.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _138.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.LightClientAttackEvidence;
            fromJSON(object: any): _138.LightClientAttackEvidence;
            toJSON(message: _138.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_138.LightClientAttackEvidence>): _138.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _138.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.EvidenceList;
            fromJSON(object: any): _138.EvidenceList;
            toJSON(message: _138.EvidenceList): unknown;
            fromPartial(object: Partial<_138.EvidenceList>): _138.EvidenceList;
        };
        Block: {
            encode(message: _137.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.Block;
            fromJSON(object: any): _137.Block;
            toJSON(message: _137.Block): unknown;
            fromPartial(object: Partial<_137.Block>): _137.Block;
        };
    };
    const version: {
        App: {
            encode(message: _142.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _142.App;
            fromJSON(object: any): _142.App;
            toJSON(message: _142.App): unknown;
            fromPartial(object: Partial<_142.App>): _142.App;
        };
        Consensus: {
            encode(message: _142.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _142.Consensus;
            fromJSON(object: any): _142.Consensus;
            toJSON(message: _142.Consensus): unknown;
            fromPartial(object: Partial<_142.Consensus>): _142.Consensus;
        };
    };
}
