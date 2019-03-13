const authService = require('../auth.service');

module.exports = cms => {
  return function getCollectionMiddleware({ name, socket },  next) {
    const permission = authService.getCollectionPermission(socket.request.user, name);
    if (!permission) {
      return next('error');
    }
    next();
  };
};
