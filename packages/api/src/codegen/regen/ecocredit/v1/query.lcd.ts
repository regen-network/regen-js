import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryClassesRequest, QueryClassesResponseSDKType, QueryClassesByAdminRequest, QueryClassesByAdminResponseSDKType, QueryClassRequest, QueryClassResponseSDKType, QueryClassIssuersRequest, QueryClassIssuersResponseSDKType, QueryProjectsRequest, QueryProjectsResponseSDKType, QueryProjectsByClassRequest, QueryProjectsByClassResponseSDKType, QueryProjectsByReferenceIdRequest, QueryProjectsByReferenceIdResponseSDKType, QueryProjectsByAdminRequest, QueryProjectsByAdminResponseSDKType, QueryProjectRequest, QueryProjectResponseSDKType, QueryBatchesRequest, QueryBatchesResponseSDKType, QueryBatchesByIssuerRequest, QueryBatchesByIssuerResponseSDKType, QueryBatchesByClassRequest, QueryBatchesByClassResponseSDKType, QueryBatchesByProjectRequest, QueryBatchesByProjectResponseSDKType, QueryBatchRequest, QueryBatchResponseSDKType, QueryBalanceRequest, QueryBalanceResponseSDKType, QueryBalancesRequest, QueryBalancesResponseSDKType, QueryBalancesByBatchRequest, QueryBalancesByBatchResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesResponseSDKType, QuerySupplyRequest, QuerySupplyResponseSDKType, QueryCreditTypesRequest, QueryCreditTypesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryCreditTypeRequest, QueryCreditTypeResponseSDKType, QueryClassCreatorAllowlistRequest, QueryClassCreatorAllowlistResponseSDKType, QueryAllowedClassCreatorsRequest, QueryAllowedClassCreatorsResponseSDKType, QueryClassFeeRequest, QueryClassFeeResponseSDKType, QueryAllowedBridgeChainsRequest, QueryAllowedBridgeChainsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.classes = this.classes.bind(this);
    this.classesByAdmin = this.classesByAdmin.bind(this);
    this.class = this.class.bind(this);
    this.classIssuers = this.classIssuers.bind(this);
    this.projects = this.projects.bind(this);
    this.projectsByClass = this.projectsByClass.bind(this);
    this.projectsByReferenceId = this.projectsByReferenceId.bind(this);
    this.projectsByAdmin = this.projectsByAdmin.bind(this);
    this.project = this.project.bind(this);
    this.batches = this.batches.bind(this);
    this.batchesByIssuer = this.batchesByIssuer.bind(this);
    this.batchesByClass = this.batchesByClass.bind(this);
    this.batchesByProject = this.batchesByProject.bind(this);
    this.batch = this.batch.bind(this);
    this.balance = this.balance.bind(this);
    this.balances = this.balances.bind(this);
    this.balancesByBatch = this.balancesByBatch.bind(this);
    this.allBalances = this.allBalances.bind(this);
    this.supply = this.supply.bind(this);
    this.creditTypes = this.creditTypes.bind(this);
    this.params = this.params.bind(this);
    this.creditType = this.creditType.bind(this);
    this.classCreatorAllowlist = this.classCreatorAllowlist.bind(this);
    this.allowedClassCreators = this.allowedClassCreators.bind(this);
    this.classFee = this.classFee.bind(this);
    this.allowedBridgeChains = this.allowedBridgeChains.bind(this);
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
    const endpoint = `regen/ecocredit/v1/classes`;
    return await this.req.get<QueryClassesResponseSDKType>(endpoint, options);
  }
  /* ClassesByAdmin queries for all credit classes with a specific admin
   address. */
  async classesByAdmin(params: QueryClassesByAdminRequest): Promise<QueryClassesByAdminResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/v1/classes-by-admin/${params.admin}`;
    return await this.req.get<QueryClassesByAdminResponseSDKType>(endpoint, options);
  }
  /* Class queries for information on a credit class. */
  async class(params: QueryClassRequest): Promise<QueryClassResponseSDKType> {
    const endpoint = `regen/ecocredit/v1/class/${params.classId}`;
    return await this.req.get<QueryClassResponseSDKType>(endpoint);
  }
  /* ClassIssuers queries for the addresses of the issuers for a credit class. */
  async classIssuers(params: QueryClassIssuersRequest): Promise<QueryClassIssuersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/v1/class-issuers/${params.classId}`;
    return await this.req.get<QueryClassIssuersResponseSDKType>(endpoint, options);
  }
  /* Projects queries for all projects with pagination. */
  async projects(params: QueryProjectsRequest = {
    pagination: undefined
  }): Promise<QueryProjectsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/v1/projects`;
    return await this.req.get<QueryProjectsResponseSDKType>(endpoint, options);
  }
  /* ProjectsByClass queries for all projects within a class with pagination. */
  async projectsByClass(params: QueryProjectsByClassRequest): Promise<QueryProjectsByClassResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/v1/projects-by-class/${params.classId}`;
    return await this.req.get<QueryProjectsByClassResponseSDKType>(endpoint, options);
  }
  /* ProjectsByReferenceId queries for all projects by reference-id with
   pagination. */
  async projectsByReferenceId(params: QueryProjectsByReferenceIdRequest): Promise<QueryProjectsByReferenceIdResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/v1/projects-by-reference-id/${params.referenceId}`;
    return await this.req.get<QueryProjectsByReferenceIdResponseSDKType>(endpoint, options);
  }
  /* ProjectsByAdmin queries for all projects by admin with
   pagination. */
  async projectsByAdmin(params: QueryProjectsByAdminRequest): Promise<QueryProjectsByAdminResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/v1/projects-by-admin/${params.admin}`;
    return await this.req.get<QueryProjectsByAdminResponseSDKType>(endpoint, options);
  }
  /* Project queries for information on a project. */
  async project(params: QueryProjectRequest): Promise<QueryProjectResponseSDKType> {
    const endpoint = `regen/ecocredit/v1/project/${params.projectId}`;
    return await this.req.get<QueryProjectResponseSDKType>(endpoint);
  }
  /* Batches queries for all batches with pagination. */
  async batches(params: QueryBatchesRequest = {
    pagination: undefined
  }): Promise<QueryBatchesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/v1/batches`;
    return await this.req.get<QueryBatchesResponseSDKType>(endpoint, options);
  }
  /* BatchesByIssuer queries all batches issued from a given issuer address. */
  async batchesByIssuer(params: QueryBatchesByIssuerRequest): Promise<QueryBatchesByIssuerResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/v1/batches-by-issuer/${params.issuer}`;
    return await this.req.get<QueryBatchesByIssuerResponseSDKType>(endpoint, options);
  }
  /* BatchesByClass queries all batches issued from a given class. */
  async batchesByClass(params: QueryBatchesByClassRequest): Promise<QueryBatchesByClassResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/v1/batches-by-class/${params.classId}`;
    return await this.req.get<QueryBatchesByClassResponseSDKType>(endpoint, options);
  }
  /* BatchesByProject queries for all batches from a given project with
   pagination. */
  async batchesByProject(params: QueryBatchesByProjectRequest): Promise<QueryBatchesByProjectResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/v1/batches-by-project/${params.projectId}`;
    return await this.req.get<QueryBatchesByProjectResponseSDKType>(endpoint, options);
  }
  /* Batch queries for information on a credit batch. */
  async batch(params: QueryBatchRequest): Promise<QueryBatchResponseSDKType> {
    const endpoint = `regen/ecocredit/v1/batch/${params.batchDenom}`;
    return await this.req.get<QueryBatchResponseSDKType>(endpoint);
  }
  /* Balance queries the balance (both tradable and retired) of a given credit
   batch for a given account address. */
  async balance(params: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType> {
    const endpoint = `regen/ecocredit/v1/balance/${params.batchDenom}/${params.address}`;
    return await this.req.get<QueryBalanceResponseSDKType>(endpoint);
  }
  /* Balances queries all credit balances the given account holds. */
  async balances(params: QueryBalancesRequest): Promise<QueryBalancesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/v1/balances/${params.address}`;
    return await this.req.get<QueryBalancesResponseSDKType>(endpoint, options);
  }
  /* BalancesByBatch queries all credit balances from a given batch.
  
   Since Revision 2 */
  async balancesByBatch(params: QueryBalancesByBatchRequest): Promise<QueryBalancesByBatchResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/v1/balances-by-batch/${params.batchDenom}`;
    return await this.req.get<QueryBalancesByBatchResponseSDKType>(endpoint, options);
  }
  /* AllBalances queries all credit balances.
  
   Since Revision 2 */
  async allBalances(params: QueryAllBalancesRequest = {
    pagination: undefined
  }): Promise<QueryAllBalancesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/v1/all-balances`;
    return await this.req.get<QueryAllBalancesResponseSDKType>(endpoint, options);
  }
  /* Supply queries the tradable and retired supply of a credit batch. */
  async supply(params: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType> {
    const endpoint = `regen/ecocredit/v1/supply/${params.batchDenom}`;
    return await this.req.get<QuerySupplyResponseSDKType>(endpoint);
  }
  /* CreditTypes returns the list of allowed types that credit classes can have.
   See Types/CreditType for more details. */
  async creditTypes(_params: QueryCreditTypesRequest = {}): Promise<QueryCreditTypesResponseSDKType> {
    const endpoint = `regen/ecocredit/v1/credit-types`;
    return await this.req.get<QueryCreditTypesResponseSDKType>(endpoint);
  }
  /* Params queries the ecocredit module parameters.
  
   Deprecated (Since Revision 2): This rpc will be removed in the next
   version. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `regen/ecocredit/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* CreditType queries credit type information by abbreviation. */
  async creditType(params: QueryCreditTypeRequest): Promise<QueryCreditTypeResponseSDKType> {
    const endpoint = `regen/ecocredit/v1/credit-type/${params.abbreviation}`;
    return await this.req.get<QueryCreditTypeResponseSDKType>(endpoint);
  }
  /* ClassCreatorAllowlist queries the credit class creator allowlist
   enabled setting.
  
   Since Revision 2 */
  async classCreatorAllowlist(_params: QueryClassCreatorAllowlistRequest = {}): Promise<QueryClassCreatorAllowlistResponseSDKType> {
    const endpoint = `regen/ecocredit/v1/class-creator-allowlist`;
    return await this.req.get<QueryClassCreatorAllowlistResponseSDKType>(endpoint);
  }
  /* AllowedClassCreators queries allowed credit class creators list.
  
   Since Revision 2 */
  async allowedClassCreators(params: QueryAllowedClassCreatorsRequest = {
    pagination: undefined
  }): Promise<QueryAllowedClassCreatorsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `regen/ecocredit/v1/allowed-class-creators`;
    return await this.req.get<QueryAllowedClassCreatorsResponseSDKType>(endpoint, options);
  }
  /* ClassFee returns the credit class creation fee. If not set, a credit class
   creation fee is not required.
  
   Since Revision 2 */
  async classFee(_params: QueryClassFeeRequest = {}): Promise<QueryClassFeeResponseSDKType> {
    const endpoint = `regen/ecocredit/v1/class-fee`;
    return await this.req.get<QueryClassFeeResponseSDKType>(endpoint);
  }
  /* AllowedBridgeChains queries the list of chains allowed to be used in bridge
   operations.
  
   Since Revision 2 */
  async allowedBridgeChains(_params: QueryAllowedBridgeChainsRequest = {}): Promise<QueryAllowedBridgeChainsResponseSDKType> {
    const endpoint = `regen/ecocredit/v1/allowed-bridge-chains`;
    return await this.req.get<QueryAllowedBridgeChainsResponseSDKType>(endpoint);
  }
}