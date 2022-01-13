import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClientImpl } from "./generated/regen/data/v1alpha1/query";

interface TendermintConnection {
	type: 'tendermint' | 'rpc';
	url: string;
}

/**
 * Options to pass into the RegenApi constructor.
 */
export interface RegenApiOptions {
	connection: TendermintConnection;
}

/**
 * The main entry point for interacting with the Regen Ledger. The class needs
 * a client connection
 */
export class RegenApi {
	readonly connection: QueryClientImpl;

	constructor(connection: QueryClientImpl) {
		this.connection = connection;
	}

	/**
	 * Create a RegenApi object which connects to the given gRPC connection.
	 *
	 * @param options - Options to pass into RegenAPI.
	 */
	public static async connect(options: RegenApiOptions): Promise<RegenApi> {
		// Inside an async function...
		// The Tendermint client knows how to talk to the Tendermint RPC endpoint
		const tendermintClient = await Tendermint34Client.connect(options.connection.url);
		
		// The generic Stargate query client knows how to use the Tendermint client to submit unverified ABCI queries
		const queryClient = new QueryClient(tendermintClient);
		
		// This helper function wraps the generic Stargate query client for use by the specific generated query client
		const rpcClient = createProtobufRpcClient(queryClient);
		
		// Here we instantiate a specific query client which will have the custom methods defined in the .proto file
		const queryService = new QueryClientImpl(rpcClient);

		return new RegenApi(queryService);
	}
}
