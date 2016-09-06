'use strict';

var Promise = require('./promise');
var exec = require('child_process').exec;

module.exports = function getDeprecationMessages(name) {
	return new Promise(function (resolve, reject) {
		exec('npm info ' + name + '@* deprecated --no-color --no-spin --loglevel=info', function (err, textMsgs) {
			if (err) { return reject(err); }
			return resolve(textMsgs);
		});
	}).then(function (textMsgs) {
		return textMsgs.split('\n').map(function (line) {
			var unquoted = line.slice(name.length + 1);
			var version = unquoted.slice(0, unquoted.indexOf(' '));
			var quotedMessage = unquoted.slice(unquoted.indexOf(' ') + 1);

			var message = quotedMessage.slice(1, -1).replace(/\\'/g, "'").trim();

			var finalData = {};
			if (message.length > 0) {
				finalData[version] = message;
			}
			return finalData;
		});
	});
};
