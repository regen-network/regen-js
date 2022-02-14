import { RegenApi } from '@regen-network/api';
import {
  QueryAllBalancesResponse,
  QueryAllBalancesRequest,
} from '@regen-network/api/lib/generated/cosmos/bank/v1beta1/query';
import { QueryClientImpl } from '@regen-network/api/lib/generated/cosmos/bank/v1beta1/query';
import { MsgCreateClass } from '@regen-network/api/lib/generated/regen/ecocredit/v1alpha1/tx';
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

    const msg = MsgCreateClass.fromPartial({
      admin: fromAddress,
      issuers: [fromAddress],
      metadata: new Uint8Array(),
      creditTypeName: 'carbon',
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
    const txBytes = await api.connection.msgClient?.sign(
      fromAddress,
      msg,
      fee,
      '',
    );
    // eslint-disable-next-line
    console.log('txBytes', txBytes);

    if (txBytes) {
      const hash = await api.connection.msgClient?.broadcast(txBytes);
      // eslint-disable-next-line
      console.log('hash', hash);
    }

    return;
  };

  useEffect(() => {
    // sign();
    const queryClient: QueryClientImpl = new QueryClientImpl(
      api.connection.queryClient,
    );
    queryClient
      .AllBalances(QueryAllBalancesRequest.fromPartial({ address }))
      .then(setBalance)
      /* eslint-disable */
      .catch(console.error);
  }, [address, api.connection.queryClient]);

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
