const { injectBabelPlugin } = require("react-app-rewired");

module.exports = function override(config, env) {
  console.log(`injecting...`);
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
    config
  );
  return config;
};
