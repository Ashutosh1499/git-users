import { useEffect, useState } from 'react';
import './App.css';
import Search from './Components/Search';
import UserList from './Components/UserList';
import Githubservices from './Utils/Githubservices';
import { fetchData } from './Utils/fetchData';

function App() {
	const [users, setUsers] = useState([]);

	const searchUsers = async query => {
		try {
			// const searchResults = await GitHubService.searchUsers(query);
			const searchResults = await Githubservices.searchUsers(query);
			setUsers(searchResults);
		} catch (error) {
			// Handle error
		}
	};
	useEffect(() => {
		const fetchRandomData = async () => {
			try {
				const response = await fetchData('', '');
				setUsers(response);
			} catch (error) {
				console.log(error);
			}
		};
		fetchRandomData();
	}, []);

	return (
		<div>
			<Search onSearch={searchUsers} />
			{users.length === 0 ? (
				<div style={{ width: '100%', textAlign: 'center' }}>
					No User with this name
				</div>
			) : (
				<UserList users={users} />
			)}
		</div>
	);
}

export default App;
