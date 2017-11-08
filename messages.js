'use strict';

var Promise = require('./promise');
var exec = require('child_process').exec;

module.exports = function getDeprecationMessages(name, versions) {
	var promises = versions.map(function (version) {
		return new Promise(function (resolve, reject) {
			exec('npm info ' + name + '@' + version + ' deprecated --json --no-spin --silent', function (err, jsonMsg) {
				if (err) { return reject(err); }
				var message = String(jsonMsg).trim();
				return message ? resolve(message) : resolve();
			});
		}).then(function (jsonMsg) {
			if (typeof jsonMsg !== 'undefined' && jsonMsg !== 'undefined') {
				return JSON.parse(jsonMsg);
			}
			return null;
		}).then(function (fullMsg) {
			var msg = fullMsg ? String(fullMsg).trim() : '';
			var finalMessage;
			if (msg && msg.length > 0) {
				finalMessage = msg;
			}
			var finalData = {};
			finalData[version] = finalMessage;
			return finalData;
		});
	});
	return Promise.all(promises);
};
