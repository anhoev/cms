/**
 * Created by tran on 24.12.15.
 */

'use strict';
const _ = require('lodash');
const autopopulate = require('mongoose-autopopulate');
const cms = require('../src/cms');
const resolvePath = cms.resolvePath = (p) => `backend/mobile/${p}`;
cms.data.security = false;
cms.listen(8888);
cms.useSession();
cms.mongoose.connect('mongodb://localhost/mobile10');

cms.use(require('./mobile'));

cms.server('backend/mobile/en', '');

cms.menu = {
    bodyPaddingTop: '120px'
}

cms.data.online.wsAddress = 'ws://localhost:8888';