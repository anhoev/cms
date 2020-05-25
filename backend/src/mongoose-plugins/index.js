module.exports = function () {
  const mongoose = require('mongoose');

  const writeConcernPlugin = function (schema) {
    schema.set('writeConcern', {w: global.APP_CONFIG.writeConcern || 'primary'});
  }

  mongoose.plugin(writeConcernPlugin);
}
