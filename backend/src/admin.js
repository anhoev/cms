const path = require('path');
const unless = require('express-unless');
const cheerio = require('cheerio');
const _ = require('lodash');
const {convertCategories} = require('./category');

module.exports = (cms) => {
    const {app, data: {categories}} = cms;
    app.get('/cms-admin', function*(req, res) {
        const queries = yield cms.Types.Query.Model.find({});
        const types = _.map(cms.Types, ({Model, info:{admin:{query}}}) =>({
            text: Model.modelName,
            type: Model.modelName,
            columns: _.map(Model.schema.tree, (v, k) => {
                if (v instanceof cms.mongoose.Schema.Types.ObjectId && k !== '_id') {
                    const prop = v.options.form.templateOptions.labelProp;
                    return `${k}.${prop ? prop : ''}`;
                }
                return k;
            }).filter(k =>['id', '_id', '__v'].indexOf(k) === -1),
            children: _.map(query, (fn, k) => ({
                text: k,
                isQuery: true,
                query: fn,
                type: Model.modelName
            })).concat(_.map(_.filter(queries,query => query.type === Model.modelName), query => ({
                text: query.name,
                isQuery: true,
                query: query.query,
                type: Model.modelName
            })))
        }))
        res.send(JsonFn.stringify({
            tree: types
        }));
    })
}