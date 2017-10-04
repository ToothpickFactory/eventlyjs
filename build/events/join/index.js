'use strict';

var axios = require('axios');

module.exports = function (config) {
	function join(id, participant) {
		var options = {
			method: 'POST',
			url: config.url + '/events/' + id + '/participants',
			headers: {
				Authorization: 'Bearer ' + config.token
			},
			data: participant
		};

		return axios(options).then(function (res) {
			return res.data;
		});
	};

	return join;
};