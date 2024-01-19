'use strict';

const { exec } = require('child_process');
const fromEntries = require('object.fromentries');
const trim = require('string.prototype.trim');

const { parse } = JSON;

module.exports = async function getDeprecationMessages(name, versions) {
	return fromEntries(await Promise.all(versions.map(async (version) => {
		const jsonMsg = await new Promise((resolve, reject) => {
			exec(`npm info ${name}@${version} deprecated --json --no-spin --silent`, (err, data) => {
				if (err) {
					return reject(err);
				}
				const message = trim(String(data));
				return message ? resolve(message) : resolve();
			});
		});
		const fullMsg = typeof jsonMsg !== 'undefined' && jsonMsg !== 'undefined' ? parse(jsonMsg) : null;

		const msg = fullMsg ? trim(String(fullMsg)) : '';

		let finalMessage;
		if (msg && msg.length > 0) {
			finalMessage = msg;
		}
		return [version, finalMessage];
	})));
};
