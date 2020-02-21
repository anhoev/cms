const path = require('path');
const signale = require('signale');

process.env.NODE_ENV = process.env.NODE_ENV || process.argv[2] || 'local';
global._PATH_PLUGIN = path.resolve(process.env.PLUGIN_PATH ? process.env.PLUGIN_PATH : 'plugins');

const configLoader = require('./config-loader');
const mongooseConfig = require('./mongo.config');
const pluginConfig = require('./plugin.config');
const expressConfig = require('./express.config');

(async () => {
  signale.time('Time -setup');
  global.APP_CONFIG = await configLoader();
  await pluginConfig();
  await mongooseConfig();
  await expressConfig();
  signale.timeEnd('Time -setup');
})();

