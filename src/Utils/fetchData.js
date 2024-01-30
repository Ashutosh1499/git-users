const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchData = async (endpoint, type) => {
	let fetchURL = '';
	switch (type) {
		case 'userData':
			fetchURL = `${BASE_URL}/${endpoint}`;
			break;
		case 'userRepo':
			fetchURL = `${BASE_URL}/${endpoint}/repos`;
			break;
		default:
			fetchURL = BASE_URL;
			break;
	}
	try {
		const response = await fetch(fetchURL);
		if (!response.ok) {
			throw new Error(`Failed to fetch data. Status: ${response.status}`);
		}
		return response.json();
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
};
