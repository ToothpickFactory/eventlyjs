'use strict';

var axios = require('axios');

module.exports = function (config) {
	function remove(id, event) {
		var options = {
			method: 'DELETE',
			url: config.url + '/events/' + id,
			headers: {
				Authorization: 'Bearer ' + config.token
			}
		};

		return axios(options).then(function (res) {
			return res.data;
		});
	};

	return remove;
};