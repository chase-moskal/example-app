
import {writeFile} from "fs/promises"

export function prepareBuilder(prefix: string) {
	return async function build(path: string, content: string) {
		await writeFile(prefix + path, content.trim())
	}
}
