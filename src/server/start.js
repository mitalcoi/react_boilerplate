const path = require('path');
const express = require('express');
const fs = require('fs');

const app = express();
const env = process.env.APP_ENV;
const isProd = env == 'production';

if (!isProd) {
    const webpack = require('webpack');
    const devMiddleware = require('webpack-dev-middleware');
    const config = require('./../../webpack.config');
    const compiler = webpack(config);
    app.use(devMiddleware(compiler, {
        publicPath: config.output.publicPath,
        historyApiFallback: true,
        quiet: true
    }));
    app.use('/dist', express.static(path.join(__dirname, 'dist')));
}

app.use(handleRender);

function handleRender(req, res) {
    res.send(renderFullPage())
}
let manifest;
const getAssetName = (name) => {
    if (isProd) {
        if (!manifest) {
            manifest = JSON.parse(fs.readFileSync(path.join(__dirname, 'dist', 'manifest.json'), 'utf8'));
        }
        return manifest[name];
    } else {
        return name;
    }
}
function renderFullPage() {

    let css = '';
    if (isProd) {
        css = `<link href="/dist/${getAssetName('app.css')}" rel="stylesheet" type="text/css">`;
    }
    return `
    <!doctype html>
    <html>
      <head>
        ${css}
      </head>
      <body>
        <div id="root"></div>
        <script src="/dist/${getAssetName('vendor.js')}"></script>
        <script src="/dist/${getAssetName('app.js')}"></script>
      </body>
    </html>
    `
}

app.listen(3000, function (err) {
    if (err) {
        console.log('port', 3000);
        return console.error(err);
    }

    console.info('----\n==> ✅  LHD is running [%s]', env);
    console.info('==> 💻  Open %s:%s in a browser to view the app.', process.env.HOSTNAME, 3000);
});
