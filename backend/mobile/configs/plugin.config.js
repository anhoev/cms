const path = require('path');
const signale = require('signale');

const AppConfig = require('../configs/app.config');
const gitUtils = require('../../src/utils/git.util');

module.exports = async function setupPlugin() {
  const plugins = (await AppConfig()).plugins;
  const pathStore = path.join(__dirname, '../plugins');
  return await gitUtils.cloneListPlugins(plugins, pathStore)
    .then(() => {
      signale.success('Clone plugin success');
    })
    .catch(err => {
      signale.error('Clone error, info: ' + err);
    });
};
