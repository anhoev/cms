/**
 * Created by tran on 24.12.15.
 */

'use strict';

const _ = require('lodash');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cms = require('../src/cms');
const path = require('path');
const argv = require('yargs').argv;
cms.config = {};
if (argv.config) {
  const config = require(path.join('../..', argv.config));
  if (config) {
    cms.config = config;
    console.log(`running with database: ${config.database}`);
    console.log(`enabled plugins: ${config.plugins}`);
  }
}

const plugins = require('./plugin.socket');
const watcher = require('./plugin.watcher');
cms.data.security = false;
cms.listen(8888);
cms.useSession();
cms.app.use(cookieParser());
cms.app.use(bodyParser.urlencoded({ extended: false }));
cms.use(plugins);
// cms.use(authenticate);
cms.use(watcher);

cms.app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

const database = cms.config.database || 'mobile10';

cms.mongoose.connect(`mongodb://localhost/${database}`);

cms.use(require('./test'));
