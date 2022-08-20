import babelPluginTesterMod from 'babel-plugin-tester';
import tagExportsWithRendererPlugin from '../dist/vite-plugin-jsx/tag.js';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('? ', babelPluginTesterMod);
const pluginTester = babelPluginTesterMod.default;

console.log('????? ', path.join(__dirname, './fixtures/vite-plugin-jsx'));

describe.only('WAT', () => {
	pluginTester({
		plugin: tagExportsWithRendererPlugin({ rendererName: 'react' }),
		babelOptions: {
			plugins: ['@babel/plugin-syntax-jsx'],
		},
		fixtures: path.join(__dirname, './fixtures/vite-plugin-jsx'),
	});
});
