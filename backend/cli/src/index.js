const minimist = require('minimist');
const { spawn, spawnSync } = require('child_process');
const npmInit = require('./npm_init');
const { addSubmodule, checkoutBranch, clonePlugins, downloadFile, getAssetsList } = require('./git_utils');
const path = require('path');
const {getConfig} = require('../../src/utils/config.util');
const CmsPlugin = require('../../src/plugins/cms.plugin');
const isPortReachable = require('is-port-reachable');
const fs = require('fs');
const _ = require('lodash');
const getRollUpConfig = require('../../src/utils/rollup.util');
const FileHelper = require('../../src/utils/files.util');
const rollup = require('rollup');

const inquirer = require('inquirer');
inquirer.registerPrompt('search-checkbox', require('inquirer-search-checkbox'));

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
  console.log('Start fetching plugins');
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

async function buildSsrFiles() {
  const config = await getConfig();
  const {plugins, pluginPath} = config;
  const pluginNames = fs.readdirSync(pluginPath).filter(item => fs.statSync(path.join(pluginPath, item)).isDirectory());

  const pluginInfos = pluginNames.reduce((acc, item) => {
    if (!Array.isArray(plugins) || !plugins.length > 0 || plugins.find(i => i.name === item)) {
      return Object.assign(acc, {[item]: new CmsPlugin(path.join(pluginPath, item), item, null, plugins.find(i => i.name === item))});
    }
    return acc;
  }, {});

  const pluginFiles = _.reduce(pluginInfos, (acc, plugin) => {
    const manifestPath = path.join(plugin.pluginPath, 'manifest.js');

    if (fs.existsSync(manifestPath) && fs.statSync(manifestPath).isFile()) {
      const {files} = require(manifestPath);
      acc.push(...files.map(file => ({
        ...file,
        plugin: plugin.pluginName
      })))
    }
    return acc
  }, []);

  pluginFiles.filter(file => file.loader && file.loader.type && file.loader.type === 'ssr').map(item => {
    const plugin = pluginInfos[item.plugin];
    if (plugin) {
      const fileName = path.basename(item.path);
      const absoluteFilePath = path.join(plugin.pluginPath, item.path);
      const absoluteDestPath = `${pluginInfos[item.plugin].pluginPath}/dist/${fileName}`;

      const rollUpConfig = getRollUpConfig(fileName, absoluteDestPath, absoluteFilePath);
      rollup.rollup(rollUpConfig).then(async (buildBundle) => {
        const generated = await buildBundle.generate(rollUpConfig.output);
        FileHelper.addNew(absoluteDestPath, generated.output[0].code);
        console.log(`SSR file built: ${absoluteDestPath}`);
      }); // let errors be thrown to make errors visible
    }
  });
}

async function download() {
  const res = await getAssetsList();
  if (!res || res.status !== 200) {
    console.error('Can\'t get assets list');
    return;
  }
  const assets = res.data;
  const config = await inquirer.prompt({
    type: 'search-checkbox',
    name: 'download',
    message: 'Select file to download',
    choices: (() => {
      const listAssets = [];
      const keyList = Object.keys(assets);
      keyList.forEach(key => {
        listAssets.push(
          {
            name: `${key} ${assets[key].env}`,
            value: key
          }
        );
      });
      return listAssets;
    })()
  });
  const downloadList = config.download;
  for (let i = 0; i < downloadList.length; i++) {
    const file = downloadList[i];
    try {
      await downloadFile(file);
    } catch (err) {
      console.error(`Download file ${file} error`);
      // console.log(err);
    }
  }
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
    await buildSsrFiles();
    return;
  }
  if (argv2[0] === 'download') {
    await download();
    return;
  }
  throw new Error('No such command');
};
