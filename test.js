import path from 'path';
import test from 'ava';
import fn from './';

test(async t => {
	t.same(await fn(path.join(__dirname, 'fixture')), ['default', 'test']);
});
