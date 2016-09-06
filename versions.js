'use strict';

var Promise = require('./promise');
var exec = require('child_process').exec;

module.exports = function getVersions(module) {
	return new Promise(function (resolve, reject) {
		exec('npm info ' + module + ' versions --json --loglevel=info --no-spin', function (err, versionsJSON) {
			if (err) { return reject(err); }
			return resolve(versionsJSON);
		});
	}).then(function (versionsJSON) {
		return JSON.parse(versionsJSON);
	}).then(function (versions) {
		if (!Array.isArray(versions)) {
			// eslint-disable-next-line global-require
			throw new TypeError('got non-array: ' + require('util').inspect(versions));
		}
		return versions;
	});
};

