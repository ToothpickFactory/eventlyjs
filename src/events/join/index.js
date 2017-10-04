const axios = require('axios');

module.exports = function (config) {
	function join (id, participant) {
		let options = {
			method: 'POST',
			url: `${config.url}/events/${id}/participants`,
			headers: {
				Authorization: 'Bearer ' + config.token
			},
			data: participant
		}
	
		return axios(options).then(res => res.data);
	};

	return join;
};
