// jest.config.js

const { PresetUtils } = require('@agds/node-utils');
// 强化jest的presets功能
module.exports = PresetUtils.getDeepPresetMergeAndModify({
    presets: [
        require('@agds/jest-config-node')({
            entry: 'src/index.js',
        }),
    ],
});
