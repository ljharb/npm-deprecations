#! /usr/bin/env node

var deprecations = require('./');

var modules = process.argv.slice(2);

if (modules.length > 0) {
	deprecations.apply(null, modules).then(function (messages) {
		console.log(JSON.stringify(messages, null, '\t'));
	});
} else {
	console.log('usage: deprecations module1 [module2...]\n\tOutputs JSON.');
}

