import React, { useEffect, useState } from 'react';

import { cosmos } from '@regen-network/api';
import { QueryAllBalancesResponseSDKType } from '@regen-network/api/cosmos/bank/v1beta1/query';
import { PageRequest } from '@regen-network/api/helpers';

export function LCDCosmos(): React.ReactElement {
  const [result, setResult] = useState<
    QueryAllBalancesResponseSDKType | undefined
  >(undefined);
  const [error, setError] = useState<{ message: string } | undefined>(
    undefined,
  );

  useEffect(() => {
    const executeExample = async (): Promise<void> => {
      const client = await cosmos.ClientFactory.createLCDClient({
        restEndpoint: 'http://redwood.regen.network:1317',
      });

      await client.cosmos.bank.v1beta1
        .allBalances({
          address: 'regen1df675r9vnf7pdedn4sf26svdsem3ugavgxmy46',
          pagination: { countTotal: true } as PageRequest,
        })
        .then(setResult)
        .catch(setError);
    };

    if (!result && !error) executeExample();
  }, [result, error]);

  return (
    <div>
      <h3>{'LCD Queries > cosmos bank balances'}</h3>
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
