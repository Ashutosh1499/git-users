// GitHubService.js

import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

const Githubservices = {
	searchUsers: async query => {
		try {
			const response = await octokit.search.users({
				q: query,
			});
			return response.data.items;
		} catch (error) {
			console.error('Error searching GitHub users:', error);
			throw error;
		}
	},
};

export default Githubservices;
