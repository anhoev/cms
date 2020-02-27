const path = require('path');
const cors = require('cors');
const chalk = require('chalk');
const helmet = require('helmet');
const signale = require('signale');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);
const history = require('connect-history-api-fallback');
const fs = require('fs');
const proxy = require('http-proxy-middleware');

module.exports = function (cms, config = {}) {
  const {useMongoSession = true} = config;
  const {app} = cms;

  app.use(bodyParser.json({limit: '5mb'}));
  app.use(bodyParser.urlencoded({extended: true, limit: '5mb'}));
  app.use(methodOverride());

  cms.app.use(cookieParser());
  cms.app.use(helmet());
  cms.app.use(compression());
  cms.app.use(cors({origin: '*'}));

  function useSession() {
    const session = expressSession({
      secret: 'best cms system',
      resave: false, saveUninitialized: true,
      cookie: {maxAge: 2628000000},
      expires: 30 * 24 * 60 * 60 * 1000,
      store: new MongoStore({mongooseConnection: cms.mongoose.connection})
    });
    cms._session = session;
    app.use(session);
    const sharedSession = require('express-socket.io-session');
    cms.io.use(sharedSession(session, {
      autoSave: true
    }));

    cms.socket.use(sharedSession(session, {
      autoSave: true
    }));
  }

  if (useMongoSession) useSession();
  //cms.execPost()

  cms.app.use('/plugins', cms.middleware.static, cms.express.static(global["APP_CONFIG"].pluginPath));

  cms.post('load:types', () => {
    if (fs.existsSync(path.join(__dirname, '../../../dist'))) {
      cms.r2.use('/', history(), cms.middleware.getTypesMiddleware, cms.express.static(path.join(__dirname, '../../../dist')));
    } else {
      const backofficeProxy = proxy('/', {
        target: `http://localhost:${process.env.PORT ? process.env.PORT : 8080}`
      });
      cms.r2.use('/', backofficeProxy);
    }

  })
}
