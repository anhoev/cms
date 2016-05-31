const path = require('path');
const unless = require('express-unless');

module.exports = (cms) => {
    const Query = cms.registerSchema({
        name: String,
        type: {type: String, form: {type: 'select-type'}},
        query: {type: String, form: {type: 'code'}},
        defaultValue: {type: String, form: {type: 'code'}}
    }, {
        name: 'Query',
        formatter: `<h4>Query</h4>`,
        title: 'name'
    });
}