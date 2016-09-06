'use strict';

var Promise = require('./promise');
var npm = require('npm');

module.exports = function getDeprecationMessages(name, versions) {
	var promises = versions.map(function (version) {
		return new Promise(function (resolve, reject) {
			npm.load({ spin: false }, function (loadErr, npmI) {
				if (loadErr) { return reject(loadErr); }
				return npmI.commands.view([name + '@' + version, 'deprecated'], true, function (err, data) {
					if (err) { return reject(err); }
					var versionData = data[version];
					var msg;
					if (versionData) { msg = versionData.deprecated; }
					if (msg) { msg = msg.trim(); }
					var finalMessage;
					if (msg && msg.length > 0) {
						finalMessage = msg;
					}
					var finalData = {};
					finalData[version] = finalMessage;
					return resolve(finalData);
				});
			});
		});
	});
	return Promise.all(promises);
};

