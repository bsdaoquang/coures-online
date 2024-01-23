/** @format */

import React, { useState } from 'react';
import TitleComponent from './components/TitleComponent';

const App = () => {
	const [num1, setNum1] = useState(0);
	const [num2, setNum2] = useState(0);
	const [result, setResult] = useState(0);

	const handleCalculator = (type) => {
		let res = 0;

		switch (type) {
			case 'cong':
				res = num1 + num2;
				break;
			case 'tru':
				res = num1 - num2;
				break;
			case 'nhan':
				res = num1 * num2;
				break;
			case 'chia':
				res = num1 / num2;
				break;
		}

		setResult(res);
	};

	return (
		<div style={{ padding: 20 }}>
			<div>
				<input
					value={num1}
					onChange={(val) => setNum1(parseFloat(val.target.value))}
					type='number'
					name=''
					id=''
					placeholder='number 1'
				/>
			</div>
			<div style={{ marginTop: 12 }}>
				<input
					type='number'
					value={num2}
					onChange={(val) => setNum2(parseFloat(val.target.value))}
					name=''
					id=''
					placeholder='number 2'
				/>
			</div>
			<div style={{ marginTop: 12 }}>
				<button onClick={() => handleCalculator('cong')}>+</button>
				<button onClick={() => handleCalculator('tru')}>-</button>
				<button onClick={() => handleCalculator('nhan')}>*</button>
				<button onClick={() => handleCalculator('chia')}>/</button>
				<button
					onClick={() => {
						setNum1(0);
						setNum2(0);
						setResult(0);
					}}>
					C
				</button>
			</div>
			<h1>{result.toLocaleString()}</h1>
		</div>
	);
};

export default App;
