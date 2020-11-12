const orm = require('schemahandler');

const fileSchema = {
  fileName: {
    type: String,
    trim: true,
  },
  mimeType: {
    type: String,
    trim: true,
  },
  sizeInBytes: {
    type: Number,
  },
  folderPath: {
    type: String,
  },
  isFolder: {
    type: Boolean,
    default: false,
  },
  fileSource: {
    type: String,
    trim: true,
  },
  generatedFileName: {
    type: String,
    trim: true,
  },
  namespace: {
    type: String,
    trim: true,
  },
}

orm.registerSchema('CmsFile', fileSchema);

module.exports = orm.getCollection('CmsFile');
