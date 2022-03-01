import {
  SigningStargateClient,
  SigningStargateClientOptions,
} from '@cosmjs/stargate';
import { OfflineSigner } from '@cosmjs/proto-signing';

/**
 * createStargateSigningClient returns a SigningStargateClient
 * to be used for signing and broading transactions.
 *
 * @param endpoint - string.
 * @param signer - OfflineSigner.
 * @param clientOptions - SigningStargateClientOptions.
 */
export async function createStargateSigningClient(
  endpoint: string,
  signer: OfflineSigner,
  clientOptions: SigningStargateClientOptions,
): Promise<SigningStargateClient> {
  const defaultClientOptions = {
    broadcastPollIntervalMs: 300,
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
