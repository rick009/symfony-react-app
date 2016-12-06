/**
 * Created by LouXin on 2016/12/6.
 */
const path = require('path');
const webpack = require('webpack');
const node_modules_dir = path.join(__dirname, 'node_modules');

const config = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:3000',
        'webpack/hot/only-dev-server',
        './app/Resources/js/app.js'
    ],
    output: {
        path: path.join(__dirname, 'web/dist'),
        filename: 'bundle.js',
        publicPath: 'http://127.0.0.1:3000/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: 'node_modules',
                include: [path.join(__dirname, 'app/Resources/js'), path.join(__dirname, 'web/bundles/*/js')],
                loader: 'react-hot!babel'
            }, {
                test: /\.css/,
                loader: 'style!css?modules!postcss'
            }
            , {
                test: /\.less/,
                loader: 'style!css!less'
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ]
};

module.exports = config;
