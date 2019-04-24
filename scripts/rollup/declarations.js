const sh = require('shelljs');

const createDeclarationFiles = (bundle) => {
  if (sh.test('-e', `packages/${bundle.entry}/tsconfig.json`)) {
    sh.exec(`node_modules/.bin/tsc --project packages/${bundle.entry}/tsconfig.json`);
  }
};

module.exports = {
  createDeclarationFiles
};
