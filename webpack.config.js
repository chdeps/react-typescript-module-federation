const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const deps = require('./package.json').dependencies

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    port: 3000,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
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
      name: 'container',
      remotes: {
        page1: "page1@http://localhost:3001/entryOne.js",
        page2: "page2@http://localhost:3002/entryTwo.js",
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
          'd3' :{
            import: 'd3',
            requiredVersion: deps['d3'],
          }
        },
        '_components/Shared',
        '_k/singleton',
        '_k/Context'
      ]
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
