
import {noop as html} from "../../toolbox/template-noop.js"
export default ({subtitle}: {subtitle: string}) => html`

<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<meta name="darkreader" content="dark"/>
<title>
	example-app
	${subtitle?
		"- " + subtitle:
		""}
</title>
<link rel="stylesheet" href="/style.css"/>

`
