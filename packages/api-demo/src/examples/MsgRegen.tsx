import React, { useState } from 'react';

import { regen, getSigningRegenClient } from '@regen-network/api';

export function MsgRegen(): React.ReactElement {
  const [result, setResult] = useState<any | undefined>(undefined);
  const [error, setError] = useState<{ message: string } | undefined>(
    undefined,
  );

  const executeExample = async (): Promise<void> => {
    // NOTE: make sure you have a src/global.d.ts file within your project
    // that includes "interface Window extends KeplrWindow"
    const { keplr } = window;

    if (!keplr) {
      setError({ message: 'keplr not found' });
      return; // exit with error
    }

    // get offline signer from keplr wallet
    const offlineSigner = keplr.getOfflineSigner('regen-redwood-1');

    // get first account (the active account) from offline signer
    const [account] = await offlineSigner.getAccounts();

    // initialize signing client for signing transactions
    const signingClient = await getSigningRegenClient({
      rpcEndpoint: 'http://redwood.regen.network:26657',
      signer: offlineSigner,
    });

    // compose message using regen client from @regen-network/api
    const msg = regen.ecocredit.v1.MessageComposer.withTypeUrl.createProject({
      admin: account.address,
      classId: 'C01',
      metadata:
        'regen:13toVgf5UjYBz6J29x28pLQyjKz5FpcW3f4bT5uRKGxGREWGKjEdXYG.rdf',
      jurisdiction: 'US-WA',
      referenceId: 'ABC-123',
    });

    // define default fee
    const fee = {
      amount: [
        {
          denom: 'uregen',
          amount: '5000',
        },
      ],
      gas: '100000',
    };

    // sign and broadcast transaction that includes message
    await signingClient
      .signAndBroadcast(account.address, [msg], fee)
      .then(setResult)
      .catch(setError);
  };

  return (
    <div>
      <h3>{'Msg Regen > regen ecocredit create project'}</h3>
      <div>
        <button onClick={executeExample}>{'execute'}</button>
      </div>
      <br />
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
