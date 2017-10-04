const axios = require('axios');

module.exports = function (config) {
	function get (id) {
		let options = {
			method: 'GET',
			url: `${config.url}/events/${id}`,
			headers: {
				Authorization: 'Bearer ' + config.token
			}
		}
	
		return axios(options).then(res => res.data);
	};

	return get;
};
