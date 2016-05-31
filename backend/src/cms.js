'use strict';
const _ = require('lodash');
global['_'] = _;
const JsonFn = require('json-fn');
global['JsonFn'] = JsonFn;
const express = require('express');
const _app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const restify = require('express-restify-mongoose');
const Q = require('q');
const session = require('express-session');
const Reflect = require('harmony-reflect');
require('generator-bind').polyfill();
const jade = require('jade');
const NodeCache = require("node-cache");
const fs = require('fs');
const cache = new NodeCache({useClones: false, stdTTL: 20 * 60});
const ngcompile = require('../lib/ng.compile');

const app = new Proxy(_app, {
    get(target, key) {
        if (['get', 'post', 'put', 'delete'].indexOf(key) !== -1) {
            return function () {
                if (arguments[1] && arguments[1].constructor && arguments[1].constructor.name === 'GeneratorFunction') {
                    const cb = arguments[1];
                    const callback = function (req, res) {
                        Q.onerror = onerror.bind(onerror, req, res);
                        Q.spawn(cb.bind(this, ...arguments));
                    };
                    arguments[1] = callback;
                }
                target[key](...arguments);
            };
        }

        return target[key];

    }
});

app.use(session({secret: 'best cms system', resave: false, saveUninitialized: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('method-override')());

// todo : use class for cms
const cms = {
    readFile,
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
        categories: {}
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
    app,
    routers: {},
    restify,
    Types: {},
    getPath: p => p,
    use: fn => fn(cms),
    listen,
    Q,
    serverFn: {},
    fn: {},
    Enum: {
        Load: {NOT: 'NOT', LOADING: 'LOADING', LOADED: 'LOADED'},
        Mode: {
            ADMIN: 'ADMIN',
            NORMAL: 'NORMAL'
        }
    }
}

ngcompile.prototype.onEnvReady(() => {
    cms.ng = new ngcompile([
        {name: 'ui.bootstrap', path: 'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js'}
    ], null, null, (ng) => {
        cms.data.ngEn.forEach(fn => fn(ng));
    });
});

function onerror(req, res, e) {
    if (e.handler) return e.handler(req, res);
    cms.data.handlers.forEach(handler => handler(req, res, e));
}

/**
 *
 * @param mongoose
 * @param app
 * @returns cms;
 */
module.exports = cms;

function listen() {
    cms.use(require('./form'));
    cms.use(require('./angular_resolve'));
    cms.use(require('./types'));
    cms.use(require('./types.builder'));
    cms.use(require('./wrapper'));
    cms.use(require('./container'));
    cms.use(require('./user'));
    cms.use(require('./query'));
    cms.use(require('./admin'));
    cms.use(require('./category'));
    cms.use(require('./element.filter'));
    cms.use(require('./error.handler'));
    cms.use(require('./utils'));
    cms.use(require('./serverFn'));
    _.each(cms.routers, r => app.use(r));
    app.listen(...arguments);
}

/**
 *
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

    return function () {
        return this.content;
    }.bind({content: fs.readFileSync(path, 'utf8')})
}

/**
 * use to readFile first from cache
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

function clearCache() {
    cms.cache.del(cms.cache.keys());
}

