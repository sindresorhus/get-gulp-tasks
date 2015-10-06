import path from 'path';
import test from 'ava';
import fn from './';

test(t => {
	t.plan(2);

	fn(path.join(__dirname, 'fixture'), (err, tasks) => {
		t.ifError(err);
		t.same(tasks, ['default', 'test']);
	});
});
