const minimist = require('minimist');
const { spawn, spawnSync } = require('child_process');
const npmInit = require('./npm_init');
const { addSubmodule, checkoutBranch } = require('./git_utils');
const path = require('path');
const isPortReachable = require('is-port-reachable');

function initCms() {
  addSubmodule('https://github.com/gigasource/backoffice.git');
  checkoutBranch('./backoffice', 'deploy_optimize');
  npmInit('./backoffice');
  console.log('Done');
}

async function execCms(argv) {
  let port = 8080;
  while ((await isPortReachable(port, {host: 'localhost'}))) {
    port = port + 1;
  }
  let config = 'node_modules/cms/config/pos-config.json';
  if (argv.c || argv.config) {
    config = argv.c || argv.config;
  }
  const backofficeProcess = spawn('npx', ['vue-cli-service', 'serve'], {
    cwd: './backoffice'
  });
  const cmsProcess = spawn('node', ['backend/use/index.js', `--config=${config}`], {
    cwd: './node_modules/cms',
    env: Object.assign(process.env, {
      PORT: port
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
  backofficeProcess.stdout.on('data', data => {
    console.log(data.toString('utf8'));
  })
}

module.exports = async function (argv2) {
  const argv = minimist(argv2, {
    boolean: [ 'init', 'i' ],
    string: [ 'c', 'config' ],
  });
  if (argv.i || argv.init) {
    initCms();
    return;
  }
  if (argv.e || argv.exec) {
    await execCms(argv);
    return;
  }
};
