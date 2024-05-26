module.exports = function override(config, env) {
  config.resolve.alias["react-dom/server"] = "react-dom/server.js";
  return config;
};
