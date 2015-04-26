'use strict';
var childProcess = require('child_process');
var resolveFrom = require('resolve-from');

module.exports = function (pth, opts, cb) {
	if (typeof pth !== 'string') {
		throw new Error('path required');
	}

	if (typeof opts !== 'object') {
		cb = opts;
		opts = {};
	}

	var gulpBinPath = opts.bin || resolveFrom(pth, 'gulp/bin/gulp');

	childProcess.execFile(gulpBinPath, ['--tasks-simple'], {cwd: pth}, function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		var ret = stdout.trim();

		cb(null, ret ? ret.split('\n') : []);
	});
};
