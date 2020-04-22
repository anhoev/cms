const chalk = require('chalk');
const signale = require('signale');
const mongoose = require('mongoose');
const cms = require('../src/cms');
// const AppConfig = require('../app.config');

module.exports = async function connect() {
  const appConfig = global.APP_CONFIG;
  if (appConfig.database.options && appConfig.database.options.replicaSet) appConfig.replica = true;

  let isConnectedBefore = false;
  let uri;

  if (appConfig.database.uri) {
    uri = appConfig.database.uri;
  } else {
    uri = `mongodb://${appConfig.database.host}:${appConfig.database.port}/${appConfig.database.dbName}`
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
    mongoose.connect(uri, connectionOptions);
  }

  mongoose.connect(uri, connectionOptions).then(async () => {
    // console.log(`connect db ${uri} success`);
    const BuildForm = cms.getModel('BuildForm');
    const count = await BuildForm.countDocuments();
  });

  mongoose.connection.on('error', function (err) {
    console.log('Could not connect to Mongodb: ', err);
  });

  mongoose.connection.on('disconnected', function () {
    console.log('Db has lost connection...');
    if (!isConnectedBefore) {
      setTimeout(connect, 5000);
    }
  });

  mongoose.connection.on('connected', function () {
    isConnectedBefore = true;
    signale.success(chalk.default.bgCyan.black(`[Mongodb] name: "${appConfig.database.dbName}" has connected successfully!`));
  });

  mongoose.connection.on('reconnected', function () {
    console.log('Db has reconnected!');
  });

  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      console.log('Mongoose default connection disconnected through app terminal!');
      process.exit(0);
    });
  });
};
