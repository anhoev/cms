const model = require('./cms-plugin-schema')
const path = require('path')
const fs = require('fs')
const semver = require('semver')

async function getVersion(pluginName) {
  const plugin = await model.findOne({ name: pluginName })
  return plugin ? plugin.version : undefined
}

async function updateVersion(pluginName, version) {
  await model.updateOne({ name: pluginName }, { name: pluginName, version }, { upsert: true })
}

async function shouldUpdate ({ pluginName, pluginPath }) {
  let version

  const manifestPath = path.join(pluginPath, 'manifest.js')
  if (fs.existsSync(manifestPath)) {
    const manifest = require(manifestPath)
    version = manifest.version

    if (!version) {
      const packagePath = path.join(pluginPath, 'package.json')
      if (fs.existsSync(packagePath)) {
        const pkgRaw = JSON.parse(fs.readFileSync(packagePath, 'utf8'))
        version = pkgRaw.version
        if (!version) return false
      }
    }
  }

  if (!version) return false

  let currentVersion = await getVersion(pluginName)

  if (!currentVersion || semver.gt(version, currentVersion) ) {
    await updateVersion(pluginName, version);
    return true
  }

  return false
}

module.exports = {
  shouldUpdate,
  updateVersion
}



