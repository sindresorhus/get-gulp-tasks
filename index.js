'use strict';
var childProcess = require('child_process');
var resolveFrom = require('resolve-from');
var pify = require('pify');
var Promise = require('pinkie-promise');

module.exports = function (pth) {
	if (typeof pth !== 'string') {
		pth = process.cwd();
	}

	var gulpBinPath = resolveFrom(pth, 'gulp/bin/gulp');
	var args = [gulpBinPath, '--tasks-simple'];

	return pify(childProcess.execFile, Promise)(process.execPath, args, {cwd: pth})
		.then(function (stdout) {
			var ret = stdout.trim();

			return ret ? ret.split('\n') : [];
		});
};
