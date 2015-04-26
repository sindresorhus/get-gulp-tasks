'use strict';
var path = require('path');
var test = require('ava');
var getGulpTasks = require('./');

test(function (t) {
	t.plan(3);

	getGulpTasks(path.join(__dirname, 'fixture'), function (err, tasks) {
		t.assert(!err, err);
		t.assert(tasks[0] === 'default');
		t.assert(tasks[1] === 'test');
	});
});
