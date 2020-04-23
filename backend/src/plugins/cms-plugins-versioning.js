const model = require('./cms-plugin-schema')
const path = require('path')
const fs = require('fs')

async function getVersion(pluginName) {
  const plugin = await model.findOne({ name: pluginName })
  return plugin ? plugin.version : undefined
}

module.exports = async function ({ pluginName, pluginPath }) {
  let version

  const manifestPath = path.join(pluginPath, 'manifest.js')
  if (fs.existsSync(manifestPath)) {
    const manifest = require(manifestPath)
    version = parseFloat(manifest.version)

    if (!version) {
      const packagePath = path.join(pluginPath, 'package.json')
      if (fs.existsSync(packagePath)) {
        const pkgRaw = JSON.parse(fs.readFileSync(packagePath, 'utf8'))
        version = parseFloat(pkgRaw.version)
        if (!version) return false
      }
    }
  }

  if (!version) return false

  let currentVersion = await getVersion(pluginName)
  if (currentVersion) currentVersion = parseFloat(currentVersion)

  if (version > currentVersion || !currentVersion) {
    await model.updateOne({ name: pluginName }, { name: pluginName, version }, { upsert: true })
    return true
  }

  return false
}



