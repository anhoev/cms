function enhancedCallbackWithDoc(cb) {
  return function (docs) {
    if (docs && docs._doc) {
      cb(docs);
    } else {
      cb();
    }
  };
}

const util = {
  _onSave: function (schema, when = 'post', callback) {
    const cbWithDoc = enhancedCallbackWithDoc(callback);
    schema[when]('save', function (docs) {
      cbWithDoc(this);
    });
    schema[when]('findOneAndUpdate', function (docs) {
      cbWithDoc(docs);
    });
    schema[when]('findByIdAndUpdate', function (docs) {
      cbWithDoc(docs);
    });
    schema[when](/update$/, function (docs) {
      cbWithDoc(this);
    });
  },
  _onRemove: function (schema, when = 'post', callback) {
    const cbWithDoc = enhancedCallbackWithDoc(callback);
    schema[when]('remove', { document: true }, function (docs) {
      cbWithDoc();
    });
    schema[when]('remove', { query: true }, function (docs) {
      cbWithDoc();
    });
    schema[when]('findOneAndDelete', function (docs) {
      cbWithDoc(docs);
    });
    schema[when]('findOneAndRemove', function (docs) {
      cbWithDoc(docs);
    });
    schema[when]('findByIdAndRemove', function (docs) {
      cbWithDoc(docs);
    });
    schema[when]('findByIdAndDelete', function (docs) {
      cbWithDoc(docs);
    });
    schema[when]('deleteOne', function (docs) {
      cbWithDoc();
    });
    schema[when]('deleteMany', function (docs) {
      cbWithDoc();
    });
  },
  onPreSave(schema, callback) {
    this._onSave(schema, 'pre', callback);
  },
  onPreRemove(schema, callback) {
    this._onRemove(schema, 'pre', callback);
  },
  onPostSave(schema, callback) {
    this._onSave(schema, 'post', callback);
  },
  onPostRemove(schema, callback) {
    this._onRemove(schema, 'post', callback);
  }
};
module.exports = (cms) => {
  const { mongoose } = cms;
  mongoose.Schema.prototype.onPostSave = function (cb) {
    util.onPostSave(this, cb);
  };

  mongoose.Schema.prototype.onPreSave = function (cb) {
    util.onPreSave(this, cb);
  };

  mongoose.Schema.prototype.onPostRemove = function (cb) {
    util.onPostRemove(this, cb);
  };

  mongoose.Schema.prototype.onPreRemove = function (cb) {
    util.onPreRemove(this, cb);
  };
};


