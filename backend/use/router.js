const router = require('express').Router();
const childProcess = require('child_process');
const { AppConst } = require('./app.env');

router.get('/switch-env', (req, res) => {
  const appConfig = global.APP_CONFIG;
  const mode = req.query.mode && req.query.mode === AppConst.MODE.SAFE_MODE ? 'ecosystem-safemode.json' : 'ecosystem-dev.json';
  setTimeout(() => {
    childProcess.exec(`cd ${appConfig.root} && pm2 start ${mode}`, {
      // env: { PATH_ENV: process.env.PATH_ENV }
    }, function (err, stderr, stdout) {
      console.log(err, stderr, stdout);
    });
    return res.json({ message: 'success' });
  }, 1500);
});

module.exports = router;
