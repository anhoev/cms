'use strict';
const _ = require('lodash');
const path = require('path');
const JsonFn = require('json-fn');
const cheerio = require('cheerio');
const traverse = require('traverse');
require('generator-bind').polyfill();
const unless = require('express-unless');
const autopopulate = require('mongoose-autopopulate');

module.exports = (cms) => {
  const {app, Q} = cms;

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
        toJSON: {virtuals: true}
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
          fn: this.fn,
          serverFn: this.serverFnForClient,
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

  // websocket

  cms.io.on(`connection`, function (socket) {

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
        cms.middleware.collection({collections: Types, socket}, _.once(function (err, result) {
          fn(JsonFn.stringify(result.collections));
        }));
        // fn(jsonfn.stringify(Types));
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

    socket.on('interface', async function ({name, chain}, fn) {
      chain = JsonFn.clone(chain, true)
      const model = cms.getModel(name);
      cms.middleware.interface({name, chain, socket, model}, _.once(async function (err, result) {
        try {
          if (err) {
            fn(err);
          }
          if (result.chain[0].fn === 'new') {
            return fn(null, new result.model(...result.chain[0].args));
          }
          for (const {fn, args} of result.chain) result.model = result.model[fn](...args);
          let response = await result.model;
          fn(null, response);
        } catch (e) {
          fn(e);
        }

      }));
    });
  });
};
