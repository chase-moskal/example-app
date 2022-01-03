
import {BuildOptions} from "../types.js"
import {noop as css} from "../../toolbox/template-noop.js"
export default (options: BuildOptions) => css`

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	font-size: 21px;
	background: #222;
	color: #aaa;
	padding: 10%;
}

body > * + * {
	margin-top: 1em;
}

`
