const jwt = require('jsonwebtoken');
const config = require('./jwt.config');

module.exports = cms => {
  function socketVerifyService(socket, next) {
    let token = socket.handshake.query.token;
    jwt.verify(token, config.secretKey, (err, user) => {
      if (err) {
        return next(err);
      }
      const __User = cms.getModel('_User');
      if (_.isEmpty(__User)) {
        return next();
      }
      __User.findOne({ username: user.username })
        .then(_u => {
          if (_u) {
            socket.request.user = user;
            next();
          } else {
            next('invalid token');
          }
        })
        .catch(err => {
          next('internal_error');
        });
    });
  }

  return {
    socketVerifyService
  };
};
