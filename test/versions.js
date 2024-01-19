'use strict';

const test = require('tape');

const getVersions = require('../versions');

const name = 'forms';
const firstTenVersions = ['0.1.0', '0.1.1', '0.1.2', '0.1.3', '0.1.4', '0.2.0', '0.2.1', '0.2.2', '0.2.3', '0.3.0'];

test('returns a promise', async (t) => {
	const promise = getVersions(name);

	t.ok(promise instanceof Promise, 'returns a promise');

	return promise;
});

test('gets versions', async (t) => {
	const versions = await getVersions(name);

	t.ok(Array.isArray(versions), 'versions is an array');
	t.deepEqual(versions.slice(0, 10), firstTenVersions, 'expected version info is returned');
});

