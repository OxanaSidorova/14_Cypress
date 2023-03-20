const { defineConfig } = require("cypress");

// module.exports = {
//   projectId: "1j7ygf",
//   // The rest of the Cypress config options go here...
// }

module.exports = defineConfig({
  projectId: '1j7ygf', 
  e2e: {
    baseUrl: 'https://santa-secret.ru/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})

