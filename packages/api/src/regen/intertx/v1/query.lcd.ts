//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryInterchainAccountRequest, QueryInterchainAccountResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.interchainAccount = this.interchainAccount.bind(this);
  }
  /* QueryInterchainAccount returns the interchain account for given owner
   address on a given connection pair */
  async interchainAccount(params: QueryInterchainAccountRequest): Promise<QueryInterchainAccountResponseSDKType> {
    const endpoint = `regen/intertx/v1/interchain-account/${params.owner}/${params.connectionId}`;
    return await this.req.get<QueryInterchainAccountResponseSDKType>(endpoint);
  }
}