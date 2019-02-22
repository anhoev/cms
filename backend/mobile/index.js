/**
 * Created by tran on 24.12.15.
 */

'use strict';
const _ = require('lodash');
const cms = require('../src/cms');
const plugins = require('./plugin.socket');
const watcher = require('./plugin.watcher');
const path = require('path');
cms.data.security = false;
cms.listen(8888);
cms.useSession();
cms.use(plugins);
cms.use(watcher);
cms.app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

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
cms.app.use('/plugins', cms.express.static(path.join(__dirname, 'plugins')));
cms.mongoose.connect('mongodb://localhost/mobile10');

cms.use(require('./test'));
