'use strict';

var axios = require('axios');

module.exports = function (config) {
	function leave(id, userId) {
		var options = {
			method: 'DELETE',
			url: config.url + '/events/' + id + '/participants/' + userId,
			headers: {
				Authorization: 'Bearer ' + config.token
			}
		};

		return axios(options).then(function (res) {
			return res.data;
		});
	};

	return leave;
};