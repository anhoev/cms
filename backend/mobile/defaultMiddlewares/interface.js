const authService = require('../auth.service');
const readAllowMethod = ['find', 'findOne', 'findById', 'skip', 'limit', 'count', 'countDocuments', 'estimatedDocumentCount'];

function addQueryCondition(model, method, queryCondition) {
  if (!Array.isArray(queryCondition)) {
    return model;
  }
  if (/^find/.test(method)) {
    // console.log(queryCondition);
    // find method;
    queryCondition.forEach(item => {
      console.log({ [item.key]: item.value });
      try {
        const value = JSON.parse(item.value);
        model = model[method]({ [item.key]: value });
      } catch (e) {
        model = model[method]({ [item.key]: item.value });
      }
    });
  }
  return model;
}

module.exports = cms => {
  return function interfaceMiddleware({ name, chain, socket }, next) {
    const permission = authService.getCollectionPermission(socket.request.user, name);
    if (!permission) {
      return next('not allow');
    }
    if (permission === 'read') {
      const allChainMethod = chain.map(item => item.fn);
      const isAllow = allChainMethod.every(item => readAllowMethod.includes(item));
      if (!isAllow) {
        return next('not allow');
      }
    }
    let model = cms.getModel(name);
    const queryCondition = authService.getQueryCondition(socket.request.user, name);
    model = addQueryCondition(model, chain[0].fn, queryCondition);
    next(null, { model, chain });
  };
};
