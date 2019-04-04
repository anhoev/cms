const chalk = require('chalk');
const signale = require('signale');
const mongoose = require('mongoose');
const AppConfig = require('../app.config');

module.exports = async function connect() {
  const _AppConfig = await AppConfig();
  let isConnectedBefore = false;
  const uri = `mongodb://${_AppConfig.database.host}:${_AppConfig.database.port}/${_AppConfig.database.dbName}`;
  const connectionOptions = {
    useNewUrlParser: true,
    // https://mongoosejs.com/docs/deprecations.html
    useFindAndModify: false,
    useCreateIndex: true
  };

  if (_AppConfig.database.username && _AppConfig.database.password) {
    connectionOptions.user = _AppConfig.database.username;
    connectionOptions.pass = _AppConfig.database.password;
  }

  connect();

  function connect() {
    if (isConnectedBefore) {
      console.info('Db reconnecting...');
    }
    mongoose.connect(uri, connectionOptions);
  }

  mongoose.connect(uri, connectionOptions).then(() => {
    // console.log(`connect db ${uri} success`);
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
    signale.success(chalk.default.bgCyan.black(`[Mongodb] name: "${_AppConfig.database.dbName}" has connected successfully!`));
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
