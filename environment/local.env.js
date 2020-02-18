const path = require('path');

module.exports = {
  app: {
    port: 8888,
    host: '0.0.0.0'
  },
  database: {
    host: 'localhost',
    port: 27017,
    dbName: 'mobile10'
  },
  plugins: [
    {
      name: 'core-plugin',
      url: 'https://github.com/anhoev/core-plugin.git',
      branch: 'master'
    },
    {
      name: 'digital-signage-plugin',
      url: 'https://github.com/anhoev/digital-signage-plugin.git',
      branch: 'master',
      package: true
    }
  ],
  root: path.join(__dirname, '../../..'),
  basePlugin: path.join(__dirname, '../../plugins')
};
