const sass = require("sass")
const markdownIt = require("markdown-it")
const mila = require("markdown-it-link-attributes")

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

  let mdLib = markdownIt({
    html: true,
    typographer: true
  })

  config.amendLibrary("md", (mdLib) =>
    mdLib.use(mila, {
      matcher(href) {
        return href.match(/^https?:\/\//)
      },
      attrs: {
        target: "_blank",
        rel: "noopener"
      }
    })
  )

  config.setLibrary("md", mdLib)

  return {
    dir: {
      layouts: "layouts",
      includes: "includes",
      data: "data"
    }
  }
}
