module.exports = {
  database: {
    host: 'localhost',
    port: 27017,
    dbName: 'mobile10'
  },
  plugins: [
    {
      name: "core-plugin",
      url: "https://github.com/anhoev/core-plugin.git",
      branch: "master"
    },
    {
      name: "digital-signage-plugin",
      url: "https://github.com/anhoev/digital-signage-plugin.git",
      branch: "master",
      package: true
    },
    {
      name: "permission-plugin",
      url: "https://github.com/anhoev/permission-plugin.git",
      branch: "master"
    }
  ]
};
