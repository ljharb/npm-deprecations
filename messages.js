'use strict';

const { exec } = require('child_process');
const fromEntries = require('object.fromentries');

module.exports = async function getDeprecationMessages(name, versions) {
	return fromEntries(await Promise.all(versions.map(async (version) => {
		const jsonMsg = await new Promise((resolve, reject) => {
			exec(`npm info ${name}@${version} deprecated --json --no-spin --silent`, (err, data) => {
				if (err) {
					return reject(err);
				}
				const message = String(data).trim();
				return message ? resolve(message) : resolve();
			});
		});
		const fullMsg = typeof jsonMsg !== 'undefined' && jsonMsg !== 'undefined' ? JSON.parse(jsonMsg) : null;

		const msg = fullMsg ? String(fullMsg).trim() : '';

		let finalMessage;
		if (msg && msg.length > 0) {
			finalMessage = msg;
		}
		return [version, finalMessage];
	})));
};
