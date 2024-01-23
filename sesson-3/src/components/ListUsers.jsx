/** @format */

import React from 'react';

const ListUsers = ({ users, handleRemoveUser }) => {
	return (
		<div>
			<ul>
				{users.map((item, index) => (
					<li>
						<p>
							{item.name}{' '}
							<button onClick={() => handleRemoveUser(index)}>X</button>
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListUsers;
