const { config } = require("@swc/core/spack");

module.exports = config({
  entry: {
    node: __dirname + "/src/index.ts"
  },
  output: {
    path: __dirname + "/lib",
    name: "canvas-helper.node.js"
  },
  mode: "production",
});
