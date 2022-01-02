
import {BuildOptions} from "./types.js"
import indexHtml from "./templates/index.html.js"
import {prepareBuilder} from "../toolbox/prepare-builder.js"

const options: BuildOptions = {
	development: process.argv.includes("development")
}

const build = prepareBuilder("./x/")
await build("index.html", indexHtml(options))
