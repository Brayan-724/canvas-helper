const { config } = require("@swc/core/spack");

module.exports = config({
  entry: {
    web: __dirname + "/lib/canvas-helper.node.js"
  },
  output: {
    path: __dirname + "/lib",
    name: "canvas-helper.web.js"
  },
  mode: "production",
  options: {
    jsc: {
      "target": "es3",
      "parser": {
        "syntax": "ecmascript",
      },
      "transform": {
        "constModules": {
        }
      },
      "keepClassNames": true,
    },
    module: {
      type: "commonjs",
      "strict": true,
      "strictMode": true,
      "noInterop": false,
      "lazy": false
    },
    //"swcrc": __dirname + "/.swcrc"
  }
});
