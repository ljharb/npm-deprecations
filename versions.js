'use strict';

const { exec } = require('child_process');
const { inspect } = require('util');

module.exports = async function getVersions(module) {
	const versionsJSON = await new Promise((resolve, reject) => {
		exec(`npm info ${module} versions --json --silent --no-spin`, (err, data) => {
			if (err) {
				return reject(err);
			}
			return resolve(data);
		});
	});
	const versions = JSON.parse(versionsJSON);
	if (!Array.isArray(versions)) {
		throw new TypeError(`got non-array: ${inspect(versions)}`);
	}
	return versions;
};

