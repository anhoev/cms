const traverse = require('traverse');
const _ = require('lodash');
const objectId = require('mongoose/lib/schema/objectid');
module.exports = {
  convertFormToSchema: function (buildForm) {
    let form = _.cloneDeep(buildForm.fields);
    form = traverse(form).map(function (node) {
      if (!node || typeof node !== 'object') return this.block();
      if (!this.parent) this.update(_.keyBy({...node}, 'key'));
      if (node.schemaType) {
        const convertMap = {
          'string': String,
          'number': Number,
          'boolean': Boolean
        }
        let _node = {type: convertMap[node.schemaType] || {}}
        if (node.schemaType === 'object' && node.fields) {
          if (node.type === 'choice') {
            _node = {};
            _node[node.choiceKey || 'choice'] = {schemaType: 'string'}
            const normalFields = node.fields.filter(f => f.schemaType !== 'object');
            const objectFields = node.fields.filter(f => f.schemaType === 'object');
            _.assign(_node, _.keyBy({...normalFields}, 'key'));
            const fields = objectFields.reduce((fields, f) => {
              if (f.fields) fields.push(...f.fields);
              return fields;
            }, []);
            _.assign(_node, _.keyBy({...fields}, 'key'));
          } else {
            _node = _.keyBy({...node.fields}, 'key');
          }
        }

        if (node.schemaType === 'objectId') {
          _node = {
            type: objectId,
            ref: node.ref,
            autopopulate: node.autopopulate
          }
        }
        if (node.schemaType === 'array') {
          _node = [_.keyBy({...node.fields}, 'key')];
          if (node.fields.length === 1) {
            this.after(function (_node) {
              _node = [_.map(_node[0], f => f)[0]];
              this.update(_node);
            });
          }
        }
        this.update(_node);
      }
    })
    return form;
  }
}