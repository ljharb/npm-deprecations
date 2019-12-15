'use strict';

require('./messages');
require('./versions');

var deprecations = require('../');
var test = require('tape');

var compact = function (obj) {
	return Object.keys(obj).reduce(function (map, key) {
		if (obj[key]) {
			map[key] = obj[key]; // eslint-disable-line no-param-reassign
		}
		return map;
	}, {});
};

test('errors', function (t) {
	t['throws'](deprecations, new TypeError('at least 1 module name is required'));
	t['throws'](function () { deprecations(3); }, new TypeError('module names must all be strings'));
	t['throws'](function () { deprecations('foo', 3); }, new TypeError('module names must all be strings'));
	t['throws'](function () { deprecations(3, 'foo'); }, new TypeError('module names must all be strings'));
	t.end();
});

test('works', function (t) {
	var formMessages = {
		'0.1.0': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.1.1': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.1.2': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.1.3': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.1.4': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.2.0': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.2.1': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.2.2': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.2.3': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.3.0': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.4.0': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.4.1': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.5.0': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.6.0': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.7.0': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.8.1': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.9.0': 'Please update to the latest version to ensure the latest security fixes in "qs"',
		'0.9.1': 'Please update to ^1.3.0 to ensure your HTML content is properly escaped.',
		'0.9.2': 'Please update to ^1.3.0 to ensure your HTML content is properly escaped.',
		'0.9.3': 'Please update to ^1.3.0 to ensure your HTML content is properly escaped.',
		'0.9.4': 'Please update to ^1.3.0 to ensure your HTML content is properly escaped.',
		'0.9.5': 'Please update to ^1.3.0 to ensure your HTML content is properly escaped.',
		'0.9.6': 'Please update to ^1.3.0 to ensure your HTML content is properly escaped.',
		'0.10.0': 'Please update to ^1.3.0 to ensure your HTML content is properly escaped.',
		'1.0.0': 'Please update to ^1.3.0 to ensure your HTML content is properly escaped.',
		'1.1.0': 'Please update to ^1.3.0 to ensure your HTML content is properly escaped.',
		'1.1.1': 'Please update to ^1.3.0 to ensure your HTML content is properly escaped.',
		'1.1.3': 'Please update to ^1.3.0 to ensure your HTML content is properly escaped.',
		'1.1.4': 'Please update to ^1.3.0 to ensure your HTML content is properly escaped.',
		'1.2.0': 'Please update to ^1.3.0 to ensure your HTML content is properly escaped.'
	};

	t.test('with one module', function (st) {
		st.plan(2);
		deprecations('forms').then(function (messages) {
			st.deepEqual(Object.keys(messages), ['forms'], 'has just one key');
			st.deepEqual(compact(messages.forms), formMessages, 'forms messages match');
		}).then(null, st.fail);
	});

	t.test('with multiple modules', function (st) {
		st.plan(3);
		deprecations('forms', 'object.assign').then(function (messages) {
			st.deepEqual(compact(messages.forms), compact(formMessages), 'forms messages match');
			st.deepEqual(Object.keys(messages), ['forms', 'object.assign'], 'messages has two expected keys');
			st.deepEqual(compact(messages['object.assign']), {
				'0.1.0': 'Please upgrade to the latest spec-compliant version',
				'0.1.1': 'Please upgrade to the latest spec-compliant version',
				'0.2.0': 'Please upgrade to the latest spec-compliant version',
				'0.2.1': 'Please upgrade to the latest spec-compliant version',
				'0.3.1': 'Object.assign should accept any value except null and undefined, and should coerce to an object',
				'0.4.0': 'Please update to the latest version',
				'0.4.2': 'v0.4.3 doesn\'t modify function arguments, since it deoptimizes v8'
			}, 'object.assign messages match');
		}).then(null, st.fail);
	});
});
