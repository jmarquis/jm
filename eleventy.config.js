const sass = require("sass")

module.exports = function(config) {
  config.addPassthroughCopy("static")
  config.addPassthroughCopy({
    "node_modules/normalize.css/normalize.css": "static/normalize.css"
  })

  config.addTemplateFormats("scss")
  config.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function(inputContent) {
      const result = sass.compileString(inputContent)
      return async (data) => {
        return result.css
      }
    }
  })

  config.addFilter("title", (title) => {
    return title === "Jeremy Marquis" ? title : `${title} — Jeremy Marquis`
  })

  return {
    dir: {
      layouts: "layouts",
      includes: "includes",
      data: "data"
    }
  }
}
