import path from 'path';
import test from 'ava';
import m from './';

test(async t => {
	t.deepEqual(await m(path.join(__dirname, 'fixture')), ['default', 'test']);
});
