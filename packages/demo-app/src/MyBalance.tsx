import { RegenApi } from '@regen-network/api';
import { QueryAllBalancesResponse } from '@regen-network/api/lib/generated/cosmos/bank/v1beta1/query';
import { QueryClientImpl } from '@regen-network/api/lib/generated/cosmos/bank/v1beta1/query';
import React, { useEffect, useState } from 'react';

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
