const path = require('path');
process.env.NODE_ENV = process.env.NODE_ENV || process.argv[2] || 'local';

global._PATH_PLUGIN = path.join(__dirname, 'plugins');

exports = module.exports = require('./app');
