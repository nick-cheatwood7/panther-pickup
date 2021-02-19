import http from 'http'
import SYS from './sys.js'
import Server from './Server.js'
// import DB from '../db/DB.js'
import Entree from './db/Entree/Entree.js'

const main = () => {

  const port = normalizePort(process.env.PORT || '5005')
  const webService = createServer()
  const entree = new Entree()
  entree.test()
  entree.saveEntree()

  webService.listen(port, () => {
    console.log(`Server is listening on ${port}`)
  })
}

const createServer = () => {
  const server = new Server()
  return http.createServer(server.app)
}

const normalizePort = portString => {
  const port = parseInt(portString, 10)

  if (isNaN(port)) return portString
  else if (port >= 0 ) return port
  else return 0
}

main()

export { main, createServer, normalizePort }