#! /usr/bin/env node

'use strict';

const deprecations = require('./');

const { positionals: modules, values: { help } } = require('util').parseArgs({
	allowPositionals: true,
	options: {
		help: { type: 'boolean' },
	},
});

if (!help && modules.length > 0) {
	deprecations(...modules).then((messages) => {
		console.log(JSON.stringify(messages, null, '\t'));
	}, (err) => {
		process.exitCode = 1;
		console.error(err);
	});
} else {
	console.log('usage: deprecations module1 [module2...]\n\tOutputs JSON.');
	if (!help || modules.length > 0) {
		process.exitCode = 1;
	}
}

