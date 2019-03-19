'use strict';
const _ = require('lodash');
const traverse = require('traverse');
const _merge = require('extend');

function merge() {
  return _merge(true, ...arguments);
}

module.exports = cms => {
  cms.utils.initType = init;
  const { Schema } = cms.mongoose;

  function init(schema, tabs, name) {
    const Queries = [];

    const paths = traverse(schema.paths).map(function (node) {

      if (this.key && (node && !node.instance) && !_.includes(['schema', 'paths'], this.key)) {
        return this.block();
      }

      // mixed
      if (node && node.instance === 'Mixed' && node.options && node.options.type) {
        const schema = _.pick(new Schema(node.options.type), ['paths']);
        this.update(_.assign(node, { schema }));
      }

      // group nested object
      if (!this.key || this.key === 'paths') {
        const paths = _.reduce(Object.keys(node), (obj, key) => {
          if (node[key].options && node[key].options.form === false) {
            return obj;
          }
          if (_.includes(key, '\.')) {
            const [k1, k2] = key.split('\.');
            obj[k1] = obj[k1] || { instance: 'NestedObject', schema: { paths: {} } };
            obj[k1].schema.paths[k2] = node[key];
          } else if (!_.includes(['_id', '__v', 'id', '_textIndex'], key)) {
            obj[key] = node[key];
          }
          return obj;
        }, {});

        this.update(paths);
      }

    });

    let Paths = [];

    let Form = traverse(paths).map(function (node) {
      // control
      {

        if (!this.key) {
          return;
        }

        if (node && _.includes(['_id', '__v', 'id', '_textIndex'], node.path)) {
          this.delete();
          return this.block();
        }
        if (!node.fieldGroup && !node.instance && (!_.includes(['schema', 'field', 'fields', 'fieldGroup'], this.key))) {
          return this.block();
        }

        if (this.key === 'fields') {
          this.after(function (_node) {
            this.update(_.map(_node, v => v), true);
          });
        }

      }

      // make Form
      {
        const label = node.options ? node.options.label : null;
        if (node.instance === 'Array') {
          let form = convertArrayField(node, { key: this.key, label: label || this.key });
          this.update(form);
          if (form.fields) {
            this.after(function (_node) {
              nestedConvert(_node);
              this.update(_node, true);
            });
          } else if (form.field) {
            this.after(function (_node) {
              delete _node.field.key;
              delete _node.field.label;
              //_node.field.label = label || _node.key;
              this.update(_node, true);
            });
          }
        } else if (node.instance === 'NestedObject' || node.instance === 'Embedded' || node.instance === 'Mixed') {
          this.update(convertNestedObjectField(node, { key: this.key, label: label || this.key }));
          this.after(function (_node) {
            nestedConvert(_node);
            this.update(_node, true);
          });
        } else if (node.instance) {
          this.update(convertSingleField(node, { key: this.key, label: label || this.key }));
        }
      }

      // gen Path
      if (node.instance && this.key !== 'choice') {
        const result = _.reduce(_.drop(this.parents, 1).concat(this), (result, { node: _node, key, parent: { node: parentNode, key: parentKey, keys: parentKeys } }) => {
          if (key) {
            if (!parentKey || (parentKey === 'fields' && key !== 'fields')) {
              result.pathInForm += `.${parentKeys.indexOf(key)}`;
            } else {
              result.pathInForm += `.${key}`;
            }
          }
          if (_node && _node.key && typeof _node.key !== 'object') {
            result.path += `.${_node.key}`;
          }
          return result;
        }, { path: '', pathInForm: '' });
        result.path = result.path.substring(1);
        result.pathInForm = result.pathInForm.substring(1);
        Paths.push(result);
      }
    });
    Form = _.map(Form, v => v);

    traverse(paths).forEach(function (node) {
      if (this.key && (node && !node.instance) && !_.includes(['schema', 'paths'], this.key)) {
        return this.block();
      }
      if (!node) {
        return;
      }
      const { options } = node;

      if (node.options && node.options.form === false) {
        return;
      }

      // make query
      if (this.key && this.key !== 'choice') {
        const query = merge({}, options ? options.query : {});
        if (query.form) {
          merge(query.form, { key: this.key });
        }
        const _path = this.path.filter(p => p !== 'schema' && p !== 'paths' && p !== 'caster').join('.');
        const Path = _.find(Paths, ({ path, pathInForm }) => path === _path);
        if (!Path) {
          return;
        }
        query.path = _path;
        query.pathInForm = Path.pathInForm;
        if (query.populate) {
          _.forEach(query.populate.split(' '), select => {
            const q = _.find(cms.Types[node.options.ref].webType.queries, { path: select });
            q.form = _.get(cms.Types[node.options.ref].Form, q.pathInForm);
            const fn = (val, p1, p2) => {
              return { $where: `return this.${p1}.${p2} === '${val}'` };
            };

            Queries.push({ path: `${_path}.${q.path}`, form: q.form, fn });
          });
        }
        Queries.push(query);
      }

    });


    return { Form, Paths, Queries };


    function convertSingleField(field, { key, label }) {
      const defaultOptions = { form: { key: key, label: label ? label : key } };
      if (field.options.flex) {
        defaultOptions.form.flex = field.options.flex;
      }

      if (field.instance === 'ObjectID') {
        if (!cms.Types[field.options.ref]) {
          console.log(`Type ${name} and ${field.options.ref}  have problems`);
        }
        return merge(defaultOptions.form, {
          type: 'refSelect',
          Type: field.options.ref, labelProp: cms.Types[field.options.ref] ? cms.Types[field.options.ref].info.title : ''
        }, field.options.form);
      }
      if (field.instance === 'String') {
        return merge(defaultOptions.form, { type: 'input' }, field.options.form);
      }
      if (field.instance === 'Boolean') {
        return merge(defaultOptions.form, { type: 'input', inputType: 'switch' }, field.options.form);
      }
      if (field.instance === 'Number') {
        return merge(defaultOptions.form, {
          type: 'input',
          inputType: 'number'
        }, field.options.form);
      }
      if (field.instance === 'Date') {
        return merge(defaultOptions.form, {
          type: 'input',
          inputType: 'datetime-local'
        }, field.options.form);
      }

      if (field.options && field.options.form) {
        return merge(defaultOptions.form, field.options.form);
      }
    }

    function convertArrayField(field, { key, label }) {
      const defaultOptions = { form: { key: key, label: label ? label : key } };
      defaultOptions.form.flex = field.options.flex || 'md12';
      if (field.schema) {

        const { schema: { paths: fields } } = field;
        return merge({
          key,
          type: 'array',
          label: label || key,
          fields
        }, field.options.form);

      } else {
        return merge(defaultOptions.form, {
          key,
          type: 'array',
          label: label || key,
          fields: [field.caster]
        }, field.options.form);
      }
    }

    function convertNestedObjectField(field, { key, label }) {
      let fields = [];
      if (field.schema) {
        fields = field.schema.paths;
      }

      const defaultOptions = { form: { key: key, label: label ? label : key, type: 'object' } };
      if (field.options && field.options.form) {
        return merge(defaultOptions.form, field.options.form, { fields });
      }
      return merge(defaultOptions.form, { fields });
    }

    function nestedConvert(form) {
      if (form.fields.find(f => (f.key === 'choice' && !f.fields))) {
        if (form.type === 'array') {
          form.type = 'choiceArray';
        }
        if (form.type === 'object') {
          form.type = 'choice';
        }
        //delete form.fields;
        form.fields = form.fields.filter(f => f.key !== 'choice');
      }
    };
  }
};
