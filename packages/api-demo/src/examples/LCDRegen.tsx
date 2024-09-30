import React, { useEffect, useState } from 'react';

import { regen } from '@regen-network/api';
import { QueryProjectsByClassResponseSDKType } from '@regen-network/api/regen/ecocredit/v1/query';
import { PageRequest } from '@regen-network/api/helpers';

export function LCDRegen(): React.ReactElement {
  const [result, setResult] = useState<
    QueryProjectsByClassResponseSDKType | undefined
  >(undefined);
  const [error, setError] = useState<{ message: string } | undefined>(
    undefined,
  );

  useEffect(() => {
    const executeExample = async (): Promise<void> => {
      const client = await regen.ClientFactory.createLCDClient({
        restEndpoint: 'http://redwood.regen.network:1317',
      });

      await client.regen.ecocredit.v1
        .projectsByClass({
          classId: 'C01',
          pagination: { countTotal: true } as PageRequest,
        })
        .then(setResult)
        .catch(setError);
    };

    if (!result && !error) executeExample();
  }, [result, error]);

  return (
    <div>
      <h3>{'LCD Queries > regen ecocredit projects'}</h3>
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
