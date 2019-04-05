const path = require('path');
const signale = require('signale');

const AppConfig = require('../configs/app.config');
const gitUtils = require('../../src/utils/git.util');

module.exports = async function setupPlugin() {
  const plugins = (await AppConfig()).plugins;
  const pathStore = path.join(__dirname, '../plugins');
  try {
    await gitUtils.cloneListPlugins(plugins, pathStore);
    signale.success('Clone plugin success');
  } catch (e) {
    signale.error('Clone error, info: ' + e);
  }
};
