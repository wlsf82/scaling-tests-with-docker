module.exports.config = require("../createProtractorConfig")({
  capabilities: {
    browserName: "firefox",
    "moz:firefoxOptions": {
      args: ["--headless"]
    }
  }
});
