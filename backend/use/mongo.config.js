const chalk = require('chalk');
const signale = require('signale');
const orm = require('schemahandler');
//const mongoose = require('mongoose');
const cms = require('../src/cms');
// const AppConfig = require('../app.config');

module.exports = async function connect() {
  const appConfig = global.APP_CONFIG;
  if (appConfig.database.options && appConfig.database.options.replicaSet) appConfig.replica = true;

  let isConnectedBefore = false;
  let uri;
  let dbName = appConfig.database.dbName

  if (appConfig.database.uri) {
    uri = appConfig.database.uri;
  } else {
    uri = `mongodb://${appConfig.database.host}:${appConfig.database.port}`
  }

  const connectionOptions = {
    useNewUrlParser: true,
    // https://mongoosejs.com/docs/deprecations.html
    useFindAndModify: false,
    useCreateIndex: true,
    ...appConfig.database.options
      //replicaSet : 'rs0',
  };

  if (appConfig.database.username && appConfig.database.password) {
    connectionOptions.user = appConfig.database.username;
    connectionOptions.pass = appConfig.database.password;
    connectionOptions.authSource = appConfig.database.authSource || "admin";
  }

  connect();

  function connect() {
    if (isConnectedBefore) {
      console.info('Db reconnecting...');
    }
    orm.connect({uri, options: connectionOptions}, dbName, function (err) {
      if (err) {
        console.log('Could not connect to Mongodb: ', err);
        return;
      }
      _init();
    });
  }

  function _init() {
    orm.connection.on('disconnected', function () {
      console.log('Db has lost connection...');
      if (!isConnectedBefore) {
        setTimeout(connect, 5000);
      }
    });

    orm.connection.on('connected', function () {
      isConnectedBefore = true;
      signale.success(chalk.default.bgCyan.black(`[Mongodb] name: "${orm.connection.s.url}" has connected successfully!`));
    });

    orm.connection.on('reconnected', function () {
      console.log('Db has reconnected!');
    });
  }
};
