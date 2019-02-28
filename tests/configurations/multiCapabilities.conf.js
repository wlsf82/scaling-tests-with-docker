module.exports.config = require("../createProtractorConfig")({
  multiCapabilities: [
    {
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: ["--headless"]
      }
    },
    {
      browserName: "chrome",
      chromeOptions: {
        args: ["--headless"]
      }
    }
  ]
});
