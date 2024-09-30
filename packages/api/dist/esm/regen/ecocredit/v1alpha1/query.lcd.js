//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
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
    async classes(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `regen/ecocredit/v1alpha1/classes`;
        return await this.req.get(endpoint, options);
    }
    /* ClassInfo queries for information on a credit class. */
    async classInfo(params) {
        const endpoint = `regen/ecocredit/v1alpha1/classes/${params.classId}`;
        return await this.req.get(endpoint);
    }
    /* Batches queries for all batches in the given credit class with pagination. */
    async batches(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `regen/ecocredit/v1alpha1/classes/${params.classId}/batches`;
        return await this.req.get(endpoint, options);
    }
    /* BatchInfo queries for information on a credit batch. */
    async batchInfo(params) {
        const endpoint = `regen/ecocredit/v1alpha1/batches/${params.batchDenom}`;
        return await this.req.get(endpoint);
    }
    /* Balance queries the balance (both tradable and retired) of a given credit
     batch for a given account. */
    async balance(params) {
        const endpoint = `regen/ecocredit/v1alpha1/batches/${params.batchDenom}/balance/${params.account}`;
        return await this.req.get(endpoint);
    }
    /* Supply queries the tradable and retired supply of a credit batch. */
    async supply(params) {
        const endpoint = `regen/ecocredit/v1alpha1/batches/${params.batchDenom}/supply`;
        return await this.req.get(endpoint);
    }
    /* CreditTypes returns the list of allowed types that credit classes can have.
     See Types/CreditType for more details. */
    async creditTypes(_params = {}) {
        const endpoint = `regen/ecocredit/v1alpha1/credit-types`;
        return await this.req.get(endpoint);
    }
    /* Params queries the ecocredit module parameters. */
    async params(_params = {}) {
        const endpoint = `regen/ecocredit/v1alpha1/params`;
        return await this.req.get(endpoint);
    }
}
