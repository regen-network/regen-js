import { RegenApi } from '@regen-network/api';
import {
  QueryAllBalancesResponse,
  QueryAllBalancesRequest,
} from '@regen-network/api/lib/generated/cosmos/bank/v1beta1/query';
import { QueryClientImpl } from '@regen-network/api/lib/generated/cosmos/bank/v1beta1/query';
// import { MsgSendRequest } from '@regen-network/api/lib/generated/regen/ecocredit/v1alpha1/tx';
import { MsgSend } from '@regen-network/api/lib/generated/cosmos/bank/v1beta1/tx';
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

  const sign = async (): Promise<Uint8Array | undefined> => {
    const mnemonic = // mnemonic for TEST_ADDRESS_HAMBACH
      'coast scheme approve soccer juice wealth bunker state fetch warrior inmate belt';

    // Inside an async function...
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(
      mnemonic,
      { prefix: 'regen' }, // Replace with your own Bech32 address prefix
    );
    const [firstAccount] = await signer.getAccounts();
    const fromAddress = firstAccount.address;
    console.log(fromAddress);
    const msg = MsgSend.fromPartial({
      fromAddress,
      toAddress: 'regen1gtlfmszmhv3jnlqx6smt9n6rcwsfydrhznqyk9',
      amount: [
        {
          denom: 'uregen',
          amount: '10000',
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
    const txBytes = await api.connection.msgClient?.sign(
      fromAddress,
      msg,
      fee,
      '',
    );
    console.log('txBytes', txBytes);
    // if (txBytes) {
    //   const hash = await api.connection.msgClient?.broadcast(txBytes);
    //   console.log(hash);
    // }

    return txBytes;
  };

  useEffect(() => {
    sign();
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
