const mongoose = require('mongoose');

module.exports = function connect({ host, port, dbName }) {
  const uri = `mongodb://${host}:${port}/${dbName}`;
  const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  };

  mongoose.connect(uri, options).then(() => {
    console.log(`connect db ${uri} success`);
  });

};
