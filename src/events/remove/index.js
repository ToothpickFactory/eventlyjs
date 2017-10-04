const axios = require('axios');

module.exports = function (config) {
	function remove (id, event) {
		let options = {
			method: 'DELETE',
			url: `${config.url}/events/${id}`,
			headers: {
				Authorization: 'Bearer ' + config.token
			}
		}
	
		return axios(options).then(res => res.data);
	};

	return remove;
};
