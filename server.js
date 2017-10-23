/*eslint no-console: ["error", { allow: ["log", "error"] }] */
const webpack = require('webpack');
const config = require('./webpack.conf.js');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
	hot               : true,
	historyApiFallback: true,
}).listen(port, host, error => {
	console.log(error || `Started WebpackDevServer on http://${host}:${port}`)
});
