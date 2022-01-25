import {
  SigningStargateClient,
  SigningStargateClientOptions,
  defaultRegistryTypes,
} from '@cosmjs/stargate';
import { OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { ConnectionOptions } from '../api';

/**
 * Given ConnectionOptions, generate the client connection object to be
 * passed into the ts-proto generated functions.
 *
 * @param connection - ConnectionOptions.
 */
export async function createStargateSigningClient(
  connection: ConnectionOptions,
): Promise<SigningStargateClient> {
  if (connection?.signer) {
    const defaultClientOptions = {
      broadcastPollIntervalMs: 300, //TODO test
      broadcastTimeoutMs: 600000,
    };
    const chainRpc = connection.url;
    const offlineSigner: OfflineSigner = connection.signer;
    const clientOptions: SigningStargateClientOptions =
      connection?.clientOptions || defaultClientOptions;

    const signingClient = await SigningStargateClient.connectWithSigner(
      chainRpc,
      offlineSigner,
      clientOptions,
    );

    return signingClient;
  }

  return Promise.reject();
}
