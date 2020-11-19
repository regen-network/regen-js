import { RegenApi } from '@regennetwork/api';
import React, { useEffect, useState } from 'react';

import { Block } from './Block';

export function App(): React.ReactElement {
	const [grpcUrl, setGrpcUrl] = useState('18.223.151.187:9090');
	const [tmUrl, setTmUrl] = useState('http://18.223.151.187:26657');

	const [regenApi, setRegenApi] = useState<RegenApi | undefined>(undefined);

	useEffect(() => {
		RegenApi.connect({ grpcUrl, tendermintUrl: tmUrl })
			.then(setRegenApi)
			.catch(console.error);
	}, [grpcUrl, tmUrl]);

	return (
		<div>
			<h1>
				Regen Network Demo App using <code>@regennetwork/api</code>
			</h1>
			<div>
				<h2>Settings</h2>
				<label htmlFor="grpcUrl">gRPC URL:</label>
				<input
					name="grpc"
					value={grpcUrl}
					onChange={({ target: { value } }) => setGrpcUrl(value)}
				/>
				<label htmlFor="tm">Tendermint URL:</label>
				<input
					name="tmUrl"
					value={tmUrl}
					onChange={({ target: { value } }) => setTmUrl(value)}
				/>
			</div>

			{regenApi ? (
				<div>
					<Block />
				</div>
			) : (
				<p>Loading RegenApi...</p>
			)}
		</div>
	);
}
