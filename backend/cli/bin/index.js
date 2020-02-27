#!/usr/bin/env node

require('../src')(process.argv.slice(2)).catch(err => {
  console.log(err);
  process.exit(2);
});
