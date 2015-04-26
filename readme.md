# get-gulp-tasks [![Build Status](https://travis-ci.org/sindresorhus/get-gulp-tasks.svg?branch=master)](https://travis-ci.org/sindresorhus/get-gulp-tasks)

> Get the gulp tasks from a gulp project

It spawns the local gulp binary in the specified directory and fetches the gulp tasks.


## Install

```
$ npm install --save get-gulp-tasks
```


## Usage

Imagine a `gulpfile.js` in `./gulp-project`:

```js
var gulp = require('gulp');

gulp.task('default', function () {});
gulp.task('test', function () {});
```

You can get its tasks with:

```js
var getGulpTasks = require('get-gulp-tasks');

getGulpTasks('gulp-project', function (err, tasks) {
	console.log(tasks);
	//=> ['default', 'test']
});
```


## API

### getGulpTasks(path, callback)

#### path

*Required*  
Type: `string`

Path to the directory of your gulp project.

#### callback(err, tasks)

*Required*  
Type: `function`


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
