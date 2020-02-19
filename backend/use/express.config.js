const path = require('path');
const cors = require('cors');
const chalk = require('chalk');
const helmet = require('helmet');
const signale = require('signale');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');


const routerConfig = require('./router');
const cms = require('../src/cms');
const libConfig = require('../src/lib.config');
const plugins = require('../src/plugins/socket.plugin');
// const watcher = require('../src/plugins/watcher.plugin');

module.exports = async function() {
  const appConfig = global.APP_CONFIG;
  cms.data.security = false;
  cms.useSession();
  cms.app.use(cookieParser());
  cms.app.use(bodyParser.urlencoded({ extended: false }));
  cms.use(plugins);
  // cms.use(authenticate);
  // cms.use(watcher);
  cms.app.use(helmet());
  cms.app.use(compression());
  cms.app.use(cors({ origin: '*' }));
  cms.app.use(routerConfig);
  cms.app.use('/plugins', cms.middleware.static, cms.express.static(libConfig.BASE_PLUGIN));

  cms.listen(appConfig.app.port, appConfig.app.host, () => {
    signale.success(chalk.default.bgCyan.black(`Server's running at: ${appConfig.app.port}`));
  });
};
