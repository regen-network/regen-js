/* eslint-disable */
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import * as Long from 'long';
import { SigningStargateClient } from '@cosmjs/stargate';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  MsgCreateVestingAccount defines a message that enables creating a vesting
 *  account.
 */
export interface MsgCreateVestingAccount {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
  endTime: Long;
  delayed: boolean;
}

/**
 *  MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type.
 */
export interface MsgCreateVestingAccountResponse {
}

const baseMsgCreateVestingAccount: object = {
  fromAddress: "",
  toAddress: "",
  endTime: Long.ZERO,
  delayed: false,
};

const baseMsgCreateVestingAccountResponse: object = {
};

/**
 *  Msg defines the bank Msg service.
 */
export interface Msg {

  /**
   *  CreateVestingAccount defines a method that enables creating a vesting
   *  account.
   */
  CreateVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse>;

}

export class MsgClientImpl implements Msg {

  private readonly signingClient: SigningStargateClient;

  constructor(signingClient: SigningStargateClient) {
    this.signingClient = signingClient;
  }

  CreateVestingAccount(request: MsgCreateVestingAccount, callback?: function (response: MsgCreateVestingAccountResponse): void | Promise<void>): void {
    const data = MsgCreateVestingAccount.encode(request).finish();
    this.signingClient.addMsg({
      typeUrl: "cosmos.vesting.v1beta1.Msg/CreateVestingAccount",
      value: data
    }, callback);
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

export const protobufPackage = 'cosmos.vesting.v1beta1'

export const MsgCreateVestingAccount = {
  encode(message: MsgCreateVestingAccount, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.fromAddress);
    writer.uint32(18).string(message.toAddress);
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(32).int64(message.endTime);
    writer.uint32(40).bool(message.delayed);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgCreateVestingAccount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVestingAccount } as MsgCreateVestingAccount;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.endTime = reader.int64() as Long;
          break;
        case 5:
          message.delayed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateVestingAccount {
    const message = { ...baseMsgCreateVestingAccount } as MsgCreateVestingAccount;
    message.amount = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = String(object.fromAddress);
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = String(object.toAddress);
    } else {
      message.toAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = Long.fromString(object.endTime);
    } else {
      message.endTime = Long.ZERO;
    }
    if (object.delayed !== undefined && object.delayed !== null) {
      message.delayed = Boolean(object.delayed);
    } else {
      message.delayed = false;
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateVestingAccount>): MsgCreateVestingAccount {
    const message = { ...baseMsgCreateVestingAccount } as MsgCreateVestingAccount;
    message.amount = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = object.fromAddress;
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = object.toAddress;
    } else {
      message.toAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = object.endTime as Long;
    } else {
      message.endTime = Long.ZERO;
    }
    if (object.delayed !== undefined && object.delayed !== null) {
      message.delayed = object.delayed;
    } else {
      message.delayed = false;
    }
    return message;
  },
  toJSON(message: MsgCreateVestingAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.endTime !== undefined && (obj.endTime = (message.endTime || Long.ZERO).toString());
    message.delayed !== undefined && (obj.delayed = message.delayed);
    return obj;
  },
};

export const MsgCreateVestingAccountResponse = {
  encode(_: MsgCreateVestingAccountResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgCreateVestingAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVestingAccountResponse } as MsgCreateVestingAccountResponse;
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
  fromJSON(_: any): MsgCreateVestingAccountResponse {
    const message = { ...baseMsgCreateVestingAccountResponse } as MsgCreateVestingAccountResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgCreateVestingAccountResponse>): MsgCreateVestingAccountResponse {
    const message = { ...baseMsgCreateVestingAccountResponse } as MsgCreateVestingAccountResponse;
    return message;
  },
  toJSON(_: MsgCreateVestingAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

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