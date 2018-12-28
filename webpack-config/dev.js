const smartMerge = require('webpack-merge').smart;
const base       = require('./base.js');

module.exports = smartMerge(base, {
  mode: 'development',
  devtool: 'eval-source-map'
});
