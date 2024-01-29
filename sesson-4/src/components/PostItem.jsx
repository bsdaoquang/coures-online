/** @format */

import React from 'react';

import { styles } from '../styles';
import { posts } from '../data/posts';

const PostItem = (props) => {
	const { title, description, color, index, score } = props;

	const titleStyle = {
		// color,
		fontWeight: 'bold',
	};

	const handleResult = (num) => {
		let xeploai = ``;

		switch (true) {
			case num <= 3:
				xeploai = 'Kém';
				break;
			case 3 < num && num <= 5:
				xeploai = `Yếu`;
				break;
			case 5 < num && num <= 7:
				xeploai = `Trung bình`;
				break;
			case 7 < num && num <= 8:
				xeploai = `Khá`;
				break;
			default:
				xeploai = `Giỏi`;
				break;
		}

		return xeploai;
	};

	return (
		<div>
			<h4>
				{index} {title}
			</h4>
			<p>
				{score.toFixed(1)}{' '}
				<span
					style={{
						color: score > 5.0 ? 'green' : 'red',
					}}>
					{score > 5.0 ? 'Đậu' : 'Rớt'} - {handleResult(score)}
				</span>
			</p>
		</div>
	);
};

export default PostItem;
