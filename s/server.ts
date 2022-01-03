
import * as renraku from "renraku"
import {nodeServer} from "renraku/x/http/node-server.js"
import {deathWithDignity} from "renraku/x/tools/death-with-dignity.js"
import {exampleApi} from "./api/example-api.js"

const {onDeath} = deathWithDignity()
const server = nodeServer({
	api: exampleApi,
	exposeErrors: true,
	maxPayloadSize: renraku.megabytes(10),
})

const port = 8000
server.listen(port)
onDeath(() => server.close())

console.log(`🚀 api server listening on port ${port}`)
