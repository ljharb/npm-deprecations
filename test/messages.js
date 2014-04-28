"use strict";

var test = require('tape');

var messages = require('../messages');
var Promise = require('promiseback').Deferred.Promise;
var versions = ['0.1.0', '0.2.0', '0.3.0'];

var name = 'forms';

test('returns a promise', function (t) {
	t.plan(1);
	var promise = messages(name, versions);
	t.ok(promise instanceof Promise, 'returns a promise');
});

test('gets deprecation messages', function (t) {
	var promise = messages(name, versions);
	var expected = [
		{ '0.1.0': 'Please update to the latest version' },
		{ '0.2.0': 'Please update to the latest version' },
		{ '0.3.0': 'Please update to the latest version' }
	];
	t.plan(1);
	promise.then(function (messages) {
		t.deepEqual(messages, expected);
	}, t.fail);
});

