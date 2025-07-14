const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
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

      return config;
    },
    defaultCommandTimeout: 60000, // 60 seconds (adjust as needed)
    // ...other config...
  },
});
