'use strict';
const _ = require('lodash');
const path = require('path');
const JsonFn = require('json-fn');
const cheerio = require('cheerio');
const traverse = require('traverse');
require('generator-bind').polyfill();
const unless = require('express-unless');
const autopopulate = require('mongoose-autopopulate');
const Query = require('mongoose/lib/query');
const Model = require('mongoose/lib/model');
const fs = require('fs');

module.exports = (cms) => {
  const {app, Q} = cms;
  const originalObjectIdCast = cms.mongoose.ObjectId.cast();

  cms.mongoose.ObjectId.cast(function (v) {
    try {
      if (typeof v === 'string') {
        const isKeyHexStr = v.length === 24 && /^[a-f0-9]+$/i.test(v);
        if (!isKeyHexStr) throw new Error();
      }
      return originalObjectIdCast(v);
    } catch (e) {
      if (typeof v === 'object') {
        if (v._id) return v._id;
      } else if (typeof v === 'string' || typeof v === 'number') {
        return v;
      }
      throw e;
    }
  });

  function registerSchema(schema, options) {
    const {
      name, label, formatter, formatterUrl, initSchema, title, fn = {},
      serverFn = {}, tabs, isViewElement = true, mTemplate, admin = {query: []},
      alwaysLoad = false, restifyOptions,
      info = {}, textIndex,
      controller, lean, link, schemaOptions, form
    } = options;
    if (cms.Types[name]) {
      return;
    }

    cms.filters.schema.forEach((fn) => fn(schema, name));
    if (!(schema instanceof cms.mongoose.Schema)) {
      schema = new cms.mongoose.Schema(schema, _.assign({
        toObject: {virtuals: true},
        toJSON: {virtuals: true},
        id: false,
        ...schema._id !== undefined && {_id: false},
        versionKey: false
      }, schemaOptions));
    }

    if (options.autopopulate) {
      schema.plugin(autopopulate);
    }


    if (textIndex) {
      schema.add({_textIndex: {type: String, form: false, index: 'text'}});
      schema.pre('findOneAndUpdate', function (next) {
        let _textIndex = '';
        traverse(this._update).forEach(function (node) {
          if (!node) {
            return;
          }
          if (this.key && !_.includes(['$set', '$setOnInsert', '__v', '_id', 'id'], this.key)) {
            const _type = schema.path(this.path.filter(p => p !== '$set' && p !== '$setOnInsert').join('.'));
            if (_type) {
              const type = _type.instance;
              if (type === 'ObjectID') {
                this.block();
                _textIndex += node[cms.Types[_type.options.ref].info.title] + ' ';
              } else if (type === 'Number') {
                _textIndex += node + ' ';
              } else if (type === 'String') {
                _textIndex += node + ' ';
              }
            } else {
              this.block();
            }
          } else if (this.key) {
            this.block();
          }
        });
        this._update._textIndex = _textIndex;
        next();
      });
    }


    // schema.index({'$**': 'text'});

    if (initSchema) {
      initSchema(schema);
    }
    let Model;
    if (name) {
      Model = cms.mongoose.model(name, schema);
      cms.restify.serve(app, Model, _.assign(restifyOptions, {lean: false}));
    }

    _.merge(fn, cms.filters.fn);
    _.merge(serverFn, cms.filters.serverFn);


    cms.Types[name] = {
      schema,
      Model,
      label,
      _form: form,
      clear() {
        this.Form = null;
        this.Paths = null;
        this.Queries = null;
      },
      Formatter: formatter,
      FormatterUrl: formatterUrl,
      info: _.assign({
        title,
        isViewElement,
        admin,
        alwaysLoad
      }, info),
      fn,
      serverFn,
      controller,
      link,
      mTemplate,
      lean,
      get webType() {
        if (!this.Form || !this.Paths) {
          _.assign(this, cms.utils.initType(schema, tabs, name));
        }

        return {
          onlySchema: !this.Model,
          template: this.template,
          label: this.label,
          form: this._form || this.Form,
          tabs: tabs,
          queries: this.Queries,
          paths: this.Paths,
          list: [],
          info: this.info,
          //fn: this.fn,
          //serverFn: this.serverFnForClient,
          // columns: _.map(_.pickBy(this.schema.paths, k => ['id', '_id', '__v', '_textIndex'].indexOf(k) === -1, true), (v, k) => {
          //   return v.options && v.options.label ? v.options.label : k;
          // }),
          store: this.store,
          controller: this.controller,
          lean: this.lean,
          link: this.link
        };
      },
      getWebTypeWithData: function* () {
        const Type = this.webType;
        Type.list = yield this.Model.find({});
        return Type;
      }
    };

    // todo: serverFn
    return Model;
  }

  cms.registerSchema = registerSchema;

  cms.importCollections = async (model, deleteExisting) => {
    const orderedCollectionNames = model['BuildForm']
      ? ['BuildForm', ...Object.keys(model).filter(value => value !== 'BuildForm')]
      : Object.keys(model);

    for (let name of orderedCollectionNames) {
      const {list} = model[name];
      if (cms.Types[name]) {
        const Model = cms.Types[name].Model;
        if (deleteExisting) {
          await Model.remove({});
        }
        for (let element of list) {
          let query = new Query({_id: element._id}, {upsert: true, new: true});
          await Model.findOneAndUpdate(query, element);
        }
      }
    }
  }

  // websocket

  cms.getTypes = function () {
    const Types = {};
    for (let collectionName in cms.Types) {
      Types[collectionName] = cms.Types[collectionName].webType;
    }
    return Types;
  };

  function getI18nFromPlugins() {
    const i18nCache = cms.cache.get('i18n');
    if (i18nCache) {
      return i18nCache;
    } else {
      let result = {};
      Object.keys(cms.allPlugins).forEach(key => {
        result = _.merge(result, cms.allPlugins[key].getI18n());
      });
      cms.cache.set('i18n', result);
      return result;
    }
  }

  const jsesc = require('jsesc');

  //todo: add this to somewhere else
  cms.middleware.getTypesMiddleware = function (req, res, next) {
    if (req.url !== '/index.html') {
      next();
      return;
    }
    cms.middleware.collection({collections: cms.getTypes(), session: req.session}, _.once(function (err, result) {
      const indexPath = path.resolve(__dirname, '../../../dist/index.html');
      const indexData = fs.readFileSync(indexPath, 'utf-8');
      const headTagPos = indexData.indexOf('</head>');
      const content = jsesc(JsonFn.stringify(result.collections), { json: true, isScriptContext: true });
      const loginUser = jsesc(JsonFn.stringify({ role: req.session && req.session.userRole }), { json: true, isScriptContext: true });
      const i18n = jsesc(JsonFn.stringify(getI18nFromPlugins()));
      const newIndexData = indexData.slice(0, headTagPos) + `<script>window._types_=${content};window._loginUser_=${loginUser};window._i18n_=${i18n}</script>` + indexData.slice(headTagPos);
      res.send(newIndexData);
    }));
  };

  cms.app.get('/getTypes', async function (req, res) {
    // const Types = {};
    // for (let collectionName in cms.Types) {
    //   Types[collectionName] = cms.Types[collectionName].webType;
    //   //Types[collectionName] = {info: cms.Types[collectionName].info};
    // }

    cms.middleware.collection({ collections: cms.getTypes(), session: req.session }, _.once(function (err, result) {
      res.send(JsonFn.stringify({
        collections: result.collections,
        loginUser: { role: req.session && req.session.userRole }
      }));
    }));
  })

  cms.socket.on(`connection`, function (socket) {

    socket.on('error', function (e) {
      console.warn(e);
    });

    socket.on('getTypes', async function (types, fn) {
      if (types === '*') {
        const Types = {};
        for (let collectionName in cms.Types) {
          Types[collectionName] = cms.Types[collectionName].webType;
          const collection = Types[collectionName];
          if (collection.info.alwaysLoad && collection.list.length === 0) {
            const list = await cms.getModel(collectionName).find({});
            collection.list.push(...list);
          }
        }
        cms.middleware.collection({collections: Types, session: socket.handshake.session}, _.once(function (err, result) {
          fn(JsonFn.stringify(result.collections));
        }));
        // fn(jsonfn.stringify(Types));
      }
    });

    socket.on('importCollections', async (model, deleteExisting, fn) => {
      try {
        await cms.importCollections(model, deleteExisting);
        fn('import success');
      } catch (e) {
        fn(e)
      }
    });

    socket.on('getForm', async function (name, fn) {
      fn(cms.Types[name].webType.form);
    });

    socket.on('registerSchema', async function (schema, options, fn) {
      options = JsonFn.parse(options);
      schema = JsonFn.parse(schema);
      if (cms.Types[options.name]) {
        delete cms.mongoose.connection.models[options.name];
        delete cms.Types[options.name];
      }
      cms.registerSchema(schema, options);
      fn();
    });

    socket.on('interface', async function ({name, chain}, fn = () => null) {
      chain = JsonFn.clone(chain, true);
      const model = cms.getModel(name);
      cms.middleware.interface({name, chain, socket, model}, _.once(async function (err, result) {
        try {
          if (err) {
            fn(err);
          }
          if (result.chain[0].fn === 'new') {
            return fn(null, new result.model(...result.chain[0].args));
          }
          for (const {fn, args} of result.chain) {
            if (result.model instanceof Query || result.model.constructor && new result.model() instanceof Model) {
              result.model = result.model[fn](...args);
            }
          }
          let response = await result.model;
          fn(null, response);
        } catch (e) {
          fn(e);
        }

      }));
    });
  });

  cms.execPostSync('load:types');
};
