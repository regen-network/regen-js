import { RegenApi } from '@regen-network/api';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

import { MyBalance } from './MyBalance';

const DEVNET_NODE_TM_URL = 'http://devnet.regen.network:26657'; // CORS not enabled on this one yet.
const REDWOOD_NODE_TM_URL = 'http://209.182.218.23:26657';
const HAMBACH_NODE_TM_URL = 'http://hambach.regen.network:26657';

export function App(): React.ReactElement {
  const [tmUrl, setTmUrl] = useState(REDWOOD_NODE_TM_URL);
  const [tmError, setTmError] = useState<Error | undefined>();
  const [api, setApi] = useState<RegenApi | undefined>(undefined);

  useEffect(() => {
    setApi(undefined);
    setTmError(undefined);

    const connect = async (): Promise<void> => {
      const mnemonic = // mnemonic for TEST_ADDRESS_HAMBACH
        'coast scheme approve soccer juice wealth bunker state fetch warrior inmate belt';

      // Inside an async function...
      const signer = await DirectSecp256k1HdWallet.fromMnemonic(
        mnemonic,
        { prefix: 'regen' }, // Replace with your own Bech32 address prefix
      );
      RegenApi.connect({
        connection: {
          type: 'tendermint',
          endpoint: tmUrl,
          signer,
        },
      })
        .then(setApi)
        .catch((err: Error) => {
          /* eslint-disable */
          console.error(err);
          setTmError(err);
        });
    };

    connect();
  }, [tmUrl]);

  return (
    <div>
      <h1>
        Regen Network Demo App using <code>@regen-network/api</code>
      </h1>

      {api ? (
        <div>
          <MyBalance api={api} />
        </div>
      ) : (
        <p>Loading RegenApi...</p>
      )}

			<div>
				<h2>Settings</h2>
				<label htmlFor="tm">
					The current Tendermint RPC endpoint we&apos;re using:
				</label>
				<input
					name="tmUrl"
					value={tmUrl}
					onChange={({ target: { value } }) => setTmUrl(value)}
				/>
				<p>
					Switch to a known public endpoint:
					<button onClick={() => setTmUrl(DEVNET_NODE_TM_URL)}>
						Official Regen Devnet node
					</button>
					<button onClick={() => setTmUrl(REDWOOD_NODE_TM_URL)}>
						Redwood Testnet node
					</button>
					<button onClick={() => setTmUrl(HAMBACH_NODE_TM_URL)}>
						Hambach Testnet node
					</button>
				</p>
        <p>
          Tendermint Client Status:{" "}
          {tmError?.message ? tmError?.message : api ? "ok" : "loading..."}
        </p>
      </div>
    </div>
  );
}
