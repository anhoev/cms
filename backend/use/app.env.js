exports.AppConst = {
  NODE_ENV: {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
    LOCAL: 'local',
    TEST: 'test'
  },

  DEFAULT_CONFIG: {
    database: {
      host: 'localhost',
      port: 27017,
      dbName: 'mobile10'
    }
  },

  MODE: {
    NORMAL: 'normal',
    SAFE_MODE: 'safemode'
  }
};
