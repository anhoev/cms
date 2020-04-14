const spawn = require('child_process').spawn;
const path = require('path');
const portfinder = require('portfinder');
const fs = require('fs');
const tcpPortUsed = require('tcp-port-used');

module.exports = async function () {
  if (fs.existsSync(path.join(__dirname, '../../../dist'))) {
    return;
  }
  const lockPath = path.resolve(__dirname, '../../../.frontend-lock');
  const run = async function () {
    const port = await portfinder.getPortPromise({
      port: 8080,
    })
    fs.writeFileSync(lockPath, port, 'utf-8');
    const child = spawn('open', ['-a', 'Terminal', `serve.sh`], {stdio: 'inherit', cwd: __dirname});
    global.APP_CONFIG.proxyPort = port;
  }
  if (!fs.existsSync(lockPath)) {
    await run();
  } else {
    const port = parseInt(fs.readFileSync(lockPath, 'utf-8'));
    const inUse = await tcpPortUsed.check(port, '127.0.0.1');
    if (inUse) {
      global.APP_CONFIG.proxyPort = port;
    } else {
      fs.unlinkSync(lockPath);
      await run();
    }
  }
}