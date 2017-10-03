'use strict';

var rp = require('request-promise-native');

module.exports = function (config) {
	function remove(id, event) {
		var options = {
			method: 'DELETE',
			uri: config.url + '/events/' + id,
			headers: {
				Authorization: 'Bearer ' + config.token
			},
			json: true
		};

		return rp(options);
	};

	return remove;
};