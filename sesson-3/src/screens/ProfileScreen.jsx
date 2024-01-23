/** @format */

import React, { useState } from 'react';

const initValue = {
	name: '',
	username: '',
	email: '',
	address: '',
	phone: '',
	website: '',
	company: '',
};

const ProfileScreen = () => {
	const [profile, setProfile] = useState(initValue);

	const handleChangeValue = (key, val) => {
		const data = { ...profile };

		data[`${key}`] = val;

		setProfile(data);
	};

	const handleUpdateProfile = () => {
		console.log(profile);
	};

	return (
		<div>
			<div
				style={{
					marginBottom: 10,
				}}>
				<input
					style={{
						padding: 8,
						borderRadius: 100,
						border: '1px solid #e0e0e0',
						color: '#676767',
					}}
					type='text'
					value={profile.name}
					onChange={(val) => handleChangeValue('name', val.target.value)}
					name=''
					id=''
				/>
			</div>
			<div
				style={{
					marginBottom: 10,
				}}>
				<input
					style={{
						padding: 8,
						borderRadius: 100,
						border: '1px solid #e0e0e0',
						color: '#676767',
					}}
					type='text'
					value={profile.username}
					onChange={(val) => handleChangeValue('username', val.target.value)}
					name=''
					id=''
				/>
			</div>
			<div
				style={{
					marginBottom: 10,
				}}>
				<input
					style={{
						padding: 8,
						borderRadius: 100,
						border: '1px solid #e0e0e0',
						color: '#676767',
					}}
					type='text'
					value={profile.email}
					onChange={(val) => handleChangeValue('email', val.target.value)}
					name=''
					id=''
				/>
			</div>
			<div
				style={{
					marginBottom: 10,
				}}>
				<input
					style={{
						padding: 8,
						borderRadius: 100,
						border: '1px solid #e0e0e0',
						color: '#676767',
					}}
					type='text'
					value={profile.address}
					onChange={(val) => handleChangeValue('address', val.target.value)}
					name=''
					id=''
				/>
			</div>

			<button onClick={handleUpdateProfile}>Login</button>
		</div>
	);
};

export default ProfileScreen;
