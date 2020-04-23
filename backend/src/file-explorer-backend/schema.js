const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
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
}, {
  timestamps: true,
  writeConcern: {
    w: 'majority',
  },
});

module.exports = mongoose.model('CmsFile', fileSchema);
