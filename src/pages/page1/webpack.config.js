const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

console.log(__dirname)

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
      filename: 'remoteEntry.js',
      exposes: {
        './CounterAppOne': './src/components/CounterAppOne',
      },
      shared: [
        'react', 
        'react-dom'
      ], 
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
