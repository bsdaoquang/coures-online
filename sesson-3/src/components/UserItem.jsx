/** @format */

import React from 'react';

const UserItem = (props) => {
	const { email, username, color } = props;

	return (
		<div>
			<h3 style={{ color: color ?? 'coral' }}>{username}</h3>
			<p style={{ margin: 0, padding: 0 }}>{email}</p>
		</div>
	);
};

export default UserItem;
