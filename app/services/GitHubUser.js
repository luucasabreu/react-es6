var axios = require('axios');

export default {
	getByUsername(username) {
		return axios.get('https://api.github.com/users/' + username);
	},

	getReposByUsername(username) {
		return axios.get(`https://api.github.com/users/${username}/repos`);
	}
};