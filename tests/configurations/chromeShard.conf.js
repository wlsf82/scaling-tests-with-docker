module.exports.config = require("../createProtractorConfig")({
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless"]
    },
    shardTestFiles: true,
    maxInstances: 2
  }
});
