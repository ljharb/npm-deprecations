'use strict';

var test = require('tape');

var getMessages = require('../messages');
var Promise = require('../promise');
var versions = ['0.1.0', '0.2.0', '0.3.0'];

var name = 'forms';

test('returns a promise', function (t) {
	t.plan(1);
	var promise = getMessages(name);
	t.ok(promise instanceof Promise, 'returns a promise');
});

test('gets deprecation messages', function (t) {
	var promise = getMessages(name, versions);
	var expected = [
		{ '0.1.0': 'Please update to the latest version to ensure the latest security fixes in "qs"' },
		{ '0.1.1': 'Please update to the latest version to ensure the latest security fixes in "qs"' },
		{ '0.1.2': 'Please update to the latest version to ensure the latest security fixes in "qs"' }
	];
	t.plan(1);
	promise.then(function (messages) {
		t.deepEqual(messages.slice(0, expected.length), expected);
	}, t.fail);
});

