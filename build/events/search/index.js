'use strict';

var axios = require('axios');

module.exports = function (config) {
	function search(query) {
		var options = {
			method: 'GET',
			url: config.url + '/events',
			params: query,
			headers: {
				Authorization: 'Bearer ' + config.token
			}
		};

		return axios(options).then(function (res) {
			return res.data;
		});
	};

	return search;
};