'use strict';

var rp = require('request-promise-native');

module.exports = function (config) {
	function get(id) {
		var options = {
			method: 'GET',
			uri: config.url + '/events/' + id,
			headers: {
				Authorization: 'Bearer ' + config.token
			},
			json: true
		};

		return rp(options);
	};

	return get;
};