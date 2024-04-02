import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryClassesRequest, QueryClassesResponseSDKType, QueryClassInfoRequest, QueryClassInfoResponseSDKType, QueryBatchesRequest, QueryBatchesResponseSDKType, QueryBatchInfoRequest, QueryBatchInfoResponseSDKType, QueryBalanceRequest, QueryBalanceResponseSDKType, QuerySupplyRequest, QuerySupplyResponseSDKType, QueryCreditTypesRequest, QueryCreditTypesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.classes = this.classes.bind(this);
    this.classInfo = this.classInfo.bind(this);
    this.batches = this.batches.bind(this);
    this.batchInfo = this.batchInfo.bind(this);
    this.balance = this.balance.bind(this);
    this.supply = this.supply.bind(this);
    this.creditTypes = this.creditTypes.bind(this);
    this.params = this.params.bind(this);
  }
  /* Classes queries for all credit classes with pagination. */
  async classes(params: QueryClassesRequest = {
    pagination: undefined
  }): Promise<QueryClassesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/v1alpha1/classes`;
    return await this.req.get<QueryClassesResponseSDKType>(endpoint, options);
  }
  /* ClassInfo queries for information on a credit class. */
  async classInfo(params: QueryClassInfoRequest): Promise<QueryClassInfoResponseSDKType> {
    const endpoint = `regen/ecocredit/v1alpha1/classes/${params.classId}`;
    return await this.req.get<QueryClassInfoResponseSDKType>(endpoint);
  }
  /* Batches queries for all batches in the given credit class with pagination. */
  async batches(params: QueryBatchesRequest): Promise<QueryBatchesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/v1alpha1/classes/${params.classId}/batches`;
    return await this.req.get<QueryBatchesResponseSDKType>(endpoint, options);
  }
  /* BatchInfo queries for information on a credit batch. */
  async batchInfo(params: QueryBatchInfoRequest): Promise<QueryBatchInfoResponseSDKType> {
    const endpoint = `regen/ecocredit/v1alpha1/batches/${params.batchDenom}`;
    return await this.req.get<QueryBatchInfoResponseSDKType>(endpoint);
  }
  /* Balance queries the balance (both tradable and retired) of a given credit
   batch for a given account. */
  async balance(params: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType> {
    const endpoint = `regen/ecocredit/v1alpha1/batches/${params.batchDenom}/balance/${params.account}`;
    return await this.req.get<QueryBalanceResponseSDKType>(endpoint);
  }
  /* Supply queries the tradable and retired supply of a credit batch. */
  async supply(params: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType> {
    const endpoint = `regen/ecocredit/v1alpha1/batches/${params.batchDenom}/supply`;
    return await this.req.get<QuerySupplyResponseSDKType>(endpoint);
  }
  /* CreditTypes returns the list of allowed types that credit classes can have.
   See Types/CreditType for more details. */
  async creditTypes(_params: QueryCreditTypesRequest = {}): Promise<QueryCreditTypesResponseSDKType> {
    const endpoint = `regen/ecocredit/v1alpha1/credit-types`;
    return await this.req.get<QueryCreditTypesResponseSDKType>(endpoint);
  }
  /* Params queries the ecocredit module parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `regen/ecocredit/v1alpha1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}