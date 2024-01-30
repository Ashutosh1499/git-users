// UserList.js

import React, { useEffect, useState } from 'react';
import UserDetails from './UserDetails';

const UserList = ({ users }) => {
	const [selectedUser, setSelectedUser] = useState(-1);
	useEffect(() => {
		setSelectedUser(-1);
	}, [users]);
	return (
		<>
			<h2 style={{ textAlign: 'center' }}>GitHub Users</h2>
			<div className='fb usersContainer'>
				<div className='userListGrid'>
					{users.map((user, index) => (
						<div
							className='eachUser fb items-center justify-between'
							key={user.id}
							onClick={() => setSelectedUser(index)}>
							<img src={user.avatar_url} alt='' />
							{user.login}
						</div>
					))}
				</div>
				<div className='UserDetails'>
					{selectedUser !== -1 ? (
						<UserDetails
							setSelectedUser={setSelectedUser}
							login={users[selectedUser].login}
						/>
					) : (
						''
					)}
				</div>
			</div>
		</>
	);
};

export default UserList;
