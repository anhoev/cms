const minimist = require('minimist');
const { spawn, spawnSync } = require('child_process');
const npmInit = require('./npm_init');
const { addSubmodule, checkoutBranch, clonePlugins } = require('./git_utils');
const path = require('path');
const fs = require('fs');
const isPortReachable = require('is-port-reachable');

function initCms() {
  addSubmodule('https://github.com/gigasource/backoffice.git');
  checkoutBranch('./backoffice', 'deploy_optimize');
  npmInit('./backoffice');
  console.log('Done');
}

async function execCms(argv) {
  // find port for backoffice
  let port = 8080;
  while ((await isPortReachable(port, {host: 'localhost'}))) {
    port = port + 1;
  }
  // config file
  let config = '';
  if (argv.c || argv.config) {
    config = path.resolve(argv.c || argv.config);
  }
  if (!config) {
    throw new Error('No config found');
    return;
  }
  let specificEnviroment = argv.backend || argv.frontend;
  let backofficeProcess;
  let cmsProcess;
  if (!specificEnviroment || argv.frontend) {
    backofficeProcess = spawn('npx', ['vue-cli-service', 'serve'], {
      cwd: './backoffice'
    });
    backofficeProcess.stdout.on('data', data => {
      console.log(data.toString('utf8'));
    })
  }
  if (!specificEnviroment || argv.backend) {
    cmsProcess = spawn('node', ['backend/use/index.js', `--config=${config}`], {
      cwd: './node_modules/cms',
      env: Object.assign(process.env, {
        PORT: port,
        PLUGIN_PATH: path.resolve('plugins')
      })
    });
    cmsProcess.stdout.on('data', (data) => {
      console.log(data.toString('utf8'));
    });
    cmsProcess.on('close', () => {
      console.log('Closing cms');
    });
    cmsProcess.stderr.on('data', (err) => {
      console.error(err.toString('utf8'));
    });
  }
}

async function getPlugins(argv) {
  let config = '';
  if (argv.c || argv.config) {
    config = path.resolve(argv.c || argv.config);
  }
  if (!config) {
    throw new Error('No config found');
    return;
  }
  const plugins = require(config).plugins;
  await clonePlugins(plugins);
}

module.exports = async function (argv2) {
  const argv = minimist(argv2.slice(1), {
    boolean: [ 'frontend', 'backend' ],
    string: [ 'c', 'config' ],
  });
  if (argv2[0] === 'init') {
    initCms();
    return;
  }
  if (argv2[0] === 'start') {
    await execCms(argv);
    return;
  }
  if (argv2[0] === 'plugins') {
    await getPlugins(argv);
    return;
  }
  throw new Error('No such command');
};
