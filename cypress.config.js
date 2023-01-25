const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      require('cypress-localstorage-commands/plugin')(on, config);
      config.baseUrl=null;
      return config;
    },
  },
  env : {
    foo: 'bar',
    baz: 'quack'
  }
});
