const path = require("path");

const rootFolder = path.resolve(__dirname, "..");
const sourceFolder = path.resolve(rootFolder, "src");
const sourceServiceWorkers = path.resolve(rootFolder, "serviceWorkers");

module.exports = {
  rootFolder,
  sourceFolder,
  sourceServiceWorkers
};
