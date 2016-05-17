const path = require('path');
const unless = require('express-unless');
const cheerio = require('cheerio');
const _ = require('lodash');

module.exports = (cms) => {
    /*cms.filters.schema.push(schema => {
        const _schema = {
            _category: {
                type: [String],
                form: {
                    type: 'tree',
                    templateOptions: {
                        label: 'Category',
                        options: convertCategories(cms.data.categories).map(v => v[0])
                    }
                }
            }
        }
        if (schema instanceof cms.mongoose.Schema) {
            schema.add(_schema)
        } else {
            _.assign(schema, _schema);
        }
    })*/

}

function convertCategories(categories, path = '') {
    if (!categories) return null;
    if (Array.isArray(categories)) {
        return categories.map(v => convertCategories(v));
    } else {
        return _.map(categories, (v, k) => {
            const _path = `${path}${path !== '' ? '.' : ''}${k}`;
            return {text: k, path: _path, children: convertCategories(v, _path)}
        });
    }
}

module.exports.convertCategories = convertCategories;

