const { resolve }                 = require('path');
const HtmlWebpackPlugin           = require('html-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const sourceDirectory             = resolve('src');
const targetDirectory             = resolve('build');

module.exports = {
  entry: './entry.js',
  mode: 'development',
  context: sourceDirectory,
  devtool: 'eval-source-map',
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
      },
      //{
        //test: /\.svg$/,
        //include: [sourceDirectory],
        //exclude: /node_modules/,
        //use: [{ loader: 'svg-inline-loader' }]
      //},
      {
        test: /\.(pdf|svg|png|jpg|gif|eot|woff|ttf|cur|woff2)$/,
        include: [sourceDirectory],
        exclude: /node_modules/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: '[hash].[ext]'
          }
        }]
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


