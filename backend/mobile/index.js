/**
 * Created by tran on 24.12.15.
 */

'use strict';
const _ = require('lodash');
const cms = require('../src/cms');
cms.data.security = false;
cms.listen(8888);
cms.useSession();
cms.mongoose.connect('mongodb://localhost/mobile10');

cms.use(require('./test'));