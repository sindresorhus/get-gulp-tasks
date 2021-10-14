import process from 'node:process';
import execa from 'execa';

export default async function getGulpTasks(cwd = process.cwd()) {
	const {stdout} = await execa('gulp', ['--tasks-simple'], {cwd, localDir: cwd, preferLocal: true});
	return stdout.split('\n');
}
