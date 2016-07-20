/**
 * Created by tran on 24.12.15.
 */

'use strict';
const _ = require('lodash');
const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const cms = require('../src/cms');
cms.mongoose = mongoose;
cms.data.categories = [{Type: {Human: null, Animal: null}}, {Type2: {Human: null, Animal: null}}];
const resolvePath = cms.resolvePath = (p) => `backend/mobile/${p}`;
cms.data.security = true;
cms.listen(8888);
mongoose.connect('mongodb://localhost/mobile');

cms.use(require('./mobile'));
cms.use(require('./restaurant'));
cms.use(require('./organize'));

cms.server('backend/mobile/en', '');

cms.menu = {
    bodyPaddingTop: '120px',
    inverse: false
}