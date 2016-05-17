const _ = require('lodash');

module.exports = (cms) => {
    const {app} = cms;
    app.post('/cms-serverFn', function* (req, res) {
        const args = _.map(req.body.args, v => v);
        const serverFn = cms.serverFn[req.body.fn];
        const result = yield* serverFn(...args);
        res.send(result);
    });
    cms.utils.setupServerFn = function (serverFn, post) {
        const _serverFn = {};
        _.each(serverFn, k => {
            _serverFn[k] = function () {
                return post('/cms-serverFn', {args: arguments, fn: k});
            }
        })
        return _serverFn;
    }
}