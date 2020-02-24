const path = require('path');
const signale = require('signale');
const cms = require('../src/cms');
global['cms'] = cms;
const gitUtils = require('../src/utils/git.util');

module.exports = async function setupPlugin() {
  const appConfig = global.APP_CONFIG;
  cms.config = {};
  if (appConfig.plugins) {
    signale.complete(`Apply plugins: ${appConfig.plugins.map(plugin => plugin.name).join(', ')}`);
  }

  const plugins = global.APP_CONFIG.plugins;
  try {
    await gitUtils.cloneListPlugins(plugins, LibConfig.BASE_PLUGIN);
    signale.success('Clone plugin success');
  } catch (e) {
    signale.error('Clone error, info: ' + e);
  }

  cms.config.plugins = appConfig.plugins;
};
