import * as _133 from "./abci/types";
import * as _134 from "./crypto/keys";
import * as _135 from "./crypto/proof";
import * as _136 from "./libs/bits/types";
import * as _137 from "./p2p/types";
import * as _138 from "./types/block";
import * as _139 from "./types/evidence";
import * as _140 from "./types/params";
import * as _141 from "./types/types";
import * as _142 from "./types/validator";
import * as _143 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _133.CheckTxType;
        checkTxTypeToJSON(object: _133.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _133.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _133.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _133.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _133.ResponseApplySnapshotChunk_Result): string;
        responseProcessProposal_ProposalStatusFromJSON(object: any): _133.ResponseProcessProposal_ProposalStatus;
        responseProcessProposal_ProposalStatusToJSON(object: _133.ResponseProcessProposal_ProposalStatus): string;
        misbehaviorTypeFromJSON(object: any): _133.MisbehaviorType;
        misbehaviorTypeToJSON(object: _133.MisbehaviorType): string;
        CheckTxType: typeof _133.CheckTxType;
        CheckTxTypeSDKType: typeof _133.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _133.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _133.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _133.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _133.ResponseApplySnapshotChunk_ResultSDKType;
        ResponseProcessProposal_ProposalStatus: typeof _133.ResponseProcessProposal_ProposalStatus;
        ResponseProcessProposal_ProposalStatusSDKType: typeof _133.ResponseProcessProposal_ProposalStatusSDKType;
        MisbehaviorType: typeof _133.MisbehaviorType;
        MisbehaviorTypeSDKType: typeof _133.MisbehaviorTypeSDKType;
        Request: {
            encode(message: _133.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.Request;
            fromJSON(object: any): _133.Request;
            toJSON(message: _133.Request): unknown;
            fromPartial(object: Partial<_133.Request>): _133.Request;
        };
        RequestEcho: {
            encode(message: _133.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.RequestEcho;
            fromJSON(object: any): _133.RequestEcho;
            toJSON(message: _133.RequestEcho): unknown;
            fromPartial(object: Partial<_133.RequestEcho>): _133.RequestEcho;
        };
        RequestFlush: {
            encode(_: _133.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.RequestFlush;
            fromJSON(_: any): _133.RequestFlush;
            toJSON(_: _133.RequestFlush): unknown;
            fromPartial(_: Partial<_133.RequestFlush>): _133.RequestFlush;
        };
        RequestInfo: {
            encode(message: _133.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.RequestInfo;
            fromJSON(object: any): _133.RequestInfo;
            toJSON(message: _133.RequestInfo): unknown;
            fromPartial(object: Partial<_133.RequestInfo>): _133.RequestInfo;
        };
        RequestInitChain: {
            encode(message: _133.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.RequestInitChain;
            fromJSON(object: any): _133.RequestInitChain;
            toJSON(message: _133.RequestInitChain): unknown;
            fromPartial(object: Partial<_133.RequestInitChain>): _133.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _133.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.RequestQuery;
            fromJSON(object: any): _133.RequestQuery;
            toJSON(message: _133.RequestQuery): unknown;
            fromPartial(object: Partial<_133.RequestQuery>): _133.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _133.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.RequestBeginBlock;
            fromJSON(object: any): _133.RequestBeginBlock;
            toJSON(message: _133.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_133.RequestBeginBlock>): _133.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _133.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.RequestCheckTx;
            fromJSON(object: any): _133.RequestCheckTx;
            toJSON(message: _133.RequestCheckTx): unknown;
            fromPartial(object: Partial<_133.RequestCheckTx>): _133.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _133.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.RequestDeliverTx;
            fromJSON(object: any): _133.RequestDeliverTx;
            toJSON(message: _133.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_133.RequestDeliverTx>): _133.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _133.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.RequestEndBlock;
            fromJSON(object: any): _133.RequestEndBlock;
            toJSON(message: _133.RequestEndBlock): unknown;
            fromPartial(object: Partial<_133.RequestEndBlock>): _133.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _133.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.RequestCommit;
            fromJSON(_: any): _133.RequestCommit;
            toJSON(_: _133.RequestCommit): unknown;
            fromPartial(_: Partial<_133.RequestCommit>): _133.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _133.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.RequestListSnapshots;
            fromJSON(_: any): _133.RequestListSnapshots;
            toJSON(_: _133.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_133.RequestListSnapshots>): _133.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _133.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.RequestOfferSnapshot;
            fromJSON(object: any): _133.RequestOfferSnapshot;
            toJSON(message: _133.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_133.RequestOfferSnapshot>): _133.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _133.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.RequestLoadSnapshotChunk;
            fromJSON(object: any): _133.RequestLoadSnapshotChunk;
            toJSON(message: _133.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_133.RequestLoadSnapshotChunk>): _133.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _133.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.RequestApplySnapshotChunk;
            fromJSON(object: any): _133.RequestApplySnapshotChunk;
            toJSON(message: _133.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_133.RequestApplySnapshotChunk>): _133.RequestApplySnapshotChunk;
        };
        RequestPrepareProposal: {
            encode(message: _133.RequestPrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.RequestPrepareProposal;
            fromJSON(object: any): _133.RequestPrepareProposal;
            toJSON(message: _133.RequestPrepareProposal): unknown;
            fromPartial(object: Partial<_133.RequestPrepareProposal>): _133.RequestPrepareProposal;
        };
        RequestProcessProposal: {
            encode(message: _133.RequestProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.RequestProcessProposal;
            fromJSON(object: any): _133.RequestProcessProposal;
            toJSON(message: _133.RequestProcessProposal): unknown;
            fromPartial(object: Partial<_133.RequestProcessProposal>): _133.RequestProcessProposal;
        };
        Response: {
            encode(message: _133.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.Response;
            fromJSON(object: any): _133.Response;
            toJSON(message: _133.Response): unknown;
            fromPartial(object: Partial<_133.Response>): _133.Response;
        };
        ResponseException: {
            encode(message: _133.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ResponseException;
            fromJSON(object: any): _133.ResponseException;
            toJSON(message: _133.ResponseException): unknown;
            fromPartial(object: Partial<_133.ResponseException>): _133.ResponseException;
        };
        ResponseEcho: {
            encode(message: _133.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ResponseEcho;
            fromJSON(object: any): _133.ResponseEcho;
            toJSON(message: _133.ResponseEcho): unknown;
            fromPartial(object: Partial<_133.ResponseEcho>): _133.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _133.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ResponseFlush;
            fromJSON(_: any): _133.ResponseFlush;
            toJSON(_: _133.ResponseFlush): unknown;
            fromPartial(_: Partial<_133.ResponseFlush>): _133.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _133.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ResponseInfo;
            fromJSON(object: any): _133.ResponseInfo;
            toJSON(message: _133.ResponseInfo): unknown;
            fromPartial(object: Partial<_133.ResponseInfo>): _133.ResponseInfo;
        };
        ResponseInitChain: {
            encode(message: _133.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ResponseInitChain;
            fromJSON(object: any): _133.ResponseInitChain;
            toJSON(message: _133.ResponseInitChain): unknown;
            fromPartial(object: Partial<_133.ResponseInitChain>): _133.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _133.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ResponseQuery;
            fromJSON(object: any): _133.ResponseQuery;
            toJSON(message: _133.ResponseQuery): unknown;
            fromPartial(object: Partial<_133.ResponseQuery>): _133.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _133.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ResponseBeginBlock;
            fromJSON(object: any): _133.ResponseBeginBlock;
            toJSON(message: _133.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_133.ResponseBeginBlock>): _133.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _133.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ResponseCheckTx;
            fromJSON(object: any): _133.ResponseCheckTx;
            toJSON(message: _133.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_133.ResponseCheckTx>): _133.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _133.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ResponseDeliverTx;
            fromJSON(object: any): _133.ResponseDeliverTx;
            toJSON(message: _133.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_133.ResponseDeliverTx>): _133.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _133.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ResponseEndBlock;
            fromJSON(object: any): _133.ResponseEndBlock;
            toJSON(message: _133.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_133.ResponseEndBlock>): _133.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _133.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ResponseCommit;
            fromJSON(object: any): _133.ResponseCommit;
            toJSON(message: _133.ResponseCommit): unknown;
            fromPartial(object: Partial<_133.ResponseCommit>): _133.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _133.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ResponseListSnapshots;
            fromJSON(object: any): _133.ResponseListSnapshots;
            toJSON(message: _133.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_133.ResponseListSnapshots>): _133.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _133.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ResponseOfferSnapshot;
            fromJSON(object: any): _133.ResponseOfferSnapshot;
            toJSON(message: _133.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_133.ResponseOfferSnapshot>): _133.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _133.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _133.ResponseLoadSnapshotChunk;
            toJSON(message: _133.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_133.ResponseLoadSnapshotChunk>): _133.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _133.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ResponseApplySnapshotChunk;
            fromJSON(object: any): _133.ResponseApplySnapshotChunk;
            toJSON(message: _133.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_133.ResponseApplySnapshotChunk>): _133.ResponseApplySnapshotChunk;
        };
        ResponsePrepareProposal: {
            encode(message: _133.ResponsePrepareProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ResponsePrepareProposal;
            fromJSON(object: any): _133.ResponsePrepareProposal;
            toJSON(message: _133.ResponsePrepareProposal): unknown;
            fromPartial(object: Partial<_133.ResponsePrepareProposal>): _133.ResponsePrepareProposal;
        };
        ResponseProcessProposal: {
            encode(message: _133.ResponseProcessProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ResponseProcessProposal;
            fromJSON(object: any): _133.ResponseProcessProposal;
            toJSON(message: _133.ResponseProcessProposal): unknown;
            fromPartial(object: Partial<_133.ResponseProcessProposal>): _133.ResponseProcessProposal;
        };
        CommitInfo: {
            encode(message: _133.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.CommitInfo;
            fromJSON(object: any): _133.CommitInfo;
            toJSON(message: _133.CommitInfo): unknown;
            fromPartial(object: Partial<_133.CommitInfo>): _133.CommitInfo;
        };
        ExtendedCommitInfo: {
            encode(message: _133.ExtendedCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ExtendedCommitInfo;
            fromJSON(object: any): _133.ExtendedCommitInfo;
            toJSON(message: _133.ExtendedCommitInfo): unknown;
            fromPartial(object: Partial<_133.ExtendedCommitInfo>): _133.ExtendedCommitInfo;
        };
        Event: {
            encode(message: _133.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.Event;
            fromJSON(object: any): _133.Event;
            toJSON(message: _133.Event): unknown;
            fromPartial(object: Partial<_133.Event>): _133.Event;
        };
        EventAttribute: {
            encode(message: _133.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.EventAttribute;
            fromJSON(object: any): _133.EventAttribute;
            toJSON(message: _133.EventAttribute): unknown;
            fromPartial(object: Partial<_133.EventAttribute>): _133.EventAttribute;
        };
        TxResult: {
            encode(message: _133.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.TxResult;
            fromJSON(object: any): _133.TxResult;
            toJSON(message: _133.TxResult): unknown;
            fromPartial(object: Partial<_133.TxResult>): _133.TxResult;
        };
        Validator: {
            encode(message: _133.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.Validator;
            fromJSON(object: any): _133.Validator;
            toJSON(message: _133.Validator): unknown;
            fromPartial(object: Partial<_133.Validator>): _133.Validator;
        };
        ValidatorUpdate: {
            encode(message: _133.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ValidatorUpdate;
            fromJSON(object: any): _133.ValidatorUpdate;
            toJSON(message: _133.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_133.ValidatorUpdate>): _133.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _133.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.VoteInfo;
            fromJSON(object: any): _133.VoteInfo;
            toJSON(message: _133.VoteInfo): unknown;
            fromPartial(object: Partial<_133.VoteInfo>): _133.VoteInfo;
        };
        ExtendedVoteInfo: {
            encode(message: _133.ExtendedVoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.ExtendedVoteInfo;
            fromJSON(object: any): _133.ExtendedVoteInfo;
            toJSON(message: _133.ExtendedVoteInfo): unknown;
            fromPartial(object: Partial<_133.ExtendedVoteInfo>): _133.ExtendedVoteInfo;
        };
        Misbehavior: {
            encode(message: _133.Misbehavior, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.Misbehavior;
            fromJSON(object: any): _133.Misbehavior;
            toJSON(message: _133.Misbehavior): unknown;
            fromPartial(object: Partial<_133.Misbehavior>): _133.Misbehavior;
        };
        Snapshot: {
            encode(message: _133.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _133.Snapshot;
            fromJSON(object: any): _133.Snapshot;
            toJSON(message: _133.Snapshot): unknown;
            fromPartial(object: Partial<_133.Snapshot>): _133.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _135.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.Proof;
            fromJSON(object: any): _135.Proof;
            toJSON(message: _135.Proof): unknown;
            fromPartial(object: Partial<_135.Proof>): _135.Proof;
        };
        ValueOp: {
            encode(message: _135.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.ValueOp;
            fromJSON(object: any): _135.ValueOp;
            toJSON(message: _135.ValueOp): unknown;
            fromPartial(object: Partial<_135.ValueOp>): _135.ValueOp;
        };
        DominoOp: {
            encode(message: _135.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.DominoOp;
            fromJSON(object: any): _135.DominoOp;
            toJSON(message: _135.DominoOp): unknown;
            fromPartial(object: Partial<_135.DominoOp>): _135.DominoOp;
        };
        ProofOp: {
            encode(message: _135.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.ProofOp;
            fromJSON(object: any): _135.ProofOp;
            toJSON(message: _135.ProofOp): unknown;
            fromPartial(object: Partial<_135.ProofOp>): _135.ProofOp;
        };
        ProofOps: {
            encode(message: _135.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _135.ProofOps;
            fromJSON(object: any): _135.ProofOps;
            toJSON(message: _135.ProofOps): unknown;
            fromPartial(object: Partial<_135.ProofOps>): _135.ProofOps;
        };
        PublicKey: {
            encode(message: _134.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _134.PublicKey;
            fromJSON(object: any): _134.PublicKey;
            toJSON(message: _134.PublicKey): unknown;
            fromPartial(object: Partial<_134.PublicKey>): _134.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _136.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _136.BitArray;
                fromJSON(object: any): _136.BitArray;
                toJSON(message: _136.BitArray): unknown;
                fromPartial(object: Partial<_136.BitArray>): _136.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _137.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.NetAddress;
            fromJSON(object: any): _137.NetAddress;
            toJSON(message: _137.NetAddress): unknown;
            fromPartial(object: Partial<_137.NetAddress>): _137.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _137.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.ProtocolVersion;
            fromJSON(object: any): _137.ProtocolVersion;
            toJSON(message: _137.ProtocolVersion): unknown;
            fromPartial(object: Partial<_137.ProtocolVersion>): _137.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _137.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.DefaultNodeInfo;
            fromJSON(object: any): _137.DefaultNodeInfo;
            toJSON(message: _137.DefaultNodeInfo): unknown;
            fromPartial(object: Partial<_137.DefaultNodeInfo>): _137.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _137.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _137.DefaultNodeInfoOther;
            fromJSON(object: any): _137.DefaultNodeInfoOther;
            toJSON(message: _137.DefaultNodeInfoOther): unknown;
            fromPartial(object: Partial<_137.DefaultNodeInfoOther>): _137.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _142.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _142.ValidatorSet;
            fromJSON(object: any): _142.ValidatorSet;
            toJSON(message: _142.ValidatorSet): unknown;
            fromPartial(object: Partial<_142.ValidatorSet>): _142.ValidatorSet;
        };
        Validator: {
            encode(message: _142.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _142.Validator;
            fromJSON(object: any): _142.Validator;
            toJSON(message: _142.Validator): unknown;
            fromPartial(object: Partial<_142.Validator>): _142.Validator;
        };
        SimpleValidator: {
            encode(message: _142.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _142.SimpleValidator;
            fromJSON(object: any): _142.SimpleValidator;
            toJSON(message: _142.SimpleValidator): unknown;
            fromPartial(object: Partial<_142.SimpleValidator>): _142.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _141.BlockIDFlag;
        blockIDFlagToJSON(object: _141.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _141.SignedMsgType;
        signedMsgTypeToJSON(object: _141.SignedMsgType): string;
        BlockIDFlag: typeof _141.BlockIDFlag;
        BlockIDFlagSDKType: typeof _141.BlockIDFlagSDKType;
        SignedMsgType: typeof _141.SignedMsgType;
        SignedMsgTypeSDKType: typeof _141.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _141.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.PartSetHeader;
            fromJSON(object: any): _141.PartSetHeader;
            toJSON(message: _141.PartSetHeader): unknown;
            fromPartial(object: Partial<_141.PartSetHeader>): _141.PartSetHeader;
        };
        Part: {
            encode(message: _141.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.Part;
            fromJSON(object: any): _141.Part;
            toJSON(message: _141.Part): unknown;
            fromPartial(object: Partial<_141.Part>): _141.Part;
        };
        BlockID: {
            encode(message: _141.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.BlockID;
            fromJSON(object: any): _141.BlockID;
            toJSON(message: _141.BlockID): unknown;
            fromPartial(object: Partial<_141.BlockID>): _141.BlockID;
        };
        Header: {
            encode(message: _141.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.Header;
            fromJSON(object: any): _141.Header;
            toJSON(message: _141.Header): unknown;
            fromPartial(object: Partial<_141.Header>): _141.Header;
        };
        Data: {
            encode(message: _141.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.Data;
            fromJSON(object: any): _141.Data;
            toJSON(message: _141.Data): unknown;
            fromPartial(object: Partial<_141.Data>): _141.Data;
        };
        Vote: {
            encode(message: _141.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.Vote;
            fromJSON(object: any): _141.Vote;
            toJSON(message: _141.Vote): unknown;
            fromPartial(object: Partial<_141.Vote>): _141.Vote;
        };
        Commit: {
            encode(message: _141.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.Commit;
            fromJSON(object: any): _141.Commit;
            toJSON(message: _141.Commit): unknown;
            fromPartial(object: Partial<_141.Commit>): _141.Commit;
        };
        CommitSig: {
            encode(message: _141.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.CommitSig;
            fromJSON(object: any): _141.CommitSig;
            toJSON(message: _141.CommitSig): unknown;
            fromPartial(object: Partial<_141.CommitSig>): _141.CommitSig;
        };
        Proposal: {
            encode(message: _141.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.Proposal;
            fromJSON(object: any): _141.Proposal;
            toJSON(message: _141.Proposal): unknown;
            fromPartial(object: Partial<_141.Proposal>): _141.Proposal;
        };
        SignedHeader: {
            encode(message: _141.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.SignedHeader;
            fromJSON(object: any): _141.SignedHeader;
            toJSON(message: _141.SignedHeader): unknown;
            fromPartial(object: Partial<_141.SignedHeader>): _141.SignedHeader;
        };
        LightBlock: {
            encode(message: _141.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.LightBlock;
            fromJSON(object: any): _141.LightBlock;
            toJSON(message: _141.LightBlock): unknown;
            fromPartial(object: Partial<_141.LightBlock>): _141.LightBlock;
        };
        BlockMeta: {
            encode(message: _141.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.BlockMeta;
            fromJSON(object: any): _141.BlockMeta;
            toJSON(message: _141.BlockMeta): unknown;
            fromPartial(object: Partial<_141.BlockMeta>): _141.BlockMeta;
        };
        TxProof: {
            encode(message: _141.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _141.TxProof;
            fromJSON(object: any): _141.TxProof;
            toJSON(message: _141.TxProof): unknown;
            fromPartial(object: Partial<_141.TxProof>): _141.TxProof;
        };
        ConsensusParams: {
            encode(message: _140.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.ConsensusParams;
            fromJSON(object: any): _140.ConsensusParams;
            toJSON(message: _140.ConsensusParams): unknown;
            fromPartial(object: Partial<_140.ConsensusParams>): _140.ConsensusParams;
        };
        BlockParams: {
            encode(message: _140.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.BlockParams;
            fromJSON(object: any): _140.BlockParams;
            toJSON(message: _140.BlockParams): unknown;
            fromPartial(object: Partial<_140.BlockParams>): _140.BlockParams;
        };
        EvidenceParams: {
            encode(message: _140.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.EvidenceParams;
            fromJSON(object: any): _140.EvidenceParams;
            toJSON(message: _140.EvidenceParams): unknown;
            fromPartial(object: Partial<_140.EvidenceParams>): _140.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _140.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.ValidatorParams;
            fromJSON(object: any): _140.ValidatorParams;
            toJSON(message: _140.ValidatorParams): unknown;
            fromPartial(object: Partial<_140.ValidatorParams>): _140.ValidatorParams;
        };
        VersionParams: {
            encode(message: _140.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.VersionParams;
            fromJSON(object: any): _140.VersionParams;
            toJSON(message: _140.VersionParams): unknown;
            fromPartial(object: Partial<_140.VersionParams>): _140.VersionParams;
        };
        HashedParams: {
            encode(message: _140.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _140.HashedParams;
            fromJSON(object: any): _140.HashedParams;
            toJSON(message: _140.HashedParams): unknown;
            fromPartial(object: Partial<_140.HashedParams>): _140.HashedParams;
        };
        Evidence: {
            encode(message: _139.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.Evidence;
            fromJSON(object: any): _139.Evidence;
            toJSON(message: _139.Evidence): unknown;
            fromPartial(object: Partial<_139.Evidence>): _139.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _139.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.DuplicateVoteEvidence;
            fromJSON(object: any): _139.DuplicateVoteEvidence;
            toJSON(message: _139.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_139.DuplicateVoteEvidence>): _139.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _139.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.LightClientAttackEvidence;
            fromJSON(object: any): _139.LightClientAttackEvidence;
            toJSON(message: _139.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_139.LightClientAttackEvidence>): _139.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _139.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _139.EvidenceList;
            fromJSON(object: any): _139.EvidenceList;
            toJSON(message: _139.EvidenceList): unknown;
            fromPartial(object: Partial<_139.EvidenceList>): _139.EvidenceList;
        };
        Block: {
            encode(message: _138.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _138.Block;
            fromJSON(object: any): _138.Block;
            toJSON(message: _138.Block): unknown;
            fromPartial(object: Partial<_138.Block>): _138.Block;
        };
    };
    const version: {
        App: {
            encode(message: _143.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _143.App;
            fromJSON(object: any): _143.App;
            toJSON(message: _143.App): unknown;
            fromPartial(object: Partial<_143.App>): _143.App;
        };
        Consensus: {
            encode(message: _143.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _143.Consensus;
            fromJSON(object: any): _143.Consensus;
            toJSON(message: _143.Consensus): unknown;
            fromPartial(object: Partial<_143.Consensus>): _143.Consensus;
        };
    };
}
