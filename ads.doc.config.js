/*
 * @Author: 锦阳
 * @Create: 2021年05月31日
 */
const pkg = require('./package.json');
const GenDoc = require('@ads/cli-plugin-doc');
const fs = require('fs-extra');
const { FastPath } = require('@ads/node-utils');
module.exports = (
    /**
     * 配置参数
     *
     * @returns {GenDoc.RenderOptions}
     */
    async () => {
        const [source] = (await Promise.all([
            GenDoc.getFilesCode({ dir: './lib', files: ['*'] }),
        ]));
        return {
            output: 'README.md',
            helpers: {
                installCode: `npm i -D ${pkg.name} @ads/node-utils`,
                importCode: fs.readFileSync(FastPath.getCwdPath('./docs/import.js'), { encoding: 'utf-8' }),
                remark: fs.readFileSync(FastPath.getCwdPath('./docs/usage.md'), { encoding: 'utf-8' }),
                postfixes: [
                    {
                        id: 'source',
                        title: '配置源码',
                        content: GenDoc.renderCode(source),
                    },
                ],
            },
        };
    })();
