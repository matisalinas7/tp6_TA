const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ezx5w7",
  e2e: {
    baseUrl: "https://thinking-tester-contact-list.herokuapp.com",
    viewportWidth: 1280,
    viewportHeight: 800,
    video: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});

