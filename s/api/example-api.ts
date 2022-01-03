
import * as renraku from "renraku"

export const exampleApi = renraku.api({
	calculator: renraku.service()
		.policy(async() => {})
		.expose(() => ({

			async sum(a: number, b: number) {
				return a + b
			},
		})),
})
