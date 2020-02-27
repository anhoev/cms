/**
 * @author AnhTT
 * @supported ManhNV
 * @description config cms
 */

const fs = require('fs');
const _ = require('lodash');
const http = require('http');
const yargs = require('yargs');
const request = require('request');
const express = require('express');
const socket = require('socket.io');
const mongoose = require('mongoose');
const NodeCache = require('node-cache');

const restify = require('express-restify-mongoose');
const Kareem = require('kareem');

const app = express();
const server = http.Server(app);

const argv = yargs.argv;
const env = argv.mode;
if (env === 'safemode') {
  console.log('Running on safe mode');
}
const io = socket(server);
const cache = new NodeCache({useClones: false, stdTTL: 20 * 60});

const CMS_KEY = Symbol('CMS');

const download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

const cms = {
  async init() {
    await cms.use(require('./express.config'));
    await cms.use(require('./extensions/schema.ext'));
    await cms.use(require('./utils/query.util'));
    await cms.use(require('./types'));
    await cms.use(require('./plugins/socket.plugin'));
    await cms.use(require('./buildform'));
    //cms.use(require('./config'));

    app.use(cms.r2);


    server.listen(global.APP_CONFIG.port);
  },
  socket: io.of('/app'),
  io: io,
  download,
  api: {},
  cache,
  clearCache,
  /**
   * contain all important data
   */
  data: {
    // ng environment filter
    basePath: '',
    baseUrlPath: '',
    errors: {},
    handlers: [],
    security: true,
    /**
     * array from category , use to group elements
     * format: [Object]
     * e.g. [{Type:{Clothes:'',Food:''}}]
     */
    categories: {},
    expressHandlers: []
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
  r1: express.Router(),
  r2: express.Router(),
  app,
  mongoose,
  routers: {},
  restify,
  Types: {},
  getPath: p => p,
  use: async function (fn) {
    const argv = [...arguments]
    argv.shift();
    await fn(cms, ...argv);
  },
  serverFn: {},
  fn: {},
  Enum: {
    Load: {NOT: 'NOT', LOADING: 'LOADING', LOADED: 'LOADED'},
    Mode: {ADMIN: 'ADMIN', NORMAL: 'NORMAL'}
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
    async collection(a, fn) {
      const collections = a.collections;
      for (const collectionName in collections) {
        const collection = collections[collectionName];
        if (collection.info.alwaysLoad && collection.list.length === 0) {
          const list = await cms.getModel(collectionName).find({});
          collection.list.push(...list);
        }
      }
      fn(null, a);
    },
    static(req, res, next) {
      next();
    },
    api: []
  },
  useMiddleWare(type, func) {
    if (env === 'safemode') {
      return;
    }
    switch (type) {
      case 'socket':
        cms.socket.use(func(cms));
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

_.extend(cms, new Kareem());
require('event-emitter')(cms);

global.cms = cms;
module.exports = cms;



/**
 * @method clearCache
 * @description clear cache cms
 */
function clearCache() {
  cms.cache.del(cms.cache.keys());
}