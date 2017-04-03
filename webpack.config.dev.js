const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

const ROOT_PATH = path.resolve(__dirname);

const ExtractTextPluginConfig = new ExtractTextPlugin('css/app.css')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: "Betaseries",
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    './src/index.js',
    './styles/main.scss',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/app.js'
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader']
      },
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(ROOT_PATH, 'src/components'),
      containers: path.resolve(ROOT_PATH, 'src/containers'),
    },
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
  ]
}