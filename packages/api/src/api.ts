import {
  createProtobufRpcClient,
  QueryClient,
  ProtobufRpcClient,
  SigningStargateClientOptions,
} from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';

import { OfflineSigner } from '@cosmjs/proto-signing';
import { setupTxExtension, MessageClient } from './tx/msg';

interface DefaultConnectionOptions {
  type: 'tendermint';
  endpoint: string;
  clientOptions?: SigningStargateClientOptions;
}

export interface ConnectionOptions extends DefaultConnectionOptions {
  signer?: OfflineSigner;
}

export interface SigningConnectionOptions extends DefaultConnectionOptions {
  signer: OfflineSigner;
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
  readonly msgClient?: MessageClient;

  constructor(queryClient: ProtobufRpcClient, msgClient?: MessageClient) {
    this.queryClient = queryClient;
    this.msgClient = msgClient;
  }

  /**
   * Create a RegenApi object which connects to the given gRPC connection.
   *
   * @param options - Options to pass into RegenAPI.
   */
  public static async connect(options: RegenApiOptions): Promise<RegenApi> {
    const { connection } = options;
    switch (connection.type) {
      case 'tendermint': {
        // The Tendermint client knows how to talk to the Tendermint RPC endpoint
        const tendermintClient = await Tendermint34Client.connect(
          connection.endpoint,
        );

        // The generic Stargate query client knows how to use the Tendermint client to submit unverified ABCI queries
        const queryClient = new QueryClient(tendermintClient);

        // This helper function wraps the generic Stargate query client for use by the specific generated query client
        const rpcClient = createProtobufRpcClient(queryClient);

        if (connection.signer) {
          const msgClient = await setupTxExtension(
            connection as SigningConnectionOptions,
          );
          return new RegenApi(rpcClient, msgClient);
        }

        return new RegenApi(rpcClient);
      }
    }
  }
}
