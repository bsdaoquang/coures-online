/** @format */

import React from 'react';
import { users } from '../data/users';
import UserItem from './UserItem';

const PostItem = (props) => {
	const { item } = props;

	return (
		<div>
			<h2
				style={{
					color: item.id % 2 === 0 ? 'coral' : 'white',
				}}>{`${item.id} ${item.title}`}</h2>
			<p>{item.body}</p>
			<UserItem id={item.userId} />
		</div>
	);
};

export default PostItem;
