const fs = require('fs');
const glob = require('glob');
const path = require('path');
const yargs = require('yargs');
const axios = require('axios');
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const signale = require('signale');
const { merge } = require('lodash');

const { AppConst } = require('./app.env');

const argv = yargs.argv;

/**
 * @return {Promise<{database: {host: string, port: number,dbName: string, username: string, password: string, plugins: [{name: string, url: string, branch: string}]}}>}
 */
module.exports = async function setupEnv() {
  let mode = (argv.env && Object.values(AppConst.NODE_ENV).indexOf(argv.env) > -1 ? argv.env : AppConst.NODE_ENV.LOCAL).trim();

  const environmentFile = glob.sync(path.resolve(`environment/${mode}.env.js`));
  if (environmentFile && !environmentFile.length) {
    signale.note(chalk.default.red(`No configuration file found for "${mode}" environment, using "${process.env.NODE_ENV}" instead!`));
  } else {
    signale.note(chalk.default.black.bgWhite(`Application loaded using the "${mode}" environment configuration.`));
    //fixme: don't overwrite process.env
    process.env.NODE_ENV = mode;
  }

  const configRemote = await getConfig();
  return merge(require(path.resolve(`environment/${mode}.env`)), configRemote);
};

function getConfig() {
  return new Promise(async (resolve, reject) => {
    const defaultConfig = AppConst.DEFAULT_CONFIG;

    if (argv.config && fs.existsSync(argv.config)) {
      signale.note('App config from file');
      return resolve(require(path.resolve(argv.config)));
    } else if (process.env.PATH_ENV || argv['url']) {
      signale.note('App config from url');
      const url = process.env.PATH_ENV || argv['url'];
      return await axios.get(url).then(res => {
        const pathStore = path.join(__dirname, '../../config');
        try {
          mkdirp.sync(pathStore);
          fs.writeFileSync(`${pathStore}/config.json`, JSON.stringify(res.data));
        } catch (e) {
          console.error(e)
        }

        return resolve(res.data);
      })
      .catch(err => {
        console.log(err.stack);
        return resolve(defaultConfig);
      });
    } else {
      return resolve(defaultConfig);
    }
  });
}

/**
 * @field AppConfig
 * @type {Promise}
 * @property {Promise} database
 * @property {string} database.host
 * @property {string} database.port
 * @property {string} database.dbName
 * @property {string} database.username
 * @property {string} database.password
 * @property {[string]} plugins
 * @property {[string]} plugins
 */
