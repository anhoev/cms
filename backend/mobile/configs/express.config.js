const path = require('path');
const cors = require('cors');
const chalk = require('chalk');
const signale = require('signale');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const cms = require('./cms.config');
const AppConfig = require('./app.config');
const plugins = require('../../src/plugins/socket.plugin');
// const watcher = require('./plugin.watcher');

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
  cms.app.use(bodyParser.urlencoded({extended: false}));
  cms.use(plugins);
  // cms.use(authenticate);
  // cms.use(watcher);

  cms.use(require('../test'));
  cms.app.use(cors());
  cms.app.use('/plugins', cms.middleware.static, cms.express.static(path.join(__dirname, 'plugins')));
};
