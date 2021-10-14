# get-gulp-tasks

> Get the Gulp tasks from a Gulp project

It spawns the local gulp binary in the specified directory and fetches the Gulp tasks.

## Install

```sh
npm install get-gulp-tasks
```

## Usage

Imagine a `gulpfile.js` in `./gulp-project`:

```js
export const foo = () => {};
export const bar = () => {};
```

You can get its tasks with:

```js
import getGulpTasks from 'get-gulp-tasks';

console.log(await getGulpTasks('gulp-project'));
//=> ['default', 'test']
```

## API

### getGulpTasks(cwd?)

Returns a `Promise<string[]>` with the tasks.

#### cwd

Type: `string`\
Default: `process.cwd()`

The path to the directory of your Gulp project.
