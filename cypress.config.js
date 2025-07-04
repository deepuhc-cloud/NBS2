const { defineConfig } = require("cypress");

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
    },
  },
});
