const path = require('path')
const slash = require('slash')
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const JavaScriptObfuscator = require('webpack-obfuscator')
const postcssAssets = require('postcss-assets')
const postcssNext = require('postcss-cssnext')
const stylelint = require('stylelint')
const CleanPlugin = require('./src/lib/clean-plugin');

const dev = process.env.NODE_ENV === 'development'
const stage = process.env.NODE_ENV === 'stage'
const prod = process.env.NODE_ENV === 'production'

const dirname = (process.platform === 'win32') ? slash(__dirname) : __dirname // Speciality for Windows OS

let plugins = [
	new CleanPlugin({
		files: ['dist/*'],
	}),
	new webpack.DefinePlugin({
		__DEVELOPMENT__: dev,
		__STAGE__: stage,
		__PRODUCTION__: prod,
		'process.env': {
			NODE_ENV: JSON.stringify(process.env.NODE_ENV),
		},
	}),
	new HtmlWebpackPlugin({
		template: 'public/index.html',
		inject: 'body',
    minify: {
      removeComments: true,
      collapseWhitespace: true
    },
	}),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		minChunks: Infinity,
		filename: 'vendor-[hash].js',
	}),
]

let mainEntry = []

if (dev) {
	mainEntry = [
		'react-hot-loader/patch',
		`webpack-dev-server/client?http://localhost:3000`,
		'webpack/hot/only-dev-server',
	]
}

mainEntry.push( path.resolve(dirname, 'src/index.js'))

dev && plugins.push(new webpack.NoEmitOnErrorsPlugin())
dev && plugins.push(new webpack.HotModuleReplacementPlugin())
dev && plugins.push(new webpack.NamedModulesPlugin())
prod && plugins.push(new webpack.LoaderOptionsPlugin({
	debug: true,
	options: {
		tslint: {
			failOnHint: true,
		},
		postcss: function () {
			return [
				stylelint({
					files: '../../src/*.css',
				}),
				postcssNext(),
				postcssAssets({
					relative: true,
				}),
			];
		},
	}
}))
prod && plugins.push(new webpack.optimize.UglifyJsPlugin({
	minimize: true,
	debug: false,
	compress: {
		warnings: false,
		screw_ie8: true,
		conditionals: true,
		unused: true,
		comparisons: true,
		sequences: true,
		dead_code: true,
		evaluate: true,
		if_return: true,
		join_vars: true,
	},
}))

// If obfuscation is needed uncomment these lines

// prod && plugins.push(new JavaScriptObfuscator({ // Minify code is not enough
// 	rotateUnicodeArray: true,
// }))

const config = {
	cache: dev,
	devtool: dev || stage ? 'cheap-module-eval-source-map' : 'hidden-source-map',
	context: path.resolve(dirname, '.'),
	entry: {
		'js': mainEntry,
		vendor: [
			'babel-polyfill',
      'prop-types',
			'react',
			'react-dom',
			'react-redux',
			'redux',
			'redux-thunk',

		],
	},
	output: {
		path: path.join(dirname, '/dist/'),
		filename: 'app-[hash].js', // Change it if you want other filename on build
	},
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000,
		ignored: /node_modules/,
	},
	module: {
		rules: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			// { test: /locale/, loaders: ["i18next-resource-store-loader"] },
			{ test: /.(png|woff(2)?|eot|ttf|svg|jpg|jpeg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=10000&name=[name]-[hash].[ext]' },
		],
	},
	resolve: {
		modules: [
			path.join(dirname, "src"),
			"node_modules",
		],
		extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
	},
	plugins: plugins,
}

module.exports = config
