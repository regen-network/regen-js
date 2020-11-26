/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';


/**
 *  MsgCreateClassRequest is the Msg/CreateClass request type.
 */
export interface MsgCreateClassRequest {
  /**
   *  designer is the address of the account which designed the credit class. The designer has special permissions
   *  to change the list of issuers and perform other administrative operations.
   */
  designer: string;
  /**
   *  issuers are the account addresses of the approved issuers.
   */
  issuers: string[];
  /**
   *  metadata is any arbitrary metadata to attached to the credit class.
   */
  metadata: Uint8Array;
}

/**
 *  MsgCreateClassResponse is the Msg/CreateClass response type.
 */
export interface MsgCreateClassResponse {
  /**
   *  class_id is the unique ID of the newly created credit class.
   */
  classId: string;
}

/**
 *  MsgCreateBatchRequest is the Msg/CreateBatch request type.
 */
export interface MsgCreateBatchRequest {
  /**
   *  issuer is the address of the batch issuer.
   */
  issuer: string;
  /**
   *  class_id is the unique ID of the class.
   */
  classId: string;
  /**
   *  issuance are the credits issued in the batch.
   */
  issuance: MsgCreateBatchRequest_BatchIssuance[];
  /**
   *  metadata is any arbitrary metadata to attached to the credit batch.
   */
  metadata: Uint8Array;
}

/**
 *  BatchIssuance represents the issuance of some credits in a batch to a single recipient.
 */
export interface MsgCreateBatchRequest_BatchIssuance {
  /**
   *  recipient is the account of the recipient.
   */
  recipient: string;
  /**
   *  tradable_units are the units of credits in this issuance that can be traded by this recipient.
   *  Decimal values are acceptable.
   */
  tradableUnits: string;
  /**
   *  retired_units are the units of credits in this issuance that are effectively retired by the issuer on receipt.
   *  Decimal values are acceptable.
   */
  retiredUnits: string;
}

/**
 *  MsgCreateBatchResponse is the Msg/CreateBatch response type.
 */
export interface MsgCreateBatchResponse {
  /**
   *  batch_denom is the unique denomination ID of the newly created batch.
   */
  batchDenom: string;
}

/**
 *  MsgSendRequest is the Msg/Send request type.
 */
export interface MsgSendRequest {
  /**
   *  sender is the address of the account sending credits.
   */
  sender: string;
  /**
   *  sender is the address of the account receiving credits.
   */
  recipient: string;
  /**
   *  credits are the credits being sent.
   */
  credits: MsgSendRequest_SendUnits[];
}

/**
 *  SendUnits are the tradable and retired units of a credit batch to send.
 */
export interface MsgSendRequest_SendUnits {
  /**
   *  batch_denom is the unique ID of the credit batch.
   */
  batchDenom: string;
  /**
   *  tradable_units are the units of credits in this issuance that can be traded by this recipient.
   *  Decimal values are acceptable within the precision returned by Query/Precision.
   */
  tradableUnits: string;
  /**
   *  retired_units are the units of credits in this issuance that are effectively retired by the issuer on receipt.
   *  Decimal values are acceptable within the precision returned by Query/Precision.
   */
  retiredUnits: string;
}

/**
 *  MsgSendResponse is the Msg/Send response type.
 */
export interface MsgSendResponse {
}

/**
 *  MsgRetireRequest is the Msg/Retire request type.
 */
export interface MsgRetireRequest {
  /**
   *  holder is the credit holder address.
   */
  holder: string;
  /**
   *  credits are the credits being retired.
   */
  credits: MsgRetireRequest_RetireUnits[];
}

/**
 *  RetireUnits are the units of the batch being retired.
 */
export interface MsgRetireRequest_RetireUnits {
  /**
   *  batch_denom is the unique ID of the credit batch.
   */
  batchDenom: string;
  /**
   *  retired_units are the units of credits being retired.
   *  Decimal values are acceptable within the precision returned by Query/Precision.
   */
  units: string;
}

/**
 *  MsgRetireRequest is the Msg/Retire response type.
 */
export interface MsgRetireResponse {
}

/**
 *  MsgRetireRequest is the Msg/SetPrecision request type.
 */
export interface MsgSetPrecisionRequest {
  /**
   *  issuer is the address of the batch issuer.
   */
  issuer: string;
  /**
   *  batch_denom is the unique ID of the credit batch.
   */
  batchDenom: string;
  /**
   *  max_decimal_places is the new maximum number of decimal places that can be used to represent some quantity of
   *  credit units. It is an experimental feature to concretely explore an idea proposed in https://github.com/cosmos/cosmos-sdk/issues/7113.
   */
  maxDecimalPlaces: number;
}

/**
 *  MsgRetireRequest is the Msg/SetPrecision response type.
 */
export interface MsgSetPrecisionResponse {
}

const baseMsgCreateClassRequest: object = {
  designer: "",
  issuers: "",
};

const baseMsgCreateClassResponse: object = {
  classId: "",
};

const baseMsgCreateBatchRequest: object = {
  issuer: "",
  classId: "",
};

const baseMsgCreateBatchRequest_BatchIssuance: object = {
  recipient: "",
  tradableUnits: "",
  retiredUnits: "",
};

const baseMsgCreateBatchResponse: object = {
  batchDenom: "",
};

const baseMsgSendRequest: object = {
  sender: "",
  recipient: "",
};

const baseMsgSendRequest_SendUnits: object = {
  batchDenom: "",
  tradableUnits: "",
  retiredUnits: "",
};

const baseMsgSendResponse: object = {
};

const baseMsgRetireRequest: object = {
  holder: "",
};

const baseMsgRetireRequest_RetireUnits: object = {
  batchDenom: "",
  units: "",
};

const baseMsgRetireResponse: object = {
};

const baseMsgSetPrecisionRequest: object = {
  issuer: "",
  batchDenom: "",
  maxDecimalPlaces: 0,
};

const baseMsgSetPrecisionResponse: object = {
};

/**
 *  Msg is the regen.ecocredit.v1alpha1 Msg service.
 */
export interface Msg {

  /**
   *  CreateClass creates a new credit class with an approved list of issuers and optional metadata.
   */
  CreateClass(request: MsgCreateClassRequest): Promise<MsgCreateClassResponse>;

  /**
   *  CreateBatch creates a new batch of credits for an existing credit class. This will create a new batch denom
   *  with a fixed supply. Issued credits can be distributed to recipients in either tradable or retired form.
   */
  CreateBatch(request: MsgCreateBatchRequest): Promise<MsgCreateBatchResponse>;

  /**
   *  Send sends tradeable credits from one account to another account. Sent credits can either be tradable or retired on receipt.
   */
  Send(request: MsgSendRequest): Promise<MsgSendResponse>;

  /**
   *  Retire retires a specified number of credits in the holder's account.
   */
  Retire(request: MsgRetireRequest): Promise<MsgRetireResponse>;

  /**
   *  SetPrecision allows an issuer to increase the decimal precision of a credit batch. It is an experimental feature
   *  to concretely explore an idea proposed in https://github.com/cosmos/cosmos-sdk/issues/7113. The number of decimal
   *  places allowed for a credit batch is determined by the original number of decimal places used with calling CreatBatch.
   *  SetPrecision allows the number of allowed decimal places to be increased, effectively making the supply more
   *  granular without actually changing any balances. It allows asset issuers to be able to issue an asset without needing
   *  to think about how many subdivisions are needed upfront. While it may not be relevant for credits which likely have
   *  a fairly stable market value, I wanted to experiment a bit and this serves as a proof of concept for a broader
   *  bank redesign where say for instance a coin like the ATOM or XRN could be issued in its own units rather than
   *  micro or nano-units. Instead an operation like SetPrecision would allow trading in micro, nano or pico in the future
   *  based on market demand. Arbitrary, unbounded precision is not desirable because this can lead to spam attacks (like
   *  sending 0.000000000000000000000000000001 coins). This is effectively fixed precision so under the hood it is still
   *  basically an integer, but the fixed precision can be increased so its more adaptable long term than just an integer.
   */
  SetPrecision(request: MsgSetPrecisionRequest): Promise<MsgSetPrecisionResponse>;

}

export class MsgClientImpl implements Msg {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  CreateClass(request: MsgCreateClassRequest): Promise<MsgCreateClassResponse> {
    const data = MsgCreateClassRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Msg", "CreateClass", data);
    return promise.then(data => MsgCreateClassResponse.decode(new Reader(data)));
  }

  CreateBatch(request: MsgCreateBatchRequest): Promise<MsgCreateBatchResponse> {
    const data = MsgCreateBatchRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Msg", "CreateBatch", data);
    return promise.then(data => MsgCreateBatchResponse.decode(new Reader(data)));
  }

  Send(request: MsgSendRequest): Promise<MsgSendResponse> {
    const data = MsgSendRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Msg", "Send", data);
    return promise.then(data => MsgSendResponse.decode(new Reader(data)));
  }

  Retire(request: MsgRetireRequest): Promise<MsgRetireResponse> {
    const data = MsgRetireRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Msg", "Retire", data);
    return promise.then(data => MsgRetireResponse.decode(new Reader(data)));
  }

  SetPrecision(request: MsgSetPrecisionRequest): Promise<MsgSetPrecisionResponse> {
    const data = MsgSetPrecisionRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Msg", "SetPrecision", data);
    return promise.then(data => MsgSetPrecisionResponse.decode(new Reader(data)));
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

export const protobufPackage = 'regen.ecocredit.v1alpha1'

export const MsgCreateClassRequest = {
  encode(message: MsgCreateClassRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.designer);
    for (const v of message.issuers) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(26).bytes(message.metadata);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgCreateClassRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateClassRequest } as MsgCreateClassRequest;
    message.issuers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.designer = reader.string();
          break;
        case 2:
          message.issuers.push(reader.string());
          break;
        case 3:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateClassRequest {
    const message = { ...baseMsgCreateClassRequest } as MsgCreateClassRequest;
    message.issuers = [];
    if (object.designer !== undefined && object.designer !== null) {
      message.designer = String(object.designer);
    } else {
      message.designer = "";
    }
    if (object.issuers !== undefined && object.issuers !== null) {
      for (const e of object.issuers) {
        message.issuers.push(String(e));
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateClassRequest>): MsgCreateClassRequest {
    const message = { ...baseMsgCreateClassRequest } as MsgCreateClassRequest;
    message.issuers = [];
    if (object.designer !== undefined && object.designer !== null) {
      message.designer = object.designer;
    } else {
      message.designer = "";
    }
    if (object.issuers !== undefined && object.issuers !== null) {
      for (const e of object.issuers) {
        message.issuers.push(e);
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = new Uint8Array();
    }
    return message;
  },
  toJSON(message: MsgCreateClassRequest): unknown {
    const obj: any = {};
    message.designer !== undefined && (obj.designer = message.designer);
    if (message.issuers) {
      obj.issuers = message.issuers.map(e => e);
    } else {
      obj.issuers = [];
    }
    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    return obj;
  },
};

export const MsgCreateClassResponse = {
  encode(message: MsgCreateClassResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.classId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgCreateClassResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateClassResponse } as MsgCreateClassResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateClassResponse {
    const message = { ...baseMsgCreateClassResponse } as MsgCreateClassResponse;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateClassResponse>): MsgCreateClassResponse {
    const message = { ...baseMsgCreateClassResponse } as MsgCreateClassResponse;
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    return message;
  },
  toJSON(message: MsgCreateClassResponse): unknown {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },
};

export const MsgCreateBatchRequest = {
  encode(message: MsgCreateBatchRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.issuer);
    writer.uint32(18).string(message.classId);
    for (const v of message.issuance) {
      MsgCreateBatchRequest_BatchIssuance.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).bytes(message.metadata);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgCreateBatchRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBatchRequest } as MsgCreateBatchRequest;
    message.issuance = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.classId = reader.string();
          break;
        case 3:
          message.issuance.push(MsgCreateBatchRequest_BatchIssuance.decode(reader, reader.uint32()));
          break;
        case 4:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateBatchRequest {
    const message = { ...baseMsgCreateBatchRequest } as MsgCreateBatchRequest;
    message.issuance = [];
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = String(object.classId);
    } else {
      message.classId = "";
    }
    if (object.issuance !== undefined && object.issuance !== null) {
      for (const e of object.issuance) {
        message.issuance.push(MsgCreateBatchRequest_BatchIssuance.fromJSON(e));
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateBatchRequest>): MsgCreateBatchRequest {
    const message = { ...baseMsgCreateBatchRequest } as MsgCreateBatchRequest;
    message.issuance = [];
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.classId !== undefined && object.classId !== null) {
      message.classId = object.classId;
    } else {
      message.classId = "";
    }
    if (object.issuance !== undefined && object.issuance !== null) {
      for (const e of object.issuance) {
        message.issuance.push(MsgCreateBatchRequest_BatchIssuance.fromPartial(e));
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = new Uint8Array();
    }
    return message;
  },
  toJSON(message: MsgCreateBatchRequest): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.classId !== undefined && (obj.classId = message.classId);
    if (message.issuance) {
      obj.issuance = message.issuance.map(e => e ? MsgCreateBatchRequest_BatchIssuance.toJSON(e) : undefined);
    } else {
      obj.issuance = [];
    }
    message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
    return obj;
  },
};

export const MsgCreateBatchRequest_BatchIssuance = {
  encode(message: MsgCreateBatchRequest_BatchIssuance, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.recipient);
    writer.uint32(18).string(message.tradableUnits);
    writer.uint32(26).string(message.retiredUnits);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgCreateBatchRequest_BatchIssuance {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBatchRequest_BatchIssuance } as MsgCreateBatchRequest_BatchIssuance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.tradableUnits = reader.string();
          break;
        case 3:
          message.retiredUnits = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateBatchRequest_BatchIssuance {
    const message = { ...baseMsgCreateBatchRequest_BatchIssuance } as MsgCreateBatchRequest_BatchIssuance;
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient);
    } else {
      message.recipient = "";
    }
    if (object.tradableUnits !== undefined && object.tradableUnits !== null) {
      message.tradableUnits = String(object.tradableUnits);
    } else {
      message.tradableUnits = "";
    }
    if (object.retiredUnits !== undefined && object.retiredUnits !== null) {
      message.retiredUnits = String(object.retiredUnits);
    } else {
      message.retiredUnits = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateBatchRequest_BatchIssuance>): MsgCreateBatchRequest_BatchIssuance {
    const message = { ...baseMsgCreateBatchRequest_BatchIssuance } as MsgCreateBatchRequest_BatchIssuance;
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    } else {
      message.recipient = "";
    }
    if (object.tradableUnits !== undefined && object.tradableUnits !== null) {
      message.tradableUnits = object.tradableUnits;
    } else {
      message.tradableUnits = "";
    }
    if (object.retiredUnits !== undefined && object.retiredUnits !== null) {
      message.retiredUnits = object.retiredUnits;
    } else {
      message.retiredUnits = "";
    }
    return message;
  },
  toJSON(message: MsgCreateBatchRequest_BatchIssuance): unknown {
    const obj: any = {};
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.tradableUnits !== undefined && (obj.tradableUnits = message.tradableUnits);
    message.retiredUnits !== undefined && (obj.retiredUnits = message.retiredUnits);
    return obj;
  },
};

export const MsgCreateBatchResponse = {
  encode(message: MsgCreateBatchResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.batchDenom);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgCreateBatchResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBatchResponse } as MsgCreateBatchResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateBatchResponse {
    const message = { ...baseMsgCreateBatchResponse } as MsgCreateBatchResponse;
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = String(object.batchDenom);
    } else {
      message.batchDenom = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateBatchResponse>): MsgCreateBatchResponse {
    const message = { ...baseMsgCreateBatchResponse } as MsgCreateBatchResponse;
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = object.batchDenom;
    } else {
      message.batchDenom = "";
    }
    return message;
  },
  toJSON(message: MsgCreateBatchResponse): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    return obj;
  },
};

export const MsgSendRequest = {
  encode(message: MsgSendRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.sender);
    writer.uint32(18).string(message.recipient);
    for (const v of message.credits) {
      MsgSendRequest_SendUnits.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgSendRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendRequest } as MsgSendRequest;
    message.credits = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.credits.push(MsgSendRequest_SendUnits.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSendRequest {
    const message = { ...baseMsgSendRequest } as MsgSendRequest;
    message.credits = [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient);
    } else {
      message.recipient = "";
    }
    if (object.credits !== undefined && object.credits !== null) {
      for (const e of object.credits) {
        message.credits.push(MsgSendRequest_SendUnits.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSendRequest>): MsgSendRequest {
    const message = { ...baseMsgSendRequest } as MsgSendRequest;
    message.credits = [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    } else {
      message.recipient = "";
    }
    if (object.credits !== undefined && object.credits !== null) {
      for (const e of object.credits) {
        message.credits.push(MsgSendRequest_SendUnits.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: MsgSendRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.credits) {
      obj.credits = message.credits.map(e => e ? MsgSendRequest_SendUnits.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }
    return obj;
  },
};

export const MsgSendRequest_SendUnits = {
  encode(message: MsgSendRequest_SendUnits, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.batchDenom);
    writer.uint32(18).string(message.tradableUnits);
    writer.uint32(26).string(message.retiredUnits);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgSendRequest_SendUnits {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendRequest_SendUnits } as MsgSendRequest_SendUnits;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        case 2:
          message.tradableUnits = reader.string();
          break;
        case 3:
          message.retiredUnits = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSendRequest_SendUnits {
    const message = { ...baseMsgSendRequest_SendUnits } as MsgSendRequest_SendUnits;
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = String(object.batchDenom);
    } else {
      message.batchDenom = "";
    }
    if (object.tradableUnits !== undefined && object.tradableUnits !== null) {
      message.tradableUnits = String(object.tradableUnits);
    } else {
      message.tradableUnits = "";
    }
    if (object.retiredUnits !== undefined && object.retiredUnits !== null) {
      message.retiredUnits = String(object.retiredUnits);
    } else {
      message.retiredUnits = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSendRequest_SendUnits>): MsgSendRequest_SendUnits {
    const message = { ...baseMsgSendRequest_SendUnits } as MsgSendRequest_SendUnits;
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = object.batchDenom;
    } else {
      message.batchDenom = "";
    }
    if (object.tradableUnits !== undefined && object.tradableUnits !== null) {
      message.tradableUnits = object.tradableUnits;
    } else {
      message.tradableUnits = "";
    }
    if (object.retiredUnits !== undefined && object.retiredUnits !== null) {
      message.retiredUnits = object.retiredUnits;
    } else {
      message.retiredUnits = "";
    }
    return message;
  },
  toJSON(message: MsgSendRequest_SendUnits): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.tradableUnits !== undefined && (obj.tradableUnits = message.tradableUnits);
    message.retiredUnits !== undefined && (obj.retiredUnits = message.retiredUnits);
    return obj;
  },
};

export const MsgSendResponse = {
  encode(_: MsgSendResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgSendResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendResponse } as MsgSendResponse;
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
  fromJSON(_: any): MsgSendResponse {
    const message = { ...baseMsgSendResponse } as MsgSendResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgSendResponse>): MsgSendResponse {
    const message = { ...baseMsgSendResponse } as MsgSendResponse;
    return message;
  },
  toJSON(_: MsgSendResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export const MsgRetireRequest = {
  encode(message: MsgRetireRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.holder);
    for (const v of message.credits) {
      MsgRetireRequest_RetireUnits.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgRetireRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRetireRequest } as MsgRetireRequest;
    message.credits = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.holder = reader.string();
          break;
        case 2:
          message.credits.push(MsgRetireRequest_RetireUnits.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRetireRequest {
    const message = { ...baseMsgRetireRequest } as MsgRetireRequest;
    message.credits = [];
    if (object.holder !== undefined && object.holder !== null) {
      message.holder = String(object.holder);
    } else {
      message.holder = "";
    }
    if (object.credits !== undefined && object.credits !== null) {
      for (const e of object.credits) {
        message.credits.push(MsgRetireRequest_RetireUnits.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRetireRequest>): MsgRetireRequest {
    const message = { ...baseMsgRetireRequest } as MsgRetireRequest;
    message.credits = [];
    if (object.holder !== undefined && object.holder !== null) {
      message.holder = object.holder;
    } else {
      message.holder = "";
    }
    if (object.credits !== undefined && object.credits !== null) {
      for (const e of object.credits) {
        message.credits.push(MsgRetireRequest_RetireUnits.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: MsgRetireRequest): unknown {
    const obj: any = {};
    message.holder !== undefined && (obj.holder = message.holder);
    if (message.credits) {
      obj.credits = message.credits.map(e => e ? MsgRetireRequest_RetireUnits.toJSON(e) : undefined);
    } else {
      obj.credits = [];
    }
    return obj;
  },
};

export const MsgRetireRequest_RetireUnits = {
  encode(message: MsgRetireRequest_RetireUnits, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.batchDenom);
    writer.uint32(18).string(message.units);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgRetireRequest_RetireUnits {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRetireRequest_RetireUnits } as MsgRetireRequest_RetireUnits;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
          break;
        case 2:
          message.units = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRetireRequest_RetireUnits {
    const message = { ...baseMsgRetireRequest_RetireUnits } as MsgRetireRequest_RetireUnits;
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = String(object.batchDenom);
    } else {
      message.batchDenom = "";
    }
    if (object.units !== undefined && object.units !== null) {
      message.units = String(object.units);
    } else {
      message.units = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRetireRequest_RetireUnits>): MsgRetireRequest_RetireUnits {
    const message = { ...baseMsgRetireRequest_RetireUnits } as MsgRetireRequest_RetireUnits;
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = object.batchDenom;
    } else {
      message.batchDenom = "";
    }
    if (object.units !== undefined && object.units !== null) {
      message.units = object.units;
    } else {
      message.units = "";
    }
    return message;
  },
  toJSON(message: MsgRetireRequest_RetireUnits): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.units !== undefined && (obj.units = message.units);
    return obj;
  },
};

export const MsgRetireResponse = {
  encode(_: MsgRetireResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgRetireResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRetireResponse } as MsgRetireResponse;
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
  fromJSON(_: any): MsgRetireResponse {
    const message = { ...baseMsgRetireResponse } as MsgRetireResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgRetireResponse>): MsgRetireResponse {
    const message = { ...baseMsgRetireResponse } as MsgRetireResponse;
    return message;
  },
  toJSON(_: MsgRetireResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export const MsgSetPrecisionRequest = {
  encode(message: MsgSetPrecisionRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.issuer);
    writer.uint32(18).string(message.batchDenom);
    writer.uint32(24).uint32(message.maxDecimalPlaces);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgSetPrecisionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetPrecisionRequest } as MsgSetPrecisionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.batchDenom = reader.string();
          break;
        case 3:
          message.maxDecimalPlaces = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetPrecisionRequest {
    const message = { ...baseMsgSetPrecisionRequest } as MsgSetPrecisionRequest;
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = String(object.batchDenom);
    } else {
      message.batchDenom = "";
    }
    if (object.maxDecimalPlaces !== undefined && object.maxDecimalPlaces !== null) {
      message.maxDecimalPlaces = Number(object.maxDecimalPlaces);
    } else {
      message.maxDecimalPlaces = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetPrecisionRequest>): MsgSetPrecisionRequest {
    const message = { ...baseMsgSetPrecisionRequest } as MsgSetPrecisionRequest;
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.batchDenom !== undefined && object.batchDenom !== null) {
      message.batchDenom = object.batchDenom;
    } else {
      message.batchDenom = "";
    }
    if (object.maxDecimalPlaces !== undefined && object.maxDecimalPlaces !== null) {
      message.maxDecimalPlaces = object.maxDecimalPlaces;
    } else {
      message.maxDecimalPlaces = 0;
    }
    return message;
  },
  toJSON(message: MsgSetPrecisionRequest): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.maxDecimalPlaces !== undefined && (obj.maxDecimalPlaces = message.maxDecimalPlaces);
    return obj;
  },
};

export const MsgSetPrecisionResponse = {
  encode(_: MsgSetPrecisionResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgSetPrecisionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetPrecisionResponse } as MsgSetPrecisionResponse;
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
  fromJSON(_: any): MsgSetPrecisionResponse {
    const message = { ...baseMsgSetPrecisionResponse } as MsgSetPrecisionResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgSetPrecisionResponse>): MsgSetPrecisionResponse {
    const message = { ...baseMsgSetPrecisionResponse } as MsgSetPrecisionResponse;
    return message;
  },
  toJSON(_: MsgSetPrecisionResponse): unknown {
    const obj: any = {};
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