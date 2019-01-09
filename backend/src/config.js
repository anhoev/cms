'use strict';
const path = require('path');

module.exports = (cms) => {
  const {mongoose, utils: {makeSelect, makeMultiSelect, makeTypeSelect, makeStyles, makeCustomSelect}} = cms;

  const pathForm = {
    inputType: 'select', options: (formState) => {
      const type = formState.rootModel.type;
      if (!type) return [];
      const {paths} = cms.Types[type];
      return paths.map(v => v.path);
    }
  };

  const Config = cms.registerSchema({
    type: {
      type: String, flex: 'md12', form: {
        inputType: 'select', options: (formState) => {
          return Object.keys(cms.Types);
        }
      }
    },
    dynamicQuery: [{
      type: String, form: pathForm
    }],
    showFields: {
      type: [String], flex: 'md12', form: {
        type: 'input', inputType: 'multiSelect', options: (formState) => {
          const type = formState.rootModel.type;
          if (!type) return [];
          const fields = cms.Types[type].form;
          const options = _.map(fields, v => ({text: v.label, value: v.key}));

          if (_.isEmpty(formState.model[formState.field.key])) {
            formState.model[formState.field.key].push(...fields.map(v => v.key));
          }

          return options;
        }
      }
    },
    showAs: {type: String, form: {inputType: 'select', options: ['list', 'table', 'element']}},
    renderComponent: {
      type: String, form: {
        inputType: 'select', options: () => window['cms'].pluginComponents
      }
    },
    query: [{
      choice: String,
      builtIn: {
        type: String, form: pathForm
      },
      dynamic: {type: String}
    }],
    sort: [{
      choice: String,
      builtIn: {
        path: {type: String, form: pathForm},
        orientation: {
          type: Number,
          form: {
            inputType: 'select',
            options: [{text: 'Up', value: 1}, {text: 'Down', value: 0}]
          }
        }
      },
      dynamic: {type: String}
    }],
    label: String,
    formOverlay: {
      type: [{
        path: {type: String, form: pathForm},
        label: String,
        size: {type: String, form: {inputType: 'select', options: ['md2', 'md3', 'md4', 'md5', 'md6', 'md12']}}
      }],
      form: {type: 'tableArray'}
    },
    menu: {
      position: {
        type: [{
          position: {type: String, form: {inputType: 'select', options: ['top', 'bottom', 'right', 'left']}},
          value: String,
          unit: {type: String, form: {inputType: 'select', options: ['px', '%']}}
        }],
        form: {type: 'tableArray'}
      }
    }
  }, {
    name: 'Config',
    formatter: `<h4>Config</h4>`,
    title: 'type',
    alwaysLoad: true,
    tabs: {
      Advance: ['query', 'sort', 'renderComponent'],
      Overlay: ['label', 'formOverlay'],
      List: ['menu']
    }
  });
}