'use strict';

var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isString = function (str) { return toStr.call(str) === '[object String]'; };
var isFunction = function (func) { return toStr.call(func) === '[object Function]'; };

var promiseback = require('promiseback');
var Promise = require('./promise');
var assign = require('object.assign');

var getVersions = require('./versions');
var getDeprecationMessages = require('./messages');

module.exports = function deprecations(packageName) {
	var callback;
	if (arguments.length < 1) {
		throw new TypeError('at least 1 package name is required');
	} else if (arguments.length > 1 && isFunction(arguments[arguments.length - 1])) {
		callback = arguments[arguments.length - 1];
	}

	var modules = slice.call(arguments, 0, callback ? -1 : callback);
	if (!modules.every(isString)) {
		throw new TypeError('module names must all be strings');
	}

	var deferred = promiseback(callback);
	process.nextTick(function () {
		var promises = modules.map(function (name) {
			return getVersions(name).then(function (versions) {
				return getDeprecationMessages(name, versions);
			}).then(function (data) {
				var moduleData = {};
				moduleData[name] = assign.apply(null, [{}].concat(data));
				return moduleData;
			});
		});
		Promise.all(promises).then(function (moduleDatas) {
			var modulesData = moduleDatas.reduce(function (acc, moduleData) {
				return assign(acc, moduleData);
			}, {});
			deferred.resolve(modulesData);
		}, deferred.reject);
	});
	return deferred.promise;
};

