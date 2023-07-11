import React, { useState } from 'react';

import { cosmos, getSigningCosmosClient } from '@regen-network/api';

export function MsgCosmos(): React.ReactElement {
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
    const signingClient = await getSigningCosmosClient({
      rpcEndpoint: 'http://redwood.regen.network:26657',
      signer: offlineSigner,
    });

    // compose message using cosmos client from @regen-network/api
    const msg = cosmos.bank.v1beta1.MessageComposer.withTypeUrl.send({
      amount: [
        {
          denom: 'uregen',
          amount: '10000',
        },
      ],
      toAddress: 'regen1df675r9vnf7pdedn4sf26svdsem3ugavgxmy46',
      fromAddress: account.address,
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
      <h3>{'Msg Cosmos > cosmos bank send'}</h3>
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
