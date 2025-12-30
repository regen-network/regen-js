//@ts-nocheck
import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryDenomsRequest, QueryDenomsResponseSDKType, QueryDenomRequest, QueryDenomResponseSDKType, QueryDenomHashRequest, QueryDenomHashResponseSDKType, QueryEscrowAddressRequest, QueryEscrowAddressResponseSDKType, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.denoms = this.denoms.bind(this);
    this.denom = this.denom.bind(this);
    this.denomHash = this.denomHash.bind(this);
    this.escrowAddress = this.escrowAddress.bind(this);
    this.totalEscrowForDenom = this.totalEscrowForDenom.bind(this);
  }
  /* Params queries all parameters of the ibc-transfer module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `ibc/apps/transfer/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Denoms queries all denominations */
  async denoms(params: QueryDenomsRequest = {
    pagination: undefined
  }): Promise<QueryDenomsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/apps/transfer/v1/denoms`;
    return await this.req.get<QueryDenomsResponseSDKType>(endpoint, options);
  }
  /* Denom queries a denomination */
  async denom(params: QueryDenomRequest): Promise<QueryDenomResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.hash !== "undefined") {
      options.params.hash = params.hash;
    }
    const endpoint = `ibc/apps/transfer/v1/denoms/${params.hash}`;
    return await this.req.get<QueryDenomResponseSDKType>(endpoint, options);
  }
  /* DenomHash queries a denomination hash information. */
  async denomHash(params: QueryDenomHashRequest): Promise<QueryDenomHashResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.trace !== "undefined") {
      options.params.trace = params.trace;
    }
    const endpoint = `ibc/apps/transfer/v1/denom_hashes/${params.trace}`;
    return await this.req.get<QueryDenomHashResponseSDKType>(endpoint, options);
  }
  /* EscrowAddress returns the escrow address for a particular port and channel id. */
  async escrowAddress(params: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponseSDKType> {
    const endpoint = `ibc/apps/transfer/v1/channels/${params.channelId}/ports/${params.portId}/escrow_address`;
    return await this.req.get<QueryEscrowAddressResponseSDKType>(endpoint);
  }
  /* TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
  async totalEscrowForDenom(params: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `ibc/apps/transfer/v1/total_escrow/${params.denom}`;
    return await this.req.get<QueryTotalEscrowForDenomResponseSDKType>(endpoint, options);
  }
}