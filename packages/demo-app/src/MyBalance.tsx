import type { RegenApi } from '@regennetwork/api';
import type { QueryAllBalancesResponse } from '@regennetwork/api/lib/generated/cosmos/bank/v1beta1/query';
import { QueryClientImpl } from '@regennetwork/api/lib/generated/cosmos/bank/v1beta1/query';
import React, { useEffect, useState } from 'react';

interface MyBalanceProps {
	api: RegenApi;
}

export function MyBalance(props: MyBalanceProps): React.ReactElement {
	const { api } = props;

	const [address, setAddress] = useState(
		'regen:1j9h8dpu7ah2hl9rg7ycu0e64kh90rrlpk9kagz'
	);
	const [balance, setBalance] = useState<
		QueryAllBalancesResponse | undefined
	>();

	useEffect(() => {
		const impl = new QueryClientImpl(api.connection);
		impl.AllBalances({
			address,
		})
			.then(setBalance)
			.catch(console.error);
	}, [address, api.connection]);

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
