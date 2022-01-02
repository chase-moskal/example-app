
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
	<style>
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
		html {
			background: #222;
			color: #aaa;
			padding: 10%;
		}
	</style>

	${options.development?
		html`
			<script type="importmap-shim" src="/importmap.json"></script>
			<script type="module-shim" src="/main.js"></script>
			<script src="/node_modules/es-module-shims/dist/es-module-shims.js"></script>
		`:
		html`
			<script defer type=module src="/main.bundle.min.js"></script>
		`}
</head>
<body>
	<h1>example-app</h1>
	<div class=app></div>
</body>
</html>

`
