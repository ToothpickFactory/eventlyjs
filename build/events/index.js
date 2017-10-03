'use strict';

var create = require('./create');
var search = require('./search');
var get = require('./get');
var update = require('./update');
var remove = require('./remove');
var join = require('./join');
var leave = require('./leave');

module.exports = function (config) {
	return {
		create: create(config),
		search: search(config),
		get: get(config),
		update: update(config),
		remove: remove(config),
		join: join(config),
		leave: leave(config)
	};
};