/* eslint-disable */
import { Any } from '../../../google/protobuf/any';
import { Reader, Writer } from 'protobufjs/minimal';


/**
 *  MsgSubmitEvidence represents a message that supports submitting arbitrary
 *  Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidence {
  submitter: string;
  evidence?: Any;
}

/**
 *  MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type.
 */
export interface MsgSubmitEvidenceResponse {
  /**
   *  hash defines the hash of the evidence.
   */
  hash: Uint8Array;
}

const baseMsgSubmitEvidence: object = {
  submitter: "",
};

const baseMsgSubmitEvidenceResponse: object = {
};

/**
 *  Msg defines the evidence Msg service.
 */
export interface Msg {

  /**
   *  SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
   *  counterfactual signing.
   */
  SubmitEvidence(request: MsgSubmitEvidence): Promise<MsgSubmitEvidenceResponse>;

}

export class MsgClientImpl implements Msg {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  SubmitEvidence(request: MsgSubmitEvidence): Promise<MsgSubmitEvidenceResponse> {
    const data = MsgSubmitEvidence.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Msg", "SubmitEvidence", data);
    return promise.then(data => MsgSubmitEvidenceResponse.decode(new Reader(data)));
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

export const protobufPackage = 'cosmos.evidence.v1beta1'

export const MsgSubmitEvidence = {
  encode(message: MsgSubmitEvidence, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.submitter);
    if (message.evidence !== undefined && message.evidence !== undefined) {
      Any.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgSubmitEvidence {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitEvidence } as MsgSubmitEvidence;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submitter = reader.string();
          break;
        case 2:
          message.evidence = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitEvidence {
    const message = { ...baseMsgSubmitEvidence } as MsgSubmitEvidence;
    if (object.submitter !== undefined && object.submitter !== null) {
      message.submitter = String(object.submitter);
    } else {
      message.submitter = "";
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = Any.fromJSON(object.evidence);
    } else {
      message.evidence = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitEvidence>): MsgSubmitEvidence {
    const message = { ...baseMsgSubmitEvidence } as MsgSubmitEvidence;
    if (object.submitter !== undefined && object.submitter !== null) {
      message.submitter = object.submitter;
    } else {
      message.submitter = "";
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = Any.fromPartial(object.evidence);
    } else {
      message.evidence = undefined;
    }
    return message;
  },
  toJSON(message: MsgSubmitEvidence): unknown {
    const obj: any = {};
    message.submitter !== undefined && (obj.submitter = message.submitter);
    message.evidence !== undefined && (obj.evidence = message.evidence ? Any.toJSON(message.evidence) : undefined);
    return obj;
  },
};

export const MsgSubmitEvidenceResponse = {
  encode(message: MsgSubmitEvidenceResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(34).bytes(message.hash);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgSubmitEvidenceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitEvidenceResponse } as MsgSubmitEvidenceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitEvidenceResponse {
    const message = { ...baseMsgSubmitEvidenceResponse } as MsgSubmitEvidenceResponse;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitEvidenceResponse>): MsgSubmitEvidenceResponse {
    const message = { ...baseMsgSubmitEvidenceResponse } as MsgSubmitEvidenceResponse;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = new Uint8Array();
    }
    return message;
  },
  toJSON(message: MsgSubmitEvidenceResponse): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
};

interface WindowBase64 {
  atob(b64: string): string;
  btoa(bin: string): string;
}

const windowBase64 = (globalThis as unknown as WindowBase64);
const atob = windowBase64.atob || ((b64: string) => Buffer.from(b64, 'base64').toString('binary'));
const btoa = windowBase64.btoa || ((bin: string) => Buffer.from(bin, 'binary').toString('base64'));

function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(''));
}
type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;