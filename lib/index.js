const { FastPath, FastFs } = require('@ads/node-utils');
const pkgPath = FastPath.getCwdPath('package.json');
const path = require('path');
let pkg = {};
if (FastFs.getPathStatSync(pkgPath)) {
    pkg = require(pkgPath);
}
module.exports = {
    collectCoverage: true,
    testEnvironment: 'node',
    roots: [
        '<rootDir>/test',
    ],
    moduleNameMapper: {
        [`^${pkg.name}$`]: path.join('<rootDir>/', pkg.main),
    },
    coverageThreshold: {
        global: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100,
        },
    },
    testRegex: 'test/__test__/(.+)\\.(jsx?)$',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/test/**',
    ],
};
