#! /usr/bin/env node

'use strict';

const deprecations = require('./');

const modules = process.argv.slice(2);

if (modules.length > 0) {
	deprecations(...modules).then((messages) => {
		console.log(JSON.stringify(messages, null, '\t'));
	}, (err) => {
		process.exitCode = 1;
		console.error(err);
	});
} else {
	console.log('usage: deprecations module1 [module2...]\n\tOutputs JSON.');
}

