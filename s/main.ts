
import {html, render} from "lit"
import {exampleRemote} from "./api/example-remote.js"

console.log("🤖 hello")

const element = document.querySelector<HTMLDivElement>(".app")
const content = html`
	<p>(lit-rendered content)</p>
`

render(content, element!)

const {calculator} = exampleRemote("http://localhost:8000/")

console.log("sum of 2 + 3 =", await calculator.sum(2, 3))
