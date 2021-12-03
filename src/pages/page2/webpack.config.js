const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const deps = require('../../../package.json').dependencies

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3002,
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
      name: 'page2',
      filename: 'entryTwo.js',
      exposes: {
        './PageTwo': './src/PageTwo',
      },
      shared: {
        react: {
          requiredVersion: deps.react,
          singleton: true 
        },
        'react-dom': {
          requiredVersion: deps['react-dom'],
          singleton: true 
        },
        'd3' :{
          import: 'd3',
          requiredVersion: deps['d3'],
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
