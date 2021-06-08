// jest.config.js

const { PresetUtils } = require('@ads/node-utils');
module.exports = PresetUtils.getDeepPresetMergeAndModify({
    presets: [
        require('@ads/jest-config-node')({
            entry: 'src/index.js',
        }),
    ],
});
