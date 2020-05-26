module.exports = function () {
  const {database: dbConfig} = global.APP_CONFIG;
  const defaultWriteConcern = 'primary';
  const writeConcern = dbConfig.options.replicaSet ? (dbConfig.writeConcern || defaultWriteConcern) : null;

  if (writeConcern) {
    const mongoose = require('mongoose');
    const writeConcernPlugin = function (schema) {
      schema.set('writeConcern', {w: writeConcern});
    }

    mongoose.plugin(writeConcernPlugin);
  }
}
