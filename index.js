'use strict';
const execa = require('execa');

module.exports = cwd => {
	if (typeof cwd !== 'string') {
		cwd = process.cwd();
	}

	return execa('gulp', ['--tasks-simple'], {cwd})
		.then(x => x.stdout ? x.stdout.split('\n') : []);
};
