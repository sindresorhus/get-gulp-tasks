'use strict';
var childProcess = require('child_process');
var resolveFrom = require('resolve-from');

module.exports = function (pth, cb) {
	if (typeof pth !== 'string') {
		throw new Error('path required');
	}

	var gulpBinPath = resolveFrom(pth, 'gulp/bin/gulp.js');

	childProcess.execFile(gulpBinPath, ['--tasks-simple'], {cwd: pth}, function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, stdout.trim().split('\n'));
	});
};
