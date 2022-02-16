import { RegenApi } from '@regen-network/api';
import { QueryAllBalancesResponse } from '@regen-network/api/lib/generated/cosmos/bank/v1beta1/query';
import { QueryClientImpl } from '@regen-network/api/lib/generated/cosmos/bank/v1beta1/query';
import { MsgSend } from '@regen-network/api/lib/generated/regen/ecocredit/v1alpha1/tx';
import React, { useEffect, useState } from 'react';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

interface MyBalanceProps {
  api: RegenApi;
}

export function MyBalance(props: MyBalanceProps): React.ReactElement {
  const { api } = props;

  const [address, setAddress] = useState(
    'regen1df675r9vnf7pdedn4sf26svdsem3ugavgxmy46',
  );
  const [balance, setBalance] = useState<
    QueryAllBalancesResponse | undefined
  >();

  // POC: just testing that we can sign and broadcast txs with regen specific msgs
  const sign = async (): Promise<Uint8Array | undefined> => {
    const mnemonic =
      'coast scheme approve soccer juice wealth bunker state fetch warrior inmate belt';

    const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
      prefix: 'regen',
    });
    const [firstAccount] = await signer.getAccounts();
    const fromAddress = firstAccount.address;

    // const msg = MsgCreateBatch.fromPartial({
    //   metadata: new Uint8Array(),
    //   classId: 'C01',
    //   issuer: fromAddress,
    //   startDate: new Date('2019-01-01'),
    //   endDate: new Date('2021-01-01'),
    //   projectLocation: 'US',
    //   issuance: [
    //     {
    //       recipient: fromAddress,
    //       tradableAmount: '100000',
    //     },
    //   ],
    // });

    const msg = MsgSend.fromPartial({
      sender: fromAddress,
      recipient: 'regen1rhvx7kpxtd0em0t2u87xu5a3xc9gs7evvr5v29',
      credits: [
        {
          batchDenom: 'C01-20180101-20200101-001',
          tradableAmount: '1',
          retiredAmount: '1',
          retirementLocation: 'US',
        },
        {
          batchDenom: 'C01-20190101-20210101-002',
          tradableAmount: '1',
          retiredAmount: '1',
          retirementLocation: 'FR',
        },
      ],
    });
    const msg2 = MsgSend.fromPartial({
      sender: fromAddress,
      recipient: 'regen1rhvx7kpxtd0em0t2u87xu5a3xc9gs7evvr5v29',
      credits: [
        {
          batchDenom: 'C01-20180101-20200101-001',
          tradableAmount: '2',
          retiredAmount: '1',
          retirementLocation: 'US',
        },
        {
          batchDenom: 'C01-20190101-20210101-002',
          tradableAmount: '2',
          retiredAmount: '1',
          retirementLocation: 'FR',
        },
      ],
    });

    const fee = {
      amount: [
        {
          denom: 'uregen',
          amount: '5000', //TODO: what should fee and gas be?
        },
      ],
      gas: '200000',
    };
    const txBytes = await api.msgClient?.sign(
      fromAddress,
      [msg, msg2],
      fee,
      '',
    );
    // eslint-disable-next-line
    console.log('txBytes', txBytes);

    if (txBytes) {
      const hash = await api.msgClient?.broadcast(txBytes);
      // eslint-disable-next-line
      console.log('hash', hash);
    }

    return;
  };

  useEffect(() => {
    const queryClient: QueryClientImpl = new QueryClientImpl(api.queryClient);
    queryClient
      .AllBalances({ address })
      .then(setBalance)
      /* eslint-disable */
      .catch(console.error);
  }, [address, api.queryClient]);

  return (
    <div>
      <button onClick={sign}>SIGN</button>
      <h2>Balance Checker</h2>
      <label htmlFor="tm">My address:</label>
      <input
        name="tmUrl"
        value={address}
        onChange={({ target: { value } }) => setAddress(value)}
      />
      <br />
      My balance is:{' '}
      <code>{balance ? JSON.stringify(balance) : '(loading...)'}</code>
    </div>
  );
}
