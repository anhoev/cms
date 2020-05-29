const mongoose = require('mongoose')

const pluginSchema = new mongoose.Schema({
  name: String,
  version: String,
  lastVersion: String
})

module.exports = mongoose.model('CmsPlugin', pluginSchema)