# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v4.0.1](https://github.com/ljharb/npm-deprecations/compare/v4.0.0...v4.0.1) - 2024-01-27

### Commits

- [Refactor] use `util.parseArgs` [`f769e3c`](https://github.com/ljharb/npm-deprecations/commit/f769e3c31b01f9f05e577621aa4b9eb3e1970c0c)

## [v4.0.0](https://github.com/ljharb/npm-deprecations/compare/v3.0.3...v4.0.0) - 2024-01-27

### Commits

- [Breaking] bump to npm 10 and node 18; getDeprecationMessages now outputs a single object instead of an array of them [`46c72d7`](https://github.com/ljharb/npm-deprecations/commit/46c72d71f18167b840b3746a0d11c241c63717ae)
- [Refactor] use `pacote` instead of shelling out to npm [`de4f3c1`](https://github.com/ljharb/npm-deprecations/commit/de4f3c1ad618d474565a38c67156eee7594ab8ad)
- add types [`f8377e0`](https://github.com/ljharb/npm-deprecations/commit/f8377e0724e7232ea8263bf7243da32982589ff4)
- [meta] add `auto-changelog` [`acd5f70`](https://github.com/ljharb/npm-deprecations/commit/acd5f70ca29c57f5a707aad507e325a041e86cc5)
- [Robustness] cache builtins [`e7a678d`](https://github.com/ljharb/npm-deprecations/commit/e7a678d3e7d58545f0379e4bc83aac7988f2e12e)
- [Dev Deps] update `@ljharb/eslint-config`, `aud`, `npmignore`, `nyc`, `tape` [`e8c9db7`](https://github.com/ljharb/npm-deprecations/commit/e8c9db7c9009cfae58afe12942b776f41dd8c2c3)
- [meta] simplify `exports` [`cac9d48`](https://github.com/ljharb/npm-deprecations/commit/cac9d4879994110bd0c615e2ba5e4f6c3732926c)
- [Dev Deps] update `aud`, `tape` [`2ae93ec`](https://github.com/ljharb/npm-deprecations/commit/2ae93ec9dd25453c085ddfd74255e7645b2c5096)
- [Dev Deps] update `tape` [`64c570d`](https://github.com/ljharb/npm-deprecations/commit/64c570da16820429d54f939e5e3598d8a14a184e)
- [Deps] update `object.assign` [`3222110`](https://github.com/ljharb/npm-deprecations/commit/322211095272cfcc699eee67e8a4546e9ad32fea)
- [actions] update checkout action [`698b579`](https://github.com/ljharb/npm-deprecations/commit/698b579f8a09bcd99215159530f77b04f11235ca)
- Revert "[Dev Deps] pin `@babel/generator`/`@babel/traverse` to v7.17.9 due to https://github.com/jridgewell/gen-mapping/pull/4" [`069de02`](https://github.com/ljharb/npm-deprecations/commit/069de02c0a4f1f884d0b7dbf633abba4954a60a9)
- [meta] remove audit-level [`b5fdecb`](https://github.com/ljharb/npm-deprecations/commit/b5fdecb40a024609a0ddee5d8f793e52bbf96d7c)
- [meta] add `sideEffects` flag [`343cdbc`](https://github.com/ljharb/npm-deprecations/commit/343cdbc906735b9fd9351607ed3b6223a1f73675)
- [Breaking] remove `package` entry point [`71ee5fa`](https://github.com/ljharb/npm-deprecations/commit/71ee5fa3d86c69ee269ecd0e6ceffa885291fd29)

<!-- auto-changelog-above -->

3.0.3 / 2022-06-24
==================
 - [Deps] remove explicit `npm` dep; rely on `engines` declaration
 - [meta] use `npmignore` to autogenerate an npmignore file
 - [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `safe-publish-latest`, `tape`
 - [Dev Deps] pin `@babel/generator`/`@babel/traverse` to v7.17.9 due to https://github.com/jridgewell/gen-mapping/pull/4
 - [actions] reuse common workflows

3.0.2 / 2021-10-31
==================
  * [meta] allow npm 8
  * [meta] allow npm 7
  * [readme] add github actions/codecov badges
  * [Deps] update `npm`
  * [meta] gitignore coverage output
  * [meta] remove unused nsprc file
  * [meta] use `prepublishOnly` script for npm 7+
  * [meta] ignore <= moderate audit warnings
  * [actions] update codecov uploader
  * [actions] use `node/install` instead of `node/run`; use `codecov` action
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `safe-publish-latest`, `tape`

3.0.1 / 2021-02-18
==================
  * [readme] fix repo URLs; remove travis badge
  * [meta] do not publish github action workflow files
  * [Deps] update `npm`, `promiseback`, `object.assign`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape`
  * [actions] add "Allow Edits" workflow
  * [actions] switch Automatic Rebase workflow to `pull_request_target` event
  * [Tests] migrate tests to Github Actions
  * [Tests] run `nyc` on all tests; use `tape` runner

3.0.0 / 2020-01-11
==================
  * [Breaking] update `npm` to `v6`
  * [Breaking] add "exports" field to package.json
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape`

2.0.3 / 2019-12-15
==================
  * [Deps] update `object.assign`
  * [meta] add `funding` field; create FUNDING.yml
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `covert`, `safe-publish-latest`, `tape`
  * [Tests] use shared travis-ci configs
  * [Tests] remove `jscs`
  * [Tests] use `npx aud` instead of `nsp` or `npm audit` with hoops
  * [actions] add automatic rebasing / merge commit blocking

2.0.2 / 2017-11-08
==================
  * [Fix] reject the overarching promise when one of the promises fails
  * [Fix] handle an existing but empty deprecation message
  * [Deps] update `npm`
  * [Dev Deps] update `tape`, `@ljharb/eslint-config`, `eslint`, `safe-publish-latest`, `nsp`
  * [Tests] update `forms` deprecation messages
  * [Tests] up to `node` `v9.1`, `v8.9`, `v7.10`, `v6.12`; use `nvm install-latest-npm`; pin included builds to LTS; add coverage but allow it to fail; improve matrix

2.0.1 / 2016-09-30
==================
  * Revert "[Breaking] remove unused `versions` entry point"
  * Revert "[Refactor] only make one `npm info` call, instead of two."
  * [Tests] up to `node` `v6.7`, `v4.6`

2.0.0 / 2016-09-06
==================
  * [Breaking] remove unused `versions` entry point

1.0.8 / 2016-09-30
==================
  * Revert "[Refactor] only make one `npm info` call, instead of two."

1.0.7 / 2016-09-05
==================
  * [Refactor] only make one `npm info` call, instead of two

1.0.6 / 2016-09-05
==================
  * [Fix] Make sure to reject the outer promise explicitly when npm fails
  * [Refactor] use a `promise.js` file and use the global `Promise` when available
  * [Refactor] use `npm` CLI instead of API; update `npm`
  * [Deps] All grade A-supported `node`/`iojs` versions now ship with an `npm` that understands `^`
  * [Deps] update `promiseback`, `npm`, `object.assign`
  * [Dev Deps] update `tape`, `jscs`, `covert`
  * [Tests] up to `node` `v6.5`, `v5.12`, `v4.5`, `io.js` `v3.3`; improve test matrix
  * [Tests] add `npm run security`
  * [Tests] add `npm run eslint`
  * [Tests] `npm` locked down to v3.3.x for API support issues
  * [Tests] use pretest/posttest for linting/security
  * [Tests] add `safe-publish-latest`
  * [Docs] Switch from vb.teelaun.ch to versionbadg.es for the npm version badge SVG

1.0.5 / 2015-01-04
==================
  * [Fix] Remove a mistaken recursive require
  * [Deps] update `object.assign`
  * [Dev Deps] update `tape`, `jscs`

1.0.4 / 2014-10-03
==================
  * [Deps] update `promiseback`
  * [Dev Deps] update `jscs`, `tape`
  * [Docs] Adding license and downloads badges

1.0.3 / 2014-08-29
==================
  * [Deps] update `promiseback`

1.0.2 / 2014-08-26
==================
  * [Deps] update `object.assign`
  * [Docs] Use SVG badges instead of PNG

1.0.1 / 2014-08-14
==================
  * [Deps] update `promiseback`
  * [Dev Deps] update `covert`
  * [Tests] add `npm run lint`

1.0.0 / 2014-08-09
==================
  * No breaking change: just bumping to 1.0!
  * [Deps] update `promiseback`, `object.assign`
  * [Dev Deps] update `tape`

0.1.0 / 2014-04-27
==================
  * Initial release.
