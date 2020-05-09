const toTailwind = require("@theme-ui/tailwind")
const theme = require("./src/gatsby-plugin-theme-ui/index.js") // Path to Theme UI config
module.exports = toTailwind(theme)
