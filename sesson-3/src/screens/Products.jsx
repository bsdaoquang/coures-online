/** @format */

import React, { useState } from 'react';
import { users } from '../data/users';
import TotalUsers from '../components/TotalUsers';
import ListUsers from '../components/ListUsers';

const Products = () => {
	const [usersList, setUsersList] = useState(users);

	const handleRemoveUser = (index) => {
		const data = [...usersList];

		data.splice(index, 1);

		setUsersList(data);
	};
	return (
		<div>
			<TotalUsers users={usersList} />
			<ListUsers
				users={usersList}
				handleRemoveUser={(index) => handleRemoveUser(index)}
			/>
		</div>
	);
};

export default Products;
