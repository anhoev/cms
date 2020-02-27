const { spawnSync } = require('child_process');

function updateSubmodule() {
  const result = spawnSync('git', ['submodule', 'update', '--init', '--recursive'], {
    cwd: process.cwd(),
    env: process.env,
    stdio: 'inherit',
    encoding: 'utf-8',
    silient: true
  });
  return result.stdout;
}

module.exports.initGit = function (path) {
  const result = spawnSync('git', ['init'], {
    cwd: path,
    env: process.env,
    stdio: 'inherit',
    encoding: 'utf-8',
    silient: true
  })
};

module.exports.addSubmodule = function (url) {
  const result = spawnSync('git', ['submodule', 'add', url], {
    cwd: process.cwd(),
    env: process.env,
    stdio: 'inherit',
    encoding: 'utf-8',
    silient: true
  });
  if (result.status === 1) {
    return updateSubmodule();
  }
  return result.stdout;
};

module.exports.checkoutBranch = function (path, branchName) {
  const result = spawnSync('git', ['checkout', branchName], {
    cwd: path,
    env: process.env,
    stdio: 'inherit',
    encoding: 'utf-8',
    silient: true
  });
  return result.stdout;
};
