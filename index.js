'use strict';
var childProcess = require('child_process');
var resolveFrom = require('resolve-from');

module.exports = function (pth, cb) {
	if (typeof pth !== 'string') {
		cb = pth;
		pth = process.cwd();
	}

	var gulpBinPath;

	try {
		gulpBinPath = resolveFrom(pth, 'gulp/bin/gulp');
	} catch (err) {
		setImmediate(cb, err);
		return;
	}

	childProcess.execFile(gulpBinPath, ['--tasks-simple'], {cwd: pth}, function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		var ret = stdout.trim();

		cb(null, ret ? ret.split('\n') : []);
	});
};
