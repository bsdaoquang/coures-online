/** @format */

import React, { useState } from 'react';
import ButtonComponent from './components/ButtonComponent';
import ResultComponent from './components/ResultComponent';

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<div
			style={{
				padding: 20,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<ButtonComponent
				text={'+'}
				onChange={(val) => {
					setCount(val);
				}}
				count={count}
			/>
			<ResultComponent text={count} />
			<ButtonComponent
				text={'-'}
				count={count}
				onChange={(val) => setCount(val)}
			/>
		</div>
	);
};

export default App;
