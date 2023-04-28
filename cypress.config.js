const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    Infinitescroll_URL: 'http://the-internet.herokuapp.com/infinite_scroll',
    DrapDrope_URL : "http://the-internet.herokuapp.com/drag_and_drop"

  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});
