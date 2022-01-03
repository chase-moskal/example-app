
import {html, render} from "lit"

console.log("🤖 hello")

const element = document.querySelector<HTMLDivElement>(".app")
const content = html`
	<p>(lit-rendered content)</p>
`

render(content, element!)
