const express = require('express');
const router = express.Router();
const commonCtrl = require('./common.controller');

router.get('/switch-env', commonCtrl.switchEnvironment)

module.exports = router;