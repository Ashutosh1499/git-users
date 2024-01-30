import React, { useEffect, useState } from 'react';
import { fetchData } from '../Utils/fetchData';
import UserRepo from './UserRepo';

function UserDetails({ setSelectedUser, login }) {
	const [userData, setUserData] = useState();
	const [repo, setRepo] = useState();
	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const userData = await fetchData(login, 'userData');
				setUserData(userData);
				const userRepo = await fetchData(login, 'userRepo');
				setRepo(userRepo.slice(0, 5));
			} catch (error) {
				console.log(error);
			}
		};
		fetchUserData();
	});
	return (
		<>
			<div className='userDetails'>
				{userData ? (
					<>
						<button className='crossButton' onClick={() => setSelectedUser(-1)}>
							X
						</button>
						<p className='userImage fb items-center justify-center'>
							<img src={userData.avatar_url} alt='' />
						</p>
						<p className='userName detail fb items-center justify-between'>
							<span>{userData.name}</span>
							<span className='location fb items-center'>
								<img
									src='https://www.svgrepo.com/show/127575/location-sign.svg'
									alt=''
								/>
								{userData.location}
							</span>
						</p>
						{userData.bio !== null ? (
							<p className='lightItalic detail'>{userData.bio}</p>
						) : (
							''
						)}
						<p className='detail fb items-center justify-between'>
							<span>{userData.followers} Followers</span>
							<span>{userData.following} Following</span>
						</p>
						<UserRepo repo={repo} />
						<p className='detail lightItalic'>
							Active since - {userData.created_at.slice(0, 4)}
						</p>
						<p className='fb items-center justify-center'>
							<a href={userData.html_url} target='_blank' rel='noreferrer'>
								<button>Link to Profile</button>
							</a>
						</p>
					</>
				) : (
					''
				)}
			</div>
		</>
	);
}

export default UserDetails;
