'use strict';

var rp = require('request-promise-native');

module.exports = function (config) {
	function search(query) {
		var options = {
			method: 'GET',
			uri: config.url + '/events',
			qs: query,
			headers: {
				Authorization: 'Bearer ' + config.token
			},
			json: true
		};

		return rp(options);
	};

	return search;
};