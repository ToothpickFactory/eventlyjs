'use strict';

var axios = require('axios');

function composeEvent(client_id, _event) {
	_event.client_id = client_id;
	return _event;
}

module.exports = function (config) {
	function create(_event) {
		var options = {
			method: 'POST',
			url: config.url + '/events',
			data: composeEvent(config.client_id, _event),
			headers: {
				Authorization: 'Bearer ' + config.token
			}
		};

		return axios(options).then(function (res) {
			return res.data;
		});
	};

	return create;
};