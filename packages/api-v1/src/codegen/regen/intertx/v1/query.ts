import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * QueryInterchainAccountRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */

export interface QueryInterchainAccountRequest {
  /** owner is the address of the account that owns the ICA. */
  owner: string;
  /** connection_id is the connection the ICA claimed. */

  connectionId: string;
}
/**
 * QueryInterchainAccountRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */

export interface QueryInterchainAccountRequestSDKType {
  /** owner is the address of the account that owns the ICA. */
  owner: string;
  /** connection_id is the connection the ICA claimed. */

  connection_id: string;
}
/**
 * QueryInterchainAccountResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */

export interface QueryInterchainAccountResponse {
  /** interchain_account_address is the address of the ICA. */
  interchainAccountAddress: string;
}
/**
 * QueryInterchainAccountResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */

export interface QueryInterchainAccountResponseSDKType {
  /** interchain_account_address is the address of the ICA. */
  interchain_account_address: string;
}

function createBaseQueryInterchainAccountRequest(): QueryInterchainAccountRequest {
  return {
    owner: "",
    connectionId: ""
  };
}

export const QueryInterchainAccountRequest = {
  encode(message: QueryInterchainAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.connectionId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryInterchainAccountRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : ""
    };
  },

  toJSON(message: QueryInterchainAccountRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial(object: Partial<QueryInterchainAccountRequest>): QueryInterchainAccountRequest {
    const message = createBaseQueryInterchainAccountRequest();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  }

};

function createBaseQueryInterchainAccountResponse(): QueryInterchainAccountResponse {
  return {
    interchainAccountAddress: ""
  };
}

export const QueryInterchainAccountResponse = {
  encode(message: QueryInterchainAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interchainAccountAddress !== "") {
      writer.uint32(10).string(message.interchainAccountAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.interchainAccountAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryInterchainAccountResponse {
    return {
      interchainAccountAddress: isSet(object.interchainAccountAddress) ? String(object.interchainAccountAddress) : ""
    };
  },

  toJSON(message: QueryInterchainAccountResponse): unknown {
    const obj: any = {};
    message.interchainAccountAddress !== undefined && (obj.interchainAccountAddress = message.interchainAccountAddress);
    return obj;
  },

  fromPartial(object: Partial<QueryInterchainAccountResponse>): QueryInterchainAccountResponse {
    const message = createBaseQueryInterchainAccountResponse();
    message.interchainAccountAddress = object.interchainAccountAddress ?? "";
    return message;
  }

};