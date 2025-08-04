const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Register the 'log' task so cy.task('log', ...) works
      on('task', {
        log(message) {
          // Print the message to the terminal
          console.log(message);
          return null;
        },
      });

      // Register image snapshot plugin
      addMatchImageSnapshotPlugin(on, config);

      // Add Cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    defaultCommandTimeout: 60000, // 60 seconds (adjust as needed)
    specPattern: "cypress/e2e/**/*.feature", // Tell Cypress to look for .feature files
  },
});
