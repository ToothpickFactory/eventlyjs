'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = eventlyjs;
var jwt = require('jsonwebtoken');
var events = require('./events');

function eventlyjs(config) {
	var decoded = jwt.decode(config.token);
	var _config = Object.assign({}, config, { client_id: decoded._id });
	return {
		events: events(_config)
	};
}