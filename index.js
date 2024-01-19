'use strict';

const every = require('array.prototype.every');
const fromEntries = require('object.fromentries');
const entries = require('object.entries');
const pacote = require('pacote');

const isString = (str) => typeof str === 'string';

const { from } = Array;

module.exports = function deprecations(packageName, ...morePackageNames) {
	if (arguments.length < 1) {
		throw new TypeError('at least 1 package name is required');
	}

	if (!every(arguments, isString)) {
		throw new TypeError('module names must all be strings');
	}

	return Promise.all(from(arguments, async (name) => {
		const { versions } = await pacote.packument(name, { fullMetadata: true });
		return [
			name,
			fromEntries(entries(versions).map(([version, { deprecated }]) => [
				version,
				deprecated,
			])),
		];
	})).then(fromEntries);
};

