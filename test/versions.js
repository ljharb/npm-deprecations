'use strict';

var test = require('tape');

var getVersions = require('../versions');
var Promise = require('../promise');

var module = 'forms';
var firstTenVersions = ['0.1.0', '0.1.1', '0.1.2', '0.1.3', '0.1.4', '0.2.0', '0.2.1', '0.2.2', '0.2.3', '0.3.0'];

test('returns a promise', function (t) {
	t.plan(1);
	var promise = getVersions(module);
	t.ok(promise instanceof Promise, 'returns a promise');
});

test('gets versions', function (t) {
	t.plan(2);
	var promise = getVersions(module);
	promise.then(function (versions) {
		t.ok(Array.isArray(versions), 'versions is an array');
		t.deepEqual(versions.slice(0, 10), firstTenVersions, 'expected version info is returned');
		t.end();
	}, function (err) {
		t.error(err);
	});
});

