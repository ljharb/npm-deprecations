"use strict";

require('./messages');
require('./versions');

var deprecations = require('../');
var test = require('tape');

test('errors', function (t) {
	t.throws(deprecations, new TypeError('at least 1 module name is required'));
	t.throws(function () { deprecations(3); }, new TypeError('module names must all be strings'));
	t.throws(function () { deprecations('foo', 3); }, new TypeError('module names must all be strings'));
	t.throws(function () { deprecations(3, 'foo'); }, new TypeError('module names must all be strings'));
	t.end();
});

test('works', function (t) {
	var formMessages = {
		'0.1.0': 'Please update to the latest version',
		'0.1.1': 'Please update to the latest version',
		'0.1.2': 'Please update to the latest version',
		'0.1.3': 'Please update to the latest version',
		'0.1.4': 'Please update to the latest version',
		'0.2.0': 'Please update to the latest version',
		'0.2.1': 'Please update to the latest version',
		'0.2.2': 'Please update to the latest version',
		'0.2.3': 'Please update to the latest version',
		'0.3.0': 'Please update to the latest version',
		'0.4.0': 'Please update to the latest version',
		'0.4.1': 'Please update to the latest version',
		'0.5.0': 'Please update to the latest version',
		'0.6.0': 'Please update to the latest version',
		'0.7.0': undefined
	};

	t.test('with one module', function (st) {
		st.plan(1);
		var promise = deprecations('forms');
		promise.then(function (messages) {
			st.deepEqual(messages, {
				forms: formMessages
			});
		}).done();
	});

	t.test('with multiple modules', function (st) {
		st.plan(1);
		var promise = deprecations('forms', 'object.assign');
		promise.then(function (messages) {
			st.deepEqual(messages, {
				forms: formMessages,
				'object.assign': {
					'0.1.0': 'Please upgrade to the latest spec-compliant version',
					'0.1.1': 'Please upgrade to the latest spec-compliant version',
					'0.2.0': 'Please upgrade to the latest spec-compliant version',
					'0.2.1': 'Please upgrade to the latest spec-compliant version',
					'0.3.1': 'Object.assign should accept any value except null and undefined, and should coerce to an object',
					'0.4.0': 'Please update to the latest version',
					'0.4.1': undefined
				}
			});
		}).done();
	});
});


