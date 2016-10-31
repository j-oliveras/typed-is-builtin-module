/// <reference path="../out/index.d.ts" />

import test = require('blue-tape');

import isBuiltinModule = require('is-builtin-module');

test('Module import is a function', t => {
  t.true(typeof	isBuiltinModule === 'function');
}).
end();

test('Call with non node module names', t => {
  t.doesNotThrow(() => isBuiltinModule('any string'));
  t.doesNotThrow(() => isBuiltinModule('dhdjhdjdhddhjdsghdhyds'));
  t.doesNotThrow(() => isBuiltinModule('is-builtin-module'));
  t.doesNotThrow(() => isBuiltinModule('builtin-modules'));
  t.doesNotThrow(() => isBuiltinModule('typings'));
}).
end();

test(`Test 'crypto', 'fs', 'http' and 'path'`, t => {
  t.true(isBuiltinModule('crypto'));
  t.true(isBuiltinModule('fs'));
  t.true(isBuiltinModule('http'));
  t.true(isBuiltinModule('path'));
}).
end();

test('Check non string parameters', t => {
  t.throws(() => isBuiltinModule(null));
  t.throws(() => isBuiltinModule(undefined));
  t.throws(() => isBuiltinModule(0 as any));
  t.throws(() => isBuiltinModule({} as any));
}).
end();

import builtinModules = require('builtin-modules');

test('All `builtin-modules` items are node modules', t => {
  t.true(builtinModules.reduce((previous, current) => {
    return previous && isBuiltinModule(current);
  }, true));
}).
end();
