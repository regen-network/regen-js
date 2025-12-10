import React, { useEffect, useState } from 'react';

import { cosmos } from '@regen-network/api';
import { QueryAllBalancesResponse } from '@regen-network/api/cosmos/bank/v1beta1/query';
import { PageRequest } from '@regen-network/api/helpers';

export function RPCCosmos(): React.ReactElement {
  const [result, setResult] = useState<QueryAllBalancesResponse | undefined>(
    undefined,
  );
  const [error, setError] = useState<{ message: string } | undefined>(
    undefined,
  );

  useEffect(() => {
    const executeExample = async (): Promise<void> => {
      const client = await cosmos.ClientFactory.createRPCQueryClient({
        rpcEndpoint: 'redwood.regen.network:26657',
      });

      await client.cosmos.bank.v1beta1
        .allBalances({
          address: 'regen1df675r9vnf7pdedn4sf26svdsem3ugavgxmy46',
          pagination: {
            key: new Uint8Array(0),
            limit: BigInt(0),
            offset: BigInt(0),
          } as PageRequest,
          resolveDenom: true,
        })
        .then(setResult)
        .catch(setError);
    };

    if (!result && !error) executeExample();
  }, [result, error]);

  return (
    <div>
      <h3>{'RPC Queries > cosmos bank balances'}</h3>
      {'Balances: '}
      <code>
        {result ? (
          JSON.stringify(result.balances)
        ) : error ? (
          <span>{error.message}</span>
        ) : (
          '...'
        )}
      </code>
    </div>
  );
}
