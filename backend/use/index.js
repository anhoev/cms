const argv = require('yargs').argv;
const signale = require('signale');
const cms = require('../src/cms');

//process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const mongooseConfig = require('./mongo.config');
const pluginConfig = require('./plugin.config');
const loggingConfig = require('./logging.config');
const {getConfig} = require("../src/utils/config.util");

(async () => {
  signale.time('Time -setup');
  global.APP_CONFIG = await getConfig();
  if (argv['withFrontend']) await require('./runFrontend')();
  await pluginConfig();
  await mongooseConfig();
  await cms.init();
  // loggingConfig must be place after cms.init() because it needs to use socket in global.cms object
  loggingConfig();
  signale.timeEnd('Time -setup');
})();
