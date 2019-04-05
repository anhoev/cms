const express = require('express');
const router = express.Router();

module.exports = function (app) {
  router.use('/common', require('./common'));

  app.use('/api/v1', router);
}