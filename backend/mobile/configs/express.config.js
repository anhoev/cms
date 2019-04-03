const path = require('path');
const cors = require('cors');
const chalk = require('chalk');
const helmet = require('helmet');
const signale = require('signale');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const cms = require('../../src/cms');
const AppConfig = require('./app.config');
const plugins = require('../../src/plugins/socket.plugin');
const watcher = require('../../src/plugins/watcher.plugin');
const LibConfig = require('../../src/lib.config');

module.exports = async function () {
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
  cms.app.use(bodyParser.urlencoded({ extended: false }));
  cms.use(plugins);
  // cms.use(authenticate);
  cms.use(watcher);
  cms.app.use(helmet());
  cms.app.use(compression());
  cms.app.use(cors({ origin: '*' }));
  cms.app.use('/plugins', cms.middleware.static, cms.express.static(LibConfig.BASE_PLUGIN));
};
