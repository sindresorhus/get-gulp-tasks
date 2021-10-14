import test from 'ava';
import getGulpTasks from './index.js';

test('main', async t => {
	t.deepEqual(await getGulpTasks('fixture'), ['bar', 'foo']);
});
