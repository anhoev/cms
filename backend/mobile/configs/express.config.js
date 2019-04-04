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
const pluginConfig = require('../configs/plugin.config');
const plugins = require('../../src/plugins/socket.plugin');
const watcher = require('../../src/plugins/watcher.plugin');
const LibConfig = require('../../src/lib.config');
const history = require('connect-history-api-fallback');

module.exports = async function () {
  console.time('Time config');
  const enabledPlugins = await AppConfig();
  cms.config = {};
  if (enabledPlugins) {
    signale.complete(`Apply plugins: ${enabledPlugins.plugins.map(plugin => plugin.name).join(',')}`);
    await pluginConfig();
    cms.config.plugins = enabledPlugins;
  }
  console.timeEnd('Time config');
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
  cms.app.use('/', history(), cms.express.static(path.join(__dirname, '../../dist')));
  cms.app.use(cors());
  cms.app.use('/plugins', cms.middleware.static, cms.express.static(LibConfig.BASE_PLUGIN));
};
