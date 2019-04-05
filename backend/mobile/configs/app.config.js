const glob = require('glob');
const path = require('path');
const yargs = require('yargs');
const axios = require('axios');
const chalk = require('chalk');
const { merge } = require('lodash');
const signale = require('signale');
const { AppConst } = require('../commons/consts/app.const');

const argv = yargs.argv;

/**
 * @return {Promise<{database: {host: string, port: number,dbName: string, username: string, password: string, plugins: [{name: string, url: string, branch: string}]}}>}
 */
module.exports = async function setupEnv() {
  let mode = argv.env && Object.values(AppConst.NODE_ENV).indexOf(argv.env) > -1 ? argv.env : AppConst.NODE_ENV.LOCAL;
  mode = mode.trim();
  const environmentFile = glob.sync(path.normalize(__dirname + `/environment/${mode}.env.js`));
  if (environmentFile && !environmentFile.length) {
    signale.note(chalk.default.red(`No configuration file found for "${mode}" environment, using "${process.env.NODE_ENV}" instead!`));
  } else {
    signale.note(chalk.default.black.bgWhite(`Application loaded using the "${mode}" environment configuration.`));
    process.env.NODE_ENV = mode;
  }
  const configRemote = await getConfig();
  return merge(require(`./environment/${process.env.NODE_ENV}.env`), configRemote);

  function getConfig() {
    return new Promise(async (resolve, reject) => {
      const defaultConfig = AppConst.DEFAULT_CONFIG;
      if (argv.config) {
        return resolve(require(`../../.${argv.config}`));
      } else if (process.env.PATH_ENV || argv['url']) {
        const url = process.env.PATH_ENV || argv['url'];
        return await axios.get(url)
          .then(res => {
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
};

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
// exports.AppConfig = setupEnv();
