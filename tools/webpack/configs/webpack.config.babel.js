import path from 'path';
import fs from 'fs';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import paths from '../../paths';

// 'env' -> ['env', { modules: false }] for webpack
const babelRC = getBabelConfigFromFile();
babelRC.presets = modifyBabelPresets(babelRC.presets);

const config = {
    mode: 'development',
    entry: {
        // vendors: path.resolve(paths.client, 'vendors/polyfills.js'),
        app: path.resolve(paths.client, 'main.jsx')
    },
    output: {
        filename: `${paths.distAssetSubdirName}/[name].[hash:8].js`,
        path: paths.clientDist,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                include: paths.source,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: babelRC.presets,
                    plugins: babelRC.plugins
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(paths.client, 'index.html')
        })
    ]
};

export default config;

function getBabelConfigFromFile() {
    const babelFilePath = path.resolve(process.cwd(), '.babelrc');
    const babelRCFileContent = fs.readFileSync(babelFilePath, 'utf-8');
    return JSON.parse(babelRCFileContent);
}

function modifyBabelPresets(presets) {
    return presets.map(preset => {
        if (preset === 'env')
            return ['env', { modules: false }];

        return preset;
    });
}