process.env.NODE_ENV = process.env.NODE_ENV || process.argv[2] || 'local';

exports = module.exports = require('./app');
