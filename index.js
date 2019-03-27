const node_env = process.env.NODE_ENV = process.env.NODE_ENV || process.argv[2] || 'local';
if (['local', 'test'].indexOf(node_env) > -1) {
  require('@babel/core');
  require('@babel/polyfill');
}

exports = module.exports = require('./backend/src/app');
