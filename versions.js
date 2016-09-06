'use strict';

var Promise = require('./promise');
var npm = require('npm');

module.exports = function getVersions(module) {
	return new Promise(function (resolve, reject) {
		npm.load({ spin: false }, function (loadErr, npmI) {
			if (loadErr) { throw loadErr; }
			npmI.commands.view([module, 'versions'], true, function (err, info) {
				if (err) { throw err; }
				var keys = Object.keys(info);
				if (keys.length === 1) {
					resolve(info[keys[0]].versions);
				} else {
					reject('multiple keys: no idea what to do here');
				}
			});
		});
	});
};

