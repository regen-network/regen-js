import Long from 'long';
import React, { useEffect, useState } from 'react';

import { cosmos } from '@regen-network/api';
import { QueryAllBalancesResponse } from '@regen-network/api/types/codegen/cosmos/bank/v1beta1/query';
import { PageRequest } from '@regen-network/api/types/codegen/helpers';

export function RPCCosmos(): React.ReactElement {
  const [result, setResult] = useState<QueryAllBalancesResponse | undefined>(
    undefined,
  );
  const [error, setError] = useState<{ message: string } | undefined>(
    undefined,
  );

  useEffect(() => {
    if (!result && !error) executeExample();
  }, [result, error]);

  const executeExample = async (): Promise<void> => {
    const client = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint: 'redwood.regen.network:26657',
    });

    await client.cosmos.bank.v1beta1
      .allBalances({
        address: 'regen1df675r9vnf7pdedn4sf26svdsem3ugavgxmy46',
        pagination: {
          key: new Uint8Array(0),
          limit: Long.fromNumber(0),
          offset: Long.fromNumber(0),
        } as PageRequest,
      })
      .then(setResult)
      .catch(setError);
  };

  return (
    <div>
      <h3>{'RPC Queries > cosmos bank balances'}</h3>
      {'Response: '}
      <code>
        {result ? (
          JSON.stringify(result)
        ) : error ? (
          <span>{error.message}</span>
        ) : (
          '...'
        )}
      </code>
    </div>
  );
}
