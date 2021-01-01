# get-gulp-tasks

> Get the gulp tasks from a gulp project

It spawns the local gulp binary in the specified directory and fetches the gulp tasks.


## Install

```
$ npm install --save get-gulp-tasks
```


## Usage

Imagine a `gulpfile.js` in `./gulp-project`:

```js
const gulp = require('gulp');

gulp.task('default', () => {});
gulp.task('test', () => {});
```

You can get its tasks with:

```js
const getGulpTasks = require('get-gulp-tasks');

getGulpTasks('gulp-project').then(tasks => {
	console.log(tasks);
	//=> ['default', 'test']
});
```


## API

### getGulpTasks([path])

Returns a promise.

#### path

Type: `string`  
Default: `process.cwd()`

Path to the directory of your gulp project.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
