
import {BuildOptions} from "./types.js"
import styleCss from "./templates/style.css.js"
import indexHtml from "./templates/index.html.js"
import {prepareBuilder} from "../toolbox/prepare-builder.js"

const options: BuildOptions = {
	development: process.argv.includes("development")
}

const build = prepareBuilder("./x/")
await build("index.html", indexHtml(options))
await build("style.css", styleCss(options))
