module.exports = function () {
  const mongoose = require('mongoose');

  const writeConcernMajorityPlugin = function (schema) {
    schema.set('writeConcern', {w: 'majority'});
  }

  mongoose.plugin(writeConcernMajorityPlugin);
}
