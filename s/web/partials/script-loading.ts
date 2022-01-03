
import {noop as html} from "../../toolbox/template-noop.js"
export default ({development}: {development: boolean}) => development?
	html`
		<script type="importmap-shim" src="/importmap.json"></script>
		<script type="module-shim" src="/main.js"></script>
		<script src="/node_modules/es-module-shims/dist/es-module-shims.js"></script>
	`:
	html`
		<script defer type=module src="/main.bundle.min.js"></script>
	`
