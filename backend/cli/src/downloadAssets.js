const inquirer = require('inquirer');
inquirer.registerPrompt('search-checkbox', require('inquirer-search-checkbox'));
const { addSubmodule, checkoutBranch, clonePlugins, downloadFile, getAssetsList } = require('./git_utils');

module.exports = async function download() {
  const res = await getAssetsList();
  if (!res || res.status !== 200) {
    console.error('Can\'t get assets list');
    return;
  }
  const assets = res.data;
  const config = await inquirer.prompt({
    type: 'search-checkbox',
    name: 'download',
    message: 'Select file to download',
    choices: (() => {
      const listAssets = [];
      const keyList = Object.keys(assets);
      keyList.forEach(key => {
        listAssets.push(
          {
            name: `${key} ${assets[key].env}`,
            value: key
          }
        );
      });
      return listAssets;
    })()
  });
  const downloadList = config.download;
  for (let i = 0; i < downloadList.length; i++) {
    const file = downloadList[i];
    try {
      await downloadFile(file);
    } catch (err) {
      console.error(`Download file ${file} error`);
      // console.log(err);
    }
  }
}
