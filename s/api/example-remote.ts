
import * as renraku from "renraku"
import type {exampleApi} from "./example-api.js"

export function exampleRemote(url: string) {
	const remote = renraku.browserClient<typeof exampleApi>({
		url,
		metaMap: {
			calculator: async() => {},
		},
	})
	return remote
}
