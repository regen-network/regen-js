"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseBeginBlock = exports.ResponseQuery = exports.ResponseInitChain = exports.ResponseInfo = exports.ResponseFlush = exports.ResponseEcho = exports.ResponseException = exports.Response = exports.RequestProcessProposal = exports.RequestPrepareProposal = exports.RequestApplySnapshotChunk = exports.RequestLoadSnapshotChunk = exports.RequestOfferSnapshot = exports.RequestListSnapshots = exports.RequestCommit = exports.RequestEndBlock = exports.RequestDeliverTx = exports.RequestCheckTx = exports.RequestBeginBlock = exports.RequestQuery = exports.RequestInitChain = exports.RequestInfo = exports.RequestFlush = exports.RequestEcho = exports.Request = exports.misbehaviorTypeToJSON = exports.misbehaviorTypeFromJSON = exports.MisbehaviorTypeAmino = exports.MisbehaviorTypeSDKType = exports.MisbehaviorType = exports.responseProcessProposal_ProposalStatusToJSON = exports.responseProcessProposal_ProposalStatusFromJSON = exports.ResponseProcessProposal_ProposalStatusAmino = exports.ResponseProcessProposal_ProposalStatusSDKType = exports.ResponseProcessProposal_ProposalStatus = exports.responseApplySnapshotChunk_ResultToJSON = exports.responseApplySnapshotChunk_ResultFromJSON = exports.ResponseApplySnapshotChunk_ResultAmino = exports.ResponseApplySnapshotChunk_ResultSDKType = exports.ResponseApplySnapshotChunk_Result = exports.responseOfferSnapshot_ResultToJSON = exports.responseOfferSnapshot_ResultFromJSON = exports.ResponseOfferSnapshot_ResultAmino = exports.ResponseOfferSnapshot_ResultSDKType = exports.ResponseOfferSnapshot_Result = exports.checkTxTypeToJSON = exports.checkTxTypeFromJSON = exports.CheckTxTypeAmino = exports.CheckTxTypeSDKType = exports.CheckTxType = void 0;
exports.Snapshot = exports.Misbehavior = exports.ExtendedVoteInfo = exports.VoteInfo = exports.ValidatorUpdate = exports.Validator = exports.TxResult = exports.EventAttribute = exports.Event = exports.ExtendedCommitInfo = exports.CommitInfo = exports.ResponseProcessProposal = exports.ResponsePrepareProposal = exports.ResponseApplySnapshotChunk = exports.ResponseLoadSnapshotChunk = exports.ResponseOfferSnapshot = exports.ResponseListSnapshots = exports.ResponseCommit = exports.ResponseEndBlock = exports.ResponseDeliverTx = exports.ResponseCheckTx = void 0;
//@ts-nocheck
const timestamp_1 = require("../../google/protobuf/timestamp");
const params_1 = require("../types/params");
const types_1 = require("../types/types");
const proof_1 = require("../crypto/proof");
const keys_1 = require("../crypto/keys");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
var CheckTxType;
(function (CheckTxType) {
    CheckTxType[CheckTxType["NEW"] = 0] = "NEW";
    CheckTxType[CheckTxType["RECHECK"] = 1] = "RECHECK";
    CheckTxType[CheckTxType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CheckTxType || (exports.CheckTxType = CheckTxType = {}));
exports.CheckTxTypeSDKType = CheckTxType;
exports.CheckTxTypeAmino = CheckTxType;
function checkTxTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "NEW":
            return CheckTxType.NEW;
        case 1:
        case "RECHECK":
            return CheckTxType.RECHECK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CheckTxType.UNRECOGNIZED;
    }
}
exports.checkTxTypeFromJSON = checkTxTypeFromJSON;
function checkTxTypeToJSON(object) {
    switch (object) {
        case CheckTxType.NEW:
            return "NEW";
        case CheckTxType.RECHECK:
            return "RECHECK";
        case CheckTxType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.checkTxTypeToJSON = checkTxTypeToJSON;
var ResponseOfferSnapshot_Result;
(function (ResponseOfferSnapshot_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Snapshot accepted, apply chunks */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ABORT"] = 2] = "ABORT";
    /** REJECT - Reject this specific snapshot, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT"] = 3] = "REJECT";
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_FORMAT"] = 4] = "REJECT_FORMAT";
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_SENDER"] = 5] = "REJECT_SENDER";
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseOfferSnapshot_Result || (exports.ResponseOfferSnapshot_Result = ResponseOfferSnapshot_Result = {}));
exports.ResponseOfferSnapshot_ResultSDKType = ResponseOfferSnapshot_Result;
exports.ResponseOfferSnapshot_ResultAmino = ResponseOfferSnapshot_Result;
function responseOfferSnapshot_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseOfferSnapshot_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseOfferSnapshot_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseOfferSnapshot_Result.ABORT;
        case 3:
        case "REJECT":
            return ResponseOfferSnapshot_Result.REJECT;
        case 4:
        case "REJECT_FORMAT":
            return ResponseOfferSnapshot_Result.REJECT_FORMAT;
        case 5:
        case "REJECT_SENDER":
            return ResponseOfferSnapshot_Result.REJECT_SENDER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseOfferSnapshot_Result.UNRECOGNIZED;
    }
}
exports.responseOfferSnapshot_ResultFromJSON = responseOfferSnapshot_ResultFromJSON;
function responseOfferSnapshot_ResultToJSON(object) {
    switch (object) {
        case ResponseOfferSnapshot_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseOfferSnapshot_Result.ACCEPT:
            return "ACCEPT";
        case ResponseOfferSnapshot_Result.ABORT:
            return "ABORT";
        case ResponseOfferSnapshot_Result.REJECT:
            return "REJECT";
        case ResponseOfferSnapshot_Result.REJECT_FORMAT:
            return "REJECT_FORMAT";
        case ResponseOfferSnapshot_Result.REJECT_SENDER:
            return "REJECT_SENDER";
        case ResponseOfferSnapshot_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.responseOfferSnapshot_ResultToJSON = responseOfferSnapshot_ResultToJSON;
var ResponseApplySnapshotChunk_Result;
(function (ResponseApplySnapshotChunk_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Chunk successfully accepted */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ABORT"] = 2] = "ABORT";
    /** RETRY - Retry chunk (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY"] = 3] = "RETRY";
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY_SNAPSHOT"] = 4] = "RETRY_SNAPSHOT";
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["REJECT_SNAPSHOT"] = 5] = "REJECT_SNAPSHOT";
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseApplySnapshotChunk_Result || (exports.ResponseApplySnapshotChunk_Result = ResponseApplySnapshotChunk_Result = {}));
exports.ResponseApplySnapshotChunk_ResultSDKType = ResponseApplySnapshotChunk_Result;
exports.ResponseApplySnapshotChunk_ResultAmino = ResponseApplySnapshotChunk_Result;
function responseApplySnapshotChunk_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseApplySnapshotChunk_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseApplySnapshotChunk_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseApplySnapshotChunk_Result.ABORT;
        case 3:
        case "RETRY":
            return ResponseApplySnapshotChunk_Result.RETRY;
        case 4:
        case "RETRY_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
        case 5:
        case "REJECT_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
    }
}
exports.responseApplySnapshotChunk_ResultFromJSON = responseApplySnapshotChunk_ResultFromJSON;
function responseApplySnapshotChunk_ResultToJSON(object) {
    switch (object) {
        case ResponseApplySnapshotChunk_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseApplySnapshotChunk_Result.ACCEPT:
            return "ACCEPT";
        case ResponseApplySnapshotChunk_Result.ABORT:
            return "ABORT";
        case ResponseApplySnapshotChunk_Result.RETRY:
            return "RETRY";
        case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
            return "RETRY_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
            return "REJECT_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.responseApplySnapshotChunk_ResultToJSON = responseApplySnapshotChunk_ResultToJSON;
var ResponseProcessProposal_ProposalStatus;
(function (ResponseProcessProposal_ProposalStatus) {
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["UNKNOWN"] = 0] = "UNKNOWN";
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["ACCEPT"] = 1] = "ACCEPT";
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["REJECT"] = 2] = "REJECT";
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseProcessProposal_ProposalStatus || (exports.ResponseProcessProposal_ProposalStatus = ResponseProcessProposal_ProposalStatus = {}));
exports.ResponseProcessProposal_ProposalStatusSDKType = ResponseProcessProposal_ProposalStatus;
exports.ResponseProcessProposal_ProposalStatusAmino = ResponseProcessProposal_ProposalStatus;
function responseProcessProposal_ProposalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseProcessProposal_ProposalStatus.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseProcessProposal_ProposalStatus.ACCEPT;
        case 2:
        case "REJECT":
            return ResponseProcessProposal_ProposalStatus.REJECT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseProcessProposal_ProposalStatus.UNRECOGNIZED;
    }
}
exports.responseProcessProposal_ProposalStatusFromJSON = responseProcessProposal_ProposalStatusFromJSON;
function responseProcessProposal_ProposalStatusToJSON(object) {
    switch (object) {
        case ResponseProcessProposal_ProposalStatus.UNKNOWN:
            return "UNKNOWN";
        case ResponseProcessProposal_ProposalStatus.ACCEPT:
            return "ACCEPT";
        case ResponseProcessProposal_ProposalStatus.REJECT:
            return "REJECT";
        case ResponseProcessProposal_ProposalStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.responseProcessProposal_ProposalStatusToJSON = responseProcessProposal_ProposalStatusToJSON;
var MisbehaviorType;
(function (MisbehaviorType) {
    MisbehaviorType[MisbehaviorType["UNKNOWN"] = 0] = "UNKNOWN";
    MisbehaviorType[MisbehaviorType["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
    MisbehaviorType[MisbehaviorType["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
    MisbehaviorType[MisbehaviorType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MisbehaviorType || (exports.MisbehaviorType = MisbehaviorType = {}));
exports.MisbehaviorTypeSDKType = MisbehaviorType;
exports.MisbehaviorTypeAmino = MisbehaviorType;
function misbehaviorTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return MisbehaviorType.UNKNOWN;
        case 1:
        case "DUPLICATE_VOTE":
            return MisbehaviorType.DUPLICATE_VOTE;
        case 2:
        case "LIGHT_CLIENT_ATTACK":
            return MisbehaviorType.LIGHT_CLIENT_ATTACK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MisbehaviorType.UNRECOGNIZED;
    }
}
exports.misbehaviorTypeFromJSON = misbehaviorTypeFromJSON;
function misbehaviorTypeToJSON(object) {
    switch (object) {
        case MisbehaviorType.UNKNOWN:
            return "UNKNOWN";
        case MisbehaviorType.DUPLICATE_VOTE:
            return "DUPLICATE_VOTE";
        case MisbehaviorType.LIGHT_CLIENT_ATTACK:
            return "LIGHT_CLIENT_ATTACK";
        case MisbehaviorType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.misbehaviorTypeToJSON = misbehaviorTypeToJSON;
function createBaseRequest() {
    return {
        echo: undefined,
        flush: undefined,
        info: undefined,
        initChain: undefined,
        query: undefined,
        beginBlock: undefined,
        checkTx: undefined,
        deliverTx: undefined,
        endBlock: undefined,
        commit: undefined,
        listSnapshots: undefined,
        offerSnapshot: undefined,
        loadSnapshotChunk: undefined,
        applySnapshotChunk: undefined,
        prepareProposal: undefined,
        processProposal: undefined
    };
}
exports.Request = {
    typeUrl: "/tendermint.abci.Request",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.echo !== undefined) {
            exports.RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        if (message.initChain !== undefined) {
            exports.RequestInitChain.encode(message.initChain, writer.uint32(42).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
        }
        if (message.beginBlock !== undefined) {
            exports.RequestBeginBlock.encode(message.beginBlock, writer.uint32(58).fork()).ldelim();
        }
        if (message.checkTx !== undefined) {
            exports.RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
        }
        if (message.deliverTx !== undefined) {
            exports.RequestDeliverTx.encode(message.deliverTx, writer.uint32(74).fork()).ldelim();
        }
        if (message.endBlock !== undefined) {
            exports.RequestEndBlock.encode(message.endBlock, writer.uint32(82).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
        }
        if (message.listSnapshots !== undefined) {
            exports.RequestListSnapshots.encode(message.listSnapshots, writer.uint32(98).fork()).ldelim();
        }
        if (message.offerSnapshot !== undefined) {
            exports.RequestOfferSnapshot.encode(message.offerSnapshot, writer.uint32(106).fork()).ldelim();
        }
        if (message.loadSnapshotChunk !== undefined) {
            exports.RequestLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(114).fork()).ldelim();
        }
        if (message.applySnapshotChunk !== undefined) {
            exports.RequestApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(122).fork()).ldelim();
        }
        if (message.prepareProposal !== undefined) {
            exports.RequestPrepareProposal.encode(message.prepareProposal, writer.uint32(130).fork()).ldelim();
        }
        if (message.processProposal !== undefined) {
            exports.RequestProcessProposal.encode(message.processProposal, writer.uint32(138).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.echo = exports.RequestEcho.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.flush = exports.RequestFlush.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.info = exports.RequestInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.initChain = exports.RequestInitChain.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.query = exports.RequestQuery.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.beginBlock = exports.RequestBeginBlock.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.checkTx = exports.RequestCheckTx.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.deliverTx = exports.RequestDeliverTx.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.endBlock = exports.RequestEndBlock.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.commit = exports.RequestCommit.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.listSnapshots = exports.RequestListSnapshots.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.offerSnapshot = exports.RequestOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.loadSnapshotChunk = exports.RequestLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.applySnapshotChunk = exports.RequestApplySnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.prepareProposal = exports.RequestPrepareProposal.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.processProposal = exports.RequestProcessProposal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRequest();
        message.echo = object.echo !== undefined && object.echo !== null ? exports.RequestEcho.fromPartial(object.echo) : undefined;
        message.flush = object.flush !== undefined && object.flush !== null ? exports.RequestFlush.fromPartial(object.flush) : undefined;
        message.info = object.info !== undefined && object.info !== null ? exports.RequestInfo.fromPartial(object.info) : undefined;
        message.initChain = object.initChain !== undefined && object.initChain !== null ? exports.RequestInitChain.fromPartial(object.initChain) : undefined;
        message.query = object.query !== undefined && object.query !== null ? exports.RequestQuery.fromPartial(object.query) : undefined;
        message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? exports.RequestBeginBlock.fromPartial(object.beginBlock) : undefined;
        message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? exports.RequestCheckTx.fromPartial(object.checkTx) : undefined;
        message.deliverTx = object.deliverTx !== undefined && object.deliverTx !== null ? exports.RequestDeliverTx.fromPartial(object.deliverTx) : undefined;
        message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? exports.RequestEndBlock.fromPartial(object.endBlock) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? exports.RequestCommit.fromPartial(object.commit) : undefined;
        message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? exports.RequestListSnapshots.fromPartial(object.listSnapshots) : undefined;
        message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? exports.RequestOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
        message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? exports.RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
        message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? exports.RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
        message.prepareProposal = object.prepareProposal !== undefined && object.prepareProposal !== null ? exports.RequestPrepareProposal.fromPartial(object.prepareProposal) : undefined;
        message.processProposal = object.processProposal !== undefined && object.processProposal !== null ? exports.RequestProcessProposal.fromPartial(object.processProposal) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequest();
        if (object.echo !== undefined && object.echo !== null) {
            message.echo = exports.RequestEcho.fromAmino(object.echo);
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = exports.RequestFlush.fromAmino(object.flush);
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.RequestInfo.fromAmino(object.info);
        }
        if (object.init_chain !== undefined && object.init_chain !== null) {
            message.initChain = exports.RequestInitChain.fromAmino(object.init_chain);
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = exports.RequestQuery.fromAmino(object.query);
        }
        if (object.begin_block !== undefined && object.begin_block !== null) {
            message.beginBlock = exports.RequestBeginBlock.fromAmino(object.begin_block);
        }
        if (object.check_tx !== undefined && object.check_tx !== null) {
            message.checkTx = exports.RequestCheckTx.fromAmino(object.check_tx);
        }
        if (object.deliver_tx !== undefined && object.deliver_tx !== null) {
            message.deliverTx = exports.RequestDeliverTx.fromAmino(object.deliver_tx);
        }
        if (object.end_block !== undefined && object.end_block !== null) {
            message.endBlock = exports.RequestEndBlock.fromAmino(object.end_block);
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = exports.RequestCommit.fromAmino(object.commit);
        }
        if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
            message.listSnapshots = exports.RequestListSnapshots.fromAmino(object.list_snapshots);
        }
        if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
            message.offerSnapshot = exports.RequestOfferSnapshot.fromAmino(object.offer_snapshot);
        }
        if (object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null) {
            message.loadSnapshotChunk = exports.RequestLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk);
        }
        if (object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null) {
            message.applySnapshotChunk = exports.RequestApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk);
        }
        if (object.prepare_proposal !== undefined && object.prepare_proposal !== null) {
            message.prepareProposal = exports.RequestPrepareProposal.fromAmino(object.prepare_proposal);
        }
        if (object.process_proposal !== undefined && object.process_proposal !== null) {
            message.processProposal = exports.RequestProcessProposal.fromAmino(object.process_proposal);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.echo = message.echo ? exports.RequestEcho.toAmino(message.echo) : undefined;
        obj.flush = message.flush ? exports.RequestFlush.toAmino(message.flush) : undefined;
        obj.info = message.info ? exports.RequestInfo.toAmino(message.info) : undefined;
        obj.init_chain = message.initChain ? exports.RequestInitChain.toAmino(message.initChain) : undefined;
        obj.query = message.query ? exports.RequestQuery.toAmino(message.query) : undefined;
        obj.begin_block = message.beginBlock ? exports.RequestBeginBlock.toAmino(message.beginBlock) : undefined;
        obj.check_tx = message.checkTx ? exports.RequestCheckTx.toAmino(message.checkTx) : undefined;
        obj.deliver_tx = message.deliverTx ? exports.RequestDeliverTx.toAmino(message.deliverTx) : undefined;
        obj.end_block = message.endBlock ? exports.RequestEndBlock.toAmino(message.endBlock) : undefined;
        obj.commit = message.commit ? exports.RequestCommit.toAmino(message.commit) : undefined;
        obj.list_snapshots = message.listSnapshots ? exports.RequestListSnapshots.toAmino(message.listSnapshots) : undefined;
        obj.offer_snapshot = message.offerSnapshot ? exports.RequestOfferSnapshot.toAmino(message.offerSnapshot) : undefined;
        obj.load_snapshot_chunk = message.loadSnapshotChunk ? exports.RequestLoadSnapshotChunk.toAmino(message.loadSnapshotChunk) : undefined;
        obj.apply_snapshot_chunk = message.applySnapshotChunk ? exports.RequestApplySnapshotChunk.toAmino(message.applySnapshotChunk) : undefined;
        obj.prepare_proposal = message.prepareProposal ? exports.RequestPrepareProposal.toAmino(message.prepareProposal) : undefined;
        obj.process_proposal = message.processProposal ? exports.RequestProcessProposal.toAmino(message.processProposal) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Request.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Request.decode(message.value);
    },
    toProto(message) {
        return exports.Request.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Request",
            value: exports.Request.encode(message).finish()
        };
    }
};
function createBaseRequestEcho() {
    return {
        message: ""
    };
}
exports.RequestEcho = {
    typeUrl: "/tendermint.abci.RequestEcho",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestEcho();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRequestEcho();
        message.message = object.message ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestEcho();
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message = message.message === "" ? undefined : message.message;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestEcho.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestEcho.decode(message.value);
    },
    toProto(message) {
        return exports.RequestEcho.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestEcho",
            value: exports.RequestEcho.encode(message).finish()
        };
    }
};
function createBaseRequestFlush() {
    return {};
}
exports.RequestFlush = {
    typeUrl: "/tendermint.abci.RequestFlush",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestFlush();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseRequestFlush();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRequestFlush();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestFlush.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestFlush.decode(message.value);
    },
    toProto(message) {
        return exports.RequestFlush.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestFlush",
            value: exports.RequestFlush.encode(message).finish()
        };
    }
};
function createBaseRequestInfo() {
    return {
        version: "",
        blockVersion: BigInt(0),
        p2pVersion: BigInt(0),
        abciVersion: ""
    };
}
exports.RequestInfo = {
    typeUrl: "/tendermint.abci.RequestInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.blockVersion !== BigInt(0)) {
            writer.uint32(16).uint64(message.blockVersion);
        }
        if (message.p2pVersion !== BigInt(0)) {
            writer.uint32(24).uint64(message.p2pVersion);
        }
        if (message.abciVersion !== "") {
            writer.uint32(34).string(message.abciVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.blockVersion = reader.uint64();
                    break;
                case 3:
                    message.p2pVersion = reader.uint64();
                    break;
                case 4:
                    message.abciVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRequestInfo();
        message.version = object.version ?? "";
        message.blockVersion = object.blockVersion !== undefined && object.blockVersion !== null ? BigInt(object.blockVersion.toString()) : BigInt(0);
        message.p2pVersion = object.p2pVersion !== undefined && object.p2pVersion !== null ? BigInt(object.p2pVersion.toString()) : BigInt(0);
        message.abciVersion = object.abciVersion ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestInfo();
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.block_version !== undefined && object.block_version !== null) {
            message.blockVersion = BigInt(object.block_version);
        }
        if (object.p2p_version !== undefined && object.p2p_version !== null) {
            message.p2pVersion = BigInt(object.p2p_version);
        }
        if (object.abci_version !== undefined && object.abci_version !== null) {
            message.abciVersion = object.abci_version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version === "" ? undefined : message.version;
        obj.block_version = message.blockVersion !== BigInt(0) ? message.blockVersion.toString() : undefined;
        obj.p2p_version = message.p2pVersion !== BigInt(0) ? message.p2pVersion.toString() : undefined;
        obj.abci_version = message.abciVersion === "" ? undefined : message.abciVersion;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestInfo.decode(message.value);
    },
    toProto(message) {
        return exports.RequestInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestInfo",
            value: exports.RequestInfo.encode(message).finish()
        };
    }
};
function createBaseRequestInitChain() {
    return {
        time: new Date(),
        chainId: "",
        consensusParams: undefined,
        validators: [],
        appStateBytes: new Uint8Array(),
        initialHeight: BigInt(0)
    };
}
exports.RequestInitChain = {
    typeUrl: "/tendermint.abci.RequestInitChain",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        if (message.consensusParams !== undefined) {
            params_1.ConsensusParams.encode(message.consensusParams, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.validators) {
            exports.ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.appStateBytes.length !== 0) {
            writer.uint32(42).bytes(message.appStateBytes);
        }
        if (message.initialHeight !== BigInt(0)) {
            writer.uint32(48).int64(message.initialHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestInitChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.chainId = reader.string();
                    break;
                case 3:
                    message.consensusParams = params_1.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.appStateBytes = reader.bytes();
                    break;
                case 6:
                    message.initialHeight = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRequestInitChain();
        message.time = object.time ?? undefined;
        message.chainId = object.chainId ?? "";
        message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? params_1.ConsensusParams.fromPartial(object.consensusParams) : undefined;
        message.validators = object.validators?.map(e => exports.ValidatorUpdate.fromPartial(e)) || [];
        message.appStateBytes = object.appStateBytes ?? new Uint8Array();
        message.initialHeight = object.initialHeight !== undefined && object.initialHeight !== null ? BigInt(object.initialHeight.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestInitChain();
        if (object.time !== undefined && object.time !== null) {
            message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time));
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.consensus_params !== undefined && object.consensus_params !== null) {
            message.consensusParams = params_1.ConsensusParams.fromAmino(object.consensus_params);
        }
        message.validators = object.validators?.map(e => exports.ValidatorUpdate.fromAmino(e)) || [];
        if (object.app_state_bytes !== undefined && object.app_state_bytes !== null) {
            message.appStateBytes = (0, helpers_1.bytesFromBase64)(object.app_state_bytes);
        }
        if (object.initial_height !== undefined && object.initial_height !== null) {
            message.initialHeight = BigInt(object.initial_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.time = message.time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.time)) : undefined;
        obj.chain_id = message.chainId === "" ? undefined : message.chainId;
        obj.consensus_params = message.consensusParams ? params_1.ConsensusParams.toAmino(message.consensusParams) : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.validators = message.validators;
        }
        obj.app_state_bytes = message.appStateBytes ? (0, helpers_1.base64FromBytes)(message.appStateBytes) : undefined;
        obj.initial_height = message.initialHeight !== BigInt(0) ? message.initialHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestInitChain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestInitChain.decode(message.value);
    },
    toProto(message) {
        return exports.RequestInitChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestInitChain",
            value: exports.RequestInitChain.encode(message).finish()
        };
    }
};
function createBaseRequestQuery() {
    return {
        data: new Uint8Array(),
        path: "",
        height: BigInt(0),
        prove: false
    };
}
exports.RequestQuery = {
    typeUrl: "/tendermint.abci.RequestQuery",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.prove === true) {
            writer.uint32(32).bool(message.prove);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.prove = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRequestQuery();
        message.data = object.data ?? new Uint8Array();
        message.path = object.path ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.prove = object.prove ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestQuery();
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.prove !== undefined && object.prove !== null) {
            message.prove = object.prove;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        obj.path = message.path === "" ? undefined : message.path;
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        obj.prove = message.prove === false ? undefined : message.prove;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestQuery.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestQuery.decode(message.value);
    },
    toProto(message) {
        return exports.RequestQuery.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestQuery",
            value: exports.RequestQuery.encode(message).finish()
        };
    }
};
function createBaseRequestBeginBlock() {
    return {
        hash: new Uint8Array(),
        header: types_1.Header.fromPartial({}),
        lastCommitInfo: exports.CommitInfo.fromPartial({}),
        byzantineValidators: []
    };
}
exports.RequestBeginBlock = {
    typeUrl: "/tendermint.abci.RequestBeginBlock",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(18).fork()).ldelim();
        }
        if (message.lastCommitInfo !== undefined) {
            exports.CommitInfo.encode(message.lastCommitInfo, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.byzantineValidators) {
            exports.Misbehavior.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestBeginBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.header = types_1.Header.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.lastCommitInfo = exports.CommitInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.byzantineValidators.push(exports.Misbehavior.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRequestBeginBlock();
        message.hash = object.hash ?? new Uint8Array();
        message.header = object.header !== undefined && object.header !== null ? types_1.Header.fromPartial(object.header) : undefined;
        message.lastCommitInfo = object.lastCommitInfo !== undefined && object.lastCommitInfo !== null ? exports.CommitInfo.fromPartial(object.lastCommitInfo) : undefined;
        message.byzantineValidators = object.byzantineValidators?.map(e => exports.Misbehavior.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestBeginBlock();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = (0, helpers_1.bytesFromBase64)(object.hash);
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = types_1.Header.fromAmino(object.header);
        }
        if (object.last_commit_info !== undefined && object.last_commit_info !== null) {
            message.lastCommitInfo = exports.CommitInfo.fromAmino(object.last_commit_info);
        }
        message.byzantineValidators = object.byzantine_validators?.map(e => exports.Misbehavior.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? (0, helpers_1.base64FromBytes)(message.hash) : undefined;
        obj.header = message.header ? types_1.Header.toAmino(message.header) : undefined;
        obj.last_commit_info = message.lastCommitInfo ? exports.CommitInfo.toAmino(message.lastCommitInfo) : undefined;
        if (message.byzantineValidators) {
            obj.byzantine_validators = message.byzantineValidators.map(e => e ? exports.Misbehavior.toAmino(e) : undefined);
        }
        else {
            obj.byzantine_validators = message.byzantineValidators;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestBeginBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestBeginBlock.decode(message.value);
    },
    toProto(message) {
        return exports.RequestBeginBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestBeginBlock",
            value: exports.RequestBeginBlock.encode(message).finish()
        };
    }
};
function createBaseRequestCheckTx() {
    return {
        tx: new Uint8Array(),
        type: 0
    };
}
exports.RequestCheckTx = {
    typeUrl: "/tendermint.abci.RequestCheckTx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestCheckTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRequestCheckTx();
        message.tx = object.tx ?? new Uint8Array();
        message.type = object.type ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestCheckTx();
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = (0, helpers_1.bytesFromBase64)(object.tx);
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? (0, helpers_1.base64FromBytes)(message.tx) : undefined;
        obj.type = message.type === 0 ? undefined : message.type;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestCheckTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestCheckTx.decode(message.value);
    },
    toProto(message) {
        return exports.RequestCheckTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestCheckTx",
            value: exports.RequestCheckTx.encode(message).finish()
        };
    }
};
function createBaseRequestDeliverTx() {
    return {
        tx: new Uint8Array()
    };
}
exports.RequestDeliverTx = {
    typeUrl: "/tendermint.abci.RequestDeliverTx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestDeliverTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRequestDeliverTx();
        message.tx = object.tx ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestDeliverTx();
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = (0, helpers_1.bytesFromBase64)(object.tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? (0, helpers_1.base64FromBytes)(message.tx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestDeliverTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestDeliverTx.decode(message.value);
    },
    toProto(message) {
        return exports.RequestDeliverTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestDeliverTx",
            value: exports.RequestDeliverTx.encode(message).finish()
        };
    }
};
function createBaseRequestEndBlock() {
    return {
        height: BigInt(0)
    };
}
exports.RequestEndBlock = {
    typeUrl: "/tendermint.abci.RequestEndBlock",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestEndBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRequestEndBlock();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestEndBlock();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestEndBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestEndBlock.decode(message.value);
    },
    toProto(message) {
        return exports.RequestEndBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestEndBlock",
            value: exports.RequestEndBlock.encode(message).finish()
        };
    }
};
function createBaseRequestCommit() {
    return {};
}
exports.RequestCommit = {
    typeUrl: "/tendermint.abci.RequestCommit",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseRequestCommit();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRequestCommit();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestCommit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestCommit.decode(message.value);
    },
    toProto(message) {
        return exports.RequestCommit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestCommit",
            value: exports.RequestCommit.encode(message).finish()
        };
    }
};
function createBaseRequestListSnapshots() {
    return {};
}
exports.RequestListSnapshots = {
    typeUrl: "/tendermint.abci.RequestListSnapshots",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestListSnapshots();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseRequestListSnapshots();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRequestListSnapshots();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestListSnapshots.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestListSnapshots.decode(message.value);
    },
    toProto(message) {
        return exports.RequestListSnapshots.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestListSnapshots",
            value: exports.RequestListSnapshots.encode(message).finish()
        };
    }
};
function createBaseRequestOfferSnapshot() {
    return {
        snapshot: undefined,
        appHash: new Uint8Array()
    };
}
exports.RequestOfferSnapshot = {
    typeUrl: "/tendermint.abci.RequestOfferSnapshot",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.snapshot !== undefined) {
            exports.Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
        }
        if (message.appHash.length !== 0) {
            writer.uint32(18).bytes(message.appHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestOfferSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshot = exports.Snapshot.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.appHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRequestOfferSnapshot();
        message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? exports.Snapshot.fromPartial(object.snapshot) : undefined;
        message.appHash = object.appHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestOfferSnapshot();
        if (object.snapshot !== undefined && object.snapshot !== null) {
            message.snapshot = exports.Snapshot.fromAmino(object.snapshot);
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.appHash = (0, helpers_1.bytesFromBase64)(object.app_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.snapshot = message.snapshot ? exports.Snapshot.toAmino(message.snapshot) : undefined;
        obj.app_hash = message.appHash ? (0, helpers_1.base64FromBytes)(message.appHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestOfferSnapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestOfferSnapshot.decode(message.value);
    },
    toProto(message) {
        return exports.RequestOfferSnapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestOfferSnapshot",
            value: exports.RequestOfferSnapshot.encode(message).finish()
        };
    }
};
function createBaseRequestLoadSnapshotChunk() {
    return {
        height: BigInt(0),
        format: 0,
        chunk: 0
    };
}
exports.RequestLoadSnapshotChunk = {
    typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunk !== 0) {
            writer.uint32(24).uint32(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestLoadSnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunk = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRequestLoadSnapshotChunk();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.format = object.format ?? 0;
        message.chunk = object.chunk ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestLoadSnapshotChunk();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = object.chunk;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        obj.format = message.format === 0 ? undefined : message.format;
        obj.chunk = message.chunk === 0 ? undefined : message.chunk;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestLoadSnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestLoadSnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return exports.RequestLoadSnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
            value: exports.RequestLoadSnapshotChunk.encode(message).finish()
        };
    }
};
function createBaseRequestApplySnapshotChunk() {
    return {
        index: 0,
        chunk: new Uint8Array(),
        sender: ""
    };
}
exports.RequestApplySnapshotChunk = {
    typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.chunk.length !== 0) {
            writer.uint32(18).bytes(message.chunk);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestApplySnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.chunk = reader.bytes();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRequestApplySnapshotChunk();
        message.index = object.index ?? 0;
        message.chunk = object.chunk ?? new Uint8Array();
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestApplySnapshotChunk();
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = (0, helpers_1.bytesFromBase64)(object.chunk);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index === 0 ? undefined : message.index;
        obj.chunk = message.chunk ? (0, helpers_1.base64FromBytes)(message.chunk) : undefined;
        obj.sender = message.sender === "" ? undefined : message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestApplySnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestApplySnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return exports.RequestApplySnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
            value: exports.RequestApplySnapshotChunk.encode(message).finish()
        };
    }
};
function createBaseRequestPrepareProposal() {
    return {
        maxTxBytes: BigInt(0),
        txs: [],
        localLastCommit: exports.ExtendedCommitInfo.fromPartial({}),
        misbehavior: [],
        height: BigInt(0),
        time: new Date(),
        nextValidatorsHash: new Uint8Array(),
        proposerAddress: new Uint8Array()
    };
}
exports.RequestPrepareProposal = {
    typeUrl: "/tendermint.abci.RequestPrepareProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maxTxBytes !== BigInt(0)) {
            writer.uint32(8).int64(message.maxTxBytes);
        }
        for (const v of message.txs) {
            writer.uint32(18).bytes(v);
        }
        if (message.localLastCommit !== undefined) {
            exports.ExtendedCommitInfo.encode(message.localLastCommit, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.misbehavior) {
            exports.Misbehavior.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(40).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(50).fork()).ldelim();
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(58).bytes(message.nextValidatorsHash);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(66).bytes(message.proposerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestPrepareProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxTxBytes = reader.int64();
                    break;
                case 2:
                    message.txs.push(reader.bytes());
                    break;
                case 3:
                    message.localLastCommit = exports.ExtendedCommitInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.misbehavior.push(exports.Misbehavior.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.height = reader.int64();
                    break;
                case 6:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.nextValidatorsHash = reader.bytes();
                    break;
                case 8:
                    message.proposerAddress = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRequestPrepareProposal();
        message.maxTxBytes = object.maxTxBytes !== undefined && object.maxTxBytes !== null ? BigInt(object.maxTxBytes.toString()) : BigInt(0);
        message.txs = object.txs?.map(e => e) || [];
        message.localLastCommit = object.localLastCommit !== undefined && object.localLastCommit !== null ? exports.ExtendedCommitInfo.fromPartial(object.localLastCommit) : undefined;
        message.misbehavior = object.misbehavior?.map(e => exports.Misbehavior.fromPartial(e)) || [];
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
        message.proposerAddress = object.proposerAddress ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestPrepareProposal();
        if (object.max_tx_bytes !== undefined && object.max_tx_bytes !== null) {
            message.maxTxBytes = BigInt(object.max_tx_bytes);
        }
        message.txs = object.txs?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        if (object.local_last_commit !== undefined && object.local_last_commit !== null) {
            message.localLastCommit = exports.ExtendedCommitInfo.fromAmino(object.local_last_commit);
        }
        message.misbehavior = object.misbehavior?.map(e => exports.Misbehavior.fromAmino(e)) || [];
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time));
        }
        if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
            message.nextValidatorsHash = (0, helpers_1.bytesFromBase64)(object.next_validators_hash);
        }
        if (object.proposer_address !== undefined && object.proposer_address !== null) {
            message.proposerAddress = (0, helpers_1.bytesFromBase64)(object.proposer_address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_tx_bytes = message.maxTxBytes !== BigInt(0) ? message.maxTxBytes.toString() : undefined;
        if (message.txs) {
            obj.txs = message.txs.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.txs = message.txs;
        }
        obj.local_last_commit = message.localLastCommit ? exports.ExtendedCommitInfo.toAmino(message.localLastCommit) : undefined;
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? exports.Misbehavior.toAmino(e) : undefined);
        }
        else {
            obj.misbehavior = message.misbehavior;
        }
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        obj.time = message.time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.time)) : undefined;
        obj.next_validators_hash = message.nextValidatorsHash ? (0, helpers_1.base64FromBytes)(message.nextValidatorsHash) : undefined;
        obj.proposer_address = message.proposerAddress ? (0, helpers_1.base64FromBytes)(message.proposerAddress) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestPrepareProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestPrepareProposal.decode(message.value);
    },
    toProto(message) {
        return exports.RequestPrepareProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestPrepareProposal",
            value: exports.RequestPrepareProposal.encode(message).finish()
        };
    }
};
function createBaseRequestProcessProposal() {
    return {
        txs: [],
        proposedLastCommit: exports.CommitInfo.fromPartial({}),
        misbehavior: [],
        hash: new Uint8Array(),
        height: BigInt(0),
        time: new Date(),
        nextValidatorsHash: new Uint8Array(),
        proposerAddress: new Uint8Array()
    };
}
exports.RequestProcessProposal = {
    typeUrl: "/tendermint.abci.RequestProcessProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        if (message.proposedLastCommit !== undefined) {
            exports.CommitInfo.encode(message.proposedLastCommit, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.misbehavior) {
            exports.Misbehavior.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(40).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(50).fork()).ldelim();
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(58).bytes(message.nextValidatorsHash);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(66).bytes(message.proposerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestProcessProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(reader.bytes());
                    break;
                case 2:
                    message.proposedLastCommit = exports.CommitInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.misbehavior.push(exports.Misbehavior.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.height = reader.int64();
                    break;
                case 6:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.nextValidatorsHash = reader.bytes();
                    break;
                case 8:
                    message.proposerAddress = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRequestProcessProposal();
        message.txs = object.txs?.map(e => e) || [];
        message.proposedLastCommit = object.proposedLastCommit !== undefined && object.proposedLastCommit !== null ? exports.CommitInfo.fromPartial(object.proposedLastCommit) : undefined;
        message.misbehavior = object.misbehavior?.map(e => exports.Misbehavior.fromPartial(e)) || [];
        message.hash = object.hash ?? new Uint8Array();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
        message.proposerAddress = object.proposerAddress ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestProcessProposal();
        message.txs = object.txs?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        if (object.proposed_last_commit !== undefined && object.proposed_last_commit !== null) {
            message.proposedLastCommit = exports.CommitInfo.fromAmino(object.proposed_last_commit);
        }
        message.misbehavior = object.misbehavior?.map(e => exports.Misbehavior.fromAmino(e)) || [];
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = (0, helpers_1.bytesFromBase64)(object.hash);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time));
        }
        if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
            message.nextValidatorsHash = (0, helpers_1.bytesFromBase64)(object.next_validators_hash);
        }
        if (object.proposer_address !== undefined && object.proposer_address !== null) {
            message.proposerAddress = (0, helpers_1.bytesFromBase64)(object.proposer_address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.txs = message.txs;
        }
        obj.proposed_last_commit = message.proposedLastCommit ? exports.CommitInfo.toAmino(message.proposedLastCommit) : undefined;
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? exports.Misbehavior.toAmino(e) : undefined);
        }
        else {
            obj.misbehavior = message.misbehavior;
        }
        obj.hash = message.hash ? (0, helpers_1.base64FromBytes)(message.hash) : undefined;
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        obj.time = message.time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.time)) : undefined;
        obj.next_validators_hash = message.nextValidatorsHash ? (0, helpers_1.base64FromBytes)(message.nextValidatorsHash) : undefined;
        obj.proposer_address = message.proposerAddress ? (0, helpers_1.base64FromBytes)(message.proposerAddress) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestProcessProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestProcessProposal.decode(message.value);
    },
    toProto(message) {
        return exports.RequestProcessProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestProcessProposal",
            value: exports.RequestProcessProposal.encode(message).finish()
        };
    }
};
function createBaseResponse() {
    return {
        exception: undefined,
        echo: undefined,
        flush: undefined,
        info: undefined,
        initChain: undefined,
        query: undefined,
        beginBlock: undefined,
        checkTx: undefined,
        deliverTx: undefined,
        endBlock: undefined,
        commit: undefined,
        listSnapshots: undefined,
        offerSnapshot: undefined,
        loadSnapshotChunk: undefined,
        applySnapshotChunk: undefined,
        prepareProposal: undefined,
        processProposal: undefined
    };
}
exports.Response = {
    typeUrl: "/tendermint.abci.Response",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.exception !== undefined) {
            exports.ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
        }
        if (message.echo !== undefined) {
            exports.ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        if (message.initChain !== undefined) {
            exports.ResponseInitChain.encode(message.initChain, writer.uint32(50).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
        }
        if (message.beginBlock !== undefined) {
            exports.ResponseBeginBlock.encode(message.beginBlock, writer.uint32(66).fork()).ldelim();
        }
        if (message.checkTx !== undefined) {
            exports.ResponseCheckTx.encode(message.checkTx, writer.uint32(74).fork()).ldelim();
        }
        if (message.deliverTx !== undefined) {
            exports.ResponseDeliverTx.encode(message.deliverTx, writer.uint32(82).fork()).ldelim();
        }
        if (message.endBlock !== undefined) {
            exports.ResponseEndBlock.encode(message.endBlock, writer.uint32(90).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
        }
        if (message.listSnapshots !== undefined) {
            exports.ResponseListSnapshots.encode(message.listSnapshots, writer.uint32(106).fork()).ldelim();
        }
        if (message.offerSnapshot !== undefined) {
            exports.ResponseOfferSnapshot.encode(message.offerSnapshot, writer.uint32(114).fork()).ldelim();
        }
        if (message.loadSnapshotChunk !== undefined) {
            exports.ResponseLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(122).fork()).ldelim();
        }
        if (message.applySnapshotChunk !== undefined) {
            exports.ResponseApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(130).fork()).ldelim();
        }
        if (message.prepareProposal !== undefined) {
            exports.ResponsePrepareProposal.encode(message.prepareProposal, writer.uint32(138).fork()).ldelim();
        }
        if (message.processProposal !== undefined) {
            exports.ResponseProcessProposal.encode(message.processProposal, writer.uint32(146).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exception = exports.ResponseException.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.echo = exports.ResponseEcho.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.flush = exports.ResponseFlush.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.info = exports.ResponseInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.initChain = exports.ResponseInitChain.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.query = exports.ResponseQuery.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.beginBlock = exports.ResponseBeginBlock.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.checkTx = exports.ResponseCheckTx.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.deliverTx = exports.ResponseDeliverTx.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.endBlock = exports.ResponseEndBlock.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.commit = exports.ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.listSnapshots = exports.ResponseListSnapshots.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.offerSnapshot = exports.ResponseOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.loadSnapshotChunk = exports.ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.applySnapshotChunk = exports.ResponseApplySnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.prepareProposal = exports.ResponsePrepareProposal.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.processProposal = exports.ResponseProcessProposal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResponse();
        message.exception = object.exception !== undefined && object.exception !== null ? exports.ResponseException.fromPartial(object.exception) : undefined;
        message.echo = object.echo !== undefined && object.echo !== null ? exports.ResponseEcho.fromPartial(object.echo) : undefined;
        message.flush = object.flush !== undefined && object.flush !== null ? exports.ResponseFlush.fromPartial(object.flush) : undefined;
        message.info = object.info !== undefined && object.info !== null ? exports.ResponseInfo.fromPartial(object.info) : undefined;
        message.initChain = object.initChain !== undefined && object.initChain !== null ? exports.ResponseInitChain.fromPartial(object.initChain) : undefined;
        message.query = object.query !== undefined && object.query !== null ? exports.ResponseQuery.fromPartial(object.query) : undefined;
        message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? exports.ResponseBeginBlock.fromPartial(object.beginBlock) : undefined;
        message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? exports.ResponseCheckTx.fromPartial(object.checkTx) : undefined;
        message.deliverTx = object.deliverTx !== undefined && object.deliverTx !== null ? exports.ResponseDeliverTx.fromPartial(object.deliverTx) : undefined;
        message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? exports.ResponseEndBlock.fromPartial(object.endBlock) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? exports.ResponseCommit.fromPartial(object.commit) : undefined;
        message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? exports.ResponseListSnapshots.fromPartial(object.listSnapshots) : undefined;
        message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? exports.ResponseOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
        message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? exports.ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
        message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? exports.ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
        message.prepareProposal = object.prepareProposal !== undefined && object.prepareProposal !== null ? exports.ResponsePrepareProposal.fromPartial(object.prepareProposal) : undefined;
        message.processProposal = object.processProposal !== undefined && object.processProposal !== null ? exports.ResponseProcessProposal.fromPartial(object.processProposal) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponse();
        if (object.exception !== undefined && object.exception !== null) {
            message.exception = exports.ResponseException.fromAmino(object.exception);
        }
        if (object.echo !== undefined && object.echo !== null) {
            message.echo = exports.ResponseEcho.fromAmino(object.echo);
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = exports.ResponseFlush.fromAmino(object.flush);
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.ResponseInfo.fromAmino(object.info);
        }
        if (object.init_chain !== undefined && object.init_chain !== null) {
            message.initChain = exports.ResponseInitChain.fromAmino(object.init_chain);
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = exports.ResponseQuery.fromAmino(object.query);
        }
        if (object.begin_block !== undefined && object.begin_block !== null) {
            message.beginBlock = exports.ResponseBeginBlock.fromAmino(object.begin_block);
        }
        if (object.check_tx !== undefined && object.check_tx !== null) {
            message.checkTx = exports.ResponseCheckTx.fromAmino(object.check_tx);
        }
        if (object.deliver_tx !== undefined && object.deliver_tx !== null) {
            message.deliverTx = exports.ResponseDeliverTx.fromAmino(object.deliver_tx);
        }
        if (object.end_block !== undefined && object.end_block !== null) {
            message.endBlock = exports.ResponseEndBlock.fromAmino(object.end_block);
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = exports.ResponseCommit.fromAmino(object.commit);
        }
        if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
            message.listSnapshots = exports.ResponseListSnapshots.fromAmino(object.list_snapshots);
        }
        if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
            message.offerSnapshot = exports.ResponseOfferSnapshot.fromAmino(object.offer_snapshot);
        }
        if (object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null) {
            message.loadSnapshotChunk = exports.ResponseLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk);
        }
        if (object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null) {
            message.applySnapshotChunk = exports.ResponseApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk);
        }
        if (object.prepare_proposal !== undefined && object.prepare_proposal !== null) {
            message.prepareProposal = exports.ResponsePrepareProposal.fromAmino(object.prepare_proposal);
        }
        if (object.process_proposal !== undefined && object.process_proposal !== null) {
            message.processProposal = exports.ResponseProcessProposal.fromAmino(object.process_proposal);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.exception = message.exception ? exports.ResponseException.toAmino(message.exception) : undefined;
        obj.echo = message.echo ? exports.ResponseEcho.toAmino(message.echo) : undefined;
        obj.flush = message.flush ? exports.ResponseFlush.toAmino(message.flush) : undefined;
        obj.info = message.info ? exports.ResponseInfo.toAmino(message.info) : undefined;
        obj.init_chain = message.initChain ? exports.ResponseInitChain.toAmino(message.initChain) : undefined;
        obj.query = message.query ? exports.ResponseQuery.toAmino(message.query) : undefined;
        obj.begin_block = message.beginBlock ? exports.ResponseBeginBlock.toAmino(message.beginBlock) : undefined;
        obj.check_tx = message.checkTx ? exports.ResponseCheckTx.toAmino(message.checkTx) : undefined;
        obj.deliver_tx = message.deliverTx ? exports.ResponseDeliverTx.toAmino(message.deliverTx) : undefined;
        obj.end_block = message.endBlock ? exports.ResponseEndBlock.toAmino(message.endBlock) : undefined;
        obj.commit = message.commit ? exports.ResponseCommit.toAmino(message.commit) : undefined;
        obj.list_snapshots = message.listSnapshots ? exports.ResponseListSnapshots.toAmino(message.listSnapshots) : undefined;
        obj.offer_snapshot = message.offerSnapshot ? exports.ResponseOfferSnapshot.toAmino(message.offerSnapshot) : undefined;
        obj.load_snapshot_chunk = message.loadSnapshotChunk ? exports.ResponseLoadSnapshotChunk.toAmino(message.loadSnapshotChunk) : undefined;
        obj.apply_snapshot_chunk = message.applySnapshotChunk ? exports.ResponseApplySnapshotChunk.toAmino(message.applySnapshotChunk) : undefined;
        obj.prepare_proposal = message.prepareProposal ? exports.ResponsePrepareProposal.toAmino(message.prepareProposal) : undefined;
        obj.process_proposal = message.processProposal ? exports.ResponseProcessProposal.toAmino(message.processProposal) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Response.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Response.decode(message.value);
    },
    toProto(message) {
        return exports.Response.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Response",
            value: exports.Response.encode(message).finish()
        };
    }
};
function createBaseResponseException() {
    return {
        error: ""
    };
}
exports.ResponseException = {
    typeUrl: "/tendermint.abci.ResponseException",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.error !== "") {
            writer.uint32(10).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseException();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.error = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResponseException();
        message.error = object.error ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseException();
        if (object.error !== undefined && object.error !== null) {
            message.error = object.error;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.error = message.error === "" ? undefined : message.error;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseException.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseException.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseException.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseException",
            value: exports.ResponseException.encode(message).finish()
        };
    }
};
function createBaseResponseEcho() {
    return {
        message: ""
    };
}
exports.ResponseEcho = {
    typeUrl: "/tendermint.abci.ResponseEcho",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseEcho();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResponseEcho();
        message.message = object.message ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseEcho();
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message = message.message === "" ? undefined : message.message;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseEcho.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseEcho.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseEcho.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseEcho",
            value: exports.ResponseEcho.encode(message).finish()
        };
    }
};
function createBaseResponseFlush() {
    return {};
}
exports.ResponseFlush = {
    typeUrl: "/tendermint.abci.ResponseFlush",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseFlush();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseResponseFlush();
        return message;
    },
    fromAmino(_) {
        const message = createBaseResponseFlush();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseFlush.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseFlush.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseFlush.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseFlush",
            value: exports.ResponseFlush.encode(message).finish()
        };
    }
};
function createBaseResponseInfo() {
    return {
        data: "",
        version: "",
        appVersion: BigInt(0),
        lastBlockHeight: BigInt(0),
        lastBlockAppHash: new Uint8Array()
    };
}
exports.ResponseInfo = {
    typeUrl: "/tendermint.abci.ResponseInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.appVersion !== BigInt(0)) {
            writer.uint32(24).uint64(message.appVersion);
        }
        if (message.lastBlockHeight !== BigInt(0)) {
            writer.uint32(32).int64(message.lastBlockHeight);
        }
        if (message.lastBlockAppHash.length !== 0) {
            writer.uint32(42).bytes(message.lastBlockAppHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.appVersion = reader.uint64();
                    break;
                case 4:
                    message.lastBlockHeight = reader.int64();
                    break;
                case 5:
                    message.lastBlockAppHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResponseInfo();
        message.data = object.data ?? "";
        message.version = object.version ?? "";
        message.appVersion = object.appVersion !== undefined && object.appVersion !== null ? BigInt(object.appVersion.toString()) : BigInt(0);
        message.lastBlockHeight = object.lastBlockHeight !== undefined && object.lastBlockHeight !== null ? BigInt(object.lastBlockHeight.toString()) : BigInt(0);
        message.lastBlockAppHash = object.lastBlockAppHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseInfo();
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.app_version !== undefined && object.app_version !== null) {
            message.appVersion = BigInt(object.app_version);
        }
        if (object.last_block_height !== undefined && object.last_block_height !== null) {
            message.lastBlockHeight = BigInt(object.last_block_height);
        }
        if (object.last_block_app_hash !== undefined && object.last_block_app_hash !== null) {
            message.lastBlockAppHash = (0, helpers_1.bytesFromBase64)(object.last_block_app_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data === "" ? undefined : message.data;
        obj.version = message.version === "" ? undefined : message.version;
        obj.app_version = message.appVersion !== BigInt(0) ? message.appVersion.toString() : undefined;
        obj.last_block_height = message.lastBlockHeight !== BigInt(0) ? message.lastBlockHeight.toString() : undefined;
        obj.last_block_app_hash = message.lastBlockAppHash ? (0, helpers_1.base64FromBytes)(message.lastBlockAppHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseInfo",
            value: exports.ResponseInfo.encode(message).finish()
        };
    }
};
function createBaseResponseInitChain() {
    return {
        consensusParams: undefined,
        validators: [],
        appHash: new Uint8Array()
    };
}
exports.ResponseInitChain = {
    typeUrl: "/tendermint.abci.ResponseInitChain",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.consensusParams !== undefined) {
            params_1.ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.validators) {
            exports.ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.appHash.length !== 0) {
            writer.uint32(26).bytes(message.appHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseInitChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusParams = params_1.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.appHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResponseInitChain();
        message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? params_1.ConsensusParams.fromPartial(object.consensusParams) : undefined;
        message.validators = object.validators?.map(e => exports.ValidatorUpdate.fromPartial(e)) || [];
        message.appHash = object.appHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseInitChain();
        if (object.consensus_params !== undefined && object.consensus_params !== null) {
            message.consensusParams = params_1.ConsensusParams.fromAmino(object.consensus_params);
        }
        message.validators = object.validators?.map(e => exports.ValidatorUpdate.fromAmino(e)) || [];
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.appHash = (0, helpers_1.bytesFromBase64)(object.app_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.consensus_params = message.consensusParams ? params_1.ConsensusParams.toAmino(message.consensusParams) : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.validators = message.validators;
        }
        obj.app_hash = message.appHash ? (0, helpers_1.base64FromBytes)(message.appHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseInitChain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseInitChain.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseInitChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseInitChain",
            value: exports.ResponseInitChain.encode(message).finish()
        };
    }
};
function createBaseResponseQuery() {
    return {
        code: 0,
        log: "",
        info: "",
        index: BigInt(0),
        key: new Uint8Array(),
        value: new Uint8Array(),
        proofOps: undefined,
        height: BigInt(0),
        codespace: ""
    };
}
exports.ResponseQuery = {
    typeUrl: "/tendermint.abci.ResponseQuery",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.index !== BigInt(0)) {
            writer.uint32(40).int64(message.index);
        }
        if (message.key.length !== 0) {
            writer.uint32(50).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(58).bytes(message.value);
        }
        if (message.proofOps !== undefined) {
            proof_1.ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(72).int64(message.height);
        }
        if (message.codespace !== "") {
            writer.uint32(82).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.index = reader.int64();
                    break;
                case 6:
                    message.key = reader.bytes();
                    break;
                case 7:
                    message.value = reader.bytes();
                    break;
                case 8:
                    message.proofOps = proof_1.ProofOps.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.height = reader.int64();
                    break;
                case 10:
                    message.codespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResponseQuery();
        message.code = object.code ?? 0;
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.proofOps = object.proofOps !== undefined && object.proofOps !== null ? proof_1.ProofOps.fromPartial(object.proofOps) : undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseQuery();
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = (0, helpers_1.bytesFromBase64)(object.value);
        }
        if (object.proof_ops !== undefined && object.proof_ops !== null) {
            message.proofOps = proof_1.ProofOps.fromAmino(object.proof_ops);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code === 0 ? undefined : message.code;
        obj.log = message.log === "" ? undefined : message.log;
        obj.info = message.info === "" ? undefined : message.info;
        obj.index = message.index !== BigInt(0) ? message.index.toString() : undefined;
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.value = message.value ? (0, helpers_1.base64FromBytes)(message.value) : undefined;
        obj.proof_ops = message.proofOps ? proof_1.ProofOps.toAmino(message.proofOps) : undefined;
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        obj.codespace = message.codespace === "" ? undefined : message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseQuery.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseQuery.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseQuery.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseQuery",
            value: exports.ResponseQuery.encode(message).finish()
        };
    }
};
function createBaseResponseBeginBlock() {
    return {
        events: []
    };
}
exports.ResponseBeginBlock = {
    typeUrl: "/tendermint.abci.ResponseBeginBlock",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseBeginBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResponseBeginBlock();
        message.events = object.events?.map(e => exports.Event.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseBeginBlock();
        message.events = object.events?.map(e => exports.Event.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = message.events;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseBeginBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseBeginBlock.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseBeginBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseBeginBlock",
            value: exports.ResponseBeginBlock.encode(message).finish()
        };
    }
};
function createBaseResponseCheckTx() {
    return {
        code: 0,
        data: new Uint8Array(),
        log: "",
        info: "",
        gasWanted: BigInt(0),
        gasUsed: BigInt(0),
        events: [],
        codespace: "",
        sender: "",
        priority: BigInt(0),
        mempoolError: ""
    };
}
exports.ResponseCheckTx = {
    typeUrl: "/tendermint.abci.ResponseCheckTx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.gasWanted !== BigInt(0)) {
            writer.uint32(40).int64(message.gasWanted);
        }
        if (message.gasUsed !== BigInt(0)) {
            writer.uint32(48).int64(message.gasUsed);
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        if (message.sender !== "") {
            writer.uint32(74).string(message.sender);
        }
        if (message.priority !== BigInt(0)) {
            writer.uint32(80).int64(message.priority);
        }
        if (message.mempoolError !== "") {
            writer.uint32(90).string(message.mempoolError);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseCheckTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gasWanted = reader.int64();
                    break;
                case 6:
                    message.gasUsed = reader.int64();
                    break;
                case 7:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
                    break;
                case 9:
                    message.sender = reader.string();
                    break;
                case 10:
                    message.priority = reader.int64();
                    break;
                case 11:
                    message.mempoolError = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResponseCheckTx();
        message.code = object.code ?? 0;
        message.data = object.data ?? new Uint8Array();
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
        message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
        message.events = object.events?.map(e => exports.Event.fromPartial(e)) || [];
        message.codespace = object.codespace ?? "";
        message.sender = object.sender ?? "";
        message.priority = object.priority !== undefined && object.priority !== null ? BigInt(object.priority.toString()) : BigInt(0);
        message.mempoolError = object.mempoolError ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseCheckTx();
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
            message.gasWanted = BigInt(object.gas_wanted);
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gasUsed = BigInt(object.gas_used);
        }
        message.events = object.events?.map(e => exports.Event.fromAmino(e)) || [];
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.priority !== undefined && object.priority !== null) {
            message.priority = BigInt(object.priority);
        }
        if (object.mempool_error !== undefined && object.mempool_error !== null) {
            message.mempoolError = object.mempool_error;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code === 0 ? undefined : message.code;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        obj.log = message.log === "" ? undefined : message.log;
        obj.info = message.info === "" ? undefined : message.info;
        obj.gas_wanted = message.gasWanted !== BigInt(0) ? message.gasWanted.toString() : undefined;
        obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed.toString() : undefined;
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = message.events;
        }
        obj.codespace = message.codespace === "" ? undefined : message.codespace;
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.priority = message.priority !== BigInt(0) ? message.priority.toString() : undefined;
        obj.mempool_error = message.mempoolError === "" ? undefined : message.mempoolError;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseCheckTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseCheckTx.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseCheckTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseCheckTx",
            value: exports.ResponseCheckTx.encode(message).finish()
        };
    }
};
function createBaseResponseDeliverTx() {
    return {
        code: 0,
        data: new Uint8Array(),
        log: "",
        info: "",
        gasWanted: BigInt(0),
        gasUsed: BigInt(0),
        events: [],
        codespace: ""
    };
}
exports.ResponseDeliverTx = {
    typeUrl: "/tendermint.abci.ResponseDeliverTx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.gasWanted !== BigInt(0)) {
            writer.uint32(40).int64(message.gasWanted);
        }
        if (message.gasUsed !== BigInt(0)) {
            writer.uint32(48).int64(message.gasUsed);
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseDeliverTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gasWanted = reader.int64();
                    break;
                case 6:
                    message.gasUsed = reader.int64();
                    break;
                case 7:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResponseDeliverTx();
        message.code = object.code ?? 0;
        message.data = object.data ?? new Uint8Array();
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
        message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
        message.events = object.events?.map(e => exports.Event.fromPartial(e)) || [];
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseDeliverTx();
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
            message.gasWanted = BigInt(object.gas_wanted);
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gasUsed = BigInt(object.gas_used);
        }
        message.events = object.events?.map(e => exports.Event.fromAmino(e)) || [];
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code === 0 ? undefined : message.code;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        obj.log = message.log === "" ? undefined : message.log;
        obj.info = message.info === "" ? undefined : message.info;
        obj.gas_wanted = message.gasWanted !== BigInt(0) ? message.gasWanted.toString() : undefined;
        obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed.toString() : undefined;
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = message.events;
        }
        obj.codespace = message.codespace === "" ? undefined : message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseDeliverTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseDeliverTx.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseDeliverTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseDeliverTx",
            value: exports.ResponseDeliverTx.encode(message).finish()
        };
    }
};
function createBaseResponseEndBlock() {
    return {
        validatorUpdates: [],
        consensusParamUpdates: undefined,
        events: []
    };
}
exports.ResponseEndBlock = {
    typeUrl: "/tendermint.abci.ResponseEndBlock",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.validatorUpdates) {
            exports.ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensusParamUpdates !== undefined) {
            params_1.ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseEndBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorUpdates.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.consensusParamUpdates = params_1.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResponseEndBlock();
        message.validatorUpdates = object.validatorUpdates?.map(e => exports.ValidatorUpdate.fromPartial(e)) || [];
        message.consensusParamUpdates = object.consensusParamUpdates !== undefined && object.consensusParamUpdates !== null ? params_1.ConsensusParams.fromPartial(object.consensusParamUpdates) : undefined;
        message.events = object.events?.map(e => exports.Event.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseEndBlock();
        message.validatorUpdates = object.validator_updates?.map(e => exports.ValidatorUpdate.fromAmino(e)) || [];
        if (object.consensus_param_updates !== undefined && object.consensus_param_updates !== null) {
            message.consensusParamUpdates = params_1.ConsensusParams.fromAmino(object.consensus_param_updates);
        }
        message.events = object.events?.map(e => exports.Event.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.validatorUpdates) {
            obj.validator_updates = message.validatorUpdates.map(e => e ? exports.ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.validator_updates = message.validatorUpdates;
        }
        obj.consensus_param_updates = message.consensusParamUpdates ? params_1.ConsensusParams.toAmino(message.consensusParamUpdates) : undefined;
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = message.events;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseEndBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseEndBlock.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseEndBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseEndBlock",
            value: exports.ResponseEndBlock.encode(message).finish()
        };
    }
};
function createBaseResponseCommit() {
    return {
        data: new Uint8Array(),
        retainHeight: BigInt(0)
    };
}
exports.ResponseCommit = {
    typeUrl: "/tendermint.abci.ResponseCommit",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.retainHeight !== BigInt(0)) {
            writer.uint32(24).int64(message.retainHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.retainHeight = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResponseCommit();
        message.data = object.data ?? new Uint8Array();
        message.retainHeight = object.retainHeight !== undefined && object.retainHeight !== null ? BigInt(object.retainHeight.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseCommit();
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.retain_height !== undefined && object.retain_height !== null) {
            message.retainHeight = BigInt(object.retain_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        obj.retain_height = message.retainHeight !== BigInt(0) ? message.retainHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseCommit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseCommit.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseCommit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseCommit",
            value: exports.ResponseCommit.encode(message).finish()
        };
    }
};
function createBaseResponseListSnapshots() {
    return {
        snapshots: []
    };
}
exports.ResponseListSnapshots = {
    typeUrl: "/tendermint.abci.ResponseListSnapshots",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.snapshots) {
            exports.Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseListSnapshots();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshots.push(exports.Snapshot.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResponseListSnapshots();
        message.snapshots = object.snapshots?.map(e => exports.Snapshot.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseListSnapshots();
        message.snapshots = object.snapshots?.map(e => exports.Snapshot.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map(e => e ? exports.Snapshot.toAmino(e) : undefined);
        }
        else {
            obj.snapshots = message.snapshots;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseListSnapshots.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseListSnapshots.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseListSnapshots.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseListSnapshots",
            value: exports.ResponseListSnapshots.encode(message).finish()
        };
    }
};
function createBaseResponseOfferSnapshot() {
    return {
        result: 0
    };
}
exports.ResponseOfferSnapshot = {
    typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseOfferSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResponseOfferSnapshot();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseOfferSnapshot();
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result === 0 ? undefined : message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseOfferSnapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseOfferSnapshot.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseOfferSnapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
            value: exports.ResponseOfferSnapshot.encode(message).finish()
        };
    }
};
function createBaseResponseLoadSnapshotChunk() {
    return {
        chunk: new Uint8Array()
    };
}
exports.ResponseLoadSnapshotChunk = {
    typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.chunk.length !== 0) {
            writer.uint32(10).bytes(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseLoadSnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunk = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResponseLoadSnapshotChunk();
        message.chunk = object.chunk ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseLoadSnapshotChunk();
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = (0, helpers_1.bytesFromBase64)(object.chunk);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chunk = message.chunk ? (0, helpers_1.base64FromBytes)(message.chunk) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseLoadSnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseLoadSnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseLoadSnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
            value: exports.ResponseLoadSnapshotChunk.encode(message).finish()
        };
    }
};
function createBaseResponseApplySnapshotChunk() {
    return {
        result: 0,
        refetchChunks: [],
        rejectSenders: []
    };
}
exports.ResponseApplySnapshotChunk = {
    typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        writer.uint32(18).fork();
        for (const v of message.refetchChunks) {
            writer.uint32(v);
        }
        writer.ldelim();
        for (const v of message.rejectSenders) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseApplySnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.refetchChunks.push(reader.uint32());
                        }
                    }
                    else {
                        message.refetchChunks.push(reader.uint32());
                    }
                    break;
                case 3:
                    message.rejectSenders.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResponseApplySnapshotChunk();
        message.result = object.result ?? 0;
        message.refetchChunks = object.refetchChunks?.map(e => e) || [];
        message.rejectSenders = object.rejectSenders?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseApplySnapshotChunk();
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        message.refetchChunks = object.refetch_chunks?.map(e => e) || [];
        message.rejectSenders = object.reject_senders?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result === 0 ? undefined : message.result;
        if (message.refetchChunks) {
            obj.refetch_chunks = message.refetchChunks.map(e => e);
        }
        else {
            obj.refetch_chunks = message.refetchChunks;
        }
        if (message.rejectSenders) {
            obj.reject_senders = message.rejectSenders.map(e => e);
        }
        else {
            obj.reject_senders = message.rejectSenders;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseApplySnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseApplySnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseApplySnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
            value: exports.ResponseApplySnapshotChunk.encode(message).finish()
        };
    }
};
function createBaseResponsePrepareProposal() {
    return {
        txs: []
    };
}
exports.ResponsePrepareProposal = {
    typeUrl: "/tendermint.abci.ResponsePrepareProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponsePrepareProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResponsePrepareProposal();
        message.txs = object.txs?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponsePrepareProposal();
        message.txs = object.txs?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.txs = message.txs;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponsePrepareProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponsePrepareProposal.decode(message.value);
    },
    toProto(message) {
        return exports.ResponsePrepareProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponsePrepareProposal",
            value: exports.ResponsePrepareProposal.encode(message).finish()
        };
    }
};
function createBaseResponseProcessProposal() {
    return {
        status: 0
    };
}
exports.ResponseProcessProposal = {
    typeUrl: "/tendermint.abci.ResponseProcessProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseProcessProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseResponseProcessProposal();
        message.status = object.status ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseProcessProposal();
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status === 0 ? undefined : message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseProcessProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseProcessProposal.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseProcessProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseProcessProposal",
            value: exports.ResponseProcessProposal.encode(message).finish()
        };
    }
};
function createBaseCommitInfo() {
    return {
        round: 0,
        votes: []
    };
}
exports.CommitInfo = {
    typeUrl: "/tendermint.abci.CommitInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.round !== 0) {
            writer.uint32(8).int32(message.round);
        }
        for (const v of message.votes) {
            exports.VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.round = reader.int32();
                    break;
                case 2:
                    message.votes.push(exports.VoteInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommitInfo();
        message.round = object.round ?? 0;
        message.votes = object.votes?.map(e => exports.VoteInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommitInfo();
        if (object.round !== undefined && object.round !== null) {
            message.round = object.round;
        }
        message.votes = object.votes?.map(e => exports.VoteInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.round = message.round === 0 ? undefined : message.round;
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? exports.VoteInfo.toAmino(e) : undefined);
        }
        else {
            obj.votes = message.votes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommitInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CommitInfo.decode(message.value);
    },
    toProto(message) {
        return exports.CommitInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.CommitInfo",
            value: exports.CommitInfo.encode(message).finish()
        };
    }
};
function createBaseExtendedCommitInfo() {
    return {
        round: 0,
        votes: []
    };
}
exports.ExtendedCommitInfo = {
    typeUrl: "/tendermint.abci.ExtendedCommitInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.round !== 0) {
            writer.uint32(8).int32(message.round);
        }
        for (const v of message.votes) {
            exports.ExtendedVoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.round = reader.int32();
                    break;
                case 2:
                    message.votes.push(exports.ExtendedVoteInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseExtendedCommitInfo();
        message.round = object.round ?? 0;
        message.votes = object.votes?.map(e => exports.ExtendedVoteInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseExtendedCommitInfo();
        if (object.round !== undefined && object.round !== null) {
            message.round = object.round;
        }
        message.votes = object.votes?.map(e => exports.ExtendedVoteInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.round = message.round === 0 ? undefined : message.round;
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? exports.ExtendedVoteInfo.toAmino(e) : undefined);
        }
        else {
            obj.votes = message.votes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExtendedCommitInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ExtendedCommitInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ExtendedCommitInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ExtendedCommitInfo",
            value: exports.ExtendedCommitInfo.encode(message).finish()
        };
    }
};
function createBaseEvent() {
    return {
        type: "",
        attributes: []
    };
}
exports.Event = {
    typeUrl: "/tendermint.abci.Event",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.attributes) {
            exports.EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(exports.EventAttribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEvent();
        message.type = object.type ?? "";
        message.attributes = object.attributes?.map(e => exports.EventAttribute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEvent();
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        message.attributes = object.attributes?.map(e => exports.EventAttribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type === "" ? undefined : message.type;
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? exports.EventAttribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = message.attributes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Event.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Event.decode(message.value);
    },
    toProto(message) {
        return exports.Event.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Event",
            value: exports.Event.encode(message).finish()
        };
    }
};
function createBaseEventAttribute() {
    return {
        key: "",
        value: "",
        index: false
    };
}
exports.EventAttribute = {
    typeUrl: "/tendermint.abci.EventAttribute",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        if (message.index === true) {
            writer.uint32(24).bool(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAttribute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                case 3:
                    message.index = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventAttribute();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        message.index = object.index ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventAttribute();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key === "" ? undefined : message.key;
        obj.value = message.value === "" ? undefined : message.value;
        obj.index = message.index === false ? undefined : message.index;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventAttribute.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventAttribute.decode(message.value);
    },
    toProto(message) {
        return exports.EventAttribute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.EventAttribute",
            value: exports.EventAttribute.encode(message).finish()
        };
    }
};
function createBaseTxResult() {
    return {
        height: BigInt(0),
        index: 0,
        tx: new Uint8Array(),
        result: exports.ResponseDeliverTx.fromPartial({})
    };
}
exports.TxResult = {
    typeUrl: "/tendermint.abci.TxResult",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.index !== 0) {
            writer.uint32(16).uint32(message.index);
        }
        if (message.tx.length !== 0) {
            writer.uint32(26).bytes(message.tx);
        }
        if (message.result !== undefined) {
            exports.ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.index = reader.uint32();
                    break;
                case 3:
                    message.tx = reader.bytes();
                    break;
                case 4:
                    message.result = exports.ResponseDeliverTx.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTxResult();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.index = object.index ?? 0;
        message.tx = object.tx ?? new Uint8Array();
        message.result = object.result !== undefined && object.result !== null ? exports.ResponseDeliverTx.fromPartial(object.result) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxResult();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = (0, helpers_1.bytesFromBase64)(object.tx);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = exports.ResponseDeliverTx.fromAmino(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        obj.index = message.index === 0 ? undefined : message.index;
        obj.tx = message.tx ? (0, helpers_1.base64FromBytes)(message.tx) : undefined;
        obj.result = message.result ? exports.ResponseDeliverTx.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxResult.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TxResult.decode(message.value);
    },
    toProto(message) {
        return exports.TxResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.TxResult",
            value: exports.TxResult.encode(message).finish()
        };
    }
};
function createBaseValidator() {
    return {
        address: new Uint8Array(),
        power: BigInt(0)
    };
}
exports.Validator = {
    typeUrl: "/tendermint.abci.Validator",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(24).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 3:
                    message.power = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? new Uint8Array();
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidator();
        if (object.address !== undefined && object.address !== null) {
            message.address = (0, helpers_1.bytesFromBase64)(object.address);
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = BigInt(object.power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address ? (0, helpers_1.base64FromBytes)(message.address) : undefined;
        obj.power = message.power !== BigInt(0) ? message.power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Validator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Validator.decode(message.value);
    },
    toProto(message) {
        return exports.Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Validator",
            value: exports.Validator.encode(message).finish()
        };
    }
};
function createBaseValidatorUpdate() {
    return {
        pubKey: keys_1.PublicKey.fromPartial({}),
        power: BigInt(0)
    };
}
exports.ValidatorUpdate = {
    typeUrl: "/tendermint.abci.ValidatorUpdate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pubKey !== undefined) {
            keys_1.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKey = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.power = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorUpdate();
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? keys_1.PublicKey.fromPartial(object.pubKey) : undefined;
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorUpdate();
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = keys_1.PublicKey.fromAmino(object.pub_key);
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = BigInt(object.power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pub_key = message.pubKey ? keys_1.PublicKey.toAmino(message.pubKey) : undefined;
        obj.power = message.power !== BigInt(0) ? message.power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ValidatorUpdate.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ValidatorUpdate",
            value: exports.ValidatorUpdate.encode(message).finish()
        };
    }
};
function createBaseVoteInfo() {
    return {
        validator: exports.Validator.fromPartial({}),
        signedLastBlock: false
    };
}
exports.VoteInfo = {
    typeUrl: "/tendermint.abci.VoteInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        if (message.signedLastBlock === true) {
            writer.uint32(16).bool(message.signedLastBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoteInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signedLastBlock = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVoteInfo();
        message.validator = object.validator !== undefined && object.validator !== null ? exports.Validator.fromPartial(object.validator) : undefined;
        message.signedLastBlock = object.signedLastBlock ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseVoteInfo();
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = exports.Validator.fromAmino(object.validator);
        }
        if (object.signed_last_block !== undefined && object.signed_last_block !== null) {
            message.signedLastBlock = object.signed_last_block;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator ? exports.Validator.toAmino(message.validator) : undefined;
        obj.signed_last_block = message.signedLastBlock === false ? undefined : message.signedLastBlock;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.VoteInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.VoteInfo.decode(message.value);
    },
    toProto(message) {
        return exports.VoteInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.VoteInfo",
            value: exports.VoteInfo.encode(message).finish()
        };
    }
};
function createBaseExtendedVoteInfo() {
    return {
        validator: exports.Validator.fromPartial({}),
        signedLastBlock: false,
        voteExtension: new Uint8Array()
    };
}
exports.ExtendedVoteInfo = {
    typeUrl: "/tendermint.abci.ExtendedVoteInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        if (message.signedLastBlock === true) {
            writer.uint32(16).bool(message.signedLastBlock);
        }
        if (message.voteExtension.length !== 0) {
            writer.uint32(26).bytes(message.voteExtension);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedVoteInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signedLastBlock = reader.bool();
                    break;
                case 3:
                    message.voteExtension = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseExtendedVoteInfo();
        message.validator = object.validator !== undefined && object.validator !== null ? exports.Validator.fromPartial(object.validator) : undefined;
        message.signedLastBlock = object.signedLastBlock ?? false;
        message.voteExtension = object.voteExtension ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseExtendedVoteInfo();
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = exports.Validator.fromAmino(object.validator);
        }
        if (object.signed_last_block !== undefined && object.signed_last_block !== null) {
            message.signedLastBlock = object.signed_last_block;
        }
        if (object.vote_extension !== undefined && object.vote_extension !== null) {
            message.voteExtension = (0, helpers_1.bytesFromBase64)(object.vote_extension);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator ? exports.Validator.toAmino(message.validator) : undefined;
        obj.signed_last_block = message.signedLastBlock === false ? undefined : message.signedLastBlock;
        obj.vote_extension = message.voteExtension ? (0, helpers_1.base64FromBytes)(message.voteExtension) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExtendedVoteInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ExtendedVoteInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ExtendedVoteInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ExtendedVoteInfo",
            value: exports.ExtendedVoteInfo.encode(message).finish()
        };
    }
};
function createBaseMisbehavior() {
    return {
        type: 0,
        validator: exports.Validator.fromPartial({}),
        height: BigInt(0),
        time: new Date(),
        totalVotingPower: BigInt(0)
    };
}
exports.Misbehavior = {
    typeUrl: "/tendermint.abci.Misbehavior",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.totalVotingPower !== BigInt(0)) {
            writer.uint32(40).int64(message.totalVotingPower);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMisbehavior();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.totalVotingPower = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMisbehavior();
        message.type = object.type ?? 0;
        message.validator = object.validator !== undefined && object.validator !== null ? exports.Validator.fromPartial(object.validator) : undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMisbehavior();
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = exports.Validator.fromAmino(object.validator);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time));
        }
        if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
            message.totalVotingPower = BigInt(object.total_voting_power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type === 0 ? undefined : message.type;
        obj.validator = message.validator ? exports.Validator.toAmino(message.validator) : undefined;
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        obj.time = message.time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.time)) : undefined;
        obj.total_voting_power = message.totalVotingPower !== BigInt(0) ? message.totalVotingPower.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Misbehavior.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Misbehavior.decode(message.value);
    },
    toProto(message) {
        return exports.Misbehavior.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Misbehavior",
            value: exports.Misbehavior.encode(message).finish()
        };
    }
};
function createBaseSnapshot() {
    return {
        height: BigInt(0),
        format: 0,
        chunks: 0,
        hash: new Uint8Array(),
        metadata: new Uint8Array()
    };
}
exports.Snapshot = {
    typeUrl: "/tendermint.abci.Snapshot",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(42).bytes(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunks = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.metadata = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSnapshot();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.format = object.format ?? 0;
        message.chunks = object.chunks ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        message.metadata = object.metadata ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSnapshot();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        if (object.chunks !== undefined && object.chunks !== null) {
            message.chunks = object.chunks;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = (0, helpers_1.bytesFromBase64)(object.hash);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = (0, helpers_1.bytesFromBase64)(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
        obj.format = message.format === 0 ? undefined : message.format;
        obj.chunks = message.chunks === 0 ? undefined : message.chunks;
        obj.hash = message.hash ? (0, helpers_1.base64FromBytes)(message.hash) : undefined;
        obj.metadata = message.metadata ? (0, helpers_1.base64FromBytes)(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Snapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Snapshot.decode(message.value);
    },
    toProto(message) {
        return exports.Snapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Snapshot",
            value: exports.Snapshot.encode(message).finish()
        };
    }
};
