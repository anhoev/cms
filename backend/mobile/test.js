const _ = require('lodash');
const Path = require('path');
const jsonfn = require('../src/jsonfn');
const convertFormToSchema = require('./formUtils').convertFormToSchema;

module.exports = async function (cms) {
  const { mongoose } = cms;

  let schema = {
    name: { type: String, flex: 'md6' },
    nr: { type: Number, flex: 'md6' },
    switch: { type: Boolean, flex: 'md6' },
    sex: {
      type: Number,
      form: { inputType: 'select', options: [{ text: 'male', value: 0 }, { text: 'female', value: 1 }] }
    },
    select: { type: String, form: { inputType: 'select', options: ['A', 'B'] } },
    address: {
      street: String,
      city: String
    },
    addressArray2: [String],
    //addressArray2a: [{type: String}],
    addressArray1: [{
      street: String,
      city: String
    }],
    addressArray3: {
      type: [{ street: String, city: String }],
      form: { type: 'tableArray' }
    },
    layout: {
      choice: String,
      linear: {
        linearName: String
      },
      grid: {
        gridName: String
      }
    },
    layout2: [{
      choice: String,
      linear: {
        linearName: String
      },
      grid: {
        gridName: String
      }
    }]
    //company: {type: mongoose.Schema.Types.ObjectId, ref: 'Company', autopopulate: true}
  };

  const str = jsonfn.stringify(schema);
  const cloneSchema = jsonfn.parse(str);
  const TestForm = cms.registerSchema(cloneSchema, {
    name: 'TestForm',
    label: 'MyForm',
    formatter: `
        <div></div>         
      `,
    title: 'text',
    tabs: {
      Simple: ['addressArray2'],
      Object: ['addressArray1'],
      Table: ['addressArray3'],
      Choice: ['layout', 'layout2']
    },
    autopopulate: true
  });

  const fieldSchema = {
    key: String,
    label: String,
    flex: { type: String, form: { inputType: 'select', options: ['md2', 'md3', 'md4', 'md5', 'md6', 'md12'] } }
    //type: {type: String},
    //options: String,
  };

  const makeSchema = (_with) => _.pick({
    label: String,
    ref: String,
    labelProp: String,
    flex: { type: String, form: { inputType: 'select', options: ['md2', 'md3', 'md4', 'md5', 'md6', 'md12'] } },
    addable: Boolean,
    isVisible: {
      type: {},
      form: { type: 'editor', height: '100px', flex: 'md12', addable: true }
    },
    choiceKey: String,
    choiceKeyOutside: Boolean,
    noPanel: Boolean,
    options: {
      type: {
        choice: String,
        textValue: {
          type: [{
            value: String,
            text: String
          }],
          form: { type: 'tableArray' }
        },
        onlyValue: {
          type: [{ String }],
          form: { type: 'input@multiSelect' }
        },
        code: {
          type: {},
          form: { type: 'editor', height: '200px' }
        }
      },
      form: { type: 'choice', choiceKeyOutside: true, choiceKey: 'optionsType' }
    },
    dynamicFields: {
      type: {
        queryString: String,
        code: {
          type: {},
          form: { type: 'editor', height: '200px' }
        }
      },
      form: { type: 'choice', choiceKeyOutside: true, choiceKey: 'dynamicFieldsType' }
    },
    getText: {
      type: {},
      form: { type: 'editor', height: '200px' }
    },
    children: String,
    expansion: {
      type: [{ String }],
      form: { type: 'input@multiSelect' }
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
        form: { type: _.assign({ choice: String }, _obj), form: { choiceKey: 'type', choiceKeyOutside: true } }
      }
    });
  };

  let buildFormSchema = {
    name: { type: String, flex: 'md4' },
    class: { type: String, flex: 'md4' },
    alwaysLoad: { type: Boolean, flex: 'md4' },
    type: { type: String, form: { type: 'input@select', options: ['Collection', ''], flex: 'md6' } },
    title: { type: String, flex: 'md6' },
    fields: {
      type: [{
        choice: String,
        string: _.merge(w({
          'input': ['label', 'flex', 'addable', 'isVisible'],
          'input@select': ['label', 'flex', 'options', 'addable', 'isVisible']
        }), { type: { form: { form: { dynamicFields: '.string' } } } }),
        number: _.merge(w({
          'input@number': ['label', 'flex', 'addable', 'isVisible'],
          'input@select:number': ['label', 'flex', 'options', 'addable', 'isVisible']
        }), { type: { form: { form: { dynamicFields: '.number' } } } }),
        boolean: w({
          'input@switch': ['label', 'flex', 'addable', 'isVisible'],
          'input@checkbox': ['label', 'flex', 'addable', 'isVisible']
        }),
        objectId: _.merge({
          type: {
            key: String,
            default: String,
            ref: String,
            autopopulate: Boolean
          }
        }, w({
          'ref-select': ['label', 'flex', 'labelProp', 'addable', 'isVisible']
        }), { type: { form: { form: { dynamicFields: '.ref' } } } }),
        date: _.merge(w({
          'input@date': ['label', 'flex', 'addable', 'isVisible'],
          'input@datetime-local': ['label', 'flex', 'addable', 'isVisible']
        }), { type: { form: { form: { dynamicFields: '.date' } } } }),
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
        })), { type: { form: { form: { type: 'choice', dynamicFields: '.object' } } } }),
        mixed: _.merge({
          type: {
            key: String,
            default: String,
            mixed: Boolean
          }
        }, _.assign(w({
          'object': ['label', 'flex', 'noPanel', 'addable', 'isVisible'],
          'choice': ['label', 'flex', 'choiceKey', 'choiceKeyOutside', 'isVisible'],
          'object@dynamic': ['label', 'flex', 'noPanel', 'addable', 'dynamicFields', 'isVisible'],
          'tree': ['label', 'children', 'getText']
        })), { type: { form: { form: { type: 'choice', dynamicFields: '.mixed' } } } }),
        array: _.merge(w({
          'array': ['label', 'flex', 'addable', 'isVisible'],
          'tableArray': ['label', 'flex', 'expansion', 'addable', 'isVisible'],
          'choiceArray': ['label', 'flex', 'addable', 'isVisible'],
          'input@multiSelect': ['label', 'flex', 'options', 'addable', 'isVisible']
        }), { type: { form: { form: { dynamicFields: '.array' } } } })
      }],
      form: { type: 'tree', children: 'fields', choiceKey: 'schemaType' }
    },
    tabs: {
      type: [{
        name: String,
        fields: { type: [String], form: { type: 'input@multiSelect' } }
      }],
      form: { type: 'tableArray' }
    }
  };

  const BuildForm = cms.registerSchema(buildFormSchema, {
    name: 'BuildForm',
    title: 'name',
    autopopulate: true,
    schemaOptions: { strict: false },
    alwaysLoad: true,
    tabs: {
      Advance: ['name', 'class', 'alwaysLoad', 'tabs', 'type', 'title']
    },
    initSchema(schema) {
      schema.onPostSave(function (form) {
        if (form && form.type === 'Collection') {
          form = jsonfn.clone(form, true, true);
          if (cms.Types[form.name]) {
            delete cms.mongoose.connection.models[form.name];
            delete cms.Types[form.name];
          }
          initSchema(form);
          cms.io.emit('reloadSchema');
        }
      });
    }
  });

  function initSchema(schemaForm) {
    cms.registerSchema(convertFormToSchema(schemaForm), {
      name: schemaForm.name,
      title: schemaForm.title,
      alwaysLoad: schemaForm.alwaysLoad,
      tabs: _({ ...schemaForm.tabs }).keyBy('name').mapValues(v => v.fields).value(),
      form: schemaForm.fields,
      autopopulate: true,
      initSchema(schema) {
        schema.onPostSave(function (doc) {
          if (doc) {
            cms.io.to(`collectionSubscription${schemaForm.name}`)
              .emit('changeCollectionList', {
                collection: schemaForm.name,
                type: 'update',
                doc: doc
              });
          } else {
            cms.io.to(`collectionSubscription${schemaForm.name}`)
              .emit('changeCollectionList', {
                collection: schemaForm.name,
                type: 'reload'
              });
          }
        });

        schema.onPostRemove(function (doc) {
          if (doc) {
            cms.io.to(`collectionSubscription${schemaForm.name}`)
              .emit('changeCollectionList', {
                collection: schemaForm.name,
                type: 'remove',
                doc: doc
              });
          } else {
            cms.io.to(`collectionSubscription${schemaForm.name}`)
              .emit('changeCollectionList', {
                collection: schemaForm.name,
                type: 'reload'
              });
          }
        });
      }
    });
  }

  const forms = await BuildForm.find({}).lean();
  forms.filter(f => f.type === 'Collection').forEach(form => {
    initSchema(form);
  });

  /*const PluginFile = cms.registerSchema({
    path: 'String',
    type: {type: String, form: {inputType: 'select', options: ['frontend', 'backend']}},
    slot: [String],
  }, {
    name: 'PluginFile',
    title: 'name',
    autopopulate: true,
    schemaOptions: {strict: false}
  });*/

  //console.log(jsonfn.stringify({type: mongoose.Schema.Types.ObjectId}));
  cms.Types.BuildForm.webType.form;
};
