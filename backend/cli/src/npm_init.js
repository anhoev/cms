const { spawnSync } = require('child_process');

module.exports = function npmInit(path) {
  const result = spawnSync('npm', ['i'], {
    cwd: path,
    env: process.env,
    stdio: 'pipe',
    encoding: 'utf-8',
    silient: true
  });
  return result.stdout;
};
