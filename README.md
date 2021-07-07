<p align="center">
    <img src="https://gitee.com/agile-development-system/agds-doc-preset/raw/master/lib/docs/logos/light/1.png" alt="logo">
</p>

# @agds/jest-config-node

**版本** ：1.0.4

agds系统的node平台jest预设

## 快速开始

### 安装

```bash
npm i -D @agds/jest-config-node
```

### 引入

```js
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
```




### 此配置规定了默认的测试用例文件路径
`root/test/__test__`

推荐的项目目录设置
```
root                       # 项目根目录
├── test                   # jest测试用例目录
│   ├── __mock__           # mock内容目录
│   │   └── index.js       # mock模块
│   └── __test__           # 测试用例目录
│       └── index.js       # 测试用例
└── package.json
```

### 添加test脚本

在`package.json`的`scripts`下添加test命令；

```json
{
    "scripts":{
        "test": "jest"
    }
}
```

### 添加npm或者git生命周期钩子运行test

例如：在`package.json`的`scripts`下添加prebuild命令；

```json
{
    "scripts":{
        "prebuild": "npm run test"
    }
}
```

### 添加测试用例

在`root/test/__test__`目录下

```js
// 引入`@jest/globals`获得更好的编写体验
const { expect, test } = require('@jest/globals');
// 配置支持使用包名作为模块入口的别名，仅支持main声明的路径
const src = require('<pkg.name>');
test('test1', async () => {
    const res = await src();
    expect(typeof res === 'string').toBe(true);
});
```





<a name="source"></a>

## 配置源码

```js
const { FastPath, FastFs } = require('@agds/node-utils');
const pkgPath = FastPath.getCwdPath('package.json');
const path = require('path');
let pkg = {};
if (FastFs.getPathStatSync(pkgPath)) {
    pkg = require(pkgPath);
}
module.exports = ({ entry = 'src/index.js' } = {}) => ({
    collectCoverage: true,
    testEnvironment: 'node',
    roots: [
        '<rootDir>/test',
    ],
    moduleNameMapper: {
        [`^${pkg.name}$`]: path.join('<rootDir>', entry),
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
});
```




<a name="license"></a>

## 许可证

[MIT License](https://gitee.com/agile-development-system/jest-config-node/blob/master/LICENSE)
Copyright (c) 2021 锦阳



<a name="donate"></a>

## 请维护者喝杯咖啡

<img src="https://gitee.com/agile-development-system/agds-doc-preset/raw/master/lib/docs/qrcode/alipay.jpeg" width="209px" >
<img src="https://gitee.com/agile-development-system/agds-doc-preset/raw/master/lib/docs/qrcode/wechatpay.jpeg" width="237px" >




<a name="dingtalk"></a>

## 加入钉钉群讨论或加入开发

<img src="https://gitee.com/agile-development-system/agds-doc-preset/raw/master/lib/docs/qrcode/dingtalk.jpeg" width="188px" >


