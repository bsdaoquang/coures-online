/** @format */

import React from 'react';

const ButtonComponent = ({ text, count, onChange }) => {
	const handleChangeNumber = () => {
		if (text === '+') {
			onChange((count += 1));
		} else {
			onChange((count -= 1));
		}
	};

	return (
		<button
			style={{
				width: 60,
				height: 60,
				borderRadius: 12,
				backgroundColor: 'coral',
				fontWeight: 'bold',
				fontSize: 48,
				color: 'white',
				border: 'none',
			}}
			onClick={handleChangeNumber}>
			{text}
		</button>
	);
};

export default ButtonComponent;
