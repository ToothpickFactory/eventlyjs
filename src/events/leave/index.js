const axios = require('axios');

module.exports = function (config) {
	function leave (id, userId) {
		let options = {
			method: 'DELETE',
			url: `${config.url}/events/${id}/participants/${userId}`,
			headers: {
				Authorization: 'Bearer ' + config.token
			}
		}
	
		return axios(options).then(res => res.data);
	};

	return leave;
};
