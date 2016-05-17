const path = require('path');
const unless = require('express-unless');
const cheerio = require('cheerio');
const _ = require('lodash');
const {convertCategories} = require('./category');

module.exports = (cms) => {
    const {app, data: {categories}} = cms;
    app.get('/cms-admin', (req, res)=> {
        const types = _.map(cms.Types, ({Model}) =>({
            text: Model.modelName,
            columns: _.map(Model.schema.tree, (v, k) => {
                if (v instanceof cms.mongoose.Schema.Types.ObjectId && k !== '_id') {
                    const prop = v.options.form.templateOptions.labelProp;
                    return `${k}.${prop ? prop : ''}`;
                }
                return k;
            }).filter(k =>['id', '_id', '__v'].indexOf(k) === -1),
            children: [{
                text: 'category',
                children: convertCategories(categories).map(v => v[0])
            }, {
                text: 'query'
            }]
        }))
        res.send({
            tree: types
        });
    })
}