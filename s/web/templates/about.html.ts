
import {BuildOptions} from "../types.js"
import navigation from "../partials/navigation.js"
import xiomeLoading from "../partials/xiome-loading.js"
import scriptLoading from "../partials/script-loading.js"
import {noop as html} from "../../toolbox/template-noop.js"
import standardHeadParts from "../partials/standard-head-parts.js"
export default (options: BuildOptions) => html`

<!doctype html>
<html>
<head>
	${standardHeadParts({subtitle: "about"})}
	${scriptLoading(options)}
	${xiomeLoading()}
</head>
<body>
	<h1>example-app: about page</h1>
	${navigation()}
	<xiome-login-panel show-logout>
		<xiome-questions></xiome-questions>
	</xiome-login-panel>
</body>
</html>

`
