const path = require('path');

module.exports = {
  app: {
    port: 8888,
    host: '0.0.0.0'
  },
  database: {
    host: '',
    port: 27017,
    dbName: ''
  },
  plugins: [],
  root: path.join(__dirname, '../../..'),
  basePlugin: path.join(__dirname, '../plugins')
};
