// Type definitions for is-builtin-module v1.0.0
// Project: https://github.com/sindresorhus/is-builtin-module
// Definitions by: Jordi Oliveras Rovira <https://github.com/j-oliveras>

/**
 * Check if a string matches the name of a Node.js builtin module.
 *
 * @throws An error if the parameter is not an string.
 * @param moduleName An string to check if a string
 * matches the name of a Node.js builtin module.
 */
declare function isBuiltinModule(moduleName: string): boolean;

export = isBuiltinModule;
