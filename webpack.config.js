var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,
  entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './assets/js/index'
  ], // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name]-[hash].js",
      publicPath: 'http://localhost:3000/assets/bundles/',
  },

  plugins: [
  	new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass!sass-resources'
            },
            {
                test: /bootstrap\/dist\/js\/umd\//,
                loader: 'imports?jQuery=jquery'
            },
            { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
            { test: /\.(ttf|eot)$/, loader: 'file' }
        ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}

