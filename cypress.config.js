const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://petgram-server-aecs-anibal-corral.vercel.app/graphql',
    chromeWebSecurity: false,
    viewportWidth: 500,
    viewportHeight: 800,
    setupNodeEvents (on, config) {
      // implement node event listeners here
    }
  }
})
