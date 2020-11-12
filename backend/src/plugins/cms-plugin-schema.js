const orm = require('schemahandler')

orm.registerSchema('CmsPlugin', {
  name: String,
  version: String,
  lastVersion: String
})

module.exports = orm.getCollection('CmsPlugin');
