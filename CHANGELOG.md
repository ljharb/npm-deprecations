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
