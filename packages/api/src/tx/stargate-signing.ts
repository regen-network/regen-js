import {
  SigningStargateClient,
  SigningStargateClientOptions,
} from '@cosmjs/stargate';
import { OfflineSigner } from '@cosmjs/proto-signing';

/**
 * Given ConnectionOptions, generate the client connection object to be
 * passed into the ts-proto generated functions.
 *
 * @param connection - ConnectionOptions.
 */
export async function createStargateSigningClient(
  endpoint: string,
  signer: OfflineSigner,
  clientOptions: SigningStargateClientOptions,
): Promise<SigningStargateClient> {
  const defaultClientOptions = {
    broadcastPollIntervalMs: 300, //TODO test
    broadcastTimeoutMs: 600000,
  };
  const options: SigningStargateClientOptions = {
    ...defaultClientOptions,
    ...clientOptions,
  };

  try {
    const signingClient = await SigningStargateClient.connectWithSigner(
      endpoint,
      signer,
      options,
    );

    return signingClient;
  } catch (e) {
    return Promise.reject(e);
  }
}
