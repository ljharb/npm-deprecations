# deprecations <sup>[![Version Badge][npm-version-svg]][npm-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][npm-url]

Given npm module names, get a JSON map of npm version numbers to deprecation messages.

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
[npm-version-svg]: https://versionbadg.es/ljharb/npm-deprecations.svg
[deps-svg]: https://david-dm.org/ljharb/npm-deprecations.svg
[deps-url]: https://david-dm.org/ljharb/npm-deprecations
[dev-deps-svg]: https://david-dm.org/ljharb/npm-deprecations/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/npm-deprecations#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/deprecations.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/deprecations.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/deprecations.svg
[downloads-url]: https://npm-stat.com/charts.html?package=deprecations
[codecov-image]: https://codecov.io/gh/ljharb/npm-deprecations/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/npm-deprecations/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/npm-deprecations
[actions-url]: https://github.com/ljharb/npm-deprecations/actions
