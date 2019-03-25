const url = process.env.PATH_ENV;
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const argv = require('yargs').argv;
const defaultConfig = {
  'database': {
    'host': 'localhost',
    'port': 27017,
    'dbName': 'mobile10'
  }
};

function initApp(config) {
  require('./backend/mobile/index')(config.plugins);
  require('./backend/mobile/database')(config.database);
}

if (argv.config) {
  // running on local config;
  const config = require(argv.config);
  initApp(config);
} else if (process.env.PATH_ENV) {
  axios.get(url)
    .then(res => {
      const config = res.data;
      fs.writeFileSync(path.join(__dirname, 'config/remoteConfig.json'), JSON.stringify(config, null, 2), 'utf8');
      initApp(config);
    })
    .catch(err => {
      console.log(err.stack);
      fs.readFile(path.join(__dirname, 'config/remoteConfig.json'), 'utf8', (err, data) => {
        if (err) {
          initApp(defaultConfig);
        } else {
          initApp(JSON.parse(data));
        }
      });

    });
} else {
  initApp(defaultConfig);
}
