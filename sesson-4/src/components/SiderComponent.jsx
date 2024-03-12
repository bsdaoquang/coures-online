/** @format */

import { Layout, Menu, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const SiderComponent = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = async () => {
		const api = `https://jsonplaceholder.typicode.com/users`;
		setIsLoading(true);
		try {
			const res = await axios.get(api);

			if (res && res.status === 200 && res.data) {
				const items = [];

				res.data.forEach((item) =>
					items.push({
						key: item.id,
						label: <Link to={`?uid=${item.id}`}>{item.name}</Link>,
					})
				);

				console.log(items);
				setUsers(items);
			}
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	return (
		<Sider theme='light'>
			<Menu items={users} />
		</Sider>
	);
};

export default SiderComponent;
