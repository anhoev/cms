const glob = require('glob');
const path = require('path');
const yargs = require('yargs');
const axios = require('axios');
const chalk = require('chalk');
const {merge} = require('lodash');
const signale = require('signale');
const {AppConst} = require('../commons/consts/app.const');

const argv = yargs.argv;

async function setupEnv() {
  let mode = process.env.NODE_ENV = (process.env.NODE_ENV || AppConst.NODE_ENV.LOCAL);
  if (process.argv.length > 2 && Object.values(AppConst.NODE_ENV).indexOf(process.argv[2]) > -1) {
    mode = process.argv[2];
  }
  mode = mode.trim();
  if (Object.values(AppConst.NODE_ENV).indexOf(mode) === -1) {
    mode = AppConst.NODE_ENV.LOCAL;
  }
  const environmentFile = glob.sync(path.normalize(__dirname + `/environment/${mode}.env.js`));
  if (environmentFile && !environmentFile.length) {
    signale.note(chalk.default.red(`No configuration file found for "${mode}" environment, using "${process.env.NODE_ENV}" instead!`));
  } else {
    signale.note(chalk.default.black.bgWhite(`Application loaded using the "${mode}" environment configuration.`));
    process.env.NODE_ENV = mode;
  }
  const configRemote = await getConfig();
  // apply secret key
  return await merge(require(`./environment/${process.env.NODE_ENV}.env`), configRemote);

  function getConfig() {
    const url = process.env.PATH_ENV;
    return new Promise(async (resolve, reject) => {
      const defaultConfig = {
        'database': {
          'host': 'localhost',
          'port': 27017,
          'dbName': 'mobile10'
        }
      };
      if (argv.config) {
        return resolve(require(`../../.${argv.config}`));
      } else if (mode === AppConst.NODE_ENV.LOCAL) {
        return resolve(defaultConfig);
      } else if (process.env.PATH_ENV) {
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
exports.AppConfig = setupEnv();
