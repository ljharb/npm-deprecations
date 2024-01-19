'use strict';

const { exec } = require('child_process');
const { inspect } = require('util');

const { parse } = JSON;
const { isArray } = Array;

module.exports = async function getVersions(module) {
	const versionsJSON = await new Promise((resolve, reject) => {
		exec(`npm info ${module} versions --json --silent --no-spin`, (err, data) => {
			if (err) {
				return reject(err);
			}
			return resolve(data);
		});
	});
	const versions = parse(versionsJSON);
	if (!isArray(versions)) {
		throw new TypeError(`got non-array: ${inspect(versions)}`);
	}
	return versions;
};

