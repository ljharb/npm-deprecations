'use strict';

module.exports = typeof global.Promise === 'function' ? global.Promise : require('promiseback').Deferred.Promise;
