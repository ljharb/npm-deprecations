'use strict';

const every = require('array.prototype.every');
const fromEntries = require('object.fromentries');

const isString = (str) => typeof str === 'string';

const getVersions = require('./versions');
const getDeprecationMessages = require('./messages');

const { from } = Array;

module.exports = function deprecations(packageName, ...morePackageNames) {
	if (arguments.length < 1) {
		throw new TypeError('at least 1 package name is required');
	}

	if (!every(arguments, isString)) {
		throw new TypeError('module names must all be strings');
	}

	return Promise.all(from(arguments, async (name) => {
		const versions = await getVersions(name);
		return [
			name,
			await getDeprecationMessages(name, versions),
		];
	})).then(fromEntries);
};

