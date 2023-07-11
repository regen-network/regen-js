import React, { useEffect, useState } from 'react';

import { regen } from '@regen-network/api';
import { QueryProjectsByClassResponseSDKType } from '@regen-network/api/types/codegen/regen/ecocredit/v1/query';
import { PageRequest } from '@regen-network/api/types/codegen/helpers';

export function LCDRegen(): React.ReactElement {
  const [result, setResult] = useState<
    QueryProjectsByClassResponseSDKType | undefined
  >(undefined);
  const [error, setError] = useState<{ message: string } | undefined>(
    undefined,
  );

  useEffect(() => {
    if (!result && !error) executeExample();
  }, [result, error]);

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
