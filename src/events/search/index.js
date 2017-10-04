const axios = require('axios');

module.exports = function (config) {
	function search (query) {
		let options = {
			method: 'GET',
			url: `${config.url}/events`,
			params: query,
			headers: {
				Authorization: 'Bearer ' + config.token
			}
		}
		
		return axios(options).then(res => res.data);
	};

	return search;
};