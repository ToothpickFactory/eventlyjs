'use strict';

var axios = require('axios');

module.exports = function (config) {
	function get(id) {
		var options = {
			method: 'GET',
			url: config.url + '/events/' + id,
			headers: {
				Authorization: 'Bearer ' + config.token
			}
		};

		return axios(options).then(function (res) {
			return res.data;
		});
	};

	return get;
};