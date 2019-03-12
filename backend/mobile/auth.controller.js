const jwt = require('jsonwebtoken');
const _ = require('lodash');
const config = require('./jwt/jwt.config');

module.exports = (cms) => {
  cms.app.post('/authenticate', function (req, res) {
    const { username, password } = req.body;
    const model = cms.getModel('_User');
    model.findOne({ username })
      .then(user => {
        if (user) {
          if (user.password === password) {
            const payload = _.pick(user.toObject(), ['username', '_id', 'collectionPermission', 'role', 'queryCondition']);
            const token = jwt.sign(payload, config.secretKey, { expiresIn: config.expireIn });
            res.status(200).json({ token });
          } else {
            res.status(400).json({ message: 'Password invalid' });
          }
        } else {
          res.status(400).json({ message: 'user is not exists' });
        }
      })
      .catch(err => {
        res.status(400).json({ message: 'internal error' });
      });
  });
};
