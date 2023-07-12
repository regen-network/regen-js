import React, { useState } from 'react';

import { Registry } from '@cosmjs/proto-signing';
import { AminoTypes, SigningStargateClient } from '@cosmjs/stargate';
import {
  cosmos,
  cosmosAminoConverters,
  cosmosProtoRegistry,
  regenAminoConverters,
  regenProtoRegistry,
  regen,
} from '@regen-network/api';

export function MsgMultiple(): React.ReactElement {
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

    // declare registry and include both cosmos and regen protobuf types
    const registry = new Registry([
      ...cosmosProtoRegistry,
      ...regenProtoRegistry,
    ]);

    // initialize signing client and include both cosmos and regen amino types
    const signingClient = await SigningStargateClient.connectWithSigner(
      'http://redwood.regen.network:26657',
      offlineSigner,
      {
        registry,
        aminoTypes: new AminoTypes({
          ...cosmosAminoConverters,
          ...regenAminoConverters,
        }),
      },
    );

    // compose message using cosmos client from @regen-network/api
    const msg1 = cosmos.bank.v1beta1.MessageComposer.withTypeUrl.send({
      amount: [
        {
          denom: 'uregen',
          amount: '10000',
        },
      ],
      toAddress: 'regen1df675r9vnf7pdedn4sf26svdsem3ugavgxmy46',
      fromAddress: account.address,
    });

    // compose message using regen client from @regen-network/api
    const msg2 = regen.ecocredit.v1.MessageComposer.withTypeUrl.createProject({
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

    // sign and broadcast transaction that includes both messages
    await signingClient
      .signAndBroadcast(account.address, [msg1, msg2], fee)
      .then(setResult)
      .catch(setError);
  };

  return (
    <div>
      <h3>{'Msg Multiple > cosmos and regen messages'}</h3>
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
