const shellExec = require('shell-exec');

exports.switchEnvironment = function (req, res) {
  shellExec(`cd ${basePathStore}/${plugin.name}&& yarn install`)
    .then(() => {
      return res.json({})
    })
    .catch(err => {
      return res.status(400).json({ err })
    });
  return res.json({ message: 'Success.' });
}
