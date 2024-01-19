'use strict';

const test = require('tape');

const getMessages = require('../messages');

const versions = ['0.1.0', '0.2.0', '0.3.0'];
const name = 'forms';

test('returns a promise', async (t) => {
	const promise = getMessages(name, versions);

	t.ok(promise instanceof Promise, 'returns a promise');

	return promise;
});

test('gets deprecation messages', async (t) => {
	const expected = {
		'0.1.0': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.2.0': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.3.0': 'Please update to the latest version to ensure the latest security fixes in "qs"',
	};

	const messages = await getMessages(name, versions);

	t.deepEqual(messages, expected);
});

