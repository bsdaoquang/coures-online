/** @format */

import React from 'react';
import { users } from '../data/users';

const UserItem = (props) => {
	const { id } = props;

	const user = users.find((element) => element.id === id);

	if (user) {
		return <p>{user.name}</p>;
	} else {
		return <></>;
	}
};

export default UserItem;
