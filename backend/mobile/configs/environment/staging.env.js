import path from 'path';

module.exports = {
  database: {
    host: '',
    port: 27017,
    dbName: ''
  },
  plugins: [],
  basePlugin: path.join(__dirname, '../../../mobile/plugins')
};
