const { resolve }                 = require('path');
const HtmlWebpackPlugin           = require('html-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const sourceDirectory             = resolve('src');
const targetDirectory             = resolve('build');

module.exports = {
  entry: './entry.js',
  mode: 'development',
  context: sourceDirectory,
  output: {
    path: targetDirectory,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Freddy Rangel | Software Engineer',
      template: 'templates/dev.html',
      showErrors: true,  // set to false in production
      hash: false, // set to true in production
      minifi: false // set to true in production
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [sourceDirectory],
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },
  resolve: {
    modules: [sourceDirectory, 'node_modules'],
    extensions: ['.js', '.jsx', '*'],
    plugins: [
      new DirectoryNamedWebpackPlugin({
        honorIndex: true,
        include: [sourceDirectory],
        exclude: /node_modules/
      })
    ]
  }
};


