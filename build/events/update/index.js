'use strict';

var axios = require('axios');

function composeEvent(client_id, event) {
	event.client_id = client_id;
	return event;
}

module.exports = function (config) {
	function update(id, event) {
		var options = {
			method: 'PUT',
			url: config.url + '/events/' + id,
			headers: {
				Authorization: 'Bearer ' + config.token
			},
			data: composeEvent(config.client_id, event)
		};

		return axios(options).then(function (res) {
			return res.data;
		});
	};

	return update;
};