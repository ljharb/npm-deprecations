'use strict';

const every = require('array.prototype.every');
const fromEntries = require('object.fromentries');
const entries = require('object.entries');
const pacote = require('pacote');

const isString = /** @type {(str: unknown) => str is string} */ (str) => typeof str === 'string';

const { from } = Array;

/** @typedef {Awaited<ReturnType<import('./deprecations.d.ts')>>} DeprecationsByVersionByName */
/** @typedef {DeprecationsByVersionByName[keyof DeprecationsByVersionByName]} DeprecationsByVersion */

/** @type {import('./deprecations.d.ts')} */
module.exports = function deprecations(packageName, ...morePackageNames) {
	if (arguments.length < 1) {
		throw new TypeError('at least 1 package name is required');
	}

	if (!every(arguments, isString)) {
		throw new TypeError('module names must all be strings');
	}

	const depEntries = Promise.all(from(
		arguments,
		/** @type {(name: string) => Promise<[name, DeprecationsByVersion]>} */ async (name) => {
			const { versions } = await pacote.packument(name, { fullMetadata: true });
			// eslint-disable-next-line no-extra-parens
			const obj = /** @type {DeprecationsByVersion} */ (
				fromEntries(entries(versions).map(([
					version,
					{ deprecated },
				]) => [
					version,
					deprecated,
				]))
			);
			return [
				name,
				obj,
			];
		},
	));
	return depEntries.then(fromEntries);
};

