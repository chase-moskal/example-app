
import {html, render} from "lit"

console.log("🤖 hello")

const element = document.body
const content = html`
	<p>lit-rendered content</p>
`

render(content, element)
