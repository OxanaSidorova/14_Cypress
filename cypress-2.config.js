const { defineConfig } = require("cypress");

// module.exports = {
//   projectId: "1j7ygf",
//   // The rest of the Cypress config options go here...
// }

module.exports = defineConfig({
  projectId: '1j7ygf', 
  e2e: {
    baseUrl: 'https://staging.lpitko.ru',
    watchForFileChanges:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
