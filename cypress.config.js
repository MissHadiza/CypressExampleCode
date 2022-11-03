const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
        "chromeWebSecurity": false,
        "watchForFileChanges": false,
        "viewportHeight": 960,
        "viewportWidth": 1536,
        "defaultCommandTimeout": 30000,
        "pageLoadTimeout": 100000,
        "projectId": "storefront3.0",
        "env": {
          "countryselectUrl": "https://qa.betastore.app/",
          "storefronttestUrl": "https://test.storefront.simplemarket.app/"
        },
      
    },
});
