module.exports = function () {
  const mongoose = require('mongoose');

  const writeConcernMajorityPlugin = function (schema) {
    schema.set('writeConcern', {w: global.APP_CONFIG.writeConcern});
  }

  mongoose.plugin(writeConcernMajorityPlugin);
}
