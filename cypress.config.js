const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7q8bgj',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
