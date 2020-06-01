module.exports = function () {
  const {database: dbConfig} = global.APP_CONFIG;
  const defaultWriteConcern = 1;
  let writeConcern = dbConfig.options && dbConfig.options.replicaSet ? (dbConfig.writeConcern || defaultWriteConcern) : null;

  if (!isNaN(writeConcern) && !isNaN(Number.parseInt(writeConcern))) writeConcern = Number.parseInt(writeConcern);

  if (writeConcern) {
    const mongoose = require('mongoose');
    const writeConcernPlugin = function (schema) {
      schema.set('writeConcern', {w: writeConcern});
    }

    mongoose.plugin(writeConcernPlugin);
  }
}
