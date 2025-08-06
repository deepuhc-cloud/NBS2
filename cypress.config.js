const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ugue9q',
  e2e: {
    setupNodeEvents(on, config) {
      // Load plugins from cypress/plugins/index.js
      return require('./cypress/plugins/index.js')(on, config);
    },
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    defaultCommandTimeout: 60000,
    env: {
      cucumber: {
        stepDefinitions: "cypress/e2e/step_definitions/**/*.js"
      }
    }
  }
});
