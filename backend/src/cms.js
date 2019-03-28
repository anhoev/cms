/**
 * @author AnhTT
 * @supported ManhNV
 * @description config cms
 */

const fs = require('fs');
const co = require('co');
const _ = require('lodash');
const http = require('http');
const path = require('path');
const jade = require('jade');
const yargs = require('yargs');
const request = require('request');
const express = require('express');
const socket = require('socket.io');
const mongoose = require('mongoose');
const NodeCache = require('node-cache');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const methodOverride = require('method-override');
const restify = require('express-restify-mongoose');

require('generator-bind').polyfill();

const _app = express();
const server = http.Server(_app);

const argv = yargs.argv;
const env = argv.mode;
const io = socket(server);
const MongoStore = require('connect-mongo')(expressSession);
const cache = new NodeCache({ useClones: false, stdTTL: 20 * 60 });
const app = new Proxy(_app, {
  get(target, key) {
    if (['get', 'post', 'put', 'patch', 'delete'].indexOf(key) !== -1) {
      return function () {
        if (arguments[1] && arguments[1].constructor && arguments[1].constructor.name === 'GeneratorFunction') {
          const cb = arguments[1];
          const callback = function (req, res) {
            co(cb.bind(this, ...arguments)).then(() => {
            }, onerror.bind(onerror, req, res));
          };
          arguments[1] = callback;
        }
        target[key](...arguments);
      };
    }
    return target[key];

    function onerror(req, res, e) {
      if (e.handler) {
        return e.handler(req, res);
      }
      cms.data.handlers.forEach(handler => handler(req, res, e));
    }
  }
});
const CMS_KEY = Symbol('CMS');
const menu = {
  top: '51px',
  bodyPaddingTop: '51px',
  inverse: false
};
const WebType = { APPLICATION: 'APPLICATION', WEB: 'WEB' };
const download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use(methodOverride());

const cms = {
  storage: path.join(__dirname, '../..', 'storage'),
  useSession: function () {
    const session = expressSession({
      secret: 'best cms system',
      resave: false, saveUninitialized: true,
      cookie: { maxAge: 2628000000 },
      expires: 30 * 24 * 60 * 60 * 1000,
      store: new MongoStore({ mongooseConnection: mongoose.connection })
    });

    app.use(session);

    io.use(require('express-socket.io-session')(session, {
      autoSave: true
    }));
  },
  io,
  readFile,
  download,
  compile,
  compiler,
  /**
   * type: NodeCache
   * format: `${prefix}:path`
   *     prefix can be 'file', 'jade', 'static'...
   * e.g. : 'file:/base/index.json'
   */
  cache,
  clearCache,
  /**
   * contain all important data
   */
  data: {
    // ng environment filter
    basePath: '',
    baseUrlPath: '',
    ngEn: [],
    errors: {},
    handlers: [],
    baseTemplatePath: '',
    security: true,
    /**
     * array from page formatter
     * format: [{name,path}]
     * e.g. [{path:'page/main.jade', name:'main page'}]
     */
    pageFormatter: [],
    /**
     * array from category , use to group elements
     * format: [Object]
     * e.g. [{Type:{Clothes:'',Food:''}}]
     */
    categories: {},
    online: {
      menu,
      autoOpenAdmin: false
    },
    webtype: WebType.WEB
  },
  filters: {
    element: [],
    /*
     element's type : function ($, content){}
     */
    page: [],
    /**
     * fn (schema,name)
     */
    schema: [],
    /**
     * cms.filters.form[name](Form => {})
     */
    form: {},
    /**
     * array of function (function(field,{key,label}) {})
     */
    field: [],
    fn: {},
    serverFn: {}
  },
  utils: {},
  express,
  ews: null,
  app,
  mongoose,
  routers: {},
  restify,
  Types: {},
  getPath: p => p,
  use: fn => fn(cms),
  listen,
  serverFn: {},
  fn: {},
  Enum: {
    Load: { NOT: 'NOT', LOADING: 'LOADING', LOADED: 'LOADED' },
    Mode: { ADMIN: 'ADMIN', NORMAL: 'NORMAL' },
    WebType
  },
  get instance() {
    return global[CMS_KEY];
  },
  set menu(menu) {
    _.assign(this.data.online.menu, menu);
  },
  getModel: function (type) {
    const cType = this.Types[type];
    return cType ? cType.Model : {};
  },
  middleware: {
    socket(a, fn) {
      fn(null, a);
    },
    express(a, fn) {
      fn(null, a);
    },
    interface(a, fn) {
      fn(null, a);
    },
    collection(a, fn) {
      fn(null, a);
    },
    static(req, res, next) {
      next();
    },
    api: []
  },
  useMiddleWare(type, func) {
    if (env === 'safemode') {
      console.log('Running on safe mode');
      return;
    }
    switch (type) {
      case 'socket':
        cms.io.use(func(cms));
        break;
      case 'express':
        cms.middleware.express = func(cms);
        break;
      case 'interface':
        cms.middleware.interface = func(cms);
        break;
      case 'collection':
        cms.middleware.collection = func(cms);
        break;
      case 'static':
        cms.middleware.static = func(cms);
        break;
      case 'api':
        cms.use(func);
    }
  }
};

global.cms = cms;
module.exports = cms;

//#region FUNCTION SUPPORT

function listen() {
  cms.use(require('./extensions/schema.ext'));
  cms.use(require('./libs/utils/query.util'));
  cms.use(require('./types'));
  //cms.use(require('./config'));
  _.each(cms.routers, r => app.use(r));
  //app.listen(...arguments);
  server.listen(...arguments);
}

/**
 * @method compile
 * @param path
 * @param [options]
 * @param {Function} options.compiler
 * @returns {Choice|Undefined}
 */
function compile(path, options = {}) {
  const _compiler = options.compiler;
  let fn = cms.cache.get(`template:${path}`);
  if (!fn) {
    fn = _compiler ? _compiler(path) : compiler(path);
    cms.cache.set(`template:${path}`, fn);
  }
  return fn;
}

function compiler(path) {
  if (path.split('\.').pop() === 'jade') {
    return jade.compileFile(path);
  }
  try {
    return function () {
      return this.content;
    }.bind({ content: fs.readFileSync(path, 'utf8') });
  } catch (e) {
  }
}

/**
 * @method readFile
 * @description use to readFile first from cache
 * @param path
 * @returns {Choice|Undefined}
 */
function readFile(path) {
  let result = cms.cache.get(`file:${path}`);
  if (!result) {
    result = fs.readFileSync(path, 'utf8');
    cms.cache.set(`file:${path}`, result);
  }
  return result;
}

/**
 * @method clearCache
 * @description clear cache cms
 */
function clearCache() {
  cms.cache.del(cms.cache.keys());
}

//#endregion
