const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = async (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  await addCucumberPreprocessorPlugin(on, config);
  return config;
};