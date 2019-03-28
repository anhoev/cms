const databaseConfig = require('./configs/database');
const expressConfig = require('./configs/express.config');

expressConfig();
databaseConfig();
module.exports = 'app';