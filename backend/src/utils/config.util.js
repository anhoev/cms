const argv = require('yargs').argv;
const _ = require('lodash');
const signale = require("signale");
const axios = require('axios');
const path = require('path');
const fs = require('fs');
let _config;

function getConfigFromArgv() {
  return _.pick(argv, ['pluginPath', 'port']);
}

async function getConfigFile() {
  if (argv.config && fs.existsSync(argv.config)) {
    signale.note('App config from file');
    let _path = path.resolve(argv.config);
    if (fs.existsSync(_path)) {
      return require(_path);
    } else if (_.endWith(_path, '.js')) {
      return require(_path.replace('.js', '.json'));
    }
  } else if (process.env.PATH_ENV || argv['url']) {
    signale.note('App config from url');
    const url = process.env.PATH_ENV || argv['url'];
    return (await axios.get(url)).data;
  } else if (process.env.CONFIG_PATH) {
    signale.note('App config from pkg');
    return require(process.env.CONFIG_PATH);
  } else {
    throw new Error('please put a config file')
  }
}

async function setEnv() {
  if (process.env.NODE_ENV) return;
  if (argv.development) {
    process.env.NODE_ENV = 'development';
  } else if (argv.production) {
    process.env.NODE_ENV = 'production';
  }
  process.env.NODE_ENV = 'local';
}

async function getConfig() {
  if (_config) return _config;
  const config = getConfigFromArgv();
  await setEnv();
  _.assign(config, await getConfigFile());
  if (config.pluginPath) {
    config.pluginPath = path.resolve(__dirname, `../../../../${config.pluginPath}`);
  } else if (!config.pluginPath && isALibrary()) {
    config.pluginPath = path.resolve(__dirname, '../../../../../plugins');
  } else if (!config.pluginPath && isASubmodule()) {
    config.pluginPath = path.resolve(__dirname, '../../../../plugins');
  } else if (!config.pluginPath) {
    config.pluginPath = path.resolve(__dirname, '../../../plugins');
  }
  if (!config.port) config.port = 8888;
  if (!config.proxyPort) config.proxyPort = 8080;
  _config = config;
  return config;
}

function isALibrary() {
  const _path = path.resolve(__dirname, '../../../../');
  return path.basename(_path) === 'node_modules'
}

function isASubmodule() {
  const _path = path.resolve(__dirname, '../../../../');
  return fs.statSync(`${_path}/package.json`).isFile();
}

module.exports = {
  getConfig
}
