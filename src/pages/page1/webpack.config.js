const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('../../../package.json').dependencies
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3001,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: "../../../tsconfig.json" })]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'page1',
      filename: 'entryOne.js',
      exposes: {
        './PageOne': './src/PageOne',
      },
      shared: [
        { 
          react: {
            requiredVersion: deps.react,
            singleton: true 
          },
          'react-dom': {
            requiredVersion: deps['react-dom'],
            singleton: true 
          },
        },
        '_components/Shared',
        '_k/singleton'
      ]
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
