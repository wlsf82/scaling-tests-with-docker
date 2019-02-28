module.exports = providedConfig => {
  const defaultConfig = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: ["../specs/*.spec.js"]
  };

  return Object.assign({}, defaultConfig, providedConfig);
};
