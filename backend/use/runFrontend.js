const exec = require('child_process').exec;
const path = require('path');
const portfinder = require('portfinder');
const fs = require('fs');
const tcpPortUsed = require('tcp-port-used');

module.exports = async function () {
  if (fs.existsSync(path.join(__dirname, '../../../dist'))) {
    return;
  }
  const lockPath = path.resolve(__dirname, '../../../.frontend-lock.json');
  let config = {};
  if (fs.existsSync(lockPath)) {
    config = require(lockPath);
  }
  const run = async function () {
    const port = await portfinder.getPortPromise({
      port: 8080,
    })
    config[global.APP_CONFIG.pluginPath] = port;
    fs.writeFileSync(lockPath, JSON.stringify(config), 'utf-8');
    const child = exec(`osascript -e 'tell application "Terminal" to do script "cd ${path.resolve(__dirname, '../../../backoffice')} && npx vue-cli-service serve --port=${port} --pluginPath=${global.APP_CONFIG.pluginPath}"'`, {stdio: 'inherit'});
    global.APP_CONFIG.proxyPort = port;
  }
  if (!fs.existsSync(lockPath)) {
    await run();
  } else {
    const port = require(lockPath)[global.APP_CONFIG.pluginPath];
    const inUse = port ? await tcpPortUsed.check(port, '127.0.0.1') : false;
    if (inUse) {
      global.APP_CONFIG.proxyPort = port;
    } else {
      await run();
    }
  }
}
