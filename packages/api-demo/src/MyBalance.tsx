import { QueryAllBalancesResponseSDKType } from '@regen-network/api/cosmos/bank/v1beta1/query';
import React, { useState } from 'react';

export function MyBalance({ client }: { client: any }): React.ReactElement {
  const [address, setAddress] = useState(
    'regen1df675r9vnf7pdedn4sf26svdsem3ugavgxmy46',
  );
  const [balance, setBalance] = useState<
    QueryAllBalancesResponseSDKType | undefined
  >();
  const [error, setError] = useState<string | undefined>(undefined);
  const handleSubmit = async (): Promise<any> => {
    setError(undefined);
    setBalance(undefined);
    await client.cosmos.bank.v1beta1
      .allBalances({ address })
      .then(setBalance)
      .catch((err: any) => setError(err.message));
  };

  return (
    <div>
      <h2>{'My Balance'}</h2>
      <label htmlFor="address">{'My address: '}</label>
      <input
        name="address"
        value={address}
        onChange={({ target: { value } }) => setAddress(value)}
      />
      <button onClick={() => handleSubmit()}>submit</button>
      <br />
      <br />
      {'My balance: '}
      <code>
        {balance ? (
          JSON.stringify(balance)
        ) : error ? (
          <span>{error}</span>
        ) : (
          '...'
        )}
      </code>
    </div>
  );
}
