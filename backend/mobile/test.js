const _ = require('lodash');
const Path = require('path');
const jsonfn = require('../src/jsonfn')

module.exports = async function (cms) {
  const {mongoose} = cms;

  let schema = {
    name: {type: String, flex: 'md6'},
    nr: {type: Number, flex: 'md6'},
    switch: {type: Boolean, flex: 'md6'},
    sex: {type: Number, form: {inputType: 'select', options: [{text: 'male', value: 0}, {text: 'female', value: 1}]}},
    select: {type: String, form: {inputType: 'select', options: ['A', 'B']}},
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
      type: [{street: String, city: String}],
      form: {type: 'tableArray'}
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
    }],
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
      Choice: ['layout', 'layout2'],
    },
    autopopulate: true
  });

  const Child = cms.registerSchema({
    name: String
  }, {
    name: 'Child',
    label: 'Child',
    title: 'name',
    autopopulate: true,
    alwaysLoad: true
  });

  const Parent = cms.registerSchema({
    name: String,
    child: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Child',
      autopopulate: true,
      label: 'Child'
    }
  }, {
    name: 'Parent',
    title: 'name',
    autopopulate: true
  });

  const fieldSchema = {
    key: String,
    label: String,
    flex: {type: String, form: {inputType: 'select', options: ['md2', 'md3', 'md4', 'md5', 'md6', 'md12']}}
    //type: {type: String},
    //options: String,
  }

  const makeSchema = (_with) => _.pick({
    label: String,
    flex: {type: String, form: {inputType: 'select', options: ['md2', 'md3', 'md4', 'md5', 'md6', 'md12']}},
    choiceKey: String,
    choiceKeyOutside: Boolean,
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
        }
      },
      form: {type: 'choice', choiceKeyOutside: true, choiceKey: 'optionsType'}
    },
  }, _with);

  const w = (obj) => {
    let _obj = _.mapValues(obj, (v, k) => {
      return makeSchema(v);
    });

    return ({
      type: {
        key: String,
        default: String,
        form: {type: _.assign({choice: String}, _obj), form: {choiceKey: 'type', choiceKeyOutside: true}}
      }
    });
  };

  let buildFormSchema = {
    name: {type: String, flex: 'md6'},
    type: {type: String, form: {type: 'input@select', options: ['Collection'], flex: 'md6'}},
    /*field: {
       choice: String,
       String: _.merge({} ,fieldSchema, {type: { default: 'input'}}),
       Number: _.merge({} ,fieldSchema, {type: {default: 'input:number'}}),
    },*/
    fields: {
      type: [{
        choice: String,
        /*String: fieldSchema,
        Number: fieldSchema,
        Boolean: fieldSchema,
        Object: _.omit(fieldSchema, ['flex']),
        Array: _.omit(fieldSchema, ['flex']),
        StringSelect: {
          type: {
            key: String,
            label: String,
            flex: {type: String, form: {inputType: 'select', options: ['md2', 'md3', 'md4', 'md5', 'md6', 'md12']}},
            options: {
              type: [{
                value: String,
                text: String
              }],
              form: {type: 'tableArray'}
            }
          }
        },
        StringMultiSelect: {
          type: {
            key: String,
            label: String,
            flex: {type: String, form: {inputType: 'select', options: ['md2', 'md3', 'md4', 'md5', 'md6', 'md12']}},
            options: {
              type: [{
                value: String,
                text: String
              }],
              form: {type: 'tableArray'}
            }
          }
        },
        Choice: {
          type: {
            key: String,
            label: String,
            flex: {type: String, form: {inputType: 'select', options: ['md2', 'md3', 'md4', 'md5', 'md6', 'md12']}},
          }
        },
        ChoiceArray: {
          type: {
            key: String,
            label: String,
            flex: {type: String, form: {inputType: 'select', options: ['md2', 'md3', 'md4', 'md5', 'md6', 'md12']}},
          }
        },*/
        string: w({
          'input': ['label', 'flex'],
          'input@select': ['label', 'flex', 'options']
        }),
        number: w({
          'input@number': ['label', 'flex'],
          'input@select': ['label', 'flex', 'options']
        }),
        boolean: w({
          'input@switch': ['label', 'flex']
        }),
        object: _.merge({
          type: {
            key: String,
            default: String,
            mixed: Boolean
          }
        }, _.assign(w({
          'object': ['label', 'flex'],
          'choice': ['label', 'flex', 'choiceKey', 'choiceKeyOutside'],
        })), {type: {form: {form: {type: 'choice'}}}}),
        array: w({
          'array': ['label', 'flex'],
          'tableArray': ['label', 'flex'],
          'choiceArray': ['label', 'flex'],
          'input@multiSelect': ['label', 'flex', 'options'],
        })
      }],
      form: {type: 'tree', children: 'fields', choiceKey: 'schemaType'}
    },
    tabs: {
      type: [{
        name: String,
        fields: {type: [String], form: {type: 'input@multiSelect'}}
      }],
      form: {type: 'tableArray'}
    }
  };

  const BuildForm = cms.registerSchema(buildFormSchema, {
    name: 'BuildForm',
    title: 'name',
    autopopulate: true,
    schemaOptions: {strict: false},
    tabs: {
      Advance: ['name', 'tabs', 'type']
    }
  });

  const PluginFile = cms.registerSchema({
    path: 'String',
    type: {type: String, form: {inputType: 'select', options: ['frontend', 'backend']}},
    slot: [String],
  }, {
    name: 'PluginFile',
    title: 'name',
    autopopulate: true,
    schemaOptions: {strict: false}
  });

  cms.Types.BuildForm.webType.form;
}