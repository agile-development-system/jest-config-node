// jest.config.js

const { PresetUtils } = require('@ads/node-utils');
// 强化jest的presets功能
module.exports = PresetUtils.getDeepPresetMergeAndModify({
    presets: [
        require('@ads/jest-config-node')({
            entry: 'src/index.js',
        }),
    ],
});
