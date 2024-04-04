import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryClassesRequest, QueryClassesResponse, QueryClassInfoRequest, QueryClassInfoResponse, QueryBatchesRequest, QueryBatchesResponse, QueryBatchInfoRequest, QueryBatchInfoResponse, QueryBalanceRequest, QueryBalanceResponse, QuerySupplyRequest, QuerySupplyResponse, QueryCreditTypesRequest, QueryCreditTypesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Msg is the regen.ecocredit.v1alpha1 Query service. */
export interface Query {
  /** Classes queries for all credit classes with pagination. */
  classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>;
  /** ClassInfo queries for information on a credit class. */
  classInfo(request: QueryClassInfoRequest): Promise<QueryClassInfoResponse>;
  /** Batches queries for all batches in the given credit class with pagination. */
  batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse>;
  /** BatchInfo queries for information on a credit batch. */
  batchInfo(request: QueryBatchInfoRequest): Promise<QueryBatchInfoResponse>;
  /**
   * Balance queries the balance (both tradable and retired) of a given credit
   * batch for a given account.
   */
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Supply queries the tradable and retired supply of a credit batch. */
  supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  /**
   * CreditTypes returns the list of allowed types that credit classes can have.
   * See Types/CreditType for more details.
   */
  creditTypes(request?: QueryCreditTypesRequest): Promise<QueryCreditTypesResponse>;
  /** Params queries the ecocredit module parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.classes = this.classes.bind(this);
    this.classInfo = this.classInfo.bind(this);
    this.batches = this.batches.bind(this);
    this.batchInfo = this.batchInfo.bind(this);
    this.balance = this.balance.bind(this);
    this.supply = this.supply.bind(this);
    this.creditTypes = this.creditTypes.bind(this);
    this.params = this.params.bind(this);
  }
  classes(request: QueryClassesRequest = {
    pagination: undefined
  }): Promise<QueryClassesResponse> {
    const data = QueryClassesRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Classes", data);
    return promise.then(data => QueryClassesResponse.decode(new BinaryReader(data)));
  }
  classInfo(request: QueryClassInfoRequest): Promise<QueryClassInfoResponse> {
    const data = QueryClassInfoRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "ClassInfo", data);
    return promise.then(data => QueryClassInfoResponse.decode(new BinaryReader(data)));
  }
  batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse> {
    const data = QueryBatchesRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Batches", data);
    return promise.then(data => QueryBatchesResponse.decode(new BinaryReader(data)));
  }
  batchInfo(request: QueryBatchInfoRequest): Promise<QueryBatchInfoResponse> {
    const data = QueryBatchInfoRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "BatchInfo", data);
    return promise.then(data => QueryBatchInfoResponse.decode(new BinaryReader(data)));
  }
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new BinaryReader(data)));
  }
  supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Supply", data);
    return promise.then(data => QuerySupplyResponse.decode(new BinaryReader(data)));
  }
  creditTypes(request: QueryCreditTypesRequest = {}): Promise<QueryCreditTypesResponse> {
    const data = QueryCreditTypesRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "CreditTypes", data);
    return promise.then(data => QueryCreditTypesResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("regen.ecocredit.v1alpha1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    classes(request?: QueryClassesRequest): Promise<QueryClassesResponse> {
      return queryService.classes(request);
    },
    classInfo(request: QueryClassInfoRequest): Promise<QueryClassInfoResponse> {
      return queryService.classInfo(request);
    },
    batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse> {
      return queryService.batches(request);
    },
    batchInfo(request: QueryBatchInfoRequest): Promise<QueryBatchInfoResponse> {
      return queryService.batchInfo(request);
    },
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
      return queryService.balance(request);
    },
    supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
      return queryService.supply(request);
    },
    creditTypes(request?: QueryCreditTypesRequest): Promise<QueryCreditTypesResponse> {
      return queryService.creditTypes(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};