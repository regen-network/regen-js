import { Client } from '@cosmjs/tendermint-rpc';

import { Connection } from './types';

/**
 * Given a Tendermint client, generate the client connection object to be
 * passed into the ts-proto generated functions.
 *
 * @param client - A Tendermint client.
 */
export function createTendermintConnection(client: Client): Connection {
  return {
    queryConnection: {
      async request(
        service: string,
        method: string,
        data: Uint8Array,
      ): Promise<Uint8Array> {
        const { value } = await client.abciQuery({
          path: `/${service}/${method}`,
          data,
        });

        return value;
      },
    },
  };
}
