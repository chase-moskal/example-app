
import {BuildOptions} from "../types.js"
import xiomeLoading from "../partials/xiome-loading.js"
import {noop as html} from "../../toolbox/template-noop.js"
import scriptLoading from "../partials/script-loading.js"
import standardHeadParts from "../partials/standard-head-parts.js"
import navigation from "../partials/navigation.js"
export default (options: BuildOptions) => html`

<!doctype html>
<html>
<head>
	${standardHeadParts({subtitle: ""})}
	${scriptLoading(options)}
	${xiomeLoading()}
</head>
<body>
	<h1>example-app</h1>
	${navigation()}
	<div class=app></div>
	<xiome-login-panel show-logout>
		<xiome-my-account></xiome-my-account>
	</xiome-login-panel>
</body>
</html>

`
