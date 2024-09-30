import React, { useEffect, useState } from 'react';

import { regen } from '@regen-network/api';
import { QueryProjectsByClassResponse } from '@regen-network/api/regen/ecocredit/v1/query';
import { PageRequest } from '@regen-network/api/helpers';

export function RPCRegen(): React.ReactElement {
  const [result, setResult] = useState<
    QueryProjectsByClassResponse | undefined
  >(undefined);
  const [error, setError] = useState<{ message: string } | undefined>(
    undefined,
  );

  useEffect(() => {
    const executeExample = async (): Promise<void> => {
      const client = await regen.ClientFactory.createRPCQueryClient({
        rpcEndpoint: 'redwood.regen.network:26657',
      });

      await client.regen.ecocredit.v1
        .projectsByClass({
          classId: 'C01',
          pagination: {
            key: new Uint8Array(0),
            limit: BigInt(0),
            offset: BigInt(0),
          } as PageRequest,
        })
        .then(setResult)
        .catch(setError);
    };

    if (!result && !error) executeExample();
  }, [result, error]);

  return (
    <div>
      <h3>{'RPC Queries > regen ecocredit projects'}</h3>
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
