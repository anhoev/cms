const path = require('path');
const signale = require('signale');
const cms = require('../src/cms');

process.env.NODE_ENV = process.env.NODE_ENV || process.argv[2] || 'local';

const mongooseConfig = require('./mongo.config');
const pluginConfig = require('./plugin.config');
const {getConfig} = require("../src/utils/config.util");

(async () => {
  signale.time('Time -setup');
  global.APP_CONFIG = await getConfig();
  await pluginConfig();
  await mongooseConfig();
  await cms.init();
  signale.timeEnd('Time -setup');
})();
