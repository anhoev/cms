const _ = require('lodash');
const path = require('path');
const jsonfn = require('json-fn');
const history = require('connect-history-api-fallback');

const convertFormToSchema = require('./utils/form.util').convertFormToSchema;

module.exports = async function (cms) {
  const {mongoose} = cms;

  const makeSchema = (_with) => _.pick({
    label: String,
    ref: String,
    labelProp: String,
    flex: {
      type: String, form: {
        inputType: 'select',
        options: ['md2', 'md3', 'md4', 'md5', 'md6', 'md7', 'md8', 'md9', 'md10', 'md11', 'md12'],
        notOnlyValueInOptions: true
      }
    },
    addable: Boolean,
    lazy: {type: Boolean, form: {addable: true}},
    selectNodeAfterClick: Boolean,
    notOnlyValueInOptions: {type: Boolean, form: {addable: true}},
    allowDuplicates: {type: Boolean, form: {addable: true}},
    editable: Boolean,
    chips: Boolean,
    isVisible: {
      type: {},
      form: {type: 'editor', height: '100px', flex: 'md12', addable: true}
    },
    onChange: {
      type: {},
      form: {type: 'editor', height: '100px', flex: 'md12', addable: true}
    },
    normalize: {
      type: {},
      form: {type: 'editor', height: '100px', flex: 'md12', addable: true}
    },
    itemText: {
      type: {},
      form: {type: 'editor', height: '100px', flex: 'md12', addable: true}
    },
    itemValue: {
      type: {},
      form: {type: 'editor', height: '100px', flex: 'md12', addable: true}
    },
    choiceKey: String,
    choiceKeyOutside: Boolean,
    noPanel: Boolean,
    returnObject: Boolean,
    options: {
      type: {
        choice: String,
        textValue: {
          type: [{
            value: String,
            text: String
          }],
          form: {type: 'tableArray'}
        },
        onlyValue: {
          type: [{String}],
          form: {type: 'input@multiSelect'}
        },
        code: {
          type: {},
          form: {type: 'editor', height: '200px'}
        }
      },
      form: {type: 'choice', choiceKeyOutside: true, choiceKey: 'optionsType'}
    },
    dynamicFields: {
      type: {
        queryString: String,
        code: {
          type: {},
          form: {type: 'editor', height: '200px'}
        }
      },
      form: {type: 'choice', choiceKeyOutside: true, choiceKey: 'dynamicFieldsType'}
    },
    getText: {
      type: {},
      form: {type: 'editor', height: '200px'}
    },
    children: String,
    expansion: {
      type: [{String}],
      form: {type: 'input@multiSelect'}
    }
  }, _with);

  const w = (obj) => {
    let _obj = _.mapValues(obj, (v, k) => {
      return makeSchema(v);
    });

    return ({
      type: {
        key: String,
        default: String,
        unique: {type: Boolean, form: {addable: true}},
        form: {type: _.assign({choice: String}, _obj), form: {choiceKey: 'type', choiceKeyOutside: true}}
      }
    });
  };

  let buildFormSchema = {
    name: {type: String, flex: 'md4'},
    class: {type: String, flex: 'md4'},
    alwaysLoad: {type: Boolean, flex: 'md4'},
    type: {type: String,
      form: {
        type: 'input@select',
        options: ['Collection', 'Component', 'Extension', 'FormField'],
        flex: 'md6',
        notOnlyValueInOptions: true
      }
    },
    title: {type: String, flex: 'md6'},
    fields: {
      type: [{
        choice: String,
        virtual: _.merge(w({
          //'computed': ['label', 'flex', 'addable', 'isVisible']
        }), {type: {form: {form: {dynamicFields: '.mixed'}}}}),
        string: _.merge(w({
          'input': ['label', 'flex', 'addable', 'isVisible', 'onChange'],
          'input@select': ['label', 'flex', 'options', 'addable', 'isVisible', 'notOnlyValueInOptions', 'onChange', 'returnObject', 'itemText', 'itemValue', 'chips']
        }), {type: {form: {form: {dynamicFields: '.string'}}}}),
        number: _.merge(w({
          'input@number': ['label', 'flex', 'addable', 'isVisible'],
          'input@select:number': ['label', 'flex', 'options', 'addable', 'isVisible', 'notOnlyValueInOptions', 'onChange', 'returnObject', 'itemText', 'itemValue', 'chips']
        }), {type: {form: {form: {dynamicFields: '.number'}}}}),
        boolean: w({
          'input@switch': ['label', 'flex', 'addable', 'isVisible'],
          'input@checkbox': ['label', 'flex', 'addable', 'isVisible']
        }),
        objectId: _.merge({
          type: {
            key: String,
            default: String,
            ref: String,
            autopopulate: Boolean,
            populateSelect: {
              type: [String], form: {
                type: 'input@multiSelect', addable: true, flex: 'md12', isVisible: function ({model}) {
                  return model.autopopulate;
                }
              }
            },
          }
        }, w({
          'ref-select': ['label', 'flex', 'labelProp', 'addable', 'isVisible', 'editable']
        }), {type: {form: {form: {dynamicFields: '.ref'}}}}),
        date: _.merge(w({
          'input@date': ['label', 'flex', 'addable', 'isVisible'],
          'input@datetime-local': ['label', 'flex', 'addable', 'isVisible']
        }), {type: {form: {form: {dynamicFields: '.date'}}}}),
        object: _.merge({
          type: {
            key: String,
            default: String,
            mixed: Boolean
          }
        }, _.assign(w({
          'object': ['label', 'flex', 'noPanel', 'addable', 'isVisible'],
          'choice': ['label', 'flex', 'choiceKey', 'choiceKeyOutside', 'isVisible'],
          'object@dynamic': ['label', 'flex', 'noPanel', 'addable', 'dynamicFields', 'isVisible']
        })), {type: {form: {form: {type: 'choice', dynamicFields: '.object'}}}}),
        mixed: _.merge({
          type: {
            key: String,
            default: String,
            mixed: Boolean
          }
        }, _.assign(w({
          'array': ['label', 'flex', 'addable', 'isVisible'],
          'tableArray': ['label', 'flex', 'expansion', 'addable', 'isVisible'],
          'choiceArray': ['label', 'flex', 'addable', 'choiceKey', 'isVisible'],
          'object': ['label', 'flex', 'noPanel', 'addable', 'isVisible'],
          'choice': ['label', 'flex', 'choiceKey', 'choiceKeyOutside', 'isVisible'],
          'object@dynamic': ['label', 'flex', 'noPanel', 'addable', 'dynamicFields', 'isVisible'],
          'tree': ['label', 'children', 'getText', 'selectNodeAfterClick'],
          'input@select': ['label', 'flex', 'options', 'addable', 'isVisible', 'returnObject', 'itemText', 'itemValue', 'chips','normalize'],
          'input@multiSelect': ['label', 'flex', 'options', 'addable', 'isVisible', 'returnObject', 'itemText', 'itemValue', 'chips', 'allowDuplicates','normalize']
        })), {type: {form: {form: {type: 'choice', dynamicFields: '.mixed'}}}}),
        array: _.merge(w({
          'array': ['label', 'flex', 'addable', 'isVisible'],
          'tableArray': ['label', 'flex', 'expansion', 'addable', 'isVisible', 'lazy'],
          'choiceArray': ['label', 'flex', 'addable', 'choiceKey', 'isVisible', 'lazy'],
          'input@multiSelect': ['label', 'flex', 'options', 'addable', 'isVisible', 'returnObject', 'itemText', 'itemValue', 'chips', 'allowDuplicates','normalize']
        }), {type: {form: {form: {dynamicFields: '.array'}}}})
      }],
      form: {type: 'tree', children: 'fields', choiceKey: 'schemaType'}
    },
    extensions: {
      type: [{choice: String}],
      form: {type: 'choiceArray', choiceKey: 'extensionType', dynamicFields: '.form-extension', flex: 'md12'}
    },
    tabs: {
      type: [{
        name: String,
        fields: {type: [String], form: {type: 'input@multiSelect'}}
      }],
      form: {type: 'tableArray'}
    }
  };

  const FormBuilderInfo = {
    name: 'BuildForm',
    title: 'name',
    autopopulate: true,
    schemaOptions: {strict: false},
    alwaysLoad: true,
    tabs: {
      Advance: ['name', 'class', 'alwaysLoad', 'tabs', 'type', 'title'],
      Extension: ['extensions']
    }
  };

  function onInitCollection(schema, collectionName, schemaForm) {
    if (schemaForm && !_.isEmpty(schemaForm.extensions)) {
      let preComputedExtensions = jsonfn.clone(_.filter(schemaForm.extensions, {extensionType: 'PreComputed'}), true, true);
      for (const {fn} of preComputedExtensions) {
        schema.pre('findOneAndUpdate', async function (next, done) {
          const update = this.getUpdate();
          const doc = await this.model.findOne(this.getQuery());
          if (!Object.keys(update).find(k => k.includes('$'))) {
            fn.bind(this)(doc, update, cms, next);
          } else {
            //merge to $set
          }
        })
      }
    }
    schema.onPostSave(function (doc) {
      if (doc) {
        cms.socket/*.to(`collectionSubscription${collectionName}`)*/
          .emit('changeCollectionList', {
            collection: collectionName,
            type: 'update',
            doc: doc
          });
      } else {
        cms.socket.to(`collectionSubscription${collectionName}`)
          .emit('changeCollectionList', {
            collection: collectionName,
            type: 'reload'
          });
      }
    });

    schema.onPostRemove(function (doc) {
      if (doc) {
        cms.socket.to(`collectionSubscription${collectionName}`)
          .emit('changeCollectionList', {
            collection: collectionName,
            type: 'remove',
            doc: doc
          });
      } else {
        cms.socket.to(`collectionSubscription${collectionName}`)
          .emit('changeCollectionList', {
            collection: collectionName,
            type: 'reload'
          });
      }
    });
  }

  function initSchema(schemaForm) {
    try {
      cms.registerSchema(convertFormToSchema(schemaForm), {
        name: schemaForm.name,
        title: schemaForm.title,
        alwaysLoad: schemaForm.alwaysLoad,
        tabs: _({...schemaForm.tabs}).keyBy('name').mapValues(v => v.fields).value(),
        form: schemaForm.fields,
        autopopulate: true,
        initSchema(schema) {
          onInitCollection(schema, schemaForm.name, schemaForm);
        }
      });
    } catch (e) {
      console.warn(e);
    }
  }

  const BuildForm = cms.registerSchema(buildFormSchema, {
    ...FormBuilderInfo,
    initSchema(schema) {
      if (!global.APP_CONFIG.replica) {
        schema.onPostSave(function (form) {
          if (form && form.type === 'Collection') {
            form = jsonfn.clone(form, true, false);
            if (cms.Types[form.name]) {
              delete cms.mongoose.connection.models[form.name];
              delete cms.Types[form.name];
            }
            initSchema(form);
            cms.socket.emit('reloadSchema');
          }
          cms.emit(`model-created:${form.name}`)
        });
      }
      // Init collection subscription for form builder
      onInitCollection(schema, FormBuilderInfo.name);
    }
  });
  //todo: change stream
  if (global.APP_CONFIG.replica) {
    BuildForm.watch().on('change', async change => {
      if (['update', 'insert'].includes(change.operationType)) {
        let form = await BuildForm.findOne({_id: change.documentKey}).lean();
        console.log(`change schema: ${form.name}`, form);
        if (form && form.type === 'Collection') {
          form = jsonfn.clone(form, true, false);
          if (cms.Types[form.name]) {
            delete cms.mongoose.connection.models[form.name];
            delete cms.Types[form.name];
          }
          initSchema(form);
          cms.socket.emit('reloadSchema');
        }
      }
    });
  }

  const forms = await BuildForm.find({}).lean();
  forms.filter(f => f.type === 'Collection').forEach(form => {
    initSchema(form);
  });

  cms.execPostSync('load:buildform');
};
