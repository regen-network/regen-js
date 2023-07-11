import { cosmos } from '@regen-network/api';
import React, { useEffect, useState } from 'react';

import { MyBalance } from './MyBalance';
import { LCDCosmos } from './examples/LCDCosmos';
import { LCDRegen } from './examples/LCDRegen';
import { MsgCosmos } from './examples/MsgCosmos';
import { MsgRegen } from './examples/MsgRegen';
import { RPCCosmos } from './examples/RPCCosmos';
import { RPCRegen } from './examples/RPCRegen';

const REGEN_LOCAL_REST_ENDPOINT = 'http://localhost:1317';
const REGEN_MAINNET_REST_ENDPOINT = 'http://regen.regen.network:1317';
const REGEN_REDWOOD_REST_ENDPOINT = 'http://redwood.regen.network:1317';

export function App(): React.ReactElement {
  const [rest, setRest] = useState(REGEN_REDWOOD_REST_ENDPOINT);
  const [client, setClient] = useState<any | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    setClient(undefined);
    setError(undefined);

    const connect = async (): Promise<void> => {
      await cosmos.ClientFactory.createLCDClient({ restEndpoint: rest })
        .then(setClient)
        .catch(setError);
    };

    connect();
  }, [rest]);

  return (
    <div>
      <h1>{'api-demo'}</h1>
      <h3>
        {'A demo application using '}
        <code>{'@regen-network/api'}</code>
      </h3>
      {client ? (
        <div>
          <MyBalance client={client} />
        </div>
      ) : (
        <p>{'loading...'}</p>
      )}
      <div>
        <h2>Network Settings</h2>
        <label htmlFor="rest">
          {'The current REST endpoint we are using: '}
        </label>
        <input
          name="rest"
          value={rest}
          onChange={({ target: { value } }) => setRest(value)}
        />
        <p>
          {'Switch to another network by switching the node endpoint: '}
          <button onClick={() => setRest(REGEN_LOCAL_REST_ENDPOINT)}>
            {'Regen Local'}
          </button>
          <button onClick={() => setRest(REGEN_MAINNET_REST_ENDPOINT)}>
            {'Regen Mainnet'}
          </button>
          <button onClick={() => setRest(REGEN_REDWOOD_REST_ENDPOINT)}>
            {'Redwood Testnet'}
          </button>
        </p>
        <p>
          Client Status:{' '}
          {error?.message ? error?.message : client ? 'ok' : 'loading...'}
        </p>
      </div>
      <div>
        <h2>{'README Examples'}</h2>
        <LCDCosmos />
        <LCDRegen />
        <MsgCosmos />
        <MsgRegen />
        <RPCCosmos />
        <RPCRegen />
      </div>
    </div>
  );
}
