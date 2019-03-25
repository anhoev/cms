const mongoose = require('mongoose');

module.exports = function connect({ host, port, dbName, username, password }) {
  const uri = `mongodb://${host}:${port}/${dbName}`;
  const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  };

  if (username && password) {
    options.user = username;
    options.pass = password;
  }

  mongoose.connect(uri, options).then(() => {
    console.log(`connect db ${uri} success`);
  });

};
