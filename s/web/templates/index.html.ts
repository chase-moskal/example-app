
import {BuildOptions} from "../types.js"
import {noop as html} from "../../toolbox/template-noop.js"
export default (options: BuildOptions) => html`

<!doctype html>
<html>
<head>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width,initial-scale=1"/>
	<meta name="darkreader" content="dark"/>
	<title>example-app</title>
	<link rel="stylesheet" href="/style.css"/>

	${options.development?
		html`
			<script type="importmap-shim" src="/importmap.json"></script>
			<script type="module-shim" src="/main.js"></script>
			<script src="/node_modules/es-module-shims/dist/es-module-shims.js"></script>
		`:
		html`
			<script defer type=module src="/main.bundle.min.js"></script>
		`}

		<xiome-config
			app="adf640608628925decea068edb2f89cb92d6bfd1c38f0bb586b567ae1ec8bdc2"
			api="https://api.stage.xiome.io"
			platform="https://stage.xiome.io"
		></xiome-config>
		<script defer src="https://stage.xiome.io/xiome.bundle.min.js"></script>
</head>
<body>
	<h1>example-app</h1>
	<div class=app></div>
	<xiome-login-panel show-logout>
		<xiome-my-account></xiome-my-account>
	</xiome-login-panel>
</body>
</html>

`
