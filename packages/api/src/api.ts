import {
  createProtobufRpcClient,
  QueryClient,
  ProtobufRpcClient,
  SigningStargateClientOptions,
} from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';

import { OfflineSigner } from '@cosmjs/proto-signing';
import { setupTxExtension, MessageClient } from './tx/msg';

export interface ConnectionOptions {
  type: 'tendermint';
  clientType: 'query' | 'signing';
  url: string;
  signer?: OfflineSigner;
  clientOptions?: SigningStargateClientOptions;
}

export interface Connection {
  queryClient: ProtobufRpcClient;
  msgClient?: MessageClient;
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
  readonly connection: Connection;

  constructor(queryClient: ProtobufRpcClient, msgClient?: MessageClient) {
    this.connection = {
      queryClient,
      msgClient,
    };
  }

  /**
   * Create a RegenApi object which connects to the given gRPC connection.
   *
   * @param options - Options to pass into RegenAPI.
   */
  public static async connect(options: RegenApiOptions): Promise<RegenApi> {
    switch (options.connection.type) {
      case 'tendermint': {
        // The Tendermint client knows how to talk to the Tendermint RPC endpoint
        const tendermintClient = await Tendermint34Client.connect(
          options.connection.url,
        );

        // The generic Stargate query client knows how to use the Tendermint client to submit unverified ABCI queries
        const queryClient = new QueryClient(tendermintClient);

        // This helper function wraps the generic Stargate query client for use by the specific generated query client
        const rpcClient = createProtobufRpcClient(queryClient);

        if (options.connection.clientType === 'signing') {
          const { connection } = options;
          const msgClient = await setupTxExtension(connection);
          // const signingClient = await createStargateSigningClient(connection);

          return new RegenApi(rpcClient, msgClient);
        }

        return new RegenApi(rpcClient);
      }
    }
  }
}
