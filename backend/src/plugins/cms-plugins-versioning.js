const model = require('./cms-plugin-schema')
const path = require('path')
const fs = require('fs')
const semver = require('semver')
let _shouldUpdateApp
async function getVersion(pluginName) {
  const plugin = await model.findOne({ name: pluginName })
  return plugin ? plugin.version : undefined
}

async function getLastVersion(pluginName) {
  const plugin = await model.findOne({ name: pluginName })
  return plugin ? plugin.lastVersion : undefined
}

async function getShouldUpdateApp(pluginName) {
  const plugin = await model.findOne({ name: pluginName })
  return plugin && plugin.shouldUpdateApp ? pluginName.shouldUpdateApp : false
}

async function updateVersion(pluginName, version, lastVersion) {
  if (!lastVersion) {
    lastVersion = await getVersion(pluginName)
  }
  await model.updateOne({ name: pluginName }, { name: pluginName, version, lastVersion }, { upsert: true })
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

  _shouldUpdateApp = await getShouldUpdateApp(pluginName)

  if (!currentVersion || semver.gt(version, currentVersion) ) {
    await updateVersion(pluginName, version, currentVersion);
    await setShouldUpdateApp(pluginName, true)
    _shouldUpdateApp = true
    return true
  }

  return false
}

async function setShouldUpdateApp(pluginName, shouldUpdateApp) {
  await model.updateOne({ name: pluginName }, { shouldUpdateApp }, { upsert: true })
}

module.exports = {
  shouldUpdate,
  updateVersion,
  getShouldUpdateApp: () => _shouldUpdateApp,
  getVersion,
  getLastVersion
}



