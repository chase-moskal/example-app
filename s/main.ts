
console.log("🤖 hello")

import {html, render} from "lit"
import {exampleRemote} from "./api/example-remote.js"

void async function() {

	// lit demo
	const element = document.querySelector<HTMLDivElement>(".app")
	if (element) {
		const content = html`<p>(lit-rendered content)</p>`
		render(content, element)
	}

	// renraku api demo
	const {calculator} = exampleRemote("http://localhost:8000/")
	console.log("sum of 2 + 3 =", await calculator.sum(2, 3))

}()
