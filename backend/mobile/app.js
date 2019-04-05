const signale = require('signale');

const appConfig = require('./configs/app.config');
const databaseConfig = require('./configs/database');
const expressConfig = require('./configs/express.config');

(async function () {
  // console.time('Time config');
  signale.time('Time -setup');
  global.APP_CONFIG = await appConfig();
  expressConfig();
  databaseConfig();
  signale.timeEnd('Time -setup');
})()

module.exports = 'app';
