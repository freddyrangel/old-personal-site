const { resolve } = require('path');
const sourceDirectory = resolve('src');
const targetDirectory = resolve('build');

module.exports = {
  mode: 'development',
  context: sourceDirectory,
  output: {
    path: targetDirectory,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
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
  entry: './index.js'
};
