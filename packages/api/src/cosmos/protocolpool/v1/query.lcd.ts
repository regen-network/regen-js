//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryCommunityPoolRequest, QueryCommunityPoolResponseSDKType, QueryContinuousFundRequest, QueryContinuousFundResponseSDKType, QueryContinuousFundsRequest, QueryContinuousFundsResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.communityPool = this.communityPool.bind(this);
    this.continuousFund = this.continuousFund.bind(this);
    this.continuousFunds = this.continuousFunds.bind(this);
    this.params = this.params.bind(this);
  }
  /* CommunityPool queries the community pool coins. */
  async communityPool(_params: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponseSDKType> {
    const endpoint = `cosmos/protocolpool/v1/community_pool`;
    return await this.req.get<QueryCommunityPoolResponseSDKType>(endpoint);
  }
  /* ContinuousFund queries a continuous fund by the recipient is is associated with. */
  async continuousFund(params: QueryContinuousFundRequest): Promise<QueryContinuousFundResponseSDKType> {
    const endpoint = `cosmos/protocolpool/v1/continuous_funds/${params.recipient}`;
    return await this.req.get<QueryContinuousFundResponseSDKType>(endpoint);
  }
  /* ContinuousFunds queries all continuous funds in the store. */
  async continuousFunds(_params: QueryContinuousFundsRequest = {}): Promise<QueryContinuousFundsResponseSDKType> {
    const endpoint = `cosmos/protocolpool/v1/continuous_funds`;
    return await this.req.get<QueryContinuousFundsResponseSDKType>(endpoint);
  }
  /* Params returns the total set of x/protocolpool parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/protocolpool/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}