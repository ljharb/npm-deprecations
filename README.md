#deprecations <sup>[![Version Badge][npm-version-svg]][npm-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][9]][npm-url]

Given an npm module name, get a map of npm version numbers to deprecation messages.

## Example
```js
var deprecations = require('deprecations');
var messages = deprecations('forms', 'object.assign');
var assert = require('assert');
assert.deepEqual(messages, {
	forms: {
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
		'0.4.1': undefined
	},
	'object.assign': {
		'0.1.0': 'Please upgrade to the latest spec-compliant version',
		'0.1.1': 'Please upgrade to the latest spec-compliant version',
		'0.2.0': 'Please upgrade to the latest spec-compliant version',
		'0.2.1': 'Please upgrade to the latest spec-compliant version',
		'0.3.1': undefined
	}
});
```

Alternatively, install it as a global module, and then run:
```bash
deprecations forms object.assign
```
which will print out the same output, as valid JSON.
## Tests
Simply clone the repo, `npm install`, and run `npm test`

[npm-url]: https://npmjs.org/package/deprecations
[npm-version-svg]: http://vb.teelaun.ch/ljharb/npm-deprecations.svg
[travis-svg]: https://travis-ci.org/ljharb/npm-deprecations.svg
[travis-url]: https://travis-ci.org/ljharb/npm-deprecations
[deps-svg]: https://david-dm.org/ljharb/npm-deprecations.svg
[deps-url]: https://david-dm.org/ljharb/npm-deprecations
[dev-deps-svg]: https://david-dm.org/ljharb/npm-deprecations/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/npm-deprecations#info=devDependencies
[9]: https://nodei.co/npm/deprecations.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/deprecations.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/deprecations.svg
[downloads-url]: http://npm-stat.com/charts.html?package=deprecations

