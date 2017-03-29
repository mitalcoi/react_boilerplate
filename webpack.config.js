const path = require('path');
const webpack = require('webpack');
const config = require('./src/server/config.json');
const isProd = config.env == 'production';

let loaders = [
    {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
    },
    {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
    {test: /\.gif$/, loader: 'url-loader?mimetype=image/png'},
    {test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: 'url-loader?mimetype=application/font-woff'},
    {test: /\.png$/, loader: 'url-loader?limit=100000'},
    {test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: 'file-loader?name=[name].[ext]'},
    {
        test: /\.(jpe?g|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    },
];
let entry = {
    app: [
        'babel-polyfill',
        './src/client/index'
    ],
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'redux-form', 'react-router', 'redux-thunk', 'superagent', '@blueprintjs/core', '@blueprintjs/datetime', 'history', 'react-select-plus', 'react-star-rating-component', 'react-ultimate-pagination', 'socket.io-client', 'react-notification','react-addons-css-transition-group', 'redux-persist'],

};

let plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(config.env),
            SOCKET_HOST: JSON.stringify(config.socket_host),
            SENTRY_DSN: JSON.stringify(config.raven_dsn)
        }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor',
         'vendor.js'),
];
if (!isProd) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    loaders.push(
        {
            test: /\.(scss|sass)$/i,
            loader: 'style!css!sass',
            include: path.join(__dirname, 'src')
        });
} else {
    const ExtractTextPlugin = require('extract-text-webpack-plugin');
    var ManifestPlugin = require('webpack-manifest-plugin');

    plugins.push(new ExtractTextPlugin('styles.[chunkhash].css'));
    loaders.push(
        {
            test: /\.(scss|sass)$/i,
            loader: ExtractTextPlugin.extract('style', 'css!sass'),
            include: path.join(__dirname, 'src')
        });
    plugins.push(new ManifestPlugin())


    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false,
        compress: {
            sequences: true,
            booleans: true,
            loops: true,
            unused: true,
            warnings: false,
            drop_console: true,
            unsafe: true
        }
    }));

}


module.exports = {
    debug: !isProd,
    cache: !isProd,
    devtool:  'eval',
    entry: entry,
    output: {
        path: path.join(__dirname, 'src', 'server', 'dist'),
        filename: isProd ? '[name].[chunkhash].js' : '[name].js',
        publicPath: '/dist/'
    },
    module: {
        loaders: loaders
    },
    plugins: plugins,
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss', '.sass', '.png'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'flow-typed'),
        ],
    }
};
