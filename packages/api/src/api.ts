import {
  createProtobufRpcClient,
  QueryClient,
  ProtobufRpcClient,
  SigningStargateClient,
  SigningStargateClientOptions,
} from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';

import { OfflineSigner } from '@cosmjs/proto-signing';

interface ConnectionOptions {
  type: 'tendermint';
  clientType?: 'query' | 'signing';
  url: string;
  signer?: OfflineSigner; // TODO
  clientOptions?: SigningStargateClientOptions;
}

/**
 * Options to pass into the RegenApi constructor.
 */
export interface RegenApiOptions {
  connection: ConnectionOptions;
}

/**
 * The main entry point for interacting with the Regen Ledger. The class needs
 * a client connection
 */
export class RegenApi {
  readonly queryClient: ProtobufRpcClient;

  constructor(queryClient: ProtobufRpcClient) {
    this.queryClient = queryClient;
  }

  /**
   * Create a RegenApi object which connects to the given gRPC connection.
   *
   * @param options - Options to pass into RegenAPI.
   */
  public static async connect(options: RegenApiOptions): Promise<RegenApi> {
    switch (options.connection.type) {
      case 'tendermint': {
        switch (options.connection.clientType) {
          case 'signing': {
            const chainRpc = options.connection.url;
            const offlineSigner: OfflineSigner = {};
            const clientOptions: SigningStargateClientOptions = {};

            const signingClient = await SigningStargateClient.connectWithSigner(
              chainRpc,
              offlineSigner,
              clientOptions,
            );

            return new RegenApi(signingClient);
          }

          default: {
            // The Tendermint client knows how to talk to the Tendermint RPC endpoint
            const tendermintClient = await Tendermint34Client.connect(
              options.connection.url,
            );

            // The generic Stargate query client knows how to use the Tendermint client to submit unverified ABCI queries
            const queryClient = new QueryClient(tendermintClient);

            // This helper function wraps the generic Stargate query client for use by the specific generated query client
            const rpcClient = createProtobufRpcClient(queryClient);

            return new RegenApi(rpcClient);
          }
        }
      }
    }
  }
}
