/**
 * Created by tran on 24.12.15.
 */

'use strict';

const _ = require('lodash');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cms = require('../src/cms');
const plugins = require('./plugin.socket');
const watcher = require('./plugin.watcher');
const path = require('path');

module.exports = function (enabledPlugins) {
  cms.config = {};
  if (enabledPlugins) {
    console.log(`enabled plugins: ${enabledPlugins}`);
    cms.config.plugins = enabledPlugins;
  }
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

  cms.use(require('./test'));
  cms.app.use('/plugins', cms.middleware.static, cms.express.static(path.join(__dirname, 'plugins')));

};
