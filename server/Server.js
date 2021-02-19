import express from 'express'
import createError from 'http-errors'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import sys from './sys.js'
import Entree from './db/Entree/Entree.js'

// import apiRouter from './routes/apiRouter.js'

let instance = null

class Server {
  constructor () {
    if (!instance) { instance = this }

    this.createApp()
    this.setupAppOptions()
    this.setupAppRoutes()
    this.setupAppErrors()
    return instance
  }

  createApp = () => {
    this.app = express()
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(cookieParser())
    this.app.use(express.static(path.join(process.cwd(), '/build')))
    this.app.use(bodyParser.json())
    // this.app.use(session({
    //   secret: sys.sessionSecret,
    //   resave: true,
    //   saveUninitialized: true
    // }))
  }

  setupAppErrors = () => {
    this.app.use((request, response, next) => {
      next(createError(404))
    })

    this.app.use((error, request, response, next) => {
      response.locals.message = error.message
      response.locals.error = request.app.get('env') === 'development' ? error : {}

      response.status(error.status || 500)
      response.send('error')
    })
  }

  setupAppRoutes = () => {
    // this.app.use('/api', apiRouter)
    this.app.use('/', (request, response, next) => {

      try {
        const entree = new Entree()
        //entree.getAllEntreeCollection()
        entree.test()
        entree.saveEntree()
      } catch (err) {
        console.log(err)
      }


      response.sendFile(path.join(process.cwd(), './build/index.html'))
    })
  }

  setupAppOptions = () => {
    this.app.use((request, response, next) => {
      response.header('Access-Control-Allow-Origin', request.headers.origin || '*')
      response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,HEAD,DELETE,OPTIONS')
      response.header('Access-Control-Allow-Headers', 'Content-Type,x-requested-with')
      next()
    })
  }
}

export default Server