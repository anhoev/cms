import path from 'path';
import cors from 'cors';
import chalk from 'chalk';
import signale from 'signale';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import {cms} from './cms.config';
import {AppConfig} from "./app.config";
import plugins from '../libs/plugins/socket.plugin';
// const watcher = require('./plugin.watcher');

export default async function () {
  const enabledPlugins = (await AppConfig).plugins;
  cms.config = {};
  if (enabledPlugins) {
    console.log(`enabled plugins: ${enabledPlugins}`);
    cms.config.plugins = enabledPlugins;
  }
  cms.data.security = false;
  const port = 8888;
  cms.listen(port, () => {
    signale.success(chalk.default.bgCyan.black(`Server's running at: ${port}`));
  });
  cms.useSession();
  cms.app.use(cookieParser());
  cms.app.use(bodyParser.urlencoded({extended: false}));
  cms.use(plugins);
  // cms.use(authenticate);
  // cms.use(watcher);

  cms.use(require('../../mobile/test'));
  cms.app.use('/plugins', cms.middleware.static, cms.express.static(path.join(__dirname, 'plugins')));
};
