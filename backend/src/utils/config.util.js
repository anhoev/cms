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
    return require(path.resolve(argv.config));
  } else if (process.env.PATH_ENV || argv['url']) {
    signale.note('App config from url');
    const url = process.env.PATH_ENV || argv['url'];
    return (await axios.get(url)).data;
  } else {
    throw new Error('please put a config file')
  }
}

async function getConfig() {
  if (_config) return _config;
  const config = getConfigFromArgv();
  _.assign(config, await getConfigFile());
  if (!config.pluginPath && isALibrary()) {
    config.pluginPath = path.resolve(__dirname, '../../../../../plugins');
  } else if (!config.pluginPath && isASubmodule()) {
    config.pluginPath = path.resolve(__dirname, '../../../../plugins');
  } else if (!config.pluginPath) {
    config.pluginPath = path.resolve(__dirname, '../../../plugins');
  }
  if (!config.port) config.port = 8888;
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
