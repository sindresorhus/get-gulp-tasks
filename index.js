'use strict';
var childProcess = require('child_process');
var resolveFrom = require('resolve-from');
var pify = require('pify');
var Promise = require('pinkie-promise');

module.exports = function (pth) {
	if (typeof pth !== 'string') {
		pth = process.cwd();
	}

	var gulpBinPath;

	try {
		gulpBinPath = resolveFrom(pth, 'gulp/bin/gulp');
	} catch (err) {
		return Promise.reject(err);
	}

	return pify(childProcess.execFile, Promise)(gulpBinPath, ['--tasks-simple'], {cwd: pth})
		.then(function (stdout) {
			var ret = stdout.trim();

			return ret ? ret.split('\n') : [];
		});
};
